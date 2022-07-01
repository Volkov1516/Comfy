import cx from 'classnames';

import css from '../styles/Popup.module.scss';

type Type = 'normal' | 'small';

type Background = 'white' | 'black' | 'default';

type PopupTypes = {
    type: Type;
    display?: boolean;
    background?: Background;
    title?: string;
    text: string;
    button?: string;
};

const Popup = ({ type, display, background = 'default', title, text, button }: PopupTypes) => {

    if(display == false) return null;

    return (
        <div className={cx(css.container, css[type], css[background])}>
            <div className={cx(css.arrowUp, css[type], css[background])}></div>
            <p className={cx(css.title, css[type])}>{title}</p>
            <p className={cx(css.text, css[type], css[background])}>{text}</p>
            {button && <button className={css.btn}>{button}</button>}
        </div>
    );
};

export default Popup;
