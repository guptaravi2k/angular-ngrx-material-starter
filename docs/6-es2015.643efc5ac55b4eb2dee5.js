(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '8iGT': function(l, n, e) {
      'use strict';
      e.r(n);
      var t = e('kZht'),
        a = e('cgGC'),
        i = e('AytR');
      function u(l) {
        return new a.a(l, `${i.a.i18nPrefix}/assets/i18n/examples/`, '.json');
      }
      class o {
        constructor() {}
      }
      var r = e('pLqg'),
        s = e('tjWy'),
        b = e('7tlY'),
        c = e('UUMc'),
        d = e('C9Ky'),
        m = e('0aut'),
        p = e('Lv2H'),
        f = e('4rR8'),
        h = e('ApNh'),
        g = e('owzC'),
        A = e('An66'),
        k = e('1VvW'),
        x = e('aDqW'),
        v = e('QH8h'),
        y = e('OcC5'),
        _ = e('pOQZ'),
        C = e('ENSU'),
        q = e('DiCn'),
        w = e('FxgA'),
        I = e('tBgR'),
        j = t.ob({
          encapsulation: 2,
          styles: [
            '.mat-tab-nav-bar{overflow:hidden;position:relative;flex-shrink:0}.mat-tab-links{position:relative;display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:0}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-link:focus{outline:dotted 2px}}.mat-tab-link.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-link.mat-tab-disabled{opacity:.5}}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-link{opacity:1}}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media (max-width:599px){.mat-tab-link{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}'
          ],
          data: {}
        });
      function O(l) {
        return t.Jb(
          2,
          [
            t.Fb(402653184, 1, { _inkBar: 0 }),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'mat-tab-links']],
              null,
              [[null, 'cdkObserveContent']],
              function(l, n, e) {
                var t = !0;
                return (
                  'cdkObserveContent' === n &&
                    (t = !1 !== l.component._alignInkBar() && t),
                  t
                );
              },
              null,
              null
            )),
            t.pb(2, 1196032, null, 0, y.a, [y.b, t.k, t.y], null, {
              event: 'cdkObserveContent'
            }),
            t.zb(null, 0),
            (l()(),
            t.qb(
              4,
              0,
              null,
              null,
              1,
              'mat-ink-bar',
              [['class', 'mat-ink-bar']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(5, 16384, [[1, 4]], 0, p.b, [t.k, t.y, p.l], null, null)
          ],
          null,
          null
        );
      }
      var F = e('rW4h'),
        S = e('5ohT'),
        E = e('qBwE'),
        H = e('3kIJ'),
        P = e('ofez'),
        L = e('pKmL');
      class M {
        constructor(l) {
          (this.store = l),
            (this.examples = [
              { link: 'todos', label: 'anms.examples.menu.todos' },
              { link: 'stock-market', label: 'anms.examples.menu.stocks' },
              { link: 'theming', label: 'anms.examples.menu.theming' },
              { link: 'crud', label: 'anms.examples.menu.crud' },
              {
                link: 'simple-state-management',
                label: 'anms.examples.menu.simple-state-management'
              },
              { link: 'form', label: 'anms.examples.menu.form' },
              {
                link: 'notifications',
                label: 'anms.examples.menu.notifications'
              },
              { link: 'elements', label: 'anms.examples.menu.elements' },
              {
                link: 'authenticated',
                label: 'anms.examples.menu.auth',
                auth: !0
              }
            ]);
        }
        ngOnInit() {
          this.isAuthenticated$ = this.store.pipe(Object(P.C)(L.h));
        }
      }
      var z = t.ob({
        encapsulation: 0,
        styles: [
          [
            'nav[_ngcontent-%COMP%]{margin-bottom:20px}nav[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{min-width:120px;padding:0 15px}@media (max-width:768px){nav[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{min-width:0}}'
          ]
        ],
        data: {
          animation: [
            {
              type: 7,
              name: 'routeAnimations',
              definitions: [
                {
                  type: 1,
                  expr: m.b,
                  animation: [
                    {
                      type: 11,
                      selector: ':enter > *',
                      animation: {
                        type: 6,
                        styles: { opacity: 0, position: 'fixed' },
                        offset: null
                      },
                      options: { optional: !0 }
                    },
                    {
                      type: 11,
                      selector: ':enter .route-animations-elements',
                      animation: {
                        type: 6,
                        styles: { opacity: 0 },
                        offset: null
                      },
                      options: { optional: !0 }
                    },
                    {
                      type: 2,
                      steps: [
                        {
                          type: 11,
                          selector: ':leave > *',
                          animation: [
                            {
                              type: 6,
                              styles: {
                                transform: 'translateY(0%)',
                                opacity: 1
                              },
                              offset: null
                            },
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  transform: 'translateY(-3%)',
                                  opacity: 0
                                },
                                offset: null
                              },
                              timings: '0.2s ease-in-out'
                            },
                            {
                              type: 6,
                              styles: { position: 'fixed' },
                              offset: null
                            }
                          ],
                          options: { optional: !0 }
                        },
                        {
                          type: 11,
                          selector: ':enter > *',
                          animation: [
                            {
                              type: 6,
                              styles: {
                                transform: 'translateY(-3%)',
                                opacity: 0,
                                position: 'static'
                              },
                              offset: null
                            },
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  transform: 'translateY(0%)',
                                  opacity: 1
                                },
                                offset: null
                              },
                              timings: '0.5s ease-in-out'
                            }
                          ],
                          options: { optional: !0 }
                        }
                      ],
                      options: null
                    },
                    {
                      type: 11,
                      selector: ':enter .route-animations-elements',
                      animation: {
                        type: 12,
                        timings: 75,
                        animation: [
                          {
                            type: 6,
                            styles: {
                              transform: 'translateY(10%)',
                              opacity: 0
                            },
                            offset: null
                          },
                          {
                            type: 4,
                            styles: {
                              type: 6,
                              styles: {
                                transform: 'translateY(0%)',
                                opacity: 1
                              },
                              offset: null
                            },
                            timings: '0.5s ease-in-out'
                          }
                        ]
                      },
                      options: { optional: !0 }
                    }
                  ],
                  options: null
                },
                { type: 1, expr: m.d, animation: [], options: null },
                {
                  type: 1,
                  expr: m.e,
                  animation: [
                    {
                      type: 11,
                      selector: ':enter > *',
                      animation: {
                        type: 6,
                        styles: { opacity: 0, position: 'fixed' },
                        offset: null
                      },
                      options: { optional: !0 }
                    },
                    {
                      type: 2,
                      steps: [
                        {
                          type: 11,
                          selector: ':leave > *',
                          animation: [
                            {
                              type: 6,
                              styles: {
                                transform: 'translateY(0%)',
                                opacity: 1
                              },
                              offset: null
                            },
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  transform: 'translateY(-3%)',
                                  opacity: 0
                                },
                                offset: null
                              },
                              timings: '0.2s ease-in-out'
                            },
                            {
                              type: 6,
                              styles: { position: 'fixed' },
                              offset: null
                            }
                          ],
                          options: { optional: !0 }
                        },
                        {
                          type: 11,
                          selector: ':enter > *',
                          animation: [
                            {
                              type: 6,
                              styles: {
                                transform: 'translateY(-3%)',
                                opacity: 0,
                                position: 'static'
                              },
                              offset: null
                            },
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: {
                                  transform: 'translateY(0%)',
                                  opacity: 1
                                },
                                offset: null
                              },
                              timings: '0.5s ease-in-out'
                            }
                          ],
                          options: { optional: !0 }
                        }
                      ],
                      options: null
                    }
                  ],
                  options: null
                },
                {
                  type: 1,
                  expr: m.c,
                  animation: [
                    {
                      type: 11,
                      selector: ':enter .route-animations-elements',
                      animation: {
                        type: 6,
                        styles: { opacity: 0 },
                        offset: null
                      },
                      options: { optional: !0 }
                    },
                    {
                      type: 11,
                      selector: ':enter .route-animations-elements',
                      animation: {
                        type: 12,
                        timings: 75,
                        animation: [
                          {
                            type: 6,
                            styles: {
                              transform: 'translateY(10%)',
                              opacity: 0
                            },
                            offset: null
                          },
                          {
                            type: 4,
                            styles: {
                              type: 6,
                              styles: {
                                transform: 'translateY(0%)',
                                opacity: 1
                              },
                              offset: null
                            },
                            timings: '0.5s ease-in-out'
                          }
                        ]
                      },
                      options: { optional: !0 }
                    }
                  ],
                  options: null
                }
              ],
              options: {}
            }
          ]
        }
      });
      function T(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              8,
              'a',
              [
                ['class', 'mat-tab-link'],
                ['mat-tab-link', ''],
                ['routerLinkActive', '']
              ],
              [
                [1, 'aria-current', 0],
                [1, 'aria-disabled', 0],
                [1, 'tabIndex', 0],
                [2, 'mat-tab-disabled', null],
                [2, 'mat-tab-label-active', null],
                [1, 'target', 0],
                [8, 'href', 4]
              ],
              [[null, 'click']],
              function(l, n, e) {
                var a = !0;
                return (
                  'click' === n &&
                    (a =
                      !1 !==
                        t
                          .Ab(l, 3)
                          .onClick(
                            e.button,
                            e.ctrlKey,
                            e.metaKey,
                            e.shiftKey
                          ) && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(
              1,
              147456,
              [[1, 4]],
              0,
              p.i,
              [p.j, t.k, t.y, f.a, [2, h.k], [8, null], g.h],
              { disabled: [0, 'disabled'], active: [1, 'active'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            t.pb(
              3,
              671744,
              [[3, 4]],
              0,
              k.s,
              [k.p, k.a, A.h],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            t.pb(
              4,
              1720320,
              [['rla', 4]],
              2,
              k.r,
              [k.p, t.k, t.D, [2, k.q], [2, k.s]],
              { routerLinkActive: [0, 'routerLinkActive'] },
              null
            ),
            t.Fb(603979776, 2, { links: 1 }),
            t.Fb(603979776, 3, { linksWithHrefs: 1 }),
            (l()(), t.Hb(7, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          function(l, n) {
            var e = n.component;
            l(
              n,
              1,
              0,
              n.context.$implicit.auth &&
                !t.Ib(n, 1, 0, t.Ab(n, 2).transform(e.isAuthenticated$)),
              t.Ab(n, 4).isActive
            ),
              l(n, 3, 0, n.context.$implicit.link),
              l(n, 4, 0, '');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ab(n, 1).active,
              t.Ab(n, 1).disabled.toString(),
              t.Ab(n, 1).tabIndex,
              t.Ab(n, 1).disabled,
              t.Ab(n, 1).active,
              t.Ab(n, 3).target,
              t.Ab(n, 3).href
            ),
              l(
                n,
                7,
                0,
                t.Ib(n, 7, 0, t.Ab(n, 8).transform(n.context.$implicit.label))
              );
          }
        );
      }
      function D(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              5,
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
                var a = !0;
                return (
                  'click' === n &&
                    (a = !1 !== t.Ab(l, 1)._selectViaInteraction() && a),
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 1)._handleKeydown(e) && a),
                  'click' === n && (a = !1 !== t.Ab(l, 3).onClick() && a),
                  a
                );
              },
              v.c,
              v.a
            )),
            t.pb(
              1,
              8568832,
              [[4, 4]],
              0,
              h.p,
              [t.k, t.h, [2, h.j], [2, h.o]],
              { value: [0, 'value'], disabled: [1, 'disabled'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            t.pb(
              3,
              16384,
              null,
              0,
              k.q,
              [k.p, k.a, [8, null], t.D, t.k],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            (l()(), t.Hb(4, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          function(l, n) {
            var e = n.component;
            l(
              n,
              1,
              0,
              n.context.$implicit,
              n.context.$implicit.auth &&
                !t.Ib(n, 1, 1, t.Ab(n, 2).transform(e.isAuthenticated$))
            ),
              l(n, 3, 0, n.context.$implicit.link);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ab(n, 1)._getTabIndex(),
              t.Ab(n, 1).selected,
              t.Ab(n, 1).multiple,
              t.Ab(n, 1).active,
              t.Ab(n, 1).id,
              t.Ab(n, 1)._getAriaSelected(),
              t.Ab(n, 1).disabled.toString(),
              t.Ab(n, 1).disabled
            ),
              l(
                n,
                4,
                0,
                t.Ib(n, 4, 0, t.Ab(n, 5).transform(n.context.$implicit.label))
              );
          }
        );
      }
      function N(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'nav',
              [
                ['class', 'd-none d-sm-flex mat-tab-nav-bar'],
                ['mat-tab-nav-bar', '']
              ],
              null,
              null,
              null,
              O,
              j
            )),
            t.pb(
              1,
              3325952,
              null,
              1,
              p.j,
              [t.k, [2, _.b], t.y, t.h, I.e],
              null,
              null
            ),
            t.Fb(603979776, 1, { _tabLinks: 1 }),
            (l()(), t.fb(16777216, null, 0, 1, null, T)),
            t.pb(
              4,
              278528,
              null,
              0,
              A.j,
              [t.O, t.L, t.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            t.qb(
              5,
              0,
              null,
              null,
              10,
              'nav',
              [
                [
                  'class',
                  'nav-responsive d-sm-none d-flex justify-content-center'
                ]
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              6,
              0,
              null,
              null,
              9,
              'mat-select',
              [['class', 'mat-select'], ['role', 'listbox']],
              [
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
              [[null, 'keydown'], [null, 'focus'], [null, 'blur']],
              function(l, n, e) {
                var a = !0;
                return (
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 9)._handleKeydown(e) && a),
                  'focus' === n && (a = !1 !== t.Ab(l, 9)._onFocus() && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 9)._onBlur() && a),
                  a
                );
              },
              F.b,
              F.a
            )),
            t.Eb(6144, null, h.j, null, [S.c]),
            t.Eb(6144, null, E.d, null, [S.c]),
            t.pb(
              9,
              2080768,
              null,
              3,
              S.c,
              [
                I.e,
                t.h,
                t.y,
                h.b,
                t.k,
                [2, _.b],
                [2, H.p],
                [2, H.g],
                [2, E.c],
                [8, null],
                [8, null],
                S.a,
                g.j
              ],
              { placeholder: [0, 'placeholder'], value: [1, 'value'] },
              null
            ),
            t.Fb(603979776, 4, { options: 1 }),
            t.Fb(603979776, 5, { optionGroups: 1 }),
            t.Fb(603979776, 6, { customTrigger: 0 }),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.fb(16777216, null, 1, 1, null, D)),
            t.pb(
              15,
              278528,
              null,
              0,
              A.j,
              [t.O, t.L, t.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            t.qb(
              16,
              0,
              null,
              null,
              2,
              'div',
              [],
              [[24, '@routeAnimations', 0]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              17,
              16777216,
              null,
              null,
              1,
              'router-outlet',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(
              18,
              212992,
              [['o', 4]],
              0,
              k.u,
              [k.c, t.O, t.j, [8, null], t.h],
              null,
              null
            )
          ],
          function(l, n) {
            var e = n.component;
            l(n, 4, 0, e.examples),
              l(
                n,
                9,
                0,
                t.Ib(n, 9, 0, t.Ab(n, 13).transform('anms.examples.title')),
                'todos'
              ),
              l(n, 15, 0, e.examples),
              l(n, 18, 0);
          },
          function(l, n) {
            l(n, 6, 1, [
              t.Ab(n, 9).id,
              t.Ab(n, 9).tabIndex,
              t.Ab(n, 9)._getAriaLabel(),
              t.Ab(n, 9)._getAriaLabelledby(),
              t.Ab(n, 9).required.toString(),
              t.Ab(n, 9).disabled.toString(),
              t.Ab(n, 9).errorState,
              t.Ab(n, 9).panelOpen ? t.Ab(n, 9)._optionIds : null,
              t.Ab(n, 9).multiple,
              t.Ab(n, 9)._ariaDescribedby || null,
              t.Ab(n, 9)._getAriaActiveDescendant(),
              t.Ab(n, 9).disabled,
              t.Ab(n, 9).errorState,
              t.Ab(n, 9).required,
              t.Ab(n, 9).empty
            ]),
              l(
                n,
                16,
                0,
                t.Ab(n, 18).isActivated &&
                  t.Ab(n, 18).activatedRoute.routeConfig.path
              );
          }
        );
      }
      function J(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-examples',
              [],
              null,
              null,
              null,
              N,
              z
            )),
            t.pb(1, 114688, null, 0, M, [P.o], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var $ = t.mb('anms-examples', M, J, {}, {}, []),
        B = e('1P7/'),
        R = e('gX7W'),
        U = e('1PzT'),
        V = t.ob({
          encapsulation: 2,
          styles: [
            '@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media (hover:none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}'
          ],
          data: {}
        });
      function G(l) {
        return t.Jb(
          2,
          [
            t.Fb(671088640, 1, { _inputElement: 0 }),
            t.Fb(671088640, 2, { ripple: 0 }),
            (l()(),
            t.qb(
              2,
              0,
              [['label', 1]],
              null,
              16,
              'label',
              [['class', 'mat-checkbox-layout']],
              [[1, 'for', 0]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              3,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'mat-checkbox-inner-container']],
              [[2, 'mat-checkbox-inner-container-no-side-margin', null]],
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              4,
              0,
              [[1, 0], ['input', 1]],
              null,
              0,
              'input',
              [
                ['class', 'mat-checkbox-input cdk-visually-hidden'],
                ['type', 'checkbox']
              ],
              [
                [8, 'id', 0],
                [8, 'required', 0],
                [8, 'checked', 0],
                [1, 'value', 0],
                [8, 'disabled', 0],
                [1, 'name', 0],
                [8, 'tabIndex', 0],
                [8, 'indeterminate', 0],
                [1, 'aria-label', 0],
                [1, 'aria-labelledby', 0],
                [1, 'aria-checked', 0]
              ],
              [[null, 'change'], [null, 'click']],
              function(l, n, e) {
                var t = !0,
                  a = l.component;
                return (
                  'change' === n && (t = !1 !== a._onInteractionEvent(e) && t),
                  'click' === n && (t = !1 !== a._onInputClick(e) && t),
                  t
                );
              },
              null,
              null
            )),
            (l()(),
            t.qb(
              5,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'mat-checkbox-ripple mat-ripple'], ['matRipple', '']],
              [[2, 'mat-ripple-unbounded', null]],
              null,
              null,
              null,
              null
            )),
            t.pb(
              6,
              212992,
              [[2, 4]],
              0,
              h.t,
              [t.k, t.y, f.a, [2, h.k], [2, w.a]],
              {
                centered: [0, 'centered'],
                radius: [1, 'radius'],
                animation: [2, 'animation'],
                disabled: [3, 'disabled'],
                trigger: [4, 'trigger']
              },
              null
            ),
            t.Db(7, { enterDuration: 0 }),
            (l()(),
            t.qb(
              8,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-ripple-element mat-checkbox-persistent-ripple']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              9,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-checkbox-frame']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              10,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'mat-checkbox-background']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              11,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [
                [':xml:space', 'preserve'],
                ['class', 'mat-checkbox-checkmark'],
                ['focusable', 'false'],
                ['version', '1.1'],
                ['viewBox', '0 0 24 24']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              12,
              0,
              null,
              null,
              0,
              ':svg:path',
              [
                ['class', 'mat-checkbox-checkmark-path'],
                ['d', 'M4.1,12.7 9,17.6 20.3,6.3'],
                ['fill', 'none'],
                ['stroke', 'white']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              13,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-checkbox-mixedmark']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              14,
              0,
              [['checkboxLabel', 1]],
              null,
              4,
              'span',
              [['class', 'mat-checkbox-label']],
              null,
              [[null, 'cdkObserveContent']],
              function(l, n, e) {
                var t = !0;
                return (
                  'cdkObserveContent' === n &&
                    (t = !1 !== l.component._onLabelTextChange() && t),
                  t
                );
              },
              null,
              null
            )),
            t.pb(15, 1196032, null, 0, y.a, [y.b, t.k, t.y], null, {
              event: 'cdkObserveContent'
            }),
            (l()(),
            t.qb(
              16,
              0,
              null,
              null,
              1,
              'span',
              [['style', 'display:none']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['\xa0'])),
            t.zb(null, 0)
          ],
          function(l, n) {
            var e = n.component,
              a = l(n, 7, 0, 150);
            l(n, 6, 0, !0, 20, a, e._isRippleDisabled(), t.Ab(n, 2));
          },
          function(l, n) {
            var e = n.component;
            l(n, 2, 0, e.inputId),
              l(
                n,
                3,
                0,
                !t.Ab(n, 14).textContent || !t.Ab(n, 14).textContent.trim()
              ),
              l(n, 4, 1, [
                e.inputId,
                e.required,
                e.checked,
                e.value,
                e.disabled,
                e.name,
                e.tabIndex,
                e.indeterminate,
                e.ariaLabel || null,
                e.ariaLabelledby,
                e._getAriaChecked()
              ]),
              l(n, 5, 0, t.Ab(n, 6).unbounded);
          }
        );
      }
      var X = e('cz58'),
        K = e('Gien'),
        Y = e('8JnZ'),
        W = e('aFla'),
        Q = e('D4FV'),
        Z = e('iwai'),
        ll = e('NxuZ'),
        nl = e('2tfK'),
        el = e('Hc9t'),
        tl = e('a+5/'),
        al = e('eEhu'),
        il = e('K5Xz'),
        ul = t.ob({
          encapsulation: 2,
          styles: [
            ".mat-chip{position:relative;overflow:hidden;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0)}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:'';pointer-events:none;transition:opacity .2s cubic-bezier(.35,0,.25,1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:0}.mat-standard-chip:focus::after{opacity:.16}@media (-ms-high-contrast:active){.mat-standard-chip{outline:solid 1px}.mat-standard-chip:focus{outline:dotted 2px}}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper .mat-standard-chip,.mat-chip-list-wrapper input.mat-input-element{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}"
          ],
          data: {}
        });
      function ol(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'mat-chip-list-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            t.zb(null, 0)
          ],
          null,
          null
        );
      }
      class rl {
        constructor() {
          (this.value = ''), (this.disabled = !1), (this.hasFocus = !1);
        }
      }
      var sl = t.ob({
        encapsulation: 0,
        styles: [
          [
            '.big-input[_ngcontent-%COMP%]{width:100%;transition:all .5s;display:flex;padding:10px 10px 10px 20px}.big-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex-grow:1;border:0;font-size:20px;min-width:100px}'
          ]
        ],
        data: {}
      });
      function bl(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              6,
              'mat-card',
              [['class', 'big-input mat-card']],
              null,
              null,
              null,
              B.d,
              B.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              2,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.Db(3, { 'has-focus': 0 }),
            t.pb(4, 49152, null, 0, R.a, [], null, null),
            (l()(),
            t.qb(
              5,
              0,
              null,
              0,
              0,
              'input',
              [],
              [[8, 'value', 0], [8, 'placeholder', 0], [8, 'disabled', 0]],
              [[null, 'focus'], [null, 'blur']],
              function(l, n, e) {
                var t = !0,
                  a = l.component;
                return (
                  'focus' === n && (t = 0 != (a.hasFocus = !0) && t),
                  'blur' === n && (t = 0 != (a.hasFocus = !1) && t),
                  t
                );
              },
              null,
              null
            )),
            t.zb(0, 0)
          ],
          function(l, n) {
            var e = l(n, 3, 0, n.component.hasFocus);
            l(n, 2, 0, 'big-input', e);
          },
          function(l, n) {
            var e = n.component;
            l(n, 5, 0, e.value, e.placeholder, e.disabled);
          }
        );
      }
      class cl {
        constructor() {
          (this.disabled = !1),
            (this.fontSet = ''),
            (this.fontIcon = ''),
            (this.faIcon = ''),
            (this.label = ''),
            (this.color = ''),
            (this.action = new t.m()),
            (this.hasFocus = !1);
        }
        onClick() {
          this.action.emit();
        }
      }
      var dl = t.ob({
        encapsulation: 0,
        styles: [
          [
            'button[_ngcontent-%COMP%]{padding:0;min-width:36px;margin-left:10px}button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:relative;top:2px;font-size:18px}button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;font-size:18px}'
          ]
        ],
        data: {}
      });
      function ml(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'mat-icon',
              [['class', 'mat-icon notranslate'], ['role', 'img']],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              el.b,
              el.a
            )),
            t.pb(
              1,
              9158656,
              null,
              0,
              tl.b,
              [t.k, tl.d, [8, null], [2, tl.a]],
              { fontSet: [0, 'fontSet'], fontIcon: [1, 'fontIcon'] },
              null
            )
          ],
          function(l, n) {
            var e = n.component;
            l(n, 1, 0, e.fontSet, e.fontIcon);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ab(n, 1).inline,
              'primary' !== t.Ab(n, 1).color &&
                'accent' !== t.Ab(n, 1).color &&
                'warn' !== t.Ab(n, 1).color
            );
          }
        );
      }
      function pl(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              Z.b,
              Z.a
            )),
            t.pb(
              1,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            )
          ],
          function(l, n) {
            l(n, 1, 0, n.component.faIcon);
          },
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).renderedIconHTML);
          }
        );
      }
      function fl(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'span',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(1, null, ['', '']))
          ],
          null,
          function(l, n) {
            l(n, 1, 0, n.component.label);
          }
        );
      }
      function hl(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              7,
              'button',
              [['color', 'color'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n && (t = !1 !== l.component.onClick() && t), t
                );
              },
              K.d,
              K.b
            )),
            t.pb(
              1,
              180224,
              null,
              0,
              Y.b,
              [t.k, g.h, [2, w.a]],
              { disabled: [0, 'disabled'], color: [1, 'color'] },
              null
            ),
            (l()(), t.fb(16777216, null, 0, 1, null, ml)),
            t.pb(
              3,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, 0, 1, null, pl)),
            t.pb(
              5,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, 0, 1, null, fl)),
            t.pb(
              7,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            )
          ],
          function(l, n) {
            var e = n.component;
            l(n, 1, 0, e.disabled, 'color'),
              l(n, 3, 0, e.fontSet && e.fontIcon && !e.faIcon),
              l(n, 5, 0, e.faIcon),
              l(n, 7, 0, e.label);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ab(n, 1).disabled || null,
              'NoopAnimations' === t.Ab(n, 1)._animationMode
            );
          }
        );
      }
      var gl = e('zab8'),
        Al = e('J+dc'),
        kl = e('fN3Q');
      const xl = Object(P.v)('[Todos] Add', (l, n = Object(kl.v4)()) => ({
          name: l,
          id: n
        })),
        vl = Object(P.v)('[Todos] Toggle', Object(P.B)()),
        yl = Object(P.v)('[Todos] Remove Done'),
        _l = Object(P.v)('[Todos] Filter', Object(P.B)()),
        Cl = {
          items: [
            { id: Object(kl.v4)(), name: 'Open Todo list example', done: !0 },
            { id: Object(kl.v4)(), name: 'Check the other examples', done: !1 },
            {
              id: Object(kl.v4)(),
              name: 'Use Angular ngRx Material Starter in your project',
              done: !1
            }
          ],
          filter: 'ALL'
        },
        ql = Object(P.x)(
          Cl,
          Object(P.A)(xl, (l, n) =>
            Object.assign({}, l, {
              items: [{ id: n.id, name: n.name, done: !1 }, ...l.items]
            })
          ),
          Object(P.A)(vl, (l, n) =>
            Object.assign({}, l, {
              items: l.items.map(l =>
                l.id === n.id ? Object.assign({}, l, { done: !l.done }) : l
              )
            })
          ),
          Object(P.A)(yl, (l, n) =>
            Object.assign({}, l, { items: l.items.filter(l => !l.done) })
          ),
          Object(P.A)(_l, (l, n) => Object.assign({}, l, { filter: n.filter }))
        );
      function wl(l, n) {
        return ql(l, n);
      }
      const Il = Object(P.v)('[Stock] Retrieve', Object(P.B)()),
        jl = Object(P.v)('[Stock] Retrieve Success', Object(P.B)()),
        Ol = Object(P.v)('[Stock] Retrieve Error', Object(P.B)()),
        Fl = Object(P.x)(
          { symbol: 'GOOGL', loading: !1 },
          Object(P.A)(Il, (l, { symbol: n }) =>
            Object.assign({}, l, {
              loading: !0,
              stock: null,
              error: null,
              symbol: n
            })
          ),
          Object(P.A)(jl, (l, { stock: n }) =>
            Object.assign({}, l, { loading: !1, stock: n, error: null })
          ),
          Object(P.A)(Ol, (l, { error: n }) =>
            Object.assign({}, l, { loading: !1, stock: null, error: n })
          )
        );
      function Sl(l, n) {
        return Fl(l, n);
      }
      const El = (function() {
        var l = { EntitiesOnly: 0, Both: 1, None: 2 };
        return (
          (l[l.EntitiesOnly] = 'EntitiesOnly'),
          (l[l.Both] = 'Both'),
          (l[l.None] = 'None'),
          l
        );
      })();
      function Hl(l) {
        return function(n, e) {
          const t = {
              ids: [...e.ids],
              entities: Object.assign({}, e.entities)
            },
            a = l(n, t);
          return a === El.Both
            ? Object.assign({}, e, t)
            : a === El.EntitiesOnly
            ? Object.assign({}, e, { entities: t.entities })
            : e;
        };
      }
      function Pl(l, n) {
        const e = n(l);
        return (
          Object(t.W)() &&
            void 0 === e &&
            console.warn(
              '@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.',
              'You should probably provide your own `selectId` implementation.',
              'The entity that was passed:',
              l,
              'The `selectId` implementation:',
              n.toString()
            ),
          e
        );
      }
      function Ll(l) {
        function n(n, e) {
          const t = Pl(n, l);
          return t in e.entities
            ? El.None
            : (e.ids.push(t), (e.entities[t] = n), El.Both);
        }
        function e(l, e) {
          let t = !1;
          for (const a of l) t = n(a, e) !== El.None || t;
          return t ? El.Both : El.None;
        }
        function t(l, n) {
          const e =
            (l instanceof Array ? l : n.ids.filter(e => l(n.entities[e])))
              .filter(l => l in n.entities)
              .map(l => delete n.entities[l]).length > 0;
          return (
            e && (n.ids = n.ids.filter(l => l in n.entities)),
            e ? El.Both : El.None
          );
        }
        function a(n, e) {
          const t = {};
          return (n = n.filter(l => l.id in e.entities)).length > 0
            ? n.filter(n =>
                (function(n, e, t) {
                  const a = Object.assign({}, t.entities[e.id], e.changes),
                    i = Pl(a, l),
                    u = i !== e.id;
                  return (
                    u && ((n[e.id] = i), delete t.entities[e.id]),
                    (t.entities[i] = a),
                    u
                  );
                })(t, n, e)
              ).length > 0
              ? ((e.ids = e.ids.map(l => t[l] || l)), El.Both)
              : El.EntitiesOnly
            : El.None;
        }
        function i(n, t) {
          const i = [],
            u = [];
          for (const e of n) {
            const n = Pl(e, l);
            n in t.entities ? u.push({ id: n, changes: e }) : i.push(e);
          }
          const o = a(u, t),
            r = e(i, t);
          switch (!0) {
            case r === El.None && o === El.None:
              return El.None;
            case r === El.Both || o === El.Both:
              return El.Both;
            default:
              return El.EntitiesOnly;
          }
        }
        return {
          removeAll: function(l) {
            return Object.assign({}, l, { ids: [], entities: {} });
          },
          addOne: Hl(n),
          addMany: Hl(e),
          addAll: Hl(function(l, n) {
            return (n.ids = []), (n.entities = {}), e(l, n), El.Both;
          }),
          updateOne: Hl(function(l, n) {
            return a([l], n);
          }),
          updateMany: Hl(a),
          upsertOne: Hl(function(l, n) {
            return i([l], n);
          }),
          upsertMany: Hl(i),
          removeOne: Hl(function(l, n) {
            return t([l], n);
          }),
          removeMany: Hl(t),
          map: Hl(function(l, n) {
            return a(
              n.ids
                .reduce((e, t) => {
                  const a = l(n.entities[t]);
                  return (
                    a !== n.entities[t] && e.push({ id: t, changes: a }), e
                  );
                }, [])
                .filter(({ id: l }) => l in n.entities),
              n
            );
          })
        };
      }
      const Ml = Object(P.v)('[Books] Upsert One', Object(P.B)()),
        zl = Object(P.v)('[Books] Delete One', Object(P.B)()),
        Tl = (function(l = {}) {
          const { selectId: n, sortComparer: e } = Object.assign(
              { sortComparer: !1, selectId: l => l.id },
              l
            ),
            t = {
              getInitialState: function(l = {}) {
                return Object.assign({ ids: [], entities: {} }, l);
              }
            },
            a = {
              getSelectors: function(l) {
                const n = l => l.ids,
                  e = l => l.entities,
                  t = Object(P.z)(n, e, (l, n) => l.map(l => n[l])),
                  a = Object(P.z)(n, l => l.length);
                return l
                  ? {
                      selectIds: Object(P.z)(l, n),
                      selectEntities: Object(P.z)(l, e),
                      selectAll: Object(P.z)(l, t),
                      selectTotal: Object(P.z)(l, a)
                    }
                  : {
                      selectIds: n,
                      selectEntities: e,
                      selectAll: t,
                      selectTotal: a
                    };
              }
            },
            i = e
              ? (function(l, n) {
                  const { removeOne: e, removeMany: t, removeAll: a } = Ll(l);
                  function i(n, e) {
                    const t = n.filter(n => !(Pl(n, l) in e.entities));
                    return 0 === t.length ? El.None : (r(t, e), El.Both);
                  }
                  function u(n, e) {
                    const t = [],
                      a =
                        n.filter(n =>
                          (function(n, e, t) {
                            if (!(e.id in t.entities)) return !1;
                            const a = Object.assign(
                                {},
                                t.entities[e.id],
                                e.changes
                              ),
                              i = Pl(a, l);
                            return (
                              delete t.entities[e.id], n.push(a), i !== e.id
                            );
                          })(t, n, e)
                        ).length > 0;
                    if (0 === t.length) return El.None;
                    {
                      const l = e.ids,
                        n = [];
                      return (
                        (e.ids = e.ids.filter(
                          (l, t) => l in e.entities || (n.push(t), !1)
                        )),
                        r(t, e),
                        !a && n.every(n => e.ids[n] === l[n])
                          ? El.EntitiesOnly
                          : El.Both
                      );
                    }
                  }
                  function o(n, e) {
                    const t = [],
                      a = [];
                    for (const i of n) {
                      const n = Pl(i, l);
                      n in e.entities
                        ? a.push({ id: n, changes: i })
                        : t.push(i);
                    }
                    const o = u(a, e),
                      r = i(t, e);
                    switch (!0) {
                      case r === El.None && o === El.None:
                        return El.None;
                      case r === El.Both || o === El.Both:
                        return El.Both;
                      default:
                        return El.EntitiesOnly;
                    }
                  }
                  function r(e, t) {
                    e.sort(n);
                    const a = [];
                    let i = 0,
                      u = 0;
                    for (; i < e.length && u < t.ids.length; ) {
                      const o = e[i],
                        r = Pl(o, l),
                        s = t.ids[u];
                      n(o, t.entities[s]) <= 0
                        ? (a.push(r), i++)
                        : (a.push(s), u++);
                    }
                    (t.ids = a.concat(
                      i < e.length ? e.slice(i).map(l) : t.ids.slice(u)
                    )),
                      e.forEach((n, e) => {
                        t.entities[l(n)] = n;
                      });
                  }
                  return {
                    removeOne: e,
                    removeMany: t,
                    removeAll: a,
                    addOne: Hl(function(l, n) {
                      return i([l], n);
                    }),
                    updateOne: Hl(function(l, n) {
                      return u([l], n);
                    }),
                    upsertOne: Hl(function(l, n) {
                      return o([l], n);
                    }),
                    addAll: Hl(function(l, n) {
                      return (n.entities = {}), (n.ids = []), i(l, n), El.Both;
                    }),
                    addMany: Hl(i),
                    updateMany: Hl(u),
                    upsertMany: Hl(o),
                    map: Hl(function(l, n) {
                      return u(
                        n.ids.reduce((e, t) => {
                          const a = l(n.entities[t]);
                          return (
                            a !== n.entities[t] &&
                              e.push({ id: t, changes: a }),
                            e
                          );
                        }, []),
                        n
                      );
                    })
                  };
                })(n, e)
              : Ll(n);
          return Object.assign({ selectId: n, sortComparer: e }, t, a, i);
        })({
          sortComparer: function(l, n) {
            return l.title.localeCompare(n.title);
          }
        }),
        Dl = Tl.getInitialState({
          ids: ['123'],
          entities: {
            123: {
              id: '123',
              title: 'Reactive Programming with Angular and ngrx',
              author: 'Oren Farhi',
              description:
                'Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions'
            }
          }
        }),
        Nl = Object(P.x)(
          Dl,
          Object(P.A)(Ml, (l, { book: n }) => Tl.upsertOne(n, l)),
          Object(P.A)(zl, (l, { id: n }) => Tl.removeOne(n, l))
        );
      function Jl(l, n) {
        return Nl(l, n);
      }
      const $l = Object(P.v)('[Form] Update', Object(P.B)()),
        Bl = Object(P.v)('[Form] Reset'),
        Rl = { form: {} },
        Ul = Object(P.x)(
          Rl,
          Object(P.A)($l, (l, { form: n }) =>
            Object.assign({}, l, { form: n })
          ),
          Object(P.A)(Bl, () => Rl)
        );
      function Vl(l, n) {
        return Ul(l, n);
      }
      const Gl = Object(P.w)('examples'),
        Xl = Object(P.z)(Gl, l => l.todos),
        Kl = Object(P.z)(Xl, l => l.items),
        Yl = Object(P.z)(Xl, l => l.filter),
        Wl = Object(P.z)(Kl, Yl, (l, n) =>
          'ALL' === n ? l : l.filter('DONE' === n ? l => l.done : l => !l.done)
        ),
        Ql = Object(P.z)(Kl, l => !l.some(l => l.done));
      class Zl {
        constructor(l, n, e, t) {
          (this.store = l),
            (this.snackBar = n),
            (this.translateService = e),
            (this.notificationService = t),
            (this.routeAnimationsElements = L.d),
            (this.newTodo = '');
        }
        ngOnInit() {
          (this.todos$ = this.store.pipe(Object(P.C)(Wl))),
            (this.removeDoneDisabled$ = this.store.pipe(Object(P.C)(Ql)));
        }
        get isAddTodoDisabled() {
          return this.newTodo.length < 4;
        }
        onNewTodoChange(l) {
          this.newTodo = l;
        }
        onNewTodoClear() {
          this.newTodo = '';
        }
        onAddTodo() {
          this.store.dispatch(xl(this.newTodo));
          const l = this.translateService.instant(
            'anms.examples.todos.added.notification',
            { name: this.newTodo }
          );
          this.notificationService.info(l), (this.newTodo = '');
        }
        onToggleTodo(l) {
          this.store.dispatch(vl({ id: l.id }));
          const n = this.translateService.instant(
              `anms.examples.todos.filter.${l.done ? 'active' : 'done'}`
            ),
            e = this.translateService.instant('anms.examples.todos.undo'),
            t = this.translateService.instant(
              'anms.examples.todos.toggle.notification',
              { name: l.name }
            );
          this.snackBar
            .open(`${t} ${n}`, e, {
              duration: 2500,
              panelClass: 'todos-notification-overlay'
            })
            .onAction()
            .pipe(Object(Al.a)(1))
            .subscribe(() =>
              this.onToggleTodo(Object.assign({}, l, { done: !l.done }))
            );
        }
        onRemoveDoneTodos() {
          this.store.dispatch(yl());
          const l = this.translateService.instant(
            'anms.examples.todos.remove.notification'
          );
          this.notificationService.info(l);
        }
        onFilterTodos(l) {
          this.store.dispatch(_l({ filter: l }));
          const n = this.translateService.instant(
              'anms.examples.todos.filter.notification'
            ),
            e = this.translateService.instant(
              `anms.examples.todos.filter.${l.toLowerCase()}`
            );
          this.notificationService.info(`${n} ${e}`);
        }
      }
      var ln = e('ifl5'),
        nn = e('DqCq'),
        en = t.ob({
          encapsulation: 0,
          styles: [
            [
              '.entry[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:40px}.todos-filter-info[_ngcontent-%COMP%]{float:right;font-weight:400}.dotos-title[_ngcontent-%COMP%]{display:flex}.dotos-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{flex:1}.todos-filter[_ngcontent-%COMP%]{float:right;position:relative;left:10px;top:-5px;margin-left:-10px}.todo[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}.todo[_ngcontent-%COMP%]   .todo-done[_ngcontent-%COMP%]{margin:0 20px 0 0}.todo[_ngcontent-%COMP%]   .todo-label[_ngcontent-%COMP%]{position:relative;top:2px;cursor:pointer}.todo[_ngcontent-%COMP%]   .todo-label.todo-label-done[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.5}'
            ]
          ],
          data: {}
        });
      function tn(l) {
        return t.Jb(
          0,
          [
            (l()(), t.Hb(0, null, ['', ' ', ''])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              0,
              0,
              n.parent.context.ngIf.length,
              t.Ib(
                n,
                0,
                1,
                t.Ab(n, 1).transform('anms.examples.todos.filter.items')
              )
            );
          }
        );
      }
      function an(l) {
        return t.Jb(
          0,
          [
            (l()(), t.Hb(0, null, ['', ' ', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ib(
                n,
                0,
                0,
                t.Ab(n, 1).transform('anms.examples.todos.filter.one')
              ),
              t.Ib(
                n,
                0,
                1,
                t.Ab(n, 2).transform('anms.examples.todos.filter.item')
              )
            );
          }
        );
      }
      function un(l) {
        return t.Jb(
          0,
          [
            (l()(), t.Hb(0, null, ['', ' ', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ib(
                n,
                0,
                0,
                t.Ab(n, 1).transform('anms.examples.todos.filter.none')
              ),
              t.Ib(
                n,
                0,
                1,
                t.Ab(n, 2).transform('anms.examples.todos.filter.items')
              )
            );
          }
        );
      }
      function on(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              11,
              'mat-card',
              [['class', 'todo mat-card']],
              null,
              null,
              null,
              B.d,
              B.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              2,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(3, 49152, null, 0, R.a, [], null, null),
            (l()(),
            t.qb(
              4,
              0,
              null,
              0,
              2,
              'mat-checkbox',
              [['class', 'todo-done mat-checkbox']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'change']],
              function(l, n, e) {
                var t = !0;
                return (
                  'change' === n &&
                    (t =
                      !1 !== l.component.onToggleTodo(l.context.$implicit) &&
                      t),
                  t
                );
              },
              G,
              V
            )),
            t.Eb(
              5120,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [U.b]
            ),
            t.pb(
              6,
              8568832,
              null,
              0,
              U.b,
              [t.k, t.h, g.h, t.y, [8, null], [2, U.a], [2, w.a]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            ),
            (l()(),
            t.qb(
              7,
              0,
              null,
              0,
              4,
              'span',
              [['class', 'todo-label']],
              null,
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n &&
                    (t =
                      !1 !== l.component.onToggleTodo(l.context.$implicit) &&
                      t),
                  t
                );
              },
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              9,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.Db(10, { 'todo-label-done': 0 }),
            (l()(), t.Hb(11, null, [' \xa0', '\xa0 ']))
          ],
          function(l, n) {
            l(n, 2, 0, 'todo', n.component.routeAnimationsElements),
              l(n, 6, 0, n.context.$implicit.done);
            var e = l(n, 10, 0, n.context.$implicit.done);
            l(n, 9, 0, 'todo-label', e);
          },
          function(l, n) {
            l(
              n,
              4,
              0,
              t.Ab(n, 6).id,
              null,
              t.Ab(n, 6).indeterminate,
              t.Ab(n, 6).checked,
              t.Ab(n, 6).disabled,
              'before' == t.Ab(n, 6).labelPosition,
              'NoopAnimations' === t.Ab(n, 6)._animationMode
            ),
              l(n, 11, 0, n.context.$implicit.name);
          }
        );
      }
      function rn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              76,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              75,
              'div',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              70,
              'h2',
              [['class', 'dotos-title'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(3, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(
              4,
              0,
              null,
              null,
              2,
              'span',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(5, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              7,
              16777216,
              null,
              null,
              4,
              'button',
              [
                ['aria-haspopup', 'true'],
                ['class', 'todos-filter'],
                ['mat-icon-button', '']
              ],
              [
                [1, 'disabled', 0],
                [2, '_mat-animation-noopable', null],
                [1, 'aria-expanded', 0]
              ],
              [[null, 'mousedown'], [null, 'keydown'], [null, 'click']],
              function(l, n, e) {
                var a = !0;
                return (
                  'mousedown' === n &&
                    (a = !1 !== t.Ab(l, 9)._handleMousedown(e) && a),
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 9)._handleKeydown(e) && a),
                  'click' === n && (a = !1 !== t.Ab(l, 9)._handleClick(e) && a),
                  a
                );
              },
              K.d,
              K.b
            )),
            t.pb(8, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            t.pb(
              9,
              1196032,
              null,
              0,
              W.g,
              [Q.c, t.k, t.O, W.c, [2, W.d], [8, null], [2, _.b], g.h],
              { menu: [0, 'menu'] },
              null
            ),
            (l()(),
            t.qb(
              10,
              0,
              null,
              0,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['icon', 'filter']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              Z.b,
              Z.a
            )),
            t.pb(
              11,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(
              12,
              0,
              null,
              null,
              42,
              'mat-menu',
              [['class', 'todos-filter-menu-overlay'], ['xPosition', 'before']],
              null,
              null,
              null,
              nl.d,
              nl.b
            )),
            t.pb(
              13,
              1294336,
              [['todosFilter', 4]],
              2,
              W.h,
              [t.k, t.y, W.a],
              { xPosition: [0, 'xPosition'], panelClass: [1, 'panelClass'] },
              null
            ),
            t.Fb(603979776, 1, { items: 1 }),
            t.Fb(603979776, 2, { lazyContent: 0 }),
            t.Eb(2048, null, W.d, null, [W.h]),
            t.Eb(2048, null, W.b, null, [W.d]),
            (l()(),
            t.qb(
              18,
              0,
              null,
              0,
              12,
              'button',
              [['class', 'mat-menu-item'], ['mat-menu-item', ''], ['rtl', '']],
              [
                [1, 'role', 0],
                [2, 'mat-menu-item-highlighted', null],
                [2, 'mat-menu-item-submenu-trigger', null],
                [1, 'tabindex', 0],
                [1, 'aria-disabled', 0],
                [1, 'disabled', 0]
              ],
              [[null, 'click'], [null, 'mouseenter']],
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'click' === n &&
                    (a = !1 !== t.Ab(l, 22)._checkDisabled(e) && a),
                  'mouseenter' === n &&
                    (a = !1 !== t.Ab(l, 22)._handleMouseEnter() && a),
                  'click' === n && (a = !1 !== i.onFilterTodos('ALL') && a),
                  a
                );
              },
              nl.c,
              nl.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              20,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            t.Db(21, { active: 0 }),
            t.pb(
              22,
              180224,
              [[1, 4]],
              0,
              W.e,
              [t.k, A.d, g.h, [2, W.b]],
              null,
              null
            ),
            t.pb(23, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(
              24,
              0,
              null,
              0,
              3,
              'mat-icon',
              [['class', 'mat-icon notranslate'], ['role', 'img']],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              el.b,
              el.a
            )),
            t.pb(
              25,
              9158656,
              null,
              0,
              tl.b,
              [t.k, tl.d, [8, null], [2, tl.a]],
              null,
              null
            ),
            (l()(),
            t.qb(
              26,
              0,
              null,
              0,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['icon', 'tasks']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              Z.b,
              Z.a
            )),
            t.pb(
              27,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(28, 0, null, 0, 2, 'span', [], null, null, null, null, null)),
            (l()(), t.Hb(29, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              31,
              0,
              null,
              0,
              11,
              'button',
              [['class', 'mat-menu-item'], ['mat-menu-item', '']],
              [
                [1, 'role', 0],
                [2, 'mat-menu-item-highlighted', null],
                [2, 'mat-menu-item-submenu-trigger', null],
                [1, 'tabindex', 0],
                [1, 'aria-disabled', 0],
                [1, 'disabled', 0]
              ],
              [[null, 'click'], [null, 'mouseenter']],
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'click' === n &&
                    (a = !1 !== t.Ab(l, 35)._checkDisabled(e) && a),
                  'mouseenter' === n &&
                    (a = !1 !== t.Ab(l, 35)._handleMouseEnter() && a),
                  'click' === n && (a = !1 !== i.onFilterTodos('DONE') && a),
                  a
                );
              },
              nl.c,
              nl.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              33,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            t.Db(34, { active: 0 }),
            t.pb(
              35,
              180224,
              [[1, 4]],
              0,
              W.e,
              [t.k, A.d, g.h, [2, W.b]],
              null,
              null
            ),
            (l()(),
            t.qb(
              36,
              0,
              null,
              0,
              3,
              'mat-icon',
              [['class', 'mat-icon notranslate'], ['role', 'img']],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              el.b,
              el.a
            )),
            t.pb(
              37,
              9158656,
              null,
              0,
              tl.b,
              [t.k, tl.d, [8, null], [2, tl.a]],
              null,
              null
            ),
            (l()(),
            t.qb(
              38,
              0,
              null,
              0,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['icon', 'check']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              Z.b,
              Z.a
            )),
            t.pb(
              39,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(40, 0, null, 0, 2, 'span', [], null, null, null, null, null)),
            (l()(), t.Hb(41, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              43,
              0,
              null,
              0,
              11,
              'button',
              [['class', 'mat-menu-item'], ['mat-menu-item', '']],
              [
                [1, 'role', 0],
                [2, 'mat-menu-item-highlighted', null],
                [2, 'mat-menu-item-submenu-trigger', null],
                [1, 'tabindex', 0],
                [1, 'aria-disabled', 0],
                [1, 'disabled', 0]
              ],
              [[null, 'click'], [null, 'mouseenter']],
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'click' === n &&
                    (a = !1 !== t.Ab(l, 47)._checkDisabled(e) && a),
                  'mouseenter' === n &&
                    (a = !1 !== t.Ab(l, 47)._handleMouseEnter() && a),
                  'click' === n && (a = !1 !== i.onFilterTodos('ACTIVE') && a),
                  a
                );
              },
              nl.c,
              nl.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              45,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            t.Db(46, { active: 0 }),
            t.pb(
              47,
              180224,
              [[1, 4]],
              0,
              W.e,
              [t.k, A.d, g.h, [2, W.b]],
              null,
              null
            ),
            (l()(),
            t.qb(
              48,
              0,
              null,
              0,
              3,
              'mat-icon',
              [['class', 'mat-icon notranslate'], ['role', 'img']],
              [[2, 'mat-icon-inline', null], [2, 'mat-icon-no-color', null]],
              null,
              null,
              el.b,
              el.a
            )),
            t.pb(
              49,
              9158656,
              null,
              0,
              tl.b,
              [t.k, tl.d, [8, null], [2, tl.a]],
              null,
              null
            ),
            (l()(),
            t.qb(
              50,
              0,
              null,
              0,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['icon', 'square']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              Z.b,
              Z.a
            )),
            t.pb(
              51,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(52, 0, null, 0, 2, 'span', [], null, null, null, null, null)),
            (l()(), t.Hb(53, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              55,
              0,
              null,
              null,
              17,
              'mat-chip-list',
              [
                [
                  'class',
                  'todos-filter-info d-none d-sm-block d-md-none d-lg-block mat-chip-list'
                ]
              ],
              [
                [1, 'tabindex', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-required', 0],
                [1, 'aria-disabled', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-multiselectable', 0],
                [1, 'role', 0],
                [2, 'mat-chip-list-disabled', null],
                [2, 'mat-chip-list-invalid', null],
                [2, 'mat-chip-list-required', null],
                [1, 'aria-orientation', 0],
                [8, 'id', 0]
              ],
              [[null, 'focus'], [null, 'blur'], [null, 'keydown']],
              function(l, n, e) {
                var a = !0;
                return (
                  'focus' === n && (a = !1 !== t.Ab(l, 57).focus() && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 57)._blur() && a),
                  'keydown' === n && (a = !1 !== t.Ab(l, 57)._keydown(e) && a),
                  a
                );
              },
              ol,
              ul
            )),
            t.Eb(6144, null, E.d, null, [al.c]),
            t.pb(
              57,
              1556480,
              null,
              1,
              al.c,
              [t.k, t.h, [2, _.b], [2, H.p], [2, H.g], h.b, [8, null]],
              null,
              null
            ),
            t.Fb(603979776, 3, { chips: 1 }),
            (l()(),
            t.qb(
              59,
              0,
              null,
              0,
              13,
              'mat-chip',
              [['class', 'mat-chip'], ['role', 'option']],
              [
                [1, 'tabindex', 0],
                [2, 'mat-chip-selected', null],
                [2, 'mat-chip-with-avatar', null],
                [2, 'mat-chip-with-trailing-icon', null],
                [2, 'mat-chip-disabled', null],
                [1, 'disabled', 0],
                [1, 'aria-disabled', 0],
                [1, 'aria-selected', 0]
              ],
              [
                [null, 'click'],
                [null, 'keydown'],
                [null, 'focus'],
                [null, 'blur']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'click' === n &&
                    (a = !1 !== t.Ab(l, 61)._handleClick(e) && a),
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 61)._handleKeydown(e) && a),
                  'focus' === n && (a = !1 !== t.Ab(l, 61).focus() && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 61)._blur() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(
              60,
              16384,
              null,
              0,
              A.n,
              [A.m],
              { ngPlural: [0, 'ngPlural'] },
              null
            ),
            t.pb(
              61,
              147456,
              [[3, 4]],
              3,
              al.b,
              [t.k, t.y, f.a, [2, h.k]],
              { disabled: [0, 'disabled'] },
              null
            ),
            t.Fb(603979776, 4, { avatar: 0 }),
            t.Fb(603979776, 5, { trailingIcon: 0 }),
            t.Fb(603979776, 6, { removeIcon: 0 }),
            (l()(), t.Hb(65, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.fb(16777216, null, null, 1, null, tn)),
            t.pb(
              68,
              16384,
              null,
              0,
              A.o,
              [[8, 'other'], t.L, t.O, A.n],
              null,
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, an)),
            t.pb(
              70,
              16384,
              null,
              0,
              A.o,
              [[8, '=1'], t.L, t.O, A.n],
              null,
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, un)),
            t.pb(
              72,
              16384,
              null,
              0,
              A.o,
              [[8, '=0'], t.L, t.O, A.n],
              null,
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, on)),
            t.pb(
              74,
              278528,
              null,
              0,
              A.j,
              [t.O, t.L, t.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            t.qb(75, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            t.qb(76, 0, null, null, 0, 'br', [], null, null, null, null, null))
          ],
          function(l, n) {
            l(n, 3, 0),
              l(n, 9, 0, t.Ab(n, 13)),
              l(n, 11, 0, 'filter'),
              l(n, 13, 0, 'before', 'todos-filter-menu-overlay');
            var e = l(n, 21, 0, 'ALL' === n.context.ngIf.filter);
            l(n, 20, 0, e), l(n, 23, 0), l(n, 25, 0), l(n, 27, 0, 'tasks');
            var a = l(n, 34, 0, 'DONE' === n.context.ngIf.filter);
            l(n, 33, 0, a), l(n, 37, 0), l(n, 39, 0, 'check');
            var i = l(n, 46, 0, 'ACTIVE' === n.context.ngIf.filter);
            l(n, 45, 0, i),
              l(n, 49, 0),
              l(n, 51, 0, 'square'),
              l(n, 57, 0),
              l(n, 60, 0, n.context.ngIf.length),
              l(n, 61, 0, !0),
              l(n, 74, 0, n.context.ngIf);
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              t.Ib(n, 5, 0, t.Ab(n, 6).transform('anms.examples.todos.list'))
            ),
              l(
                n,
                7,
                0,
                t.Ab(n, 8).disabled || null,
                'NoopAnimations' === t.Ab(n, 8)._animationMode,
                t.Ab(n, 9).menuOpen || null
              ),
              l(n, 10, 0, t.Ab(n, 11).renderedIconHTML),
              l(
                n,
                18,
                0,
                t.Ab(n, 22).role,
                t.Ab(n, 22)._highlighted,
                t.Ab(n, 22)._triggersSubmenu,
                t.Ab(n, 22)._getTabIndex(),
                t.Ab(n, 22).disabled.toString(),
                t.Ab(n, 22).disabled || null
              ),
              l(
                n,
                24,
                0,
                t.Ab(n, 25).inline,
                'primary' !== t.Ab(n, 25).color &&
                  'accent' !== t.Ab(n, 25).color &&
                  'warn' !== t.Ab(n, 25).color
              ),
              l(n, 26, 0, t.Ab(n, 27).renderedIconHTML),
              l(
                n,
                29,
                0,
                t.Ib(
                  n,
                  29,
                  0,
                  t.Ab(n, 30).transform('anms.examples.todos.filter.all')
                )
              ),
              l(
                n,
                31,
                0,
                t.Ab(n, 35).role,
                t.Ab(n, 35)._highlighted,
                t.Ab(n, 35)._triggersSubmenu,
                t.Ab(n, 35)._getTabIndex(),
                t.Ab(n, 35).disabled.toString(),
                t.Ab(n, 35).disabled || null
              ),
              l(
                n,
                36,
                0,
                t.Ab(n, 37).inline,
                'primary' !== t.Ab(n, 37).color &&
                  'accent' !== t.Ab(n, 37).color &&
                  'warn' !== t.Ab(n, 37).color
              ),
              l(n, 38, 0, t.Ab(n, 39).renderedIconHTML),
              l(
                n,
                41,
                0,
                t.Ib(
                  n,
                  41,
                  0,
                  t.Ab(n, 42).transform('anms.examples.todos.filter.done')
                )
              ),
              l(
                n,
                43,
                0,
                t.Ab(n, 47).role,
                t.Ab(n, 47)._highlighted,
                t.Ab(n, 47)._triggersSubmenu,
                t.Ab(n, 47)._getTabIndex(),
                t.Ab(n, 47).disabled.toString(),
                t.Ab(n, 47).disabled || null
              ),
              l(
                n,
                48,
                0,
                t.Ab(n, 49).inline,
                'primary' !== t.Ab(n, 49).color &&
                  'accent' !== t.Ab(n, 49).color &&
                  'warn' !== t.Ab(n, 49).color
              ),
              l(n, 50, 0, t.Ab(n, 51).renderedIconHTML),
              l(
                n,
                53,
                0,
                t.Ib(
                  n,
                  53,
                  0,
                  t.Ab(n, 54).transform('anms.examples.todos.filter.active')
                )
              ),
              l(n, 55, 1, [
                t.Ab(n, 57).disabled ? null : t.Ab(n, 57)._tabIndex,
                t.Ab(n, 57)._ariaDescribedby || null,
                t.Ab(n, 57).required.toString(),
                t.Ab(n, 57).disabled.toString(),
                t.Ab(n, 57).errorState,
                t.Ab(n, 57).multiple,
                t.Ab(n, 57).role,
                t.Ab(n, 57).disabled,
                t.Ab(n, 57).errorState,
                t.Ab(n, 57).required,
                t.Ab(n, 57).ariaOrientation,
                t.Ab(n, 57)._uid
              ]),
              l(
                n,
                59,
                0,
                t.Ab(n, 61).disabled ? null : -1,
                t.Ab(n, 61).selected,
                t.Ab(n, 61).avatar,
                t.Ab(n, 61).trailingIcon || t.Ab(n, 61).removeIcon,
                t.Ab(n, 61).disabled,
                t.Ab(n, 61).disabled || null,
                t.Ab(n, 61).disabled.toString(),
                t.Ab(n, 61).ariaSelected
              ),
              l(
                n,
                65,
                0,
                t.Ib(
                  n,
                  65,
                  0,
                  t
                    .Ab(n, 66)
                    .transform('anms.examples.todos.filter.description')
                )
              );
          }
        );
      }
      function sn(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              45,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              14,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              13,
              'div',
              [['class', 'offset-md-2 col-md-8 entry']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              3,
              0,
              null,
              null,
              12,
              'anms-big-input',
              [['rtl', '']],
              null,
              [[null, 'keyup'], [null, 'keyup.enter'], [null, 'keyup.escape']],
              function(l, n, e) {
                var t = !0,
                  a = l.component;
                return (
                  'keyup' === n &&
                    (t = !1 !== a.onNewTodoChange(e.target.value) && t),
                  'keyup.enter' === n &&
                    (t = !1 !== (!a.isAddTodoDisabled && a.onAddTodo()) && t),
                  'keyup.escape' === n && (t = !1 !== a.onNewTodoClear() && t),
                  t
                );
              },
              bl,
              sl
            )),
            t.pb(
              4,
              49152,
              null,
              0,
              rl,
              [],
              { placeholder: [0, 'placeholder'], value: [1, 'value'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.pb(6, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(
              7,
              16777216,
              null,
              0,
              3,
              'anms-big-input-action',
              [
                ['color', 'accent'],
                ['faIcon', 'plus'],
                ['fontIcon', 'fa-plus'],
                ['fontSet', 'fas'],
                ['matTooltipPosition', 'before']
              ],
              null,
              [
                [null, 'action'],
                [null, 'longpress'],
                [null, 'keydown'],
                [null, 'touchend']
              ],
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'longpress' === n && (a = !1 !== t.Ab(l, 8).show() && a),
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 8)._handleKeydown(e) && a),
                  'touchend' === n &&
                    (a = !1 !== t.Ab(l, 8)._handleTouchend() && a),
                  'action' === n && (a = !1 !== i.onAddTodo() && a),
                  a
                );
              },
              hl,
              dl
            )),
            t.pb(
              8,
              212992,
              null,
              0,
              gl.d,
              [
                Q.c,
                t.k,
                I.b,
                t.O,
                t.y,
                f.a,
                g.c,
                g.h,
                gl.b,
                [2, _.b],
                [2, gl.a],
                [2, C.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.pb(
              10,
              49152,
              null,
              0,
              cl,
              [],
              {
                disabled: [0, 'disabled'],
                fontSet: [1, 'fontSet'],
                fontIcon: [2, 'fontIcon'],
                faIcon: [3, 'faIcon'],
                color: [4, 'color']
              },
              { action: 'action' }
            ),
            (l()(),
            t.qb(
              11,
              16777216,
              null,
              0,
              4,
              'anms-big-input-action',
              [
                ['color', 'warn'],
                ['faIcon', 'trash'],
                ['fontIcon', 'fa-trash'],
                ['fontSet', 'fas'],
                ['matTooltipPosition', 'after']
              ],
              null,
              [
                [null, 'action'],
                [null, 'longpress'],
                [null, 'keydown'],
                [null, 'touchend']
              ],
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'longpress' === n && (a = !1 !== t.Ab(l, 12).show() && a),
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 12)._handleKeydown(e) && a),
                  'touchend' === n &&
                    (a = !1 !== t.Ab(l, 12)._handleTouchend() && a),
                  'action' === n && (a = !1 !== i.onRemoveDoneTodos() && a),
                  a
                );
              },
              hl,
              dl
            )),
            t.pb(
              12,
              212992,
              null,
              0,
              gl.d,
              [
                Q.c,
                t.k,
                I.b,
                t.O,
                t.y,
                f.a,
                g.c,
                g.h,
                gl.b,
                [2, _.b],
                [2, gl.a],
                [2, C.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.pb(
              14,
              49152,
              null,
              0,
              cl,
              [],
              {
                disabled: [0, 'disabled'],
                fontSet: [1, 'fontSet'],
                fontIcon: [2, 'fontIcon'],
                faIcon: [3, 'faIcon'],
                color: [4, 'color']
              },
              { action: 'action' }
            ),
            t.Cb(131072, A.b, [t.h]),
            (l()(),
            t.qb(
              16,
              0,
              null,
              null,
              29,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 2, null, rn)),
            t.pb(
              18,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            (l()(),
            t.qb(
              20,
              0,
              null,
              null,
              25,
              'div',
              [['class', 'offset-md-1 col-md-5'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              22,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(23, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(24, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Hb(25, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(27, 0, null, null, 7, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(28, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              30,
              0,
              null,
              null,
              2,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(31, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.Hb(33, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(35, 0, null, null, 6, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(36, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              38,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['ngrx'])),
            (l()(), t.Hb(40, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(42, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(43, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(45, 0, null, null, 0, 'br', [], null, null, null, null, null))
          ],
          function(l, n) {
            var e = n.component;
            l(
              n,
              4,
              0,
              t.Ib(n, 4, 0, t.Ab(n, 5).transform('anms.examples.todos.input')),
              e.newTodo
            ),
              l(n, 6, 0),
              l(
                n,
                8,
                0,
                'before',
                t.Ib(
                  n,
                  8,
                  1,
                  t.Ab(n, 9).transform('anms.examples.todos.tooltip.add')
                )
              ),
              l(
                n,
                10,
                0,
                e.isAddTodoDisabled,
                'fas',
                'fa-plus',
                'plus',
                'accent'
              ),
              l(
                n,
                12,
                0,
                'after',
                t.Ib(
                  n,
                  12,
                  1,
                  t.Ab(n, 13).transform('anms.examples.todos.tooltip.remove')
                )
              ),
              l(
                n,
                14,
                0,
                t.Ib(n, 14, 0, t.Ab(n, 15).transform(e.removeDoneDisabled$)),
                'fas',
                'fa-trash',
                'trash',
                'warn'
              ),
              l(n, 18, 0, t.Ib(n, 18, 0, t.Ab(n, 19).transform(e.todos$))),
              l(n, 22, 0, 'offset-md-1 col-md-5', e.routeAnimationsElements),
              l(n, 23, 0);
          },
          function(l, n) {
            l(
              n,
              25,
              0,
              t.Ib(
                n,
                25,
                0,
                t.Ab(n, 26).transform('anms.examples.todos.example')
              )
            ),
              l(
                n,
                28,
                0,
                t.Ib(
                  n,
                  28,
                  0,
                  t.Ab(n, 29).transform('anms.examples.todos.text1')
                )
              ),
              l(
                n,
                31,
                0,
                t.Ib(
                  n,
                  31,
                  0,
                  t.Ab(n, 32).transform('anms.examples.todos.text2')
                )
              ),
              l(
                n,
                33,
                0,
                t.Ib(
                  n,
                  33,
                  0,
                  t.Ab(n, 34).transform('anms.examples.todos.text3')
                )
              ),
              l(
                n,
                36,
                0,
                t.Ib(
                  n,
                  36,
                  0,
                  t.Ab(n, 37).transform('anms.examples.todos.text4')
                )
              ),
              l(
                n,
                40,
                0,
                t.Ib(
                  n,
                  40,
                  0,
                  t.Ab(n, 41).transform('anms.examples.todos.text5')
                )
              ),
              l(
                n,
                43,
                0,
                t.Ib(
                  n,
                  43,
                  0,
                  t.Ab(n, 44).transform('anms.examples.todos.text6')
                )
              );
          }
        );
      }
      function bn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-todos',
              [],
              null,
              null,
              null,
              sn,
              en
            )),
            t.pb(1, 114688, null, 0, Zl, [P.o, ln.b, x.j, nn.a], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var cn = t.mb('anms-todos', Zl, bn, {}, {}, []),
        dn = e('0S3s'),
        mn = t.ob({
          encapsulation: 2,
          styles: [
            '.mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}'
          ],
          data: {}
        });
      function pn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              0,
              ':svg:circle',
              [['cx', '50%'], ['cy', '50%']],
              [
                [1, 'r', 0],
                [4, 'animation-name', null],
                [4, 'stroke-dashoffset', 'px'],
                [4, 'stroke-dasharray', 'px'],
                [4, 'stroke-width', '%']
              ],
              null,
              null,
              null,
              null
            ))
          ],
          null,
          function(l, n) {
            var e = n.component;
            l(
              n,
              0,
              0,
              e._circleRadius,
              'mat-progress-spinner-stroke-rotate-' + e.diameter,
              e._strokeDashOffset,
              e._strokeCircumference,
              e._circleStrokeWidth
            );
          }
        );
      }
      function fn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              0,
              ':svg:circle',
              [['cx', '50%'], ['cy', '50%']],
              [
                [1, 'r', 0],
                [4, 'stroke-dashoffset', 'px'],
                [4, 'stroke-dasharray', 'px'],
                [4, 'stroke-width', '%']
              ],
              null,
              null,
              null,
              null
            ))
          ],
          null,
          function(l, n) {
            var e = n.component;
            l(
              n,
              0,
              0,
              e._circleRadius,
              e._strokeDashOffset,
              e._strokeCircumference,
              e._circleStrokeWidth
            );
          }
        );
      }
      function hn(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              5,
              ':svg:svg',
              [
                ['focusable', 'false'],
                ['preserveAspectRatio', 'xMidYMid meet']
              ],
              [[4, 'width', 'px'], [4, 'height', 'px'], [1, 'viewBox', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(
              1,
              16384,
              null,
              0,
              A.q,
              [],
              { ngSwitch: [0, 'ngSwitch'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, pn)),
            t.pb(
              3,
              278528,
              null,
              0,
              A.r,
              [t.O, t.L, A.q],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, fn)),
            t.pb(
              5,
              278528,
              null,
              0,
              A.r,
              [t.O, t.L, A.q],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            )
          ],
          function(l, n) {
            l(n, 1, 0, 'indeterminate' === n.component.mode),
              l(n, 3, 0, !0),
              l(n, 5, 0, !1);
          },
          function(l, n) {
            var e = n.component;
            l(n, 0, 0, e.diameter, e.diameter, e._viewBox);
          }
        );
      }
      var gn = e('QsvA'),
        An = e('S/D4'),
        kn = e('9Z2Q');
      const xn = Object(P.z)(Gl, l => l.stocks);
      class vn {
        constructor(l) {
          (this.store = l), (this.routeAnimationsElements = L.d);
        }
        ngOnInit() {
          (this.stocks$ = this.store.pipe(Object(P.C)(xn))),
            this.stocks$
              .pipe(Object(Al.a)(1))
              .subscribe(l => this.onSymbolChange(l.symbol));
        }
        onSymbolChange(l) {
          this.store.dispatch(Il({ symbol: l }));
        }
      }
      var yn = t.ob({
        encapsulation: 0,
        styles: [
          [
            '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{margin-bottom:5px}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{text-align:right}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{width:8px}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{text-align:center}mat-spinner[_ngcontent-%COMP%]{margin:auto}.error-state[_ngcontent-%COMP%]{text-align:center;padding:20px}.error-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:54px;font-size:48px}.error-state[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{opacity:.4}.error-state[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{font-weight:700}'
          ]
        ],
        data: {}
      });
      function _n(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'mat-spinner',
              [
                ['class', 'mat-spinner mat-progress-spinner'],
                ['mode', 'indeterminate'],
                ['role', 'progressbar']
              ],
              [
                [2, '_mat-animation-noopable', null],
                [4, 'width', 'px'],
                [4, 'height', 'px']
              ],
              null,
              null,
              hn,
              mn
            )),
            t.pb(
              1,
              49152,
              null,
              0,
              dn.d,
              [t.k, f.a, [2, A.d], [2, w.a], dn.a],
              null,
              null
            )
          ],
          null,
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ab(n, 1)._noopAnimations,
              t.Ab(n, 1).diameter,
              t.Ab(n, 1).diameter
            );
          }
        );
      }
      function Cn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['icon', 'caret-up']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              Z.b,
              Z.a
            )),
            t.pb(
              1,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            )
          ],
          function(l, n) {
            l(n, 1, 0, 'caret-up');
          },
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).renderedIconHTML);
          }
        );
      }
      function qn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['icon', 'caret-down']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              Z.b,
              Z.a
            )),
            t.pb(
              1,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            )
          ],
          function(l, n) {
            l(n, 1, 0, 'caret-down');
          },
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).renderedIconHTML);
          }
        );
      }
      function wn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              20,
              'mat-card',
              [['class', 'mat-card']],
              null,
              null,
              null,
              B.d,
              B.a
            )),
            t.pb(1, 49152, null, 0, R.a, [], null, null),
            (l()(),
            t.qb(
              2,
              0,
              null,
              0,
              4,
              'mat-card-title',
              [['class', 'mat-card-title']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(3, 16384, null, 0, R.h, [], null, null),
            (l()(), t.Hb(4, null, ['', ' '])),
            (l()(),
            t.qb(
              5,
              0,
              null,
              null,
              1,
              'span',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(6, null, ['', ' ', ''])),
            (l()(),
            t.qb(
              7,
              0,
              null,
              0,
              10,
              'mat-card-subtitle',
              [['class', 'mat-card-subtitle']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(8, 16384, null, 0, R.g, [], null, null),
            (l()(),
            t.qb(9, 0, null, null, 8, 'p', [], null, null, null, null, null)),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              11,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            t.Db(12, { negative: 0 }),
            (l()(), t.fb(16777216, null, null, 1, null, Cn)),
            t.pb(
              14,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, qn)),
            t.pb(
              16,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.Hb(17, null, [' ', ' (', '%) '])),
            (l()(),
            t.qb(
              18,
              0,
              null,
              0,
              2,
              'mat-card-content',
              [['class', 'mat-card-content']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(19, 16384, null, 0, R.d, [], null, null),
            (l()(), t.Hb(20, null, ['', '']))
          ],
          function(l, n) {
            var e = l(n, 12, 0, n.parent.context.ngIf.stock.changeNegative);
            l(n, 11, 0, e),
              l(n, 14, 0, n.parent.context.ngIf.stock.changePositive),
              l(n, 16, 0, n.parent.context.ngIf.stock.changeNegative);
          },
          function(l, n) {
            l(n, 4, 0, n.parent.context.ngIf.stock.symbol),
              l(
                n,
                6,
                0,
                n.parent.context.ngIf.stock.last,
                n.parent.context.ngIf.stock.ccy
              ),
              l(
                n,
                17,
                0,
                n.parent.context.ngIf.stock.change,
                n.parent.context.ngIf.stock.changePercent
              ),
              l(n, 20, 0, n.parent.context.ngIf.stock.exchange);
          }
        );
      }
      function In(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              11,
              'p',
              [['class', 'error-state']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              1,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['icon', 'exclamation-triangle'],
                ['size', '3x']
              ],
              [[8, 'innerHTML', 1]],
              null,
              null,
              Z.b,
              Z.a
            )),
            t.pb(
              2,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'], size: [1, 'size'] },
              null
            ),
            (l()(),
            t.qb(3, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            t.qb(4, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            t.qb(
              5,
              0,
              null,
              null,
              6,
              'span',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(6, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              8,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'symbol']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(9, null, ['', ''])),
            (l()(), t.Hb(10, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          function(l, n) {
            l(n, 2, 0, 'exclamation-triangle', '3x');
          },
          function(l, n) {
            l(n, 1, 0, t.Ab(n, 2).renderedIconHTML),
              l(
                n,
                6,
                0,
                t.Ib(
                  n,
                  6,
                  0,
                  t.Ab(n, 7).transform('anms.examples.stocks.error1')
                )
              ),
              l(n, 9, 0, n.parent.context.ngIf.symbol),
              l(
                n,
                10,
                0,
                t.Ib(
                  n,
                  10,
                  0,
                  t.Ab(n, 11).transform('anms.examples.stocks.error2')
                )
              );
          }
        );
      }
      function jn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              34,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              24,
              'div',
              [['class', 'col-md-6 col-lg-3']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              19,
              'form',
              [['autocomplete', 'false'], ['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'submit'], [null, 'reset']],
              function(l, n, e) {
                var a = !0;
                return (
                  'submit' === n && (a = !1 !== t.Ab(l, 4).onSubmit(e) && a),
                  'reset' === n && (a = !1 !== t.Ab(l, 4).onReset() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(3, 16384, null, 0, H.x, [], null, null),
            t.pb(4, 4210688, null, 0, H.p, [[8, null], [8, null]], null, null),
            t.Eb(2048, null, H.c, null, [H.p]),
            t.pb(6, 16384, null, 0, H.o, [[4, H.c]], null, null),
            (l()(),
            t.qb(
              7,
              0,
              null,
              null,
              14,
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
              gn.b,
              gn.a
            )),
            t.pb(
              8,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 1, { _controlNonStatic: 0 }),
            t.Fb(335544320, 2, { _controlStatic: 0 }),
            t.Fb(603979776, 3, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 4, { _labelChildStatic: 0 }),
            t.Fb(603979776, 5, { _placeholderChild: 0 }),
            t.Fb(603979776, 6, { _errorChildren: 1 }),
            t.Fb(603979776, 7, { _hintChildren: 1 }),
            t.Fb(603979776, 8, { _prefixChildren: 1 }),
            t.Fb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              18,
              0,
              null,
              1,
              3,
              'input',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['matInput', '']
              ],
              [
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'keyup'],
                [null, 'blur'],
                [null, 'focus'],
                [null, 'input']
              ],
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 19)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 19)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 19)._onInput() && a),
                  'keyup' === n &&
                    (a = !1 !== i.onSymbolChange(e.target.value) && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(
              19,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [8, null],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'], value: [1, 'value'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[1, 4], [2, 4]], E.d, null, [An.b]),
            (l()(),
            t.qb(22, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(),
            t.Hb(23, null, [
              ' ',
              ' GOOGL, FB, AAPL, NVDA, AMZN, TWTR, SNAP, TSLA... '
            ])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(25, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            t.qb(
              26,
              0,
              null,
              null,
              8,
              'div',
              [['class', 'col-md-6 col-lg-4 offset-lg-1']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 1, null, _n)),
            t.pb(
              28,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, wn)),
            t.pb(
              30,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, In)),
            t.pb(
              32,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(33, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            t.qb(34, 0, null, null, 0, 'br', [], null, null, null, null, null))
          ],
          function(l, n) {
            l(
              n,
              19,
              0,
              t.Ib(
                n,
                19,
                0,
                t.Ab(n, 20).transform('anms.examples.stocks.symbol')
              ),
              n.context.ngIf.symbol
            ),
              l(n, 28, 0, n.context.ngIf.loading),
              l(n, 30, 0, n.context.ngIf.stock),
              l(n, 32, 0, n.context.ngIf.error);
          },
          function(l, n) {
            l(
              n,
              2,
              0,
              t.Ab(n, 6).ngClassUntouched,
              t.Ab(n, 6).ngClassTouched,
              t.Ab(n, 6).ngClassPristine,
              t.Ab(n, 6).ngClassDirty,
              t.Ab(n, 6).ngClassValid,
              t.Ab(n, 6).ngClassInvalid,
              t.Ab(n, 6).ngClassPending
            ),
              l(n, 7, 1, [
                'standard' == t.Ab(n, 8).appearance,
                'fill' == t.Ab(n, 8).appearance,
                'outline' == t.Ab(n, 8).appearance,
                'legacy' == t.Ab(n, 8).appearance,
                t.Ab(n, 8)._control.errorState,
                t.Ab(n, 8)._canLabelFloat,
                t.Ab(n, 8)._shouldLabelFloat(),
                t.Ab(n, 8)._hasFloatingLabel(),
                t.Ab(n, 8)._hideControlPlaceholder(),
                t.Ab(n, 8)._control.disabled,
                t.Ab(n, 8)._control.autofilled,
                t.Ab(n, 8)._control.focused,
                'accent' == t.Ab(n, 8).color,
                'warn' == t.Ab(n, 8).color,
                t.Ab(n, 8)._shouldForward('untouched'),
                t.Ab(n, 8)._shouldForward('touched'),
                t.Ab(n, 8)._shouldForward('pristine'),
                t.Ab(n, 8)._shouldForward('dirty'),
                t.Ab(n, 8)._shouldForward('valid'),
                t.Ab(n, 8)._shouldForward('invalid'),
                t.Ab(n, 8)._shouldForward('pending'),
                !t.Ab(n, 8)._animationsEnabled
              ]),
              l(
                n,
                18,
                0,
                t.Ab(n, 19)._isServer,
                t.Ab(n, 19).id,
                t.Ab(n, 19).placeholder,
                t.Ab(n, 19).disabled,
                t.Ab(n, 19).required,
                (t.Ab(n, 19).readonly && !t.Ab(n, 19)._isNativeSelect) || null,
                t.Ab(n, 19)._ariaDescribedby || null,
                t.Ab(n, 19).errorState,
                t.Ab(n, 19).required.toString()
              ),
              l(
                n,
                23,
                0,
                t.Ib(
                  n,
                  23,
                  0,
                  t.Ab(n, 24).transform('anms.examples.stocks.description')
                )
              );
          }
        );
      }
      function On(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              39,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'col-md-12']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              3,
              0,
              null,
              null,
              3,
              'h1',
              [['class', 'main-heading'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(4, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(), t.Hb(5, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              7,
              0,
              null,
              null,
              32,
              'div',
              [['class', 'row'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              9,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(10, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(), t.fb(16777216, null, null, 2, null, jn)),
            t.pb(
              12,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            (l()(),
            t.qb(
              14,
              0,
              null,
              null,
              25,
              'div',
              [['class', 'col-md-12 col-lg-4']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              16,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(17, 0, null, null, 10, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(18, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              20,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['HTTP'])),
            (l()(), t.Hb(22, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              24,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['@ngrx/effects'])),
            (l()(), t.Hb(26, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(28, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(29, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(31, 0, null, null, 5, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(32, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              34,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['.switchMap'])),
            (l()(), t.Hb(-1, null, ['. '])),
            (l()(),
            t.qb(37, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(38, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          function(l, n) {
            var e = n.component;
            l(n, 4, 0),
              l(n, 9, 0, 'row', e.routeAnimationsElements),
              l(n, 10, 0),
              l(n, 12, 0, t.Ib(n, 12, 0, t.Ab(n, 13).transform(e.stocks$))),
              l(n, 16, 0, 'col-md-12 col-lg-4', e.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              t.Ib(n, 5, 0, t.Ab(n, 6).transform('anms.examples.stocks.title'))
            ),
              l(
                n,
                18,
                0,
                t.Ib(
                  n,
                  18,
                  0,
                  t.Ab(n, 19).transform('anms.examples.stocks.text1')
                )
              ),
              l(
                n,
                22,
                0,
                t.Ib(
                  n,
                  22,
                  0,
                  t.Ab(n, 23).transform('anms.examples.stocks.text2')
                )
              ),
              l(
                n,
                26,
                0,
                t.Ib(
                  n,
                  26,
                  0,
                  t.Ab(n, 27).transform('anms.examples.stocks.text3')
                )
              ),
              l(
                n,
                29,
                0,
                t.Ib(
                  n,
                  29,
                  0,
                  t.Ab(n, 30).transform('anms.examples.stocks.text4')
                )
              ),
              l(
                n,
                32,
                0,
                t.Ib(
                  n,
                  32,
                  0,
                  t.Ab(n, 33).transform('anms.examples.stocks.text5')
                )
              ),
              l(
                n,
                38,
                0,
                t.Ib(
                  n,
                  38,
                  0,
                  t.Ab(n, 39).transform('anms.examples.stocks.text6')
                )
              );
          }
        );
      }
      function Fn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-stock-market',
              [],
              null,
              null,
              null,
              On,
              yn
            )),
            t.pb(1, 114688, null, 0, vn, [P.o], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Sn = t.mb('anms-stock-market', vn, Fn, {}, {}, []);
      class En {
        constructor() {}
        ngOnInit() {}
      }
      var Hn = t.ob({
        encapsulation: 0,
        styles: [['div[_ngcontent-%COMP%]{border:1px solid;padding:20px}']],
        data: {}
      });
      function Pn(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              10,
              'div',
              [['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(1, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(2, 0, null, null, 5, 'h1', [], null, null, null, null, null)),
            (l()(), t.Hb(3, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(5, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(), t.Hb(6, null, ['', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(8, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Hb(9, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          function(l, n) {
            l(
              n,
              3,
              0,
              t.Ib(
                n,
                3,
                0,
                t.Ab(n, 4).transform('anms.examples.theming.child.title')
              )
            ),
              l(
                n,
                6,
                0,
                t.Ib(
                  n,
                  6,
                  0,
                  t.Ab(n, 7).transform('anms.examples.theming.child.subtitle')
                )
              ),
              l(
                n,
                9,
                0,
                t.Ib(
                  n,
                  9,
                  0,
                  t
                    .Ab(n, 10)
                    .transform('anms.examples.theming.child.description')
                )
              );
          }
        );
      }
      class Ln {
        constructor() {
          (this.themeSrc = e('pQ4S')), (this.routeAnimationsElements = L.d);
        }
        ngOnInit() {}
      }
      var Mn = t.ob({
        encapsulation: 0,
        styles: [
          [
            '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}pre[_ngcontent-%COMP%]{margin:0}.example[_ngcontent-%COMP%]{border:1px solid;padding:20px;margin:0 0 20px}'
          ]
        ],
        data: {}
      });
      function zn(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              56,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'col-12']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              3,
              0,
              null,
              null,
              3,
              'h1',
              [['class', 'main-heading'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(4, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(), t.Hb(5, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              7,
              0,
              null,
              null,
              49,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              8,
              0,
              null,
              null,
              38,
              'div',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              10,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(
              11,
              0,
              null,
              null,
              20,
              'p',
              [['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(12, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(), t.Hb(13, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              15,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['stylesUrls'])),
            (l()(), t.Hb(17, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              19,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['@Component'])),
            (l()(), t.Hb(21, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              23,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['styles.scss'])),
            (l()(), t.Hb(25, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              27,
              0,
              null,
              null,
              2,
              'strong',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(28, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.Hb(30, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              32,
              0,
              null,
              null,
              12,
              'p',
              [['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(33, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(), t.Hb(34, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              36,
              0,
              null,
              null,
              2,
              'strong',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(37, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.Hb(39, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              41,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['> (child selectors)'])),
            (l()(), t.Hb(43, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              45,
              0,
              null,
              null,
              1,
              'pre',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(46, null, ['', '\n      '])),
            (l()(),
            t.qb(
              47,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'col-md-6'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              49,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(50, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(
              51,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'example']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(52, 0, null, null, 2, 'h1', [], null, null, null, null, null)),
            (l()(), t.Hb(53, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              55,
              0,
              null,
              null,
              1,
              'anms-child',
              [],
              null,
              null,
              null,
              Pn,
              Hn
            )),
            t.pb(56, 114688, null, 0, En, [], null, null)
          ],
          function(l, n) {
            var e = n.component;
            l(n, 4, 0),
              l(n, 10, 0, 'col-md-6', e.routeAnimationsElements),
              l(n, 12, 0),
              l(n, 33, 0),
              l(n, 49, 0, 'col-md-6', e.routeAnimationsElements),
              l(n, 50, 0),
              l(n, 56, 0);
          },
          function(l, n) {
            var e = n.component;
            l(
              n,
              5,
              0,
              t.Ib(
                n,
                5,
                0,
                t.Ab(n, 6).transform('anms.examples.theming.parent.title')
              )
            ),
              l(
                n,
                13,
                0,
                t.Ib(
                  n,
                  13,
                  0,
                  t.Ab(n, 14).transform('anms.examples.theming.parent.text1')
                )
              ),
              l(
                n,
                17,
                0,
                t.Ib(
                  n,
                  17,
                  0,
                  t.Ab(n, 18).transform('anms.examples.theming.parent.text2')
                )
              ),
              l(
                n,
                21,
                0,
                t.Ib(
                  n,
                  21,
                  0,
                  t.Ab(n, 22).transform('anms.examples.theming.parent.text3')
                )
              ),
              l(
                n,
                25,
                0,
                t.Ib(
                  n,
                  25,
                  0,
                  t.Ab(n, 26).transform('anms.examples.theming.parent.text4')
                )
              ),
              l(
                n,
                28,
                0,
                t.Ib(
                  n,
                  28,
                  0,
                  t.Ab(n, 29).transform('anms.examples.theming.parent.text5')
                )
              ),
              l(
                n,
                30,
                0,
                t.Ib(
                  n,
                  30,
                  0,
                  t.Ab(n, 31).transform('anms.examples.theming.parent.text6')
                )
              ),
              l(
                n,
                34,
                0,
                t.Ib(
                  n,
                  34,
                  0,
                  t.Ab(n, 35).transform('anms.examples.theming.parent.text7')
                )
              ),
              l(
                n,
                37,
                0,
                t.Ib(
                  n,
                  37,
                  0,
                  t.Ab(n, 38).transform('anms.examples.theming.parent.text8')
                )
              ),
              l(
                n,
                39,
                0,
                t.Ib(
                  n,
                  39,
                  0,
                  t.Ab(n, 40).transform('anms.examples.theming.parent.text9')
                )
              ),
              l(
                n,
                43,
                0,
                t.Ib(
                  n,
                  43,
                  0,
                  t.Ab(n, 44).transform('anms.examples.theming.parent.text10')
                )
              ),
              l(n, 46, 0, e.themeSrc),
              l(
                n,
                53,
                0,
                t.Ib(
                  n,
                  53,
                  0,
                  t
                    .Ab(n, 54)
                    .transform('anms.examples.theming.parent.description')
                )
              );
          }
        );
      }
      function Tn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-parent',
              [],
              null,
              null,
              null,
              zn,
              Mn
            )),
            t.pb(1, 114688, null, 0, Ln, [], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Dn = t.mb('anms-parent', Ln, Tn, {}, {}, []),
        Nn = e('dFIu'),
        Jn = t.ob({
          encapsulation: 2,
          styles: [
            '.mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}'
          ],
          data: {}
        });
      function $n(l) {
        return t.Jb(2, [], null, null);
      }
      const { selectEntities: Bn, selectAll: Rn } = Tl.getSelectors(),
        Un = Object(P.z)(Gl, l => l.books),
        Vn = Object(P.z)(Un, Rn),
        Gn = Object(P.z)(Un, Bn),
        Xn = Object(P.z)(Gn, L.i, (l, n) => n && l[n.state.params.id]);
      class Kn {
        constructor(l, n, e) {
          (this.store = l),
            (this.fb = n),
            (this.router = e),
            (this.routeAnimationsElements = L.d),
            (this.bookFormGroup = this.fb.group(Kn.createBook())),
            (this.books$ = this.store.pipe(Object(P.C)(Vn))),
            (this.selectedBook$ = this.store.pipe(Object(P.C)(Xn)));
        }
        static createBook() {
          return {
            id: Object(kl.v4)(),
            title: '',
            author: '',
            description: ''
          };
        }
        select(l) {
          (this.isEditing = !1), this.router.navigate(['examples/crud', l.id]);
        }
        deselect() {
          (this.isEditing = !1), this.router.navigate(['examples/crud']);
        }
        edit(l) {
          (this.isEditing = !0), this.bookFormGroup.setValue(l);
        }
        addNew(l) {
          l.resetForm(),
            this.bookFormGroup.reset(),
            this.bookFormGroup.setValue(Kn.createBook()),
            (this.isEditing = !0);
        }
        cancelEditing() {
          this.isEditing = !1;
        }
        delete(l) {
          this.store.dispatch(zl({ id: l.id })),
            (this.isEditing = !1),
            this.router.navigate(['examples/crud']);
        }
        save() {
          if (this.bookFormGroup.valid) {
            const l = this.bookFormGroup.value;
            this.store.dispatch(Ml({ book: l })),
              (this.isEditing = !1),
              this.router.navigate(['examples/crud', l.id]);
          }
        }
      }
      var Yn = t.ob({
        encapsulation: 0,
        styles: [
          [
            'h1[_ngcontent-%COMP%]{margin:0 0 20px;text-transform:uppercase}mat-card[_ngcontent-%COMP%]{margin:0 0 10px;cursor:pointer}.mat-fab[_ngcontent-%COMP%]   .fa-icon[_ngcontent-%COMP%]{position:relative;top:4px}.add[_ngcontent-%COMP%]{margin:20px auto 0;display:block}.col-md-6[_ngcontent-%COMP%]{margin-bottom:20px}'
          ]
        ],
        data: {}
      });
      function Wn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              7,
              'mat-card',
              [['class', 'mat-card']],
              null,
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n &&
                    (t = !1 !== l.component.select(l.context.$implicit) && t),
                  t
                );
              },
              B.d,
              B.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              2,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            t.pb(3, 49152, null, 0, R.a, [], null, null),
            (l()(),
            t.qb(4, 0, null, 0, 1, 'h3', [], null, null, null, null, null)),
            (l()(), t.Hb(5, null, ['', ''])),
            (l()(),
            t.qb(6, 0, null, 0, 1, 'small', [], null, null, null, null, null)),
            (l()(), t.Hb(7, null, ['', '']))
          ],
          function(l, n) {
            l(n, 2, 0, n.component.routeAnimationsElements);
          },
          function(l, n) {
            l(n, 5, 0, n.context.$implicit.title),
              l(n, 7, 0, n.context.$implicit.author);
          }
        );
      }
      function Qn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(0, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(1, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              1,
              0,
              t.Ib(n, 1, 0, t.Ab(n, 2).transform('anms.examples.crud.empty'))
            );
          }
        );
      }
      function Zn(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              5,
              'button',
              [
                ['class', 'add'],
                ['color', 'primary'],
                ['mat-fab', ''],
                ['type', 'button']
              ],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var a = !0;
                return (
                  'click' === n &&
                    (a = !1 !== l.component.addNew(t.Ab(l.parent, 31)) && a),
                  a
                );
              },
              K.d,
              K.b
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              2,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(
              3,
              180224,
              null,
              0,
              Y.b,
              [t.k, g.h, [2, w.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.qb(
              4,
              0,
              null,
              0,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['icon', 'plus']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              Z.b,
              Z.a
            )),
            t.pb(
              5,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            )
          ],
          function(l, n) {
            l(n, 2, 0, 'add', n.component.routeAnimationsElements),
              l(n, 3, 0, 'primary'),
              l(n, 5, 0, 'plus');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ab(n, 3).disabled || null,
              'NoopAnimations' === t.Ab(n, 3)._animationMode
            ),
              l(n, 4, 0, t.Ab(n, 5).renderedIconHTML);
          }
        );
      }
      function le(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              5,
              'button',
              [['color', 'accent'], ['mat-icon-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              null,
              null,
              K.d,
              K.b
            )),
            t.pb(
              1,
              180224,
              null,
              0,
              Y.b,
              [t.k, g.h, [2, w.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.qb(
              2,
              16777216,
              null,
              0,
              3,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['icon', 'edit'],
                ['matTooltipPosition', 'above']
              ],
              [[8, 'innerHTML', 1]],
              [
                [null, 'click'],
                [null, 'longpress'],
                [null, 'keydown'],
                [null, 'touchend']
              ],
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'longpress' === n && (a = !1 !== t.Ab(l, 3).show() && a),
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 3)._handleKeydown(e) && a),
                  'touchend' === n &&
                    (a = !1 !== t.Ab(l, 3)._handleTouchend() && a),
                  'click' === n &&
                    (a = !1 !== i.edit(l.parent.context.ngIf) && a),
                  a
                );
              },
              Z.b,
              Z.a
            )),
            t.pb(
              3,
              212992,
              null,
              0,
              gl.d,
              [
                Q.c,
                t.k,
                I.b,
                t.O,
                t.y,
                f.a,
                g.c,
                g.h,
                gl.b,
                [2, _.b],
                [2, gl.a],
                [2, C.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.pb(
              5,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            )
          ],
          function(l, n) {
            l(n, 1, 0, 'accent'),
              l(
                n,
                3,
                0,
                'above',
                t.Ib(
                  n,
                  3,
                  1,
                  t.Ab(n, 4).transform('anms.examples.crud.tooltip.edit')
                )
              ),
              l(n, 5, 0, 'edit');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ab(n, 1).disabled || null,
              'NoopAnimations' === t.Ab(n, 1)._animationMode
            ),
              l(n, 2, 0, t.Ab(n, 5).renderedIconHTML);
          }
        );
      }
      function ne(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              14,
              'span',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 1, null, le)),
            t.pb(
              2,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              3,
              0,
              null,
              null,
              5,
              'button',
              [['color', 'warn'], ['mat-icon-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n &&
                    (t = !1 !== l.component.delete(l.context.ngIf) && t),
                  t
                );
              },
              K.d,
              K.b
            )),
            t.pb(
              4,
              180224,
              null,
              0,
              Y.b,
              [t.k, g.h, [2, w.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            t.qb(
              5,
              16777216,
              null,
              0,
              3,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['icon', 'trash'],
                ['matTooltipPosition', 'above']
              ],
              [[8, 'innerHTML', 1]],
              [[null, 'longpress'], [null, 'keydown'], [null, 'touchend']],
              function(l, n, e) {
                var a = !0;
                return (
                  'longpress' === n && (a = !1 !== t.Ab(l, 6).show() && a),
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 6)._handleKeydown(e) && a),
                  'touchend' === n &&
                    (a = !1 !== t.Ab(l, 6)._handleTouchend() && a),
                  a
                );
              },
              Z.b,
              Z.a
            )),
            t.pb(
              6,
              212992,
              null,
              0,
              gl.d,
              [
                Q.c,
                t.k,
                I.b,
                t.O,
                t.y,
                f.a,
                g.c,
                g.h,
                gl.b,
                [2, _.b],
                [2, gl.a],
                [2, C.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.pb(
              8,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            t.qb(
              9,
              0,
              null,
              null,
              5,
              'button',
              [['mat-icon-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n && (t = !1 !== l.component.deselect() && t), t
                );
              },
              K.d,
              K.b
            )),
            t.pb(10, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            (l()(),
            t.qb(
              11,
              16777216,
              null,
              0,
              3,
              'fa-icon',
              [
                ['class', 'ng-fa-icon'],
                ['icon', 'times'],
                ['matTooltipPosition', 'above']
              ],
              [[8, 'innerHTML', 1]],
              [[null, 'longpress'], [null, 'keydown'], [null, 'touchend']],
              function(l, n, e) {
                var a = !0;
                return (
                  'longpress' === n && (a = !1 !== t.Ab(l, 12).show() && a),
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 12)._handleKeydown(e) && a),
                  'touchend' === n &&
                    (a = !1 !== t.Ab(l, 12)._handleTouchend() && a),
                  a
                );
              },
              Z.b,
              Z.a
            )),
            t.pb(
              12,
              212992,
              null,
              0,
              gl.d,
              [
                Q.c,
                t.k,
                I.b,
                t.O,
                t.y,
                f.a,
                g.c,
                g.h,
                gl.b,
                [2, _.b],
                [2, gl.a],
                [2, C.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.pb(
              14,
              573440,
              null,
              0,
              ll.a,
              [C.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            )
          ],
          function(l, n) {
            l(n, 2, 0, !n.component.isEditing),
              l(n, 4, 0, 'warn'),
              l(
                n,
                6,
                0,
                'above',
                t.Ib(
                  n,
                  6,
                  1,
                  t.Ab(n, 7).transform('anms.examples.crud.tooltip.delete')
                )
              ),
              l(n, 8, 0, 'trash'),
              l(
                n,
                12,
                0,
                'above',
                t.Ib(
                  n,
                  12,
                  1,
                  t.Ab(n, 13).transform('anms.examples.crud.tooltip.deselect')
                )
              ),
              l(n, 14, 0, 'times');
          },
          function(l, n) {
            l(
              n,
              3,
              0,
              t.Ab(n, 4).disabled || null,
              'NoopAnimations' === t.Ab(n, 4)._animationMode
            ),
              l(n, 5, 0, t.Ab(n, 8).renderedIconHTML),
              l(
                n,
                9,
                0,
                t.Ab(n, 10).disabled || null,
                'NoopAnimations' === t.Ab(n, 10)._animationMode
              ),
              l(n, 11, 0, t.Ab(n, 14).renderedIconHTML);
          }
        );
      }
      function ee(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[6, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.crud.placeholder1')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.crud.error'))
              );
          }
        );
      }
      function te(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[15, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.crud.placeholder2')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.crud.error'))
              );
          }
        );
      }
      function ae(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[24, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.crud.placeholder1')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.crud.error'))
              );
          }
        );
      }
      function ie(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              10,
              'div',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              2,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(3, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (l()(), t.Hb(4, null, ['', ''])),
            (l()(),
            t.qb(
              5,
              0,
              null,
              null,
              1,
              'mat-divider',
              [['class', 'mat-divider'], ['role', 'separator']],
              [
                [1, 'aria-orientation', 0],
                [2, 'mat-divider-vertical', null],
                [2, 'mat-divider-horizontal', null],
                [2, 'mat-divider-inset', null]
              ],
              null,
              null,
              $n,
              Jn
            )),
            t.pb(6, 49152, null, 0, Nn.a, [], null, null),
            (l()(),
            t.qb(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(8, null, ['', ''])),
            (l()(),
            t.qb(9, 0, null, null, 1, 'i', [], null, null, null, null, null)),
            (l()(), t.Hb(10, null, ['', '']))
          ],
          function(l, n) {
            l(n, 2, 0, n.component.routeAnimationsElements);
          },
          function(l, n) {
            l(n, 4, 0, n.context.ngIf.title),
              l(
                n,
                5,
                0,
                t.Ab(n, 6).vertical ? 'vertical' : 'horizontal',
                t.Ab(n, 6).vertical,
                !t.Ab(n, 6).vertical,
                t.Ab(n, 6).inset
              ),
              l(n, 8, 0, n.context.ngIf.description),
              l(n, 10, 0, n.context.ngIf.author);
          }
        );
      }
      function ue(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(0, 0, null, null, 7, 'p', [], null, null, null, null, null)),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              2,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            (l()(), t.Hb(3, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              5,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['@ngrx/entity'])),
            (l()(), t.Hb(-1, null, ['. ']))
          ],
          function(l, n) {
            l(n, 2, 0, n.component.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              3,
              0,
              t.Ib(n, 3, 0, t.Ab(n, 4).transform('anms.examples.crud.text'))
            );
          }
        );
      }
      function oe(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 2, null, ie)),
            t.pb(
              2,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            (l()(), t.fb(0, [['noSelectedBookTmpl', 2]], null, 0, null, ue))
          ],
          function(l, n) {
            var e = n.component;
            l(
              n,
              2,
              0,
              t.Ib(n, 2, 0, t.Ab(n, 3).transform(e.selectedBook$)),
              t.Ab(n, 4)
            );
          },
          null
        );
      }
      function re(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              118,
              'div',
              [['class', 'container'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(1, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(2, 0, null, null, 2, 'h1', [], null, null, null, null, null)),
            (l()(), t.Hb(3, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              5,
              0,
              null,
              null,
              113,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              6,
              0,
              null,
              null,
              11,
              'div',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(7, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Hb(8, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.fb(16777216, null, null, 2, null, Wn)),
            t.pb(
              11,
              278528,
              null,
              0,
              A.j,
              [t.O, t.L, t.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            (l()(), t.fb(16777216, null, null, 2, null, Qn)),
            t.pb(
              14,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            (l()(), t.fb(16777216, null, null, 1, null, Zn)),
            t.pb(
              17,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              18,
              0,
              null,
              null,
              100,
              'div',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              19,
              0,
              null,
              null,
              7,
              'span',
              [['class', 'd-flex justify-content-between']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(20, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Hb(21, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              23,
              0,
              null,
              null,
              3,
              'span',
              [['class', 'd-flex justify-content-end']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 2, null, ne)),
            t.pb(
              25,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            (l()(),
            t.qb(
              27,
              0,
              null,
              null,
              89,
              'form',
              [['novalidate', '']],
              [
                [4, 'display', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'submit'], [null, 'reset']],
              function(l, n, e) {
                var a = !0;
                return (
                  'submit' === n && (a = !1 !== t.Ab(l, 31).onSubmit(e) && a),
                  'reset' === n && (a = !1 !== t.Ab(l, 31).onReset() && a),
                  a
                );
              },
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              29,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            t.pb(30, 16384, null, 0, H.x, [], null, null),
            t.pb(
              31,
              540672,
              [['bookForm', 4]],
              0,
              H.g,
              [[8, null], [8, null]],
              { form: [0, 'form'] },
              null
            ),
            t.Eb(2048, null, H.c, null, [H.g]),
            t.pb(33, 16384, null, 0, H.o, [[4, H.c]], null, null),
            (l()(),
            t.qb(
              34,
              0,
              null,
              null,
              24,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              35,
              0,
              null,
              null,
              23,
              'mat-form-field',
              [['class', 'col mat-form-field']],
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
              gn.b,
              gn.a
            )),
            t.pb(
              36,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 1, { _controlNonStatic: 0 }),
            t.Fb(335544320, 2, { _controlStatic: 0 }),
            t.Fb(603979776, 3, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 4, { _labelChildStatic: 0 }),
            t.Fb(603979776, 5, { _placeholderChild: 0 }),
            t.Fb(603979776, 6, { _errorChildren: 1 }),
            t.Fb(603979776, 7, { _hintChildren: 1 }),
            t.Fb(603979776, 8, { _prefixChildren: 1 }),
            t.Fb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              46,
              0,
              null,
              1,
              10,
              'input',
              [
                ['autofocus', ''],
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'title'],
                ['matInput', ''],
                ['required', '']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 47)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 47).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 47)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 47)._compositionEnd(e.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 54)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 54)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 54)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(47, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.pb(
              48,
              16384,
              null,
              0,
              H.s,
              [],
              { required: [0, 'required'] },
              null
            ),
            t.Eb(
              1024,
              null,
              H.k,
              function(l) {
                return [l];
              },
              [H.s]
            ),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [H.d]
            ),
            t.pb(
              51,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [6, H.k], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(53, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.pb(
              54,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'], required: [1, 'required'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[1, 4], [2, 4]], E.d, null, [An.b]),
            (l()(), t.fb(16777216, null, 5, 1, null, ee)),
            t.pb(
              58,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              59,
              0,
              null,
              null,
              24,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              60,
              0,
              null,
              null,
              23,
              'mat-form-field',
              [['class', 'col mat-form-field']],
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
              gn.b,
              gn.a
            )),
            t.pb(
              61,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 10, { _controlNonStatic: 0 }),
            t.Fb(335544320, 11, { _controlStatic: 0 }),
            t.Fb(603979776, 12, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 13, { _labelChildStatic: 0 }),
            t.Fb(603979776, 14, { _placeholderChild: 0 }),
            t.Fb(603979776, 15, { _errorChildren: 1 }),
            t.Fb(603979776, 16, { _hintChildren: 1 }),
            t.Fb(603979776, 17, { _prefixChildren: 1 }),
            t.Fb(603979776, 18, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              71,
              0,
              null,
              1,
              10,
              'input',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'author'],
                ['matInput', ''],
                ['required', '']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 72)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 72).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 72)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 72)._compositionEnd(e.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 79)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 79)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 79)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(72, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.pb(
              73,
              16384,
              null,
              0,
              H.s,
              [],
              { required: [0, 'required'] },
              null
            ),
            t.Eb(
              1024,
              null,
              H.k,
              function(l) {
                return [l];
              },
              [H.s]
            ),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [H.d]
            ),
            t.pb(
              76,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [6, H.k], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(78, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.pb(
              79,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'], required: [1, 'required'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[10, 4], [11, 4]], E.d, null, [An.b]),
            (l()(), t.fb(16777216, null, 5, 1, null, te)),
            t.pb(
              83,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              84,
              0,
              null,
              null,
              22,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              85,
              0,
              null,
              null,
              21,
              'mat-form-field',
              [['class', 'col mat-form-field']],
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
              gn.b,
              gn.a
            )),
            t.pb(
              86,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 19, { _controlNonStatic: 0 }),
            t.Fb(335544320, 20, { _controlStatic: 0 }),
            t.Fb(603979776, 21, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 22, { _labelChildStatic: 0 }),
            t.Fb(603979776, 23, { _placeholderChild: 0 }),
            t.Fb(603979776, 24, { _errorChildren: 1 }),
            t.Fb(603979776, 25, { _hintChildren: 1 }),
            t.Fb(603979776, 26, { _prefixChildren: 1 }),
            t.Fb(603979776, 27, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              96,
              0,
              null,
              1,
              8,
              'textarea',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'description'],
                ['matInput', ''],
                ['rows', '5']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 97)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 97).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 97)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 97)._compositionEnd(e.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 102)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 102)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 102)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(97, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [H.d]
            ),
            t.pb(
              99,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [8, null], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(101, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.pb(
              102,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[19, 4], [20, 4]], E.d, null, [An.b]),
            (l()(), t.fb(16777216, null, 5, 1, null, ae)),
            t.pb(
              106,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              107,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              108,
              0,
              null,
              null,
              8,
              'div',
              [['class', 'col-12 d-flex justify-content-between']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              109,
              0,
              null,
              null,
              3,
              'button',
              [['color', 'primary'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.save() && t), t;
              },
              K.d,
              K.b
            )),
            t.pb(
              110,
              180224,
              null,
              0,
              Y.b,
              [t.k, g.h, [2, w.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(), t.Hb(111, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              113,
              0,
              null,
              null,
              3,
              'button',
              [['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n &&
                    (t = !1 !== l.component.cancelEditing() && t),
                  t
                );
              },
              K.d,
              K.b
            )),
            t.pb(114, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            (l()(), t.Hb(115, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.fb(16777216, null, null, 1, null, oe)),
            t.pb(
              118,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            )
          ],
          function(l, n) {
            var e,
              a = n.component;
            l(n, 1, 0),
              l(n, 11, 0, t.Ib(n, 11, 0, t.Ab(n, 12).transform(a.books$))),
              l(
                n,
                14,
                0,
                0 ===
                  (null == (e = t.Ib(n, 14, 0, t.Ab(n, 15).transform(a.books$)))
                    ? null
                    : e.length)
              ),
              l(n, 17, 0, !a.isEditing),
              l(
                n,
                25,
                0,
                t.Ib(n, 25, 0, t.Ab(n, 26).transform(a.selectedBook$))
              ),
              l(n, 29, 0, a.routeAnimationsElements),
              l(n, 31, 0, a.bookFormGroup),
              l(n, 48, 0, ''),
              l(n, 51, 0, 'title'),
              l(
                n,
                54,
                0,
                t.sb(
                  1,
                  '',
                  t.Ib(
                    n,
                    54,
                    0,
                    t.Ab(n, 55).transform('anms.examples.crud.placeholder1')
                  ),
                  ''
                ),
                ''
              ),
              l(n, 58, 0, a.bookFormGroup.get('title').invalid),
              l(n, 73, 0, ''),
              l(n, 76, 0, 'author'),
              l(
                n,
                79,
                0,
                t.sb(
                  1,
                  '',
                  t.Ib(
                    n,
                    79,
                    0,
                    t.Ab(n, 80).transform('anms.examples.crud.placeholder2')
                  ),
                  ''
                ),
                ''
              ),
              l(n, 83, 0, a.bookFormGroup.get('author').hasError('required')),
              l(n, 99, 0, 'description'),
              l(
                n,
                102,
                0,
                t.sb(
                  1,
                  '',
                  t.Ib(
                    n,
                    102,
                    0,
                    t.Ab(n, 103).transform('anms.examples.crud.placeholder3')
                  ),
                  ''
                )
              ),
              l(n, 106, 0, a.bookFormGroup.get('description').invalid),
              l(n, 110, 0, 'primary'),
              l(n, 118, 0, !a.isEditing);
          },
          function(l, n) {
            var e = n.component;
            l(
              n,
              3,
              0,
              t.Ib(n, 3, 0, t.Ab(n, 4).transform('anms.examples.crud.title'))
            ),
              l(
                n,
                8,
                0,
                t.Ib(
                  n,
                  8,
                  0,
                  t.Ab(n, 9).transform('anms.examples.crud.subtitle1')
                )
              ),
              l(
                n,
                21,
                0,
                t.Ib(
                  n,
                  21,
                  0,
                  t.Ab(n, 22).transform('anms.examples.crud.subtitle2')
                )
              ),
              l(
                n,
                27,
                0,
                e.isEditing ? 'block' : 'none',
                t.Ab(n, 33).ngClassUntouched,
                t.Ab(n, 33).ngClassTouched,
                t.Ab(n, 33).ngClassPristine,
                t.Ab(n, 33).ngClassDirty,
                t.Ab(n, 33).ngClassValid,
                t.Ab(n, 33).ngClassInvalid,
                t.Ab(n, 33).ngClassPending
              ),
              l(n, 35, 1, [
                'standard' == t.Ab(n, 36).appearance,
                'fill' == t.Ab(n, 36).appearance,
                'outline' == t.Ab(n, 36).appearance,
                'legacy' == t.Ab(n, 36).appearance,
                t.Ab(n, 36)._control.errorState,
                t.Ab(n, 36)._canLabelFloat,
                t.Ab(n, 36)._shouldLabelFloat(),
                t.Ab(n, 36)._hasFloatingLabel(),
                t.Ab(n, 36)._hideControlPlaceholder(),
                t.Ab(n, 36)._control.disabled,
                t.Ab(n, 36)._control.autofilled,
                t.Ab(n, 36)._control.focused,
                'accent' == t.Ab(n, 36).color,
                'warn' == t.Ab(n, 36).color,
                t.Ab(n, 36)._shouldForward('untouched'),
                t.Ab(n, 36)._shouldForward('touched'),
                t.Ab(n, 36)._shouldForward('pristine'),
                t.Ab(n, 36)._shouldForward('dirty'),
                t.Ab(n, 36)._shouldForward('valid'),
                t.Ab(n, 36)._shouldForward('invalid'),
                t.Ab(n, 36)._shouldForward('pending'),
                !t.Ab(n, 36)._animationsEnabled
              ]),
              l(n, 46, 1, [
                t.Ab(n, 48).required ? '' : null,
                t.Ab(n, 53).ngClassUntouched,
                t.Ab(n, 53).ngClassTouched,
                t.Ab(n, 53).ngClassPristine,
                t.Ab(n, 53).ngClassDirty,
                t.Ab(n, 53).ngClassValid,
                t.Ab(n, 53).ngClassInvalid,
                t.Ab(n, 53).ngClassPending,
                t.Ab(n, 54)._isServer,
                t.Ab(n, 54).id,
                t.Ab(n, 54).placeholder,
                t.Ab(n, 54).disabled,
                t.Ab(n, 54).required,
                (t.Ab(n, 54).readonly && !t.Ab(n, 54)._isNativeSelect) || null,
                t.Ab(n, 54)._ariaDescribedby || null,
                t.Ab(n, 54).errorState,
                t.Ab(n, 54).required.toString()
              ]),
              l(n, 60, 1, [
                'standard' == t.Ab(n, 61).appearance,
                'fill' == t.Ab(n, 61).appearance,
                'outline' == t.Ab(n, 61).appearance,
                'legacy' == t.Ab(n, 61).appearance,
                t.Ab(n, 61)._control.errorState,
                t.Ab(n, 61)._canLabelFloat,
                t.Ab(n, 61)._shouldLabelFloat(),
                t.Ab(n, 61)._hasFloatingLabel(),
                t.Ab(n, 61)._hideControlPlaceholder(),
                t.Ab(n, 61)._control.disabled,
                t.Ab(n, 61)._control.autofilled,
                t.Ab(n, 61)._control.focused,
                'accent' == t.Ab(n, 61).color,
                'warn' == t.Ab(n, 61).color,
                t.Ab(n, 61)._shouldForward('untouched'),
                t.Ab(n, 61)._shouldForward('touched'),
                t.Ab(n, 61)._shouldForward('pristine'),
                t.Ab(n, 61)._shouldForward('dirty'),
                t.Ab(n, 61)._shouldForward('valid'),
                t.Ab(n, 61)._shouldForward('invalid'),
                t.Ab(n, 61)._shouldForward('pending'),
                !t.Ab(n, 61)._animationsEnabled
              ]),
              l(n, 71, 1, [
                t.Ab(n, 73).required ? '' : null,
                t.Ab(n, 78).ngClassUntouched,
                t.Ab(n, 78).ngClassTouched,
                t.Ab(n, 78).ngClassPristine,
                t.Ab(n, 78).ngClassDirty,
                t.Ab(n, 78).ngClassValid,
                t.Ab(n, 78).ngClassInvalid,
                t.Ab(n, 78).ngClassPending,
                t.Ab(n, 79)._isServer,
                t.Ab(n, 79).id,
                t.Ab(n, 79).placeholder,
                t.Ab(n, 79).disabled,
                t.Ab(n, 79).required,
                (t.Ab(n, 79).readonly && !t.Ab(n, 79)._isNativeSelect) || null,
                t.Ab(n, 79)._ariaDescribedby || null,
                t.Ab(n, 79).errorState,
                t.Ab(n, 79).required.toString()
              ]),
              l(n, 85, 1, [
                'standard' == t.Ab(n, 86).appearance,
                'fill' == t.Ab(n, 86).appearance,
                'outline' == t.Ab(n, 86).appearance,
                'legacy' == t.Ab(n, 86).appearance,
                t.Ab(n, 86)._control.errorState,
                t.Ab(n, 86)._canLabelFloat,
                t.Ab(n, 86)._shouldLabelFloat(),
                t.Ab(n, 86)._hasFloatingLabel(),
                t.Ab(n, 86)._hideControlPlaceholder(),
                t.Ab(n, 86)._control.disabled,
                t.Ab(n, 86)._control.autofilled,
                t.Ab(n, 86)._control.focused,
                'accent' == t.Ab(n, 86).color,
                'warn' == t.Ab(n, 86).color,
                t.Ab(n, 86)._shouldForward('untouched'),
                t.Ab(n, 86)._shouldForward('touched'),
                t.Ab(n, 86)._shouldForward('pristine'),
                t.Ab(n, 86)._shouldForward('dirty'),
                t.Ab(n, 86)._shouldForward('valid'),
                t.Ab(n, 86)._shouldForward('invalid'),
                t.Ab(n, 86)._shouldForward('pending'),
                !t.Ab(n, 86)._animationsEnabled
              ]),
              l(n, 96, 1, [
                t.Ab(n, 101).ngClassUntouched,
                t.Ab(n, 101).ngClassTouched,
                t.Ab(n, 101).ngClassPristine,
                t.Ab(n, 101).ngClassDirty,
                t.Ab(n, 101).ngClassValid,
                t.Ab(n, 101).ngClassInvalid,
                t.Ab(n, 101).ngClassPending,
                t.Ab(n, 102)._isServer,
                t.Ab(n, 102).id,
                t.Ab(n, 102).placeholder,
                t.Ab(n, 102).disabled,
                t.Ab(n, 102).required,
                (t.Ab(n, 102).readonly && !t.Ab(n, 102)._isNativeSelect) ||
                  null,
                t.Ab(n, 102)._ariaDescribedby || null,
                t.Ab(n, 102).errorState,
                t.Ab(n, 102).required.toString()
              ]),
              l(
                n,
                109,
                0,
                t.Ab(n, 110).disabled || null,
                'NoopAnimations' === t.Ab(n, 110)._animationMode
              ),
              l(
                n,
                111,
                0,
                t.Ib(
                  n,
                  111,
                  0,
                  t.Ab(n, 112).transform('anms.examples.crud.save')
                )
              ),
              l(
                n,
                113,
                0,
                t.Ab(n, 114).disabled || null,
                'NoopAnimations' === t.Ab(n, 114)._animationMode
              ),
              l(
                n,
                115,
                0,
                t.Ib(
                  n,
                  115,
                  0,
                  t.Ab(n, 116).transform('anms.examples.crud.cancel')
                )
              );
          }
        );
      }
      function se(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-crud',
              [],
              null,
              null,
              null,
              re,
              Yn
            )),
            t.pb(1, 49152, null, 0, Kn, [P.o, H.e, k.p], null, null)
          ],
          null,
          null
        );
      }
      var be = t.mb('anms-crud', Kn, se, {}, {}, []),
        ce = e('jIqt'),
        de = e('YtkY');
      const me = [
        {
          id: Object(kl.v4)(),
          username: 'rockets',
          name: 'Elon',
          surname: 'Musk'
        },
        {
          id: Object(kl.v4)(),
          username: 'investing',
          name: 'Nassim',
          surname: 'Taleb'
        },
        {
          id: Object(kl.v4)(),
          username: 'philosophy',
          name: 'Yuval',
          surname: 'Harari'
        }
      ];
      class pe {
        constructor(l) {
          (this.modelFactory = l),
            (this.model = this.modelFactory.create([...me])),
            (this.users$ = this.model.data$);
        }
        addUser(l) {
          const n = this.model.get();
          n.push(Object.assign({}, l, { id: Object(kl.v4)() })),
            this.model.set(n);
        }
        updateUser(l) {
          const n = this.model.get(),
            e = n.findIndex(n => n.id === l.id);
          (n[e] = l), this.model.set(n);
        }
        removeUser(l) {
          const n = this.model.get(),
            e = n.findIndex(n => n.id === l);
          n.splice(e, 1), this.model.set(n);
        }
      }
      class fe {
        constructor(l, n) {
          (this.fb = l),
            (this.userService = n),
            (this.routeAnimationsElements = m.a);
        }
        ngOnInit() {
          (this.users$ = this.userService.users$),
            (this.userForm = this.fb.group({
              id: '',
              username: ['', [H.t.required, H.t.minLength(5)]],
              name: ['', [H.t.required, H.t.minLength(5)]],
              surname: ['', [H.t.required, H.t.minLength(5)]]
            })),
            (this.isEdit$ = this.userForm.get('id').valueChanges.pipe(
              Object(ce.a)(''),
              Object(de.a)(l => ({ value: (l || '').length > 0 }))
            ));
        }
        removeUser(l) {
          this.userService.removeUser(l);
        }
        editUser(l) {
          this.userForm.patchValue(Object.assign({}, l));
        }
        onSubmit(l) {
          if (this.userForm.valid) {
            const n = this.userForm.getRawValue();
            n.id && n.id.length
              ? this.userService.updateUser(n)
              : this.userService.addUser(Object.assign({}, n)),
              l.resetForm(),
              this.userForm.reset();
          }
        }
        trackByUserId(l, n) {
          return n.id;
        }
      }
      var he = t.ob({
        encapsulation: 0,
        styles: [
          [
            '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}mat-card[_ngcontent-%COMP%]{margin:0 0 20px;display:flex}mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{flex:1 0 auto}form[_ngcontent-%COMP%]{margin:20px 0}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:20px 10px 0 0}'
          ]
        ],
        data: {}
      });
      function ge(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              21,
              'mat-card',
              [['class', 'mat-card']],
              null,
              null,
              null,
              B.d,
              B.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              2,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            t.pb(3, 49152, null, 0, R.a, [], null, null),
            (l()(),
            t.qb(
              4,
              0,
              null,
              0,
              9,
              'mat-card-header',
              [['class', 'mat-card-header']],
              null,
              null,
              null,
              B.c,
              B.b
            )),
            t.pb(5, 49152, null, 0, R.e, [], null, null),
            (l()(),
            t.qb(
              6,
              0,
              null,
              0,
              1,
              'img',
              [['class', 'mat-card-avatar'], ['mat-card-avatar', '']],
              [[8, 'src', 4]],
              null,
              null,
              null,
              null
            )),
            t.pb(7, 16384, null, 0, R.c, [], null, null),
            (l()(),
            t.qb(
              8,
              0,
              null,
              1,
              2,
              'mat-card-title',
              [['class', 'mat-card-title']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(9, 16384, null, 0, R.h, [], null, null),
            (l()(), t.Hb(10, null, ['', ' ', ''])),
            (l()(),
            t.qb(
              11,
              0,
              null,
              1,
              2,
              'mat-card-subtitle',
              [['class', 'mat-card-subtitle']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(12, 16384, null, 0, R.g, [], null, null),
            (l()(), t.Hb(13, null, ['@', ''])),
            (l()(),
            t.qb(
              14,
              0,
              null,
              0,
              7,
              'mat-card-actions',
              [['class', 'mat-card-actions']],
              [[2, 'mat-card-actions-align-end', null]],
              null,
              null,
              null,
              null
            )),
            t.pb(15, 16384, null, 0, R.b, [], null, null),
            (l()(),
            t.qb(
              16,
              0,
              null,
              null,
              2,
              'button',
              [['mat-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n &&
                    (t = !1 !== l.component.editUser(l.context.$implicit) && t),
                  t
                );
              },
              K.d,
              K.b
            )),
            t.pb(17, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            (l()(), t.Hb(-1, 0, ['Edit'])),
            (l()(),
            t.qb(
              19,
              0,
              null,
              null,
              2,
              'button',
              [['mat-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n &&
                    (t =
                      !1 !== l.component.removeUser(l.context.$implicit.id) &&
                      t),
                  t
                );
              },
              K.d,
              K.b
            )),
            t.pb(20, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            (l()(), t.Hb(-1, 0, ['Delete']))
          ],
          function(l, n) {
            l(n, 2, 0, n.component.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              6,
              0,
              t.sb(
                1,
                'https://source.unsplash.com/200x200/?',
                n.context.$implicit.username,
                ''
              )
            ),
              l(
                n,
                10,
                0,
                n.context.$implicit.name,
                n.context.$implicit.surname
              ),
              l(n, 13, 0, n.context.$implicit.username),
              l(n, 14, 0, 'end' === t.Ab(n, 15).align),
              l(
                n,
                16,
                0,
                t.Ab(n, 17).disabled || null,
                'NoopAnimations' === t.Ab(n, 17)._animationMode
              ),
              l(
                n,
                19,
                0,
                t.Ab(n, 20).disabled || null,
                'NoopAnimations' === t.Ab(n, 20)._animationMode
              );
          }
        );
      }
      function Ae(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 1, null, ge)),
            t.pb(
              2,
              278528,
              null,
              0,
              A.j,
              [t.O, t.L, t.r],
              { ngForOf: [0, 'ngForOf'], ngForTrackBy: [1, 'ngForTrackBy'] },
              null
            ),
            (l()(), t.fb(0, null, null, 0))
          ],
          function(l, n) {
            l(n, 2, 0, n.context.ngIf, n.component.trackByUserId);
          },
          null
        );
      }
      function ke(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(0, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Hb(1, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              1,
              0,
              t.Ib(
                n,
                1,
                0,
                t
                  .Ab(n, 2)
                  .transform(
                    'anms.examples.simple-state-management.form.add.title'
                  )
              )
            );
          }
        );
      }
      function xe(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(0, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Hb(1, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              1,
              0,
              t.Ib(
                n,
                1,
                0,
                t
                  .Ab(n, 2)
                  .transform(
                    'anms.examples.simple-state-management.form.edit.title'
                  )
              )
            );
          }
        );
      }
      function ve(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[6, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' '])),
            t.Db(3, { minlength: 0 }),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            var e = n.component;
            l(n, 0, 0, t.Ab(n, 1).id);
            var a = t.Ib(
              n,
              2,
              0,
              t
                .Ab(n, 4)
                .transform(
                  'anms.examples.simple-state-management.validator.minlength',
                  l(
                    n,
                    3,
                    0,
                    e.userForm.get('username').errors.minlength.requiredLength
                  )
                )
            );
            l(n, 2, 0, a);
          }
        );
      }
      function ye(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              3,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[6, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t
                    .Ab(n, 3)
                    .transform(
                      'anms.examples.simple-state-management.validator.required'
                    )
                )
              );
          }
        );
      }
      function _e(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[15, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' '])),
            t.Db(3, { minlength: 0 }),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            var e = n.component;
            l(n, 0, 0, t.Ab(n, 1).id);
            var a = t.Ib(
              n,
              2,
              0,
              t
                .Ab(n, 4)
                .transform(
                  'anms.examples.simple-state-management.validator.minlength',
                  l(
                    n,
                    3,
                    0,
                    e.userForm.get('username').errors.minlength.requiredLength
                  )
                )
            );
            l(n, 2, 0, a);
          }
        );
      }
      function Ce(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              3,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[15, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t
                    .Ab(n, 3)
                    .transform(
                      'anms.examples.simple-state-management.validator.required'
                    )
                )
              );
          }
        );
      }
      function qe(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[24, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' '])),
            t.Db(3, { minlength: 0 }),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            var e = n.component;
            l(n, 0, 0, t.Ab(n, 1).id);
            var a = t.Ib(
              n,
              2,
              0,
              t
                .Ab(n, 4)
                .transform(
                  'anms.examples.simple-state-management.validator.minlength',
                  l(
                    n,
                    3,
                    0,
                    e.userForm.get('username').errors.minlength.requiredLength
                  )
                )
            );
            l(n, 2, 0, a);
          }
        );
      }
      function we(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              3,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[24, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t
                    .Ab(n, 3)
                    .transform(
                      'anms.examples.simple-state-management.validator.required'
                    )
                )
              );
          }
        );
      }
      function Ie(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              3,
              'button',
              [
                ['color', 'primary'],
                ['mat-raised-button', ''],
                ['type', 'submit']
              ],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              null,
              null,
              K.d,
              K.b
            )),
            t.pb(
              1,
              180224,
              null,
              0,
              Y.b,
              [t.k, g.h, [2, w.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(), t.Hb(2, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          function(l, n) {
            l(n, 1, 0, 'primary');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ab(n, 1).disabled || null,
              'NoopAnimations' === t.Ab(n, 1)._animationMode
            ),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t
                    .Ab(n, 3)
                    .transform(
                      'anms.examples.simple-state-management.form.add.submit'
                    )
                )
              );
          }
        );
      }
      function je(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              3,
              'button',
              [
                ['color', 'primary'],
                ['mat-raised-button', ''],
                ['type', 'submit']
              ],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              null,
              null,
              K.d,
              K.b
            )),
            t.pb(
              1,
              180224,
              null,
              0,
              Y.b,
              [t.k, g.h, [2, w.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(), t.Hb(2, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          function(l, n) {
            l(n, 1, 0, 'primary');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              t.Ab(n, 1).disabled || null,
              'NoopAnimations' === t.Ab(n, 1)._animationMode
            ),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t
                    .Ab(n, 3)
                    .transform(
                      'anms.examples.simple-state-management.form.edit.submit'
                    )
                )
              );
          }
        );
      }
      function Oe(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              89,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 1, null, ke)),
            t.pb(
              2,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, xe)),
            t.pb(
              4,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              5,
              0,
              null,
              null,
              84,
              'form',
              [['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngSubmit'], [null, 'submit'], [null, 'reset']],
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'submit' === n && (a = !1 !== t.Ab(l, 7).onSubmit(e) && a),
                  'reset' === n && (a = !1 !== t.Ab(l, 7).onReset() && a),
                  'ngSubmit' === n && (a = !1 !== i.onSubmit(t.Ab(l, 7)) && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(6, 16384, null, 0, H.x, [], null, null),
            t.pb(
              7,
              540672,
              [['userFormRef', 4]],
              0,
              H.g,
              [[8, null], [8, null]],
              { form: [0, 'form'] },
              { ngSubmit: 'ngSubmit' }
            ),
            t.Eb(2048, null, H.c, null, [H.g]),
            t.pb(9, 16384, null, 0, H.o, [[4, H.c]], null, null),
            (l()(),
            t.qb(
              10,
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
              gn.b,
              gn.a
            )),
            t.pb(
              11,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 1, { _controlNonStatic: 0 }),
            t.Fb(335544320, 2, { _controlStatic: 0 }),
            t.Fb(603979776, 3, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 4, { _labelChildStatic: 0 }),
            t.Fb(603979776, 5, { _placeholderChild: 0 }),
            t.Fb(603979776, 6, { _errorChildren: 1 }),
            t.Fb(603979776, 7, { _hintChildren: 1 }),
            t.Fb(603979776, 8, { _prefixChildren: 1 }),
            t.Fb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              21,
              0,
              null,
              1,
              8,
              'input',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'username'],
                ['matInput', '']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 22)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 22).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 22)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 22)._compositionEnd(e.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 27)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 27)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 27)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(22, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [H.d]
            ),
            t.pb(
              24,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [8, null], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(26, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.pb(
              27,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[1, 4], [2, 4]], E.d, null, [An.b]),
            (l()(), t.fb(16777216, null, 5, 1, null, ve)),
            t.pb(
              31,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, 5, 1, null, ye)),
            t.pb(
              33,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              34,
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
              gn.b,
              gn.a
            )),
            t.pb(
              35,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 10, { _controlNonStatic: 0 }),
            t.Fb(335544320, 11, { _controlStatic: 0 }),
            t.Fb(603979776, 12, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 13, { _labelChildStatic: 0 }),
            t.Fb(603979776, 14, { _placeholderChild: 0 }),
            t.Fb(603979776, 15, { _errorChildren: 1 }),
            t.Fb(603979776, 16, { _hintChildren: 1 }),
            t.Fb(603979776, 17, { _prefixChildren: 1 }),
            t.Fb(603979776, 18, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              45,
              0,
              null,
              1,
              8,
              'input',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'name'],
                ['matInput', '']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 46)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 46).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 46)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 46)._compositionEnd(e.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 51)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 51)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 51)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(46, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [H.d]
            ),
            t.pb(
              48,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [8, null], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(50, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.pb(
              51,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[10, 4], [11, 4]], E.d, null, [An.b]),
            (l()(), t.fb(16777216, null, 5, 1, null, _e)),
            t.pb(
              55,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, 5, 1, null, Ce)),
            t.pb(
              57,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              58,
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
              gn.b,
              gn.a
            )),
            t.pb(
              59,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 19, { _controlNonStatic: 0 }),
            t.Fb(335544320, 20, { _controlStatic: 0 }),
            t.Fb(603979776, 21, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 22, { _labelChildStatic: 0 }),
            t.Fb(603979776, 23, { _placeholderChild: 0 }),
            t.Fb(603979776, 24, { _errorChildren: 1 }),
            t.Fb(603979776, 25, { _hintChildren: 1 }),
            t.Fb(603979776, 26, { _prefixChildren: 1 }),
            t.Fb(603979776, 27, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              69,
              0,
              null,
              1,
              8,
              'input',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'surname'],
                ['matInput', '']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 70)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 70).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 70)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 70)._compositionEnd(e.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 75)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 75)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 75)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(70, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [H.d]
            ),
            t.pb(
              72,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [8, null], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(74, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.pb(
              75,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[19, 4], [20, 4]], E.d, null, [An.b]),
            (l()(), t.fb(16777216, null, 5, 1, null, qe)),
            t.pb(
              79,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, 5, 1, null, we)),
            t.pb(
              81,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              82,
              0,
              null,
              null,
              7,
              'div',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 1, null, Ie)),
            t.pb(
              84,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, null, 1, null, je)),
            t.pb(
              86,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              87,
              0,
              null,
              null,
              2,
              'button',
              [['color', 'warn'], ['mat-button', ''], ['type', 'reset']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              null,
              null,
              K.d,
              K.b
            )),
            t.pb(
              88,
              180224,
              null,
              0,
              Y.b,
              [t.k, g.h, [2, w.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(), t.Hb(-1, 0, ['Reset']))
          ],
          function(l, n) {
            var e = n.component;
            l(n, 2, 0, !n.context.ngIf.value),
              l(n, 4, 0, n.context.ngIf.value),
              l(n, 7, 0, e.userForm),
              l(n, 24, 0, 'username'),
              l(
                n,
                27,
                0,
                t.Ib(
                  n,
                  27,
                  0,
                  t
                    .Ab(n, 28)
                    .transform('anms.examples.simple-state-management.username')
                )
              ),
              l(n, 31, 0, e.userForm.get('username').hasError('minlength')),
              l(n, 33, 0, e.userForm.get('username').hasError('required')),
              l(n, 48, 0, 'name'),
              l(
                n,
                51,
                0,
                t.Ib(
                  n,
                  51,
                  0,
                  t
                    .Ab(n, 52)
                    .transform('anms.examples.simple-state-management.name')
                )
              ),
              l(n, 55, 0, e.userForm.get('username').hasError('minlength')),
              l(n, 57, 0, e.userForm.get('username').hasError('required')),
              l(n, 72, 0, 'surname'),
              l(
                n,
                75,
                0,
                t.Ib(
                  n,
                  75,
                  0,
                  t
                    .Ab(n, 76)
                    .transform('anms.examples.simple-state-management.surname')
                )
              ),
              l(n, 79, 0, e.userForm.get('username').hasError('minlength')),
              l(n, 81, 0, e.userForm.get('username').hasError('required')),
              l(n, 84, 0, !n.context.ngIf.value),
              l(n, 86, 0, n.context.ngIf.value),
              l(n, 88, 0, 'warn');
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              t.Ab(n, 9).ngClassUntouched,
              t.Ab(n, 9).ngClassTouched,
              t.Ab(n, 9).ngClassPristine,
              t.Ab(n, 9).ngClassDirty,
              t.Ab(n, 9).ngClassValid,
              t.Ab(n, 9).ngClassInvalid,
              t.Ab(n, 9).ngClassPending
            ),
              l(n, 10, 1, [
                'standard' == t.Ab(n, 11).appearance,
                'fill' == t.Ab(n, 11).appearance,
                'outline' == t.Ab(n, 11).appearance,
                'legacy' == t.Ab(n, 11).appearance,
                t.Ab(n, 11)._control.errorState,
                t.Ab(n, 11)._canLabelFloat,
                t.Ab(n, 11)._shouldLabelFloat(),
                t.Ab(n, 11)._hasFloatingLabel(),
                t.Ab(n, 11)._hideControlPlaceholder(),
                t.Ab(n, 11)._control.disabled,
                t.Ab(n, 11)._control.autofilled,
                t.Ab(n, 11)._control.focused,
                'accent' == t.Ab(n, 11).color,
                'warn' == t.Ab(n, 11).color,
                t.Ab(n, 11)._shouldForward('untouched'),
                t.Ab(n, 11)._shouldForward('touched'),
                t.Ab(n, 11)._shouldForward('pristine'),
                t.Ab(n, 11)._shouldForward('dirty'),
                t.Ab(n, 11)._shouldForward('valid'),
                t.Ab(n, 11)._shouldForward('invalid'),
                t.Ab(n, 11)._shouldForward('pending'),
                !t.Ab(n, 11)._animationsEnabled
              ]),
              l(n, 21, 1, [
                t.Ab(n, 26).ngClassUntouched,
                t.Ab(n, 26).ngClassTouched,
                t.Ab(n, 26).ngClassPristine,
                t.Ab(n, 26).ngClassDirty,
                t.Ab(n, 26).ngClassValid,
                t.Ab(n, 26).ngClassInvalid,
                t.Ab(n, 26).ngClassPending,
                t.Ab(n, 27)._isServer,
                t.Ab(n, 27).id,
                t.Ab(n, 27).placeholder,
                t.Ab(n, 27).disabled,
                t.Ab(n, 27).required,
                (t.Ab(n, 27).readonly && !t.Ab(n, 27)._isNativeSelect) || null,
                t.Ab(n, 27)._ariaDescribedby || null,
                t.Ab(n, 27).errorState,
                t.Ab(n, 27).required.toString()
              ]),
              l(n, 34, 1, [
                'standard' == t.Ab(n, 35).appearance,
                'fill' == t.Ab(n, 35).appearance,
                'outline' == t.Ab(n, 35).appearance,
                'legacy' == t.Ab(n, 35).appearance,
                t.Ab(n, 35)._control.errorState,
                t.Ab(n, 35)._canLabelFloat,
                t.Ab(n, 35)._shouldLabelFloat(),
                t.Ab(n, 35)._hasFloatingLabel(),
                t.Ab(n, 35)._hideControlPlaceholder(),
                t.Ab(n, 35)._control.disabled,
                t.Ab(n, 35)._control.autofilled,
                t.Ab(n, 35)._control.focused,
                'accent' == t.Ab(n, 35).color,
                'warn' == t.Ab(n, 35).color,
                t.Ab(n, 35)._shouldForward('untouched'),
                t.Ab(n, 35)._shouldForward('touched'),
                t.Ab(n, 35)._shouldForward('pristine'),
                t.Ab(n, 35)._shouldForward('dirty'),
                t.Ab(n, 35)._shouldForward('valid'),
                t.Ab(n, 35)._shouldForward('invalid'),
                t.Ab(n, 35)._shouldForward('pending'),
                !t.Ab(n, 35)._animationsEnabled
              ]),
              l(n, 45, 1, [
                t.Ab(n, 50).ngClassUntouched,
                t.Ab(n, 50).ngClassTouched,
                t.Ab(n, 50).ngClassPristine,
                t.Ab(n, 50).ngClassDirty,
                t.Ab(n, 50).ngClassValid,
                t.Ab(n, 50).ngClassInvalid,
                t.Ab(n, 50).ngClassPending,
                t.Ab(n, 51)._isServer,
                t.Ab(n, 51).id,
                t.Ab(n, 51).placeholder,
                t.Ab(n, 51).disabled,
                t.Ab(n, 51).required,
                (t.Ab(n, 51).readonly && !t.Ab(n, 51)._isNativeSelect) || null,
                t.Ab(n, 51)._ariaDescribedby || null,
                t.Ab(n, 51).errorState,
                t.Ab(n, 51).required.toString()
              ]),
              l(n, 58, 1, [
                'standard' == t.Ab(n, 59).appearance,
                'fill' == t.Ab(n, 59).appearance,
                'outline' == t.Ab(n, 59).appearance,
                'legacy' == t.Ab(n, 59).appearance,
                t.Ab(n, 59)._control.errorState,
                t.Ab(n, 59)._canLabelFloat,
                t.Ab(n, 59)._shouldLabelFloat(),
                t.Ab(n, 59)._hasFloatingLabel(),
                t.Ab(n, 59)._hideControlPlaceholder(),
                t.Ab(n, 59)._control.disabled,
                t.Ab(n, 59)._control.autofilled,
                t.Ab(n, 59)._control.focused,
                'accent' == t.Ab(n, 59).color,
                'warn' == t.Ab(n, 59).color,
                t.Ab(n, 59)._shouldForward('untouched'),
                t.Ab(n, 59)._shouldForward('touched'),
                t.Ab(n, 59)._shouldForward('pristine'),
                t.Ab(n, 59)._shouldForward('dirty'),
                t.Ab(n, 59)._shouldForward('valid'),
                t.Ab(n, 59)._shouldForward('invalid'),
                t.Ab(n, 59)._shouldForward('pending'),
                !t.Ab(n, 59)._animationsEnabled
              ]),
              l(n, 69, 1, [
                t.Ab(n, 74).ngClassUntouched,
                t.Ab(n, 74).ngClassTouched,
                t.Ab(n, 74).ngClassPristine,
                t.Ab(n, 74).ngClassDirty,
                t.Ab(n, 74).ngClassValid,
                t.Ab(n, 74).ngClassInvalid,
                t.Ab(n, 74).ngClassPending,
                t.Ab(n, 75)._isServer,
                t.Ab(n, 75).id,
                t.Ab(n, 75).placeholder,
                t.Ab(n, 75).disabled,
                t.Ab(n, 75).required,
                (t.Ab(n, 75).readonly && !t.Ab(n, 75)._isNativeSelect) || null,
                t.Ab(n, 75)._ariaDescribedby || null,
                t.Ab(n, 75).errorState,
                t.Ab(n, 75).required.toString()
              ]),
              l(
                n,
                87,
                0,
                t.Ab(n, 88).disabled || null,
                'NoopAnimations' === t.Ab(n, 88)._animationMode
              );
          }
        );
      }
      function Fe(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              48,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'col-md-12']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              3,
              0,
              null,
              null,
              3,
              'h1',
              [['class', 'main-heading'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(4, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(), t.Hb(5, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              7,
              0,
              null,
              null,
              41,
              'div',
              [['class', 'row'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              9,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(10, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(
              11,
              0,
              null,
              null,
              6,
              'div',
              [['class', 'col-md-12 col-lg-6']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(16777216, null, null, 2, null, Ae)),
            t.pb(
              13,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            (l()(), t.fb(16777216, null, null, 2, null, Oe)),
            t.pb(
              16,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            (l()(),
            t.qb(
              18,
              0,
              null,
              null,
              30,
              'div',
              [['class', 'col-md-12 col-lg-6']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              20,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(21, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(22, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(24, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(25, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(27, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(28, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              30,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['@angular-extensions/model'])),
            (l()(),
            t.qb(32, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(33, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(35, 0, null, null, 5, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(36, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              38,
              0,
              null,
              null,
              2,
              'a',
              [
                ['href', 'https://github.com/angular-extensions/model'],
                ['target', '_blank']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(39, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(41, 0, null, null, 7, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(42, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              44,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['ng add @angular-extensions/model'])),
            (l()(), t.Hb(-1, null, [' & '])),
            (l()(),
            t.qb(
              47,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.Hb(-1, null, [
              'ng g @angular-extensions/model:model examples/user --items'
            ]))
          ],
          function(l, n) {
            var e = n.component;
            l(n, 4, 0),
              l(n, 9, 0, 'row', e.routeAnimationsElements),
              l(n, 10, 0),
              l(n, 13, 0, t.Ib(n, 13, 0, t.Ab(n, 14).transform(e.users$))),
              l(n, 16, 0, t.Ib(n, 16, 0, t.Ab(n, 17).transform(e.isEdit$))),
              l(n, 20, 0, 'col-md-12 col-lg-6', e.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              t.Ib(
                n,
                5,
                0,
                t
                  .Ab(n, 6)
                  .transform('anms.examples.simple-state-management.title')
              )
            ),
              l(
                n,
                22,
                0,
                t.Ib(
                  n,
                  22,
                  0,
                  t
                    .Ab(n, 23)
                    .transform('anms.examples.simple-state-management.text1')
                )
              ),
              l(
                n,
                25,
                0,
                t.Ib(
                  n,
                  25,
                  0,
                  t
                    .Ab(n, 26)
                    .transform('anms.examples.simple-state-management.text2')
                )
              ),
              l(
                n,
                28,
                0,
                t.Ib(
                  n,
                  28,
                  0,
                  t
                    .Ab(n, 29)
                    .transform('anms.examples.simple-state-management.text3')
                )
              ),
              l(
                n,
                33,
                0,
                t.Ib(
                  n,
                  33,
                  0,
                  t
                    .Ab(n, 34)
                    .transform('anms.examples.simple-state-management.text4')
                )
              ),
              l(
                n,
                36,
                0,
                t.Ib(
                  n,
                  36,
                  0,
                  t
                    .Ab(n, 37)
                    .transform('anms.examples.simple-state-management.text5')
                )
              ),
              l(
                n,
                39,
                0,
                t.Ib(
                  n,
                  39,
                  0,
                  t
                    .Ab(n, 40)
                    .transform('anms.examples.simple-state-management.text6')
                )
              ),
              l(
                n,
                42,
                0,
                t.Ib(
                  n,
                  42,
                  0,
                  t
                    .Ab(n, 43)
                    .transform('anms.examples.simple-state-management.text7')
                )
              );
          }
        );
      }
      function Se(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-user',
              [],
              null,
              null,
              null,
              Fe,
              he
            )),
            t.pb(1, 114688, null, 0, fe, [H.e, pe], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Ee = t.mb('anms-user', fe, Se, {}, {}, []),
        He = e('3xHB'),
        Pe = e('P9AZ'),
        Le = e('Av2N'),
        Me = e('9+G+'),
        ze = e('5i2S'),
        Te = t.ob({
          encapsulation: 2,
          styles: [
            ".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:0;vertical-align:middle}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label{cursor:-webkit-grab;cursor:grab}.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label:active,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(.7);transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),border-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform .4s cubic-bezier(.25,.8,.25,1),border-radius .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}@media (-ms-high-contrast:active){.mat-slider-thumb-label{outline:solid 1px}}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-sliding .mat-slider-thumb-container,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-track-fill{transition-duration:0s}.mat-slider-has-ticks .mat-slider-wrapper::after{content:'';position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}@media (-ms-high-contrast:active){.mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}@media (-ms-high-contrast:active){.mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-track-fill{transition:none}"
          ],
          data: {}
        });
      function De(l) {
        return t.Jb(
          2,
          [
            t.Fb(671088640, 1, { _sliderWrapper: 0 }),
            (l()(),
            t.qb(
              1,
              0,
              [[1, 0], ['sliderWrapper', 1]],
              null,
              21,
              'div',
              [['class', 'mat-slider-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              6,
              'div',
              [['class', 'mat-slider-track-wrapper']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              3,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'mat-slider-track-background']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.A, A.B, [t.k, t.s, t.D]),
            t.pb(
              5,
              278528,
              null,
              0,
              A.p,
              [A.A],
              { ngStyle: [0, 'ngStyle'] },
              null
            ),
            (l()(),
            t.qb(
              6,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'mat-slider-track-fill']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.A, A.B, [t.k, t.s, t.D]),
            t.pb(
              8,
              278528,
              null,
              0,
              A.p,
              [A.A],
              { ngStyle: [0, 'ngStyle'] },
              null
            ),
            (l()(),
            t.qb(
              9,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'mat-slider-ticks-container']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.A, A.B, [t.k, t.s, t.D]),
            t.pb(
              11,
              278528,
              null,
              0,
              A.p,
              [A.A],
              { ngStyle: [0, 'ngStyle'] },
              null
            ),
            (l()(),
            t.qb(
              12,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'mat-slider-ticks']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.A, A.B, [t.k, t.s, t.D]),
            t.pb(
              14,
              278528,
              null,
              0,
              A.p,
              [A.A],
              { ngStyle: [0, 'ngStyle'] },
              null
            ),
            (l()(),
            t.qb(
              15,
              0,
              null,
              null,
              7,
              'div',
              [['class', 'mat-slider-thumb-container']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.A, A.B, [t.k, t.s, t.D]),
            t.pb(
              17,
              278528,
              null,
              0,
              A.p,
              [A.A],
              { ngStyle: [0, 'ngStyle'] },
              null
            ),
            (l()(),
            t.qb(
              18,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-slider-focus-ring']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              19,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'mat-slider-thumb']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              20,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'mat-slider-thumb-label']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              21,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'mat-slider-thumb-label-text']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(22, null, ['', '']))
          ],
          function(l, n) {
            var e = n.component;
            l(n, 5, 0, e._trackBackgroundStyles),
              l(n, 8, 0, e._trackFillStyles),
              l(n, 11, 0, e._ticksContainerStyles),
              l(n, 14, 0, e._ticksStyles),
              l(n, 17, 0, e._thumbContainerStyles);
          },
          function(l, n) {
            l(n, 22, 0, n.component.displayValue);
          }
        );
      }
      var Ne = e('mWib'),
        Je = e('xVbo');
      const $e = Object(P.z)(Gl, l => l.form);
      class Be {
        constructor(l, n, e, t) {
          (this.fb = l),
            (this.store = n),
            (this.translate = e),
            (this.notificationService = t),
            (this.routeAnimationsElements = L.d),
            (this.form = this.fb.group({
              autosave: !1,
              username: ['', [H.t.required]],
              password: ['', [H.t.required]],
              email: ['', [H.t.required, H.t.email]],
              description: [
                '',
                [H.t.required, H.t.minLength(10), H.t.maxLength(1e3)]
              ],
              requestGift: [''],
              birthday: ['', [H.t.required]],
              rating: [0, H.t.required]
            }));
        }
        ngOnInit() {
          (this.formValueChanges$ = this.form.valueChanges.pipe(
            Object(Ne.a)(500),
            Object(Je.a)(l => l.autosave)
          )),
            this.store
              .pipe(
                Object(P.C)($e),
                Object(Al.a)(1)
              )
              .subscribe(l => this.form.patchValue(l.form));
        }
        update(l) {
          this.store.dispatch($l({ form: l }));
        }
        save() {
          this.store.dispatch($l({ form: this.form.value }));
        }
        submit() {
          this.form.valid &&
            (this.save(),
            this.notificationService.info(
              this.translate.instant(
                this.form.value.requestGift
                  ? 'anms.examples.form.text4'
                  : 'anms.examples.form.text5'
              ) +
                ' : ' +
                this.translate.instant('anms.examples.form.text6')
            ));
        }
        reset() {
          this.form.reset(),
            this.form.clearValidators(),
            this.form.clearAsyncValidators(),
            this.store.dispatch(Bl());
        }
      }
      var Re = t.ob({
        encapsulation: 0,
        styles: [
          [
            '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px;text-align:center}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}mat-checkbox[_ngcontent-%COMP%]{margin:10px 0 20px}mat-slider[_ngcontent-%COMP%]{width:100%}.buttons[_ngcontent-%COMP%]{margin:20px 0}'
          ]
        ],
        data: {}
      });
      function Ue(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(1, null, [' ', ' ']))
          ],
          null,
          function(l, n) {
            l(n, 1, 0, n.component.update(n.context.ngIf));
          }
        );
      }
      function Ve(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[6, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.form.placeholder1')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.form.error1'))
              );
          }
        );
      }
      function Ge(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[15, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.form.placeholder2')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.form.error1'))
              );
          }
        );
      }
      function Xe(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[24, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.form.placeholder3')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.form.error1'))
              );
          }
        );
      }
      function Ke(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[24, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.form.placeholder3')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.form.error2'))
              );
          }
        );
      }
      function Ye(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[33, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.form.placeholder5')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.form.error1'))
              );
          }
        );
      }
      function We(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[43, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.form.placeholder4')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.form.error1'))
              );
          }
        );
      }
      function Qe(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[43, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ' 10 '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.form.placeholder4')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.form.error3'))
              );
          }
        );
      }
      function Ze(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              4,
              'mat-error',
              [['class', 'mat-error'], ['role', 'alert']],
              [[1, 'id', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(1, 16384, [[43, 4]], 0, E.b, [], null, null),
            (l()(), t.Hb(2, null, [' ', ' ', ' 1000 '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, t.Ab(n, 1).id),
              l(
                n,
                2,
                0,
                t.Ib(
                  n,
                  2,
                  0,
                  t.Ab(n, 3).transform('anms.examples.form.placeholder4')
                ),
                t.Ib(n, 2, 1, t.Ab(n, 4).transform('anms.examples.form.error4'))
              );
          }
        );
      }
      function lt(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              220,
              'div',
              [['class', 'container'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(1, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(
              2,
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
            t.qb(
              3,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'col']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              4,
              0,
              null,
              null,
              2,
              'h1',
              [['class', 'main-heading']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(5, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.fb(16777216, null, null, 2, null, Ue)),
            t.pb(
              8,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            t.Cb(131072, A.b, [t.h]),
            (l()(),
            t.qb(
              10,
              0,
              null,
              null,
              210,
              'form',
              [['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngSubmit'], [null, 'submit'], [null, 'reset']],
              function(l, n, e) {
                var a = !0,
                  i = l.component;
                return (
                  'submit' === n && (a = !1 !== t.Ab(l, 12).onSubmit(e) && a),
                  'reset' === n && (a = !1 !== t.Ab(l, 12).onReset() && a),
                  'ngSubmit' === n && (a = !1 !== i.submit() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(11, 16384, null, 0, H.x, [], null, null),
            t.pb(
              12,
              540672,
              null,
              0,
              H.g,
              [[8, null], [8, null]],
              { form: [0, 'form'] },
              { ngSubmit: 'ngSubmit' }
            ),
            t.Eb(2048, null, H.c, null, [H.g]),
            t.pb(14, 16384, null, 0, H.o, [[4, H.c]], null, null),
            (l()(),
            t.qb(
              15,
              0,
              null,
              null,
              205,
              'div',
              [['class', 'row justify-content-center']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              16,
              0,
              null,
              null,
              204,
              'div',
              [['class', 'col-md-8']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              17,
              0,
              null,
              null,
              203,
              'mat-card',
              [['class', 'mat-card']],
              null,
              null,
              null,
              B.d,
              B.a
            )),
            t.pb(18, 49152, null, 0, R.a, [], null, null),
            (l()(),
            t.qb(
              19,
              0,
              null,
              0,
              11,
              'span',
              [
                ['class', 'd-flex justify-content-between align-items-baseline']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(20, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), t.Hb(21, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              23,
              0,
              null,
              null,
              7,
              'mat-slide-toggle',
              [['class', 'mat-slide-toggle'], ['formControlName', 'autosave']],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checked', null],
                [2, 'mat-disabled', null],
                [2, 'mat-slide-toggle-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'focus']],
              function(l, n, e) {
                var a = !0;
                return (
                  'focus' === n &&
                    (a =
                      !1 !== t.Ab(l, 24)._inputElement.nativeElement.focus() &&
                      a),
                  a
                );
              },
              He.b,
              He.a
            )),
            t.pb(
              24,
              1228800,
              null,
              0,
              Pe.b,
              [t.k, g.h, t.h, [8, null], t.y, Pe.a, [2, w.a], [2, _.b]],
              null,
              null
            ),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [Pe.b]
            ),
            t.pb(
              26,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [8, null], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(28, 16384, null, 0, H.n, [[4, H.m]], null, null),
            (l()(), t.Hb(29, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              31,
              0,
              null,
              0,
              48,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              32,
              0,
              null,
              null,
              23,
              'mat-form-field',
              [['class', 'col mat-form-field']],
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
              gn.b,
              gn.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              34,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(
              35,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 1, { _controlNonStatic: 0 }),
            t.Fb(335544320, 2, { _controlStatic: 0 }),
            t.Fb(603979776, 3, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 4, { _labelChildStatic: 0 }),
            t.Fb(603979776, 5, { _placeholderChild: 0 }),
            t.Fb(603979776, 6, { _errorChildren: 1 }),
            t.Fb(603979776, 7, { _hintChildren: 1 }),
            t.Fb(603979776, 8, { _prefixChildren: 1 }),
            t.Fb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              45,
              0,
              null,
              1,
              8,
              'input',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'username'],
                ['matInput', '']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 46)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 46).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 46)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 46)._compositionEnd(e.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 51)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 51)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 51)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(46, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [H.d]
            ),
            t.pb(
              48,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [8, null], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(50, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.pb(
              51,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[1, 4], [2, 4]], E.d, null, [An.b]),
            (l()(), t.fb(16777216, null, 5, 1, null, Ve)),
            t.pb(
              55,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              56,
              0,
              null,
              null,
              23,
              'mat-form-field',
              [['class', 'col mat-form-field']],
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
              gn.b,
              gn.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              58,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(
              59,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 10, { _controlNonStatic: 0 }),
            t.Fb(335544320, 11, { _controlStatic: 0 }),
            t.Fb(603979776, 12, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 13, { _labelChildStatic: 0 }),
            t.Fb(603979776, 14, { _placeholderChild: 0 }),
            t.Fb(603979776, 15, { _errorChildren: 1 }),
            t.Fb(603979776, 16, { _hintChildren: 1 }),
            t.Fb(603979776, 17, { _prefixChildren: 1 }),
            t.Fb(603979776, 18, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              69,
              0,
              null,
              1,
              8,
              'input',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'password'],
                ['matInput', ''],
                ['type', 'password']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 70)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 70).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 70)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 70)._compositionEnd(e.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 75)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 75)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 75)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(70, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [H.d]
            ),
            t.pb(
              72,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [8, null], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(74, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.pb(
              75,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'], type: [1, 'type'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[10, 4], [11, 4]], E.d, null, [An.b]),
            (l()(), t.fb(16777216, null, 5, 1, null, Ge)),
            t.pb(
              79,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              80,
              0,
              null,
              0,
              26,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              81,
              0,
              null,
              null,
              25,
              'mat-form-field',
              [['class', 'col mat-form-field']],
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
              gn.b,
              gn.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              83,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(
              84,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 19, { _controlNonStatic: 0 }),
            t.Fb(335544320, 20, { _controlStatic: 0 }),
            t.Fb(603979776, 21, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 22, { _labelChildStatic: 0 }),
            t.Fb(603979776, 23, { _placeholderChild: 0 }),
            t.Fb(603979776, 24, { _errorChildren: 1 }),
            t.Fb(603979776, 25, { _hintChildren: 1 }),
            t.Fb(603979776, 26, { _prefixChildren: 1 }),
            t.Fb(603979776, 27, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              94,
              0,
              null,
              1,
              8,
              'input',
              [
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'email'],
                ['matInput', ''],
                ['type', 'email']
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 95)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 95).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 95)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 95)._compositionEnd(e.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 100)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 100)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 100)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(95, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [H.d]
            ),
            t.pb(
              97,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [8, null], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(99, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.pb(
              100,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'], type: [1, 'type'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[19, 4], [20, 4]], E.d, null, [An.b]),
            (l()(), t.fb(16777216, null, 5, 1, null, Xe)),
            t.pb(
              104,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, 5, 1, null, Ke)),
            t.pb(
              106,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              107,
              0,
              null,
              0,
              33,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              108,
              0,
              null,
              null,
              32,
              'mat-form-field',
              [['class', 'col mat-form-field']],
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
              gn.b,
              gn.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              110,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(
              111,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 28, { _controlNonStatic: 0 }),
            t.Fb(335544320, 29, { _controlStatic: 0 }),
            t.Fb(603979776, 30, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 31, { _labelChildStatic: 0 }),
            t.Fb(603979776, 32, { _placeholderChild: 0 }),
            t.Fb(603979776, 33, { _errorChildren: 1 }),
            t.Fb(603979776, 34, { _hintChildren: 1 }),
            t.Fb(603979776, 35, { _prefixChildren: 1 }),
            t.Fb(603979776, 36, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              121,
              0,
              null,
              1,
              11,
              'input',
              [
                ['aria-haspopup', 'dialog'],
                ['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'birthday'],
                ['matInput', '']
              ],
              [
                [1, 'aria-owns', 0],
                [1, 'min', 0],
                [1, 'max', 0],
                [8, 'disabled', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'change'],
                [null, 'keydown'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 122)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 122).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 122)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 122)._compositionEnd(e.target.value) && a),
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 123)._onInput(e.target.value) && a),
                  'change' === n && (a = !1 !== t.Ab(l, 123)._onChange() && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 123)._onBlur() && a),
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 123)._onKeydown(e) && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 130)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 130)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 130)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(122, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.pb(
              123,
              147456,
              null,
              0,
              Le.h,
              [t.k, [2, h.a], [2, h.e], [2, E.c]],
              { matDatepicker: [0, 'matDatepicker'] },
              null
            ),
            t.Eb(
              1024,
              null,
              H.k,
              function(l) {
                return [l];
              },
              [Le.h]
            ),
            t.Eb(
              1024,
              null,
              H.l,
              function(l, n) {
                return [l, n];
              },
              [H.d, Le.h]
            ),
            t.pb(
              126,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [6, H.k], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(128, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.Eb(2048, null, An.a, null, [Le.h]),
            t.pb(
              130,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [6, An.a],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[28, 4], [29, 4]], E.d, null, [An.b]),
            (l()(),
            t.qb(
              133,
              0,
              null,
              4,
              3,
              'mat-datepicker-toggle',
              [['class', 'mat-datepicker-toggle'], ['matSuffix', '']],
              [
                [1, 'tabindex', 0],
                [2, 'mat-datepicker-toggle-active', null],
                [2, 'mat-accent', null],
                [2, 'mat-warn', null]
              ],
              [[null, 'focus']],
              function(l, n, e) {
                var a = !0;
                return (
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 135)._button.focus() && a),
                  a
                );
              },
              c.e,
              c.d
            )),
            t.pb(134, 16384, [[36, 4]], 0, E.h, [], null, null),
            t.pb(
              135,
              1753088,
              null,
              1,
              Le.k,
              [Le.i, t.h, [8, null]],
              { datepicker: [0, 'datepicker'] },
              null
            ),
            t.Fb(603979776, 37, { _customIcon: 0 }),
            (l()(),
            t.qb(
              137,
              16777216,
              null,
              1,
              1,
              'mat-datepicker',
              [],
              null,
              null,
              null,
              c.f,
              c.c
            )),
            t.pb(
              138,
              180224,
              [['picker', 4]],
              0,
              Le.f,
              [Me.d, Q.c, t.y, t.O, Le.a, [2, h.a], [2, _.b], [2, A.d]],
              null,
              null
            ),
            (l()(), t.fb(16777216, null, 5, 1, null, Ye)),
            t.pb(
              140,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              141,
              0,
              null,
              0,
              35,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              142,
              0,
              null,
              null,
              34,
              'mat-form-field',
              [['class', 'col mat-form-field']],
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
              gn.b,
              gn.a
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              144,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(
              145,
              7520256,
              null,
              9,
              E.c,
              [t.k, t.h, [2, h.h], [2, _.b], [2, E.a], f.a, t.y, [2, w.a]],
              null,
              null
            ),
            t.Fb(603979776, 38, { _controlNonStatic: 0 }),
            t.Fb(335544320, 39, { _controlStatic: 0 }),
            t.Fb(603979776, 40, { _labelChildNonStatic: 0 }),
            t.Fb(335544320, 41, { _labelChildStatic: 0 }),
            t.Fb(603979776, 42, { _placeholderChild: 0 }),
            t.Fb(603979776, 43, { _errorChildren: 1 }),
            t.Fb(603979776, 44, { _hintChildren: 1 }),
            t.Fb(603979776, 45, { _prefixChildren: 1 }),
            t.Fb(603979776, 46, { _suffixChildren: 1 }),
            (l()(),
            t.qb(
              155,
              0,
              null,
              1,
              12,
              'textarea',
              [
                ['cdkAutosizeMaxRows', '10'],
                ['cdkAutosizeMinRows', '3'],
                ['cdkTextareaAutosize', ''],
                [
                  'class',
                  'cdk-textarea-autosize mat-input-element mat-form-field-autofill-control'
                ],
                ['formControlName', 'description'],
                ['matInput', ''],
                ['maxlength', '1000'],
                ['minlength', '10'],
                ['rows', '1']
              ],
              [
                [1, 'minlength', 0],
                [1, 'maxlength', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
                [2, 'mat-input-server', null],
                [1, 'id', 0],
                [1, 'placeholder', 0],
                [8, 'disabled', 0],
                [8, 'required', 0],
                [1, 'readonly', 0],
                [1, 'aria-describedby', 0],
                [1, 'aria-invalid', 0],
                [1, 'aria-required', 0]
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'focus']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 156)._handleInput(e.target.value) && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 156).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== t.Ab(l, 156)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== t.Ab(l, 156)._compositionEnd(e.target.value) && a),
                  'input' === n &&
                    (a = !1 !== t.Ab(l, 164)._noopInputHandler() && a),
                  'blur' === n &&
                    (a = !1 !== t.Ab(l, 165)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== t.Ab(l, 165)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== t.Ab(l, 165)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            t.pb(156, 16384, null, 0, H.d, [t.D, t.k, [2, H.a]], null, null),
            t.pb(
              157,
              540672,
              null,
              0,
              H.j,
              [],
              { minlength: [0, 'minlength'] },
              null
            ),
            t.pb(
              158,
              540672,
              null,
              0,
              H.i,
              [],
              { maxlength: [0, 'maxlength'] },
              null
            ),
            t.Eb(
              1024,
              null,
              H.k,
              function(l, n) {
                return [l, n];
              },
              [H.j, H.i]
            ),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [H.d]
            ),
            t.pb(
              161,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [6, H.k], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(163, 16384, null, 0, H.n, [[4, H.m]], null, null),
            t.pb(
              164,
              4603904,
              [['autosize', 4]],
              0,
              kn.b,
              [t.k, f.a, t.y],
              {
                minRows: [0, 'minRows'],
                maxRows: [1, 'maxRows'],
                enabled: [2, 'enabled']
              },
              null
            ),
            t.pb(
              165,
              999424,
              null,
              0,
              An.b,
              [
                t.k,
                f.a,
                [6, H.m],
                [2, H.p],
                [2, H.g],
                h.b,
                [8, null],
                kn.a,
                t.y
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Eb(2048, [[38, 4], [39, 4]], E.d, null, [An.b]),
            (l()(),
            t.qb(
              168,
              0,
              null,
              7,
              2,
              'mat-hint',
              [['align', 'end'], ['class', 'mat-hint']],
              [[2, 'mat-right', null], [1, 'id', 0], [1, 'align', 0]],
              null,
              null,
              null,
              null
            )),
            t.pb(
              169,
              16384,
              [[44, 4]],
              0,
              E.f,
              [],
              { align: [0, 'align'] },
              null
            ),
            (l()(), t.Hb(170, null, ['', ' / 1000'])),
            (l()(), t.fb(16777216, null, 5, 1, null, We)),
            t.pb(
              172,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, 5, 1, null, Qe)),
            t.pb(
              174,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), t.fb(16777216, null, 5, 1, null, Ze)),
            t.pb(
              176,
              16384,
              null,
              0,
              A.k,
              [t.O, t.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            t.qb(
              177,
              0,
              null,
              0,
              13,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              179,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(
              180,
              0,
              null,
              null,
              10,
              'div',
              [['class', 'col']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              181,
              0,
              null,
              null,
              2,
              'label',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(182, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              184,
              0,
              null,
              null,
              0,
              'br',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              185,
              0,
              null,
              null,
              5,
              'mat-slider',
              [
                ['class', 'mat-slider'],
                ['formControlName', 'rating'],
                ['max', '10'],
                ['min', '1'],
                ['role', 'slider'],
                ['thumbLabel', ''],
                ['tickInterval', '1']
              ],
              [
                [8, 'tabIndex', 0],
                [1, 'aria-disabled', 0],
                [1, 'aria-valuemax', 0],
                [1, 'aria-valuemin', 0],
                [1, 'aria-valuenow', 0],
                [1, 'aria-orientation', 0],
                [2, 'mat-slider-disabled', null],
                [2, 'mat-slider-has-ticks', null],
                [2, 'mat-slider-horizontal', null],
                [2, 'mat-slider-axis-inverted', null],
                [2, 'mat-slider-sliding', null],
                [2, 'mat-slider-thumb-label-showing', null],
                [2, 'mat-slider-vertical', null],
                [2, 'mat-slider-min-value', null],
                [2, 'mat-slider-hide-last-tick', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'focus'],
                [null, 'blur'],
                [null, 'mousedown'],
                [null, 'keydown'],
                [null, 'keyup'],
                [null, 'mouseenter'],
                [null, 'slide'],
                [null, 'slideend'],
                [null, 'slidestart']
              ],
              function(l, n, e) {
                var a = !0;
                return (
                  'focus' === n && (a = !1 !== t.Ab(l, 186)._onFocus() && a),
                  'blur' === n && (a = !1 !== t.Ab(l, 186)._onBlur() && a),
                  'mousedown' === n &&
                    (a = !1 !== t.Ab(l, 186)._onMousedown(e) && a),
                  'keydown' === n &&
                    (a = !1 !== t.Ab(l, 186)._onKeydown(e) && a),
                  'keyup' === n && (a = !1 !== t.Ab(l, 186)._onKeyup() && a),
                  'mouseenter' === n &&
                    (a = !1 !== t.Ab(l, 186)._onMouseenter() && a),
                  'slide' === n && (a = !1 !== t.Ab(l, 186)._onSlide(e) && a),
                  'slideend' === n &&
                    (a = !1 !== t.Ab(l, 186)._onSlideEnd() && a),
                  'slidestart' === n &&
                    (a = !1 !== t.Ab(l, 186)._onSlideStart(e) && a),
                  a
                );
              },
              De,
              Te
            )),
            t.pb(
              186,
              245760,
              null,
              0,
              ze.a,
              [t.k, g.h, t.h, [2, _.b], [8, null], [2, w.a]],
              {
                max: [0, 'max'],
                min: [1, 'min'],
                thumbLabel: [2, 'thumbLabel'],
                tickInterval: [3, 'tickInterval']
              },
              null
            ),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [ze.a]
            ),
            t.pb(
              188,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [8, null], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(190, 16384, null, 0, H.n, [[4, H.m]], null, null),
            (l()(),
            t.qb(
              191,
              0,
              null,
              0,
              10,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              192,
              0,
              null,
              null,
              9,
              'mat-checkbox',
              [
                ['class', 'col mat-checkbox'],
                ['formControlName', 'requestGift']
              ],
              [
                [8, 'id', 0],
                [1, 'tabindex', 0],
                [2, 'mat-checkbox-indeterminate', null],
                [2, 'mat-checkbox-checked', null],
                [2, 'mat-checkbox-disabled', null],
                [2, 'mat-checkbox-label-before', null],
                [2, '_mat-animation-noopable', null],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              null,
              null,
              G,
              V
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              194,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(
              195,
              8568832,
              null,
              0,
              U.b,
              [t.k, t.h, g.h, t.y, [8, null], [2, U.a], [2, w.a]],
              null,
              null
            ),
            t.Eb(
              1024,
              null,
              H.l,
              function(l) {
                return [l];
              },
              [U.b]
            ),
            t.pb(
              197,
              671744,
              null,
              0,
              H.f,
              [[3, H.c], [8, null], [8, null], [6, H.l], [2, H.w]],
              { name: [0, 'name'] },
              null
            ),
            t.Eb(2048, null, H.m, null, [H.f]),
            t.pb(199, 16384, null, 0, H.n, [[4, H.m]], null, null),
            (l()(), t.Hb(200, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              202,
              0,
              null,
              0,
              18,
              'div',
              [['class', 'row buttons d-flex justify-content-between pad']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              203,
              0,
              null,
              null,
              5,
              'button',
              [['color', 'primary'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              null,
              null,
              K.d,
              K.b
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              205,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            t.pb(
              206,
              180224,
              null,
              0,
              Y.b,
              [t.k, g.h, [2, w.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(), t.Hb(207, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              209,
              0,
              null,
              null,
              5,
              'button',
              [
                ['color', 'accent'],
                ['mat-raised-button', ''],
                ['type', 'button']
              ],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.save() && t), t;
              },
              K.d,
              K.b
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              211,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            t.pb(
              212,
              180224,
              null,
              0,
              Y.b,
              [t.k, g.h, [2, w.a]],
              { disabled: [0, 'disabled'], color: [1, 'color'] },
              null
            ),
            (l()(), t.Hb(213, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              215,
              0,
              null,
              null,
              5,
              'button',
              [['mat-raised-button', ''], ['type', 'reset']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n && (t = !1 !== l.component.reset() && t), t
                );
              },
              K.d,
              K.b
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              217,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            t.pb(218, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            (l()(), t.Hb(219, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          function(l, n) {
            var e = n.component;
            l(n, 1, 0),
              l(
                n,
                8,
                0,
                t.Ib(n, 8, 0, t.Ab(n, 9).transform(e.formValueChanges$))
              ),
              l(n, 12, 0, e.form),
              l(n, 26, 0, 'autosave'),
              l(n, 34, 0, 'col', e.routeAnimationsElements),
              l(n, 48, 0, 'username'),
              l(
                n,
                51,
                0,
                t.sb(
                  1,
                  '',
                  t.Ib(
                    n,
                    51,
                    0,
                    t.Ab(n, 52).transform('anms.examples.form.placeholder1')
                  ),
                  ''
                )
              ),
              l(n, 55, 0, e.form.get('username').invalid),
              l(n, 58, 0, 'col', e.routeAnimationsElements),
              l(n, 72, 0, 'password'),
              l(
                n,
                75,
                0,
                t.sb(
                  1,
                  '',
                  t.Ib(
                    n,
                    75,
                    0,
                    t.Ab(n, 76).transform('anms.examples.form.placeholder2')
                  ),
                  ''
                ),
                'password'
              ),
              l(n, 79, 0, e.form.get('password').invalid),
              l(n, 83, 0, 'col', e.routeAnimationsElements),
              l(n, 97, 0, 'email'),
              l(
                n,
                100,
                0,
                t.sb(
                  1,
                  '',
                  t.Ib(
                    n,
                    100,
                    0,
                    t.Ab(n, 101).transform('anms.examples.form.placeholder3')
                  ),
                  ''
                ),
                'email'
              ),
              l(n, 104, 0, e.form.get('email').hasError('required')),
              l(n, 106, 0, e.form.get('email').hasError('email')),
              l(n, 110, 0, 'col', e.routeAnimationsElements),
              l(n, 123, 0, t.Ab(n, 138)),
              l(n, 126, 0, 'birthday'),
              l(
                n,
                130,
                0,
                t.sb(
                  1,
                  '',
                  t.Ib(
                    n,
                    130,
                    0,
                    t.Ab(n, 131).transform('anms.examples.form.placeholder5')
                  ),
                  ''
                )
              ),
              l(n, 135, 0, t.Ab(n, 138)),
              l(n, 140, 0, e.form.get('birthday').hasError('required')),
              l(n, 144, 0, 'col', e.routeAnimationsElements),
              l(n, 157, 0, '10'),
              l(n, 158, 0, '1000'),
              l(n, 161, 0, 'description'),
              l(n, 164, 0, '3', '10', ''),
              l(
                n,
                165,
                0,
                t.sb(
                  1,
                  '',
                  t.Ib(
                    n,
                    165,
                    0,
                    t.Ab(n, 166).transform('anms.examples.form.placeholder4')
                  ),
                  ''
                )
              ),
              l(n, 169, 0, 'end'),
              l(n, 172, 0, e.form.get('description').hasError('required')),
              l(n, 174, 0, e.form.get('description').hasError('minlength')),
              l(n, 176, 0, e.form.get('description').hasError('maxlength')),
              l(n, 179, 0, 'row', e.routeAnimationsElements),
              l(n, 186, 0, '10', '1', '', '1'),
              l(n, 188, 0, 'rating'),
              l(n, 194, 0, 'col', e.routeAnimationsElements),
              l(n, 197, 0, 'requestGift'),
              l(n, 205, 0, e.routeAnimationsElements),
              l(n, 206, 0, 'primary'),
              l(n, 211, 0, e.routeAnimationsElements),
              l(n, 212, 0, e.form.get('autosave').value, 'accent'),
              l(n, 217, 0, e.routeAnimationsElements);
          },
          function(l, n) {
            var e = n.component;
            l(
              n,
              5,
              0,
              t.Ib(n, 5, 0, t.Ab(n, 6).transform('anms.examples.form.title'))
            ),
              l(
                n,
                10,
                0,
                t.Ab(n, 14).ngClassUntouched,
                t.Ab(n, 14).ngClassTouched,
                t.Ab(n, 14).ngClassPristine,
                t.Ab(n, 14).ngClassDirty,
                t.Ab(n, 14).ngClassValid,
                t.Ab(n, 14).ngClassInvalid,
                t.Ab(n, 14).ngClassPending
              ),
              l(
                n,
                21,
                0,
                t.Ib(
                  n,
                  21,
                  0,
                  t.Ab(n, 22).transform('anms.examples.form.subtitle1')
                )
              ),
              l(n, 23, 1, [
                t.Ab(n, 24).id,
                t.Ab(n, 24).disabled ? null : -1,
                t.Ab(n, 24).checked,
                t.Ab(n, 24).disabled,
                'before' == t.Ab(n, 24).labelPosition,
                'NoopAnimations' === t.Ab(n, 24)._animationMode,
                t.Ab(n, 28).ngClassUntouched,
                t.Ab(n, 28).ngClassTouched,
                t.Ab(n, 28).ngClassPristine,
                t.Ab(n, 28).ngClassDirty,
                t.Ab(n, 28).ngClassValid,
                t.Ab(n, 28).ngClassInvalid,
                t.Ab(n, 28).ngClassPending
              ]),
              l(
                n,
                29,
                0,
                t.Ib(
                  n,
                  29,
                  0,
                  t.Ab(n, 30).transform('anms.examples.form.autosave')
                )
              ),
              l(n, 32, 1, [
                'standard' == t.Ab(n, 35).appearance,
                'fill' == t.Ab(n, 35).appearance,
                'outline' == t.Ab(n, 35).appearance,
                'legacy' == t.Ab(n, 35).appearance,
                t.Ab(n, 35)._control.errorState,
                t.Ab(n, 35)._canLabelFloat,
                t.Ab(n, 35)._shouldLabelFloat(),
                t.Ab(n, 35)._hasFloatingLabel(),
                t.Ab(n, 35)._hideControlPlaceholder(),
                t.Ab(n, 35)._control.disabled,
                t.Ab(n, 35)._control.autofilled,
                t.Ab(n, 35)._control.focused,
                'accent' == t.Ab(n, 35).color,
                'warn' == t.Ab(n, 35).color,
                t.Ab(n, 35)._shouldForward('untouched'),
                t.Ab(n, 35)._shouldForward('touched'),
                t.Ab(n, 35)._shouldForward('pristine'),
                t.Ab(n, 35)._shouldForward('dirty'),
                t.Ab(n, 35)._shouldForward('valid'),
                t.Ab(n, 35)._shouldForward('invalid'),
                t.Ab(n, 35)._shouldForward('pending'),
                !t.Ab(n, 35)._animationsEnabled
              ]),
              l(n, 45, 1, [
                t.Ab(n, 50).ngClassUntouched,
                t.Ab(n, 50).ngClassTouched,
                t.Ab(n, 50).ngClassPristine,
                t.Ab(n, 50).ngClassDirty,
                t.Ab(n, 50).ngClassValid,
                t.Ab(n, 50).ngClassInvalid,
                t.Ab(n, 50).ngClassPending,
                t.Ab(n, 51)._isServer,
                t.Ab(n, 51).id,
                t.Ab(n, 51).placeholder,
                t.Ab(n, 51).disabled,
                t.Ab(n, 51).required,
                (t.Ab(n, 51).readonly && !t.Ab(n, 51)._isNativeSelect) || null,
                t.Ab(n, 51)._ariaDescribedby || null,
                t.Ab(n, 51).errorState,
                t.Ab(n, 51).required.toString()
              ]),
              l(n, 56, 1, [
                'standard' == t.Ab(n, 59).appearance,
                'fill' == t.Ab(n, 59).appearance,
                'outline' == t.Ab(n, 59).appearance,
                'legacy' == t.Ab(n, 59).appearance,
                t.Ab(n, 59)._control.errorState,
                t.Ab(n, 59)._canLabelFloat,
                t.Ab(n, 59)._shouldLabelFloat(),
                t.Ab(n, 59)._hasFloatingLabel(),
                t.Ab(n, 59)._hideControlPlaceholder(),
                t.Ab(n, 59)._control.disabled,
                t.Ab(n, 59)._control.autofilled,
                t.Ab(n, 59)._control.focused,
                'accent' == t.Ab(n, 59).color,
                'warn' == t.Ab(n, 59).color,
                t.Ab(n, 59)._shouldForward('untouched'),
                t.Ab(n, 59)._shouldForward('touched'),
                t.Ab(n, 59)._shouldForward('pristine'),
                t.Ab(n, 59)._shouldForward('dirty'),
                t.Ab(n, 59)._shouldForward('valid'),
                t.Ab(n, 59)._shouldForward('invalid'),
                t.Ab(n, 59)._shouldForward('pending'),
                !t.Ab(n, 59)._animationsEnabled
              ]),
              l(n, 69, 1, [
                t.Ab(n, 74).ngClassUntouched,
                t.Ab(n, 74).ngClassTouched,
                t.Ab(n, 74).ngClassPristine,
                t.Ab(n, 74).ngClassDirty,
                t.Ab(n, 74).ngClassValid,
                t.Ab(n, 74).ngClassInvalid,
                t.Ab(n, 74).ngClassPending,
                t.Ab(n, 75)._isServer,
                t.Ab(n, 75).id,
                t.Ab(n, 75).placeholder,
                t.Ab(n, 75).disabled,
                t.Ab(n, 75).required,
                (t.Ab(n, 75).readonly && !t.Ab(n, 75)._isNativeSelect) || null,
                t.Ab(n, 75)._ariaDescribedby || null,
                t.Ab(n, 75).errorState,
                t.Ab(n, 75).required.toString()
              ]),
              l(n, 81, 1, [
                'standard' == t.Ab(n, 84).appearance,
                'fill' == t.Ab(n, 84).appearance,
                'outline' == t.Ab(n, 84).appearance,
                'legacy' == t.Ab(n, 84).appearance,
                t.Ab(n, 84)._control.errorState,
                t.Ab(n, 84)._canLabelFloat,
                t.Ab(n, 84)._shouldLabelFloat(),
                t.Ab(n, 84)._hasFloatingLabel(),
                t.Ab(n, 84)._hideControlPlaceholder(),
                t.Ab(n, 84)._control.disabled,
                t.Ab(n, 84)._control.autofilled,
                t.Ab(n, 84)._control.focused,
                'accent' == t.Ab(n, 84).color,
                'warn' == t.Ab(n, 84).color,
                t.Ab(n, 84)._shouldForward('untouched'),
                t.Ab(n, 84)._shouldForward('touched'),
                t.Ab(n, 84)._shouldForward('pristine'),
                t.Ab(n, 84)._shouldForward('dirty'),
                t.Ab(n, 84)._shouldForward('valid'),
                t.Ab(n, 84)._shouldForward('invalid'),
                t.Ab(n, 84)._shouldForward('pending'),
                !t.Ab(n, 84)._animationsEnabled
              ]),
              l(n, 94, 1, [
                t.Ab(n, 99).ngClassUntouched,
                t.Ab(n, 99).ngClassTouched,
                t.Ab(n, 99).ngClassPristine,
                t.Ab(n, 99).ngClassDirty,
                t.Ab(n, 99).ngClassValid,
                t.Ab(n, 99).ngClassInvalid,
                t.Ab(n, 99).ngClassPending,
                t.Ab(n, 100)._isServer,
                t.Ab(n, 100).id,
                t.Ab(n, 100).placeholder,
                t.Ab(n, 100).disabled,
                t.Ab(n, 100).required,
                (t.Ab(n, 100).readonly && !t.Ab(n, 100)._isNativeSelect) ||
                  null,
                t.Ab(n, 100)._ariaDescribedby || null,
                t.Ab(n, 100).errorState,
                t.Ab(n, 100).required.toString()
              ]),
              l(n, 108, 1, [
                'standard' == t.Ab(n, 111).appearance,
                'fill' == t.Ab(n, 111).appearance,
                'outline' == t.Ab(n, 111).appearance,
                'legacy' == t.Ab(n, 111).appearance,
                t.Ab(n, 111)._control.errorState,
                t.Ab(n, 111)._canLabelFloat,
                t.Ab(n, 111)._shouldLabelFloat(),
                t.Ab(n, 111)._hasFloatingLabel(),
                t.Ab(n, 111)._hideControlPlaceholder(),
                t.Ab(n, 111)._control.disabled,
                t.Ab(n, 111)._control.autofilled,
                t.Ab(n, 111)._control.focused,
                'accent' == t.Ab(n, 111).color,
                'warn' == t.Ab(n, 111).color,
                t.Ab(n, 111)._shouldForward('untouched'),
                t.Ab(n, 111)._shouldForward('touched'),
                t.Ab(n, 111)._shouldForward('pristine'),
                t.Ab(n, 111)._shouldForward('dirty'),
                t.Ab(n, 111)._shouldForward('valid'),
                t.Ab(n, 111)._shouldForward('invalid'),
                t.Ab(n, 111)._shouldForward('pending'),
                !t.Ab(n, 111)._animationsEnabled
              ]),
              l(n, 121, 1, [
                ((null == t.Ab(n, 123)._datepicker
                  ? null
                  : t.Ab(n, 123)._datepicker.opened) &&
                  t.Ab(n, 123)._datepicker.id) ||
                  null,
                t.Ab(n, 123).min
                  ? t.Ab(n, 123)._dateAdapter.toIso8601(t.Ab(n, 123).min)
                  : null,
                t.Ab(n, 123).max
                  ? t.Ab(n, 123)._dateAdapter.toIso8601(t.Ab(n, 123).max)
                  : null,
                t.Ab(n, 123).disabled,
                t.Ab(n, 128).ngClassUntouched,
                t.Ab(n, 128).ngClassTouched,
                t.Ab(n, 128).ngClassPristine,
                t.Ab(n, 128).ngClassDirty,
                t.Ab(n, 128).ngClassValid,
                t.Ab(n, 128).ngClassInvalid,
                t.Ab(n, 128).ngClassPending,
                t.Ab(n, 130)._isServer,
                t.Ab(n, 130).id,
                t.Ab(n, 130).placeholder,
                t.Ab(n, 130).disabled,
                t.Ab(n, 130).required,
                (t.Ab(n, 130).readonly && !t.Ab(n, 130)._isNativeSelect) ||
                  null,
                t.Ab(n, 130)._ariaDescribedby || null,
                t.Ab(n, 130).errorState,
                t.Ab(n, 130).required.toString()
              ]),
              l(
                n,
                133,
                0,
                -1,
                t.Ab(n, 135).datepicker && t.Ab(n, 135).datepicker.opened,
                t.Ab(n, 135).datepicker &&
                  'accent' === t.Ab(n, 135).datepicker.color,
                t.Ab(n, 135).datepicker &&
                  'warn' === t.Ab(n, 135).datepicker.color
              ),
              l(n, 142, 1, [
                'standard' == t.Ab(n, 145).appearance,
                'fill' == t.Ab(n, 145).appearance,
                'outline' == t.Ab(n, 145).appearance,
                'legacy' == t.Ab(n, 145).appearance,
                t.Ab(n, 145)._control.errorState,
                t.Ab(n, 145)._canLabelFloat,
                t.Ab(n, 145)._shouldLabelFloat(),
                t.Ab(n, 145)._hasFloatingLabel(),
                t.Ab(n, 145)._hideControlPlaceholder(),
                t.Ab(n, 145)._control.disabled,
                t.Ab(n, 145)._control.autofilled,
                t.Ab(n, 145)._control.focused,
                'accent' == t.Ab(n, 145).color,
                'warn' == t.Ab(n, 145).color,
                t.Ab(n, 145)._shouldForward('untouched'),
                t.Ab(n, 145)._shouldForward('touched'),
                t.Ab(n, 145)._shouldForward('pristine'),
                t.Ab(n, 145)._shouldForward('dirty'),
                t.Ab(n, 145)._shouldForward('valid'),
                t.Ab(n, 145)._shouldForward('invalid'),
                t.Ab(n, 145)._shouldForward('pending'),
                !t.Ab(n, 145)._animationsEnabled
              ]),
              l(n, 155, 1, [
                t.Ab(n, 157).minlength ? t.Ab(n, 157).minlength : null,
                t.Ab(n, 158).maxlength ? t.Ab(n, 158).maxlength : null,
                t.Ab(n, 163).ngClassUntouched,
                t.Ab(n, 163).ngClassTouched,
                t.Ab(n, 163).ngClassPristine,
                t.Ab(n, 163).ngClassDirty,
                t.Ab(n, 163).ngClassValid,
                t.Ab(n, 163).ngClassInvalid,
                t.Ab(n, 163).ngClassPending,
                t.Ab(n, 165)._isServer,
                t.Ab(n, 165).id,
                t.Ab(n, 165).placeholder,
                t.Ab(n, 165).disabled,
                t.Ab(n, 165).required,
                (t.Ab(n, 165).readonly && !t.Ab(n, 165)._isNativeSelect) ||
                  null,
                t.Ab(n, 165)._ariaDescribedby || null,
                t.Ab(n, 165).errorState,
                t.Ab(n, 165).required.toString()
              ]),
              l(n, 168, 0, 'end' == t.Ab(n, 169).align, t.Ab(n, 169).id, null),
              l(
                n,
                170,
                0,
                null == e.form.get('description').value
                  ? null
                  : e.form.get('description').value.length
              ),
              l(
                n,
                182,
                0,
                t.Ib(
                  n,
                  182,
                  0,
                  t.Ab(n, 183).transform('anms.examples.form.text2')
                )
              ),
              l(n, 185, 1, [
                t.Ab(n, 186).tabIndex,
                t.Ab(n, 186).disabled,
                t.Ab(n, 186).max,
                t.Ab(n, 186).min,
                t.Ab(n, 186).value,
                t.Ab(n, 186).vertical ? 'vertical' : 'horizontal',
                t.Ab(n, 186).disabled,
                t.Ab(n, 186).tickInterval,
                !t.Ab(n, 186).vertical,
                t.Ab(n, 186)._invertAxis,
                t.Ab(n, 186)._isSliding,
                t.Ab(n, 186).thumbLabel,
                t.Ab(n, 186).vertical,
                t.Ab(n, 186)._isMinValue,
                t.Ab(n, 186).disabled ||
                  (t.Ab(n, 186)._isMinValue &&
                    t.Ab(n, 186)._thumbGap &&
                    t.Ab(n, 186)._invertAxis),
                'NoopAnimations' === t.Ab(n, 186)._animationMode,
                t.Ab(n, 190).ngClassUntouched,
                t.Ab(n, 190).ngClassTouched,
                t.Ab(n, 190).ngClassPristine,
                t.Ab(n, 190).ngClassDirty,
                t.Ab(n, 190).ngClassValid,
                t.Ab(n, 190).ngClassInvalid,
                t.Ab(n, 190).ngClassPending
              ]),
              l(n, 192, 1, [
                t.Ab(n, 195).id,
                null,
                t.Ab(n, 195).indeterminate,
                t.Ab(n, 195).checked,
                t.Ab(n, 195).disabled,
                'before' == t.Ab(n, 195).labelPosition,
                'NoopAnimations' === t.Ab(n, 195)._animationMode,
                t.Ab(n, 199).ngClassUntouched,
                t.Ab(n, 199).ngClassTouched,
                t.Ab(n, 199).ngClassPristine,
                t.Ab(n, 199).ngClassDirty,
                t.Ab(n, 199).ngClassValid,
                t.Ab(n, 199).ngClassInvalid,
                t.Ab(n, 199).ngClassPending
              ]),
              l(
                n,
                200,
                0,
                t.Ib(
                  n,
                  200,
                  0,
                  t.Ab(n, 201).transform('anms.examples.form.text1')
                )
              ),
              l(
                n,
                203,
                0,
                t.Ab(n, 206).disabled || null,
                'NoopAnimations' === t.Ab(n, 206)._animationMode
              ),
              l(
                n,
                207,
                0,
                t.Ib(
                  n,
                  207,
                  0,
                  t.Ab(n, 208).transform('anms.examples.form.send')
                )
              ),
              l(
                n,
                209,
                0,
                t.Ab(n, 212).disabled || null,
                'NoopAnimations' === t.Ab(n, 212)._animationMode
              ),
              l(
                n,
                213,
                0,
                t.Ib(
                  n,
                  213,
                  0,
                  t.Ab(n, 214).transform('anms.examples.form.save')
                )
              ),
              l(
                n,
                215,
                0,
                t.Ab(n, 218).disabled || null,
                'NoopAnimations' === t.Ab(n, 218)._animationMode
              ),
              l(
                n,
                219,
                0,
                t.Ib(
                  n,
                  219,
                  0,
                  t.Ab(n, 220).transform('anms.examples.form.reset')
                )
              );
          }
        );
      }
      function nt(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-form',
              [],
              null,
              null,
              null,
              lt,
              Re
            )),
            t.pb(1, 114688, null, 0, Be, [H.e, P.o, x.j, nn.a], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var et = t.mb('anms-form', Be, nt, {}, {}, []);
      class tt {
        constructor(l) {
          (this.notificationService = l), (this.routeAnimationsElements = L.d);
        }
        ngOnInit() {}
        default() {
          this.notificationService.default('Default message');
        }
        info() {
          this.notificationService.info('Info message');
        }
        success() {
          this.notificationService.success('Success message');
        }
        warn() {
          this.notificationService.warn('Warning message');
        }
        error() {
          this.notificationService.error('Error message');
        }
      }
      var at = t.ob({
        encapsulation: 0,
        styles: [
          [
            '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}.item[_ngcontent-%COMP%]{margin:10px 0}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:12px 0 0 20px}'
          ]
        ],
        data: {}
      });
      function it(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              56,
              'div',
              [['class', 'container'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(1, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(
              2,
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
            t.qb(
              3,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'col-12']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              4,
              0,
              null,
              null,
              2,
              'h1',
              [['class', 'main-heading']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(5, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              7,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'row item']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              9,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(
              10,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'col-3 default'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n && (t = !1 !== l.component.default() && t), t
                );
              },
              K.d,
              K.b
            )),
            t.pb(11, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            (l()(), t.Hb(12, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              14,
              0,
              null,
              null,
              2,
              'p',
              [['class', 'col-9']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(15, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              17,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'row item']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              19,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(
              20,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'col-3 information'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.info() && t), t;
              },
              K.d,
              K.b
            )),
            t.pb(21, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            (l()(), t.Hb(22, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              24,
              0,
              null,
              null,
              2,
              'p',
              [['class', 'col-9']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(25, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              27,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'row item']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              29,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(
              30,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'col-3 success'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n && (t = !1 !== l.component.success() && t), t
                );
              },
              K.d,
              K.b
            )),
            t.pb(31, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            (l()(), t.Hb(32, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              34,
              0,
              null,
              null,
              2,
              'p',
              [['class', 'col-9']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(35, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              37,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'row item']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              39,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(
              40,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'col-3 warning'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return 'click' === n && (t = !1 !== l.component.warn() && t), t;
              },
              K.d,
              K.b
            )),
            t.pb(41, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            (l()(), t.Hb(42, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              44,
              0,
              null,
              null,
              2,
              'p',
              [['class', 'col-9']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(45, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              47,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'row item']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              49,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(
              50,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'col-3 error'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n && (t = !1 !== l.component.error() && t), t
                );
              },
              K.d,
              K.b
            )),
            t.pb(51, 180224, null, 0, Y.b, [t.k, g.h, [2, w.a]], null, null),
            (l()(), t.Hb(52, 0, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              54,
              0,
              null,
              null,
              2,
              'p',
              [['class', 'col-9']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(55, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          function(l, n) {
            var e = n.component;
            l(n, 1, 0),
              l(n, 9, 0, 'row item', e.routeAnimationsElements),
              l(n, 19, 0, 'row item', e.routeAnimationsElements),
              l(n, 29, 0, 'row item', e.routeAnimationsElements),
              l(n, 39, 0, 'row item', e.routeAnimationsElements),
              l(n, 49, 0, 'row item', e.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              t.Ib(
                n,
                5,
                0,
                t.Ab(n, 6).transform('anms.examples.notifications.title')
              )
            ),
              l(
                n,
                10,
                0,
                t.Ab(n, 11).disabled || null,
                'NoopAnimations' === t.Ab(n, 11)._animationMode
              ),
              l(
                n,
                12,
                0,
                t.Ib(
                  n,
                  12,
                  0,
                  t
                    .Ab(n, 13)
                    .transform('anms.examples.notifications.default.title')
                )
              ),
              l(
                n,
                15,
                0,
                t.Ib(
                  n,
                  15,
                  0,
                  t
                    .Ab(n, 16)
                    .transform(
                      'anms.examples.notifications.default.description'
                    )
                )
              ),
              l(
                n,
                20,
                0,
                t.Ab(n, 21).disabled || null,
                'NoopAnimations' === t.Ab(n, 21)._animationMode
              ),
              l(
                n,
                22,
                0,
                t.Ib(
                  n,
                  22,
                  0,
                  t
                    .Ab(n, 23)
                    .transform('anms.examples.notifications.info.title')
                )
              ),
              l(
                n,
                25,
                0,
                t.Ib(
                  n,
                  25,
                  0,
                  t
                    .Ab(n, 26)
                    .transform('anms.examples.notifications.info.description')
                )
              ),
              l(
                n,
                30,
                0,
                t.Ab(n, 31).disabled || null,
                'NoopAnimations' === t.Ab(n, 31)._animationMode
              ),
              l(
                n,
                32,
                0,
                t.Ib(
                  n,
                  32,
                  0,
                  t
                    .Ab(n, 33)
                    .transform('anms.examples.notifications.success.title')
                )
              ),
              l(
                n,
                35,
                0,
                t.Ib(
                  n,
                  35,
                  0,
                  t
                    .Ab(n, 36)
                    .transform(
                      'anms.examples.notifications.success.description'
                    )
                )
              ),
              l(
                n,
                40,
                0,
                t.Ab(n, 41).disabled || null,
                'NoopAnimations' === t.Ab(n, 41)._animationMode
              ),
              l(
                n,
                42,
                0,
                t.Ib(
                  n,
                  42,
                  0,
                  t
                    .Ab(n, 43)
                    .transform('anms.examples.notifications.warning.title')
                )
              ),
              l(
                n,
                45,
                0,
                t.Ib(
                  n,
                  45,
                  0,
                  t
                    .Ab(n, 46)
                    .transform(
                      'anms.examples.notifications.warning.description'
                    )
                )
              ),
              l(
                n,
                50,
                0,
                t.Ab(n, 51).disabled || null,
                'NoopAnimations' === t.Ab(n, 51)._animationMode
              ),
              l(
                n,
                52,
                0,
                t.Ib(
                  n,
                  52,
                  0,
                  t
                    .Ab(n, 53)
                    .transform('anms.examples.notifications.error.title')
                )
              ),
              l(
                n,
                55,
                0,
                t.Ib(
                  n,
                  55,
                  0,
                  t
                    .Ab(n, 56)
                    .transform('anms.examples.notifications.error.description')
                )
              );
          }
        );
      }
      function ut(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-notifications',
              [],
              null,
              null,
              null,
              it,
              at
            )),
            t.pb(1, 114688, null, 0, tt, [nn.a], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var ot = t.mb('anms-notifications', tt, ut, {}, {}, []);
      const rt = '@angular-extensions/elements',
        st = (() => {
          class l {
            constructor() {
              this.registry = new Map();
            }
            loadElement(l, n, e = !1) {
              if (!l) throw new Error(`${rt} - url for <${n}> not found`);
              if (!n)
                throw new Error(
                  `${rt} - tag for '${l}' not found, the *axLazyElement has to be used on HTML element`
                );
              if (!this.hasElement(l)) {
                const n = this.addElement(l),
                  t = document.createElement('script');
                e && (t.type = 'module'),
                  (t.src = l),
                  (t.onload = n.resolve),
                  (t.onerror = n.reject),
                  document.body.appendChild(t);
              }
              return this.registry.get(this.stripUrlProtocol(l));
            }
            addElement(l) {
              let n;
              return (
                this.registry.set(
                  this.stripUrlProtocol(l),
                  new Promise((l, e) => (n = { resolve: l, reject: e }))
                ),
                n
              );
            }
            hasElement(l) {
              return this.registry.has(this.stripUrlProtocol(l));
            }
            stripUrlProtocol(l) {
              return l.replace(/https?:\/\//, '');
            }
          }
          return (
            (l.ngInjectableDef = Object(t.Lb)({
              factory: function() {
                return new l();
              },
              token: l,
              providedIn: 'root'
            })),
            l
          );
        })(),
        bt = (() =>
          class {
            constructor(l, n, e) {
              (this.vcr = l),
                (this.template = n),
                (this.elementsLoaderService = e);
            }
            ngOnInit() {
              const l = this.template._def.element.template.nodes[0].element
                .name;
              this.loadingTemplateRef &&
                this.vcr.createEmbeddedView(this.loadingTemplateRef),
                this.elementsLoaderService
                  .loadElement(this.url, l, this.isModule)
                  .then(() => {
                    this.vcr.clear(),
                      this.vcr.createEmbeddedView(this.template);
                  })
                  .catch(() => {
                    this.vcr.clear(),
                      this.errorTemplateRef
                        ? this.vcr.createEmbeddedView(this.errorTemplateRef)
                        : console.error(
                            `@angular-extensions/elements - Loading of element <${l}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element`
                          );
                  });
            }
          })(),
        ct = (() => class {})();
      class dt {
        constructor() {
          (this.routeAnimationsElements = m.a), (this.counter = 0);
        }
        ngOnInit() {}
        increment() {
          this.counter++;
        }
      }
      var mt = t.ob({
        encapsulation: 0,
        styles: [
          [
            '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}'
          ]
        ],
        data: {}
      });
      function pt(l) {
        return t.Jb(
          0,
          [(l()(), t.Hb(-1, null, ['Loading of element failed...']))],
          null,
          null
        );
      }
      function ft(l) {
        return t.Jb(0, [(l()(), t.Hb(-1, null, ['Loading...']))], null, null);
      }
      function ht(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'mwc-button',
              [['raised', '']],
              null,
              [[null, 'click']],
              function(l, n, e) {
                var t = !0;
                return (
                  'click' === n && (t = !1 !== l.component.increment() && t), t
                );
              },
              null,
              null
            )),
            (l()(), t.Hb(-1, null, [' Increment ']))
          ],
          null,
          null
        );
      }
      function gt(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              63,
              'div',
              [['class', 'container']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              1,
              0,
              null,
              null,
              5,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'col-md-12']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              3,
              0,
              null,
              null,
              3,
              'h1',
              [['class', 'main-heading'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(4, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(), t.Hb(5, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              7,
              0,
              null,
              null,
              56,
              'div',
              [['class', 'row'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              9,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            t.pb(10, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(
              11,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'col-md-12 col-lg-6']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.fb(0, [['error', 2]], null, 0, null, pt)),
            (l()(), t.fb(0, [['loading', 2]], null, 0, null, ft)),
            (l()(), t.fb(16777216, null, null, 1, null, ht)),
            t.pb(
              15,
              81920,
              null,
              0,
              bt,
              [t.O, t.L, st],
              {
                url: [0, 'url'],
                loadingTemplateRef: [1, 'loadingTemplateRef'],
                errorTemplateRef: [2, 'errorTemplateRef'],
                isModule: [3, 'isModule']
              },
              null
            ),
            (l()(),
            t.qb(16, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            t.qb(17, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            t.qb(18, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(19, null, ['', ': ', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              21,
              0,
              null,
              null,
              42,
              'div',
              [['class', 'col-md-12 col-lg-6']],
              null,
              null,
              null,
              null,
              null
            )),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              23,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            t.qb(24, 0, null, null, 6, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(25, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              27,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.Hb(-1, null, [
              'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module'
            ])),
            (l()(), t.Hb(29, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(31, 0, null, null, 10, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(32, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              34,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['*axLazyElement'])),
            (l()(), t.Hb(36, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              38,
              0,
              null,
              null,
              1,
              'code',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(-1, null, ['@angular-extensions/elements'])),
            (l()(), t.Hb(40, null, [' ', '. '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(42, 0, null, null, 21, 'p', [], null, null, null, null, null)),
            (l()(), t.Hb(43, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              45,
              0,
              null,
              null,
              2,
              'a',
              [
                ['href', 'https://github.com/angular-extensions/elements'],
                ['target', '_blank']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(46, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.Hb(-1, null, [', '])),
            (l()(),
            t.qb(
              49,
              0,
              null,
              null,
              2,
              'a',
              [
                [
                  'href',
                  'https://angular-extensions.github.io/elements/#/docs/use-cases'
                ],
                ['target', '_blank']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(50, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.Hb(52, null, [' ', ' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              55,
              0,
              null,
              null,
              2,
              'a',
              [
                [
                  'href',
                  'https://angular-extensions.github.io/elements/#/examples'
                ],
                ['target', '_blank']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(56, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.Hb(58, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(
              60,
              0,
              null,
              null,
              2,
              'a',
              [
                [
                  'href',
                  'https://angular-extensions.github.io/elements/#/docs'
                ],
                ['target', '_blank']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(61, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(), t.Hb(-1, null, ['... ']))
          ],
          function(l, n) {
            var e = n.component;
            l(n, 4, 0),
              l(n, 9, 0, 'row', e.routeAnimationsElements),
              l(n, 10, 0),
              l(
                n,
                15,
                0,
                'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module',
                t.Ab(n, 13),
                t.Ab(n, 12),
                !0
              ),
              l(n, 23, 0, 'col-md-12 col-lg-6', e.routeAnimationsElements);
          },
          function(l, n) {
            var e = n.component;
            l(
              n,
              5,
              0,
              t.Ib(
                n,
                5,
                0,
                t.Ab(n, 6).transform('anms.examples.elements.title')
              )
            ),
              l(
                n,
                19,
                0,
                t.Ib(
                  n,
                  19,
                  0,
                  t.Ab(n, 20).transform('anms.examples.elements.counter')
                ),
                e.counter
              ),
              l(
                n,
                25,
                0,
                t.Ib(
                  n,
                  25,
                  0,
                  t.Ab(n, 26).transform('anms.examples.elements.text1')
                )
              ),
              l(
                n,
                29,
                0,
                t.Ib(
                  n,
                  29,
                  0,
                  t.Ab(n, 30).transform('anms.examples.elements.text2')
                )
              ),
              l(
                n,
                32,
                0,
                t.Ib(
                  n,
                  32,
                  0,
                  t.Ab(n, 33).transform('anms.examples.elements.text3')
                )
              ),
              l(
                n,
                36,
                0,
                t.Ib(
                  n,
                  36,
                  0,
                  t.Ab(n, 37).transform('anms.examples.elements.text4')
                )
              ),
              l(
                n,
                40,
                0,
                t.Ib(
                  n,
                  40,
                  0,
                  t.Ab(n, 41).transform('anms.examples.elements.text5')
                )
              ),
              l(
                n,
                43,
                0,
                t.Ib(
                  n,
                  43,
                  0,
                  t.Ab(n, 44).transform('anms.examples.elements.text6')
                )
              ),
              l(
                n,
                46,
                0,
                t.Ib(
                  n,
                  46,
                  0,
                  t.Ab(n, 47).transform('anms.examples.elements.text5')
                )
              ),
              l(
                n,
                50,
                0,
                t.Ib(
                  n,
                  50,
                  0,
                  t.Ab(n, 51).transform('anms.examples.elements.text7')
                )
              ),
              l(
                n,
                52,
                0,
                t.Ib(
                  n,
                  52,
                  0,
                  t.Ab(n, 53).transform('anms.examples.elements.text8')
                ),
                t.Ib(
                  n,
                  52,
                  1,
                  t.Ab(n, 54).transform('anms.examples.elements.text9')
                )
              ),
              l(
                n,
                56,
                0,
                t.Ib(
                  n,
                  56,
                  0,
                  t.Ab(n, 57).transform('anms.examples.elements.text10')
                )
              ),
              l(
                n,
                58,
                0,
                t.Ib(
                  n,
                  58,
                  0,
                  t.Ab(n, 59).transform('anms.examples.elements.text11')
                )
              ),
              l(
                n,
                61,
                0,
                t.Ib(
                  n,
                  61,
                  0,
                  t.Ab(n, 62).transform('anms.examples.elements.text12')
                )
              );
          }
        );
      }
      function At(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-elements',
              [],
              null,
              null,
              null,
              gt,
              mt
            )),
            t.pb(1, 114688, null, 0, dt, [], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var kt = t.mb('anms-elements', dt, At, {}, {}, []);
      class xt {
        constructor() {
          this.routeAnimationsElements = L.d;
        }
        ngOnInit() {}
      }
      var vt = t.ob({
        encapsulation: 0,
        styles: [
          [
            '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}'
          ]
        ],
        data: {}
      });
      function yt(l) {
        return t.Jb(
          2,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              16,
              'div',
              [['class', 'container'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            t.pb(1, 212992, null, 0, X.a, [t.k, x.j], null, null),
            (l()(),
            t.qb(
              2,
              0,
              null,
              null,
              14,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              3,
              0,
              null,
              null,
              13,
              'div',
              [['class', 'col-12']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            t.qb(
              4,
              0,
              null,
              null,
              2,
              'h1',
              [['class', 'main-heading']],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), t.Hb(5, null, ['', ''])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              9,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            (l()(), t.Hb(10, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h]),
            (l()(),
            t.qb(12, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            t.Eb(512, null, A.y, A.z, [t.r, t.s, t.k, t.D]),
            t.pb(
              14,
              278528,
              null,
              0,
              A.i,
              [A.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            (l()(), t.Hb(15, null, [' ', ' '])),
            t.Cb(131072, x.i, [x.j, t.h])
          ],
          function(l, n) {
            var e = n.component;
            l(n, 1, 0),
              l(n, 9, 0, e.routeAnimationsElements),
              l(n, 14, 0, e.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              t.Ib(n, 5, 0, t.Ab(n, 6).transform('anms.examples.auth.title'))
            ),
              l(
                n,
                10,
                0,
                t.Ib(
                  n,
                  10,
                  0,
                  t.Ab(n, 11).transform('anms.examples.auth.description1')
                )
              ),
              l(
                n,
                15,
                0,
                t.Ib(
                  n,
                  15,
                  0,
                  t.Ab(n, 16).transform('anms.examples.auth.description2')
                )
              );
          }
        );
      }
      function _t(l) {
        return t.Jb(
          0,
          [
            (l()(),
            t.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-authenticated',
              [],
              null,
              null,
              null,
              yt,
              vt
            )),
            t.pb(1, 114688, null, 0, xt, [], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Ct = t.mb('anms-authenticated', xt, _t, {}, {}, []),
        qt = e('C05f'),
        wt = e('wqq/');
      class It {
        constructor(l, n, e, t) {
          (this._data = new qt.a(l)),
            (this.data$ = this._data.asObservable().pipe(
              Object(de.a)(l =>
                n ? (t ? t(l) : JSON.parse(JSON.stringify(l))) : l
              ),
              e ? Object(wt.a)(1) : Object(de.a)(l => l)
            ));
        }
        get() {
          return this._data.getValue();
        }
        set(l) {
          this._data.next(l);
        }
      }
      const jt = (() => {
        let l = class {
          create(l) {
            return new It(l, !0, !1);
          }
          createMutable(l) {
            return new It(l, !1, !1);
          }
          createMutableWithSharedSubscription(l) {
            return new It(l, !1, !0);
          }
          createWithCustomClone(l, n) {
            return new It(l, !0, !1, n);
          }
        };
        return (
          (l.ngInjectableDef = Object(t.Lb)({
            factory: function() {
              return new l();
            },
            token: l,
            providedIn: 'root'
          })),
          l
        );
      })();
      var Ot = e('9qA3'),
        Ft = e('yy4G'),
        St = e('uWIS'),
        Et = e('PCNd');
      const Ht = { title: 'anms.examples.menu.todos' },
        Pt = { title: 'anms.examples.menu.stocks' },
        Lt = { title: 'anms.examples.menu.theming' },
        Mt = { title: 'anms.examples.menu.crud' },
        zt = { title: 'anms.examples.menu.simple-state-management' },
        Tt = { title: 'anms.examples.menu.form' },
        Dt = { title: 'anms.examples.menu.notifications' },
        Nt = { title: 'anms.examples.menu.elements' },
        Jt = { title: 'anms.examples.menu.auth' };
      class $t {}
      var Bt = e('6uGs'),
        Rt = e('DyCy'),
        Ut = e('g6G6'),
        Vt = e('Ohay'),
        Gt = e('8j5Y'),
        Xt = e('BnVf');
      class Kt {
        constructor(l, n, e, t, a) {
          (this.actions$ = l),
            (this.store = n),
            (this.translateService = e),
            (this.router = t),
            (this.titleService = a),
            (this.setTranslateServiceLanguage = Object(Rt.c)(
              () => () =>
                this.store.pipe(
                  Object(P.C)(L.j),
                  Object(Vt.a)(),
                  Object(Gt.a)(l => this.translateService.use(l))
                ),
              { dispatch: !1 }
            )),
            (this.setTitle = Object(Rt.c)(
              () =>
                Object(Ut.a)(
                  this.actions$.pipe(Object(Rt.d)(Xt.f)),
                  this.router.events.pipe(Object(Je.a)(l => l instanceof k.b))
                ).pipe(
                  Object(Gt.a)(() => {
                    this.titleService.setTitle(
                      this.router.routerState.snapshot.root,
                      this.translateService
                    );
                  })
                ),
              { dispatch: !1 }
            ));
        }
      }
      var Yt = e('WRUs'),
        Wt = e('w0kG');
      const Qt = 'EXAMPLES.TODOS';
      class Zt {
        constructor(l, n, e) {
          (this.actions$ = l),
            (this.store = n),
            (this.localStorageService = e),
            (this.persistTodos = Object(Rt.c)(
              () =>
                this.actions$.pipe(
                  Object(Rt.d)(xl, _l, yl, vl),
                  Object(Wt.a)(this.store.pipe(Object(P.C)(Xl))),
                  Object(Gt.a)(([l, n]) =>
                    this.localStorageService.setItem(Qt, n)
                  )
                ),
              { dispatch: !1 }
            ));
        }
      }
      var la = e('EP1h'),
        na = e('ROBh');
      class ea {
        constructor() {}
        retrieveStock(l) {
          const n = this.buildResult(l);
          return Object(na.a)(n);
        }
        buildResult(l) {
          return {
            symbol: l,
            exchange: 'Nasdaq',
            last: '124',
            ccy: 'USD',
            change: '1',
            changePositive: !0,
            changeNegative: !1,
            changePercent: '0.81'
          };
        }
      }
      var ta = e('TLy2'),
        aa = e('4e/d');
      const ia = 'EXAMPLES.STOCKS';
      class ua {
        constructor(l, n, e) {
          (this.actions$ = l),
            (this.localStorageService = n),
            (this.service = e),
            (this.retrieveStock = Object(Rt.c)(
              () => ({ debounce: l = 500 } = {}) =>
                this.actions$.pipe(
                  Object(Rt.d)(Il),
                  Object(Gt.a)(l =>
                    this.localStorageService.setItem(ia, { symbol: l.symbol })
                  ),
                  Object(Ne.a)(l),
                  Object(ta.a)(l =>
                    this.service.retrieveStock(l.symbol).pipe(
                      Object(de.a)(l => jl({ stock: l })),
                      Object(aa.a)(l => Object(na.a)(Ol({ error: l })))
                    )
                  )
                )
            ));
        }
      }
      const oa = 'EXAMPLES.BOOKS';
      class ra {
        constructor(l, n, e) {
          (this.actions$ = l),
            (this.store = n),
            (this.localStorageService = e),
            (this.persistBooks = Object(Rt.c)(
              () =>
                this.actions$.pipe(
                  Object(Rt.d)(Ml, zl),
                  Object(Wt.a)(this.store.pipe(Object(P.C)(Un))),
                  Object(Gt.a)(([l, n]) =>
                    this.localStorageService.setItem(oa, n)
                  )
                ),
              { dispatch: !1 }
            ));
        }
      }
      const sa = 'EXAMPLES.FORM';
      class ba {
        constructor(l, n) {
          (this.actions$ = l),
            (this.localStorageService = n),
            (this.persistForm = Object(Rt.c)(
              () =>
                this.actions$.pipe(
                  Object(Rt.d)($l),
                  Object(Gt.a)(l =>
                    this.localStorageService.setItem(sa, { form: l.form })
                  )
                ),
              { dispatch: !1 }
            ));
        }
      }
      var ca = e('gUAp');
      e.d(n, 'ExamplesModuleNgFactory', function() {
        return da;
      });
      var da = t.nb(o, [], function(l) {
        return t.xb([
          t.yb(512, t.j, t.ab, [
            [
              8,
              [
                r.a,
                s.a,
                s.b,
                b.a,
                c.b,
                c.a,
                d.a,
                $,
                cn,
                Sn,
                Dn,
                be,
                Ee,
                et,
                ot,
                kt,
                Ct
              ]
            ],
            [3, t.j],
            t.w
          ]),
          t.yb(4608, A.m, A.l, [t.t, [2, A.D]]),
          t.yb(4608, H.v, H.v, []),
          t.yb(4608, Q.c, Q.c, [
            Q.i,
            Q.e,
            t.j,
            Q.h,
            Q.f,
            t.q,
            t.y,
            A.d,
            _.b,
            [2, A.g]
          ]),
          t.yb(5120, Q.j, Q.k, [Q.c]),
          t.yb(4608, y.c, y.c, []),
          t.yb(5120, S.a, S.b, [Q.c]),
          t.yb(4608, h.b, h.b, []),
          t.yb(5120, W.c, W.j, [Q.c]),
          t.yb(5120, gl.b, gl.c, [Q.c]),
          t.yb(4608, C.e, h.c, [[2, h.g], [2, h.l]]),
          t.yb(4608, H.e, H.e, []),
          t.yb(5120, Me.b, Me.c, [Q.c]),
          t.yb(135680, Me.d, Me.d, [
            Q.c,
            t.q,
            [2, A.g],
            [2, Me.a],
            Me.b,
            [3, Me.d],
            Q.e
          ]),
          t.yb(4608, Le.i, Le.i, []),
          t.yb(5120, Le.a, Le.b, [Q.c]),
          t.yb(4608, h.a, h.v, [[2, h.f], f.a]),
          t.yb(4608, pe, pe, [jt]),
          t.yb(1073742336, A.c, A.c, []),
          t.yb(1073742336, ct, ct, []),
          t.yb(1073742336, H.u, H.u, []),
          t.yb(1073742336, H.h, H.h, []),
          t.yb(1073742336, x.g, x.g, []),
          t.yb(1073742336, _.a, _.a, []),
          t.yb(1073742336, h.l, h.l, [[2, h.d], [2, C.f]]),
          t.yb(1073742336, f.b, f.b, []),
          t.yb(1073742336, h.u, h.u, []),
          t.yb(1073742336, Y.c, Y.c, []),
          t.yb(1073742336, Ot.b, Ot.b, []),
          t.yb(1073742336, q.g, q.g, []),
          t.yb(1073742336, I.c, I.c, []),
          t.yb(1073742336, Q.g, Q.g, []),
          t.yb(1073742336, h.s, h.s, []),
          t.yb(1073742336, h.q, h.q, []),
          t.yb(1073742336, y.d, y.d, []),
          t.yb(1073742336, E.e, E.e, []),
          t.yb(1073742336, S.d, S.d, []),
          t.yb(1073742336, g.a, g.a, []),
          t.yb(1073742336, p.k, p.k, []),
          t.yb(1073742336, kn.c, kn.c, []),
          t.yb(1073742336, An.c, An.c, []),
          t.yb(1073742336, dn.c, dn.c, []),
          t.yb(1073742336, al.d, al.d, []),
          t.yb(1073742336, R.f, R.f, []),
          t.yb(1073742336, Ft.h, Ft.h, []),
          t.yb(1073742336, U.d, U.d, []),
          t.yb(1073742336, U.c, U.c, []),
          t.yb(1073742336, h.m, h.m, []),
          t.yb(1073742336, Nn.b, Nn.b, []),
          t.yb(1073742336, St.c, St.c, []),
          t.yb(1073742336, W.i, W.i, []),
          t.yb(1073742336, W.f, W.f, []),
          t.yb(1073742336, tl.c, tl.c, []),
          t.yb(1073742336, gl.e, gl.e, []),
          t.yb(1073742336, ln.e, ln.e, []),
          t.yb(1073742336, Pe.c, Pe.c, []),
          t.yb(1073742336, ll.f, ll.f, []),
          t.yb(1073742336, H.r, H.r, []),
          t.yb(1073742336, ze.b, ze.b, []),
          t.yb(1073742336, Me.g, Me.g, []),
          t.yb(1073742336, Le.j, Le.j, []),
          t.yb(1073742336, h.w, h.w, []),
          t.yb(1073742336, h.n, h.n, []),
          t.yb(1073742336, Et.a, Et.a, []),
          t.yb(1073742336, k.t, k.t, [[2, k.z], [2, k.p]]),
          t.yb(1073742336, $t, $t, []),
          t.yb(
            1024,
            P.I,
            function() {
              return [{}];
            },
            []
          ),
          t.yb(
            1024,
            P.k,
            function() {
              return [
                {
                  key: 'examples',
                  reducerFactory: P.t,
                  metaReducers: [],
                  initialState: void 0
                }
              ];
            },
            []
          ),
          t.yb(1024, P.J, P.P, [t.q, P.I, P.k]),
          t.yb(
            1024,
            P.H,
            function() {
              return [{ todos: wl, stocks: Sl, books: Jl, form: Vl }];
            },
            []
          ),
          t.yb(
            1024,
            P.K,
            function(l) {
              return [l];
            },
            [P.H]
          ),
          t.yb(
            1024,
            P.b,
            function(l, n, e) {
              return [P.Q(l, n, e)];
            },
            [t.q, P.H, P.K]
          ),
          t.yb(1073873408, P.p, P.p, [P.J, P.b, P.h, P.q]),
          t.yb(1024, x.f, u, [Bt.c]),
          t.yb(512, x.c, x.e, []),
          t.yb(512, x.h, x.d, []),
          t.yb(512, x.b, x.a, []),
          t.yb(256, x.l, void 0, []),
          t.yb(256, x.m, !0, []),
          t.yb(512, x.j, x.j, [x.k, x.f, x.c, x.h, x.b, x.l, x.m]),
          t.yb(512, Kt, Kt, [Rt.a, P.o, x.j, k.p, Yt.a]),
          t.yb(512, Zt, Zt, [Rt.a, P.o, la.a]),
          t.yb(512, ea, ea, []),
          t.yb(512, ua, ua, [Rt.a, la.a, ea]),
          t.yb(512, ra, ra, [Rt.a, P.o, la.a]),
          t.yb(512, ba, ba, [Rt.a, la.a]),
          t.yb(
            1024,
            Rt.i,
            function(l, n, e, t, a) {
              return [Rt.e(l, n, e, t, a)];
            },
            [Kt, Zt, ua, ra, ba]
          ),
          t.yb(1073742336, Rt.g, Rt.g, [Rt.f, Rt.i, [2, P.q], [2, P.p]]),
          t.yb(1073742336, o, o, []),
          t.yb(256, al.a, { separatorKeyCodes: [il.f] }, []),
          t.yb(256, h.e, h.i, []),
          t.yb(
            1024,
            k.n,
            function() {
              return [
                [
                  {
                    path: '',
                    component: M,
                    children: [
                      { path: '', redirectTo: 'todos', pathMatch: 'full' },
                      { path: 'todos', component: Zl, data: Ht },
                      { path: 'stock-market', component: vn, data: Pt },
                      { path: 'theming', component: Ln, data: Lt },
                      { path: 'crud', redirectTo: 'crud/', pathMatch: 'full' },
                      { path: 'crud/:id', component: Kn, data: Mt },
                      {
                        path: 'simple-state-management',
                        component: fe,
                        data: zt
                      },
                      { path: 'form', component: Be, data: Tt },
                      { path: 'notifications', component: tt, data: Dt },
                      { path: 'elements', component: dt, data: Nt },
                      {
                        path: 'authenticated',
                        component: xt,
                        canActivate: [ca.a],
                        data: Jt
                      }
                    ]
                  }
                ]
              ];
            },
            []
          )
        ]);
      });
    },
    IC1n: function(l, n, e) {
      var t = e('fjNU'),
        a = e('X/SR');
      l.exports = function(l, n, e) {
        var i = (n && e) || 0;
        'string' == typeof l &&
          ((n = 'binary' === l ? new Array(16) : null), (l = null));
        var u = (l = l || {}).random || (l.rng || t)();
        if (((u[6] = (15 & u[6]) | 64), (u[8] = (63 & u[8]) | 128), n))
          for (var o = 0; o < 16; ++o) n[i + o] = u[o];
        return n || a(u);
      };
    },
    'X/SR': function(l, n) {
      for (var e = [], t = 0; t < 256; ++t)
        e[t] = (t + 256).toString(16).substr(1);
      l.exports = function(l, n) {
        var t = n || 0;
        return [
          e[l[t++]],
          e[l[t++]],
          e[l[t++]],
          e[l[t++]],
          '-',
          e[l[t++]],
          e[l[t++]],
          '-',
          e[l[t++]],
          e[l[t++]],
          '-',
          e[l[t++]],
          e[l[t++]],
          '-',
          e[l[t++]],
          e[l[t++]],
          e[l[t++]],
          e[l[t++]],
          e[l[t++]],
          e[l[t++]]
        ].join('');
      };
    },
    'YF1/': function(l, n, e) {
      var t,
        a,
        i = e('fjNU'),
        u = e('X/SR'),
        o = 0,
        r = 0;
      l.exports = function(l, n, e) {
        var s = (n && e) || 0,
          b = n || [],
          c = (l = l || {}).node || t,
          d = void 0 !== l.clockseq ? l.clockseq : a;
        if (null == c || null == d) {
          var m = i();
          null == c && (c = t = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]),
            null == d && (d = a = 16383 & ((m[6] << 8) | m[7]));
        }
        var p = void 0 !== l.msecs ? l.msecs : new Date().getTime(),
          f = void 0 !== l.nsecs ? l.nsecs : r + 1,
          h = p - o + (f - r) / 1e4;
        if (
          (h < 0 && void 0 === l.clockseq && (d = (d + 1) & 16383),
          (h < 0 || p > o) && void 0 === l.nsecs && (f = 0),
          f >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (o = p), (r = f), (a = d);
        var g = (1e4 * (268435455 & (p += 122192928e5)) + f) % 4294967296;
        (b[s++] = (g >>> 24) & 255),
          (b[s++] = (g >>> 16) & 255),
          (b[s++] = (g >>> 8) & 255),
          (b[s++] = 255 & g);
        var A = ((p / 4294967296) * 1e4) & 268435455;
        (b[s++] = (A >>> 8) & 255),
          (b[s++] = 255 & A),
          (b[s++] = ((A >>> 24) & 15) | 16),
          (b[s++] = (A >>> 16) & 255),
          (b[s++] = (d >>> 8) | 128),
          (b[s++] = 255 & d);
        for (var k = 0; k < 6; ++k) b[s + k] = c[k];
        return n || u(b);
      };
    },
    fN3Q: function(l, n, e) {
      var t = e('YF1/'),
        a = e('IC1n'),
        i = a;
      (i.v1 = t), (i.v4 = a), (l.exports = i);
    },
    fjNU: function(l, n) {
      var e =
        ('undefined' != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ('undefined' != typeof msCrypto &&
          'function' == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (e) {
        var t = new Uint8Array(16);
        l.exports = function() {
          return e(t), t;
        };
      } else {
        var a = new Array(16);
        l.exports = function() {
          for (var l, n = 0; n < 16; n++)
            0 == (3 & n) && (l = 4294967296 * Math.random()),
              (a[n] = (l >>> ((3 & n) << 3)) & 255);
          return a;
        };
      }
    },
    pQ4S: function(l, n) {
      l.exports =
        "@import '~@angular/material/theming';\r\n\r\n@mixin anms-parent-component-theme($theme) {\r\n  $accent: map-get($theme, accent);\r\n\r\n  anms-parent {\r\n    > .container {\r\n      > .row {\r\n        > .col-md-6 {\r\n          > .example {\r\n            border-color: mat-color($accent);\r\n\r\n            > h1 {\r\n              color: mat-color($accent);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n";
    }
  }
]);
