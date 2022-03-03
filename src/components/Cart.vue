<template>
<div>
    <div class="text">
        รายการสั่งซื้อ
    </div>
    <section class="gird-container">
         <div v-for="(each,i) in cart" :key="i">
            <div class="card">
                <img :src="require('../assets/' + each.food.image)" id="foodpicture" alt="Avatar" />
                <div class="detail">
                    <div class="description">
                        <h3>{{ each.food.title }}</h3>
                        <p>{{ each.food.description }}</p>
                        <h4>{{ each.food.price }} $</h4>
                    </div>
                    <div class="action">
                        <button @click="removeCart(each)">-</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="text">
                ราคารวมสินค้า {{ total }} บาท
            </div>
</div>
</template>

<script>
export default {
    props: ['cart'],

    computed: {
      total() {
            let total = 0
            for (let i = 0; i < this.cart.length; i++) {
                total += this.cart[i].food.price
            }
            return total
        },
    },

    methods: {
       removeCart(cartItem) {
            const cart = []
            for (let i = 0; i < this.cart.length; i++) {
                const current = this.cart[i]
                if (cartItem.id !== current.id) {
                    cart.push(current)
                }
            }
            this.cart = cart
        }
    }
}
</script>

<style scoped>
.gird-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin: 0 24px;
}

.text {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    margin: 10px 0;
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
    background-color: #000;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
}

.card .detail .description {
    flex: 1;
    flex-direction: column;
    margin: 0 0 0 20%;
}

.card .detail .action {
    margin: 2px 15px;
    align-items: center;
    justify-content: center;
}

.card:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 32px #CCC;
}

.card img {
    /* border-radius: 16px; */
    height: 240px;
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

.card p {
    margin-bottom: 5px;
}

.card button {
    width: 55px;
    height: 55px;
    font-size: 40px;
    background-color: #783833;
    color: #fff;
    border-radius: 50%;
    border: 2px solid white;
    margin-top: 5px;
}

.card button:hover {
    background-color: tomato;
    color: #000;
    cursor: pointer;
}
</style>
