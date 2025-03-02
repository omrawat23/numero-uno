import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { Skater } from "./Skater";
import { SlideIn } from "@/components/SlideIn";

interface TeamProps {
  heading: string;
  skaters: Array<{
    firstName: string;
    lastName: string;
    photoBackground: string;
    photoForeground: string;
    customizerLink: string;
  }>;
}

const Team = ({ heading, skaters }: TeamProps): JSX.Element => {
  return (
    <Bounded className="bg-texture bg-brand-navy">
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          {heading}
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, index) => (
          <SlideIn key={index}>
            <Skater index={index} {...skater} />
          </SlideIn>
        ))}
      </div>
    </Bounded>
  );
};

export default Team;
