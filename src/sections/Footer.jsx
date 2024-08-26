import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
const Footer = () => {
  return (
  <footer className="max-container">
<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
<div className="flex flex-col items-start">
    <a href="/">
    <img src={footerLogo} className="w-[150px] h-[46px]" alt="" />
    </a>
    <p className="mt-6 text-base text-white-400 sm:max-w-sm leading-7 font-montserrat">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards</p>
    <div className="flex items-center gap-5 mt-8">
    {socialMedia.map((icon)=>(
      <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
        <img src={icon.src} alt={icon.alt} className="w-[24px] h-[24px]" />
      </div>
    ))}
    </div>
</div>
    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
      {footerLinks.map((section)=>(
        <div key={section}>
          <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
          <ul>
              {section.links.map((link)=>(
                <li className="text-white-400 mt-6 font-montserrat text-base leading-normal hover:text-slate-gray hover:cursor-pointer">
                  <a>{link.name}</a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>

</div>
<div className="flex justify-between text-white-400 mt-24 max-sm:items:center max-sm:flex-col">
      <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
        <img src={copyrightSign} alt="copyright" className="w-[20px] h-[20px] rounded-full m-0" />
        <p>Copyrights. All rights reserved.</p>
      </div>
      <p className="font-montserrat cursor-pointer">
      Terms & Conditions
      </p>
</div>
  </footer>
  )
}

export default Footer