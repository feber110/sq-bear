<template>
  <row style="max-width: 680px;">
    <Col>商店订单</Col>
    <col>
    <Input placeholder="搜索">
      <Button slot="append" icon="ios-search"></Button>
    </Input>
    <Col span="24" style="text-align: left;">
      <span>尊敬的推广员：{{user.name}}</span>
      <br>
      <span>您一共有{{specialnumber}}家特色分享商户订单，一共产生{{ordernumber}}次订单</span>
    </Col>
    </col>
    <Col span="24" class="demo-tabs-style1">
      <Tabs type="card">
        <TabPane label="已完成">
          <Col  v-for="(item,index) in completedata">
            <Button type="success" size="large" class="buttonstyle">
              <Col span="24">
                <Col span="4">
                  <img src=".././assets/logo.png" width="40px"> </img>

                </Col>
                <Col span="4">
                  <Col span="24">
                    {{item.name}}
                  </Col>
                  <Col span="24" class="title2">
                    {{item.address}}
                  </Col>
                </Col>
                <Col span="4" offset="12">
                  <Col span="24" class="title2">
                    消费{{item.price}}
                  </Col>
                  <Col span="24" class="title2">
                    时间{{item.time}}
                  </Col>
                </Col>

              </Col>
            </Button>
          </Col>
        </TabPane>
        <TabPane label="待评价">
          <Col  v-for="(item,index) in evaluatedata">
            <Button type="success" size="large" class="buttonstyle">
              <Col span="24">
                <Col span="4">
                  <img src=".././assets/logo.png" width="40px"> </img>

                </Col>
                <Col span="4">
                  <Col span="24">
                    {{item.name}}
                  </Col>
                  <Col span="24" class="title2">
                    {{item.address}}
                  </Col>
                </Col>
                <Col span="4" offset="12">
                  <Col span="24" class="title2">
                    消费{{item.price}}
                  </Col>
                  <Col span="24" class="title2">
                    时间{{item.time}}
                  </Col>
                </Col>

              </Col>
            </Button>
          </Col>
        </TabPane>
        <TabPane label="已取消">
          <Col  v-for="(item,index) in canceldata">
            <Button type="success" size="large" class="buttonstyle">
          <Col span="24">
            <Col span="4">
              <img src=".././assets/logo.png" width="40px"> </img>

            </Col>
            <Col span="4">
              <Col span="24">
                {{item.name}}
              </Col>
              <Col span="24" class="title2">
                {{item.address}}
              </Col>
            </Col>
            <Col span="4" offset="12">
              <Col span="24" class="title2">
                消费{{item.price}}
              </Col>
              <Col span="24" class="title2">
                时间{{item.time}}
              </Col>
            </Col>

          </Col>
        </Button>
          </Col>
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
        name: "SpecialOrder",
      data(){
          return {
            user:{
              name:'张三',
            },
            specialnumber:200,
            ordernumber:100,
            completedata:[
              {name:'美发店',address:'城西',price:'100',time:'2018-05-18'},
            ],
            evaluatedata:[
              {name:'美发店',address:'城西',price:'100',time:'2018-05-18'},
              {name:'spa',address:'城西',price:'200',time:'2018-05-18'},
            ],
            canceldata:[
              {name:'美发店',address:'城西',price:'100',time:'2018-05-18'},
              {name:'美发店2',address:'城西',price:'100',time:'2018-05-18'},
            ]
          }
      }
    }
</script>

<style>
  .buttonstyle{
    color: black;
    background-color: white;
    border-color: gray;
    text-align: left;
    width:100%;
    -webkit-border-radius: 0px;
  }

  .title2{
    color:gray;
  }
  .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: transparent;
    width:90%;
  }
</style>
