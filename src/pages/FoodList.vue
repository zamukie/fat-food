<template>
<div class="content">
    <div class="menu">
        <Recommens :foods="foodList.recommens" />
    </div>
    <div class="menu">
        <Other :foods="foodList.rest" />
    </div>
</div>
</template>

<script>
import Recommens from '../components/Recommens.vue'
import Other from '../components/Other.vue'
export default {
    components: {
        Recommens,
        Other
    },

    data() {
        return {
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
.content {
    display: flex;
    flex-direction: column;
}

.content .menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>
