var camera, renderer, scene;
var meshArray = [];
// add your global variables here:
   var secondsDial, minutesDial, hoursDial/*,
	   handsArray = []*/;

//Set dial radius for caluclations later
	var dialRadius = 1/30;

window.onload = function () {

  secondsDial = new THREE.Object3D();
  minutesDial = new THREE.Object3D();
  hoursDial   = new THREE.Object3D();
  
  LEIA.physicalScreen.InitFromExternalJson('https://s3.amazonaws.com/leiacore/config.json',function(){
    Init();
    animate();
  });
};

function Init() {
  LEIA.virtualScreen.Init();
  
  //LEIA.virtualScreen.loadDefault();
 /* LEIA.virtualScreen.width = 40;
  LEIA.virtualScreen.center.copy({x:0.00,y:0.00,z:0.00});
  LEIA.virtualScreen.normal.copy({x:0.00,y:0.00,z:1.00});
  LEIA.virtualScreen.b = 1.0;
  LEIA.virtualScreen.d = 500;
  LEIA.virtualScreen.disp = 5;*/
 // LEIA.virtualScreen.h = 1/10.0; //1/10.0;
  //LEIA.physicalScreen.resolution = new THREE.Vector2(200,150);
  scene = new THREE.Scene();

  //setup camera
  camera = new LeiaCamera({
    dCtoZDP: LEIA.virtualScreen.d,
    zdpNormal: LEIA.virtualScreen.normal,
    targetPosition: LEIA.virtualScreen.center
  });
  scene.add(camera);

  //setup rendering parameter
  renderer = new LeiaWebGLRenderer({
    antialias: true,
    devicePixelRatio: 1,
    renderMode: _renderMode,
    colorMode: _colorMode,
    superSampleSharpen:false,
    messageFlag: _targetEnvironment
  });
  renderer.shadowMapEnabled = true;
  renderer.shadowMapType = THREE.BasicShadowMap;
  Leia_addRender(renderer, {
    bFPSVisible: true
  });

  //add object to Scene
  addObjectsToScene();

  //add Light
  addLights();

  //add Gyro Monitor
  //addGyroMonitor();
}

function animate() {
  requestAnimationFrame(animate);

 
  renderer.Leia_render({
    scene: scene,
    camera: camera
  });
  
  //get time position
	getDialRotation();
}

