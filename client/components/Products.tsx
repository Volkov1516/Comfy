import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';

import css from '../styles/Products.module.scss';

import ProductCard from './common/ProductCard';

type ProductsType = {
    products: {}[],
};

type QueryStringType = {
    brand?: string,
    model?: string,
    os?: string,
    rom?: string,
    ram?: string,
    displayFrashrate?: string,
    sort?: string,
    page?: string,
};

const Products = ({ products }: ProductsType) => {
    const router = useRouter();

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [page, setPage] = useState('');

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => router.push(`${router.asPath}&${(e.target as HTMLInputElement).name}=${(e.target as HTMLInputElement).id}`);

    const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => setMinPrice((e.target as HTMLInputElement).value);

    const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => setMaxPrice((e.target as HTMLInputElement).value);

    const handlePrice = () => {
        if (!minPrice && !maxPrice) {
            return;
        } else if (minPrice && !maxPrice) {
            return router.push(`${router.asPath}&numericFilters=price>${minPrice}`);
        } else if (maxPrice && !minPrice) {
            return router.push(`${router.asPath}&numericFilters=price<${maxPrice}`);
        } else if (minPrice && maxPrice) {
            router.push(`${router.asPath}&numericFilters=price${minPrice && '>' + minPrice + ',price<' + maxPrice}`);
        }
    };

    const handlePage = (num: string): any => {
        setPage(num);
    };

    useEffect(() => {
        router.push(`${router.asPath}${page && `&page=${page}`}`);
    }, [page]);

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
                                <div className={css.controllers}>
                                    <span>от</span>
                                    <input className={css.input} value={minPrice} onChange={handleChangeMin} />
                                    <span>до</span>
                                    <input className={css.input} value={maxPrice} onChange={handleChangeMax} />
                                    <span>$</span>
                                </div>
                                <button className={css.submitBtn} onClick={handlePrice}>ПРИМЕНИТЬ</button>
                            </div>

                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Бренд</b>
                        </div>
                        <div className={css.content}>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="Apple" name="brand" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Apple">Apple</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="Samsung" name="brand" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Samsung">Samsung</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="Xiaomi" name="brand" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Xiaomi">Xiaomi</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="OPPO" name="brand" onClick={(e) => handleClick(e)} />
                                <label htmlFor="OPPO">OPPO</label>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Модель</b>
                        </div>
                        <div className={css.content}>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="iphone_13_pro_max" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_13_pro_max">iPhone 13 Pro Max</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="iphone_13_pro" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_13_pro">iPhone 13 Pro</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="iphone_13" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_13">iPhone 13</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="iphone_13_mini" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_13_mini">iPhone 13 mini</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="iphone_12" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_12">iPhone 12</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="iphone_11" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_11">iPhone 11</label>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Операционная система</b>
                        </div>
                        <div className={css.content}>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="Apple iOS 15" name="os" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Apple iOS 15">iOS 15</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="Apple iOS 14" name="os" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Apple iOS 14">iOS 14</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="Apple iOS 13" name="os" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Apple iOS 13">iOS 13</label>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Память</b>
                        </div>
                        <div className={css.content}>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="64" name="rom" onClick={(e) => handleClick(e)} />
                                <label htmlFor="64">64 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="128" name="rom" onClick={(e) => handleClick(e)} />
                                <label htmlFor="128">128 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="256" name="rom" onClick={(e) => handleClick(e)} />
                                <label htmlFor="256">256 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="512" name="rom" onClick={(e) => handleClick(e)} />
                                <label htmlFor="512">512 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="1" name="rom" onClick={(e) => handleClick(e)} />
                                <label htmlFor="1">1 ТБ</label>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Оперативная память</b>
                        </div>
                        <div className={css.content}>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="1" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="1">1 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="2" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="2">2 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="3" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="3">3 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="4" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="4">4 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="5" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="5">5 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="6" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="6">6 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="7" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="7">7 ГБ</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="8" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="8">8 ГБ</label>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Частота обновления экрана</b>
                        </div>
                        <div className={css.content}>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="60" name="displayFrashrate" onClick={(e) => handleClick(e)} />
                                <label htmlFor="60">60 Гц</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="90" name="displayFrashrate" onClick={(e) => handleClick(e)} />
                                <label htmlFor="90">90 Гц</label>
                            </div>
                            <div className={css.row}>
                                <input className={css.customCheckbox} type="checkbox" id="120" name="displayFrashrate" onClick={(e) => handleClick(e)} />
                                <label htmlFor="120">120 Гц</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.main}>
                    <div className={css.controlls}>
                        <div className={css.sort}>
                            <img className={css.img} src="https://www.svgrepo.com/show/211461/filter.svg" alt="filter" width="20px" height="20px" />
                            <div className={css.sortDropdownContent}>
                                <span className={css.sortItem} onClick={() => router.push(`${router.asPath}&sort=-price`)}>Сначала дорогие</span>
                                <span className={css.sortItem} onClick={() => router.push(`${router.asPath}&sort=price`)}>Сначала дешевые</span>
                            </div>
                        </div>
                    </div>
                    <div className={css.productContainer}>
                        {products.map((i: {}) => (
                            <div className={css.cardContainer}>
                                <ProductCard product={i} />
                            </div>
                        ))}
                    </div>
                    <div className={css.pagination}>
                        <span onClick={() => handlePage('1')}>1</span>
                        <span onClick={() => handlePage('2')}>2</span>
                        <span onClick={() => handlePage('3')}>3</span>
                        <span onClick={() => handlePage('4')}>4</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
