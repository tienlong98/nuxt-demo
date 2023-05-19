<template>
  <div class="custom-menu">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/customer"> Users </NuxtLink>
        </li>
        <li>LogIn</li>
      </ul>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.custom-menu {
  nav {
    ul {
      display: flex;
      justify-content: center;
      li {
        list-style: none;
        padding: 0 25px;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
}
</style>
