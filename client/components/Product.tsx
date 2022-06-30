import css from '../styles/Product.module.scss';
import cx from 'classnames';

import Carousel from './Carousel';

import { mockCarouselData } from '../mocks/mockCarouselData';

const Product = ({ product }: any) => {

    return (
        <div className={css.container}>
            <div>Breadcrumbs</div>
            <div className={css.tabs}>
                <a className={css.tabItem} href="#">ВСЕ О ТОВАРЕ</a>
                <a className={css.tabItem} href="#">ХАРАКТЕРИСТИКИ</a>
                <a className={css.tabItem} href="#">ОТЗЫВЫ</a>
                <a className={css.tabItem} href="#">ВОПРОСЫ</a>
                <a className={css.tabItem} href="#">ВИДЕО</a>
                <a className={css.tabItem} href="#">АКСЕССУАРЫ</a>
                <a className={css.tabItem} href="#">СЕРВИСЫ</a>
            </div>
            {product?.data.map((item: any) => (
                <div className={css.general}>
                    <div className={css.gallery}>
                        <div className={css.list}>
                            <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="52px" height="52px" />
                            <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="52px" height="52px" />
                            <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="52px" height="52px" />
                            <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="52px" height="52px" />
                            <img className={css.listItem} src="/img/apple_iphone_11_64gb_black_0_3.webp" alt="Arrow" width="52px" height="52px" />
                        </div>
                        <div className={css.mainImage}>
                            <img className={css.listItem} src={item.img} alt="Arrow" width="100%" height="380px" />
                        </div>
                    </div>
                    <div className={css.info}>
                        <div className={css.infoMain}>
                            <h1 className={css.name}>Смартфон {item.title} 128Gb Black</h1>
                            <div className={css.block}>
                                <div className={css.labels}>
                                    <div className={css.label}>
                                        <img className={css.labelImg} src="https://cdn.comfy.ua/media/label/Group%20965%20(19)_1.svg" alt="Arrow" width="24px" height="24px" />
                                        <span>Доставка Новою Поштою</span>
                                    </div>
                                    <div className={css.label}>
                                        <img className={css.labelImg} src="https://cdn.comfy.ua/media/label/Group%20967_1.svg" alt="Arrow" width="24px" height="24px" />
                                        <span>Доставка Укрпоштою</span>
                                    </div>
                                </div>
                                <div className={css.reviews}>
                                    rating stars, reviews and product code
                                </div>
                            </div>
                        </div>
                        <div className={css.infoBuy}>
                            <div className={css.block}>
                                <div className={css.price}>
                                    <b>{item.price}</b>
                                </div>
                                <div className={css.buttons}>
                                    <button className={css.buy}>Купити</button>
                                    <button className={css.order}>Швидке замовлення</button>
                                </div>
                                <div className={css.controlls}>
                                    <div className={css.img}>
                                        <img src="/img/compare.svg" alt="Arrow" width="20px" height="20px" />
                                    </div>
                                    <div className={css.img}>
                                        <img src="/img/heart.svg" alt="Arrow" width="20px" height="20px" />
                                    </div>
                                </div>
                            </div>
                            <div className={css.bonus}>
                                bonus
                            </div>
                        </div>
                        <div className={css.infoCredit}>
                            <div className={css.content}>
                                <div className={css.item}>
                                    <img src="https://cdn.comfy.ua/media/label/Group%20473_3.svg" alt="Arrow" />
                                </div>
                                <div className={css.item}>
                                    <img src="https://cdn.comfy.ua/media/label/Group%20496_2.svg" alt="Arrow" />
                                </div>
                                <div className={css.item}>
                                    <img src="https://cdn.comfy.ua/media/label/Group%20378_2.svg" alt="Arrow" />
                                </div>
                            </div>
                            <button className={css.btn}>Купити в кредит</button>
                        </div>
                        <div className={css.infoAlternatives}>
                            <p className={css.title}>Iншi моделi</p>
                            <div className={css.actions}>
                                <div className={css.colors}>
                                    <div className={css.color}></div>
                                </div>
                                <div className={css.memory}>
                                    <div className={css.item}>
                                        {item.ram} ГБ
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={css.infoService}>
                            <Carousel display="small" header="Выберите сервис" items={mockCarouselData.items} />
                        </div>
                        <div className={css.infoAccessories}>
                            <Carousel display="small" header="Выберите аксесуар" items={mockCarouselData.items} />
                        </div>
                    </div>
                </div>
            ))}
            <Carousel display="normal" header="Посмотрите ещё" items={mockCarouselData.items} />
            <div className={css.features}>
                {product.data.map((item: any) => (
                    <>
                        <h2 className={css.title}>Характеристики {item.title}</h2>
                        <ul className={css.featureList}>
                            <li className={cx(css.featureItem, css.withBg)}>
                                <span className={css.featureName}>Диагональ дисплея</span>
                                <b>{item.displaySize}</b>
                                <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                            </li>
                            <li className={css.featureItem}>
                                <span className={css.featureName}>Разрешение экрана</span>
                                <b>{item.displayResolution}</b>
                                <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                            </li>
                            <li className={cx(css.featureItem, css.withBg)}>
                                <span className={css.featureName}>Тип экрана</span>
                                <b>{item.displayType}</b>
                                <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                            </li>
                            <li className={css.featureItem}>
                                <span className={css.featureName}>Частота обновления экрана</span>
                                <b>{item.frashrate} Гц</b>
                                <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                            </li>
                        </ul>
                        <button className={css.showMoreBtn}>
                            <span>Показать больше</span>
                            <img src="https://www.svgrepo.com/show/17594/plus.svg" alt="Question icon" width="16px" height="16px" />
                        </button>
                    </>
                ))}
            </div>
            <div className={css.description}>
                <h2 className={css.title}>Описание смартфона</h2>
            </div>
        </div>
    );
};

export default Product;
