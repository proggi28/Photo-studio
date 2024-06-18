let sliderElements;

const percent = 35;

sliderElements = document.querySelectorAll(".slider-element");
  for (let i = 0; i < sliderElements.length; i++) {
    sliderElements[i].style.left = percent * i + "%";
  }

function right() {
  if (sliderElements[sliderElements.length - 1].style.left == "0%") {
    return;
  } else if(sliderElements[sliderElements.length - 1].style.left <= "105%") {
    return;
  }

  for (let element of sliderElements) {
    element.style.left =
      Number(element.style.left.replace("%", "")) - percent + "%";
  }
}

function left() {
  if (
    sliderElements[sliderElements.length - 1].style.left ==
    percent * (sliderElements.length - 1) + "%"
  ) {
    return;
  }

  for (let element of sliderElements) {
    element.style.left =
      Number(element.style.left.replace("%", "")) + percent + "%";
  }
}

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop);
