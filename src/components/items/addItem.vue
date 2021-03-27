<template>
  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Items</h4>
          <button type="button" class="close" data-dismiss="modal">
            &times;
          </button>
        </div>
        <div class="modal-body">
          <form>
            <label for="name"><b>Food Item: </b></label>
            <input
              type="text"
              placeholder="Enter food"
              name="food"
              required
              v-model="foodname"
            />
            <br />

            <input
              @click="click1"
              type="file"
              accept="image/*"
              @change="previewImage"
              id="file-input"
            />
            <br />

            <div v-if="img != null">
              <img class="preview" height="200" width="200" :src="img" />
              <br />
            </div>

            <label for="text"><b> Category: </b></label>

            <select v-model="category">
              <option value="meat">Meat</option>
              <option value="diary">Diary</option>
              <option value="biscuit">Biscuit</option>
              <option value="drink">Drinks</option>
            </select>

            <label for="text"><b> State: </b></label>

            <select v-model="state">
              <option value="opened">Opened</option>
              <option value="unopened">Unopened</option>
            </select>
            <label for="text"> <b>Perishable?</b></label>
            <select v-model="perishable">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <p v-if="perishable == 'yes'">
              <label for="text">
                <b>Predicted Expiry Date: {{ this.predexpiry }} </b>
              </label>
            </p>
            <p v-if="perishable == 'no'">
              <label><b>Expiry Date: </b></label>
              <input type="date" v-model="expirydate" />
            </p>

            <label for="text"> <b>Amount saved ($):</b></label>
            <input type="text" value="$ " />
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import firebase from "../../firebase.js";
export default {
  data() {
    return {
      dict: {},
      foodname: "",
      img: null,
      category: "",
      state: "",
      perishable: "",
      predexpiry: "",
      expirydate: "",
      money: "",
    };
  },

  methods: {
    addItem() {
      this.dict['name']
    },
    click1() {
      this.$refs.input1.click();
    },

    previewImage(e) {
      const file = e.target.files[0];
      this.img = URL.createObjectURL(file);
    },
  },
};
</script>

<style scoped>
label {
  width: 200px;
  display: flex;
  flex-flow: row wrap;
  align-items: left;
}

input,
select {
  width: 100%;
  padding: 11px;
  margin: 2px 0 10px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  color: black;
}
</style>