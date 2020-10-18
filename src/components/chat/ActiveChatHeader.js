import React from 'react';
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import '../../styles/chat/ActiveChatHeader.css';
import { setActiveChat } from '../../Redux/actions/chatActions'


const ActiveChatHead = ({ activeConvPartner, setActiveChat }) => {
    return ( 
        <div className="chatHead">
            <span className="icon__wrap" onClick={() => setActiveChat(false)}><SwapHorizIcon /></span>
            <Avatar > { activeConvPartner?.initials } </Avatar>   
            <h5 className="chatHead__username">{ activeConvPartner?.username }</h5>
        </div> 
    );
}
 

function mapStateToProps(store) {
    return {
        activeConvPartner: store.chat.active_conv_partner,
    }
}

export default connect(mapStateToProps, { setActiveChat })(ActiveChatHead)