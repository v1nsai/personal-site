import type { RefObject } from "react";

type TextBlockProps = {
  title: string;
  text: React.ReactNode;
  ref?: RefObject<HTMLDivElement | null>;
  isIntersecting?: boolean;
  slideStartsFrom?: "left" | "right";
};

const TextBlock = ({
  title,
  text,
  ref,
  isIntersecting,
  slideStartsFrom,
}: TextBlockProps) => {
  const slideClass =
    slideStartsFrom === "left" ? "-translate-x-full" : "translate-x-full";
  return (
    <div
      ref={ref}
      className={`relative rounded-4xl max-w-4xl mx-auto p-6 transition-all duration-1000 ease-out ${
        isIntersecting
          ? `${slideClass} translate-x-0 opacity-100`
          : "translate-x-8 opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-75 z-0 rounded-4xl"></div>
      <h2 className="relative text-4xl font-bold mb-8 text-center text-white">
        {title}
      </h2>
      <p className="relative text-white text-lg">{text}</p>
    </div>
  );
};

export default TextBlock;
