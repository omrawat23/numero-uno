import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
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
    heading: "Latest Drop",
    body: "Check out our amazing collection of custom skateboards",
    products: [
      {
        id: "1",
        name: "Classic Deck",
        price: 9999,
        image: "/cat111.png",
        customizerLink: "/customize/classic"
      },
      {
        id: "2",
        name: "Pro Deck",
        price: 12999,
        image: "/cat222.png",
        customizerLink: "/customize/pro"
      },
      {
        id: "3",
        name: "Classic Deck",
        price: 9999,
        image: "/cat333.png",
        customizerLink: "/customize/classic"
      },
      {
        id: "4",
        name: "Pro Deck",
        price: 12999,
        image: "/cat444.png",
        customizerLink: "/customize/pro"
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
    <div>
      <Hero />

      <TextImage
        slice={{
          slice_type: "text_image",
          variation: "default",
          primary: {
            theme: "Blue",
            heading: "Default Title",
            body: "Default Description",
            button: {
              text: "Click Here",
              url: "#"
            },
            foreground_image: {
              url: "/front.png",
              alt: "Placeholder Image"
            },
            background_image: {
              url: "/bg.png",
              alt: "Placeholder Image"
            }
          }
        }}
      />

      <VideoBlock
        slice={videoSlice}
        index={0}
        slices={[]}
        context={{}}
      />

      <Categories {...categoriesData} />
      <Pricing />
      <Team {...teamData} />

         <Footer />
    </div>
  )
}
