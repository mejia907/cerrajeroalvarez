import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { type SlideType } from "../types/slide"

import '../styles/global.css';

type SlideProps = {
   slides: SlideType[],
   withImage?: string,
   heightImage: string
}

export const Slide = ({ slides, withImage, heightImage }: SlideProps) => {

   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
      AutoScroll({ playOnInit: true })
   ])

   return (
      <section className="mt-24">
         <div className="embla mt-10">
            <div className="embla__viewport" ref={emblaRef}>
               <div className="embla__container">
                  {slides.map((img, index) => (
                     <div className="embla__slide" key={index}>
                        <img src={`${img.image}`} className={`object-contain m-auto shadow-img ${heightImage} ${withImage}`} alt="Cerrajero 24h"  />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}