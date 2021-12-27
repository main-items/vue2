<template>
  <div class="user">
    <h1>user</h1>
    <p>计数：{{count}}</p>
    <button @click="user">请求</button>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      count: 0
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 初始化
    init() {
      // 
    },
    user () {
      this.$api.user.gitUser(this.count).then(res => {
        this.count++
        console.log(`输出: ${this.count} -- ${res}`)
      })
    }
  }
};
</script>

<style scoped lang="stylus">

</style>
