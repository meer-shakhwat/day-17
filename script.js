//$(selector).Action()


$(window).scroll(function () {
    var windowScrollPosition = $(window).scrollTop();
    var stikyDiv = $('#stikyDiv').position();
    if(windowScrollPosition>=stikyDiv.top) {
    $('#stikyDiv').css({
        'position' : 'fixed',
        'top' : '0px',
    });
    }
    else{
        $('#stikyDiv').css({
            'position' : 'relative',
            'top' : '0px',
        });
    }
});



















// var FirstScrollPosition = 0 ;
// $('#scrollDiv').scroll(function () {
//     // $('#heading').css('display','block').fadeOut(1000);
//    var scrollPosition  = $('#scrollDiv').scrollTop();
//    // $('#heading').text(scrollPosition);
//    if (scrollPosition>FirstScrollPosition)  {
//        $('#heading').text('you are scrolling down');
//    }
//    else {
//        $('#heading').text('you are scrolling up')
//    }
//    FirstScrollPosition=scrollPosition;
// });








$('#firstName').keyup(function () {
    var firstName = $('#firstName').val();
    $('#res1').text(firstName);
});
$('#lastName').keyup(function () {
    var lastName = $('#lastName').val();
    $('#res2').text(lastName);
});
$('#lastName').blur(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var fullName = firstName+' '+lastName;
    $('#res3').text(fullName);
});











// $('#btn').click(function () {
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     var fullName = firstName+' '+lastName;
//     $('#fullName').val(fullName);
// });









