import React, { useState } from 'react';
import '../../styles/chat/ChatMain.css';
import SendIcon from '@material-ui/icons/Send'
import ChatMessage from './ChatMessage'
import ActiveChatHeader from './ActiveChatHeader'

const ChatMain = () => {
    const [ activeChat, setActiveChat ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    return ( 
        <div className="chatMain">
            { activeChat &&
             <div>
                <ActiveChatHeader />
              </div> 
            }
            
            <div className="chatmain__chat">
                { activeChat 
                    ?  <>
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                       </>
                    :
                        <p className="no_active_chat_msg">Click on a conversation, to start a chat now</p>
                }
            </div>

            <div  className="chatmain__input">
                <div className="input_wrapper">
                    <input className="chat__input" />
                    <button className="chat_submit_btn">
                        <SendIcon />
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default ChatMain;