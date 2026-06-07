import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/3a008752-2035-4a8f-ae5c-37c72eb2b38b/files/90145160-d146-4bf8-946b-7e3036b26e0f.jpg',
  'https://cdn.poehali.dev/projects/3a008752-2035-4a8f-ae5c-37c72eb2b38b/files/015b7251-5ff2-49bc-800d-da4ed97c7032.jpg',
  'https://cdn.poehali.dev/projects/3a008752-2035-4a8f-ae5c-37c72eb2b38b/files/57774abf-7d5a-40ac-ada9-adf2100a5c0e.jpg',
  'https://cdn.poehali.dev/projects/3a008752-2035-4a8f-ae5c-37c72eb2b38b/files/c885406d-82bd-4cf0-bae3-5c4103c26691.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-12">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-white/30 bg-black/60 shadow-2xl md:h-64 md:w-64">
                <div className="text-center">
                  <div className="text-4xl font-bold tracking-widest text-white md:text-5xl">ПК</div>
                  <div className="text-2xl font-light text-green-400 md:text-3xl">58А</div>
                </div>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-4">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Детекторы FPV-дронов
                </p>
                <p className="text-xl font-light text-green-400 md:text-2xl">
                  Серия ПК-58А — надёжная защита периметра
                </p>
                <p className="max-w-lg text-base text-white/70 md:text-lg">
                  Профессиональное оборудование для обнаружения FPV-дронов. Работает на открытом воздухе, не требует специальных знаний.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button className="rounded-none border border-white bg-white px-8 py-3 text-sm font-medium uppercase tracking-widest text-black transition-colors hover:bg-transparent hover:text-white">
                    Узнать подробнее
                  </button>
                  <button className="rounded-none border border-white/40 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white/80 transition-colors hover:border-white hover:text-white">
                    Связаться с нами
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}