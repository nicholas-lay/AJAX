getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {

            if (request.status >= 200 && request.status < 300) {
                // 创建 style 标签
                const style = document.createElement("style");
                // 填写 style 内容
                style.innerHTML = request.response;
                // 插到头里面
                document.head.appendChild(style);
            } else {
                alert("加载 CSS 失败");
            }
        }
    };
    request.send();

}




