function LinksContainer() {
  const linksArray: string[] = [
    "Privacy Policy",
    "Terms Of Service",
    "Risk Disclosure",
    "Help Center",
  ];
  return (
    <ul className="flex gap-8 font-inter leading-5.5 text-sm text-paragraph">
      {linksArray.map((link) => (
        <li className="cursor-pointer" key={link}>{link}</li>
      ))}
    </ul>
  );
}

export default LinksContainer;
