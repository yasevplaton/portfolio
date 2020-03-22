import Vue from "vue";
import axios from "axios";

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
});

const skill = {
  template: "#skill-template",

  props: {
    skill: Object
  },

  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skill.percent);

      circle.style.strokeDashoffset = percent;

    },
  }
};

const stackRow = {
  template: "#stack-row-template",
  components: {
    skill
  },
  props: {
    category: Object,
    skills: Array,
    windowHeight: Number,
  },
  computed: {
    pageYOffset() {
      return this.getElemPageYOffset();
    }
  },
  methods: {
    getElemPageYOffset() {
      const row = this.$refs["stack-row"];
      return row.getBoundingClientRect().top;
    },

    handleScroll() {
      if ((window.scrollY + this.windowHeight) > this.pageYOffset) {
        this.$children.forEach(child => {
          child.drawColoredCircle();
        });
      } else {
        console.log("scroll to animation");
      }
    }
  },
  mounted() {
    if ((window.scrollY + this.windowHeight) > this.pageYOffset) {
      this.$children.forEach(child => {
        child.drawColoredCircle();
      });
    }
  },
};

new Vue({
  el: "#skills-root",
  template: "#skills-template",
  components: {
    stackRow
  },
  data() {
    return {
      categories: [],
      skills: [],
      windowHeight: 0
    }
  },
  methods: {
    filterSkillsByCategory(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    },
  },
  created() {
    axios.get("https://webdev-api.loftschool.com/categories/111")
    .then(response => {
      this.categories = response.data;
    })
    .catch(error => console.error(error));

    axios.get("https://webdev-api.loftschool.com/skills/111")
    .then(response => {
      this.skills = response.data;
    })
    .catch(error => console.error(error));
  },
  mounted() {
    this.windowHeight = document.documentElement.clientHeight;
  }
});
