import React, { useState } from 'react';
import { connect } from 'react-redux'
import '../../styles/chat/ChatMessage.css';
import Avatar from '@material-ui/core/Avatar'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import Moment from 'react-moment';
import 'moment-timezone';


const ChatMessage = ({ read_at, sent_at, msg_content, sender_username, sender_initials, user }) => {
    const [ float_direction ] = useState(() => (
        sender_username === user.username ? 'float__right' : 'float__left'
    ))

    return ( 
        <div className='chatMessage' id={float_direction}>
            <span className="chat_avatar_wrap">
                <Avatar > { sender_initials } </Avatar>
            </span>
            <div className="chat_text_wrap">
                <span className="chat__top">
                    <h5>{ sender_username }</h5>
                    <p><Moment fromNow ago>{ sent_at }</Moment></p>
                </span>
                <span className="chat__bottom">
                   <p> {msg_content} </p> 
                   {sender_username === user.username && read_at !== null &&
                        <DoneAllIcon />
                   }
                </span>
            </div>
        </div>
     );
}
 

function mapStateToProps(store) {
    return {
        user: store.auth.user,
    }
}

export default connect(mapStateToProps, {})(ChatMessage)