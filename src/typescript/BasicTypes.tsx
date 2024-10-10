// import React from 'react'

export const BasicTypes = () => {
    const name: string = 'Salvador';
    const age: number = 37;
    const isActive: boolean = false;

    const powers: string[] = ['React', 'ReacNative'];

    powers.push('Vue');

    return (
        <>
            <h3>Tipos basicos</h3>
            {name} {age} {isActive}
            <br />
            {powers.join(', ')}
        </>

    )
}
