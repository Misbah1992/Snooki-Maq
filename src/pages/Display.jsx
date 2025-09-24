import image19 from "../assets/image19.png"
import image20 from "../assets/image20.png"
import image21 from "../assets/image21.png"

function Display() {
    return (
        <div className="flex">
            <div>
                <img alt="image" src={image19} />
            </div>
             <div>
                <img alt="image" src={image20} />
            </div>
             <div>
                <img alt="image" src={image21} />
            </div>
        </div>
    )
}

export default Display
