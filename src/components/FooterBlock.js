import './FooterBlock.css';

const FooterBlock = ({ header, list }) => {
    return (
        <>
            <div className=" ">
                <h5 className="footer-header">{header}</h5>
                <ul className="footer-links a-primary">

                    {list.map(({ name, href = "" }) => {
                        return (<li key={name}><a href={href}>{name}</a></li>);
                    })}
                </ul>
            </div>
        </>
    )
};


export default FooterBlock;

