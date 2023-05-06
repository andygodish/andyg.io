import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Hero from "~/components/Hero/Hero";
import ImageSlider from "~/components/ImageSlider/ImageSlider";

export default function Index() {
  const app_name = ENV.APP_NAME;
  return (
    <main className="relative m-auto min-h-screen flex flex-col text-white">
      <Hero />
      <div className="w-full bg-gray-900">
        <div className="flex flex-col lg:flex-row text-center justify-center items-center justify-between max-w-screen-lg px-5 py-10 mx-auto">
          <span className="text-3xl mb-8 lg:mb-0 transition-all duration-500">
            Schedule Your Free Estimate Today
          </span>
          {/* <button className="border-2 px-24 py-1 rounded hover:bg-gray-700 active:bg-gray-600">Contact</button> */}
          <Link to={"/contact"}>
          <Button className="px-36" variant="outlined">Contact</Button>
          </Link>
        </div>
      </div>
      <div className="text-black flex flex-col justify-center items-center justify-between max-w-screen-xl px-5 py-24 m-auto">
        <span className="text-6xl mb-4 font-[poppins] font-bold mb-8">{app_name}</span>
        <span className="mb-8 italic text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada a libero ac tincidunt.
          In vitae feugiat massa. Cras lobortis iaculis enim, at ornare libero molestie in. Morbi fermentum
          arcu nec ante mollis aliquam. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Curabitur eu magna nec libero euismod molestie
          id sit amet enim.</span>
        <span className="mb-16">
          Reach out today for your free estimate
        </span>
        <ImageSlider />
      </div>
    </main >
  );
}
