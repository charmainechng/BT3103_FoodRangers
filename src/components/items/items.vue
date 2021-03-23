<template>
  <div>
    <itemsPage v-bind:items="items"></itemsPage>
    <!-- <itemsPage v-bind:expiring="expiring"></itemsPage>
      <itemsPage v-bind:expired="expired"></itemsPage> -->
  </div>
</template>

<script>
import moment from "moment";
import itemsPage from "./itemsPage.vue";
import db from "../../firebase.js";

export default {
  data() {
      retun {
          this.items = [],
           this.expiring = [], 
           this.expired = [],
      }
  },
  components: {
    itemsPage,
  },
  methods: {
    fetchItems: function () {
      db.collection("items")
        .get()
        .then((querySnapShot) => {
          let items = {};
          querySnapShot.forEach((doc) => {
            var edate = moment(doc.data().expiry).format("dd-mm-yyyy");
            var tdydate = moment(currentDate).format("dd-mm-yyyy");
            var item = [doc.id, doc.data()];

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
    this.fetchItems;
  },
};
</script>

<style scoped>
.list {
  background: rgb(173, 197, 173);
}
</style>