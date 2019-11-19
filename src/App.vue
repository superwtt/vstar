<template>
  <div id="app">
    <div class="top">
      <span class="iconfont iconfanhui back"></span>
      我的订单
    </div>
    <div class="body">
      <div class="body_item">
        <p class="date name">自助餐</p>
        <div class="body_des">
          <div class="des_left">
            <img width="85%" :src="item1" alt />
          </div>
          <div class="des_right">
            <p class="date time">2018-12-01 08:31</p>
            <p class="get">评价得优惠及最高100积分</p>
          </div>
        </div>
        <div class="body_footer">
          <span v-if="target1===1&&isOK1">已评价</span>
          <span v-else @click="evalute(1)">评价</span>
        </div>
      </div>
      <div class="body_item">
        <p class="date name">碟中谍6：全面瓦解</p>
        <div class="body_des">
          <div class="des_left">
            <img width="85%" :src="item2" alt />
          </div>
          <div class="des_right">
            <p class="date time">2018-09-01 08:31</p>
            <p class="get">服装道具怎么样？</p>
          </div>
        </div>
        <div class="body_footer">
          <span v-if="target2===2&&isOK2">已评价</span>
          <span v-else @click="evalute(2)">评价</span>
        </div>
      </div>
    </div>
    <vstar @release="release" ref="star"></vstar>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      item1:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      item2:
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      target1: undefined,
      target2: undefined,
      isOK1: false,
      isOK2: false
    };
  },
  methods: {
    evalute(value) {
      this.$refs.star.show();
      value === 1 ? (this.target1 = 1) : (this.target2 = 2);
    },
    release() {
      this.target1
        ? (this.isOK1 = true)
        : this.target2
        ? (this.isOK2 = true)
        : "";
    }
  }
};
</script>

<style>
body,
html {
  position: relative;
  margin: 0;
  padding: 0;
  background: #f5faf6;
  width: 100%;
  height: 100%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
}
.top {
  position: relative;
  height: 55px;
  line-height: 55px;
  background: #ffce05;
  text-align: center;
  font-size: 18px;
}
.back {
  position: absolute;
  top: 0px;
  left: 10px;
  font-size: 30px !important;
}
.body_des {
  display: flex;
  padding-top: 15px;
}
.body_item {
  margin: 20px;
  padding: 15px;
  border-radius: 10px;
  background: #fff;
}
.des_left {
  flex: 1;
}
.des_left img {
  border-radius: 10px;
}
.des_right {
  flex: 2;
}
.date {
  margin: 0;
  padding: 0;
}
.time {
  font-size: 14px;
  color: #5d5d5d;
}
.get {
  color: #ffce05;
  margin: 0;
  padding-top: 10px;
  font-size: 15px;
}
.name {
  border-bottom: 1px solid #f8f8f8;
  padding-bottom: 12px;
}
.body_footer {
  overflow: hidden;
}
.body_footer span {
  float: right;
  display: inline-block;
  padding: 5px 18px;
  margin-right: 10px;
  border-radius: 10px;
  font-size: 14px;
  border: 1px solid #e1e1e1;
  color: #5d5d5d;
}
</style>
