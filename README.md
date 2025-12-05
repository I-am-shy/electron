# 第一个 electron 应用

## 核心概念

![](https://cn.electron-vite.org/electron-processes.png)


1. main.js - （main）主进程

electron 的入口文件，负责管理应用的生命周期和创建窗口，同时负责与渲染进程通信。

2. index.html,index.js （render）渲染进程

渲染进程的入口文件，负责渲染界面和处理用户交互。

> 这里的 index.js 、 preload.js 和 main.js 是不同的上下文。

3. preload.js - preload 预加载脚本

预加载脚本在渲染器加载网页之前注入，类似于 Chrome 扩展的内容脚本 。若要在渲染器中添加需要特权访问的功能，可以通过定义全局对象来实现 contextBridge API


> **预加载脚本沙盒化**
>
>从 Electron 20 版本开始，预加载脚本默认被沙盒化 ，不再能够访问完整的 Node.js 环境。实际上这意味着你有一个被 polyfilled 的 require 一个只能访问有限 API 集的函数。
>
> |可用 API|描述|
> |---|---|
> |Electron 模块|渲染进程模块|
> |Node.js 模块|events, timers, url|
> |填充的全局变量|Buffer, process, clearImmediate, setImmediate|
>
> 更多信息，请查看进程 [沙箱指南](https://www.electronjs.org/docs/latest/tutorial/sandbox)。


3. package.json - 配置文件

electron 的配置文件，负责配置应用的名称、版本、描述等信息。需要在 main 字段指定入口文件。


## 参考文档

[Electron 官方文档](https://www.electronjs.org/zh/docs/latest/)