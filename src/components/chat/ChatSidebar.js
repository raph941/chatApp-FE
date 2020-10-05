import React, { useState, useEffect } from 'react';
import '../../styles/chat/ChatSidebar.css';
import SearchIcon from '@material-ui/icons/Search'
import ChatSideContactRow from '../../components/chat/ChatSideContactRow'

const ChatSidebar = () => {
    const [ userSearchRes, setUserSearchRes ] = useState({})


    return ( 
        <div className="chatSidebar">
            <div className="search__wrap">
                <SearchIcon />
                <input className="search_contact" placeholder="captain-poldark " />
            </div>
            
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            <ChatSideContactRow />
            
        </div>
     );
}
 
export default ChatSidebar;