<template>
  <div id="app">
    <itemHead></itemHead>
    <itemLeft></itemLeft>
    <!--<itemRight></itemRight>-->
  </div>
</template>

<script>
import itemHead from '../components/header'
import itemLeft from '../components/czyLeft'
export default {
  name: 'app',
  components: {
    itemHead,
    itemLeft
  }
}
</script>

<style lang="scss">
  @import "../style/style";
</style>
