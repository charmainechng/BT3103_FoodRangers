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
        <li v-for="review in this.reviews" :key="review.id">
            {{review}}
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
            reviews: [],
        }
    },

    methods: {
    getReviews: function() {
        db.collection('marts').get().then((querySnapShot)=>{
            let review = []
            querySnapShot.forEach(doc=>{
                let entry = doc.data();
                review = [doc.id, entry.reviews]
                this.reviews.push(review)
            })
        })   
    },
    },

    created() {
        this.getReviews();
    }
}
</script>

<style scoped>

</style>