(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '02iP': function(l, n, e) {
      'use strict';
      e.r(n);
      var a = e('kZht');
      class o {}
      var u = e('pLqg'),
        t = e('tjWy'),
        i = e('7tlY'),
        b = e('UUMc'),
        c = e('C9Ky'),
        r = e('QH8h'),
        s = e('ApNh'),
        d = e('aDqW'),
        m = e('3xHB'),
        g = e('3kIJ'),
        p = e('P9AZ'),
        A = e('zab8'),
        f = e('D4FV'),
        h = e('tBgR'),
        y = e('4rR8'),
        _ = e('owzC'),
        v = e('pOQZ'),
        k = e('ENSU'),
        C = e('FxgA'),
        q = e('An66'),
        w = e('Hc9t'),
        F = e('a+5/'),
        E = e('iwai'),
        x = e('NxuZ'),
        I = e('QsvA'),
        T = e('qBwE'),
        P = e('rW4h'),
        S = e('5ohT'),
        M = e('ofez'),
        j = e('pKmL'),
        H = e('BnVf'),
        L = e('EMFo');
      class O {
        constructor(l) {
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
        ngOnInit() {
          this.settings$ = this.store.pipe(Object(M.C)(L.d));
        }
        onLanguageSelect({ value: l }) {
          this.store.dispatch(Object(H.f)({ language: l }));
        }
        onThemeSelect({ value: l }) {
          this.store.dispatch(Object(H.h)({ theme: l }));
        }
        onAutoNightModeToggle({ checked: l }) {
          this.store.dispatch(Object(H.d)({ autoNightMode: l }));
        }
        onStickyHeaderToggle({ checked: l }) {
          this.store.dispatch(Object(H.g)({ stickyHeader: l }));
        }
        onPageAnimationsToggle({ checked: l }) {
          this.store.dispatch(Object(H.b)({ pageAnimations: l }));
        }
        onElementsAnimationsToggle({ checked: l }) {
          this.store.dispatch(Object(H.a)({ elementsAnimations: l }));
        }
      }
      var N = a.ob({
        encapsulation: 0,
        styles: [
          [
            '.container[_ngcontent-%COMP%]{margin-top:20px}h1[_ngcontent-%COMP%]{margin:0 0 20px;text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px;text-transform:uppercase}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px 6px 0;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}'
          ]
        ],
        data: {}
      });
      function D(l) {
        return a.Jb(
          0,
          [
            (l()(),
            a.qb(
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
                    (o = !1 !== a.Ab(l, 1)._selectViaInteraction() && o),
                  'keydown' === n &&
                    (o = !1 !== a.Ab(l, 1)._handleKeydown(e) && o),
                  o
                );
              },
              r.c,
              r.a
            )),
            a.pb(
              1,
              8568832,
              [[10, 4]],
              0,
              s.p,
              [a.k, a.h, [2, s.j], [2, s.o]],
              { value: [0, 'value'] },
              null
            ),
            (l()(), a.Hb(2, 0, [' ', ' '])),
            a.Cb(131072, d.i, [d.j, a.h])
          ],
          function(l, n) {
            l(n, 1, 0, n.context.$implicit.value);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              a.Ab(n, 1)._getTabIndex(),
              a.Ab(n, 1).selected,
              a.Ab(n, 1).multiple,
              a.Ab(n, 1).active,
              a.Ab(n, 1).id,
              a.Ab(n, 1)._getAriaSelected(),
              a.Ab(n, 1).disabled.toString(),
              a.Ab(n, 1).disabled
            ),
              l(
                n,
                2,
                0,
                a.Ib(
                  n,
                  2,
                  0,
                  a
                    .Ab(n, 3)
                    .transform(
                      'anms.settings.general.language.' +
                        n.context.$implicit.label
                    )
                )
              );
          }
        );
      }
      function z(l) {
        return a.Jb(
          0,
          [
            (l()(),
            a.qb(
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
                    (o = !1 !== a.Ab(l, 1)._selectViaInteraction() && o),
                  'keydown' === n &&
                    (o = !1 !== a.Ab(l, 1)._handleKeydown(e) && o),
                  o
                );
              },
              r.c,
              r.a
            )),
            a.pb(
              1,
              8568832,
              [[22, 4]],
              0,
              s.p,
              [a.k, a.h, [2, s.j], [2, s.o]],
              { value: [0, 'value'] },
              null
            ),
            (l()(), a.Hb(2, 0, [' ', ' '])),
            a.Cb(131072, d.i, [d.j, a.h])
          ],
          function(l, n) {
            l(n, 1, 0, n.context.$implicit.value);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              a.Ab(n, 1)._getTabIndex(),
              a.Ab(n, 1).selected,
              a.Ab(n, 1).multiple,
              a.Ab(n, 1).active,
              a.Ab(n, 1).id,
              a.Ab(n, 1)._getAriaSelected(),
              a.Ab(n, 1).disabled.toString(),
              a.Ab(n, 1).disabled
            ),
              l(
                n,
                2,
                0,
                a.Ib(
                  n,
                  2,
                  0,
                  a
                    .Ab(n, 3)
                    .transform(
                      'anms.settings.themes.' + n.context.$implicit.label
                    )
                )
              );
          }
        );
      }
      function J(l) {
        return a.Jb(
          0,
          [
            (l()(),
            a.qb(
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
                  'longpress' === n && (o = !1 !== a.Ab(l, 2).show() && o),
                  'keydown' === n &&
                    (o = !1 !== a.Ab(l, 2)._handleKeydown(e) && o),
                  'touchend' === n &&
                    (o = !1 !== a.Ab(l, 2)._handleTouchend() && o),
                  'focus' === n &&
                    (o =
                      !1 !== a.Ab(l, 3)._inputElement.nativeElement.focus() &&
                      o),
                  o
                );
              },
              m.b,
              m.a
            )),
            a.Eb(
              5120,
              null,
              g.l,
              function(l) {
                return [l];
              },
              [p.b]
            ),
            a.pb(
              2,
              212992,
              null,
              0,
              A.d,
              [
                f.c,
                a.k,
                h.b,
                a.O,
                a.y,
                y.a,
                _.c,
                _.h,
                A.b,
                [2, v.b],
                [2, A.a],
                [2, k.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            a.pb(
              3,
              1228800,
              null,
              0,
              p.b,
              [a.k, _.h, a.h, [8, null], a.y, p.a, [2, C.a], [2, v.b]],
              { disabled: [0, 'disabled'] },
              null
            ),
            (l()(), a.fb(0, null, null, 0))
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
              a.Ab(n, 3).id,
              a.Ab(n, 3).disabled ? null : -1,
              a.Ab(n, 3).checked,
              a.Ab(n, 3).disabled,
              'before' == a.Ab(n, 3).labelPosition,
              'NoopAnimations' === a.Ab(n, 3)._animationMode
            );
          }
        );
      }
      function K(l) {
        return a.Jb(
          0,
          [
            (l()(),
            a.qb(
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
                  u = l.component;
                return (
                  'focus' === n &&
                    (o =
                      !1 !== a.Ab(l, 2)._inputElement.nativeElement.focus() &&
                      o),
                  'change' === n &&
                    (o = !1 !== u.onPageAnimationsToggle(e) && o),
                  o
                );
              },
              m.b,
              m.a
            )),
            a.Eb(
              5120,
              null,
              g.l,
              function(l) {
                return [l];
              },
              [p.b]
            ),
            a.pb(
              2,
              1228800,
              null,
              0,
              p.b,
              [a.k, _.h, a.h, [8, null], a.y, p.a, [2, C.a], [2, v.b]],
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
              a.Ab(n, 2).id,
              a.Ab(n, 2).disabled ? null : -1,
              a.Ab(n, 2).checked,
              a.Ab(n, 2).disabled,
              'before' == a.Ab(n, 2).labelPosition,
              'NoopAnimations' === a.Ab(n, 2)._animationMode
            );
          }
        );
      }
      function B(l) {
        return a.Jb(
          0,
          [
            (l()(),
            a.qb(
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
            a.qb(
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
            a.qb(
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
            a.Eb(512, null, q.y, q.z, [a.r, a.s, a.k, a.D]),
            a.pb(
              4,
              278528,
              null,
              0,
              q.i,
              [q.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            a.qb(5, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), a.Hb(6, null, ['', ''])),
            a.Cb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.qb(
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
            a.qb(
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
              w.b,
              w.a
            )),
            a.pb(
              10,
              9158656,
              null,
              0,
              F.b,
              [a.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.qb(
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
              E.b,
              E.a
            )),
            a.pb(
              12,
              573440,
              null,
              0,
              x.a,
              [k.b, x.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.qb(
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
            a.pb(
              14,
              7520256,
              null,
              9,
              T.c,
              [a.k, a.h, [2, s.h], [2, v.b], [2, T.a], y.a, a.y, [2, C.a]],
              null,
              null
            ),
            a.Fb(603979776, 1, { _controlNonStatic: 0 }),
            a.Fb(335544320, 2, { _controlStatic: 0 }),
            a.Fb(603979776, 3, { _labelChildNonStatic: 0 }),
            a.Fb(335544320, 4, { _labelChildStatic: 0 }),
            a.Fb(603979776, 5, { _placeholderChild: 0 }),
            a.Fb(603979776, 6, { _errorChildren: 1 }),
            a.Fb(603979776, 7, { _hintChildren: 1 }),
            a.Fb(603979776, 8, { _prefixChildren: 1 }),
            a.Fb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            a.qb(
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
                  u = l.component;
                return (
                  'keydown' === n &&
                    (o = !1 !== a.Ab(l, 29)._handleKeydown(e) && o),
                  'focus' === n && (o = !1 !== a.Ab(l, 29)._onFocus() && o),
                  'blur' === n && (o = !1 !== a.Ab(l, 29)._onBlur() && o),
                  'selectionChange' === n &&
                    (o = !1 !== u.onLanguageSelect(e) && o),
                  o
                );
              },
              P.b,
              P.a
            )),
            a.Eb(6144, null, s.j, null, [S.c]),
            a.pb(
              26,
              671744,
              null,
              0,
              g.q,
              [[8, null], [8, null], [8, null], [8, null]],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            a.Eb(2048, null, g.m, null, [g.q]),
            a.pb(28, 16384, null, 0, g.n, [[4, g.m]], null, null),
            a.pb(
              29,
              2080768,
              null,
              3,
              S.c,
              [
                h.e,
                a.h,
                a.y,
                s.b,
                a.k,
                [2, v.b],
                [2, g.p],
                [2, g.g],
                [2, T.c],
                [6, g.m],
                [8, null],
                S.a,
                _.j
              ],
              { placeholder: [0, 'placeholder'] },
              { selectionChange: 'selectionChange' }
            ),
            a.Fb(603979776, 10, { options: 1 }),
            a.Fb(603979776, 11, { optionGroups: 1 }),
            a.Fb(603979776, 12, { customTrigger: 0 }),
            a.Cb(131072, d.i, [d.j, a.h]),
            a.Eb(2048, [[1, 4], [2, 4]], T.d, null, [S.c]),
            (l()(), a.fb(16777216, null, 1, 1, null, D)),
            a.pb(
              36,
              278528,
              null,
              0,
              q.j,
              [a.O, a.L, a.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            a.qb(
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
            a.qb(
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
              w.b,
              w.a
            )),
            a.pb(
              39,
              9158656,
              null,
              0,
              F.b,
              [a.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.qb(
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
              E.b,
              E.a
            )),
            a.pb(
              41,
              573440,
              null,
              0,
              x.a,
              [k.b, x.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.qb(
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
            a.pb(43, 16384, null, 0, T.g, [], null, null),
            (l()(), a.Hb(44, null, ['', ' '])),
            a.Cb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.qb(
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
                  u = l.component;
                return (
                  'focus' === n &&
                    (o =
                      !1 !== a.Ab(l, 48)._inputElement.nativeElement.focus() &&
                      o),
                  'change' === n && (o = !1 !== u.onStickyHeaderToggle(e) && o),
                  o
                );
              },
              m.b,
              m.a
            )),
            a.Eb(
              5120,
              null,
              g.l,
              function(l) {
                return [l];
              },
              [p.b]
            ),
            a.pb(
              48,
              1228800,
              null,
              0,
              p.b,
              [a.k, _.h, a.h, [8, null], a.y, p.a, [2, C.a], [2, v.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            ),
            (l()(),
            a.qb(
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
            a.qb(
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
            a.Eb(512, null, q.y, q.z, [a.r, a.s, a.k, a.D]),
            a.pb(
              52,
              278528,
              null,
              0,
              q.i,
              [q.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            a.qb(53, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), a.Hb(54, null, ['', ''])),
            a.Cb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.qb(
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
            a.qb(
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
              w.b,
              w.a
            )),
            a.pb(
              58,
              9158656,
              null,
              0,
              F.b,
              [a.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.qb(
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
              E.b,
              E.a
            )),
            a.pb(
              60,
              573440,
              null,
              0,
              x.a,
              [k.b, x.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.qb(
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
            a.pb(
              62,
              7520256,
              null,
              9,
              T.c,
              [a.k, a.h, [2, s.h], [2, v.b], [2, T.a], y.a, a.y, [2, C.a]],
              null,
              null
            ),
            a.Fb(603979776, 13, { _controlNonStatic: 0 }),
            a.Fb(335544320, 14, { _controlStatic: 0 }),
            a.Fb(603979776, 15, { _labelChildNonStatic: 0 }),
            a.Fb(335544320, 16, { _labelChildStatic: 0 }),
            a.Fb(603979776, 17, { _placeholderChild: 0 }),
            a.Fb(603979776, 18, { _errorChildren: 1 }),
            a.Fb(603979776, 19, { _hintChildren: 1 }),
            a.Fb(603979776, 20, { _prefixChildren: 1 }),
            a.Fb(603979776, 21, { _suffixChildren: 1 }),
            (l()(),
            a.qb(
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
                  u = l.component;
                return (
                  'keydown' === n &&
                    (o = !1 !== a.Ab(l, 77)._handleKeydown(e) && o),
                  'focus' === n && (o = !1 !== a.Ab(l, 77)._onFocus() && o),
                  'blur' === n && (o = !1 !== a.Ab(l, 77)._onBlur() && o),
                  'selectionChange' === n &&
                    (o = !1 !== u.onThemeSelect(e) && o),
                  o
                );
              },
              P.b,
              P.a
            )),
            a.Eb(6144, null, s.j, null, [S.c]),
            a.pb(
              74,
              671744,
              null,
              0,
              g.q,
              [[8, null], [8, null], [8, null], [8, null]],
              { name: [0, 'name'], model: [1, 'model'] },
              null
            ),
            a.Eb(2048, null, g.m, null, [g.q]),
            a.pb(76, 16384, null, 0, g.n, [[4, g.m]], null, null),
            a.pb(
              77,
              2080768,
              null,
              3,
              S.c,
              [
                h.e,
                a.h,
                a.y,
                s.b,
                a.k,
                [2, v.b],
                [2, g.p],
                [2, g.g],
                [2, T.c],
                [6, g.m],
                [8, null],
                S.a,
                _.j
              ],
              { placeholder: [0, 'placeholder'] },
              { selectionChange: 'selectionChange' }
            ),
            a.Fb(603979776, 22, { options: 1 }),
            a.Fb(603979776, 23, { optionGroups: 1 }),
            a.Fb(603979776, 24, { customTrigger: 0 }),
            a.Cb(131072, d.i, [d.j, a.h]),
            a.Eb(2048, [[13, 4], [14, 4]], T.d, null, [S.c]),
            (l()(), a.fb(16777216, null, 1, 1, null, z)),
            a.pb(
              84,
              278528,
              null,
              0,
              q.j,
              [a.O, a.L, a.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            a.qb(
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
            a.qb(
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
              w.b,
              w.a
            )),
            a.pb(
              87,
              9158656,
              null,
              0,
              F.b,
              [a.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.qb(
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
              E.b,
              E.a
            )),
            a.pb(
              89,
              573440,
              null,
              0,
              x.a,
              [k.b, x.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.qb(
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
            a.pb(91, 16384, null, 0, T.g, [], null, null),
            (l()(), a.Hb(92, null, ['', ' '])),
            a.Cb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.qb(
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
                  u = l.component;
                return (
                  'focus' === n &&
                    (o =
                      !1 !== a.Ab(l, 96)._inputElement.nativeElement.focus() &&
                      o),
                  'change' === n &&
                    (o = !1 !== u.onAutoNightModeToggle(e) && o),
                  o
                );
              },
              m.b,
              m.a
            )),
            a.Eb(
              5120,
              null,
              g.l,
              function(l) {
                return [l];
              },
              [p.b]
            ),
            a.pb(
              96,
              1228800,
              null,
              0,
              p.b,
              [a.k, _.h, a.h, [8, null], a.y, p.a, [2, C.a], [2, v.b]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            ),
            (l()(),
            a.qb(
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
            a.Eb(512, null, q.y, q.z, [a.r, a.s, a.k, a.D]),
            a.pb(
              99,
              278528,
              null,
              0,
              q.i,
              [q.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            a.qb(
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
            (l()(), a.Hb(101, null, ['', ''])),
            a.Cb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.qb(
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
            a.qb(
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
              w.b,
              w.a
            )),
            a.pb(
              105,
              9158656,
              null,
              0,
              F.b,
              [a.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.qb(
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
              w.b,
              w.a
            )),
            a.pb(
              107,
              9158656,
              null,
              0,
              F.b,
              [a.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.qb(
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
              E.b,
              E.a
            )),
            a.pb(
              109,
              573440,
              null,
              0,
              x.a,
              [k.b, x.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.qb(
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
            a.pb(111, 16384, null, 0, T.g, [], null, null),
            (l()(), a.Hb(112, null, ['', ' '])),
            a.Cb(131072, d.i, [d.j, a.h]),
            (l()(), a.fb(16777216, null, null, 1, null, J)),
            a.pb(
              115,
              16384,
              null,
              0,
              q.k,
              [a.O, a.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), a.fb(16777216, null, null, 1, null, K)),
            a.pb(
              117,
              16384,
              null,
              0,
              q.k,
              [a.O, a.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            a.qb(
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
            a.qb(
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
              w.b,
              w.a
            )),
            a.pb(
              120,
              9158656,
              null,
              0,
              F.b,
              [a.k, F.d, [8, null], [2, F.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            a.qb(
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
              E.b,
              E.a
            )),
            a.pb(
              122,
              573440,
              null,
              0,
              x.a,
              [k.b, x.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            a.qb(
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
            a.pb(124, 16384, null, 0, T.g, [], null, null),
            (l()(), a.Hb(125, null, ['', ' '])),
            a.Cb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.qb(
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
                  u = l.component;
                return (
                  'focus' === n &&
                    (o =
                      !1 !== a.Ab(l, 129)._inputElement.nativeElement.focus() &&
                      o),
                  'change' === n &&
                    (o = !1 !== u.onElementsAnimationsToggle(e) && o),
                  o
                );
              },
              m.b,
              m.a
            )),
            a.Eb(
              5120,
              null,
              g.l,
              function(l) {
                return [l];
              },
              [p.b]
            ),
            a.pb(
              129,
              1228800,
              null,
              0,
              p.b,
              [a.k, _.h, a.h, [8, null], a.y, p.a, [2, C.a], [2, v.b]],
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
                a.Ib(
                  n,
                  29,
                  0,
                  a.Ab(n, 33).transform('anms.settings.general.placeholder')
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
                a.Ib(
                  n,
                  77,
                  0,
                  a.Ab(n, 81).transform('anms.settings.themes.placeholder')
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
              a.Ib(n, 6, 0, a.Ab(n, 7).transform('anms.settings.general.title'))
            ),
              l(
                n,
                9,
                0,
                a.Ab(n, 10).inline,
                'primary' !== a.Ab(n, 10).color &&
                  'accent' !== a.Ab(n, 10).color &&
                  'warn' !== a.Ab(n, 10).color
              ),
              l(n, 11, 0, a.Ab(n, 12).renderedIconHTML),
              l(n, 13, 1, [
                'standard' == a.Ab(n, 14).appearance,
                'fill' == a.Ab(n, 14).appearance,
                'outline' == a.Ab(n, 14).appearance,
                'legacy' == a.Ab(n, 14).appearance,
                a.Ab(n, 14)._control.errorState,
                a.Ab(n, 14)._canLabelFloat,
                a.Ab(n, 14)._shouldLabelFloat(),
                a.Ab(n, 14)._hasFloatingLabel(),
                a.Ab(n, 14)._hideControlPlaceholder(),
                a.Ab(n, 14)._control.disabled,
                a.Ab(n, 14)._control.autofilled,
                a.Ab(n, 14)._control.focused,
                'accent' == a.Ab(n, 14).color,
                'warn' == a.Ab(n, 14).color,
                a.Ab(n, 14)._shouldForward('untouched'),
                a.Ab(n, 14)._shouldForward('touched'),
                a.Ab(n, 14)._shouldForward('pristine'),
                a.Ab(n, 14)._shouldForward('dirty'),
                a.Ab(n, 14)._shouldForward('valid'),
                a.Ab(n, 14)._shouldForward('invalid'),
                a.Ab(n, 14)._shouldForward('pending'),
                !a.Ab(n, 14)._animationsEnabled
              ]),
              l(n, 24, 1, [
                a.Ab(n, 28).ngClassUntouched,
                a.Ab(n, 28).ngClassTouched,
                a.Ab(n, 28).ngClassPristine,
                a.Ab(n, 28).ngClassDirty,
                a.Ab(n, 28).ngClassValid,
                a.Ab(n, 28).ngClassInvalid,
                a.Ab(n, 28).ngClassPending,
                a.Ab(n, 29).id,
                a.Ab(n, 29).tabIndex,
                a.Ab(n, 29)._getAriaLabel(),
                a.Ab(n, 29)._getAriaLabelledby(),
                a.Ab(n, 29).required.toString(),
                a.Ab(n, 29).disabled.toString(),
                a.Ab(n, 29).errorState,
                a.Ab(n, 29).panelOpen ? a.Ab(n, 29)._optionIds : null,
                a.Ab(n, 29).multiple,
                a.Ab(n, 29)._ariaDescribedby || null,
                a.Ab(n, 29)._getAriaActiveDescendant(),
                a.Ab(n, 29).disabled,
                a.Ab(n, 29).errorState,
                a.Ab(n, 29).required,
                a.Ab(n, 29).empty
              ]),
              l(
                n,
                38,
                0,
                a.Ab(n, 39).inline,
                'primary' !== a.Ab(n, 39).color &&
                  'accent' !== a.Ab(n, 39).color &&
                  'warn' !== a.Ab(n, 39).color
              ),
              l(n, 40, 0, a.Ab(n, 41).renderedIconHTML),
              l(
                n,
                44,
                0,
                a.Ib(
                  n,
                  44,
                  0,
                  a.Ab(n, 45).transform('anms.settings.themes.sticky-header')
                )
              ),
              l(
                n,
                46,
                0,
                a.Ab(n, 48).id,
                a.Ab(n, 48).disabled ? null : -1,
                a.Ab(n, 48).checked,
                a.Ab(n, 48).disabled,
                'before' == a.Ab(n, 48).labelPosition,
                'NoopAnimations' === a.Ab(n, 48)._animationMode
              ),
              l(
                n,
                54,
                0,
                a.Ib(
                  n,
                  54,
                  0,
                  a.Ab(n, 55).transform('anms.settings.themes.title')
                )
              ),
              l(
                n,
                57,
                0,
                a.Ab(n, 58).inline,
                'primary' !== a.Ab(n, 58).color &&
                  'accent' !== a.Ab(n, 58).color &&
                  'warn' !== a.Ab(n, 58).color
              ),
              l(n, 59, 0, a.Ab(n, 60).renderedIconHTML),
              l(n, 61, 1, [
                'standard' == a.Ab(n, 62).appearance,
                'fill' == a.Ab(n, 62).appearance,
                'outline' == a.Ab(n, 62).appearance,
                'legacy' == a.Ab(n, 62).appearance,
                a.Ab(n, 62)._control.errorState,
                a.Ab(n, 62)._canLabelFloat,
                a.Ab(n, 62)._shouldLabelFloat(),
                a.Ab(n, 62)._hasFloatingLabel(),
                a.Ab(n, 62)._hideControlPlaceholder(),
                a.Ab(n, 62)._control.disabled,
                a.Ab(n, 62)._control.autofilled,
                a.Ab(n, 62)._control.focused,
                'accent' == a.Ab(n, 62).color,
                'warn' == a.Ab(n, 62).color,
                a.Ab(n, 62)._shouldForward('untouched'),
                a.Ab(n, 62)._shouldForward('touched'),
                a.Ab(n, 62)._shouldForward('pristine'),
                a.Ab(n, 62)._shouldForward('dirty'),
                a.Ab(n, 62)._shouldForward('valid'),
                a.Ab(n, 62)._shouldForward('invalid'),
                a.Ab(n, 62)._shouldForward('pending'),
                !a.Ab(n, 62)._animationsEnabled
              ]),
              l(n, 72, 1, [
                a.Ab(n, 76).ngClassUntouched,
                a.Ab(n, 76).ngClassTouched,
                a.Ab(n, 76).ngClassPristine,
                a.Ab(n, 76).ngClassDirty,
                a.Ab(n, 76).ngClassValid,
                a.Ab(n, 76).ngClassInvalid,
                a.Ab(n, 76).ngClassPending,
                a.Ab(n, 77).id,
                a.Ab(n, 77).tabIndex,
                a.Ab(n, 77)._getAriaLabel(),
                a.Ab(n, 77)._getAriaLabelledby(),
                a.Ab(n, 77).required.toString(),
                a.Ab(n, 77).disabled.toString(),
                a.Ab(n, 77).errorState,
                a.Ab(n, 77).panelOpen ? a.Ab(n, 77)._optionIds : null,
                a.Ab(n, 77).multiple,
                a.Ab(n, 77)._ariaDescribedby || null,
                a.Ab(n, 77)._getAriaActiveDescendant(),
                a.Ab(n, 77).disabled,
                a.Ab(n, 77).errorState,
                a.Ab(n, 77).required,
                a.Ab(n, 77).empty
              ]),
              l(
                n,
                86,
                0,
                a.Ab(n, 87).inline,
                'primary' !== a.Ab(n, 87).color &&
                  'accent' !== a.Ab(n, 87).color &&
                  'warn' !== a.Ab(n, 87).color
              ),
              l(n, 88, 0, a.Ab(n, 89).renderedIconHTML),
              l(
                n,
                92,
                0,
                a.Ib(
                  n,
                  92,
                  0,
                  a.Ab(n, 93).transform('anms.settings.themes.night-mode')
                )
              ),
              l(
                n,
                94,
                0,
                a.Ab(n, 96).id,
                a.Ab(n, 96).disabled ? null : -1,
                a.Ab(n, 96).checked,
                a.Ab(n, 96).disabled,
                'before' == a.Ab(n, 96).labelPosition,
                'NoopAnimations' === a.Ab(n, 96)._animationMode
              ),
              l(
                n,
                101,
                0,
                a.Ib(
                  n,
                  101,
                  0,
                  a.Ab(n, 102).transform('anms.settings.animations.title')
                )
              ),
              l(
                n,
                104,
                0,
                a.Ab(n, 105).inline,
                'primary' !== a.Ab(n, 105).color &&
                  'accent' !== a.Ab(n, 105).color &&
                  'warn' !== a.Ab(n, 105).color
              ),
              l(
                n,
                106,
                0,
                a.Ab(n, 107).inline,
                'primary' !== a.Ab(n, 107).color &&
                  'accent' !== a.Ab(n, 107).color &&
                  'warn' !== a.Ab(n, 107).color
              ),
              l(n, 108, 0, a.Ab(n, 109).renderedIconHTML),
              l(
                n,
                112,
                0,
                a.Ib(
                  n,
                  112,
                  0,
                  a.Ab(n, 113).transform('anms.settings.animations.page')
                )
              ),
              l(
                n,
                119,
                0,
                a.Ab(n, 120).inline,
                'primary' !== a.Ab(n, 120).color &&
                  'accent' !== a.Ab(n, 120).color &&
                  'warn' !== a.Ab(n, 120).color
              ),
              l(n, 121, 0, a.Ab(n, 122).renderedIconHTML),
              l(
                n,
                125,
                0,
                a.Ib(
                  n,
                  125,
                  0,
                  a.Ab(n, 126).transform('anms.settings.animations.elements')
                )
              ),
              l(
                n,
                127,
                0,
                a.Ab(n, 129).id,
                a.Ab(n, 129).disabled ? null : -1,
                a.Ab(n, 129).checked,
                a.Ab(n, 129).disabled,
                'before' == a.Ab(n, 129).labelPosition,
                'NoopAnimations' === a.Ab(n, 129)._animationMode
              );
          }
        );
      }
      function G(l) {
        return a.Jb(
          2,
          [
            (l()(),
            a.qb(
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
            a.qb(
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
            a.qb(
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
            a.qb(3, 0, null, null, 2, 'h1', [], null, null, null, null, null)),
            (l()(), a.Hb(4, null, ['', ''])),
            a.Cb(131072, d.i, [d.j, a.h]),
            (l()(),
            a.qb(6, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(), a.fb(16777216, null, null, 2, null, B)),
            a.pb(
              8,
              16384,
              null,
              0,
              q.k,
              [a.O, a.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            a.Cb(131072, q.b, [a.h])
          ],
          function(l, n) {
            var e = n.component;
            l(n, 8, 0, a.Ib(n, 8, 0, a.Ab(n, 9).transform(e.settings$)));
          },
          function(l, n) {
            l(
              n,
              4,
              0,
              a.Ib(n, 4, 0, a.Ab(n, 5).transform('anms.settings.title'))
            );
          }
        );
      }
      function U(l) {
        return a.Jb(
          0,
          [
            (l()(),
            a.qb(
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
              G,
              N
            )),
            a.pb(1, 114688, null, 0, O, [M.o], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var V = a.mb('anms-settings', O, U, {}, {}, []),
        W = e('OcC5'),
        Z = e('aFla'),
        $ = e('9+G+'),
        Q = e('Av2N'),
        R = e('8JnZ'),
        X = e('9qA3'),
        Y = e('DiCn'),
        ll = e('Lv2H'),
        nl = e('9Z2Q'),
        el = e('S/D4'),
        al = e('0S3s'),
        ol = e('eEhu'),
        ul = e('gX7W'),
        tl = e('yy4G'),
        il = e('1PzT'),
        bl = e('dFIu'),
        cl = e('uWIS'),
        rl = e('ifl5'),
        sl = e('5i2S'),
        dl = e('PCNd'),
        ml = e('1VvW');
      const gl = { title: 'anms.menu.settings' };
      class pl {}
      var Al = e('K5Xz');
      e.d(n, 'SettingsModuleNgFactory', function() {
        return fl;
      });
      var fl = a.nb(o, [], function(l) {
        return a.xb([
          a.yb(512, a.j, a.ab, [
            [8, [u.a, t.a, t.b, i.a, b.b, b.a, c.a, V]],
            [3, a.j],
            a.w
          ]),
          a.yb(4608, q.m, q.l, [a.t, [2, q.D]]),
          a.yb(4608, g.v, g.v, []),
          a.yb(4608, f.c, f.c, [
            f.i,
            f.e,
            a.j,
            f.h,
            f.f,
            a.q,
            a.y,
            q.d,
            v.b,
            [2, q.g]
          ]),
          a.yb(5120, f.j, f.k, [f.c]),
          a.yb(4608, W.c, W.c, []),
          a.yb(5120, S.a, S.b, [f.c]),
          a.yb(4608, s.b, s.b, []),
          a.yb(5120, Z.c, Z.j, [f.c]),
          a.yb(5120, A.b, A.c, [f.c]),
          a.yb(4608, k.e, s.c, [[2, s.g], [2, s.l]]),
          a.yb(4608, g.e, g.e, []),
          a.yb(5120, $.b, $.c, [f.c]),
          a.yb(135680, $.d, $.d, [
            f.c,
            a.q,
            [2, q.g],
            [2, $.a],
            $.b,
            [3, $.d],
            f.e
          ]),
          a.yb(4608, Q.i, Q.i, []),
          a.yb(5120, Q.a, Q.b, [f.c]),
          a.yb(4608, s.a, s.v, [[2, s.f], y.a]),
          a.yb(1073742336, q.c, q.c, []),
          a.yb(1073742336, g.u, g.u, []),
          a.yb(1073742336, g.h, g.h, []),
          a.yb(1073742336, d.g, d.g, []),
          a.yb(1073742336, v.a, v.a, []),
          a.yb(1073742336, s.l, s.l, [[2, s.d], [2, k.f]]),
          a.yb(1073742336, y.b, y.b, []),
          a.yb(1073742336, s.u, s.u, []),
          a.yb(1073742336, R.c, R.c, []),
          a.yb(1073742336, X.b, X.b, []),
          a.yb(1073742336, Y.g, Y.g, []),
          a.yb(1073742336, h.c, h.c, []),
          a.yb(1073742336, f.g, f.g, []),
          a.yb(1073742336, s.s, s.s, []),
          a.yb(1073742336, s.q, s.q, []),
          a.yb(1073742336, W.d, W.d, []),
          a.yb(1073742336, T.e, T.e, []),
          a.yb(1073742336, S.d, S.d, []),
          a.yb(1073742336, _.a, _.a, []),
          a.yb(1073742336, ll.k, ll.k, []),
          a.yb(1073742336, nl.c, nl.c, []),
          a.yb(1073742336, el.c, el.c, []),
          a.yb(1073742336, al.c, al.c, []),
          a.yb(1073742336, ol.d, ol.d, []),
          a.yb(1073742336, ul.f, ul.f, []),
          a.yb(1073742336, tl.h, tl.h, []),
          a.yb(1073742336, il.d, il.d, []),
          a.yb(1073742336, il.c, il.c, []),
          a.yb(1073742336, s.m, s.m, []),
          a.yb(1073742336, bl.b, bl.b, []),
          a.yb(1073742336, cl.c, cl.c, []),
          a.yb(1073742336, Z.i, Z.i, []),
          a.yb(1073742336, Z.f, Z.f, []),
          a.yb(1073742336, F.c, F.c, []),
          a.yb(1073742336, A.e, A.e, []),
          a.yb(1073742336, rl.e, rl.e, []),
          a.yb(1073742336, p.c, p.c, []),
          a.yb(1073742336, x.f, x.f, []),
          a.yb(1073742336, g.r, g.r, []),
          a.yb(1073742336, sl.b, sl.b, []),
          a.yb(1073742336, $.g, $.g, []),
          a.yb(1073742336, Q.j, Q.j, []),
          a.yb(1073742336, s.w, s.w, []),
          a.yb(1073742336, s.n, s.n, []),
          a.yb(1073742336, dl.a, dl.a, []),
          a.yb(1073742336, ml.t, ml.t, [[2, ml.z], [2, ml.p]]),
          a.yb(1073742336, pl, pl, []),
          a.yb(1073742336, o, o, []),
          a.yb(256, ol.a, { separatorKeyCodes: [Al.f] }, []),
          a.yb(256, s.e, s.i, []),
          a.yb(
            1024,
            ml.n,
            function() {
              return [[{ path: '', component: O, data: gl }]];
            },
            []
          )
        ]);
      });
    }
  }
]);
