let addNote=document.querySelector('.addNote');
let todo_data_main=document.querySelector('.todo_data_main');
function localStorages() {
    let arr=[];
    let textarea=document.querySelectorAll('textarea');
    textarea.forEach((curelem)=>{ 
       return arr.push(curelem.value);
    });
    localStorage.setItem('data',JSON.stringify(arr));
}
function showNote(texts =''){
    let todo_data =document.createElement('div');
    todo_data.classList.add('todo_data');

    todo_data.innerHTML=`
       <div class="oparetaion">
         <div class="save"></div>
                <div class="edit_main">
                    <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <div class="remove_main"><i class="fa-solid fa-trash"></i></div>
            </div>
            <div class="overlay"></div>
            <textarea></textarea>
    `

    todo_data_main.appendChild(todo_data);

     let delet=todo_data.querySelector('.remove_main');

     let overlay=todo_data.querySelector('.overlay');
   overlay.innerHTML=texts;
     let text=todo_data.querySelector('textarea');
     let sav=todo_data.querySelector('.save');
     text.value=texts;
      if (texts=='') {
       overlay.classList.add('hide')
       sav.classList.add('hide')
     text.classList.remove('hide')
      }else{
        overlay.classList.remove('hide')
        sav.classList.remove('hide')
       text.classList.add('hide')
      }
      
     delet.onclick=()=>{
        todo_data.remove();
        localStorages();
     }

     let edit=todo_data.querySelector('.edit_main');
     edit.onclick=()=>{
        overlay.classList.toggle('hide')
        text.classList.toggle('hide');
        sav.classList.toggle('hide');
     }
    text.onchange=()=>{
       text.classList.add('hide');
       overlay.classList.remove('hide');
       overlay.innerText=text.value;
       sav.classList.toggle('hide');
       localStorages()
    }
}

let data = JSON.parse(localStorage.getItem('data'));
if (data) {
    data.forEach((datanote)=>{
        return showNote(datanote);
    })
}
addNote.addEventListener('click',()=>{
    showNote();
})