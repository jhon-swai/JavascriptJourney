 $(document).ready(function(){
    'use strict';
    // paper.install(window);
    // paper.setup(document.getElementById("mainCanvas"));
    // something
    // let inputTool = new Tool;
    // new Shape.Cirle(200,200,50);
    // inputTool.onMouseDown = function(event){
    //     var c = Shape.Cirle(event.point.x,event.point.y,20);
    //     c.fillColor = "green";
    //     let text = new PointText(event.point);
    //     text.justification = "center";
    //     text.fillColor = "white";
    //     text.fontSize = 20;
    //     text.content = "Hello user";
    // }
    // paper.view.draw();
    // console.log("echo");

    // creating a paper.js path
    // let canvas = document.getElementById("mainCanvas");
    // paper.setup(canvas);
      let path = new Path();
      // giving the stroke a fillColor
      path.strokeColor = 'black';
      let start = new Point(100,100);
      path.moveTo(start);
      path.lineTo(start + [100, -50]);

 });
