$(function() {
  $('.select_dropdown').on('change', function(){
    $('.header').toggleClass('header-up').css('height', 'auto');
    $('.logo').toggleClass('logo-sizings');
 
  var input = this.value;
  var $contentList = $('.contentList');
  $contentList.empty();
  var url = 'https://api.nytimes.com/svc/topstories/v2/'+input+'.json';
      url += '?' + $.param({
      'api-key': 'e90ac7969c2046b0a19c7811bc84d6ee'
  });

  $.getJSON(url)
    .done(function(data) {
      var dataList = data.results.filter(function(result){
        return result.multimedia.length;
      }).splice(0,12);
    
          var $viewImage = $('.contentList')
          var listItem = '';
         
      $.each(dataList, function(data, value){

          var title = value.abstract;
          var image = value.multimedia[4].url;

          listItem += '<li class="li-article"><div id="wrapper"><p class="text">'
          listItem += title
          listItem += '</p></div>'
          listItem += '<img class="li-image" src="'
          listItem += image
          listItem += '"/></li>'
          console.log(listItem);
      })
      $viewImage.append(listItem);
   

    })
  })
});

