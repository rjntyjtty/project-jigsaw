function playground(createScene) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
        <title>Babylon - Getting Started</title>
        <!--- Link to the last version of BabylonJS --->
        <script src="https://cdn.babylonjs.com/babylon.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <style>
            html, body {
                overflow: hidden;
                width   : 100%;
                height  : 100%;
                margin  : 0;
                padding : 0;
                position: relative;
            }

            #showDebug {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                border-color: #3f51b5;
                background-color: #3f51b5;
                margin: 1px;
            }

            #renderCanvas {
                width   : 100%;
                height  : 100%;
                touch-action: none;
            }

        </style>
    </head>
    <body>
        <button class="btn btn-primary" id="showDebug">Show debug panel</button>
        <canvas id="renderCanvas"></canvas>
        <script>
            "use strict";

            window.addEventListener('DOMContentLoaded', function(){
                // get the canvas DOM element
                var canvas = document.getElementById('renderCanvas');

                // load the 3D engine
                var engine = new BABYLON.Engine(canvas, true);

                // createScene function that creates and return the scene
                ${createScene}

                // call the createScene function
                var scene = createScene();

                scene.debugLayer.show({
                    embedMode:true
                });

                document.querySelector('#showDebug').addEventListener('click', function() {
                    scene.debugLayer.show({
                        embedMode:true
                    });
                });

                // run the render loop
                engine.runRenderLoop(function(){
                    scene.render();
                });

                // the canvas/window resize event handler
                window.addEventListener('resize', function(){
                    engine.resize();
                });

                // Initialize GizmoManager
                var gizmoManager = new BABYLON.GizmoManager(scene)

                // Initialize gizmo
                gizmoManager.positionGizmoEnabled = true;

                // Modify gizmos based on keypress
                document.onkeydown = (e)=>{
                    if(e.key == 'w' || e.key == 'e'|| e.key == 'r'|| e.key == 'q'){
                        // Switch gizmo type
                        gizmoManager.positionGizmoEnabled = false;
                        gizmoManager.rotationGizmoEnabled = false;
                        gizmoManager.scaleGizmoEnabled = false;
                        gizmoManager.boundingBoxGizmoEnabled = false;
                        if(e.key == 'w'){
                            gizmoManager.positionGizmoEnabled = true;
                        }
                        if(e.key == 'e'){
                            gizmoManager.rotationGizmoEnabled = true;
                        }
                        if(e.key == 'r'){
                            gizmoManager.scaleGizmoEnabled = true;
                        }
                        if(e.key == 'q'){
                            gizmoManager.boundingBoxGizmoEnabled = true;
                        }
                    }
                    if(e.key == 'y'){
                        // hide the gizmo
                        gizmoManager.attachToMesh(null);
                    }
                    if(e.key == 't'){
                      // Toggle local/global gizmo rotation positioning
                      scene.debugLayer.show({
                        embedMode:true
                      });
                    }
                    if(e.key == 's'){
                        // Toggle distance snapping
                        if(gizmoManager.gizmos.scaleGizmo.snapDistance == 0){
                            gizmoManager.gizmos.scaleGizmo.snapDistance = 0.3;
                            gizmoManager.gizmos.rotationGizmo.snapDistance = 0.3;
                            gizmoManager.gizmos.positionGizmo.snapDistance = 0.3;
                        }else{
                            gizmoManager.gizmos.scaleGizmo.snapDistance = 0;
                            gizmoManager.gizmos.rotationGizmo.snapDistance = 0;
                            gizmoManager.gizmos.positionGizmo.snapDistance = 0;
                        }
                    }
                    if(e.key == 'd'){
                        // Toggle gizmo size
                        if(gizmoManager.gizmos.scaleGizmo.scaleRatio == 1){
                            gizmoManager.gizmos.scaleGizmo.scaleRatio = 1.5;
                            gizmoManager.gizmos.rotationGizmo.scaleRatio = 1.5;
                            gizmoManager.gizmos.positionGizmo.scaleRatio = 1.5;
                        }else{
                            gizmoManager.gizmos.scaleGizmo.scaleRatio = 1;
                            gizmoManager.gizmos.rotationGizmo.scaleRatio = 1;
                            gizmoManager.gizmos.positionGizmo.scaleRatio = 1;
                        }
                    }
                }
            });

        </script>
    </body>
    </html>`
}

export default playground;
