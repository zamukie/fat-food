<template>
<div class="background">
    <div>
        <img src="./assets/art3.png" class="logo">
    </div>
    <div class="topNav">
        <button @click="changePage(1)">อาหาร</button>
        <button @click="changePage(2)">สมาชิก</button>
        <button @click="changePage(3)">รายการสั่งซื้อ</button>
    </div>
    <div class="content">
        <div v-if="tab === 1">
            <div class="menu">
                <div class="card">
                    <img :src="require('./assets/' + krapraw.image)" id="foodpicture" alt="Avatar" />
                    <div>
                        <h3>{{ krapraw.title }}</h3>
                        <p>{{ krapraw.description }}</p>
                    </div>
                    <h3>{{ krapraw.price }} $</h3>
                    <button @click="addToCart(krapraw)" class="addButton">Add to cart</button>
                </div>
                <div class="card">
                    <img :src="require('./assets/' + radna.image)" id="foodpicture" alt="Avatar" />
                    <div>
                        <h3>{{ radna.title }}</h3>
                        <p>{{ radna.description }}</p>
                    </div>
                    <h3>{{ radna.price }} $</h3>
                    <button @click="addToCart(radna)" class="addButton">Add to cart</button>
                </div>
            </div>
            <div class="menu">
                <div class="card2">
                    <img :src="require('./assets/' + padthai.image)" id="foodpicture" alt="Avatar" />
                    <div>
                        <h3>{{ padthai.title }}</h3>
                        <p>{{ padthai.description }}</p>
                    </div>
                    <h3>{{ padthai.price }} $</h3>
                    <button @click="addToCart(padthai)" class="addButton">Add to cart</button>
                </div>
                <div class="card2">
                    <img  :src="require('./assets/' + padthai.image)" id="foodpicture" alt="Avatar" />
                    <div>
                        <h3>{{ padthai.title }}</h3>
                        <p>{{ padthai.description }}</p>
                    </div>
                    <h3>{{ padthai.price }} $</h3>
                    <button @click="addToCart(padthai)" class="addButton">Add to cart</button>
                </div>
                <div class="card2">
                    <img  :src="require('./assets/' + padthai.image)" id="foodpicture" alt="Avatar" />
                    <div>
                        <h3>{{ padthai.title }}</h3>
                        <p>{{ padthai.description }}</p>
                    </div>
                    <h3>{{ padthai.price }} $</h3>
                    <button @click="addToCart(padthai)" class="addButton">Add to cart</button>
                </div>
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
            <div v-if="cart">
                <div class="menu">
                    <div class="card2">
                        <img :src="require('./assets/' + cart.image)" id="foodpicture" alt="Avatar" />
                        <div>
                            <h3>{{ cart.title }}</h3>
                            <p>{{ cart.description }}</p>
                        </div>
                        <h3>{{ cart.price }} $</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tab: 0,
            user: {
                email: '',
                password: ''
            },
            cart: null,

            krapraw: {
                image: 'kapraw.jpg',
                title: 'ข้าวกะเพรา',
                description: 'ข้าวกะเพราหมูสับ',
                price: 200
            },
            radna: {
                image: 'radna.jpg',
                title: 'ราดหน้า',
                description: 'ราดหน้าทะเล',
                price: 200
            },
            padthai: {
                image: 'padthai.jpg',
                title: 'ผัดไทย',
                description: 'ผัดไทยโบราณ',
                price: 200
            }
        }
    },

    methods: {
        changePage(page) {
            this.tab = page
        },
        addToCart(food) {
            this.cart = food
            alert('เพิ่มรายการสำเร็จ')
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

.topNav button {
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

.topNav button:hover {
    background-color: #D7CAC5;
    color: #783833;
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

.addButton {
    width: 100%;
    font-size: 20px;
    background-color: aquamarine;
    border-radius: 50px;
    border: 2px solid white;
    margin-top: 5px;
}

.addButton:hover {
    background-color: brown;
    color: white;
}

.card {
    border-radius: 10px;
    padding: 5px;
    border: 3px solid #783833;
    margin: 6px;
    color: #D7CAC5;
}

.card img {
    height: 300px;
    width: 600px;
}

.card p {
    margin-bottom: 5px;
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

.activeButton {
    background-color: crimson;
    color: white;
    border: 3px solid tan;
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
