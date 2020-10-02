import React, { useEffect, useState } from 'react';
import '../../styles/chat/ChatArea.css';
import ChatMain from './ChatMain';
import ChatSidebar from './ChatSidebar';
import { connect } from 'react-redux';
import { showConversation, showConversationList, conversationClicked } from '../../Redux/actions/chatAreaUiActions';


const ChatArea = ({ showConversation, showConversationList, conversationClicked }) => {
    const [width, setWidth] = useState(window.innerWidth)
    // const [ openSide, setOpenSide ] = useState(true)
    // const [ sideClicked, setSideClicked ] = useState(true)

    window.addEventListener("resize", function(){
        setWidth(window.innerWidth)
        console.log(showConversation(), showConversationList(), conversationClicked())
        if (window.innerWidth > 768){
            showConversation(true)
            showConversationList(true)
        }else {
            if(conversationClicked){
                showConversation(true)
                showConversationList(false)
            }
            else{
                showConversation(false)
                showConversationList(true)
            }
        }
    });

    // const handleContactClick = () => {
    //     setSideClicked(!sideClicked)
    // }

    useEffect(() => {
        if (width > 768){
            showConversation(true)
            showConversationList(true)
        }else {
            if(conversationClicked){
                showConversation(true)
                showConversationList(false)
            }
            else{
                showConversation(false)
                showConversationList(true)
            }
        }
    }, [])

    return ( 
        <div className="chatArea">
            { showConversation && <ChatSidebar className="chatArea__main" />}
            { showConversationList && <ChatMain className="chatArea__sidebar"/> }
        </div>
     );
}

// const mapStateToProps = state => {
//     return {
//         screenWidth: state.screenWidth.width
//     }
// }
 
export default connect(null, { showConversation, showConversationList, conversationClicked })( ChatArea )
