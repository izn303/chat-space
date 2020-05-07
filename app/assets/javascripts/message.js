$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="contents">
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
     `<div class="contents">
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
    console.log("done")
    var html = buildHTML(data);
    $('.content').append(html);
    $('form')[0].reset();
    $('.content').animate({ scrollTop: $('.content')[0].scrollHeight});
  })

  .always(() => {
    $(".form__submit").removeAttr("disabled");
  })

  .fail(function() {
    console.log("fail")
    alert("メッセージ送信に失敗しました");
  });
})
});