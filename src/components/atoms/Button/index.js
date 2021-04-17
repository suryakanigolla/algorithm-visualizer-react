import './style.scss';

const Button = ({onClick,children, disabled}) => {
    return(
        <button onClick={onClick} disabled={disabled} className="Button">{children}</button>
    )
}

export default Button;
