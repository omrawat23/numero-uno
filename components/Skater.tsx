import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { SkaterScribble } from "./SkaterScribble";
import clsx from "clsx";

interface SkaterProps {
  firstName: string;
  lastName: string;
  photoBackground: string;
  photoForeground: string;
  customizerLink: string;
  index: number;
}

export function Skater({ firstName, lastName, photoBackground, photoForeground, customizerLink, index }: SkaterProps) {
  const colors = [
    "text-brand-blue",
    "text-brand-lime",
    "text-brand-orange",
    "text-brand-pink",
    "text-brand-purple",
  ];

  const scribbleColor = colors[index % colors.length];

  return (
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden">
        <Image
          src={photoBackground}
          width={500}
          height={500}
          alt=""
          className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
        />
        <SkaterScribble className={clsx("relative", scribbleColor)} />
        <Image
          src={photoForeground}
          width={500}
          height={500}
          alt=""
          className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <h3 className="relative grid place-self-end justify-self-start p-2 font-sans text-brand-gray ~text-2xl/3xl">
          <span className="mb-[-.3em] block">{firstName}</span>
          <span className="block">{lastName}</span>
        </h3>
      </div>
      <ButtonLink href={customizerLink} size="sm">
        Build their board
      </ButtonLink>
    </div>
  );
}
