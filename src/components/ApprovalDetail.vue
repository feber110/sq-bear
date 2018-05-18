<template>
  <row  style="max-width: 680px;">
    <Col>审批详情</Col>
    <col>
    <Input type="text" placeholder="搜索">
    </Input>
    <Col span="24" style="text-align: left;">
      <span>尊敬的推广员张三：</span>
    </Col>
    </col>
    <Col span="24">
      <Button type="success" size="large" style="width:30%">种子商户</Button>
      <Button tyoe="success" size="large" style="width:30%">特色分享商户</Button>
      <Button tyoe="success" size="large" style="width:30%">同城企业</Button>
    </Col>
    <Col span="24">
      <Button type="success" size="large" style="width:100%" class="buttonstyle">
        <Col span="24">
          <Col span="4">
            <img src=".././assets/logo.png" width="40px"> </img>

          </Col>
          <Col span="4">
            <Col span="24">
              港式茶餐厅
            </Col>
            <Col span="24" class="title2">
              申请时间：2018-05-14
            </Col>
          </Col>
          <Col span="4" offset="12">
            <Col span="24" class="title2">
              待审批
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
    -webkit-text-align: left;
    -webkit-border-radius: 0px;
  }

  .title2{
    color:gray;
  }
</style>
