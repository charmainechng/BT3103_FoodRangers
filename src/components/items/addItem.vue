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
            <input type="text" placeholder="Enter food" name="food" required />
            <br />

            <input
              type="file"
              accept="image/*"
              @change="uploadImage($event)"
              id="file-input"
            />
            <br />

            <label for="text"><b> Category: </b></label>

            <select>
              <option value="0">Meat</option>
              <option value="1">Diary</option>
              <option value="2">Biscuit</option>
              <option value="3">Drinks</option>
            </select>
           
            <label for="text"> <b>Perishable?</b></label>
            <input
              type="radio"
              id="yes"
              name="option"
              value="yes"
              v-model="checkOption"
            />
            <label for="yes">Yes</label>
            <p v-if="checkOption == 'yes'">
              <label>Predicted Expiry Date: </label> <br />
            </p>

            <input
              type="radio"
              id="no"
              name="option"
              value="no"
              v-model="checkOption"
            />
            <label for="no">No</label>
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
export default {
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    uploadImage: function (e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    },
  },
};
</script>

<style scoped>
label {
  width: 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

input, select {
    width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}


</style>