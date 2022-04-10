<template>
  <div class="login-table">
    <div class="inputbox">
      <form action="">
        <slot name="input"></slot>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-table",
};
</script>

<style src="@/assets/css/user/login-input.css" scoped></style>
