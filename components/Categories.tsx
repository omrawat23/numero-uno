import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SkateboardProduct } from "./SkateboardProduct";
import { SlideIn } from "@/components/SlideIn";
import Image from "next/image";
import MysticalBackground from "./MysticalBackground";

interface ProductGridProps {
  heading: string;
  body: string;
  products: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    customizerLink: string;
    description: string;
  }>;
}

export default function Categories({ heading, body, products }: ProductGridProps): JSX.Element {
  return (
    <Bounded className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-zinc-950">
      <MysticalBackground />
      <SlideIn>
        <Heading className="pt-24 text-center ~mb-4/6 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 text-transparent bg-clip-text" as="h2">
          {heading}
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center ~mb-6/10 text-white">
          {body}
        </div>
      </SlideIn>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <SkateboardProduct key={product.id} {...product} />
        ))}
      </div>
    </Bounded>
  );
}
