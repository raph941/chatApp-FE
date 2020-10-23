import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../../styles/chat/ChatSidebar.css';
import SearchIcon from '@material-ui/icons/Search'
import ChatSideContactRow from '../../components/chat/ChatSideContactRow'
import { clearSearch, searchUsers, fetchMyConversationPartners, clickSearchedUser } from '../../Redux/actions/chatActions'
import Avatar from '@material-ui/core/Avatar'

const ChatSidebar = ({ clearSearch, show_search_data, searched_users, searchUsers, fetchMyConversationPartners, conversation_partners, clickSearchedUser }) => {
    const [ query, setQuery ] = useState('')

    const handleInputChange = (e) => {
        setQuery(e.target.value)
        
        if (e.target.value.length > 0) {
            searchUsers(e.target.value)
        }else{
            clearSearch()
        }
    }

    const handleSearchClick = (user) => {
        clickSearchedUser(user)
        clearSearch()
    }

    useEffect(() =>  {
        fetchMyConversationPartners()
    }, [])

    return ( 
        <div className="chatSidebar">
            <div className="search__wrap">
                <SearchIcon />
                <input value={query} className="search_contact" placeholder="username" onChange={handleInputChange} />
            </div>
            { show_search_data &&
                <div className="search__dialog" onBlur={()=>console.log('blur')} onFocus={() => console.log('focus')}>
                    { searched_users.length > 0 
                    ?
                        searched_users?.map((user) => 
                            <div key={user?.id} className="search-item" onClick={() => handleSearchClick(user)} >
                                <Avatar > { user.initials } </Avatar >   
                                <span className="search__username" >{user?.username}</span>
                            </div>
                        )
                    :
                        <h5 className="no-result">No result for your query</h5>
                    }
                </div>
            }
            
            { conversation_partners?.map((partner) => (
                <ChatSideContactRow key={partner?.id} id={partner?.id} username={partner?.username} initials={partner?.initials} lastmsg_content={partner?.lastmsg} lastmsg_day="Tue" unraed_count={partner?.unread_count} sent_at={partner?.lastmsg_date} />
            ))}
            
        </div>
     );
}
 
function mapStateToProps(store) {
    return {
        show_search_data: store.chat.show_search_data,
        searched_users: store.chat.searched_users,
        conversation_partners: store.chat.conversation_partners
    }
}

export default connect(mapStateToProps, { clearSearch, searchUsers, fetchMyConversationPartners, clickSearchedUser })(ChatSidebar)