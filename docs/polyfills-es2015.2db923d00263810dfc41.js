(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    1: function(t, e, n) {
      t.exports = n('hN/g');
    },
    '9HG0': function(t, e, n) {
      var o;
      !(function(r, i, s, a) {
        'use strict';
        var c,
          l = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'],
          u = i.createElement('div'),
          h = 'function',
          p = Math.round,
          f = Math.abs,
          d = Date.now;
        function g(t, e, n) {
          return setTimeout(b(t, n), e);
        }
        function m(t, e, n) {
          return !!Array.isArray(t) && (v(t, n[e], n), !0);
        }
        function v(t, e, n) {
          var o;
          if (t)
            if (t.forEach) t.forEach(e, n);
            else if (t.length !== a)
              for (o = 0; o < t.length; ) e.call(n, t[o], o, t), o++;
            else for (o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t);
        }
        function y(t, e, n) {
          var o = 'DEPRECATED METHOD: ' + e + '\n' + n + ' AT \n';
          return function() {
            var e = new Error('get-stack-trace'),
              n =
                e && e.stack
                  ? e.stack
                      .replace(/^[^\(]+?[\n$]/gm, '')
                      .replace(/^\s+at\s+/gm, '')
                      .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
                  : 'Unknown Stack Trace',
              i = r.console && (r.console.warn || r.console.log);
            return i && i.call(r.console, o, n), t.apply(this, arguments);
          };
        }
        c =
          'function' != typeof Object.assign
            ? function(t) {
                if (t === a || null === t)
                  throw new TypeError(
                    'Cannot convert undefined or null to object'
                  );
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                  var o = arguments[n];
                  if (o !== a && null !== o)
                    for (var r in o) o.hasOwnProperty(r) && (e[r] = o[r]);
                }
                return e;
              }
            : Object.assign;
        var _ = y(
            function(t, e, n) {
              for (var o = Object.keys(e), r = 0; r < o.length; )
                (!n || (n && t[o[r]] === a)) && (t[o[r]] = e[o[r]]), r++;
              return t;
            },
            'extend',
            'Use `assign`.'
          ),
          T = y(
            function(t, e) {
              return _(t, e, !0);
            },
            'merge',
            'Use `assign`.'
          );
        function k(t, e, n) {
          var o,
            r = e.prototype;
          ((o = t.prototype = Object.create(r)).constructor = t),
            (o._super = r),
            n && c(o, n);
        }
        function b(t, e) {
          return function() {
            return t.apply(e, arguments);
          };
        }
        function E(t, e) {
          return typeof t == h ? t.apply((e && e[0]) || a, e) : t;
        }
        function w(t, e) {
          return t === a ? e : t;
        }
        function S(t, e, n) {
          v(z(e), function(e) {
            t.addEventListener(e, n, !1);
          });
        }
        function D(t, e, n) {
          v(z(e), function(e) {
            t.removeEventListener(e, n, !1);
          });
        }
        function P(t, e) {
          for (; t; ) {
            if (t == e) return !0;
            t = t.parentNode;
          }
          return !1;
        }
        function O(t, e) {
          return t.indexOf(e) > -1;
        }
        function z(t) {
          return t.trim().split(/\s+/g);
        }
        function Z(t, e, n) {
          if (t.indexOf && !n) return t.indexOf(e);
          for (var o = 0; o < t.length; ) {
            if ((n && t[o][n] == e) || (!n && t[o] === e)) return o;
            o++;
          }
          return -1;
        }
        function C(t) {
          return Array.prototype.slice.call(t, 0);
        }
        function I(t, e, n) {
          for (var o = [], r = [], i = 0; i < t.length; ) {
            var s = e ? t[i][e] : t[i];
            Z(r, s) < 0 && o.push(t[i]), (r[i] = s), i++;
          }
          return (
            n &&
              (o = e
                ? o.sort(function(t, n) {
                    return t[e] > n[e];
                  })
                : o.sort()),
            o
          );
        }
        function j(t, e) {
          for (
            var n, o, r = e[0].toUpperCase() + e.slice(1), i = 0;
            i < l.length;

          ) {
            if ((o = (n = l[i]) ? n + r : e) in t) return o;
            i++;
          }
          return a;
        }
        var x = 1;
        function A(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || r;
        }
        var R = 'ontouchstart' in r,
          M = j(r, 'PointerEvent') !== a,
          N =
            R &&
            /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          L = 25,
          F = 1,
          H = 4,
          X = 8,
          q = 1,
          W = 2,
          Y = 4,
          G = 8,
          U = 16,
          V = W | Y,
          B = G | U,
          $ = V | B,
          J = ['x', 'y'],
          K = ['clientX', 'clientY'];
        function Q(t, e) {
          var n = this;
          (this.manager = t),
            (this.callback = e),
            (this.element = t.element),
            (this.target = t.options.inputTarget),
            (this.domHandler = function(e) {
              E(t.options.enable, [t]) && n.handler(e);
            }),
            this.init();
        }
        function tt(t, e, n) {
          var o = n.pointers.length,
            r = n.changedPointers.length,
            i = e & F && o - r == 0,
            s = e & (H | X) && o - r == 0;
          (n.isFirst = !!i),
            (n.isFinal = !!s),
            i && (t.session = {}),
            (n.eventType = e),
            (function(t, e) {
              var n = t.session,
                o = e.pointers,
                r = o.length;
              n.firstInput || (n.firstInput = et(e)),
                r > 1 && !n.firstMultiple
                  ? (n.firstMultiple = et(e))
                  : 1 === r && (n.firstMultiple = !1);
              var i = n.firstInput,
                s = n.firstMultiple,
                c = s ? s.center : i.center,
                l = (e.center = nt(o));
              (e.timeStamp = d()),
                (e.deltaTime = e.timeStamp - i.timeStamp),
                (e.angle = st(c, l)),
                (e.distance = it(c, l)),
                (function(t, e) {
                  var n = e.center,
                    o = t.offsetDelta || {},
                    r = t.prevDelta || {},
                    i = t.prevInput || {};
                  (e.eventType !== F && i.eventType !== H) ||
                    ((r = t.prevDelta = { x: i.deltaX || 0, y: i.deltaY || 0 }),
                    (o = t.offsetDelta = { x: n.x, y: n.y })),
                    (e.deltaX = r.x + (n.x - o.x)),
                    (e.deltaY = r.y + (n.y - o.y));
                })(n, e),
                (e.offsetDirection = rt(e.deltaX, e.deltaY));
              var u,
                h,
                p = ot(e.deltaTime, e.deltaX, e.deltaY);
              (e.overallVelocityX = p.x),
                (e.overallVelocityY = p.y),
                (e.overallVelocity = f(p.x) > f(p.y) ? p.x : p.y),
                (e.scale = s
                  ? ((u = s.pointers),
                    it((h = o)[0], h[1], K) / it(u[0], u[1], K))
                  : 1),
                (e.rotation = s
                  ? (function(t, e) {
                      return st(o[1], o[0], K) + st(t[1], t[0], K);
                    })(s.pointers)
                  : 0),
                (e.maxPointers = n.prevInput
                  ? e.pointers.length > n.prevInput.maxPointers
                    ? e.pointers.length
                    : n.prevInput.maxPointers
                  : e.pointers.length),
                (function(t, e) {
                  var n,
                    o,
                    r,
                    i,
                    s = t.lastInterval || e,
                    c = e.timeStamp - s.timeStamp;
                  if (e.eventType != X && (c > L || s.velocity === a)) {
                    var l = e.deltaX - s.deltaX,
                      u = e.deltaY - s.deltaY,
                      h = ot(c, l, u);
                    (o = h.x),
                      (r = h.y),
                      (n = f(h.x) > f(h.y) ? h.x : h.y),
                      (i = rt(l, u)),
                      (t.lastInterval = e);
                  } else
                    (n = s.velocity),
                      (o = s.velocityX),
                      (r = s.velocityY),
                      (i = s.direction);
                  (e.velocity = n),
                    (e.velocityX = o),
                    (e.velocityY = r),
                    (e.direction = i);
                })(n, e);
              var g = t.element;
              P(e.srcEvent.target, g) && (g = e.srcEvent.target),
                (e.target = g);
            })(t, n),
            t.emit('hammer.input', n),
            t.recognize(n),
            (t.session.prevInput = n);
        }
        function et(t) {
          for (var e = [], n = 0; n < t.pointers.length; )
            (e[n] = {
              clientX: p(t.pointers[n].clientX),
              clientY: p(t.pointers[n].clientY)
            }),
              n++;
          return {
            timeStamp: d(),
            pointers: e,
            center: nt(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
          };
        }
        function nt(t) {
          var e = t.length;
          if (1 === e) return { x: p(t[0].clientX), y: p(t[0].clientY) };
          for (var n = 0, o = 0, r = 0; r < e; )
            (n += t[r].clientX), (o += t[r].clientY), r++;
          return { x: p(n / e), y: p(o / e) };
        }
        function ot(t, e, n) {
          return { x: e / t || 0, y: n / t || 0 };
        }
        function rt(t, e) {
          return t === e ? q : f(t) >= f(e) ? (t < 0 ? W : Y) : e < 0 ? G : U;
        }
        function it(t, e, n) {
          n || (n = J);
          var o = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
          return Math.sqrt(o * o + r * r);
        }
        function st(t, e, n) {
          return (
            n || (n = J),
            (180 * Math.atan2(e[n[1]] - t[n[1]], e[n[0]] - t[n[0]])) / Math.PI
          );
        }
        Q.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && S(this.element, this.evEl, this.domHandler),
              this.evTarget && S(this.target, this.evTarget, this.domHandler),
              this.evWin && S(A(this.element), this.evWin, this.domHandler);
          },
          destroy: function() {
            this.evEl && D(this.element, this.evEl, this.domHandler),
              this.evTarget && D(this.target, this.evTarget, this.domHandler),
              this.evWin && D(A(this.element), this.evWin, this.domHandler);
          }
        };
        var at = { mousedown: F, mousemove: 2, mouseup: H },
          ct = 'mousedown',
          lt = 'mousemove mouseup';
        function ut() {
          (this.evEl = ct),
            (this.evWin = lt),
            (this.pressed = !1),
            Q.apply(this, arguments);
        }
        k(ut, Q, {
          handler: function(t) {
            var e = at[t.type];
            e & F && 0 === t.button && (this.pressed = !0),
              2 & e && 1 !== t.which && (e = H),
              this.pressed &&
                (e & H && (this.pressed = !1),
                this.callback(this.manager, e, {
                  pointers: [t],
                  changedPointers: [t],
                  pointerType: 'mouse',
                  srcEvent: t
                }));
          }
        });
        var ht = {
            pointerdown: F,
            pointermove: 2,
            pointerup: H,
            pointercancel: X,
            pointerout: X
          },
          pt = { 2: 'touch', 3: 'pen', 4: 'mouse', 5: 'kinect' },
          ft = 'pointerdown',
          dt = 'pointermove pointerup pointercancel';
        function gt() {
          (this.evEl = ft),
            (this.evWin = dt),
            Q.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = []);
        }
        r.MSPointerEvent &&
          !r.PointerEvent &&
          ((ft = 'MSPointerDown'),
          (dt = 'MSPointerMove MSPointerUp MSPointerCancel')),
          k(gt, Q, {
            handler: function(t) {
              var e = this.store,
                n = !1,
                o = t.type.toLowerCase().replace('ms', ''),
                r = ht[o],
                i = pt[t.pointerType] || t.pointerType,
                s = 'touch' == i,
                a = Z(e, t.pointerId, 'pointerId');
              r & F && (0 === t.button || s)
                ? a < 0 && (e.push(t), (a = e.length - 1))
                : r & (H | X) && (n = !0),
                a < 0 ||
                  ((e[a] = t),
                  this.callback(this.manager, r, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: i,
                    srcEvent: t
                  }),
                  n && e.splice(a, 1));
            }
          });
        var mt = { touchstart: F, touchmove: 2, touchend: H, touchcancel: X },
          vt = 'touchstart',
          yt = 'touchstart touchmove touchend touchcancel';
        function _t() {
          (this.evTarget = vt),
            (this.evWin = yt),
            (this.started = !1),
            Q.apply(this, arguments);
        }
        k(_t, Q, {
          handler: function(t) {
            var e = mt[t.type];
            if ((e === F && (this.started = !0), this.started)) {
              var n = function(t, e) {
                var n = C(t.touches),
                  o = C(t.changedTouches);
                return (
                  e & (H | X) && (n = I(n.concat(o), 'identifier', !0)), [n, o]
                );
              }.call(this, t, e);
              e & (H | X) &&
                n[0].length - n[1].length == 0 &&
                (this.started = !1),
                this.callback(this.manager, e, {
                  pointers: n[0],
                  changedPointers: n[1],
                  pointerType: 'touch',
                  srcEvent: t
                });
            }
          }
        });
        var Tt = { touchstart: F, touchmove: 2, touchend: H, touchcancel: X },
          kt = 'touchstart touchmove touchend touchcancel';
        function bt() {
          (this.evTarget = kt), (this.targetIds = {}), Q.apply(this, arguments);
        }
        k(bt, Q, {
          handler: function(t) {
            var e = Tt[t.type],
              n = function(t, e) {
                var n = C(t.touches),
                  o = this.targetIds;
                if (e & (2 | F) && 1 === n.length)
                  return (o[n[0].identifier] = !0), [n, n];
                var r,
                  i,
                  s = C(t.changedTouches),
                  a = [],
                  c = this.target;
                if (
                  ((i = n.filter(function(t) {
                    return P(t.target, c);
                  })),
                  e === F)
                )
                  for (r = 0; r < i.length; ) (o[i[r].identifier] = !0), r++;
                for (r = 0; r < s.length; )
                  o[s[r].identifier] && a.push(s[r]),
                    e & (H | X) && delete o[s[r].identifier],
                    r++;
                return a.length
                  ? [I(i.concat(a), 'identifier', !0), a]
                  : void 0;
              }.call(this, t, e);
            n &&
              this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: 'touch',
                srcEvent: t
              });
          }
        });
        var Et = 2500;
        function wt() {
          Q.apply(this, arguments);
          var t = b(this.handler, this);
          (this.touch = new bt(this.manager, t)),
            (this.mouse = new ut(this.manager, t)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function St(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var n = { x: e.clientX, y: e.clientY };
            this.lastTouches.push(n);
            var o = this.lastTouches;
            setTimeout(function() {
              var t = o.indexOf(n);
              t > -1 && o.splice(t, 1);
            }, Et);
          }
        }
        k(wt, Q, {
          handler: function(t, e, n) {
            var o = 'mouse' == n.pointerType;
            if (
              !(
                o &&
                n.sourceCapabilities &&
                n.sourceCapabilities.firesTouchEvents
              )
            ) {
              if ('touch' == n.pointerType)
                (function(t, e) {
                  t & F
                    ? ((this.primaryTouch = e.changedPointers[0].identifier),
                      St.call(this, e))
                    : t & (H | X) && St.call(this, e);
                }.call(this, e, n));
              else if (
                o &&
                function(t) {
                  for (
                    var e = t.srcEvent.clientX, n = t.srcEvent.clientY, o = 0;
                    o < this.lastTouches.length;
                    o++
                  ) {
                    var r = this.lastTouches[o],
                      i = Math.abs(e - r.x),
                      s = Math.abs(n - r.y);
                    if (i <= 25 && s <= 25) return !0;
                  }
                  return !1;
                }.call(this, n)
              )
                return;
              this.callback(t, e, n);
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy();
          }
        });
        var Dt = j(u.style, 'touchAction'),
          Pt = Dt !== a,
          Ot = (function() {
            if (!Pt) return !1;
            var t = {},
              e = r.CSS && r.CSS.supports;
            return (
              [
                'auto',
                'manipulation',
                'pan-y',
                'pan-x',
                'pan-x pan-y',
                'none'
              ].forEach(function(n) {
                t[n] = !e || r.CSS.supports('touch-action', n);
              }),
              t
            );
          })();
        function zt(t, e) {
          (this.manager = t), this.set(e);
        }
        zt.prototype = {
          set: function(t) {
            'compute' == t && (t = this.compute()),
              Pt &&
                this.manager.element.style &&
                Ot[t] &&
                (this.manager.element.style[Dt] = t),
              (this.actions = t.toLowerCase().trim());
          },
          update: function() {
            this.set(this.manager.options.touchAction);
          },
          compute: function() {
            var t = [];
            return (
              v(this.manager.recognizers, function(e) {
                E(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
              }),
              (function(t) {
                if (O(t, 'none')) return 'none';
                var e = O(t, 'pan-x'),
                  n = O(t, 'pan-y');
                return e && n
                  ? 'none'
                  : e || n
                  ? e
                    ? 'pan-x'
                    : 'pan-y'
                  : O(t, 'manipulation')
                  ? 'manipulation'
                  : 'auto';
              })(t.join(' '))
            );
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              n = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var o = this.actions,
                r = O(o, 'none') && !Ot.none,
                i = O(o, 'pan-y') && !Ot['pan-y'],
                s = O(o, 'pan-x') && !Ot['pan-x'];
              if (
                r &&
                1 === t.pointers.length &&
                t.distance < 2 &&
                t.deltaTime < 250
              )
                return;
              if (!s || !i)
                return r || (i && n & V) || (s && n & B)
                  ? this.preventSrc(e)
                  : void 0;
            }
          },
          preventSrc: function(t) {
            (this.manager.session.prevented = !0), t.preventDefault();
          }
        };
        var Zt = 1,
          Ct = 2,
          It = 4,
          jt = 8,
          xt = jt,
          At = 16;
        function Rt(t) {
          (this.options = c({}, this.defaults, t || {})),
            (this.id = x++),
            (this.manager = null),
            (this.options.enable = w(this.options.enable, !0)),
            (this.state = Zt),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function Mt(t) {
          return t & At
            ? 'cancel'
            : t & jt
            ? 'end'
            : t & It
            ? 'move'
            : t & Ct
            ? 'start'
            : '';
        }
        function Nt(t) {
          return t == U
            ? 'down'
            : t == G
            ? 'up'
            : t == W
            ? 'left'
            : t == Y
            ? 'right'
            : '';
        }
        function Lt(t, e) {
          var n = e.manager;
          return n ? n.get(t) : t;
        }
        function Ft() {
          Rt.apply(this, arguments);
        }
        function Ht() {
          Ft.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function Xt() {
          Ft.apply(this, arguments);
        }
        function qt() {
          Rt.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function Wt() {
          Ft.apply(this, arguments);
        }
        function Yt() {
          Ft.apply(this, arguments);
        }
        function Gt() {
          Rt.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0);
        }
        function Ut(t, e) {
          return (
            ((e = e || {}).recognizers = w(e.recognizers, Ut.defaults.preset)),
            new Vt(t, e)
          );
        }
        function Vt(t, e) {
          var n;
          (this.options = c({}, Ut.defaults, e || {})),
            (this.options.inputTarget = this.options.inputTarget || t),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = t),
            (this.input = new ((n = this).options.inputClass ||
              (M ? gt : N ? bt : R ? wt : ut))(n, tt)),
            (this.touchAction = new zt(this, this.options.touchAction)),
            Bt(this, !0),
            v(
              this.options.recognizers,
              function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
              },
              this
            );
        }
        function Bt(t, e) {
          var n,
            o = t.element;
          o.style &&
            (v(t.options.cssProps, function(r, i) {
              (n = j(o.style, i)),
                e
                  ? ((t.oldCssProps[n] = o.style[n]), (o.style[n] = r))
                  : (o.style[n] = t.oldCssProps[n] || '');
            }),
            e || (t.oldCssProps = {}));
        }
        (Rt.prototype = {
          defaults: {},
          set: function(t) {
            return (
              c(this.options, t),
              this.manager && this.manager.touchAction.update(),
              this
            );
          },
          recognizeWith: function(t) {
            if (m(t, 'recognizeWith', this)) return this;
            var e = this.simultaneous;
            return (
              e[(t = Lt(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)),
              this
            );
          },
          dropRecognizeWith: function(t) {
            return m(t, 'dropRecognizeWith', this)
              ? this
              : ((t = Lt(t, this)), delete this.simultaneous[t.id], this);
          },
          requireFailure: function(t) {
            if (m(t, 'requireFailure', this)) return this;
            var e = this.requireFail;
            return (
              -1 === Z(e, (t = Lt(t, this))) &&
                (e.push(t), t.requireFailure(this)),
              this
            );
          },
          dropRequireFailure: function(t) {
            if (m(t, 'dropRequireFailure', this)) return this;
            t = Lt(t, this);
            var e = Z(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this;
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0;
          },
          canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id];
          },
          emit: function(t) {
            var e = this,
              n = this.state;
            function o(n) {
              e.manager.emit(n, t);
            }
            n < jt && o(e.options.event + Mt(n)),
              o(e.options.event),
              t.additionalEvent && o(t.additionalEvent),
              n >= jt && o(e.options.event + Mt(n));
          },
          tryEmit: function(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = 32;
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length; ) {
              if (!(this.requireFail[t].state & (32 | Zt))) return !1;
              t++;
            }
            return !0;
          },
          recognize: function(t) {
            var e = c({}, t);
            if (!E(this.options.enable, [this, e]))
              return this.reset(), void (this.state = 32);
            this.state & (xt | At | 32) && (this.state = Zt),
              (this.state = this.process(e)),
              this.state & (Ct | It | jt | At) && this.tryEmit(e);
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }),
          k(Ft, Rt, {
            defaults: { pointers: 1 },
            attrTest: function(t) {
              var e = this.options.pointers;
              return 0 === e || t.pointers.length === e;
            },
            process: function(t) {
              var e = this.state,
                n = t.eventType,
                o = e & (Ct | It),
                r = this.attrTest(t);
              return o && (n & X || !r)
                ? e | At
                : o || r
                ? n & H
                  ? e | jt
                  : e & Ct
                  ? e | It
                  : Ct
                : 32;
            }
          }),
          k(Ht, Ft, {
            defaults: {
              event: 'pan',
              threshold: 10,
              pointers: 1,
              direction: $
            },
            getTouchAction: function() {
              var t = this.options.direction,
                e = [];
              return t & V && e.push('pan-y'), t & B && e.push('pan-x'), e;
            },
            directionTest: function(t) {
              var e = this.options,
                n = !0,
                o = t.distance,
                r = t.direction,
                i = t.deltaX,
                s = t.deltaY;
              return (
                r & e.direction ||
                  (e.direction & V
                    ? ((r = 0 === i ? q : i < 0 ? W : Y),
                      (n = i != this.pX),
                      (o = Math.abs(t.deltaX)))
                    : ((r = 0 === s ? q : s < 0 ? G : U),
                      (n = s != this.pY),
                      (o = Math.abs(t.deltaY)))),
                (t.direction = r),
                n && o > e.threshold && r & e.direction
              );
            },
            attrTest: function(t) {
              return (
                Ft.prototype.attrTest.call(this, t) &&
                (this.state & Ct ||
                  (!(this.state & Ct) && this.directionTest(t)))
              );
            },
            emit: function(t) {
              (this.pX = t.deltaX), (this.pY = t.deltaY);
              var e = Nt(t.direction);
              e && (t.additionalEvent = this.options.event + e),
                this._super.emit.call(this, t);
            }
          }),
          k(Xt, Ft, {
            defaults: { event: 'pinch', threshold: 0, pointers: 2 },
            getTouchAction: function() {
              return ['none'];
            },
            attrTest: function(t) {
              return (
                this._super.attrTest.call(this, t) &&
                (Math.abs(t.scale - 1) > this.options.threshold ||
                  this.state & Ct)
              );
            },
            emit: function(t) {
              1 !== t.scale &&
                (t.additionalEvent =
                  this.options.event + (t.scale < 1 ? 'in' : 'out')),
                this._super.emit.call(this, t);
            }
          }),
          k(qt, Rt, {
            defaults: { event: 'press', pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function() {
              return ['auto'];
            },
            process: function(t) {
              var e = this.options,
                n = t.pointers.length === e.pointers,
                o = t.distance < e.threshold,
                r = t.deltaTime > e.time;
              if (
                ((this._input = t), !o || !n || (t.eventType & (H | X) && !r))
              )
                this.reset();
              else if (t.eventType & F)
                this.reset(),
                  (this._timer = g(
                    function() {
                      (this.state = xt), this.tryEmit();
                    },
                    e.time,
                    this
                  ));
              else if (t.eventType & H) return xt;
              return 32;
            },
            reset: function() {
              clearTimeout(this._timer);
            },
            emit: function(t) {
              this.state === xt &&
                (t && t.eventType & H
                  ? this.manager.emit(this.options.event + 'up', t)
                  : ((this._input.timeStamp = d()),
                    this.manager.emit(this.options.event, this._input)));
            }
          }),
          k(Wt, Ft, {
            defaults: { event: 'rotate', threshold: 0, pointers: 2 },
            getTouchAction: function() {
              return ['none'];
            },
            attrTest: function(t) {
              return (
                this._super.attrTest.call(this, t) &&
                (Math.abs(t.rotation) > this.options.threshold ||
                  this.state & Ct)
              );
            }
          }),
          k(Yt, Ft, {
            defaults: {
              event: 'swipe',
              threshold: 10,
              velocity: 0.3,
              direction: V | B,
              pointers: 1
            },
            getTouchAction: function() {
              return Ht.prototype.getTouchAction.call(this);
            },
            attrTest: function(t) {
              var e,
                n = this.options.direction;
              return (
                n & (V | B)
                  ? (e = t.overallVelocity)
                  : n & V
                  ? (e = t.overallVelocityX)
                  : n & B && (e = t.overallVelocityY),
                this._super.attrTest.call(this, t) &&
                  n & t.offsetDirection &&
                  t.distance > this.options.threshold &&
                  t.maxPointers == this.options.pointers &&
                  f(e) > this.options.velocity &&
                  t.eventType & H
              );
            },
            emit: function(t) {
              var e = Nt(t.offsetDirection);
              e && this.manager.emit(this.options.event + e, t),
                this.manager.emit(this.options.event, t);
            }
          }),
          k(Gt, Rt, {
            defaults: {
              event: 'tap',
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10
            },
            getTouchAction: function() {
              return ['manipulation'];
            },
            process: function(t) {
              var e = this.options,
                n = t.pointers.length === e.pointers,
                o = t.distance < e.threshold,
                r = t.deltaTime < e.time;
              if ((this.reset(), t.eventType & F && 0 === this.count))
                return this.failTimeout();
              if (o && r && n) {
                if (t.eventType != H) return this.failTimeout();
                var i = !this.pTime || t.timeStamp - this.pTime < e.interval,
                  s =
                    !this.pCenter ||
                    it(this.pCenter, t.center) < e.posThreshold;
                if (
                  ((this.pTime = t.timeStamp),
                  (this.pCenter = t.center),
                  s && i ? (this.count += 1) : (this.count = 1),
                  (this._input = t),
                  0 == this.count % e.taps)
                )
                  return this.hasRequireFailures()
                    ? ((this._timer = g(
                        function() {
                          (this.state = xt), this.tryEmit();
                        },
                        e.interval,
                        this
                      )),
                      Ct)
                    : xt;
              }
              return 32;
            },
            failTimeout: function() {
              return (
                (this._timer = g(
                  function() {
                    this.state = 32;
                  },
                  this.options.interval,
                  this
                )),
                32
              );
            },
            reset: function() {
              clearTimeout(this._timer);
            },
            emit: function() {
              this.state == xt &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            }
          }),
          (Ut.VERSION = '2.0.7'),
          (Ut.defaults = {
            domEvents: !1,
            touchAction: 'compute',
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [Wt, { enable: !1 }],
              [Xt, { enable: !1 }, ['rotate']],
              [Yt, { direction: V }],
              [Ht, { direction: V }, ['swipe']],
              [Gt],
              [Gt, { event: 'doubletap', taps: 2 }, ['tap']],
              [qt]
            ],
            cssProps: {
              userSelect: 'none',
              touchSelect: 'none',
              touchCallout: 'none',
              contentZooming: 'none',
              userDrag: 'none',
              tapHighlightColor: 'rgba(0,0,0,0)'
            }
          }),
          (Vt.prototype = {
            set: function(t) {
              return (
                c(this.options, t),
                t.touchAction && this.touchAction.update(),
                t.inputTarget &&
                  (this.input.destroy(),
                  (this.input.target = t.inputTarget),
                  this.input.init()),
                this
              );
            },
            stop: function(t) {
              this.session.stopped = t ? 2 : 1;
            },
            recognize: function(t) {
              var e = this.session;
              if (!e.stopped) {
                var n;
                this.touchAction.preventDefaults(t);
                var o = this.recognizers,
                  r = e.curRecognizer;
                (!r || (r && r.state & xt)) && (r = e.curRecognizer = null);
                for (var i = 0; i < o.length; )
                  (n = o[i]),
                    2 === e.stopped || (r && n != r && !n.canRecognizeWith(r))
                      ? n.reset()
                      : n.recognize(t),
                    !r && n.state & (Ct | It | jt) && (r = e.curRecognizer = n),
                    i++;
              }
            },
            get: function(t) {
              if (t instanceof Rt) return t;
              for (var e = this.recognizers, n = 0; n < e.length; n++)
                if (e[n].options.event == t) return e[n];
              return null;
            },
            add: function(t) {
              if (m(t, 'add', this)) return this;
              var e = this.get(t.options.event);
              return (
                e && this.remove(e),
                this.recognizers.push(t),
                (t.manager = this),
                this.touchAction.update(),
                t
              );
            },
            remove: function(t) {
              if (m(t, 'remove', this)) return this;
              if ((t = this.get(t))) {
                var e = this.recognizers,
                  n = Z(e, t);
                -1 !== n && (e.splice(n, 1), this.touchAction.update());
              }
              return this;
            },
            on: function(t, e) {
              if (t !== a && e !== a) {
                var n = this.handlers;
                return (
                  v(z(t), function(t) {
                    (n[t] = n[t] || []), n[t].push(e);
                  }),
                  this
                );
              }
            },
            off: function(t, e) {
              if (t !== a) {
                var n = this.handlers;
                return (
                  v(z(t), function(t) {
                    e ? n[t] && n[t].splice(Z(n[t], e), 1) : delete n[t];
                  }),
                  this
                );
              }
            },
            emit: function(t, e) {
              this.options.domEvents &&
                (function(t, e) {
                  var n = i.createEvent('Event');
                  n.initEvent(t, !0, !0),
                    (n.gesture = e),
                    e.target.dispatchEvent(n);
                })(t, e);
              var n = this.handlers[t] && this.handlers[t].slice();
              if (n && n.length) {
                (e.type = t),
                  (e.preventDefault = function() {
                    e.srcEvent.preventDefault();
                  });
                for (var o = 0; o < n.length; ) n[o](e), o++;
              }
            },
            destroy: function() {
              this.element && Bt(this, !1),
                (this.handlers = {}),
                (this.session = {}),
                this.input.destroy(),
                (this.element = null);
            }
          }),
          c(Ut, {
            INPUT_START: F,
            INPUT_MOVE: 2,
            INPUT_END: H,
            INPUT_CANCEL: X,
            STATE_POSSIBLE: Zt,
            STATE_BEGAN: Ct,
            STATE_CHANGED: It,
            STATE_ENDED: jt,
            STATE_RECOGNIZED: xt,
            STATE_CANCELLED: At,
            STATE_FAILED: 32,
            DIRECTION_NONE: q,
            DIRECTION_LEFT: W,
            DIRECTION_RIGHT: Y,
            DIRECTION_UP: G,
            DIRECTION_DOWN: U,
            DIRECTION_HORIZONTAL: V,
            DIRECTION_VERTICAL: B,
            DIRECTION_ALL: $,
            Manager: Vt,
            Input: Q,
            TouchAction: zt,
            TouchInput: bt,
            MouseInput: ut,
            PointerEventInput: gt,
            TouchMouseInput: wt,
            SingleTouchInput: _t,
            Recognizer: Rt,
            AttrRecognizer: Ft,
            Tap: Gt,
            Pan: Ht,
            Swipe: Yt,
            Pinch: Xt,
            Rotate: Wt,
            Press: qt,
            on: S,
            off: D,
            each: v,
            merge: T,
            extend: _,
            assign: c,
            inherit: k,
            bindFn: b,
            prefixed: j
          }),
          ((void 0 !== r
            ? r
            : 'undefined' != typeof self
            ? self
            : {}
          ).Hammer = Ut),
          (o = function() {
            return Ut;
          }.call(e, n, e, t)) === a || (t.exports = o);
      })(window, document);
    },
    'hN/g': function(t, e, n) {
      'use strict';
      n.r(e), n('nf2o'), n('9HG0');
    },
    nf2o: function(t, e) {
      !(function(t) {
        const e = t.performance;
        function n(t) {
          e && e.mark && e.mark(t);
        }
        function o(t, n) {
          e && e.measure && e.measure(t, n);
        }
        n('Zone');
        const r = !0 === t.__zone_symbol__forceDuplicateZoneCheck;
        if (t.Zone) {
          if (r || 'function' != typeof t.Zone.__symbol__)
            throw new Error('Zone already loaded.');
          return t.Zone;
        }
        const i = (() => {
            class e {
              constructor(t, e) {
                (this._parent = t),
                  (this._name = e ? e.name || 'unnamed' : '<root>'),
                  (this._properties = (e && e.properties) || {}),
                  (this._zoneDelegate = new a(
                    this,
                    this._parent && this._parent._zoneDelegate,
                    e
                  ));
              }
              static assertZonePatched() {
                if (t.Promise !== P.ZoneAwarePromise)
                  throw new Error(
                    'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)'
                  );
              }
              static get root() {
                let t = e.current;
                for (; t.parent; ) t = t.parent;
                return t;
              }
              static get current() {
                return z.zone;
              }
              static get currentTask() {
                return Z;
              }
              static __load_patch(i, s) {
                if (P.hasOwnProperty(i)) {
                  if (r) throw Error('Already loaded patch: ' + i);
                } else if (!t['__Zone_disable_' + i]) {
                  const r = 'Zone:' + i;
                  n(r), (P[i] = s(t, e, O)), o(r, r);
                }
              }
              get parent() {
                return this._parent;
              }
              get name() {
                return this._name;
              }
              get(t) {
                const e = this.getZoneWith(t);
                if (e) return e._properties[t];
              }
              getZoneWith(t) {
                let e = this;
                for (; e; ) {
                  if (e._properties.hasOwnProperty(t)) return e;
                  e = e._parent;
                }
                return null;
              }
              fork(t) {
                if (!t) throw new Error('ZoneSpec required!');
                return this._zoneDelegate.fork(this, t);
              }
              wrap(t, e) {
                if ('function' != typeof t)
                  throw new Error('Expecting function got: ' + t);
                const n = this._zoneDelegate.intercept(this, t, e),
                  o = this;
                return function() {
                  return o.runGuarded(n, this, arguments, e);
                };
              }
              run(t, e, n, o) {
                z = { parent: z, zone: this };
                try {
                  return this._zoneDelegate.invoke(this, t, e, n, o);
                } finally {
                  z = z.parent;
                }
              }
              runGuarded(t, e = null, n, o) {
                z = { parent: z, zone: this };
                try {
                  try {
                    return this._zoneDelegate.invoke(this, t, e, n, o);
                  } catch (r) {
                    if (this._zoneDelegate.handleError(this, r)) throw r;
                  }
                } finally {
                  z = z.parent;
                }
              }
              runTask(t, e, n) {
                if (t.zone != this)
                  throw new Error(
                    'A task can only be run in the zone of creation! (Creation: ' +
                      (t.zone || v).name +
                      '; Execution: ' +
                      this.name +
                      ')'
                  );
                if (t.state === y && (t.type === D || t.type === S)) return;
                const o = t.state != k;
                o && t._transitionTo(k, T), t.runCount++;
                const r = Z;
                (Z = t), (z = { parent: z, zone: this });
                try {
                  t.type == S &&
                    t.data &&
                    !t.data.isPeriodic &&
                    (t.cancelFn = void 0);
                  try {
                    return this._zoneDelegate.invokeTask(this, t, e, n);
                  } catch (i) {
                    if (this._zoneDelegate.handleError(this, i)) throw i;
                  }
                } finally {
                  t.state !== y &&
                    t.state !== E &&
                    (t.type == D || (t.data && t.data.isPeriodic)
                      ? o && t._transitionTo(T, k)
                      : ((t.runCount = 0),
                        this._updateTaskCount(t, -1),
                        o && t._transitionTo(y, k, y))),
                    (z = z.parent),
                    (Z = r);
                }
              }
              scheduleTask(t) {
                if (t.zone && t.zone !== this) {
                  let e = this;
                  for (; e; ) {
                    if (e === t.zone)
                      throw Error(
                        `can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`
                      );
                    e = e.parent;
                  }
                }
                t._transitionTo(_, y);
                const e = [];
                (t._zoneDelegates = e), (t._zone = this);
                try {
                  t = this._zoneDelegate.scheduleTask(this, t);
                } catch (n) {
                  throw (t._transitionTo(E, _, y),
                  this._zoneDelegate.handleError(this, n),
                  n);
                }
                return (
                  t._zoneDelegates === e && this._updateTaskCount(t, 1),
                  t.state == _ && t._transitionTo(T, _),
                  t
                );
              }
              scheduleMicroTask(t, e, n, o) {
                return this.scheduleTask(new c(w, t, e, n, o, void 0));
              }
              scheduleMacroTask(t, e, n, o, r) {
                return this.scheduleTask(new c(S, t, e, n, o, r));
              }
              scheduleEventTask(t, e, n, o, r) {
                return this.scheduleTask(new c(D, t, e, n, o, r));
              }
              cancelTask(t) {
                if (t.zone != this)
                  throw new Error(
                    'A task can only be cancelled in the zone of creation! (Creation: ' +
                      (t.zone || v).name +
                      '; Execution: ' +
                      this.name +
                      ')'
                  );
                t._transitionTo(b, T, k);
                try {
                  this._zoneDelegate.cancelTask(this, t);
                } catch (e) {
                  throw (t._transitionTo(E, b),
                  this._zoneDelegate.handleError(this, e),
                  e);
                }
                return (
                  this._updateTaskCount(t, -1),
                  t._transitionTo(y, b),
                  (t.runCount = 0),
                  t
                );
              }
              _updateTaskCount(t, e) {
                const n = t._zoneDelegates;
                -1 == e && (t._zoneDelegates = null);
                for (let o = 0; o < n.length; o++)
                  n[o]._updateTaskCount(t.type, e);
              }
            }
            return (e.__symbol__ = j), e;
          })(),
          s = {
            name: '',
            onHasTask: (t, e, n, o) => t.hasTask(n, o),
            onScheduleTask: (t, e, n, o) => t.scheduleTask(n, o),
            onInvokeTask: (t, e, n, o, r, i) => t.invokeTask(n, o, r, i),
            onCancelTask: (t, e, n, o) => t.cancelTask(n, o)
          };
        class a {
          constructor(t, e, n) {
            (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
              (this.zone = t),
              (this._parentDelegate = e),
              (this._forkZS = n && (n && n.onFork ? n : e._forkZS)),
              (this._forkDlgt = n && (n.onFork ? e : e._forkDlgt)),
              (this._forkCurrZone = n && (n.onFork ? this.zone : e.zone)),
              (this._interceptZS = n && (n.onIntercept ? n : e._interceptZS)),
              (this._interceptDlgt =
                n && (n.onIntercept ? e : e._interceptDlgt)),
              (this._interceptCurrZone =
                n && (n.onIntercept ? this.zone : e.zone)),
              (this._invokeZS = n && (n.onInvoke ? n : e._invokeZS)),
              (this._invokeDlgt = n && (n.onInvoke ? e : e._invokeDlgt)),
              (this._invokeCurrZone = n && (n.onInvoke ? this.zone : e.zone)),
              (this._handleErrorZS =
                n && (n.onHandleError ? n : e._handleErrorZS)),
              (this._handleErrorDlgt =
                n && (n.onHandleError ? e : e._handleErrorDlgt)),
              (this._handleErrorCurrZone =
                n && (n.onHandleError ? this.zone : e.zone)),
              (this._scheduleTaskZS =
                n && (n.onScheduleTask ? n : e._scheduleTaskZS)),
              (this._scheduleTaskDlgt =
                n && (n.onScheduleTask ? e : e._scheduleTaskDlgt)),
              (this._scheduleTaskCurrZone =
                n && (n.onScheduleTask ? this.zone : e.zone)),
              (this._invokeTaskZS =
                n && (n.onInvokeTask ? n : e._invokeTaskZS)),
              (this._invokeTaskDlgt =
                n && (n.onInvokeTask ? e : e._invokeTaskDlgt)),
              (this._invokeTaskCurrZone =
                n && (n.onInvokeTask ? this.zone : e.zone)),
              (this._cancelTaskZS =
                n && (n.onCancelTask ? n : e._cancelTaskZS)),
              (this._cancelTaskDlgt =
                n && (n.onCancelTask ? e : e._cancelTaskDlgt)),
              (this._cancelTaskCurrZone =
                n && (n.onCancelTask ? this.zone : e.zone)),
              (this._hasTaskZS = null),
              (this._hasTaskDlgt = null),
              (this._hasTaskDlgtOwner = null),
              (this._hasTaskCurrZone = null);
            const o = n && n.onHasTask;
            (o || (e && e._hasTaskZS)) &&
              ((this._hasTaskZS = o ? n : s),
              (this._hasTaskDlgt = e),
              (this._hasTaskDlgtOwner = this),
              (this._hasTaskCurrZone = t),
              n.onScheduleTask ||
                ((this._scheduleTaskZS = s),
                (this._scheduleTaskDlgt = e),
                (this._scheduleTaskCurrZone = this.zone)),
              n.onInvokeTask ||
                ((this._invokeTaskZS = s),
                (this._invokeTaskDlgt = e),
                (this._invokeTaskCurrZone = this.zone)),
              n.onCancelTask ||
                ((this._cancelTaskZS = s),
                (this._cancelTaskDlgt = e),
                (this._cancelTaskCurrZone = this.zone)));
          }
          fork(t, e) {
            return this._forkZS
              ? this._forkZS.onFork(this._forkDlgt, this.zone, t, e)
              : new i(t, e);
          }
          intercept(t, e, n) {
            return this._interceptZS
              ? this._interceptZS.onIntercept(
                  this._interceptDlgt,
                  this._interceptCurrZone,
                  t,
                  e,
                  n
                )
              : e;
          }
          invoke(t, e, n, o, r) {
            return this._invokeZS
              ? this._invokeZS.onInvoke(
                  this._invokeDlgt,
                  this._invokeCurrZone,
                  t,
                  e,
                  n,
                  o,
                  r
                )
              : e.apply(n, o);
          }
          handleError(t, e) {
            return (
              !this._handleErrorZS ||
              this._handleErrorZS.onHandleError(
                this._handleErrorDlgt,
                this._handleErrorCurrZone,
                t,
                e
              )
            );
          }
          scheduleTask(t, e) {
            let n = e;
            if (this._scheduleTaskZS)
              this._hasTaskZS && n._zoneDelegates.push(this._hasTaskDlgtOwner),
                (n = this._scheduleTaskZS.onScheduleTask(
                  this._scheduleTaskDlgt,
                  this._scheduleTaskCurrZone,
                  t,
                  e
                )) || (n = e);
            else if (e.scheduleFn) e.scheduleFn(e);
            else {
              if (e.type != w) throw new Error('Task is missing scheduleFn.');
              g(e);
            }
            return n;
          }
          invokeTask(t, e, n, o) {
            return this._invokeTaskZS
              ? this._invokeTaskZS.onInvokeTask(
                  this._invokeTaskDlgt,
                  this._invokeTaskCurrZone,
                  t,
                  e,
                  n,
                  o
                )
              : e.callback.apply(n, o);
          }
          cancelTask(t, e) {
            let n;
            if (this._cancelTaskZS)
              n = this._cancelTaskZS.onCancelTask(
                this._cancelTaskDlgt,
                this._cancelTaskCurrZone,
                t,
                e
              );
            else {
              if (!e.cancelFn) throw Error('Task is not cancelable');
              n = e.cancelFn(e);
            }
            return n;
          }
          hasTask(t, e) {
            try {
              this._hasTaskZS &&
                this._hasTaskZS.onHasTask(
                  this._hasTaskDlgt,
                  this._hasTaskCurrZone,
                  t,
                  e
                );
            } catch (n) {
              this.handleError(t, n);
            }
          }
          _updateTaskCount(t, e) {
            const n = this._taskCounts,
              o = n[t],
              r = (n[t] = o + e);
            if (r < 0)
              throw new Error('More tasks executed then were scheduled.');
            (0 != o && 0 != r) ||
              this.hasTask(this.zone, {
                microTask: n.microTask > 0,
                macroTask: n.macroTask > 0,
                eventTask: n.eventTask > 0,
                change: t
              });
          }
        }
        class c {
          constructor(e, n, o, r, i, s) {
            (this._zone = null),
              (this.runCount = 0),
              (this._zoneDelegates = null),
              (this._state = 'notScheduled'),
              (this.type = e),
              (this.source = n),
              (this.data = r),
              (this.scheduleFn = i),
              (this.cancelFn = s),
              (this.callback = o);
            const a = this;
            this.invoke =
              e === D && r && r.useG
                ? c.invokeTask
                : function() {
                    return c.invokeTask.call(t, a, this, arguments);
                  };
          }
          static invokeTask(t, e, n) {
            t || (t = this), C++;
            try {
              return t.runCount++, t.zone.runTask(t, e, n);
            } finally {
              1 == C && m(), C--;
            }
          }
          get zone() {
            return this._zone;
          }
          get state() {
            return this._state;
          }
          cancelScheduleRequest() {
            this._transitionTo(y, _);
          }
          _transitionTo(t, e, n) {
            if (this._state !== e && this._state !== n)
              throw new Error(
                `${this.type} '${
                  this.source
                }': can not transition to '${t}', expecting state '${e}'${
                  n ? " or '" + n + "'" : ''
                }, was '${this._state}'.`
              );
            (this._state = t), t == y && (this._zoneDelegates = null);
          }
          toString() {
            return this.data && void 0 !== this.data.handleId
              ? this.data.handleId.toString()
              : Object.prototype.toString.call(this);
          }
          toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount
            };
          }
        }
        const l = j('setTimeout'),
          u = j('Promise'),
          h = j('then');
        let p,
          f = [],
          d = !1;
        function g(e) {
          if (0 === C && 0 === f.length)
            if ((p || (t[u] && (p = t[u].resolve(0))), p)) {
              let t = p[h];
              t || (t = p.then), t.call(p, m);
            } else t[l](m, 0);
          e && f.push(e);
        }
        function m() {
          if (!d) {
            for (d = !0; f.length; ) {
              const e = f;
              f = [];
              for (let n = 0; n < e.length; n++) {
                const o = e[n];
                try {
                  o.zone.runTask(o, null, null);
                } catch (t) {
                  O.onUnhandledError(t);
                }
              }
            }
            O.microtaskDrainDone(), (d = !1);
          }
        }
        const v = { name: 'NO ZONE' },
          y = 'notScheduled',
          _ = 'scheduling',
          T = 'scheduled',
          k = 'running',
          b = 'canceling',
          E = 'unknown',
          w = 'microTask',
          S = 'macroTask',
          D = 'eventTask',
          P = {},
          O = {
            symbol: j,
            currentZoneFrame: () => z,
            onUnhandledError: I,
            microtaskDrainDone: I,
            scheduleMicroTask: g,
            showUncaughtError: () => !i[j('ignoreConsoleErrorUncaughtError')],
            patchEventTarget: () => [],
            patchOnProperties: I,
            patchMethod: () => I,
            bindArguments: () => [],
            patchThen: () => I,
            patchMacroTask: () => I,
            setNativePromise: t => {
              t && 'function' == typeof t.resolve && (p = t.resolve(0));
            },
            patchEventPrototype: () => I,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => void 0,
            ObjectDefineProperty: () => I,
            ObjectGetOwnPropertyDescriptor: () => void 0,
            ObjectCreate: () => void 0,
            ArraySlice: () => [],
            patchClass: () => I,
            wrapWithCurrentZone: () => I,
            filterProperties: () => [],
            attachOriginToPatched: () => I,
            _redefineProperty: () => I,
            patchCallbacks: () => I
          };
        let z = { parent: null, zone: new i(null, null) },
          Z = null,
          C = 0;
        function I() {}
        function j(t) {
          return '__zone_symbol__' + t;
        }
        o('Zone', 'Zone'), (t.Zone = i);
      })(
        ('undefined' != typeof window && window) ||
          ('undefined' != typeof self && self) ||
          global
      ),
        Zone.__load_patch('ZoneAwarePromise', (t, e, n) => {
          const o = Object.getOwnPropertyDescriptor,
            r = Object.defineProperty,
            i = n.symbol,
            s = [],
            a = i('Promise'),
            c = i('then'),
            l = '__creationTrace__';
          (n.onUnhandledError = t => {
            if (n.showUncaughtError()) {
              const e = t && t.rejection;
              e
                ? console.error(
                    'Unhandled Promise rejection:',
                    e instanceof Error ? e.message : e,
                    '; Zone:',
                    t.zone.name,
                    '; Task:',
                    t.task && t.task.source,
                    '; Value:',
                    e,
                    e instanceof Error ? e.stack : void 0
                  )
                : console.error(t);
            }
          }),
            (n.microtaskDrainDone = () => {
              for (; s.length; )
                for (; s.length; ) {
                  const e = s.shift();
                  try {
                    e.zone.runGuarded(() => {
                      throw e;
                    });
                  } catch (t) {
                    h(t);
                  }
                }
            });
          const u = i('unhandledPromiseRejectionHandler');
          function h(t) {
            n.onUnhandledError(t);
            try {
              const n = e[u];
              n && 'function' == typeof n && n.call(this, t);
            } catch (o) {}
          }
          function p(t) {
            return t && t.then;
          }
          function f(t) {
            return t;
          }
          function d(t) {
            return x.reject(t);
          }
          const g = i('state'),
            m = i('value'),
            v = i('finally'),
            y = i('parentPromiseValue'),
            _ = i('parentPromiseState'),
            T = 'Promise.then',
            k = null,
            b = !0,
            E = !1,
            w = 0;
          function S(t, e) {
            return n => {
              try {
                z(t, e, n);
              } catch (o) {
                z(t, !1, o);
              }
            };
          }
          const D = function() {
              let t = !1;
              return function(e) {
                return function() {
                  t || ((t = !0), e.apply(null, arguments));
                };
              };
            },
            P = 'Promise resolved with itself',
            O = i('currentTaskTrace');
          function z(t, o, i) {
            const a = D();
            if (t === i) throw new TypeError(P);
            if (t[g] === k) {
              let h = null;
              try {
                ('object' != typeof i && 'function' != typeof i) ||
                  (h = i && i.then);
              } catch (u) {
                return (
                  a(() => {
                    z(t, !1, u);
                  })(),
                  t
                );
              }
              if (
                o !== E &&
                i instanceof x &&
                i.hasOwnProperty(g) &&
                i.hasOwnProperty(m) &&
                i[g] !== k
              )
                C(i), z(t, i[g], i[m]);
              else if (o !== E && 'function' == typeof h)
                try {
                  h.call(i, a(S(t, o)), a(S(t, !1)));
                } catch (u) {
                  a(() => {
                    z(t, !1, u);
                  })();
                }
              else {
                t[g] = o;
                const a = t[m];
                if (
                  ((t[m] = i),
                  t[v] === v && o === b && ((t[g] = t[_]), (t[m] = t[y])),
                  o === E && i instanceof Error)
                ) {
                  const t =
                    e.currentTask &&
                    e.currentTask.data &&
                    e.currentTask.data[l];
                  t &&
                    r(i, O, {
                      configurable: !0,
                      enumerable: !1,
                      writable: !0,
                      value: t
                    });
                }
                for (let e = 0; e < a.length; )
                  I(t, a[e++], a[e++], a[e++], a[e++]);
                if (0 == a.length && o == E) {
                  t[g] = w;
                  try {
                    throw new Error(
                      'Uncaught (in promise): ' +
                        ((c = i) && c.toString === Object.prototype.toString
                          ? ((c.constructor && c.constructor.name) || '') +
                            ': ' +
                            JSON.stringify(c)
                          : c
                          ? c.toString()
                          : Object.prototype.toString.call(c)) +
                        (i && i.stack ? '\n' + i.stack : '')
                    );
                  } catch (u) {
                    const o = u;
                    (o.rejection = i),
                      (o.promise = t),
                      (o.zone = e.current),
                      (o.task = e.currentTask),
                      s.push(o),
                      n.scheduleMicroTask();
                  }
                }
              }
            }
            var c;
            return t;
          }
          const Z = i('rejectionHandledHandler');
          function C(t) {
            if (t[g] === w) {
              try {
                const o = e[Z];
                o &&
                  'function' == typeof o &&
                  o.call(this, { rejection: t[m], promise: t });
              } catch (n) {}
              t[g] = E;
              for (let e = 0; e < s.length; e++)
                t === s[e].promise && s.splice(e, 1);
            }
          }
          function I(t, e, n, o, r) {
            C(t);
            const i = t[g],
              s = i
                ? 'function' == typeof o
                  ? o
                  : f
                : 'function' == typeof r
                ? r
                : d;
            e.scheduleMicroTask(
              T,
              () => {
                try {
                  const r = t[m],
                    a = n && v === n[v];
                  a && ((n[y] = r), (n[_] = i));
                  const c = e.run(
                    s,
                    void 0,
                    a && s !== d && s !== f ? [] : [r]
                  );
                  z(n, !0, c);
                } catch (o) {
                  z(n, !1, o);
                }
              },
              n
            );
          }
          const j = 'function ZoneAwarePromise() { [native code] }';
          class x {
            constructor(t) {
              const e = this;
              if (!(e instanceof x))
                throw new Error('Must be an instanceof Promise.');
              (e[g] = k), (e[m] = []);
              try {
                t && t(S(e, b), S(e, E));
              } catch (n) {
                z(e, !1, n);
              }
            }
            static toString() {
              return j;
            }
            static resolve(t) {
              return z(new this(null), b, t);
            }
            static reject(t) {
              return z(new this(null), E, t);
            }
            static race(t) {
              let e,
                n,
                o = new this((t, o) => {
                  (e = t), (n = o);
                });
              function r(t) {
                e(t);
              }
              function i(t) {
                n(t);
              }
              for (let s of t) p(s) || (s = this.resolve(s)), s.then(r, i);
              return o;
            }
            static all(t) {
              let e,
                n,
                o = new this((t, o) => {
                  (e = t), (n = o);
                }),
                r = 2,
                i = 0;
              const s = [];
              for (let a of t) {
                p(a) || (a = this.resolve(a));
                const t = i;
                a.then(n => {
                  (s[t] = n), 0 == --r && e(s);
                }, n),
                  r++,
                  i++;
              }
              return 0 == (r -= 2) && e(s), o;
            }
            get [Symbol.toStringTag]() {
              return 'Promise';
            }
            then(t, n) {
              const o = new this.constructor(null),
                r = e.current;
              return (
                this[g] == k ? this[m].push(r, o, t, n) : I(this, r, o, t, n), o
              );
            }
            catch(t) {
              return this.then(null, t);
            }
            finally(t) {
              const n = new this.constructor(null);
              n[v] = v;
              const o = e.current;
              return (
                this[g] == k ? this[m].push(o, n, t, t) : I(this, o, n, t, t), n
              );
            }
          }
          (x.resolve = x.resolve),
            (x.reject = x.reject),
            (x.race = x.race),
            (x.all = x.all);
          const A = (t[a] = t.Promise),
            R = e.__symbol__('ZoneAwarePromise');
          let M = o(t, 'Promise');
          (M && !M.configurable) ||
            (M && delete M.writable,
            M && delete M.value,
            M || (M = { configurable: !0, enumerable: !0 }),
            (M.get = function() {
              return t[R] ? t[R] : t[a];
            }),
            (M.set = function(e) {
              e === x
                ? (t[R] = e)
                : ((t[a] = e), e.prototype[c] || L(e), n.setNativePromise(e));
            }),
            r(t, 'Promise', M)),
            (t.Promise = x);
          const N = i('thenPatched');
          function L(t) {
            const e = t.prototype,
              n = o(e, 'then');
            if (n && (!1 === n.writable || !n.configurable)) return;
            const r = e.then;
            (e[c] = r),
              (t.prototype.then = function(t, e) {
                return new x((t, e) => {
                  r.call(this, t, e);
                }).then(t, e);
              }),
              (t[N] = !0);
          }
          if (((n.patchThen = L), A)) {
            L(A);
            const e = t.fetch;
            'function' == typeof e &&
              ((t[n.symbol('fetch')] = e),
              (t.fetch = (function(t) {
                return function() {
                  let e = t.apply(this, arguments);
                  if (e instanceof x) return e;
                  let n = e.constructor;
                  return n[N] || L(n), e;
                };
              })(e)));
          }
          return (Promise[e.__symbol__('uncaughtPromiseErrors')] = s), x;
        });
      const n = Object.getOwnPropertyDescriptor,
        o = Object.defineProperty,
        r = Object.getPrototypeOf,
        i = Object.create,
        s = Array.prototype.slice,
        a = 'addEventListener',
        c = 'removeEventListener',
        l = Zone.__symbol__(a),
        u = Zone.__symbol__(c),
        h = 'true',
        p = 'false',
        f = '__zone_symbol__';
      function d(t, e) {
        return Zone.current.wrap(t, e);
      }
      function g(t, e, n, o, r) {
        return Zone.current.scheduleMacroTask(t, e, n, o, r);
      }
      const m = Zone.__symbol__,
        v = 'undefined' != typeof window,
        y = v ? window : void 0,
        _ = (v && y) || ('object' == typeof self && self) || global,
        T = 'removeAttribute',
        k = [null];
      function b(t, e) {
        for (let n = t.length - 1; n >= 0; n--)
          'function' == typeof t[n] && (t[n] = d(t[n], e + '_' + n));
        return t;
      }
      function E(t) {
        return (
          !t ||
          (!1 !== t.writable &&
            !('function' == typeof t.get && void 0 === t.set))
        );
      }
      const w =
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope,
        S =
          !('nw' in _) &&
          void 0 !== _.process &&
          '[object process]' === {}.toString.call(_.process),
        D = !S && !w && !(!v || !y.HTMLElement),
        P =
          void 0 !== _.process &&
          '[object process]' === {}.toString.call(_.process) &&
          !w &&
          !(!v || !y.HTMLElement),
        O = {},
        z = function(t) {
          if (!(t = t || _.event)) return;
          let e = O[t.type];
          e || (e = O[t.type] = m('ON_PROPERTY' + t.type));
          const n = this || t.target || _,
            o = n[e];
          let r;
          if (D && n === y && 'error' === t.type) {
            const e = t;
            !0 ===
              (r =
                o &&
                o.call(
                  this,
                  e.message,
                  e.filename,
                  e.lineno,
                  e.colno,
                  e.error
                )) && t.preventDefault();
          } else
            null == (r = o && o.apply(this, arguments)) ||
              r ||
              t.preventDefault();
          return r;
        };
      function Z(t, e, r) {
        let i = n(t, e);
        if (
          (!i && r && n(r, e) && (i = { enumerable: !0, configurable: !0 }),
          !i || !i.configurable)
        )
          return;
        const s = m('on' + e + 'patched');
        if (t.hasOwnProperty(s) && t[s]) return;
        delete i.writable, delete i.value;
        const a = i.get,
          c = i.set,
          l = e.substr(2);
        let u = O[l];
        u || (u = O[l] = m('ON_PROPERTY' + l)),
          (i.set = function(e) {
            let n = this;
            n || t !== _ || (n = _),
              n &&
                (n[u] && n.removeEventListener(l, z),
                c && c.apply(n, k),
                'function' == typeof e
                  ? ((n[u] = e), n.addEventListener(l, z, !1))
                  : (n[u] = null));
          }),
          (i.get = function() {
            let n = this;
            if ((n || t !== _ || (n = _), !n)) return null;
            const o = n[u];
            if (o) return o;
            if (a) {
              let t = a && a.call(this);
              if (t)
                return (
                  i.set.call(this, t),
                  'function' == typeof n[T] && n.removeAttribute(e),
                  t
                );
            }
            return null;
          }),
          o(t, e, i),
          (t[s] = !0);
      }
      function C(t, e, n) {
        if (e) for (let o = 0; o < e.length; o++) Z(t, 'on' + e[o], n);
        else {
          const e = [];
          for (const n in t) 'on' == n.substr(0, 2) && e.push(n);
          for (let o = 0; o < e.length; o++) Z(t, e[o], n);
        }
      }
      const I = m('originalInstance');
      function j(t) {
        const e = _[t];
        if (!e) return;
        (_[m(t)] = e),
          (_[t] = function() {
            const n = b(arguments, t);
            switch (n.length) {
              case 0:
                this[I] = new e();
                break;
              case 1:
                this[I] = new e(n[0]);
                break;
              case 2:
                this[I] = new e(n[0], n[1]);
                break;
              case 3:
                this[I] = new e(n[0], n[1], n[2]);
                break;
              case 4:
                this[I] = new e(n[0], n[1], n[2], n[3]);
                break;
              default:
                throw new Error('Arg list too long.');
            }
          }),
          M(_[t], e);
        const n = new e(function() {});
        let r;
        for (r in n)
          ('XMLHttpRequest' === t && 'responseBlob' === r) ||
            (function(e) {
              'function' == typeof n[e]
                ? (_[t].prototype[e] = function() {
                    return this[I][e].apply(this[I], arguments);
                  })
                : o(_[t].prototype, e, {
                    set: function(n) {
                      'function' == typeof n
                        ? ((this[I][e] = d(n, t + '.' + e)), M(this[I][e], n))
                        : (this[I][e] = n);
                    },
                    get: function() {
                      return this[I][e];
                    }
                  });
            })(r);
        for (r in e)
          'prototype' !== r && e.hasOwnProperty(r) && (_[t][r] = e[r]);
      }
      let x = !1;
      function A(t, e, o) {
        let i = t;
        for (; i && !i.hasOwnProperty(e); ) i = r(i);
        !i && t[e] && (i = t);
        const s = m(e);
        let a = null;
        if (i && !(a = i[s]) && ((a = i[s] = i[e]), E(i && n(i, e)))) {
          const t = o(a, s, e);
          (i[e] = function() {
            return t(this, arguments);
          }),
            M(i[e], a),
            x &&
              ((c = a),
              (l = i[e]),
              'function' == typeof Object.getOwnPropertySymbols &&
                Object.getOwnPropertySymbols(c).forEach(t => {
                  const e = Object.getOwnPropertyDescriptor(c, t);
                  Object.defineProperty(l, t, {
                    get: function() {
                      return c[t];
                    },
                    set: function(n) {
                      (!e || (e.writable && 'function' == typeof e.set)) &&
                        (c[t] = n);
                    },
                    enumerable: !e || e.enumerable,
                    configurable: !e || e.configurable
                  });
                }));
        }
        var c, l;
        return a;
      }
      function R(t, e, n) {
        let o = null;
        function r(t) {
          const e = t.data;
          return (
            (e.args[e.cbIdx] = function() {
              t.invoke.apply(this, arguments);
            }),
            o.apply(e.target, e.args),
            t
          );
        }
        o = A(
          t,
          e,
          t =>
            function(e, o) {
              const i = n(e, o);
              return i.cbIdx >= 0 && 'function' == typeof o[i.cbIdx]
                ? g(i.name, o[i.cbIdx], i, r)
                : t.apply(e, o);
            }
        );
      }
      function M(t, e) {
        t[m('OriginalDelegate')] = e;
      }
      let N = !1,
        L = !1;
      function F() {
        if (N) return L;
        N = !0;
        try {
          const e = y.navigator.userAgent;
          (-1 === e.indexOf('MSIE ') &&
            -1 === e.indexOf('Trident/') &&
            -1 === e.indexOf('Edge/')) ||
            (L = !0);
        } catch (t) {}
        return L;
      }
      Zone.__load_patch('toString', t => {
        const e = Function.prototype.toString,
          n = m('OriginalDelegate'),
          o = m('Promise'),
          r = m('Error'),
          i = function() {
            if ('function' == typeof this) {
              const i = this[n];
              if (i)
                return 'function' == typeof i
                  ? e.call(i)
                  : Object.prototype.toString.call(i);
              if (this === Promise) {
                const n = t[o];
                if (n) return e.call(n);
              }
              if (this === Error) {
                const n = t[r];
                if (n) return e.call(n);
              }
            }
            return e.call(this);
          };
        (i[n] = e), (Function.prototype.toString = i);
        const s = Object.prototype.toString;
        Object.prototype.toString = function() {
          return this instanceof Promise ? '[object Promise]' : s.call(this);
        };
      });
      let H = !1;
      if ('undefined' != typeof window)
        try {
          const t = Object.defineProperty({}, 'passive', {
            get: function() {
              H = !0;
            }
          });
          window.addEventListener('test', t, t),
            window.removeEventListener('test', t, t);
        } catch (bt) {
          H = !1;
        }
      const X = { useG: !0 },
        q = {},
        W = {},
        Y = /^__zone_symbol__(\w+)(true|false)$/,
        G = '__zone_symbol__propagationStopped';
      function U(t, e, n) {
        const o = (n && n.add) || a,
          i = (n && n.rm) || c,
          s = (n && n.listeners) || 'eventListeners',
          l = (n && n.rmAll) || 'removeAllListeners',
          u = m(o),
          d = '.' + o + ':',
          g = 'prependListener',
          v = '.' + g + ':',
          y = function(t, e, n) {
            if (t.isRemoved) return;
            const o = t.callback;
            'object' == typeof o &&
              o.handleEvent &&
              ((t.callback = t => o.handleEvent(t)), (t.originalDelegate = o)),
              t.invoke(t, e, [n]);
            const r = t.options;
            r &&
              'object' == typeof r &&
              r.once &&
              e[i].call(
                e,
                n.type,
                t.originalDelegate ? t.originalDelegate : t.callback,
                r
              );
          },
          _ = function(e) {
            if (!(e = e || t.event)) return;
            const n = this || e.target || t,
              o = n[q[e.type][p]];
            if (o)
              if (1 === o.length) y(o[0], n, e);
              else {
                const t = o.slice();
                for (let o = 0; o < t.length && (!e || !0 !== e[G]); o++)
                  y(t[o], n, e);
              }
          },
          T = function(e) {
            if (!(e = e || t.event)) return;
            const n = this || e.target || t,
              o = n[q[e.type][h]];
            if (o)
              if (1 === o.length) y(o[0], n, e);
              else {
                const t = o.slice();
                for (let o = 0; o < t.length && (!e || !0 !== e[G]); o++)
                  y(t[o], n, e);
              }
          };
        function k(e, n) {
          if (!e) return !1;
          let a = !0;
          n && void 0 !== n.useG && (a = n.useG);
          const c = n && n.vh;
          let y = !0;
          n && void 0 !== n.chkDup && (y = n.chkDup);
          let k = !1;
          n && void 0 !== n.rt && (k = n.rt);
          let b = e;
          for (; b && !b.hasOwnProperty(o); ) b = r(b);
          if ((!b && e[o] && (b = e), !b)) return !1;
          if (b[u]) return !1;
          const E = n && n.eventNameToString,
            w = {},
            D = (b[u] = b[o]),
            P = (b[m(i)] = b[i]),
            O = (b[m(s)] = b[s]),
            z = (b[m(l)] = b[l]);
          let Z;
          function C(t) {
            H ||
              'boolean' == typeof w.options ||
              null == w.options ||
              ((t.options = !!w.options.capture), (w.options = t.options));
          }
          n && n.prepend && (Z = b[m(n.prepend)] = b[n.prepend]);
          const I = a
              ? function(t) {
                  if (!w.isExisting)
                    return (
                      C(t),
                      D.call(
                        w.target,
                        w.eventName,
                        w.capture ? T : _,
                        w.options
                      )
                    );
                }
              : function(t) {
                  return (
                    C(t), D.call(w.target, w.eventName, t.invoke, w.options)
                  );
                },
            j = a
              ? function(t) {
                  if (!t.isRemoved) {
                    const e = q[t.eventName];
                    let n;
                    e && (n = e[t.capture ? h : p]);
                    const o = n && t.target[n];
                    if (o)
                      for (let r = 0; r < o.length; r++)
                        if (o[r] === t) {
                          o.splice(r, 1),
                            (t.isRemoved = !0),
                            0 === o.length &&
                              ((t.allRemoved = !0), (t.target[n] = null));
                          break;
                        }
                  }
                  if (t.allRemoved)
                    return P.call(
                      t.target,
                      t.eventName,
                      t.capture ? T : _,
                      t.options
                    );
                }
              : function(t) {
                  return P.call(t.target, t.eventName, t.invoke, t.options);
                },
            x =
              n && n.diff
                ? n.diff
                : function(t, e) {
                    const n = typeof e;
                    return (
                      ('function' === n && t.callback === e) ||
                      ('object' === n && t.originalDelegate === e)
                    );
                  },
            A = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')],
            R = function(e, n, o, r, i = !1, s = !1) {
              return function() {
                const l = this || t,
                  u = arguments[0];
                let d = arguments[1];
                if (!d) return e.apply(this, arguments);
                if (S && 'uncaughtException' === u)
                  return e.apply(this, arguments);
                let g = !1;
                if ('function' != typeof d) {
                  if (!d.handleEvent) return e.apply(this, arguments);
                  g = !0;
                }
                if (c && !c(e, d, l, arguments)) return;
                const m = arguments[2];
                if (A)
                  for (let t = 0; t < A.length; t++)
                    if (u === A[t]) return e.apply(this, arguments);
                let v,
                  _ = !1;
                void 0 === m
                  ? (v = !1)
                  : !0 === m
                  ? (v = !0)
                  : !1 === m
                  ? (v = !1)
                  : ((v = !!m && !!m.capture), (_ = !!m && !!m.once));
                const T = Zone.current,
                  k = q[u];
                let b;
                if (k) b = k[v ? h : p];
                else {
                  const t = (E ? E(u) : u) + p,
                    e = (E ? E(u) : u) + h,
                    n = f + t,
                    o = f + e;
                  (q[u] = {}), (q[u][p] = n), (q[u][h] = o), (b = v ? o : n);
                }
                let D,
                  P = l[b],
                  O = !1;
                if (P) {
                  if (((O = !0), y))
                    for (let t = 0; t < P.length; t++) if (x(P[t], d)) return;
                } else P = l[b] = [];
                const z = l.constructor.name,
                  Z = W[z];
                Z && (D = Z[u]),
                  D || (D = z + n + (E ? E(u) : u)),
                  (w.options = m),
                  _ && (w.options.once = !1),
                  (w.target = l),
                  (w.capture = v),
                  (w.eventName = u),
                  (w.isExisting = O);
                const C = a ? X : void 0;
                C && (C.taskData = w);
                const I = T.scheduleEventTask(D, d, C, o, r);
                return (
                  (w.target = null),
                  C && (C.taskData = null),
                  _ && (m.once = !0),
                  (H || 'boolean' != typeof I.options) && (I.options = m),
                  (I.target = l),
                  (I.capture = v),
                  (I.eventName = u),
                  g && (I.originalDelegate = d),
                  s ? P.unshift(I) : P.push(I),
                  i ? l : void 0
                );
              };
            };
          return (
            (b[o] = R(D, d, I, j, k)),
            Z &&
              (b[g] = R(
                Z,
                v,
                function(t) {
                  return Z.call(w.target, w.eventName, t.invoke, w.options);
                },
                j,
                k,
                !0
              )),
            (b[i] = function() {
              const e = this || t,
                n = arguments[0],
                o = arguments[2];
              let r;
              r =
                void 0 !== o && (!0 === o || (!1 !== o && !!o && !!o.capture));
              const i = arguments[1];
              if (!i) return P.apply(this, arguments);
              if (c && !c(P, i, e, arguments)) return;
              const s = q[n];
              let a;
              s && (a = s[r ? h : p]);
              const l = a && e[a];
              if (l)
                for (let t = 0; t < l.length; t++) {
                  const n = l[t];
                  if (x(n, i))
                    return (
                      l.splice(t, 1),
                      (n.isRemoved = !0),
                      0 === l.length && ((n.allRemoved = !0), (e[a] = null)),
                      n.zone.cancelTask(n),
                      k ? e : void 0
                    );
                }
              return P.apply(this, arguments);
            }),
            (b[s] = function() {
              const e = arguments[0],
                n = [],
                o = V(this || t, E ? E(e) : e);
              for (let t = 0; t < o.length; t++) {
                const e = o[t];
                n.push(e.originalDelegate ? e.originalDelegate : e.callback);
              }
              return n;
            }),
            (b[l] = function() {
              const e = this || t,
                n = arguments[0];
              if (n) {
                const t = q[n];
                if (t) {
                  const o = e[t[p]],
                    r = e[t[h]];
                  if (o) {
                    const t = o.slice();
                    for (let e = 0; e < t.length; e++) {
                      const o = t[e];
                      this[i].call(
                        this,
                        n,
                        o.originalDelegate ? o.originalDelegate : o.callback,
                        o.options
                      );
                    }
                  }
                  if (r) {
                    const t = r.slice();
                    for (let e = 0; e < t.length; e++) {
                      const o = t[e];
                      this[i].call(
                        this,
                        n,
                        o.originalDelegate ? o.originalDelegate : o.callback,
                        o.options
                      );
                    }
                  }
                }
              } else {
                const t = Object.keys(e);
                for (let e = 0; e < t.length; e++) {
                  const n = Y.exec(t[e]);
                  let o = n && n[1];
                  o && 'removeListener' !== o && this[l].call(this, o);
                }
                this[l].call(this, 'removeListener');
              }
              if (k) return this;
            }),
            M(b[o], D),
            M(b[i], P),
            z && M(b[l], z),
            O && M(b[s], O),
            !0
          );
        }
        let b = [];
        for (let r = 0; r < e.length; r++) b[r] = k(e[r], n);
        return b;
      }
      function V(t, e) {
        const n = [];
        for (let o in t) {
          const r = Y.exec(o);
          let i = r && r[1];
          if (i && (!e || i === e)) {
            const e = t[o];
            if (e) for (let t = 0; t < e.length; t++) n.push(e[t]);
          }
        }
        return n;
      }
      function B(t, e) {
        const n = t.Event;
        n &&
          n.prototype &&
          e.patchMethod(
            n.prototype,
            'stopImmediatePropagation',
            t =>
              function(e, n) {
                (e[G] = !0), t && t.apply(e, n);
              }
          );
      }
      function $(t, e, n, o, r) {
        const i = Zone.__symbol__(o);
        if (e[i]) return;
        const s = (e[i] = e[o]);
        (e[o] = function(i, a, c) {
          return (
            a &&
              a.prototype &&
              r.forEach(function(e) {
                const r = `${n}.${o}::` + e,
                  i = a.prototype;
                if (i.hasOwnProperty(e)) {
                  const n = t.ObjectGetOwnPropertyDescriptor(i, e);
                  n && n.value
                    ? ((n.value = t.wrapWithCurrentZone(n.value, r)),
                      t._redefineProperty(a.prototype, e, n))
                    : i[e] && (i[e] = t.wrapWithCurrentZone(i[e], r));
                } else i[e] && (i[e] = t.wrapWithCurrentZone(i[e], r));
              }),
            s.call(e, i, a, c)
          );
        }),
          t.attachOriginToPatched(e[o], s);
      }
      const J = Zone.__symbol__,
        K = (Object[J('defineProperty')] = Object.defineProperty),
        Q = (Object[J('getOwnPropertyDescriptor')] =
          Object.getOwnPropertyDescriptor),
        tt = Object.create,
        et = J('unconfigurables');
      function nt(t, e, n) {
        const o = n.configurable;
        return it(t, e, (n = rt(t, e, n)), o);
      }
      function ot(t, e) {
        return t && t[et] && t[et][e];
      }
      function rt(t, e, n) {
        return (
          Object.isFrozen(n) || (n.configurable = !0),
          n.configurable ||
            (t[et] ||
              Object.isFrozen(t) ||
              K(t, et, { writable: !0, value: {} }),
            t[et] && (t[et][e] = !0)),
          n
        );
      }
      function it(t, e, n, o) {
        try {
          return K(t, e, n);
        } catch (r) {
          if (!n.configurable) throw r;
          void 0 === o ? delete n.configurable : (n.configurable = o);
          try {
            return K(t, e, n);
          } catch (r) {
            let o = null;
            try {
              o = JSON.stringify(n);
            } catch (r) {
              o = n.toString();
            }
            console.log(
              `Attempting to configure '${e}' with descriptor '${o}' on object '${t}' and got error, giving up: ${r}`
            );
          }
        }
      }
      const st = [
          'absolutedeviceorientation',
          'afterinput',
          'afterprint',
          'appinstalled',
          'beforeinstallprompt',
          'beforeprint',
          'beforeunload',
          'devicelight',
          'devicemotion',
          'deviceorientation',
          'deviceorientationabsolute',
          'deviceproximity',
          'hashchange',
          'languagechange',
          'message',
          'mozbeforepaint',
          'offline',
          'online',
          'paint',
          'pageshow',
          'pagehide',
          'popstate',
          'rejectionhandled',
          'storage',
          'unhandledrejection',
          'unload',
          'userproximity',
          'vrdisplyconnected',
          'vrdisplaydisconnected',
          'vrdisplaypresentchange'
        ],
        at = [
          'encrypted',
          'waitingforkey',
          'msneedkey',
          'mozinterruptbegin',
          'mozinterruptend'
        ],
        ct = ['load'],
        lt = [
          'blur',
          'error',
          'focus',
          'load',
          'resize',
          'scroll',
          'messageerror'
        ],
        ut = ['bounce', 'finish', 'start'],
        ht = [
          'loadstart',
          'progress',
          'abort',
          'error',
          'load',
          'progress',
          'timeout',
          'loadend',
          'readystatechange'
        ],
        pt = [
          'upgradeneeded',
          'complete',
          'abort',
          'success',
          'error',
          'blocked',
          'versionchange',
          'close'
        ],
        ft = ['close', 'error', 'open', 'message'],
        dt = ['error', 'message'],
        gt = [
          'abort',
          'animationcancel',
          'animationend',
          'animationiteration',
          'auxclick',
          'beforeinput',
          'blur',
          'cancel',
          'canplay',
          'canplaythrough',
          'change',
          'compositionstart',
          'compositionupdate',
          'compositionend',
          'cuechange',
          'click',
          'close',
          'contextmenu',
          'curechange',
          'dblclick',
          'drag',
          'dragend',
          'dragenter',
          'dragexit',
          'dragleave',
          'dragover',
          'drop',
          'durationchange',
          'emptied',
          'ended',
          'error',
          'focus',
          'focusin',
          'focusout',
          'gotpointercapture',
          'input',
          'invalid',
          'keydown',
          'keypress',
          'keyup',
          'load',
          'loadstart',
          'loadeddata',
          'loadedmetadata',
          'lostpointercapture',
          'mousedown',
          'mouseenter',
          'mouseleave',
          'mousemove',
          'mouseout',
          'mouseover',
          'mouseup',
          'mousewheel',
          'orientationchange',
          'pause',
          'play',
          'playing',
          'pointercancel',
          'pointerdown',
          'pointerenter',
          'pointerleave',
          'pointerlockchange',
          'mozpointerlockchange',
          'webkitpointerlockerchange',
          'pointerlockerror',
          'mozpointerlockerror',
          'webkitpointerlockerror',
          'pointermove',
          'pointout',
          'pointerover',
          'pointerup',
          'progress',
          'ratechange',
          'reset',
          'resize',
          'scroll',
          'seeked',
          'seeking',
          'select',
          'selectionchange',
          'selectstart',
          'show',
          'sort',
          'stalled',
          'submit',
          'suspend',
          'timeupdate',
          'volumechange',
          'touchcancel',
          'touchmove',
          'touchstart',
          'touchend',
          'transitioncancel',
          'transitionend',
          'waiting',
          'wheel'
        ].concat(
          [
            'webglcontextrestored',
            'webglcontextlost',
            'webglcontextcreationerror'
          ],
          ['autocomplete', 'autocompleteerror'],
          ['toggle'],
          [
            'afterscriptexecute',
            'beforescriptexecute',
            'DOMContentLoaded',
            'freeze',
            'fullscreenchange',
            'mozfullscreenchange',
            'webkitfullscreenchange',
            'msfullscreenchange',
            'fullscreenerror',
            'mozfullscreenerror',
            'webkitfullscreenerror',
            'msfullscreenerror',
            'readystatechange',
            'visibilitychange',
            'resume'
          ],
          st,
          [
            'beforecopy',
            'beforecut',
            'beforepaste',
            'copy',
            'cut',
            'paste',
            'dragstart',
            'loadend',
            'animationstart',
            'search',
            'transitionrun',
            'transitionstart',
            'webkitanimationend',
            'webkitanimationiteration',
            'webkitanimationstart',
            'webkittransitionend'
          ],
          [
            'activate',
            'afterupdate',
            'ariarequest',
            'beforeactivate',
            'beforedeactivate',
            'beforeeditfocus',
            'beforeupdate',
            'cellchange',
            'controlselect',
            'dataavailable',
            'datasetchanged',
            'datasetcomplete',
            'errorupdate',
            'filterchange',
            'layoutcomplete',
            'losecapture',
            'move',
            'moveend',
            'movestart',
            'propertychange',
            'resizeend',
            'resizestart',
            'rowenter',
            'rowexit',
            'rowsdelete',
            'rowsinserted',
            'command',
            'compassneedscalibration',
            'deactivate',
            'help',
            'mscontentzoom',
            'msmanipulationstatechanged',
            'msgesturechange',
            'msgesturedoubletap',
            'msgestureend',
            'msgesturehold',
            'msgesturestart',
            'msgesturetap',
            'msgotpointercapture',
            'msinertiastart',
            'mslostpointercapture',
            'mspointercancel',
            'mspointerdown',
            'mspointerenter',
            'mspointerhover',
            'mspointerleave',
            'mspointermove',
            'mspointerout',
            'mspointerover',
            'mspointerup',
            'pointerout',
            'mssitemodejumplistitemremoved',
            'msthumbnailclick',
            'stop',
            'storagecommit'
          ]
        );
      function mt(t, e, n) {
        if (!n || 0 === n.length) return e;
        const o = n.filter(e => e.target === t);
        if (!o || 0 === o.length) return e;
        const r = o[0].ignoreProperties;
        return e.filter(t => -1 === r.indexOf(t));
      }
      function vt(t, e, n, o) {
        t && C(t, mt(t, e, n), o);
      }
      function yt(t, e) {
        if (S && !P) return;
        if (Zone[t.symbol('patchEvents')]) return;
        const n = 'undefined' != typeof WebSocket,
          o = e.__Zone_ignore_on_properties;
        if (D) {
          const t = window,
            e = function() {
              try {
                const n = t.navigator.userAgent;
                if (-1 !== n.indexOf('MSIE ') || -1 !== n.indexOf('Trident/'))
                  return !0;
              } catch (e) {}
              return !1;
            }
              ? [{ target: t, ignoreProperties: ['error'] }]
              : [];
          vt(t, gt.concat(['messageerror']), o ? o.concat(e) : o, r(t)),
            vt(Document.prototype, gt, o),
            void 0 !== t.SVGElement && vt(t.SVGElement.prototype, gt, o),
            vt(Element.prototype, gt, o),
            vt(HTMLElement.prototype, gt, o),
            vt(HTMLMediaElement.prototype, at, o),
            vt(HTMLFrameSetElement.prototype, st.concat(lt), o),
            vt(HTMLBodyElement.prototype, st.concat(lt), o),
            vt(HTMLFrameElement.prototype, ct, o),
            vt(HTMLIFrameElement.prototype, ct, o);
          const n = t.HTMLMarqueeElement;
          n && vt(n.prototype, ut, o);
          const i = t.Worker;
          i && vt(i.prototype, dt, o);
        }
        const i = e.XMLHttpRequest;
        i && vt(i.prototype, ht, o);
        const s = e.XMLHttpRequestEventTarget;
        s && vt(s && s.prototype, ht, o),
          'undefined' != typeof IDBIndex &&
            (vt(IDBIndex.prototype, pt, o),
            vt(IDBRequest.prototype, pt, o),
            vt(IDBOpenDBRequest.prototype, pt, o),
            vt(IDBDatabase.prototype, pt, o),
            vt(IDBTransaction.prototype, pt, o),
            vt(IDBCursor.prototype, pt, o)),
          n && vt(WebSocket.prototype, ft, o);
      }
      Zone.__load_patch('util', (t, e, r) => {
        (r.patchOnProperties = C),
          (r.patchMethod = A),
          (r.bindArguments = b),
          (r.patchMacroTask = R);
        const l = e.__symbol__('BLACK_LISTED_EVENTS'),
          u = e.__symbol__('UNPATCHED_EVENTS');
        t[u] && (t[l] = t[u]),
          t[l] && (e[l] = e[u] = t[l]),
          (r.patchEventPrototype = B),
          (r.patchEventTarget = U),
          (r.isIEOrEdge = F),
          (r.ObjectDefineProperty = o),
          (r.ObjectGetOwnPropertyDescriptor = n),
          (r.ObjectCreate = i),
          (r.ArraySlice = s),
          (r.patchClass = j),
          (r.wrapWithCurrentZone = d),
          (r.filterProperties = mt),
          (r.attachOriginToPatched = M),
          (r._redefineProperty = nt),
          (r.patchCallbacks = $),
          (r.getGlobalObjects = () => ({
            globalSources: W,
            zoneSymbolEventNames: q,
            eventNames: gt,
            isBrowser: D,
            isMix: P,
            isNode: S,
            TRUE_STR: h,
            FALSE_STR: p,
            ZONE_SYMBOL_PREFIX: f,
            ADD_EVENT_LISTENER_STR: a,
            REMOVE_EVENT_LISTENER_STR: c
          }));
      });
      const _t = m('zoneTask');
      function Tt(t, e, n, o) {
        let r = null,
          i = null;
        n += o;
        const s = {};
        function a(e) {
          const n = e.data;
          return (
            (n.args[0] = function() {
              try {
                e.invoke.apply(this, arguments);
              } finally {
                (e.data && e.data.isPeriodic) ||
                  ('number' == typeof n.handleId
                    ? delete s[n.handleId]
                    : n.handleId && (n.handleId[_t] = null));
              }
            }),
            (n.handleId = r.apply(t, n.args)),
            e
          );
        }
        function c(t) {
          return i(t.data.handleId);
        }
        (r = A(
          t,
          (e += o),
          n =>
            function(r, i) {
              if ('function' == typeof i[0]) {
                const t = g(
                  e,
                  i[0],
                  {
                    isPeriodic: 'Interval' === o,
                    delay:
                      'Timeout' === o || 'Interval' === o ? i[1] || 0 : void 0,
                    args: i
                  },
                  a,
                  c
                );
                if (!t) return t;
                const n = t.data.handleId;
                return (
                  'number' == typeof n ? (s[n] = t) : n && (n[_t] = t),
                  n &&
                    n.ref &&
                    n.unref &&
                    'function' == typeof n.ref &&
                    'function' == typeof n.unref &&
                    ((t.ref = n.ref.bind(n)), (t.unref = n.unref.bind(n))),
                  'number' == typeof n || n ? n : t
                );
              }
              return n.apply(t, i);
            }
        )),
          (i = A(
            t,
            n,
            e =>
              function(n, o) {
                const r = o[0];
                let i;
                'number' == typeof r ? (i = s[r]) : (i = r && r[_t]) || (i = r),
                  i && 'string' == typeof i.type
                    ? 'notScheduled' !== i.state &&
                      ((i.cancelFn && i.data.isPeriodic) || 0 === i.runCount) &&
                      ('number' == typeof r ? delete s[r] : r && (r[_t] = null),
                      i.zone.cancelTask(i))
                    : e.apply(t, o);
              }
          ));
      }
      function kt(t, e) {
        if (Zone[e.symbol('patchEventTarget')]) return;
        const {
          eventNames: n,
          zoneSymbolEventNames: o,
          TRUE_STR: r,
          FALSE_STR: i,
          ZONE_SYMBOL_PREFIX: s
        } = e.getGlobalObjects();
        for (let c = 0; c < n.length; c++) {
          const t = n[c],
            e = s + (t + i),
            a = s + (t + r);
          (o[t] = {}), (o[t][i] = e), (o[t][r] = a);
        }
        const a = t.EventTarget;
        return a && a.prototype
          ? (e.patchEventTarget(t, [a && a.prototype]), !0)
          : void 0;
      }
      Zone.__load_patch('legacy', t => {
        const e = t[Zone.__symbol__('legacyPatch')];
        e && e();
      }),
        Zone.__load_patch('timers', t => {
          Tt(t, 'set', 'clear', 'Timeout'),
            Tt(t, 'set', 'clear', 'Interval'),
            Tt(t, 'set', 'clear', 'Immediate');
        }),
        Zone.__load_patch('requestAnimationFrame', t => {
          Tt(t, 'request', 'cancel', 'AnimationFrame'),
            Tt(t, 'mozRequest', 'mozCancel', 'AnimationFrame'),
            Tt(t, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
        }),
        Zone.__load_patch('blocking', (t, e) => {
          const n = ['alert', 'prompt', 'confirm'];
          for (let o = 0; o < n.length; o++)
            A(
              t,
              n[o],
              (n, o, r) =>
                function(o, i) {
                  return e.current.run(n, t, i, r);
                }
            );
        }),
        Zone.__load_patch('EventTarget', (t, e, n) => {
          !(function(t, e) {
            e.patchEventPrototype(t, e);
          })(t, n),
            kt(t, n);
          const o = t.XMLHttpRequestEventTarget;
          o && o.prototype && n.patchEventTarget(t, [o.prototype]),
            j('MutationObserver'),
            j('WebKitMutationObserver'),
            j('IntersectionObserver'),
            j('FileReader');
        }),
        Zone.__load_patch('on_property', (t, e, n) => {
          yt(n, t),
            (Object.defineProperty = function(t, e, n) {
              if (ot(t, e))
                throw new TypeError(
                  "Cannot assign to read only property '" + e + "' of " + t
                );
              const o = n.configurable;
              return 'prototype' !== e && (n = rt(t, e, n)), it(t, e, n, o);
            }),
            (Object.defineProperties = function(t, e) {
              return (
                Object.keys(e).forEach(function(n) {
                  Object.defineProperty(t, n, e[n]);
                }),
                t
              );
            }),
            (Object.create = function(t, e) {
              return (
                'object' != typeof e ||
                  Object.isFrozen(e) ||
                  Object.keys(e).forEach(function(n) {
                    e[n] = rt(t, n, e[n]);
                  }),
                tt(t, e)
              );
            }),
            (Object.getOwnPropertyDescriptor = function(t, e) {
              const n = Q(t, e);
              return n && ot(t, e) && (n.configurable = !1), n;
            });
        }),
        Zone.__load_patch('customElements', (t, e, n) => {
          !(function(t, e) {
            const { isBrowser: n, isMix: o } = e.getGlobalObjects();
            (n || o) &&
              t.customElements &&
              'customElements' in t &&
              e.patchCallbacks(
                e,
                t.customElements,
                'customElements',
                'define',
                [
                  'connectedCallback',
                  'disconnectedCallback',
                  'adoptedCallback',
                  'attributeChangedCallback'
                ]
              );
          })(t, n);
        }),
        Zone.__load_patch('XHR', (t, e) => {
          !(function(c) {
            const h = t.XMLHttpRequest;
            if (!h) return;
            const p = h.prototype;
            let f = p[l],
              d = p[u];
            if (!f) {
              const e = t.XMLHttpRequestEventTarget;
              if (e) {
                const t = e.prototype;
                (f = t[l]), (d = t[u]);
              }
            }
            const v = 'readystatechange',
              y = 'scheduled';
            function _(t) {
              const e = t.data,
                o = e.target;
              (o[i] = !1), (o[a] = !1);
              const s = o[r];
              f || ((f = o[l]), (d = o[u])), s && d.call(o, v, s);
              const c = (o[r] = () => {
                if (o.readyState === o.DONE)
                  if (!e.aborted && o[i] && t.state === y) {
                    const n = o.__zone_symbol__loadfalse;
                    if (n && n.length > 0) {
                      const r = t.invoke;
                      (t.invoke = function() {
                        const n = o.__zone_symbol__loadfalse;
                        for (let e = 0; e < n.length; e++)
                          n[e] === t && n.splice(e, 1);
                        e.aborted || t.state !== y || r.call(t);
                      }),
                        n.push(t);
                    } else t.invoke();
                  } else e.aborted || !1 !== o[i] || (o[a] = !0);
              });
              return (
                f.call(o, v, c),
                o[n] || (o[n] = t),
                S.apply(o, e.args),
                (o[i] = !0),
                t
              );
            }
            function T() {}
            function k(t) {
              const e = t.data;
              return (e.aborted = !0), D.apply(e.target, e.args);
            }
            const b = A(
                p,
                'open',
                () =>
                  function(t, e) {
                    return (t[o] = 0 == e[2]), (t[s] = e[1]), b.apply(t, e);
                  }
              ),
              E = m('fetchTaskAborting'),
              w = m('fetchTaskScheduling'),
              S = A(
                p,
                'send',
                () =>
                  function(t, n) {
                    if (!0 === e.current[w]) return S.apply(t, n);
                    if (t[o]) return S.apply(t, n);
                    {
                      const e = {
                          target: t,
                          url: t[s],
                          isPeriodic: !1,
                          args: n,
                          aborted: !1
                        },
                        o = g('XMLHttpRequest.send', T, e, _, k);
                      t &&
                        !0 === t[a] &&
                        !e.aborted &&
                        o.state === y &&
                        o.invoke();
                    }
                  }
              ),
              D = A(
                p,
                'abort',
                () =>
                  function(t, o) {
                    const r = t[n];
                    if (r && 'string' == typeof r.type) {
                      if (null == r.cancelFn || (r.data && r.data.aborted))
                        return;
                      r.zone.cancelTask(r);
                    } else if (!0 === e.current[E]) return D.apply(t, o);
                  }
              );
          })();
          const n = m('xhrTask'),
            o = m('xhrSync'),
            r = m('xhrListener'),
            i = m('xhrScheduled'),
            s = m('xhrURL'),
            a = m('xhrErrorBeforeScheduled');
        }),
        Zone.__load_patch('geolocation', t => {
          t.navigator &&
            t.navigator.geolocation &&
            (function(t, e) {
              const o = t.constructor.name;
              for (let r = 0; r < e.length; r++) {
                const i = e[r],
                  s = t[i];
                if (s) {
                  if (!E(n(t, i))) continue;
                  t[i] = (t => {
                    const e = function() {
                      return t.apply(this, b(arguments, o + '.' + i));
                    };
                    return M(e, t), e;
                  })(s);
                }
              }
            })(t.navigator.geolocation, [
              'getCurrentPosition',
              'watchPosition'
            ]);
        }),
        Zone.__load_patch('PromiseRejectionEvent', (t, e) => {
          function n(e) {
            return function(n) {
              V(t, e).forEach(o => {
                const r = t.PromiseRejectionEvent;
                if (r) {
                  const t = new r(e, {
                    promise: n.promise,
                    reason: n.rejection
                  });
                  o.invoke(t);
                }
              });
            };
          }
          t.PromiseRejectionEvent &&
            ((e[m('unhandledPromiseRejectionHandler')] = n(
              'unhandledrejection'
            )),
            (e[m('rejectionHandledHandler')] = n('rejectionhandled')));
        });
    }
  },
  [[1, 1]]
]);
