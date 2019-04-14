import Vue from "vue";
import axios from 'axios';

const btns = {
  template: "#slider-btns"
};

const thumbsList = {
  template: "#thumbs-list",
  props: {
    works: Array,
    currentWork: Object
  }
};

const display = {
  template: "#display-component",
  components: {
    thumbsList,
    btns
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  }
};

const techList = {
  template: "#tech-list",
  props: {
    techs: String
  },
  computed: {
    techsArray() {
      return this.techs.split(',');
    }
  }
};

const info = {
  template: "#info-component",
  components: {
    techList
  },
  props: {
    currentWork: Object
  }
};

new Vue({
  el: "#works",
  template: "#works-component",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForCurIndex(value);
    }
  },
  methods: {
    makeInfiniteLoopForCurIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;
    },

    makeArrWithAbsoluteImages(data) {
      return data.map(item => {
        const absolutePic = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = absolutePic;

        return item;
      });
    },

    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },

    handleThumbClick(index) {
      this.currentIndex = index;
    }
  },
  created() {

    axios.get('https://webdev-api.loftschool.com/works/111')
    .then(response => {
      const data = response.data;
      this.works = this.makeArrWithAbsoluteImages(data);
    })
    .catch(error => console.error(error.message));

  }
});
