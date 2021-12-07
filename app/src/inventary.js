const tbody_articles = document.getElementById("tbody_articles");
const articles = app.getArticles();

articles.articles.forEach((article, idx) => {
    const tr = document.createElement("tr");

    const td_idx = document.createElement("td");
    const td_depart = document.createElement("td");
    const td_category = document.createElement("td");
    const td_marca = document.createElement("td");
    const td_model = document.createElement("td");
    const td_amount = document.createElement("td");
    const td_serial = document.createElement("td");
    const td_view = document.createElement("td");
    const td_lastDate = document.createElement("td");
    
    td_idx.innerText = idx + 1;
    td_depart.innerText = article.departament;
    td_category.innerText = article.category;
    td_marca.innerText = article.marca;
    td_model.innerText = article.model;
    td_amount.innerText = article.amount;
    td_serial.innerText = article.serial;
    td_view.innerText = article.view;
    td_lastDate.innerText = article.date;
    
    tr.append(
        td_idx,
        td_depart,
        td_category,
        td_marca,
        td_model,
        td_amount,
        td_serial,
        td_view,
        td_view,
        td_lastDate
    );

    tbody_articles.append(tr);
});

