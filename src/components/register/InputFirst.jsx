import React from "react";

function InputFirst ({title, name, placeholder, type, onChange, value}) {
    return(
        <div className='flex flex-col w-full'>
              <label className='text-white font-regular text-sm '>{title}</label>
              <input className='bg-[#262626] rounded-lg w-[250px] h-[40px] px-2 text-white border border-[#9546FB]  mr-4 ' name= {name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </div>


    );
}

export default InputFirst;