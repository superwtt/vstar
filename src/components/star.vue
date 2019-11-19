<template>
  <transition name="fade">
    <div v-show="isShow" @click="isShow=false" class="star">
      <transition name="fold">
        <div v-show="isShow" @click.stop class="star_panel">
          <div class="panel_top">
            <div
              v-for="(item,index) in face"
              :key="index"
              class="top_item"
              :class="item.show?'':'active'"
              @click="rate(item.value)"
            >
              <p>{{item.name}}</p>
              <span class="iconfont" :class="item.icon" v-if="item.show"></span>
              <svg v-if="!item.show" class="icon" aria-hidden="true">
                <use :xlink:href="item.svg" />
              </svg>
            </div>
          </div>
          <div class="panel-body">
            <textarea v-model="comment" placeholder="设施如何，服务是否周到，环境怎么样？" cols="30" rows="5"></textarea>
          </div>
          <div class="panel-result">
            <div v-if="face[score]">
                <p class="score">您的打分是：{{score}}</p>  
                <p>{{face[score].name}}</p>  
            </div>
            <div v-else>
                尚未打分
            </div>
          </div>
          <div class="panel-footer">
            <span @click="release()">发布</span>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      face: [
        {
          name: "差",
          icon: "iconYelling",
          svg: "#icondanao",
          value: 1,
          show: true
        },
        {
          name: "一般",
          icon: "iconWierd-1",
          svg: "#iconlengku",
          value: 2,
          show: true
        },
        {
          name: "还不错",
          icon: "iconStrait1",
          svg: "#iconbaiyan",
          value: 3,
          show: true
        },
        {
          name: "满意",
          icon: "iconSmile1",
          svg: "#iconkaixin",
          value: 4,
          show: true
        },
        {
          name: "强烈推荐",
          icon: "iconThoung-Out",
          svg: "#icondaxiao",
          value: 5,
          show: true
        }
      ],
      comment:"",
      score:''
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    // 评分事件
    rate(value) {
      this.face.forEach(item => {
        item.value <= value ? (item.show = false) : (item.show = true);
      });
    },
    // 发布事件
    release(){
      let lastFaceActive = this.face.find(item=>item.show===true);
      this.score = lastFaceActive?lastFaceActive.value-1:5;

      if(!this.score) {
          alert("请先评分");
          return
      }

      this.isShow = false;
      this.$emit("release");

      // reset data
      this.face.forEach(item=>{
          item.show = true;
      })

      this.score = ''

    }
  }
};
</script>
<style  scoped>
.star {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}
.star.fade-enter-active,
.star.fade-leave-active {
  transition: all 0.5s;
}
.star.fade-enter,
.star.fade-leave-active {
  opacity: 0;
}
.star_panel {
  background: #e8e9ee;
  height: 430px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.star_panel.fold-enter-active,
.star_panel.fold-leave-active {
  transition: all 0.2s;
}
.star_panel.fold-enter,
.star_panel.fold-leave-active {
  transform: translate3d(0, 400px, 0);
}
.panel_top {
  display: flex;
  background: #fff;
}
.top_item {
  flex: 1;
  padding: 12px;
  text-align: center;
  border-right: 1px solid #e1e1e1;
}
.active{
    color: #ffce05 !important;
}
.top_item p {
  font-size: 12px;
  margin-top: 0;
}
.top_item .iconfont,
.top_item .icon {
  font-size: 35px;
  color: #9aa2ac;
}
.top_item:last-child {
  border-right: none;
}
.panel-body {
  margin-top: 15px;
  padding: 20px;
  background: #fff;
  height: 150px;
}
.panel-body textarea {
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.panel-result{
  font-size: 13px;  
  background: #fff;
  padding: 10px;
  margin-top: 15px;
}
.panel-result p{
    margin: 0;
    padding:0;
}
.panel-footer {
  overflow: hidden;
}
.panel-footer p{
    margin-top: 5px;
}
.score{
    margin-bottom: 8px !important;
}
.panel-footer span {
  display: inline-block;
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  padding: 8px 10px;
  background: #ffce05;
  color: #fff;
}
textarea::-webkit-input-placeholder {
  color: #b3b3b3;
  font-size: 16px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
textarea:-moz-placeholder {
  color: #b3b3b3;
  font-size: 16px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
textarea::-moz-placeholder {
  color: #b3b3b3;
  font-size: 16px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
textarea:-ms-input-placeholder {
  color: #b3b3b3;
  font-size: 16px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>