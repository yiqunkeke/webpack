import avatar from './avatar.jpg';
import style from './index.scss';

function createAvatar() {
    var img = new Image(); // 创建 <img>元素
    img.src = avatar; // 指定<img> 元素的src
    // img.classList.add('avatar');
    img.classList.add(style.avatar);

    var root = document.getElementById('root');
    root.append(img);
}

export default createAvatar;