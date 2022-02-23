<template>
<div class="background">
    <div>
        <img src="./assets/art3.png" class="logo">
    </div>
    <div class="topNav">
        <button :class="tab === 1 ? 'activeButton' : 'topnavButton'" @click="changePage(1)">อาหาร</button>
        <button :class="tab === 2 ? 'activeButton' : 'topnavButton'" @click="changePage(2)">สมาชิก</button>
        <button :class="tab === 3 ? 'activeButton' : 'topnavButton'" @click="changePage(3)">รายการสั่งซื้อ</button>
    </div>
    <div class="content">
        <div v-if="tab === 1">
            <div class="menu">
                <Recommens @add="addMore" :foods="foodList.recommens" />
            </div>
            <div>
                <Other :foods="foodList.rest" />
            </div>
        </div>
        <div v-if="tab === 2">
            <div>
                <form @submit.prevent="submit">
                    <div class="inputContain">
                        <div class="title">Email</div>
                        <input class="input" type="email" v-model="user.email" required>
                    </div>
                    <div class="inputContain">
                        <div class="title">Password</div>
                        <input class="input" type="password" v-model="user.password" required>
                    </div>
                    <button class="button" type="button">Register</button>
                    <button class="button" type="submit">Submit</button>
                </form>
            </div>
        </div>
        <div v-if="tab === 3">
            <h1>รายการสั่งซื้อ</h1>
            <div class="card2" v-for="(each,i) in cart" :key="i">
                <img :src="require('./assets/' + each.food.image)">
                <h2>{{ each.food.title }}</h2>
                <h4>{{ each.food.description }}</h4>
                <h4>{{ each.food.price }}</h4>
                <button class="addButton" @click="removeCart(each)">-</button>
            </div>
            <div>
                <h2>ราคารวมสินค้า {{ total }} บาท </h2>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Recommens from './components/FoodList/Recommens.vue'
import Other from './components/FoodList/Other.vue'

export default {
    components: {
        Recommens,
        Other
    },
    data() {
        return {
            tab: 0,
            user: {
                email: '',
                password: ''
            },
            cart: [],
            id: 1,
            foods: [{
                    image: 'kapraw.jpg',
                    title: 'ข้าวกะเพรา',
                    description: 'ข้าวกะเพราหมูสับ',
                    price: 200
                },
                {
                    image: 'radna.jpg',
                    title: 'ราดหน้า',
                    description: 'ราดหน้าทะเล',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
                {
                    image: 'padthai.jpg',
                    title: 'ผัดไทย',
                    description: 'ผัดไทยโบราณ',
                    price: 200
                },
            ]
        }
    },

    computed: {
        total() {
            let total = 0
            for (let i = 0; i < this.cart.length; i++) {
                total += this.cart[i].food.price
            }
            return total
        },
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
            console.log(this.id);
            console.log(PointerEvent)        },
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

.inputContain {
    margin-bottom: 8px;
}

.button {
    background-color: black;
    color: antiquewhite;
    margin-right: 3px;
    width: 150px;
    height: 50px;
    border: 2px solid burlywood;
    border-radius: 20px;
}

.button:hover {
    background-color: burlywood;
    color: #000;
    border: 2px solid #000;
}

.title {
    font-size: 25px;
    font-family: sans-serif;
    color: white;
}

.input {
    width: 300px;
    height: 30px;
    font-size: 25px;
    font-family: sans-serif;
    color: crimson;
    border-radius: 20px;
}
</style>
