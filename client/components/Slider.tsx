import type { NextPage } from 'next';

import css from '../styles/Slider.module.scss';

const Slider: NextPage = () => {
    return (
        <div className={css.container}>
            <div className={css.top}>
                <a className={css.topItem} href="#">
                    <img src="/ucenka.svg" alt="Logo" width="48px" height="48px" />
                    <p>Уцененные товары</p>
                </a>
                <a className={css.topItem} href="#">
                    <img src="/toy_1.svg" alt="Logo" width="48px" height="48px" />
                    <p>Comfy KIDS</p>
                </a>
                <a className={css.topItem} href="#">
                    <img src="/minus40.svg" alt="Logo" width="48px" height="48px" />
                    <p>Скидки до -40%</p>
                </a>
            </div>

            <div className={css.slider}></div>

            <div className={css.logoBrands}>
                <a className={css.logoItem} href="#">
                    <img src="/LG.webp" alt="Logo" width="72px" height="32px" />
                </a>
                <a className={css.logoItem} href="#">
                    <img src="/samsung.webp" alt="Logo" width="106px" height="18px" />
                </a>
                <a className={css.logoItem} href="#">
                    <img src="/huawei.webp" alt="Logo" width="100px" height="22px" />
                </a>
                <a className={css.logoItem} href="#">
                    <img src="/apple.webp" alt="Logo" width="36px" height="40px" />
                </a>
                <a className={css.logoItem} href="#">
                    <img src="/wmf.svg" alt="Logo" width="26px" height="30px" />
                </a>
                <a className={css.logoItem} href="#">
                    <img src="/xiaomi.webp" alt="Logo" width="40px" height="40px" />
                </a>
                <a className={css.logoItem} href="#">
                    <span>Все бренды</span>
                    <img src="/plus.svg" alt="Logo" width="16px" height="16px" />
                </a>
            </div>
        </div>
    );
}

export default Slider;
