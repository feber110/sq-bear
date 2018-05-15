<template>
  <div class="hello">
    <h1>{{ dsc }}</h1>
    <label for=""></label>
    <Input v-model="value1" size="large" ></Input>
    <br>
    <label for=""></label>
    <Input v-model="value1" size="large" ></Input>
    <br>
    <button>登录</button>
    <br>
  </div>
</template>

<script>
export default {
  name: 'loginComponent',
  data () {
    return {
      app:'省钱兔',
      dsc: '开启社交电商新时代',
      value1:'1'
    }
  }
}
</script>
