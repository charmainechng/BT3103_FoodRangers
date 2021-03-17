<template>
  <div>
    <img src="../../assets/earth.png" class="image1" />

    <form class="inner-block vertical-center" @submit.prevent="forgetPassword">
      <h1><img src="../../assets/foodranger.png" class="image2" /></h1>

      <!-- <h1> Forgot Password </h1> <br> -->
      <div class="form-group">
        <label> Email Address: </label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model= "email"
        />
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Reset Password
      </button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/main.css'

export default {
  data() {
    return {
    email : "",
    }
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
            alert('Check your registered email to reset the password!')

        }).catch((error) => {
          alert(error)
        })
    }
  }
}

</script>

<style scoped>
.image1 {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 100px;
  display: inline-block;
}

.image2 {
  width: 230px;
  height: 210px;
  position: flexi;
  /* //right: 200px; */
  /* display: inline-block; */
}

.div2 {
  background-color: aqua;
}
</style>