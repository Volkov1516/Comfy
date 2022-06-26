import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios, { AxiosResponse } from 'axios';

import css from '../styles/Product.module.scss';

const Product = () => {
    const router = useRouter();

    const [product, setProduct] = useState<AxiosResponse<[]>>();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/product?_id=${router.query.productId}`).then((resp) => { setProduct(resp.data) });
    }, [router]);

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
                        <h1 className={css.name}>Смартфон {item.title} 128Gb Black</h1>
                        <div className={css.buy}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
