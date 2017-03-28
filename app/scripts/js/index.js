class Point {
	constructor(i) {
		this.i = i;
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
	}
}

const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const width = canvas.offsetWidth * 1;
const height = canvas.offsetHeight * 1;
canvas.width = width;
canvas.height = height;
canvas.onclick = init;

const points = [];
let frame = 0, running = true;
for (let i = 0; i < 32; i++) points.push(new Point(i));
const first = points[0], last = points[points.length - 1];
ctx.globalCompositeOperation = "lighter";

function init() {
	ctx.clearRect(0, 0, width, height);
	frame = 0;
	for (p of points) {
		p.x = p.i * (width / 30);
		p.y = 0.25 * height * (Math.random() - Math.random());
		p.vx = 0;
		p.vy = 0;
	}
	if (!running) {
		running = true;
		run();
	}
}

function transform() {
	for (p of points) {
		p.vx += 0.1 * (Math.random() - Math.random());
		p.vy += 0.2 * (Math.random() - Math.random());
		p.x += p.vx;
		p.y += p.vy;
	}
}

function drawLine() {
	ctx.beginPath();
	ctx.strokeStyle = "rgba(128, 64, 0, 0.25)";

	ctx.moveTo(first.x, height * 0.5 + (last.y + first.y) / 2);
	for (let i = 1; i < points.length - 1; i++) {
		let p0 = points[i], p1 = points[i + 1];
		ctx.quadraticCurveTo(p0.x, height * 0.5 + p0.y, (p0.x + p1.x) / 2, height * 0.5 + (p0.y + p1.y) / 2);
	}
	ctx.quadraticCurveTo(last.x, last.y, last.x, (last.y + first.y) / 2);
	ctx.stroke();
}

init();

function run() {
	if (frame++ < 500) requestAnimationFrame(run);
	else running = false;
	drawLine();
	transform();
}
run();