<template>
  <div class ="body1">
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
import './login.css'

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
  width: 640px;
  height: 630px;
  position:absolute;
  left: 100px;
  display: inline-block;
  padding-top: 40px;
}

.image2 {
  width: 250px;
  height: 250px;
  position: flexi;
  /* //right: 200px; */
  /* display: inline-block; */
}

.div2 {
  background-color: aqua;
}
</style>