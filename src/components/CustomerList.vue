<template>
  <row>
    <col>
    消费者列表
    </col>
    <Col span="24" style="text-align: left;">
      <span>尊敬的推广员张三：</span>
      <br>
      <span>您一共发展了134位消费者，一共产生了786次订单</span>
    </Col>
    <Col span="24">
      <Button type="success" size="large" style="width:100%" class="buttonstyle">
        <Col span="24">
          <Col span="4">
            <img src=".././assets/logo.png" width="40px"> </img>

          </Col>
          <Col span="4">
            <Col span="24">
              张三
            </Col>
            <Col span="24">
              日期
            </Col>
          </Col>
          <Col span="4" offset="12">
            <Col span="24" >
              订单
            </Col>
          </Col>


        </Col>
      </Button>
    </Col>
  </row>
</template>

<script>
  export default {
    name: "CustomerList",
  }
</script>

<style scoped>
  .buttonstyle{
    color: black;
    background-color: white;
    border-color: gray;
    text-align: left;
    border-radius: 0px;
  }
</style>
