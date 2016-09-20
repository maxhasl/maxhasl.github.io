
<div class="subscribe_popup">
    <a href="javascript:void(0)" class="button_hide" onclick="subscribe_popup_hide();">hide</a>
    <form id="subscribe_form">
        <div class="left">
            <a href="javascript:void(0)">Подписка</a>
            <label for="email">Адрес</label>
        </div>
        <div class="right">
            <div class="word-news">Новости</div>
            <input class="auto-clear placeholder" name="subscribe_email" id="email" title="электронная почта"/>
            <button id="subscribe_button_submit"><span>Подписаться</span></button>
        </div>
    </form>
</div>
<script>
    function subscribe_popup_show(){
        $(".subscribe_popup").show();
    }
    
    function subscribe_popup_hide(){
        $(".subscribe_popup").hide();
    }
    
    function subscribe_valid_email(email){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);                               
    }
    
    $("#subscribe_form").submit(function() { 
        email = $("#email").val();
        if (subscribe_valid_email(email) ){
            //show loading
            
            //ajax
            $.ajax({ 
              type: "POST", 
              url: "/sites/default/snippets/ajax/subscribe.php", 
              data: "email="+email, 
              success: function(msg){ 
                if (msg == 1){
                    alert(1);
                    //hide loading
                    $("#subscribe_form .left label").hide();
                    $("#email").add("<p>Вы успешно подписаны на новости</p><button type='button' onclick='subscribe_popup_hide()'>Ок</button>");
                    $("#email").hide();
                    $("#subscribe_button_submit").hide();
                    
                }
              },
              error: function(msg){ 
                alert( "Случилаcь непредвиденная ошибка, попробуйте позже." ); 
              }
            });
        }
        else
        {
            alert("Проверьте правильность емейла!");
            //error
        }
        return false; 
    })                  
</script>