import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../../styles/chat/ChatSidebar.css';
import SearchIcon from '@material-ui/icons/Search'
import ChatSideContactRow from '../../components/chat/ChatSideContactRow'
import { clearSearch, searchUsers } from '../../Redux/actions/chatActions'

const ChatSidebar = ({ clearSearch, show_search_data, searched_users, searchUsers }) => {
    const [ query, setQuery ] = useState('')

    const handleInputChange = (e) => {
        setQuery(e.target.value)
        
        if (e.target.value.length > 0) {
            searchUsers(e.target.value)
        }else{
            clearSearch()
        }
    }

    return ( 
        <div className="chatSidebar">
            <div className="search__wrap">
                <SearchIcon />
                <input value={query} className="search_contact" placeholder="@captain-poldark" onChange={handleInputChange} />
            </div>
            { show_search_data &&
                <div className="search__dialog" onBlur={()=>console.log('blur')} onFocus={() => console.log('focus')}>
                    {searched_users?.map((user) => 
                        <div key={user?.id} className="search-item">@ {user?.username}</div>
                    )}
                </div>
            }
            
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
 
function mapStateToProps(store) {
    return {
        show_search_data: store.chat.show_search_data,
        searched_users: store.chat.searched_users
    }
}

export default connect(mapStateToProps, { clearSearch, searchUsers })(ChatSidebar)