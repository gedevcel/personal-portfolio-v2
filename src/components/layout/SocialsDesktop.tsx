import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import SocialButton from "../ui/SocialButton";

export default function Socials() {
  return (
    <>
      <div className="hidden md:flex flex-col gap-4 items-center fixed left-4 top-1/2 -translate-y-1/2">
        <div className="w-0.5 h-16 bg-white rounded-full"></div>
        <SocialButton href="https://github.com/gedevcel">
          <GitHub className="w-5 h-5" />
        </SocialButton>
        <SocialButton href="https://www.linkedin.com/in/gerarddoncel/">
          <LinkedIn className="w-5 h-5" />
        </SocialButton>
        <div className="w-0.5 h-16 bg-white rounded-full"></div>
      </div>
      <div className="hidden md:flex flex-col gap-4 items-center text-sm fixed font-medium -right-28 top-1/2 -rotate-90 -translate-y-1/2">
        <span>SOFTWARE DEVELOPER | GERARD DONCEL</span>
      </div>
    </>
  );
}
