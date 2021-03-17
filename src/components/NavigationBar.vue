<template>
  <div>
    <div class="topnav">
      <img src="../assets/foodranger.png" />
      <a href="/home"> Home </a>
      <a href="/items">My Items</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/map">Shops Near You</a>
      <a href="/search" class = "active">Search</a>
      <a href="/settings" class="right">Settings </a>
         <a href="/login" class="right">Sign Out </a>
    </div>
  </div>
</template>


<script>

</script>

<style scoped>

/* Add a black background color to the top navigation */
.topnav {
  display: flex;
  background-color: #333;
  height: 70px;
  overflow: hidden;
}

.topnav a.right {
  float: right;
}

/* Style the links inside the navigation bar */
.topnav a {
  color: #f2f2f2;
  text-align: center;
  padding: 18px 40px;
  text-decoration: none;
  font-size: 20px;
}

.topnav img {
  float: left;
  left: 20px;
  width: 210px;
  height: 230px;
  display: flex;
  padding-bottom: 160px;
  padding-inline: 50px;
  background: #f2f2f2;
}


/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
  height: 70px;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #4caf50;
  color: white;
  height: 70px;
}
</style>