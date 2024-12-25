import './yfer.css';
import React from 'react';
import { Layout } from 'antd';
import { ReactComponent as Logo } from './images/Logo.svg';
import title from './images/title.png';
import ComplainDrawer from './ComplainDrawer';

// 顶部栏组件

const { Header } = Layout;

const TopHead = () => (

    <Header className='top'>
        <div className='top-left'>
            <Logo className='logo' />
            <img src={title} style={{ width: '75%', maxWidth: '520px' }}></img>
        </div>
        <ComplainDrawer />
    </Header>

);

export default TopHead;