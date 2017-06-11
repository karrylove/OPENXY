    window.onload = function () {
      var canvas = document.getElementById("canvas");
      if (canvas) {
        var context = canvas.getContext("2d");
        drawStar(context, 50, 100, 100);
      } else {
        document.writeln("浏览器不支持canvas组件");
      }
    }
    function drawStar(context, r, x, y) {
      context.lineWidth = 5;
      context.beginPath();
      var dit = Math.PI * 4 / 5;
      var sin = Math.sin(0) * r + y;
      var cos = Math.cos(0) * r + x;
      console.log(0+":"+0);
      context.moveTo(cos, sin);
      for (var i = 0; i < 5; i++) {
        var tempDit = dit * i;
        sin = Math.sin(tempDit) * r + y;
        cos = Math.cos(tempDit) * r + x;
        context.lineTo(cos, sin);
        console.log(sin+":"+sin+":"+tempDit);
      }
      context.closePath();
      context.strokeStyle = "red";
      context.fillStyle = "#DDDDDD";
      context.fill();
    }
