import type { NextPage } from 'next';

import Products from '../../components/Products';

const ProductsPage: NextPage = ({products}: any) => {
    return (
        <>
            <Products products={products}/>
        </>
    );
};

export default ProductsPage;

export const getServerSideProps = async (context: any) => {
    const { params } = context;
    // Here I receive qury from url to filter data. Url sets with /products/categoryId=...&model=...
    // See more at Category or Products components
    const response = await fetch(`http://localhost:5000/api/v1/product?${params.categoryId}`);
    const data = await response.json();

    return {
        props: {
            products: data
        }
    };
};
