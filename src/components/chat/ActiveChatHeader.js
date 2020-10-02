import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import '../../styles/chat/ActiveChatHeader.css';


const ActiveChatHead = () => {
    return ( 
        <div className="chatHead">
            <SwapHorizIcon />
            <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_E0QeWyWCVvgqWJYxehJcs7uyerWLjHjy_uppw=s32-c-mo" />   
        </div> 
        
    );
}
 
export default ActiveChatHead;