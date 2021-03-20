<template>
  <div>
    <Bar></Bar>
    <button class="tablink" onclick="openPage('Home', this, 'red')">
      Your Items
    </button>
    <button
      class="tablink"
      onclick="openPage('News', this, 'green')"
      id="defaultOpen"
    >
      Items Expiring Soon
    </button>
    <button class="tablink" onclick="openPage('Contact', this, 'blue')">
      Items Expired
    </button>
  </div>
</template>




<script>
export default {};
</script>

<style scoped>
/* Set height of body and the document to 100% to enable "full page tabs" */
body,
html {
  height: 100%;
  margin: 0;
  font-family: Arial;
}

/* Style tab links */
.tablink {
  background-color: rgb(160, 189, 187);
  color: rgb(255, 255, 255);

  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 44px 10px;
  font-size: 20px;
  width: 33.31%;
}

.tablink:hover {
  background-color: #777;
}

/* Style the tab content (and add height:100% for full page content) */
.tabcontent {
  color: white;
  display: none;
  padding: 100px 20px;
  height: 100%;

}

#Home {
  background-color: red;
}
#News {
  background-color: green;
}
#Contact {
  background-color: blue;
}
#About {
  background-color: orange;
}
</style>
