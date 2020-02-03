
$('document').ready(function(){

    $('button').click(function(){
        $('button').next('p').slideToggle(slow);
    });
});