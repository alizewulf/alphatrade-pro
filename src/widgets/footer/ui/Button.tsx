type ButtonType = {
    children: React.ReactNode
}
function FooterButton({children}:ButtonType) {
  return (
    <button className="rounded-xl outline outline-[#424754] p-2 cursor-pointer">{children}</button>
  )
}

export default FooterButton