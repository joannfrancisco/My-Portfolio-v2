const ProjectHover = ({ href, name, desc }) => {
  const nameFormats = {
    moviedux: (
      <>
        m<span className="font-wide pr-2">o</span>&nbsp;vi
        <span className="font-wide pr-2">e</span>&nbsp;dux
      </>
    ),
    tidytouch: (
      <>
        ti<span className="font-wide pr-2">d</span>&nbsp;y&nbsp;&nbsp;t
        <span className="font-wide pr-2">o</span>&nbsp;uch
      </>
    ),
    wouldyourather: (
      <>
        w<span className="font-wide pr-2">o</span>&nbsp;uld&nbsp;&nbsp;y
        <span className="font-wide pr-2">o</span>&nbsp;u&nbsp;&nbsp;r
        <span className="font-wide pr-2">a</span>&nbsp;th
        <span className="font-wide pr-2">e</span>&nbsp;r
      </>
    ),
    ann: (
      <>
        <span className="font-wide pr-2">a</span> nn
      </>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center border-b py-4 md:py-6 text-sm md:text-lg"
    >
      <h2 className="font-bold">{nameFormats[name] || name}</h2>
      <h2>{desc}</h2>
    </a>
  );
};

export default ProjectHover;
