window.onload = function() {
        setTimeout(function() {
          var e1 = document.querySelector(".content-loader");
          var e2 = document.querySelector(".content-mask");
          var num1 = 100;
          var st = setInterval(function() {
            num1--;
            e1.style.opacity = num1 / 100;
            if (num1 <= 0) {
              clearInterval(st);
              e1.style.display = "none";
            }
          }, 10);
          var num2 = 100;
          var stt = setInterval(function() {
            num2--;
            e2.style.opacity = num2 / 100;
            if (num2 <= 0) {
              clearInterval(stt);
              e2.style.display = "none";
            }
          }, 5);
        }, 900);
      }
