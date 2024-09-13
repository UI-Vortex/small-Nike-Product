import shoe from "../img/shoe_image.png"
import "./main.css"

export default function Main() {
    return (
        <div>
            <main>
                <div className="nike">
                    <div className="nike-text">
                        <h1 className="nike-title">YOUR FEET
                            DESERVE
                            THE BEST</h1>
                        <p className="nike-description">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                        <div className="nike-buttons">
                            <button className="nike-btn_1">Shop Now</button>
                            <button className="nike-btn_2">Category</button>
                        </div>
                    </div>
                    <div className="nike_image">
                        <img src={shoe} alt="error" />
                    </div>
                </div>
            </main>
        </div>
    )
}