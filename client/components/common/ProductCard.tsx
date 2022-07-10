import Link from 'next/link';

import css from '../../styles/ProductCard.module.scss';

import ProductCardCarousel from './ProductCardCarousel';

const ProductCard = ({ product }: any) => {
    return (
        <div className={css.container}>
            <a className={css.code} href="#">Код: 1234567</a>

            <ProductCardCarousel images={product.images} colors={product.colorAvailable} />

            <div className={css.info}>
                <div className={css.name}>
                    <Link href={`/product/${product._id}`}>
                        <a href="#">{product.brand} {product.name} {product.rom} {product.color}</a>
                    </Link>
                </div>
                <div className={css.feedback}>
                    <div>
                        {product.rate}
                    </div>
                    <a className={css.comments}>
                        <img src="/img/chat-bubble.svg" alt="Comments image" width="15px" height="15px" />
                        <span>63</span>
                    </a>
                </div>
                <div className={css.labels}>
                    {product.labels.map((i: any) => (
                        <img src={i} alt="Label image" width="30px" height="30px" />
                    ))}
                </div>
                <div className={css.actions}>
                    <div className={css.price}>
                        <div className={css.priceCurrent}>{product.price}</div>
                    </div>
                    <div className={css.actionButton}>
                        <img src="https://www.svgrepo.com/show/378541/cart.svg" alt="Cart image" width="20px" height="20px" />
                    </div>
                </div>
                <div className={css.bonus}>
                    <img src="/img/coin.svg" alt="Cion image" width="14px" height="14px" />
                    <span><b className={css.pinted}>+200$</b> на бонусный счет</span>
                </div>
            </div>
            <div className={css.hidden}>
                <p className={css.hiddenItem}>Диагональ: {product.displaySize}''</p>
                <p className={css.hiddenItem}>Разрешение: {product.displayResolution}</p>
                <p className={css.hiddenItem}>Оперативная память: {product.ram}Гб</p>
                <p className={css.hiddenItem}>Процессор: {product.processor}</p>
            </div>
        </div>
    );
};

export default ProductCard;
