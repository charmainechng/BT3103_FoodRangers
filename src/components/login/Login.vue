<template>
  <div>
    <img src="../../assets/earth.png" class="image1" />

    <form class="inner-block vertical-center" @submit.prevent="login">
      <h1><img src="../../assets/foodranger.png" class="image2" /></h1>

      <div class="form-group">
        <label> Email Address: </label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="email"
        />
      </div>

      <div class="form-group">
        <label> Password: </label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>

      <div class="social-icons">
        <ul>
          <li>
            <a href="#"><i class="fa fa-google"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/main.css'

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully logged in");
          this.$router.push("/home");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style scoped>
.image1 {
  width: 600px;
  height: 600px;
  position: fixed;
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