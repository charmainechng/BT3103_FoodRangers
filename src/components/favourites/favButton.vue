<template>


  <button id="like" v-on:click="deleteMart(); heartit()" :class="['heart-btn', {liked: this.likeToggle}]"> 
     <svg class="heart heart-icon" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
  </svg> 
</button>
</template>



<script>
  import db from "../../firebase.js";
  export default {
    data() {
      return {
        //all the marts in fav are liked 
        likeToggle: true,
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
      deleteMart: function() {
        this.setToggle();
        let doc_id = this.mart[0];
        alert("doc id is " + doc_id);
        db.collection('favMart').doc(doc_id).delete().then( () => {location.reload()});
      },
      heartit: function (e) {
        const hearts = document.createElement('div');
        hearts.innerHTML = '<svg class="heart heart-pop one" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop two" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop three" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop four" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop five" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop six" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop seven" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop eight" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop nine" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>';
        e.target.appendChild(hearts);
        this.liked = !this.liked;
        setTimeout(function(){
          e.target.removeChild(hearts);
        }, 3000);
        if (this.likeToggle) {
          hearts.style.fill = "#ee3529";
        }
      },
      likeDisplay: function() {
      }
      //methods end here
      },
      components: {
      },
      mounted(){
  document.body.addEventListener('mousedown', function() {
    document.body.classList.add('using-mouse');
  });
  document.body.addEventListener('keydown', function() {
    document.body.classList.remove('using-mouse');
  });
 }
    }
  </script>

<style>
  :focus {
  outline: #08f auto 2px;
}

body.using-mouse :focus {
  outline: none;
}

#app {
  padding: 0;
  text-align: center;

}
.heart {
  width: 20px;
  fill: gray;
  transition: fill 0.5s, transform 0.5s;
  pointer-events: none;
}
.heart-btn {
  position: relative;
  background: transparent;
  border-radius: 50%;
  background-color: white;
  padding: 10px 10px 8px 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25), 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  border: 0;
}
.heart-btn.liked .heart:active {
  fill: #ee3529;
}
.heart-btn.liked .heart-icon {
  transform: scale(1.2);
}
.heart-btn.liked .heart-pop {
  animation-direction: normal;
}
.heart-btn:active {
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
.heart-pop {
  position: absolute;
  width: 30%;
  opacity: 0;
  left: 0;
  animation: pop 1s ease forwards reverse;
}
.heart-pop.one {
  left: 1%;
  transform: rotate(-10deg);
  animation-delay: 0.45;
}
.heart-pop.two {
  left: 15%;
  transform: rotate(8deg);
  animation-delay: 0.25s;
}
.heart-pop.three {
  left: 30%;
  transform: rotate(-5deg);
  animation-delay: 0;
}
.heart-pop.four {
  left: 50%;
  transform: rotate(-8deg);
  animation-delay: 0.3s;
}
.heart-pop.five {
  left: 60%;
  transform: rotate(-10deg);
  animation-delay: 0.9s;
}
.heart-pop.six {
  left: 70%;
  transform: rotate(-8deg);
  animation-delay: 0.2;
}
.heart-pop.seven {
  left: 85%;
  transform: rotate(6deg);
  animation-delay: 0.35s;
}
.heart-pop.eight {
  left: 90%;
  transform: rotate(-4deg);
  animation-delay: 0.5s;
}
.heart-pop.nine {
  left: 95%;
  transform: rotate(8deg);
  animation-delay: 0.2s;
}
@keyframes pop {
  0% {
    left: calc(50% - 7px);
    top: 10px;
  }
  20% {
    opacity: 1;
  }
  80% {
    top: -20px;
  }
  100% {
    opacity: 0;
  }
}
</style>