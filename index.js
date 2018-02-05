

$(document).ready(function(){
  var site = 'https://en.wikipedia.org/wiki/';
  var input = $("#text1");
  
  $("#btn").on("click", function(){
    var search = input.val();
    console.log("click");
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      data: {
        action: "query",
        format: "json",
        generator: "search",
        gsrsearch: search,
        prop: "extracts",
        exsentences: "1",
        exintro: "1"
      },
      dataType: "jsonp",
      success: function (result){
        $("#list").html("");
         $.each(result.query.pages,function(key,value){
          $("#list").append('<div class="searches"><a href='+site+result.query.pages[key].title+'>'+result.query.pages[key].title+result.query.pages[key].extract+'</a></div>');
        });
       
      },
      Error: function(){
        console.log('Error: 505 - bad connection');
      }
    });
  });
    
  
});