import type { NextPage } from 'next'

import styles from '../styles/Footer.module.scss'

const Footer: NextPage = () => {
    return (
        <>
            <footer>
                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <img className={styles.infoItemIcon} src="/delivery.svg" alt="Delivery" width="55px" height="55px" />
                        <div className={styles.textWrapper}>
                            <span className={styles.infoItemText}>Доставка</span>
                            <p className={styles.infoItemDescription}>
                                Самовывоз из магазина "Comfy", доставка по адресу или в отделение "Нова пошта" и Justin.
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <img className={styles.infoItemIcon} src="/protection.svg" alt="Guard" width="55px" height="55px" />
                        <div className={styles.textWrapper}>
                            <span className={styles.infoItemText}>Гарантия</span>
                            <p className={styles.infoItemDescription}>
                                Сертифицированная техника с официальной гарантией от производителя.
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <img className={styles.infoItemIcon} src="/payment.svg" alt="Payment" width="55px" height="55px" />
                        <div className={styles.textWrapper}>
                            <span className={styles.infoItemText}>Оплата</span>
                            <p className={styles.infoItemDescription}>
                                Оплатить покупку можно наличными, картой или безналичным расчетом.
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <img className={styles.infoItemIcon} src="/return.svg" alt="Return" width="55px" height="55px" />
                        <div className={styles.textWrapper}>
                            <span className={styles.infoItemText}>Возврат</span>
                            <p className={styles.infoItemDescription}>
                                Возврат товара осуществляется в течении 14 дней после покупки, в соответствии с действующим законом.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className={styles.homeSection}></div> */}

                <div className={styles.subscribe}>
                    <div className={styles.textWrapper}>
                        <span className={styles.text}>Подписывайтесь на скидки и рекомендации!</span>
                        <p className={styles.description}>Не беспокойтесь, мы не спамим</p>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label className={styles.inputLabel} htmlFor="email">Ваш email</label>
                        <input className={styles.inputEmail} type="email" name="email" />
                    </div>
                    <button className={styles.subscribeButton}>Отправить</button>
                </div>
                <div className={styles.footerNav}>
                    <div className={styles.navTop}>
                        <div className={styles.join}>
                            <div className={styles.social}>
                                <p>Присоединяйтесь</p>
                                <div className={styles.row}>
                                    <a href="#">
                                        <img className={styles.infoItemIcon} src="/facebook.svg" alt="Facebook" width="44px" height="44px" />
                                    </a>
                                    <a href="#">
                                        <img className={styles.infoItemIcon} src="/youtube.svg" alt="Youtube" width="44px" height="44px" />
                                    </a>
                                    <a href="#">
                                        <img className={styles.infoItemIcon} src="/instagram.svg" alt="Instagram" width="44px" height="44px" />
                                    </a>
                                    <a href="#">
                                        <img className={styles.infoItemIcon} src="/telegram.svg" alt="Telegram" width="44px" height="44px" />
                                    </a>
                                    <a href="#">
                                        <img className={styles.infoItemIcon} src="/viber.svg" alt="Viber" width="44px" height="44px" />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.findShop}>
                                <a href="#">
                                    <div className={styles.shopWrapper}>
                                        <img className={styles.icon} src="/store.svg" alt="Viber" width="21px" height="21px" />
                                        <span className={styles.text}>Найти магазин</span>
                                    </div>
                                </a>
                            </div>
                            <div className={styles.consultation}>
                                <a href="#">
                                    <div className={styles.consultWrapper}>
                                        <img className={styles.icon} src="/store.svg" alt="Viber" width="21px" height="21px" />
                                        <span className={styles.text}>Найти магазин</span>
                                        <img className={styles.arrowIcon} src="/arrow.svg" alt="Arrow" width="14px" height="14px" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.nav}>
                            <div className={styles.column}>
                                <span className={styles.title}>Comfy</span>
                                <ul className={styles.columnItems}>
                                    <li><a href="#">О компании</a></li>
                                    <li><a href="#">Магазины</a></li>
                                    <li><a href="#">Контакты</a></li>
                                    <li><a href="#">Пресс-центр</a></li>
                                    <li><a href="#">Работа в Comfy</a></li>
                                    <li><a href="#">Безопасность и предупреждения</a></li>
                                    <li><a href="#">Тендер</a></li>
                                    <li><a href="#">Партнерам</a></li>
                                    <li><a href="#">Каталог товаров</a></li>
                                </ul>
                            </div>
                            <div className={styles.column}>
                                <span className={styles.title}>Услуги и сервисы</span>
                                <ul className={styles.columnItems}>
                                    <li><a href="#">Бонусная программа</a></li>
                                    <li><a href="#">Подарочные карты</a></li>
                                    <li><a href="#">Кредит и оплата частями</a></li>
                                    <li><a href="#">Сервисные договоры</a></li>
                                    <li><a href="#">Безналичный счет</a></li>
                                    <li><a href="#">Оплата</a></li>
                                </ul>
                            </div>
                            <div className={styles.column}>
                                <span className={styles.title}>Помощь покупателю</span>
                                <ul className={styles.columnItems}>
                                    <li><a href="#">Новый заказ</a></li>
                                    <li><a href="#">Условия доставки</a></li>
                                    <li><a href="#">Обмен и возврат товара</a></li>
                                    <li><a href="#">Гарантия</a></li>
                                    <li><a href="#">Статус товара в ремонте</a></li>
                                    <li><a href="#">Часто задаваемые вопросы</a></li>
                                    <li><a href="#">Правила пользования сайтом</a></li>
                                    <li><a href="#">Правила участия в акциях</a></li>
                                </ul>
                                <div className={styles.row}>
                                    <img className={styles.icon} src="/visa.svg" alt="Visa" width="80px" height="36px" />
                                    <img className={styles.icon} src="/mastercard.svg" alt="Mastercard" width="80px" height="36px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.applinks}>
                        <img className={styles.icon} src="/googleApp.svg" alt="Visa" width="110px" height="42px" />
                        <img className={styles.icon} src="/appleApp.svg" alt="Visa" width="110px" height="42px" />
                        <img className={styles.icon} src="/appGallery.svg" alt="Visa" width="110px" height="42px" />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>Все права защищены ООО "КОМФИ ТРЕЙД", 2010-2022</p>
                </div>
            </footer>
        </>
    )
}

export default Footer