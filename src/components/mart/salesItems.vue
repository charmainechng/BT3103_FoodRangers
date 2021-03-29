<template>
  <div>
    <div id="cat">
      
    </div>
    <div id="products">
      <h2>Products</h2>
      <ul id="listOfProducts">
        <li v-for="item in this.items" :key="item.index">
          <img v-bind:src="item[1].img">
          <div id="info">
            <h5>${{item[1]["price"].toFixed(2)}} (U.P. ${{ item[1]["usualPrice"].toFixed(2)}})</h5>
            {{ item[1]["name"] }} <br>
            <p v-if = "item[1].weight<1000">{{ item[1]["weight"] }}g</p>
            <p v-else>{{ item[1]["weight"]/1000 }}kg</p>
            <p v-show = "item[1].halal">Halal</p>
            Expires: {{item[1]["expiryDate"]}} <br>
            Qty left: {{item[1]["quantity"]}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import db from "../../firebase.js";
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    fetchItems: function() {
      db.collection('salesItems').get().then(snapshot => { 
        snapshot.docs.forEach(doc => { 
          this.items.push([doc.id, doc.data()]);
        });
      });
      console.log(this.items);
    }
  },
  created() {
    this.fetchItems()
  },
};
</script>

<style scoped>
#products {
  width: 75%;
  float: right;
}
#listOfProducts {
  width: 100%;
  padding-left: 15px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  width: 1100px;
  height: 500px;
}
li {
  width: 30%;
  text-align: center;
  padding: 15px 20px;
  border: 1px solid #222;
  margin: 10px;
}
h2 {
  float: left;
}
h5 {
  font-weight: bold;
}
p {
  margin-bottom: 0;
}
img {
  width: 135px;
  height: 135px;
}

#info {
  padding: 10px;
  padding-left: 45px;
  text-align: left;
}

</style>