
$(function() {

    $('.select_dropdown').on('change', function(){
        console.log('hope');
            $('.header').toggleClass('header-up');
            $('.logo').toggleClass('logo-sizings');

            
    var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
    url += '?' + $.param({
    'api-key': 'e90ac7969c2046b0a19c7811bc84d6ee'
    });
    $.getJSON(url)

.done(function(data) {
  console.log(data);

   $.each(data.results, function (index, value) {

   })
})
})
});

