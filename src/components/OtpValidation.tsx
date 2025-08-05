import { useState, useContext } from 'react';
import Button from './Button';
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
            <h1>
                Entre com o codigo enviado para o seu e-mail:
            </h1>

            <div className='otp-input-container'>
                <OTPInput
                    value={otp.join('')}
                    onChange={(value)=> setOtp(value.split(''))}
                    onPaste={(e) => {
                        const pastedValue = e.clipboardData.getData('Text');
                        if (/^\d{6}$/.test(pastedValue)) {
                            setOtp(pastedValue.split(''));
                        }
                        e.preventDefault();
                    }}
                    numInputs={6}
                    inputStyle={{
                        width: '3rem',
                        height: '3rem',
                        margin: '1rem 0.2rem',
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
                        'Loading ...'
                    ): (
                        'Verify Code'
                    )}
                </Button>
            </div>
        </>
  );
}

export default OtpValidation;