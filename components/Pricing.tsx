import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { SlideIn } from "./SlideIn";
import { FaClock, FaFileAlt, FaMoneyBillWave, FaMobileAlt } from 'react-icons/fa';

const PricingCard = ({ title, price, duration, features }: {
  title: string;
  price: number;
  duration: string;
  features: string[];
}) => (
  <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-brand-lime/50 transition-all duration-300">
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <div className="text-4xl font-bold text-brand-lime mb-2">₹{price}/-</div>
    <div className="text-zinc-400 mb-6">{duration}</div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="text-zinc-300 flex items-center gap-2">
          <span className="text-brand-lime">•</span>
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full py-3 px-6 bg-brand-lime text-brand-navy font-bold rounded-full hover:bg-brand-lime/90 transition-colors">
      Book Session
    </button>
  </div>
);

export default function Pricing() {
  return (
    <Bounded className="bg-texture bg-brand-navy">
      <div className="max-w-5xl mx-auto">
        <SlideIn>
          <Heading as="h2" size="lg" className="text-center text-white mb-8">
            Pricing & Sessions
          </Heading>
        </SlideIn>

        <SlideIn>
          <p className="text-center text-xl text-zinc-300 mb-12 max-w-3xl mx-auto">
            Numerology sessions start at ₹800 for a 1-hour deep dive. Prefer a quick insight?
            Get a detailed Loshu Grid report for just ₹300, delivered in 12 hours!
          </p>
        </SlideIn>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <SlideIn>
            <PricingCard
              title="Full Session"
              price={800}
              duration="1 Hour"
              features={[
                "Individual Analysis",
                "Couple Compatibility",
                "Name Analysis",
                "Phone Number Analysis",
                "Detailed Consultation",
                "Future Predictions"
              ]}
            />
          </SlideIn>

          <SlideIn>
            <PricingCard
              title="Quick Report"
              price={300}
              duration="12 Hour Delivery"
              features={[
                "Detailed Loshu Grid",
                "Basic Number Analysis",
                "Written Report",
                "Digital Delivery",
                "Future Trends",
                "Recommendations"
              ]}
            />
          </SlideIn>
        </div>

        {/* Payment Process */}
        <div className="grid md:grid-cols-2 gap-12 text-white">
          <SlideIn>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-lime flex items-center gap-3">
                <FaMoneyBillWave />
                Payment Process
              </h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-brand-lime">•</span>
                  50% advance before session begins
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-lime">•</span>
                  Remaining 50% after the session ends
                </li>
              </ul>
            </div>
          </SlideIn>

          <SlideIn>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-lime flex items-center gap-3">
                <FaMobileAlt />
                Payment Options
              </h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-brand-lime">•</span>
                  UPI (Google Pay, PhonePe, Paytm)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-lime">•</span>
                  Bank Transfer
                </li>
              </ul>
            </div>
          </SlideIn>
        </div>
      </div>
    </Bounded>
  );
}
