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
};
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onreadystatechange = () => {
        if (readyState === 4) {
            if (200 <= request.status < 300) {
                const script = document.createElement("script");
                script.innerHTML = request.response;
                document.body.appendChild(script);
            } else {
                alert("加载JS 失败");
            }

        }

    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");  //向服务器发请求路径
    request.onreadystatechange = () => {
        if (readyState === 4) {
            if (200 <= request.status < 300) {
                const div = document.createElement("div");
                div.innerHTML = request.response;
                document.body.appendChild(div);
            }

        }
    };
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());

        }
    };
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const bool = JSON.parse(request.response);//将符合JSON语法的字符串转换成JS对应类型的数据
            console.log(bool);
        }
    }
    request.send();
};

let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1
        }
    };
    request.send();
};











