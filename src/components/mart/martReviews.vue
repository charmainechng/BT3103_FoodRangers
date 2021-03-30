<template>
<div>
    <br>
    <p style="font-weight: bold"> Reviews </p>

    <!--
    {{this.reviews}}
    <div :key="index" v-for="(m, index) in reviews">
        {{m[0]}}
    </div>
    -->
    <div>
    <ul>
        <li v-for="(key, value) in this.mart.reviews" :key="key">
            {{value}}
            <br>
            {{key}}
        </li>
    </ul>
    </div>
</div>
</template>

<script>
import db from "../../firebase.js";

export default {
    name: 'martReviews',

    data() {
        return {
            mart: [],
        }
    },

    props: {
        id: {
            type: String
        }
    },

    methods: {
        getReviews: function() {
            db.collection('marts').doc(this.id).get().then(snapshot => { 
            this.mart = snapshot.data();
            });
        },
    },

    created() {
        this.getReviews();
    }
}
</script>

<style scoped>
li {
    margin: 20px; 
}
</style>