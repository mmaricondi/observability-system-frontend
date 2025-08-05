import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
