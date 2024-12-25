import './components/yfer.css';
import React, { useState, useEffect } from 'react';
import General from './components/General';
import Ncontent from './components/Ncontent';

// 在网页启动入口 App 处动态监听窗口宽度
// 窗口过窄则不加载可视化页面，而是给出调整窗口大小的提示信息

function App() {
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

  return (
    <div>
    {windowWidth < 1023 ? <Ncontent/> : <General/>}
    </div>
  );
}

export default App;
