import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios, { AxiosResponse } from 'axios';

import css from '../styles/Category.module.scss';

const Category = () => {
    const router = useRouter();
    console.log(router.query.catalogId);

    const [category, setCategory] = useState<AxiosResponse<[]>>();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/category?catalogId=${router.query.catalogId}`).then((resp) => { setCategory(resp.data) });
    }, [router]);

    console.log(category?.data);

    return (
        <div className={css.container}>
            <div>Breadcrumbs</div>
            <div className={css.category}>
                {category?.data.map((item: { catalogId: string, categories: [] }) => (
                    <>
                        {item.categories.map((item: any) => (
                            <div className={css.categoryItem}>
                                <Link href="/products">
                                    <a>
                                        <img src="/img/apple4.webp" alt="Logo" width="80px" height="80px" />
                                        <h2>{item?.title}</h2>
                                    </a>
                                </Link>
                                <ul>
                                    {item?.products.map((item: any) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Category;
