// const { app } = require("electron");

import { notification_option } from './Enums.js'

const field_departament = document.getElementById("field_departament");
const field_category = document.getElementById("field_category");
const field_state = document.getElementById("field_state");

const btn_departamentMenu = document.querySelectorAll(".btn_departamentMenu");
const btn_categoryMenu = document.querySelectorAll(".btn_categoryMenu");
const btn_estadoMenu = document.querySelectorAll(".btn_estadoMenu");

const btn_save = document.getElementById("btn_save");

const save_article = article => {
    const articles = app.getArticles();
    
    articles.push(article);
    app.save_articles(articles, notification_option.save);
}

btn_departamentMenu.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        const field = e.path[0].innerText;
        field_departament.innerText = field;
    })
});

btn_categoryMenu.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        const field = e.path[0].innerText;
        field_category.innerText = field;
    })
});

btn_estadoMenu.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        const field = e.path[0].innerText;
        field_state.innerText = field;
    })
});

$("#btn_clear").click(e => {
    e.preventDefault();

    $("input").val("");
    $("textarea").val("");
    $("#field_state").text("Selecciona el estado");
    $("#field_departament").text("Selecciona un Departamento");
    $("#field_category").text("Selecciona una Categoria");
})

btn_save.addEventListener('click', e => {
    e.preventDefault();

    const article = {
        departament: field_departament.innerText,
        category: field_category.innerText,
        marca: document.getElementById("inp_marca").value,
        model: document.getElementById("inp_model").value,
        amount: document.getElementById("inp_amount").value,
        serial: document.getElementById("inp_serial").value,
        view: document.getElementById("inp_view").value,
        lastDate: document.getElementById("inp_date").value,
        state: field_state.innerText
    }

    save_article(article);
    window.location.reload();
})