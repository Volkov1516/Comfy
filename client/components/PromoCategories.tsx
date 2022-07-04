import css from '../styles/PromoCategories.module.scss';

import ProductCard from './common/ProductCard';

type PromoCategoriesType = {
    header: string;
    products?: any[];
}

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
                    {products?.map((i: any) => (<ProductCard product={i} />))}
                </div>
            </div>
        </section>
    );
};

export default PromoCategories;
