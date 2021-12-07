const { ipcRenderer, contextBridge, Notification} = require("electron");
const fs = require("fs");
const path = require("path");


const API = {
    getArticles: () => getArticles(),
    save_articles: (articles) => save_articles(articles),
}

contextBridge.exposeInMainWorld("app", API);


function getArticles() {
    const data = fs.readFileSync(path.join(__dirname, "./articles.json"), { encoding: 'utf8', flag:'r' });
    return JSON.parse(data);
}

function save_articles(articles) {
    const data = JSON.stringify(articles);
    // console.log(data);
    const success = fs.writeFileSync(path.join(__dirname, "./articles.json"), data);
    ipcRenderer.send('notification', {body: "desde preload send information!"});
}

// {
//     "articles": [
        
//     ]
// }