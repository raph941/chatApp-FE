import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../../styles/chat/ChatMain.css';
import SendIcon from '@material-ui/icons/Send'
import ChatMessage from './ChatMessage'
import ActiveChatHeader from './ActiveChatHeader'
import { sendNewMessageAction } from '../../Redux/actions/chatSocketActions'
import { useFormik } from 'formik';
import { chatInputvalidate } from '../../utils/formValidation'
import ScrollToBottom from 'react-scroll-to-bottom';


const ChatMain = ({ isActiveConv, activeConvs, sendNewMessageAction, user, partner }) => {

    const formik = useFormik({
        initialValues: {
          message: '',
        },
        validate: chatInputvalidate,

        onSubmit: (values, {resetForm}) => {
            let data = {
                ...values,
                uid1: user.id,
                uid2: partner.id
            }
            resetForm()
            sendNewMessageAction(data)

        },
    });

    return ( 
        <div className="chatMain">
            { isActiveConv &&
             <div>
                <ActiveChatHeader />
              </div> 
            }
            
            <ScrollToBottom className="chatmain__chat" >
                { isActiveConv 
                    ?  <>
                        {activeConvs.map((message) => (
                            <ChatMessage key={message?.id} sent_at={message?.sent_at} read_at={message?.read_at} msg_content={message?.content} sender_username={message?.sender?.username} sender_image_url={message?.sender?.image_url}  />
                        ))}
                        
                       </>
                    :
                        <p className="no_active_chat_msg">Click on a conversation, to start a chat now</p>
                }
            </ScrollToBottom >
            { isActiveConv ?
            <form onSubmit={formik.handleSubmit} className="chatmain__input">
                <div className="input_wrapper">
                    <input 
                        type="text" 
                        name="message" 
                        className="chat__input"
                        onChange={formik.handleChange} 
                        value={formik.values.message}
                        />
                    <button type="submit" className="chat_submit_btn">
                        <SendIcon />
                    </button>
                </div>
            </form>
            : undefined }
        </div>
     );
}
 
function mapStateToProps(store) {
    return {
        isActiveConv: store.chat.is_active_conversation,
        activeConvs: store.chat.active_conversation,
        user: store.auth.user,
        partner: store.chat.active_conv_partner,
    }
}

export default connect(mapStateToProps, { sendNewMessageAction })(ChatMain)