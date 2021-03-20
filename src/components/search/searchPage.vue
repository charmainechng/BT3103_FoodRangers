<template>
  <div>
    <Bar></Bar>
    <div id="main">

      <div id="tab">
        <h1> Marts in Singapore </h1>
        <p id="search-tab">Search</p>  
        <p id="fav-tab"> Favourites </p>
      </div>

      <div id="filters">
        <div id="search-div">
        <input id="search"
          class="form-control"
          type="text" v-model="searchQuery"
          placeholder="Search Supermarket Name"/>
        </div>
      

      
        <div id="dropdown-all">
          <div id="ratings"> 
          <p>Ratings</p>
            <select v-model="selectedRatings" id="dropdown">

              <option value="lowHigh">Low to High</option>
              <option  value="highLow">High to Low</option>
            </select>
          </div>
          <div id="type">
            <p> Type </p>

          <select v-model="selectedType" id="dropdown">
            <option  value="0">All</option>
            <option value="ugly">Discount - Ugly Produce</option>
            <option  value="expiring">Discount - Expiring Food</option>
            <option  value="byob">Bring your own bag</option>
          </select>
        </div>
      </div>

      </div>
      <div id="result"> 
        <h1 id="numOfSearches"> {{filtersCount}} searches found </h1>
        <div class="mart">
          
          <ul>
            <li v-for="mart in filters" :key="mart.id">
              <div id="mart">
                <img v-bind:src="mart[1].image" id="martImg" />
                <div id="martDetails">
                  <h1 v-bind:mod ="mart[0]" v-on:click="route($event)">{{mart[1].name }}</h1>
                  <h1>Ratings: (for bug fixes) {{mart[1].ratings}} </h1>
                  <h1>{{ mart[1].address }}</h1>
                </div>
              </div>
            </li>
          </ul>
        
      </div>
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
                    mart=[doc.id,doc.data()]
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
        
        res.sort((a, b) => b[1].ratings - a[1].ratings);
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
        
        res.sort((a, b) => a[1].ratings - b[1].ratings);
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
          let lower = mart[1].name.toLowerCase();
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
        mart[1].type.forEach((typeCate) =>  {
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

    },
    route:function(event){

        const doc_id = event.target.getAttribute("mod");
        //this.$router.push({name: 'modify', params: {doc_id}});
        this.$router.push({path: `/mart/${doc_id}`});
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