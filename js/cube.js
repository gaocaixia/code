/**
 * Created by Administrator on 2016/11/12 0012.
 */
    document.addEventListener('touchmove',function(e){
        e.preventDefault();
        /*ֻҪ�Ժ���ҳ����ʵ�ֻ��������ǾͰ�documentd��touchmoveĬ����Ϊ��ֹ���������Ϳ��Ա����������Լ�����������Ĭ����Ϊ*/
    },false);
var cubeRender=(function(){
    var $cube=$('#cube');
    var $box=$cube.children('.box');
    var $imgList=$box.children('img');
    $box.attr({
        rotateX:45,
        rotateY:45
    });
    function start(e){
        var point=e.changedTouches[0];
        $(this).attr({
            strX:point.pageX,
            strY:point.pageY,
            changeX:0,
            changeY:0
        })
    }
    function move(e){
        var point=e.changedTouches[0],
        changeX=point.pageX-$(this).attr('strX'),
        changeY=point.pageX-$(this).attr('strY');
        $(this).attr({
            changeX:changeX,
            changeY:changeY
        })

    }
    function end(e){
        var changeX=parseFloat($(this).attr('changeX')),
            changeY=parseFloat($(this).attr('changeY'));
        var rotateX=parseFloat($(this).attr('rotateX')),
            rotateY=parseFloat($(this).attr('rotateY'));
        if(Math.abs(changeX)>10){
            //X��ƫ��ֵ�ǿ��ƺ�������Y����ת
            rotateY=rotateY+changeX/2
        }
        if(Math.abs(changeY)>10){
            //X��ƫ��ֵ�ǿ��ƺ�������Y����ת
            rotateX=rotateX-changeY/2
        }
        $(this).css('transform','scale(0.6) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
      /*  $(this).css('-webkit-transform','scale(0.6) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');*/
   /*     $box.attr({
            rotateX:rotateX,
            rotateY:rotateY
        });*/
    }
    return {
        init:function(){
            $box.on('touchstart',start).on('touchmove',move).on('touchend',end);
            $imgList.tap(function(){

            })
        }
    }
}());
cubeRender.init();
