import css from '../styles/PromoCategories.module.scss';

import ProductCard from './common/ProductCard';

type ProductType = {
    name: string,
    price: number,
    rate: number,
    images: string[],
    labels: string[],
};

type PromoCategoriesType = {
    header: string;
    products?: ProductType[];
};

const PromoCategories = ({ products, header }: PromoCategoriesType) => {
    return (
        <section className={css.container}>
            <div className={css.header}>
                <h3>{header}</h3>
                <a className={css.more} href="#">
                    <span>Смотреть все</span>
                    <img src="/img/arrowPromo.svg" alt="Banner" width="20px" height="20px" />
                </a>
            </div>
            <div className={css.body}>
                <div className={css.cardContainer}>
                    {products?.map((i) => <ProductCard product={i} />)}
                </div>
            </div>
        </section>
    );
};

export default PromoCategories;
