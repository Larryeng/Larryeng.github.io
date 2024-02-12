/** 监听copy事件 */
document.addEventListener("copy", function (e) {
    //复制的内容
    btf.snackbarShow('複製成功，請遵循GPL協議', false, 3000)
})
// 检测按键
window.onkeydown = function (e) {
    if (e.keyCode === 123) {
        btf.snackbarShow('開發者模式已開啟，請遵循GPL協議', false, 3000)
    }
}