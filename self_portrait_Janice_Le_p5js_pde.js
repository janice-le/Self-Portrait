function setup() {
 
  createCanvas(1000, 1000);
  background('#cac9e5');
  noStroke()
  
   beginShape();
  fill('#d5d4e9');
  vertex(521, 789);
  vertex(885, 965);
  vertex(893, 1000);
  vertex(148, 1000);
  vertex(156, 965);
  endShape();
  
   beginShape();
  fill('#423540');
  vertex(430, 770);
  vertex(602, 770);
  vertex(656, 934);
  vertex(516, 1035);
  vertex(376, 934);
  endShape();  
  
   beginShape();
  fill('#ebeef7');
  vertex(406, 841);
  vertex(487, 974);
  vertex(472, 1084);
  vertex(383, 1019);
  vertex(342, 869);
  endShape();  
  
   beginShape();
  fill('#ebeef7');
  vertex(625, 838);
  vertex(690, 864);
  vertex(653, 1016);
  vertex(564, 1083);
  vertex(547, 973);
  endShape();
  
   beginShape();
  fill('#d5d4e9');
  vertex(320, 231);
  vertex(712, 231);
  vertex(833, 604);
  vertex(516, 834);
  vertex(199, 604);
  endShape();
  
   beginShape();
  fill('#dee2f2');
  vertex(276, 437);
  vertex(328, 646);
  vertex(454, 764);
  vertex(172, 1000);
  vertex(188, 710);
  vertex(168, 526);
  endShape();
  
   beginShape();
  fill('#c0c1d4');
  vertex(775, 223);
  vertex(889, 626);
  vertex(841, 1000);
  vertex(581, 763);
  vertex(699, 658);
  vertex(764, 568);
  endShape();
  
   beginShape();
  fill('#dee2f2');
  vertex(518, 82);
  vertex(644, 102);
  vertex(775, 223);
  vertex(764, 568);
  vertex(699, 658);
  vertex(701, 399);
  vertex(513, 235);
  endShape();
  
   beginShape();
  fill('#ebeef7');
  vertex(518, 82);
  vertex(513, 235);
  vertex(168, 526);
  vertex(245, 212);
  vertex(391, 88);
  endShape();
  
   beginShape();
  fill('#aeadc1');
  vertex(767, 450);
  vertex(800, 454);
  vertex(808, 525);
  vertex(764, 568);
  vertex(777, 524);
  endShape();
  
   fill('#423540');
  quad(263, 369, 503, 369, 503, 609, 263, 609);
  
   fill('#423540');
  quad(520, 654, 691, 654, 691, 739, 520, 739);
  
   noFill()
  stroke('#ffffff');
  strokeWeight(2);
  ellipse(383, 488, 196, 148);
  
   noFill()
  stroke('#423540');
  beginShape();
  vertex(594, 408);
  vertex(690, 408);
  vertex(738, 490);
  vertex(690, 573);
  vertex(594, 573);
  vertex(546, 490);
  endShape(CLOSE);
  
   noFill()
  stroke('#d5d4e9');
  strokeWeight(2);
  bezier(520, 698, 570, 700, 599, 689, 581, 694);
  
   fill('#dee2f2');
  circle(405, 484, 100);
  
}


function draw() {

}
