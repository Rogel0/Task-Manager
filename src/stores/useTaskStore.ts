// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Tasks } from '@/types/types'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('TaskStore', () => {
  // State
  const taskList = ref<Tasks[]>([
    {
      taskId: 1,
      taskName: 'Gym',
      taskDesc: 'Go to gym',
      taskDate: '03/31/2025',
      taskStatus: 'Pending',
    },
  ])
  const taskID = ref(2)

  // Getters
  const numberOfTask = computed(() => taskList.value.length)

  // Actions
  const addTask = (newTask: Tasks) => {
    taskList.value.push(newTask)
    console.log('Task added:', newTask)
  }

  const generateTaskID = () => {
    taskID.value++
    return taskID.value
  }

  return {
    taskList,
    numberOfTask,
    addTask,
    taskID,
    generateTaskID,
  }
})
