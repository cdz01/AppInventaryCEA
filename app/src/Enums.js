const DataLocalStorage = {
    article_selected: "article_selected"
}

const keys_article = {
    departament: "departament",
    category: "category",
    marca: "marca",
    model: "model",
    amount: "amount",
    serial: "serial",
    view: "view",
    lastDate: "lastDate",
    state: "state"
}

function getData(item) {
    return JSON.parse(localStorage.getItem(item));
}

export {
    DataLocalStorage,
    getData,
    keys_article,
}