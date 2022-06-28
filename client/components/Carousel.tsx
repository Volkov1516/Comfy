import css from '../styles/Carousel.module.scss';

interface CarouselTypes {
    title: string;
    titleSize: string;
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Carousel = () => {
    return (
        <div className={css.container}>
            <p className={css.title}>Хиты продаж</p>
            <div className={css.carousel}>
                <div className={css.btnPrev}>
                    <img src="/img/discArrow.svg" alt="button left" width="16px" height="16px" />
                </div>


                <div className={css.items}>
                    {items.map((item: any) => (
                        <div className={css.item}>
                            <div className={css.info}>
                                <div className={css.img}>
                                    <img src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Banner" />
                                </div>
                                <div className={css.text}>
                                    <a href="#"> {item} Смартфон Apple iPhone 11 64Gb Black</a>
                                </div>
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
                    ))}
                </div>


                <div className={css.btnNext}>
                    <img src="/img/discArrow.svg" alt="button right" width="16px" height="16px" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
