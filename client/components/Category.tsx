import Link from 'next/link';

import css from '../styles/Category.module.scss';

type ProductType = {
    _id: string,
    name: string,
    query: string,
};

type SubcategoryType = {
    _id: string,
    title: string,
    img: string,
    products: ProductType[],
};

type DataType = {
    data: {
        _id: string,
        name: string,
        img: string,
        subcategories: SubcategoryType[]
    }
};

type CategoryType = {
    category: DataType;
};

const Category = ({ category }: CategoryType) => {
    return (
        <div className={css.container}>
            <div className={css.category}>
                {category?.data?.subcategories?.map((i: SubcategoryType, index) => (
                    <div className={css.categoryItem} key={index}>
                        <Link href={`/products/categoryId=${category.data._id}`}>
                            <a>
                                <img src={i.img} alt="Logo" width="80px" height="80px" />
                                <h2>{i?.title}</h2>
                            </a>
                        </Link>
                        <ul>
                            {i?.products.map((j: ProductType, index) => (
                                <li key={index}>{j.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
