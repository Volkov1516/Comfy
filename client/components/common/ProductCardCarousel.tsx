import { useState, useEffect } from 'react';
import cx from 'classnames';

import css from '../../styles/ProductCardCarousel.module.scss';

type ProductCardCarouselType = {
    images: string[];
    colors: {}[];
}

const ProductCardCarousel = ({ images, colors }: ProductCardCarouselType) => {
    const [offset, setOffset] = useState(0);

    const handleNextSlide = () => {
        if (offset === -200) return;

        setOffset(offset - 100);
    };

    const handlePrevSlide = () => {
        if (offset === 0) return;

        setOffset(offset + 100);
    };

    return (
        <div className={css.slide}>
            <div className={css.window} style={{ transform: `translate(${offset}%)` }}>
                {images.map((i: any) => (
                    <div className={css.slideItem}>
                        <img className={css.image} src={i} alt="Banner" />
                        <div className={css.controlls}>
                            <div className={css.img}>
                                <img src="/img/compare.svg" alt="Arrow" width="20px" height="20px" />
                            </div>
                            <div className={css.img}>
                                <img src="/img/heart.svg" alt="Arrow" width="20px" height="20px" />
                            </div>
                        </div>
                        <div className={css.colors}>
                            {colors.map((i:any) => (
                                <div className={css.color} style={{backgroundColor: `${i.simple}`}}></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className={css.sliderNav}>
                <img className={css.sliderPrev} src="https://www.svgrepo.com/show/17403/left-arrow.svg" alt="Banner" width="12px" height="12px" onClick={handlePrevSlide} />
                <div className={cx(css.dot, offset === 0 && css.active)}></div>
                <div className={cx(css.dot, offset === -100 && css.active)}></div>
                <div className={cx(css.dot, offset === -200 && css.active)}></div>
                <img className={css.sliderNext} src="https://www.svgrepo.com/show/17403/left-arrow.svg" alt="Banner" width="12px" height="12px" onClick={handleNextSlide} />
            </div>
        </div>
    );
};

export default ProductCardCarousel;