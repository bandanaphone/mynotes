const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
let win;

function createWindow(){
win = new BrowserWindow({width: 850, height: 600});
win.loadURL(`file://${__dirname}/index.html`);
win.on('closed',()=>{
win = null;
});}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
if (process.platform !== 'datwin'){app.quit();}
});

app.on('activate', ()=>{
if (win === null){createWindow();}
});