
var imgObj = null;
        var animate ;

        function init() {
           imgObj = document.getElementById('heading1');
           imgObj.style.position= 'absolute';
           imgObj.style.left = '0px';
           imgObj.style.opacity="0";
           if(screen.width<800){
             moveRightsmall();
           }
           else{
             moveRight();
           }

        }
        



        function counterto(element,percent){
          console.log("hi");
          var c=0;
          var i=setInterval(function(){
            element.innerHTML= c+'%';

            c++;
            if(c==(parseInt(percent)+1)){
              clearInterval(i);
            }
          },50);
        }
        function stop(animate) {
           clearTimeout(animate);

        }
        function moveRight() {
          var hello=imgObj.style.left;
          hello=hello.substr(0,hello.length-2);
          
          if(parseInt(hello)==200){
return stop(animate);
          }
           imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
          imgObj.style.opacity=(parseFloat(imgObj.style.opacity)+0.049).toString();
           animate = setTimeout(moveRight,30);    // call moveRight in 20msec
        }
        function moveRightsmall(){
          var hello=imgObj.style.left;
          hello=hello.substr(0,hello.length-2);
          
          if(parseInt(hello)==50){
        return stop(animate);
          }
           imgObj.style.left = parseInt(imgObj.style.left) + 5 + 'px';
          imgObj.style.opacity=(parseFloat(imgObj.style.opacity)+0.078).toString();
           animate = setTimeout(moveRightsmall,30);

        }


        window.onload = init;
 
 