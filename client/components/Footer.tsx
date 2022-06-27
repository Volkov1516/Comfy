import css from '../styles/Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={css.info}>
                <div className={css.infoItem}>
                    <img className={css.infoItemIcon} src="/img/delivery.svg" alt="Delivery" width="55px" height="55px" />
                    <div className={css.textWrapper}>
                        <span className={css.infoItemText}>Доставка</span>
                        <p className={css.infoItemDescription}>
                            Самовывоз из магазина "Comfy", доставка по адресу или в отделение "Нова пошта" и Justin.
                        </p>
                    </div>
                </div>
                <div className={css.infoItem}>
                    <img className={css.infoItemIcon} src="/img/protection.svg" alt="Guard" width="55px" height="55px" />
                    <div className={css.textWrapper}>
                        <span className={css.infoItemText}>Гарантия</span>
                        <p className={css.infoItemDescription}>
                            Сертифицированная техника с официальной гарантией от производителя.
                        </p>
                    </div>
                </div>
                <div className={css.infoItem}>
                    <img className={css.infoItemIcon} src="/img/payment.svg" alt="Payment" width="55px" height="55px" />
                    <div className={css.textWrapper}>
                        <span className={css.infoItemText}>Оплата</span>
                        <p className={css.infoItemDescription}>
                            Оплатить покупку можно наличными, картой или безналичным расчетом.
                        </p>
                    </div>
                </div>
                <div className={css.infoItem}>
                    <img className={css.infoItemIcon} src="/img/return.svg" alt="Return" width="55px" height="55px" />
                    <div className={css.textWrapper}>
                        <span className={css.infoItemText}>Возврат</span>
                        <p className={css.infoItemDescription}>
                            Возврат товара осуществляется в течении 14 дней после покупки, в соответствии с действующим законом.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className={styles.homeSection}></div> */}

            <div className={css.subscribe}>
                <div className={css.textWrapper}>
                    <span className={css.text}>Подписывайтесь на скидки и рекомендации!</span>
                    <p className={css.description}>Не беспокойтесь, мы не спамим</p>
                </div>
                <div className={css.inputWrapper}>
                    <label className={css.inputLabel} htmlFor="email">Ваш email</label>
                    <input className={css.inputEmail} type="email" name="email" />
                </div>
                <button className={css.subscribeButton}>Отправить</button>
            </div>
            <div className={css.footerNav}>
                <div className={css.navTop}>
                    <div className={css.join}>
                        <div className={css.social}>
                            <p>Присоединяйтесь</p>
                            <div className={css.row}>
                                <a href="#">
                                    <img className={css.infoItemIcon} src="/img/facebook.svg" alt="Facebook" width="44px" height="44px" />
                                </a>
                                <a href="#">
                                    <img className={css.infoItemIcon} src="/img/youtube.svg" alt="Youtube" width="44px" height="44px" />
                                </a>
                                <a href="#">
                                    <img className={css.infoItemIcon} src="/img/instagram.svg" alt="Instagram" width="44px" height="44px" />
                                </a>
                                <a href="#">
                                    <img className={css.infoItemIcon} src="/img/telegram.svg" alt="Telegram" width="44px" height="44px" />
                                </a>
                                <a href="#">
                                    <img className={css.infoItemIcon} src="/img/viber.svg" alt="Viber" width="44px" height="44px" />
                                </a>
                            </div>
                        </div>
                        <div className={css.findShop}>
                            <a href="#">
                                <div className={css.shopWrapper}>
                                    <img className={css.icon} src="/img/store.svg" alt="Viber" width="21px" height="21px" />
                                    <span className={css.text}>Найти магазин</span>
                                </div>
                            </a>
                        </div>
                        <div className={css.consultation}>
                            <a href="#">
                                <div className={css.consultWrapper}>
                                    <img className={css.icon} src="/img/store.svg" alt="Viber" width="21px" height="21px" />
                                    <span className={css.text}>Найти магазин</span>
                                    <img className={css.arrowIcon} src="/img/arrow.svg" alt="Arrow" width="14px" height="14px" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={css.nav}>
                        <div className={css.column}>
                            <span className={css.title}>Comfy</span>
                            <ul className={css.columnItems}>
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
                        <div className={css.column}>
                            <span className={css.title}>Услуги и сервисы</span>
                            <ul className={css.columnItems}>
                                <li><a href="#">Бонусная программа</a></li>
                                <li><a href="#">Подарочные карты</a></li>
                                <li><a href="#">Кредит и оплата частями</a></li>
                                <li><a href="#">Сервисные договоры</a></li>
                                <li><a href="#">Безналичный счет</a></li>
                                <li><a href="#">Оплата</a></li>
                            </ul>
                        </div>
                        <div className={css.column}>
                            <span className={css.title}>Помощь покупателю</span>
                            <ul className={css.columnItems}>
                                <li><a href="#">Новый заказ</a></li>
                                <li><a href="#">Условия доставки</a></li>
                                <li><a href="#">Обмен и возврат товара</a></li>
                                <li><a href="#">Гарантия</a></li>
                                <li><a href="#">Статус товара в ремонте</a></li>
                                <li><a href="#">Часто задаваемые вопросы</a></li>
                                <li><a href="#">Правила пользования сайтом</a></li>
                                <li><a href="#">Правила участия в акциях</a></li>
                            </ul>
                            <div className={css.row}>
                                <img className={css.icon} src="/img/visa.svg" alt="Visa" width="80px" height="36px" />
                                <img className={css.icon} src="/img/mastercard.svg" alt="Mastercard" width="80px" height="36px" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.applinks}>
                    <img className={css.icon} src="/img/googleApp.svg" alt="Visa" width="110px" height="42px" />
                    <img className={css.icon} src="/img/appleApp.svg" alt="Visa" width="110px" height="42px" />
                    <img className={css.icon} src="/img/appGallery.svg" alt="Visa" width="110px" height="42px" />
                </div>
            </div>
            <div className={css.bottom}>
                <p>Все права защищены ООО "КОМФИ ТРЕЙД", 2010-2022</p>
            </div>
        </footer>
    );
};

export default Footer;
