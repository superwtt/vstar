# vstar
vue移动端星级打分，仿美团打分。


### 动态图演示
![仿美团评分](https://oscimg.oschina.net/oscnet/6566dc956d2e660eee27db74d6909374dce.jpg)

### 插件的安装
#### NPM 
```
npm i vstar
```
#### 引入插件
```
import Vue from 'vue';
import vstar from 'vstar';

Vue.use(vstar);
```

#### 基本用法  
```html
<vstar ref="star"   
    @showResult="false"
    @release="release"
></vstar>
```

### API  
| 参数 | 说明 | 类型 | 默认值 |  
| - | :- | :- | :-: |  
| showResult | 评分结果的显示隐藏 | Boolean | false | 
| score | 分数 | Number | '' | 
| comment | 评论 | String | '' | 
| ref | 获取当前插件实例 | String | - |
| release | 当前插件调用成功的回调 | Function | - |


### Event    

| 事件名 | 说明 | 参数 |  
| :- | :- | :- |
| show | 开启插件 | - |
| hide | 关闭插件 | - |
| release | 评分成功的回调 | - |


#### 用法示例：  
调起插件：  
```javascript
this.$refs.star.show(true).then(res => {

})
```
评分成功：  
```javascript  
this.$emit("release")
```  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
