
function Button({ children, onClick, disabled }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
