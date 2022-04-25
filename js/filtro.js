$(document).ready(function(){
    
    //agregando colores a la barra de filtro
    $('.category_list .category_item[category="nike"]').addClass('ct_item_active');

    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        //agregando la clase item al selcccion
        $('.category_item').removeClass('ct_item_active');
        $(this).addClass('ct_item_active');


        //OCULTANDO PRODS
        $('.product-item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.product-item').hide();
        } setTimeout(hideProduct,400);

        //MOSTRANDO PRODS
        $('.product-item[category="'+catProduct+'"]').show();
      

        $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)'); 
        //$('.product-item[category="'+catProduct+'"]').show();
    });

    $('.category_item[category="all"]').click(function(){
        $('.product-item').show();
    });
});

