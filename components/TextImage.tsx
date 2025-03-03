"use client"

import clsx from "clsx";
import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { SlideIn } from "@/components/SlideIn";
import { ParallaxImage } from "./ParallaxImage";
import { motion } from "framer-motion";
import MysticalBackground from "./MysticalBackground";

interface TextImageProps {
  slice: {
    slice_type: string;
    variation: string;
    primary: {
      theme: 'Blue' | 'Orange' | 'Navy' | 'Lime';
      heading: string;
      body: string;
      button: {
        text: string;
        url: string;
      };
      foreground_image: {
        url: string;
        alt: string;
      };
      background_image: {
        url: string;
        alt: string;
      };
    };
  };
}

export default function TextImage({ slice }: TextImageProps): JSX.Element {
  const theme = slice.primary.theme;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-zinc-950"
    >
      <MysticalBackground />
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24 pt-20">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            slice.variation === "imageOnLeft" && "md:order-2"
          )}
        >
          <SlideIn>
            <Heading size="lg" as="h2" className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              {slice.primary.heading}
            </Heading>
          </SlideIn>
          <SlideIn>
            <div className="max-w-md text-lg leading-relaxed text-white">
              {slice.primary.body}
            </div>
          </SlideIn>
          <SlideIn>
            <ButtonLink
              href={slice.primary.button.url}
              color={theme === "Lime" ? "orange" : "lime"}
            >
              {slice.primary.button.text}
            </ButtonLink>
          </SlideIn>
        </div>

        <ParallaxImage
          foregroundImage={slice.primary.foreground_image}
          backgroundImage={slice.primary.background_image}
        />
      </div>
    </Bounded>
  );
}