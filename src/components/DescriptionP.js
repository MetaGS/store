import './DescriptionP.css';



const Description = ({ text, fontSize = '1.5rem', width = 'auto', extraClass, children }) => {
    return (
        <div className={`description-p ${extraClass}`} style={{ fontSize, width }}>
            <p >
                {text}
                {children}
            </p>
        </div>
    )
}


export default Description;