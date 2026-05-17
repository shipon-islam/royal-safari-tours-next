export default function InputBox({ label, className, error, ...rest }) {
  return (
    <div className="flex flex-col">
      <label className="font-medium font-inter" htmlFor={label}>
        {label}
      </label>
      <input
        type="text"
        {...rest}
        className={`border border-black/20 rounded-md py-2.5 mt-2 px-2.5 ${className}`}
      />
      {error && <p className="ml-1 text-red-500">{error.message}</p>}
    </div>
  );
}
