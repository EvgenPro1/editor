import React from 'react';

const Button = (props) => {

    const optionList = props.arr.map(item => <option value={item}>{item}</option>)
    return (
       <lable className = 'm-1'> {props.name}:<select>
           {/*<option value="">current</option>*/}
           {optionList}
       </select>
           </lable>
           );
};

export default Button;