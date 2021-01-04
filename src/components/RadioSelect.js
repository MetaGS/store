import { Fragment } from 'react';
import './RadioSelect.css';

const data = [
    {
        field: 'gender',
        name: 'Male',
        id: 'male'
    },
    {
        field: 'gender',
        name: 'Female',
        id: 'female'
    }
];

function Checkbox() {
    return (
        <div className="choose-gender">
            {data.map(({ field, name, id }) => {
                return (
                    <Fragment key={id}>
                        <input type="radio" name={field} id={id} />
                        <label className="border-1px-grey" htmlFor={id}>{name}</label>
                    </Fragment>
                )
            })}
        </div>

    )
}

export default Checkbox;

