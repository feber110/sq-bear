<template>
    <row  style="max-width: 680px;">
      <col>
        订单中心
      </col>
      <Col span="24" style="text-align: left;">
        <span>尊敬的推广员张三：</span>
        <br>
        <span>您一共有4家同城企业，一共产生256次订单</span>
      </Col>
      <Col span="24">
        <Button type="success" size="large" style="width:100%" class="buttonstyle">
          <Col span="24">
            <Col span="4">
              <img src=".././assets/logo.png" width="40px"> </img>

            </Col>
            <Col span="4">
              <Col span="24">
                男士秋装夹克
              </Col>
              <Col span="24">
                下单时间：2018-3-10 16：09
              </Col>
              <Col span="24" >
                总价：￥23.6
              </Col>
            </Col>

          </Col>
        </Button>
      </Col>
    </row>
</template>

<script>
    export default {
        name: "CityOrder"
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
