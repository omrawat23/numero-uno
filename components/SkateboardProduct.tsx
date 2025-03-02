import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { ButtonLink } from "@/components/ButtonLink";
import { HorizontalLine, VerticalLine } from "@/components/Line";
import clsx from "clsx";
import { Scribble } from "./Scribble";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  customizerLink: string;
}

const VERTICAL_LINE_CLASSES =
  "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

const HORIZONTAL_LINE_CLASSES =
  "-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

export function SkateboardProduct({ id, name, price, image, customizerLink }: ProductProps) {
  const formattedPrice = `$${(price / 100).toFixed(2)}`;

  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4 ">
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "left-4")} />
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "right-4")} />
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      {/* <div className="flex items-center justify-between ~text-sm/2xl">
        <span>{formattedPrice}</span>
        <span className="inline-flex items-center gap-1">
          <FaStar color="#facc15" /> 37
        </span>
      </div> */}
      <div className="-mb-1 overflow-hidden py-8">
        <Scribble
          className="absolute inset-0 h-full w-full"
          color="#000000"
        />
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="mx-auto w-full origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150 rounded-xl"
        />
      </div>
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <h3 className="my-2 text-center font-sans leading-tight ~text-lg/xl">
        {name}
      </h3>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ButtonLink href={customizerLink}>Customize</ButtonLink>
      </div>
    </div>
  );
}
