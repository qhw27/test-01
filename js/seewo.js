var fivenv = document.getElementsByClassName('fivenv')[0]
var ajaxf = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP');
ajaxf.open('get', 'http://www.chenfuguo.cn:5600/wisdomClass')
ajaxf.send()
ajaxf.onreadystatechange = function () {
    if (ajaxf.readyState == 4) {
        if (ajaxf.status == 200) {
            var data = JSON.parse(ajaxf.responseText).wisdomClass.data
            var str = ''
            for (var i = 0; i < data.length; i++) {
                str += `<li>
                <div class="topx"></div>
                <p>${data[i].title}</p>
                <p><a href="#">${data[i].number}</a >
            </li > `
            }
            fivenv.innerHTML = str
        } else {
            console.log('请求失败');
        }
    }
}




var item1 = document.getElementsByClassName('item1p')[0]
var yc = document.querySelectorAll('.yc')
var xs = document.getElementsByClassName('xs')[0]
function more() {
    for (var i = 0; i < yc.length; i++) {
        yc[i].style.opacity = 1;
    }
    item1.style.height = '640px';
    xs.style.opacity = 0;
}





var mlist = document.getElementsByClassName('mlist');
var min = document.getElementsByClassName('min');

for (var i = 0; i < mlist.length; i++) {
    // console.log(mlist[i]);
    mlist[i].setAttribute('index', i);
    mlist[i].addEventListener('click', function () {

        var index = this.getAttribute('index')
        // //排他法

        for (var j = 0; j < mlist.length; j++) {

            // 删除所有元素的 active 类
            mlist[j].classList.remove('active');
            //tian加
            this.classList.add('active')

        }
        //排他法换下方内容
        for (var k = 0; k < min.length; k++) {
            min[k].style.display = 'none';
            min[index].style.display = 'block'
        }

    })
}
