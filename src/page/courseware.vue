<template>
  <div class="course_list">
    <div class="courseware_list">
      <div class="selected_box">
        <div class="chose_book" @click="jj">
          <input type="text" value="新概念1" disabled="disabled">
          <div class="point_down"></div>


        </div>
        <div class="chose_week">
          <span id="choose_book">Week</span>
          <span class="ccw">1</span>
          <div class="point_down"></div>
        </div>
      </div>
      <div class="content_box">
        <h5 class="list_tip"><span></span>教学概述</h5>
        <ul class="content_list">
          <router-link tag="li" class="teaching_content" id="teaching_content" :to="{name: 'TeachContent'}" v-bind:class="{ user_choose:isContent }" v-on:click.native="hideContent(true)">
            <div class="teaching_content_icon"></div>
            <p>教学内容</p>
          </router-link>
        </ul>
        <h5 class="list_tip"><span></span>本课课件</h5>
        <ul class="course_list" id="cc">
          <router-link tag="li" v-for="item in list" v-bind:key="item.id" :to="{name:item.type}" v-on:click.native="hideContent(false)">
            <h6>{{item.id}}</h6>
            <input type="hidden" :value="item.value">
            <p>{{item.content}}</p>
          </router-link>
        </ul>
      </div>
    </div>
    <router-view class="courseRight"></router-view>
  </div>

</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          value: '111',
          content: '（我是词汇）【听读】课前任务：听音跟读文章，并和小伙伴们根据文章内容，相互提问吧！',
          type: 'Word'
        },
        {
          id: 2,
          value: '222',
          content: '(我是综合)【听读】课前任务：听音跟读文章，并和小伙伴们根据文章内容，相互提问吧！',
          type: 'Synthesize'
        },
        {
          id: 3,
          value: '333',
          content: '（我是句型）【听读】课前任务：听音跟读文章，并和小伙伴们根据文章内容，相互提问吧！',
          type: 'Sentence'
        },
        {
          id: 4,
          value: '333',
          content: '（我是知识点）【听读】课前任务：听音跟读文章，并和小伙伴们根据文章内容，相互提问吧！',
          type: 'Knowledge'
        }
      ],
      isContent: true
    }
  },
  created () {
    // this.jj()
  },
  methods: {
    jj () {
      this.list = [
        {
          id: 4,
          value: '111',
          content: '（我是词汇）【听读】课前任务：听音跟读文章，并和小伙伴们根据文章内容，相互提问吧！',
          type: 'Word'
        },
        {
          id: 5,
          value: '222',
          content: '(我是综合)【听读】课前任务：听音跟读文章，并和小伙伴们根据文章内容，相互提问吧！',
          type: 'Synthesize'
        },
        {
          id: 6,
          value: '333',
          content: '（我是句型）【听读】课前任务：听音跟读文章，并和小伙伴们根据文章内容，相互提问吧！',
          type: 'Sentence'
        }
      ]
      this.$router.push({name: this.list[0].type})
    },
    hideContent: function (e) {
      this.isContent = e
    }
  }
}
</script>
