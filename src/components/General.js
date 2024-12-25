import './yfer.css';
import React from 'react';
import { Layout } from 'antd';
import TopHead from './TopHead';
import BodyContent from './BodyContent';
import BottomFoot from './BottomFoot';

// 总的网页布局，直接被 App 调用

function General() {

    return (
        <Layout className='layout'>
            <TopHead />
            <BodyContent />
            <BottomFoot />
        </Layout>
    );
};

export default General;