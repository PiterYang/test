// (function() {
//     //获取复制事件
//     document.addEventListener("copy", function(event) {
//         //获取复制的数据
//         var clipboardData = event.clipboardData || window.clipboardData;
//         if (!clipboardData) {
//             return;
//         }

//         //返回一个  Selection 对象，表示用户选择的文本范围或光标的当前位置
//         // 获取当前用户光标选择的文本
//         var table = document.createElement("table");
//         var tr = document.createElement("tr");
//         var td = document.createElement("td");
//         td.innerText = "hehehehe,tste,tst";
//         tr.appendChild(td);

//         table.appendChild(tr);
//         var text = window.getSelection().toString();
//         if (text) {
//             event.preventDefault();
//             console.log(table);
//             //重新设置粘贴板的文本
//             clipboardData.setData("text/html", text);
//         }
//     });
// })();
var segment = document.createElement("segment");
var div = document.createElement("div");
div.style.width = 0;
div.style.height = 0;
div.style.position = "absolute";
div.style.left = "-1000px";
var table = document.createElement("table");
table.style.border = "1px solid #000";
var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerText = "hehehehe,tste,tst";
tr.appendChild(td);
table.appendChild(tr);
div.appendChild(table);
document.body.appendChild(div);
(function() {
    //获取复制事件
    document.addEventListener("copy", function(event) {
        //获取复制的数据
        var clipboardData = event.clipboardData || window.clipboardData;
        if (!clipboardData) {
            return;
        }

        //返回一个  Selection 对象，表示用户选择的文本范围或光标的当前位置
        // 获取当前用户光标选择的文本
        //         var table = document.createElement("table");
        //         var tr = document.createElement("tr");
        //         var td = document.createElement("td");
        //         td.innerText = "hehehehe,tste,tst";
        //         tr.appendChild(td);

        //         table.appendChild(tr);
        var s = window.getSelection();

        var range = document.createRange();
        range.selectNode(table);
        s.removeAllRanges();
        s.addRange(range);

        if (s) {
            event.preventDefault();
            console.log(s);
            //s
            clipboardData.setData("text/html", s);
        }
    });
})();
