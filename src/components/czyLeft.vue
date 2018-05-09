<template>
  <div class="left_box">
    <div class="fixed">
      <router-link tag="div" class="courseware" :to="defaultCoursePath">
        <div class="courseware_box">
          <div class="courseware_icon"></div>
          <p>课件</p>
        </div>
      </router-link>
      <router-link tag="div" class="task" to="/homework">
        <div class="homework_box" @click="coursePathMethod">
          <div class="task_icon"></div>
          <p>作业</p>
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      defaultCoursePath: ''
    }
  },
  methods: {
    coursePathMethod: function () {
      let coursePath = this.$route.fullPath
      this.defaultCoursePath = coursePath
    }
  }
}
</script>
<style lang="scss">
  @import "../../static/css/czyLeft";
</style>
