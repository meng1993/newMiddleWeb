<template>
  <!--<div>我是作业部分列表</div>-->
  <div class="homework_list">
    <ul class="task_list">
      <router-link tag="li" v-for="item in list" v-bind:key="item.id" :to="{name:item.name}" class="task_list_detail">
        <h3 class="task_title">{{item.title}}</h3>
        <p class="task_detail">{{item.detail}}</p>
        <p class="task_time">{{item.time}}</p>
      </router-link>
    </ul>
    <router-view class="homeworkRight"></router-view>
  </div>
</template>
<script>/* import */
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          title: '《《GFI》八上（新版）》 Unit8-Section',
          detail: '【看练】课中任务-语法： 看“初中短语turn off, turn on, turn up, turn down，turn into的辨析使用”视频，并完成相关习题训练。2016-11-03',
          time: '2018-01-29',
          name: 'homeworkContent'
        },
        {
          id: 2,
          title: '《《GFI》八上（新版）》 Unit8-Section',
          detail: '【看练】课中任务-语法： 看“初中短语turn off, turn on, turn up, turn down，turn into的辨析使用”视频，并完成相关习题训练。2016-11-03',
          time: '2018-01-29',
          name: 'homeworkContent'
        },
        {
          id: 3,
          title: '《《GFI》八上（新版）》 Unit8-Section',
          detail: '【看练】课中任务-语法： 看“初中短语turn off, turn on, turn up, turn down，turn into的辨析使用”视频，并完成相关习题训练。2016-11-03',
          time: '2018-01-29',
          name: 'homeworkContent'
        },
        {
          id: 4,
          title: '《《GFI》八上（新版）》 Unit8-Section',
          detail: '【看练】课中任务-语法： 看“初中短语turn off, turn on, turn up, turn down，turn into的辨析使用”视频，并完成相关习题训练。2016-11-03',
          time: '2018-01-29',
          name: 'homeworkContent'
        },
        {
          id: 5,
          title: '《《GFI》八上（新版）》 Unit8-Section',
          detail: '【看练】课中任务-语法： 看“初中短语turn off, turn on, turn up, turn down，turn into的辨析使用”视频，并完成相关习题训练。2016-11-03',
          time: '2018-01-29',
          name: 'homeworkContent'
        },
        {
          id: 6,
          title: '《《GFI》八上（新版）》 Unit8-Section',
          detail: '【看练】课中任务-语法： 看“初中短语turn off, turn on, turn up, turn down，turn into的辨析使用”视频，并完成相关习题训练。2016-11-03',
          time: '2018-01-29',
          name: 'homeworkContent'
        }
      ],
      isContent: true
    }
  },
  methods: {}
}
</script>
<style lang="scss">
  @import "../../static/css/homework";
</style>
