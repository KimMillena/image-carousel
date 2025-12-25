const carouselImages = () => {
  const images = document.querySelectorAll(".carousel-image");

  const getImages = () => {
    return images;
  };

  const getImageByIndex = (index) => {
    return images[index];
  };

  const getLength = () => {
    return images.length;
  };

  return { getImages, getLength, getImageByIndex };
};

const slidesController = () => {
  let currentSlide = 0;

  const getCurrentSlide = () => {
    return currentSlide;
  };

  const nextSlide = () => {
    currentSlide += 1;
  };

  const previousSlide = () => {
    currentSlide -= 1;
  };

  return { getCurrentSlide, nextSlide, previousSlide };
};

const displayController = () => {
  const carouselSlide = document.querySelector(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const images = carouselImages();
  const slides = slidesController();

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
    toImage.classList.toggle("visible");
  };

  const initialSlideImage = () => {
    const currentSlideIndex = slides.getCurrentSlide();
    const carouselImage = images.getImageByIndex(currentSlideIndex);
    carouselImage.classList.add("visible");
  };

  prevBtn.addEventListener("click", handlePreviousImage);
  nextBtn.addEventListener("click", handleNextImage);

  initialSlideImage();
};

displayController();
