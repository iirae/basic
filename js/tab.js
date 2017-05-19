/**
 * Created by macnyoni on 2017. 5. 19..
 */

$('.eTab').each(function(){
    var selected = $(this).find('> ul > li.selected > a');
    if(selected.siblings('ul').length <= 0){
        $(this).removeClass('gExtend');
    }
});
$('body').delegate('.eTab a', 'click', function(e){
    var _li = $(this).parent('li').addClass('selected').siblings().removeClass('selected'),
        _target = $(this).attr('href'),
        _siblings = '.' + $(_target).attr('class');
    $(_target).show().siblings(_siblings).hide();
    // gExtend ctrl
    var mtab = $(this).parents('.mTab:first');
    if($(this).siblings('ul').length > 0){
        if(!mtab.hasClass('gExtend')){
            mtab.addClass('gExtend');
        }
    } else {
        if($(this).parents('ul:first').siblings('a').length <= 0){
            mtab.removeClass('gExtend');
        }
    }
    e.preventDefault();
});