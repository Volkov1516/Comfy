import { useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import cx from 'classnames';

import css from '../styles/Header.module.scss';

import Popup from './common/Popup';
import Login from './Login';

type ProductType = {
    _id: string,
    name: string,
    query: string,
};

type SubcategoryType = {
    _id: string,
    title: string,
    img: string,
    products: ProductType[],
};

type CategoryType = {
    _id: string,
    name: string,
    img: string,
    subcategories: SubcategoryType[],
};

const Header = () => {
    const router = useRouter();

    let displayTimeout: ReturnType<typeof setTimeout>;

    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState<string>('');
    const [display, setDispaly] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [auth, setAuth] = useState<ReactNode | string>('Войти');
    
    useEffect(() => {
        if(!localStorage.getItem('userId')){
            return;
        } else {
            setAuth(localStorage.getItem('userEmail'));
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/category').then((resp) => { setCategories(resp.data) });
    }, []);

    const handleDisplayMouseEnter = () => {
        setDispaly(true);
        clearTimeout(displayTimeout);
    };

    const handleDisplayMouseLeave = () => displayTimeout = setTimeout(() => { setDispaly(false) }, 200);

    const handleModal = () => setIsOpen(!isOpen);

    const handleCart = () => {
        if(!localStorage.getItem('userId')){
            return;
        } else {
            router.push('/cart');
        }
    }

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
                    <div className={css.moreDropdown}>
                        <span className={css.moreDropdownBtn}>Ещё <img className={css.arrowImg} src="/img/arrow.svg" alt="Arrow" width="12px" height="12px" /></span>
                        <div className={css.moreDropdownContent}>
                            <a href="#">Доставка</a>
                            <a href="#">Возврат</a>
                            <a href="#">Блог</a>
                        </div>
                    </div>
                    <div className={css.contactDropdown}>
                        <div className={css.contactDropdownBtn}>
                            <img className={css.phoneImg} src="/img/headerPhone.svg" alt="Phone" width="20px" height="20px" />
                            <span className={css.contactText}>Связаться</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Arrow" width="12px" height="12px" />
                        </div>
                        <div className={css.contactDropdownContent}>
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
                        {categories.map((i: CategoryType, index) => (
                            <div className={css.leftItem} key={index} onMouseEnter={() => setActiveCategory(i._id)}>
                                <Link href={`/category/${i._id}`}>
                                    <a className={css.link}>
                                        <img className={css.leftImg} src={i.img} alt="Image" width="20px" height="20px" />
                                        <span className={css.leftText}>{i.name}</span>
                                        <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className={css.right}>
                        <div className={css.categoryContainer}>
                            {categories.map((i: CategoryType) => {
                                if (i._id === activeCategory) {
                                    return (
                                        <>
                                            {i.subcategories.map((j: SubcategoryType, index) => (
                                                <div className={css.categoryBlock} key={index}>
                                                    <h3 className={css.categoryTitle} onClick={() => router.push(`/products/categoryId=62b438533e01d8b900854295`)}>{j.title}</h3>
                                                    {j.products.map((y: ProductType, index) => (
                                                        <Link href={`/products/categoryId=62b438533e01d8b900854295&${y.query}`}>
                                                            <p className={css.categoryItem} key={index}>{y.name}</p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className={css.search}>
                    <input className={css.input} type="text" placeholder="Поиск товаров" />
                </div>
                <div onClick={handleModal} className={css.login}>{auth}</div>
                <div className={css.compare}>
                    <img className={css.compareImg} src="/img/compare.svg" alt="Compare" width="20px" height="20px" />
                </div>
                <div className={css.wishlist}>
                    <img className={css.heartImg} src="/img/heart.svg" alt="Heart" width="20px" height="20px" />
                </div>
                <div className={css.cart} onMouseEnter={handleDisplayMouseEnter} onMouseLeave={handleDisplayMouseLeave}>
                    <img className={css.cartImg} src="https://www.svgrepo.com/show/378541/cart.svg" alt="Cart" width="20px" height="20px" />
                    <span className={css.cartText} onClick={handleCart}>Корзина</span>
                    <Popup type="small" display={display} background="white" text="Корзина пуста" />
                </div>
            </div>
            <Login isOpen={isOpen} handleModal={handleModal} />
        </header>
    );
};

export default Header;
