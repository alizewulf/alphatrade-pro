function TitleButton({children}:{children:React.ReactNode}) {
  return (
    <button className="flex gap-2 items-center text-base font-inter leading-6 text-paragraph cursor-pointer">{children}</button>
  )
}

export default TitleButton