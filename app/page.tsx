import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import TextImage from '@/components/TextImage';
import VideoBlock from '@/components/VideoBlock';

export default function Page() {
  const videoSlice = {
    id: "video-section",
    slice_type: "video_block",
    variation: "default",
    primary: {
      youtube_video_id: "w0lJylnG6IE" // Only the video ID, not the full URL
    }
  };

  const categoriesData = {
    heading: "Numerology Services",
    body: "Discover your path through the ancient wisdom of numbers",
    products: [
      {
        id: "1",
        name: "Individual Personality Analysis",
        price: 9999,
        image: "/cat111.png",
        description: "Ever wondered why you think, feel, and act a certain way? Your date of birth reveals more than you know! Get an in-depth breakdown of your strengths, weaknesses, and life.",
        customizerLink: "/customize/personality"
      },
      {
        id: "2",
        name: "Couple Compatibility Analysis",
        price: 12999,
        image: "/cat222.png",
        description: "Are you and your partner a perfect match? Discover the compatibility between you and your loved one and understand how to enhance your relationship dynamics."
      },
      {
        id: "3",
        name: "Name & Phone Number Analysis",
        price: 9999,
        image: "/cat333.png",
        description: "Your name and phone number vibrate with unique energy. Let's analyze whether they align with your destiny and, if needed, make tweaks for a more positive influence."
      },
      {
        id: "4",
        name: "Personalized Guidance",
        price: 12999,
        image: "/cat444.png",
        description: "At the end of every session, I provide a tailored roadmap with actionable solutions, including lucky colors, numbers, and planets that influence your success."
      },
    ]
  };

  const teamData = {
    heading: "Meet Our Pro Team",
    skaters: [
      {
        firstName: "Tony",
        lastName: "Hawk",
        photoBackground: "/skaters/tony-bg.jpg",
        photoForeground: "/skaters/tony-fg.jpg",
        customizerLink: "/customize/tony"
      },
      {
        firstName: "Rodney",
        lastName: "Mullen",
        photoBackground: "/skaters/rodney-bg.jpg",
        photoForeground: "/skaters/rodney-fg.jpg",
        customizerLink: "/customize/rodney"
      },
      {
        firstName: "Tony",
        lastName: "Hawk",
        photoBackground: "/skaters/tony-bg.jpg",
        photoForeground: "/skaters/tony-fg.jpg",
        customizerLink: "/customize/tony"
      },
      {
        firstName: "Rodney",
        lastName: "Mullen",
        photoBackground: "/skaters/rodney-bg.jpg",
        photoForeground: "/skaters/rodney-fg.jpg",
        customizerLink: "/customize/rodney"
      },
    ]
  };


  return (
    <div className="scroll-smooth relative">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <TextImage
          slice={{
            slice_type: "text_image",
            variation: "default",
            primary: {
              theme: "Blue",
              heading: "About Me",
              body: "Hey there! I'm Jessica, a numerology enthusiast with a master's in psychology and an unshakable belief in the universe's power. My passion lies in decoding numbers and making lives better. Let's uncover the numerological secrets hidden in your DOB!",
              button: {
                text: "Click Here",
                url: "#"
              },
              foreground_image: {
                url: "/jess.png",
                alt: "Placeholder Image"
              },
              background_image: {
                url: "/bg.png",
                alt: "Placeholder Image"
              }
            }
          }}
        />
      </section>

      {/* <section className="pt-16">
        <VideoBlock
          imageSrc="/card-gurl.png"
          imageAlt="Card Girl Image"
        />
      </section> */}

      <section id="services">
        <Categories {...categoriesData} />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <Footer />
    </div>
  )
}
