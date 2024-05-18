"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPagination,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Img from "~/components/img";

export default function ShowCaseCarousel() {
  return (
    <>
      <style jsx>{`
        .embla {
          max-width: 70rem;
          margin: auto;
          --slide-height: 19rem;
          --slide-spacing: 1rem;
          --slide-size: 100%;
          --slide-spacing-sm: 1.6rem;
          --slide-size-sm: 50%;
          --slide-spacing-lg: 2rem;
          --slide-size-lg: calc(100% / 3);
        }

        .embla__viewport {
          overflow: hidden;
        }
        .embla__container {
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y pinch-zoom;
          margin-left: calc(var(--slide-spacing) * -1);
        }
        @media (min-width: 750px) {
          .embla__container {
            margin-left: calc(var(--slide-spacing-sm) * -1);
          }
        }
        @media (min-width: 1200px) {
          .embla__container {
            margin-left: calc(var(--slide-spacing-lg) * -1);
          }
        }
        .embla__slide {
          min-width: 0;
          flex: 0 0 var(--slide-size);
          padding-left: var(--slide-spacing);
        }
        @media (min-width: 750px) {
          .embla__slide {
            flex: 0 0 var(--slide-size-sm);
            padding-left: var(--slide-spacing-sm);
          }
        }
        @media (min-width: 1200px) {
          .embla__slide {
            flex: 0 0 var(--slide-size-lg);
            padding-left: var(--slide-spacing-lg);
          }
        }
        .embla__slide__number {
          box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
          border-radius: 1.8rem;
          font-size: 4rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          height: var(--slide-height);
        }
        .embla__controls {
          display: grid;
          grid-template-columns: auto 1fr;
          justify-content: space-between;
          gap: 1.2rem;
          margin-top: 1.8rem;
        }
        .embla__buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
          align-items: center;
        }
        .embla__button {
          -webkit-tap-highlight-color: rgba(
            var(--text-high-contrast-rgb-value),
            0.5
          );
          -webkit-appearance: none;
          appearance: none;
          background-color: transparent;
          touch-action: manipulation;
          display: inline-flex;
          text-decoration: none;
          cursor: pointer;
          border: 0;
          padding: 0;
          margin: 0;
          box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
          width: 3.6rem;
          height: 3.6rem;
          z-index: 1;
          border-radius: 50%;
          color: var(--text-body);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .embla__button:disabled {
          color: var(--detail-high-contrast);
        }
        .embla__button__svg {
          width: 35%;
          height: 35%;
        }
        .embla__dots {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          align-items: center;
          margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
        }
        .embla__dot {
          -webkit-tap-highlight-color: rgba(
            var(--text-high-contrast-rgb-value),
            0.5
          );
          -webkit-appearance: none;
          appearance: none;
          background-color: transparent;
          touch-action: manipulation;
          display: inline-flex;
          text-decoration: none;
          cursor: pointer;
          border: 0;
          padding: 0;
          margin: 0;
          width: 2.6rem;
          height: 2.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .embla__dot:after {
          box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          content: "";
        }
        .embla__dot--selected:after {
          box-shadow: inset 0 0 0 0.2rem var(--text-body);
        }
      `}</style>
      <Carousel
        className=".embla h-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ playOnInit: false, delay: 3000 })]}
      >
        <CarouselContent className="h-full">
          {[10, 9, 8, 11, 12, 1, 2, 3, 4, 5, 6, 7].map((itemIndex, index) => (
            <CarouselItem
              key={itemIndex + index}
              // className="h-full embla__slide"
            >
              <div className="relative h-full w-full">
                <Img
                  src={`/images/new/${itemIndex}.jpeg`}
                  // alt={props.data.title}
                  width={292.8}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselPagination className="absolute left-1/2 top-2 -translate-x-1/2 transform" />
      </Carousel>
    </>
  );
}
