<template>
  <div>
    <Bar></Bar>

    <p class="title">Personal Items</p>
    <div class="vertical-align">
      <div class="items scroll">
        <h1>All Items</h1>
        <button
          class="button btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#myModal"
        >
          +
        </button>
        <addItem></addItem>

        <ul>
          <li v-for="item in this.items" :key="item.id">
            <div id="list">
              <img v-bind:src="item[1].img" id="itemImg" />
              <div id="itemDetails">
                <p>
                  <b>{{ item[1].name }} </b>
                </p>
                <p>State: {{ item[1].state }}</p>
                <p>Expiry Date: {{ item[1].expiry }}</p>

                <h3>
                  <b>{{ item[1].numDaysLeft }}</b> more days
                </h3>
              </div>
            </div>
          </li>
        </ul>
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
import addItem from "./addItem.vue";
export default {
  data() {
    return {
      items: [],
      expiring: [],
      expired: [],
    };
  },
  components: {
    addItem,
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
.scroll {
  margin: 4px, 4px;
  padding: 4px;
  width: 500px;
  height: 110px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  margin: 10px;
}

p {
  font-size: 20px;
  text-decoration: black;
  text-align: left;
}

h3 {
  font-size: 23px;
  color: crimson;
  text-align: right;
  font-family: Arial, Helvetica, sans-serif;
}

.title {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: left;
  padding-left: 50px;
  font-size: 40px;
}

#itemImg {
  width: auto;
  max-width: 200px;
  height: auto;
  max-height: 200px;
  left: 20px;
  float: left;
  border-width: 1px;
  overflow: hidden;
}

#itemDetails {
  align-items: center;
  text-align: center;
  padding: 25px;
  color: #192027;
  float: right;
}

#list {
  background: rgba(180, 212, 180, 0.911);
  border-radius: 50px;
  display: flex;
  width: auto;
  height: auto;
  border: 1.8px solid rgb(3, 3, 3);
  overflow: hidden;
}

.button {
  position: absolute;
  top: 10px;
  border-radius: 30px;
  right: 20px;
  z-index: 2;
  border: none;
  top: 2px;
  height: 58px;
  cursor: pointer;
  width: 55px;
  color: white;
  font-size: 40px;
  text-align: center;
  color: black;
  background-color: #ebf0eba9;
  transform: translateX(2px);
}

.items {
  width: 45%;
  height: 129%;
  position: absolute;
  display: flex;
  background: #2e976bcb;
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





