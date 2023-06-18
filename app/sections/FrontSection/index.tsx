"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gradient } from "utils/gradient";
import jumboAnimation from "utils/jumboAnimation";

const targetName = "Hack the Nest";
const targetDate = "9.23.23 - 9.24.23";
const targetLocation = "Sterling, VA";

const FrontSection = async () => {
  const [name, setName] = useState<string>(targetName);
  const [date, setDate] = useState<string>(targetDate);
  const [location, setLocation] = useState<string>(targetLocation);

  useEffect(() => {
    jumboAnimation(setName, targetName);
    jumboAnimation(setDate, targetDate);
    jumboAnimation(setLocation, targetLocation);
  }, []);

  return (
    <section className="min-h-screen px-0 pt-32 sm:px-8" id="front">
      <div className="relative z-10 mx-auto flex w-fit flex-col items-center justify-center gap-8 pt-12 sm:pt-24">
        {/* https://stackoverflow.com/questions/66457359/how-to-keep-a-paragraph-height-even-when-there-is-no-text-in-it */}
        <h1 className="text-gradient h-fit bg-clip-text text-center font-mono text-7xl font-black text-transparent before:inline-block before:content-['']">
          {name}
        </h1>
        <div className="flex w-fit flex-col justify-center gap-8">
          <div className="text-md mx-auto flex gap-2 text-center font-mono text-ice sm:text-lg">
            <span className="whitespace-nowrap">{date}</span>
            <div>•</div>
            <span className="whitespace-nowrap">{location}</span>
          </div>
          <Link
            className={`${await gradient()} mx-auto w-full rounded-md bg-white px-6 py-4 text-center text-lg font-medium text-black text-opacity-90`}
            href="/login"
          >
            Apply Now!
          </Link>
        </div>
      </div>

      <a
        id="mlh-trust-badge"
        className="absolute right-4 top-0 z-50 hidden aspect-[571/1000] w-[10%] min-w-[60px] max-w-[100px] lg:block "
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=yellow"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-yellow.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          sizes="100px"
          priority
          fill
        />
      </a>
    </section>
  );
};

export default FrontSection;
