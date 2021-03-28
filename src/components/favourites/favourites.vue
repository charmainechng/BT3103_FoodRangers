<template>
  <div>
    <Bar></Bar>
    <nav> 
   
    </nav>

      <div>
        <div id="tab">
          <h1> Favourite marts </h1>
          <router-link to="/search" exact id="search-tab"> Search </router-link>
          <p id="fav-tab"> Favourites </p>
        </div>

        <div id="result"> 
          <h1 id="numOfSearches"> {{filtersCount}} searches found </h1>
          <div class="mart">
          
            <ul>
              <li v-for="mart in marts" :key="mart.id">
                <div id="mart">
                  <img v-bind:src="mart[1].image" id="martImg" />
                  <div id="martDetails">
                    <h1 id="martLink" v-bind:mod ="mart[0]" v-on:click="route($event)">{{mart[1].name }}</h1>
                  
                    <h4>{{ mart[1].address }}</h4>
                  </div>
                  <div id="starRatings">
                    <starRatings  v-bind:rating = "mart[1].ratings"></starRatings>
                  </div>
                  <div id="likeButton">
                    <like v-bind:mart="mart"></like>
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
import starRatings from "../search/starRatings.vue";
import like from "./favButton.vue";
export default {
  components: {
    starRatings,
    like

  },

  data() {
    return {
      marts: []

    }
  },

   methods: {

    fetchItems:function(){ 
           db.collection('favMart').orderBy('name').get().then((querySnapShot)=>{
               let mart={} 
               querySnapShot.forEach(doc=>{
                    mart=[doc.id,doc.data()]
                    this.marts.push(mart)
                }) 
            }) 
    },
    route:function(event){

        const doc_id = event.target.getAttribute("mod");
        //this.$router.push({name: 'modify', params: {doc_id}});
        this.$router.push({path: `/mart/${doc_id}`});
    },
    //methods end here
  },

  created() {
    this.fetchItems();
  },

  computed: {
    filtersCount: function() {
      return this.marts.length;
    }

  }
}
</script>

<style scoped>

  #result {
    float:left;
  }
    #numOfSearches {
      font-size: 25px;
      padding-right: 100px;
      float: right;
    }

    #result {
      width: 1250px;
    }

    #likeButton {
      padding: 50px;

    }

</style>
