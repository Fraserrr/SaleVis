import './yfer.css';
import React, { useState } from 'react';
import { Drawer } from 'antd';
import { Divider, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

// 顶栏右侧按钮点击后展开的信息栏

const ComplainDrawer = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='top-right'>
        <MenuOutlined onClick={showDrawer} style={{ fontSize: 24, color: '#ffffff' }} />
      </div>
      <Drawer
        size={size}

        title="销售数据在线分析系统 - 说明" placement="right" onClose={onClose} open={open}>
        <div>
          <h2>项目信息</h2>
          <ul>
            <li>项目基于某线上零售业务的订单数据，实现交互式在线可视分析系统</li>
            <li>由于图表特性，本系统不支持移动端加载，同时当窗口宽度过窄也会出现不完整显示</li>
            <li>若出现显示比例问题，请尽量调大窗口大小，并刷新页面</li>
          </ul>
          <Divider />
          <h2>图表介绍</h2>
          <h3>&nbsp;&nbsp;商品词云分析</h3>
          <ul>
            <li>基于订单备注的商品描述整理成词云</li>
            <li>剔除了无单独意义的词</li>
          </ul>
          <h3>&nbsp;&nbsp;销售额分析</h3>
          <ul>
            <li>堆叠面积图，横轴为日期，纵轴为销售额，呈现近一年销售额的变化趋势</li>
            <li>用不同颜色代表地区划分，根据数据特征分成了英国、欧洲（不含英国）、大洋洲、亚洲及其他地区</li>
            <li>鼠标悬停或点击图例可与图表进行交互</li>
          </ul>
          <h3>&nbsp;&nbsp;商品定价策略分析</h3>
          <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定价利润分析：</h4>
          <ul>
            <li>使用散点图呈现商品定价与该商品总销售额的关系</li>
            <li>每个点代表一件商品，横轴为商品单价，纵轴为该商品的总销售额</li>
            <li>剔除了总销售额过低（5000$ 以下）的商品数据点</li>
          </ul>
          <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前定价策略：</h4>
          <ul>
            <li>以直方图呈现本店当前在售商品的价格区间分布情况</li>
            <li>横轴为商品单价，纵轴表示每个价格区间内，当前在售商品的数量</li>
          </ul>
          <h3>&nbsp;&nbsp;退货订单分析</h3>
          <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;退货率：</h4>
          <ul>
            <li>饼图直观展示订单退货比例</li>
            <li>含多件商品的订单按商品编号划分开计算</li>
          </ul>
          <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;退货分布：</h4>
          <ul>
            <li>热力图呈现不同单价区间商品在不同地区的退货率</li>
            <li>横轴为商品单价区间（单位：$），纵轴为订单来源的大洲，从上到下为南美、大洋、北美、欧、亚、非，颜色深浅表示退货率</li>
          </ul>

        </div>
        <Divider />
        <div>
          <h2>声明</h2>
          <ul>
            <li>本系统仅作技术探讨，所有数据来源于互联网公开数据集，本站点不涉及任何组织、实体或个人</li>
            <li>数据来源：<a
              href="https://www.kaggle.com/datasets/rohitmahulkar/online-retails-sale-dataset"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#4096ff" }}>
              [Kaggle] Online Retails Sale Dataset
            </a></li>
            <li>主要使用工具、框架与图表库：MySQL | Python | React | Echarts | ANTV-G2Plot</li>
          </ul>
        </div>

      </Drawer>
    </>
  );
};
export default ComplainDrawer;