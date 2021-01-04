import './StandartInput.css';

const Input = ({ extraClasses = '', type, placeholder, name = '', style = {} }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`border-1px-grey input ${extraClasses}`}
            style={style}
        />
    )
}

export default Input;