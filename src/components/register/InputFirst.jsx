import React from "react";

function InputFirst ({name, placeholder, type, value, onChange}) {
    return(
        <div className='flex flex-col w-full'>
              <label className='text-white font-regular text-sm '>{name}</label>
              <input className='bg-[#262626] rounded-lg w-[250px] h-[40px] px-2 text-white border border-[#9546FB]  mr-4 ' type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </div>


    );
}

export default InputFirst;