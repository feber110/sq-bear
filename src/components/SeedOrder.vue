<template>
  <row>
    <Col>商店订单</Col>
    <col>
      <Input type="text" placeholder="搜索">
      </Input>
      <Col span="24" style="text-align: left;">
        <span>尊敬的推广员张三：</span>
        <br>
        <span>您一共有123种子商户订单，一共产生256次订单</span>
      </Col>
    </col>
    <Col span="24">
      <Button type="success" size="large" style="width:30%">已完成</Button>
      <Button tyoe="success" size="large" style="width:30%">待评价</Button>
      <Button tyoe="success" size="large" style="width:30%">已取消</Button>
    </Col>
    <Col span="24">
      <Button type="success" size="large" style="width:100%" class="buttonstyle">
        <Col span="24">
          <Col span="4">
            <img src=".././assets/logo.png" width="40px"> </img>

          </Col>
          <Col span="4">
            <Col span="24">
              美发
            </Col>
            <Col span="24" class="title2">
              西溪银泰
            </Col>
          </Col>
          <Col span="4" offset="12">
            <Col span="24" class="title2">
              消费
            </Col>
            <Col span="24" class="title2">
              时间
            </Col>
          </Col>

        </Col>
      </Button>
    </Col>
  </row>
</template>

<script>
    export default {
        name: "SeedOrder"
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

  .title2{
    color:gray;
  }
</style>
