
var dir = "";

const articles = app.getArticles();

$("#btn_dialog").click((e) => {
    e.preventDefault();

    dir = app.open_dialog()[0];
    $("#inp_dir").val(dir);
})

$("#btn_save").click((e) => {
    e.preventDefault();
    
    const name = $("#pdf_name").val();
    
    const doc = new jsPDF();
    doc.autotable({html: "#table_pdf"})

    doc.autotable({
        head: [['Departamento', 'Categoria', 'Marca', 'Modelo',
                'Cantidad', 'Serial', 'Observaciones', 'Estado', 'ultimo Movimiento']],
        body: [
            articles.filter(art => art.serial != null)
        ]
    })

    doc.save(dir + '/' + name);
})