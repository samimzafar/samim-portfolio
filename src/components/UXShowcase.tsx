import { useEffect, useRef, useState } from "react";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {ProjectImagesList} from "@/lib/utils.ts";

const UXShowcase = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const pausedRef = useRef(false);

  // Simple autoplay: advance every 3s, pause on hover
  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (!pausedRef.current) {
        api.scrollNext();
      }
    }, 3000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Shots · UX</h2>
          <p className="text-muted-foreground">A quick look at app screens, flows and visual style</p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={(x) => setApi(x)}
            className="w-full"
          >
            <CarouselContent>
              {ProjectImagesList.map((src, i) => (
                // 1 per row on small screens, 2 per row from md and up
                <CarouselItem key={i} className="basis-full sm:basis-3/4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    {/* Clean device-like card, no distracting notch */}
                    <div className="mx-auto max-w-[360px] md:max-w-[420px] rounded-3xl border border-border bg-card/60 shadow-xl backdrop-blur-sm">
                      <div className="p-3">
                        <AspectRatio ratio={9/19.5} className="rounded-2xl overflow-hidden bg-black/95">
                          <img
                            src={src}
                            alt={`Mobile screen ${i + 1}`}
                            className="h-full w-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = "none";
                              const parent = target.parentElement;
                              if (parent && !parent.querySelector(".fallback")) {
                                const span = document.createElement("div");
                                span.className = "fallback flex h-full w-full items-center justify-center text-xs text-muted-foreground";
                                span.textContent = "Screenshot missing";
                                parent.appendChild(span);
                              }
                            }}
                          />
                        </AspectRatio>
                      </div>
                      {/* Simple caption to guide the viewer */}
                      <div className="px-4 pb-4 text-center text-xs text-muted-foreground">Screen {i + 1}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-10" />
            <CarouselNext className="-right-4 md:-right-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UXShowcase;
