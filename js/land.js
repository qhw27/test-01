
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
