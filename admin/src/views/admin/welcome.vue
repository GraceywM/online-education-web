<template>
  <div>
    <h1>hello welcome</h1>
  </div>
</template>

<script>
export default {
  name: "welcome",
  mounted: function() {
    //子组件调用父组件的方法
    this.$parent.activeSidebar("welcome-sidebar");
  },
  methods: {
  }
}
</script>