import logo from "../assets/logo.png"

function Navbar() {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center mt-5 pb-2 border-b-1 border-gray-300">
                <div className="flex items-center justify-between w-full gap-3">
                    <div className="flex items-center gap-2 ">
                        <img alt='icon' />
                        <img alt='icon' />
                        <img alt='icon' />
                        <img alt='icon' />
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
                <div className="text-amber-600">HOME</div>
                 <div className="h-1.5 w-1.5 bg-amber-600 rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                <div className="text-white">ABOUT</div>
                 <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                <div className="text-white">MENU</div>
                 <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                <div className="text-white">OFFERS</div>
                 <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                <div className="text-white">SHOP</div>
                 <div className="h-1.5 w-1.5 bg-white rounded-sm"></div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
