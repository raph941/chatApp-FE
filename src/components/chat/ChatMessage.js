import React from 'react';
import '../../styles/chat/ChatMessage.css';
import Avatar from '@material-ui/core/Avatar'


const ChatMessage = () => {
    return ( 
        <div className="chatMessage">
            <span className="chat_avatar_wrap">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_E0QeWyWCVvgqWJYxehJcs7uyerWLjHjy_uppw=s32-c-mo" />   
            </span>
            <div>
                <span class="chat__top">
                    <h5>Harry Potter</h5>
                    <p>1:00am</p>
                </span>
                <span className="chat__bottom">
                   <p> I am on my way to raid the bank guarded by the goblins </p> 
                </span>
            </div>
        </div>
     );
}
 
export default ChatMessage