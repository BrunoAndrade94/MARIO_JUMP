const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
	mario.classList.add("jump");
	setTimeout(() => {
		mario.classList.remove("jump");
	}, 600);
};

const loop = setInterval(() => {
	const pipe_position = pipe.offsetLeft; //127
	const mario_position = +window
		.getComputedStyle(mario)
		.bottom.replace("px", "");

	if (pipe_position <= 127 && pipe_position > 0 && mario_position <= 100) {
		pipe.style.animation = "none";
		pipe.style.left = `${pipe_position}px`;

		mario.style.animation = "none";
		mario.style.bottom = `${mario_position}px`;

		mario.src = "../images/mario-game-over.png";
		mario.style.width = "80px";
		mario.style.marginLeft = "55px";

		clearInterval(loop);
	}
}, 10);

document.addEventListener("keydown", jump);
