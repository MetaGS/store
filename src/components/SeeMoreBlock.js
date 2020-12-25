const SeeMoreBlock = ({ background, logo, additionalClasses, title }) => {



    return (
        <>
            <div className={`${additionalClasses} mini-block`}>
                <img className="miniblock-image" src={background}
                    alt={`background for ${title} block`} />
                <img className="miniblock-icon" src={logo}
                    alt={`icon to ${title} field of website`} />
            </div>
        </>
    )
}

export default SeeMoreBlock;