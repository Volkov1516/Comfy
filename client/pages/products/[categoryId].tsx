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
    console.log(params)
    const response = await fetch(`http://localhost:5000/api/v1/product?categoryId=${params.categoryId}`);
    const data = await response.json();

    return {
        props: {
            products: data
        }
    };
};
