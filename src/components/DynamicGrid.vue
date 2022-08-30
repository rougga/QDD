<template>
  <div>
    <grid-layout  :layout.sync="layout" :col-num="colNum" :row-height="1" :margin="[0, 0]" :vertical-compact="false"
      :use-css-transforms="true"  :prevent-collision="true" :style="grid_style">
      <grid-item v-for="item in layout" :key="item.i" :static="item.static" :x="item.x" :y="item.y" :w="item.w"
        :h="item.h" :i="item.i" :isResizable="!is_display" :isDraggable="!is_display" >
        <component :is="item.content" :key="item.i" :item_data="item" :ref="item.ref" ></component>
        <span class="remove" v-if="!is_display" @click="removeItem(item.i)">x</span>
      </grid-item>
    </grid-layout>
     
  </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout"

export default {
  components: {
    GridLayout,
    GridItem
  },
  data() {
    return {
      layout: [

      ],
      is_display: true,
      colNum: window.screen.width,
      index: 0,
      dyncomponent: null,
      
    }
  },
  props: ['grid_style'],
 
  mounted() {
    // this.$gridlayout.load();
    this.index = this.layout.length;
    this.is_display = this.$route.path.includes("display");
    

  },
  methods: {
    addItem: function (item) {
      
      // Add a new item. It must have a unique key!
      this.layout.push({
        x: (this.layout.length * 2) % (this.colNum || 12),
        y: this.layout.length + (this.colNum / 10 || 12), // puts it at the bottom
        w: item.width,
        h: item.height,
        i: this.index,
        ref : item.ref,
        content : item.widget
      });
      // Increment the counter to ensure key is always unique.
      this.index++;
    },
    loadItem: function (item) {
      
      // Add a new item. It must have a unique key!
      this.layout.push({
        x: item.x,
        y: item.y, // puts it at the bottom
        w: item.width,
        h: item.height,
        i: this.index,
        ref : item.ref,
        content: item.widget,
        data_loaded: item.data_loaded,
      });
      // Increment the counter to ensure key is always unique.
      this.index++;
    },
    removeItem: function (val) {
      const index = this.layout.map(item => item.i).indexOf(val);
      this.layout.splice(index, 1);
    },
  }
}
</script>

<style>

.columns {
  -moz-columns: 120px;
  -webkit-columns: 120px;
  columns: 120px;
}

/*************************************/
.remove {
  position: absolute;
  right: 2px;
  top: 0;
  cursor: pointer;
}

.vue-grid-layout {
  background: #eee;
  
}

.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ffffff00;
  
  /* border: 1px solid black; */
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>