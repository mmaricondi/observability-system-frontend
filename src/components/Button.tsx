
function Button({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-200"
    >
      {children}
    </button>
  )
}

export default Button
