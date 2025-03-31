<script setup lang="ts">
import TaskList from '@/components/TaskList.vue'
import AddTaskBtn from '@/components/AddTask.vue'
</script>

<template>
  <main>
    <div class="container">
      <el-form>
        <div class="inputsContainer">
          <!-- <el-input placeholder="Enter new task"></el-input> -->
          <AddTaskBtn />
        </div>
      </el-form>
    </div>
    <div class="tableContainer">
      <TaskList />
    </div>
  </main>
</template>

<style scoped>
.container {
  /* background-color: bisque; */
  display: flex;
  justify-content: right;
  align-items: center;
  width: 90%;
  padding-top: 60px;
}

.tableContainer {
  display: flex;
  justify-content: center;
}

.inputsContainer {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.el-input {
  width: 400px;
  height: 40px;
}
</style>
