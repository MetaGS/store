import './FooterBlock.css';

const FooterBlock = ({ header, list }) => {
    return (
        <>
            <div className=" ">
                <h5 className="footer-header">{header}</h5>
                <ul className="footer-links a-primary">

                    {list.map(({ name, href = "" }) => {
                        return (<li><a href={href}>{name}</a></li>);
                    })}
                </ul>
            </div>
        </>
    )
};


export default FooterBlock;

{/* <div className=" ">
    <h5 className="footer-header">ABOUT T-FIT</h5>
    <ul className="footer-links a-primary">

        <li><a href="">Carreers</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Developers</a></li>
        <li><a href="">Staff</a></li>
    </ul>
</div>
        </> */}