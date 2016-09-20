jQuery.fn.extend({ 
  check: function() { 
    return this.each(function() { this.checked = true; }); 
  }, 
  uncheck: function() { 
    return this.each(function() { this.checked = false; }); 
  } 
});

function makePublish(){
    $("#edit-status").check();
    $("#edit-pathauto-perform-alias").check();
    $(".isPublish .unpublish").addClass("active");
    $(".isPublish .publish").removeClass("active");    
}

function makeUnPublish(){
    $("#edit-status").uncheck();    
    $(".isPublish .unpublish").removeClass("active");
    $(".isPublish .publish").addClass("active");
}

function submit_delete(){
    $('edit-delete').click();
}

function adminSelectRedirect(){
    location.href = $("#admin_select_redirect option:selected").attr("value");
}
