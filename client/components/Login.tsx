import { useState } from 'react';

import css from '../styles/Login.module.scss';

const Login = ({isOpen, handleModal}: any) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e?.target?.value);
    }

    if(!isOpen) return;

    return (
        <div className={css.container}>
            <div className={css.content}>
                <div className={css.imageContainer}>
                    <img src="https://cdn.comfy.ua/media/blb/log-ll_4.svg" alt="Image" />
                </div>
                <div className={css.form}>
                    <img onClick={handleModal} className={css.close} src="https://www.svgrepo.com/show/66823/close.svg" alt="Close" width="14px" height="14px" />
                    <h3 className={css.header}>Вход</h3>
                    <label className={css.label} htmlFor="name">Имя</label>
                    <input className={css.input} value={name} onChange={handleName} type="text" id="name" />
                    <label className={css.label} htmlFor="email">Пароль</label>
                    <input className={css.input} value={password} onChange={handlePassword} type="password" id="email" />
                    <button className={css.button}>Войти</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
