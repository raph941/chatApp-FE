import React, { useState, useEffect } from 'react';
import '../../styles/chat/ChatArea.css';
import ChatMain from './ChatMain';
import ChatSidebar from './ChatSidebar';


const ChatArea = () => {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ openMain, setOpenMain ] = useState(true)
    const [ openSide, setOpenSide ] = useState(true)
    const [ sideClicked, setSideClicked ] = useState(true)

    window.addEventListener("resize", function(){
        setWidth(window.innerWidth)
    });

    const handleContactClick = () => {
        setSideClicked(!sideClicked)
    }

    useEffect(() => {
        if (width > 768){
            setOpenMain(true)
            setOpenSide(true)
        }else {
            if(sideClicked){
                setOpenSide(false)
                setOpenMain(true)
            }
            else{
                setOpenMain(false)
                setOpenSide(true)
            }
        }
    }, [width, sideClicked])

    return ( 
        <div className="chatArea">
            { openSide && <ChatSidebar className="chatArea__main" />}
            { openMain && <ChatMain className="chatArea__sidebar"/> }
        </div>
     );
}
 
export default ChatArea
