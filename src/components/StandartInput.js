import './StandartInput.css';

const Input = ({ extraClasses = '', type, placeholder, name = '', style = {}, ...rest }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`border-1px-grey input ${extraClasses}`}
            style={style}
            {...rest}
        />
    )
}

export default Input;