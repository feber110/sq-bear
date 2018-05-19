<template>
  <row style="max-width: 680px;">
    <col>
    我推广的特色商户
    </col>
    <Col span="24" style="text-align: left;">
      <span>尊敬的推广员：{{user.name}}</span>
      <br>
      <span>您一共发展了{{specialorder}}家特色商户</span>
    </Col>
    <Col span="24" v-for="(item,index) in specialdata">
      <Button type="success" size="large" style="width:100%" class="buttonstyle">
        <Col span="24">
          <Col span="4">
            <img src=".././assets/logo.png" width="40px"> </img>

          </Col>
          <Col span="4">
            <Col span="24">
              {{item.name}}
            </Col>
            <Col span="24">
              我的收益:{{item.income}}
            </Col>
            <Col span="24">
              价格:{{item.price}}
            </Col>
          </Col>
          <Col span="4" offset="12">
            <Col span="24" >
              分享红包{{item.bonus}}
            </Col>
          </Col>


        </Col>
      </Button>
    </Col>
  </row>
</template>

<script>
  export default {
    name: "SpecialList",
    data (){
      return {
        user:{
          name:'张三',
        },
        specialorder:200,
        specialdata: [
          {name:'港式茶餐厅',income:'$200',price:'$100',bonus:'$200'},
          {name:'健身房',income:'$220',price:'$140',bonus:'$250'},
        ]
      }
    }
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
