app.component('review-form', {
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">
  
    <label for="review">Review:</label>
    <textarea name="" id="review" cols="30" rows="10" v-model="review"></textarea>
  
    <label for="rating">Rating:</label>
    <select name="" id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label>Would you recommend this product?</label>
        <div>Picked: {{recommend}}</div>

        <input type="radio" id="yes" value="yes" v-model="recommend" />
        <label for="yes">Yes</label>

        <input type="radio" id="no" value="no" v-model="recommend" />
        <label for="no">No</label>
        
        <input class="button" type="submit" value="Submit">
    </form>`,

    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: 'yes',
        }
    },

    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert('Fill out every field!');
                return;
            };
            const productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend,
            }
            this.$emit('review-submitted', productReview);

            this.name = '';
            this.review = '';
            this.rating = null;
            this.recommend = 'yes';
        }
    }
})

