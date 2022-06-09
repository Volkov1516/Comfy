import type { NextPage } from 'next'

import styles from '../styles/Header.module.scss'

const Header: NextPage = () => {
    return (
        <>
            <header>
                <div className={styles.headerBanner}>
                    <img src="/headerBanner.webp" alt="Banner" width="100%" height="100%" />
                </div>
                <div className={styles.headerTop}>
                    <div className={styles.leftFlex}>
                        <img className={styles.logoImg} src="/headerLogo.svg" alt="Logo" width="140px" height="32px" />
                        <span className={styles.citySelect}>Киев <img className={styles.arrowImg} src="/arrow.svg" alt="Arrow" width="12px" height="12px" /></span>
                    </div>
                    <nav className={styles.rightFlex}>
                        <div className={styles.sales}>Акции</div>
                        <a className={styles.link} href="#"><b>#ComfyHelps</b></a>
                        <a className={styles.link} href="#">Магазины</a>
                        <a className={styles.link} href="#">Новый заказ</a>
                        <div className={styles.dropdown}>
                            <span className={styles.dropdownBtn}>Еще <img className={styles.arrowImg} src="/arrow.svg" alt="Arrow" width="12px" height="12px" /></span>
                            <div className={styles.dropdownContent}>
                                <a href="#">Доставка</a>
                                <a href="#">Возврат</a>
                                <a href="#">Блог</a>
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.dropdownBtn2}>
                                <img className={styles.phoneImg} src="/headerPhone.svg" alt="Phone" width="20px" height="20px" />
                                <span className={styles.contactText}>Связаться</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Arrow" width="12px" height="12px" />
                            </div>
                            <div className={styles.dropdownContent}>
                                <a href="#">Чат на сайте</a>
                                <a href="#">Messenger</a>
                                <a href="#">Viber</a>
                                <a href="#">Telegram</a>
                                <a href="#">0-000-000-000</a>
                            </div>
                        </div>
                        <div className={styles.langContainer}>
                            <div className={styles.lang}><b>РУС</b></div>
                            <div className={styles.lang}><b>УКР</b></div>
                        </div>
                    </nav>
                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.catalog}>
                        <div className={styles.dropdownBtn3}>
                            <img className={styles.categoriesImg} src="/categories.svg" alt="Categories" width="17px" height="17px" />
                            <span className={styles.catalogText}>Каталог товаров</span>
                            <img className={styles.arrowImg} src="/arrow.svg" alt="Arrow" width="13px" height="13px" />
                        </div>
                        <div className={styles.dropdownContent}>
                            <div className={styles.catalogItem}><a href="#">Смартвоны и телефоны</a></div>
                            <div className={styles.catalogItem}><a href="#">Ноутбуки, планшеты и компьютерная техника</a></div>
                            <div className={styles.catalogItem}><a href="#">Техника для кухни</a></div>
                            <div className={styles.catalogItem}><a href="#">Техника для дома</a></div>
                            <div className={styles.catalogItem}><a href="#">Телевизоры и мультимедиа</a></div>
                            <div className={styles.catalogItem}><a href="#">Смарт-часы и гаджеты</a></div>
                            <div className={styles.catalogItem}><a href="#">Аудио</a></div>
                            <div className={styles.catalogItem}><a href="#">Игровые консоли и гейминг</a></div>
                            <div className={styles.catalogItem}><a href="#">Фото и видео</a></div>
                            <div className={styles.catalogItem}><a href="#">Красота и здоровье</a></div>
                            <div className={styles.catalogItem}><a href="#">Посуда</a></div>
                            <div className={styles.catalogItem}><a href="#">Бытовая химия</a></div>
                            <div className={styles.catalogItem}><a href="#">Дом и отдых</a></div>
                            <div className={styles.catalogItem}><a href="#">Comfy KIDS</a></div>
                            <div className={styles.catalogItem}><a href="#">Инструменты и автотовары</a></div>
                            <div className={styles.catalogItem}><a href="#">Уцененные товары</a></div>
                            <div className={styles.catalogItem}><a href="#">Сервисы, подписки и софт</a></div>
                        </div>
                    </div>
                    <div className={styles.search}>
                        <input className={styles.input} type="text" placeholder="Поиск товаров" />
                    </div>
                    <div className={styles.login}>Войти</div>
                    <div className={styles.compare}>
                        <img className={styles.compareImg} src="/compare.svg" alt="Compare" width="20px" height="20px" />
                    </div>
                    <div className={styles.wishlist}>
                        <img className={styles.heartImg} src="/heart.svg" alt="Heart" width="20px" height="20px" />
                    </div>
                    <div className={styles.cart}>
                        <img className={styles.cartImg} src="/cart.svg" alt="Cart" width="20px" height="20px" />
                        <span className={styles.cartText}>Корзина</span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header