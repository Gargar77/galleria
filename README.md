# Frontend Mentor - Galleria slideshow site solution

This is a solution to the [Galleria slideshow site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slideshow and view each painting in a lightbox

### Screenshot

![./screenshots/galleria_tablet_homepage](./screenshot.jpg)
![./screenshots/galleria_tablet_slideshow](./screenshot.jpg)

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->
- Live Site URL: [https://gargar77.github.io/galleria]

## My process

- My main goal was to build this site in a way that it could very easily scale. This led me to build the site as a Single Page Application using React and react-dependent libraries. 

- Before any styling was applied to the site, I made sure that I had developed a component framework with as little coupling as possible. This was important, because components could easily be exchanged or adjusted without breaking the entire codebase. This was by far the most challenign part, as many components dependend on state variables from parent components, in order to render the correct information.

- After the functionality was tested to work as intended, I moved on to styling the components in a responsive manner, so that they abide by the Figma design schema on a majority of screen sizes. I used Sass library for the styling, because it allowed me to create more complex CSS,  while still maintaining a reasonable readability to the code.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [create-react-app](https://github.com/facebook/create-react-app) - For industry standard react build tools
- [react-router](https://reactrouter.com/) - For declerative routing in React
- [react-masonry-css](https://www.npmjs.com/package/react-masonry-css) - React component for creating Masonry CSS effects 
- [Sass CSS pre-processor](https://sass-lang.com/) - For styles

### What I learned

As mentioned before, the biggest challenge for me, was determining which component should hold state, and which component should just receive props. After going through a few bugs in the navigation of the artworks, I settled on having the Homepage component to hold most of the state. It does cause a bit of coupling with its children components; however, that is the price to be paid in order to have all components react synchronously when a children component executes any change.

Let's get a better idea of what im talking about:

```js
<ArtworkViewer 
  artworks={artworksData} 
  activeId={this.state.activeArtworkId} 
  update={this.updateActiveArtwork.bind(this)}
  isNavigating={this.state.isNavigating}
  direction={this.state.navigationDirection}
  />
};
```
The code snippet above is the child component ArtWorkViewer which is responsible for rendering the current active artwork in the slideshow. one of the props that is received is called update. this is just a refference to a function belogning to Homepage component. When this function is executed, it will cause a state change in Homepage component, which will ultimately lead to the re-render lifecycle of all the child components, creating a synchronous refresh of the data. This became extremely helpful when attempting to create animations for components that would unmount when a certain criteria is met.

Here is an example of the animation implementation, where it gives the illusion that all the artworks are rendered on the screen, and the user can just scroll from left to right to see the next artwork:

```js
 const move = (direction) => {
       if (direction === 'next' && id < numArtworks -1) {
           navigate(true,'left');
           window.setTimeout(()=> {
               update(id+1);
           },400)
       } else if (direction === "prev" && id > 0){
            navigate(true,'right')           
            window.setTimeout(()=> {
                update(id-1);
            },400)

       }
    }
```
This function is in the FooterNav component. This component handles the navigation of the slideshow, as well as render all the navigation components required. This function leverages from the fact that none of the child components will refresh unless the `update()` function is executed (which cause the Homepage component to refresh state). In order for the animation to work correctly, I delayed the execution of the update function, in order to give time for the component to animate the leaving or entering of the artwork.

This was the first project in which I was able to sucessfully incorporate complex animations in a React project.

### Continued development
I want to continue exploring the limits of React, when it comes to state handling. To be mor precise, I want to get a better idea of when I should use Redux to handle my state or not. In this project specifically, I would like to experiment with a larger jSON data in order to see the performance ramifications of how I decided to structure my code. I would also like to refactor the code to receive http request for all the artwork information, which I fell will reduce the amount of data that the browser needs to download at the start of the application.

## Author

- Website - [Gary Bautista](https://garybautista.me/)
- Frontend Mentor - [@Gargar77](https://www.frontendmentor.io/profile/Gargar77)
