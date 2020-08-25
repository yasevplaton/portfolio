// import Vue from "vue";
// import Flickity from "vue-flickity";
// import axios from 'axios';

// // const exp = {
// //   template: "#exp",
// //   props: {
// //     review: Object
// //   }
// // };

// new Vue({
//   el: "#experience-root",
//   template: "#experience-list",
//   components: {
//     // exp,
//     Flickity
//   },
//   data() {
//     return {
//       experience: "",

//       flickityOptions: {
//         initialIndex: 0,
//         prevNextButtons: false,
//         pageDots: false,
//         wrapAround: true,
//         groupCells: true
//       }
//     };
//   },
//   methods: {
//     makeArrWithAbsoluteImages(data) {
//       return data.map(item => {
//         const absolutePic = `https://webdev-api.loftschool.com/${item.photo}`;
//         item.photo = absolutePic;

//         return item;
//       });
//     },
    
//     next() {
//       this.$refs.flickity.next();
//     },
    
//     previous() {
//       this.$refs.flickity.previous();
//     }
//   },
//   created() {
//     axios.get('https://webdev-api.loftschool.com/reviews/111')
//     .then(response => {
//       const data = response.data;
//       this.experience = this.makeArrWithAbsoluteImages(data);
//     });
//   }
// });
