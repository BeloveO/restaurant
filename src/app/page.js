import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders.js";

export default function Home() {
  return (
    <>
     <Hero />
     <HomeMenu />
     <section className="text-center my-16">
      <SectionHeaders 
        subHeader={'Our Story'}
        mainHeader={'About Us'} />
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
          adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. 
          Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
          non fermentum diam nisl sit amet erat. Duis semper.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
          adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. 
          Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
          non fermentum diam nisl sit amet erat. Duis semper.
        </p>
        <p>
        Sed non mauris vitae erat consequat auctor eu in elit. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
        per inceptos himenaeos. Fusce sodales. 
        Quisque eu urna vel enim commodo pellentesque.
        </p>
      </div>
     </section>
     <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+2344532386266">
            +234 453 238 6266
          </a>
        </div>
      </section>
    </>
  );
}
