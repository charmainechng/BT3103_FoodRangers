<template>
  <div>
    <Bar></Bar>
    <div id="main">
      

      <div id="tab">
        <h1> Marts in Singapore </h1>
        <p id="search-tab">Search</p>  
        <p id="fav-tab"> Favourites </p>
      </div>

      <filters></filters>

      
      
    </div>
  </div>
</template>



<script>

//import db from "../../firebase.js";
import filters from "./filters.vue";
export default {
  components: {
    //  mart
    filters
  },
};
</script>

<style>
   ul {
    list-style-type: none;
    margin: 0; 
    padding: 0;
  },


  #main {

     padding-left: 100px;
     
    
  }

  
  #tab > p {
    width: 800px;
    height: 70px;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    }

    #search-tab {
    border-width: 100px;

    background-color: #2c3e50;
    color: white;

    }

    #fav-tab {
    border-width: 100px;
    border-color: white;

    background-color: white;
    color: #2c3e50;
    float: left;

    }

    #search {
    height: 50px;
    width: 700px;
    background-color: #f1f1f1;
    left: 0px;
    padding-top: 10px;
    float:left;
  }

  #mart {
    border: 1px solid white;
    overflow: hidden;
    
    width: 1500px;
    height: 280px;
  
    background-color: lightgray;
    }

    #martImg {
       width: 360px;
       height: 250px;


       max-width: 80%;
       max-height: 100%;
       
       
       float: left;
       border-width: 1px;
       object-fit: cover;

    }

    #martDetails > h1 {
    text-align: center;
    padding: 20px;
    font-size: 30px;
    color: #2c3e50;
    font-family: Avenir;
    font-style: bold;

    }

    #address {
    font-size: 30px;
    }

    input,
    input::-webkit-input-placeholder {
      font-size: 20px;
      color: lightgray;

    }

    input:focus {
      border: 3px solid #555;
    }




    #dropdown-all > div {
      font-size: 25px;
      font-family: Helvetica;
      color: #2c3e50;
      border-radius: 4px;
      background-color: #f1f1f1;
      float: left;

    }

    #main {
      padding-left: 100px;
      position: sticky;
    }

    #filters {
      height: 150px;
      width: 2000px;
      background-color: #f1f1f1;
      float: left;
    }
    
    #numOfSearches {
      font-size: 30px;
      padding-right: 100px;
      float: right;
    }

    #search-div {
      padding-left: 50px;
      padding-top: 50px;
    }

    #dropdown-all {
      float: left;
    }

    #result {
      width: 2000px;
    }
</style>