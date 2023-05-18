


//点击置顶
var gtop = document.getElementById('gtop')
gtop.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
};
//渲染header
var right = document.getElementsByClassName('right')[0];
var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP');
ajax_.open('get', 'http://www.chenfuguo.cn:5600/getIndexHead');
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            var date = JSON.parse(ajax_.responseText).indexData.data;
            var str = '';
            for (var i = 0; i < date.length; i++) {
                str += `<li><a href="${date[i].goUrl}" class="atag">${date[i].txt}</a></li>`
                // console.log(str);
            }
            right.innerHTML = str;

            var atags = document.getElementsByClassName('atag')
            for (var i = 0; i < atags.length; i++) {
                atags[i].setAttribute('index', i)
                atags[i].onclick = function () {
                    var index = this.getAttribute('index')
                }
            }

        } else {
            console.log('请求失败');
        }
    }
};



//头部滑动显示背景颜色
var head = document.getElementsByClassName('hdbox')[0];
var logo = document.getElementsByTagName('img')[0];
window.onscroll = function () {
    var scrolltop = document.documentElement.scrollTop;
    if (scrolltop > 2) {
        head.style.backgroundColor = 'rgba(246, 247, 243, 0.9)';
        logo.src = './img/log2.png';
        var atags = document.getElementsByClassName('atag');
        for (var i = 0; i < atags.length; i++) {
            atags[i].style.color = 'black';
        }
    } else {
        head.style.backgroundColor = '';
        logo.src = './img/logo.png';
        var atags = document.getElementsByClassName('atag');
        for (var i = 0; i < atags.length; i++) {
            atags[i].style.color = 'white';
        }
    }
};


// var pics = document.getElementsByClassName('pics')
// for (var i = 0; i < pics.length; i++) {
//     console.log(pics[i]);
//     pics[i].addEventListener('mouseover', function () {
//         console.log('------------');
//         console.log(this);
//         this.className = '.aa'

//     })
// }


//轮播图



var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true, //自动切换轮播图
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//第二个轮播图
var mySwiper = new Swiper('.swiper2', {
    effect: 'flip',
    flipEffect: {
        slideShadows: true,
        limitRotation: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

