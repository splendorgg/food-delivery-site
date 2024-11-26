"use client"
import { Dropdown, MenuProps } from 'antd';
import { TbWorld } from "react-icons/tb";
import React, { useState } from 'react'

function DropDown() {
    const [language, setLanguage] = useState("EN")
    const items: MenuProps['items'] = [
        {
            label: <span onClick={() => handleLanguageChange('TR')} className='px-2 py-2 block'>Türkçe</span>,
            key: '0',
        },
        {
            label: <span onClick={() => handleLanguageChange('EN')} className='px-2 py-2 block'>English</span>,
            key: '1',
        },
    ]

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang)
    }
    return (
        <div >
            <Dropdown menu={{ items }} trigger={['click']} className='items-center'>
                <a onClick={(e) => e.preventDefault()}>
                    <div className='flex  gap-2 cursor-pointer items-center  hover:bg-gray-400 px-4 py-1 rounded-lg transition-all duration-200 ' >
                        <TbWorld size={20} />{language}
                    </div>
                </a>
            </Dropdown>
        </div>
    )
}

export default DropDown