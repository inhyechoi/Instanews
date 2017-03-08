$(function () {
  $('.select_dropdown').selectric();

  $('.select_dropdown').on('change', function () {
    $('header').addClass('header_up').removeClass('header');
    $('.logo').addClass('logo_left').removeClass('.logo');
    $('.logo_conatiner').addClass('logo_container_sizing').removeClass('.logo_container');
    $('.selection_box').addClass('selection_box_sizing').removeClass('.selection_box');

    $('.loader').show();

    var input = $('select').val();
    $('.contentList').empty();
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + input + '.json?api-key=e90ac7969c2046b0a19c7811bc84d6ee';

   $.ajax({
          url: url,
          method: 'GET',
          dataType: 'json'
        })
      .done(function (data) {
        var dataList = data.results.filter(function (result) {
          return result.multimedia.length > 4;
   
        }).splice(0, 12);
        var $viewImage = $('.contentList')
        var listItem = '';
        $.each(dataList, function (index, value) {
          var title = value.abstract;
          var image = value.multimedia[4].url;

          listItem += '<li class="li-article"><div id="wrapper"><p class="text">'
          listItem += title
          listItem += '</p></div>'
          listItem += '<a href="' + value.url + '"><img class="li-image" src="'
          listItem += image
          listItem += '"/></a></li>'
        })
        $viewImage.append(listItem);
        $('.loader').hide();
      })
  })
});