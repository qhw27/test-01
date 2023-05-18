
var nvtop = document.getElementsByClassName('nvtop');
var min = document.getElementsByClassName('min');

for (var i = 0; i < nvtop.length; i++) {
    nvtop[i].setAttribute('index', i);
    nvtop[i].addEventListener('click', function () {

        var index = this.getAttribute('index')
        // //排他法

        for (var j = 0; j < nvtop.length; j++) {

            // // // 删除所有元素的 active 类
            // nvtop[j].classList.remove('active');
            // //tian加
            // this.classList.add('active')
            if (nvtop[index] == nvtop[0]) {
                nvtop[index].classList.add('active')
                nvtop[1].classList.remove('actived');
            } else
                if (nvtop[index] == nvtop[1]) {


                    nvtop[index].classList.add('actived')
                    nvtop[j].classList.remove('active');
                }


        }
        //排他法换下方内容
        for (var k = 0; k < min.length; k++) {
            min[k].style.display = 'none';
            min[index].style.display = 'block'
        }

    })
}


var dat = document.getElementsByClassName('news')[0]

var ajaxa = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP');

ajaxa.open('get', 'http://www.chenfuguo.cn:5600/news')
ajaxa.send()
ajaxa.onreadystatechange = function () {
    if (ajaxa.readyState == 4) {
        if (ajaxa.status == 200) {
            var data = JSON.parse(ajaxa.responseText).news.data
            var str = '';
            for (var i = 0; i < data.length; i++) {
                str += `<div class="item3">
                <img src=${data[i].picUrl} alt="" class="pic">
                <div class="text">
                    <p>${data[i].title}</p>
                    <span>${data[i].content}</span>
                </div>
                <div class="time">
                    <p>${data[i].time}</p>
                    <img src="./img/arrow-right.png" alt="">
                </div></div>
                `
                console.log(str);
            }
            dat.innerHTML = str;
        } else {
            console.log('请求失败');
        }
    }
}
