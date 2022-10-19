function preload() {
  img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
}
function setup() {
  createCanvas(512,512);
  img.resize(256,256);

  image(img, 256,256);
  img_r = createImage(256,256);
  img_g = createImage(256,256);
  img_b = createImage(256,256);

  loadAstronaut(img, img_r);
  loadAstronaut(img, img_g);
  loadAstronaut(img, img_b);

  image(img_r,0,0);
  image(img_g,256,0);
  image(img_b,0,256);

  
}

function loadAstronaut(sourceImg, createdImage){
    createdImage.loadPixels();
    sourceImg.loadPixels();

    for (x=0;x<sourceImg.width;x++)
        for(y=0;y<sourceImg.height;y++){
            pos=4*(y*sourceImg.width+x);
            createdImage.pixels[pos]=sourceImg.pixels[pos];
            createdImage.pixels[pos+1]=sourceImg.pixels[pos+1];
            createdImage.pixels[pos+2]=sourceImg.pixels[pos+2];
            createdImage.pixels[pos+3]=255; //alpha const
        }
    
    createdImage.updatePixels();
}