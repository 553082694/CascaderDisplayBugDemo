import React from 'react';
import { Cascader } from 'antd';

export default class CascaderDemo extends React.Component {
    state = {
        selected: [],
    };

    options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];

    onChange = (v) => {
        Promise.resolve().then(() => {
            this.setState({ selected: v });
        });
    };

    render() {
        return (
            <Cascader
                options={this.options}
                expandTrigger='hover'
                changeOnSelect
                onChange={this.onChange}
                displayRender={() => this.state.selected.join('/')}
            />
        );
    }
}
