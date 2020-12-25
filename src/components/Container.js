import './Container.css';

const Container = ({ style, extraClasses, children }) => {
    return (
        <div className={`container ${extraClasses}`} style={style}>
            {children}
        </div>
    )
}


export default Container;