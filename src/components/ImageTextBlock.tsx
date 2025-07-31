type ImageTextBlockProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  text: string;
  imagePosition?: 'left' | 'right'; // Optional, defaults to 'left'
  link?: string;                    // Optional, defaults to "#"
};

const ImageTextBlock = ({
  title,
  imageSrc,
  imageAlt,
  text,
  imagePosition = 'left',
  link = '#',
}: ImageTextBlockProps) => {
  const isImageLeft = imagePosition === 'left';

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
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-3xl font-bold mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {isImageLeft && imageElement}

        <div>
          <p className="text-lg text-gray-700 whitespace-pre-line">{text}</p>
        </div>

        {!isImageLeft && imageElement}
      </div>
    </div>
  );
};

export default ImageTextBlock;