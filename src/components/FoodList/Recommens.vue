<template>
<div>
    <div>
        <h1>Recommens</h1>
        <div class="horizontal">
            <div v-for="(food, i) in foods" :key="i">
                <div class="card">
                    <img :src="require('../../assets/' + food.image)" id="foodpicture" alt="Avatar" />
                    <h3>{{ food.title }}</h3>
                    <p>{{ food.description }}</p>
                    <h4>{{ food.price }} $</h4>
                    <button @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['foods'],

    methods: {
        addToCart(food) {
            this.$emit('add', food)
        },
    }
}
</script>

<style scoped>
.horizontal {

    display: flex;
    flex-direction: row;
}

.card {
    box-shadow: 0px 0px 12px #000;
    border-radius: 16px;
    padding: 5px;
    border: 3px solid #783833;
    margin: 6px;
    color: #D7CAC5;
}

.card:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 32px #CCC;
}

.card img {
    /* border-radius: 16px; */
    height: 240px;
    width: 520px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

.card p {
    margin-bottom: 5px;
}

.card button {
    width: 100%;
    font-size: 20px;
    background-color: aquamarine;
    border-radius: 50px;
    border: 2px solid white;
    margin-top: 5px;
}

.card button:hover {
    background-color: brown;
    color: white;
    cursor: pointer;
}
</style>
