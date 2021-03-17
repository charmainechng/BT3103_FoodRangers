<template>
	<div id="main">

		<div id="search-bar">
			<input id="search" class="form-control" type="text" v-model="searchQuery" 
			placeholder="Search Supermarket Name" />

		</div>


		
		<div class="mart">
			<ul>
				<li v-for="mart in filtered" :key="mart.id"> 
					<div id="mart">
					
						<img v-bind:src="mart.image" id="martImg">
						<div id="martDetails"> 
							<h1>{{mart.name}}</h1>
							<h1> {{mart.address}}</h1>

						</div>

					</div>
	
				</li>

			</ul>
	
		</div>
	</div>

</template>



<script>
//import mart from './mart.vue'
import db from "../../firebase.js"
export default {
	data() {
		return {
			marts: [],
			searchQuery:''
        
		}
	},


	methods: {
        fetchItems:function(){ 
           db.collection('marts').get().then((querySnapShot)=>{
               let mart={} 
               querySnapShot.forEach(doc=>{
                    mart=doc.data() 
                    this.marts.push(mart)
                }) 
            }) 
        },


    },

    computed: {
        filtered: function() {

            let filter = [];
			if (this.searchQuery) {
				let lowerSearch = this.searchQuery.toLowerCase();
				//alert("there's search" + this.searchQuery);
				this.marts.forEach((mart) => {
					let lower = mart.name.toLowerCase();
					if (lower.includes(lowerSearch)) {
						filter.push(mart);
					}
				})
			return filter;

				
			} else {
				//alert("no search")
				return this.marts;
            }
			//let filteredMarts = [];
			
			
		}
    },

    mounted() {

    },
    
    created(){
      this.fetchItems()    
    },

    components: {
      //  mart
    }
 
}



</script>

<style>
   ul {
  
    list-style-type: none;

  },

  #search {
    float:left;
  }

  #main {
     float: left;
     left: 100px;
     position: absolute;
  }

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
