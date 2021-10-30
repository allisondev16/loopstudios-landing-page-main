# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<p align="center">
Desktop:
</p>
<p align="center">
<img src="./images/Desktop_Screenshot.png"/>
</p>

<p align="center">
Mobile:
</p>
<p align="center">
<img src="./images/Mobile_Screenshot.png"/>
</p>


### Links

- Live Site URL: [Live site URL](https://allisondev16.github.io/loopstudios-landing-page-main/)

## My process

### Built with

- CSS BEM
- SCSS
- CSS Grid
- Flexbox
- JavaScript
- Semantic HTML5 markup
- Mobile-first workflow

### What I learned

- Learned using function in SCSS to convert px to rem.

- To remove the unwanted height of the anchor tag:
  ```css
  vertical-align: bottom;
  ```
  Reference: https://stackoverflow.com/questions/27999522/anchor-tag-generates-unwanted-height

- ">" means direct child in CSS/SCSS.
  Reference: https://stackoverflow.com/questions/11894054/why-use-in-css

- Darken the background image using linear-gradient
  Reference: https://dev.to/nazanin_ashrafi/how-to-darken-an-image-with-css-4f5h

- The unit of measure, vh and vw, is relative to 1% of the height/width of the viewport
  Reference: https://www.w3schools.com/cssref/css_units.asp

- Use background-image in css instead of the img tag to be able to change the image through media query.

- Using Grid

- Centering a button inside a div by adding text-align:center on the parent div.
  Reference: https://stackoverflow.com/questions/3622756/button-center-css

- When I tried to apply opacity for the backgorund-image when hovered but the text is also affected, so I used pseudo-element ::before to separate the background-image to the parent div, thank you Coder Coder (Reference: https://www.youtube.com/watch?v=LQsjNmkqUOc)

- The "interactive" section was tricky. At first I used margin-left and left for position: absolute but I realized that when the width of the browser changes, the elements are not being centered. Hence, I used margin-left and margin:right as auto and adjusted the position of the elements from the center using postion relative and absolute.

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
