<template> 
	<div id="mart">
		
		<div>
			<img v-bind:src="mart.image" id="martImg">
			<div id="martDetails"> 
				<h1>{{mart.name}}</h1>
				<h1> {{mart.address}}</h1>
		</div>
	</div>
		

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
    border: 1px solid white;
    overflow: hidden;
    display: table;
    width: 1000px;
    float: left;
    background-color: lightgray;
    }

    #martImg {
       width:30%;
       float: left;
       border-width: 1px;
    }

    #martDetails {
		text-align: center;
		padding-left: 20px;
		padding: 20px;

    }

</style>