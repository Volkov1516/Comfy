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
                        <img className={styles.catalogImg} src="/categories.svg" alt="Compare" width="17px" height="17px" />
                        <span className={styles.catalogText}>Каталог товаров</span>
                        <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="13px" height="13px" />
                    </div>
                    <div className={styles.catalogContent}>
                        <div className={styles.left}>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/smartphone.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Смартфоны и телефоны</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/laptop.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Ноутбуки, планшеты и компьютерная техника</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/oven.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Техника для кухни</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/washing.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Техника для дома</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/tv.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Телевизоры и мультимедиа</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/watch.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Смарт-часы и гаджеты</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/headphones.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Аудио</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/gamepad.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Игровые консоли и гейминг</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/camera.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Фото и видео</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/hairdryer.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Красота и здоровье</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/pot.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Посуда</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/bottle.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Бытовая химия</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/armchair.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Дом и отдых</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/kid.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Comfy KIIDS</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/screwdriver.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Инструменты и автотовары</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/down-arrow.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Уцененные товары</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                            <div className={styles.leftItem}>
                                <img className={styles.leftImg} src="/ticket.svg" alt="Compare" width="20px" height="20px" />
                                <span className={styles.leftText}>Сервисы, подписки и софт</span>
                                <img className={styles.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />   
                            </div>
                        </div>
                        <div className={styles.right}>
                            Submenu
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