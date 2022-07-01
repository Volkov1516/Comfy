
import css from '../styles/Popup.module.scss';

type Type = 'normal' | 'small';

type PopupTypes = {
    type: Type;
    display?: boolean;
    title?: string;
    text: string;
    button?: string;
};

const Popup = ({ display, title, text, button }: PopupTypes) => {

    if(display == false) return null;

    return (
        <div className={css.container}>
            <div className={css.arrowUp}></div>
            <p className={css.title}>{title}</p>
            <p className={css.text}>{text}</p>
            {button && <button className={css.btn}>{button}</button>}
        </div>
    );
};

export default Popup;
