import clsx from "clsx";
import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { SlideIn } from "@/components/SlideIn";
import { ParallaxImage } from "./ParallaxImage";

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

const TextImage = ({ slice }: TextImageProps): JSX.Element => {
  const theme = slice.primary.theme;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        theme === "Blue" && "bg-texture bg-brand-blue text-white",
        theme === "Orange" && "bg-texture bg-brand-orange text-white",
        theme === "Navy" && "bg-texture bg-brand-navy text-white",
        theme === "Lime" && "bg-texture bg-brand-lime"
      )}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            slice.variation === "imageOnLeft" && "md:order-2"
          )}
        >
          <SlideIn>
            <Heading size="lg" as="h2">
              {slice.primary.heading}
            </Heading>
          </SlideIn>
          <SlideIn>
            <div className="max-w-md text-lg leading-relaxed">
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
};

export default TextImage;