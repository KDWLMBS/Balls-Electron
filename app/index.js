import {app, BrowserWindow} from "electron";
import path from "path";
import url from "url";

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '..', 'web', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});
