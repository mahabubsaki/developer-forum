'use client';
import { Tabs, TabsProps } from 'antd';
import React from 'react';

const FilterTabs = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Tab 1`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: '2',
            label: `Tab 2`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `Tab 3`,
            children: `Content of Tab Pane 3`,
        },
    ];
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
};

export default FilterTabs;