import { useState, useEffect } from 'react';

import css from '../styles/Slider.module.scss';

const imgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Slider = () => {
    let timeout: ReturnType<typeof setTimeout>;

    const [currentSlide, serCurrentSlide] = useState(1);

    const prevSlide = () => {
        clearTimeout(timeout);

        if (currentSlide !== 1) {
            serCurrentSlide(currentSlide - 1)
        } else {
            serCurrentSlide(10)
        }
    };

    const nextSlide = () => {
        clearTimeout(timeout);
        
        if (currentSlide !== 10) {
            serCurrentSlide(currentSlide + 1)
        } else {
            serCurrentSlide(1)
        }
    };

    useEffect(() => {
        timeout = setTimeout(() => nextSlide(), 5000);
    }, [currentSlide]);

    return (
        <div className={css.container}>
            <div className={css.top}>
                <a className={css.topItem} href="#">
                    <img src="/img/ucenka.svg" alt="Logo" width="48px" height="48px" />
                    <p>Уцененные товары</p>
                </a>
                <a className={css.topItem} href="#">
                    <img src="/img/toy_1.svg" alt="Logo" width="48px" height="48px" />
                    <p>Comfy KIDS</p>
                </a>
                <a className={css.topItem} href="#">
                    <img src="/img/minus40.svg" alt="Logo" width="48px" height="48px" />
                    <p>Скидки до -40%</p>
                </a>
            </div>
            <div className={css.slider}>
                {imgArr.map((item, index) => (
                    <img key={index} src={`/img/slider/slider${currentSlide}.webp`} alt="Logo" width="100%" height="450px" />
                ))}
                <img className={css.prew} onClick={prevSlide} src="/img/arrow.svg" alt="Logo" width="40px" height="40px" />
                <img className={css.next} onClick={nextSlide} src="/img/arrow.svg" alt="Logo" width="40px" height="40px" />
                <div className={css.sliderNum}>{currentSlide}/10</div>
            </div>
            <div className={css.logoBrands}>
                <a className={css.logoItem} href="#">
                    <img src="/img/LG.webp" alt="Logo" width="72px" height="32px" />
                </a>
                <a className={css.logoItem} href="#">
                    <img src="/img/samsung.webp" alt="Logo" width="106px" height="18px" />
                </a>
                <a className={css.logoItem} href="#">
                    <img src="/img/huawei.webp" alt="Logo" width="100px" height="22px" />
                </a>
                <a className={css.logoItem} href="#">
                    <img src="/img/apple.webp" alt="Logo" width="36px" height="40px" />
                </a>
                <a className={css.logoItem} href="#">
                    <img src="/img/wmf.svg" alt="Logo" width="26px" height="30px" />
                </a>
                <a className={css.logoItem} href="#">
                    <img src="/img/xiaomi.webp" alt="Logo" width="40px" height="40px" />
                </a>
                <a className={css.logoItem} href="#">
                    <span>Все бренды</span>
                    <img src="/img/plus.svg" alt="Logo" width="16px" height="16px" />
                </a>
            </div>
        </div>
    );
};

export default Slider;
