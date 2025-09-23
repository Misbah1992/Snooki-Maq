import image2 from "../assets/image2.png"
import Figure1 from "../assets/Figure1.png"
import Figure2 from "../assets/Figure2.png"
import image9 from "../assets/image9.png"



function About() {
    return (

        <div className='bg-black w-full h-[80vh] flex items-center justify-center'>
            <div className="h-[80%] w-[40%]">
                
                <img className="z-10"  alt='image' src={image9} />
            </div>
            <div className="h-[80%] w-[40%] flex flex-col justify-evenly">
                <img className="w-[20%]" alt="picture" src={Figure2} />
                <div className="text-4xl font-bold text-white">BUY YOUR FOOD NOW FOR THE<br />
                    BEST CHOW</div>
                <div className="text-white text-md">Craving something delicious? Explore our wide range of fresh, tasty meals made with love and the finest ingredients. Whether you're hungry for a quick snack or a full feast, we've got you covered. Order now and enjoy fast delivery, unbeatable flavors, and food that hits the spot every bite crafted to satisfy your cravings and comfort. Taste the difference, fuel your day, and make every mealtime moment one to remember.</div>
                <img className="w-[30%]" alt="picture" src={Figure1} />
            </div>

        </div>

    )
}

export default About
