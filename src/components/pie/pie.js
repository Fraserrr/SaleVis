import React, { useEffect, useRef, useState } from 'react';
import { Pie } from '@antv/g2plot';

// 总退货率 - 饼图

function Pie1() {
  const containerRef = useRef(null);
  const boxPlotRef = useRef(null);

  useEffect(() => {
    const data = [
      { type: '正常订单', value: 531285 },
      { type: '退货订单', value: 10624 },
    ];

    // 新渲染图表实例之前把原来的 Destroy 掉
    if (boxPlotRef.current) {
      boxPlotRef.current.destroy();
      boxPlotRef.current = null;
    }

    if (!boxPlotRef.current && containerRef.current) {
      boxPlotRef.current = new Pie(containerRef.current, {
        width: '100%',
        height: '100%',
        appendPadding: 1,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.75,
        color: ['#ffccc7', '#ff7875'],
        label: {
          type: 'spider',
          labelHeight: 8,
          offsetX: -8,
          offsetY: 8,
          content: '{percentage}',
        },
        legend: {
          layout: 'horizontal',
          position: 'bottom'
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
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

  return <div ref={containerRef} className='pie'></div>;
}

export default Pie1;