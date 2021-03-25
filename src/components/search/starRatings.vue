<template>
	<div>
		<h2>Read Only Stars</h2>
		<starRating :rating="rating" :read-only="true" :increment="0.1" :fixed-points="1"></starRating>
	</div>
 

  </template>

  <script>
	import StarRating from 'vue-star-rating';
	export default {
		methods: {
    setRating: function(rating) {
      this.rating = "You have Selected: " + rating + " stars";
    },
    showCurrentRating: function(rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
    },
    setCurrentSelectedRating: function(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    }
  },
    
    data() {
      return {
		//rating: "No Rating Selected",
		currentRating: "No Rating",
		currentSelectedRating: "No Current Rating",
		boundRating: 3
      }
    
     },

     components: {
		StarRating
     },

     props: {
        rating: {
		}
     }
  }

  </script>