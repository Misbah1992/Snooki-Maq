import image2 from "../assets/image2.png"
import Figure1 from "../assets/Figure1.png"
import Figure2 from "../assets/Figure2.png"
import image9 from "../assets/image9.png"



function About() {
    return (

        <div className=' bg-black w-full h-[80vh] flex items-center justify-center'>
            <div className="h-[80%] w-[40%]">

                <img className="z-10" alt='image' src={image9} />
            </div>
            <div  dir="rtl" className="h-[80%] w-[40%] flex flex-col justify-center  gap-10 pl-24">
               
                <div className="xl:text-4xl lg:text-2xl font-bold text-white">DRINKS, BURGERS, AND ONLY
                    THE BEST VAPE</div>
                <div className="text-white text-md">Grab an ice-cold drink, sink your teeth into juicy burgers, and elevate your vibe with premium vape products. We’ve got your cravings covered—all in one place. Taste, refresh, and relax with the ultimate combo of flavor and chill.
                    It’s your go-to stop for bites, sips, and smooth hits.</div>
                    <div className=" bg-amber-600 w-2/5 py-3 px-2 text-center text-white rounded-sm cursor-pointer">READ MORE</div>
                
            </div>

        </div>

    )
}

export default About
