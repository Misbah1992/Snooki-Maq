import bgImage1 from "../assets/bgImage1.png"
import HeadingImage1 from "../assets/HeadingImage1.png"
import HeadingImage2 from "../assets/HeadingImage2.png"
import HeadingImage3 from "../assets/HeadingImage3.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import image7 from "../assets/image7.png"
import image8 from "../assets/image8.png"


function Info() {
    return (
        <div className="flex items-center justify-center">
            <div className="absolute flex justify-evenly w-full">
                <div className="flex flex-col items-center gap-4">
                    <img alt="image" src={image7} />
                    <img alt="image" src={HeadingImage3} />
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img alt="image" src={image3} />
                    <img alt="image" src={HeadingImage2} />
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img alt="image" src={image5} />
                    <img alt="image" src={HeadingImage1} />
                </div>
            </div>
            <img className="" alt="image" src={bgImage1} />
        </div>
    )
}

export default Info
