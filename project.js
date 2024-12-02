const list=document.querySelector('#task-list ul');
//add task
const addForm=document.forms['add-task'];
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value=addForm.querySelector('input[type="text"]').value;
    const li=document.createElement('li');
    const task=document.createElement('span');
    const deleteBtn=document.createElement('span');
    deleteBtn.textContent='Done';
    task.textContent=value;
    deleteBtn.classList.add('delete');
    li.appendChild(task);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    addForm.querySelector('input[type="text"]')='';
    
})
//remove task
list.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        li=e.target.parentElement;
        list.removeChild(li);
    }
})







