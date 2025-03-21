<script setup></script>
<template>
  <div class="productSeriesEng">
    <div class="text">
      <div class="h">CORE PRODUCTS</div>
    </div>
    <div class="content">
      <div class="left-column">
        <ul class="vertical-center">
          <div class="text active"><span>HIGH VOLTAGE ELECTRICAL INDUSTRY</span></div>
          <div class="text"><span>SYSTEM INTEGRATION BUSINESS</span></div>
          <div class="text"><span>ELECTRIC ENERGY STORAGE BUSINESS</span></div>
          <div class="text"><span>DISTRIBUTION NETWORK INDUSTRY</span></div>
          <div class="text"><span>OPERATION AND MAINTENANCE SERVICES</span></div>
          <div class="text"><span>ELECTRIC BOILER AND THERMAL ENERGY STORAGE BUSINESS</span></div>
          <div class="text"><span>COMPONENT MANUFACTURING INDUSTRY</span></div>
          <div class="text"><span>INTEGRATED ENERGY SERVICES BUSINESS</span></div>
          <div class="text"><span>SMART POWER DISTRIBUTION BUSINESS</span></div>
        </ul>
      </div>
      <div class="right-column">
        <div class="product-item">
          <div class="product-number">01</div>
          <div class="product-text">
            <div class="top">ZHW1-252 (L)/T4000-50 type</div>
            <div class="bottom">Composite composite electrical appliance</div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-number">02</div>
          <div class="product-text">
            <div class="top">ZHW1-252 (L)/T4000-50 type</div>
            <div class="bottom">Composite composite electrical appliance</div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-number">03</div>
          <div class="product-text">
            <div class="top">ZHW1-252 (L)/T4000-50 type</div>
            <div class="bottom">Composite composite electrical appliance</div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-number">04</div>
          <div class="product-text">
            <div class="top">ZHW1-252 (L)/T4000-50 type</div>
            <div class="bottom">Composite composite electrical appliance</div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-number">05</div>
          <div class="product-text">
            <div class="top">ZHW1-252 (L)/T4000-50 type</div>
            <div class="bottom">Composite composite electrical appliance</div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-number">06</div>
          <div class="product-text">
            <div class="top">ZHW1-252 (L)/T4000-50 type</div>
            <div class="bottom">Composite composite electrical appliance</div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-number">07</div>
          <div class="product-text">
            <div class="top">ZHW1-252 (L)/T4000-50 type</div>
            <div class="bottom">Composite composite electrical appliance</div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-number">08</div>
          <div class="product-text">
            <div class="top">ZHW1-252 (L)/T4000-50 type</div>
            <div class="bottom">Composite composite electrical appliance</div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-number">09</div>
          <div class="product-text">
            <div class="top">ZHW1-252 (L)/T4000-50 type</div>
            <div class="bottom">Composite composite electrical appliance</div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-number">10</div>
          <div class="product-text">
            <div class="top">ZHW1-252 (L)/T4000-50 type</div>
            <div class="bottom">Composite composite electrical appliance</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 1.25rem;
}
.productSeriesEng {
  position: relative;
  margin: auto;
  width: 100%;
  border-radius: 1.25rem;
  background-color: #fff;
  height: 120rem;
}
.text {
  padding-top: 3.125rem;
  height: 9.5625rem;
  margin: auto;
  border-bottom: 0.0625rem solid rgb(64, 64, 64);
}
.text .h {
  font-size: 2.8125rem;
  text-align: center;
}
.content {
  display: flex;
}

.left-column {
  padding-top: 4.125rem;
  margin-left: 13.125rem;
  float: left;
}

.vertical-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.left-column .text {
  width: 32.9375rem;
  position: relative;
  height: 6.9375rem;
  font-size: 1.5rem;
  font-family: "Avenir";
  border-bottom: 0.0625rem #7b7a7a solid;
  padding: 1rem 0rem;
  position: relative;
  cursor: pointer;
}
.left-column .text span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.left-column .active::after {
  /* 移除文字符号，改用纯 CSS 三角形 */
  content: "";
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  /* 三角形样式（向右箭头） */
  width: 0;
  height: 0;
  border-top: 1.5625rem solid transparent;
  border-bottom: 1.5625rem solid transparent;
  border-left: 1.75rem solid #006ec0; /* 主箭头颜色 */
  transition: transform 0.3s ease;
}
.left-column .active {
  color: #006ec0;
}
.right-column {
  flex: 1;
  margin-left: 7.6875rem;
  padding-top: 4.125rem;
  float: left;
}

