const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Window for local content
    const localWin = new BrowserWindow({
        width: 500,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    localWin.loadFile('index.html');

    // Separate window for ChatGPT
    const chatGPTWin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    chatGPTWin.loadURL('https://chat.openai.com');
}

app.whenReady().then(createWindow);
