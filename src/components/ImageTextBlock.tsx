type ImageTextBlockProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  text: React.ReactNode;
  imagePosition?: "left" | "right";
  link?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
  isIntersecting?: boolean;
  slideStartsFrom?: "left" | "right";
};

const ImageTextBlock = ({
  title,
  imageSrc,
  imageAlt,
  text,
  imagePosition = "left",
  link = "#",
  ref = undefined,
  isIntersecting = false,
  slideStartsFrom = "right"
}: ImageTextBlockProps) => {
  const isImageLeft = imagePosition === "left";

  const imageElement = (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="rounded hover:shadow-2xl hover:shadow-white/50 transition-shadow duration-300"
      />
    </a>
  );
  const slideClass = slideStartsFrom === "left" ? "-translate-x-full" : "translate-x-full";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting
          ? "translate-x-0 opacity-100"
          : `${slideClass} opacity-0`
      }`}
    >
      <h3
        className={`relative text-2xl font-bold mb-8 text-white ${
          isImageLeft ? "text-right" : "text-left"
        }`}
      >
        {title}
      </h3>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {isImageLeft && imageElement}

        <div>
          <p
            className={`text-lg text-white whitespace-pre-line ${
              isImageLeft ? "text-right" : "text-left"
            }`}
          >
            {text}
          </p>
        </div>

        {!isImageLeft && imageElement}
      </div>
    </div>
  );
};

export default ImageTextBlock;
