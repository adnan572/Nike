
const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full
      ${backgroundColor ? `${textColor} ${backgroundColor} ${borderColor}` : "leading-none bg-coral-red text-white border-coral-red"} 
      ${fullwidth ? 'w-full' : ''}`}>
      
      {label}
    
      {iconUrl && <img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};


export default Button