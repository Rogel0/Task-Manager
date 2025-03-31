<script setup lang="ts"></script>

<template>
  <el-table style="width: 80%; padding-top: 40px">
    <el-table-column label="Task Name" />
    <el-table-column label="Description" />
    <el-table-column label="End Date" />
    <el-table-column label="Actions" />
    <el-table-column align="right">
      <template #header>
        <el-input size="large" placeholder="Type to search" />
      </template>
      <template>
        <el-button size="small"> Edit </el-button>
        <el-button size="small" type="danger"> Delete </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped></style>
