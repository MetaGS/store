import './SigningHeader.css';

import shortLogo from '../assets/short-logo.svg';

export default function SigningHeader({ header = '', description = '' }) {
    return (
        <div className="signing-block">
            <img src={shortLogo} alt="website logo in the beginning" />
            <h3 className="signing-title">{header}</h3>
            <p className="signing-description">{description}</p>
        </div>
    )
}