function addObjectsToScene() {
  //Add your objects here
  var map00 = THREE.ImageUtils.loadTexture( "../resource/00.png" ),
		map01 = THREE.ImageUtils.loadTexture( "../resource/01.png" ),
		map02 = THREE.ImageUtils.loadTexture( "../resource/02.png" ),
		map03 = THREE.ImageUtils.loadTexture( "../resource/03.png" ),
		map04 = THREE.ImageUtils.loadTexture( "../resource/04.png" ),
		map05 = THREE.ImageUtils.loadTexture( "../resource/05.png" ),
		map06 = THREE.ImageUtils.loadTexture( "../resource/06.png" ),
		map07 = THREE.ImageUtils.loadTexture( "../resource/07.png" ),
		map08 = THREE.ImageUtils.loadTexture( "../resource/08.png" ),
		map09 = THREE.ImageUtils.loadTexture( "../resource/09.png" ),
		map10 = THREE.ImageUtils.loadTexture( "../resource/10.png" ),
		map11 = THREE.ImageUtils.loadTexture( "../resource/11.png" ),
		map12 = THREE.ImageUtils.loadTexture( "../resource/12.png" ),
		map13 = THREE.ImageUtils.loadTexture( "../resource/13.png" ),
		map14 = THREE.ImageUtils.loadTexture( "../resource/14.png" ),
		map15 = THREE.ImageUtils.loadTexture( "../resource/15.png" ),
		map16 = THREE.ImageUtils.loadTexture( "../resource/16.png" ),
		map17 = THREE.ImageUtils.loadTexture( "../resource/17.png" ),
		map18 = THREE.ImageUtils.loadTexture( "../resource/18.png" ),
		map19 = THREE.ImageUtils.loadTexture( "../resource/19.png" ),
		map20 = THREE.ImageUtils.loadTexture( "../resource/20.png" ),
		map21 = THREE.ImageUtils.loadTexture( "../resource/21.png" ),
		map22 = THREE.ImageUtils.loadTexture( "../resource/22.png" ),
		map23 = THREE.ImageUtils.loadTexture( "../resource/23.png" ),
		map24 = THREE.ImageUtils.loadTexture( "../resource/24.png" ),
		map25 = THREE.ImageUtils.loadTexture( "../resource/25.png" ),
		map26 = THREE.ImageUtils.loadTexture( "../resource/26.png" ),
		map27 = THREE.ImageUtils.loadTexture( "../resource/27.png" ),
		map28 = THREE.ImageUtils.loadTexture( "../resource/28.png" ),
		map29 = THREE.ImageUtils.loadTexture( "../resource/29.png" ),
		map30 = THREE.ImageUtils.loadTexture( "../resource/30.png" ),
		map31 = THREE.ImageUtils.loadTexture( "../resource/31.png" ),
		map32 = THREE.ImageUtils.loadTexture( "../resource/32.png" ),
		map33 = THREE.ImageUtils.loadTexture( "../resource/33.png" ),
		map34 = THREE.ImageUtils.loadTexture( "../resource/34.png" ),
		map35 = THREE.ImageUtils.loadTexture( "../resource/35.png" ),
		map36 = THREE.ImageUtils.loadTexture( "../resource/36.png" ),
		map37 = THREE.ImageUtils.loadTexture( "../resource/37.png" ),
		map38 = THREE.ImageUtils.loadTexture( "../resource/38.png" ),
		map39 = THREE.ImageUtils.loadTexture( "../resource/39.png" ),
		map40 = THREE.ImageUtils.loadTexture( "../resource/40.png" ),
		map41 = THREE.ImageUtils.loadTexture( "../resource/41.png" ),
		map42 = THREE.ImageUtils.loadTexture( "../resource/42.png" ),
		map43 = THREE.ImageUtils.loadTexture( "../resource/43.png" ),
		map44 = THREE.ImageUtils.loadTexture( "../resource/44.png" ),
		map45 = THREE.ImageUtils.loadTexture( "../resource/45.png" ),
		map46 = THREE.ImageUtils.loadTexture( "../resource/46.png" ),
		map47 = THREE.ImageUtils.loadTexture( "../resource/47.png" ),
		map48 = THREE.ImageUtils.loadTexture( "../resource/48.png" ),
		map49 = THREE.ImageUtils.loadTexture( "../resource/49.png" ),
		map50 = THREE.ImageUtils.loadTexture( "../resource/50.png" ),
		map51 = THREE.ImageUtils.loadTexture( "../resource/51.png" ),
		map52 = THREE.ImageUtils.loadTexture( "../resource/52.png" ),
		map53 = THREE.ImageUtils.loadTexture( "../resource/53.png" ),
		map54 = THREE.ImageUtils.loadTexture( "../resource/54.png" ),
		map55 = THREE.ImageUtils.loadTexture( "../resource/55.png" ),
		map56 = THREE.ImageUtils.loadTexture( "../resource/56.png" ),
		map57 = THREE.ImageUtils.loadTexture( "../resource/57.png" ),
		map58 = THREE.ImageUtils.loadTexture( "../resource/58.png" ),
		map59 = THREE.ImageUtils.loadTexture( "../resource/59.png" ),
		map60 = THREE.ImageUtils.loadTexture( "../resource/60.png" );


	//Create Sprite Material
		//Seconds
		var materialSeconds00 = new THREE.SpriteMaterial( { map: map00, color: '#FFA500', fog: true } ),
			materialSeconds01 = new THREE.SpriteMaterial( { map: map01, color: '#FFA500', fog: true } ),
			materialSeconds02 = new THREE.SpriteMaterial( { map: map02, color: '#FFA500', fog: true } ),
			materialSeconds03 = new THREE.SpriteMaterial( { map: map03, color: '#FFA500', fog: true } ),
			materialSeconds04 = new THREE.SpriteMaterial( { map: map04, color: '#FFA500', fog: true } ),
			materialSeconds05 = new THREE.SpriteMaterial( { map: map05, color: '#FFA500', fog: true } ),
			materialSeconds06 = new THREE.SpriteMaterial( { map: map06, color: '#FFA500', fog: true } ),
			materialSeconds07 = new THREE.SpriteMaterial( { map: map07, color: '#FFA500', fog: true } ),
			materialSeconds08 = new THREE.SpriteMaterial( { map: map08, color: '#FFA500', fog: true } ),
			materialSeconds09 = new THREE.SpriteMaterial( { map: map09, color: '#FFA500', fog: true } ),
			materialSeconds10 = new THREE.SpriteMaterial( { map: map10, color: '#FFA500', fog: true } ),
			materialSeconds11 = new THREE.SpriteMaterial( { map: map11, color: '#FFA500', fog: true } ),
			materialSeconds12 = new THREE.SpriteMaterial( { map: map12, color: '#FFA500', fog: true } ),
			materialSeconds13 = new THREE.SpriteMaterial( { map: map13, color: '#FFA500', fog: true } ),
			materialSeconds14 = new THREE.SpriteMaterial( { map: map14, color: '#FFA500', fog: true } ),
			materialSeconds15 = new THREE.SpriteMaterial( { map: map15, color: '#FFA500', fog: true } ),
			materialSeconds16 = new THREE.SpriteMaterial( { map: map16, color: '#FFA500', fog: true } ),
			materialSeconds17 = new THREE.SpriteMaterial( { map: map17, color: '#FFA500', fog: true } ),
			materialSeconds18 = new THREE.SpriteMaterial( { map: map18, color: '#FFA500', fog: true } ),
			materialSeconds19 = new THREE.SpriteMaterial( { map: map19, color: '#FFA500', fog: true } ),
			materialSeconds20 = new THREE.SpriteMaterial( { map: map20, color: '#FFA500', fog: true } ),
			materialSeconds21 = new THREE.SpriteMaterial( { map: map21, color: '#FFA500', fog: true } ),
			materialSeconds22 = new THREE.SpriteMaterial( { map: map22, color: '#FFA500', fog: true } ),
			materialSeconds23 = new THREE.SpriteMaterial( { map: map23, color: '#FFA500', fog: true } ),
			materialSeconds24 = new THREE.SpriteMaterial( { map: map24, color: '#FFA500', fog: true } ),
			materialSeconds25 = new THREE.SpriteMaterial( { map: map25, color: '#FFA500', fog: true } ),
			materialSeconds26 = new THREE.SpriteMaterial( { map: map26, color: '#FFA500', fog: true } ),
			materialSeconds27 = new THREE.SpriteMaterial( { map: map27, color: '#FFA500', fog: true } ),
			materialSeconds28 = new THREE.SpriteMaterial( { map: map28, color: '#FFA500', fog: true } ),
			materialSeconds29 = new THREE.SpriteMaterial( { map: map29, color: '#FFA500', fog: true } ),
			materialSeconds30 = new THREE.SpriteMaterial( { map: map30, color: '#FFA500', fog: true } ),
			materialSeconds31 = new THREE.SpriteMaterial( { map: map31, color: '#FFA500', fog: true } ),
			materialSeconds32 = new THREE.SpriteMaterial( { map: map32, color: '#FFA500', fog: true } ),
			materialSeconds33 = new THREE.SpriteMaterial( { map: map33, color: '#FFA500', fog: true } ),
			materialSeconds34 = new THREE.SpriteMaterial( { map: map34, color: '#FFA500', fog: true } ),
			materialSeconds35 = new THREE.SpriteMaterial( { map: map35, color: '#FFA500', fog: true } ),
			materialSeconds36 = new THREE.SpriteMaterial( { map: map36, color: '#FFA500', fog: true } ),
			materialSeconds37 = new THREE.SpriteMaterial( { map: map37, color: '#FFA500', fog: true } ),
			materialSeconds38 = new THREE.SpriteMaterial( { map: map38, color: '#FFA500', fog: true } ),
			materialSeconds39 = new THREE.SpriteMaterial( { map: map39, color: '#FFA500', fog: true } ),
			materialSeconds40 = new THREE.SpriteMaterial( { map: map40, color: '#FFA500', fog: true } ),
			materialSeconds41 = new THREE.SpriteMaterial( { map: map41, color: '#FFA500', fog: true } ),
			materialSeconds42 = new THREE.SpriteMaterial( { map: map42, color: '#FFA500', fog: true } ),
			materialSeconds43 = new THREE.SpriteMaterial( { map: map43, color: '#FFA500', fog: true } ),
			materialSeconds44 = new THREE.SpriteMaterial( { map: map44, color: '#FFA500', fog: true } ),
			materialSeconds45 = new THREE.SpriteMaterial( { map: map45, color: '#FFA500', fog: true } ),
			materialSeconds46 = new THREE.SpriteMaterial( { map: map46, color: '#FFA500', fog: true } ),
			materialSeconds47 = new THREE.SpriteMaterial( { map: map47, color: '#FFA500', fog: true } ),
			materialSeconds48 = new THREE.SpriteMaterial( { map: map48, color: '#FFA500', fog: true } ),
			materialSeconds49 = new THREE.SpriteMaterial( { map: map49, color: '#FFA500', fog: true } ),
			materialSeconds50 = new THREE.SpriteMaterial( { map: map50, color: '#FFA500', fog: true } ),
			materialSeconds51 = new THREE.SpriteMaterial( { map: map51, color: '#FFA500', fog: true } ),
			materialSeconds52 = new THREE.SpriteMaterial( { map: map52, color: '#FFA500', fog: true } ),
			materialSeconds53 = new THREE.SpriteMaterial( { map: map53, color: '#FFA500', fog: true } ),
			materialSeconds54 = new THREE.SpriteMaterial( { map: map54, color: '#FFA500', fog: true } ),
			materialSeconds55 = new THREE.SpriteMaterial( { map: map55, color: '#FFA500', fog: true } ),
			materialSeconds56 = new THREE.SpriteMaterial( { map: map56, color: '#FFA500', fog: true } ),
			materialSeconds57 = new THREE.SpriteMaterial( { map: map57, color: '#FFA500', fog: true } ),
			materialSeconds58 = new THREE.SpriteMaterial( { map: map58, color: '#FFA500', fog: true } ),
			materialSeconds59 = new THREE.SpriteMaterial( { map: map59, color: '#FFA500', fog: true } );


		//Minutes
		var materialMinutes00 = new THREE.SpriteMaterial( { map: map00, color: '#FFA500', fog: true } ),
			materialMinutes01 = new THREE.SpriteMaterial( { map: map01, color: '#FFA500', fog: true } ),
			materialMinutes02 = new THREE.SpriteMaterial( { map: map02, color: '#FFA500', fog: true } ),
			materialMinutes03 = new THREE.SpriteMaterial( { map: map03, color: '#FFA500', fog: true } ),
			materialMinutes04 = new THREE.SpriteMaterial( { map: map04, color: '#FFA500', fog: true } ),
			materialMinutes05 = new THREE.SpriteMaterial( { map: map05, color: '#FFA500', fog: true } ),
			materialMinutes06 = new THREE.SpriteMaterial( { map: map06, color: '#FFA500', fog: true } ),
			materialMinutes07 = new THREE.SpriteMaterial( { map: map07, color: '#FFA500', fog: true } ),
			materialMinutes08 = new THREE.SpriteMaterial( { map: map08, color: '#FFA500', fog: true } ),
			materialMinutes09 = new THREE.SpriteMaterial( { map: map09, color: '#FFA500', fog: true } ),
			materialMinutes10 = new THREE.SpriteMaterial( { map: map10, color: '#FFA500', fog: true } ),
			materialMinutes11 = new THREE.SpriteMaterial( { map: map11, color: '#FFA500', fog: true } ),
			materialMinutes12 = new THREE.SpriteMaterial( { map: map12, color: '#FFA500', fog: true } ),
			materialMinutes13 = new THREE.SpriteMaterial( { map: map13, color: '#FFA500', fog: true } ),
			materialMinutes14 = new THREE.SpriteMaterial( { map: map14, color: '#FFA500', fog: true } ),
			materialMinutes15 = new THREE.SpriteMaterial( { map: map15, color: '#FFA500', fog: true } ),
			materialMinutes16 = new THREE.SpriteMaterial( { map: map16, color: '#FFA500', fog: true } ),
			materialMinutes17 = new THREE.SpriteMaterial( { map: map17, color: '#FFA500', fog: true } ),
			materialMinutes18 = new THREE.SpriteMaterial( { map: map18, color: '#FFA500', fog: true } ),
			materialMinutes19 = new THREE.SpriteMaterial( { map: map19, color: '#FFA500', fog: true } ),
			materialMinutes20 = new THREE.SpriteMaterial( { map: map20, color: '#FFA500', fog: true } ),
			materialMinutes21 = new THREE.SpriteMaterial( { map: map21, color: '#FFA500', fog: true } ),
			materialMinutes22 = new THREE.SpriteMaterial( { map: map22, color: '#FFA500', fog: true } ),
			materialMinutes23 = new THREE.SpriteMaterial( { map: map23, color: '#FFA500', fog: true } ),
			materialMinutes24 = new THREE.SpriteMaterial( { map: map24, color: '#FFA500', fog: true } ),
			materialMinutes25 = new THREE.SpriteMaterial( { map: map25, color: '#FFA500', fog: true } ),
			materialMinutes26 = new THREE.SpriteMaterial( { map: map26, color: '#FFA500', fog: true } ),
			materialMinutes27 = new THREE.SpriteMaterial( { map: map27, color: '#FFA500', fog: true } ),
			materialMinutes28 = new THREE.SpriteMaterial( { map: map28, color: '#FFA500', fog: true } ),
			materialMinutes29 = new THREE.SpriteMaterial( { map: map29, color: '#FFA500', fog: true } ),
			materialMinutes30 = new THREE.SpriteMaterial( { map: map30, color: '#FFA500', fog: true } ),
			materialMinutes31 = new THREE.SpriteMaterial( { map: map31, color: '#FFA500', fog: true } ),
			materialMinutes32 = new THREE.SpriteMaterial( { map: map32, color: '#FFA500', fog: true } ),
			materialMinutes33 = new THREE.SpriteMaterial( { map: map33, color: '#FFA500', fog: true } ),
			materialMinutes34 = new THREE.SpriteMaterial( { map: map34, color: '#FFA500', fog: true } ),
			materialMinutes35 = new THREE.SpriteMaterial( { map: map35, color: '#FFA500', fog: true } ),
			materialMinutes36 = new THREE.SpriteMaterial( { map: map36, color: '#FFA500', fog: true } ),
			materialMinutes37 = new THREE.SpriteMaterial( { map: map37, color: '#FFA500', fog: true } ),
			materialMinutes38 = new THREE.SpriteMaterial( { map: map38, color: '#FFA500', fog: true } ),
			materialMinutes39 = new THREE.SpriteMaterial( { map: map39, color: '#FFA500', fog: true } ),
			materialMinutes40 = new THREE.SpriteMaterial( { map: map40, color: '#FFA500', fog: true } ),
			materialMinutes41 = new THREE.SpriteMaterial( { map: map41, color: '#FFA500', fog: true } ),
			materialMinutes42 = new THREE.SpriteMaterial( { map: map42, color: '#FFA500', fog: true } ),
			materialMinutes43 = new THREE.SpriteMaterial( { map: map43, color: '#FFA500', fog: true } ),
			materialMinutes44 = new THREE.SpriteMaterial( { map: map44, color: '#FFA500', fog: true } ),
			materialMinutes45 = new THREE.SpriteMaterial( { map: map45, color: '#FFA500', fog: true } ),
			materialMinutes46 = new THREE.SpriteMaterial( { map: map46, color: '#FFA500', fog: true } ),
			materialMinutes47 = new THREE.SpriteMaterial( { map: map47, color: '#FFA500', fog: true } ),
			materialMinutes48 = new THREE.SpriteMaterial( { map: map48, color: '#FFA500', fog: true } ),
			materialMinutes49 = new THREE.SpriteMaterial( { map: map49, color: '#FFA500', fog: true } ),
			materialMinutes50 = new THREE.SpriteMaterial( { map: map50, color: '#FFA500', fog: true } ),
			materialMinutes51 = new THREE.SpriteMaterial( { map: map51, color: '#FFA500', fog: true } ),
			materialMinutes52 = new THREE.SpriteMaterial( { map: map52, color: '#FFA500', fog: true } ),
			materialMinutes53 = new THREE.SpriteMaterial( { map: map53, color: '#FFA500', fog: true } ),
			materialMinutes54 = new THREE.SpriteMaterial( { map: map54, color: '#FFA500', fog: true } ),
			materialMinutes55 = new THREE.SpriteMaterial( { map: map55, color: '#FFA500', fog: true } ),
			materialMinutes56 = new THREE.SpriteMaterial( { map: map56, color: '#FFA500', fog: true } ),
			materialMinutes57 = new THREE.SpriteMaterial( { map: map57, color: '#FFA500', fog: true } ),
			materialMinutes58 = new THREE.SpriteMaterial( { map: map58, color: '#FFA500', fog: true } ),
			materialMinutes59 = new THREE.SpriteMaterial( { map: map59, color: '#FFA500', fog: true } );

		//Hours
		var materialHours00 = new THREE.SpriteMaterial( { map: map00, color: '#FFA500', fog: true } ),
			materialHours01 = new THREE.SpriteMaterial( { map: map01, color: '#FFA500', fog: true } ),
			materialHours02 = new THREE.SpriteMaterial( { map: map02, color: '#FFA500', fog: true } ),
			materialHours03 = new THREE.SpriteMaterial( { map: map03, color: '#FFA500', fog: true } ),
			materialHours04 = new THREE.SpriteMaterial( { map: map04, color: '#FFA500', fog: true } ),
			materialHours05 = new THREE.SpriteMaterial( { map: map05, color: '#FFA500', fog: true } ),
			materialHours06 = new THREE.SpriteMaterial( { map: map06, color: '#FFA500', fog: true } ),
			materialHours07 = new THREE.SpriteMaterial( { map: map07, color: '#FFA500', fog: true } ),
			materialHours08 = new THREE.SpriteMaterial( { map: map08, color: '#FFA500', fog: true } ),
			materialHours09 = new THREE.SpriteMaterial( { map: map09, color: '#FFA500', fog: true } ),
			materialHours10 = new THREE.SpriteMaterial( { map: map10, color: '#FFA500', fog: true } ),
			materialHours11 = new THREE.SpriteMaterial( { map: map11, color: '#FFA500', fog: true } ),
			materialHours12 = new THREE.SpriteMaterial( { map: map12, color: '#FFA500', fog: true } ),
			materialHours13 = new THREE.SpriteMaterial( { map: map13, color: '#FFA500', fog: true } ),
			materialHours14 = new THREE.SpriteMaterial( { map: map14, color: '#FFA500', fog: true } ),
			materialHours15 = new THREE.SpriteMaterial( { map: map15, color: '#FFA500', fog: true } ),
			materialHours16 = new THREE.SpriteMaterial( { map: map16, color: '#FFA500', fog: true } ),
			materialHours17 = new THREE.SpriteMaterial( { map: map17, color: '#FFA500', fog: true } ),
			materialHours18 = new THREE.SpriteMaterial( { map: map18, color: '#FFA500', fog: true } ),
			materialHours19 = new THREE.SpriteMaterial( { map: map19, color: '#FFA500', fog: true } ),
			materialHours20 = new THREE.SpriteMaterial( { map: map20, color: '#FFA500', fog: true } ),
			materialHours21 = new THREE.SpriteMaterial( { map: map21, color: '#FFA500', fog: true } ),
			materialHours22 = new THREE.SpriteMaterial( { map: map22, color: '#FFA500', fog: true } ),
			materialHours23 = new THREE.SpriteMaterial( { map: map23, color: '#FFA500', fog: true } );


	//Create Actual Sprite and attach material
		//Seconds
		/*var secondsTotal = 60
		for (var i = 0; i < secondsTotal; i++){
			var numberLabel = (i<10)?'0'+i:i.toString();

			handsArray['spriteSeconds'+numberLabel] = new THREE.Sprite( handsArray['spriteSeconds'+numberLabel] );

			handsArray['spriteSeconds'+numberLabel].materialData = materialSeconds00
		}
		console.log(handsArray);*/

		var spriteSeconds00 = new THREE.Sprite( materialSeconds00 ),
			spriteSeconds01 = new THREE.Sprite( materialSeconds01 ),
			spriteSeconds02 = new THREE.Sprite( materialSeconds02 ),
			spriteSeconds03 = new THREE.Sprite( materialSeconds03 ),
			spriteSeconds04 = new THREE.Sprite( materialSeconds04 ),
			spriteSeconds05 = new THREE.Sprite( materialSeconds05 ),
			spriteSeconds06 = new THREE.Sprite( materialSeconds06 ),
			spriteSeconds07 = new THREE.Sprite( materialSeconds07 ),
			spriteSeconds08 = new THREE.Sprite( materialSeconds08 ),
			spriteSeconds09 = new THREE.Sprite( materialSeconds09 ),
			spriteSeconds10 = new THREE.Sprite( materialSeconds10 ),
			spriteSeconds11 = new THREE.Sprite( materialSeconds11 ),
			spriteSeconds12 = new THREE.Sprite( materialSeconds12 ),
			spriteSeconds13 = new THREE.Sprite( materialSeconds13 ),
			spriteSeconds14 = new THREE.Sprite( materialSeconds14 ),
			spriteSeconds15 = new THREE.Sprite( materialSeconds15 ),
			spriteSeconds16 = new THREE.Sprite( materialSeconds16 ),
			spriteSeconds17 = new THREE.Sprite( materialSeconds17 ),
			spriteSeconds18 = new THREE.Sprite( materialSeconds18 ),
			spriteSeconds19 = new THREE.Sprite( materialSeconds19 ),
			spriteSeconds20 = new THREE.Sprite( materialSeconds20 ),
			spriteSeconds21 = new THREE.Sprite( materialSeconds21 ),
			spriteSeconds22 = new THREE.Sprite( materialSeconds22 ),
			spriteSeconds23 = new THREE.Sprite( materialSeconds23 ),
			spriteSeconds24 = new THREE.Sprite( materialSeconds24 ),
			spriteSeconds25 = new THREE.Sprite( materialSeconds25 ),
			spriteSeconds26 = new THREE.Sprite( materialSeconds26 ),
			spriteSeconds27 = new THREE.Sprite( materialSeconds27 ),
			spriteSeconds28 = new THREE.Sprite( materialSeconds28 ),
			spriteSeconds29 = new THREE.Sprite( materialSeconds29 ),
			spriteSeconds30 = new THREE.Sprite( materialSeconds30 ),
			spriteSeconds31 = new THREE.Sprite( materialSeconds31 ),
			spriteSeconds32 = new THREE.Sprite( materialSeconds32 ),
			spriteSeconds33 = new THREE.Sprite( materialSeconds33 ),
			spriteSeconds34 = new THREE.Sprite( materialSeconds34 ),
			spriteSeconds35 = new THREE.Sprite( materialSeconds35 ),
			spriteSeconds36 = new THREE.Sprite( materialSeconds36 ),
			spriteSeconds37 = new THREE.Sprite( materialSeconds37 ),
			spriteSeconds38 = new THREE.Sprite( materialSeconds38 ),
			spriteSeconds39 = new THREE.Sprite( materialSeconds39 ),
			spriteSeconds40 = new THREE.Sprite( materialSeconds40 ),
			spriteSeconds41 = new THREE.Sprite( materialSeconds41 ),
			spriteSeconds42 = new THREE.Sprite( materialSeconds42 ),
			spriteSeconds43 = new THREE.Sprite( materialSeconds43 ),
			spriteSeconds44 = new THREE.Sprite( materialSeconds44 ),
			spriteSeconds45 = new THREE.Sprite( materialSeconds45 ),
			spriteSeconds46 = new THREE.Sprite( materialSeconds46 ),
			spriteSeconds47 = new THREE.Sprite( materialSeconds47 ),
			spriteSeconds48 = new THREE.Sprite( materialSeconds48 ),
			spriteSeconds49 = new THREE.Sprite( materialSeconds49 ),
			spriteSeconds50 = new THREE.Sprite( materialSeconds50 ),
			spriteSeconds51 = new THREE.Sprite( materialSeconds51 ),
			spriteSeconds52 = new THREE.Sprite( materialSeconds52 ),
			spriteSeconds53 = new THREE.Sprite( materialSeconds53 ),
			spriteSeconds54 = new THREE.Sprite( materialSeconds54 ),
			spriteSeconds55 = new THREE.Sprite( materialSeconds55 ),
			spriteSeconds56 = new THREE.Sprite( materialSeconds56 ),
			spriteSeconds57 = new THREE.Sprite( materialSeconds57 ),
			spriteSeconds58 = new THREE.Sprite( materialSeconds58 ),
			spriteSeconds59 = new THREE.Sprite( materialSeconds59 );

		//Minutes
		var spriteMinutes00 = new THREE.Sprite( materialMinutes00 ),
			spriteMinutes01 = new THREE.Sprite( materialMinutes01 ),
			spriteMinutes02 = new THREE.Sprite( materialMinutes02 ),
			spriteMinutes03 = new THREE.Sprite( materialMinutes03 ),
			spriteMinutes04 = new THREE.Sprite( materialMinutes04 ),
			spriteMinutes05 = new THREE.Sprite( materialMinutes05 ),
			spriteMinutes06 = new THREE.Sprite( materialMinutes06 ),
			spriteMinutes07 = new THREE.Sprite( materialMinutes07 ),
			spriteMinutes08 = new THREE.Sprite( materialMinutes08 ),
			spriteMinutes09 = new THREE.Sprite( materialMinutes09 ),
			spriteMinutes10 = new THREE.Sprite( materialMinutes10 ),
			spriteMinutes11 = new THREE.Sprite( materialMinutes11 ),
			spriteMinutes12 = new THREE.Sprite( materialMinutes12 ),
			spriteMinutes13 = new THREE.Sprite( materialMinutes13 ),
			spriteMinutes14 = new THREE.Sprite( materialMinutes14 ),
			spriteMinutes15 = new THREE.Sprite( materialMinutes15 ),
			spriteMinutes16 = new THREE.Sprite( materialMinutes16 ),
			spriteMinutes17 = new THREE.Sprite( materialMinutes17 ),
			spriteMinutes18 = new THREE.Sprite( materialMinutes18 ),
			spriteMinutes19 = new THREE.Sprite( materialMinutes19 ),
			spriteMinutes20 = new THREE.Sprite( materialMinutes20 ),
			spriteMinutes21 = new THREE.Sprite( materialMinutes21 ),
			spriteMinutes22 = new THREE.Sprite( materialMinutes22 ),
			spriteMinutes23 = new THREE.Sprite( materialMinutes23 ),
			spriteMinutes24 = new THREE.Sprite( materialMinutes24 ),
			spriteMinutes25 = new THREE.Sprite( materialMinutes25 ),
			spriteMinutes26 = new THREE.Sprite( materialMinutes26 ),
			spriteMinutes27 = new THREE.Sprite( materialMinutes27 ),
			spriteMinutes28 = new THREE.Sprite( materialMinutes28 ),
			spriteMinutes29 = new THREE.Sprite( materialMinutes29 ),
			spriteMinutes30 = new THREE.Sprite( materialMinutes30 ),
			spriteMinutes31 = new THREE.Sprite( materialMinutes31 ),
			spriteMinutes32 = new THREE.Sprite( materialMinutes32 ),
			spriteMinutes33 = new THREE.Sprite( materialMinutes33 ),
			spriteMinutes34 = new THREE.Sprite( materialMinutes34 ),
			spriteMinutes35 = new THREE.Sprite( materialMinutes35 ),
			spriteMinutes36 = new THREE.Sprite( materialMinutes36 ),
			spriteMinutes37 = new THREE.Sprite( materialMinutes37 ),
			spriteMinutes38 = new THREE.Sprite( materialMinutes38 ),
			spriteMinutes39 = new THREE.Sprite( materialMinutes39 ),
			spriteMinutes40 = new THREE.Sprite( materialMinutes40 ),
			spriteMinutes41 = new THREE.Sprite( materialMinutes41 ),
			spriteMinutes42 = new THREE.Sprite( materialMinutes42 ),
			spriteMinutes43 = new THREE.Sprite( materialMinutes43 ),
			spriteMinutes44 = new THREE.Sprite( materialMinutes44 ),
			spriteMinutes45 = new THREE.Sprite( materialMinutes45 ),
			spriteMinutes46 = new THREE.Sprite( materialMinutes46 ),
			spriteMinutes47 = new THREE.Sprite( materialMinutes47 ),
			spriteMinutes48 = new THREE.Sprite( materialMinutes48 ),
			spriteMinutes49 = new THREE.Sprite( materialMinutes49 ),
			spriteMinutes50 = new THREE.Sprite( materialMinutes50 ),
			spriteMinutes51 = new THREE.Sprite( materialMinutes51 ),
			spriteMinutes52 = new THREE.Sprite( materialMinutes52 ),
			spriteMinutes53 = new THREE.Sprite( materialMinutes53 ),
			spriteMinutes54 = new THREE.Sprite( materialMinutes54 ),
			spriteMinutes55 = new THREE.Sprite( materialMinutes55 ),
			spriteMinutes56 = new THREE.Sprite( materialMinutes56 ),
			spriteMinutes57 = new THREE.Sprite( materialMinutes57 ),
			spriteMinutes58 = new THREE.Sprite( materialMinutes58 ),
			spriteMinutes59 = new THREE.Sprite( materialMinutes59 );

		//Hours
		var spriteHours00 = new THREE.Sprite( materialHours00 ),
			spriteHours01 = new THREE.Sprite( materialHours01 ),
			spriteHours02 = new THREE.Sprite( materialHours02 ),
			spriteHours03 = new THREE.Sprite( materialHours03 ),
			spriteHours04 = new THREE.Sprite( materialHours04 ),
			spriteHours05 = new THREE.Sprite( materialHours05 ),
			spriteHours06 = new THREE.Sprite( materialHours06 ),
			spriteHours07 = new THREE.Sprite( materialHours07 ),
			spriteHours08 = new THREE.Sprite( materialHours08 ),
			spriteHours09 = new THREE.Sprite( materialHours09 ),
			spriteHours10 = new THREE.Sprite( materialHours10 ),
			spriteHours11 = new THREE.Sprite( materialHours11 ),
			spriteHours12 = new THREE.Sprite( materialHours12 ),
			spriteHours13 = new THREE.Sprite( materialHours13 ),
			spriteHours14 = new THREE.Sprite( materialHours14 ),
			spriteHours15 = new THREE.Sprite( materialHours15 ),
			spriteHours16 = new THREE.Sprite( materialHours16 ),
			spriteHours17 = new THREE.Sprite( materialHours17 ),
			spriteHours18 = new THREE.Sprite( materialHours18 ),
			spriteHours19 = new THREE.Sprite( materialHours19 ),
			spriteHours20 = new THREE.Sprite( materialHours20 ),
			spriteHours21 = new THREE.Sprite( materialHours21 ),
			spriteHours22 = new THREE.Sprite( materialHours22 ),
			spriteHours23 = new THREE.Sprite( materialHours23 );

	//Functions for building the dials
	//Provides you angles in degress, the function includes degree to radian conversion
		var calcZ = function(theta, dialRadius) {
			return (
				Math.cos(
							(theta * (Math.PI/180)
						)
							)/dialRadius);
		};
		var calcY = function(theta, dialRadius) {
			return (
				Math.sin(
							(theta * (Math.PI/180)
						)
							)/dialRadius);
		};



	//Add Sprites to dials
		//Seconds
		secondsDial.add(
				spriteSeconds00,
				spriteSeconds01,
				spriteSeconds02,
				spriteSeconds03,
				spriteSeconds04,
				spriteSeconds05,
				spriteSeconds06,
				spriteSeconds07,
				spriteSeconds08,
				spriteSeconds09,
				spriteSeconds10,
				spriteSeconds11,
				spriteSeconds12,
				spriteSeconds13,
				spriteSeconds14,
				spriteSeconds15,
				spriteSeconds16,
				spriteSeconds17,
				spriteSeconds18,
				spriteSeconds19,
				spriteSeconds20,
				spriteSeconds21,
				spriteSeconds22,
				spriteSeconds23,
				spriteSeconds24,
				spriteSeconds25,
				spriteSeconds26,
				spriteSeconds27,
				spriteSeconds28,
				spriteSeconds29,
				spriteSeconds30,
				spriteSeconds31,
				spriteSeconds32,
				spriteSeconds33,
				spriteSeconds34,
				spriteSeconds35,
				spriteSeconds36,
				spriteSeconds37,
				spriteSeconds38,
				spriteSeconds39,
				spriteSeconds40,
				spriteSeconds41,
				spriteSeconds42,
				spriteSeconds43,
				spriteSeconds44,
				spriteSeconds45,
				spriteSeconds46,
				spriteSeconds47,
				spriteSeconds48,
				spriteSeconds49,
				spriteSeconds50,
				spriteSeconds51,
				spriteSeconds52,
				spriteSeconds53,
				spriteSeconds54,
				spriteSeconds55,
				spriteSeconds56,
				spriteSeconds57,
				spriteSeconds58,
				spriteSeconds59
			);


			spriteSeconds00.position.y = calcY(90, dialRadius);
			spriteSeconds00.position.z = calcZ(90, dialRadius);

			spriteSeconds01.position.y = calcY(96, dialRadius);
			spriteSeconds01.position.z = calcZ(96, dialRadius);

			spriteSeconds02.position.y = calcY(102, dialRadius);
			spriteSeconds02.position.z = calcZ(102, dialRadius);

			spriteSeconds03.position.y = calcY(108, dialRadius);
			spriteSeconds03.position.z = calcZ(108, dialRadius);

			spriteSeconds04.position.y = calcY(114, dialRadius);
			spriteSeconds04.position.z = calcZ(114, dialRadius);

			spriteSeconds05.position.y = calcY(120, dialRadius);
			spriteSeconds05.position.z = calcZ(120, dialRadius);

			spriteSeconds06.position.y = calcY(126, dialRadius);
			spriteSeconds06.position.z = calcZ(126, dialRadius);

			spriteSeconds07.position.y = calcY(132, dialRadius);
			spriteSeconds07.position.z = calcZ(132, dialRadius);

			spriteSeconds08.position.y = calcY(138, dialRadius);
			spriteSeconds08.position.z = calcZ(138, dialRadius);

			spriteSeconds09.position.y = calcY(144, dialRadius);
			spriteSeconds09.position.z = calcZ(144, dialRadius);

			spriteSeconds10.position.y = calcY(150, dialRadius);
			spriteSeconds10.position.z = calcZ(150, dialRadius);

			spriteSeconds11.position.y = calcY(156, dialRadius);
			spriteSeconds11.position.z = calcZ(156, dialRadius);

			spriteSeconds12.position.y = calcY(162, dialRadius);
			spriteSeconds12.position.z = calcZ(162, dialRadius);

			spriteSeconds13.position.y = calcY(168, dialRadius);
			spriteSeconds13.position.z = calcZ(168, dialRadius);

			spriteSeconds14.position.y = calcY(174, dialRadius);
			spriteSeconds14.position.z = calcZ(174, dialRadius);

			spriteSeconds15.position.y = calcY(180, dialRadius);
			spriteSeconds15.position.z = calcZ(180, dialRadius);

			spriteSeconds16.position.y = calcY(186, dialRadius);
			spriteSeconds16.position.z = calcZ(186, dialRadius);

			spriteSeconds17.position.y = calcY(192, dialRadius);
			spriteSeconds17.position.z = calcZ(192, dialRadius);

			spriteSeconds18.position.y = calcY(198, dialRadius);
			spriteSeconds18.position.z = calcZ(198, dialRadius);

			spriteSeconds19.position.y = calcY(204, dialRadius);
			spriteSeconds19.position.z = calcZ(204, dialRadius);

			spriteSeconds20.position.y = calcY(210, dialRadius);
			spriteSeconds20.position.z = calcZ(210, dialRadius);

			spriteSeconds21.position.y = calcY(216, dialRadius);
			spriteSeconds21.position.z = calcZ(216, dialRadius);

			spriteSeconds22.position.y = calcY(222, dialRadius);
			spriteSeconds22.position.z = calcZ(222, dialRadius);

			spriteSeconds23.position.y = calcY(228, dialRadius);
			spriteSeconds23.position.z = calcZ(228, dialRadius);

			spriteSeconds24.position.y = calcY(234, dialRadius);
			spriteSeconds24.position.z = calcZ(234, dialRadius);

			spriteSeconds25.position.y = calcY(240, dialRadius);
			spriteSeconds25.position.z = calcZ(240, dialRadius);

			spriteSeconds26.position.y = calcY(246, dialRadius);
			spriteSeconds26.position.z = calcZ(246, dialRadius);

			spriteSeconds27.position.y = calcY(252, dialRadius);
			spriteSeconds27.position.z = calcZ(252, dialRadius);

			spriteSeconds28.position.y = calcY(258, dialRadius);
			spriteSeconds28.position.z = calcZ(258, dialRadius);

			spriteSeconds29.position.y = calcY(264, dialRadius);
			spriteSeconds29.position.z = calcZ(264, dialRadius);

			spriteSeconds30.position.y = calcY(270, dialRadius);
			spriteSeconds30.position.z = calcZ(270, dialRadius);

			spriteSeconds31.position.y = calcY(276, dialRadius);
			spriteSeconds31.position.z = calcZ(276, dialRadius);

			spriteSeconds32.position.y = calcY(282, dialRadius);
			spriteSeconds32.position.z = calcZ(282, dialRadius);

			spriteSeconds33.position.y = calcY(288, dialRadius);
			spriteSeconds33.position.z = calcZ(288, dialRadius);

			spriteSeconds34.position.y = calcY(294, dialRadius);
			spriteSeconds34.position.z = calcZ(294, dialRadius);

			spriteSeconds35.position.y = calcY(300, dialRadius);
			spriteSeconds35.position.z = calcZ(300, dialRadius);

			spriteSeconds36.position.y = calcY(306, dialRadius);
			spriteSeconds36.position.z = calcZ(306, dialRadius);

			spriteSeconds37.position.y = calcY(312, dialRadius);
			spriteSeconds37.position.z = calcZ(312, dialRadius);

			spriteSeconds38.position.y = calcY(318, dialRadius);
			spriteSeconds38.position.z = calcZ(318, dialRadius);

			spriteSeconds39.position.y = calcY(324, dialRadius);
			spriteSeconds39.position.z = calcZ(324, dialRadius);

			spriteSeconds40.position.y = calcY(330, dialRadius);
			spriteSeconds40.position.z = calcZ(330, dialRadius);

			spriteSeconds41.position.y = calcY(336, dialRadius);
			spriteSeconds41.position.z = calcZ(336, dialRadius);

			spriteSeconds42.position.y = calcY(342, dialRadius);
			spriteSeconds42.position.z = calcZ(342, dialRadius);

			spriteSeconds43.position.y = calcY(348, dialRadius);
			spriteSeconds43.position.z = calcZ(348, dialRadius);

			spriteSeconds44.position.y = calcY(354, dialRadius);
			spriteSeconds44.position.z = calcZ(354, dialRadius);

			spriteSeconds45.position.y = calcY(360, dialRadius);
			spriteSeconds45.position.z = calcZ(360, dialRadius);

			spriteSeconds46.position.y = calcY(6, dialRadius);
			spriteSeconds46.position.z = calcZ(6, dialRadius);

			spriteSeconds47.position.y = calcY(12, dialRadius);
			spriteSeconds47.position.z = calcZ(12, dialRadius);

			spriteSeconds48.position.y = calcY(18, dialRadius);
			spriteSeconds48.position.z = calcZ(18, dialRadius);

			spriteSeconds49.position.y = calcY(24, dialRadius);
			spriteSeconds49.position.z = calcZ(24, dialRadius);

			spriteSeconds50.position.y = calcY(30, dialRadius);
			spriteSeconds50.position.z = calcZ(30, dialRadius);

			spriteSeconds51.position.y = calcY(36, dialRadius);
			spriteSeconds51.position.z = calcZ(36, dialRadius);

			spriteSeconds52.position.y = calcY(42, dialRadius);
			spriteSeconds52.position.z = calcZ(42, dialRadius);

			spriteSeconds53.position.y = calcY(48, dialRadius);
			spriteSeconds53.position.z = calcZ(48, dialRadius);

			spriteSeconds54.position.y = calcY(54, dialRadius);
			spriteSeconds54.position.z = calcZ(54, dialRadius);

			spriteSeconds55.position.y = calcY(60, dialRadius);
			spriteSeconds55.position.z = calcZ(60, dialRadius);

			spriteSeconds56.position.y = calcY(66, dialRadius);
			spriteSeconds56.position.z = calcZ(66, dialRadius);

			spriteSeconds57.position.y = calcY(72, dialRadius);
			spriteSeconds57.position.z = calcZ(72, dialRadius);

			spriteSeconds58.position.y = calcY(78, dialRadius);
			spriteSeconds58.position.z = calcZ(78, dialRadius);

			spriteSeconds59.position.y = calcY(84, dialRadius);
			spriteSeconds59.position.z = calcZ(84, dialRadius);


		//Minutes
		minutesDial.add(
				spriteMinutes00,
				spriteMinutes01,
				spriteMinutes02,
				spriteMinutes03,
				spriteMinutes04,
				spriteMinutes05,
				spriteMinutes06,
				spriteMinutes07,
				spriteMinutes08,
				spriteMinutes09,
				spriteMinutes10,
				spriteMinutes11,
				spriteMinutes12,
				spriteMinutes13,
				spriteMinutes14,
				spriteMinutes15,
				spriteMinutes16,
				spriteMinutes17,
				spriteMinutes18,
				spriteMinutes19,
				spriteMinutes20,
				spriteMinutes21,
				spriteMinutes22,
				spriteMinutes23,
				spriteMinutes24,
				spriteMinutes25,
				spriteMinutes26,
				spriteMinutes27,
				spriteMinutes28,
				spriteMinutes29,
				spriteMinutes30,
				spriteMinutes31,
				spriteMinutes32,
				spriteMinutes33,
				spriteMinutes34,
				spriteMinutes35,
				spriteMinutes36,
				spriteMinutes37,
				spriteMinutes38,
				spriteMinutes39,
				spriteMinutes40,
				spriteMinutes41,
				spriteMinutes42,
				spriteMinutes43,
				spriteMinutes44,
				spriteMinutes45,
				spriteMinutes46,
				spriteMinutes47,
				spriteMinutes48,
				spriteMinutes49,
				spriteMinutes50,
				spriteMinutes51,
				spriteMinutes52,
				spriteMinutes53,
				spriteMinutes54,
				spriteMinutes55,
				spriteMinutes56,
				spriteMinutes57,
				spriteMinutes58,
				spriteMinutes59
			);
			
			spriteMinutes00.position.y = calcY(90, dialRadius);
			spriteMinutes00.position.z = calcZ(90, dialRadius);

			spriteMinutes01.position.y = calcY(96, dialRadius);
			spriteMinutes01.position.z = calcZ(96, dialRadius);

			spriteMinutes02.position.y = calcY(102, dialRadius);
			spriteMinutes02.position.z = calcZ(102, dialRadius);

			spriteMinutes03.position.y = calcY(108, dialRadius);
			spriteMinutes03.position.z = calcZ(108, dialRadius);

			spriteMinutes04.position.y = calcY(114, dialRadius);
			spriteMinutes04.position.z = calcZ(114, dialRadius);

			spriteMinutes05.position.y = calcY(120, dialRadius);
			spriteMinutes05.position.z = calcZ(120, dialRadius);

			spriteMinutes06.position.y = calcY(126, dialRadius);
			spriteMinutes06.position.z = calcZ(126, dialRadius);

			spriteMinutes07.position.y = calcY(132, dialRadius);
			spriteMinutes07.position.z = calcZ(132, dialRadius);

			spriteMinutes08.position.y = calcY(138, dialRadius);
			spriteMinutes08.position.z = calcZ(138, dialRadius);

			spriteMinutes09.position.y = calcY(144, dialRadius);
			spriteMinutes09.position.z = calcZ(144, dialRadius);

			spriteMinutes10.position.y = calcY(150, dialRadius);
			spriteMinutes10.position.z = calcZ(150, dialRadius);

			spriteMinutes11.position.y = calcY(156, dialRadius);
			spriteMinutes11.position.z = calcZ(156, dialRadius);

			spriteMinutes12.position.y = calcY(162, dialRadius);
			spriteMinutes12.position.z = calcZ(162, dialRadius);

			spriteMinutes13.position.y = calcY(168, dialRadius);
			spriteMinutes13.position.z = calcZ(168, dialRadius);

			spriteMinutes14.position.y = calcY(174, dialRadius);
			spriteMinutes14.position.z = calcZ(174, dialRadius);

			spriteMinutes15.position.y = calcY(180, dialRadius);
			spriteMinutes15.position.z = calcZ(180, dialRadius);

			spriteMinutes16.position.y = calcY(186, dialRadius);
			spriteMinutes16.position.z = calcZ(186, dialRadius);

			spriteMinutes17.position.y = calcY(192, dialRadius);
			spriteMinutes17.position.z = calcZ(192, dialRadius);

			spriteMinutes18.position.y = calcY(198, dialRadius);
			spriteMinutes18.position.z = calcZ(198, dialRadius);

			spriteMinutes19.position.y = calcY(204, dialRadius);
			spriteMinutes19.position.z = calcZ(204, dialRadius);

			spriteMinutes20.position.y = calcY(210, dialRadius);
			spriteMinutes20.position.z = calcZ(210, dialRadius);

			spriteMinutes21.position.y = calcY(216, dialRadius);
			spriteMinutes21.position.z = calcZ(216, dialRadius);

			spriteMinutes22.position.y = calcY(222, dialRadius);
			spriteMinutes22.position.z = calcZ(222, dialRadius);

			spriteMinutes23.position.y = calcY(228, dialRadius);
			spriteMinutes23.position.z = calcZ(228, dialRadius);

			spriteMinutes24.position.y = calcY(234, dialRadius);
			spriteMinutes24.position.z = calcZ(234, dialRadius);

			spriteMinutes25.position.y = calcY(240, dialRadius);
			spriteMinutes25.position.z = calcZ(240, dialRadius);

			spriteMinutes26.position.y = calcY(246, dialRadius);
			spriteMinutes26.position.z = calcZ(246, dialRadius);

			spriteMinutes27.position.y = calcY(252, dialRadius);
			spriteMinutes27.position.z = calcZ(252, dialRadius);

			spriteMinutes28.position.y = calcY(258, dialRadius);
			spriteMinutes28.position.z = calcZ(258, dialRadius);

			spriteMinutes29.position.y = calcY(264, dialRadius);
			spriteMinutes29.position.z = calcZ(264, dialRadius);

			spriteMinutes30.position.y = calcY(270, dialRadius);
			spriteMinutes30.position.z = calcZ(270, dialRadius);

			spriteMinutes31.position.y = calcY(276, dialRadius);
			spriteMinutes31.position.z = calcZ(276, dialRadius);

			spriteMinutes32.position.y = calcY(282, dialRadius);
			spriteMinutes32.position.z = calcZ(282, dialRadius);

			spriteMinutes33.position.y = calcY(288, dialRadius);
			spriteMinutes33.position.z = calcZ(288, dialRadius);

			spriteMinutes34.position.y = calcY(294, dialRadius);
			spriteMinutes34.position.z = calcZ(294, dialRadius);

			spriteMinutes35.position.y = calcY(300, dialRadius);
			spriteMinutes35.position.z = calcZ(300, dialRadius);

			spriteMinutes36.position.y = calcY(306, dialRadius);
			spriteMinutes36.position.z = calcZ(306, dialRadius);

			spriteMinutes37.position.y = calcY(312, dialRadius);
			spriteMinutes37.position.z = calcZ(312, dialRadius);

			spriteMinutes38.position.y = calcY(318, dialRadius);
			spriteMinutes38.position.z = calcZ(318, dialRadius);

			spriteMinutes39.position.y = calcY(324, dialRadius);
			spriteMinutes39.position.z = calcZ(324, dialRadius);

			spriteMinutes40.position.y = calcY(330, dialRadius);
			spriteMinutes40.position.z = calcZ(330, dialRadius);

			spriteMinutes41.position.y = calcY(336, dialRadius);
			spriteMinutes41.position.z = calcZ(336, dialRadius);

			spriteMinutes42.position.y = calcY(342, dialRadius);
			spriteMinutes42.position.z = calcZ(342, dialRadius);

			spriteMinutes43.position.y = calcY(348, dialRadius);
			spriteMinutes43.position.z = calcZ(348, dialRadius);

			spriteMinutes44.position.y = calcY(354, dialRadius);
			spriteMinutes44.position.z = calcZ(354, dialRadius);

			spriteMinutes45.position.y = calcY(360, dialRadius);
			spriteMinutes45.position.z = calcZ(360, dialRadius);

			spriteMinutes46.position.y = calcY(6, dialRadius);
			spriteMinutes46.position.z = calcZ(6, dialRadius);

			spriteMinutes47.position.y = calcY(12, dialRadius);
			spriteMinutes47.position.z = calcZ(12, dialRadius);

			spriteMinutes48.position.y = calcY(18, dialRadius);
			spriteMinutes48.position.z = calcZ(18, dialRadius);

			spriteMinutes49.position.y = calcY(24, dialRadius);
			spriteMinutes49.position.z = calcZ(24, dialRadius);

			spriteMinutes50.position.y = calcY(30, dialRadius);
			spriteMinutes50.position.z = calcZ(30, dialRadius);

			spriteMinutes51.position.y = calcY(36, dialRadius);
			spriteMinutes51.position.z = calcZ(36, dialRadius);

			spriteMinutes52.position.y = calcY(42, dialRadius);
			spriteMinutes52.position.z = calcZ(42, dialRadius);

			spriteMinutes53.position.y = calcY(48, dialRadius);
			spriteMinutes53.position.z = calcZ(48, dialRadius);

			spriteMinutes54.position.y = calcY(54, dialRadius);
			spriteMinutes54.position.z = calcZ(54, dialRadius);

			spriteMinutes55.position.y = calcY(60, dialRadius);
			spriteMinutes55.position.z = calcZ(60, dialRadius);

			spriteMinutes56.position.y = calcY(66, dialRadius);
			spriteMinutes56.position.z = calcZ(66, dialRadius);

			spriteMinutes57.position.y = calcY(72, dialRadius);
			spriteMinutes57.position.z = calcZ(72, dialRadius);

			spriteMinutes58.position.y = calcY(78, dialRadius);
			spriteMinutes58.position.z = calcZ(78, dialRadius);

			spriteMinutes59.position.y = calcY(84, dialRadius);
			spriteMinutes59.position.z = calcZ(84, dialRadius);

		//Hours
		hoursDial.add( 
				spriteHours00,
				spriteHours01,
				spriteHours02,
				spriteHours03,
				spriteHours04,
				spriteHours05,
				spriteHours06,
				spriteHours07,
				spriteHours08,
				spriteHours09,
				spriteHours10,
				spriteHours11,
				spriteHours12,
				spriteHours13,
				spriteHours14,
				spriteHours15,
				spriteHours16,
				spriteHours17,
				spriteHours18,
				spriteHours19,
				spriteHours20,
				spriteHours21,
				spriteHours22,
				spriteHours23
				);

			spriteHours00.position.y = calcY( 90, dialRadius ); 
			spriteHours00.position.z = calcZ( 90, dialRadius );

			spriteHours01.position.y = calcY( 105, dialRadius ); 
			spriteHours01.position.z = calcZ( 105, dialRadius );  

			spriteHours02.position.y = calcY( 120, dialRadius ); 
			spriteHours02.position.z = calcZ( 120, dialRadius );  

			spriteHours03.position.y = calcY( 135, dialRadius ); 
			spriteHours03.position.z = calcZ( 135, dialRadius );  

			spriteHours04.position.y = calcY( 150, dialRadius ); 
			spriteHours04.position.z = calcZ( 150, dialRadius );  

			spriteHours05.position.y = calcY( 165, dialRadius ); 
			spriteHours05.position.z = calcZ( 165, dialRadius );  

			spriteHours06.position.y = calcY( 180, dialRadius ); 
			spriteHours06.position.z = calcZ( 180, dialRadius );  

			spriteHours07.position.y = calcY( 195, dialRadius ); 
			spriteHours07.position.z = calcZ( 195, dialRadius ); 

			spriteHours08.position.y = calcY( 210, dialRadius ); 
			spriteHours08.position.z = calcZ( 210, dialRadius ); 

			spriteHours09.position.y = calcY( 225, dialRadius ); 
			spriteHours09.position.z = calcZ( 225, dialRadius ); 

			spriteHours10.position.y = calcY( 240, dialRadius ); 
			spriteHours10.position.z = calcZ( 240, dialRadius ); 

			spriteHours11.position.y = calcY( 255, dialRadius ); 
			spriteHours11.position.z = calcZ( 255, dialRadius ); 

			spriteHours12.position.y = calcY( 270, dialRadius ); 
			spriteHours12.position.z = calcZ( 270, dialRadius ); 

			spriteHours13.position.y = calcY( 285, dialRadius ); 
			spriteHours13.position.z = calcZ( 285, dialRadius ); 

			spriteHours14.position.y = calcY( 300, dialRadius ); 
			spriteHours14.position.z = calcZ( 300, dialRadius ); 

			spriteHours15.position.y = calcY( 315, dialRadius ); 
			spriteHours15.position.z = calcZ( 315, dialRadius ); 

			spriteHours16.position.y = calcY( 330, dialRadius ); 
			spriteHours16.position.z = calcZ( 330, dialRadius ); 

			spriteHours17.position.y = calcY( 345, dialRadius ); 
			spriteHours17.position.z = calcZ( 345, dialRadius ); 

			spriteHours18.position.y = calcY( 360, dialRadius ); 
			spriteHours18.position.z = calcZ( 360, dialRadius ); 

			spriteHours19.position.y = calcY( 15, dialRadius ); 
			spriteHours19.position.z = calcZ( 15, dialRadius ); 

			spriteHours20.position.y = calcY( 30, dialRadius ); 
			spriteHours20.position.z = calcZ( 30, dialRadius ); 

			spriteHours21.position.y = calcY( 45, dialRadius ); 
			spriteHours21.position.z = calcZ( 45, dialRadius ); 

			spriteHours22.position.y = calcY( 60, dialRadius ); 
			spriteHours22.position.z = calcZ( 60, dialRadius ); 

			spriteHours23.position.y = calcY( 75, dialRadius ); 
			spriteHours23.position.z = calcZ( 75, dialRadius ); 




   scene.add( secondsDial, minutesDial, hoursDial );
		hoursDial.position.x = -2.5;
		secondsDial.position.x = 2.5;
}

