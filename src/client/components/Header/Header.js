import React from 'react';

import Button from "../../../shared/Button";

export const Header = () => {

    return (
        <div className='w-50 bg-white'>
            <Button arr={['black', 'red', 'blue']} name='color'/>
            <Button arr={['gray', 'lightred', 'darkblue']} name='BGC'/>
            <Button arr={['normal', 'bold', 'regular']} name='fontWeight'/>
            <Button arr={[12, 15, 18]} name='fontSize'/>
        </div>
    );
}