"use client";

import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import SocialButton from "@/components/ui/SocialButton";

export default function Socials() {
  return (
    <div className="flex md:hidden gap-4 items-center">
      <SocialButton href="https://github.com/gedevcel">
        <GitHub className="w-5 h-5" />
      </SocialButton>
      <SocialButton href="https://www.linkedin.com/in/gerarddoncel/">
        <LinkedIn className="w-5 h-5" />
      </SocialButton>
    </div>
  );
}
