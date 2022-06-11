import type { NextPage } from 'next';

import css from '../styles/Header.module.scss';

const Header: NextPage = () => {
    return (
        <header>
            <div className={css.headerBanner}>
                <img src="/headerBanner.webp" alt="Banner" width="100%" height="100%" />
            </div>
            <div className={css.headerTop}>
                <div className={css.leftFlex}>
                    <img className={css.logoImg} src="/headerLogo.svg" alt="Logo" width="140px" height="32px" />
                    <span className={css.citySelect}>Киев <img className={css.arrowImg} src="/arrow.svg" alt="Arrow" width="12px" height="12px" /></span>
                </div>
                <nav className={css.rightFlex}>
                    <div className={css.sales}>Акции</div>
                    <a className={css.link} href="#"><b>#ComfyHelps</b></a>
                    <a className={css.link} href="#">Магазины</a>
                    <a className={css.link} href="#">Новый заказ</a>
                    <div className={css.dropdown}>
                        <span className={css.dropdownBtn}>Еще <img className={css.arrowImg} src="/arrow.svg" alt="Arrow" width="12px" height="12px" /></span>
                        <div className={css.dropdownContent}>
                            <a href="#">Доставка</a>
                            <a href="#">Возврат</a>
                            <a href="#">Блог</a>
                        </div>
                    </div>
                    <div className={css.contact}>
                        <div className={css.dropdownBtn2}>
                            <img className={css.phoneImg} src="/headerPhone.svg" alt="Phone" width="20px" height="20px" />
                            <span className={css.contactText}>Связаться</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Arrow" width="12px" height="12px" />
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
                    <img className={css.catalogImg} src="/categories.svg" alt="Compare" width="17px" height="17px" />
                    <span className={css.catalogText}>Каталог товаров</span>
                    <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="13px" height="13px" />
                </div>
                <div className={css.catalogContent}>
                    <div className={css.left}>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/smartphone.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Смартфоны и телефоны</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/laptop.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Ноутбуки, планшеты и компьютерная техника</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/oven.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Техника для кухни</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/washing.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Техника для дома</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/tv.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Телевизоры и мультимедиа</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/watch.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Смарт-часы и гаджеты</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/headphones.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Аудио</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/gamepad.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Игровые консоли и гейминг</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/camera.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Фото и видео</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/hairdryer.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Красота и здоровье</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/pot.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Посуда</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/bottle.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Бытовая химия</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/armchair.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Дом и отдых</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/kid.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Comfy KIIDS</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/screwdriver.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Инструменты и автотовары</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/down-arrow.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Уцененные товары</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/ticket.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Сервисы, подписки и софт</span>
                            <img className={css.arrowImg} src="/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                    </div>
                    <div className={css.right}>
                        Submenu
                    </div>
                </div>
                <div className={css.search}>
                    <input className={css.input} type="text" placeholder="Поиск товаров" />
                </div>
                <div className={css.login}>Войти</div>
                <div className={css.compare}>
                    <img className={css.compareImg} src="/compare.svg" alt="Compare" width="20px" height="20px" />
                </div>
                <div className={css.wishlist}>
                    <img className={css.heartImg} src="/heart.svg" alt="Heart" width="20px" height="20px" />
                </div>
                <div className={css.cart}>
                    <img className={css.cartImg} src="/cart.svg" alt="Cart" width="20px" height="20px" />
                    <span className={css.cartText}>Корзина</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
