<template>
  <div class="cart py-container">
    <!--主内容-->
    <div class="checkout py-container pay">
      <div class="checkout-tit">
        <h4 class="fl tit-txt">
          <span class="success-icon"></span
          ><span class="success-info"
            >订单提交成功，请您及时付款！订单 号：{{
              payObj.out_trade_no
            }}</span
          >
        </h4>
        <span class="fr"
          ><em class="sui-lead">应付金额：</em
          ><em class="orange money">￥{{ payObj.total_fee }}</em></span
        >
        <div class="clearfix"></div>
      </div>
      <div
        class="checkout-steps"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        "
      >
        <div
          class="fl weixin"
          style="position: absolute; top: 20px; left: 20px"
        >
          微信支付
        </div>
        <div class="fl sao" style="text-align: center">
          <p class="red">请使用微信扫一扫。</p>
          <div class="fl code">
            <qriously :value="payObj.code_url" :size="338" />
            <div class="saosao">
              <p>请使用微信扫一扫</p>
              <p>扫描二维码支付</p>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <!-- <p><a href="pay.html" target="_blank">> 其他支付方式</a></p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { createWeChatPayCode } from "~/apis/orderApi";
import { queryPayStatus } from "~/apis/orderApi";

export default {
  name: "PayInfo",
  asyncData({ params }) {
    return createWeChatPayCode(params.orderNo).then(({ code, data }) => {
      if (code === 20000) {
        return {
          payObj: data,
        };
      }
    });
  },
  data() {
    return {
      // 定时器id
      timerId: null,
      // 是否打开定时器
      isTurnOnTimer: true,
    };
  },
  mounted() {
    // 组件挂载完成后，开始定时器，每隔3秒查询一次订单状态
    this.queryOrderStatus();
  },
  beforeDestroy() {
    // 组件销毁时，清除定时器
    this.timerId && clearInterval(this.timerId);
  },
  methods: {
    // 定时器, 每隔3秒查询一次订单状态
    queryOrderStatus() {
      this.timerId = setInterval(async () => {
        const { code } = await queryPayStatus(this.payObj.out_trade_no);
        if (code === 20000) {
          // 关闭定时器标记
          this.isTurnOnTimer = false;
          // 清除定时器
          clearInterval(this.timerId);
          // 订单支付成功
          this.$message.success("支付成功");
          // 路由跳转
          this.$router.push("/course/" + this.payObj.course_id);
        }
      }, 3000);
    },
  },
};
</script>
