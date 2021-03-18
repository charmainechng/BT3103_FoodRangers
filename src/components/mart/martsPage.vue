<template>
  <div>
    <Bar></Bar>
    <div id="main">

      <div id="tab">
        <h1> Marts in Singapore </h1>
        <p id="search-tab">Search</p>  
        <p id="fav-tab"> Favourites </p>
      </div>
      <div id="search-bar">
        <input
          id="search"
          class="form-control"
          type="text"
          v-model="searchQuery"
          placeholder="Search Supermarket Name"
        />
      </div>

      <div id="dropdown-ratings">
      <h1>Ratings</h1>
        <select v-model="selectedRatings" class="form-control sl">
                    <option value="lowHigh" v-on:click="compareRatings()">Low to High</option>
                    <option  value="highLow" v-on:click="compareRatings">High to Low</option>
        </select>

        <h1> Type </h1>

        <select v-model="selectedType" class="form-control sl">
                    <option value="ugly">Discount - Ugly Produce</option>
                    <option  value="byob">Bring your own bag</option>
        </select>

      </div>
        <div class="mart">
          <ul>
            <li v-for="mart in filters" :key="mart.id">
              <div id="mart">
                <img v-bind:src="mart.image" id="martImg" />
                <div id="martDetails">
                  <h1>{{ mart.name }}</h1>
                  <h1>{{ mart.address }}</h1>
                </div>
              </div>
            </li>
          </ul>
        
      </div>
    </div>
  </div>
</template>



<script>

import db from "../../firebase.js";
//import map from 'underscore/modules/map.js'
export default {
  data() {
    return {
      marts: [],
      searchQuery: "",
      temp: [],
      filtered: false,
      selectedRatings: "0", //means didnt select the dropdown for ratings
      selectedType: "0"
    };
  },

  methods: {

    fetchItems:function(){ 
           db.collection('marts').orderBy('name').get().then((querySnapShot)=>{
               let mart={} 
               querySnapShot.forEach(doc=>{
                    mart=doc.data() 
                    this.marts.push(mart)
                }) 
            }) 
    },

    compareRatings: function(a,b) {
      alert("hi compare");
      if (a.ratings < b.ratings) {
        return -1;
      } else if (a.ratings > b.ratings) {
        return 1;
      } 
      return 0;
      
    },


      //toggles from false -> true, or from true -> false
    setFiltered: function() {
      if (this.filtered == false) {
        this.filtered = true;
      } else {
        this.filtered = false;
      }
    },

    resetTemp: function() {
      this.temp = [];
    },

    search: function() {
      let filter = []

      if (this.searchQuery) {
        if (this.filtered == false) {
          this.setFiltered();
        }
        
        let lowerSearch = this.searchQuery.toLowerCase();
          //alert("there's search" + this.searchQuery);
        this.marts.forEach((mart) => {
          let lower = mart.name.toLowerCase();
          if (lower.includes(lowerSearch)) {
            filter.push(mart);
          }
        })
            //this.temp = filter;
        return filter;
 
      } else {
        //alert("no search")
        return this.marts;
      }
      //let filteredMarts = [];
    },

    type: function(arr) {
      let type = []
      if (this.selectedType === "ugly") {
        arr.forEach((mart) => {
          let lower = mart.type.toLowerCase();
          if (lower.includes("ugly")) {
            type.push(mart);
          }
        })

      }
      return type;

    }
    //methods end here
  },

  computed: {
    filters: function() {
      let res = []
      //if filtered is true, use temp
      if (this.filtered) {
        res = this.temp;
      } else {
        res = this.marts;
      }

      res = this.search();

      if (this.selectedRatings === "0") {
        return res;
      } else if (this.selectedRatings === "highLow") {

        alert("hi compare");
        res.forEach((mart) => {
          alert("res")
          alert(mart.name + " and ratings: " + mart.ratings);
        })
        //low to high
        
        res.sort((a, b) => b.ratings - a.ratings);
        res.forEach((mart) => {
          alert(mart.name + " and ratings: " + mart.ratings);
        })
        //res = map.sortBy(res, 'ratings');

      } else {
        alert("hi compare");

        res.forEach((mart) => {
          alert("res")
          alert(mart.name + " and ratings: " + mart.ratings);
        })
        
        res.sort((a, b) => a.ratings - b.ratings);
        res.forEach((mart) => {
          alert(mart.name + " and ratings: " + mart.ratings);
        })

        //res = map.sortBy(res, 'ratings').reverse();
      }
      //alert(this.selectedRatings + " is the ratings");
      //res = this.compareRatings();
      //res = this.orderByRatings(res);

      return res;
      
      
    }

    //computed ends 
  },

  mounted() {
    let script = document.createElement('script');
    script.setAttribute('src', "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js")
    document.head.appendChild(script);
    },

  created() {
    this.fetchItems();
  },



  components: {
    //  mart
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
     float: left;
     
    
  }

  
    #tab > p {
    width: 1000px;
    height: 70px;
    float: left;
    font-size: 50px;
    font-weight: bold;
    position: sticky;
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

    }

    #search {
    float:left;
    height: 80px;
    width: 1000px;

    left: 0px;
  }

  

  #mart {
    border: 1px solid white;
    overflow: hidden;
    
    width: 1500px;
    height: 280px;
  
    background-color: lightgray;
    }

    #martImg {
       width: 400px;
       height: 280px;

       max-width: 80%;
       max-height: 100%;
       
       
       float: left;
       border-width: 1px;
       object-fit: cover;

    }

    #martDetails > h1 {
    text-align: center;
    padding-left: 20px;
    padding: 20px;
    font-size: 50px;
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
      color: lightgray
    }

    #dropdown {
    font-size: 20px;
    }
</style>