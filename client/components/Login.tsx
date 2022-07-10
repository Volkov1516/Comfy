import css from '../styles/Login.module.scss';

const Login = () => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                <div className={css.imageContainer}>
                    <img src="https://cdn.comfy.ua/media/blb/log-ll_4.svg" alt="Image" />
                </div>
                <div className={css.form}>
                    <h3 className={css.header}>Вход</h3>
                    <label className={css.label} htmlFor="name">Имя</label>
                    <input className={css.input} type="text" id="name" />
                    <label className={css.label} htmlFor="email">Пароль</label>
                    <input className={css.input} type="password" id="email" />
                    <button className={css.button}>Войти</button>
                </div>
            </div>
        </div>
    );
};

export default Login;