const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// 텍스트의 폭과 높이를 계산합니다.
//const textWidth = context.measureText("가스누출위험구역").width;
const textWidth = 8 * 100
const textHeight = 100; // 폰트 크기를 기반으로 설정합니다.

// 캔버스의 크기를 텍스트와 도형이 모두 포함될 수 있도록 조절합니다.
canvas.width = textWidth + 100;  // 100은 여유 공간을 위한 값입니다.
canvas.height = textHeight + 100;  // 100은 여유 공간을 위한 값입니다.

context.beginPath();

context.strokeStyle = "red";
context.fillStyle = "black";
context.rect(0, 0, canvas.width, canvas.height);
context.strokeRect(0, 0, canvas.width, canvas.height);
context.fill();

context.beginPath();
context.font = "Bold 100px Arial";
context.fillStyle = "red";

context.textAlign = "center";
context.fillText("가스누출위험구역", canvas.width / 2, canvas.height / 2 + 30);  // 텍스트를 캔버스 중앙에 위치시킵니다.
