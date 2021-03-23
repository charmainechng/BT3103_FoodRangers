<template>
  <div>
    <Bar></Bar>
    <p>Personal Items</p>
    <div class="vertical-align">
      <div class="items">
        <h1>All Items
          <button>+</button>
        </h1>
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
export default {};
</script>

<style scoped>
p {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: left;
  padding-left: 50px;
  font-size: 40px;
}
* {
  box-sizing: border-box;
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
  display: flex;
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
