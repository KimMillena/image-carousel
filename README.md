# image-carousel

A simple, clean, and interactive image carousel.

## Tasks

- Set up a very wide div which will contain the individual “slides” of each image. By appropriately positioning that div inside a container div (which acts like a picture frame), you can choose which slide is visible at any given time. How you approach this is up to you.
  - In the HTML file I put the slides of each image on a "carousel-slide" div element which is wrapped by the "carousel-container" div element. Inside the carousel-slide contains the carousel images.
- Once you have the slider positioned properly, build functions for “next” and “previous” which will advance to the next or previous slide accordingly. The transition doesn’t need to be smooth or animated. Only make it switch to the correct slide.
  - Create the "handlePreviousImage" and "handleNextImage" function which handles the next and previous functionality.
- Set up arrow buttons which activate those functions and play with cycling through the images.
  - Position the arrow buttons in the left and the right side of the slide image. I put an EventListener to the buttons to handle "click" event to trigger the handlePreviousImage and handleNextImage function.
- Add in some navigation dots at the bottom of the slides. Make a horizontal series of empty circles with CSS immediately below the slideshow. Each circle represents a slide, so whenever a new slide is activated, its corresponding circle gets filled in so you can tell where in the show you are. Make each circle link to that particular slide, so you can click on the circle and it will jump to that slide.
  - Create navigation circles through the "createNavCircle" function. Each navigation circle has an EventListener attached to it to handle "click" events that trigger the "toSlide" function, it is a function that handles which slide it navigates goes to. For telling where the user are currently, whenever a slide changes it calls the "updateActiveCircle" function it handles the functionality for filling the active circle with a color indicator.
- Add a timeout which advances the slides every 5 seconds.
  - Added a "startSlideshow" function which has a "setInterval" function that is set to advance the slide every 5 seconds.
- Play around with your slideshow!

## Resources

Sakura Image Link: (https://unsplash.com/photos/pink-flowers-McsNra2VRQQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
Fish Image: (https://unsplash.com/photos/photo-of-two-black-white-and-orange-koi-fish-Dksk8szLRN0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
Japan Vending Machine Image: (https://unsplash.com/photos/a-vending-machine-sitting-on-top-of-a-roof-av6ZiObwjwY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
Japan Train Station Image: (https://unsplash.com/photos/white-and-blue-train-on-rail-tracks-during-daytime-xdSyIdZsviE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
