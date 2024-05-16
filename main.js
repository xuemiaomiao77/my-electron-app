const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
  })

  win.loadFile('index.html')
// 加载网页地址
// win.loadURL('https://www.jiakaobaodian.com/mnks/kemu1/car-beijing.html');
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
  createWindow()
  app.on('activate', () => {
    console.log(BrowserWindow.getAllWindows().length)
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
    console.log('quit')
    if (process.platform !== 'darwin') app.quit()
  })