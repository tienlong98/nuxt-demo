<template>
    <el-container>
      <el-header>
        <menu-component></menu-component>
      </el-header>
      <el-main
        ><div><slot /></div>
      </el-main>
      <el-footer>
        <footer-component></footer-component>
      </el-footer>
    </el-container>
</template>
