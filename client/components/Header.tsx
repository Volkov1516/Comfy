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
                        <a className={styles.link} href="#">Еще <img className={styles.arrowImg} src="/arrow.svg" alt="Arrow" width="12px" height="12px" /></a>
                        <div className={styles.contact}>
                            <img className={styles.phoneImg} src="/headerPhone.svg" alt="Phone" width="20px" height="20px" />
                            <span className={styles.contactText}>Связаться</span>
                            <img className={styles.arrowImg} src="/arrow.svg" alt="Arrow" width="12px" height="12px" />
                        </div>
                        <div className={styles.langContainer}>
                            <div className={styles.lang}><b>РУС</b></div>
                            <div className={styles.lang}><b>УКР</b></div>
                        </div>
                    </nav>
                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.catalog}>
                        <img className={styles.categoriesImg} src="/categories.svg" alt="Categories" width="17px" height="17px" />
                        <span className={styles.catalogText}>Каталог товаров</span>
                        <img className={styles.arrowImg} src="/arrow.svg" alt="Arrow" width="13px" height="13px" />
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