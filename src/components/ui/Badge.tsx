export default function Badge({
  color,
  skill,
  children,
}: {
  color: string;
  skill: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`${color} flex items-center gap-x-2 focus:outline-none font-medium rounded text-sm px-2 py-1 me-2 mb-2 border-[1px] border-slate-500/20`}
    >
      {children}
      <span>{skill}</span>
    </div>
  );
}
