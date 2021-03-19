<template>
<div>
    <br>
    <h1> Shops Near Me </h1>
    
    {{this.marts}}
    <gmap-map
    :center="{lat:1.3521, lng:103.8198}"
    :zoom="11"
    map-type-id="terrain"
    style="width: 600px; height: 600px">

    <gmap-marker
        :key="index"
        v-for="(m, index) in markers">
    </gmap-marker>

    </gmap-map>

</div>
</template>

<script>
import db from "../../firebase.js";

export default {
    name: 'navigationMap',

    data() {
        return {
            marts: [],
            markers: []
        };
    },

    methods: {
    fetchItems: function() { 
           db.collection('marts').get().then((querySnapShot)=>{
               let mart = {} 
               querySnapShot.forEach(doc=>{
                    mart=doc.data();
                    this.marts.push(mart);
                }) 
            }) 
    },

    getMarkers: function() {
        for (let i = 0; i < this.marts.length; i++) {
            this.markers.push([this.marts[i].coordinates.latitude, this.marts[i].coordinates.longitde, this.marts[i].type]);
        }
    }

    }




}
</script>

<style scoped>
</style>
