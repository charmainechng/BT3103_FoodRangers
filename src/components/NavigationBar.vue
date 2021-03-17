<template>  
<div>
  <div class="topnav">

  <div class = "topnav-right">
  <a class="active" href="/home"> Home</a>
  <a href="#news">My Items</a>
  <a href="#contact">Dashboard</a>
  <a href="#about">Shops Near You</a>
  <a href="/search">Search</a>
</div>
</div>
</div>
</template>


<script>


</script>

<style scoped>


/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  height: 60px;
}

/* .topnav-right {
    float: center;
} */

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
}

.topnav img {
    left: 10px;
    width: 60px;
    height: 60px;
    justify-content:flex-start;
    image-rendering: optimizeQuality;
    position: absolute;
   
}

.topnav a.logo {
  font-size: 25px;
  font-weight: bold;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
  height: 60px;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #4CAF50;
  color: white;
  height: 60px;
}
</style>