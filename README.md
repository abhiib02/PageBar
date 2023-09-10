# PageBar.js
pagebar.js is very small snippet of code that gives a simple bar on the top to show how much page scroll left.

standalone code 
no html
no css
only add js file

just add this script tag to add pagebar to you webpage
```html
<script src="https://cdn.jsdelivr.net/gh/abhiib02/PageBar/PageBar.js"></script>
</body>
</html>
```
to customize bar for you own liking in js Without making css class
```html
<script src="https://cdn.jsdelivr.net/gh/abhiib02/PageBar/PageBar.js"></script>
 <script>
    pb_init(
      color = "#00f", 
      shadowColor="#0f0",
      height= "10",     //px values
      shadow = "10",    //px values
      borderRadius="0"  //px values
    );
  </script>
</body>
</html>
```
to make even more customization create css class like this in head

>putting !important is necessary as library make a new another instance of css class and will result not changing according to your customization
>and dont put width property in it as it is manipulated by library and in result it will do glitches if you put in css class
```css
.bar {
    height: 5px !important;
    background: #ff0;  !important; 
    filter: drop-shadow(0 0 10pxpx #f00)  !important; 
    position: fixed  !important; 
    top: 0  !important; 
    left: 0  !important; 
    border-radius: 10px  !important; 
    z-index: 10000  !important; 
}
```
