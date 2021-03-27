<template>
  <div>
    <Bar></Bar>
    <nav>
      <img v-bind:src="mart.image">
      <div class="mart">
        <p>{{this.mart.name}} </p>
        {{this.mart.address}} <br>
      </div>
      <ul id="types">
        <p>Green Initiatives:</p>
        <li v-for = "(value, key) in this.mart.type" :key="key">
          {{value}}
        </li>
      </ul>
    </nav>
    <div id="content">
      <p id="rating">Green Rating: <span v-text="this.mart.ratings"></span></p>
      <h4>Categories</h4>
    </div>
  </div>
</template>

<script>
import db from "../../firebase.js";
export default {
  data() {
    return {
      mart: [],
    }
  },
  props: {
    id: {
      type: String,
    }
  },
  methods: {
    fetchItems: function() {
      db.collection('marts').doc(this.id).get().then(snapshot => { 
        this.mart = snapshot.data();
      });
    },
    getImage: function() {
      return this.mart.image;
    }
  },
  created() {
    this.fetchItems()
  },
};
</script>

<style scoped>
nav {
  float: left;
  width: 25%;
  background: #a2c5c2d2;
  /* padding-right: 20px; */
  height: 100vh;
  padding: 10px;
}
img {
  width: 270px;
  border-radius: 20px;
  margin: 20px;
}
.mart {
  margin-left: 40px;
  margin-right: 40px;
  text-align: left;
}
.mart:after {
  content:"";
  display: inline-block;
  height: 0.5em;
  vertical-align: bottom;
  width: 100%;
  border-top: 1px solid black;
}
p {
  font-size: 13pt;
  font-weight: bold;
}
#types {
  margin: 20px;
  text-align: left;
}
ul li:before {
 content: '✓'; 
}
li {
  margin-left: 20px;
}
#content {
  padding: 20px;
}
span {
  font-size: 30pt;
  color: red;
}
#rating {
  float: right;
}
</style>