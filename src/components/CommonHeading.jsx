import { DoubleLocationIcon } from "./svg-icons";

export default function CommonHeading({ title, subtitle, className, color }) {
  return (
    <div className={`text-center xl:w-[55%] mx-auto ${className}`}>
      <DoubleLocationIcon className="w-10 sm:w-fit mx-auto" />
      <h5 className={`font-mansalva text-2xl md:text-3xl mb-6 mt-2 ${color}`}>
        {subtitle}
      </h5>
      <h1
        className={`font-palanquin font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${color}`}
      >
        {title}
      </h1>
    </div>
  );
}
