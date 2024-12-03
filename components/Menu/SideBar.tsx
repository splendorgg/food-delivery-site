"use client"
import React, { useState } from 'react'
import type { RadioChangeEvent, GetProp } from 'antd';
import { Radio, Space, Checkbox } from 'antd';

const options = [
    { label: 'Breakfast', value: 'Breakfast' },
    { label: 'Burger', value: 'Burger' },
    { label: 'Chicken', value: 'Chicken' },
    { label: 'Dessert', value: 'Dessert' },
    { label: 'International', value: 'International' },
    { label: 'Pizza', value: 'Pizza' },
    { label: 'Seafood ', value: 'Seafood ' },
    { label: 'Rice ', value: 'Rice ' },
    { label: 'Salad ', value: 'Salad ' },
    { label: 'Pide ', value: 'Pide ' },
];

function SideBar() {

    const [sortValue, setSortValue] = useState(1);

    const onRadioChange = (e: RadioChangeEvent) => {
        setSortValue(e.target.value);
    };
    const onCheckboxChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    return (
        <div className='w-full  '>
            <h2 className='text-xl '>Filters</h2>
            <div className='my-5 '>
                <h3 className='mb-1'>Sort by</h3>
                <Radio.Group onChange={onRadioChange} value={sortValue}>
                    <Space direction="vertical">
                        <Radio value={1} style={{ wordSpacing: "1px" }}>Fastest delivery</Radio>
                        <Radio value={2} style={{ wordSpacing: "1px" }}>Distance</Radio>
                        <Radio value={3} style={{ wordSpacing: "1px" }}>Top rated</Radio>
                        <Radio value={4} style={{ wordSpacing: "1px" }}>Most popular</Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div className='mt-5'>
                <h3 className='mb-1'>Cuisines</h3>
                <div >
                    <Checkbox.Group options={options} defaultValue={['']} onChange={onCheckboxChange} className='flex flex-col gap-2  ' />
                </div>
            </div>
            <div className='mt-4'>
                <h3 className='mb-1'>Payment Types</h3>
                <Radio.Group >
                    <Space direction="vertical">
                        <Radio value={1} style={{ wordSpacing: "1px" }}>Cash</Radio>
                        <Radio value={2} style={{ wordSpacing: "1px" }}>Multinet</Radio>
                        <Radio value={3} style={{ wordSpacing: "1px" }}>Sodexo</Radio>
                        <Radio value={4} style={{ wordSpacing: "1px" }}>Online Credit Card</Radio>
                        <Radio value={5} style={{ wordSpacing: "1px" }}>Credit Card on Delivery</Radio>
                    </Space>
                </Radio.Group>
            </div>
        </div>
    )
}

export default SideBar