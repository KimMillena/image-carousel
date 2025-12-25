const carouselImages = () => {
  const images = [
    "assets/img/aj-sakura-unsplash.jpg",
    "assets/img/alex-knight-japan-street-unsplash.jpg",
    "assets/img/ernest-widi-vending-machine-unsplash.jpg",
    "assets/img/romeo-a-train-station-unsplash.jpg",
    "assets/img/sora-sagano-fish-unsplash.jpg",
  ];

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
  const images = carouselImages();
  const slides = slidesController();

  const createImage = () => {
    const image = document.createElement("img");
    image.classList.add("carousel-image");
    return image;
  };

  const renderImage = () => {
    const imageSlide = createImage();
    const currentSlide = slides.getCurrentSlide();
    imageSlide.src = images.getImageByIndex(currentSlide);
    carouselSlide.appendChild(imageSlide);
  };

  renderImage();
};

displayController();
