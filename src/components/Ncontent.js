import './yfer.css';
import React from 'react';
import { Layout } from 'antd';

// 窗口过窄时显示的提示页面，提醒用户调整窗口大小

const { Content } = Layout;

const Ncontent = () => (

    <Content className='ncontent'>
        <div className='nbox'>
            <h1>系统提示：</h1>
            <h2>欢迎访问销售数据在线分析系统！</h2>
            <h3>由于图表特性，本系统不支持移动端加载，同时当窗口宽度过窄也会出现不完整显示。<br /><br />
                请使用电脑端访问，并将窗口适当调大，页面将自动加载。</h3>
        </div>
        <div className='nfoot'>
            <a className='beian'
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "gray" }}>
                滇ICP备2023016012号-1
            </a>
        </div>
    </Content>

);

export default Ncontent;