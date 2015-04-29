﻿jQuery.extend({
    easing: {
        backEaseIn: function(e, g, a, d) {
            var f = a + d;
            var b = 1.70158;
            return f * (e /= 1) * e * ((b + 1) * e - b) + a
        },
        backEaseOut: function(e, g, a, d) {
            var f = a + d;
            var b = 1.70158;
            return f * ((e = e / 1 - 1) * e * ((b + 1) * e + b) + 1) + a
        },
        backEaseInOut: function(e, g, a, d) {
            var f = a + d;
            var b = 1.70158;
            if ((e /= 0.5) < 1) {
                return f / 2 * (e * e * (((b *= (1.525)) + 1) * e - b)) + a
            } else {
                return f / 2 * ((e -= 2) * e * (((b *= (1.525)) + 1) * e + b) + 2) + a
            }
        },
        bounceEaseIn: function(e, g, b, d) {
            var f = b + d;
            var a = this.bounceEaseOut(1 - e, 1, 0, d);
            return f - a + b
        },
        bounceEaseOut: function(d, f, a, b) {
            var e = a + b;
            if (d < (1 / 2.75)) {
                return e * (7.5625 * d * d) + a
            } else {
                if (d < (2 / 2.75)) {
                    return e * (7.5625 * (d -= (1.5 / 2.75)) * d + 0.75) + a
                } else {
                    if (d < (2.5 / 2.75)) {
                        return e * (7.5625 * (d -= (2.25 / 2.75)) * d + 0.9375) + a
                    } else {
                        return e * (7.5625 * (d -= (2.625 / 2.75)) * d + 0.984375) + a
                    }
                }
            }
        },
        circEaseIn: function(d, f, a, b) {
            var e = a + b;
            return - e * (Math.sqrt(1 - (d /= 1) * d) - 1) + a
        },
        circEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * Math.sqrt(1 - (d = d / 1 - 1) * d) + a
        },
        circEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return - e / 2 * (Math.sqrt(1 - d * d) - 1) + a
            } else {
                return e / 2 * (Math.sqrt(1 - (d -= 2) * d) + 1) + a
            }
        },
        cubicEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d * d + a
        },
        cubicEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * ((d = d / 1 - 1) * d * d + 1) + a
        },
        cubicEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d * d + a
            } else {
                return e / 2 * ((d -= 2) * d * d + 2) + a
            }
        },
        elasticEaseIn: function(g, i, a, f) {
            var h = a + f;
            if (g == 0) {
                return a
            }
            if (g == 1) {
                return h
            }
            var e = 0.25;
            var d;
            var b = h;
            if (b < Math.abs(h)) {
                b = h;
                d = e / 4
            } else {
                d = e / (2 * Math.PI) * Math.asin(h / b)
            }
            return - (b * Math.pow(2, 10 * (g -= 1)) * Math.sin((g * 1 - d) * (2 * Math.PI) / e)) + a
        },
        elasticEaseOut: function(g, i, a, f) {
            var h = a + f;
            if (g == 0) {
                return a
            }
            if (g == 1) {
                return h
            }
            var e = 0.25;
            var d;
            var b = h;
            if (b < Math.abs(h)) {
                b = h;
                d = e / 4
            } else {
                d = e / (2 * Math.PI) * Math.asin(h / b)
            }
            return - (b * Math.pow(2, -10 * g) * Math.sin((g * 1 - d) * (2 * Math.PI) / e)) + h
        },
        expoEaseIn: function(d, f, a, b) {
            var e = a + b;
            return (d == 0) ? a: e * Math.pow(2, 10 * (d - 1)) + a - e * 0.001
        },
        expoEaseOut: function(d, f, a, b) {
            var e = a + b;
            return (d == 1) ? e: b * 1.001 * ( - Math.pow(2, -10 * d) + 1) + a
        },
        expoEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if (d == 0) {
                return a
            }
            if (d == 1) {
                return e
            }
            if ((d /= 0.5) < 1) {
                return e / 2 * Math.pow(2, 10 * (d - 1)) + a - e * 0.0005
            } else {
                return e / 2 * 1.0005 * ( - Math.pow(2, -10 * --d) + 2) + a
            }
        },
        quadEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d + a
        },
        quadEaseOut: function(d, f, a, b) {
            var e = a + b;
            return - e * (d /= 1) * (d - 2) + a
        },
        quadEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d + a
            } else {
                return - e / 2 * ((--d) * (d - 2) - 1) + a
            }
        },
        quartEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d * d * d + a
        },
        quartEaseOut: function(d, f, a, b) {
            var e = a + b;
            return - e * ((d = d / 1 - 1) * d * d * d - 1) + a
        },
        quartEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d * d * d + a
            } else {
                return - e / 2 * ((d -= 2) * d * d * d - 2) + a
            }
        },
        quintEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d * d * d * d + a
        },
        quintEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * ((d = d / 1 - 1) * d * d * d * d + 1) + a
        },
        quintEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d * d * d * d + a
            } else {
                return e / 2 * ((d -= 2) * d * d * d * d + 2) + a
            }
        },
        sineEaseIn: function(d, f, a, b) {
            var e = a + b;
            return - e * Math.cos(d * (Math.PI / 2)) + e + a
        },
        sineEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * Math.sin(d * (Math.PI / 2)) + a
        },
        sineEaseInOut: function(d, f, a, b) {
            var e = a + b;
            return - e / 2 * (Math.cos(Math.PI * d) - 1) + a
        }
    }
}); (function(f) {
    var e = ["DOMMouseScroll", "mousewheel"];
    f.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var a = e.length; a;) {
                    this.addEventListener(e[--a], d, false)
                }
            } else {
                this.onmousewheel = d
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var a = e.length; a;) {
                    this.removeEventListener(e[--a], d, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    f.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    });
    function d(b) {
        var h = [].slice.call(arguments, 1),
        a = 0,
        c = true;
        b = f.event.fix(b || window.event);
        b.type = "mousewheel";
        if (b.wheelDelta) {
            a = b.wheelDelta / 120
        }
        if (b.detail) {
            a = -b.detail / 3
        }
        h.unshift(b, a);
        return f.event.handle.apply(this, h)
    }
})(jQuery);
$(document).ready(function() {
    var G = numberOfScreens;
    for (var D = 1; D <= G; D++) {
        $("#name" + D).html(blockName[D])
    }
    if (hoverEffect) {
        for (D = 1; D <= G; D++) {
            $("<style>#wrapper" + D + " div:hover{border: 1px #fff solid;box-shadow: 0px 0px 5px #fff;margin-left:4px;margin-top:4px;}</style>").appendTo("head")
        }
    }
    if (searchEngine == "google") {
        search = "http://www.google.com/search"
    } else {
        if (searchEngine == "bing") {
            search = "http://www.bing.com/search"
        } else {
            if (searchEngine == "sogou") {
                search = "http://www.sogou.com/sogou"
            } else {
                search = "http://www.google.com/search";
                searchEngine = "google"
            }
        }
    }
    $("form").attr("action", search);
    $("input:text").css("background", "#fff url(lib/" + searchEngine + "-back.png) center right no-repeat");
    var E = $(window).width();
    var F = $(window).height();
    var y = Math.floor((E - 975) / 2);
    var x = y - 1045;
    var w = y - 2090;
    var v = y - 3135;
    var u = y - 4180;
    var t = y - 5225;
    var s = y - 6270;
    var r = y - 7315;
    var q = y - 8360;
    var K = Math.floor((F - 480) / 2) - 80;
    $("#place").css({
        left: y,
        top: K
    });
    var k = 1;
    $("#wrapper1 input:text").focus();
    var e = true;
    function c() {
        $("#wrapper1 input:text").focusout();
        e = false;
        $("#place").animate({
            left: x,

        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper2 input:text").focus();
            e = true;
            k = 2
        });
        $("#button1to2").hide();
        $("#button2to1").show();
        if (G > 2) {
            $("#button2to3").show();
            $("#button3to2").hide()
        }
    }
    function o() {
        $("#wrapper2 input:text").focusout();
        e = false;
        $("#place").animate({
            left: y
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper1 input:text").focus();
            e = true;
            k = 1
        });
        $("#button1to2").show();
        $("#button2to1").hide();
        if (G > 2) {
            $("#button2to3").hide();
            $("#button3to2").hide()
        }
    }
    function m() {
        $("#wrapper2 input:text").focusout();
        e = false;
        $("#place").animate({
            left: w
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper3 input:text").focus();
            e = true;
            k = 3
        });
        $("#button1to2").hide();
        $("#button3to2").show();
        $("#button2to1").hide();
        $("#button2to3").hide()
    }
    function J() {
        $("#wrapper3 input:text").focusout();
        e = false;
        $("#place").animate({
            left: x
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper2 input:text").focus();
            e = true;
            k = 2
        });
        $("#button1to2").hide();
        $("#button3to2").hide();
        $("#button2to1").show();
        $("#button2to3").show()
    }
    function H() {
        $("#wrapper3 input:text").focusout();
        e = false;
        $("#place").animate({
            left: v
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper4 input:text").focus();
            e = true;
            k = 4
        });
        $("#button2to3").hide();
        $("#button4to3").show();
        $("#button3to2").hide();
        $("#button3to4").hide()
    }
    function g() {
        $("#wrapper4 input:text").focusout();
        e = false;
        $("#place").animate({
            left: w
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper3 input:text").focus();
            e = true;
            k = 3
        });
        $("#button2to3").hide();
        $("#button4to3").hide();
        $("#button3to2").show();
        $("#button3to4").show()
    }
    function f() {
        $("#wrapper4 input:text").focusout();
        e = false;
        $("#place").animate({
            left: u
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper5 input:text").focus();
            e = true;
            k = 5
        });
        $("#button3to4").hide();
        $("#button5to4").show();
        $("#button4to3").hide();
        $("#button4to5").hide()
    }
    function A() {
        $("#wrapper5 input:text").focusout();
        e = false;
        $("#place").animate({
            left: v
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper4 input:text").focus();
            e = true;
            k = 4
        });
        $("#button3to4").hide();
        $("#button5to4").hide();
        $("#button4to3").show();
        $("#button4to5").show()
    }
    function z() {
        $("#wrapper5 input:text").focusout();
        e = false;
        $("#place").animate({
            left: t
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper6 input:text").focus();
            e = true;
            k = 6
        });
        $("#button4to5").hide();
        $("#button6to5").show();
        $("#button5to4").hide();
        $("#button5to6").hide()
    }
    function d() {
        $("#wrapper6 input:text").focusout();
        e = false;
        $("#place").animate({
            left: u
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper5 input:text").focus();
            e = true;
            k = 5
        });
        $("#button4to5").hide();
        $("#button6to5").hide();
        $("#button5to4").show();
        $("#button5to6").show()
    }
    function b() {
        $("#wrapper6 input:text").focusout();
        e = false;
        $("#place").animate({
            left: s
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper7 input:text").focus();
            e = true;
            k = 7
        });
        $("#button5to6").hide();
        $("#button7to6").show();
        $("#button6to5").hide();
        $("#button6to7").hide()
    }
    function n() {
        $("#wrapper7 input:text").focusout();
        e = false;
        $("#place").animate({
            left: t
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper6 input:text").focus();
            e = true;
            k = 6
        });
        $("#button5to6").hide();
        $("#button7to6").hide();
        $("#button6to5").show();
        $("#button6to7").show()
    }
    function l() {
        $("#wrapper7 input:text").focusout();
        e = false;
        $("#place").animate({
            left: r
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper8 input:text").focus();
            e = true;
            k = 8
        });
        $("#button6to7").hide();
        $("#button8to7").show();
        $("#button7to6").hide();
        $("#button7to8").hide()
    }
    function L() {
        $("#wrapper8 input:text").focusout();
        e = false;
        $("#place").animate({
            left: s
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper7 input:text").focus();
            e = true;
            k = 7
        });
        $("#button6to7").hide();
        $("#button8to7").hide();
        $("#button7to6").show();
        $("#button7to8").show()
    }
    function I() {
        $("#wrapper8 input:text").focusout();
        e = false;
        $("#place").animate({
            left: q
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper9 input:text").focus();
            e = true;
            k = 9
        });
        $("#button7to8").hide();
        $("#button9to8").show();
        $("#button8to7").hide();
        $("#button8to9").hide()
    }
    function h() {
        $("#wrapper9 input:text").focusout();
        e = false;
        $("#place").animate({
            left: r
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper8 input:text").focus();
            e = true;
            k = 8
        });
        $("#button7to8").hide();
        $("#button9to8").hide();
        $("#button8to7").show();
        $("#button8to9").show()
    }
    if (G > 1) {
        $("#button1to2").click(function() {
            c()
        });
        $("#button2to1").click(function() {
            o()
        });
        if (G > 2) {
            $("#button2to3").click(function() {
                m()
            });
            $("#button3to2").click(function() {
                J()
            });
            if (G > 3) {
                $("#button3to4").click(function() {
                    H()
                });
                $("#button4to3").click(function() {
                    g()
                });
                if (G > 4) {
                    $("#button4to5").click(function() {
                        f()
                    });
                    $("#button5to4").click(function() {
                        A()
                    });
                    if (G > 5) {
                        $("#button5to6").click(function() {
                            z()
                        });
                        $("#button6to5").click(function() {
                            d()
                        });
                        if (G > 6) {
                            $("#button6to7").click(function() {
                                b()
                            });
                            $("#button7to6").click(function() {
                                n()
                            });
                            if (G > 7) {
                                $("#button7to8").click(function() {
                                    l()
                                });
                                $("#button8to7").click(function() {
                                    L()
                                });
                                if (G > 8) {
                                    $("#button8to9").click(function() {
                                        I()
                                    });
                                    $("#button9to8").click(function() {
                                        h()
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    $(document).bind("keydown", 
    function(i) {
        if (i.keyCode == "39" || i.keyCode == "37") {
            i.preventDefault()
        }
        if (i.which == "39" && e) {
            if (k == 1 && G > 1) {
                c()
            }
            if (k == 2 && G > 2) {
                m()
            }
            if (k == 3 && G > 3) {
                H()
            }
            if (k == 4 && G > 4) {
                f()
            }
            if (k == 5 && G > 5) {
                z()
            }
            if (k == 6 && G > 6) {
                b()
            }
            if (k == 7 && G > 7) {
                l()
            }
            if (k == 8 && G > 8) {
                I()
            }
        }
        if (i.which == "37" && e) {
            if (k == 9) {
                h()
            }
            if (k == 8) {
                L()
            }
            if (k == 7) {
                n()
            }
            if (k == 6) {
                d()
            }
            if (k == 5) {
                A()
            }
            if (k == 4) {
                g()
            }
            if (k == 3) {
                J()
            }
            if (k == 2) {
                o()
            }
        }
    });
    $(document).mousewheel(function(i, j) {
        if (j > 0 && e) {
            if (k == 9) {
                h()
            }
            if (k == 8) {
                L()
            }
            if (k == 7) {
                n()
            }
            if (k == 6) {
                d()
            }
            if (k == 5) {
                A()
            }
            if (k == 4) {
                g()
            }
            if (k == 3) {
                J()
            }
            if (k == 2) {
                o()
            }
        } else {
            if (j < 0 && e) {
                if (k == 1 && G > 1) {
                    c()
                }
                if (k == 2 && G > 2) {
                    m()
                }
                if (k == 3 && G > 3) {
                    H()
                }
                if (k == 4 && G > 4) {
                    f()
                }
                if (k == 5 && G > 5) {
                    z()
                }
                if (k == 6 && G > 6) {
                    b()
                }
                if (k == 7 && G > 7) {
                    l()
                }
                if (k == 8 && G > 8) {
                    I()
                }
            }
        }
        i.preventDefault()
    });
    var C = 0;
    for (C = 0; C <= (G - 1); C++) {
        for (D = 0; D <= 11; D++) {
            var p = bookmark[C][D]["title"];
            var a = bookmark[C][D]["url"];
            var B = bookmark[C][D]["thumb"];
            if (B == "") {
                $("#thumb" + (C + 1) + "-" + (D + 1)).html('<img id="net" src="lib/net-back.png" /><a href="' + a + '" target="_blank"><div class="title">' + p + "</div></a>")
            } else {
                $("#thumb" + (C + 1) + "-" + (D + 1)).html('<a href="' + a + '" target="_blank"><img src="thumbs/' + B + '" /></a>')
            }
        }
    }
    
    if (G < 9) {
        $("#name9").detach();
        $("#wrapper9").detach();
        $("#button8to9").detach();
        $("#button9to8").detach()
    }
    if (G < 8) {
        $("#name8").detach();
        $("#wrapper8").detach();
        $("#button7to8").detach();
        $("#button8to7").detach()
    }
    if (G < 7) {
        $("#name7").detach();
        $("#wrapper7").detach();
        $("#button6to7").detach();
        $("#button7to6").detach()
    }
    if (G < 6) {
        $("#name6").detach();
        $("#wrapper6").detach();
        $("#button5to6").detach();
        $("#button6to5").detach()
    }
    if (G < 5) {
        $("#name5").detach();
        $("#wrapper5").detach();
        $("#button4to5").detach();
        $("#button5to4").detach()
    }
    if (G < 4) {
        $("#name4").detach();
        $("#wrapper4").detach();
        $("#button3to4").detach();
        $("#button4to3").detach()
    }
    if (G < 3) {
        $("#name3").detach();
        $("#wrapper3").detach();
        $("#button2to3").detach();
        $("#button3to2").detach()
    }
    if (G < 2) {
        $("#name2").detach();
        $("#wrapper2").detach();
        $("#button1to2").detach();
        $("#button2to1").detach()
    }
});
var hoverEffect = true;
var searchEngine = "sogou";
var numberOfScreens = 9;
var blockName = new Array();
blockName[1] = "常用";
blockName[2] = "购物";
blockName[3] = "消遣";
blockName[4] = "发现";
blockName[5] = "生活";
blockName[6] = "程序";
blockName[7] = "设计";
blockName[8] = "旅游";
blockName[9] = "资源";
var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();
bookmark[3] = new Array();
bookmark[4] = new Array();
bookmark[5] = new Array();
bookmark[6] = new Array();
bookmark[7] = new Array();
bookmark[8] = new Array();
bookmark[9] = new Array();
bookmark[0][0] = {
    title: "百度",
    url: "https://www.baidu.com",
    thumb: "baidu.png"
};
bookmark[0][1] = {
    title: "腾讯网",
    url: "http://www.qq.com/",
    thumb: "qq.png"
};
bookmark[0][2] = {
    title: "谷歌",
    url: "http://www.google.com",
    thumb: "google.png"
};
bookmark[0][3] = {
    title: "新浪网",
    url: "http://www.sina.com.cn/",
    thumb: "sina.png"
};
bookmark[0][4] = {
    title: "京东",
    url: "http://union.click.jd.com/jdc?e=&p=AiIBZRprFDJWWA1FBCVbV0IUEEULRFRBSkAOClBMW0srBUlXW0UyfitwAE5PIGsjcnZrbAkbDRkOIgZlGFITABoFVBpTJTJzdWU%3D&t=W1dCFBBFC0RUQUpADgpQTFtL",
    thumb: "jd.png"
};
bookmark[0][5] = {
    title: "新浪微博",
    url: "http://weibo.com/?c=spr_web_sq_6164_weibo_t001",
    thumb: "weibo.png"
};
bookmark[0][6] = {
    title: "GitHub",
    url: "http://www.github.com",
    thumb: "github.png"
};
bookmark[0][7] = {
    title: "知乎",
    url: "http://www.zhihu.com",
    thumb: "zhihu.png"
};
bookmark[0][8] = {
    title: "推特",
    url: "http://www.twitter.com",
    thumb: "twitter.png"
};
bookmark[0][9] = {
    title: "优酷",
    url: "http://www.youku.com",
    thumb: "youku.png"
};
bookmark[0][10] = {
    title: "CSDN",
    url: "http://www.csdn.net",
    thumb: "csdn.png"
};
bookmark[0][11] = {
    title: "淘宝网",
    url: "http://ai.taobao.com?pid=mm_27337129_9420872_32012443",
    thumb: "tb.png"
};
bookmark[1][0] = {
    title: "苏宁",
    url: "http://p.yiqifa.com/c?s=25ffbe45&w=253302&c=4459&i=5662&l=0&e=win8&t=http://www.suning.com/",
    thumb: "suning.png"
};
bookmark[1][1] = {
    title: "易迅",
    url: "http://p.yiqifa.com/c?s=9289bf39&w=253302&c=4330&i=4984&l=0&e=win8&t=http://www.51buy.com",
    thumb: "51buy.png"
};
bookmark[1][2] = {
    title: "一号店",
    url: "http://p.yiqifa.com/c?s=ea58a335&w=253302&c=139&i=802&l=0&e=win8&t=http://www.yihaodian.com/",
    thumb: "yihaodian.png"
};
bookmark[1][3] = {
    title: "唯品会",
    url: "http://p.yiqifa.com/c?s=ea3b031c&w=253302&c=4018&i=2882&l=0&e=win8&t=http://www.vipshop.com/",
    thumb: "vipshop.png"
};
bookmark[1][4] = {
    title: "当当",
    url: "http://p.yiqifa.com/c?s=a2a2a463&w=253302&c=247&i=159&l=0&e=win8&t=http://www.dangdang.com",
    thumb: "dangdang.png"
};
bookmark[1][5] = {
    title: "京东",
    url: "http://p.yiqifa.com/c?s=5308bddc&w=253302&c=254&i=160&l=0&e=win8&t=http://www.jd.com",
    thumb: "360buy.png"
};
bookmark[1][6] = {
    title: "亚马逊",
    url: "http://p.yiqifa.com/c?s=3870c892&w=253302&c=7069&i=26922&l=0&d=180&e=win8&t=http://www.amazon.cn",
    thumb: "amazon.png"
};
bookmark[1][7] = {
    title: "凡客",
    url: "http://p.yiqifa.com/c?s=090d5719&w=253302&c=255&i=150&l=0&e=win8&t=http://www.vancl.com",
    thumb: "vancl.png"
};
bookmark[1][8] = {
    title: "好乐买",
    url: "http://p.yiqifa.com/c?s=970c4440&w=253302&c=6631&i=21922&l=0&e=win8&t=http://www.okbuy.com/",
    thumb: "okbuy.png"
};
bookmark[1][9] = {
    title: "淘宝",
    url: "http://www.taobao.com/go/chn/tbk_channel/onsale.php?pid=mm_10054659_3403176_13200135&eventid=101329",
    thumb: "taobao.png"
};
bookmark[1][10] = {
    title: "天猫",
    url: "http://s.click.taobao.com/t_9?p=mm_10054659_3403176_13200135&l=http%3A%2F%2Fwww.tmall.com",
    thumb: "tmall.png"
};
bookmark[1][11] = {
    title: "梦芭莎",
    url: "http://p.yiqifa.com/c?s=4f5f315d&w=253302&c=298&i=323&l=0&e=win8&t=http://www.moonbasa.com/",
    thumb: "moonbasa.png"
};
bookmark[2][0] = {
    title: "花瓣网",
    url: "http://huaban.com/",
    thumb: "huaban.png"
};
bookmark[2][1] = {
    title: "音悦Tai",
    url: "http://www.yinyuetai.com/",
    thumb: "yinyuetai.png"
};
bookmark[2][2] = {
    title: "豆瓣电台",
    url: "http://douban.fm/",
    thumb: "doubanfm.png"
};
bookmark[2][3] = {
    title: "悦读FM",
    url: "http://yuedu.fm/",
    thumb: "yuedu.png"
};
bookmark[2][4] = {
    title: "网易公开课",
    url: "http://open.163.com",
    thumb: "open.png"
};
bookmark[2][5] = {
    title: "邻居的耳朵",
    url: "http://kxt.fm/",
    thumb: "kxt.png"
};
bookmark[2][6] = {
    title: "瘾科技",
    url: "http://cn.engadget.com/",
    thumb: "engadget.png"
};
bookmark[2][7] = {
    title: "时光电影",
    url: "http://www.mtime.com/",
    thumb: "mtime.png"
};
bookmark[2][8] = {
    title: "糗事百科",
    url: "http://www.qiushibaike.com/",
    thumb: "qiushibaike.png"
};
bookmark[2][9] = {
    title: "book",
    url: "http://book.6164.com/",
    thumb: "book.png"
};
bookmark[2][10] = {
    title: "TOPIT.ME",
    url: "http://topit.me/",
    thumb: "topit.png"
};
bookmark[2][11] = {
    title: "V电影",
    url: "http://v.6164.com/",
    thumb: "vmovier.png"
};
bookmark[3][0] = {
    title: "知乎",
    url: "http://www.zhihu.com/",
    thumb: "zhihu.png"
};
bookmark[3][1] = {
    title: "煎蛋",
    url: "http://jandan.net/",
    thumb: "jandan.png"
};
bookmark[3][2] = {
    title: "爱库",
    url: "http://www.ikeepu.com/",
    thumb: "ikeepu.png"
};
bookmark[3][3] = {
    title: "微盘",
    url: "http://vdisk.me/",
    thumb: "vdisk.png"
};
bookmark[3][4] = {
    title: "乐活户外",
    url: "http://p.yiqifa.com/c?s=1e8194d0&w=253302&c=5588&i=14382&l=0&e=win8&t=http://www.m360.com.cn",
    thumb: "m360.png"
};
bookmark[3][5] = {
    title: "趣玩",
    url: "http://p.yiqifa.com/c?s=8e9d9737&w=253302&c=1800&i=1362&l=0&e=win8&t=http://www.quwan.com",
    thumb: "quwan.png"
};
bookmark[3][6] = {
    title: "佑一良品",
    url: "http://p.yiqifa.com/c?s=0f0c7283&w=253302&c=5390&i=11702&l=0&e=win8&t=http://www.uiyi.cn/",
    thumb: "uiyi.png"
};
bookmark[3][7] = {
    title: "百度文库",
    url: "http://wenku.baidu.com/",
    thumb: "wenku.png"
};
bookmark[3][8] = {
    title: "堆糖",
    url: "http://www.duitang.com/",
    thumb: "duitang.png"
};
bookmark[3][9] = {
    title: "巨有趣",
    url: "http://www.juyouqu.com/",
    thumb: "juyouqu.png"
};
bookmark[3][10] = {
    title: "蘑菇街",
    url: "http://www.mogujie.com/",
    thumb: "mogujie.png"
};
bookmark[3][11] = {
    title: "美丽说",
    url: "http://www.meilishuo.com/",
    thumb: "meilishuo.png"
};
bookmark[4][0] = {
    title: "聚划算",
    url: "http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB05%2Bm7rfGKas1PIKp0U37pZuBotzOg7OjeU9mIWS5%2B5UROBz6sq4fiHePnGhf6UrWuOtfD2G6QGcAHIXpjhEtESpuqsRo0a&pid=mm_10054659_3403176_13200135",
    thumb: "juhuasuan.png"
};
bookmark[4][1] = {
    title: "豆果美食",
    url: "http://www.douguo.com/",
    thumb: "douguo.png"
};
bookmark[4][2] = {
    title: "百姓网",
    url: "http://www.baixing.com/",
    thumb: "baixing.png"
};
bookmark[4][3] = {
    title: "口碑网",
    url: "http://www.koubei.com/",
    thumb: "koubei.png"
};
bookmark[4][4] = {
    title: "58同城",
    url: "http://www.58.com/",
    thumb: "58.png"
};
bookmark[4][5] = {
    title: "赶集网",
    url: "http://www.ganji.com/",
    thumb: "ganji.png"
};
bookmark[4][6] = {
    title: "下厨房",
    url: "http://www.xiachufang.com",
    thumb: "xiachufang.png"
};
bookmark[4][7] = {
    title: "美团",
    url: "http://p.yiqifa.com/c?s=3c1c7cd0&w=253302&c=5402&i=11642&l=0&e=win8&t=http://bj.meituan.com/",
    thumb: "meituan.png"
};
bookmark[4][8] = {
    title: "前程无忧",
    url: "http://my.51job.com/my/trace.php?adsnum=19423&ajp=aHR0cDovL3d3dy41MWpvYi5jb20v",
    thumb: "51job.png"
};
bookmark[4][9] = {
    title: "智联招聘",
    url: "http://www.zhaopin.com/",
    thumb: "zhaopin.png"
};
bookmark[4][10] = {
    title: "金象网",
    url: "http://p.yiqifa.com/c?s=4bab3b89&w=253302&c=305&i=225&l=0&e=win8&t=http://www.jxdyf.com",
    thumb: "jxdyf.png"
};
bookmark[4][11] = {
    title: "大众点评网",
    url: "http://www.dianping.com/",
    thumb: "dianping.png"
};
bookmark[5][0] = {
    title: "ibm developerworks",
    url: "http://www.ibm.com/developerworks/cn/",
    thumb: "developerworks.png"
};
bookmark[5][1] = {
    title: "Google Code",
    url: "http://code.google.com/hosting/",
    thumb: "google-code.png"
};
bookmark[5][2] = {
    title: "蓝色理想",
    url: "http://www.blueidea.com/",
    thumb: "blueidea.png"
};
bookmark[5][3] = {
    title: "阳春非凡",
    url: "http://code.662p.com/",
    thumb: ""
};
bookmark[5][4] = {
    title: "开源中国社区",
    url: "http://www.oschina.net/",
    thumb: "oschina.png"
};
bookmark[5][5] = {
    title: "GitHub",
    url: "https://github.com/",
    thumb: "github.png"
};
bookmark[5][6] = {
    title: "sourceforge",
    url: "http://sourceforge.net/",
    thumb: "sourceforge.png"
};
bookmark[5][7] = {
    title: "high scalability",
    url: "http://highscalability.com/",
    thumb: "highscalability.png"
};
bookmark[5][8] = {
    title: "scriptmafia",
    url: "http://www.scriptmafia.com/",
    thumb: "scriptmafia.png"
};
bookmark[5][9] = {
    title: "infoq",
    url: "http://www.infoq.com/",
    thumb: "infoq.png"
};
bookmark[5][10] = {
    title: "CSDN",
    url: "http://www.csdn.net/",
    thumb: "csdn.png"
};
bookmark[5][11] = {
    title: "BitBucket",
    url: "https://bitbucket.org/",
    thumb: "bitbucket.png"
};
bookmark[6][0] = {
    title: "myfonts",
    url: "http://www.myfonts.com/WhatTheFont/",
    thumb: "myfonts.png"
};
bookmark[6][1] = {
    title: "365PSD",
    url: "http://365psd.com/",
    thumb: "365psd.png"
};
bookmark[6][2] = {
    title: "icon finder",
    url: "http://www.iconfinder.com/",
    thumb: "iconfinder.png"
};
bookmark[6][3] = {
    title: "ucdChina",
    url: "http://www.ucdchina.com/",
    thumb: "ucdchina.png"
};
bookmark[6][4] = {
    title: "猪八戒",
    url: "http://un.zhubajie.com/r/?u=6763674&l=http://www.zhubajie.com/",
    thumb: "zhubajie.png"
};
bookmark[6][5] = {
    title: "dribbble",
    url: "http://dribbble.com/",
    thumb: "dribbble.png"
};
bookmark[6][6] = {
    title: "500px",
    url: "http://500px.com/",
    thumb: "500px.png"
};
bookmark[6][7] = {
    title: "设计共和国",
    url: "http://www.rologo.com/",
    thumb: "rologo.png"
};
bookmark[6][8] = {
    title: "设计日报",
    url: "http://www.designdaily.cn/",
    thumb: "designdaily.png"
};
bookmark[6][9] = {
    title: "deviantart",
    url: "http://www.deviantart.com/",
    thumb: "deviantart.png"
};
bookmark[6][10] = {
    title: "全球设计精选站",
    url: "http://designlol.net/",
    thumb: "designlol.png"
};
bookmark[6][11] = {
    title: "where we design",
    url: "http://wherewedesign.com/",
    thumb: "wherewedesign.png"
};
bookmark[7][0] = {
    title: "淘宝旅行",
    url: "http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB05%2Bm7rfGKas1PIKp0U37pZuBotzOg7OjY%2F2R0Ke3HHzv2kJZUH%2FehqodvBvxouiCPW7UkqmIn4pk08catp7aU2wpqfONSeQJM%3D&pid=mm_10054659_3403176_13200135",
    thumb: "taobaotrip.png"
};
bookmark[7][1] = {
    title: "7天连锁酒店",
    url: "http://p.yiqifa.com/c?s=5e3a2b70&w=253302&c=7112&i=37909&l=0&e=win8&t=http://e.7daysinn.cn/market/track.php",
    thumb: "7daysinn.png"
};
bookmark[7][2] = {
    title: "悠哉旅游网",
    url: "http://p.yiqifa.com/c?s=6d9eafeb&w=253302&c=5528&i=13362&l=0&e=win8&t=http://www.uzai.com",
    thumb: "uzai.png"
};
bookmark[7][3] = {
    title: "快乐E行",
    url: "http://p.yiqifa.com/c?s=e3dbe8cf&w=253302&c=278&i=15362&l=0&e=win8&t=http://www.etpass.com/",
    thumb: "etpass.png"
};
bookmark[7][4] = {
    title: "携程",
    url: "http://p.yiqifa.com/c?s=72ab52bc&w=253302&c=297&i=19323&l=0&d=2756&e=win8&t=http://u.ctrip.com/union/redirect.aspx",
    thumb: "ctrip.png"
};
bookmark[7][5] = {
    title: "驴妈妈",
    url: "http://p.yiqifa.com/c?s=a57c7b5a&w=253302&c=5740&i=16722&l=0&e=win8&t=http://www.lvmama.com",
    thumb: "lvmama.png"
};
bookmark[7][6] = {
    title: "艺龙",
    url: "http://p.yiqifa.com/c?s=f3b2afae&w=253302&c=276&i=25842&l=0&e=win8&t=http://travel.elong.com/hotel/",
    thumb: "elong.png"
};
bookmark[7][7] = {
    title: "布丁酒店连锁",
    url: "http://p.yiqifa.com/c?s=3f420231&w=253302&c=6370&i=18562&l=0&e=win8&t=http://www.podinns.com/",
    thumb: "podinns.png"
};
bookmark[7][8] = {
    title: "住哪网",
    url: "http://p.yiqifa.com/c?s=f4ee47e1&w=253302&c=5491&i=12582&l=0&e=win8&t=http://www.zhuna.cn/",
    thumb: "zhuna.png"
};
bookmark[7][9] = {
    title: "同程网",
    url: "http://p.yiqifa.com/c?s=15f50b00&w=253302&c=7036&i=27402&l=0&e=win8&t=http://www.17u.cn",
    thumb: "17u.png"
};
bookmark[7][10] = {
    title: "铁友网",
    url: "http://p.yiqifa.com/c?s=26390d3a&w=253302&c=6451&i=19382&l=0&e=win8&t=http://tj.tieyou.com/gw.php",
    thumb: "tieyou.png"
};
bookmark[7][11] = {
    title: "芒果网",
    url: "http://p.yiqifa.com/c?s=ff90ab53&w=253302&c=5112&i=9542&l=0&e=win8&t=http://www.mangocity.com/",
    thumb: "mangocity.png"
};
bookmark[8][0] = {
    title: "资源海",
    url: "http://www.ziyuanhai.com/",
    thumb: "ziyuanhai.png"
};
bookmark[8][1] = {
    title: "小众软件",
    url: "http://www.appinn.com/",
    thumb: "appinn.png"
};
bookmark[8][2] = {
    title: "杂碎后院",
    url: "http://www.zasv.com/",
    thumb: "zasv.png"
};
bookmark[8][3] = {
    title: "儿歌下载",
    url: "http://www.81baobao.com/",
    thumb: ""
};
bookmark[8][4] = {
    title: "完美者论坛",
    url: "http://www.wmzhe.com/",
    thumb: "wmzhe.png"
};
bookmark[8][5] = {
    title: "verycd",
    url: "http://www.verycd.com/",
    thumb: "verycd.png"
};
bookmark[8][6] = {
    title: "狗狗搜索",
    url: "http://www.gougou.com/",
    thumb: "gougou.png"
};
bookmark[8][7] = {
    title: "人人影视",
    url: "http://yyets.com/",
    thumb: "yyets.png"
};
bookmark[8][8] = {
    title: "异次元软件世界",
    url: "http://www.iplaysoft.com/",
    thumb: "iplaysoft.png"
};
bookmark[8][9] = {
    title: "射手网",
    url: "http://www.shooter.cn/",
    thumb: "shooter.png"
};
bookmark[8][10] = {
    title: "远景论坛",
    url: "http://www.pcbeta.com/",
    thumb: "pcbeta.png"
};
bookmark[8][11] = {
    title: "3DM游戏网",
    url: "http://bbs.3dmgame.com/",
    thumb: "3dmgame.png"
};
