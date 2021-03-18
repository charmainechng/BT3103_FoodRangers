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

      <div id="dropdown-all">
      <h1>Ratings</h1>
        <select v-model="selectedRatings" class="form-control sl">
                    <option value="lowHigh">Low to High</option>
                    <option  value="highLow">High to Low</option>
        </select>

        <h1> Type </h1>

        <select v-model="selectedType" class="form-control sl">
                    <option  value="0">All</option>
                    <option value="ugly">Discount - Ugly Produce</option>
                    <option  value="expiring">Discount - Expiring Food</option>
                    <option  value="byob">Bring your own bag</option>
        </select>

      </div>
      <h1 id="numOfSearches"> {{filtersCount}} searches found </h1>
        <div class="mart">
          <ul>
            <li v-for="mart in filters" :key="mart.id">
              <div id="mart">
                <img v-bind:src="mart.image" id="martImg" />
                <div id="martDetails">
                  <h1>{{ mart.name }}</h1>
                  <h1>Ratings: (for bug fixes) {{mart.ratings}} </h1>
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

    compareRatings: function(res) {
      if (this.selectedRatings === "0") {
        return res;
      } else if (this.selectedRatings === "highLow") {
        /*res.forEach((mart) => {
          alert("res")
          alert(mart.name + " and ratings: " + mart.ratings);
        })*/
        //low to high
        
        res.sort((a, b) => b.ratings - a.ratings);
        return res;
        /*res.forEach((mart) => {
          alert(mart.name + " and ratings: " + mart.ratings);
        })*/
        //res = map.sortBy(res, 'ratings');

      } else {

        /*res.forEach((mart) => {
          alert("res")
          alert(mart.name + " and ratings: " + mart.ratings);
        })*/
        
        res.sort((a, b) => a.ratings - b.ratings);
        return res;
        /*res.forEach((mart) => {
          alert(mart.name + " and ratings: " + mart.ratings);
        })*/
      }
      
    },


      //toggles from false -> true, or from true -> false
    setFiltered: function() {
      if (this.filtered == false) {
        this.filtered = true;
      } else {
        this.filtered = false;
      }
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

    type: function(res) {
      let type = []
      if (this.selectedType === "0") {return res}

      res.forEach((mart) => {
        //alert(mart.name + " in type");
        mart.type.forEach((typeCate) =>  {
            let lower = typeCate.toLowerCase();
            //alert("lower is " + lower);
            if (this.selectedType === "ugly") {
              if (lower.includes("discount - ugly produce")) {
                //alert(mart.name + " and type is: " + mart.type)
                type.push(mart);
                return;
              }            
            } else if (this.selectedType === "byob") {
              if (lower.includes("bring your own bag")) {
                //alert(mart.name + " and type is: " + mart.type)
                type.push(mart);
                return;
              }
            
            } else if (this.selectedType === "expiring"){
              if (lower.includes("discount - food expiring soon")) {
                //alert(mart.name + " and type is: " + mart.type)
                type.push(mart);
                return;
              }
            }


        })
      })

      /*type.forEach((mart) => {
        alert("marts in type are " + mart.name);
      })*/
      return type;

    }
    //methods end here
  },

  computed: {
    filters: function() {
      var res = []
      //if filtered is true, use temp
      if (this.filtered) {
        res = this.temp;
      } else {
        res = this.marts;
      }

      res = this.search();
      
      
      res = this.compareRatings(res);
      res = this.type(res);

      return res;
      
      
    },

    filtersCount: function() {
      return this.filters.length;
    }

    //computed ends 
  },


  mounted() {
    
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
      color: lightgray
    }

    #dropdown {
    font-size: 30px;
    }

    #dropdown-all > h1 {
      float: left;
    }

    #numOfSearches {
      float: right;

      font-size: 30px;
      padding-right: 100px;
    }
</style>