import css from '../styles/Product.module.scss';

const Product = () => {
    return (
        <div className={css.container}>
            <div>Breadcrumbs</div>
            <div className={css.tabs}>
                <a className={css.tabItem} href="#">ВСЕ О ТОВАРЕ</a>
                <a className={css.tabItem} href="#">ХАРАКТЕРИСТИКИ</a>
                <a className={css.tabItem} href="#">ОТЗЫВЫ</a>
                <a className={css.tabItem} href="#">ВОПРОСЫ</a>
                <a className={css.tabItem} href="#">ВИДЕО</a>
                <a className={css.tabItem} href="#">АКСЕССУАРЫ</a>
                <a className={css.tabItem} href="#">СЕРВИСЫ</a>
            </div>
            <div className={css.general}>
                <div className={css.gallery}>
                    <div className={css.list}>
                        <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="52px" height="52px" />
                        <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="52px" height="52px" />
                        <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="52px" height="52px" />
                        <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="52px" height="52px" />
                        <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="52px" height="52px" />
                    </div>
                    <div className={css.mainImage}>
                    <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="100%" height="380px" />
                    </div>
                </div>
                <div className={css.info}>
                    <h1 className={css.name}>Смартфон Apple iPhone 11 128Gb Black</h1>
                    <div className={css.buy}></div>
                </div>
            </div>
        </div>
    );
}

export default Product;
