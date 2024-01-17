document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    // อาร์เรย์ส าหรับเก็บรายการ Todo
    let todos = [];

    // เพิ่มรายการ Todo
    function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
    const todoItem = {
    
    text: todoText,
    completed: false,
    };
    todos.push(todoItem);
    renderTodoList();
    todoInput.value = "";
    }
    }
    // ลบรายการ Todo
    function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodoList();
    }
    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodoList();
    }
    // แสดงรายการ Todo บนหน้าเว็บ
    function renderTodoList() {
    console.log(todos);
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
    const todoItem = todos[i];
    const listItem = document.createElement("li");
    listItem.textContent = todoItem.text;
    if (todoItem.completed) {
    listItem.classList.add("completed");
    }
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "ลบ";
    deleteButton.addEventListener("click", () => deleteTodo(i));
    const completeButton = document.createElement("button");
    completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
    completeButton.addEventListener("click", () => toggleComplete(i));
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    }
    }
    // การกดปุ่ ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
    addTodo();
    }
    });
    
    // แสดงรายการ Todo คร้ังแรก
    renderTodoList();
    });

    /** มีฟังก์ชันหลักๆ 4ฟังก์ชัน 
     * ฟังก์ชัน addTodo ทำหน้าที่เพิ่มรายการโดยรับค่าข้อความจากการinputของผู้ใช้มาเก็บใน array จากนั้นเรียกใช้ฟังก์ชัน renderTodoList เพื่อแสดงรายการที่อัปเดตใหม่
     * ฟังก์ชัน deleteTodo ทำหน้าที่ลบรายการ Todo 
     * ฟังก์ชัน ToggleComplete ทำหน้าที่ตรวจสอบ/ยกเลิกการเสร็จสิ้นของรายการ
     * ฟังก์ชัน renderTodoList เป็นฟังก์ชันที่ทำหน้าที่แสดงรายการ Todoบนหน้าเว็บโดยผ่านลูปอาเรย์เพื่อสร้างรายการ liใหม่สำหรับแต่ละรายการ
     * 
     * */ 
    