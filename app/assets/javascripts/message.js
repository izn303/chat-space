$(function(){ 
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="contents" data-message-id=${message.id}>
          <div class="contents__info">
            <div class="contents__info__user-name">
              ${message.user_name}
            </div>
            <div class="contents__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="contents__message">
            <p class="contents-message__content">
              ${message.text}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
      `<div class="contents" data-message-id=${message.id}>
          <div class="contents__info">
            <div class="contents__info__user-name">
              ${message.user_name}
            </div>
            <div class="contents__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="contents__message">
            <p class="contents-message__content">
              ${message.text}
            </p>
          </div>
        </div>`
      return html;
    };
 }


  $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
    .done(function(data){
      var html = buildHTML(data);
      $('.content').append(html);
      $('form')[0].reset();
      $('.content').animate({ scrollTop: $('.content')[0].scrollHeight});
    })
    .always(() => {
      $(".form__submit").removeAttr("disabled");
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })

  var reloadMessages = function() {
    var last_message_id = $('.contents:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.content').append(insertHTML);
      $('.content').animate({ scrollTop: $('.content')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});