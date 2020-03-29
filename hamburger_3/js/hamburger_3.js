(function($) {
    $(function () {
        $('#nav-toggle').on('click', function() {    //ハンバーガーメニュー（#nav-toggle）をクリックしたとき、bodyに"open"プロパティを持つクラスを付加する。
            $('body').toggleClass('open');
        });
        $('#navigation li').on({    //navigationのリストを「ホバー？」したとき、
            'mouseenter' : function(){    //「mouseenter（ホバーON）？」のとき？
                var index = $(this).index();    //「ホバー？」した要素から「順序？」を取得するして、変数indexに代入する？
                $('#nav-bg-wrap .nav-bg').eq(index).addClass('active');   //divの.nav-bgに、eq(index)メソッドを適用する。 or 適用したやつに/　プロパティactiveを持つクラスを付加する。

            },
            'mouseleave' : function(){    //「mouseenter（ホバーOFF）？」のとき？
                var index = $(this).index();
                $('#nav-bg-wrap .nav-bg').eq(index).removeClass('active');   //divの.nav-bgに、eq(index)メソッドを適用すしたやつのクラスから.activeを取り除く。
            }
        });
    });
})(jQuery);



//============================================================================
//    Search what I have a question
//============================================================================
//　function($)とは？　※これがあってもエラーにはならない。
//　$('#navigation li').on({ // });とは？
//　'mouseenter' : function(){　//  }とは？
//　.eq(index)
//　'mouseenter'
//　'mouseleave'
//　
//　
//　
//　
//　
//　
