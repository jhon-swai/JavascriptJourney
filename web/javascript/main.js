// $(document).ready(function(){
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById(mainCanvas));
    // something
    var c = Shape.Cirle(200,200,50);
    c.fillColor = "green";

    paper.view.draw();
    console.log("echo");
// });