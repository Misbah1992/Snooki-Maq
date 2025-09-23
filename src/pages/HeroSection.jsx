import img1 from "../assets/img1.png"
import logo2 from "../assets/logo2.png"
import Navbar from "./Navbar"


function HeroSection() {
    return (
        <div className="flex justify-center relative">
            <div className="absolute w-3/7"><Navbar /></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center flex flex-col">
                <img className="w-4/5 " alt="logo" src={logo2} />
                <div className="border-1 bg-amber-600 w-2/6 p-4 text-center text-white rounded-sm cursor-pointer">READ MORE</div>
            </div>
            <img alt="img" src={img1} className="h-screen w-screen" />
        </div>
    )
}

export default HeroSection
