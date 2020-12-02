<template>
  <div class="login-box">
    <!-- 手机号：<input type="text" v-model="phone"><br>
      密码：<input type="password" v-model="password"><br>
      <button @click="loginHandle">登录</button> -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import api from "../api";
import '../plugins/vant'
export default {
  name: "Mine",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      api.login(this.phone, this.password).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style scoped lang="less">
.login-box{
  margin-top: 50px;
  padding: 10px;
  input {
  border: 1px solid #000;
}
}

</style>