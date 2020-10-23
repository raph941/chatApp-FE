import { addNewMessage, addNoneActiveNewMessage } from '../Redux/actions/chatActions'
import store from '../Redux/store'
import { SOCKET_PATH } from '../axios/axios'
// const token = Cookies.get('token')


class WebSocketService {
  static instance = null;
  callbacks = {};
  timeout = 250;

  static getInstance() {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  constructor() {
    this.socketRef = null;
  }

  connect() {
    this.socketRef = new WebSocket(SOCKET_PATH);
    let connectInterval;
    
    this.socketRef.onopen = () => {
      const user = store.getState().auth.user
      // this would create a chat layer with all the conversation partners, 
      // so that the user can recieve messages from all partners in real time
      let data = {
        type: "INITIAL_SETUP",
        payload: user.id
      }
      this.send(data)
      console.log('CONNECTION SUCCESSFUL');
    };

    this.socketRef.onmessage = e => {
        console.log(e)
        const data = JSON.parse(e.data)
        let currentUser = store.getState().auth.user
        const activeConvPartner = store.getState().chat.active_conv_partner

        if ( currentUser.username === data.sender.username){
          store.dispatch(addNewMessage([data]))
        }
        else {
          if (data.sender.username === activeConvPartner.username){
            store.dispatch(addNewMessage([data]))
          }
          else{
            store.dispatch(addNoneActiveNewMessage(data))
          }
        }
    };

    this.socketRef.onerror = e => {
      console.log(e);
    };

    this.socketRef.onclose = () => {
      console.log(
          `Socket is closed. Reconnect will be attempted in ${Math.min(
              10000 / 1000,
              (this.timeout + this.timeout) / 1000
          )} second.`
      );

      this.timeout = this.timeout + this.timeout; //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, this.timeout)); //call check function after timeout
    };

  }

  check = () => {
    let ws = this.socketRef
    if (!ws || ws.readyState === WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
  };

  state() {
    return this.socketRef.readyState;
  }

  send(data) {
    let inst = this.socketRef
    this.waitForConnection(function () {
      try {
          inst.send(JSON.stringify({ ...data }));
          console.log('message sent')
        }
      catch(err) {
          console.log(err.message);
        } 
    }, 5000);
  };

  waitForConnection(callback, interval) {
    if (this.socketRef.readyState=== 1) {
        callback();
    } else {
        var that = this;
        // optional: implement backoff for interval here
        setTimeout(function () {
          console.log('waiting')
            that.waitForConnection(callback, interval);
        }, interval);
    }
};


}

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;