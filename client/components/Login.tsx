import { useState, MouseEventHandler } from 'react';
import axios from 'axios';

import css from '../styles/Login.module.scss';

type LoginTypes = {
    isOpen: boolean,
    handleModal: MouseEventHandler<HTMLImageElement>,
};

const Login = ({ isOpen, handleModal }: LoginTypes) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e?.target?.value);
    }

    const handleSignIn = async () => {
        const response = await axios.post('http://localhost:5000/api/v1/auth/login', { email: email, password: password });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userEmail", response.data.user.email);
        localStorage.setItem("userId", response.data.user.id);
    };

    const handleSignUp = async () => {
        const response = await axios.post('http://localhost:5000/api/v1/auth/register', { email: email, password: password });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userEmail", response.data.user.email);
        localStorage.setItem("userId", response.data.user.id);
    };

    if (!isOpen) return null;

    return (
        <div className={css.container}>
            <div className={css.content}>
                <div className={css.imageContainer}>
                    <img src="https://cdn.comfy.ua/media/blb/log-ll_4.svg" alt="Image" />
                </div>
                <div className={css.form}>
                    <img onClick={handleModal} className={css.close} src="https://www.svgrepo.com/show/66823/close.svg" alt="Close" width="14px" height="14px" />
                    <h3 className={css.header}>Вход</h3>
                    <label className={css.label} htmlFor="email">Имя</label>
                    <input className={css.input} value={email} onChange={handleName} type="text" id="email" />
                    <label className={css.label} htmlFor="password">Пароль</label>
                    <input className={css.input} value={password} onChange={handlePassword} type="password" id="password" />
                    <button className={css.button} onClick={handleSignIn}>Войти</button>
                    <button className={css.button} onClick={handleSignUp}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
