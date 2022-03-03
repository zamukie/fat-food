<template>
<div>
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
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
        }
    }
}
</script>

<style>
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
