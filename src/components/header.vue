<template>
    <div class="header">
      <div class="header_logo">
        <img class="header_img" src="../../static/image/defaultLogo.png">
        <i class="logo_img"></i>
        教师中心
      </div>
      <div class="class">
        <p class="class_name">艳山红L二5A（<span>普通班</span>）</p>
        <p class="teach_pattern">线下3s教学法+线上微课堂混合式教学</p>
      </div>
      <i class="close_btn"></i>
      <i class="full_screen"></i>
      <div class="more_btn" @click="moreMethod">
        更多
        <!--jj-->
        <div class="more_choose" v-show="more">
            <div class="icon_arrow"></div>
            <h3 class="rank_list per_more_choose">
              <i></i>
              排行
            </h3>
            <h3 class="group_manage per_more_choose">
              <i></i>
              小组管理
            </h3>
          </div>
        <!--jj-->
      </div>
      <div class="nav">
        <div class="search btn_group" @click="searchMethod">
          <i></i>
          <span>civa 搜</span>
          <div class="search_choose" v-show="search">
            <div class="icon_arrow"></div>
            <h3 class="choose_word per_search_choose" @click="jj">
              <i></i>
              搜词
            </h3>
            <h3 class="chosen_knowledge per_search_choose">
              <i></i>
              搜知识点
            </h3>
          </div>
        </div>
        <div class="tour_class btn_group">
          <i></i>
          <span>巡课</span>
        </div>
        <div class="remark btn_group" @click="remarkMethod">
          <i></i>
          <span>点评</span>
          <div class="remark_choose" v-show="remark">
            <div class="icon_arrow"></div>
            <h3 class="remark_student per_remark_choose">
              <i></i>
              点评学员
            </h3>
            <h3 class="remark_group per_remark_choose">
              <i></i>
              点评小组
            </h3>
            <h3 class="remark_set per_remark_choose">
              <i></i>
              点评设置
            </h3>
          </div>
        </div>
        <div class="pose btn_group">
          <i></i>
          <span>提问</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      search: false,
      remark: false,
      more: false
    }
  },
  methods: {
    searchMethod: function () {
      if (this.search === false) {
        this.search = true
        this.remark = false
        this.more = false
      } else {
        this.search = false
      }
    },
    remarkMethod: function () {
      if (this.remark === false) {
        this.remark = true
        this.search = false
        this.more = false
      } else {
        this.remark = false
      }
    },
    moreMethod: function () {
      if (this.more === false) {
        this.more = true
        this.remark = false
        this.search = false
      } else {
        this.more = false
      }
    },
    jj: function () {
      alert('我是搜词')
    }
  }
}
</script>

<style lang="scss">
  @import "../../static/css/header";
</style>
