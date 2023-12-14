<script lang="ts" setup>
import { reactive, ref, Ref } from 'vue';
import { FormInstance, FormRules } from 'element-plus';
import { InternalRuleItem, Value } from 'async-validator';
import { User } from '@/utils/interface';
import * as Api from '@/utils/apis/index';

const emit = defineEmits(['closeLogin']);

const userForm: User = reactive({
  username: '',
  password: '',
});

const userFormRef = ref<FormInstance>();

const resCheck: Ref<boolean | undefined> = ref();

const checkUser = (
  rule: InternalRuleItem,
  value: Value,
  callback: (error?: string | Error) => void
) => {
  if (value === '') {
    callback(new Error('请输入用户名'));
  } else if (resCheck.value) {
    callback(new Error());
  } else {
    callback();
  }
};

const checkPass = (
  rule: InternalRuleItem,
  value: Value,
  callback: (error?: string | Error) => void
) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else if (resCheck.value) {
    callback(new Error('用户名或密码错误！'));
  } else {
    callback();
  }
};

const rules: FormRules = reactive({
  username: [{ validator: checkUser, trigger: 'blur' }],
  password: [{ validator: checkPass, trigger: 'blur' }],
});

const spaceDown = (e: KeyboardEvent) => {
  if (e.key === ' ') {
    e.preventDefault();
  }
};

const userLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async valid => {
    if (valid) {
      await Api.UserLogin.Login(userForm).then(async res => {
        if (res.data.code !== 200) {
          resCheck.value = true;
          formEl.validate(isVali => {
            if (!isVali) resCheck.value = false;
          });
        } else {
          resetUserForm(userFormRef.value);
          localStorage.setItem('token', res.data.token);
          emit('closeLogin', false);
        }
      });
    }
  });
};

const resetUserForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <div class="loginContain">
    <el-form
      ref="userFormRef"
      :rules="rules"
      :model="userForm"
      label-width="100px"
      status-icon
      @keydown="spaceDown"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userForm.username" type="text" />
      </el-form-item>
      <el-form-item label="密　码" prop="password">
        <el-input v-model="userForm.password" type="password" />
      </el-form-item>
      <el-form-item></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="userLogin(userFormRef)">登录</el-button>
        <el-button @click="resetUserForm(userFormRef)">清空</el-button>
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
