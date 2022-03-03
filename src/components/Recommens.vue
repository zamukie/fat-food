<template>
<div>
    <div class="text">
        Recommens
    </div>
    <div>
        <div class="horizontal">
            <div v-for="(food, i) in foods" :key="i">
                <div class="card">
                    <img :src="require('../assets/' + food.image)" id="foodpicture" alt="Avatar" />
                    <div class="detail">
                        <div class="description">
                            <h3> {{ food.title }} </h3>
                            <p> {{ food.description }} </p>
                            <h4> {{ food.price }} $</h4>
                        </div>
                        <div class="action">
                            <button>+</button>
                        </div>
                    </div>
                    
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

.text {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 10px;
}

.card {
    box-shadow: 0px 0px 12px #000;
    border-radius: 16px;
    padding: 5px;
    border: 3px solid #783833;
    margin: 6px;
    color: #D7CAC5;
}

.card .detail {
    display: flex;
    flex-direction: row;
}

.card .detail .description {
    flex: 1;
    flex-direction: column;
    margin: 0 0 0 15%;
}

.card .detail .action {
    margin: 0 20px;
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
    width: 60px;
    height: 60px;
    font-size: 40px;
    background-color: #783833;
    color: #fff;
    border-radius: 50%;
    border: 2px solid white;
    margin-top: 5px;
}

.card button:hover {
    background-color: aquamarine;
    color: #000;
    cursor: pointer;
}
</style>
