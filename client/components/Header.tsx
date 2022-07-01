import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios, { AxiosResponse } from 'axios';
import cx from 'classnames';

import css from '../styles/Header.module.scss';

const Header = () => {
    const router = useRouter();

    const [catalog, setCatalog] = useState<AxiosResponse<[]>>();
    const [category, setCategory] = useState<AxiosResponse<[]>>();
    const [activeCategory, setActiveCategory] = useState<string>('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/catalog').then((resp) => { setCatalog(resp.data) });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/category').then((resp) => { setCategory(resp.data) });
    }, []);

    return (
        <header>
            <div className={css.headerTop}>
                <div className={css.leftFlex}>
                    <Link href="/">
                        <a>
                            <img className={css.logoImg} src="/img/headerLogo.svg" alt="Logo" width="140px" height="32px" />
                        </a>
                    </Link>
                    <span className={css.citySelect}>Киев <img className={css.arrowImg} src="/img/arrow.svg" alt="Arrow" width="12px" height="12px" /></span>
                </div>
                <nav className={css.rightFlex}>
                    <div className={css.sales}>Акции</div>
                    <a className={css.link} href="#"><b>#ComfyHelps</b></a>
                    <a className={css.link} href="#">Магазины</a>
                    <a className={css.link} href="#">Новый заказ</a>
                    <div className={css.dropdown}>
                        <span className={css.dropdownBtn}>Еще <img className={css.arrowImg} src="/img/arrow.svg" alt="Arrow" width="12px" height="12px" /></span>
                        <div className={css.dropdownContent}>
                            <a href="#">Доставка</a>
                            <a href="#">Возврат</a>
                            <a href="#">Блог</a>
                        </div>
                    </div>
                    <div className={css.contact}>
                        <div className={css.dropdownBtn2}>
                            <img className={css.phoneImg} src="/img/headerPhone.svg" alt="Phone" width="20px" height="20px" />
                            <span className={css.contactText}>Связаться</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Arrow" width="12px" height="12px" />
                        </div>
                        <div className={css.dropdownContent}>
                            <a href="#">Чат на сайте</a>
                            <a href="#">Messenger</a>
                            <a href="#">Viber</a>
                            <a href="#">Telegram</a>
                            <a href="#">0-000-000-000</a>
                        </div>
                    </div>
                    <div className={css.langContainer}>
                        <div className={css.lang}><b>РУС</b></div>
                        <div className={css.lang}><b>УКР</b></div>
                    </div>
                </nav>
            </div>
            <div className={css.headerBottom}>
                <div className={css.catalog}>
                    <img className={css.catalogImg} src="/img/categories.svg" alt="Compare" width="17px" height="17px" />
                    <span className={css.catalogText}>Каталог товаров</span>
                    <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="13px" height="13px" />
                </div>
                <div className={cx(css.catalogContent, router.pathname === '/' && css.show)}>
                    <div className={css.left}>
                        {catalog?.data.map((item: any, index) => (
                            <div className={css.leftItem} key={index} onMouseEnter={() => setActiveCategory(item._id)}>
                                <Link href={`/category/${item._id}`}>
                                    <a>
                                        <img className={css.leftImg} src={item.img} alt="Image" width="20px" height="20px" />
                                        <span className={css.leftText}>{item.title}</span>
                                        <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className={css.right}>
                        {category?.data.map((item: any, index) => {
                            if (item.catalogId === activeCategory) {
                                return (
                                    <>
                                        {item.categories.map((item: any) => (
                                            <>
                                                <h3>{item.title}</h3>
                                                {item.products.map((item: any) => (
                                                    <p>{item}</p>
                                                ))}
                                            </>
                                        ))}
                                    </>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className={css.search}>
                    <input className={css.input} type="text" placeholder="Поиск товаров" />
                </div>
                <div className={css.login}>Войти</div>
                <div className={css.compare}>
                    <img className={css.compareImg} src="/img/compare.svg" alt="Compare" width="20px" height="20px" />
                </div>
                <div className={css.wishlist}>
                    <img className={css.heartImg} src="/img/heart.svg" alt="Heart" width="20px" height="20px" />
                </div>
                <div className={css.cart}>
                    <img className={css.cartImg} src="https://www.svgrepo.com/show/378541/cart.svg" alt="Cart" width="20px" height="20px" />
                    <span className={css.cartText}>Корзина</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
