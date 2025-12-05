// 入口程序，需要在package.json中的 main 字段指定
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: true
    }
  })
  // 使用绝对路径加载index.html ，使用相对路径打包后的应用会无法找到index.html
  win.loadFile(path.join(__dirname, 'index.html'))
}

(async () => { 
  await app.whenReady()
  createWindow()
  console.log('桌面程序已启动！')
  // 除了macOS外，当所有窗口关闭时退出应用程序
  app.on('window-all-closed', () => {
    /** process.platform 表示当前运行程序的操作系统平台标识
      'aix'：IBM AIX 操作系统
      'darwin'：macOS 或 iOS 系统（基于 Darwin 内核）
      'freebsd'：FreeBSD 操作系统
      'linux'：Linux 操作系统
      'openbsd'：OpenBSD 操作系统
      'sunos'：Oracle Solaris 操作系统
      'win32'：Windows 系统（包括 32 位和 64 位）
    */
    if (process.platform !== 'darwin') app.quit()
  })

  // macOS 上点击 dock 图标时重新创建窗口
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})()