function addLights() {
  //Add Lights Here
/*  var light = new THREE.SpotLight(0xffffff);
  light.position.set(0, 60, 60);
  light.shadowCameraVisible = false;
  light.castShadow = true;
  light.shadowMapWidth = light.shadowMapHeight = 256;
  light.shadowDarkness = 0.7;
  scene.add(light);*/
  var xl = new THREE.DirectionalLight( 0xffffff );
  xl.position.set( 1, 0, 2 );
  scene.add( xl );
  var ambientLight = new THREE.AmbientLight(0x222222);
  scene.add(ambientLight);
}


function getDialRotation() {

	var setDials        = new Date(),
		setHourDial     = setDials.getHours(),
		setMinuteDial   = setDials.getMinutes(),
		setSecondsDial  = setDials.getSeconds(),
		setMilliSeconds = setDials.getMilliseconds();

	  /*  console.log(setHourDial)
		console.log(setMinuteDial)
		console.log(setSecondsDial)*/



	
	
	secondsDial.rotation.x  =  (    (   (   (   (setSecondsDial/60)  + (    (setMilliSeconds/1000)  /60) ) )  * 360  )*(Math.PI/180)     ) + (Math.PI/2);


	if (setSecondsDial === 59) {

		minutesDial.rotation.x  =  (    (   (   (   (setMinuteDial/60)  + (    (setMilliSeconds/1000)  /60) ) )  * 360  )*(Math.PI/180)     ) + (Math.PI/2);

	} else {

		minutesDial.rotation.x  =  (    (   (   (   (setMinuteDial/60) ) )  * 360  )*(Math.PI/180)     ) + (Math.PI/2);

	}

	if (setMinuteDial === 59  && setSecondsDial === 59) {

		hoursDial.rotation.x    =  (    (   (   (	(setHourDial/24) + (    (setMilliSeconds/1000)  /24) ) )  * 360  )*(Math.PI/180)     ) + (Math.PI/2);

	} else {

		hoursDial.rotation.x    =  (    (   (   (setHourDial/24) )  * 360  ) * (Math.PI/180)     ) + (Math.PI/2);

	}

	/*console.log(hoursDial.rotation.x)
	console.log(minutesDial.rotation.x)*/
}

