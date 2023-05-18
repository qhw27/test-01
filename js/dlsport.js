// //渲染header
// var right = document.getElementsByClassName('right')[0];
// var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP');
// ajax_.open('get', 'http://www.chenfuguo.cn:5600/getIndexHead');
// ajax_.send();
// ajax_.onreadystatechange = function () {
//     if (ajax_.readyState == 4) {
//         if (ajax_.status == 200) {
//             var date = JSON.parse(ajax_.responseText).indexData.data;
//             var str = '';
//             for (var i = 0; i < date.length; i++) {
//                 str += `<li><a href="${date[i].goUrl}" class="atag">${date[i].txt}</a></li>`
//                 // console.log(str);
//             }
//             right.innerHTML = str;

//             var atags = document.getElementsByClassName('atag')
//             for (var i = 0; i < atags.length; i++) {
//                 atags[i].setAttribute('index', i)
//                 atags[i].onclick = function () {
//                     var index = this.getAttribute('index')
//                 }
//             }

//         } else {
//             console.log('请求失败');
//         }
//     }
// };



//渲染中间
var dith = document.getElementsByClassName('dith')[0];
var ajaxc = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP');
ajaxc.open('get', 'http://www.chenfuguo.cn:5600/getIntroduce');
ajaxc.send();
ajaxc.onreadystatechange = function () {

    if (ajaxc.readyState == 4) {
        // console.log(ajax_);
        if (ajaxc.status == 200) {
            var date = JSON.parse(ajaxc.responseText).introduce.data;
            var str = '';
            for (var i = 0; i < date.length; i++) {
                str += `<li class="list">
                <div class="pics"> <img src=${date[i].iconPath
                    }  alt="">
           
                <p>${date[i].title}</p>
                <span>${date[i].content}</span>
            </li> `
                console.log(str);
            }
            dith.innerHTML = str;

        } else {
            console.log('请求失败');
        }
    }
};
