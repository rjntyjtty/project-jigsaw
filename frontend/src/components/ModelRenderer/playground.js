function playground(createScene) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
        <title>Babylon - Getting Started</title>
        <!--- Link to the last version of BabylonJS --->
        <script src="https://cdn.babylonjs.com/babylon.js"></script>
        <style>
            html, body {
                overflow: hidden;
                width   : 100%;
                height  : 100%;
                margin  : 0;
                padding : 0;
            }
    
            #renderCanvas {
                width   : 100%;
                height  : 100%;
                touch-action: none;
            }
        </style>
    </head>
    <body>
        <canvas id="renderCanvas"></canvas>
        <script>
            window.addEventListener('DOMContentLoaded', function(){
                // get the canvas DOM element
                var canvas = document.getElementById('renderCanvas');
    
                // load the 3D engine
                var engine = new BABYLON.Engine(canvas, true);
    
                // createScene function that creates and return the scene
                ${createScene}
    
                // call the createScene function
                var scene = createScene();
    
                // run the render loop
                engine.runRenderLoop(function(){
                    scene.render();
                });
    
                // the canvas/window resize event handler
                window.addEventListener('resize', function(){
                    engine.resize();
                });
            });
        </script>
    </body>
    </html>`
}

export default playground;