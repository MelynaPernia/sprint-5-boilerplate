$(function () {
  // Declaración de variables
  const btnCreateTopic = $('.btn-create-topic');
  const btnAceptar = $('.btn-accept');;
  const url = 'https://private-642b3b-foroapi.apiary-proxy.com/topics';
  const tableBody = $('.list-topic');
  const formTopic = $('.form-topic');
  const btnClose = $('.btn-close');
  const seachTopic = $('.seach-topic');

  function getData(data) {
    data.forEach(element => {
      tableBody.append(`<tr data-id="${element.id}"><td> ${element.content} : ${element.author_name} </td>  
                      <td> ${element.responses_count}</td></tr>`);
    });
  }

  // Ocultar formulario
  btnCreateTopic.click(function () {
    let formVisible = formTopic.removeAttr('hidden');
  });

  // Mostrar formulario    
  btnClose.click(function (e) {
    formTopic.attr('hidden', true);
  });

  // Cargar todos los temas resgistradas en el API
  $.ajax({
    type: 'GET',
    url: url,
    success: function (data) {
      getData(data);
    }
  });

  // Guardar el tema
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

  $('#table-topic').on('click', 'tr', function (e) {
    let idTopic = $(this).data(); //obteniendo el id    
    location.href = `verTopic.html?topic_id=${idTopic.id}`;
  });
});
