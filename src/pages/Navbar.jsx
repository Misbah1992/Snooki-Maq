import logo from "../assets/logo.png"
import { TiSocialTwitter } from "react-icons/ti";
import { FaVimeoV } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Navbar() {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center mt-5 pb-2 border-b-1 border-gray-300">
                <div className="flex items-center justify-between w-full gap-3">
                    <div className="flex items-center justify-between  w-[25%] gap-3 ">
                        <FaVimeoV style={{ color: "white", width: "1.8rem", height: "1.8rem" }} />
                        <TiSocialTwitter style={{ color: "white", width: "2rem", height: "2rem" }} />
                        <FaFacebookF style={{ color: "white", width: "1.5rem", height: "1.5rem" }} />
                        <FaInstagram style={{ color: "white", width: "1.5rem", height: "1.5rem" }} />

                    </div>
                    <div className="w-0.5 h-10 bg-gray-300"></div>
                    <div className="w-64"><img className="w-full" alt='logo' src={logo} /></div>
                    <div className="w-0.5 h-10 bg-gray-300"></div>
                    <div className="border-1 bg-amber-600 w-2/8 py-2 text-center text-white text-sm font-normal rounded-sm cursor-pointer">
                        ORDER NOW
                    </div>
                </div>

            </div>
            <div className="flex justify-evenly mt-4">
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-amber-600 rounded-sm"></div>
                    <div className="text-amber-600 cursor-pointer lg:text-md md:text-sm">HOME</div>
                    <div className="h-1.5 w-1.5 bg-amber-600 rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                    <div className="text-white cursor-pointer lg:text-md md:text-sm">ABOUT</div>
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                    <div className="text-white cursor-pointer lg:text-md md:text-sm">MENU</div>
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                    <div className="text-white cursor-pointer lg:text-md md:text-sm">OFFERS</div>
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                    <div className="text-white cursor-pointer lg:text-md md:text-sm">SHOP</div>
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
