import React from "react";
import Image from "next/image";

const SideBanner = () => {
  return (
    <div className="bg-radial from-sidebar-accent to-sidebar relative hidden md:flex flex-col gap-y-4 items-center justify-center">
      <Image src="/logo.svg" alt="Image" width={92} height={92} />
      <p className="text-2xl font-semibold text-white">Meet.AI</p>
    </div>
  );
};

export default SideBanner;
