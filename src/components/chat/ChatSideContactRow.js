import React from 'react';
import '../../styles/chat/ChatSideContactRow.css'
import Avatar from '@material-ui/core/Avatar'


const ChatSideContactRow = () => {
    return ( 
        <div className='Contact__row'>
            <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_E0QeWyWCVvgqWJYxehJcs7uyerWLjHjy_uppw=s32-c-mo" />   
            <span className="contact__row-text">
                <h4>Raphael Ehindero</h4>
                <p>Hey bro wassup</p>
            </span>
            <span className="contact__row-indicators">
                <p>Mon</p>
                <p className="badge">1</p>
            </span>
        </div>
     );
}
 
export default ChatSideContactRow;