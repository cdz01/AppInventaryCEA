const table_articles = document.querySelector("table");
const articles = app.getArticles();

/* FUNCIONALIDADES */

function mClickDelete () {

    function handle_delete() {
        const selected = JSON.parse(localStorage.getItem("article_selected"));
        app.delete_one_article(selected.serial);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    
    document.querySelector(".btn-warning").addEventListener('click', () => handle_delete());
}

function mClickUpdate() {
    $(".btn-success").click(() => {
        $("#form_update").toggle(500);
    })
}

/* ENCARGADO DE REALIZAR LOS FILTROS */
function filter_browse() {
    const inp_browse = document.querySelector("#inp_browse");

    function handle_browse (e) {
        const find = articles.filter(art => art.serial == inp_browse.value);
        if (find) {
            clear_table();
            show_articles(find);
        }
        console.log(find);

        if (inp_browse.value === '') {
            show_articles();
        }
        
    }
    
    inp_browse.addEventListener('keyup', (e) => handle_browse(e));
}

/* * * * * * * * *  */

function clear_table() {
    // document.querySelector("table").removeChild(document.querySelector("tbody"));
    $("table tbody tr").remove();
}

function show_articles(_arts) {
    
    if (_arts !== undefined) {
        // MOSTRAR ESOS ELEMENTOS
        _arts.forEach((article, idx) => {
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
            // type="button" data-bs-toggle="modal" data-bs-target="#modelId"
            // tr.setAttribute("type", "button")

            td_amount.setAttribute("class", "text-center");
            
            tr.setAttribute("data-bs-toggle", "modal")
            tr.setAttribute("data-bs-target", "#modelId")
            tr.addEventListener('click', () => handle_click_row({
                departament: article.departament,
                category: article.ca,
                marca: article.marca,
                model: article.model,
                amount: article.amount,
                serial: article.serial,
                view: article.view,
                lastDate: article.date,
                state: article.state
            }));
        
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
        
            document.querySelector("tbody").append(tr);
        });  
    
    }

    if (_arts === undefined) {
        // SOLO MOSTRAR LOS ARTICULOS DEL INVENTARIO (todos)
        articles.forEach((article, idx) => {
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
            // type="button" data-bs-toggle="modal" data-bs-target="#modelId"
            // tr.setAttribute("type", "button")
            tr.setAttribute("data-bs-toggle", "modal")
            tr.setAttribute("data-bs-target", "#modelId")
            // tr.addEventListener('click', () => handle_click_row({serial: article.serial}));
            tr.addEventListener('click', () => handle_click_row({
                departament: article.departament,
                category: article.ca,
                marca: article.marca,
                model: article.model,
                amount: article.amount,
                serial: article.serial,
                view: article.view,
                lastDate: article.date,
                state: article.state
            }));
        
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
        
            document.querySelector("tbody").append(tr);
        });  
    
    }
   
    
}




/* HANDLE'S */
function handle_click_row (data) {
    /* GUARDA DATA SOBRE EL ARTICULO SELECCIONADO, PARA CUALQUIER USO DESPUES */
    localStorage.setItem("article_selected", JSON.stringify(data));
    document.querySelector("#mbody_serial").innerText = "Serial: " + data.serial;
}




/* LOGIC */

mClickDelete();
mClickUpdate();
filter_browse();
show_articles();