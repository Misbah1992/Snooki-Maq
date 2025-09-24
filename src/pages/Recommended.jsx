import HeadingImage5 from "../assets/HeadingImage5.png"
import HeadingImage6 from "../assets/HeadingImage6.png"
import HeadingImage7 from "../assets/HeadingImage7.png"
import HeadingImage8 from "../assets/HeadingImage8.png"
import image22 from "../assets/image22.png"
import image23 from "../assets/image23.png"
import image24 from "../assets/image24.png"



function Recommended() {
  return (
    <div className="bg-black py-24">
        <div className="flex flex-col items-center gap-4">
      <div className="text-white text-4xl font-bold">RECOMMENDED TODAY</div>
      <div><img alt='heading' src={HeadingImage5}/></div>
      </div>
      <div className="flex justify-evenly mt-16">
        <div className="flex flex-col items-center">
            <img alt="image" src={image22}/>
            <div className="text-white text-xl font-semibold py-4">HOP & ROLL BEER</div>
             <img alt="image" src={HeadingImage6}/>
        </div>
         <div className="flex flex-col items-center">
            <img alt="image" src={image23}/>
            <div className="text-white text-xl font-semibold py-4">NEW BRANDED BEER</div>
             <img alt="image" src={HeadingImage7}/>
        </div>
        <div className="flex flex-col items-center">
            <img alt="image" src={image24}/>
            <div className="text-white text-xl font-semibold py-4">IPA BEER</div>
             <img alt="image" src={HeadingImage8}/>
        </div>
      </div>
    </div>
  )
}

export default Recommended
