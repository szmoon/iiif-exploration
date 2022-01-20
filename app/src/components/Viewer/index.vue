<template>
  <div>
    <div style="width: 70%; height: 600px" id="viewer-image" ref="image" />
  </div>
</template>
<script>
import OpenSeadragon from 'openseadragon';
window.OpenSeadragon = OpenSeadragon;
export default {
  name: 'Viewer',
  data() {
    return {
      viewer: null
    };
  },
  mounted() {
    this.initViewer();
  },
  methods: {
    // tileSourceFromManifest(manifest) {
    //   const canvas = this.firstCanvas(manifest);
    //   const firstImage = canvas.images[0];
    //   const id = firstImage.resource.service['@id'];
    //   return `${id}/info.json`;
    // },
    // firstCanvas(manifest) {
    //   return manifest.sequences[0].canvases[0];
    // },
    initViewer() {
      console.log('init Viewer');
      // https://codesandbox.io/s/4ybif?file=/package.json:229-254
      // https://observablehq.com/@bertspaan/iiif-openseadragon
      // https://openseadragon.github.io/examples/tilesource-iiif/
      // var duomo = {
      //   Image: {
      //     xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
      //     Url: '//openseadragon.github.io/example-images/duomo/duomo_files/',
      //     Format: 'jpg',
      //     Overlap: '2',
      //     TileSize: '256',
      //     Size: {
      //       Width: '13920',
      //       Height: '10200'
      //     }
      //   }
      // };

      // var source = [
      //   {
      //     type: 'image',
      //     url: 'https://iiif.archivelab.org/iiif/b01-n01-2022/full/full/0/default.jpg'
      //   },
      // ];
      // var source2 = {
      //   Image: {
      //     xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
      //     Url: '//openseadragon.github.io/example-images/duomo/duomo_files/',
      //     Format: 'jpg',
      //     Overlap: '1',
      //     TileSize: '254',
      //     Size: {
      //       Width: '13920',
      //       Height: '10200'
      //     }
      //   }
      // };
      /* this.viewer = OpenSeadragon({
          id: "viewer-image",
           showNavigator:  true,
          animationTime: 0.4,
          visibilityRatio: 0.2,
          //prefixUrl: "//openseadragon.github.io/openseadragon/images/",
             sequenceMode: true,
                 debugMode:  true,
          tileSources: source2
        });*/

      // this.viewer = OpenSeadragon({
      //   id: 'viewer-image',
      //   animationTime: 0.4,
      //   prefixUrl: '//openseadragon.github.io/openseadragon/images/',
      //   showNavigator: true,
      //   sequenceMode: true,
      //   tileSources: this.tileSourceFromManifest(
      //     'https://szmoon.github.io/using-internet-archive/B01/manifest.json'
      //   )
      // });
      this.viewer = OpenSeadragon({
        id: 'viewer-image',
        // preserveViewport: true,
        visibilityRatio: 1,
        minZoomLevel: 1,
        defaultZoomLevel: 1,
        sequenceMode: true,
        tileSources: [
          {
            '@context': 'http://iiif.io/api/image/2/context.json',
            '@id':
              'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2',
            height: 7200,
            width: 5233,
            profile: ['http://iiif.io/api/image/2/level2.json'],
            protocol: 'http://iiif.io/api/image',
            tiles: [
              {
                scaleFactors: [1, 2, 4, 8, 16, 32],
                width: 1024
              }
            ]
          }
        ]
      });
      // this.viewer.initializeAnnotations();
      /* OpenSeadragon({
          animationTime: 0.4,
          id: "viewer-image",
          tileSources: {
            type: "image",
            url: "https://picsum.photos/id/237/200/300"
          },
          visibilityRatio: 0.2
        });*/
    }
  }
};
</script>