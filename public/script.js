function setup()
{
    createCanvas(400, 400);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,10,10);
    // background(200);
}

console.log(ml5.version);

const featureExtractor=ml5.featureExtractor('MobileNet',modelLoaded);

function modelLoaded()
{
    console.log('yes the model is loaded!');
}
