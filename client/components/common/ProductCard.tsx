import Link from 'next/link';

import css from '../../styles/ProductCard.module.scss';

import ProductCardCarousel from './ProductCardCarousel';

const ProductCard = ({ product }: any) => {
    let { _id, name, brand, model, color, battery, colorAvailable, displayFrashrate, displayResolution, displaySize, displayType, images, labels, os, price, processor, ram, rom, rate, romAvailable } = product;

    const newColor = color?.split('_').map((i: any) => i[0].toUpperCase() + i.substring(1)).join(' ');

    let newRom;

    if (rom > 16) {
        newRom = rom + 'Gb'
    } else {
        newRom = rom + 'Tb'
    }

    return (
        <div className={css.container}>
            <a className={css.code} href="#">Код: 1234567</a>

            <ProductCardCarousel images={images} colors={colorAvailable} />

            <div className={css.info}>
                <div className={css.name}>
                    <Link href={`/product/${_id}`}>
                        <a>{brand} {name} {newRom} {newColor}</a>
                    </Link>
                </div>
                <div className={css.feedback}>
                    <div>
                        {rate}
                    </div>
                    <a className={css.comments}>
                        <img src="/img/chat-bubble.svg" alt="Comments image" width="15px" height="15px" />
                        <span>63</span>
                    </a>
                </div>
                <div className={css.labels}>
                    {labels.map((i: any) => (
                        <img src={i} alt="Label image" width="30px" height="30px" />
                    ))}
                </div>
                <div className={css.actions}>
                    <div className={css.price}>
                        <div className={css.priceCurrent}>{price}</div>
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
                <p className={css.hiddenItem}>Диагональ: {displaySize}''</p>
                <p className={css.hiddenItem}>Разрешение: {displayResolution}</p>
                <p className={css.hiddenItem}>Оперативная память: {ram}Гб</p>
                <p className={css.hiddenItem}>Процессор: {processor}</p>
            </div>
        </div>
    );
};

export default ProductCard;
