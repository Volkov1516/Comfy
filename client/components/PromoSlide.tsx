import { useState, useEffect } from 'react';
import cx from 'classnames';

import css from '../styles/PromoSlide.module.scss';
const PromoSlide = () => {
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
                <div className={css.slideItem}>
                    <img src="https://cdn.comfy.ua/media/catalog/product/cache/5/image/600x/9df78eab33525d08d6e5fb8d27136e95/u/a/ua-galaxy-a53-5g-a536-sm-a536ezkhsek-531826029_1__1.jpg" alt="Banner" width="100%" height="100%" />
                </div>
                <div className={css.slideItem}>
                    <img src="https://cdn.comfy.ua/media/catalog/product/cache/5/image/600x/9df78eab33525d08d6e5fb8d27136e95/u/a/ua-galaxy-a53-5g-a536-sm-a536ezkhsek-531826018_1.jpg" alt="Banner" width="100%" height="100%" />
                </div>
                <div className={css.slideItem}>
                    <img src="https://cdn.comfy.ua/media/catalog/product/cache/5/image/600x/9df78eab33525d08d6e5fb8d27136e95/u/a/ua-galaxy-a53-5g-a536-sm-a536ezkhsek-531826017_1.jpg" alt="Banner" width="100%" height="100%" />
                </div>
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

export default PromoSlide;