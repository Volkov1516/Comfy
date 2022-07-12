import css from '../styles/Cart.module.scss';

const Cart = () => {
    return (
        <div className={css.container}>
            <div className={css.main}>
                <div className={css.order}>
                    <h4>Ваш заказ</h4>
                    <div className={css.content}>
                        <div className={css.items}>
                            <div className={css.itemWrapper}>
                                <img src="https://cdn.comfy.ua/media/catalog/product/cache/4/thumbnail/160x/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_iphone_11_128gb_black_01.png" alt="" />
                            </div>
                            <div className={css.itemWrapper}>
                                <img src="https://cdn.comfy.ua/media/catalog/product/cache/4/thumbnail/160x/9df78eab33525d08d6e5fb8d27136e95/1/5/1550702.png" alt="" />
                            </div>
                        </div>
                        <button>Изменить</button>
                    </div>
                </div>
                <div className={css.contacts}>
                    <h4>1. Контактная информация</h4>
                    <div className={css.content}>
                        <span>Киев</span>
                        <button>Изменить</button>
                    </div>
                </div>
                <div className={css.contacts}>
                    <h4>2. Выбор способа доставки</h4>
                    <div className={css.content}>
                        <span>Самовывоз из магазина</span>
                        <button>Изменить</button>
                    </div>
                </div>
                <div className={css.contacts}>
                    <h4>3. Выбор способа оплаты</h4>
                    <div className={css.content}>
                        <span>Наличные</span>
                        <button>Изменить</button>
                    </div>
                </div>
            </div>
            <div className={css.result}>
            </div>
        </div>
    )
}

export default Cart;
