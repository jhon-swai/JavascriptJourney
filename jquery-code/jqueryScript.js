$(document).ready(function(){

  // Element selector
  $("button").click(function() {
    $("p").hide();
  })
  $("#p1").mouseenter(function(){
    alert("If you click the button, the paraghaph will disappear")
  })

});
