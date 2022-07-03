import Link from 'next/link';

import css from '../styles/Category.module.scss';

const Category = ({ category }: any) => {
    console.log(category?.data.subcategories.map((i: any) => i.title));

    return (
        <div className={css.container}>
            <div>Breadcrumbs</div>
            <div className={css.category}>
                {category?.data?.subcategories?.map((item: any) => (
                    <div className={css.categoryItem}>
                        <Link href={`/products/${item._id}`}>
                            <a>
                                <img src="/img/apple4.webp" alt="Logo" width="80px" height="80px" />
                                <h2>{item?.title}</h2>
                            </a>
                        </Link>
                        <ul>
                            {item?.products.map((item: any) => (
                                <li>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
