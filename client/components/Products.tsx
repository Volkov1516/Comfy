import { useState } from 'react';
import { useRouter } from 'next/router';

import css from '../styles/Products.module.scss';

import ProductCard from './common/ProductCard';

const Products = ({ products }: any) => {
    const router = useRouter();

    const handleClick = (e: any) => {
        console.log(e.target.id + " " + e.target.name)
        router.push(`${router.asPath}&${e.target.name}=${e.target.id}`)
    };

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
                            <div>
                                <input type="checkbox" id="Apple" name="brand" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Apple">Apple</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Samsung" name="brand" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Samsung">Samsung</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Xiaomi" name="brand" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Xiaomi">Xiaomi</label>
                            </div>
                            <div>
                                <input type="checkbox" id="OPPO" name="brand" onClick={(e) => handleClick(e)} />
                                <label htmlFor="OPPO">OPPO</label>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Модель</b>
                        </div>
                        <div className={css.content}>
                            <div>
                                <input type="checkbox" id="iphone_13_pro_max" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_13_pro_max">iPgone 13 Pro Max</label>
                            </div>
                            <div>
                                <input type="checkbox" id="iphone_13_pro" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_13_pro">iPhone 13 Pro</label>
                            </div>
                            <div>
                                <input type="checkbox" id="iphone_13" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_13">iPhone 13</label>
                            </div>
                            <div>
                                <input type="checkbox" id="iphone_13 mini" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_13 mini">iPhone 13 mini</label>
                            </div>
                            <div>
                                <input type="checkbox" id="iphone_12" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_12">iPhone 12</label>
                            </div>
                            <div>
                                <input type="checkbox" id="iphone_11" name="model" onClick={(e) => handleClick(e)} />
                                <label htmlFor="iphone_11">iPhone 11</label>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Операционная система</b>
                        </div>
                        <div className={css.content}>
                            <div>
                                <input type="checkbox" id="Apple iOS 15" name="os" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Apple iOS 15">iOS 15</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Apple iOS 14" name="os" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Apple iOS 14">iOS 14</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Apple iOS 13" name="os" onClick={(e) => handleClick(e)} />
                                <label htmlFor="Apple iOS 13">iOS 13</label>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Память</b>
                        </div>
                        <div className={css.content}>
                            <div>
                                <input type="checkbox" id="64" name="rom" onClick={(e) => handleClick(e)} />
                                <label htmlFor="64">64</label>
                            </div>
                            <div>
                                <input type="checkbox" id="128" name="rom" onClick={(e) => handleClick(e)} />
                                <label htmlFor="128">128</label>
                            </div>
                            <div>
                                <input type="checkbox" id="256" name="rom" onClick={(e) => handleClick(e)} />
                                <label htmlFor="256">256</label>
                            </div>
                            <div>
                                <input type="checkbox" id="512" name="rom" onClick={(e) => handleClick(e)} />
                                <label htmlFor="512">512</label>
                            </div>
                            <div>
                                <input type="checkbox" id="1" name="rom" onClick={(e) => handleClick(e)} />
                                <label htmlFor="1">1</label>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Оперативная память</b>
                        </div>
                        <div className={css.content}>
                            <div>
                                <input type="checkbox" id="1" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="1">1</label>
                            </div>
                            <div>
                                <input type="checkbox" id="2" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="2">2</label>
                            </div>
                            <div>
                                <input type="checkbox" id="3" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="3">3</label>
                            </div>
                            <div>
                                <input type="checkbox" id="4" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="4">4</label>
                            </div>
                            <div>
                                <input type="checkbox" id="5" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="5">5</label>
                            </div>
                            <div>
                                <input type="checkbox" id="6" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="6">6</label>
                            </div>
                            <div>
                                <input type="checkbox" id="7" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="7">7</label>
                            </div>
                            <div>
                                <input type="checkbox" id="8" name="ram" onClick={(e) => handleClick(e)} />
                                <label htmlFor="8">8</label>
                            </div>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Частота обновления экрана</b>
                        </div>
                        <div className={css.content}>
                            <div>
                                <input type="checkbox" id="60" name="displayFrashrate" onClick={(e) => handleClick(e)} />
                                <label htmlFor="60">60</label>
                            </div>
                            <div>
                                <input type="checkbox" id="90" name="displayFrashrate" onClick={(e) => handleClick(e)} />
                                <label htmlFor="90">90</label>
                            </div>
                            <div>
                                <input type="checkbox" id="120" name="displayFrashrate" onClick={(e) => handleClick(e)} />
                                <label htmlFor="120">120</label>
                            </div>
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