.product-item {
  display: flex;
  width: 100%;
  height: 8.6875rem;
  margin-bottom: 0.625rem;
  background-color: #f7f8f8;
}
.product-item .product-number {
  margin-left: 1.875rem;
  font-size: 2.25rem;
  font-family: "Avenir";
  line-height: 8.6875rem;
}

.product-item .product-text {
  margin-top: 2rem;
  margin-left: 2rem;
  font-size: 1.625rem;
  font-family: "Avenir";
  color: rgb(89, 87, 87);
}
.product-number {
  color: #006ec0;
}

@media (min-width: 500px) and (max-width: 600px) {
  .left-column .text {
    width: 23.9375rem;
    height: 5.9375rem;
    font-size: 1.1rem;
    padding: 1rem 0rem;
  }
  .left-column .active::after {
    /* 移除文字符号，改用纯 CSS 三角形 */
    content: "";
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    /* 三角形样式（向右箭头） */
    width: 0;
    height: 0;
    border-top: 1.0625rem solid transparent;
    border-bottom: 1.0625rem solid transparent;
    border-left: 1.3rem solid #006ec0; /* 主箭头颜色 */
    transition: transform 0.3s ease;
  }

  .left-column li:hover::after {
    transform: translateY(-50%) rotate(90deg);
  }

  /* 子菜单展开状态样式 */
  .left-column li.active::after {
    border-left-color: #2f54eb; /* 激活状态颜色 */
    transform: translateY(-50%) rotate(90deg);
  }
  .right-column {
    flex: 1;
    margin-left: 6rem;
    padding-top: 4.125rem;
  }

  .product-item {
    height: 6.0875rem;
    margin-bottom: 0.625rem;
  }
  .left-column {
    padding-top: 4.125rem;
    margin-left: 6.125rem !important;
  }
  .product-item .product-number {
    margin-left: 1.875rem;
    font-size: 1.7rem;
    line-height: 6.6875rem;
  }

  .product-item .product-text {
    margin-top: 1.4rem;
    margin-left: 2rem;
    font-size: 1.125rem;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .left-column .text {
    width: 17.9375rem;
    height: 5.9375rem;
    font-size: 0.9rem;
    padding: 1rem 0rem;
  }
  .right-column {
    flex: 1;
    margin-left: 6rem;
    padding-top: 4.125rem;
  }
  .left-column .active::after {
    /* 移除文字符号，改用纯 CSS 三角形 */
    content: "";
    position: absolute;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    /* 三角形样式（向右箭头） */
    width: 0;
    height: 0;
    border-top: 0.8rem solid transparent;
    border-bottom: 0.8rem solid transparent;
    border-left: 1rem solid #006ec0; /* 主箭头颜色 */
    transition: transform 0.3s ease;
  }
  .product-item {
    height: 6.0875rem;
    margin-bottom: 0.625rem;
  }
  .left-column {
    padding-top: 4.125rem;
    margin-left: 6.125rem !important;
  }
  .product-item .product-number {
    margin-left: 1.875rem;
    font-size: 1.7rem;
    line-height: 6.6875rem;
  }

  .product-item .product-text {
    margin-top: 1.4rem;
    margin-left: 2rem;
    font-size: 1.125rem;
  }
}
@media (min-width: 800px) and (max-width: 900px) {
  .left-column .text {
    width: 17.9375rem !important;
    height: 5.9375rem;
    font-size: 0.9rem;
    padding: 1rem 0rem;
  }
  .left-column .active::after {
    /* 移除文字符号，改用纯 CSS 三角形 */
    content: "";
    position: absolute;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    /* 三角形样式（向右箭头） */
    width: 0;
    height: 0;
    border-top: 0.8rem solid transparent;
    border-bottom: 0.8rem solid transparent;
    border-left: 1rem solid #006ec0; /* 主箭头颜色 */
    transition: transform 0.3s ease;
  }
  .right-column {
    flex: 1;
    margin-left: 6rem;
    padding-top: 4.125rem;
  }
  .product-item {
    height: 6.0875rem;
    margin-bottom: 0.625rem;
  }
  .left-column {
    padding-top: 4.125rem;
    margin-left: 6.125rem !important;
  }
  .product-item .product-number {
    margin-left: 1.875rem;
    font-size: 1.7rem;
    line-height: 6.6875rem;
  }
  .product-item .product-text {
    margin-top: 1.4rem;
    margin-left: 2rem;
    font-size: 1.125rem;
  }
}
</style>
