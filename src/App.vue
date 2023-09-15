<template>
  <div style="height:100%">
    <div id="container"></div>
    <div class="introduce">
      <div class="introduce-warp">
        <div class="img">
          <img width="94" :src="require('@/assets/WX20230915-135101@2x.png')" alt="">
        </div>
        <div>
          <div style="font-size: 22px;font-weight: bold">新德科技住宅</div>
          <div style="line-height: 22px;margin-top: 12px">苏州工业园区独墅湖启月街紫金东方大厦3-102号</div>
          <div style="font-size: 14px">
            <div style="margin-top: 12px">开放时间</div>
            <div>09:00-17:00</div>
            <div style="margin-top: 12px">联系电话</div>
            <div>13739175399</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted} from "vue";

onMounted(()=>{
  initMap()
})

function initMap(){
  const targetLat = 120.729615; // 目标位置的纬度
  const targetLng = 31.270671; // 目标位置的经度
  var map = new window.BMapGL.Map("container");
  const point = new window.BMapGL.Point(targetLat,targetLng); // 坐标点的经度和纬度
  map.centerAndZoom(point, 19); // 设置中心点和缩放级别
  const markerPoint = new window.BMapGL.Point(targetLat,targetLng); // 坐标点的经度和纬度
  const marker = new window.BMapGL.Marker(markerPoint);
  map.addOverlay(marker); // 添加标注到地图上
  const infoWindow = new window.BMapGL.InfoWindow("苏州RUUD全空气体验厅欢迎您");
  // const icon = new window.BMapGL.Icon("path-to-icon-image.png", new window.BMapGL.Size(30, 30));
  // const customMarker = new window.BMapGL.Marker(markerPoint, { icon: icon });
  (marker as any).addEventListener("click", function () {
    map.openInfoWindow(infoWindow, markerPoint); // 在标注上打开信息窗口
  });
  (marker as any).addEventListener('click', function() {
    window.location.href = `baidumap://map/navi?location=${targetLat},${targetLng}`;
  });
  const scaleCtrl = new window.BMapGL.ScaleControl();  // 添加比例尺控件
  map.addControl(scaleCtrl);
  const zoomCtrl = new window.BMapGL.ZoomControl();  // 添加缩放控件
  map.addControl(zoomCtrl);

}
</script>
<style lang="less">
body,
html,
#app,
#container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "微软雅黑";
}
#container{
  height:50% !important;
}
.introduce-warp{
  display: flex;padding: 20px;
}
.img{
  margin-right: 12px;
}
.introduce{
  height:50%;
  background: #000;
  color: #fff;
}
</style>
