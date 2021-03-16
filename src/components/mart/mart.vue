<template> 
	<div id="mart">
		<h1>mart</h1>
		<h1>{{mart.name}}</h1>
		<img v-bind:src="mart.image">

	</div>
</template>


<script>

	export default {
		data() {

		},
        
        props: {
           mart: {}
        }

	}

</script>

<style>
    #mart {
    width: 100%;
    max-width: 70%;
    margin: 0px;
    padding: 0 5px;
    box-sizing: border-box;
    }

</style>