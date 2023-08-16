<template>
  <div id="container"></div>
</template>
<script setup lang="ts">
import {onMounted} from "vue";

onMounted(()=>{
  initMap()
})

function initMap(){
  var map = new window.BMapGL.Map("container");
  const point = new window.BMapGL.Point(120.729386,31.270316); // 坐标点的经度和纬度
  map.centerAndZoom(point, 19); // 设置中心点和缩放级别
  const markerPoint = new window.BMapGL.Point(120.729381,31.270285); // 坐标点的经度和纬度
  const marker = new window.BMapGL.Marker(markerPoint);
  map.addOverlay(marker); // 添加标注到地图上
  const infoWindow = new window.BMapGL.InfoWindow("苏州RUUD全空气体验厅欢迎您");
  // const icon = new window.BMapGL.Icon("path-to-icon-image.png", new window.BMapGL.Size(30, 30));
  // const customMarker = new window.BMapGL.Marker(markerPoint, { icon: icon });
  (marker as any).addEventListener("click", function () {
    map.openInfoWindow(infoWindow, markerPoint); // 在标注上打开信息窗口
  });

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
</style>
