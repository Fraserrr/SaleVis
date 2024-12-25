import './yfer.css';
import React from 'react';
import { Layout } from 'antd';

// 除顶栏和页脚以外的页面部分，作为所有可视化图表的容器

const Points1 = React.lazy(() => import('./points/points1'));
const Words1 = React.lazy(() => import('./words/words1'));
const Pie = React.lazy(() => import('./pie/pie'));
const Hitmap = React.lazy(() => import('./hitmap/ehitmap'));
const Chart1 = React.lazy(() => import('./Chart/Chart1'));
const Hist = React.lazy(() => import('./Hist/Hist'));

const { Content } = Layout;

const BodyContent = () => (

    <Content className='content'>
        <div className="up-1">
            <div className='bar'>
                <div className='title-words'>
                    <strong>&nbsp;&nbsp;商品词云&nbsp;&nbsp;</strong>
                </div>
            </div>
            <div className='words-chart'><Words1 /></div>
        </div>
        <div className="up-2">
            <div className='bar'>
                <div className='title-timeline'>
                    <strong>&nbsp;&nbsp;销售额分析&nbsp;&nbsp;</strong>
                </div>
            </div>
            <div className='timeline-chart'><Chart1 /></div>
        </div>
        <div className="up-3">
            <div className='bar'>
                <div className='title-point'>
                    <strong>&nbsp;&nbsp;定价利润分析&nbsp;&nbsp;</strong>
                </div>
            </div>
            <div className='point-chart'><Points1 /></div>
        </div>
        <div className="down-1">
            <div className='bar'>
                <div className='title-pie'>
                    <strong>&nbsp;&nbsp;退货率&nbsp;&nbsp;</strong>
                </div>
            </div>
            <div className='pie-chart'><Pie /></div>
        </div>
        <div className="down-2">
            <div className='bar'>
                <div className='title-hitmap'>
                    <strong>&nbsp;&nbsp;退货分布&nbsp;&nbsp;</strong>
                </div>
            </div>
            <div className='hitmap-chart'><Hitmap /></div>
        </div>
        <div className='down-3'>
            <div className='bar'>
                <div className='title-hist'>
                    <strong>&nbsp;&nbsp;当前定价策略&nbsp;&nbsp;</strong>
                </div>
            </div>
            <div className='hist-chart'><Hist /></div>
        </div>
    </Content>

);

export default BodyContent;