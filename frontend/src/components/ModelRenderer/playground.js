function playground(createScene, debug) {
    let debugCode = ``;
    if (debug) {
        debugCode = `
        scene.debugLayer.show({
            embedMode:true
        });`
    }
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

                ${debugCode}

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
