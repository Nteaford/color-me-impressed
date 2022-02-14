# Color-Me-Impressed
---

## App Background
This app allows users to find colors and generate color schemes. It makes calls to [TheColorApi](https://www.thecolorapi.com/) in order to receive RGB, CMYK, HSL, and HSV values for individual colors. It also leverages The Color API's color relationship database in order to return color schemes for a given color. This app also uses copy from HubSpot's blog post [Color Theory 101: A Complete Guide to Color Wheels & Color Schemes](https://blog.hubspot.com/marketing/color-theory-design) written by Bethany Cartwright in relation to color-wheel relationships. 




 
## Screenshots:
Login Page (Not Logged In)
![Login Page Screenshot](https://i.imgur.com/Kimdm99.png)
Signup Page (Not Logged In)
![Home Page Screenshot](https://i.imgur.com/OK3Skve.png)
Colors Page
![Colors Page Screenshot](https://i.imgur.com/Sa6sp9o.png)
Favorites Page
![Favorites Screenshot](https://i.imgur.com/eULm6aC.png)
Palettes Page 
![Palettes Screenshot](https://i.imgur.com/deZcz4U.png)
Modal
![Modal Screenshot](https://i.imgur.com/Y6JQZsL.png)


---

## Technologies Used
- MERN Stack (MongoDB, Express, React.js, Node.js)
- Bootstrap
- Heroku
- The Color API

## Getting Started
- You can link to the app [here.](https://color-me-impressed.herokuapp.com/)
- You can link to my trello board [here.](https://trello.com/b/0SXm6vGU/ga-project-4-planning)

Upon logging in, the user has the ability to generate 16 random colors or select their own from a color picker. The user can click on any of the colors to add them to a pending "add to favorites" state. Upon confirmation, these colors are saved by the user to the database. The user is then navigated to a favorites page where they can view the identifying information about the colors (hex code, rgb, cymk, etc) as well as generate a color palette based on the colors. The user then has the ability to save a color palette to their favorites to gain access to the in-depth information of each color included. The user is able to delete colors or palettes from the favorites page as well. 

## Next Steps/Icebox Items

- [ ] Allow the user to identify which colors from the Palette Page have been added to favorites without having to navigate away and come back
- [ ] Monetize

---