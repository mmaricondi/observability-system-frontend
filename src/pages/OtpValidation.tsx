import { useState, useContext, useEffect } from 'react';
import Button from '../components/Button';
import OTPInput from 'react-otp-input';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { SpinIcon } from '../assets/icons';

function OtpValidation() {
    const [otp, setOtp] = useState(['']);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const data = useContext(AuthContext);
    const navigate = useNavigate();
    const otpSize = 6

    useEffect(() => {
        const enteredOTP = otp.join('');
        if (enteredOTP.length == otpSize) {
            setDisabled(false)
        }else {
            setError("")
            setDisabled(true)
        }
        setError('')
    }, [otp])

    const handleOTPVerification = async (event: React.FormEvent) => {
        event.preventDefault();
        const enteredOTP = otp.join('');
        if (/^[A-Za-z0-9]{6}$/.test(enteredOTP)) {
            setLoading(true);
            const isValidated = await data.signinCode(data.user?.email, enteredOTP)
            if(isValidated) {
                navigate('/dashboard');
            }else {
                setError("Codigo invalido")
                setLoading(false)
            }
        }else{
            setError("Validacao invalida use apenas [Letra e numeros]")
        }
    }

    return (
        <>
            <h1 className='font-bold text-gray-700'>Entre com o codigo enviado para o seu e-mail:</h1>
            <div className='otp-input-container ml-3 mb-6'>
                <OTPInput
                    value={otp.join('')}
                    onChange={(value)=> setOtp(value.toUpperCase().split(''))}
                    numInputs={otpSize}
                    inputStyle={{
                        width: '3rem',
                        height: '3rem',
                        margin: '1rem 0.3rem',
                        fontSize: '1.5rem',
                        borderRadius : '4px',
                        border: '1px solid #ced4da'
                    }}
                    renderInput={(inputProps, index) => <input {...inputProps} key={index}/>}
                />
                {error && <p className="fixed text-red-500 text-sm">{error}</p>}
            </div>
            <div>
                <Button onClick={handleOTPVerification} disabled={disabled} className='otp-login'>
                    <div className='flex flex-row justify-center'>
                        <div className='mr-2'>
                            {loading && <SpinIcon />}
                        </div>
                        {loading ? 'Confirmando...' : 'Confirmar Código'}
                    </div>
                </Button>
            </div>
        </>
    );
}

export default OtpValidation;