import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import rawdata from './chart1.json';

// 销售额时间序列 - 堆叠面积图

const Chart0 = () => {
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
      color: ['#ff7a45', '#ffec3d', '#1677ff', '#f759ab', '#13c2c2'], //图例颜色
      title: {
        text: '' //图表标题
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985' //不影响呈现效果
          }
        }
      },
      legend: {
        data: ['United Kingdom', 'Europe(except UK)', 'Oceania', 'Asia', 'Others'] //图例系列
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: data[0].date
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'United Kingdom',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#ffd591'
              },
              {
                offset: 1,
                color: '#ff7a45'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: data[1].value
        },
        {
          name: 'Europe(except UK)',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#fff566'
              },
              {
                offset: 1,
                color: '#ffd666'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: data[2].value
        },
        {
          name: 'Oceania',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(0, 221, 255)'
              },
              {
                offset: 1,
                color: 'rgb(77, 119, 255)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: data[3].value
        },
        {
          name: 'Asia',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#ff85c0'
              },
              {
                offset: 1,
                color: '#eb2f96'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: data[4].value
        },
        {
          name: 'Others',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#73d13d'
              },
              {
                offset: 1,
                color: '#13c2c2'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: data[5].value
        }
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [counter]);

  return <div ref={chartRef} className='chart0' />;
};

export default Chart0;  