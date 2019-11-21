$(function(){
    // Select
    $('html').click(function() {
        $('.select .dropdown').hide();
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle().toggleClass('active');
    })
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    })
    // Payment
    $('.payment-block .payment-item').click(function(){
        $('.payment-block .payment-item').removeClass('active');
        $(this).addClass('active');
    })
    // Date Picker
    var dp1 = $('#dp1').datepicker().data('datepicker');
})
