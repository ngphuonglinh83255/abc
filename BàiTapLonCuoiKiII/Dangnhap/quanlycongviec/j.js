document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
    updateOverview();
    document.getElementById('new-task').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    showTab('overview'); // Hiển thị tab Tổng Quan mặc định
});

function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(function(content) {
        content.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');

    if (tab === 'overview') {
        updateOverview();
    } else if (tab === 'reports') {
        updateReports();
    }
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskUser = document.getElementById('task-user');
    const taskText = taskInput.value.trim();
    const user = taskUser.value.trim();
    
    if (taskText === '' || user === '') {
        alert('Vui lòng nhập công việc và người chịu trách nhiệm.');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        user: user,
        completed: false
    };

    saveTask(task);
    renderTask(task);
    taskInput.value = '';
    taskUser.value = '';
    updateOverview();
    updateReports();
}

function saveTask(task) {
    let tasks = getTasksFromStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function renderTask(task) {
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.dataset.id = task.id;
    newTask.className = task.completed ? 'completed' : '';
    
    const taskText = document.createElement('span');
    taskText.textContent = `${task.text} (Người chịu trách nhiệm: ${task.user})`;
    taskText.onclick = function() {
        toggleTaskCompletion(task.id);
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Sửa';
    editButton.className = 'edit-button';
    editButton.onclick = function() {
        editTask(task.id);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.onclick = function() {
        deleteTask(task.id);
    };

    newTask.appendChild(taskText);
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
}

function loadTasks() {
    const tasks = getTasksFromStorage();
    tasks.forEach(task => renderTask(task));
}

function deleteTask(taskId) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.querySelector(`li[data-id="${taskId}"]`).remove();
    updateOverview();
    updateReports();
}

function toggleTaskCompletion(taskId) {
    let tasks = getTasksFromStorage();
    const task = tasks.find(task => task.id === taskId);
    task.completed =
}