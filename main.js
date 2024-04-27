const { app, BrowserWindow } = require('electron');
const path = require('node:path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
			nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            sandbox: true,
			preload: path.join(__dirname, 'preload.js'),
            // Enable navigator.mediaDevices APIs:          
        }
    });

    win.loadFile('index.html');  // Make sure you're loading your HTML file here
	// Load ChatGPT website
    win.loadURL('https://chat.openai.com');
}


app.whenReady().then(createWindow);
