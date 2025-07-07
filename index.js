Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ZGY1ODNmNC1kZjFlLTQwOGItODg1ZC02NDI2MTc2OTg5MzciLCJpZCI6NTM1NjIsImlhdCI6MTYxOTI0NTg3Mn0.6mlxI7gwPH4bfppmoaa5T7bN4AB3493wKVDFnjY6Eac";


const viewer = new Cesium.Viewer('cesiumContainer', {
      terrain: Cesium.Terrain.fromWorldTerrain(),
      shouldAnimate: false,
      animation: false,
       timeline: false, 
       imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png',
        credit: 'Map tiles by Stadia Maps, under CC BY 4.0.'
        }),
        baseLayer: Cesium.ImageryLayer.fromWorldImagery({
            style: Cesium.IonWorldImageryStyle.ROAD,
        }),
        // baseLayerPicker: false
})  

// viewer.extend(Cesium.viewerCesium3DTilesInspectorMixin);



// const tileset = viewer.scene.primitives.add(
//     await Cesium.Cesium3DTileset.fromUrl(
//         "./tileset/tileset.json"
//     ) 
// );

const tileset = viewer.scene.primitives.add(
    await Cesium.Cesium3DTileset.fromUrl(
        "./tileset/citywalls/tileset.json"
    ) 
);

const homes_tileset = viewer.scene.primitives.add(
    await Cesium.Cesium3DTileset.fromUrl(
        "./tileset/homes/tileset.json"
    ) 
);

const agora_tileset = viewer.scene.primitives.add(
    await Cesium.Cesium3DTileset.fromUrl(
        "./tileset/agora/tileset.json"
    ) 
);

const roads_tileset = viewer.scene.primitives.add(
    await Cesium.Cesium3DTileset.fromUrl(
        "./tileset/roads/tileset.json"
    ) 
);

const public_tileset = viewer.scene.primitives.add(
    await Cesium.Cesium3DTileset.fromUrl(
        "./tileset/public/tileset.json",
    ) 
);



// viewer.zoomTo(tileset);
viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(
  0,                      
  Cesium.Math.toRadians(-45), 
  2500                   
));




// Disable time editing (and lighting)
const fixedTime = Cesium.JulianDate.fromDate(new Date("2025-06-29T16:00:00Z"));
viewer.clock.currentTime = fixedTime;
viewer.clock.shouldAnimate = false; 
viewer.clock.clockStep = Cesium.ClockStep.TICK_DEPENDENT;
viewer.clock.multiplier = 0.0;
viewer.clock.canAnimate = false;

viewer.scene.globe.enableLighting = false;
const direction = new Cesium.Cartesian3(0.0, 0.0, -1.0);
// Kolor i intensywność światła
const light = new Cesium.DirectionalLight({
    direction: direction,
    color: Cesium.Color.WHITE
});

viewer.scene.light = light;
viewer.scene.fog.enabled = false;