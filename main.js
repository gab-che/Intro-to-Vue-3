const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 2324,
                    color: 'blue'
                },
                {
                    id: 3421,
                    color: 'green'
                }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        }
    }
})
