// 声明 kyes 对象，来存储键盘按键
var keys = {
    '0': ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    '1': ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    '2': ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    'length': '3'
};

// 声明一个 hash 来保存按键对应的网址
var hash = {                                                        // 按键对应的网址
    'q': 'www.qq.com/',
    'w': 'weibo.com/',
    'e': 'www.ele.me/',
    'r': 'www.renren.com/',
    't': 'www.taobao.com/',
    'y': 'www.yahoo.com/',
    'u': 'www.uc.cn/',
    'i': 'www.iqiyi.com/',
    'o': 'www.oupeng.com/',
    'p': undefined,
    'a': 'www.alibaba.com/',
    's': 'www.sohu.com/',
    'd': undefined,
    'f': 'www.facebook.com/',
    'g': 'google.com/',
    'h': undefined,
    'j': undefined,
    'k': 'www.kfc.com.cn/kfccda/index.aspx',
    'l': undefined,
    'z': 'www.zhihu.com/',
    'x': undefined,
    'c': undefined,
    'v': undefined,
    'b': 'www.bilibili.com/',
    'n': undefined,
    'm': 'www.imooc.com/'
};

// 取出localStorage中的zzz对应的hash，并存到hash中
var hashInlocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null');
if (hashInlocalStorage) {
    hash = hashInlocalStorage;
}

// 创建3个div放到 main 中
var index = 0;
while (index < keys['length']) {
    var div = document.createElement('div');    // 创建div元素

    var index2 = 0;
    while (index2 < keys[index].length) {

        var kbd = document.createElement('kbd');    // 创建 kbd 元素

        kbd.textContent = keys[index][index2];      // 为 kbd 中添加内容
        var button = document.createElement('button');  // 创建 button
        button.textContent = 'Edit';                    // 给button添加文本内容
        button.id = kbd.textContent;                    // 给button添加id
        button.onclick = function (info) {              // 给button添加点击事件
            var key = info['target']['id'];             // 获取button的id
            var webSite = prompt('请输入网址');          // 弹出提示框，获取用户输入的网址
            hash[key] = webSite;                        // 将用户点击某个按键输入的网址添加到对应的hash中
            localStorage.setItem('zzz', JSON.stringify(hash));  // 只要hash变了，就把hash存到zzz里边
        };
        kbd.appendChild(button);                        // 把 button 添加到 kbd 中


        div.appendChild(kbd);                       // 将 kbd 添加到 div 中

        index2 ++;
    }

    main.appendChild(div);                      // 将 div 添加到 main 中
    index ++;
}

// 监听键盘按下事件
document.onkeypress = function (info) {
    var key = info['key'];                          // 获取按键
    // location.href = 'http://' + hash[key];       // 将按键对应的地址添加到地址栏中
    window.open('http://'+hash[key], '_blank');
    
};