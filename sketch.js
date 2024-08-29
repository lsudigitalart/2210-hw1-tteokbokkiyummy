function setup() {
    createCanvas(500,500);
    background(254,235,208);

    fill(245,149,80);
    noStroke();
    ellipse (width/2, height/2, 120, 120);
    fill (255,223,90)
    ellipse (width/2,height/2, 100, 100);
    
    //sky//
    fill (250,215,160);
    ellipse (0,0,500,500);
    ellipse (0,500,500,500);
    ellipse (500,0,500,500);
    ellipse (500,500,500,500);
    fill (252,196,132);
    ellipse (525,-25,500,500);
    ellipse (-25,-25,500,500);
    fill (249,179,151);
    ellipse (550,-50,500,500);
    ellipse (-50,-50,500,500);
    fill (250,171,165);
    ellipse (575,-75,500,500);
    ellipse (-75,-75,500,500);
    fill (234,183,189);
    ellipse (600,-100,500,500);
    ellipse (-100,-100,500,500);
    fill (234,183,216);
    ellipse (625,-125,500,500);
    ellipse (-125,-125,500,500);

    //water one//
    fill (250);
    ellipse (-10,325,150);
    ellipse (100,325,150);
    ellipse (210,325,150);
    ellipse (320,325,150);
    ellipse (430,325,150);
    ellipse (540,325,150);

    //water one inner//
    fill (186,212,243);
    ellipse (-10,325,135);
    ellipse (100,325,135);
    ellipse (210,325,135);
    ellipse (320,325,135);
    ellipse (430,325,135);
    ellipse (540,325,135);


    //water two//
    fill (240);
    ellipse (25,375,175);
    ellipse (140,375,175);
    ellipse (260,375,175);
    ellipse (390,375,175);
    ellipse (510,375,175);

    //water two inner//
    fill (111,174,236);
    ellipse (25,375,160);
    ellipse (140,375,160);
    ellipse (260,375,160);
    ellipse (390,375,160);
    ellipse (510,375,160);

    // land // 
    fill (242,229,188);
    ellipse (500,625,800,600);
    fill (228,197,158);
    ellipse (100,625,900,600)
    fill (212,178,141);
    ellipse (310,790,1000,800)



}

function draw() {

}