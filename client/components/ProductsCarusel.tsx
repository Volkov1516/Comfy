import css from '../styles/ProductsCarusel.module.scss';

const ProductsCarusel = () => {
    return (
        <section className={css.container}>
            <div className={css.header}>
                <h3>Хиты продаж</h3>
            </div>
            <div className={css.carusel}>
                <div className={css.buttonPrev}>
                    <img src="/img/discArrow.svg" alt="Arrow" width="16px" height="16px" />
                </div>
                <div className={css.item}>
                    <div className={css.image}>
                        <img src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Banner" width="144px" height="144px" />
                    </div>
                    <div className={css.name}><a href="#">Смартфон Apple iPhone 11 64Gb Black</a></div>
                    <div className={css.actions}>
                        <div className={css.price}>
                            <div className={css.priceCurrent}>22 999</div>
                        </div>
                        <div className={css.actionButton}>
                            <img src="/img/cart.svg" alt="Banner" width="20px" height="20px" />
                        </div>
                    </div>
                </div>
                <div className={css.item}>
                    <div className={css.image}>
                        <img src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Banner" width="144px" height="144px" />
                    </div>
                    <div className={css.name}><a href="#">Смартфон Apple iPhone 11 64Gb Black</a></div>
                    <div className={css.actions}>
                        <div className={css.price}>
                            <div className={css.priceCurrent}>22 999</div>
                        </div>
                        <div className={css.actionButton}>
                            <img src="/img/cart.svg" alt="Banner" width="20px" height="20px" />
                        </div>
                    </div>
                </div>
                <div className={css.item}>
                    <div className={css.image}>
                        <img src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Banner" width="144px" height="144px" />
                    </div>
                    <div className={css.name}><a href="#">Смартфон Apple iPhone 11 64Gb Black</a></div>
                    <div className={css.actions}>
                        <div className={css.price}>
                            <div className={css.priceCurrent}>22 999</div>
                        </div>
                        <div className={css.actionButton}>
                            <img src="/img/cart.svg" alt="Banner" width="20px" height="20px" />
                        </div>
                    </div>
                </div>
                <div className={css.item}>
                    <div className={css.image}>
                        <img src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Banner" width="144px" height="144px" />
                    </div>
                    <div className={css.name}><a href="#">Смартфон Apple iPhone 11 64Gb Black</a></div>
                    <div className={css.actions}>
                        <div className={css.price}>
                            <div className={css.priceCurrent}>22 999</div>
                        </div>
                        <div className={css.actionButton}>
                            <img src="/img/cart.svg" alt="Banner" width="20px" height="20px" />
                        </div>
                    </div>
                </div>
                <div className={css.buttonNext}>
                    <img src="/img/discArrow.svg" alt="Arrow" width="16px" height="16px" />
                </div>
            </div>
        </section>
    );
}

export default ProductsCarusel;
