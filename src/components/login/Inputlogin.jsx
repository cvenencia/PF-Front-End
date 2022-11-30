import React from "react";

function Inputlogin ({title, name, placeholder, type, onChange, value}) {
    
    return (
        <div className='flex flex-col w-full mt-4'>
            <label className='text-white font-bold text-lg'>{title}</label>
            <input className='bg-[#262626] rounded-lg w-[342.38px] h-[67.4px] px-2 text-white border border-[#9546FB] mb-4' name={name} placeholder={placeholder} type={type} onChange={onChange} value={value}/>
        </div>
    );
}

export default Inputlogin