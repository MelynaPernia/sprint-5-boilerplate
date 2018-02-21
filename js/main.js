$(function () {
    // Declaracion de variables
    const btnCreateTopic = $('.btn-create-topic');
    const btnAceptar = $('.btn-accept');;
    const url = 'https://private-642b3b-foroapi.apiary-proxy.com/topics';
    const tableBody = $('.list-topic');
    const formTopic = $('.form-topic');

    function getData(data) {
        data.forEach(element => {
            tableBody.append(`<tr data-id="${element.id}"><td> ${element.content} : ${element.author_name} </td>  
                      <td> ${element.responses_count}</td></tr>`);
        });
    }
    btnCreateTopic.click(function () {
        let formVisible = formTopic.removeAttr('hidden');
    });

    //Cargar la página
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            getData(data);
        }
    });
    btnAceptar.click(function (e) {
        e.preventDefault();
    
        let authorName = $('#name-user').val(); 
        let topic = $('#name-topic').val(); 
    
    
        let dataTopic = {
            'author_name': authorName,
            'content': topic
        }
        $.post(url, dataTopic, function (data) {
    
        }) 
    });
    
    $('#table-topic').on('click', 'tr',function(e){
    
    
        let idTopic = $(this).data(); //opteniendo el id
    
        location.href=`verTopic.html?topic_id=${idTopic.id}`;
    
    })
}