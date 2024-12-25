import React, { useEffect, useRef } from 'react';
import { Histogram } from '@antv/g2plot';
import rawdata from './hist.json';

// 当前定价策略 - 直方图

function Hist() {
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
            boxPlotRef.current = new Histogram(containerRef.current, {
                width: '100%',
                height: '100%',
                data: data,
                binField: 'value',
                binWidth: 0.5,
                color: '#ffbb96',
                tooltip: {
                    showMarkers: true,
                    position: 'top',
                },
                interactions: [
                    {
                        type: 'element-highlight',
                    },
                ],
                /** range 为 x 轴代表字段，count 为 y 轴统计个数字段 */
                meta: {
                    range: {
                        min: 0,
                        max: 30,
                        tickInterval: 0.5,
                    },
                    count: {
                        max: 500,
                        nice: true,
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

    return <div ref={containerRef} className='hist'></div>;
}

export default Hist;