import { useState, useContext } from 'react';
import Button from '../components/Button';
import InputField from '../components/login/InputField'
import { EmailIcon, LogoIcon } from "../assets/icons";
import { AuthContext } from '../contexts/Auth/AuthContext';
import OtpValidation from './OtpValidation';

function Login() {
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
    <>
      <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">
      <label className='fixed top-10'>{<LogoIcon/>}</label>
        <form className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
          <h2 className="text-[28px] font-semibold mb-2">Faça seu login</h2>
          <h3 className="text-sm text-gray-600 mb-8">Acesse o portal de status da Click</h3>
          {!data.user?.validatedEmail ? (<>
              <InputField
                  label="E-mail"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  error={error}
                  placeholder="exemple@clickcannabis.com"
                  iconStart={<EmailIcon className="w-5 h-5 text-gray-500" />}
              />
              <div>
                    <Button onClick={handleEmailVerification} className='otp-verify-email'>
                      {loading ? (
                          'Loading ...'
                      ): (
                          'Entrar'
                      )}
                  </Button>
              </div>
          </>) : (
          <OtpValidation />
        )}
        </form>

        <label className='text-sm text-gray-500 fixed bottom-10'>© Todos os direitos reservados @clickcannabis</label>
      </div>
    </>
  )
}

export default Login
