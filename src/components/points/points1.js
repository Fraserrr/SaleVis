import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import rawdata from './points1.json';

// 定价与利润分布 - 散点图

const Points1 = () => {
  const chartRef = useRef(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const resizeListener = () => {
      setCounter(prevCounter => prevCounter + 1);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  useEffect(() => {
    const data = rawdata;

    const myChart = echarts.init(chartRef.current);

    const option = {
      // title: {
      //   text: '',
      //   left: 'center',
      //   top: 0
      // },
      visualMap: {
        min: 5000,
        max: 622714,
        dimension: 1,
        orient: 'vertical',
        right: 0,
        top: 'center',
        text: ['HIGH', 'LOW'],
        calculable: true,
        inRange: {
          color: ['#f2c31a', '#24b7f2']
        }
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross'
        }
      },
      xAxis: [
        {
          type: 'value'
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {  // 纵轴数值标记
            margin: 8,
            fontSize: 11
          }
        }
      ],
      series: [
        {
          name: 'total-sale',
          type: 'scatter',
          symbolSize: 8,
          data: data
        }
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [counter]);

  return <div ref={chartRef} className='points' />;
};

export default Points1;  