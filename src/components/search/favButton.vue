<template>


  <button id="like" v-on:click="favMart()">Like </button>
</template>



<script>
  import db from "../../firebase.js";
  export default {
    data() {
      return {
        likeToggle: false,
      }
    },

    props: {
      mart: {
        
      }
    },

    methods: {
      setToggle: function() {
        if (this.likeToggle == false) {
          this.likeToggle = true;
        } else {
          //if likeToggle = true, set to false
          this.likeToggle = false;
        }

      },
        addMart: function() {
          alert("mart is " + this.mart[1].name);
          //let doc_id = this.mart[0];

          let added = this.mart;


            //var lst=[];
            alert("mart id " + this.mart[0]);
          db.collection('favMart').doc(added[0]).set(added[1]);
            //alert(this.itemsSelected + " saved to database");
            
            /*for (let i = 0; i < this.marts.length; i++) {
              const curr_item = this.marts[i];
              const quantity = curr_item[1];
                //const price = curr_item[2];
              const name = curr_item[0];

              lst.push({name, quantity});
                
              }

              db.collection('favMart').add({
                  lst
                });*/

            
           },

        deleteMart: function() {
          let doc_id = this.mart[0];
          alert("doc id is " + doc_id);
          db.collection('favMart').doc(doc_id).delete();
        },

        favMart: function() {
          this.setToggle();
          if (this.likeToggle) {
            //if like == yes
            this.addMart();
          } else {
            //like == no
            this.deleteMart();
          }
        }
      }
    }


  </script>