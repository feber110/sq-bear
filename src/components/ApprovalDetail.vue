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
    <Col span="24" class="demo-tabs-style1">
      <Tabs type="card">
        <TabPane label="种子商户">
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
        </TabPane>
        <TabPane label="特色分享商户">
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
        </TabPane>
        <TabPane label="同城企业">
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
        </TabPane>
      </Tabs>
      <!--<Button type="success" size="large" style="width:30%">种子商户</Button>-->
      <!--<Button tyoe="success" size="large" style="width:30%">特色分享商户</Button>-->
      <!--<Button tyoe="success" size="large" style="width:30%">同城企业</Button>-->
    </Col>
  </row>
</template>

<script>
  export default {
    name: "SeedOrder"
  }
</script>

<style>
  .buttonstyle{
    color: black;
    background-color: white;
    border-color: gray;
    text-align: left;
    -webkit-border-radius: 0px;
  }

  .title2{
    color:gray;
  }

  .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: transparent;
    width:67%;
  }
</style>
