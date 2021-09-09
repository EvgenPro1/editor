import React from 'react';

const Button = (props) => {

    const optionList = props.arr.map((item, index) => <option key = {index} value={item}>{item}</option>)

    return (
        <lable className='m-1'> {props.name}:<select>
            {optionList}
        </select>
        </lable>
    );
};

export default Button;