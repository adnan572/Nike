import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoes,statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImage,setBigShoeImage] = useState(bigShoe1)
  return (
    <section id="home" className="w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative  flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 xl:w-2/5">
      <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold max-sm:leading-[82px]">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          The New Arrival
        </span> <br />
        <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
      </h1>
      <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm leading-8">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
      <Button label={'Shop now'} iconUrl = {arrowRight}/>
      <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        {statistics.map((stats)=>(
          <div key={stats.label}>
          <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
          <p className="font-montserrat text-slate-gray leading-7">{stats.label}</p>    
         </div>
        )

        )}
      </div>
      </div>
      
        <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
          <img src={bigShoeImage} alt="" className="object-contain relative z-10 w-[610px] h-[500px]"/>
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:p-6">
            {shoes.map((shoe)=>(
              <div key={shoe}>
                <ShoeCard
        
                clickedShoe = {shoe}
              changeBigShoeImage = {(shoe)=> setBigShoeImage(shoe)}
              bigShoeImage = {bigShoeImage}
                />
              </div>
            ))}
          </div>
        </div>
      
    </section>
  )
}

export default Hero