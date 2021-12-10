const { app, BrowserWindow, webContents, ipcMain, Notification } = require("electron");
const path = require("path");

// require('@electron/remote/main').initialize()
// require("@electron/remote/main").enable(webContents)

let _window = null;

app.on("ready", () => {
    
    _window = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences : { 
            nodeIntegration : true , 
            // contextIsolation : false,
            preload: path.join(__dirname, "preload.js")
        },
        // resizable: false,
        autoHideMenuBar: true,
    });
    // _window.webContents.openDevTools();

    _window.loadFile(__dirname + "./index.html");
})

ipcMain.on('notification', (event, args) => {
    new Notification({title: "Inventario CEA", body: "El articulo se ha guardado correctamente!"}).show();
})