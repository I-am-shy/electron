const { contextBridge, ipcRenderer } = require('electron')

// 暴露给渲染进程的 API
// 将对象（包含 openFile 方法）挂载到 window 的 electron 属性上
// 此时在 index.html 中可以通过 window.electron.openFile() 调用
// contextBridge.exposeInMainWorld('electron', {
//   openFile: () => ipcRenderer.invoke('open-file')// 进程间通信（IPC）
// })

contextBridge.exposeInMainWorld(
  "info",
  {
    platform: () => process.platform,
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
  }
)