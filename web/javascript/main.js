// $(document).ready(function(){
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById(mainCanvas));
    // something
    let inputTool = new Tool;
    inputTool.onMouseDown = function(event){
        var c = Shape.Cirle(event.point.x,event.point.y,20);
        c.fillColor = "green";
    }

   

    paper.view.draw();
    console.log("echo");
// });