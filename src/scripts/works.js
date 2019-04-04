import Vue from "vue";

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
    skills: String
  },
  computed: {
    skillsArray() {
      return this.skills.split(',');
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

    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/work-previews/${
          item.photo
        }`);
        item.photo = requiredPic;

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
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});
