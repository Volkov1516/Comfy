import { useState, useEffect } from 'react';

import css from '../styles/Carousel.module.scss';

const items = [1, 2, 3, 4, 5, 6, 7, 8];

const Carousel = () => {
    const [offset, setOffset] = useState(0);

    const handleNextSlide = () => {
        if (offset === -((items.length - 4) * 100)) return;

        setOffset(offset - 100);
    };

    const handlePrevSlide = () => {
        if (offset === 0) return;

        setOffset(offset + 100);
    };

    return (
        <div className={css.container}>
            <h3 className={css.header}>Header</h3>
            <div className={css.carousel}>
                <div className={css.btnPrev} onClick={handlePrevSlide}>
                    <img src="/img/discArrow.svg" alt="Arrow" width="16px" height="16px" />
                </div>
                <div className={css.window}>
                    {items.map((i: any) => (
                        <div className={css.itemContainer} style={{ transform: `translate(${offset}%)` }}>
                            <div className={css.item}>
                                <div className={css.image}>
                                    <img src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Banner" width="144px" height="144px" />
                                </div>
                                <div className={css.text}>
                                    <a href="#">Смартфон Apple iPhone 11 64Gb Black</a>
                                </div>
                                <div className={css.actions}>
                                    <div className={css.price}>
                                        <div className={css.priceCurrent}>22 999</div>
                                    </div>
                                    <div className={css.actionButton}>
                                        <img src="/img/cart.svg" alt="Banner" width="20px" height="20px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={css.btnNext} onClick={handleNextSlide}>
                    <img src="/img/discArrow.svg" alt="Arrow" width="16px" height="16px" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
