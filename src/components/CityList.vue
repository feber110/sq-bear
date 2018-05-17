<template>
  <row>
    <col>
    同城企业列表
    </col>
    <Col span="24" style="text-align: left;">
      <span>尊敬的推广员张三：</span>
      <br>
      <span>您一共发展了25家同城企业</span>
    </Col>
    <Col span="24">
      <Button type="success" size="large" style="width:100%" class="buttonstyle">
        <Col span="24">
          <Col span="4">
            <img src=".././assets/logo.png" width="40px"> </img>

          </Col>
          <Col span="4">
            <Col span="24">
              韩都衣舍
            </Col>
          </Col>
          <Col span="4" offset="12">
            <Col span="24">
              订单25
            </Col>
            <Col span="24" >
              收益：￥23.6
            </Col>
          </Col>


        </Col>
      </Button>
    </Col>
  </row>
</template>

<script>
  export default {
    name: "CityList"
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
