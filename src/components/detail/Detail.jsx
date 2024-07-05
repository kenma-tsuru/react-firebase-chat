import "./detail.css"

export default function Detail() {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Champ Panchawat</h2>
                <p>Hello penis</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://m.media-amazon.com/images/I/81unlxs7SEL._SL1500_.jpg" alt="" />
                                <span>photo_2024.jpg</span>
                            </div>
                            <img src="./download.png" alt=""
                                className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://m.media-amazon.com/images/I/81unlxs7SEL._SL1500_.jpg" alt="" />
                                <span>photo_2024.jpg</span>
                            </div>
                            <img src="./download.png" alt=""
                                className="icon" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Log out</button>
            </div>
        </div>
    )

}