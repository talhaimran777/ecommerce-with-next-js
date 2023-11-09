const Button = ({
  text,
  action,
  className,
}: {
  text: string
  action: () => void
  className?: string
}) => {
  return (
    <button
      className={`w-full bg-black text-white py-2 rounded-md text-sm font-bold hover:opacity-60 transition duration-300 ${className}`}
      onClick={action}
    >
      {text}
    </button>
  )
}

export default Button
