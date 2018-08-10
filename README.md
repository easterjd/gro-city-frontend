# Gro.City Frontend
------------------------------

### ABOUT THIS PROJECT

We had the idea for this project based on how challenging it can be to grow plants in the city. Not only is the information about specific plants in the web very disperate, but often the rich information can be very-scientific and difficult for the laymen to understand. The purpose of this website is to bridge the gap between the rich scientific plant information available on the web, and the people who are most likely to be searching for plants.

With Gro.City, users are able to create planting project boards (similar to Pinterest) focused around specific topics (ex. creating a board for your balcony planter-box or window-sill). Users can then navigate to the plant search page and filter our robust database of plants by easy-to-understand plant characteristics like flower colors, blooming-season, and many more.


### OPTIONS AVAILABLE TO THE USER

    -Signup { Name, Last Name, Email, Password, Password-Duplicate }
    -Login { Email, Password }
    -Create Board { Title }
    -Delete Board | also deletes all Plants associated with this Board
    -For each Board :  
       -Remove Plants
       -Add Plants (on the plant search page)
    -Search Plants :
       -{Scientific Name, Duration, Growth habit, Growth period, Flower Color, Flower Conspicious, Soil Type, Moisture Level, Shade Tolerance, Min Temp (F), Bloom period)
    - Logout  


### FEATURES

-Token Authorization ensures that only one user has access to their unique Boards

-Users are able to create and delete Boards as well as add and delete Plants in each Board

-Input validation will alert a user if required field is left blank

-Clicking on any button creates a very satisfying ripple-effect of color on that button

-Really awesome animation logo using anime.js


### TO INSTALL GRO.CITY

    -fork and clone this frontend repository onto your local machine
    -run 'npm install' in your terminal
    -run 'npm run dev'
    -the previous step will open the frontend program in your browser using live-server, connected to the backend deployed with Heroku


### TO USE TASK MANAGER ONLINE

<a href="https://gro-city.surge.sh/">Gro.City!</a>

### BUILT WITH

    -Javascript, HTML & CSS
    -Materialize
    -Axios
    -Express
    -Browserify & Watchify
    -Live-server 
    -AnimeJS
    -Moment
    -USDA Plants Database (cleaned and optimized for search)
    -Microsoft Bing Image Search API


### DEVELOPERS

    -For more information, pleasee contact this project's developers: Surya Krishna Moorthy, Christopher Peterson, or Dillon Easter at:   

        ayrus2289@gmail.com, crpete23@gmail.com, or johndilloneaster@gmail.com
