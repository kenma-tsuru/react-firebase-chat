import "./userInfo.css"
export default function UserInfo(){
    return (
        <div className="userInfo">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Panchawat Buranathamrong</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt="more" />
                <img src="./video.png" alt="more" />
                <img src="./edit.png" alt="more" />
            </div>
        </div>
    )

}