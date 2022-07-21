import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import css from '../styles/Cart.module.scss';

const Cart = () => {
    const router = useRouter();

    const [cart, setCart] = useState<any>([]);

    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            router.push('/');
        } else {
            axios.get(`http://localhost:5000/api/v1/cart/${localStorage.getItem('userId')}`).then((resp) => setCart(resp.data))
        }
    }, []);

    return (
        <div className={css.container}>
            <div className={css.main}>
                <div className={css.order}>
                    <h4>Ваш заказ</h4>
                    <div className={css.content}>
                        <div className={css.items}>
                            {cart?.data?.map((i: any) => (
                                <div className={css.itemWrapper}>
                                    <img src={i.products[0].img} alt="" />
                                </div>
                            ))}
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
