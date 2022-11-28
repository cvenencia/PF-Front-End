import React from "react";

function Inputlogin ({name, placeholder, type, value, onChange}) {
    return(
        <div className='flex flex-col w-full'>
              <label className='text-white font-regular text-sm mb-1'>{name}</label>
              <input className='bg-[#262626] rounded-lg w-[342.38px] h-[67.4px] px-2 text-white border border-[#9546FB] mb-4' type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </div>


    );
}

export default Inputlogin