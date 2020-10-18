import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../../styles/chat/ChatArea.css';
import ChatMain from './ChatMain';
import ChatSidebar from './ChatSidebar';
import { setActiveChat } from '../../Redux/actions/chatActions'
import { connectToSocketAction, sendNewMessageAction } from '../../Redux/actions/chatSocketActions'


const ChatArea = ({ isActiveChat, connectToSocketAction }) => {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ openMain, setOpenMain ] = useState(true)
    const [ openSide, setOpenSide ] = useState(true)

    useEffect(() => {
        connectToSocketAction()
    })


    window.addEventListener("resize", function(){
        setWidth(window.innerWidth)
    });

    useEffect(() => {
        if (width > 768){
            setOpenMain(true)
            setOpenSide(true)
        }else {
            if(isActiveChat){                                
                setOpenSide(false)
                setOpenMain(true)
            }
            else{
                setOpenMain(false)
                setOpenSide(true)
            }
        }
    }, [width, isActiveChat])

    return ( 
        <div className="chatArea">
            { openSide && <ChatSidebar className="chatArea__main" />}
            { openMain && <ChatMain className="chatArea__sidebar"/> }
        </div>
     );
}
 

function mapStateToProps(store) {
    return {
        user: store.auth.user,
        isActiveChat: store.chat.is_active_conversation
    }
}

export default connect(mapStateToProps, { setActiveChat, connectToSocketAction, sendNewMessageAction })(ChatArea)
