import { useState, useEffect } from 'react';
import cx from 'classnames';

import css from '../styles/Carousel.module.scss';

import { mockCarouselData } from '../mocks/mockCarouselData';

type Display = 'normal' | 'small';

type ItemTypes = {
    img: string;
    text: string;
    price: number;
}

type CarouselTypes = {
    display: Display;
    header: string;
    items: ItemTypes[];
}

const Carousel = ({ display = 'normal', header = mockCarouselData.header, items = mockCarouselData.items }: CarouselTypes) => {
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
            <h3 className={css.header}>{header}</h3>
            <div className={css.carousel}>
                <div className={css.btnPrev} onClick={handlePrevSlide}>
                    <img src="/img/discArrow.svg" alt="Button left" width="16px" height="16px" />
                </div>
                <div className={css.window}>
                    {items?.map((i: any) => (
                        <div className={css.itemContainer} style={{ transform: `translate(${offset}%)` }}>
                            <div className={css.item}>
                                <div className={css.image}>
                                    <img src={i.img} alt="Product image" width="144px" height="144px" />
                                </div>
                                <div className={css.text}>
                                    <a href="#">{i.text}</a>
                                </div>
                                <div className={css.actions}>
                                    <div className={css.price}>
                                        <div className={css.priceCurrent}>{i.price}</div>
                                    </div>
                                    <div className={css.actionButton}>
                                        <img src="/img/cart.svg" alt="Cart image" width="20px" height="20px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={css.btnNext} onClick={handleNextSlide}>
                    <img src="/img/discArrow.svg" alt="Button right" width="16px" height="16px" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
