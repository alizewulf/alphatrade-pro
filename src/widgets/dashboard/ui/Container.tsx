function Container({children}:{children:React.ReactNode}) {
  return (
    <div className="flex flex-row gap-4">
      {children}
    </div>
  )
}

export default Container