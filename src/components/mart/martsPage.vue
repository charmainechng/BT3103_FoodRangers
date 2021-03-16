<template>
	<div>
		<ul>
			<li v-for="mart in marts" :key="mart.id"> 
				<mart v-bind:mart = "mart"></mart>

			</li>

		</ul>
	</div>

</template>



<script>
import mart from './mart.vue'
import database from "../../firebase.js"
export default {
	data() {
		return {
			marts: [],
        
		}
	},


	methods: {
        fetchItems:function(){ 
           database.collection('marts').get().then((querySnapShot)=>{
               let mart={} 
               querySnapShot.forEach(doc=>{
                    mart=doc.data() 
                    this.marts.push(mart)
                }) 
            }) 
        }
      
    },
    
    created(){
      this.fetchItems()    
    },

    components: {
        mart
    }
 
}

	
			
		
	

</script>