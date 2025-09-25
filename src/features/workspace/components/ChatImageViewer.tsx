import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
import { dummyImages } from "@/mocks/messages";

export function ChatImageViewer() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!dummyImages?.length) return null;

  return (
    <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto">
      {dummyImages.map((img, index) => (
        <Dialog key={img.id} onOpenChange={(open) => open && setSelectedIndex(index)}>
          <DialogTrigger asChild>
            <button className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
              <img
                src={img.src}
                alt={img.alt || "Chat image"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              />
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-[95vw] w-full p-0 justify-center border-none shadow-none backdrop-blur-3xl! bg-black/90!">
            <Carousel opts={{ startIndex: selectedIndex }} className="w-[60vw]">
              <CarouselContent>
                {dummyImages.map((img) => (
                  <CarouselItem key={img.id} className="flex justify-center p-0">
                    <div className="relative w-full aspect-video max-h-[80vh] flex items-center justify-center">
                      <img src={img.src} alt={img.alt || "Chat image"} className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:-left-6 bg-black/50 hover:bg-black/70 text-white border-none" />
              <CarouselNext className="right-2 md:-right-6 bg-black/50 hover:bg-black/70 text-white border-none" />
            </Carousel>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
