

"use client";
import { useRef } from "react";
import Hero from "../app/frontend/ui/Sections/Home/Hero";
import Features from "../app/frontend/ui/Sections/Home/Feature";
import Pricing from "../app/frontend/ui/Sections/Home/Pricing";
import Background from "../app/frontend/ui/background";
import Stats from "../app/frontend/ui/Sections/Home/Stats";
import Newsletter from "../app/frontend/ui/Sections/Home/Newsletter";
import HIW from "./frontend/ui/Sections/Home/hiw/HIW";

export default function Home() {
  const howitworksRef = useRef(null);
  const pricingRef = useRef(null);
  const newsletterRef = useRef(null);

  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Background />
      <Hero
        scrollToSection={scrollToSection}
        howitworksRef={howitworksRef}
        pricingRef={pricingRef}
        newsletterRef={newsletterRef}
      />

      <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-6 lg:mx-0 lg:max-w-none flex gap-4 mb-8 m-4 p-2">
        <div className="p-2 lg:w-full w-full">
          <div className="rounded-2xl bg-gray-50 text-center ring-1 ring-inset ring-gray-900/5 lg:flex-row lg:justify-center lg:py-16">
            <div className=" w-full h-full">
              <section className="w-full h-full">
                <div className="container px-4 md:px-6">
                  <div className="space-y-10 " ref={howitworksRef}>
                    <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                      How it works
                    </h2>
                    <div className="flex gap-6">
                      <div className="rounded-lg overflow-hidden w-full">
                        <video
                          className="w-full aspect-video"
                          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          controls
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div >
        <HIW />
      </div>
      <Features />
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <div ref={newsletterRef}>
        <Newsletter />
      </div>
    </>
  );
}
