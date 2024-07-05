import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

export default function Chat(){
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: "smooth"})
    }, [])

    const handleEmoji = (e) => {
        setText(p => p + e.emoji);
        setOpen(false);
    }
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Phattharaphon Khammun</span>
                        <p>Hello from the past</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
            </div>
                
                </div>
            <div className="center">
                <div className="message own">
                    <div className="texts">
                        <img src="https://m.media-amazon.com/images/I/81unlxs7SEL._SL1500_.jpg" alt=""/>
                        <p>sample message</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>sample message</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>sample message</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>sample message</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input 
                type="text" 
                placeholder="Type a message..." 
                onClick = {e => setText(e.target.value)}
                value={text}
                />
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={() => setOpen(open => !open)}/>
                    <div className="picker">
                        <EmojiPicker 
                        open={open} 
                        onEmojiClick={handleEmoji}/>
                    </div>
                    
                </div>
                <button className="sendButton">Send</button>
            </div>

        </div>
    )

}