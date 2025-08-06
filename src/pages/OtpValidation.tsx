import { useState, useContext } from 'react';
import Button from '../components/Button';
import OTPInput from 'react-otp-input';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function OtpValidation() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const data = useContext(AuthContext);
    const navigate = useNavigate();

    const handleOTPVerification = async (event: React.FormEvent) => {
        event.preventDefault();
        const enteredOTP = otp.join('');
        if (/^\d{6}$/.test(enteredOTP)) {
            setLoading(true);
            const isValidated = await data.signinCode(enteredOTP)
            setLoading(false);
            if(isValidated) {
                navigate('/dashboard');
            }
        }
        else{
            setError("Incorrect OTP");
        }
    }

    return (
        <>
            <h1 className='font-bold text-gray-700'>Entre com o codigo enviado para o seu e-mail:</h1>
            <div className='otp-input-container ml-3'>
                <OTPInput
                    value={otp.join('')}
                    onChange={(value)=> setOtp(value.split(''))}
                    numInputs={6}
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
            </div>
            <div>
                <Button onClick={handleOTPVerification} className='otp-login'>
                    {loading ? (
                        'Carregando ...'
                    ): (
                        'Confirmar Código'
                    )}
                </Button>
            </div>
        </>
    );
}

export default OtpValidation;