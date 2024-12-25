import React, { useEffect, useRef, useState } from 'react';
import { Heatmap } from '@antv/g2plot';
import rawdata from './hitmap.json';

// G2Plot 的热力图不好用，最后改成了 Echarts 的，这个文件没有用到

function Hitmap() {
  const containerRef = useRef(null);
  const boxPlotRef = useRef(null);

  useEffect(() => {
    const data = rawdata;

    // Destroy chart instance before creating new one
    if (boxPlotRef.current) {
      boxPlotRef.current.destroy();
      boxPlotRef.current = null;
    }

    if (!boxPlotRef.current && containerRef.current) {
      boxPlotRef.current = new Heatmap(containerRef.current, {
        width: '80%',
        height: '80%',
        autoFit: true,
        data,
        xField: 'UpBound',
        yField: 'Area',
        colorField: 'ReturnRate',
        color: ['#174c83', '#7eb6d4', '#efefeb', '#efa759', '#9b4d16'],
        tooltip: {
          fields: ['Area', 'ReturnRate']
        },
        meta: {
          'UpBound': {
            type: 'cat',
          },
        },
      });

      boxPlotRef.current.render();
    }

    return () => {
      // Destroy chart instance when component is unmounted
      if (boxPlotRef.current) {
        boxPlotRef.current.destroy();
        boxPlotRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className='hitmap'></div>;
}

export default Hitmap;