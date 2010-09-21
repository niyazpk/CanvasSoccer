var camera, scene, renderer;

$(document).ready(function(){
    init();
    setInterval( loop, 1000 / 60 );
});

function init() {
    
    camera = new THREE.Camera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;
    
    scene = new THREE.Scene();
    
    for (var i = 0; i < 100; i++) {
	
        var particle = new THREE.Particle( new THREE.ParticleCircleMaterial( Math.random() * 0x808008 + 0x808080, 1 ) );
        particle.position.x = Math.random() * 2000 - 1000;
        particle.position.y = Math.random() * 2000 - 1000;
        particle.position.z = Math.random() * 2000 - 1000;
        particle.scale.x = particle.scale.y = Math.random() * 10 + 5;
        scene.addObject( particle );
	
    }
    
    renderer = new THREE.CanvasRenderer();
    renderer.setSize( 400, 250 );
    
    document.body.appendChild( renderer.domElement );
    
}

function loop() {
    
    renderer.render( scene, camera );

}

