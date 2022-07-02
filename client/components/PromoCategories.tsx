import css from '../styles/PromoCategories.module.scss';
import PromoSlide from './PromoSlide';

type PromoCategoriesType = {
    header: string;

}

const PromoCategories = ({ header }: PromoCategoriesType) => {
    return (
        <section className={css.container}>
            <div className={css.header}>
                <h3>{header}</h3>
                <a className={css.more} href="#">
                    <span>Смотреть все</span>
                    <img src="/img/arrowPromo.svg" alt="Banner" width="20px" height="20px" />
                </a>
            </div>
            <div className={css.body}>
                <div className={css.item}>
                    <a className={css.code} href="#">Код: 1234567</a>
                    <PromoSlide />
                    <div className={css.info}>
                        <div className={css.name}><a href="#">Смартфон Apple iPhone 11 64Gb Black</a></div>
                        <div className={css.feedback}>
                            <div>
                                feedback
                            </div>
                            <a className={css.comments}>
                                <img src="/img/chat-bubble.svg" alt="Banner" width="15px" height="15px" />
                                <span>63</span>
                            </a>
                        </div>
                        <div className={css.labels}>
                            <img src="/img/labels/5m.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/abank.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/mono.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/np.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/privat.svg" alt="Banner" width="30px" height="30px" />
                        </div>
                        <div className={css.actions}>
                            <div className={css.price}>
                                <div className={css.priceCurrent}>22 999</div>
                            </div>
                            <div className={css.actionButton}>
                                <img src="https://www.svgrepo.com/show/378541/cart.svg" alt="Banner" width="20px" height="20px" />
                            </div>
                        </div>
                        <div className={css.bonus}>
                            <img src="/img/coin.svg" alt="Banner" width="14px" height="14px" />
                            <span><b className={css.pinted}>+200$</b> на бонусный счет</span>
                        </div>
                    </div>
                </div>
                <div className={css.item}>
                    <a className={css.code} href="#">Код: 1234567</a>
                    <PromoSlide />
                    <div className={css.info}>
                        <div className={css.name}><a href="#">Смартфон Apple iPhone 11 64Gb Black</a></div>
                        <div className={css.feedback}>
                            <div>
                                feedback
                            </div>
                            <a className={css.comments}>
                                <img src="/img/chat-bubble.svg" alt="Banner" width="15px" height="15px" />
                                <span>63</span>
                            </a>
                        </div>
                        <div className={css.labels}>
                            <img src="/img/labels/5m.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/abank.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/mono.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/np.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/privat.svg" alt="Banner" width="30px" height="30px" />
                        </div>
                        <div className={css.actions}>
                            <div className={css.price}>
                                <div className={css.priceCurrent}>22 999</div>
                            </div>
                            <div className={css.actionButton}>
                                <img src="https://www.svgrepo.com/show/378541/cart.svg" alt="Banner" width="20px" height="20px" />
                            </div>
                        </div>
                        <div className={css.bonus}>
                            <img src="/img/coin.svg" alt="Banner" width="14px" height="14px" />
                            <span><b className={css.pinted}>+200$</b> на бонусный счет</span>
                        </div>
                    </div>
                </div>
                <div className={css.item}>
                    <a className={css.code} href="#">Код: 1234567</a>
                    <PromoSlide />
                    <div className={css.info}>
                        <div className={css.name}><a href="#">Смартфон Apple iPhone 11 64Gb Black</a></div>
                        <div className={css.feedback}>
                            <div>
                                feedback
                            </div>
                            <a className={css.comments}>
                                <img src="/img/chat-bubble.svg" alt="Banner" width="15px" height="15px" />
                                <span>63</span>
                            </a>
                        </div>
                        <div className={css.labels}>
                            <img src="/img/labels/5m.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/abank.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/mono.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/np.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/privat.svg" alt="Banner" width="30px" height="30px" />
                        </div>
                        <div className={css.actions}>
                            <div className={css.price}>
                                <div className={css.priceCurrent}>22 999</div>
                            </div>
                            <div className={css.actionButton}>
                                <img src="https://www.svgrepo.com/show/378541/cart.svg" alt="Banner" width="20px" height="20px" />
                            </div>
                        </div>
                        <div className={css.bonus}>
                            <img src="/img/coin.svg" alt="Banner" width="14px" height="14px" />
                            <span><b className={css.pinted}>+200$</b> на бонусный счет</span>
                        </div>
                    </div>
                </div>
                <div className={css.item}>
                    <a className={css.code} href="#">Код: 1234567</a>
                    <PromoSlide />
                    <div className={css.info}>
                        <div className={css.name}><a href="#">Смартфон Apple iPhone 11 64Gb Black</a></div>
                        <div className={css.feedback}>
                            <div>
                                feedback
                            </div>
                            <a className={css.comments}>
                                <img src="/img/chat-bubble.svg" alt="Banner" width="15px" height="15px" />
                                <span>63</span>
                            </a>
                        </div>
                        <div className={css.labels}>
                            <img src="/img/labels/5m.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/abank.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/mono.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/np.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/privat.svg" alt="Banner" width="30px" height="30px" />
                        </div>
                        <div className={css.actions}>
                            <div className={css.price}>
                                <div className={css.priceCurrent}>22 999</div>
                            </div>
                            <div className={css.actionButton}>
                                <img src="https://www.svgrepo.com/show/378541/cart.svg" alt="Banner" width="20px" height="20px" />
                            </div>
                        </div>
                        <div className={css.bonus}>
                            <img src="/img/coin.svg" alt="Banner" width="14px" height="14px" />
                            <span><b className={css.pinted}>+200$</b> на бонусный счет</span>
                        </div>
                    </div>
                </div>
                <div className={css.item}>
                    <a className={css.code} href="#">Код: 1234567</a>
                    <PromoSlide />
                    <div className={css.info}>
                        <div className={css.name}><a href="#">Смартфон Apple iPhone 11 64Gb Black</a></div>
                        <div className={css.feedback}>
                            <div>
                                feedback
                            </div>
                            <a className={css.comments}>
                                <img src="/img/chat-bubble.svg" alt="Banner" width="15px" height="15px" />
                                <span>63</span>
                            </a>
                        </div>
                        <div className={css.labels}>
                            <img src="/img/labels/5m.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/abank.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/mono.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/np.svg" alt="Banner" width="30px" height="30px" />
                            <img src="/img/labels/privat.svg" alt="Banner" width="30px" height="30px" />
                        </div>
                        <div className={css.actions}>
                            <div className={css.price}>
                                <div className={css.priceCurrent}>22 999</div>
                            </div>
                            <div className={css.actionButton}>
                                <img src="https://www.svgrepo.com/show/378541/cart.svg" alt="Banner" width="20px" height="20px" />
                            </div>
                        </div>
                        <div className={css.bonus}>
                            <img src="/img/coin.svg" alt="Banner" width="14px" height="14px" />
                            <span><b className={css.pinted}>+200$</b> на бонусный счет</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoCategories;
