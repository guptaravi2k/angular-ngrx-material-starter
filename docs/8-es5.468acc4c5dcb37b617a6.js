(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '02iP': function(l, n, e) {
      'use strict';
      e.r(n);
      var a = e('LoAr'),
        o = (function() {
          return function() {};
        })(),
        t = e('pLqg'),
        u = e('tjWy'),
        i = e('7tlY'),
        b = e('UUMc'),
        c = e('C9Ky'),
        r = e('QH8h'),
        s = e('LYzL'),
        d = e('zZcu'),
        m = e('3xHB'),
        g = e('IfiR'),
        C = e('euho'),
        f = e('SECt'),
        h = e('eXL1'),
        p = e('IvSS'),
        A = e('WV+C'),
        _ = e('0xYh'),
        v = e('C7Lb'),
        k = e('SeAg'),
        y = e('Z5FQ'),
        w = e('WT9V'),
        E = e('Hc9t'),
        x = e('rXXt'),
        H = e('iwai'),
        L = e('FOLC'),
        I = e('QsvA'),
        P = e('Ho7M'),
        T = e('rW4h'),
        M = e('CRa1'),
        S = e('GovN'),
        j = e('pKmL'),
        F = e('BnVf'),
        O = e('EMFo'),
        N = (function() {
          function l(l) {
            (this.store = l),
              (this.routeAnimationsElements = j.d),
              (this.themes = [
                { value: 'DEFAULT-THEME', label: 'blue' },
                { value: 'LIGHT-THEME', label: 'light' },
                { value: 'NATURE-THEME', label: 'nature' },
                { value: 'BLACK-THEME', label: 'dark' }
              ]),
              (this.languages = [
                { value: 'en', label: 'en' },
                { value: 'de', label: 'de' },
                { value: 'sk', label: 'sk' },
                { value: 'fr', label: 'fr' },
                { value: 'es', label: 'es' },
                { value: 'pt-br', label: 'pt-br' },
                { value: 'zh-cn', label: 'zh-cn' },
                { value: 'he', label: 'he' }
              ]);
          }
          return (
            (l.prototype.ngOnInit = function() {
              this.settings$ = this.store.pipe(Object(S.C)(O.d));
            }),
            (l.prototype.onLanguageSelect = function(l) {
              var n = l.value;
              this.store.dispatch(Object(F.f)({ language: n }));
            }),
            (l.prototype.onThemeSelect = function(l) {
              var n = l.value;
              this.store.dispatch(Object(F.h)({ theme: n }));
            }),
            (l.prototype.onAutoNightModeToggle = function(l) {
              var n = l.checked;
              this.store.dispatch(Object(F.d)({ autoNightMode: n }));
            }),
            (l.prototype.onStickyHeaderToggle = function(l) {
              var n = l.checked;
              this.store.dispatch(Object(F.g)({ stickyHeader: n }));
            }),
            (l.prototype.onPageAnimationsToggle = function(l) {
              var n = l.checked;
              this.store.dispatch(Object(F.b)({ pageAnimations: n }));
            }),
            (l.prototype.onElementsAnimationsToggle = function(l) {
              var n = l.checked;
              this.store.dispatch(Object(F.a)({ elementsAnimations: n }));
            }),
            l
          );
        })(),
        G = a.qb({
          encapsulation: 0,
          styles: [
            [
              '.container[_ngcontent-%COMP%]{margin-top:20px}h1[_ngcontent-%COMP%]{margin:0 0 20px;text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px;text-transform:uppercase}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px 6px 0;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}'
            ]
          ],
          data: {}
        });
      function K(l) {
        return a.Lb(
          0,
          [
            (l()(),
            a.sb(
              0,
              0,
              null,
              null,
              3,
              'mat-option',
              [['class', 'mat-option'], ['role', 'option']],
              [
                [1, 'tabindex', 0],
                [2, 'mat-selected', null],
                [2, 'mat-option-multiple', null],
                [2, 'mat-active', null],
                [8, 'id', 0],
                [1, 'aria-selected', 0],
                [1, 'aria-disabled', 0],
                [2, 'mat-option-disabled', null]
              ],
              [[null, 'click'], [null, 'keydown']],
              function(l, n, e) {
                var o = !0;
                return (
                  'click' === n &&
                    (o = !1 !== a.Cb(l, 1)._selectViaInteraction() && o),
                  'keydown' === n &&
                    (o = !1 !== a.Cb(l, 1)._handleKeydown(e) && o),
                  o
                );
              },
              r.c,
              r.a
            )),
            a.rb(
              1,
              8568832,
              [[10, 4]],
              0,
              s.p,
              [a.k, a.h, [2, s.j], [2, s.o]],
              { value: [0, 'value'] },
              null
            ),
            (l()(), a.Jb(2, 0, [' ', ' '])),
            a.Eb(131072, d.i, [d.j, a.h])
          ],
          function(l, n) {
            l(n, 1, 0, n.context.$implicit.value);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              a.Cb(n, 1)._getTabIndex(),
              a.Cb(n, 1).selected,
              a.Cb(n, 1).multiple,
              a.Cb(n, 1).active,
              a.Cb(n, 1).id,
              a.Cb(n, 1)._getAriaSelected(),
              a.Cb(n, 1).disabled.toString(),
              a.Cb(n, 1).disabled
            ),
              l(
                n,
                2,
                0,
                a.Kb(
                  n,
                  2,
                  0,
                  a
                    .Cb(n, 3)
                    .transform(
                      'anms.settings.general.language.' +
                        n.context.$implicit.label
                    )
                )
              );
          }
        );
      }
      function q(l) {
        return a.Lb(
          0,
          [
            (l()(),
            a.sb(
              0,
              0,
              null,
              null,
              3,
              'mat-option',
              [['class', 'mat-option'], ['role', 'option']],
              [
                [1, 'tabindex', 0],
                [2, 'mat-selected', null],
                [2, 'mat-option-multiple', null],
                [2, 'mat-active', null],
                [8, 'id', 0],
                [1, 'aria-selected', 0],
                [1, 'aria-disabled', 0],
                [2, 'mat-option-disabled', null]
              ],
              [[null, 'click'], [null, 'keydown']],
              function(l, n, e) {
                var o = !0;
                return (
                  'click' === n &&
                    (o = !1 !== a.Cb(l, 1)._selectViaInteraction() && o),
                  'keydown' === n &&
                    (o = !1 !== a.Cb(l, 1)._handleKeydown(e) && o),
                  o
                );
              },
              r.c,
              r.a
            )),
            a.rb(
              1,
              8568832,
              [[22, 4]],
              0,
              s.p,
              [a.k, a.h, [2, s.j], [2, s.o]],
              { value: [0, 'value'] },
              null
            ),
            (l()(), a.Jb(2, 0, [' ', ' '])),
            a.Eb(131072, d.i, [d.j, a.h])
          ],
          function(l, n) {
            l(n, 1, 0, n.context.$implicit.value);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              a.Cb(n, 1)._getTabIndex(),
              a.Cb(n, 1).selected,
              a.Cb(n, 1).multiple,
              a.Cb(n, 1).active,
              a.Cb(n, 1).id,
              a.Cb(n, 1)._getAriaSelected(),
              a.Cb(n, 1).disabled.toString(),
              a.Cb(n, 1).disabled
            ),
              l(
                n,
                2,
                0,
                a.Kb(
                  n,
                  2,
                  0,
                  a
                    .Cb(n, 3)
                    .transform(
                      'anms.settings.themes.' + n.context.$implicit.label
                    )
                )
              );
          }
        );
      }
      function z(l) {
        return a.Lb(
          0,
          [
            (l()(),
            a.sb(
              0,
              16777216,
              null,
              null,
              3,
              'mat-slide-toggle',
              [
                ['class', 'mat-slide-toggle'],
                ['disabled', ''],
                [
                  'matTooltip',
                  'Sorry, this feature is disabled in IE, EDGE and Safari'
                ],
                ['matTooltipPosition', 'before']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [
                [null, 'longpress'],
                [null, 'keydown'],
                [null, 'touchend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var o = !0;
                return (
                  'longpress' === n && (o = !1 !== a.Cb(l, 2).show() && o),
                  'keydown' === n &&
                    (o = !1 !== a.Cb(l, 2)._handleKeydown(e) && o),
                  'touchend' === n &&
                    (o = !1 !== a.Cb(l, 2)._handleTouchend() && o),
                  'focus' === n &&
                    (o =
                      !1 !== a.Cb(l, 3)._inputElement.nativeElement.focus() &&
                      o),
                  o
                );
              },
              m.b,
              m.a
            )),
            a.Gb(
              5120,
              null,
              g.l,
              function(l) {
                return [l];
              },
              [C.b]
            ),
            a.rb(
              2,
              212992,
              null,
              0,
              f.d,
              [
                h.c,
                a.k,
                p.b,
                a.Q,
                a.A,
                A.a,
                _.c,
                _.h,
                f.b,
                [2, v.b],
                [2, f.a],
                [2, k.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            a.rb(
              3,
              1228800,
              null,
              0,
              C.b,
              [a.k, _.h, a.h, [8, null], a.A, C.a, [2, y.a], [2, v.b]],
              { disabled: [0, 'disabled'] },
              null
            ),
            (l()(), a.hb(0, null, null, 0))
          ],
          function(l, n) {
            l(
              n,
              2,
              0,
              'before',
              'Sorry, this feature is disabled in IE, EDGE and Safari'
            ),
              l(n, 3, 0, '');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              a.Cb(n, 3).id,
              a.Cb(n, 3).disabled ? null : -1,
              a.Cb(n, 3).checked,
              a.Cb(n, 3).disabled,
              'before' == a.Cb(n, 3).labelPosition,
              'NoopAnimations' === a.Cb(n, 3)._animationMode
            );
          }
        );
      }
      function J(l) {
        return a.Lb(
          0,
          [
            (l()(),
            a.sb(
              0,
              0,
              null,
              null,
              2,
              'mat-slide-toggle',
              [['class', 'mat-slide-toggle']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'change'], [null, 'focus']],
              function(l, n, e) {
                var o = !0,
                  t = l.component;
                return (
                  'focus' === n &&
                    (o =
                      !1 !== a.Cb(l, 2)._inputElement.nativeElement.focus() &&
                      o),
                  'change' === n &&
                    (o = !1 !== t.onPageAnimationsToggle(e) && o),
                  o
                );
              },
              m.b,
              m.a
            )),
            a.Gb(
              5120,
              null,
              g.l,
              function(l) {
                return [l];
              },
              [C.b]
            ),
            a.rb(
              2,
              1228800,
              null,
              0,
              C.b,
              [a.k, _.h, a.h, [8, null], a.A, C.a, [2, y.a], [2, v.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            )
          ],
          function(l, n) {
            l(n, 2, 0, n.parent.context.ngIf.pageAnimations);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              a.Cb(n, 2).id,
              a.Cb(n, 2).disabled ? null : -1,
              a.Cb(n, 2).checked,
              a.Cb(n, 2).disabled,
              'before' == a.Cb(n, 2).labelPosition,
              'NoopAnimations' === a.Cb(n, 2)._animationMode
            );
          }
        );
      }
      function D(l) {
        return a.Lb(
          0,
          [
            (l()(),
            a.sb(
              0,
              0,
              null,
              null,
              129,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              1,
              0,
              null,
              null,
              47,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              2,
              0,
              null,
              null,
              46,
              'div',
              [['class', 'col-md-6 group']],
              null,
              null,
              null,
              null,
              null
            )),
            a.Gb(512, null, w.y, w.z, [a.t, a.u, a.k, a.F]),
            a.rb(
              4,
              278528,
              null,
              0,
              w.i,
              [w.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            a.sb(5, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), a.Jb(6, null, ['', ''])),
            a.Eb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.sb(
              8,
              0,
              null,
              null,
              28,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              9,
              0,
              null,
              null,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              E.b,
              E.a
            )),
            a.rb(
              10,
              9158656,
              null,
              0,
              x.b,
              [a.k, x.d, [8, null], [2, x.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.sb(
              11,
              0,
              null,
              0,
              1,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['color', 'accent'],
                ['icon', 'language']
              ],
              [[8, 'innerHTML', 1]],
              null,
              null,
              H.b,
              H.a
            )),
            a.rb(
              12,
              573440,
              null,
              0,
              L.a,
              [k.b, L.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.sb(
              13,
              0,
              null,
              null,
              23,
              'mat-form-field',
              [['class', 'mat-form-field']],
              [
                [2, 'mat-form-field-appearance-standard', null],
                [2, 'mat-form-field-appearance-fill', null],
                [2, 'mat-form-field-appearance-outline', null],
                [2, 'mat-form-field-appearance-legacy', null],
                [2, 'mat-form-field-invalid', null],
                [2, 'mat-form-field-can-float', null],
                [2, 'mat-form-field-should-float', null],
                [2, 'mat-form-field-has-label', null],
                [2, 'mat-form-field-hide-placeholder', null],
                [2, 'mat-form-field-disabled', null],
                [2, 'mat-form-field-autofilled', null],
                [2, 'mat-focused', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, '_mat-animation-noopable', null]
              ],
              null,
              null,
              I.b,
              I.a
            )),
            a.rb(
              14,
              7520256,
              null,
              9,
              P.c,
              [a.k, a.h, [2, s.h], [2, v.b], [2, P.a], A.a, a.A, [2, y.a]],
              null,
              null
            ),
            a.Hb(603979776, 1, { _controlNonStatic: 0 }),
            a.Hb(335544320, 2, { _controlStatic: 0 }),
            a.Hb(603979776, 3, { _labelChildNonStatic: 0 }),
            a.Hb(335544320, 4, { _labelChildStatic: 0 }),
            a.Hb(603979776, 5, { _placeholderChild: 0 }),
            a.Hb(603979776, 6, { _errorChildren: 1 }),
            a.Hb(603979776, 7, { _hintChildren: 1 }),
            a.Hb(603979776, 8, { _prefixChildren: 1 }),
            a.Hb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            a.sb(
              24,
              0,
              null,
              1,
              12,
              'mat-select',
              [
                ['class', 'mat-select'],
                ['name', 'language'],
                ['role', 'listbox']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [1, 'id', 0],
                [1, 'tabindex', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-required', 0],
                [1, 'aria-disabled', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-owns', 0],
                [1, 'aria-multiselectable', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-activedescendant', 0],
                [2, 'mat-select-disabled', null],
                [2, 'mat-select-invalid', null],
                [2, 'mat-select-required', null],
                [2, 'mat-select-empty', null]
              ],
              [
                [null, 'selectionChange'],
                [null, 'keydown'],
                [null, 'focus'],
                [null, 'blur']
              ],
              function(l, n, e) {
                var o = !0,
                  t = l.component;
                return (
                  'keydown' === n &&
                    (o = !1 !== a.Cb(l, 29)._handleKeydown(e) && o),
                  'focus' === n && (o = !1 !== a.Cb(l, 29)._onFocus() && o),
                  'blur' === n && (o = !1 !== a.Cb(l, 29)._onBlur() && o),
                  'selectionChange' === n &&
                    (o = !1 !== t.onLanguageSelect(e) && o),
                  o
                );
              },
              T.b,
              T.a
            )),
            a.Gb(6144, null, s.j, null, [M.c]),
            a.rb(
              26,
              671744,
              null,
              0,
              g.q,
              [[8, null], [8, null], [8, null], [8, null]],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            a.Gb(2048, null, g.m, null, [g.q]),
            a.rb(28, 16384, null, 0, g.n, [[4, g.m]], null, null),
            a.rb(
              29,
              2080768,
              null,
              3,
              M.c,
              [
                p.e,
                a.h,
                a.A,
                s.b,
                a.k,
                [2, v.b],
                [2, g.p],
                [2, g.g],
                [2, P.c],
                [6, g.m],
                [8, null],
                M.a,
                _.j
              ],
              { placeholder: [0, 'placeholder'] },
              { selectionChange: 'selectionChange' }
            ),
            a.Hb(603979776, 10, { options: 1 }),
            a.Hb(603979776, 11, { optionGroups: 1 }),
            a.Hb(603979776, 12, { customTrigger: 0 }),
            a.Eb(131072, d.i, [d.j, a.h]),
            a.Gb(2048, [[1, 4], [2, 4]], P.d, null, [M.c]),
            (l()(), a.hb(16777216, null, 1, 1, null, K)),
            a.rb(
              36,
              278528,
              null,
              0,
              w.j,
              [a.Q, a.N, a.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            a.sb(
              37,
              0,
              null,
              null,
              11,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              38,
              0,
              null,
              null,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              E.b,
              E.a
            )),
            a.rb(
              39,
              9158656,
              null,
              0,
              x.b,
              [a.k, x.d, [8, null], [2, x.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.sb(
              40,
              0,
              null,
              0,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['color', 'accent'], ['icon', 'bars']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              H.b,
              H.a
            )),
            a.rb(
              41,
              573440,
              null,
              0,
              L.a,
              [k.b, L.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.sb(
              42,
              0,
              null,
              null,
              3,
              'mat-placeholder',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            a.rb(43, 16384, null, 0, P.g, [], null, null),
            (l()(), a.Jb(44, null, ['', ' '])),
            a.Eb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.sb(
              46,
              0,
              null,
              null,
              2,
              'mat-slide-toggle',
              [['class', 'mat-slide-toggle']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'change'], [null, 'focus']],
              function(l, n, e) {
                var o = !0,
                  t = l.component;
                return (
                  'focus' === n &&
                    (o =
                      !1 !== a.Cb(l, 48)._inputElement.nativeElement.focus() &&
                      o),
                  'change' === n && (o = !1 !== t.onStickyHeaderToggle(e) && o),
                  o
                );
              },
              m.b,
              m.a
            )),
            a.Gb(
              5120,
              null,
              g.l,
              function(l) {
                return [l];
              },
              [C.b]
            ),
            a.rb(
              48,
              1228800,
              null,
              0,
              C.b,
              [a.k, _.h, a.h, [8, null], a.A, C.a, [2, y.a], [2, v.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            ),
            (l()(),
            a.sb(
              49,
              0,
              null,
              null,
              80,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              50,
              0,
              null,
              null,
              46,
              'div',
              [['class', 'col-md-6 group']],
              null,
              null,
              null,
              null,
              null
            )),
            a.Gb(512, null, w.y, w.z, [a.t, a.u, a.k, a.F]),
            a.rb(
              52,
              278528,
              null,
              0,
              w.i,
              [w.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            a.sb(53, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), a.Jb(54, null, ['', ''])),
            a.Eb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.sb(
              56,
              0,
              null,
              null,
              28,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              57,
              0,
              null,
              null,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              E.b,
              E.a
            )),
            a.rb(
              58,
              9158656,
              null,
              0,
              x.b,
              [a.k, x.d, [8, null], [2, x.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.sb(
              59,
              0,
              null,
              0,
              1,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['color', 'accent'],
                ['icon', 'paint-brush']
              ],
              [[8, 'innerHTML', 1]],
              null,
              null,
              H.b,
              H.a
            )),
            a.rb(
              60,
              573440,
              null,
              0,
              L.a,
              [k.b, L.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.sb(
              61,
              0,
              null,
              null,
              23,
              'mat-form-field',
              [['class', 'mat-form-field']],
              [
                [2, 'mat-form-field-appearance-standard', null],
                [2, 'mat-form-field-appearance-fill', null],
                [2, 'mat-form-field-appearance-outline', null],
                [2, 'mat-form-field-appearance-legacy', null],
                [2, 'mat-form-field-invalid', null],
                [2, 'mat-form-field-can-float', null],
                [2, 'mat-form-field-should-float', null],
                [2, 'mat-form-field-has-label', null],
                [2, 'mat-form-field-hide-placeholder', null],
                [2, 'mat-form-field-disabled', null],
                [2, 'mat-form-field-autofilled', null],
                [2, 'mat-focused', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, '_mat-animation-noopable', null]
              ],
              null,
              null,
              I.b,
              I.a
            )),
            a.rb(
              62,
              7520256,
              null,
              9,
              P.c,
              [a.k, a.h, [2, s.h], [2, v.b], [2, P.a], A.a, a.A, [2, y.a]],
              null,
              null
            ),
            a.Hb(603979776, 13, { _controlNonStatic: 0 }),
            a.Hb(335544320, 14, { _controlStatic: 0 }),
            a.Hb(603979776, 15, { _labelChildNonStatic: 0 }),
            a.Hb(335544320, 16, { _labelChildStatic: 0 }),
            a.Hb(603979776, 17, { _placeholderChild: 0 }),
            a.Hb(603979776, 18, { _errorChildren: 1 }),
            a.Hb(603979776, 19, { _hintChildren: 1 }),
            a.Hb(603979776, 20, { _prefixChildren: 1 }),
            a.Hb(603979776, 21, { _suffixChildren: 1 }),
            (l()(),
            a.sb(
              72,
              0,
              null,
              1,
              12,
              'mat-select',
              [
                ['class', 'mat-select'],
                ['name', 'themes'],
                ['role', 'listbox']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [1, 'id', 0],
                [1, 'tabindex', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-required', 0],
                [1, 'aria-disabled', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-owns', 0],
                [1, 'aria-multiselectable', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-activedescendant', 0],
                [2, 'mat-select-disabled', null],
                [2, 'mat-select-invalid', null],
                [2, 'mat-select-required', null],
                [2, 'mat-select-empty', null]
              ],
              [
                [null, 'selectionChange'],
                [null, 'keydown'],
                [null, 'focus'],
                [null, 'blur']
              ],
              function(l, n, e) {
                var o = !0,
                  t = l.component;
                return (
                  'keydown' === n &&
                    (o = !1 !== a.Cb(l, 77)._handleKeydown(e) && o),
                  'focus' === n && (o = !1 !== a.Cb(l, 77)._onFocus() && o),
                  'blur' === n && (o = !1 !== a.Cb(l, 77)._onBlur() && o),
                  'selectionChange' === n &&
                    (o = !1 !== t.onThemeSelect(e) && o),
                  o
                );
              },
              T.b,
              T.a
            )),
            a.Gb(6144, null, s.j, null, [M.c]),
            a.rb(
              74,
              671744,
              null,
              0,
              g.q,
              [[8, null], [8, null], [8, null], [8, null]],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            a.Gb(2048, null, g.m, null, [g.q]),
            a.rb(76, 16384, null, 0, g.n, [[4, g.m]], null, null),
            a.rb(
              77,
              2080768,
              null,
              3,
              M.c,
              [
                p.e,
                a.h,
                a.A,
                s.b,
                a.k,
                [2, v.b],
                [2, g.p],
                [2, g.g],
                [2, P.c],
                [6, g.m],
                [8, null],
                M.a,
                _.j
              ],
              { placeholder: [0, 'placeholder'] },
              { selectionChange: 'selectionChange' }
            ),
            a.Hb(603979776, 22, { options: 1 }),
            a.Hb(603979776, 23, { optionGroups: 1 }),
            a.Hb(603979776, 24, { customTrigger: 0 }),
            a.Eb(131072, d.i, [d.j, a.h]),
            a.Gb(2048, [[13, 4], [14, 4]], P.d, null, [M.c]),
            (l()(), a.hb(16777216, null, 1, 1, null, q)),
            a.rb(
              84,
              278528,
              null,
              0,
              w.j,
              [a.Q, a.N, a.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            a.sb(
              85,
              0,
              null,
              null,
              11,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              86,
              0,
              null,
              null,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              E.b,
              E.a
            )),
            a.rb(
              87,
              9158656,
              null,
              0,
              x.b,
              [a.k, x.d, [8, null], [2, x.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.sb(
              88,
              0,
              null,
              0,
              1,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['color', 'accent'],
                ['icon', 'lightbulb']
              ],
              [[8, 'innerHTML', 1]],
              null,
              null,
              H.b,
              H.a
            )),
            a.rb(
              89,
              573440,
              null,
              0,
              L.a,
              [k.b, L.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.sb(
              90,
              0,
              null,
              null,
              3,
              'mat-placeholder',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            a.rb(91, 16384, null, 0, P.g, [], null, null),
            (l()(), a.Jb(92, null, ['', ' '])),
            a.Eb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.sb(
              94,
              0,
              null,
              null,
              2,
              'mat-slide-toggle',
              [['class', 'mat-slide-toggle']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'change'], [null, 'focus']],
              function(l, n, e) {
                var o = !0,
                  t = l.component;
                return (
                  'focus' === n &&
                    (o =
                      !1 !== a.Cb(l, 96)._inputElement.nativeElement.focus() &&
                      o),
                  'change' === n &&
                    (o = !1 !== t.onAutoNightModeToggle(e) && o),
                  o
                );
              },
              m.b,
              m.a
            )),
            a.Gb(
              5120,
              null,
              g.l,
              function(l) {
                return [l];
              },
              [C.b]
            ),
            a.rb(
              96,
              1228800,
              null,
              0,
              C.b,
              [a.k, _.h, a.h, [8, null], a.A, C.a, [2, y.a], [2, v.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            ),
            (l()(),
            a.sb(
              97,
              0,
              null,
              null,
              32,
              'div',
              [['class', 'col-md-6 group']],
              null,
              null,
              null,
              null,
              null
            )),
            a.Gb(512, null, w.y, w.z, [a.t, a.u, a.k, a.F]),
            a.rb(
              99,
              278528,
              null,
              0,
              w.i,
              [w.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            a.sb(
              100,
              0,
              null,
              null,
              2,
              'h2',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), a.Jb(101, null, ['', ''])),
            a.Eb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.sb(
              103,
              0,
              null,
              null,
              14,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              104,
              0,
              null,
              null,
              5,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              E.b,
              E.a
            )),
            a.rb(
              105,
              9158656,
              null,
              0,
              x.b,
              [a.k, x.d, [8, null], [2, x.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.sb(
              106,
              0,
              null,
              0,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              E.b,
              E.a
            )),
            a.rb(
              107,
              9158656,
              null,
              0,
              x.b,
              [a.k, x.d, [8, null], [2, x.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.sb(
              108,
              0,
              null,
              0,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['icon', 'window-maximize']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              H.b,
              H.a
            )),
            a.rb(
              109,
              573440,
              null,
              0,
              L.a,
              [k.b, L.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.sb(
              110,
              0,
              null,
              null,
              3,
              'mat-placeholder',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            a.rb(111, 16384, null, 0, P.g, [], null, null),
            (l()(), a.Jb(112, null, ['', ' '])),
            a.Eb(131072, d.i, [d.j, a.h]),
            (l()(), a.hb(16777216, null, null, 1, null, z)),
            a.rb(
              115,
              16384,
              null,
              0,
              w.k,
              [a.Q, a.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), a.hb(16777216, null, null, 1, null, J)),
            a.rb(
              117,
              16384,
              null,
              0,
              w.k,
              [a.Q, a.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            a.sb(
              118,
              0,
              null,
              null,
              11,
              'div',
              [['class', 'icon-form-field']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              119,
              0,
              null,
              null,
              3,
              'mat-icon',
              [
                ['class', 'mat-icon notranslate'],
                ['color', 'accent'],
                ['role', 'img']
              ],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              E.b,
              E.a
            )),
            a.rb(
              120,
              9158656,
              null,
              0,
              x.b,
              [a.k, x.d, [8, null], [2, x.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.sb(
              121,
              0,
              null,
              0,
              1,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['color', 'accent'],
                ['icon', 'stream']
              ],
              [[8, 'innerHTML', 1]],
              null,
              null,
              H.b,
              H.a
            )),
            a.rb(
              122,
              573440,
              null,
              0,
              L.a,
              [k.b, L.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.sb(
              123,
              0,
              null,
              null,
              3,
              'mat-placeholder',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            a.rb(124, 16384, null, 0, P.g, [], null, null),
            (l()(), a.Jb(125, null, ['', ' '])),
            a.Eb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.sb(
              127,
              0,
              null,
              null,
              2,
              'mat-slide-toggle',
              [['class', 'mat-slide-toggle']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'change'], [null, 'focus']],
              function(l, n, e) {
                var o = !0,
                  t = l.component;
                return (
                  'focus' === n &&
                    (o =
                      !1 !== a.Cb(l, 129)._inputElement.nativeElement.focus() &&
                      o),
                  'change' === n &&
                    (o = !1 !== t.onElementsAnimationsToggle(e) && o),
                  o
                );
              },
              m.b,
              m.a
            )),
            a.Gb(
              5120,
              null,
              g.l,
              function(l) {
                return [l];
              },
              [C.b]
            ),
            a.rb(
              129,
              1228800,
              null,
              0,
              C.b,
              [a.k, _.h, a.h, [8, null], a.A, C.a, [2, y.a], [2, v.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            )
          ],
          function(l, n) {
            var e = n.component;
            l(n, 4, 0, 'col-md-6 group', e.routeAnimationsElements),
              l(n, 10, 0, 'accent'),
              l(n, 12, 0, 'language'),
              l(n, 26, 0, 'language', n.context.ngIf.language),
              l(
                n,
                29,
                0,
                a.Kb(
                  n,
                  29,
                  0,
                  a.Cb(n, 33).transform('anms.settings.general.placeholder')
                )
              ),
              l(n, 36, 0, e.languages),
              l(n, 39, 0, 'accent'),
              l(n, 41, 0, 'bars'),
              l(n, 48, 0, n.context.ngIf.stickyHeader),
              l(n, 52, 0, 'col-md-6 group', e.routeAnimationsElements),
              l(n, 58, 0, 'accent'),
              l(n, 60, 0, 'paint-brush'),
              l(n, 74, 0, 'themes', n.context.ngIf.theme),
              l(
                n,
                77,
                0,
                a.Kb(
                  n,
                  77,
                  0,
                  a.Cb(n, 81).transform('anms.settings.themes.placeholder')
                )
              ),
              l(n, 84, 0, e.themes),
              l(n, 87, 0, 'accent'),
              l(n, 89, 0, 'lightbulb'),
              l(n, 96, 0, n.context.ngIf.autoNightMode),
              l(n, 99, 0, 'col-md-6 group', e.routeAnimationsElements),
              l(n, 105, 0, 'accent'),
              l(n, 107, 0, 'accent'),
              l(n, 109, 0, 'window-maximize'),
              l(n, 115, 0, n.context.ngIf.pageAnimationsDisabled),
              l(n, 117, 0, !n.context.ngIf.pageAnimationsDisabled),
              l(n, 120, 0, 'accent'),
              l(n, 122, 0, 'stream'),
              l(n, 129, 0, n.context.ngIf.elementsAnimations);
          },
          function(l, n) {
            l(
              n,
              6,
              0,
              a.Kb(n, 6, 0, a.Cb(n, 7).transform('anms.settings.general.title'))
            ),
              l(
                n,
                9,
                0,
                a.Cb(n, 10).inline,
                'primary' !== a.Cb(n, 10).color &&
                  'accent' !== a.Cb(n, 10).color &&
                  'warn' !== a.Cb(n, 10).color
              ),
              l(n, 11, 0, a.Cb(n, 12).renderedIconHTML),
              l(n, 13, 1, [
                'standard' == a.Cb(n, 14).appearance,
                'fill' == a.Cb(n, 14).appearance,
                'outline' == a.Cb(n, 14).appearance,
                'legacy' == a.Cb(n, 14).appearance,
                a.Cb(n, 14)._control.errorState,
                a.Cb(n, 14)._canLabelFloat,
                a.Cb(n, 14)._shouldLabelFloat(),
                a.Cb(n, 14)._hasFloatingLabel(),
                a.Cb(n, 14)._hideControlPlaceholder(),
                a.Cb(n, 14)._control.disabled,
                a.Cb(n, 14)._control.autofilled,
                a.Cb(n, 14)._control.focused,
                'accent' == a.Cb(n, 14).color,
                'warn' == a.Cb(n, 14).color,
                a.Cb(n, 14)._shouldForward('untouched'),
                a.Cb(n, 14)._shouldForward('touched'),
                a.Cb(n, 14)._shouldForward('pristine'),
                a.Cb(n, 14)._shouldForward('dirty'),
                a.Cb(n, 14)._shouldForward('valid'),
                a.Cb(n, 14)._shouldForward('invalid'),
                a.Cb(n, 14)._shouldForward('pending'),
                !a.Cb(n, 14)._animationsEnabled
              ]),
              l(n, 24, 1, [
                a.Cb(n, 28).ngClassUntouched,
                a.Cb(n, 28).ngClassTouched,
                a.Cb(n, 28).ngClassPristine,
                a.Cb(n, 28).ngClassDirty,
                a.Cb(n, 28).ngClassValid,
                a.Cb(n, 28).ngClassInvalid,
                a.Cb(n, 28).ngClassPending,
                a.Cb(n, 29).id,
                a.Cb(n, 29).tabIndex,
                a.Cb(n, 29)._getAriaLabel(),
                a.Cb(n, 29)._getAriaLabelledby(),
                a.Cb(n, 29).required.toString(),
                a.Cb(n, 29).disabled.toString(),
                a.Cb(n, 29).errorState,
                a.Cb(n, 29).panelOpen ? a.Cb(n, 29)._optionIds : null,
                a.Cb(n, 29).multiple,
                a.Cb(n, 29)._ariaDescribedby || null,
                a.Cb(n, 29)._getAriaActiveDescendant(),
                a.Cb(n, 29).disabled,
                a.Cb(n, 29).errorState,
                a.Cb(n, 29).required,
                a.Cb(n, 29).empty
              ]),
              l(
                n,
                38,
                0,
                a.Cb(n, 39).inline,
                'primary' !== a.Cb(n, 39).color &&
                  'accent' !== a.Cb(n, 39).color &&
                  'warn' !== a.Cb(n, 39).color
              ),
              l(n, 40, 0, a.Cb(n, 41).renderedIconHTML),
              l(
                n,
                44,
                0,
                a.Kb(
                  n,
                  44,
                  0,
                  a.Cb(n, 45).transform('anms.settings.themes.sticky-header')
                )
              ),
              l(
                n,
                46,
                0,
                a.Cb(n, 48).id,
                a.Cb(n, 48).disabled ? null : -1,
                a.Cb(n, 48).checked,
                a.Cb(n, 48).disabled,
                'before' == a.Cb(n, 48).labelPosition,
                'NoopAnimations' === a.Cb(n, 48)._animationMode
              ),
              l(
                n,
                54,
                0,
                a.Kb(
                  n,
                  54,
                  0,
                  a.Cb(n, 55).transform('anms.settings.themes.title')
                )
              ),
              l(
                n,
                57,
                0,
                a.Cb(n, 58).inline,
                'primary' !== a.Cb(n, 58).color &&
                  'accent' !== a.Cb(n, 58).color &&
                  'warn' !== a.Cb(n, 58).color
              ),
              l(n, 59, 0, a.Cb(n, 60).renderedIconHTML),
              l(n, 61, 1, [
                'standard' == a.Cb(n, 62).appearance,
                'fill' == a.Cb(n, 62).appearance,
                'outline' == a.Cb(n, 62).appearance,
                'legacy' == a.Cb(n, 62).appearance,
                a.Cb(n, 62)._control.errorState,
                a.Cb(n, 62)._canLabelFloat,
                a.Cb(n, 62)._shouldLabelFloat(),
                a.Cb(n, 62)._hasFloatingLabel(),
                a.Cb(n, 62)._hideControlPlaceholder(),
                a.Cb(n, 62)._control.disabled,
                a.Cb(n, 62)._control.autofilled,
                a.Cb(n, 62)._control.focused,
                'accent' == a.Cb(n, 62).color,
                'warn' == a.Cb(n, 62).color,
                a.Cb(n, 62)._shouldForward('untouched'),
                a.Cb(n, 62)._shouldForward('touched'),
                a.Cb(n, 62)._shouldForward('pristine'),
                a.Cb(n, 62)._shouldForward('dirty'),
                a.Cb(n, 62)._shouldForward('valid'),
                a.Cb(n, 62)._shouldForward('invalid'),
                a.Cb(n, 62)._shouldForward('pending'),
                !a.Cb(n, 62)._animationsEnabled
              ]),
              l(n, 72, 1, [
                a.Cb(n, 76).ngClassUntouched,
                a.Cb(n, 76).ngClassTouched,
                a.Cb(n, 76).ngClassPristine,
                a.Cb(n, 76).ngClassDirty,
                a.Cb(n, 76).ngClassValid,
                a.Cb(n, 76).ngClassInvalid,
                a.Cb(n, 76).ngClassPending,
                a.Cb(n, 77).id,
                a.Cb(n, 77).tabIndex,
                a.Cb(n, 77)._getAriaLabel(),
                a.Cb(n, 77)._getAriaLabelledby(),
                a.Cb(n, 77).required.toString(),
                a.Cb(n, 77).disabled.toString(),
                a.Cb(n, 77).errorState,
                a.Cb(n, 77).panelOpen ? a.Cb(n, 77)._optionIds : null,
                a.Cb(n, 77).multiple,
                a.Cb(n, 77)._ariaDescribedby || null,
                a.Cb(n, 77)._getAriaActiveDescendant(),
                a.Cb(n, 77).disabled,
                a.Cb(n, 77).errorState,
                a.Cb(n, 77).required,
                a.Cb(n, 77).empty
              ]),
              l(
                n,
                86,
                0,
                a.Cb(n, 87).inline,
                'primary' !== a.Cb(n, 87).color &&
                  'accent' !== a.Cb(n, 87).color &&
                  'warn' !== a.Cb(n, 87).color
              ),
              l(n, 88, 0, a.Cb(n, 89).renderedIconHTML),
              l(
                n,
                92,
                0,
                a.Kb(
                  n,
                  92,
                  0,
                  a.Cb(n, 93).transform('anms.settings.themes.night-mode')
                )
              ),
              l(
                n,
                94,
                0,
                a.Cb(n, 96).id,
                a.Cb(n, 96).disabled ? null : -1,
                a.Cb(n, 96).checked,
                a.Cb(n, 96).disabled,
                'before' == a.Cb(n, 96).labelPosition,
                'NoopAnimations' === a.Cb(n, 96)._animationMode
              ),
              l(
                n,
                101,
                0,
                a.Kb(
                  n,
                  101,
                  0,
                  a.Cb(n, 102).transform('anms.settings.animations.title')
                )
              ),
              l(
                n,
                104,
                0,
                a.Cb(n, 105).inline,
                'primary' !== a.Cb(n, 105).color &&
                  'accent' !== a.Cb(n, 105).color &&
                  'warn' !== a.Cb(n, 105).color
              ),
              l(
                n,
                106,
                0,
                a.Cb(n, 107).inline,
                'primary' !== a.Cb(n, 107).color &&
                  'accent' !== a.Cb(n, 107).color &&
                  'warn' !== a.Cb(n, 107).color
              ),
              l(n, 108, 0, a.Cb(n, 109).renderedIconHTML),
              l(
                n,
                112,
                0,
                a.Kb(
                  n,
                  112,
                  0,
                  a.Cb(n, 113).transform('anms.settings.animations.page')
                )
              ),
              l(
                n,
                119,
                0,
                a.Cb(n, 120).inline,
                'primary' !== a.Cb(n, 120).color &&
                  'accent' !== a.Cb(n, 120).color &&
                  'warn' !== a.Cb(n, 120).color
              ),
              l(n, 121, 0, a.Cb(n, 122).renderedIconHTML),
              l(
                n,
                125,
                0,
                a.Kb(
                  n,
                  125,
                  0,
                  a.Cb(n, 126).transform('anms.settings.animations.elements')
                )
              ),
              l(
                n,
                127,
                0,
                a.Cb(n, 129).id,
                a.Cb(n, 129).disabled ? null : -1,
                a.Cb(n, 129).checked,
                a.Cb(n, 129).disabled,
                'before' == a.Cb(n, 129).labelPosition,
                'NoopAnimations' === a.Cb(n, 129)._animationMode
              );
          }
        );
      }
      function Q(l) {
        return a.Lb(
          2,
          [
            (l()(),
            a.sb(
              0,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              1,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(
              2,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'col-sm-12']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            a.sb(3, 0, null, null, 2, 'h1', [], null, null, null, null, null)),
            (l()(), a.Jb(4, null, ['', ''])),
            a.Eb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.sb(6, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(), a.hb(16777216, null, null, 2, null, D)),
            a.rb(
              8,
              16384,
              null,
              0,
              w.k,
              [a.Q, a.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            a.Eb(131072, w.b, [a.h])
          ],
          function(l, n) {
            var e = n.component;
            l(n, 8, 0, a.Kb(n, 8, 0, a.Cb(n, 9).transform(e.settings$)));
          },
          function(l, n) {
            l(
              n,
              4,
              0,
              a.Kb(n, 4, 0, a.Cb(n, 5).transform('anms.settings.title'))
            );
          }
        );
      }
      function V(l) {
        return a.Lb(
          0,
          [
            (l()(),
            a.sb(
              0,
              0,
              null,
              null,
              1,
              'anms-settings',
              [],
              null,
              null,
              null,
              Q,
              G
            )),
            a.rb(1, 114688, null, 0, N, [S.o], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var B = a.ob('anms-settings', N, V, {}, {}, []),
        U = e('y7gG'),
        W = e('5kg2'),
        $ = e('s8WJ'),
        X = e('O0P8'),
        R = e('GcYS'),
        Y = e('/hyk'),
        Z = e('abkR'),
        ll = e('w9fW'),
        nl = e('+3V+'),
        el = e('dgjn'),
        al = e('QIIz'),
        ol = e('a198'),
        tl = e('XIB+'),
        ul = e('V3Ng'),
        il = e('z1EI'),
        bl = e('8xy9'),
        cl = e('e8uv'),
        rl = e('8raB'),
        sl = e('qXP9'),
        dl = e('PCNd'),
        ml = e('981U'),
        gl = { title: 'anms.menu.settings' },
        Cl = (function() {
          return function() {};
        })(),
        fl = e('rh80');
      e.d(n, 'SettingsModuleNgFactory', function() {
        return hl;
      });
      var hl = a.pb(o, [], function(l) {
        return a.zb([
          a.Ab(512, a.j, a.cb, [
            [8, [t.a, u.a, u.b, i.a, b.b, b.a, c.a, B]],
            [3, a.j],
            a.y
          ]),
          a.Ab(4608, w.m, w.l, [a.v, [2, w.D]]),
          a.Ab(4608, g.v, g.v, []),
          a.Ab(4608, h.c, h.c, [
            h.i,
            h.e,
            a.j,
            h.h,
            h.f,
            a.r,
            a.A,
            w.d,
            v.b,
            [2, w.g]
          ]),
          a.Ab(5120, h.j, h.k, [h.c]),
          a.Ab(4608, U.c, U.c, []),
          a.Ab(5120, M.a, M.b, [h.c]),
          a.Ab(4608, s.b, s.b, []),
          a.Ab(5120, W.c, W.j, [h.c]),
          a.Ab(5120, f.b, f.c, [h.c]),
          a.Ab(4608, k.e, s.c, [[2, s.g], [2, s.l]]),
          a.Ab(4608, g.e, g.e, []),
          a.Ab(5120, $.b, $.c, [h.c]),
          a.Ab(135680, $.d, $.d, [
            h.c,
            a.r,
            [2, w.g],
            [2, $.a],
            $.b,
            [3, $.d],
            h.e
          ]),
          a.Ab(4608, X.i, X.i, []),
          a.Ab(5120, X.a, X.b, [h.c]),
          a.Ab(4608, s.a, s.v, [[2, s.f], A.a]),
          a.Ab(1073742336, w.c, w.c, []),
          a.Ab(1073742336, g.u, g.u, []),
          a.Ab(1073742336, g.h, g.h, []),
          a.Ab(1073742336, d.g, d.g, []),
          a.Ab(1073742336, v.a, v.a, []),
          a.Ab(1073742336, s.l, s.l, [[2, s.d], [2, k.f]]),
          a.Ab(1073742336, A.b, A.b, []),
          a.Ab(1073742336, s.u, s.u, []),
          a.Ab(1073742336, R.c, R.c, []),
          a.Ab(1073742336, Y.b, Y.b, []),
          a.Ab(1073742336, Z.g, Z.g, []),
          a.Ab(1073742336, p.c, p.c, []),
          a.Ab(1073742336, h.g, h.g, []),
          a.Ab(1073742336, s.s, s.s, []),
          a.Ab(1073742336, s.q, s.q, []),
          a.Ab(1073742336, U.d, U.d, []),
          a.Ab(1073742336, P.e, P.e, []),
          a.Ab(1073742336, M.d, M.d, []),
          a.Ab(1073742336, _.a, _.a, []),
          a.Ab(1073742336, ll.k, ll.k, []),
          a.Ab(1073742336, nl.c, nl.c, []),
          a.Ab(1073742336, el.c, el.c, []),
          a.Ab(1073742336, al.c, al.c, []),
          a.Ab(1073742336, ol.d, ol.d, []),
          a.Ab(1073742336, tl.f, tl.f, []),
          a.Ab(1073742336, ul.h, ul.h, []),
          a.Ab(1073742336, il.d, il.d, []),
          a.Ab(1073742336, il.c, il.c, []),
          a.Ab(1073742336, s.m, s.m, []),
          a.Ab(1073742336, bl.b, bl.b, []),
          a.Ab(1073742336, cl.c, cl.c, []),
          a.Ab(1073742336, W.i, W.i, []),
          a.Ab(1073742336, W.f, W.f, []),
          a.Ab(1073742336, x.c, x.c, []),
          a.Ab(1073742336, f.e, f.e, []),
          a.Ab(1073742336, rl.e, rl.e, []),
          a.Ab(1073742336, C.c, C.c, []),
          a.Ab(1073742336, L.f, L.f, []),
          a.Ab(1073742336, g.r, g.r, []),
          a.Ab(1073742336, sl.b, sl.b, []),
          a.Ab(1073742336, $.g, $.g, []),
          a.Ab(1073742336, X.j, X.j, []),
          a.Ab(1073742336, s.w, s.w, []),
          a.Ab(1073742336, s.n, s.n, []),
          a.Ab(1073742336, dl.a, dl.a, []),
          a.Ab(1073742336, ml.t, ml.t, [[2, ml.z], [2, ml.p]]),
          a.Ab(1073742336, Cl, Cl, []),
          a.Ab(1073742336, o, o, []),
          a.Ab(256, ol.a, { separatorKeyCodes: [fl.f] }, []),
          a.Ab(256, s.e, s.i, []),
          a.Ab(
            1024,
            ml.n,
            function() {
              return [[{ path: '', component: N, data: gl }]];
            },
            []
          )
        ]);
      });
    }
  }
]);
