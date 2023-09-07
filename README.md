# Towers-Game-Three.js
Towers is a browser-based idle game application in the JavaScript programming language using the Three.js graphics library to create and display interactive 3D graphics in WebGL.

When the developed game application "Towers" is launched, the game scene opens on a page in the browser on the local host.

![image](https://github.com/nikasuschinskaya/Towers-Game-Three.js/assets/92970744/48760a24-8d26-40a3-9d54-b1c677c82aeb)

Immediately after opening the application, the following elements are present on the game stage:
- the playing field is a field for building towers;
- currency panel – a panel for displaying each type of coin;
- building panel – a panel for displaying the number of towers and their levels;
- income rate panel – a panel for displaying the income of each currency in 2 seconds;
- game store – an interface element for the possibility of buying, improving and converting coins;
- music is an unobtrusive but dynamic mood track.

Initially, only one currency accumulates – rusty coins. The purchase buttons, tower upgrades, and coin conversion are not available until a certain point. 

## Initial values of game resources:
- number of rusty coins – 8 coins are added in 2 seconds;
- the number of all other types of coins is 0 coins;
- the revenue rate of all other towers is 0 coins per second;
- number of towers of each type – 0 towers;
- levels of towers of each type – 1 level for all towers.

## Gameplay

The purchase button of the first metal-type tower becomes available when 20 rusty coins are accumulated. The tower is built by hovering the cursor over the desired area and clicking on the left mouse button. By holding down the right mouse button, the rotation of the field is available to view the model from all sides.

![image](https://github.com/nikasuschinskaya/Towers-Game-Three.js/assets/92970744/52194f68-515f-480f-a078-da9a60b6b0c4)

When building towers, the areas available for this are highlighted in green, and the inaccessible ones are highlighted in red. If there is a tower on the area, then this area becomes inaccessible for the construction of other towers.

To make it easier and more interesting to accumulate resources, there is an improvement and converter tab in the store. 
Improving towers allows you to earn more coins per second. Along with the growth of income and the level of towers, the price of the tower and the subsequent improvement increases. The converter also allows you to exchange coins for each other.

![image](https://github.com/nikasuschinskaya/Towers-Game-Three.js/assets/92970744/88bf762b-095a-4f29-8c94-0f21b4f5d11a)

An atypical feature of the "Idle" genre of the game application is that this game application assumes the ability to escape with the accumulation of a certain amount of resources. 
When a player accumulates 1000 platinum coins, a small pop-up window appears that notifies about the achievement of this goal.

![image](https://github.com/nikasuschinskaya/Towers-Game-Three.js/assets/92970744/413230f5-cf3a-442f-bff4-ba6e9930d255)


