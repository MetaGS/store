import './SecondaryContainer.css';

const Secondary = (props) => {
    return (
        <>
            <div className="secondary-container">
                {props.children}
            </div>
        </>
    )
};

export default Secondary;