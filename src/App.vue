<template>
<div class="background">
    <div>
        <img src="./assets/art3.png" class="logo">
    </div>
    <div class="topNav">
        <button>อาหาร</button>
        <button>สมาชิก</button>
        <button>รายการสั่งซื้อ</button>
    </div>
    <div class="content">
        <div class="menu">
            <div class="card">
                <img src="./assets/kapraw.jpg" id="foodpicture" alt="Avatar" />
                <div>
                    <h3>ข้าวกะเพรา</h3>
                    <p>กะเพราหมูสับ</p>
                </div>
                <h3>200 $</h3>
            </div>
            <div class="card">
                <img src="./assets/radna.jpg" id="foodpicture" alt="Avatar" />
                <div>
                    <h3>ราดหน้า</h3>
                    <p>ราดหน้าทะเล</p>
                </div>
                <h3>200 $</h3>
            </div>
        </div>
        <div class="menu">
            <div class="card2">
                <img src="./assets/padthai.jpg" id="foodpicture" alt="Avatar" />
                <div>
                    <h3>ผัดไทย</h3>
                    <p>ผัดไทยโบราณ</p>
                </div>
                <h3>200 $</h3>
            </div>
            <div class="card2">
                <img src="./assets/padthai.jpg" id="foodpicture" alt="Avatar" />
                <div>
                    <h3>ผัดไทย</h3>
                    <p>ผัดไทยโบราณ</p>
                </div>
                <h3>200 $</h3>
            </div>
            <div class="card2">
                <img src="./assets/padthai.jpg" id="foodpicture" alt="Avatar" />
                <div>
                    <h3>ผัดไทย</h3>
                    <p>ผัดไทยโบราณ</p>
                </div>
                <h3>200 $</h3>
            </div>
            <div class="card2">
                <img src="./assets/padthai.jpg" id="foodpicture" alt="Avatar" />
                <div>
                    <h3>ผัดไทย</h3>
                    <p>ผัดไทยโบราณ</p>
                </div>
                <h3>200 $</h3>
            </div>
            <div class="card2">
                <img src="./assets/padthai.jpg" id="foodpicture" alt="Avatar" />
                <div>
                    <h3>ผัดไทย</h3>
                    <p>ผัดไทยโบราณ</p>
                </div>
                <h3>200 $</h3>
            </div>
            
            
        </div>
    </div>
</div>
</template>

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
</style>
