<script lang="ts" setup>
import { reactive } from "vue";
import { FormRules } from "element-plus";
import { InternalRuleItem, Value } from "async-validator";

const userForm = reactive({
  username: "",
  password: "",
});

const checkUser = (
  rule: InternalRuleItem,
  value: Value,
  callback: (error?: string | Error) => void
) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
};

const checkPass = (
  rule: InternalRuleItem,
  value: Value,
  callback: (error?: string | Error) => void
) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
};

const rules: FormRules = reactive({
  username: [{ validator: checkUser, trigger: "blur" }],
  password: [{ validator: checkPass, trigger: "blur" }],
});

const spaceDown = (e: KeyboardEvent) => {
  if (e.key === " ") {
    e.preventDefault();
  }
};

const resetUserForm = () => {
  userForm.username = "";
  userForm.password = "";
};
</script>

<template>
  <div class="loginContain">
    <el-form :rules="rules" :model="userForm" label-width="100px" status-icon @keydown="spaceDown">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userForm.username" type="text" />
      </el-form-item>
      <el-form-item label="密　码" prop="password">
        <el-input v-model="userForm.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
        <el-button @click="resetUserForm">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.loginContain {
  & {
    width: 400px;
    height: 300px;
    // background-color: white;
    box-shadow: 2px 2px 20px 0px #333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-form {
    & {
      width: 90%;
    }

    .el-input {
      width: 80%;
    }
  }
}
</style>
