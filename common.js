var list = document.querySelector('ul'); // возвращает сам элемент
const fromstorage = localStorage.getItem('todo');
if(fromstorage){
    list.innerHTML = fromstorage; // возвращает код html элемента
}
//Закрашивание
list.addEventListener('click', function(ev)
{
    if (ev.target.tagName === 'LI')
    {
        ev.target.classList.toggle('checked');
    }
}, false);

//Удаление
var close = document.getElementsByClassName("close"); // возвращает ссылку на элемент по его названию класса
var i;
for (i = 0; i < close.length; i++)
{
    close[i].onclick = function()
    {
        var div = this.parentElement; // возвращает элемент, который является родителем данного узла
        div.remove(); // удаляем объект
        localStorage.setItem('todo', list.innerHTML); // для удаления из LocalStorage
    }
}

//Добавление нового элемента
function newElement() {
    var li = document.createElement("li"); //Создаем новый элемент списка
    var inputValue = document.getElementById("myInput").value; // возвращает ссылку на элемент по его идентификатору
    var t = document.createTextNode(inputValue); //Текстовый узел
    li.appendChild(t); //Добавляем узел в конец списка элементов (append метод для вставки)

    if (inputValue === '')
    {
        alert("Вы должны что-то написать!");
    }
    else
    {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++)
    {
        close[i].onclick = function() //анонимная функция!!!
        {
        var div = this.parentElement; // возвращает элемент, который является родителем данного узла
        div.remove();
        localStorage.setItem('todo', list.innerHTML);
        }
    }
    localStorage.setItem('todo', list.innerHTML); // добавление в LocalStorage
}


