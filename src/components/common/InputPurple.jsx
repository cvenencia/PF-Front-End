import React from 'react'

function InputPurple({ name, placeholder, type, value, onChange }) {
    return (
        <div className='flex flex-col w-full'>
            <label className='text-white font-semibold text-sm mb-2' htmlFor={name}>{name}</label>
            <input className='bg-[#262626] rounded-lg w-full h-[35px] px-2 text-white border border-[#9546FB]' type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />
        </div>
    )
}

export default InputPurple