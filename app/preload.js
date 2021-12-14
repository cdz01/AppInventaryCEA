const { ipcRenderer, contextBridge, Notification} = require("electron");
const fs = require("fs");
const path = require("path");

const API = {
    getArticles: () => getArticles(),
    save_articles: (articles) => save_articles(articles),
    delete_one_article: (serial) => delete_one_article(serial),
    test: (t) => { ipcRenderer.send('notification', {body: t}) }
}

contextBridge.exposeInMainWorld("app", API);


function getArticles() {
    const data = fs.readFileSync(path.join(__dirname, "./articles.json"), { encoding: 'utf8', flag:'r' });
    return JSON.parse(data);
}

function save_articles(articles, option='s') {
    const data = JSON.stringify(articles);
    const success = fs.writeFileSync(path.join(__dirname, "./articles.json"), data);
    console.log(option)
    switch(option) {
        case 's':
            ipcRenderer.send('notification');
            break;
        case 'd':
            ipcRenderer.send('notification-delete');
            break;
    }
}

function delete_one_article(serial) {
    const arts = getArticles();

    const fArts = arts.filter(art => art.serial !== serial);
    save_articles(fArts, 'd');
}

// {
//     "articles": [
        
//     ]
// }