<template>
<div class="background">
    <div>
        <img src="./assets/art3.png" class="logo">
    </div>
    <NavigationBar />
    <router-view />
    <div class="content">
        <div v-if="tab === 3">
            <Cart :cart="cart" />
        </div>
    </div>
</div>
</template>

<script>
import Cart from './components/Cart.vue'
import NavigationBar from './components/NavigationBar.vue'

export default {
    components: {
        Cart,
        NavigationBar
    },
    data() {
        return {
            tab: 0,
            cart: [],
            id: 1,
            
        }
    },

    computed: {
        foodList() {
            const recommens = []
            const rest = []
            for (let i = 0; i < this.foods.length; i++) {
                if (i <= 1) {
                    recommens.push(this.foods[i])
                } else {
                    rest.push(this.foods[i])
                }
            }
            return {
                recommens: recommens,
                rest: rest
            }
        },
    },

    methods: {
        changePage(page) {
            this.tab = page
        },
        addMore(food) {
            alert('เพิ่มรายการสำเร็จ')
            this.cart.push({
                id: this.id,
                food: food
            })
            this.id++
            console.log(this.cart);
            console.log('id', this.id);
            console.log(food);
        },
       
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

body {
    background-image: url('assets/foodbg5.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.background {
    width: 100%;
    height: 100%;
    margin: 10px 0;
    text-align: center;
}

.logo {
    height: 200px;
    border: 5px solid #7b3833;
    border-radius: 50%;
}

.topNav {
    /* background-color: #783833; */
    padding: 0.25cm 0;
    margin: 30px 250px 20px;
}

.topnavButton {
    color: #D7CAC5;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 18px;
    border-radius: 50px;
    margin-left: 10px;
    background-color: #783833;
    width: 150px;
    border: 3px solid #aaa;
}

.topnavButton:hover {
    background-color: #D7CAC5;
    color: #783833;
}

.activeButton {
    background-color: #D7CAC5;
    color: #783833;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 18px;
    border-radius: 50px;
    margin-left: 10px;
    width: 150px;
    border: 3px solid #aaa;
}

.content {
    display: flex;
    flex-direction: column;
}

.content .menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.card2 {
    border-radius: 10px;
    padding: 5px;
    border: 3px solid #783833;
    margin: 6px;
    color: #D7CAC5;
}

.card2 img {
    height: 240px;
    width: 240px;
}

.card2 p {
    margin-bottom: 5px;
}
</style>
