'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

interface ProjectGalleryProps {
  images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [index, setIndex] = useState(-1);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  if (images.length === 0) {
    return (
      <p className='text-muted-foreground'>
        No hay imágenes adicionales en la galería.
      </p>
    );
  }

  const slides = images.map((image) => ({ src: image }));

  return (
    <div className="relative">
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {images.map((image, i) => (
            <div
              className='relative flex-[0_0_100%] aspect-video rounded-lg overflow-hidden border cursor-pointer hover:opacity-80 transition-opacity'
              key={i}
              onClick={() => setIndex(i)}
            >
              <Image
                src={image}
                alt={`Project gallery image ${i + 1}`}
                fill
                sizes='100vw'
                className='object-cover'
              />
            </div>
          ))}
        </div>
      </div>

      {canScrollPrev && (
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background/80"
          >
            <FaArrowLeft />
          </Button>
        )}
        {canScrollNext && (
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background/80"
          >
            <FaArrowRight />
          </Button>
        )}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </div>
  );
}
