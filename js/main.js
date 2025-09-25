// --- 旧代码：我们将其暂时注释掉，以便未来参考 ---
/*
const mainTitle = document.querySelector('header.container h1');
const changeButton = document.querySelector('.btn');

changeButton.addEventListener('click', function(event) {
  event.preventDefault();
  mainTitle.textContent = "指令已接收。DOM已被再次修改。";
  console.log("按钮被点击了！");
});
*/

// --- 新代码：实时回显功能 ---

// 1. 定位新的“演员”
const inputField = document.querySelector('#text-input'); // 通过ID选择器找到输入框
const outputParagraph = document.querySelector('#text-output'); // 通过ID选择器找到用于输出的span

// 2. 为输入框“安装”一个“输入”事件的监听器
inputField.addEventListener('input', function() {
    // 3. 定义监听到“输入”后，要执行的动作
    const currentText = inputField.value; // 读取输入框当前的值
    outputParagraph.textContent = currentText; // 将读取到的值，设置为输出区域的文本内容
});