import React from "react"
import { createRoot } from 'react-dom/client';
// import YourCom from '../../src/index';//你的组件
import YourCom from 'react-ts-component';
import './index.scss' //这个是demo的index，别搞错了哈,这个样式文件自己随意写吧
const App = () => {
    return (
        <div className="container" style={{height:"100%",width:"100%"}}>
            <div className="text">
                <p>Demo</p>
            </div>
            <YourCom />
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
