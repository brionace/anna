import { useState } from 'react'
import styles from '../styles/Project.module.scss'
import { CONSTANTS } from '../utils/lib'

type CategoriesType = {
    name: Record<string, Record<string, Record<string, string>>>,
    images: Record<string, Record<string, Record<string, string>>>
}

export default function Project({ name, images }: CategoriesType) {
    const [large, setLarge] = useState<boolean>(false)
    if (images === undefined) return false
    const imagelist = images.data.map((image, idx) => {
        return <img key={idx} src={`${CONSTANTS.ADMIN_URL}${image.attributes.url}`} alt='' onClick={doSetLarge} />
    })

    function doSetLarge() {
        setLarge(!large)
        if(!large){
            doCarousel()
        }
    }

    function doCarousel(){
        const slides = document.querySelector(".carousel")

        if (!slides) return false
        const delay = 3000 // ms
        const slidesCount = slides.childElementCount
        const maxLeft = (slidesCount - 1) * 100 * -1;
        
        let current = 0;
        
        function changeSlide(next = true) {
          if (next) {
            current += current > maxLeft ? -100 : current * -1
          } else {
            current = current < 0 ? current + 100 : maxLeft
          }
        
          slides.style.left = current + "%";
        }
        
        let autoChange = setInterval(changeSlide, delay)
        const restart = function() {
          clearInterval(autoChange)
          autoChange = setInterval(changeSlide, delay)
        }
        
        // Controls
        // document.querySelector(".next").addEventListener("click", function() {
        //   changeSlide();
        //   restart();
        // });
        
        // document.querySelector(".prev").addEventListener("click", function() {
        //   changeSlide(false);
        //   restart();
        // });
    }

    return (
        <div className={large ? styles.bigup : ''}>
            <div className={styles.card}>
                <figure className={styles.figure}>
                    {large && <button className={`${styles.close}`} onClick={doSetLarge}>CLOSE</button>}
                    <span className={`${styles.nav} prev`}>PREV</span>
                    <span className={`${styles.nav} next`}>NEXT</span>
                    <div className={`${styles.carousel} carousel`}>
                        {imagelist}
                    </div>
                </figure>
                <h3>{name}</h3>
            </div>
        </div>
    )
}
