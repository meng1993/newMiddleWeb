<template>
  <!--我是词汇-->
  <div class="word_box">
    <div class="word_total_box">
      <div class="words_total">
        词汇：
        <span class="nowNum">1</span>/
        <span class="totalNum">21</span>
      </div>
      <i class="audio_img" data-src=""></i>
      <i class="video_img" data-src=""></i>
    </div>
    <div class="word_prev">
      <i></i>
    </div>
    <div class="word_container">
      <p class="word_all">sock</p>
      <p class="phoneticSymbol">/sɔk/</p>
      <div class="word">
        <span class="wordBox">
          <span class="wordPart audio zoomIn animated">
            <span class="wordBg_middle">s</span>
            <i class="wordBg_audio"></i>
          </span>
          <span class="wordPart audio zoomIn animated">
            <span class="wordBg_middle">o</span>
            <i class="wordBg_audio"></i>
          </span>
          <span class="wordPart audio zoomIn animated">
            <span class="wordBg_middle">ck</span>
            <i class="wordBg_audio"></i>
          </span>
          <p style="clear:both;"></p>
        </span>
      </div>
      <p class="explain">n. 短袜</p>
    </div>
    <div class="word_next">
      <i></i>
    </div>
  </div>
</template>
<script>
import '../../../static/css/lib/animate.css'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
  @import "../../../static/css/courseware/word";
</style>
