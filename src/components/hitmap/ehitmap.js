import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

// 分地区分价格段退货率 - 热力图

const Ehitmap = () => {
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
    const range = [
      '0-0.5', '0.5-1', '1-1.5', '1.5-2', '2-2.5', '2.5-3', '3-3.5',
      '3.5-4', '4-4.5', '4.5-5', '5-6', '6-7',
      '7-8', '8-10', '10-12', '12-14', '14-17', '17-20',
      '20-30'
    ];

    const area = [
      'AF', 'AS', 'EU',
      'NA', 'OA', 'SA'
    ];

    const data = [
      [0, 0, 0.0],
      [0, 1, 0.0],
      [0, 2, 0.0],
      [0, 3, 0.0],
      [0, 4, 0.0],
      [0, 5, 0.0],
      [0, 6, 0.0],
      [0, 7, 0.0],
      [0, 8, 0.0],
      [0, 9, 0.0],
      [0, 10, 0.0],
      [0, 11, 0.0],
      [0, 12, 0.0],
      [0, 13, 0.0],
      [0, 14, 0.0],
      [0, 15, 0.0],
      [0, 16, 0.0],
      [0, 17, 0.0],
      [0, 18, 0.0],
      [1, 0, 0.0],
      [1, 1, 0.0165],
      [1, 2, 0.0284],
      [1, 3, 0.0336],
      [1, 4, 0.0541],
      [1, 5, 0.0552],
      [1, 6, 0.1081],
      [1, 7, 0.0769],
      [1, 8, 0.0143],
      [1, 9, 0.0169],
      [1, 10, 0.0],
      [1, 11, 0.0],
      [1, 12, 0.0],
      [1, 13, 0.0],
      [1, 14, 0.0769],
      [1, 15, 0.0],
      [1, 16, 0.1],
      [1, 17, 0.41],
      [1, 18, 0.0],
      [2, 0, 0.0089],
      [2, 1, 0.0124],
      [2, 2, 0.0169],
      [2, 3, 0.0147],
      [2, 4, 0.0096],
      [2, 5, 0.0224],
      [2, 6, 0.0078],
      [2, 7, 0.024],
      [2, 8, 0.0139],
      [2, 9, 0.0228],
      [2, 10, 0.0132],
      [2, 11, 0.0268],
      [2, 12, 0.0199],
      [2, 13, 0.0264],
      [2, 14, 0.0306],
      [2, 15, 0.038],
      [2, 16, 0.0276],
      [2, 17, 0.0311],
      [2, 18, 0.2647],
      [3, 0, 0.2615],
      [3, 1, 0.3333],
      [3, 2, 0.1613],
      [3, 3, 0.2647],
      [3, 4, 0.2593],
      [3, 5, 0.2],
      [3, 6, 0.3529],
      [3, 7, 0.25],
      [3, 8, 0.16],
      [3, 9, 0.2857],
      [3, 10, 0.0],
      [3, 11, 0.5],
      [3, 12, 0.1429],
      [3, 13, 0.0],
      [3, 14, 0.0],
      [3, 15, 0.5],
      [3, 16, 0.0],
      [3, 17, 0.0],
      [3, 18, 0.0522],
      [4, 0, 0.0519],
      [4, 1, 0.0586],
      [4, 2, 0.0788],
      [4, 3, 0.129],
      [4, 4, 0.0451],
      [4, 5, 0.0],
      [4, 6, 0.0179],
      [4, 7, 0.1061],
      [4, 8, 0.0847],
      [4, 9, 0.0],
      [4, 10, 0.0345],
      [4, 11, 0.0],
      [4, 12, 0.0571],
      [4, 13, 0.1111],
      [4, 14, 0.0],
      [4, 15, 0.0],
      [4, 16, 0.0],
      [4, 17, 0.0],
      [4, 18, 0.0],
      [5, 0, 0.0],
      [5, 1, 0.0],
      [5, 2, 0.0],
      [5, 3, 0.0],
      [5, 4, 0.0],
      [5, 5, 0.0],
      [5, 6, 0.0],
      [5, 7, 0.0],
      [5, 8, 0.0],
      [5, 9, 0.0],
      [5, 10, 0.0],
      [5, 11, 0.0],
      [5, 12, 0.0],
      [5, 13, 0.0],
      [5, 14, 0.0],
      [5, 15, 0.0],
      [5, 16, 0.0],
      [5, 17, 0.0],
      [5, 18, 0.0]
    ]
      .map(function (item) {
        return [item[1], item[0], item[2] || '-'];
      });

    const myChart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        position: 'top'
      },
      grid: {
        height: '60%',
        top: '8%'
      },
      xAxis: {
        type: 'category',
        data: range,
        splitArea: {
          show: true
        }
      },
      yAxis: {
        type: 'category',
        data: area,
        splitArea: {
          show: true
        }
      },
      visualMap: {
        min: 0,
        max: 0.7,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '8%',
        precision: 2,
      },
      gradientColor: ['#ffdeda', '#ffa39e', '#ff7875'],
      series: [
        {
          name: '退货率',
          type: 'heatmap',
          data: data,
          label: {
            show: false
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [counter]);

  return <div ref={chartRef} className='hitmap' />;
};

export default Ehitmap;  