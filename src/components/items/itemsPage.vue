<template>
  <div>
    <Bar></Bar>
    <p class="title">Personal Items</p>
    <div class="vertical-align">
      <div class="items">
        <h1>All Items <button>+</button></h1>
        <div class="list" v-for="item in this.items" :key="item.id">
          <img v-bind:src="item[1].img" id="itemImg" />
          <div id="itemDetails">
            <h1>{{ item[1].name }}</h1>
            <p> <b> State: </b> {{ item[1].state }}</p> 
            <p> <b>Expiry Date: </b>{{ item[1].expiry }}</p>
            
            <h3> <b>{{ item[1].numDaysLeft }}</b> more days</h3>
         
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
            var edate = moment(doc.data().expiry, "DD-MM-YYYY");
            var tdydate = moment();
            var days = edate.diff(tdydate, "days");
            let id = doc.id;
            let item_dict = doc.data();
            item_dict["numDaysLeft"] = days;

            //if it does not expire within 3 days, consider it not expiring soon
            if (edate - tdydate > 3) {
              doc.data["numDaysLeft"] = days;
              this.items.push([id, item_dict]);

              // expires in <=3 days
            } else if (edate - tdydate <= 3) {
              this.items.push([id, item_dict]);

              // expired already
            } else if (edate < tdydate) {
              this.items.push([id, item_dict]);
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

.list p {
  font-size: 15px;
  text-decoration: black;
  text-align: left;
}

.list h3 {
  font-size: 15px;
  color: crimson;
  text-align: right;
}


.title  {
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
