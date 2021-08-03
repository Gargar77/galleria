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
<img src="/screenshots/galleria_tablet_homepage.png" alt="homepage view" width="40%" height="50%"/> <img src="/screenshots/galleria_tablet_slideshow.png" alt="slideshow view" width="40%" height="50%"/>

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/single-page-application-using-react-and-sass-XaBgZ1TcW]
- Live Site URL: [https://gargar77.github.io/galleria]

## My process

- My main goal was to build this site in a way that it could very easily scale. This notion led me to create the site as a Single Page Application using React and react-dependent libraries. 

- Before any CSS styling was applied to the site, I made sure that I had developed a component framework with as little coupling as possible; This was by far the most challenging part.

- After the functionality was tested to work as intended, I moved on to responsively styling the components so that they abide by the Figma design schema on most screen sizes. I used Sass library for the styling because it allowed me to create more complex CSS while maintaining good readability to the code.

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

As mentioned before, the biggest challenge for me was determining which component should hold state and which component should only receive props. After going through a few bugs in the navigation of the artworks, I settled on having the Homepage component hold most of the state. It does cause a bit of coupling with its children components; however, that is the price to be paid to have all components react synchronously when a children component executes any change.

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
The code snippet above is the child component ArtWorkViewer responsible for rendering the current active artwork in the slideshow. One of the props received is called `update`. This function is just a reference to a function belonging to the Homepage component. When this function executes, it will cause a state change in the Homepage component, ultimately leading to the re-render lifecycle of all the child components, creating a "synchronous" refresh of the data. This became extremely helpful when creating animations for components that would unmount when upon specific criteria.

Here is an example of the animation implementation, where it gives the illusion that all the artworks render on the screen, and the user can scroll from left to right to see the next artwork:

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
This function is in the FooterNav component. This component handles the navigation of the slideshow, as well as renders all the navigation components required. This function leverages that none of the child components will refresh unless the `update()` function executes (which causes the Homepage component to update its state). For the animation to work correctly, I delayed the execution of the update function to give time for the component to animate the leaving or entering of the artwork.

This was the first project in which I successfully incorporated complex animations in a React project.

### Continued development
I want to continue exploring the limits of React when it comes to state handling. To be more precise, I want to know when I should use Redux to handle my state or not better. In this project, I would like to experiment with more extensive JSON data to see the performance ramifications of how I decided to structure my code. I would also like to refactor the code to receive HTTP requests for all the artwork information, which I feel will reduce the amount of data the browser needs to download at the start of the application.

## Author

- Website - [Gary Bautista](https://garybautista.me/)
- Frontend Mentor - [@Gargar77](https://www.frontendmentor.io/profile/Gargar77)
