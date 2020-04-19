function counter(){
    var div = document.createElement('div');
    div.setAttribute('id', 'counter');
    div.innerHTML = 1;
    // 每次点击，div 标签中的内容都会自动加1
    div.onclick = function () {
        div.innerHTML = parseInt(div.innerHTML, 10) + 1; 
    }
    document.body.appendChild(div);
}

export default counter;