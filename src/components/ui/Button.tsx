export default function Button({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-primary text-black flex gap-x-2 items-center cursor-pointer font-semibold text-xl rounded px-6 py-3 me-2 mb-2">
      {children}
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {label}
      </a>
    </div>
  );
}
