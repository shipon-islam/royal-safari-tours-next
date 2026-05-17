import { GreenCircleIcon } from "./svg-icons";

export default function CounterWithText({ className, score, title }) {
  return (
    <div>
      <div className={`relative ml-3 xxs:ml-5 sm:ml-0 ${className}`}>
        <GreenCircleIcon />
        <h5 className="text-3xl xxs:text-4xl sm:text-5xl md:text-5xl font-bold absolute top-1/2 -translate-y-1/2 left-6">
          {score}
        </h5>
      </div>
      <p className="xxs:text-lg sm:text-xl font-semibold mt-6 text-center sm:text-left">
        {title}
      </p>
    </div>
  );
}
