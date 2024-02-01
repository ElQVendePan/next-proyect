"use client"
import Button from '@/components/Button'
import WebHeader from '@/components/WebHeader'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [count, setCount] = useState(0)
    const [negatives, setNegatives] = useState(true)

    const resetCount = () => {
        setCount(0);
    }

    const increment = (value: number) => {
        setCount(count + value);
    }

    const decrement = (value: number) => {
        setCount(count - value);
        
    }

    const allowNegatives = () => {
        setNegatives(!negatives);
    }

    useEffect(() => {
        if (!negatives && count <= 0) {
            resetCount();
        }
    }, [count, negatives])
    

    return (
        <>
            <WebHeader title="Contador" image='/numbers.jpg' />
            <div className='w-4/5 mx-auto text-center my-52'>
                <b className='text-7xl block mb-20'>{count}</b>
                <label className='cursor-pointer'>
                    <input type="checkbox" className='inline-block' checked={negatives} onChange={allowNegatives} />
                    <p className='mb-6 inline-block ml-2 select-none'>
                        Permitir negativos
                    </p>
                </label>
                <br />
                <div className='inline-block mr-7'>
                    <Button type='button' text='-10' onClick={() => decrement(10)} disabled={!negatives} />
                </div>
                <div className='inline-block mr-7'>
                    <Button type='button' text='-' onClick={() => decrement(1)} disabled={!negatives} />
                </div>
                <div className='inline-block mr-7'>
                    <Button type='button' text='Reset' onClick={resetCount} />
                </div>
                <div className='inline-block mr-7'>
                    <Button type='button' text='+' onClick={() => increment(1)} />
                </div>
                <div className='inline-block '>
                    <Button type='button' text='+10' onClick={() => increment(10)} />
                </div>
            </div >
        </>
    )
}

export default page