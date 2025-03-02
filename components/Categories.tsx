import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SkateboardProduct } from "./SkateboardProduct";
import { SlideIn } from "@/components/SlideIn";

interface ProductGridProps {
  heading: string;
  body: string;
  products: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    customizerLink: string;
  }>;
}

const Categories = ({ heading, body, products }: ProductGridProps): JSX.Element => {
  return (
    <Bounded className="bg-texture bg-brand-gray">
      <SlideIn>
        <Heading className="text-center ~mb-4/6" as="h2">
          {heading}
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center ~mb-6/10">
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
};

export default Categories;
