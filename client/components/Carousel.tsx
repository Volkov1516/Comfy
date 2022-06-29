import { useState, useEffect } from 'react';

import css from '../styles/Carousel.module.scss';

type ItemTypes = {
    img: string;
    text: string;
    price: number;
}
type CarouselTypes = {
    header: string;
    items: ItemTypes[];
}

const mockData = {
    header: 'Посмотреть еще',
    items: [
        {
            img: "/img/apple_iphone_11_64gb_black_0_3.webp",
            text: "Смартфон Apple iPhone 11 64Gb Black",
            price: 22999,
        },
        {
            img: "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/u/a/ua-galaxy-a53-5g-a536-sm-a536ezkhsek-531826029_1__1.jpg",
            text: "Смартфон Samsung Galaxy A53 128Gb Black",
            price: 15999,
        },
        {
            img: "/img/apple_iphone_11_64gb_black_0_3.webp",
            text: "Смартфон Apple iPhone 11 64Gb Black",
            price: 22999,
        },
        {
            img: "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/u/a/ua-galaxy-a53-5g-a536-sm-a536ezkhsek-531826029_1__1.jpg",
            text: "Смартфон Samsung Galaxy A53 128Gb Black",
            price: 15999,
        },
        {
            img: "/img/apple_iphone_11_64gb_black_0_3.webp",
            text: "Смартфон Apple iPhone 11 64Gb Black",
            price: 22999,
        },
        {
            img: "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/u/a/ua-galaxy-a53-5g-a536-sm-a536ezkhsek-531826029_1__1.jpg",
            text: "Смартфон Samsung Galaxy A53 128Gb Black",
            price: 15999,
        },
        {
            img: "/img/apple_iphone_11_64gb_black_0_3.webp",
            text: "Смартфон Apple iPhone 11 64Gb Black",
            price: 22999,
        },
        {
            img: "https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/u/a/ua-galaxy-a53-5g-a536-sm-a536ezkhsek-531826029_1__1.jpg",
            text: "Смартфон Samsung Galaxy A53 128Gb Black",
            price: 15999,
        },
    ]
}

const Carousel = ({ header = mockData.header, items = mockData.items }: CarouselTypes) => {
    const [offset, setOffset] = useState(0);
    console.log(mockData.header)

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
                    {mockData?.items?.map((i: any) => (
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
