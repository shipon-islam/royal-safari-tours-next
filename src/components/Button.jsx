export default function Button({ className, name, ...rest }) {
  return (
    <button
      className={`bg-green text-white hover:bg-orange transition-colors duration-300 text-lg px-6 py-2 rounded-md cursor-pointer  ${className}`}
      {...rest}
    >
      {name}
    </button>
  );
}
