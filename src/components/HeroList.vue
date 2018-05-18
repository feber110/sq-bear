<template>
  <row style="max-width: 680px;">
    <Col>英雄榜</Col>
    <Col span="24" class="demo-tabs-style1">
      <Tabs type="card">
        <TabPane label="同城企业">
          <Button type="success" size="large" style="width:100%" class="buttonstyle">
            <Col span="24">
              <Col span="4">
                <img src=".././assets/logo.png" width="40px"> </img>

              </Col>
              <Col span="4">
                <Col span="24">
                  张三
                </Col>
              </Col>
              <Col span="4" offset="12">
                <Col span="24" class="title2">
                  50
                </Col>
              </Col>

            </Col>
          </Button>
        </TabPane>
        <TabPane label="商户">
          <Button type="success" size="large" style="width:100%" class="buttonstyle">
            <Col span="24">
              <Col span="4">
                <img src=".././assets/logo.png" width="40px"> </img>

              </Col>
              <Col span="4">
                <Col span="24">
                  张三
                </Col>
              </Col>
              <Col span="4" offset="12">
                <Col span="24" class="title2">
                  50
                </Col>
              </Col>

            </Col>
          </Button>
        </TabPane>
        <TabPane label="消费者">
          <Button type="success" size="large" style="width:100%" class="buttonstyle">
            <Col span="24">
              <Col span="4">
                <img src=".././assets/logo.png" width="40px"> </img>

              </Col>
              <Col span="4">
                <Col span="24">
                  张三
                </Col>
              </Col>
              <Col span="4" offset="12">
                <Col span="24" class="title2">
                  50
                </Col>
              </Col>

            </Col>
          </Button>
        </TabPane>
        <TabPane label="收入">
          <Button type="success" size="large" style="width:100%" class="buttonstyle">
            <Col span="24">
              <Col span="4">
                <img src=".././assets/logo.png" width="40px"> </img>

              </Col>
              <Col span="4">
                <Col span="24">
                  张三
                </Col>
              </Col>
              <Col span="4" offset="12">
                <Col span="24" class="title2">
                  50
                </Col>
              </Col>

            </Col>
          </Button>
        </TabPane>
      </Tabs>
      <!--<Button type="success" size="large" style="width:24%">同城企业</Button>-->
      <!--<Button tyoe="success" size="large" style="width:24%">商户</Button>-->
      <!--<Button tyoe="success" size="large" style="width:24%">消费者</Button>-->
      <!--<Button tyoe="success" size="large" style="width:24%">收入</Button>-->
    </Col>
  </row>
</template>

<script>
  export default {
    name: "HeroList"
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
    width:32%;
  }
</style>
