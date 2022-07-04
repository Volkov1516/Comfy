import Link from 'next/link';

import css from '../styles/Products.module.scss';

import ProductCard from './common/ProductCard';

const Products = ({ products }: any) => {
    return (
        <div className={css.container}>
            <div>Breadcrumbs</div>
            <div className={css.categoryInfo}>
                <h1>Смартфоны</h1>
            </div>
            <div className={css.content}>


                <div className={css.filter}>
                    <div className={css.filterItem}>
                        <div className={css.price}>
                            <div className={css.header}>
                                <b>Цена</b>
                            </div>
                            <div className={css.content}>
                                <span>от</span>
                                <input className={css.input} type="number" />
                                <span>до</span>
                                <input className={css.input} type="number" />
                                <span>$</span>
                            </div>
                            <div className={css.submit}>
                                <span>ПРМЕНИТЬ</span>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Бренд</b>
                        </div>
                        <div className={css.content}>
                            <a href="#"> <input type="checkbox" /> Apple </a>
                            <a href="#">  <input type="checkbox" /> Samsung </a>
                            <a href="#">  <input type="checkbox" /> Xiaomi </a>
                            <a href="#">  <input type="checkbox" /> OPPO </a>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Модель</b>
                        </div>
                        <div className={css.content}>
                            <a href="#">  <input type="checkbox" /> iPhone 13 Pro Max </a>
                            <a href="#">  <input type="checkbox" /> iPhone 13 Pro </a>
                            <a href="#">  <input type="checkbox" /> iPhone 13 </a>
                            <a href="#">  <input type="checkbox" /> iPhone 13 mini </a>
                            <a href="#">  <input type="checkbox" /> iPhone 12 </a>


                            <Link href={`/products/categoryId=62b438533e01d8b900854295&model=iphone_11`}>
                                <a href="#">  <input type="checkbox" /> iPhone 11 </a>
                            </Link>

                            
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Операционная система</b>
                        </div>
                        <div className={css.content}>
                            <a href="#">  <input type="checkbox" /> Android </a>
                            <a href="#">  <input type="checkbox" /> iOS </a>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Модель</b>
                        </div>
                        <div className={css.content}>
                            <a href="#">  <input type="checkbox" /> iPhone 13 Pro Max </a>
                            <a href="#">  <input type="checkbox" /> iPhone 13 Pro </a>
                            <a href="#">  <input type="checkbox" /> iPhone 13 </a>
                            <a href="#">  <input type="checkbox" /> iPhone 13 mini </a>
                            <a href="#">  <input type="checkbox" /> iPhone 12 </a>
                            <a href="#">  <input type="checkbox" /> iPhone 11 </a>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Память</b>
                        </div>
                        <div className={css.content}>
                            <a href="#">  <input type="checkbox" /> 64 </a>
                            <a href="#">  <input type="checkbox" /> 128 </a>
                            <a href="#">  <input type="checkbox" /> 256 </a>
                            <a href="#">  <input type="checkbox" /> 512 </a>
                            <a href="#">  <input type="checkbox" /> 1 </a>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Оперативная память</b>
                        </div>
                        <div className={css.content}>
                            <a href="#">  <input type="checkbox" /> 1 </a>
                            <a href="#">  <input type="checkbox" /> 2 </a>
                            <a href="#">  <input type="checkbox" /> 3 </a>
                            <a href="#">  <input type="checkbox" /> 4 </a>
                            <a href="#">  <input type="checkbox" /> 5 </a>
                            <a href="#">  <input type="checkbox" /> 6 </a>
                            <a href="#">  <input type="checkbox" /> 7 </a>
                            <a href="#">  <input type="checkbox" /> 8 </a>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Размер экрана</b>
                        </div>
                        <div className={css.content}>
                            <a href="#">  <input type="checkbox" /> 4.1 - 4.9 </a>
                            <a href="#">  <input type="checkbox" /> 5 - 5.9 </a>
                            <a href="#">  <input type="checkbox" /> 6 - 6.4 </a>
                            <a href="#">  <input type="checkbox" /> 6.5 - 6.9 </a>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Частота обновления экрана</b>
                        </div>
                        <div className={css.content}>
                            <a href="#">  <input type="checkbox" /> 60 </a>
                            <a href="#">  <input type="checkbox" /> 90 </a>
                            <a href="#">  <input type="checkbox" /> 120 </a>
                        </div>
                    </div>
                </div>


                <div className={css.main}>
                    <div className={css.controlls}>
                        <span>По популярности</span>
                    </div>
                    <div className={css.productContainer}>
                        {products?.map((item: any) => (
                            <div className={css.cardContainer}>
                                <ProductCard product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
