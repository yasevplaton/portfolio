import Vue from "vue";

const skill = {
  template: "#skill-template",

  props: {
    skillName: String,
    skillPercent: Number
  },

  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);

      circle.style.strokeDashoffset = percent;
    }
  },

  mounted() {
    this.drawColoredCircle();
  }
};

const stackRow = {
  template: "#stack-row-template",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills",
  template: "#skills-template",
  components: {
    stackRow
  },
  data() {
    return {
      skills: ""
    };
  },
  created() {
    const data = require("../data/skills.json");
    this.skills = data;
  }
});
