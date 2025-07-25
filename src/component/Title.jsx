import React from 'react'

const Title = ({title, subTitle,align,font}) => {
  return (
    <div className={`flex flex-col justify-center item-center text-center ${align === "left" && "md:item-start md:text-left" }`}>
      <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}>
{title}
      </h1> 
      <p className='text-sm text-center md:text-base text-gray-400 mt-2 max-w-[700px] mx-auto '>{subTitle}</p>
      {/* <p className="text-sm text-center md:text-base text-gray-500 mt-2 max-w-[700px] mx-auto">
  {subTitle}
</p> */}

    </div>
  ) 
}

export default Title
