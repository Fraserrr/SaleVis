import React, { useState, useEffect, useRef } from 'react';
import { WordCloud } from '@antv/g2plot';
import rawdata from './words1.json';

// 商品词云图

function BoxPlot() {
  // 设置初始windowWidth为当前窗口宽度
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 在组件挂载后添加resize事件监听器
    window.addEventListener('resize', handleResize);

    // 在组件卸载前移除事件监听器 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 更新窗口宽度的函数，作为事件监听器
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const containerRef = useRef(null);
  const boxPlotRef = useRef(null);

  useEffect(() => {
    const data = rawdata;

    // 新渲染图表实例之前把原来的 Destroy 掉
    if (boxPlotRef.current) {
      boxPlotRef.current.destroy();
      boxPlotRef.current = null;
    }

    if (!boxPlotRef.current && containerRef.current) {
      boxPlotRef.current = new WordCloud(containerRef.current, {
        width: '100%',
        height: '100%',
        data: data,
        wordField: 'x',
        weightField: 'value',
        colorField: 'x',
        color: [
          "#FF7043",  // 明亮橙红色
          "#FF8C42",  // 鲜艳橙色
          "#FFA726",  // 活力橙色
          "#FFB74D",  // 柔和橙黄色
          "#FFC107",  // 金色
          "#FFD54F",  // 柔亮金黄
          // "#FFEB3B",  // 浅亮黄色
          "#FFE082",  // 柔和浅金色
          "#FFAB91",  // 浅橙红粉色
          "#FFCBA4",  // 浅粉橙色
          // "#F48FB1",  // 柔和粉红色
          // "#F06292",  // 明亮玫瑰色
          "#E57373",  // 鲜艳珊瑚红
          "#FF6F00",  // 深橙金色
          "#FF8A65"   // 柔暖橙粉
        ],
        wordStyle: {
          fontFamily: 'Verdana',
          fontSize: [windowWidth / 130, windowWidth / 35],  // 根据窗口大小设置字体大小范围
          fontWeight: 6,  // 字体粗细
          padding: 3, //单词间隔
        },
        // 固定[0. 1)的随机值，让每次渲染位置相同
        random: () => 0.2,
        spiral: 'archimedean',
        // 设置交互类型
        interactions: [{ type: 'element-active' }],
        state: {
          active: {
            // 这里可以设置 active 时的样式
            style: {
              lineWidth: 3,
            },
          },
        }
      });

      boxPlotRef.current.render();
    }

    return () => {
      // 保证只存在一个图表实例
      if (boxPlotRef.current) {
        boxPlotRef.current.destroy();
        boxPlotRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className='words'></div>;
}

export default BoxPlot;