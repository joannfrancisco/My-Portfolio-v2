import Image from "next/image";

const FigmaFiles = ({ src, alt }) => {
  return (
    <div className="h-[250px] md:h-[400px] w-full mb-5 relative overflow-hidden shadow-amber-700 -z-1">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover opacity-90"
      />
    </div>
  );
};

export default FigmaFiles;
