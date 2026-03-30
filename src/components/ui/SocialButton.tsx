export default function SocialButton({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#191919] p-4 rounded cursor-pointer hover:bg-primary duration-200"
    >
      {children}
    </a>
  );
}
