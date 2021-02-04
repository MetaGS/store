import {useState} from 'react';
import "./SizesComponent.css"

export default ({size, active = false, onClick = () => {}}) => {
    return (
        <div className={`size ${active&&'size-active'}`} onClick={onClick}>
            <span>{size}</span>
        </div>
    )
}