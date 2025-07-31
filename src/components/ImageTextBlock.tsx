type ImageTextBlockProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  text: string;
  imagePosition?: "left" | "right"; // Optional, defaults to 'left'
  link?: string; // Optional, defaults to "#"
};

const ImageTextBlock = ({
  title,
  imageSrc,
  imageAlt,
  text,
  imagePosition = "left",
  link = "#",
}: ImageTextBlockProps) => {
  const isImageLeft = imagePosition === "left";

  const imageElement = (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full rounded shadow hover:opacity-90 transition-opacity duration-200"
      />
    </a>
  );

  return (
    <>
      <h3 className={`relative text-2xl font-bold mb-8 text-white ${isImageLeft ? 'text-right' : 'text-left'}`}>
        {title}
      </h3>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {isImageLeft && imageElement}

        <div>
          <p className={`text-lg text-white whitespace-pre-line ${isImageLeft ? 'text-right' : 'text-left'}`}>{text}</p>
        </div>

        {!isImageLeft && imageElement}
      </div>
    </>
  );
};

export default ImageTextBlock;
