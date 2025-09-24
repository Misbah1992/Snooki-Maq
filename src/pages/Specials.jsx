import image18 from "../assets/image18.png"
import HeadingImage9 from "../assets/HeadingImage9.png"
import bgImage2 from "../assets/bgImage2.png"

function Specials() {
  return (
    <div className="relative w-full h-screen">
      
       <div className="relative z-10 flex flex-col items-center h-full text-white">
        <div className="text-4xl font-bold mb-4">RECOMMENDED TODAY</div>
        <img alt="Heading Text Image" src={HeadingImage9} />
      </div>
     <img 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        alt="Background" 
        src={bgImage2} 
      />
    </div>
  )
}

export default Specials
