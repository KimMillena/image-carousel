const carouselImages = () => {
  const images = document.querySelectorAll(".carousel-image");

  const getImages = () => {
    return images;
  };

  const getImageByIndex = (index) => {
    if (index < 0 || index > images.length) {
      return;
    } else {
      return images[index];
    }
  };

  const getLength = () => {
    return images.length - 1;
  };

  return { getImages, getLength, getImageByIndex };
};

const slidesController = () => {
  let currentSlide = 4;
  const maxLength = carouselImages().getLength();

  const getCurrentSlide = () => {
    return currentSlide;
  };

  const setCurrentSlide = (index) => {
    if (index >= 0 && index <= maxLength) {
      currentSlide = index;
    }
  };

  const nextSlide = () => {
    if (currentSlide < maxLength) {
      currentSlide += 1;
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      currentSlide -= 1;
    }
  };

  return { getCurrentSlide, setCurrentSlide, nextSlide, previousSlide };
};

const displayController = () => {
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselSlide = document.querySelector(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const images = carouselImages();
  const slides = slidesController();

  const initCarousel = () => {
    initialSlideImage();
    createNavCircle();
  };

  const handlePreviousImage = () => {
    const fromSlideIndex = slides.getCurrentSlide();
    console.log(fromSlideIndex);
    slides.previousSlide();
    const toSlideIndex = slides.getCurrentSlide();
    console.log(toSlideIndex);

    updateSlideImage(fromSlideIndex, toSlideIndex);
  };

  const handleNextImage = () => {
    const fromSlideIndex = slides.getCurrentSlide();
    console.log(fromSlideIndex);
    slides.nextSlide();
    const toSlideIndex = slides.getCurrentSlide();
    console.log(toSlideIndex);

    updateSlideImage(fromSlideIndex, toSlideIndex);
  };

  const updateSlideImage = (fromSlideIndex, toSlideIndex) => {
    const fromImage = images.getImageByIndex(fromSlideIndex);
    const toImage = images.getImageByIndex(toSlideIndex);

    if (fromImage && toImage) {
      renderSlideImage(fromImage, toImage);
    } else {
      initialSlideImage();
    }
  };

  const renderSlideImage = (fromImage, toImage) => {
    fromImage.classList.remove("visible");
    toImage.classList.add("visible");
  };

  const initialSlideImage = () => {
    const currentSlideIndex = slides.getCurrentSlide();
    const carouselImage = images.getImageByIndex(currentSlideIndex);

    if (!carouselImage) return;

    carouselImage.classList.add("visible");
  };

  const toSlide = (toIndex) => {
    const fromSlideIndex = slides.getCurrentSlide();
    const toSlideIndex = toIndex;

    console.log(fromSlideIndex, toSlideIndex);

    updateSlideImage(fromSlideIndex, toSlideIndex);
    slides.setCurrentSlide(toSlideIndex);
  };

  const createNavCircleContainer = () => {
    const navCircleContainer = document.createElement("ul");
    navCircleContainer.classList.add("nav-circle-container");

    return navCircleContainer;
  };

  const createNavCircleBtn = (toIndex) => {
    const navCircleBtn = document.createElement("button");
    navCircleBtn.classList.add("nav-circle-btn");

    navCircleBtn.addEventListener("click", () => {
      toSlide(toIndex);
    });

    return navCircleBtn;
  };

  const createNavCircle = () => {
    const navCircleContainer = createNavCircleContainer();
    const imageLength = images.getLength();
    console.log(imageLength);

    for (let i = 0; i <= imageLength; i++) {
      const navCircle = document.createElement("li");
      navCircle.classList.add("nav-circle");

      navCircle.appendChild(createNavCircleBtn(i));
      navCircleContainer.appendChild(navCircle);
    }

    carouselContainer.appendChild(navCircleContainer);
  };

  prevBtn.addEventListener("click", handlePreviousImage);
  nextBtn.addEventListener("click", handleNextImage);

  initCarousel();
};

displayController();
