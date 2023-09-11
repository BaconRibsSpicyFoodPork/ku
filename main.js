canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_x=10;
rover_y=10;
rover_width=100;
rover_height=100;

Nasa_images_array=['mars1.jpeg','mars2.jpeg','bars3.jpeg','graymars.jpeg'];
random_number=Math.floor(Math.random()*4);
background_image=Nasa_images_array[random_number];

rover_image="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;

    if (keypressed=='37') {
        left();
    }

    if (keypressed=='38') {
        up();
    }

    if (keypressed=='39') {
        right();
    }

    if (keypressed=='40') {
        down();
    }
}

function up(){
    if (rover_y>0) {
        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (rover_y<500) {
        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (rover_x>0) {
        rover_x=rover_x-10;
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (rover_x<700) {
        rover_x=rover_x+10;
        uploadBackground();
        uploadRover();
    }
}