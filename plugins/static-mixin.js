import Vue from 'vue';

Vue.mixin({
  computed: {
    STATIC_PATH() {
      return this.$router.options.base.slice(0, -1);
    }
  }
});
