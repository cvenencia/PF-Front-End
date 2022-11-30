import React from "react";

function InputB ({title, name, placeholder, type, onChange, value}) {
    return(
        <div className='flex flex-col w-full'>
              <label className='text-white font-regular text-sm mb-1'>{title}</label>
              <input className='bg-[#262626] rounded-lg w-[520px] h-[40px] px-2 text-white border border-[#9546FB] mb-4 mr-4' name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </div>


    );
}

export default InputB