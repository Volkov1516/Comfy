import Link from 'next/link';

import css from '../styles/Products.module.scss';

const Products = ({ products }: any) => {
    return (
        <div className={css.container}>
            <div>Breadcrumbs</div>
            <div className={css.categoryInfo}>
                <h1>Смартфоны</h1>
            </div>
            <div className={css.content}>
                <div className={css.filter}>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Наличие</b>
                            <img src="/img/arrowOutlined.svg" alt="Logo" width="24px" height="24px" />
                        </div>
                        <div className={css.content}>
                            <a href="#"> <input type="checkbox" /> Только в наличии</a>
                            <a href="#">  <input type="checkbox" /> В магазине</a>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.header}>
                            <b>Дейвствующие акции</b>
                            <img src="/img/arrowOutlined.svg" alt="Logo" width="24px" height="24px" />
                        </div>
                        <div className={css.content}>
                            <a href="#">  <input type="checkbox" /> Оплата частями</a>
                            <a href="#">  <input type="checkbox" /> Скидка</a>
                        </div>
                    </div>
                    <div className={css.filterItem}>
                        <div className={css.price}>
                            <div className={css.header}>
                                <b>Цена</b>
                                <img src="/img/arrowOutlined.svg" alt="Logo" width="24px" height="24px" />
                            </div>
                            <div className={css.content}>
                                <span>от</span>
                                <input className={css.input} type="number" />
                                <span>до</span>
                                <input className={css.input} type="number" />
                                <span>$</span>
                            </div>
                            <div className={css.submit}>
                                <span>ПРМЕНИТЬ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.main}>
                    <div className={css.controlls}>
                        <span>По популярности</span>
                    </div>
                    <div className={css.productContainer}>
                        {products?.data?.map((item: any) => (
                            <div className={css.item}>
                                <a className={css.code} href="#">Код: 1234567</a>
                                <div className={css.slide}>
                                    <img src={item.img} alt="Banner" width="100%" height="100%" />
                                </div>
                                <div className={css.info}>
                                    <div className={css.name}>
                                        <Link href={`/product/${item._id}`}>
                                            <a href="#">Смартфон {item.title} 64Gb Black</a>
                                        </Link>
                                    </div>
                                    <div className={css.feedback}>
                                        <div>
                                            {item.rate}
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
                                            <div className={css.priceCurrent}>{item.price}</div>
                                        </div>
                                        <div className={css.actionButton}>
                                            <img src="/img/cart.svg" alt="Banner" width="20px" height="20px" />
                                        </div>
                                    </div>
                                    <div className={css.bonus}>
                                        <img src="/img/coin.svg" alt="Banner" width="14px" height="14px" />
                                        <span><b className={css.pinted}>+200$</b> на бонусный счет</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;