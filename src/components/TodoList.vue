<template>
  <row style="max-width: 680px;">
    <col>
    代办事项
    </col>
    <Col span="24" style="text-align: left;">
      <span>您有5个代办事项</span>
    </Col>
    <Col span="24">
      <Button type="success" size="large" style="width:100%" class="buttonstyle">
        <Col span="24">

          <Col span="4">
            <Col span="24">
              稍后处理
            </Col>
            <Col span="24">
              副标题
            </Col>
          </Col>
          <Col span="4" offset="12">
            <Col span="24" >
              内容文字
            </Col>
          </Col>


        </Col>
      </Button>
    </Col>
  </row>
</template>

<script>
  export default {
    name: "TodoList",
  }
</script>

<style scoped>
  .buttonstyle{
    color: black;
    background-color: white;
    border-color: gray;
    -webkit-text-align: left;
    -webkit-border-radius: 0px;
  }
</style>
