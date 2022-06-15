import Link from 'next/link';

import css from '../styles/Header.module.scss';

const Header = () => {
    return (
        <header>
            <div className={css.headerBanner}>
                <img src="/img/headerBanner.webp" alt="Banner" width="100%" height="100%" />
            </div>
            <div className={css.headerTop}>
                <div className={css.leftFlex}>
                    <img className={css.logoImg} src="/img/headerLogo.svg" alt="Logo" width="140px" height="32px" />
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
                <div className={css.catalogContent}>
                    <div className={css.left}>
                        <div className={css.leftItem}>
                            <Link href="/catalog">
                                <a>
                                    <img className={css.leftImg} src="/img/smartphone.svg" alt="Compare" width="20px" height="20px" />
                                    <span className={css.leftText}>Смартфоны и телефоны</span>
                                    <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                                </a>
                            </Link>
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/laptop.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Ноутбуки, планшеты и компьютерная техника</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/oven.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Техника для кухни</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/washing.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Техника для дома</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/tv.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Телевизоры и мультимедиа</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/watch.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Смарт-часы и гаджеты</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/headphones.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Аудио</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/gamepad.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Игровые консоли и гейминг</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/camera.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Фото и видео</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/hairdryer.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Красота и здоровье</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/pot.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Посуда</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/bottle.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Бытовая химия</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/armchair.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Дом и отдых</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/kid.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Comfy KIIDS</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/screwdriver.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Инструменты и автотовары</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/down-arrow.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Уцененные товары</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                        <div className={css.leftItem}>
                            <img className={css.leftImg} src="/img/ticket.svg" alt="Compare" width="20px" height="20px" />
                            <span className={css.leftText}>Сервисы, подписки и софт</span>
                            <img className={css.arrowImg} src="/img/arrow.svg" alt="Compare" width="12px" height="12px" />
                        </div>
                    </div>
                    <div className={css.right}>
                        Сматрфоны
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
                    <img className={css.cartImg} src="/img/cart.svg" alt="Cart" width="20px" height="20px" />
                    <span className={css.cartText}>Корзина</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
