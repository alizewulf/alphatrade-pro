function TitleButton({children, onClick}:{children:React.ReactNode; onClick?: () => void}) {
  return (
    <button onClick={onClick} className="flex gap-2 items-center text-base font-inter leading-6 text-paragraph cursor-pointer">{children}</button>
  )
}

export default TitleButton