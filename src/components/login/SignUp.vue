<template>
  <div>

    <img src="../../assets/earth.png" class="image1" />
    <form class="inner-block vertical-center">
      <h1><img src="../../assets/foodranger.png" class="image2" /></h1>

      <div class="form-group">
        <label> Email Address: </label>
        <input type="email" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label> Password: </label>
        <input type="password" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label> Confirm Password: </label>
        <input type="password" class="form-control form-control-lg" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign Up
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        Already registered?
        <router-link to="/login" >sign in</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
	background: var(--dark-color-a);
	color: #fff;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.image1 {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 100px;
  display: inline-block;
}

.image2 {
  width: 210px;
  height: 200px;
  position: flexi;

}

.div2 {
  background-color: aqua;
}
</style>