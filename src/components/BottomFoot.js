import './yfer.css';
import React from 'react';

// 底部页脚，根据工信部管理规定展示备案号，并链接到 ICP 备案查询入口

const BottomFoot = () => (

    <div className='foot'>
        <a  className='beian'
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noreferrer"
            style={{
                color: '#f9f2f4'
            }}
            >
            <text>滇ICP备2023016012号-1</text>
        </a>
    </div>
    // 个人服务器备案，项目地址 http://salevis.yujiezju.run 
);

export default BottomFoot;