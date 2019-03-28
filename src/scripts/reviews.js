import Vue from "vue";
import Flickity from "vue-flickity";

const review = {
  template: "#review",
  props: {
    review: Object
  }
};

new Vue({
  el: "#reviews",
  template: "#reviews-list",
  components: {
    review,
    Flickity
  },
  data() {
    return {
      reviews: "",

      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        groupCells: true
      }
    };
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photoPath}`);
        item.photoPath = requiredPic;
        return item;
      });
    },
    
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrWithRequiredImages(data);
  }
});
