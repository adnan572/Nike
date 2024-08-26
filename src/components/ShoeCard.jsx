
const ShoeCard = ({clickedShoe,changeBigShoeImage,bigShoeImage}) => {
  
  const handleClick= ()=>{
    if(bigShoeImage !== clickedShoe.bigShoe) {
        changeBigShoeImage(clickedShoe.bigShoe)
    }
  }
    return (
    <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
    
        ${bigShoeImage === clickedShoe.bigShoe ? 'border-coral-red' : 'border-transparent'}

    `} onClick = {handleClick}>
     
     <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={clickedShoe.thumbnail} alt="shoe" className="w-[127px] h-[103px] object-contain" />
     </div>
    </div>
  )
}

export default ShoeCard