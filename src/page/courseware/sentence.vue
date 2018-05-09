<template>
  <!--我是句型-->
  <div class="sentence_box">
    <div class="word_total_box">
      <div class="words_total">句型</div>
      <!--<i class="audio_img" data-src=""></i>-->
      <!--<i class="video_img" data-src=""></i>-->
    </div>
    <!--句型内容部分开始-->
    <div class="sentence_container">
      <h1 class="ask_sentence">
        How much is this
        <span class="animated">{{defaultWord}}</span> ?
        <i class="audio_img"></i>
      </h1>
      <h3 class="translate">这件T恤多少钱？</h3>
      <ul class="names">
        <li class = "name_group" v-for = "item in items" @click="changeWord(item.word)">
          <p>{{item.word}}</p>
          <i class="btn_change"></i>
        </li>
        <div class="clear"></div>
      </ul>
      <h1 class="answer_sentence">
        It's five dollars .
        <i class="audio_answer_img"></i>
      </h1>
      <h3 class="answer_translate">5美元</h3>
    </div>
    <!--句型内容部分结束-->
  </div>
</template>

<script>
import '../../../static/css/lib/animate.css'
export default {
  data () {
    return {
      defaultWord: 'T-shirt',
      items: [
        {
          id: 1,
          word: 'shirt'
        },
        {
          id: 2,
          word: 'sweater'
        },
        {
          id: 3,
          word: 'hat'
        },
        {
          id: 4,
          word: 'T-shirt'
        }
      ]
    }
  },
  methods: {
    changeWord (a) {
      this.defaultWord = a
    }
  }
}
</script>

<style lang="scss">
  @import "../../../static/css/courseware/sentence";
</style>
