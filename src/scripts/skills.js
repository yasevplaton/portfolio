import Vue from "vue";
import axios from "axios";
import VueObserveVisibility from 'vue-observe-visibility';
Vue.use(VueObserveVisibility);

const skill = {
  template: "#skill-template",

  props: {
    skill: Object,
    showAnimation: Boolean
  },

  data() {
    return {
      strokeDashOffset: 251
    }
  },

  computed: {
    offset() {
      return this.showAnimation ? this.strokeDashOffset : 251
    }
  },

  methods: {
    getStrokeDashOffset() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skill.percent);

      return percent;
    }
  },

  mounted() {
    this.strokeDashOffset = this.getStrokeDashOffset();
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
    showAnimation: Boolean
  }
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
      showAnimation: false
    };
  },
  methods: {
    filterSkillsByCategory(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    },
    
    visibilityChanged(isVisible, entry) {
      this.showAnimation = isVisible;
      console.log(this.showAnimation);
    }
  },
  created() {
    axios
      .get("https://webdev-api.loftschool.com/categories/111")
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => console.error(error));

    axios
      .get("https://webdev-api.loftschool.com/skills/111")
      .then(response => {
        this.skills = response.data;
      })
      .catch(error => console.error(error));
  }
});
