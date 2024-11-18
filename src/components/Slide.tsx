import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { type SlideType } from "../types/slide"

import '../styles/global.css';

type SlideProps = {
   slides: SlideType[],
   withImage: string,
   heightImage: string
}

export const Slide = ({ slides, withImage, heightImage }: SlideProps) => {

   const [emblaRef, emblaApi] = useEmblaCarousel({loop:true}, [
      AutoScroll({ playOnInit: true })
   ])

   return (
      <section className="embla">
         <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
               {slides.map((img, index) => (
                  <div className="embla__slide" key={index}>
                     <img src={`${img.image}`} className={`object-contain m-auto ${heightImage} ${withImage}`} />
                  </div>
               ))}
            </div>
         </div>
      </section >
   )
}