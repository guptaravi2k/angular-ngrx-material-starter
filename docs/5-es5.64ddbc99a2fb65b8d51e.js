(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    '8iGT': function(l, n, t) {
      'use strict';
      t.r(n);
      var e = t('LoAr'),
        a = t('cCTv'),
        u = t('AytR');
      function i(l) {
        return new a.a(l, u.a.i18nPrefix + '/assets/i18n/examples/', '.json');
      }
      var r = (function() {
          return function() {};
        })(),
        o = t('pLqg'),
        s = t('tjWy'),
        b = t('7tlY'),
        c = t('UUMc'),
        d = t('C9Ky'),
        m = t('0aut'),
        p = t('w9fW'),
        f = t('WV+C'),
        h = t('LYzL'),
        g = t('0xYh'),
        C = t('WT9V'),
        k = t('981U'),
        x = t('zZcu'),
        v = t('QH8h'),
        y = t('y7gG'),
        _ = t('C7Lb'),
        w = t('SeAg'),
        j = t('abkR'),
        E = t('Z5FQ'),
        A = t('IvSS'),
        S = e.qb({
          encapsulation: 2,
          styles: [
            '.mat-tab-nav-bar{overflow:hidden;position:relative;flex-shrink:0}.mat-tab-links{position:relative;display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:0}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-link:focus{outline:dotted 2px}}.mat-tab-link.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-link.mat-tab-disabled{opacity:.5}}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-link{opacity:1}}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media (max-width:599px){.mat-tab-link{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}'
          ],
          data: {}
        });
      function I(l) {
        return e.Lb(
          2,
          [
            e.Hb(402653184, 1, { _inkBar: 0 }),
            (l()(),
            e.sb(
              1,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'mat-tab-links']],
              null,
              [[null, 'cdkObserveContent']],
              function(l, n, t) {
                var e = !0;
                return (
                  'cdkObserveContent' === n &&
                    (e = !1 !== l.component._alignInkBar() && e),
                  e
                );
              },
              null,
              null
            )),
            e.rb(2, 1196032, null, 0, y.a, [y.b, e.k, e.A], null, {
              event: 'cdkObserveContent'
            }),
            e.Bb(null, 0),
            (l()(),
            e.sb(
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
            e.rb(5, 16384, [[1, 4]], 0, p.b, [e.k, e.A, p.l], null, null)
          ],
          null,
          null
        );
      }
      var O = t('rW4h'),
        F = t('CRa1'),
        L = t('Ho7M'),
        P = t('IfiR'),
        K = t('GovN'),
        M = t('pKmL'),
        N = (function() {
          function l(l) {
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
          return (
            (l.prototype.ngOnInit = function() {
              this.isAuthenticated$ = this.store.pipe(Object(K.C)(M.h));
            }),
            l
          );
        })(),
        J = e.qb({
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
      function H(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'click' === n &&
                    (a =
                      !1 !==
                        e
                          .Cb(l, 3)
                          .onClick(
                            t.button,
                            t.ctrlKey,
                            t.metaKey,
                            t.shiftKey
                          ) && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(
              1,
              147456,
              [[1, 4]],
              0,
              p.i,
              [p.j, e.k, e.A, f.a, [2, h.k], [8, null], g.h],
              { disabled: [0, 'disabled'], active: [1, 'active'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            e.rb(
              3,
              671744,
              [[3, 4]],
              0,
              k.s,
              [k.p, k.a, C.h],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            e.rb(
              4,
              1720320,
              [['rla', 4]],
              2,
              k.r,
              [k.p, e.k, e.F, [2, k.q], [2, k.s]],
              { routerLinkActive: [0, 'routerLinkActive'] },
              null
            ),
            e.Hb(603979776, 2, { links: 1 }),
            e.Hb(603979776, 3, { linksWithHrefs: 1 }),
            (l()(), e.Jb(7, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          function(l, n) {
            var t = n.component;
            l(
              n,
              1,
              0,
              n.context.$implicit.auth &&
                !e.Kb(n, 1, 0, e.Cb(n, 2).transform(t.isAuthenticated$)),
              e.Cb(n, 4).isActive
            ),
              l(n, 3, 0, n.context.$implicit.link),
              l(n, 4, 0, '');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              e.Cb(n, 1).active,
              e.Cb(n, 1).disabled.toString(),
              e.Cb(n, 1).tabIndex,
              e.Cb(n, 1).disabled,
              e.Cb(n, 1).active,
              e.Cb(n, 3).target,
              e.Cb(n, 3).href
            ),
              l(
                n,
                7,
                0,
                e.Kb(n, 7, 0, e.Cb(n, 8).transform(n.context.$implicit.label))
              );
          }
        );
      }
      function z(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'click' === n &&
                    (a = !1 !== e.Cb(l, 1)._selectViaInteraction() && a),
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 1)._handleKeydown(t) && a),
                  'click' === n && (a = !1 !== e.Cb(l, 3).onClick() && a),
                  a
                );
              },
              v.c,
              v.a
            )),
            e.rb(
              1,
              8568832,
              [[4, 4]],
              0,
              h.p,
              [e.k, e.h, [2, h.j], [2, h.o]],
              { value: [0, 'value'], disabled: [1, 'disabled'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            e.rb(
              3,
              16384,
              null,
              0,
              k.q,
              [k.p, k.a, [8, null], e.F, e.k],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            (l()(), e.Jb(4, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          function(l, n) {
            var t = n.component;
            l(
              n,
              1,
              0,
              n.context.$implicit,
              n.context.$implicit.auth &&
                !e.Kb(n, 1, 1, e.Cb(n, 2).transform(t.isAuthenticated$))
            ),
              l(n, 3, 0, n.context.$implicit.link);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              e.Cb(n, 1)._getTabIndex(),
              e.Cb(n, 1).selected,
              e.Cb(n, 1).multiple,
              e.Cb(n, 1).active,
              e.Cb(n, 1).id,
              e.Cb(n, 1)._getAriaSelected(),
              e.Cb(n, 1).disabled.toString(),
              e.Cb(n, 1).disabled
            ),
              l(
                n,
                4,
                0,
                e.Kb(n, 4, 0, e.Cb(n, 5).transform(n.context.$implicit.label))
              );
          }
        );
      }
      function T(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
              I,
              S
            )),
            e.rb(
              1,
              3325952,
              null,
              1,
              p.j,
              [e.k, [2, _.b], e.A, e.h, A.e],
              null,
              null
            ),
            e.Hb(603979776, 1, { _tabLinks: 1 }),
            (l()(), e.hb(16777216, null, 0, 1, null, H)),
            e.rb(
              4,
              278528,
              null,
              0,
              C.j,
              [e.Q, e.N, e.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 9)._handleKeydown(t) && a),
                  'focus' === n && (a = !1 !== e.Cb(l, 9)._onFocus() && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 9)._onBlur() && a),
                  a
                );
              },
              O.b,
              O.a
            )),
            e.Gb(6144, null, h.j, null, [F.c]),
            e.Gb(6144, null, L.d, null, [F.c]),
            e.rb(
              9,
              2080768,
              null,
              3,
              F.c,
              [
                A.e,
                e.h,
                e.A,
                h.b,
                e.k,
                [2, _.b],
                [2, P.p],
                [2, P.g],
                [2, L.c],
                [8, null],
                [8, null],
                F.a,
                g.j
              ],
              { placeholder: [0, 'placeholder'], value: [1, 'value'] },
              null
            ),
            e.Hb(603979776, 4, { options: 1 }),
            e.Hb(603979776, 5, { optionGroups: 1 }),
            e.Hb(603979776, 6, { customTrigger: 0 }),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.hb(16777216, null, 1, 1, null, z)),
            e.rb(
              15,
              278528,
              null,
              0,
              C.j,
              [e.Q, e.N, e.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.rb(
              18,
              212992,
              [['o', 4]],
              0,
              k.u,
              [k.c, e.Q, e.j, [8, null], e.h],
              null,
              null
            )
          ],
          function(l, n) {
            var t = n.component;
            l(n, 4, 0, t.examples),
              l(
                n,
                9,
                0,
                e.Kb(n, 9, 0, e.Cb(n, 13).transform('anms.examples.title')),
                'todos'
              ),
              l(n, 15, 0, t.examples),
              l(n, 18, 0);
          },
          function(l, n) {
            l(n, 6, 1, [
              e.Cb(n, 9).id,
              e.Cb(n, 9).tabIndex,
              e.Cb(n, 9)._getAriaLabel(),
              e.Cb(n, 9)._getAriaLabelledby(),
              e.Cb(n, 9).required.toString(),
              e.Cb(n, 9).disabled.toString(),
              e.Cb(n, 9).errorState,
              e.Cb(n, 9).panelOpen ? e.Cb(n, 9)._optionIds : null,
              e.Cb(n, 9).multiple,
              e.Cb(n, 9)._ariaDescribedby || null,
              e.Cb(n, 9)._getAriaActiveDescendant(),
              e.Cb(n, 9).disabled,
              e.Cb(n, 9).errorState,
              e.Cb(n, 9).required,
              e.Cb(n, 9).empty
            ]),
              l(
                n,
                16,
                0,
                e.Cb(n, 18).isActivated &&
                  e.Cb(n, 18).activatedRoute.routeConfig.path
              );
          }
        );
      }
      function q(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              T,
              J
            )),
            e.rb(1, 114688, null, 0, N, [K.o], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var G = e.ob('anms-examples', N, q, {}, {}, []),
        Q = t('1P7/'),
        D = t('XIB+'),
        B = t('z1EI'),
        $ = e.qb({
          encapsulation: 2,
          styles: [
            '@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media (hover:none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}'
          ],
          data: {}
        });
      function R(l) {
        return e.Lb(
          2,
          [
            e.Hb(671088640, 1, { _inputElement: 0 }),
            e.Hb(671088640, 2, { ripple: 0 }),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
              function(l, n, t) {
                var e = !0,
                  a = l.component;
                return (
                  'change' === n && (e = !1 !== a._onInteractionEvent(t) && e),
                  'click' === n && (e = !1 !== a._onInputClick(t) && e),
                  e
                );
              },
              null,
              null
            )),
            (l()(),
            e.sb(
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
            e.rb(
              6,
              212992,
              [[2, 4]],
              0,
              h.t,
              [e.k, e.A, f.a, [2, h.k], [2, E.a]],
              {
                centered: [0, 'centered'],
                radius: [1, 'radius'],
                animation: [2, 'animation'],
                disabled: [3, 'disabled'],
                trigger: [4, 'trigger']
              },
              null
            ),
            e.Fb(7, { enterDuration: 0 }),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.sb(
              14,
              0,
              [['checkboxLabel', 1]],
              null,
              4,
              'span',
              [['class', 'mat-checkbox-label']],
              null,
              [[null, 'cdkObserveContent']],
              function(l, n, t) {
                var e = !0;
                return (
                  'cdkObserveContent' === n &&
                    (e = !1 !== l.component._onLabelTextChange() && e),
                  e
                );
              },
              null,
              null
            )),
            e.rb(15, 1196032, null, 0, y.a, [y.b, e.k, e.A], null, {
              event: 'cdkObserveContent'
            }),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['\xa0'])),
            e.Bb(null, 0)
          ],
          function(l, n) {
            var t = n.component,
              a = l(n, 7, 0, 150);
            l(n, 6, 0, !0, 20, a, t._isRippleDisabled(), e.Cb(n, 2));
          },
          function(l, n) {
            var t = n.component;
            l(n, 2, 0, t.inputId),
              l(
                n,
                3,
                0,
                !e.Cb(n, 14).textContent || !e.Cb(n, 14).textContent.trim()
              ),
              l(n, 4, 1, [
                t.inputId,
                t.required,
                t.checked,
                t.value,
                t.disabled,
                t.name,
                t.tabIndex,
                t.indeterminate,
                t.ariaLabel || null,
                t.ariaLabelledby,
                t._getAriaChecked()
              ]),
              l(n, 5, 0, e.Cb(n, 6).unbounded);
          }
        );
      }
      var U = t('cz58'),
        V = t('Gien'),
        X = t('GcYS'),
        Y = t('5kg2'),
        W = t('eXL1'),
        Z = t('iwai'),
        ll = t('FOLC'),
        nl = t('2tfK'),
        tl = t('Hc9t'),
        el = t('rXXt'),
        al = t('a198'),
        ul = t('rh80'),
        il = e.qb({
          encapsulation: 2,
          styles: [
            ".mat-chip{position:relative;overflow:hidden;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0)}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:'';pointer-events:none;transition:opacity .2s cubic-bezier(.35,0,.25,1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:0}.mat-standard-chip:focus::after{opacity:.16}@media (-ms-high-contrast:active){.mat-standard-chip{outline:solid 1px}.mat-standard-chip:focus{outline:dotted 2px}}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper .mat-standard-chip,.mat-chip-list-wrapper input.mat-input-element{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}"
          ],
          data: {}
        });
      function rl(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.Bb(null, 0)
          ],
          null,
          null
        );
      }
      var ol = (function() {
          return function() {
            (this.value = ''), (this.disabled = !1), (this.hasFocus = !1);
          };
        })(),
        sl = e.qb({
          encapsulation: 0,
          styles: [
            [
              '.big-input[_ngcontent-%COMP%]{width:100%;transition:all .5s;display:flex;padding:10px 10px 10px 20px}.big-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex-grow:1;border:0;font-size:20px;min-width:100px}'
            ]
          ],
          data: {}
        });
      function bl(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
              Q.d,
              Q.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              2,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.Fb(3, { 'has-focus': 0 }),
            e.rb(4, 49152, null, 0, D.a, [], null, null),
            (l()(),
            e.sb(
              5,
              0,
              null,
              0,
              0,
              'input',
              [],
              [[8, 'value', 0], [8, 'placeholder', 0], [8, 'disabled', 0]],
              [[null, 'focus'], [null, 'blur']],
              function(l, n, t) {
                var e = !0,
                  a = l.component;
                return (
                  'focus' === n && (e = 0 != (a.hasFocus = !0) && e),
                  'blur' === n && (e = 0 != (a.hasFocus = !1) && e),
                  e
                );
              },
              null,
              null
            )),
            e.Bb(0, 0)
          ],
          function(l, n) {
            var t = l(n, 3, 0, n.component.hasFocus);
            l(n, 2, 0, 'big-input', t);
          },
          function(l, n) {
            var t = n.component;
            l(n, 5, 0, t.value, t.placeholder, t.disabled);
          }
        );
      }
      var cl = (function() {
          function l() {
            (this.disabled = !1),
              (this.fontSet = ''),
              (this.fontIcon = ''),
              (this.faIcon = ''),
              (this.label = ''),
              (this.color = ''),
              (this.action = new e.m()),
              (this.hasFocus = !1);
          }
          return (
            (l.prototype.onClick = function() {
              this.action.emit();
            }),
            l
          );
        })(),
        dl = e.qb({
          encapsulation: 0,
          styles: [
            [
              'button[_ngcontent-%COMP%]{padding:0;min-width:36px;margin-left:10px}button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:relative;top:2px;font-size:18px}button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;font-size:18px}'
            ]
          ],
          data: {}
        });
      function ml(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              tl.b,
              tl.a
            )),
            e.rb(
              1,
              9158656,
              null,
              0,
              el.b,
              [e.k, el.d, [8, null], [2, el.a]],
              { fontSet: [0, 'fontSet'], fontIcon: [1, 'fontIcon'] },
              null
            )
          ],
          function(l, n) {
            var t = n.component;
            l(n, 1, 0, t.fontSet, t.fontIcon);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              e.Cb(n, 1).inline,
              'primary' !== e.Cb(n, 1).color &&
                'accent' !== e.Cb(n, 1).color &&
                'warn' !== e.Cb(n, 1).color
            );
          }
        );
      }
      function pl(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(
              1,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            )
          ],
          function(l, n) {
            l(n, 1, 0, n.component.faIcon);
          },
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).renderedIconHTML);
          }
        );
      }
      function fl(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            (l()(), e.Jb(1, null, ['', '']))
          ],
          null,
          function(l, n) {
            l(n, 1, 0, n.component.label);
          }
        );
      }
      function hl(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
              0,
              0,
              null,
              null,
              7,
              'button',
              [['color', 'color'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n && (e = !1 !== l.component.onClick() && e), e
                );
              },
              V.d,
              V.b
            )),
            e.rb(
              1,
              180224,
              null,
              0,
              X.b,
              [e.k, g.h, [2, E.a]],
              { disabled: [0, 'disabled'], color: [1, 'color'] },
              null
            ),
            (l()(), e.hb(16777216, null, 0, 1, null, ml)),
            e.rb(
              3,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, 0, 1, null, pl)),
            e.rb(
              5,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, 0, 1, null, fl)),
            e.rb(
              7,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            )
          ],
          function(l, n) {
            var t = n.component;
            l(n, 1, 0, t.disabled, 'color'),
              l(n, 3, 0, t.fontSet && t.fontIcon && !t.faIcon),
              l(n, 5, 0, t.faIcon),
              l(n, 7, 0, t.label);
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              e.Cb(n, 1).disabled || null,
              'NoopAnimations' === e.Cb(n, 1)._animationMode
            );
          }
        );
      }
      var gl = t('SECt'),
        Cl = t('D57K'),
        kl = t('G2Mx'),
        xl = t('fN3Q'),
        vl = Object(K.v)('[Todos] Add', function(l, n) {
          return void 0 === n && (n = Object(xl.v4)()), { name: l, id: n };
        }),
        yl = Object(K.v)('[Todos] Toggle', Object(K.B)()),
        _l = Object(K.v)('[Todos] Remove Done'),
        wl = Object(K.v)('[Todos] Filter', Object(K.B)()),
        jl = {
          items: [
            { id: Object(xl.v4)(), name: 'Open Todo list example', done: !0 },
            { id: Object(xl.v4)(), name: 'Check the other examples', done: !1 },
            {
              id: Object(xl.v4)(),
              name: 'Use Angular ngRx Material Starter in your project',
              done: !1
            }
          ],
          filter: 'ALL'
        },
        El = Object(K.x)(
          jl,
          Object(K.A)(vl, function(l, n) {
            return Cl.a({}, l, {
              items: [{ id: n.id, name: n.name, done: !1 }].concat(l.items)
            });
          }),
          Object(K.A)(yl, function(l, n) {
            return Cl.a({}, l, {
              items: l.items.map(function(l) {
                return l.id === n.id ? Cl.a({}, l, { done: !l.done }) : l;
              })
            });
          }),
          Object(K.A)(_l, function(l, n) {
            return Cl.a({}, l, {
              items: l.items.filter(function(l) {
                return !l.done;
              })
            });
          }),
          Object(K.A)(wl, function(l, n) {
            return Cl.a({}, l, { filter: n.filter });
          })
        );
      function Al(l, n) {
        return El(l, n);
      }
      var Sl = Object(K.v)('[Stock] Retrieve', Object(K.B)()),
        Il = Object(K.v)('[Stock] Retrieve Success', Object(K.B)()),
        Ol = Object(K.v)('[Stock] Retrieve Error', Object(K.B)()),
        Fl = Object(K.x)(
          { symbol: 'GOOGL', loading: !1 },
          Object(K.A)(Sl, function(l, n) {
            return Cl.a({}, l, {
              loading: !0,
              stock: null,
              error: null,
              symbol: n.symbol
            });
          }),
          Object(K.A)(Il, function(l, n) {
            return Cl.a({}, l, { loading: !1, stock: n.stock, error: null });
          }),
          Object(K.A)(Ol, function(l, n) {
            return Cl.a({}, l, { loading: !1, stock: null, error: n.error });
          })
        );
      function Ll(l, n) {
        return Fl(l, n);
      }
      var Pl = (function(l) {
        return (
          (l[(l.EntitiesOnly = 0)] = 'EntitiesOnly'),
          (l[(l.Both = 1)] = 'Both'),
          (l[(l.None = 2)] = 'None'),
          l
        );
      })({});
      function Kl(l) {
        return function(n, t) {
          var e = {
              ids: Object(Cl.g)(t.ids),
              entities: Object(Cl.a)({}, t.entities)
            },
            a = l(n, e);
          return a === Pl.Both
            ? Object.assign({}, t, e)
            : a === Pl.EntitiesOnly
            ? Object(Cl.a)({}, t, { entities: e.entities })
            : t;
        };
      }
      function Ml(l, n) {
        var t = n(l);
        return (
          Object(e.Y)() &&
            void 0 === t &&
            console.warn(
              '@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.',
              'You should probably provide your own `selectId` implementation.',
              'The entity that was passed:',
              l,
              'The `selectId` implementation:',
              n.toString()
            ),
          t
        );
      }
      function Nl(l) {
        function n(n, t) {
          var e = Ml(n, l);
          return e in t.entities
            ? Pl.None
            : (t.ids.push(e), (t.entities[e] = n), Pl.Both);
        }
        function t(l, t) {
          var e,
            a,
            u = !1;
          try {
            for (var i = Object(Cl.h)(l), r = i.next(); !r.done; r = i.next())
              u = n(r.value, t) !== Pl.None || u;
          } catch (o) {
            e = { error: o };
          } finally {
            try {
              r && !r.done && (a = i.return) && a.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return u ? Pl.Both : Pl.None;
        }
        function e(l, n) {
          var t =
            (l instanceof Array
              ? l
              : n.ids.filter(function(t) {
                  return l(n.entities[t]);
                })
            )
              .filter(function(l) {
                return l in n.entities;
              })
              .map(function(l) {
                return delete n.entities[l];
              }).length > 0;
          return (
            t &&
              (n.ids = n.ids.filter(function(l) {
                return l in n.entities;
              })),
            t ? Pl.Both : Pl.None
          );
        }
        function a(n, t) {
          var e = {};
          return (n = n.filter(function(l) {
            return l.id in t.entities;
          })).length > 0
            ? n.filter(function(n) {
                return (function(n, t, e) {
                  var a = Object.assign({}, e.entities[t.id], t.changes),
                    u = Ml(a, l),
                    i = u !== t.id;
                  return (
                    i && ((n[t.id] = u), delete e.entities[t.id]),
                    (e.entities[u] = a),
                    i
                  );
                })(e, n, t);
              }).length > 0
              ? ((t.ids = t.ids.map(function(l) {
                  return e[l] || l;
                })),
                Pl.Both)
              : Pl.EntitiesOnly
            : Pl.None;
        }
        function u(n, e) {
          var u,
            i,
            r = [],
            o = [];
          try {
            for (var s = Object(Cl.h)(n), b = s.next(); !b.done; b = s.next()) {
              var c = b.value,
                d = Ml(c, l);
              d in e.entities ? o.push({ id: d, changes: c }) : r.push(c);
            }
          } catch (f) {
            u = { error: f };
          } finally {
            try {
              b && !b.done && (i = s.return) && i.call(s);
            } finally {
              if (u) throw u.error;
            }
          }
          var m = a(o, e),
            p = t(r, e);
          switch (!0) {
            case p === Pl.None && m === Pl.None:
              return Pl.None;
            case p === Pl.Both || m === Pl.Both:
              return Pl.Both;
            default:
              return Pl.EntitiesOnly;
          }
        }
        return {
          removeAll: function(l) {
            return Object.assign({}, l, { ids: [], entities: {} });
          },
          addOne: Kl(n),
          addMany: Kl(t),
          addAll: Kl(function(l, n) {
            return (n.ids = []), (n.entities = {}), t(l, n), Pl.Both;
          }),
          updateOne: Kl(function(l, n) {
            return a([l], n);
          }),
          updateMany: Kl(a),
          upsertOne: Kl(function(l, n) {
            return u([l], n);
          }),
          upsertMany: Kl(u),
          removeOne: Kl(function(l, n) {
            return e([l], n);
          }),
          removeMany: Kl(e),
          map: Kl(function(l, n) {
            return a(
              n.ids
                .reduce(function(t, e) {
                  var a = l(n.entities[e]);
                  return (
                    a !== n.entities[e] && t.push({ id: e, changes: a }), t
                  );
                }, [])
                .filter(function(l) {
                  return l.id in n.entities;
                }),
              n
            );
          })
        };
      }
      var Jl = Object(K.v)('[Books] Upsert One', Object(K.B)()),
        Hl = Object(K.v)('[Books] Delete One', Object(K.B)()),
        zl = (function(l) {
          void 0 === l && (l = {});
          var n = Object(Cl.a)(
              {
                sortComparer: !1,
                selectId: function(l) {
                  return l.id;
                }
              },
              l
            ),
            t = n.selectId,
            e = n.sortComparer,
            a = {
              getInitialState: function(l) {
                return (
                  void 0 === l && (l = {}),
                  Object.assign({ ids: [], entities: {} }, l)
                );
              }
            },
            u = {
              getSelectors: function(l) {
                var n = function(l) {
                    return l.ids;
                  },
                  t = function(l) {
                    return l.entities;
                  },
                  e = Object(K.z)(n, t, function(l, n) {
                    return l.map(function(l) {
                      return n[l];
                    });
                  }),
                  a = Object(K.z)(n, function(l) {
                    return l.length;
                  });
                return l
                  ? {
                      selectIds: Object(K.z)(l, n),
                      selectEntities: Object(K.z)(l, t),
                      selectAll: Object(K.z)(l, e),
                      selectTotal: Object(K.z)(l, a)
                    }
                  : {
                      selectIds: n,
                      selectEntities: t,
                      selectAll: e,
                      selectTotal: a
                    };
              }
            },
            i = e
              ? (function(l, n) {
                  var t = Nl(l);
                  function e(n, t) {
                    var e = n.filter(function(n) {
                      return !(Ml(n, l) in t.entities);
                    });
                    return 0 === e.length ? Pl.None : (i(e, t), Pl.Both);
                  }
                  function a(n, t) {
                    var e = [],
                      a =
                        n.filter(function(n) {
                          return (function(n, t, e) {
                            if (!(t.id in e.entities)) return !1;
                            var a = Object.assign(
                                {},
                                e.entities[t.id],
                                t.changes
                              ),
                              u = Ml(a, l);
                            return (
                              delete e.entities[t.id], n.push(a), u !== t.id
                            );
                          })(e, n, t);
                        }).length > 0;
                    if (0 === e.length) return Pl.None;
                    var u = t.ids,
                      r = [];
                    return (
                      (t.ids = t.ids.filter(function(l, n) {
                        return l in t.entities || (r.push(n), !1);
                      })),
                      i(e, t),
                      !a &&
                      r.every(function(l) {
                        return t.ids[l] === u[l];
                      })
                        ? Pl.EntitiesOnly
                        : Pl.Both
                    );
                  }
                  function u(n, t) {
                    var u,
                      i,
                      r = [],
                      o = [];
                    try {
                      for (
                        var s = Object(Cl.h)(n), b = s.next();
                        !b.done;
                        b = s.next()
                      ) {
                        var c = b.value,
                          d = Ml(c, l);
                        d in t.entities
                          ? o.push({ id: d, changes: c })
                          : r.push(c);
                      }
                    } catch (f) {
                      u = { error: f };
                    } finally {
                      try {
                        b && !b.done && (i = s.return) && i.call(s);
                      } finally {
                        if (u) throw u.error;
                      }
                    }
                    var m = a(o, t),
                      p = e(r, t);
                    switch (!0) {
                      case p === Pl.None && m === Pl.None:
                        return Pl.None;
                      case p === Pl.Both || m === Pl.Both:
                        return Pl.Both;
                      default:
                        return Pl.EntitiesOnly;
                    }
                  }
                  function i(t, e) {
                    t.sort(n);
                    for (
                      var a = [], u = 0, i = 0;
                      u < t.length && i < e.ids.length;

                    ) {
                      var r = t[u],
                        o = Ml(r, l),
                        s = e.ids[i];
                      n(r, e.entities[s]) <= 0
                        ? (a.push(o), u++)
                        : (a.push(s), i++);
                    }
                    (e.ids = a.concat(
                      u < t.length ? t.slice(u).map(l) : e.ids.slice(i)
                    )),
                      t.forEach(function(n, t) {
                        e.entities[l(n)] = n;
                      });
                  }
                  return {
                    removeOne: t.removeOne,
                    removeMany: t.removeMany,
                    removeAll: t.removeAll,
                    addOne: Kl(function(l, n) {
                      return e([l], n);
                    }),
                    updateOne: Kl(function(l, n) {
                      return a([l], n);
                    }),
                    upsertOne: Kl(function(l, n) {
                      return u([l], n);
                    }),
                    addAll: Kl(function(l, n) {
                      return (n.entities = {}), (n.ids = []), e(l, n), Pl.Both;
                    }),
                    addMany: Kl(e),
                    updateMany: Kl(a),
                    upsertMany: Kl(u),
                    map: Kl(function(l, n) {
                      return a(
                        n.ids.reduce(function(t, e) {
                          var a = l(n.entities[e]);
                          return (
                            a !== n.entities[e] &&
                              t.push({ id: e, changes: a }),
                            t
                          );
                        }, []),
                        n
                      );
                    })
                  };
                })(t, e)
              : Nl(t);
          return Object(Cl.a)({ selectId: t, sortComparer: e }, a, u, i);
        })({
          sortComparer: function(l, n) {
            return l.title.localeCompare(n.title);
          }
        }),
        Tl = zl.getInitialState({
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
        ql = Object(K.x)(
          Tl,
          Object(K.A)(Jl, function(l, n) {
            return zl.upsertOne(n.book, l);
          }),
          Object(K.A)(Hl, function(l, n) {
            return zl.removeOne(n.id, l);
          })
        );
      function Gl(l, n) {
        return ql(l, n);
      }
      var Ql = Object(K.v)('[Form] Update', Object(K.B)()),
        Dl = Object(K.v)('[Form] Reset'),
        Bl = { form: {} },
        $l = Object(K.x)(
          Bl,
          Object(K.A)(Ql, function(l, n) {
            return Cl.a({}, l, { form: n.form });
          }),
          Object(K.A)(Dl, function() {
            return Bl;
          })
        );
      function Rl(l, n) {
        return $l(l, n);
      }
      var Ul = Object(K.w)('examples'),
        Vl = Object(K.z)(Ul, function(l) {
          return l.todos;
        }),
        Xl = Object(K.z)(Vl, function(l) {
          return l.items;
        }),
        Yl = Object(K.z)(Vl, function(l) {
          return l.filter;
        }),
        Wl = Object(K.z)(Xl, Yl, function(l, n) {
          return 'ALL' === n
            ? l
            : l.filter(
                'DONE' === n
                  ? function(l) {
                      return l.done;
                    }
                  : function(l) {
                      return !l.done;
                    }
              );
        }),
        Zl = Object(K.z)(Xl, function(l) {
          return !l.some(function(l) {
            return l.done;
          });
        }),
        ln = (function() {
          function l(l, n, t, e) {
            (this.store = l),
              (this.snackBar = n),
              (this.translateService = t),
              (this.notificationService = e),
              (this.routeAnimationsElements = M.d),
              (this.newTodo = '');
          }
          return (
            (l.prototype.ngOnInit = function() {
              (this.todos$ = this.store.pipe(Object(K.C)(Wl))),
                (this.removeDoneDisabled$ = this.store.pipe(Object(K.C)(Zl)));
            }),
            Object.defineProperty(l.prototype, 'isAddTodoDisabled', {
              get: function() {
                return this.newTodo.length < 4;
              },
              enumerable: !0,
              configurable: !0
            }),
            (l.prototype.onNewTodoChange = function(l) {
              this.newTodo = l;
            }),
            (l.prototype.onNewTodoClear = function() {
              this.newTodo = '';
            }),
            (l.prototype.onAddTodo = function() {
              this.store.dispatch(vl(this.newTodo));
              var l = this.translateService.instant(
                'anms.examples.todos.added.notification',
                { name: this.newTodo }
              );
              this.notificationService.info(l), (this.newTodo = '');
            }),
            (l.prototype.onToggleTodo = function(l) {
              var n = this;
              this.store.dispatch(yl({ id: l.id }));
              var t = this.translateService.instant(
                  'anms.examples.todos.filter.' + (l.done ? 'active' : 'done')
                ),
                e = this.translateService.instant('anms.examples.todos.undo'),
                a = this.translateService.instant(
                  'anms.examples.todos.toggle.notification',
                  { name: l.name }
                );
              this.snackBar
                .open(a + ' ' + t, e, {
                  duration: 2500,
                  panelClass: 'todos-notification-overlay'
                })
                .onAction()
                .pipe(Object(kl.a)(1))
                .subscribe(function() {
                  return n.onToggleTodo(Cl.a({}, l, { done: !l.done }));
                });
            }),
            (l.prototype.onRemoveDoneTodos = function() {
              this.store.dispatch(_l());
              var l = this.translateService.instant(
                'anms.examples.todos.remove.notification'
              );
              this.notificationService.info(l);
            }),
            (l.prototype.onFilterTodos = function(l) {
              this.store.dispatch(wl({ filter: l }));
              var n = this.translateService.instant(
                  'anms.examples.todos.filter.notification'
                ),
                t = this.translateService.instant(
                  'anms.examples.todos.filter.' + l.toLowerCase()
                );
              this.notificationService.info(n + ' ' + t);
            }),
            l
          );
        })(),
        nn = t('8raB'),
        tn = t('DqCq'),
        en = e.qb({
          encapsulation: 0,
          styles: [
            [
              '.entry[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:40px}.todos-filter-info[_ngcontent-%COMP%]{float:right;font-weight:400}.dotos-title[_ngcontent-%COMP%]{display:flex}.dotos-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{flex:1}.todos-filter[_ngcontent-%COMP%]{float:right;position:relative;left:10px;top:-5px;margin-left:-10px}.todo[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}.todo[_ngcontent-%COMP%]   .todo-done[_ngcontent-%COMP%]{margin:0 20px 0 0}.todo[_ngcontent-%COMP%]   .todo-label[_ngcontent-%COMP%]{position:relative;top:2px;cursor:pointer}.todo[_ngcontent-%COMP%]   .todo-label.todo-label-done[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.5}'
            ]
          ],
          data: {}
        });
      function an(l) {
        return e.Lb(
          0,
          [
            (l()(), e.Jb(0, null, ['', ' ', ''])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              0,
              0,
              n.parent.context.ngIf.length,
              e.Kb(
                n,
                0,
                1,
                e.Cb(n, 1).transform('anms.examples.todos.filter.items')
              )
            );
          }
        );
      }
      function un(l) {
        return e.Lb(
          0,
          [
            (l()(), e.Jb(0, null, ['', ' ', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              0,
              0,
              e.Kb(
                n,
                0,
                0,
                e.Cb(n, 1).transform('anms.examples.todos.filter.one')
              ),
              e.Kb(
                n,
                0,
                1,
                e.Cb(n, 2).transform('anms.examples.todos.filter.item')
              )
            );
          }
        );
      }
      function rn(l) {
        return e.Lb(
          0,
          [
            (l()(), e.Jb(0, null, ['', ' ', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              0,
              0,
              e.Kb(
                n,
                0,
                0,
                e.Cb(n, 1).transform('anms.examples.todos.filter.none')
              ),
              e.Kb(
                n,
                0,
                1,
                e.Cb(n, 2).transform('anms.examples.todos.filter.items')
              )
            );
          }
        );
      }
      function on(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              Q.d,
              Q.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              2,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(3, 49152, null, 0, D.a, [], null, null),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var e = !0;
                return (
                  'change' === n &&
                    (e =
                      !1 !== l.component.onToggleTodo(l.context.$implicit) &&
                      e),
                  e
                );
              },
              R,
              $
            )),
            e.Gb(
              5120,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [B.b]
            ),
            e.rb(
              6,
              8568832,
              null,
              0,
              B.b,
              [e.k, e.h, g.h, e.A, [8, null], [2, B.a], [2, E.a]],
              { checked: [0, 'checked'] },
              { change: 'change' }
            ),
            (l()(),
            e.sb(
              7,
              0,
              null,
              0,
              4,
              'span',
              [['class', 'todo-label']],
              null,
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n &&
                    (e =
                      !1 !== l.component.onToggleTodo(l.context.$implicit) &&
                      e),
                  e
                );
              },
              null,
              null
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              9,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.Fb(10, { 'todo-label-done': 0 }),
            (l()(), e.Jb(11, null, [' \xa0', '\xa0 ']))
          ],
          function(l, n) {
            l(n, 2, 0, 'todo', n.component.routeAnimationsElements),
              l(n, 6, 0, n.context.$implicit.done);
            var t = l(n, 10, 0, n.context.$implicit.done);
            l(n, 9, 0, 'todo-label', t);
          },
          function(l, n) {
            l(
              n,
              4,
              0,
              e.Cb(n, 6).id,
              null,
              e.Cb(n, 6).indeterminate,
              e.Cb(n, 6).checked,
              e.Cb(n, 6).disabled,
              'before' == e.Cb(n, 6).labelPosition,
              'NoopAnimations' === e.Cb(n, 6)._animationMode
            ),
              l(n, 11, 0, n.context.$implicit.name);
          }
        );
      }
      function sn(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.rb(3, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(5, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'mousedown' === n &&
                    (a = !1 !== e.Cb(l, 9)._handleMousedown(t) && a),
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 9)._handleKeydown(t) && a),
                  'click' === n && (a = !1 !== e.Cb(l, 9)._handleClick(t) && a),
                  a
                );
              },
              V.d,
              V.b
            )),
            e.rb(8, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            e.rb(
              9,
              1196032,
              null,
              0,
              Y.g,
              [W.c, e.k, e.Q, Y.c, [2, Y.d], [8, null], [2, _.b], g.h],
              { menu: [0, 'menu'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.rb(
              11,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.rb(
              13,
              1294336,
              [['todosFilter', 4]],
              2,
              Y.h,
              [e.k, e.A, Y.a],
              { xPosition: [0, 'xPosition'], panelClass: [1, 'panelClass'] },
              null
            ),
            e.Hb(603979776, 1, { items: 1 }),
            e.Hb(603979776, 2, { lazyContent: 0 }),
            e.Gb(2048, null, Y.d, null, [Y.h]),
            e.Gb(2048, null, Y.b, null, [Y.d]),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0,
                  u = l.component;
                return (
                  'click' === n &&
                    (a = !1 !== e.Cb(l, 22)._checkDisabled(t) && a),
                  'mouseenter' === n &&
                    (a = !1 !== e.Cb(l, 22)._handleMouseEnter() && a),
                  'click' === n && (a = !1 !== u.onFilterTodos('ALL') && a),
                  a
                );
              },
              nl.c,
              nl.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              20,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            e.Fb(21, { active: 0 }),
            e.rb(
              22,
              180224,
              [[1, 4]],
              0,
              Y.e,
              [e.k, C.d, g.h, [2, Y.b]],
              null,
              null
            ),
            e.rb(23, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(
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
              tl.b,
              tl.a
            )),
            e.rb(
              25,
              9158656,
              null,
              0,
              el.b,
              [e.k, el.d, [8, null], [2, el.a]],
              null,
              null
            ),
            (l()(),
            e.sb(
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
            e.rb(
              27,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            e.sb(28, 0, null, 0, 2, 'span', [], null, null, null, null, null)),
            (l()(), e.Jb(29, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0,
                  u = l.component;
                return (
                  'click' === n &&
                    (a = !1 !== e.Cb(l, 35)._checkDisabled(t) && a),
                  'mouseenter' === n &&
                    (a = !1 !== e.Cb(l, 35)._handleMouseEnter() && a),
                  'click' === n && (a = !1 !== u.onFilterTodos('DONE') && a),
                  a
                );
              },
              nl.c,
              nl.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              33,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            e.Fb(34, { active: 0 }),
            e.rb(
              35,
              180224,
              [[1, 4]],
              0,
              Y.e,
              [e.k, C.d, g.h, [2, Y.b]],
              null,
              null
            ),
            (l()(),
            e.sb(
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
              tl.b,
              tl.a
            )),
            e.rb(
              37,
              9158656,
              null,
              0,
              el.b,
              [e.k, el.d, [8, null], [2, el.a]],
              null,
              null
            ),
            (l()(),
            e.sb(
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
            e.rb(
              39,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            e.sb(40, 0, null, 0, 2, 'span', [], null, null, null, null, null)),
            (l()(), e.Jb(41, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0,
                  u = l.component;
                return (
                  'click' === n &&
                    (a = !1 !== e.Cb(l, 47)._checkDisabled(t) && a),
                  'mouseenter' === n &&
                    (a = !1 !== e.Cb(l, 47)._handleMouseEnter() && a),
                  'click' === n && (a = !1 !== u.onFilterTodos('ACTIVE') && a),
                  a
                );
              },
              nl.c,
              nl.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              45,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            e.Fb(46, { active: 0 }),
            e.rb(
              47,
              180224,
              [[1, 4]],
              0,
              Y.e,
              [e.k, C.d, g.h, [2, Y.b]],
              null,
              null
            ),
            (l()(),
            e.sb(
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
              tl.b,
              tl.a
            )),
            e.rb(
              49,
              9158656,
              null,
              0,
              el.b,
              [e.k, el.d, [8, null], [2, el.a]],
              null,
              null
            ),
            (l()(),
            e.sb(
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
            e.rb(
              51,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            e.sb(52, 0, null, 0, 2, 'span', [], null, null, null, null, null)),
            (l()(), e.Jb(53, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'focus' === n && (a = !1 !== e.Cb(l, 57).focus() && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 57)._blur() && a),
                  'keydown' === n && (a = !1 !== e.Cb(l, 57)._keydown(t) && a),
                  a
                );
              },
              rl,
              il
            )),
            e.Gb(6144, null, L.d, null, [al.c]),
            e.rb(
              57,
              1556480,
              null,
              1,
              al.c,
              [e.k, e.h, [2, _.b], [2, P.p], [2, P.g], h.b, [8, null]],
              null,
              null
            ),
            e.Hb(603979776, 3, { chips: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'click' === n &&
                    (a = !1 !== e.Cb(l, 61)._handleClick(t) && a),
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 61)._handleKeydown(t) && a),
                  'focus' === n && (a = !1 !== e.Cb(l, 61).focus() && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 61)._blur() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(
              60,
              16384,
              null,
              0,
              C.n,
              [C.m],
              { ngPlural: [0, 'ngPlural'] },
              null
            ),
            e.rb(
              61,
              147456,
              [[3, 4]],
              3,
              al.b,
              [e.k, e.A, f.a, [2, h.k]],
              { disabled: [0, 'disabled'] },
              null
            ),
            e.Hb(603979776, 4, { avatar: 0 }),
            e.Hb(603979776, 5, { trailingIcon: 0 }),
            e.Hb(603979776, 6, { removeIcon: 0 }),
            (l()(), e.Jb(65, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.hb(16777216, null, null, 1, null, an)),
            e.rb(
              68,
              16384,
              null,
              0,
              C.o,
              [[8, 'other'], e.N, e.Q, C.n],
              null,
              null
            ),
            (l()(), e.hb(16777216, null, null, 1, null, un)),
            e.rb(
              70,
              16384,
              null,
              0,
              C.o,
              [[8, '=1'], e.N, e.Q, C.n],
              null,
              null
            ),
            (l()(), e.hb(16777216, null, null, 1, null, rn)),
            e.rb(
              72,
              16384,
              null,
              0,
              C.o,
              [[8, '=0'], e.N, e.Q, C.n],
              null,
              null
            ),
            (l()(), e.hb(16777216, null, null, 1, null, on)),
            e.rb(
              74,
              278528,
              null,
              0,
              C.j,
              [e.Q, e.N, e.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(),
            e.sb(75, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            e.sb(76, 0, null, null, 0, 'br', [], null, null, null, null, null))
          ],
          function(l, n) {
            l(n, 3, 0),
              l(n, 9, 0, e.Cb(n, 13)),
              l(n, 11, 0, 'filter'),
              l(n, 13, 0, 'before', 'todos-filter-menu-overlay');
            var t = l(n, 21, 0, 'ALL' === n.context.ngIf.filter);
            l(n, 20, 0, t), l(n, 23, 0), l(n, 25, 0), l(n, 27, 0, 'tasks');
            var a = l(n, 34, 0, 'DONE' === n.context.ngIf.filter);
            l(n, 33, 0, a), l(n, 37, 0), l(n, 39, 0, 'check');
            var u = l(n, 46, 0, 'ACTIVE' === n.context.ngIf.filter);
            l(n, 45, 0, u),
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
              e.Kb(n, 5, 0, e.Cb(n, 6).transform('anms.examples.todos.list'))
            ),
              l(
                n,
                7,
                0,
                e.Cb(n, 8).disabled || null,
                'NoopAnimations' === e.Cb(n, 8)._animationMode,
                e.Cb(n, 9).menuOpen || null
              ),
              l(n, 10, 0, e.Cb(n, 11).renderedIconHTML),
              l(
                n,
                18,
                0,
                e.Cb(n, 22).role,
                e.Cb(n, 22)._highlighted,
                e.Cb(n, 22)._triggersSubmenu,
                e.Cb(n, 22)._getTabIndex(),
                e.Cb(n, 22).disabled.toString(),
                e.Cb(n, 22).disabled || null
              ),
              l(
                n,
                24,
                0,
                e.Cb(n, 25).inline,
                'primary' !== e.Cb(n, 25).color &&
                  'accent' !== e.Cb(n, 25).color &&
                  'warn' !== e.Cb(n, 25).color
              ),
              l(n, 26, 0, e.Cb(n, 27).renderedIconHTML),
              l(
                n,
                29,
                0,
                e.Kb(
                  n,
                  29,
                  0,
                  e.Cb(n, 30).transform('anms.examples.todos.filter.all')
                )
              ),
              l(
                n,
                31,
                0,
                e.Cb(n, 35).role,
                e.Cb(n, 35)._highlighted,
                e.Cb(n, 35)._triggersSubmenu,
                e.Cb(n, 35)._getTabIndex(),
                e.Cb(n, 35).disabled.toString(),
                e.Cb(n, 35).disabled || null
              ),
              l(
                n,
                36,
                0,
                e.Cb(n, 37).inline,
                'primary' !== e.Cb(n, 37).color &&
                  'accent' !== e.Cb(n, 37).color &&
                  'warn' !== e.Cb(n, 37).color
              ),
              l(n, 38, 0, e.Cb(n, 39).renderedIconHTML),
              l(
                n,
                41,
                0,
                e.Kb(
                  n,
                  41,
                  0,
                  e.Cb(n, 42).transform('anms.examples.todos.filter.done')
                )
              ),
              l(
                n,
                43,
                0,
                e.Cb(n, 47).role,
                e.Cb(n, 47)._highlighted,
                e.Cb(n, 47)._triggersSubmenu,
                e.Cb(n, 47)._getTabIndex(),
                e.Cb(n, 47).disabled.toString(),
                e.Cb(n, 47).disabled || null
              ),
              l(
                n,
                48,
                0,
                e.Cb(n, 49).inline,
                'primary' !== e.Cb(n, 49).color &&
                  'accent' !== e.Cb(n, 49).color &&
                  'warn' !== e.Cb(n, 49).color
              ),
              l(n, 50, 0, e.Cb(n, 51).renderedIconHTML),
              l(
                n,
                53,
                0,
                e.Kb(
                  n,
                  53,
                  0,
                  e.Cb(n, 54).transform('anms.examples.todos.filter.active')
                )
              ),
              l(n, 55, 1, [
                e.Cb(n, 57).disabled ? null : e.Cb(n, 57)._tabIndex,
                e.Cb(n, 57)._ariaDescribedby || null,
                e.Cb(n, 57).required.toString(),
                e.Cb(n, 57).disabled.toString(),
                e.Cb(n, 57).errorState,
                e.Cb(n, 57).multiple,
                e.Cb(n, 57).role,
                e.Cb(n, 57).disabled,
                e.Cb(n, 57).errorState,
                e.Cb(n, 57).required,
                e.Cb(n, 57).ariaOrientation,
                e.Cb(n, 57)._uid
              ]),
              l(
                n,
                59,
                0,
                e.Cb(n, 61).disabled ? null : -1,
                e.Cb(n, 61).selected,
                e.Cb(n, 61).avatar,
                e.Cb(n, 61).trailingIcon || e.Cb(n, 61).removeIcon,
                e.Cb(n, 61).disabled,
                e.Cb(n, 61).disabled || null,
                e.Cb(n, 61).disabled.toString(),
                e.Cb(n, 61).ariaSelected
              ),
              l(
                n,
                65,
                0,
                e.Kb(
                  n,
                  65,
                  0,
                  e
                    .Cb(n, 66)
                    .transform('anms.examples.todos.filter.description')
                )
              );
          }
        );
      }
      function bn(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.sb(
              3,
              0,
              null,
              null,
              12,
              'anms-big-input',
              [['rtl', '']],
              null,
              [[null, 'keyup'], [null, 'keyup.enter'], [null, 'keyup.escape']],
              function(l, n, t) {
                var e = !0,
                  a = l.component;
                return (
                  'keyup' === n &&
                    (e = !1 !== a.onNewTodoChange(t.target.value) && e),
                  'keyup.enter' === n &&
                    (e = !1 !== (!a.isAddTodoDisabled && a.onAddTodo()) && e),
                  'keyup.escape' === n && (e = !1 !== a.onNewTodoClear() && e),
                  e
                );
              },
              bl,
              sl
            )),
            e.rb(
              4,
              49152,
              null,
              0,
              ol,
              [],
              { placeholder: [0, 'placeholder'], value: [1, 'value'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.rb(6, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0,
                  u = l.component;
                return (
                  'longpress' === n && (a = !1 !== e.Cb(l, 8).show() && a),
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 8)._handleKeydown(t) && a),
                  'touchend' === n &&
                    (a = !1 !== e.Cb(l, 8)._handleTouchend() && a),
                  'action' === n && (a = !1 !== u.onAddTodo() && a),
                  a
                );
              },
              hl,
              dl
            )),
            e.rb(
              8,
              212992,
              null,
              0,
              gl.d,
              [
                W.c,
                e.k,
                A.b,
                e.Q,
                e.A,
                f.a,
                g.c,
                g.h,
                gl.b,
                [2, _.b],
                [2, gl.a],
                [2, w.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.rb(
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
            e.sb(
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
              function(l, n, t) {
                var a = !0,
                  u = l.component;
                return (
                  'longpress' === n && (a = !1 !== e.Cb(l, 12).show() && a),
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 12)._handleKeydown(t) && a),
                  'touchend' === n &&
                    (a = !1 !== e.Cb(l, 12)._handleTouchend() && a),
                  'action' === n && (a = !1 !== u.onRemoveDoneTodos() && a),
                  a
                );
              },
              hl,
              dl
            )),
            e.rb(
              12,
              212992,
              null,
              0,
              gl.d,
              [
                W.c,
                e.k,
                A.b,
                e.Q,
                e.A,
                f.a,
                g.c,
                g.h,
                gl.b,
                [2, _.b],
                [2, gl.a],
                [2, w.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.rb(
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
            e.Eb(131072, C.b, [e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.hb(16777216, null, null, 2, null, sn)),
            e.rb(
              18,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              22,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(23, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(24, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), e.Jb(25, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(27, 0, null, null, 7, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(28, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(31, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.Jb(33, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(35, 0, null, null, 6, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(36, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['ngrx'])),
            (l()(), e.Jb(40, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(42, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(43, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(45, 0, null, null, 0, 'br', [], null, null, null, null, null))
          ],
          function(l, n) {
            var t = n.component;
            l(
              n,
              4,
              0,
              e.Kb(n, 4, 0, e.Cb(n, 5).transform('anms.examples.todos.input')),
              t.newTodo
            ),
              l(n, 6, 0),
              l(
                n,
                8,
                0,
                'before',
                e.Kb(
                  n,
                  8,
                  1,
                  e.Cb(n, 9).transform('anms.examples.todos.tooltip.add')
                )
              ),
              l(
                n,
                10,
                0,
                t.isAddTodoDisabled,
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
                e.Kb(
                  n,
                  12,
                  1,
                  e.Cb(n, 13).transform('anms.examples.todos.tooltip.remove')
                )
              ),
              l(
                n,
                14,
                0,
                e.Kb(n, 14, 0, e.Cb(n, 15).transform(t.removeDoneDisabled$)),
                'fas',
                'fa-trash',
                'trash',
                'warn'
              ),
              l(n, 18, 0, e.Kb(n, 18, 0, e.Cb(n, 19).transform(t.todos$))),
              l(n, 22, 0, 'offset-md-1 col-md-5', t.routeAnimationsElements),
              l(n, 23, 0);
          },
          function(l, n) {
            l(
              n,
              25,
              0,
              e.Kb(
                n,
                25,
                0,
                e.Cb(n, 26).transform('anms.examples.todos.example')
              )
            ),
              l(
                n,
                28,
                0,
                e.Kb(
                  n,
                  28,
                  0,
                  e.Cb(n, 29).transform('anms.examples.todos.text1')
                )
              ),
              l(
                n,
                31,
                0,
                e.Kb(
                  n,
                  31,
                  0,
                  e.Cb(n, 32).transform('anms.examples.todos.text2')
                )
              ),
              l(
                n,
                33,
                0,
                e.Kb(
                  n,
                  33,
                  0,
                  e.Cb(n, 34).transform('anms.examples.todos.text3')
                )
              ),
              l(
                n,
                36,
                0,
                e.Kb(
                  n,
                  36,
                  0,
                  e.Cb(n, 37).transform('anms.examples.todos.text4')
                )
              ),
              l(
                n,
                40,
                0,
                e.Kb(
                  n,
                  40,
                  0,
                  e.Cb(n, 41).transform('anms.examples.todos.text5')
                )
              ),
              l(
                n,
                43,
                0,
                e.Kb(
                  n,
                  43,
                  0,
                  e.Cb(n, 44).transform('anms.examples.todos.text6')
                )
              );
          }
        );
      }
      function cn(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              bn,
              en
            )),
            e.rb(1, 114688, null, 0, ln, [K.o, nn.b, x.j, tn.a], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var dn = e.ob('anms-todos', ln, cn, {}, {}, []),
        mn = t('QIIz'),
        pn = e.qb({
          encapsulation: 2,
          styles: [
            '.mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}'
          ],
          data: {}
        });
      function fn(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            var t = n.component;
            l(
              n,
              0,
              0,
              t._circleRadius,
              'mat-progress-spinner-stroke-rotate-' + t.diameter,
              t._strokeDashOffset,
              t._strokeCircumference,
              t._circleStrokeWidth
            );
          }
        );
      }
      function hn(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            var t = n.component;
            l(
              n,
              0,
              0,
              t._circleRadius,
              t._strokeDashOffset,
              t._strokeCircumference,
              t._circleStrokeWidth
            );
          }
        );
      }
      function gn(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.rb(
              1,
              16384,
              null,
              0,
              C.q,
              [],
              { ngSwitch: [0, 'ngSwitch'] },
              null
            ),
            (l()(), e.hb(16777216, null, null, 1, null, fn)),
            e.rb(
              3,
              278528,
              null,
              0,
              C.r,
              [e.Q, e.N, C.q],
              { ngSwitchCase: [0, 'ngSwitchCase'] },
              null
            ),
            (l()(), e.hb(16777216, null, null, 1, null, hn)),
            e.rb(
              5,
              278528,
              null,
              0,
              C.r,
              [e.Q, e.N, C.q],
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
            var t = n.component;
            l(n, 0, 0, t.diameter, t.diameter, t._viewBox);
          }
        );
      }
      var Cn = t('QsvA'),
        kn = t('dgjn'),
        xn = t('+3V+'),
        vn = Object(K.z)(Ul, function(l) {
          return l.stocks;
        }),
        yn = (function() {
          function l(l) {
            (this.store = l), (this.routeAnimationsElements = M.d);
          }
          return (
            (l.prototype.ngOnInit = function() {
              var l = this;
              (this.stocks$ = this.store.pipe(Object(K.C)(vn))),
                this.stocks$.pipe(Object(kl.a)(1)).subscribe(function(n) {
                  return l.onSymbolChange(n.symbol);
                });
            }),
            (l.prototype.onSymbolChange = function(l) {
              this.store.dispatch(Sl({ symbol: l }));
            }),
            l
          );
        })(),
        _n = e.qb({
          encapsulation: 0,
          styles: [
            [
              '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{margin-bottom:5px}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{text-align:right}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{width:8px}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{text-align:center}mat-spinner[_ngcontent-%COMP%]{margin:auto}.error-state[_ngcontent-%COMP%]{text-align:center;padding:20px}.error-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:54px;font-size:48px}.error-state[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{opacity:.4}.error-state[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{font-weight:700}'
            ]
          ],
          data: {}
        });
      function wn(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              gn,
              pn
            )),
            e.rb(
              1,
              49152,
              null,
              0,
              mn.d,
              [e.k, f.a, [2, C.d], [2, E.a], mn.a],
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
              e.Cb(n, 1)._noopAnimations,
              e.Cb(n, 1).diameter,
              e.Cb(n, 1).diameter
            );
          }
        );
      }
      function jn(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(
              1,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            )
          ],
          function(l, n) {
            l(n, 1, 0, 'caret-up');
          },
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).renderedIconHTML);
          }
        );
      }
      function En(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(
              1,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            )
          ],
          function(l, n) {
            l(n, 1, 0, 'caret-down');
          },
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).renderedIconHTML);
          }
        );
      }
      function An(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              Q.d,
              Q.a
            )),
            e.rb(1, 49152, null, 0, D.a, [], null, null),
            (l()(),
            e.sb(
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
            e.rb(3, 16384, null, 0, D.h, [], null, null),
            (l()(), e.Jb(4, null, ['', ' '])),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(6, null, ['', ' ', ''])),
            (l()(),
            e.sb(
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
            e.rb(8, 16384, null, 0, D.g, [], null, null),
            (l()(),
            e.sb(9, 0, null, null, 8, 'p', [], null, null, null, null, null)),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              11,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            e.Fb(12, { negative: 0 }),
            (l()(), e.hb(16777216, null, null, 1, null, jn)),
            e.rb(
              14,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, null, 1, null, En)),
            e.rb(
              16,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.Jb(17, null, [' ', ' (', '%) '])),
            (l()(),
            e.sb(
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
            e.rb(19, 16384, null, 0, D.d, [], null, null),
            (l()(), e.Jb(20, null, ['', '']))
          ],
          function(l, n) {
            var t = l(n, 12, 0, n.parent.context.ngIf.stock.changeNegative);
            l(n, 11, 0, t),
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
      function Sn(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.sb(
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
            e.rb(
              2,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
              { iconProp: [0, 'iconProp'], size: [1, 'size'] },
              null
            ),
            (l()(),
            e.sb(3, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            e.sb(4, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(6, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(9, null, ['', ''])),
            (l()(), e.Jb(10, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          function(l, n) {
            l(n, 2, 0, 'exclamation-triangle', '3x');
          },
          function(l, n) {
            l(n, 1, 0, e.Cb(n, 2).renderedIconHTML),
              l(
                n,
                6,
                0,
                e.Kb(
                  n,
                  6,
                  0,
                  e.Cb(n, 7).transform('anms.examples.stocks.error1')
                )
              ),
              l(n, 9, 0, n.parent.context.ngIf.symbol),
              l(
                n,
                10,
                0,
                e.Kb(
                  n,
                  10,
                  0,
                  e.Cb(n, 11).transform('anms.examples.stocks.error2')
                )
              );
          }
        );
      }
      function In(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'submit' === n && (a = !1 !== e.Cb(l, 4).onSubmit(t) && a),
                  'reset' === n && (a = !1 !== e.Cb(l, 4).onReset() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(3, 16384, null, 0, P.x, [], null, null),
            e.rb(4, 4210688, null, 0, P.p, [[8, null], [8, null]], null, null),
            e.Gb(2048, null, P.c, null, [P.p]),
            e.rb(6, 16384, null, 0, P.o, [[4, P.c]], null, null),
            (l()(),
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.rb(
              8,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 1, { _controlNonStatic: 0 }),
            e.Hb(335544320, 2, { _controlStatic: 0 }),
            e.Hb(603979776, 3, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 4, { _labelChildStatic: 0 }),
            e.Hb(603979776, 5, { _placeholderChild: 0 }),
            e.Hb(603979776, 6, { _errorChildren: 1 }),
            e.Hb(603979776, 7, { _hintChildren: 1 }),
            e.Hb(603979776, 8, { _prefixChildren: 1 }),
            e.Hb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0,
                  u = l.component;
                return (
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 19)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 19)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 19)._onInput() && a),
                  'keyup' === n &&
                    (a = !1 !== u.onSymbolChange(t.target.value) && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(
              19,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [8, null],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'], value: [1, 'value'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[1, 4], [2, 4]], L.d, null, [kn.b]),
            (l()(),
            e.sb(22, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(),
            e.Jb(23, null, [
              ' ',
              ' GOOGL, FB, AAPL, NVDA, AMZN, TWTR, SNAP, TSLA... '
            ])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(25, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            e.sb(
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
            (l()(), e.hb(16777216, null, null, 1, null, wn)),
            e.rb(
              28,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, null, 1, null, An)),
            e.rb(
              30,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, null, 1, null, Sn)),
            e.rb(
              32,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(33, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            e.sb(34, 0, null, null, 0, 'br', [], null, null, null, null, null))
          ],
          function(l, n) {
            l(
              n,
              19,
              0,
              e.Kb(
                n,
                19,
                0,
                e.Cb(n, 20).transform('anms.examples.stocks.symbol')
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
              e.Cb(n, 6).ngClassUntouched,
              e.Cb(n, 6).ngClassTouched,
              e.Cb(n, 6).ngClassPristine,
              e.Cb(n, 6).ngClassDirty,
              e.Cb(n, 6).ngClassValid,
              e.Cb(n, 6).ngClassInvalid,
              e.Cb(n, 6).ngClassPending
            ),
              l(n, 7, 1, [
                'standard' == e.Cb(n, 8).appearance,
                'fill' == e.Cb(n, 8).appearance,
                'outline' == e.Cb(n, 8).appearance,
                'legacy' == e.Cb(n, 8).appearance,
                e.Cb(n, 8)._control.errorState,
                e.Cb(n, 8)._canLabelFloat,
                e.Cb(n, 8)._shouldLabelFloat(),
                e.Cb(n, 8)._hasFloatingLabel(),
                e.Cb(n, 8)._hideControlPlaceholder(),
                e.Cb(n, 8)._control.disabled,
                e.Cb(n, 8)._control.autofilled,
                e.Cb(n, 8)._control.focused,
                'accent' == e.Cb(n, 8).color,
                'warn' == e.Cb(n, 8).color,
                e.Cb(n, 8)._shouldForward('untouched'),
                e.Cb(n, 8)._shouldForward('touched'),
                e.Cb(n, 8)._shouldForward('pristine'),
                e.Cb(n, 8)._shouldForward('dirty'),
                e.Cb(n, 8)._shouldForward('valid'),
                e.Cb(n, 8)._shouldForward('invalid'),
                e.Cb(n, 8)._shouldForward('pending'),
                !e.Cb(n, 8)._animationsEnabled
              ]),
              l(
                n,
                18,
                0,
                e.Cb(n, 19)._isServer,
                e.Cb(n, 19).id,
                e.Cb(n, 19).placeholder,
                e.Cb(n, 19).disabled,
                e.Cb(n, 19).required,
                (e.Cb(n, 19).readonly && !e.Cb(n, 19)._isNativeSelect) || null,
                e.Cb(n, 19)._ariaDescribedby || null,
                e.Cb(n, 19).errorState,
                e.Cb(n, 19).required.toString()
              ),
              l(
                n,
                23,
                0,
                e.Kb(
                  n,
                  23,
                  0,
                  e.Cb(n, 24).transform('anms.examples.stocks.description')
                )
              );
          }
        );
      }
      function On(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.rb(4, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(), e.Jb(5, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              9,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(10, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(), e.hb(16777216, null, null, 2, null, In)),
            e.rb(
              12,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              16,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(17, 0, null, null, 10, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(18, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['HTTP'])),
            (l()(), e.Jb(22, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['@ngrx/effects'])),
            (l()(), e.Jb(26, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(28, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(29, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(31, 0, null, null, 5, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(32, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['.switchMap'])),
            (l()(), e.Jb(-1, null, ['. '])),
            (l()(),
            e.sb(37, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(38, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          function(l, n) {
            var t = n.component;
            l(n, 4, 0),
              l(n, 9, 0, 'row', t.routeAnimationsElements),
              l(n, 10, 0),
              l(n, 12, 0, e.Kb(n, 12, 0, e.Cb(n, 13).transform(t.stocks$))),
              l(n, 16, 0, 'col-md-12 col-lg-4', t.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              e.Kb(n, 5, 0, e.Cb(n, 6).transform('anms.examples.stocks.title'))
            ),
              l(
                n,
                18,
                0,
                e.Kb(
                  n,
                  18,
                  0,
                  e.Cb(n, 19).transform('anms.examples.stocks.text1')
                )
              ),
              l(
                n,
                22,
                0,
                e.Kb(
                  n,
                  22,
                  0,
                  e.Cb(n, 23).transform('anms.examples.stocks.text2')
                )
              ),
              l(
                n,
                26,
                0,
                e.Kb(
                  n,
                  26,
                  0,
                  e.Cb(n, 27).transform('anms.examples.stocks.text3')
                )
              ),
              l(
                n,
                29,
                0,
                e.Kb(
                  n,
                  29,
                  0,
                  e.Cb(n, 30).transform('anms.examples.stocks.text4')
                )
              ),
              l(
                n,
                32,
                0,
                e.Kb(
                  n,
                  32,
                  0,
                  e.Cb(n, 33).transform('anms.examples.stocks.text5')
                )
              ),
              l(
                n,
                38,
                0,
                e.Kb(
                  n,
                  38,
                  0,
                  e.Cb(n, 39).transform('anms.examples.stocks.text6')
                )
              );
          }
        );
      }
      function Fn(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              _n
            )),
            e.rb(1, 114688, null, 0, yn, [K.o], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Ln = e.ob('anms-stock-market', yn, Fn, {}, {}, []),
        Pn = (function() {
          function l() {}
          return (l.prototype.ngOnInit = function() {}), l;
        })(),
        Kn = e.qb({
          encapsulation: 0,
          styles: [['div[_ngcontent-%COMP%]{border:1px solid;padding:20px}']],
          data: {}
        });
      function Mn(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(2, 0, null, null, 5, 'h1', [], null, null, null, null, null)),
            (l()(), e.Jb(3, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(5, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(), e.Jb(6, null, ['', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(8, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), e.Jb(9, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          function(l, n) {
            l(
              n,
              3,
              0,
              e.Kb(
                n,
                3,
                0,
                e.Cb(n, 4).transform('anms.examples.theming.child.title')
              )
            ),
              l(
                n,
                6,
                0,
                e.Kb(
                  n,
                  6,
                  0,
                  e.Cb(n, 7).transform('anms.examples.theming.child.subtitle')
                )
              ),
              l(
                n,
                9,
                0,
                e.Kb(
                  n,
                  9,
                  0,
                  e
                    .Cb(n, 10)
                    .transform('anms.examples.theming.child.description')
                )
              );
          }
        );
      }
      var Nn = (function() {
          function l() {
            (this.themeSrc = t('pQ4S')), (this.routeAnimationsElements = M.d);
          }
          return (l.prototype.ngOnInit = function() {}), l;
        })(),
        Jn = e.qb({
          encapsulation: 0,
          styles: [
            [
              '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}pre[_ngcontent-%COMP%]{margin:0}.example[_ngcontent-%COMP%]{border:1px solid;padding:20px;margin:0 0 20px}'
            ]
          ],
          data: {}
        });
      function Hn(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.rb(4, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(), e.Jb(5, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              10,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.rb(12, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(), e.Jb(13, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['stylesUrls'])),
            (l()(), e.Jb(17, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['@Component'])),
            (l()(), e.Jb(21, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['styles.scss'])),
            (l()(), e.Jb(25, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(28, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.Jb(30, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.rb(33, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(), e.Jb(34, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(37, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.Jb(39, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['> (child selectors)'])),
            (l()(), e.Jb(43, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(46, null, ['', '\n      '])),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              49,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(50, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(
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
            e.sb(52, 0, null, null, 2, 'h1', [], null, null, null, null, null)),
            (l()(), e.Jb(53, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
              Mn,
              Kn
            )),
            e.rb(56, 114688, null, 0, Pn, [], null, null)
          ],
          function(l, n) {
            var t = n.component;
            l(n, 4, 0),
              l(n, 10, 0, 'col-md-6', t.routeAnimationsElements),
              l(n, 12, 0),
              l(n, 33, 0),
              l(n, 49, 0, 'col-md-6', t.routeAnimationsElements),
              l(n, 50, 0),
              l(n, 56, 0);
          },
          function(l, n) {
            var t = n.component;
            l(
              n,
              5,
              0,
              e.Kb(
                n,
                5,
                0,
                e.Cb(n, 6).transform('anms.examples.theming.parent.title')
              )
            ),
              l(
                n,
                13,
                0,
                e.Kb(
                  n,
                  13,
                  0,
                  e.Cb(n, 14).transform('anms.examples.theming.parent.text1')
                )
              ),
              l(
                n,
                17,
                0,
                e.Kb(
                  n,
                  17,
                  0,
                  e.Cb(n, 18).transform('anms.examples.theming.parent.text2')
                )
              ),
              l(
                n,
                21,
                0,
                e.Kb(
                  n,
                  21,
                  0,
                  e.Cb(n, 22).transform('anms.examples.theming.parent.text3')
                )
              ),
              l(
                n,
                25,
                0,
                e.Kb(
                  n,
                  25,
                  0,
                  e.Cb(n, 26).transform('anms.examples.theming.parent.text4')
                )
              ),
              l(
                n,
                28,
                0,
                e.Kb(
                  n,
                  28,
                  0,
                  e.Cb(n, 29).transform('anms.examples.theming.parent.text5')
                )
              ),
              l(
                n,
                30,
                0,
                e.Kb(
                  n,
                  30,
                  0,
                  e.Cb(n, 31).transform('anms.examples.theming.parent.text6')
                )
              ),
              l(
                n,
                34,
                0,
                e.Kb(
                  n,
                  34,
                  0,
                  e.Cb(n, 35).transform('anms.examples.theming.parent.text7')
                )
              ),
              l(
                n,
                37,
                0,
                e.Kb(
                  n,
                  37,
                  0,
                  e.Cb(n, 38).transform('anms.examples.theming.parent.text8')
                )
              ),
              l(
                n,
                39,
                0,
                e.Kb(
                  n,
                  39,
                  0,
                  e.Cb(n, 40).transform('anms.examples.theming.parent.text9')
                )
              ),
              l(
                n,
                43,
                0,
                e.Kb(
                  n,
                  43,
                  0,
                  e.Cb(n, 44).transform('anms.examples.theming.parent.text10')
                )
              ),
              l(n, 46, 0, t.themeSrc),
              l(
                n,
                53,
                0,
                e.Kb(
                  n,
                  53,
                  0,
                  e
                    .Cb(n, 54)
                    .transform('anms.examples.theming.parent.description')
                )
              );
          }
        );
      }
      function zn(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              Hn,
              Jn
            )),
            e.rb(1, 114688, null, 0, Nn, [], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Tn = e.ob('anms-parent', Nn, zn, {}, {}, []),
        qn = t('8xy9'),
        Gn = e.qb({
          encapsulation: 2,
          styles: [
            '.mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}'
          ],
          data: {}
        });
      function Qn(l) {
        return e.Lb(2, [], null, null);
      }
      var Dn = zl.getSelectors(),
        Bn = Dn.selectEntities,
        $n = Dn.selectAll,
        Rn = Object(K.z)(Ul, function(l) {
          return l.books;
        }),
        Un = Object(K.z)(Rn, $n),
        Vn = Object(K.z)(Rn, Bn),
        Xn = Object(K.z)(Vn, M.i, function(l, n) {
          return n && l[n.state.params.id];
        }),
        Yn = (function() {
          function l(n, t, e) {
            (this.store = n),
              (this.fb = t),
              (this.router = e),
              (this.routeAnimationsElements = M.d),
              (this.bookFormGroup = this.fb.group(l.createBook())),
              (this.books$ = this.store.pipe(Object(K.C)(Un))),
              (this.selectedBook$ = this.store.pipe(Object(K.C)(Xn)));
          }
          return (
            (l.createBook = function() {
              return {
                id: Object(xl.v4)(),
                title: '',
                author: '',
                description: ''
              };
            }),
            (l.prototype.select = function(l) {
              (this.isEditing = !1),
                this.router.navigate(['examples/crud', l.id]);
            }),
            (l.prototype.deselect = function() {
              (this.isEditing = !1), this.router.navigate(['examples/crud']);
            }),
            (l.prototype.edit = function(l) {
              (this.isEditing = !0), this.bookFormGroup.setValue(l);
            }),
            (l.prototype.addNew = function(n) {
              n.resetForm(),
                this.bookFormGroup.reset(),
                this.bookFormGroup.setValue(l.createBook()),
                (this.isEditing = !0);
            }),
            (l.prototype.cancelEditing = function() {
              this.isEditing = !1;
            }),
            (l.prototype.delete = function(l) {
              this.store.dispatch(Hl({ id: l.id })),
                (this.isEditing = !1),
                this.router.navigate(['examples/crud']);
            }),
            (l.prototype.save = function() {
              if (this.bookFormGroup.valid) {
                var l = this.bookFormGroup.value;
                this.store.dispatch(Jl({ book: l })),
                  (this.isEditing = !1),
                  this.router.navigate(['examples/crud', l.id]);
              }
            }),
            l
          );
        })(),
        Wn = e.qb({
          encapsulation: 0,
          styles: [
            [
              'h1[_ngcontent-%COMP%]{margin:0 0 20px;text-transform:uppercase}mat-card[_ngcontent-%COMP%]{margin:0 0 10px;cursor:pointer}.mat-fab[_ngcontent-%COMP%]   .fa-icon[_ngcontent-%COMP%]{position:relative;top:4px}.add[_ngcontent-%COMP%]{margin:20px auto 0;display:block}.col-md-6[_ngcontent-%COMP%]{margin-bottom:20px}'
            ]
          ],
          data: {}
        });
      function Zn(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
              0,
              0,
              null,
              null,
              7,
              'mat-card',
              [['class', 'mat-card']],
              null,
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n &&
                    (e = !1 !== l.component.select(l.context.$implicit) && e),
                  e
                );
              },
              Q.d,
              Q.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              2,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            e.rb(3, 49152, null, 0, D.a, [], null, null),
            (l()(),
            e.sb(4, 0, null, 0, 1, 'h3', [], null, null, null, null, null)),
            (l()(), e.Jb(5, null, ['', ''])),
            (l()(),
            e.sb(6, 0, null, 0, 1, 'small', [], null, null, null, null, null)),
            (l()(), e.Jb(7, null, ['', '']))
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
      function lt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(0, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(1, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              1,
              0,
              e.Kb(n, 1, 0, e.Cb(n, 2).transform('anms.examples.crud.empty'))
            );
          }
        );
      }
      function nt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'click' === n &&
                    (a = !1 !== l.component.addNew(e.Cb(l.parent, 31)) && a),
                  a
                );
              },
              V.d,
              V.b
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              2,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(
              3,
              180224,
              null,
              0,
              X.b,
              [e.k, g.h, [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.rb(
              5,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
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
              e.Cb(n, 3).disabled || null,
              'NoopAnimations' === e.Cb(n, 3)._animationMode
            ),
              l(n, 4, 0, e.Cb(n, 5).renderedIconHTML);
          }
        );
      }
      function tt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              V.d,
              V.b
            )),
            e.rb(
              1,
              180224,
              null,
              0,
              X.b,
              [e.k, g.h, [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0,
                  u = l.component;
                return (
                  'longpress' === n && (a = !1 !== e.Cb(l, 3).show() && a),
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 3)._handleKeydown(t) && a),
                  'touchend' === n &&
                    (a = !1 !== e.Cb(l, 3)._handleTouchend() && a),
                  'click' === n &&
                    (a = !1 !== u.edit(l.parent.context.ngIf) && a),
                  a
                );
              },
              Z.b,
              Z.a
            )),
            e.rb(
              3,
              212992,
              null,
              0,
              gl.d,
              [
                W.c,
                e.k,
                A.b,
                e.Q,
                e.A,
                f.a,
                g.c,
                g.h,
                gl.b,
                [2, _.b],
                [2, gl.a],
                [2, w.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.rb(
              5,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
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
                e.Kb(
                  n,
                  3,
                  1,
                  e.Cb(n, 4).transform('anms.examples.crud.tooltip.edit')
                )
              ),
              l(n, 5, 0, 'edit');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              e.Cb(n, 1).disabled || null,
              'NoopAnimations' === e.Cb(n, 1)._animationMode
            ),
              l(n, 2, 0, e.Cb(n, 5).renderedIconHTML);
          }
        );
      }
      function et(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            (l()(), e.hb(16777216, null, null, 1, null, tt)),
            e.rb(
              2,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
              3,
              0,
              null,
              null,
              5,
              'button',
              [['color', 'warn'], ['mat-icon-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n &&
                    (e = !1 !== l.component.delete(l.context.ngIf) && e),
                  e
                );
              },
              V.d,
              V.b
            )),
            e.rb(
              4,
              180224,
              null,
              0,
              X.b,
              [e.k, g.h, [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'longpress' === n && (a = !1 !== e.Cb(l, 6).show() && a),
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 6)._handleKeydown(t) && a),
                  'touchend' === n &&
                    (a = !1 !== e.Cb(l, 6)._handleTouchend() && a),
                  a
                );
              },
              Z.b,
              Z.a
            )),
            e.rb(
              6,
              212992,
              null,
              0,
              gl.d,
              [
                W.c,
                e.k,
                A.b,
                e.Q,
                e.A,
                f.a,
                g.c,
                g.h,
                gl.b,
                [2, _.b],
                [2, gl.a],
                [2, w.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.rb(
              8,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (l()(),
            e.sb(
              9,
              0,
              null,
              null,
              5,
              'button',
              [['mat-icon-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n && (e = !1 !== l.component.deselect() && e), e
                );
              },
              V.d,
              V.b
            )),
            e.rb(10, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'longpress' === n && (a = !1 !== e.Cb(l, 12).show() && a),
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 12)._handleKeydown(t) && a),
                  'touchend' === n &&
                    (a = !1 !== e.Cb(l, 12)._handleTouchend() && a),
                  a
                );
              },
              Z.b,
              Z.a
            )),
            e.rb(
              12,
              212992,
              null,
              0,
              gl.d,
              [
                W.c,
                e.k,
                A.b,
                e.Q,
                e.A,
                f.a,
                g.c,
                g.h,
                gl.b,
                [2, _.b],
                [2, gl.a],
                [2, w.f]
              ],
              { position: [0, 'position'], message: [1, 'message'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.rb(
              14,
              573440,
              null,
              0,
              ll.a,
              [w.b, ll.b],
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
                e.Kb(
                  n,
                  6,
                  1,
                  e.Cb(n, 7).transform('anms.examples.crud.tooltip.delete')
                )
              ),
              l(n, 8, 0, 'trash'),
              l(
                n,
                12,
                0,
                'above',
                e.Kb(
                  n,
                  12,
                  1,
                  e.Cb(n, 13).transform('anms.examples.crud.tooltip.deselect')
                )
              ),
              l(n, 14, 0, 'times');
          },
          function(l, n) {
            l(
              n,
              3,
              0,
              e.Cb(n, 4).disabled || null,
              'NoopAnimations' === e.Cb(n, 4)._animationMode
            ),
              l(n, 5, 0, e.Cb(n, 8).renderedIconHTML),
              l(
                n,
                9,
                0,
                e.Cb(n, 10).disabled || null,
                'NoopAnimations' === e.Cb(n, 10)._animationMode
              ),
              l(n, 11, 0, e.Cb(n, 14).renderedIconHTML);
          }
        );
      }
      function at(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[6, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.crud.placeholder1')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.crud.error'))
              );
          }
        );
      }
      function ut(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[15, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.crud.placeholder2')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.crud.error'))
              );
          }
        );
      }
      function it(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[24, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.crud.placeholder1')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.crud.error'))
              );
          }
        );
      }
      function rt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              2,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(3, 0, null, null, 1, 'h3', [], null, null, null, null, null)),
            (l()(), e.Jb(4, null, ['', ''])),
            (l()(),
            e.sb(
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
              Qn,
              Gn
            )),
            e.rb(6, 49152, null, 0, qn.a, [], null, null),
            (l()(),
            e.sb(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(8, null, ['', ''])),
            (l()(),
            e.sb(9, 0, null, null, 1, 'i', [], null, null, null, null, null)),
            (l()(), e.Jb(10, null, ['', '']))
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
                e.Cb(n, 6).vertical ? 'vertical' : 'horizontal',
                e.Cb(n, 6).vertical,
                !e.Cb(n, 6).vertical,
                e.Cb(n, 6).inset
              ),
              l(n, 8, 0, n.context.ngIf.description),
              l(n, 10, 0, n.context.ngIf.author);
          }
        );
      }
      function ot(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(0, 0, null, null, 7, 'p', [], null, null, null, null, null)),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              2,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            (l()(), e.Jb(3, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['@ngrx/entity'])),
            (l()(), e.Jb(-1, null, ['. ']))
          ],
          function(l, n) {
            l(n, 2, 0, n.component.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              3,
              0,
              e.Kb(n, 3, 0, e.Cb(n, 4).transform('anms.examples.crud.text'))
            );
          }
        );
      }
      function st(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            (l()(), e.hb(16777216, null, null, 2, null, rt)),
            e.rb(
              2,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            (l()(), e.hb(0, [['noSelectedBookTmpl', 2]], null, 0, null, ot))
          ],
          function(l, n) {
            var t = n.component;
            l(
              n,
              2,
              0,
              e.Kb(n, 2, 0, e.Cb(n, 3).transform(t.selectedBook$)),
              e.Cb(n, 4)
            );
          },
          null
        );
      }
      function bt(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(2, 0, null, null, 2, 'h1', [], null, null, null, null, null)),
            (l()(), e.Jb(3, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(7, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), e.Jb(8, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.hb(16777216, null, null, 2, null, Zn)),
            e.rb(
              11,
              278528,
              null,
              0,
              C.j,
              [e.Q, e.N, e.t],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            (l()(), e.hb(16777216, null, null, 2, null, lt)),
            e.rb(
              14,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            (l()(), e.hb(16777216, null, null, 1, null, nt)),
            e.rb(
              17,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(20, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), e.Jb(21, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.hb(16777216, null, null, 2, null, et)),
            e.rb(
              25,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'submit' === n && (a = !1 !== e.Cb(l, 31).onSubmit(t) && a),
                  'reset' === n && (a = !1 !== e.Cb(l, 31).onReset() && a),
                  a
                );
              },
              null,
              null
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              29,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            e.rb(30, 16384, null, 0, P.x, [], null, null),
            e.rb(
              31,
              540672,
              [['bookForm', 4]],
              0,
              P.g,
              [[8, null], [8, null]],
              { form: [0, 'form'] },
              null
            ),
            e.Gb(2048, null, P.c, null, [P.g]),
            e.rb(33, 16384, null, 0, P.o, [[4, P.c]], null, null),
            (l()(),
            e.sb(
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
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.rb(
              36,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 1, { _controlNonStatic: 0 }),
            e.Hb(335544320, 2, { _controlStatic: 0 }),
            e.Hb(603979776, 3, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 4, { _labelChildStatic: 0 }),
            e.Hb(603979776, 5, { _placeholderChild: 0 }),
            e.Hb(603979776, 6, { _errorChildren: 1 }),
            e.Hb(603979776, 7, { _hintChildren: 1 }),
            e.Hb(603979776, 8, { _prefixChildren: 1 }),
            e.Hb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 47)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 47).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 47)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 47)._compositionEnd(t.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 54)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 54)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 54)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(47, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.rb(
              48,
              16384,
              null,
              0,
              P.s,
              [],
              { required: [0, 'required'] },
              null
            ),
            e.Gb(
              1024,
              null,
              P.k,
              function(l) {
                return [l];
              },
              [P.s]
            ),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [P.d]
            ),
            e.rb(
              51,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [6, P.k], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(53, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.rb(
              54,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'], required: [1, 'required'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[1, 4], [2, 4]], L.d, null, [kn.b]),
            (l()(), e.hb(16777216, null, 5, 1, null, at)),
            e.rb(
              58,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.rb(
              61,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 10, { _controlNonStatic: 0 }),
            e.Hb(335544320, 11, { _controlStatic: 0 }),
            e.Hb(603979776, 12, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 13, { _labelChildStatic: 0 }),
            e.Hb(603979776, 14, { _placeholderChild: 0 }),
            e.Hb(603979776, 15, { _errorChildren: 1 }),
            e.Hb(603979776, 16, { _hintChildren: 1 }),
            e.Hb(603979776, 17, { _prefixChildren: 1 }),
            e.Hb(603979776, 18, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 72)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 72).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 72)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 72)._compositionEnd(t.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 79)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 79)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 79)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(72, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.rb(
              73,
              16384,
              null,
              0,
              P.s,
              [],
              { required: [0, 'required'] },
              null
            ),
            e.Gb(
              1024,
              null,
              P.k,
              function(l) {
                return [l];
              },
              [P.s]
            ),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [P.d]
            ),
            e.rb(
              76,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [6, P.k], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(78, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.rb(
              79,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'], required: [1, 'required'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[10, 4], [11, 4]], L.d, null, [kn.b]),
            (l()(), e.hb(16777216, null, 5, 1, null, ut)),
            e.rb(
              83,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.rb(
              86,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 19, { _controlNonStatic: 0 }),
            e.Hb(335544320, 20, { _controlStatic: 0 }),
            e.Hb(603979776, 21, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 22, { _labelChildStatic: 0 }),
            e.Hb(603979776, 23, { _placeholderChild: 0 }),
            e.Hb(603979776, 24, { _errorChildren: 1 }),
            e.Hb(603979776, 25, { _hintChildren: 1 }),
            e.Hb(603979776, 26, { _prefixChildren: 1 }),
            e.Hb(603979776, 27, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 97)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 97).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 97)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 97)._compositionEnd(t.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 102)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 102)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 102)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(97, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [P.d]
            ),
            e.rb(
              99,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [8, null], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(101, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.rb(
              102,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[19, 4], [20, 4]], L.d, null, [kn.b]),
            (l()(), e.hb(16777216, null, 5, 1, null, it)),
            e.rb(
              106,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
              109,
              0,
              null,
              null,
              3,
              'button',
              [['color', 'primary'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return 'click' === n && (e = !1 !== l.component.save() && e), e;
              },
              V.d,
              V.b
            )),
            e.rb(
              110,
              180224,
              null,
              0,
              X.b,
              [e.k, g.h, [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(), e.Jb(111, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
              113,
              0,
              null,
              null,
              3,
              'button',
              [['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n &&
                    (e = !1 !== l.component.cancelEditing() && e),
                  e
                );
              },
              V.d,
              V.b
            )),
            e.rb(114, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            (l()(), e.Jb(115, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.hb(16777216, null, null, 1, null, st)),
            e.rb(
              118,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            )
          ],
          function(l, n) {
            var t,
              a = n.component;
            l(n, 1, 0),
              l(n, 11, 0, e.Kb(n, 11, 0, e.Cb(n, 12).transform(a.books$))),
              l(
                n,
                14,
                0,
                0 ===
                  (null == (t = e.Kb(n, 14, 0, e.Cb(n, 15).transform(a.books$)))
                    ? null
                    : t.length)
              ),
              l(n, 17, 0, !a.isEditing),
              l(
                n,
                25,
                0,
                e.Kb(n, 25, 0, e.Cb(n, 26).transform(a.selectedBook$))
              ),
              l(n, 29, 0, a.routeAnimationsElements),
              l(n, 31, 0, a.bookFormGroup),
              l(n, 48, 0, ''),
              l(n, 51, 0, 'title'),
              l(
                n,
                54,
                0,
                e.ub(
                  1,
                  '',
                  e.Kb(
                    n,
                    54,
                    0,
                    e.Cb(n, 55).transform('anms.examples.crud.placeholder1')
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
                e.ub(
                  1,
                  '',
                  e.Kb(
                    n,
                    79,
                    0,
                    e.Cb(n, 80).transform('anms.examples.crud.placeholder2')
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
                e.ub(
                  1,
                  '',
                  e.Kb(
                    n,
                    102,
                    0,
                    e.Cb(n, 103).transform('anms.examples.crud.placeholder3')
                  ),
                  ''
                )
              ),
              l(n, 106, 0, a.bookFormGroup.get('description').invalid),
              l(n, 110, 0, 'primary'),
              l(n, 118, 0, !a.isEditing);
          },
          function(l, n) {
            var t = n.component;
            l(
              n,
              3,
              0,
              e.Kb(n, 3, 0, e.Cb(n, 4).transform('anms.examples.crud.title'))
            ),
              l(
                n,
                8,
                0,
                e.Kb(
                  n,
                  8,
                  0,
                  e.Cb(n, 9).transform('anms.examples.crud.subtitle1')
                )
              ),
              l(
                n,
                21,
                0,
                e.Kb(
                  n,
                  21,
                  0,
                  e.Cb(n, 22).transform('anms.examples.crud.subtitle2')
                )
              ),
              l(
                n,
                27,
                0,
                t.isEditing ? 'block' : 'none',
                e.Cb(n, 33).ngClassUntouched,
                e.Cb(n, 33).ngClassTouched,
                e.Cb(n, 33).ngClassPristine,
                e.Cb(n, 33).ngClassDirty,
                e.Cb(n, 33).ngClassValid,
                e.Cb(n, 33).ngClassInvalid,
                e.Cb(n, 33).ngClassPending
              ),
              l(n, 35, 1, [
                'standard' == e.Cb(n, 36).appearance,
                'fill' == e.Cb(n, 36).appearance,
                'outline' == e.Cb(n, 36).appearance,
                'legacy' == e.Cb(n, 36).appearance,
                e.Cb(n, 36)._control.errorState,
                e.Cb(n, 36)._canLabelFloat,
                e.Cb(n, 36)._shouldLabelFloat(),
                e.Cb(n, 36)._hasFloatingLabel(),
                e.Cb(n, 36)._hideControlPlaceholder(),
                e.Cb(n, 36)._control.disabled,
                e.Cb(n, 36)._control.autofilled,
                e.Cb(n, 36)._control.focused,
                'accent' == e.Cb(n, 36).color,
                'warn' == e.Cb(n, 36).color,
                e.Cb(n, 36)._shouldForward('untouched'),
                e.Cb(n, 36)._shouldForward('touched'),
                e.Cb(n, 36)._shouldForward('pristine'),
                e.Cb(n, 36)._shouldForward('dirty'),
                e.Cb(n, 36)._shouldForward('valid'),
                e.Cb(n, 36)._shouldForward('invalid'),
                e.Cb(n, 36)._shouldForward('pending'),
                !e.Cb(n, 36)._animationsEnabled
              ]),
              l(n, 46, 1, [
                e.Cb(n, 48).required ? '' : null,
                e.Cb(n, 53).ngClassUntouched,
                e.Cb(n, 53).ngClassTouched,
                e.Cb(n, 53).ngClassPristine,
                e.Cb(n, 53).ngClassDirty,
                e.Cb(n, 53).ngClassValid,
                e.Cb(n, 53).ngClassInvalid,
                e.Cb(n, 53).ngClassPending,
                e.Cb(n, 54)._isServer,
                e.Cb(n, 54).id,
                e.Cb(n, 54).placeholder,
                e.Cb(n, 54).disabled,
                e.Cb(n, 54).required,
                (e.Cb(n, 54).readonly && !e.Cb(n, 54)._isNativeSelect) || null,
                e.Cb(n, 54)._ariaDescribedby || null,
                e.Cb(n, 54).errorState,
                e.Cb(n, 54).required.toString()
              ]),
              l(n, 60, 1, [
                'standard' == e.Cb(n, 61).appearance,
                'fill' == e.Cb(n, 61).appearance,
                'outline' == e.Cb(n, 61).appearance,
                'legacy' == e.Cb(n, 61).appearance,
                e.Cb(n, 61)._control.errorState,
                e.Cb(n, 61)._canLabelFloat,
                e.Cb(n, 61)._shouldLabelFloat(),
                e.Cb(n, 61)._hasFloatingLabel(),
                e.Cb(n, 61)._hideControlPlaceholder(),
                e.Cb(n, 61)._control.disabled,
                e.Cb(n, 61)._control.autofilled,
                e.Cb(n, 61)._control.focused,
                'accent' == e.Cb(n, 61).color,
                'warn' == e.Cb(n, 61).color,
                e.Cb(n, 61)._shouldForward('untouched'),
                e.Cb(n, 61)._shouldForward('touched'),
                e.Cb(n, 61)._shouldForward('pristine'),
                e.Cb(n, 61)._shouldForward('dirty'),
                e.Cb(n, 61)._shouldForward('valid'),
                e.Cb(n, 61)._shouldForward('invalid'),
                e.Cb(n, 61)._shouldForward('pending'),
                !e.Cb(n, 61)._animationsEnabled
              ]),
              l(n, 71, 1, [
                e.Cb(n, 73).required ? '' : null,
                e.Cb(n, 78).ngClassUntouched,
                e.Cb(n, 78).ngClassTouched,
                e.Cb(n, 78).ngClassPristine,
                e.Cb(n, 78).ngClassDirty,
                e.Cb(n, 78).ngClassValid,
                e.Cb(n, 78).ngClassInvalid,
                e.Cb(n, 78).ngClassPending,
                e.Cb(n, 79)._isServer,
                e.Cb(n, 79).id,
                e.Cb(n, 79).placeholder,
                e.Cb(n, 79).disabled,
                e.Cb(n, 79).required,
                (e.Cb(n, 79).readonly && !e.Cb(n, 79)._isNativeSelect) || null,
                e.Cb(n, 79)._ariaDescribedby || null,
                e.Cb(n, 79).errorState,
                e.Cb(n, 79).required.toString()
              ]),
              l(n, 85, 1, [
                'standard' == e.Cb(n, 86).appearance,
                'fill' == e.Cb(n, 86).appearance,
                'outline' == e.Cb(n, 86).appearance,
                'legacy' == e.Cb(n, 86).appearance,
                e.Cb(n, 86)._control.errorState,
                e.Cb(n, 86)._canLabelFloat,
                e.Cb(n, 86)._shouldLabelFloat(),
                e.Cb(n, 86)._hasFloatingLabel(),
                e.Cb(n, 86)._hideControlPlaceholder(),
                e.Cb(n, 86)._control.disabled,
                e.Cb(n, 86)._control.autofilled,
                e.Cb(n, 86)._control.focused,
                'accent' == e.Cb(n, 86).color,
                'warn' == e.Cb(n, 86).color,
                e.Cb(n, 86)._shouldForward('untouched'),
                e.Cb(n, 86)._shouldForward('touched'),
                e.Cb(n, 86)._shouldForward('pristine'),
                e.Cb(n, 86)._shouldForward('dirty'),
                e.Cb(n, 86)._shouldForward('valid'),
                e.Cb(n, 86)._shouldForward('invalid'),
                e.Cb(n, 86)._shouldForward('pending'),
                !e.Cb(n, 86)._animationsEnabled
              ]),
              l(n, 96, 1, [
                e.Cb(n, 101).ngClassUntouched,
                e.Cb(n, 101).ngClassTouched,
                e.Cb(n, 101).ngClassPristine,
                e.Cb(n, 101).ngClassDirty,
                e.Cb(n, 101).ngClassValid,
                e.Cb(n, 101).ngClassInvalid,
                e.Cb(n, 101).ngClassPending,
                e.Cb(n, 102)._isServer,
                e.Cb(n, 102).id,
                e.Cb(n, 102).placeholder,
                e.Cb(n, 102).disabled,
                e.Cb(n, 102).required,
                (e.Cb(n, 102).readonly && !e.Cb(n, 102)._isNativeSelect) ||
                  null,
                e.Cb(n, 102)._ariaDescribedby || null,
                e.Cb(n, 102).errorState,
                e.Cb(n, 102).required.toString()
              ]),
              l(
                n,
                109,
                0,
                e.Cb(n, 110).disabled || null,
                'NoopAnimations' === e.Cb(n, 110)._animationMode
              ),
              l(
                n,
                111,
                0,
                e.Kb(
                  n,
                  111,
                  0,
                  e.Cb(n, 112).transform('anms.examples.crud.save')
                )
              ),
              l(
                n,
                113,
                0,
                e.Cb(n, 114).disabled || null,
                'NoopAnimations' === e.Cb(n, 114)._animationMode
              ),
              l(
                n,
                115,
                0,
                e.Kb(
                  n,
                  115,
                  0,
                  e.Cb(n, 116).transform('anms.examples.crud.cancel')
                )
              );
          }
        );
      }
      function ct(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              bt,
              Wn
            )),
            e.rb(1, 49152, null, 0, Yn, [K.o, P.e, k.p], null, null)
          ],
          null,
          null
        );
      }
      var dt = e.ob('anms-crud', Yn, ct, {}, {}, []),
        mt = t('W/Ou'),
        pt = t('Jg5f'),
        ft = [
          {
            id: Object(xl.v4)(),
            username: 'rockets',
            name: 'Elon',
            surname: 'Musk'
          },
          {
            id: Object(xl.v4)(),
            username: 'investing',
            name: 'Nassim',
            surname: 'Taleb'
          },
          {
            id: Object(xl.v4)(),
            username: 'philosophy',
            name: 'Yuval',
            surname: 'Harari'
          }
        ],
        ht = (function() {
          function l(l) {
            (this.modelFactory = l),
              (this.model = this.modelFactory.create(ft.slice())),
              (this.users$ = this.model.data$);
          }
          return (
            (l.prototype.addUser = function(l) {
              var n = this.model.get();
              n.push(Cl.a({}, l, { id: Object(xl.v4)() })), this.model.set(n);
            }),
            (l.prototype.updateUser = function(l) {
              var n = this.model.get(),
                t = n.findIndex(function(n) {
                  return n.id === l.id;
                });
              (n[t] = l), this.model.set(n);
            }),
            (l.prototype.removeUser = function(l) {
              var n = this.model.get(),
                t = n.findIndex(function(n) {
                  return n.id === l;
                });
              n.splice(t, 1), this.model.set(n);
            }),
            l
          );
        })(),
        gt = (function() {
          function l(l, n) {
            (this.fb = l),
              (this.userService = n),
              (this.routeAnimationsElements = m.a);
          }
          return (
            (l.prototype.ngOnInit = function() {
              (this.users$ = this.userService.users$),
                (this.userForm = this.fb.group({
                  id: '',
                  username: ['', [P.t.required, P.t.minLength(5)]],
                  name: ['', [P.t.required, P.t.minLength(5)]],
                  surname: ['', [P.t.required, P.t.minLength(5)]]
                })),
                (this.isEdit$ = this.userForm.get('id').valueChanges.pipe(
                  Object(mt.a)(''),
                  Object(pt.a)(function(l) {
                    return { value: (l || '').length > 0 };
                  })
                ));
            }),
            (l.prototype.removeUser = function(l) {
              this.userService.removeUser(l);
            }),
            (l.prototype.editUser = function(l) {
              this.userForm.patchValue(Cl.a({}, l));
            }),
            (l.prototype.onSubmit = function(l) {
              if (this.userForm.valid) {
                var n = this.userForm.getRawValue();
                n.id && n.id.length
                  ? this.userService.updateUser(n)
                  : this.userService.addUser(Cl.a({}, n)),
                  l.resetForm(),
                  this.userForm.reset();
              }
            }),
            (l.prototype.trackByUserId = function(l, n) {
              return n.id;
            }),
            l
          );
        })(),
        Ct = e.qb({
          encapsulation: 0,
          styles: [
            [
              '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}mat-card[_ngcontent-%COMP%]{margin:0 0 20px;display:flex}mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{flex:1 0 auto}form[_ngcontent-%COMP%]{margin:20px 0}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:20px 10px 0 0}'
            ]
          ],
          data: {}
        });
      function kt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              Q.d,
              Q.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              2,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            e.rb(3, 49152, null, 0, D.a, [], null, null),
            (l()(),
            e.sb(
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
              Q.c,
              Q.b
            )),
            e.rb(5, 49152, null, 0, D.e, [], null, null),
            (l()(),
            e.sb(
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
            e.rb(7, 16384, null, 0, D.c, [], null, null),
            (l()(),
            e.sb(
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
            e.rb(9, 16384, null, 0, D.h, [], null, null),
            (l()(), e.Jb(10, null, ['', ' ', ''])),
            (l()(),
            e.sb(
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
            e.rb(12, 16384, null, 0, D.g, [], null, null),
            (l()(), e.Jb(13, null, ['@', ''])),
            (l()(),
            e.sb(
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
            e.rb(15, 16384, null, 0, D.b, [], null, null),
            (l()(),
            e.sb(
              16,
              0,
              null,
              null,
              2,
              'button',
              [['mat-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n &&
                    (e = !1 !== l.component.editUser(l.context.$implicit) && e),
                  e
                );
              },
              V.d,
              V.b
            )),
            e.rb(17, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            (l()(), e.Jb(-1, 0, ['Edit'])),
            (l()(),
            e.sb(
              19,
              0,
              null,
              null,
              2,
              'button',
              [['mat-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n &&
                    (e =
                      !1 !== l.component.removeUser(l.context.$implicit.id) &&
                      e),
                  e
                );
              },
              V.d,
              V.b
            )),
            e.rb(20, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            (l()(), e.Jb(-1, 0, ['Delete']))
          ],
          function(l, n) {
            l(n, 2, 0, n.component.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              6,
              0,
              e.ub(
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
              l(n, 14, 0, 'end' === e.Cb(n, 15).align),
              l(
                n,
                16,
                0,
                e.Cb(n, 17).disabled || null,
                'NoopAnimations' === e.Cb(n, 17)._animationMode
              ),
              l(
                n,
                19,
                0,
                e.Cb(n, 20).disabled || null,
                'NoopAnimations' === e.Cb(n, 20)._animationMode
              );
          }
        );
      }
      function xt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            (l()(), e.hb(16777216, null, null, 1, null, kt)),
            e.rb(
              2,
              278528,
              null,
              0,
              C.j,
              [e.Q, e.N, e.t],
              { ngForOf: [0, 'ngForOf'], ngForTrackBy: [1, 'ngForTrackBy'] },
              null
            ),
            (l()(), e.hb(0, null, null, 0))
          ],
          function(l, n) {
            l(n, 2, 0, n.context.ngIf, n.component.trackByUserId);
          },
          null
        );
      }
      function vt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(0, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), e.Jb(1, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              1,
              0,
              e.Kb(
                n,
                1,
                0,
                e
                  .Cb(n, 2)
                  .transform(
                    'anms.examples.simple-state-management.form.add.title'
                  )
              )
            );
          }
        );
      }
      function yt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(0, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), e.Jb(1, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(
              n,
              1,
              0,
              e.Kb(
                n,
                1,
                0,
                e
                  .Cb(n, 2)
                  .transform(
                    'anms.examples.simple-state-management.form.edit.title'
                  )
              )
            );
          }
        );
      }
      function _t(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[6, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' '])),
            e.Fb(3, { minlength: 0 }),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            var t = n.component;
            l(n, 0, 0, e.Cb(n, 1).id);
            var a = e.Kb(
              n,
              2,
              0,
              e
                .Cb(n, 4)
                .transform(
                  'anms.examples.simple-state-management.validator.minlength',
                  l(
                    n,
                    3,
                    0,
                    t.userForm.get('username').errors.minlength.requiredLength
                  )
                )
            );
            l(n, 2, 0, a);
          }
        );
      }
      function wt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[6, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e
                    .Cb(n, 3)
                    .transform(
                      'anms.examples.simple-state-management.validator.required'
                    )
                )
              );
          }
        );
      }
      function jt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[15, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' '])),
            e.Fb(3, { minlength: 0 }),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            var t = n.component;
            l(n, 0, 0, e.Cb(n, 1).id);
            var a = e.Kb(
              n,
              2,
              0,
              e
                .Cb(n, 4)
                .transform(
                  'anms.examples.simple-state-management.validator.minlength',
                  l(
                    n,
                    3,
                    0,
                    t.userForm.get('username').errors.minlength.requiredLength
                  )
                )
            );
            l(n, 2, 0, a);
          }
        );
      }
      function Et(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[15, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e
                    .Cb(n, 3)
                    .transform(
                      'anms.examples.simple-state-management.validator.required'
                    )
                )
              );
          }
        );
      }
      function At(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[24, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' '])),
            e.Fb(3, { minlength: 0 }),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            var t = n.component;
            l(n, 0, 0, e.Cb(n, 1).id);
            var a = e.Kb(
              n,
              2,
              0,
              e
                .Cb(n, 4)
                .transform(
                  'anms.examples.simple-state-management.validator.minlength',
                  l(
                    n,
                    3,
                    0,
                    t.userForm.get('username').errors.minlength.requiredLength
                  )
                )
            );
            l(n, 2, 0, a);
          }
        );
      }
      function St(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[24, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e
                    .Cb(n, 3)
                    .transform(
                      'anms.examples.simple-state-management.validator.required'
                    )
                )
              );
          }
        );
      }
      function It(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              V.d,
              V.b
            )),
            e.rb(
              1,
              180224,
              null,
              0,
              X.b,
              [e.k, g.h, [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(), e.Jb(2, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          function(l, n) {
            l(n, 1, 0, 'primary');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              e.Cb(n, 1).disabled || null,
              'NoopAnimations' === e.Cb(n, 1)._animationMode
            ),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e
                    .Cb(n, 3)
                    .transform(
                      'anms.examples.simple-state-management.form.add.submit'
                    )
                )
              );
          }
        );
      }
      function Ot(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              V.d,
              V.b
            )),
            e.rb(
              1,
              180224,
              null,
              0,
              X.b,
              [e.k, g.h, [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(), e.Jb(2, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          function(l, n) {
            l(n, 1, 0, 'primary');
          },
          function(l, n) {
            l(
              n,
              0,
              0,
              e.Cb(n, 1).disabled || null,
              'NoopAnimations' === e.Cb(n, 1)._animationMode
            ),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e
                    .Cb(n, 3)
                    .transform(
                      'anms.examples.simple-state-management.form.edit.submit'
                    )
                )
              );
          }
        );
      }
      function Ft(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            (l()(), e.hb(16777216, null, null, 1, null, vt)),
            e.rb(
              2,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, null, 1, null, yt)),
            e.rb(
              4,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0,
                  u = l.component;
                return (
                  'submit' === n && (a = !1 !== e.Cb(l, 7).onSubmit(t) && a),
                  'reset' === n && (a = !1 !== e.Cb(l, 7).onReset() && a),
                  'ngSubmit' === n && (a = !1 !== u.onSubmit(e.Cb(l, 7)) && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(6, 16384, null, 0, P.x, [], null, null),
            e.rb(
              7,
              540672,
              [['userFormRef', 4]],
              0,
              P.g,
              [[8, null], [8, null]],
              { form: [0, 'form'] },
              { ngSubmit: 'ngSubmit' }
            ),
            e.Gb(2048, null, P.c, null, [P.g]),
            e.rb(9, 16384, null, 0, P.o, [[4, P.c]], null, null),
            (l()(),
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.rb(
              11,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 1, { _controlNonStatic: 0 }),
            e.Hb(335544320, 2, { _controlStatic: 0 }),
            e.Hb(603979776, 3, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 4, { _labelChildStatic: 0 }),
            e.Hb(603979776, 5, { _placeholderChild: 0 }),
            e.Hb(603979776, 6, { _errorChildren: 1 }),
            e.Hb(603979776, 7, { _hintChildren: 1 }),
            e.Hb(603979776, 8, { _prefixChildren: 1 }),
            e.Hb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 22)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 22).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 22)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 22)._compositionEnd(t.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 27)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 27)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 27)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(22, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [P.d]
            ),
            e.rb(
              24,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [8, null], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(26, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.rb(
              27,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[1, 4], [2, 4]], L.d, null, [kn.b]),
            (l()(), e.hb(16777216, null, 5, 1, null, _t)),
            e.rb(
              31,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, 5, 1, null, wt)),
            e.rb(
              33,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.rb(
              35,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 10, { _controlNonStatic: 0 }),
            e.Hb(335544320, 11, { _controlStatic: 0 }),
            e.Hb(603979776, 12, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 13, { _labelChildStatic: 0 }),
            e.Hb(603979776, 14, { _placeholderChild: 0 }),
            e.Hb(603979776, 15, { _errorChildren: 1 }),
            e.Hb(603979776, 16, { _hintChildren: 1 }),
            e.Hb(603979776, 17, { _prefixChildren: 1 }),
            e.Hb(603979776, 18, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 46)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 46).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 46)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 46)._compositionEnd(t.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 51)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 51)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 51)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(46, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [P.d]
            ),
            e.rb(
              48,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [8, null], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(50, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.rb(
              51,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[10, 4], [11, 4]], L.d, null, [kn.b]),
            (l()(), e.hb(16777216, null, 5, 1, null, jt)),
            e.rb(
              55,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, 5, 1, null, Et)),
            e.rb(
              57,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.rb(
              59,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 19, { _controlNonStatic: 0 }),
            e.Hb(335544320, 20, { _controlStatic: 0 }),
            e.Hb(603979776, 21, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 22, { _labelChildStatic: 0 }),
            e.Hb(603979776, 23, { _placeholderChild: 0 }),
            e.Hb(603979776, 24, { _errorChildren: 1 }),
            e.Hb(603979776, 25, { _hintChildren: 1 }),
            e.Hb(603979776, 26, { _prefixChildren: 1 }),
            e.Hb(603979776, 27, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 70)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 70).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 70)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 70)._compositionEnd(t.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 75)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 75)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 75)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(70, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [P.d]
            ),
            e.rb(
              72,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [8, null], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(74, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.rb(
              75,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[19, 4], [20, 4]], L.d, null, [kn.b]),
            (l()(), e.hb(16777216, null, 5, 1, null, At)),
            e.rb(
              79,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, 5, 1, null, St)),
            e.rb(
              81,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
            (l()(), e.hb(16777216, null, null, 1, null, It)),
            e.rb(
              84,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, null, 1, null, Ot)),
            e.rb(
              86,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
              V.d,
              V.b
            )),
            e.rb(
              88,
              180224,
              null,
              0,
              X.b,
              [e.k, g.h, [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(), e.Jb(-1, 0, ['Reset']))
          ],
          function(l, n) {
            var t = n.component;
            l(n, 2, 0, !n.context.ngIf.value),
              l(n, 4, 0, n.context.ngIf.value),
              l(n, 7, 0, t.userForm),
              l(n, 24, 0, 'username'),
              l(
                n,
                27,
                0,
                e.Kb(
                  n,
                  27,
                  0,
                  e
                    .Cb(n, 28)
                    .transform('anms.examples.simple-state-management.username')
                )
              ),
              l(n, 31, 0, t.userForm.get('username').hasError('minlength')),
              l(n, 33, 0, t.userForm.get('username').hasError('required')),
              l(n, 48, 0, 'name'),
              l(
                n,
                51,
                0,
                e.Kb(
                  n,
                  51,
                  0,
                  e
                    .Cb(n, 52)
                    .transform('anms.examples.simple-state-management.name')
                )
              ),
              l(n, 55, 0, t.userForm.get('username').hasError('minlength')),
              l(n, 57, 0, t.userForm.get('username').hasError('required')),
              l(n, 72, 0, 'surname'),
              l(
                n,
                75,
                0,
                e.Kb(
                  n,
                  75,
                  0,
                  e
                    .Cb(n, 76)
                    .transform('anms.examples.simple-state-management.surname')
                )
              ),
              l(n, 79, 0, t.userForm.get('username').hasError('minlength')),
              l(n, 81, 0, t.userForm.get('username').hasError('required')),
              l(n, 84, 0, !n.context.ngIf.value),
              l(n, 86, 0, n.context.ngIf.value),
              l(n, 88, 0, 'warn');
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              e.Cb(n, 9).ngClassUntouched,
              e.Cb(n, 9).ngClassTouched,
              e.Cb(n, 9).ngClassPristine,
              e.Cb(n, 9).ngClassDirty,
              e.Cb(n, 9).ngClassValid,
              e.Cb(n, 9).ngClassInvalid,
              e.Cb(n, 9).ngClassPending
            ),
              l(n, 10, 1, [
                'standard' == e.Cb(n, 11).appearance,
                'fill' == e.Cb(n, 11).appearance,
                'outline' == e.Cb(n, 11).appearance,
                'legacy' == e.Cb(n, 11).appearance,
                e.Cb(n, 11)._control.errorState,
                e.Cb(n, 11)._canLabelFloat,
                e.Cb(n, 11)._shouldLabelFloat(),
                e.Cb(n, 11)._hasFloatingLabel(),
                e.Cb(n, 11)._hideControlPlaceholder(),
                e.Cb(n, 11)._control.disabled,
                e.Cb(n, 11)._control.autofilled,
                e.Cb(n, 11)._control.focused,
                'accent' == e.Cb(n, 11).color,
                'warn' == e.Cb(n, 11).color,
                e.Cb(n, 11)._shouldForward('untouched'),
                e.Cb(n, 11)._shouldForward('touched'),
                e.Cb(n, 11)._shouldForward('pristine'),
                e.Cb(n, 11)._shouldForward('dirty'),
                e.Cb(n, 11)._shouldForward('valid'),
                e.Cb(n, 11)._shouldForward('invalid'),
                e.Cb(n, 11)._shouldForward('pending'),
                !e.Cb(n, 11)._animationsEnabled
              ]),
              l(n, 21, 1, [
                e.Cb(n, 26).ngClassUntouched,
                e.Cb(n, 26).ngClassTouched,
                e.Cb(n, 26).ngClassPristine,
                e.Cb(n, 26).ngClassDirty,
                e.Cb(n, 26).ngClassValid,
                e.Cb(n, 26).ngClassInvalid,
                e.Cb(n, 26).ngClassPending,
                e.Cb(n, 27)._isServer,
                e.Cb(n, 27).id,
                e.Cb(n, 27).placeholder,
                e.Cb(n, 27).disabled,
                e.Cb(n, 27).required,
                (e.Cb(n, 27).readonly && !e.Cb(n, 27)._isNativeSelect) || null,
                e.Cb(n, 27)._ariaDescribedby || null,
                e.Cb(n, 27).errorState,
                e.Cb(n, 27).required.toString()
              ]),
              l(n, 34, 1, [
                'standard' == e.Cb(n, 35).appearance,
                'fill' == e.Cb(n, 35).appearance,
                'outline' == e.Cb(n, 35).appearance,
                'legacy' == e.Cb(n, 35).appearance,
                e.Cb(n, 35)._control.errorState,
                e.Cb(n, 35)._canLabelFloat,
                e.Cb(n, 35)._shouldLabelFloat(),
                e.Cb(n, 35)._hasFloatingLabel(),
                e.Cb(n, 35)._hideControlPlaceholder(),
                e.Cb(n, 35)._control.disabled,
                e.Cb(n, 35)._control.autofilled,
                e.Cb(n, 35)._control.focused,
                'accent' == e.Cb(n, 35).color,
                'warn' == e.Cb(n, 35).color,
                e.Cb(n, 35)._shouldForward('untouched'),
                e.Cb(n, 35)._shouldForward('touched'),
                e.Cb(n, 35)._shouldForward('pristine'),
                e.Cb(n, 35)._shouldForward('dirty'),
                e.Cb(n, 35)._shouldForward('valid'),
                e.Cb(n, 35)._shouldForward('invalid'),
                e.Cb(n, 35)._shouldForward('pending'),
                !e.Cb(n, 35)._animationsEnabled
              ]),
              l(n, 45, 1, [
                e.Cb(n, 50).ngClassUntouched,
                e.Cb(n, 50).ngClassTouched,
                e.Cb(n, 50).ngClassPristine,
                e.Cb(n, 50).ngClassDirty,
                e.Cb(n, 50).ngClassValid,
                e.Cb(n, 50).ngClassInvalid,
                e.Cb(n, 50).ngClassPending,
                e.Cb(n, 51)._isServer,
                e.Cb(n, 51).id,
                e.Cb(n, 51).placeholder,
                e.Cb(n, 51).disabled,
                e.Cb(n, 51).required,
                (e.Cb(n, 51).readonly && !e.Cb(n, 51)._isNativeSelect) || null,
                e.Cb(n, 51)._ariaDescribedby || null,
                e.Cb(n, 51).errorState,
                e.Cb(n, 51).required.toString()
              ]),
              l(n, 58, 1, [
                'standard' == e.Cb(n, 59).appearance,
                'fill' == e.Cb(n, 59).appearance,
                'outline' == e.Cb(n, 59).appearance,
                'legacy' == e.Cb(n, 59).appearance,
                e.Cb(n, 59)._control.errorState,
                e.Cb(n, 59)._canLabelFloat,
                e.Cb(n, 59)._shouldLabelFloat(),
                e.Cb(n, 59)._hasFloatingLabel(),
                e.Cb(n, 59)._hideControlPlaceholder(),
                e.Cb(n, 59)._control.disabled,
                e.Cb(n, 59)._control.autofilled,
                e.Cb(n, 59)._control.focused,
                'accent' == e.Cb(n, 59).color,
                'warn' == e.Cb(n, 59).color,
                e.Cb(n, 59)._shouldForward('untouched'),
                e.Cb(n, 59)._shouldForward('touched'),
                e.Cb(n, 59)._shouldForward('pristine'),
                e.Cb(n, 59)._shouldForward('dirty'),
                e.Cb(n, 59)._shouldForward('valid'),
                e.Cb(n, 59)._shouldForward('invalid'),
                e.Cb(n, 59)._shouldForward('pending'),
                !e.Cb(n, 59)._animationsEnabled
              ]),
              l(n, 69, 1, [
                e.Cb(n, 74).ngClassUntouched,
                e.Cb(n, 74).ngClassTouched,
                e.Cb(n, 74).ngClassPristine,
                e.Cb(n, 74).ngClassDirty,
                e.Cb(n, 74).ngClassValid,
                e.Cb(n, 74).ngClassInvalid,
                e.Cb(n, 74).ngClassPending,
                e.Cb(n, 75)._isServer,
                e.Cb(n, 75).id,
                e.Cb(n, 75).placeholder,
                e.Cb(n, 75).disabled,
                e.Cb(n, 75).required,
                (e.Cb(n, 75).readonly && !e.Cb(n, 75)._isNativeSelect) || null,
                e.Cb(n, 75)._ariaDescribedby || null,
                e.Cb(n, 75).errorState,
                e.Cb(n, 75).required.toString()
              ]),
              l(
                n,
                87,
                0,
                e.Cb(n, 88).disabled || null,
                'NoopAnimations' === e.Cb(n, 88)._animationMode
              );
          }
        );
      }
      function Lt(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.rb(4, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(), e.Jb(5, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              9,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(10, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(
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
            (l()(), e.hb(16777216, null, null, 2, null, xt)),
            e.rb(
              13,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            (l()(), e.hb(16777216, null, null, 2, null, Ft)),
            e.rb(
              16,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              20,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(21, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(22, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(24, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(25, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(27, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(28, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['@angular-extensions/model'])),
            (l()(),
            e.sb(32, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(33, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(35, 0, null, null, 5, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(36, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(39, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(41, 0, null, null, 7, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(42, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['ng add @angular-extensions/model'])),
            (l()(), e.Jb(-1, null, [' & '])),
            (l()(),
            e.sb(
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
            e.Jb(-1, null, [
              'ng g @angular-extensions/model:model examples/user --items'
            ]))
          ],
          function(l, n) {
            var t = n.component;
            l(n, 4, 0),
              l(n, 9, 0, 'row', t.routeAnimationsElements),
              l(n, 10, 0),
              l(n, 13, 0, e.Kb(n, 13, 0, e.Cb(n, 14).transform(t.users$))),
              l(n, 16, 0, e.Kb(n, 16, 0, e.Cb(n, 17).transform(t.isEdit$))),
              l(n, 20, 0, 'col-md-12 col-lg-6', t.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              e.Kb(
                n,
                5,
                0,
                e
                  .Cb(n, 6)
                  .transform('anms.examples.simple-state-management.title')
              )
            ),
              l(
                n,
                22,
                0,
                e.Kb(
                  n,
                  22,
                  0,
                  e
                    .Cb(n, 23)
                    .transform('anms.examples.simple-state-management.text1')
                )
              ),
              l(
                n,
                25,
                0,
                e.Kb(
                  n,
                  25,
                  0,
                  e
                    .Cb(n, 26)
                    .transform('anms.examples.simple-state-management.text2')
                )
              ),
              l(
                n,
                28,
                0,
                e.Kb(
                  n,
                  28,
                  0,
                  e
                    .Cb(n, 29)
                    .transform('anms.examples.simple-state-management.text3')
                )
              ),
              l(
                n,
                33,
                0,
                e.Kb(
                  n,
                  33,
                  0,
                  e
                    .Cb(n, 34)
                    .transform('anms.examples.simple-state-management.text4')
                )
              ),
              l(
                n,
                36,
                0,
                e.Kb(
                  n,
                  36,
                  0,
                  e
                    .Cb(n, 37)
                    .transform('anms.examples.simple-state-management.text5')
                )
              ),
              l(
                n,
                39,
                0,
                e.Kb(
                  n,
                  39,
                  0,
                  e
                    .Cb(n, 40)
                    .transform('anms.examples.simple-state-management.text6')
                )
              ),
              l(
                n,
                42,
                0,
                e.Kb(
                  n,
                  42,
                  0,
                  e
                    .Cb(n, 43)
                    .transform('anms.examples.simple-state-management.text7')
                )
              );
          }
        );
      }
      function Pt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              Lt,
              Ct
            )),
            e.rb(1, 114688, null, 0, gt, [P.e, ht], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Kt = e.ob('anms-user', gt, Pt, {}, {}, []),
        Mt = t('3xHB'),
        Nt = t('euho'),
        Jt = t('O0P8'),
        Ht = t('s8WJ'),
        zt = t('qXP9'),
        Tt = e.qb({
          encapsulation: 2,
          styles: [
            ".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:0;vertical-align:middle}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label{cursor:-webkit-grab;cursor:grab}.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label:active,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(.7);transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),border-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform .4s cubic-bezier(.25,.8,.25,1),border-radius .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}@media (-ms-high-contrast:active){.mat-slider-thumb-label{outline:solid 1px}}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-sliding .mat-slider-thumb-container,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-track-fill{transition-duration:0s}.mat-slider-has-ticks .mat-slider-wrapper::after{content:'';position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}@media (-ms-high-contrast:active){.mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}@media (-ms-high-contrast:active){.mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-track-fill{transition:none}"
          ],
          data: {}
        });
      function qt(l) {
        return e.Lb(
          2,
          [
            e.Hb(671088640, 1, { _sliderWrapper: 0 }),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.Gb(512, null, C.A, C.B, [e.k, e.u, e.F]),
            e.rb(
              5,
              278528,
              null,
              0,
              C.p,
              [C.A],
              { ngStyle: [0, 'ngStyle'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.A, C.B, [e.k, e.u, e.F]),
            e.rb(
              8,
              278528,
              null,
              0,
              C.p,
              [C.A],
              { ngStyle: [0, 'ngStyle'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.A, C.B, [e.k, e.u, e.F]),
            e.rb(
              11,
              278528,
              null,
              0,
              C.p,
              [C.A],
              { ngStyle: [0, 'ngStyle'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.A, C.B, [e.k, e.u, e.F]),
            e.rb(
              14,
              278528,
              null,
              0,
              C.p,
              [C.A],
              { ngStyle: [0, 'ngStyle'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.A, C.B, [e.k, e.u, e.F]),
            e.rb(
              17,
              278528,
              null,
              0,
              C.p,
              [C.A],
              { ngStyle: [0, 'ngStyle'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.sb(
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
            (l()(), e.Jb(22, null, ['', '']))
          ],
          function(l, n) {
            var t = n.component;
            l(n, 5, 0, t._trackBackgroundStyles),
              l(n, 8, 0, t._trackFillStyles),
              l(n, 11, 0, t._ticksContainerStyles),
              l(n, 14, 0, t._ticksStyles),
              l(n, 17, 0, t._thumbContainerStyles);
          },
          function(l, n) {
            l(n, 22, 0, n.component.displayValue);
          }
        );
      }
      var Gt = t('R+ki'),
        Qt = t('z5yO'),
        Dt = Object(K.z)(Ul, function(l) {
          return l.form;
        }),
        Bt = (function() {
          function l(l, n, t, e) {
            (this.fb = l),
              (this.store = n),
              (this.translate = t),
              (this.notificationService = e),
              (this.routeAnimationsElements = M.d),
              (this.form = this.fb.group({
                autosave: !1,
                username: ['', [P.t.required]],
                password: ['', [P.t.required]],
                email: ['', [P.t.required, P.t.email]],
                description: [
                  '',
                  [P.t.required, P.t.minLength(10), P.t.maxLength(1e3)]
                ],
                requestGift: [''],
                birthday: ['', [P.t.required]],
                rating: [0, P.t.required]
              }));
          }
          return (
            (l.prototype.ngOnInit = function() {
              var l = this;
              (this.formValueChanges$ = this.form.valueChanges.pipe(
                Object(Gt.a)(500),
                Object(Qt.a)(function(l) {
                  return l.autosave;
                })
              )),
                this.store
                  .pipe(
                    Object(K.C)(Dt),
                    Object(kl.a)(1)
                  )
                  .subscribe(function(n) {
                    return l.form.patchValue(n.form);
                  });
            }),
            (l.prototype.update = function(l) {
              this.store.dispatch(Ql({ form: l }));
            }),
            (l.prototype.save = function() {
              this.store.dispatch(Ql({ form: this.form.value }));
            }),
            (l.prototype.submit = function() {
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
            }),
            (l.prototype.reset = function() {
              this.form.reset(),
                this.form.clearValidators(),
                this.form.clearAsyncValidators(),
                this.store.dispatch(Dl());
            }),
            l
          );
        })(),
        $t = e.qb({
          encapsulation: 0,
          styles: [
            [
              '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px;text-align:center}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}mat-checkbox[_ngcontent-%COMP%]{margin:10px 0 20px}mat-slider[_ngcontent-%COMP%]{width:100%}.buttons[_ngcontent-%COMP%]{margin:20px 0}'
            ]
          ],
          data: {}
        });
      function Rt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            (l()(), e.Jb(1, null, [' ', ' ']))
          ],
          null,
          function(l, n) {
            l(n, 1, 0, n.component.update(n.context.ngIf));
          }
        );
      }
      function Ut(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[6, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.form.placeholder1')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.form.error1'))
              );
          }
        );
      }
      function Vt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[15, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.form.placeholder2')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.form.error1'))
              );
          }
        );
      }
      function Xt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[24, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.form.placeholder3')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.form.error1'))
              );
          }
        );
      }
      function Yt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[24, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.form.placeholder3')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.form.error2'))
              );
          }
        );
      }
      function Wt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[33, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.form.placeholder5')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.form.error1'))
              );
          }
        );
      }
      function Zt(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[43, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.form.placeholder4')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.form.error1'))
              );
          }
        );
      }
      function le(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[43, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ' 10 '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.form.placeholder4')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.form.error3'))
              );
          }
        );
      }
      function ne(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 16384, [[43, 4]], 0, L.b, [], null, null),
            (l()(), e.Jb(2, null, [' ', ' ', ' 1000 '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          null,
          function(l, n) {
            l(n, 0, 0, e.Cb(n, 1).id),
              l(
                n,
                2,
                0,
                e.Kb(
                  n,
                  2,
                  0,
                  e.Cb(n, 3).transform('anms.examples.form.placeholder4')
                ),
                e.Kb(n, 2, 1, e.Cb(n, 4).transform('anms.examples.form.error4'))
              );
          }
        );
      }
      function te(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            (l()(), e.Jb(5, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.hb(16777216, null, null, 2, null, Rt)),
            e.rb(
              8,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            e.Eb(131072, C.b, [e.h]),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0,
                  u = l.component;
                return (
                  'submit' === n && (a = !1 !== e.Cb(l, 12).onSubmit(t) && a),
                  'reset' === n && (a = !1 !== e.Cb(l, 12).onReset() && a),
                  'ngSubmit' === n && (a = !1 !== u.submit() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(11, 16384, null, 0, P.x, [], null, null),
            e.rb(
              12,
              540672,
              null,
              0,
              P.g,
              [[8, null], [8, null]],
              { form: [0, 'form'] },
              { ngSubmit: 'ngSubmit' }
            ),
            e.Gb(2048, null, P.c, null, [P.g]),
            e.rb(14, 16384, null, 0, P.o, [[4, P.c]], null, null),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
              Q.d,
              Q.a
            )),
            e.rb(18, 49152, null, 0, D.a, [], null, null),
            (l()(),
            e.sb(
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
            e.sb(20, 0, null, null, 2, 'h2', [], null, null, null, null, null)),
            (l()(), e.Jb(21, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'focus' === n &&
                    (a =
                      !1 !== e.Cb(l, 24)._inputElement.nativeElement.focus() &&
                      a),
                  a
                );
              },
              Mt.b,
              Mt.a
            )),
            e.rb(
              24,
              1228800,
              null,
              0,
              Nt.b,
              [e.k, g.h, e.h, [8, null], e.A, Nt.a, [2, E.a], [2, _.b]],
              null,
              null
            ),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [Nt.b]
            ),
            e.rb(
              26,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [8, null], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(28, 16384, null, 0, P.n, [[4, P.m]], null, null),
            (l()(), e.Jb(29, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              34,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(
              35,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 1, { _controlNonStatic: 0 }),
            e.Hb(335544320, 2, { _controlStatic: 0 }),
            e.Hb(603979776, 3, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 4, { _labelChildStatic: 0 }),
            e.Hb(603979776, 5, { _placeholderChild: 0 }),
            e.Hb(603979776, 6, { _errorChildren: 1 }),
            e.Hb(603979776, 7, { _hintChildren: 1 }),
            e.Hb(603979776, 8, { _prefixChildren: 1 }),
            e.Hb(603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 46)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 46).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 46)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 46)._compositionEnd(t.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 51)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 51)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 51)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(46, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [P.d]
            ),
            e.rb(
              48,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [8, null], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(50, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.rb(
              51,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[1, 4], [2, 4]], L.d, null, [kn.b]),
            (l()(), e.hb(16777216, null, 5, 1, null, Ut)),
            e.rb(
              55,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              58,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(
              59,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 10, { _controlNonStatic: 0 }),
            e.Hb(335544320, 11, { _controlStatic: 0 }),
            e.Hb(603979776, 12, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 13, { _labelChildStatic: 0 }),
            e.Hb(603979776, 14, { _placeholderChild: 0 }),
            e.Hb(603979776, 15, { _errorChildren: 1 }),
            e.Hb(603979776, 16, { _hintChildren: 1 }),
            e.Hb(603979776, 17, { _prefixChildren: 1 }),
            e.Hb(603979776, 18, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 70)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 70).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 70)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 70)._compositionEnd(t.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 75)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 75)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 75)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(70, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [P.d]
            ),
            e.rb(
              72,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [8, null], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(74, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.rb(
              75,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'], type: [1, 'type'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[10, 4], [11, 4]], L.d, null, [kn.b]),
            (l()(), e.hb(16777216, null, 5, 1, null, Vt)),
            e.rb(
              79,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              83,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(
              84,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 19, { _controlNonStatic: 0 }),
            e.Hb(335544320, 20, { _controlStatic: 0 }),
            e.Hb(603979776, 21, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 22, { _labelChildStatic: 0 }),
            e.Hb(603979776, 23, { _placeholderChild: 0 }),
            e.Hb(603979776, 24, { _errorChildren: 1 }),
            e.Hb(603979776, 25, { _hintChildren: 1 }),
            e.Hb(603979776, 26, { _prefixChildren: 1 }),
            e.Hb(603979776, 27, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 95)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 95).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 95)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 95)._compositionEnd(t.target.value) && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 100)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 100)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 100)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(95, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [P.d]
            ),
            e.rb(
              97,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [8, null], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(99, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.rb(
              100,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'], type: [1, 'type'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[19, 4], [20, 4]], L.d, null, [kn.b]),
            (l()(), e.hb(16777216, null, 5, 1, null, Xt)),
            e.rb(
              104,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, 5, 1, null, Yt)),
            e.rb(
              106,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              110,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(
              111,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 28, { _controlNonStatic: 0 }),
            e.Hb(335544320, 29, { _controlStatic: 0 }),
            e.Hb(603979776, 30, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 31, { _labelChildStatic: 0 }),
            e.Hb(603979776, 32, { _placeholderChild: 0 }),
            e.Hb(603979776, 33, { _errorChildren: 1 }),
            e.Hb(603979776, 34, { _hintChildren: 1 }),
            e.Hb(603979776, 35, { _prefixChildren: 1 }),
            e.Hb(603979776, 36, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 122)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 122).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 122)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 122)._compositionEnd(t.target.value) && a),
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 123)._onInput(t.target.value) && a),
                  'change' === n && (a = !1 !== e.Cb(l, 123)._onChange() && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 123)._onBlur() && a),
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 123)._onKeydown(t) && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 130)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 130)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 130)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(122, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.rb(
              123,
              147456,
              null,
              0,
              Jt.h,
              [e.k, [2, h.a], [2, h.e], [2, L.c]],
              { matDatepicker: [0, 'matDatepicker'] },
              null
            ),
            e.Gb(
              1024,
              null,
              P.k,
              function(l) {
                return [l];
              },
              [Jt.h]
            ),
            e.Gb(
              1024,
              null,
              P.l,
              function(l, n) {
                return [l, n];
              },
              [P.d, Jt.h]
            ),
            e.rb(
              126,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [6, P.k], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(128, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.Gb(2048, null, kn.a, null, [Jt.h]),
            e.rb(
              130,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [6, kn.a],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[28, 4], [29, 4]], L.d, null, [kn.b]),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 135)._button.focus() && a),
                  a
                );
              },
              c.e,
              c.d
            )),
            e.rb(134, 16384, [[36, 4]], 0, L.h, [], null, null),
            e.rb(
              135,
              1753088,
              null,
              1,
              Jt.k,
              [Jt.i, e.h, [8, null]],
              { datepicker: [0, 'datepicker'] },
              null
            ),
            e.Hb(603979776, 37, { _customIcon: 0 }),
            (l()(),
            e.sb(
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
            e.rb(
              138,
              180224,
              [['picker', 4]],
              0,
              Jt.f,
              [Ht.d, W.c, e.A, e.Q, Jt.a, [2, h.a], [2, _.b], [2, C.d]],
              null,
              null
            ),
            (l()(), e.hb(16777216, null, 5, 1, null, Wt)),
            e.rb(
              140,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
              Cn.b,
              Cn.a
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              144,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(
              145,
              7520256,
              null,
              9,
              L.c,
              [e.k, e.h, [2, h.h], [2, _.b], [2, L.a], f.a, e.A, [2, E.a]],
              null,
              null
            ),
            e.Hb(603979776, 38, { _controlNonStatic: 0 }),
            e.Hb(335544320, 39, { _controlStatic: 0 }),
            e.Hb(603979776, 40, { _labelChildNonStatic: 0 }),
            e.Hb(335544320, 41, { _labelChildStatic: 0 }),
            e.Hb(603979776, 42, { _placeholderChild: 0 }),
            e.Hb(603979776, 43, { _errorChildren: 1 }),
            e.Hb(603979776, 44, { _hintChildren: 1 }),
            e.Hb(603979776, 45, { _prefixChildren: 1 }),
            e.Hb(603979776, 46, { _suffixChildren: 1 }),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 156)._handleInput(t.target.value) && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 156).onTouched() && a),
                  'compositionstart' === n &&
                    (a = !1 !== e.Cb(l, 156)._compositionStart() && a),
                  'compositionend' === n &&
                    (a =
                      !1 !== e.Cb(l, 156)._compositionEnd(t.target.value) && a),
                  'input' === n &&
                    (a = !1 !== e.Cb(l, 164)._noopInputHandler() && a),
                  'blur' === n &&
                    (a = !1 !== e.Cb(l, 165)._focusChanged(!1) && a),
                  'focus' === n &&
                    (a = !1 !== e.Cb(l, 165)._focusChanged(!0) && a),
                  'input' === n && (a = !1 !== e.Cb(l, 165)._onInput() && a),
                  a
                );
              },
              null,
              null
            )),
            e.rb(156, 16384, null, 0, P.d, [e.F, e.k, [2, P.a]], null, null),
            e.rb(
              157,
              540672,
              null,
              0,
              P.j,
              [],
              { minlength: [0, 'minlength'] },
              null
            ),
            e.rb(
              158,
              540672,
              null,
              0,
              P.i,
              [],
              { maxlength: [0, 'maxlength'] },
              null
            ),
            e.Gb(
              1024,
              null,
              P.k,
              function(l, n) {
                return [l, n];
              },
              [P.j, P.i]
            ),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [P.d]
            ),
            e.rb(
              161,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [6, P.k], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(163, 16384, null, 0, P.n, [[4, P.m]], null, null),
            e.rb(
              164,
              4603904,
              [['autosize', 4]],
              0,
              xn.b,
              [e.k, f.a, e.A],
              {
                minRows: [0, 'minRows'],
                maxRows: [1, 'maxRows'],
                enabled: [2, 'enabled']
              },
              null
            ),
            e.rb(
              165,
              999424,
              null,
              0,
              kn.b,
              [
                e.k,
                f.a,
                [6, P.m],
                [2, P.p],
                [2, P.g],
                h.b,
                [8, null],
                xn.a,
                e.A
              ],
              { placeholder: [0, 'placeholder'] },
              null
            ),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Gb(2048, [[38, 4], [39, 4]], L.d, null, [kn.b]),
            (l()(),
            e.sb(
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
            e.rb(
              169,
              16384,
              [[44, 4]],
              0,
              L.f,
              [],
              { align: [0, 'align'] },
              null
            ),
            (l()(), e.Jb(170, null, ['', ' / 1000'])),
            (l()(), e.hb(16777216, null, 5, 1, null, Zt)),
            e.rb(
              172,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, 5, 1, null, le)),
            e.rb(
              174,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(), e.hb(16777216, null, 5, 1, null, ne)),
            e.rb(
              176,
              16384,
              null,
              0,
              C.k,
              [e.Q, e.N],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              179,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(
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
            e.sb(
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
            (l()(), e.Jb(182, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.sb(
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
              function(l, n, t) {
                var a = !0;
                return (
                  'focus' === n && (a = !1 !== e.Cb(l, 186)._onFocus() && a),
                  'blur' === n && (a = !1 !== e.Cb(l, 186)._onBlur() && a),
                  'mousedown' === n &&
                    (a = !1 !== e.Cb(l, 186)._onMousedown(t) && a),
                  'keydown' === n &&
                    (a = !1 !== e.Cb(l, 186)._onKeydown(t) && a),
                  'keyup' === n && (a = !1 !== e.Cb(l, 186)._onKeyup() && a),
                  'mouseenter' === n &&
                    (a = !1 !== e.Cb(l, 186)._onMouseenter() && a),
                  'slide' === n && (a = !1 !== e.Cb(l, 186)._onSlide(t) && a),
                  'slideend' === n &&
                    (a = !1 !== e.Cb(l, 186)._onSlideEnd() && a),
                  'slidestart' === n &&
                    (a = !1 !== e.Cb(l, 186)._onSlideStart(t) && a),
                  a
                );
              },
              qt,
              Tt
            )),
            e.rb(
              186,
              245760,
              null,
              0,
              zt.a,
              [e.k, g.h, e.h, [2, _.b], [8, null], [2, E.a]],
              {
                max: [0, 'max'],
                min: [1, 'min'],
                thumbLabel: [2, 'thumbLabel'],
                tickInterval: [3, 'tickInterval']
              },
              null
            ),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [zt.a]
            ),
            e.rb(
              188,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [8, null], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(190, 16384, null, 0, P.n, [[4, P.m]], null, null),
            (l()(),
            e.sb(
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
            e.sb(
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
              R,
              $
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              194,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(
              195,
              8568832,
              null,
              0,
              B.b,
              [e.k, e.h, g.h, e.A, [8, null], [2, B.a], [2, E.a]],
              null,
              null
            ),
            e.Gb(
              1024,
              null,
              P.l,
              function(l) {
                return [l];
              },
              [B.b]
            ),
            e.rb(
              197,
              671744,
              null,
              0,
              P.f,
              [[3, P.c], [8, null], [8, null], [6, P.l], [2, P.w]],
              { name: [0, 'name'] },
              null
            ),
            e.Gb(2048, null, P.m, null, [P.f]),
            e.rb(199, 16384, null, 0, P.n, [[4, P.m]], null, null),
            (l()(), e.Jb(200, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.sb(
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
              V.d,
              V.b
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              205,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            e.rb(
              206,
              180224,
              null,
              0,
              X.b,
              [e.k, g.h, [2, E.a]],
              { color: [0, 'color'] },
              null
            ),
            (l()(), e.Jb(207, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
              function(l, n, t) {
                var e = !0;
                return 'click' === n && (e = !1 !== l.component.save() && e), e;
              },
              V.d,
              V.b
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              211,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            e.rb(
              212,
              180224,
              null,
              0,
              X.b,
              [e.k, g.h, [2, E.a]],
              { disabled: [0, 'disabled'], color: [1, 'color'] },
              null
            ),
            (l()(), e.Jb(213, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
              215,
              0,
              null,
              null,
              5,
              'button',
              [['mat-raised-button', ''], ['type', 'reset']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n && (e = !1 !== l.component.reset() && e), e
                );
              },
              V.d,
              V.b
            )),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              217,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            e.rb(218, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            (l()(), e.Jb(219, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          function(l, n) {
            var t = n.component;
            l(n, 1, 0),
              l(
                n,
                8,
                0,
                e.Kb(n, 8, 0, e.Cb(n, 9).transform(t.formValueChanges$))
              ),
              l(n, 12, 0, t.form),
              l(n, 26, 0, 'autosave'),
              l(n, 34, 0, 'col', t.routeAnimationsElements),
              l(n, 48, 0, 'username'),
              l(
                n,
                51,
                0,
                e.ub(
                  1,
                  '',
                  e.Kb(
                    n,
                    51,
                    0,
                    e.Cb(n, 52).transform('anms.examples.form.placeholder1')
                  ),
                  ''
                )
              ),
              l(n, 55, 0, t.form.get('username').invalid),
              l(n, 58, 0, 'col', t.routeAnimationsElements),
              l(n, 72, 0, 'password'),
              l(
                n,
                75,
                0,
                e.ub(
                  1,
                  '',
                  e.Kb(
                    n,
                    75,
                    0,
                    e.Cb(n, 76).transform('anms.examples.form.placeholder2')
                  ),
                  ''
                ),
                'password'
              ),
              l(n, 79, 0, t.form.get('password').invalid),
              l(n, 83, 0, 'col', t.routeAnimationsElements),
              l(n, 97, 0, 'email'),
              l(
                n,
                100,
                0,
                e.ub(
                  1,
                  '',
                  e.Kb(
                    n,
                    100,
                    0,
                    e.Cb(n, 101).transform('anms.examples.form.placeholder3')
                  ),
                  ''
                ),
                'email'
              ),
              l(n, 104, 0, t.form.get('email').hasError('required')),
              l(n, 106, 0, t.form.get('email').hasError('email')),
              l(n, 110, 0, 'col', t.routeAnimationsElements),
              l(n, 123, 0, e.Cb(n, 138)),
              l(n, 126, 0, 'birthday'),
              l(
                n,
                130,
                0,
                e.ub(
                  1,
                  '',
                  e.Kb(
                    n,
                    130,
                    0,
                    e.Cb(n, 131).transform('anms.examples.form.placeholder5')
                  ),
                  ''
                )
              ),
              l(n, 135, 0, e.Cb(n, 138)),
              l(n, 140, 0, t.form.get('birthday').hasError('required')),
              l(n, 144, 0, 'col', t.routeAnimationsElements),
              l(n, 157, 0, '10'),
              l(n, 158, 0, '1000'),
              l(n, 161, 0, 'description'),
              l(n, 164, 0, '3', '10', ''),
              l(
                n,
                165,
                0,
                e.ub(
                  1,
                  '',
                  e.Kb(
                    n,
                    165,
                    0,
                    e.Cb(n, 166).transform('anms.examples.form.placeholder4')
                  ),
                  ''
                )
              ),
              l(n, 169, 0, 'end'),
              l(n, 172, 0, t.form.get('description').hasError('required')),
              l(n, 174, 0, t.form.get('description').hasError('minlength')),
              l(n, 176, 0, t.form.get('description').hasError('maxlength')),
              l(n, 179, 0, 'row', t.routeAnimationsElements),
              l(n, 186, 0, '10', '1', '', '1'),
              l(n, 188, 0, 'rating'),
              l(n, 194, 0, 'col', t.routeAnimationsElements),
              l(n, 197, 0, 'requestGift'),
              l(n, 205, 0, t.routeAnimationsElements),
              l(n, 206, 0, 'primary'),
              l(n, 211, 0, t.routeAnimationsElements),
              l(n, 212, 0, t.form.get('autosave').value, 'accent'),
              l(n, 217, 0, t.routeAnimationsElements);
          },
          function(l, n) {
            var t = n.component;
            l(
              n,
              5,
              0,
              e.Kb(n, 5, 0, e.Cb(n, 6).transform('anms.examples.form.title'))
            ),
              l(
                n,
                10,
                0,
                e.Cb(n, 14).ngClassUntouched,
                e.Cb(n, 14).ngClassTouched,
                e.Cb(n, 14).ngClassPristine,
                e.Cb(n, 14).ngClassDirty,
                e.Cb(n, 14).ngClassValid,
                e.Cb(n, 14).ngClassInvalid,
                e.Cb(n, 14).ngClassPending
              ),
              l(
                n,
                21,
                0,
                e.Kb(
                  n,
                  21,
                  0,
                  e.Cb(n, 22).transform('anms.examples.form.subtitle1')
                )
              ),
              l(n, 23, 1, [
                e.Cb(n, 24).id,
                e.Cb(n, 24).disabled ? null : -1,
                e.Cb(n, 24).checked,
                e.Cb(n, 24).disabled,
                'before' == e.Cb(n, 24).labelPosition,
                'NoopAnimations' === e.Cb(n, 24)._animationMode,
                e.Cb(n, 28).ngClassUntouched,
                e.Cb(n, 28).ngClassTouched,
                e.Cb(n, 28).ngClassPristine,
                e.Cb(n, 28).ngClassDirty,
                e.Cb(n, 28).ngClassValid,
                e.Cb(n, 28).ngClassInvalid,
                e.Cb(n, 28).ngClassPending
              ]),
              l(
                n,
                29,
                0,
                e.Kb(
                  n,
                  29,
                  0,
                  e.Cb(n, 30).transform('anms.examples.form.autosave')
                )
              ),
              l(n, 32, 1, [
                'standard' == e.Cb(n, 35).appearance,
                'fill' == e.Cb(n, 35).appearance,
                'outline' == e.Cb(n, 35).appearance,
                'legacy' == e.Cb(n, 35).appearance,
                e.Cb(n, 35)._control.errorState,
                e.Cb(n, 35)._canLabelFloat,
                e.Cb(n, 35)._shouldLabelFloat(),
                e.Cb(n, 35)._hasFloatingLabel(),
                e.Cb(n, 35)._hideControlPlaceholder(),
                e.Cb(n, 35)._control.disabled,
                e.Cb(n, 35)._control.autofilled,
                e.Cb(n, 35)._control.focused,
                'accent' == e.Cb(n, 35).color,
                'warn' == e.Cb(n, 35).color,
                e.Cb(n, 35)._shouldForward('untouched'),
                e.Cb(n, 35)._shouldForward('touched'),
                e.Cb(n, 35)._shouldForward('pristine'),
                e.Cb(n, 35)._shouldForward('dirty'),
                e.Cb(n, 35)._shouldForward('valid'),
                e.Cb(n, 35)._shouldForward('invalid'),
                e.Cb(n, 35)._shouldForward('pending'),
                !e.Cb(n, 35)._animationsEnabled
              ]),
              l(n, 45, 1, [
                e.Cb(n, 50).ngClassUntouched,
                e.Cb(n, 50).ngClassTouched,
                e.Cb(n, 50).ngClassPristine,
                e.Cb(n, 50).ngClassDirty,
                e.Cb(n, 50).ngClassValid,
                e.Cb(n, 50).ngClassInvalid,
                e.Cb(n, 50).ngClassPending,
                e.Cb(n, 51)._isServer,
                e.Cb(n, 51).id,
                e.Cb(n, 51).placeholder,
                e.Cb(n, 51).disabled,
                e.Cb(n, 51).required,
                (e.Cb(n, 51).readonly && !e.Cb(n, 51)._isNativeSelect) || null,
                e.Cb(n, 51)._ariaDescribedby || null,
                e.Cb(n, 51).errorState,
                e.Cb(n, 51).required.toString()
              ]),
              l(n, 56, 1, [
                'standard' == e.Cb(n, 59).appearance,
                'fill' == e.Cb(n, 59).appearance,
                'outline' == e.Cb(n, 59).appearance,
                'legacy' == e.Cb(n, 59).appearance,
                e.Cb(n, 59)._control.errorState,
                e.Cb(n, 59)._canLabelFloat,
                e.Cb(n, 59)._shouldLabelFloat(),
                e.Cb(n, 59)._hasFloatingLabel(),
                e.Cb(n, 59)._hideControlPlaceholder(),
                e.Cb(n, 59)._control.disabled,
                e.Cb(n, 59)._control.autofilled,
                e.Cb(n, 59)._control.focused,
                'accent' == e.Cb(n, 59).color,
                'warn' == e.Cb(n, 59).color,
                e.Cb(n, 59)._shouldForward('untouched'),
                e.Cb(n, 59)._shouldForward('touched'),
                e.Cb(n, 59)._shouldForward('pristine'),
                e.Cb(n, 59)._shouldForward('dirty'),
                e.Cb(n, 59)._shouldForward('valid'),
                e.Cb(n, 59)._shouldForward('invalid'),
                e.Cb(n, 59)._shouldForward('pending'),
                !e.Cb(n, 59)._animationsEnabled
              ]),
              l(n, 69, 1, [
                e.Cb(n, 74).ngClassUntouched,
                e.Cb(n, 74).ngClassTouched,
                e.Cb(n, 74).ngClassPristine,
                e.Cb(n, 74).ngClassDirty,
                e.Cb(n, 74).ngClassValid,
                e.Cb(n, 74).ngClassInvalid,
                e.Cb(n, 74).ngClassPending,
                e.Cb(n, 75)._isServer,
                e.Cb(n, 75).id,
                e.Cb(n, 75).placeholder,
                e.Cb(n, 75).disabled,
                e.Cb(n, 75).required,
                (e.Cb(n, 75).readonly && !e.Cb(n, 75)._isNativeSelect) || null,
                e.Cb(n, 75)._ariaDescribedby || null,
                e.Cb(n, 75).errorState,
                e.Cb(n, 75).required.toString()
              ]),
              l(n, 81, 1, [
                'standard' == e.Cb(n, 84).appearance,
                'fill' == e.Cb(n, 84).appearance,
                'outline' == e.Cb(n, 84).appearance,
                'legacy' == e.Cb(n, 84).appearance,
                e.Cb(n, 84)._control.errorState,
                e.Cb(n, 84)._canLabelFloat,
                e.Cb(n, 84)._shouldLabelFloat(),
                e.Cb(n, 84)._hasFloatingLabel(),
                e.Cb(n, 84)._hideControlPlaceholder(),
                e.Cb(n, 84)._control.disabled,
                e.Cb(n, 84)._control.autofilled,
                e.Cb(n, 84)._control.focused,
                'accent' == e.Cb(n, 84).color,
                'warn' == e.Cb(n, 84).color,
                e.Cb(n, 84)._shouldForward('untouched'),
                e.Cb(n, 84)._shouldForward('touched'),
                e.Cb(n, 84)._shouldForward('pristine'),
                e.Cb(n, 84)._shouldForward('dirty'),
                e.Cb(n, 84)._shouldForward('valid'),
                e.Cb(n, 84)._shouldForward('invalid'),
                e.Cb(n, 84)._shouldForward('pending'),
                !e.Cb(n, 84)._animationsEnabled
              ]),
              l(n, 94, 1, [
                e.Cb(n, 99).ngClassUntouched,
                e.Cb(n, 99).ngClassTouched,
                e.Cb(n, 99).ngClassPristine,
                e.Cb(n, 99).ngClassDirty,
                e.Cb(n, 99).ngClassValid,
                e.Cb(n, 99).ngClassInvalid,
                e.Cb(n, 99).ngClassPending,
                e.Cb(n, 100)._isServer,
                e.Cb(n, 100).id,
                e.Cb(n, 100).placeholder,
                e.Cb(n, 100).disabled,
                e.Cb(n, 100).required,
                (e.Cb(n, 100).readonly && !e.Cb(n, 100)._isNativeSelect) ||
                  null,
                e.Cb(n, 100)._ariaDescribedby || null,
                e.Cb(n, 100).errorState,
                e.Cb(n, 100).required.toString()
              ]),
              l(n, 108, 1, [
                'standard' == e.Cb(n, 111).appearance,
                'fill' == e.Cb(n, 111).appearance,
                'outline' == e.Cb(n, 111).appearance,
                'legacy' == e.Cb(n, 111).appearance,
                e.Cb(n, 111)._control.errorState,
                e.Cb(n, 111)._canLabelFloat,
                e.Cb(n, 111)._shouldLabelFloat(),
                e.Cb(n, 111)._hasFloatingLabel(),
                e.Cb(n, 111)._hideControlPlaceholder(),
                e.Cb(n, 111)._control.disabled,
                e.Cb(n, 111)._control.autofilled,
                e.Cb(n, 111)._control.focused,
                'accent' == e.Cb(n, 111).color,
                'warn' == e.Cb(n, 111).color,
                e.Cb(n, 111)._shouldForward('untouched'),
                e.Cb(n, 111)._shouldForward('touched'),
                e.Cb(n, 111)._shouldForward('pristine'),
                e.Cb(n, 111)._shouldForward('dirty'),
                e.Cb(n, 111)._shouldForward('valid'),
                e.Cb(n, 111)._shouldForward('invalid'),
                e.Cb(n, 111)._shouldForward('pending'),
                !e.Cb(n, 111)._animationsEnabled
              ]),
              l(n, 121, 1, [
                ((null == e.Cb(n, 123)._datepicker
                  ? null
                  : e.Cb(n, 123)._datepicker.opened) &&
                  e.Cb(n, 123)._datepicker.id) ||
                  null,
                e.Cb(n, 123).min
                  ? e.Cb(n, 123)._dateAdapter.toIso8601(e.Cb(n, 123).min)
                  : null,
                e.Cb(n, 123).max
                  ? e.Cb(n, 123)._dateAdapter.toIso8601(e.Cb(n, 123).max)
                  : null,
                e.Cb(n, 123).disabled,
                e.Cb(n, 128).ngClassUntouched,
                e.Cb(n, 128).ngClassTouched,
                e.Cb(n, 128).ngClassPristine,
                e.Cb(n, 128).ngClassDirty,
                e.Cb(n, 128).ngClassValid,
                e.Cb(n, 128).ngClassInvalid,
                e.Cb(n, 128).ngClassPending,
                e.Cb(n, 130)._isServer,
                e.Cb(n, 130).id,
                e.Cb(n, 130).placeholder,
                e.Cb(n, 130).disabled,
                e.Cb(n, 130).required,
                (e.Cb(n, 130).readonly && !e.Cb(n, 130)._isNativeSelect) ||
                  null,
                e.Cb(n, 130)._ariaDescribedby || null,
                e.Cb(n, 130).errorState,
                e.Cb(n, 130).required.toString()
              ]),
              l(
                n,
                133,
                0,
                -1,
                e.Cb(n, 135).datepicker && e.Cb(n, 135).datepicker.opened,
                e.Cb(n, 135).datepicker &&
                  'accent' === e.Cb(n, 135).datepicker.color,
                e.Cb(n, 135).datepicker &&
                  'warn' === e.Cb(n, 135).datepicker.color
              ),
              l(n, 142, 1, [
                'standard' == e.Cb(n, 145).appearance,
                'fill' == e.Cb(n, 145).appearance,
                'outline' == e.Cb(n, 145).appearance,
                'legacy' == e.Cb(n, 145).appearance,
                e.Cb(n, 145)._control.errorState,
                e.Cb(n, 145)._canLabelFloat,
                e.Cb(n, 145)._shouldLabelFloat(),
                e.Cb(n, 145)._hasFloatingLabel(),
                e.Cb(n, 145)._hideControlPlaceholder(),
                e.Cb(n, 145)._control.disabled,
                e.Cb(n, 145)._control.autofilled,
                e.Cb(n, 145)._control.focused,
                'accent' == e.Cb(n, 145).color,
                'warn' == e.Cb(n, 145).color,
                e.Cb(n, 145)._shouldForward('untouched'),
                e.Cb(n, 145)._shouldForward('touched'),
                e.Cb(n, 145)._shouldForward('pristine'),
                e.Cb(n, 145)._shouldForward('dirty'),
                e.Cb(n, 145)._shouldForward('valid'),
                e.Cb(n, 145)._shouldForward('invalid'),
                e.Cb(n, 145)._shouldForward('pending'),
                !e.Cb(n, 145)._animationsEnabled
              ]),
              l(n, 155, 1, [
                e.Cb(n, 157).minlength ? e.Cb(n, 157).minlength : null,
                e.Cb(n, 158).maxlength ? e.Cb(n, 158).maxlength : null,
                e.Cb(n, 163).ngClassUntouched,
                e.Cb(n, 163).ngClassTouched,
                e.Cb(n, 163).ngClassPristine,
                e.Cb(n, 163).ngClassDirty,
                e.Cb(n, 163).ngClassValid,
                e.Cb(n, 163).ngClassInvalid,
                e.Cb(n, 163).ngClassPending,
                e.Cb(n, 165)._isServer,
                e.Cb(n, 165).id,
                e.Cb(n, 165).placeholder,
                e.Cb(n, 165).disabled,
                e.Cb(n, 165).required,
                (e.Cb(n, 165).readonly && !e.Cb(n, 165)._isNativeSelect) ||
                  null,
                e.Cb(n, 165)._ariaDescribedby || null,
                e.Cb(n, 165).errorState,
                e.Cb(n, 165).required.toString()
              ]),
              l(n, 168, 0, 'end' == e.Cb(n, 169).align, e.Cb(n, 169).id, null),
              l(
                n,
                170,
                0,
                null == t.form.get('description').value
                  ? null
                  : t.form.get('description').value.length
              ),
              l(
                n,
                182,
                0,
                e.Kb(
                  n,
                  182,
                  0,
                  e.Cb(n, 183).transform('anms.examples.form.text2')
                )
              ),
              l(n, 185, 1, [
                e.Cb(n, 186).tabIndex,
                e.Cb(n, 186).disabled,
                e.Cb(n, 186).max,
                e.Cb(n, 186).min,
                e.Cb(n, 186).value,
                e.Cb(n, 186).vertical ? 'vertical' : 'horizontal',
                e.Cb(n, 186).disabled,
                e.Cb(n, 186).tickInterval,
                !e.Cb(n, 186).vertical,
                e.Cb(n, 186)._invertAxis,
                e.Cb(n, 186)._isSliding,
                e.Cb(n, 186).thumbLabel,
                e.Cb(n, 186).vertical,
                e.Cb(n, 186)._isMinValue,
                e.Cb(n, 186).disabled ||
                  (e.Cb(n, 186)._isMinValue &&
                    e.Cb(n, 186)._thumbGap &&
                    e.Cb(n, 186)._invertAxis),
                'NoopAnimations' === e.Cb(n, 186)._animationMode,
                e.Cb(n, 190).ngClassUntouched,
                e.Cb(n, 190).ngClassTouched,
                e.Cb(n, 190).ngClassPristine,
                e.Cb(n, 190).ngClassDirty,
                e.Cb(n, 190).ngClassValid,
                e.Cb(n, 190).ngClassInvalid,
                e.Cb(n, 190).ngClassPending
              ]),
              l(n, 192, 1, [
                e.Cb(n, 195).id,
                null,
                e.Cb(n, 195).indeterminate,
                e.Cb(n, 195).checked,
                e.Cb(n, 195).disabled,
                'before' == e.Cb(n, 195).labelPosition,
                'NoopAnimations' === e.Cb(n, 195)._animationMode,
                e.Cb(n, 199).ngClassUntouched,
                e.Cb(n, 199).ngClassTouched,
                e.Cb(n, 199).ngClassPristine,
                e.Cb(n, 199).ngClassDirty,
                e.Cb(n, 199).ngClassValid,
                e.Cb(n, 199).ngClassInvalid,
                e.Cb(n, 199).ngClassPending
              ]),
              l(
                n,
                200,
                0,
                e.Kb(
                  n,
                  200,
                  0,
                  e.Cb(n, 201).transform('anms.examples.form.text1')
                )
              ),
              l(
                n,
                203,
                0,
                e.Cb(n, 206).disabled || null,
                'NoopAnimations' === e.Cb(n, 206)._animationMode
              ),
              l(
                n,
                207,
                0,
                e.Kb(
                  n,
                  207,
                  0,
                  e.Cb(n, 208).transform('anms.examples.form.send')
                )
              ),
              l(
                n,
                209,
                0,
                e.Cb(n, 212).disabled || null,
                'NoopAnimations' === e.Cb(n, 212)._animationMode
              ),
              l(
                n,
                213,
                0,
                e.Kb(
                  n,
                  213,
                  0,
                  e.Cb(n, 214).transform('anms.examples.form.save')
                )
              ),
              l(
                n,
                215,
                0,
                e.Cb(n, 218).disabled || null,
                'NoopAnimations' === e.Cb(n, 218)._animationMode
              ),
              l(
                n,
                219,
                0,
                e.Kb(
                  n,
                  219,
                  0,
                  e.Cb(n, 220).transform('anms.examples.form.reset')
                )
              );
          }
        );
      }
      function ee(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              te,
              $t
            )),
            e.rb(1, 114688, null, 0, Bt, [P.e, K.o, x.j, tn.a], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var ae = e.ob('anms-form', Bt, ee, {}, {}, []),
        ue = (function() {
          function l(l) {
            (this.notificationService = l),
              (this.routeAnimationsElements = M.d);
          }
          return (
            (l.prototype.ngOnInit = function() {}),
            (l.prototype.default = function() {
              this.notificationService.default('Default message');
            }),
            (l.prototype.info = function() {
              this.notificationService.info('Info message');
            }),
            (l.prototype.success = function() {
              this.notificationService.success('Success message');
            }),
            (l.prototype.warn = function() {
              this.notificationService.warn('Warning message');
            }),
            (l.prototype.error = function() {
              this.notificationService.error('Error message');
            }),
            l
          );
        })(),
        ie = e.qb({
          encapsulation: 0,
          styles: [
            [
              '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}.item[_ngcontent-%COMP%]{margin:10px 0}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:12px 0 0 20px}'
            ]
          ],
          data: {}
        });
      function re(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            (l()(), e.Jb(5, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              9,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(
              10,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'col-3 default'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n && (e = !1 !== l.component.default() && e), e
                );
              },
              V.d,
              V.b
            )),
            e.rb(11, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            (l()(), e.Jb(12, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(15, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              19,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(
              20,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'col-3 information'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return 'click' === n && (e = !1 !== l.component.info() && e), e;
              },
              V.d,
              V.b
            )),
            e.rb(21, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            (l()(), e.Jb(22, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(25, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              29,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(
              30,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'col-3 success'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n && (e = !1 !== l.component.success() && e), e
                );
              },
              V.d,
              V.b
            )),
            e.rb(31, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            (l()(), e.Jb(32, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(35, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              39,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(
              40,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'col-3 warning'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return 'click' === n && (e = !1 !== l.component.warn() && e), e;
              },
              V.d,
              V.b
            )),
            e.rb(41, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            (l()(), e.Jb(42, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(45, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              49,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(
              50,
              0,
              null,
              null,
              3,
              'button',
              [['class', 'col-3 error'], ['mat-raised-button', '']],
              [[1, 'disabled', 0], [2, '_mat-animation-noopable', null]],
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n && (e = !1 !== l.component.error() && e), e
                );
              },
              V.d,
              V.b
            )),
            e.rb(51, 180224, null, 0, X.b, [e.k, g.h, [2, E.a]], null, null),
            (l()(), e.Jb(52, 0, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(55, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          function(l, n) {
            var t = n.component;
            l(n, 1, 0),
              l(n, 9, 0, 'row item', t.routeAnimationsElements),
              l(n, 19, 0, 'row item', t.routeAnimationsElements),
              l(n, 29, 0, 'row item', t.routeAnimationsElements),
              l(n, 39, 0, 'row item', t.routeAnimationsElements),
              l(n, 49, 0, 'row item', t.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              e.Kb(
                n,
                5,
                0,
                e.Cb(n, 6).transform('anms.examples.notifications.title')
              )
            ),
              l(
                n,
                10,
                0,
                e.Cb(n, 11).disabled || null,
                'NoopAnimations' === e.Cb(n, 11)._animationMode
              ),
              l(
                n,
                12,
                0,
                e.Kb(
                  n,
                  12,
                  0,
                  e
                    .Cb(n, 13)
                    .transform('anms.examples.notifications.default.title')
                )
              ),
              l(
                n,
                15,
                0,
                e.Kb(
                  n,
                  15,
                  0,
                  e
                    .Cb(n, 16)
                    .transform(
                      'anms.examples.notifications.default.description'
                    )
                )
              ),
              l(
                n,
                20,
                0,
                e.Cb(n, 21).disabled || null,
                'NoopAnimations' === e.Cb(n, 21)._animationMode
              ),
              l(
                n,
                22,
                0,
                e.Kb(
                  n,
                  22,
                  0,
                  e
                    .Cb(n, 23)
                    .transform('anms.examples.notifications.info.title')
                )
              ),
              l(
                n,
                25,
                0,
                e.Kb(
                  n,
                  25,
                  0,
                  e
                    .Cb(n, 26)
                    .transform('anms.examples.notifications.info.description')
                )
              ),
              l(
                n,
                30,
                0,
                e.Cb(n, 31).disabled || null,
                'NoopAnimations' === e.Cb(n, 31)._animationMode
              ),
              l(
                n,
                32,
                0,
                e.Kb(
                  n,
                  32,
                  0,
                  e
                    .Cb(n, 33)
                    .transform('anms.examples.notifications.success.title')
                )
              ),
              l(
                n,
                35,
                0,
                e.Kb(
                  n,
                  35,
                  0,
                  e
                    .Cb(n, 36)
                    .transform(
                      'anms.examples.notifications.success.description'
                    )
                )
              ),
              l(
                n,
                40,
                0,
                e.Cb(n, 41).disabled || null,
                'NoopAnimations' === e.Cb(n, 41)._animationMode
              ),
              l(
                n,
                42,
                0,
                e.Kb(
                  n,
                  42,
                  0,
                  e
                    .Cb(n, 43)
                    .transform('anms.examples.notifications.warning.title')
                )
              ),
              l(
                n,
                45,
                0,
                e.Kb(
                  n,
                  45,
                  0,
                  e
                    .Cb(n, 46)
                    .transform(
                      'anms.examples.notifications.warning.description'
                    )
                )
              ),
              l(
                n,
                50,
                0,
                e.Cb(n, 51).disabled || null,
                'NoopAnimations' === e.Cb(n, 51)._animationMode
              ),
              l(
                n,
                52,
                0,
                e.Kb(
                  n,
                  52,
                  0,
                  e
                    .Cb(n, 53)
                    .transform('anms.examples.notifications.error.title')
                )
              ),
              l(
                n,
                55,
                0,
                e.Kb(
                  n,
                  55,
                  0,
                  e
                    .Cb(n, 56)
                    .transform('anms.examples.notifications.error.description')
                )
              );
          }
        );
      }
      function oe(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              re,
              ie
            )),
            e.rb(1, 114688, null, 0, ue, [tn.a], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var se = e.ob('anms-notifications', ue, oe, {}, {}, []),
        be = (function() {
          function l() {
            this.registry = new Map();
          }
          return (
            (l.prototype.loadElement = function(l, n, t) {
              if ((void 0 === t && (t = !1), !l))
                throw new Error(
                  '@angular-extensions/elements - url for <' + n + '> not found'
                );
              if (!n)
                throw new Error(
                  "@angular-extensions/elements - tag for '" +
                    l +
                    "' not found, the *axLazyElement has to be used on HTML element"
                );
              if (!this.hasElement(l)) {
                var e = this.addElement(l),
                  a = document.createElement('script');
                t && (a.type = 'module'),
                  (a.src = l),
                  (a.onload = e.resolve),
                  (a.onerror = e.reject),
                  document.body.appendChild(a);
              }
              return this.registry.get(this.stripUrlProtocol(l));
            }),
            (l.prototype.addElement = function(l) {
              var n;
              return (
                this.registry.set(
                  this.stripUrlProtocol(l),
                  new Promise(function(l, t) {
                    return (n = { resolve: l, reject: t });
                  })
                ),
                n
              );
            }),
            (l.prototype.hasElement = function(l) {
              return this.registry.has(this.stripUrlProtocol(l));
            }),
            (l.prototype.stripUrlProtocol = function(l) {
              return l.replace(/https?:\/\//, '');
            }),
            (l.ngInjectableDef = Object(e.Nb)({
              factory: function() {
                return new l();
              },
              token: l,
              providedIn: 'root'
            })),
            l
          );
        })(),
        ce = (function() {
          function l(l, n, t) {
            (this.vcr = l),
              (this.template = n),
              (this.elementsLoaderService = t);
          }
          return (
            (l.prototype.ngOnInit = function() {
              var l = this,
                n = this.template._def.element.template.nodes[0].element.name;
              this.loadingTemplateRef &&
                this.vcr.createEmbeddedView(this.loadingTemplateRef),
                this.elementsLoaderService
                  .loadElement(this.url, n, this.isModule)
                  .then(function() {
                    l.vcr.clear(), l.vcr.createEmbeddedView(l.template);
                  })
                  .catch(function() {
                    l.vcr.clear(),
                      l.errorTemplateRef
                        ? l.vcr.createEmbeddedView(l.errorTemplateRef)
                        : console.error(
                            '@angular-extensions/elements - Loading of element <' +
                              n +
                              '> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element'
                          );
                  });
            }),
            l
          );
        })(),
        de = (function() {
          return function() {};
        })(),
        me = (function() {
          function l() {
            (this.routeAnimationsElements = m.a), (this.counter = 0);
          }
          return (
            (l.prototype.ngOnInit = function() {}),
            (l.prototype.increment = function() {
              this.counter++;
            }),
            l
          );
        })(),
        pe = e.qb({
          encapsulation: 0,
          styles: [
            [
              '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}'
            ]
          ],
          data: {}
        });
      function fe(l) {
        return e.Lb(
          0,
          [(l()(), e.Jb(-1, null, ['Loading of element failed...']))],
          null,
          null
        );
      }
      function he(l) {
        return e.Lb(0, [(l()(), e.Jb(-1, null, ['Loading...']))], null, null);
      }
      function ge(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
              0,
              0,
              null,
              null,
              1,
              'mwc-button',
              [['raised', '']],
              null,
              [[null, 'click']],
              function(l, n, t) {
                var e = !0;
                return (
                  'click' === n && (e = !1 !== l.component.increment() && e), e
                );
              },
              null,
              null
            )),
            (l()(), e.Jb(-1, null, [' Increment ']))
          ],
          null,
          null
        );
      }
      function Ce(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.sb(
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
            e.rb(4, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(), e.Jb(5, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              9,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            e.rb(10, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(
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
            (l()(), e.hb(0, [['error', 2]], null, 0, null, fe)),
            (l()(), e.hb(0, [['loading', 2]], null, 0, null, he)),
            (l()(), e.hb(16777216, null, null, 1, null, ge)),
            e.rb(
              15,
              81920,
              null,
              0,
              ce,
              [e.Q, e.N, be],
              {
                url: [0, 'url'],
                loadingTemplateRef: [1, 'loadingTemplateRef'],
                errorTemplateRef: [2, 'errorTemplateRef'],
                isModule: [3, 'isModule']
              },
              null
            ),
            (l()(),
            e.sb(16, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            e.sb(17, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (l()(),
            e.sb(18, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(19, null, ['', ': ', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              23,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (l()(),
            e.sb(24, 0, null, null, 6, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(25, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            e.Jb(-1, null, [
              'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module'
            ])),
            (l()(), e.Jb(29, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(31, 0, null, null, 10, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(32, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['*axLazyElement'])),
            (l()(), e.Jb(36, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(-1, null, ['@angular-extensions/elements'])),
            (l()(), e.Jb(40, null, [' ', '. '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(42, 0, null, null, 21, 'p', [], null, null, null, null, null)),
            (l()(), e.Jb(43, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(46, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.Jb(-1, null, [', '])),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(50, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.Jb(52, null, [' ', ' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(56, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.Jb(58, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(
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
            (l()(), e.Jb(61, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(), e.Jb(-1, null, ['... ']))
          ],
          function(l, n) {
            var t = n.component;
            l(n, 4, 0),
              l(n, 9, 0, 'row', t.routeAnimationsElements),
              l(n, 10, 0),
              l(
                n,
                15,
                0,
                'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module',
                e.Cb(n, 13),
                e.Cb(n, 12),
                !0
              ),
              l(n, 23, 0, 'col-md-12 col-lg-6', t.routeAnimationsElements);
          },
          function(l, n) {
            var t = n.component;
            l(
              n,
              5,
              0,
              e.Kb(
                n,
                5,
                0,
                e.Cb(n, 6).transform('anms.examples.elements.title')
              )
            ),
              l(
                n,
                19,
                0,
                e.Kb(
                  n,
                  19,
                  0,
                  e.Cb(n, 20).transform('anms.examples.elements.counter')
                ),
                t.counter
              ),
              l(
                n,
                25,
                0,
                e.Kb(
                  n,
                  25,
                  0,
                  e.Cb(n, 26).transform('anms.examples.elements.text1')
                )
              ),
              l(
                n,
                29,
                0,
                e.Kb(
                  n,
                  29,
                  0,
                  e.Cb(n, 30).transform('anms.examples.elements.text2')
                )
              ),
              l(
                n,
                32,
                0,
                e.Kb(
                  n,
                  32,
                  0,
                  e.Cb(n, 33).transform('anms.examples.elements.text3')
                )
              ),
              l(
                n,
                36,
                0,
                e.Kb(
                  n,
                  36,
                  0,
                  e.Cb(n, 37).transform('anms.examples.elements.text4')
                )
              ),
              l(
                n,
                40,
                0,
                e.Kb(
                  n,
                  40,
                  0,
                  e.Cb(n, 41).transform('anms.examples.elements.text5')
                )
              ),
              l(
                n,
                43,
                0,
                e.Kb(
                  n,
                  43,
                  0,
                  e.Cb(n, 44).transform('anms.examples.elements.text6')
                )
              ),
              l(
                n,
                46,
                0,
                e.Kb(
                  n,
                  46,
                  0,
                  e.Cb(n, 47).transform('anms.examples.elements.text5')
                )
              ),
              l(
                n,
                50,
                0,
                e.Kb(
                  n,
                  50,
                  0,
                  e.Cb(n, 51).transform('anms.examples.elements.text7')
                )
              ),
              l(
                n,
                52,
                0,
                e.Kb(
                  n,
                  52,
                  0,
                  e.Cb(n, 53).transform('anms.examples.elements.text8')
                ),
                e.Kb(
                  n,
                  52,
                  1,
                  e.Cb(n, 54).transform('anms.examples.elements.text9')
                )
              ),
              l(
                n,
                56,
                0,
                e.Kb(
                  n,
                  56,
                  0,
                  e.Cb(n, 57).transform('anms.examples.elements.text10')
                )
              ),
              l(
                n,
                58,
                0,
                e.Kb(
                  n,
                  58,
                  0,
                  e.Cb(n, 59).transform('anms.examples.elements.text11')
                )
              ),
              l(
                n,
                61,
                0,
                e.Kb(
                  n,
                  61,
                  0,
                  e.Cb(n, 62).transform('anms.examples.elements.text12')
                )
              );
          }
        );
      }
      function ke(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              Ce,
              pe
            )),
            e.rb(1, 114688, null, 0, me, [], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var xe = e.ob('anms-elements', me, ke, {}, {}, []),
        ve = (function() {
          function l() {
            this.routeAnimationsElements = M.d;
          }
          return (l.prototype.ngOnInit = function() {}), l;
        })(),
        ye = e.qb({
          encapsulation: 0,
          styles: [
            [
              '.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}'
            ]
          ],
          data: {}
        });
      function _e(l) {
        return e.Lb(
          2,
          [
            (l()(),
            e.sb(
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
            e.rb(1, 212992, null, 0, U.a, [e.k, x.j], null, null),
            (l()(),
            e.sb(
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
            e.sb(
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
            e.sb(
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
            (l()(), e.Jb(5, null, ['', ''])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              9,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            (l()(), e.Jb(10, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h]),
            (l()(),
            e.sb(12, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            e.Gb(512, null, C.y, C.z, [e.t, e.u, e.k, e.F]),
            e.rb(
              14,
              278528,
              null,
              0,
              C.i,
              [C.y],
              { ngClass: [0, 'ngClass'] },
              null
            ),
            (l()(), e.Jb(15, null, [' ', ' '])),
            e.Eb(131072, x.i, [x.j, e.h])
          ],
          function(l, n) {
            var t = n.component;
            l(n, 1, 0),
              l(n, 9, 0, t.routeAnimationsElements),
              l(n, 14, 0, t.routeAnimationsElements);
          },
          function(l, n) {
            l(
              n,
              5,
              0,
              e.Kb(n, 5, 0, e.Cb(n, 6).transform('anms.examples.auth.title'))
            ),
              l(
                n,
                10,
                0,
                e.Kb(
                  n,
                  10,
                  0,
                  e.Cb(n, 11).transform('anms.examples.auth.description1')
                )
              ),
              l(
                n,
                15,
                0,
                e.Kb(
                  n,
                  15,
                  0,
                  e.Cb(n, 16).transform('anms.examples.auth.description2')
                )
              );
          }
        );
      }
      function we(l) {
        return e.Lb(
          0,
          [
            (l()(),
            e.sb(
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
              _e,
              ye
            )),
            e.rb(1, 114688, null, 0, ve, [], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var je = e.ob('anms-authenticated', ve, we, {}, {}, []),
        Ee = t('LiEJ'),
        Ae = t('AqJ0'),
        Se = (function() {
          function l(l, n, t, e) {
            (this._data = new Ee.a(l)),
              (this.data$ = this._data.asObservable().pipe(
                Object(pt.a)(function(l) {
                  return n ? (e ? e(l) : JSON.parse(JSON.stringify(l))) : l;
                }),
                t
                  ? Object(Ae.a)(1)
                  : Object(pt.a)(function(l) {
                      return l;
                    })
              ));
          }
          return (
            (l.prototype.get = function() {
              return this._data.getValue();
            }),
            (l.prototype.set = function(l) {
              this._data.next(l);
            }),
            l
          );
        })(),
        Ie = (function() {
          function l() {}
          return (
            (l.prototype.create = function(l) {
              return new Se(l, !0, !1);
            }),
            (l.prototype.createMutable = function(l) {
              return new Se(l, !1, !1);
            }),
            (l.prototype.createMutableWithSharedSubscription = function(l) {
              return new Se(l, !1, !0);
            }),
            (l.prototype.createWithCustomClone = function(l, n) {
              return new Se(l, !0, !1, n);
            }),
            (l.ngInjectableDef = Object(e.Nb)({
              factory: function() {
                return new l();
              },
              token: l,
              providedIn: 'root'
            })),
            l
          );
        })(),
        Oe = t('/hyk'),
        Fe = t('V3Ng'),
        Le = t('e8uv'),
        Pe = t('PCNd'),
        Ke = { title: 'anms.examples.menu.todos' },
        Me = { title: 'anms.examples.menu.stocks' },
        Ne = { title: 'anms.examples.menu.theming' },
        Je = { title: 'anms.examples.menu.crud' },
        He = { title: 'anms.examples.menu.simple-state-management' },
        ze = { title: 'anms.examples.menu.form' },
        Te = { title: 'anms.examples.menu.notifications' },
        qe = { title: 'anms.examples.menu.elements' },
        Ge = { title: 'anms.examples.menu.auth' },
        Qe = (function() {
          return function() {};
        })(),
        De = t('GiBk'),
        Be = t('D3xR'),
        $e = t('gQst'),
        Re = t('lqvn'),
        Ue = t('U3QC'),
        Ve = t('BnVf'),
        Xe = (function() {
          return function(l, n, t, e, a) {
            var u = this;
            (this.actions$ = l),
              (this.store = n),
              (this.translateService = t),
              (this.router = e),
              (this.titleService = a),
              (this.setTranslateServiceLanguage = Object(Be.c)(
                function() {
                  return function() {
                    return u.store.pipe(
                      Object(K.C)(M.j),
                      Object(Re.a)(),
                      Object(Ue.a)(function(l) {
                        return u.translateService.use(l);
                      })
                    );
                  };
                },
                { dispatch: !1 }
              )),
              (this.setTitle = Object(Be.c)(
                function() {
                  return Object($e.a)(
                    u.actions$.pipe(Object(Be.d)(Ve.f)),
                    u.router.events.pipe(
                      Object(Qt.a)(function(l) {
                        return l instanceof k.b;
                      })
                    )
                  ).pipe(
                    Object(Ue.a)(function() {
                      u.titleService.setTitle(
                        u.router.routerState.snapshot.root,
                        u.translateService
                      );
                    })
                  );
                },
                { dispatch: !1 }
              ));
          };
        })(),
        Ye = t('WRUs'),
        We = t('eb+u'),
        Ze = (function() {
          return function(l, n, t) {
            var e = this;
            (this.actions$ = l),
              (this.store = n),
              (this.localStorageService = t),
              (this.persistTodos = Object(Be.c)(
                function() {
                  return e.actions$.pipe(
                    Object(Be.d)(vl, wl, _l, yl),
                    Object(We.a)(e.store.pipe(Object(K.C)(Vl))),
                    Object(Ue.a)(function(l) {
                      return e.localStorageService.setItem(
                        'EXAMPLES.TODOS',
                        l[1]
                      );
                    })
                  );
                },
                { dispatch: !1 }
              ));
          };
        })(),
        la = t('EP1h'),
        na = t('pN2L'),
        ta = (function() {
          function l() {}
          return (
            (l.prototype.retrieveStock = function(l) {
              var n = this.buildResult(l);
              return Object(na.a)(n);
            }),
            (l.prototype.buildResult = function(l) {
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
            }),
            l
          );
        })(),
        ea = t('AouM'),
        aa = t('IMYO'),
        ua = (function() {
          return function(l, n, t) {
            var e = this;
            (this.actions$ = l),
              (this.localStorageService = n),
              (this.service = t),
              (this.retrieveStock = Object(Be.c)(function() {
                return function(l) {
                  var n = (void 0 === l ? {} : l).debounce,
                    t = void 0 === n ? 500 : n;
                  return e.actions$.pipe(
                    Object(Be.d)(Sl),
                    Object(Ue.a)(function(l) {
                      return e.localStorageService.setItem('EXAMPLES.STOCKS', {
                        symbol: l.symbol
                      });
                    }),
                    Object(Gt.a)(t),
                    Object(ea.a)(function(l) {
                      return e.service.retrieveStock(l.symbol).pipe(
                        Object(pt.a)(function(l) {
                          return Il({ stock: l });
                        }),
                        Object(aa.a)(function(l) {
                          return Object(na.a)(Ol({ error: l }));
                        })
                      );
                    })
                  );
                };
              }));
          };
        })(),
        ia = (function() {
          return function(l, n, t) {
            var e = this;
            (this.actions$ = l),
              (this.store = n),
              (this.localStorageService = t),
              (this.persistBooks = Object(Be.c)(
                function() {
                  return e.actions$.pipe(
                    Object(Be.d)(Jl, Hl),
                    Object(We.a)(e.store.pipe(Object(K.C)(Rn))),
                    Object(Ue.a)(function(l) {
                      return e.localStorageService.setItem(
                        'EXAMPLES.BOOKS',
                        l[1]
                      );
                    })
                  );
                },
                { dispatch: !1 }
              ));
          };
        })(),
        ra = (function() {
          return function(l, n) {
            var t = this;
            (this.actions$ = l),
              (this.localStorageService = n),
              (this.persistForm = Object(Be.c)(
                function() {
                  return t.actions$.pipe(
                    Object(Be.d)(Ql),
                    Object(Ue.a)(function(l) {
                      return t.localStorageService.setItem('EXAMPLES.FORM', {
                        form: l.form
                      });
                    })
                  );
                },
                { dispatch: !1 }
              ));
          };
        })(),
        oa = t('gUAp');
      t.d(n, 'ExamplesModuleNgFactory', function() {
        return sa;
      });
      var sa = e.pb(r, [], function(l) {
        return e.zb([
          e.Ab(512, e.j, e.cb, [
            [
              8,
              [
                o.a,
                s.a,
                s.b,
                b.a,
                c.b,
                c.a,
                d.a,
                G,
                dn,
                Ln,
                Tn,
                dt,
                Kt,
                ae,
                se,
                xe,
                je
              ]
            ],
            [3, e.j],
            e.y
          ]),
          e.Ab(4608, C.m, C.l, [e.v, [2, C.D]]),
          e.Ab(4608, P.v, P.v, []),
          e.Ab(4608, W.c, W.c, [
            W.i,
            W.e,
            e.j,
            W.h,
            W.f,
            e.r,
            e.A,
            C.d,
            _.b,
            [2, C.g]
          ]),
          e.Ab(5120, W.j, W.k, [W.c]),
          e.Ab(4608, y.c, y.c, []),
          e.Ab(5120, F.a, F.b, [W.c]),
          e.Ab(4608, h.b, h.b, []),
          e.Ab(5120, Y.c, Y.j, [W.c]),
          e.Ab(5120, gl.b, gl.c, [W.c]),
          e.Ab(4608, w.e, h.c, [[2, h.g], [2, h.l]]),
          e.Ab(4608, P.e, P.e, []),
          e.Ab(5120, Ht.b, Ht.c, [W.c]),
          e.Ab(135680, Ht.d, Ht.d, [
            W.c,
            e.r,
            [2, C.g],
            [2, Ht.a],
            Ht.b,
            [3, Ht.d],
            W.e
          ]),
          e.Ab(4608, Jt.i, Jt.i, []),
          e.Ab(5120, Jt.a, Jt.b, [W.c]),
          e.Ab(4608, h.a, h.v, [[2, h.f], f.a]),
          e.Ab(4608, ht, ht, [Ie]),
          e.Ab(1073742336, C.c, C.c, []),
          e.Ab(1073742336, de, de, []),
          e.Ab(1073742336, P.u, P.u, []),
          e.Ab(1073742336, P.h, P.h, []),
          e.Ab(1073742336, x.g, x.g, []),
          e.Ab(1073742336, _.a, _.a, []),
          e.Ab(1073742336, h.l, h.l, [[2, h.d], [2, w.f]]),
          e.Ab(1073742336, f.b, f.b, []),
          e.Ab(1073742336, h.u, h.u, []),
          e.Ab(1073742336, X.c, X.c, []),
          e.Ab(1073742336, Oe.b, Oe.b, []),
          e.Ab(1073742336, j.g, j.g, []),
          e.Ab(1073742336, A.c, A.c, []),
          e.Ab(1073742336, W.g, W.g, []),
          e.Ab(1073742336, h.s, h.s, []),
          e.Ab(1073742336, h.q, h.q, []),
          e.Ab(1073742336, y.d, y.d, []),
          e.Ab(1073742336, L.e, L.e, []),
          e.Ab(1073742336, F.d, F.d, []),
          e.Ab(1073742336, g.a, g.a, []),
          e.Ab(1073742336, p.k, p.k, []),
          e.Ab(1073742336, xn.c, xn.c, []),
          e.Ab(1073742336, kn.c, kn.c, []),
          e.Ab(1073742336, mn.c, mn.c, []),
          e.Ab(1073742336, al.d, al.d, []),
          e.Ab(1073742336, D.f, D.f, []),
          e.Ab(1073742336, Fe.h, Fe.h, []),
          e.Ab(1073742336, B.d, B.d, []),
          e.Ab(1073742336, B.c, B.c, []),
          e.Ab(1073742336, h.m, h.m, []),
          e.Ab(1073742336, qn.b, qn.b, []),
          e.Ab(1073742336, Le.c, Le.c, []),
          e.Ab(1073742336, Y.i, Y.i, []),
          e.Ab(1073742336, Y.f, Y.f, []),
          e.Ab(1073742336, el.c, el.c, []),
          e.Ab(1073742336, gl.e, gl.e, []),
          e.Ab(1073742336, nn.e, nn.e, []),
          e.Ab(1073742336, Nt.c, Nt.c, []),
          e.Ab(1073742336, ll.f, ll.f, []),
          e.Ab(1073742336, P.r, P.r, []),
          e.Ab(1073742336, zt.b, zt.b, []),
          e.Ab(1073742336, Ht.g, Ht.g, []),
          e.Ab(1073742336, Jt.j, Jt.j, []),
          e.Ab(1073742336, h.w, h.w, []),
          e.Ab(1073742336, h.n, h.n, []),
          e.Ab(1073742336, Pe.a, Pe.a, []),
          e.Ab(1073742336, k.t, k.t, [[2, k.z], [2, k.p]]),
          e.Ab(1073742336, Qe, Qe, []),
          e.Ab(
            1024,
            K.I,
            function() {
              return [{}];
            },
            []
          ),
          e.Ab(
            1024,
            K.k,
            function() {
              return [
                {
                  key: 'examples',
                  reducerFactory: K.t,
                  metaReducers: [],
                  initialState: void 0
                }
              ];
            },
            []
          ),
          e.Ab(1024, K.J, K.P, [e.r, K.I, K.k]),
          e.Ab(
            1024,
            K.H,
            function() {
              return [{ todos: Al, stocks: Ll, books: Gl, form: Rl }];
            },
            []
          ),
          e.Ab(
            1024,
            K.K,
            function(l) {
              return [l];
            },
            [K.H]
          ),
          e.Ab(
            1024,
            K.b,
            function(l, n, t) {
              return [K.Q(l, n, t)];
            },
            [e.r, K.H, K.K]
          ),
          e.Ab(1073873408, K.p, K.p, [K.J, K.b, K.h, K.q]),
          e.Ab(1024, x.f, i, [De.c]),
          e.Ab(512, x.c, x.e, []),
          e.Ab(512, x.h, x.d, []),
          e.Ab(512, x.b, x.a, []),
          e.Ab(256, x.l, void 0, []),
          e.Ab(256, x.m, !0, []),
          e.Ab(512, x.j, x.j, [x.k, x.f, x.c, x.h, x.b, x.l, x.m]),
          e.Ab(512, Xe, Xe, [Be.a, K.o, x.j, k.p, Ye.a]),
          e.Ab(512, Ze, Ze, [Be.a, K.o, la.a]),
          e.Ab(512, ta, ta, []),
          e.Ab(512, ua, ua, [Be.a, la.a, ta]),
          e.Ab(512, ia, ia, [Be.a, K.o, la.a]),
          e.Ab(512, ra, ra, [Be.a, la.a]),
          e.Ab(
            1024,
            Be.i,
            function(l, n, t, e, a) {
              return [Be.e(l, n, t, e, a)];
            },
            [Xe, Ze, ua, ia, ra]
          ),
          e.Ab(1073742336, Be.g, Be.g, [Be.f, Be.i, [2, K.q], [2, K.p]]),
          e.Ab(1073742336, r, r, []),
          e.Ab(256, al.a, { separatorKeyCodes: [ul.f] }, []),
          e.Ab(256, h.e, h.i, []),
          e.Ab(
            1024,
            k.n,
            function() {
              return [
                [
                  {
                    path: '',
                    component: N,
                    children: [
                      { path: '', redirectTo: 'todos', pathMatch: 'full' },
                      { path: 'todos', component: ln, data: Ke },
                      { path: 'stock-market', component: yn, data: Me },
                      { path: 'theming', component: Nn, data: Ne },
                      { path: 'crud', redirectTo: 'crud/', pathMatch: 'full' },
                      { path: 'crud/:id', component: Yn, data: Je },
                      {
                        path: 'simple-state-management',
                        component: gt,
                        data: He
                      },
                      { path: 'form', component: Bt, data: ze },
                      { path: 'notifications', component: ue, data: Te },
                      { path: 'elements', component: me, data: qe },
                      {
                        path: 'authenticated',
                        component: ve,
                        canActivate: [oa.a],
                        data: Ge
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
    IC1n: function(l, n, t) {
      var e = t('fjNU'),
        a = t('X/SR');
      l.exports = function(l, n, t) {
        var u = (n && t) || 0;
        'string' == typeof l &&
          ((n = 'binary' === l ? new Array(16) : null), (l = null));
        var i = (l = l || {}).random || (l.rng || e)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), n))
          for (var r = 0; r < 16; ++r) n[u + r] = i[r];
        return n || a(i);
      };
    },
    'X/SR': function(l, n) {
      for (var t = [], e = 0; e < 256; ++e)
        t[e] = (e + 256).toString(16).substr(1);
      l.exports = function(l, n) {
        var e = n || 0;
        return [
          t[l[e++]],
          t[l[e++]],
          t[l[e++]],
          t[l[e++]],
          '-',
          t[l[e++]],
          t[l[e++]],
          '-',
          t[l[e++]],
          t[l[e++]],
          '-',
          t[l[e++]],
          t[l[e++]],
          '-',
          t[l[e++]],
          t[l[e++]],
          t[l[e++]],
          t[l[e++]],
          t[l[e++]],
          t[l[e++]]
        ].join('');
      };
    },
    'YF1/': function(l, n, t) {
      var e,
        a,
        u = t('fjNU'),
        i = t('X/SR'),
        r = 0,
        o = 0;
      l.exports = function(l, n, t) {
        var s = (n && t) || 0,
          b = n || [],
          c = (l = l || {}).node || e,
          d = void 0 !== l.clockseq ? l.clockseq : a;
        if (null == c || null == d) {
          var m = u();
          null == c && (c = e = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]),
            null == d && (d = a = 16383 & ((m[6] << 8) | m[7]));
        }
        var p = void 0 !== l.msecs ? l.msecs : new Date().getTime(),
          f = void 0 !== l.nsecs ? l.nsecs : o + 1,
          h = p - r + (f - o) / 1e4;
        if (
          (h < 0 && void 0 === l.clockseq && (d = (d + 1) & 16383),
          (h < 0 || p > r) && void 0 === l.nsecs && (f = 0),
          f >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (r = p), (o = f), (a = d);
        var g = (1e4 * (268435455 & (p += 122192928e5)) + f) % 4294967296;
        (b[s++] = (g >>> 24) & 255),
          (b[s++] = (g >>> 16) & 255),
          (b[s++] = (g >>> 8) & 255),
          (b[s++] = 255 & g);
        var C = ((p / 4294967296) * 1e4) & 268435455;
        (b[s++] = (C >>> 8) & 255),
          (b[s++] = 255 & C),
          (b[s++] = ((C >>> 24) & 15) | 16),
          (b[s++] = (C >>> 16) & 255),
          (b[s++] = (d >>> 8) | 128),
          (b[s++] = 255 & d);
        for (var k = 0; k < 6; ++k) b[s + k] = c[k];
        return n || i(b);
      };
    },
    fN3Q: function(l, n, t) {
      var e = t('YF1/'),
        a = t('IC1n'),
        u = a;
      (u.v1 = e), (u.v4 = a), (l.exports = u);
    },
    fjNU: function(l, n) {
      var t =
        ('undefined' != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ('undefined' != typeof msCrypto &&
          'function' == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (t) {
        var e = new Uint8Array(16);
        l.exports = function() {
          return t(e), e;
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
