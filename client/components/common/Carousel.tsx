import { useState, useEffect } from 'react';
import cx from 'classnames';

import css from '../../styles/Carousel.module.scss';

type Display = 'normal' | 'small' | 'blog';

type ItemTypes = {
    img: string;
    text: string;
    price?: number;
    date?: string;
    header?: string;
};

type CarouselTypes = {
    display: Display;
    header: string;
    items: ItemTypes[];
};

const Carousel = ({ display, header, items }: CarouselTypes) => {
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
            <h3 className={cx(css.header, css[display])}>{header}</h3>
            <div className={css.carousel}>
                <div className={cx(offset === 0 ? css.btnPrevDisabled : css.btnPrev, css[display])} onClick={handlePrevSlide}>
                    <img src="/img/discArrow.svg" alt="Button left" width="16px" height="16px" />
                </div>
                <div className={css.window}>
                    {items?.map((i: any) => (
                        <div className={cx(css.itemContainer, css[display])} style={{ transform: `translate(${offset}%)` }}>
                            <div className={cx(css.item, css[display])}>
                                <div className={cx(css.info, css[display])}>
                                    <div className={cx(css.image, css[display])}>
                                        <img src={i.img} alt="Product image" />
                                    </div>
                                    <h5 className={cx(css.header, css[display])}>{i.header}</h5>
                                    <div className={css.text}>
                                        <a href="#">{i.text}</a>
                                    </div>
                                    <p>{i.date}</p>
                                </div>
                                <div className={cx(css.actions, css[display])}>
                                    <div className={css.price}>
                                        <div className={css.priceCurrent}>{i.price}</div>
                                    </div>
                                    <div className={cx(css.actionButton, css[display])}>
                                        <img src="https://www.svgrepo.com/show/378541/cart.svg" alt="Cart image" width="20px" height="20px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx(offset === -((items.length - 4) * 100) ? css.btnNextDisabled : css.btnNext, css[display])} onClick={handleNextSlide}>
                    <img src="/img/discArrow.svg" alt="Button right" width="16px" height="16px" />
                </div>
            </div>
        </div >
    );
};

export default Carousel;
