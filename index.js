$(function(){
    $('.info_btn').click(function(){
        $('#intro').css('display','block')
        $('#schedule').removeClass('show')
        $('#song_form').removeClass('show')
        $('#yullmoo').removeClass('show')
        return false;
      });
    $('.sche_btn').click(function(){
        $('#intro').css('display','none')
        $('#schedule').addClass('show')
        $('#song_form').removeClass('show')
        $('#yullmoo').removeClass('show')
        return false;
      });
    $('.song_btn').click(function(){
        $('#intro').css('display','none')
        $('#schedule').removeClass('show')
        $('#song_form').addClass('show')
        $('#yullmoo').removeClass('show')
        // 색
        return false;
      });
      $('#yullmoo_btn').click(function(){
        $('#intro').css('display','none')
        $('#schedule').removeClass('show')
        $('#song_form').removeClass('show')
        $('#yullmoo').addClass('show')
        // 색
        return false;
      });
    
  });
  console.log('리액트로 짠걸 깃허브페이지를 쓰고싶어서 html,css로 짜다보니 스크롤 내려가는 것도 구현이 안되고(리액트는 됩니다 구질구질..) 이것저것 엉망입니다.. 부디.. 코드 뜯어보지 마시옵고... 복받으세요')