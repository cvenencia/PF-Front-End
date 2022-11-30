
import InputFirst from '../components/register/InputFirst';
import InputB from '../components/register/InputB';
import Checkbox from '../components/login/Checkbox';
import { register } from '../api/user'
import { useState, useLayoutEffect } from 'react';

function Register() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: '',
        name: '',
        lastname: '',
        confirmpassword: ''
        // type: ''
    })

    const [checkboxes, setCheckboxes] = useState({
        buyer: false,
        seller: false,
    })

    const [error, setError] = useState(false)
    const [msg, setMsg] = useState('')

    const handleRegister = () => {
        console.log(values);
        if (!values.username || !values.password || !values.confirmpassword || (!checkboxes.seller && !checkboxes.buyer)) {
            setError(true)
            setMsg('Please, fill all fields')
        } else if (values.password !== values.confirmpassword) {
            setError(true)
            setMsg('Passwords don\'t match')
        } else {
            const check = register(values.username, values.password, (checkboxes.buyer ? 'buyer' : 'seller'))
            console.log(check)
            if (check.ok) {
                window.location.href = '/login'
            } else {
                setMsg(check.message)
            }
        }
    }

    const handleInput = (field, value) => {
        setValues({ ...values, [field]: value })
    }

    const handleCheckboxComprador = (e) => {
        console.log(e.target.checked)
        const temp = checkboxes
        if (e.target.checked) {
            temp.seller = false;
        }
        setCheckboxes({ ...temp, buyer: e.target.checked })
    }

    const handleCheckboxVendedor = (e) => {
        console.log(e.target.checked)
        const temp = checkboxes
        if (e.target.checked) {
            temp.buyer = false;
        }
        setCheckboxes({ ...temp, seller: e.target.checked })
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-transparent w-fit h-fit flex rounded-2xl px-10 items-center pb-10'>
                <div className='flex flex-col mt-4 w-full items-center'>
                    <h1 className='font-bold text-[50px] text-white mb-2 '>
                        Crea una cuenta
                    </h1>
                    <div className="flex flex-row justify-center mb-2">
                        <InputFirst
                            title='Nombre'
                            name={'Nombre'}
                            placeholder={'Jane'}
                            type={'text'}
                            onChange={e => handleInput('name', e.target.value)}
                        />
                        <InputFirst
                            title='Apellido'
                            name={'Apellido'}
                            placeholder={'Doe'}
                            type={'text'}
                            onChange={e => handleInput('lastname', e.target.value)}
                        />

                    </div>
                    <InputB
                        title='Email'
                        name={'Email'}
                        placeholder={'name@example.com'}
                        type={'text'}
                        onChange={e => handleInput('email', e.target.value)}
                    />
                    <InputB
                        title='Usuario*'
                        name={'Usuario'}
                        placeholder={'JaneDoe23'}
                        type={'text'}
                        onChange={e => handleInput('username', e.target.value)}
                    />
                    <InputB
                        title='Contraseña*'
                        name={'Contraseña'}
                        placeholder={'*********'}
                        type={'password'}
                        onChange={e => handleInput('password', e.target.value)}
                    />
                    <InputB
                        title='Confirme contraseña*'
                        name={'Confirme su contraseña'}
                        placeholder={'*********'}
                        type={'password'}
                        onChange={e => handleInput('confirmpassword', e.target.value)}

                    />
                    <div className='flex flex-col w-full '>
                        <p className="text-white">Tipo de cuenta:</p>
                    </div>

                    <div className="flex flex-row justify-center mb-2">
                        <Checkbox
                            name={'Comprador'}
                            onChange={handleCheckboxComprador}
                            checked={checkboxes.buyer}
                        />
                        <Checkbox
                            name={'Vendedor'}
                            onChange={handleCheckboxVendedor}
                            checked={checkboxes.seller}
                        />

                    </div>

                    <div className='flex flex-col w-full mt-4 items-center'>
                        <button
                            onClick={handleRegister}
                            className='bg-[#06D6A0] green_shadow rounded-lg w-[343px] h-[52.46px] text-white font-bold text-lg'>Registrarse</button>
                    </div>

                    {error && <p className='text-red-500'>{msg}</p>}



                </div>

            </div>
        </div>
    );
}

export default Register