<template>
<nav class="topNav">
    <router-link to="/">
        <button :class="foodList">อาหาร</button>
    </router-link>

    <router-link to="/member">
        <button :class="member">สมาชิก</button>
    </router-link>

    <router-link to="/cart">
        <button :class="cart">รายการสั่งซื้อ</button>
    </router-link>
</nav>
</template>

<script>
export default {
    computed: {
        foodList() {
            return {
                'active': this.$route.path === '/'
            }
        },
        member() {
            return {
                'active': this.$route.path === '/member'
            }
        },
        cart() {
            return {
                'active': this.$route.path === '/cart'
            }
        },
    }
}
</script>

<style scoped>
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

.topNav button.active {
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
</style>
