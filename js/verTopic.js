// Declaración de variables
let topicId = getParameterByName('topic_id');
const urlAnswers = `https://private-anon-5efe147e47-foroapi.apiary-proxy.com/topics/${topicId}/responses`;
const url = `https://private-anon-5efe147e47-foroapi.apiary-proxy.com/topics/${topicId}`;
const tableBodyAnswers = $('.list-answers');
const btnCreateAnswers = $('.btn-create-answers');
const formTopicAnswers = $('.form-topic-answers');
const topic = $('.topic');
const contentTopic = $('.content-topic');
const btnClose = $('.btn-close');
const btnAnswers = $('.btn-answers');

// Ocultar formulario
btnCreateAnswers.click(function (e) {
  formTopicAnswers.removeAttr('hidden');
});

// Mostrar formulario
btnClose.click(function (e) {
  formTopicAnswers.attr('hidden', true);
})

// Obtener el tema y contenido 
$.ajax({
  type: 'GET',
  url: url,
  success: function (data) {
    console.log(data);
    let nameAuthor = data.author_name;
    let content = data.content;
    topic.text(nameAuthor);
    contentTopic.text(content)
  }
});

// Obtener todas las resuestas del tema
$.ajax({
  type: 'GET',
  url: urlAnswers,
  success: function (data) {
    if (data.error === undefined) {
      data.forEach(element => {
        tableBodyAnswers.append(`<tr><td> ${element.author_name} </td>  
                            <td> ${element.content}</td></tr>`);
      });
    }
  }
});

// Guardar la información de la respuesta ingresada en el formulario
btnAnswers.click(function (e) {
  e.preventDefault();
  let authorName = $('#name-user').val();
  let message = $('#menssage').val();

  let dataTopic = {
    'author_name': authorName,
    'content': message,
    'topic_id': topicId
  }
  $.post(urlAnswers, dataTopic, function (data) {

  })
});