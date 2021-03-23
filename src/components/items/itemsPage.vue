<template>
  <div>
    <Bar></Bar>
    <p>Personal Items</p>
    <div class="vertical-align">
      <div class="items">
        <h1>All Items <button>+</button></h1>
        <div class="list" v-for="item in this.items" :key="item.id">
          <img v-bind:src="item[1].img" id="itemImg" />
          <div id=itemDetails>
            <h1>{{ item[1].name }}</h1>
            <h2>{{ item[1].state }}</h2>
            <h3>Expiry Date : {{item[1].expiry}}</h3>
          </div>
        </div>
      </div>

      <div class="expiring-soon">
        <h1>Expiring Soon</h1>
      </div>

      <div class="expired">
        <h1>Expired</h1>
      </div>
    </div>
  </div>
</template>




<script>
import moment from "moment";

import db from "../../firebase.js";

export default {
  data() {
    return {
      items: [],
      expiring: [],
      expired: [],
    };
  },

  methods: {
    fetchItems: function () {
      db.collection("items")
        .get()
        .then((querySnapShot) => {
          // let item = {};
          querySnapShot.forEach((doc) => {
            var edate = moment(doc.data().expiry);
            // var tdydate = new Date().toISOString().slice(0, 10);
            var tdydate = moment(Date.now());
            var duration = moment.duration(edate.diff(tdydate));
            //var days = Math.round(duration.asDays());
            let item = [doc.id, doc.data()];
            this.items.push(item);

            console.log(tdydate);
            console.log(doc.data().expiry);
            console.log(duration);
            //if it does not expire within 3 days, consider it not expiring soon
            if (edate - tdydate > 3) {
              this.items.push(item);

              // expires in <=3 days
            } else if (edate - tdydate <= 3) {
              this.expiring.push(item);
              // expired already
            } else if (edate < tdydate) {
              this.expired.push(item);
            }
          });
        });
    },
  },

  created() {
    this.fetchItems();
  },
};
</script>

<style scoped>
/* .itemDetails{
  text-align: left;
  justify-items: left;
  align-items: left;
} */

.list h1 {
  font-size: 20px;
  text-decoration: black;
  font-weight: bolder;
  text-align: left;
  padding-top: 20px;
}

.list h2 {
  font-size: 15px;
  text-decoration: black;
  text-align: left;
}

.list h3 {
  font-size: 15px;
  text-align: left;
}

p {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: left;
  padding-left: 50px;
  font-size: 40px;
}

.itemImg {
  border-radius: 30px;
  float: left;
}

.list {
  background: rgba(174, 214, 174, 0.911);
  border-radius: 50px;
  display: flex;
  margin-top: 30px;
  height: 190px;
  width: 90%;
  text-align: center;
}

* {
  box-sizing: border-box;
}

button {
  background-color: #ebf0eba9; /* Green */
  border: none;
  color: rgb(15, 15, 15);
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  border-radius: 50px;
}

.items {
  width: 45%;
  height: 129%;
  position: absolute;
  display: flex;
  background: #2e976cab;
  margin-top: 30px;
  margin-left: 60px;
  border-radius: 50px;
  transition: all 0.3s;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}

.expiring-soon {
  width: 40%;
  height: 60%;
  position: absolute;
  background: #f3ae53ab;
  margin-top: 30px;
  right: 50px;
  border-radius: 50px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}

.expired {
  width: 40%;
  height: 60%;
  position: absolute;
  background: #972e2eab;
  right: 50px;
  border-radius: 50px;
  transition: all 0.3s;
  margin-top: 500px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}

vertical-align {
  /* display: flex; */
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
</style>
