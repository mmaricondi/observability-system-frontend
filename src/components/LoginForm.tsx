import Button from './Button';
import InputField from './InputField'
import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import OtpValidation from './OtpValidation';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const data = useContext(AuthContext);

  const handleEmailVerification = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validateEmail(email)) {
        setLoading(true);
        await data.signinMail(email);
        setLoading(false);
        setError('');
    }
    else{
        setError("Invalid Email");
    }
  }

  const validateEmail = (email: string)=>{
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValidEmail
  }

  return (
    <form>
      <h2 className="text-xl font-semibold mb-6">Faça seu login</h2>
      <h3 className="text-sm text-gray-600 mb-4">Acesse o portal de status da Click</h3>
      {!data.user?.validatedEmail ? (<>
          <h1>Enter Your Email:</h1>
          <InputField
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              error={error}
          />
          <div>
                <Button onClick={handleEmailVerification} className='otp-verify-email'>
                  {loading ? (
                      'Loading ...'
                  ): (
                      'Verify Email'
                  )}
              </Button>
          </div>
      </>) : (
       <OtpValidation />
    )}
    </form>
  )
}

export default LoginForm
