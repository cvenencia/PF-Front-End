import React from "react";

function Inputlogin ({title, name, placeholder, type, onChange, value}) {
    
    return (
        <div className='flex flex-col w-full mt-4'>
            <label className='text-white font-bold text-lg'>{title}</label>
            <input className='bg-[#2C2C2D] rounded-lg w-[343px] h-[52.46px] text-white font-bold text-lg' name={name} placeholder={placeholder} type={type} onChange={onChange} value={value}/>
        </div>
    );
}

export default Inputlogin