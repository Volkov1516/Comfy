import type { NextPage } from 'next';

import Product from '../../components/Product';

const ProductPage: NextPage = ({ product }: any) => {
    return (
        <>
            <Product product={product} />
        </>
    );
};

export default ProductPage;

export const getServerSideProps = async (context: any) => {
    const { params } = context;
    const response = await fetch(`http://localhost:5000/api/v1/product?_id=${params.productId}`);
    const data = await response.json();

    return {
        props: {
            product: data
        }
    };
};
