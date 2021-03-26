<template>

  <button id="like" v-on:click:"addMart()">Like </button>
</template>



<script>
  export default {
    props: {
      marts: {
        
      }
    }
    methods: {
        addMart: function() {
            var lst=[];
            alert(this.itemsSelected + " saved to database");
            for (let i = 0; i < this.itemsSelected.length; i++) {
              const curr_item = this.itemsSelected[i];
              const quantity = curr_item[1];
                //const price = curr_item[2];
              const name = curr_item[0];

              lst.push({name, quantity});

                
              }

              database.collection('favMart').add({
                  lst
                }).then(() => {location.reload()});

            
           }
    }
  }

  </script>