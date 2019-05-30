$(document).ready(function(){
    $('.arena_confirm').css("background-color","green");
});
$('.arena').on('click',function(){
    var str = this.id;
    var pic = "url('/images/"+str+".jpg')";
    $('.container').css("background-image",pic);
});
$('.arena_confirm').on('click',function(){
    $('h1').text("Select Fighters! Player 1   Player2");
    $('.arenalist').html("<select class='player1'>"+
                            "<option id='donny' value='donny'>Donny</option>"+
                            "<option id='leo'  value= 'leo'>Leo</option>"+
                            "<option id='mikey' value='mikey'>Mikey</option>"+
                            "<option id='raphael' value='raphael'>Raphael</option>"+
                            "</select>"+

                            "<select class='player2'>"+
                            "<option id='donny' value='donny'>Donny</option>"+
                            "<option id= 'leo' value= 'leo'>Leo</option>"+
                            "<option id= 'mikey' value='mikey'>Mikey</option>"+
                            "<option id= 'raphael' value='raphael'>Raphael</option>"+
                            "</select>");
    $('.arena_confirm').addClass('char_confirm');
    $('.char_confirm').removeClass('arena_confirm');
    $('.char_confirm').on('click',function(){
        alert(("FIGHT!"));
    });
});
$(document).on('change','.player1',function(){
    var str = this.value;
    var charpic = "url('/images/"+str+".png')";
    $('.p1').css("background-image",charpic);
});
$(document).on('change','.player2',function(){
    var str = this.value;
    var charpic = "url('/images/"+str+".png')";
    $('.p2').css("background-image",charpic);
});