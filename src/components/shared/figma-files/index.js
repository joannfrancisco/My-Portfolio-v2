import Image from "next/image";

const FigmaFiles = ({ src, alt }) => {
  return (
    <div className="w-full overflow-hidden mb-5 z-[-1] opacity-90 shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-xl">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={600}
        className="w-full h-auto"
        priority
      />
    </div>
  );
};

export default FigmaFiles;
