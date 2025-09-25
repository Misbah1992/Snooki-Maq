import image25 from "../assets/image25.png"
import image26 from "../assets/image26.png"
import image27 from "../assets/image27.png"
import image28 from "../assets/image28.png"
import HeadingImage9 from "../assets/HeadingImage9.png"
import bgImage2 from "../assets/bgImage2.png"


function Specials() {
  return (
    <div className="relative w-full h-screen">
      
       <div className="relative z-10 flex flex-col items-center h-full text-white pt-[5%]">
        <div className="text-4xl font-bold mb-4">TODAY'S SPECIAL</div>
        <img alt="Heading Text Image" src={HeadingImage9} />
      </div>
      <img className="absolute z-10 top-[30%] left-[15%] h-[35%]" alt="" src={image26}/>
      <img className="absolute z-10 top-[35%] right-[25%] h-[55%]" alt="" src={image28}/>
       <img className="absolute z-10 bottom-[5%] left-[20%] h-[25%]" alt="" src={image25}/>
      <img className="absolute z-10 top-[10%] right-[10%] h-[25%]"  alt="" src={image27}/>
     <img 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        alt="Background" 
        src={bgImage2} 
      />
      
    </div>
  )
}

export default Specials
