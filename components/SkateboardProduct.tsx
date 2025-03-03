"use client"
import Image from "next/image";
import { HorizontalLine, VerticalLine } from "@/components/Line";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import clsx from "clsx";
import { Scribble } from "./Scribble";
import { useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { Heading } from "./Heading";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  customizerLink: string;
  description?: string;
}

const VERTICAL_LINE_CLASSES =
  "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

const HORIZONTAL_LINE_CLASSES =
  "-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

export function SkateboardProduct({ id, name, price, image, description = "" }: ProductProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formattedPrice = `$${(price / 100).toFixed(2)}`;

  return (
    <>
      <div className="group relative mx-auto w-full max-w-72 px-8 pt-4">
        <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "left-4")} />
        <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "right-4")} />
        <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

        <div className="-mb-1 overflow-hidden py-8">
          <Scribble
            className="absolute inset-0 h-[80%] w-full"
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

        <h3 className="my-2 text-center font-sans leading-tight ~text-lg/xl text-white/80">
          {name}
        </h3>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <ButtonLink onClick={() => setIsModalOpen(true)}>Customize</ButtonLink>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={(open) => {
        setIsModalOpen(open);
        if (!open) {
          // Maintain the hash position when modal closes
          setTimeout(() => {
            window.location.hash = 'services';
          }, 0);
        }
      }}>
        <DialogContent className="bg-gradient-to-b from-indigo-950 via-purple-950 to-zinc-950 border-stone-300 max-w-4xl">
          <div className="relative p-6">
            <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "left-0")} />
            <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "right-0")} />
            <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side - Image */}
              <div className="relative overflow-hidden">
                <Scribble
                  className="absolute inset-0 h-full w-full"
                  color="#000000"
                />
                <Image
                  src={image}
                  alt={name}
                  width={300}
                  height={300}
                  className="mx-auto w-full max-w-[300px] rounded-xl relative z-10"
                />
              </div>

              {/* Right side - Content */}
              <div className="space-y-6 text-left">
                  <Heading size="sm" as="h4"
                    className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">{name}</Heading>
                <p className="text-white/80 text-lg">{description}</p>
                {/* <p className="text-2xl font-semibold text-white">{formattedPrice}</p> */}
                <ButtonLink icon="cart"
                  color="lime"
                  className="transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/20" href="/book" onClick={() => setIsModalOpen(false)}>Book Your Session</ButtonLink>
              </div>
            </div>

            <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
