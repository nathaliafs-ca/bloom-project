const buttons = document.querySelectorAll(".button");
const flowers = document.querySelectorAll(".flower");

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		const buttonSelected = document.querySelector(".button.selected");
		buttonSelected.classList.remove("selected");
		button.classList.add("selected");

		const flowerSelected = document.querySelector(".flower.selected");
		flowerSelected.classList.remove("selected");
		flowers[index].classList.add("selected");
	});
});