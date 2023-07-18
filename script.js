// 获取DOM元素
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')
const addButton = document.getElementById('add-button')
const clearAllButton = document.getElementById('clear-all-button')

let counter = 1 // 初始序号为1

// 监听输入框的回车键和按钮事件
todoInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTodoItem()
  }
})
addButton.addEventListener('click', function () {
  addTodoItem()
})
clearAllButton.addEventListener('click', function () {
  clearTaskList()
})

// 添加任务
function addTodoItem () {
  const task = todoInput.value.trim()
  if (task !== '') {
    const listItem = createTodoItem(task)
    todoList.appendChild(listItem)
    todoInput.value = ''
    counter++
    updateTodoItemNumbers()
  }
}

//clear all task list
function clearTaskList () {
  todoList.innerHTML = ''
  counter = 1
}

// 创建任务项
function createTodoItem (task) {
  const listItem = document.createElement('li')
  listItem.classList.add('todo-item')

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'

  const taskText = document.createElement('span')
  taskText.textContent = `${counter}. ${task}`

  const deleteButton = document.createElement('button')
  deleteButton.classList.add('delete-btn')
  deleteButton.textContent = 'X'

  listItem.appendChild(checkbox)
  listItem.appendChild(taskText)
  listItem.appendChild(deleteButton)

  // 监听删除按钮的点击事件
  deleteButton.addEventListener('click', function () {
    listItem.remove()
    updateTodoItemNumbers()
  })

  return listItem
}

// 更新任务项的序号
function updateTodoItemNumbers () {
  const taskItems = document.getElementsByClassName('todo-item')
  counter = 1 // 重置序号
  for (let i = 0; i < taskItems.length; i++) {
    const taskText = taskItems[i].querySelector('span')
    taskText.textContent = `${counter}. ${taskText.textContent.substring(3)}` // 更新序号
    counter++ // 序号自增
  }
}