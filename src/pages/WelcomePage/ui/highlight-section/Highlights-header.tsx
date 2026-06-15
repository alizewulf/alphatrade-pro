type HighlightsHeaderProps = {
    title: string,
    company: string
}

function HighlightsHeader({title, company}:HighlightsHeaderProps) {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-semibold leading-7 text-headerButton text-xl">
          {title}
        </span>
        <p className="text-sm leading-5 text-headerButton">{company}</p>
      </div>
    </>
  );
}

export default HighlightsHeader;
