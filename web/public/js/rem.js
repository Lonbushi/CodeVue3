function remSize(){
    //获取设备宽度
    var devicewidth = document.documentElement.clientWidth || window.innerWidth
    if(devicewidth>=750){
        devicewidth=750
    }
    if(devicewidth<=320){
        devicewidth=320
    }
    document.documentElement.style.fontSize=(devicewidth/7.5)+'px'
    //设置字体大小
    document.querySelector('body').style.fontSize=0.3+'rem'
}
remSize()
window.onresize=function(){
    remSize()
}