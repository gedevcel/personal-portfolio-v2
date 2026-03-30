import { ReactNode } from "react";

export default function SecondaryButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children?: ReactNode;
}) {
  return (
    <div className="hover:bg-slate-500/20 text-gray-200 flex gap-x-2 items-center cursor-pointer font-medium text-sm rounded px-4 py-2.5 me-2 mb-2 border border-slate-500/20 duration-100 ease-in-out transform">
      {children}
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </div>
  );
}
