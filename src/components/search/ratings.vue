<template>
	<div>
      
</template>

<script>
	export default {
		props: {
			'value': null
		},

		data: {
			start: '★'

		},

		methods: {
			addScore :function(score, $domElement) {
    var starWidth = "<style>.stars-container:after { width: " + score + "%} </style>";
    $("<span class='stars-container'>")
      .text("★★★★★")
      .append($(starWidth))
      .appendTo($domElement);
  }
			//end of methods
		}
	}

</script>

<style>

.stars-container {
  position: relative;
  display: inline-block;
  color: transparent;
}

.stars-container:before {
  position: absolute;
  top: 0;
  left: 0;
  content: '★★★★★';
  color: lightgray;
}
.stars-container:after {
  position: absolute;
  top: 0;
  left: 0;
  content: '★★★★★';
  color: gold;
  overflow: hidden;
}
</style>