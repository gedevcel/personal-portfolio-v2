import { ReactNode } from "react";

export default function Section({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mb-14 md:mb-20 w-full max-w-[1520px] mx-auto px-5"
    >
      {children}
    </section>
  );
}
