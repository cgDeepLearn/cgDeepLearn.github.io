
/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var arr = new Array("Python","C++","Matplotlib","Django", "Linux", "Spark","Pandas","Numpy","CNN","LSTM","RNN","LR","KNN","Random Forest","GMM","SVM","GBDT", "Regression","Cluster","Decison Tree","AdaBoost");
        a_idx = Math.floor(Math.random()*arr.length) // 随机元素
        var $i = $("<span/>").text(arr[a_idx]);
        //a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        //随机颜色
        function s(){
            return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        }

        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": s()
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
