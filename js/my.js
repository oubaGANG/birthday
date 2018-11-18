$(function () {
 
/*    文字滚动*/
      function wzgd() {
          var width=$(window).width();//屏幕的宽度
          var divwidth=$('#gd').width();
          var gdwidth=width-divwidth;//滚动的距离
          var current=0;//现在的位置
          var step=1;
          var fh=gdwidth;//返回时的值
          function gd() {
              if(current>=gdwidth){

                  fh-=step
                  $('#gd').css('left',fh);
                  if(fh<=0){

                      current=0;
                  }
              }else{
                  fh=gdwidth;
                  current+=step
                  $('#gd').css('left',current);
              }

          }
          setInterval(gd,10);
      }
            wzgd()
        //设置文字闪烁效果
        function ys(n) {
            var color=new Array(7);
            color[0]="red";
            color[1]="yellow";
            color[2]="blue";
            color[3]="green";
            color[4]="purple";
            color[5]="orange";
            color[6]="#A9FACD";
            return color[n];
        }

        setInterval(function () {
            var obj1=$('#w1');
            var sz=Math.floor(Math.random()*7)
            obj1.css('color',ys(sz))
            var obj2=$('#w2');
            var sz=Math.floor(Math.random()*7)
            obj2.css('color',ys(sz))
            var obj3=$('#w3');
            var sz=Math.floor(Math.random()*7)
            obj3.css('color',ys(sz))
            var obj4=$('#w4');
            var sz=Math.floor(Math.random()*7)
            obj4.css('color',ys(sz))
            var bor=$('#gd');
            bor.css('border-color',ys(sz));
        },200)

        //设置圆效果
       function route() {
           var r=150;//大圆圆心到小圆圆心的距离
           var x=y=0;
           var obj1=$('#x1');
           pd(obj1,1);
           var obj2=$('#x2');
           pd(obj2,90);
           var obj3=$('#x3');
           pd(obj3,180);
           var obj4=$('#x4');
           pd(obj4,270);
           function pd(obj,i) {
               setInterval(f, 50)
               f()
               function f() {
                   x = r * Math.cos((i * Math.PI) / 180) + 190;
                   y = r * Math.sin((i * Math.PI) / 180) + 190;
                   $(obj).css({
                       top: y,
                       left: x
                   })
                   i = i + 1;
                   if (i > 360) {
                       i = 0;
                   }
               }

           }
       }
        route()
    


//事件
    function showTime() {
        var staYear=1994//开始的年份
        var staMon=11//开始的月份
        var staDay=2//开始的天
        var theOlds=0//年龄从0开始
        var endYear=2016//结束的年份
        var endMon=11//结束的月份
        var endDay=2//结束的日子
        var overYear=false//年份结束标志
        var overMon=false//月份结束标志
        var timer1,timer2,timer3

        var textMon,textDay//用于日月小于10，前面添0
   /*  初始化页面值*/
        if(staDay<10){
            textDay='0'+staDay
        }else{
            textDay=staDay
        }
        $('.day').text(textDay)
        if(staMon<10){
            textMon='0'+staMon
        }else{
            textMon=staMon
        }
        $('.month').text(textMon)
        $('.year').text(staYear)
        $('.olds').text(theOlds)
        //开始增加天
        function addDay() {
            staDay+=1

            if(staDay>31){
                staDay=1
                if(!overMon) {
                    addMon()
                }
            }
            textDay=staDay
            if(staDay<10){
                textDay='0'+staDay
            }
            $('.day').text(textDay)
            if(overMon&&(staDay==endDay)){
                clearInterval(timer3)
                setTimeout(function () {
                    $('#time').addClass('animate1')
                },2500)
                setTimeout(function () {
                    $('.olds').addClass('animate3')
                },5000)
            }
            if((staMon==endMon)&&(staDay==endDay)){
                theOlds+=1
                $('.olds').text(theOlds)
                $('.olds').addClass('animate2')
                setTimeout(function () {
                    $('.olds').removeClass('animate2')
                },2000)
            }
        }

        // 开始增加月份
        function addMon() {

            staMon+=1

            if(staMon>12){
                staMon=1

                if(!overYear){
                    addYear()
                }
            }
            if(overYear&&(staMon==endMon)){

                overMon=true;
                clearInterval(timer2)
                timer3=setInterval(addDay,500)
            }
            textMon=staMon
            if(staMon<10){
                textMon='0'+staMon
            }
            $('.month').text(textMon)
        }
        //开始增加年份
        function addYear() {

            staYear+=1

            if(staYear==endYear){
                overYear=true
                clearInterval(timer1)
                timer2=setInterval(addDay,20)
            }

            $('.year').text(staYear)

        }
        timer1=setInterval(addDay,10)
    }
   setTimeout(function () {
       showTime()
   },2000)

    //圆圈可移动
    $('#xz').draggable()
    //猪鼠标放上去可移动
    $('#tp').draggable()
})
