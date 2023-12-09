import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";
import Banner from "@/components/Banner";
import FeedbackSlider from "@/components/sliders/FeedbackSlider";
import Blogs from "@/components/Blogs";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main
      className={`bg-primaryDark min-h-screen text-primaryWhite ${poppins.className}`}
    >
      <Header />
      <Banner />
      <TechStack />
      <FeedbackSlider />
      <Projects />
      <Blogs />
    </main>
  );
}
