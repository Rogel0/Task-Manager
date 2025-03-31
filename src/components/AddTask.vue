<script setup lang="ts">
import { ref } from 'vue'

const AddTask = () => {}

const centerDialogVisible = ref(false)
</script>

<template>
  <el-button @click="centerDialogVisible = true" type="primary">Add Task</el-button>

  <!-- Dialog -->
  <el-dialog v-model="centerDialogVisible" width="600" align-center>
    <el-form style="padding-top: 10px">
      <el-form-item>
        <el-input type="hidden"></el-input>
        <el-input placeholder="Enter task name" size="large"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Enter task description" size="large"></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          size="large"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="AddTask" class="btnSave" type="primary">Save</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style scoped>
.el-button {
  height: 40px;
}

.btnSave {
  width: 100%;
}
</style>
