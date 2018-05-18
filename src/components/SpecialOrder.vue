<template>
  <row style="max-width: 680px;">
    <Col>商店订单</Col>
    <col>
    <Input placeholder="搜索">
      <Button slot="append" icon="ios-search"></Button>
    </Input>
    <Col span="24" style="text-align: left;">
      <span>尊敬的推广员张三：</span>
      <br>
      <span>您一共有123家特色分享商户订单，一共产生256次订单</span>
    </Col>
    </col>
    <Col span="24" class="demo-tabs-style1">
      <Tabs type="card">
        <TabPane label="已完成">
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
        </TabPane>
        <TabPane label="待评价">
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
        </TabPane>
        <TabPane label="已取消">
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
        </TabPane>
      </Tabs>
      <!--<Button type="success" size="large" style="width:30%">已完成</Button>-->
      <!--<Button tyoe="success" size="large" style="width:30%">待评价</Button>-->
      <!--<Button tyoe="success" size="large" style="width:30%">已取消</Button>-->
    </Col>

  </row>
</template>


<script>
    export default {
        name: "SpecialOrder"
    }
</script>

<style>
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
  .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: transparent;
    width:88%;
  }
</style>
