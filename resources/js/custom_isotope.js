$(document).ready(function(){
    custom();
})

function custom(){
    var $grid = $('.item_area').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'fitRows'
      });

    $(".filter").on("click",function(){
        var filterValue = $(this).attr('data-filter');

        $grid.isotope({ filter: filterValue });
        $(this).addClass("active").siblings().removeClass("active");
    });

}
