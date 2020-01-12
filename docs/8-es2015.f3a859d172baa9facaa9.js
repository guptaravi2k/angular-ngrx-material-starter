(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    RINC: function(n, l, t) {
      'use strict';
      t.r(l);
      var a = t('kZht');
      class i {}
      var e = t('pLqg'),
        u = t('tjWy'),
        o = t('7tlY'),
        s = t('UUMc'),
        b = t('C9Ky'),
        r = t('Gien'),
        c = t('8JnZ'),
        m = t('owzC'),
        d = t('FxgA'),
        p = t('iwai'),
        g = t('NxuZ'),
        f = t('ENSU'),
        h = t('aDqW'),
        y = t('An66'),
        v = t('1P7/'),
        x = t('gX7W'),
        A = t('cz58'),
        w = t('pKmL'),
        C = t('AytR');
      const k = [
        {
          name: 'Angular',
          version: C.a.versions.angular,
          description: 'anms.features.angular',
          github: 'https://github.com/angular/angular',
          documentation: 'https://angular.io/docs/ts/latest/'
        },
        {
          name: 'Angular Material',
          version: C.a.versions.material,
          description: 'anms.features.angular-material',
          github: 'https://github.com/angular/material2/',
          documentation: 'https://material.angular.io/'
        },
        {
          name: 'Angular Cli',
          version: C.a.versions.angularCli,
          description: 'anms.features.angular-cli',
          github: 'https://github.com/angular/angular-cli',
          documentation: 'https://cli.angular.io/'
        },
        {
          name: 'NgRx',
          version: C.a.versions.ngrx,
          description: 'anms.features.ngrx',
          github: 'https://github.com/ngrx/platform',
          documentation: 'http://ngrx.github.io/',
          medium:
            'https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0'
        },
        {
          name: 'RxJS',
          version: C.a.versions.rxjs,
          description: 'anms.features.rxjs',
          github: 'https://github.com/ReactiveX/RxJS',
          documentation: 'http://reactivex.io/rxjs/',
          medium:
            'https://medium.com/@tomastrajan/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293'
        },
        {
          name: 'Bootstrap',
          version: C.a.versions.bootstrap,
          description: 'anms.features.bootstrap',
          github: 'https://github.com/twbs/bootstrap',
          documentation: 'https://getbootstrap.com/docs/4.0/layout/grid/',
          medium:
            'https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b'
        },
        {
          name: 'Typescript',
          version: C.a.versions.typescript,
          description: 'anms.features.typescript',
          github: 'https://github.com/Microsoft/TypeScript',
          documentation: 'https://www.typescriptlang.org/docs/home.html'
        },
        {
          name: 'I18n',
          version: C.a.versions.ngxtranslate,
          description: 'anms.features.ngxtranslate',
          github: 'https://github.com/ngx-translate/core',
          documentation: 'http://www.ngx-translate.com/'
        },
        {
          name: 'Font Awesome 5',
          version: C.a.versions.fontAwesome,
          description: 'anms.features.fontawesome',
          github: 'https://github.com/FortAwesome/Font-Awesome',
          documentation: 'https://fontawesome.com/icons'
        },
        {
          name: 'Cypress',
          version: C.a.versions.cypress,
          description: 'anms.features.cypress',
          github: 'https://github.com/cypress-io/cypress',
          documentation: 'https://www.cypress.io/'
        },
        {
          name: 'anms.features.themes.title',
          description: 'anms.features.themes.description',
          documentation: 'https://material.angular.io/guide/theming',
          medium:
            'https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1'
        },
        {
          name: 'anms.features.lazyloading.title',
          description: 'anms.features.lazyloading.description',
          documentation:
            'https://angular.io/guide/router#lazy-loading-route-configuration'
        }
      ];
      class M {
        constructor() {
          (this.routeAnimationsElements = w.d), (this.features = k);
        }
        ngOnInit() {}
        openLink(n) {
          window.open(n, '_blank');
        }
      }
      var _ = a.ob({
        encapsulation: 0,
        styles: [
          [
            '.container[_ngcontent-%COMP%]{margin-top:20px}.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}mat-card[_ngcontent-%COMP%]{margin:0 0 20px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{position:absolute;top:11px;right:0;float:right;font-size:10px}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:60px}@media (max-width:576px){mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:auto}}mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:2px;font-size:16px;margin:6px}mat-card[_ngcontent-%COMP%]   a[mat-icon-button][_ngcontent-%COMP%]{position:relative;left:5px}'
          ]
        ],
        data: {}
      });
      function j(n) {
        return a.Jb(
          0,
          [
            (n()(),
            a.qb(
              0,
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
            (n()(), a.Hb(1, null, ['', '']))
          ],
          null,
          function(n, l) {
            n(l, 1, 0, l.parent.context.$implicit.version);
          }
        );
      }
      function q(n) {
        return a.Jb(
          0,
          [
            (n()(),
            a.qb(
              0,
              0,
              null,
              null,
              4,
              'a',
              [['mat-icon-button', ''], ['target', '_blank']],
              [
                [8, 'href', 4],
                [1, 'tabindex', 0],
                [1, 'disabled', 0],
                [1, 'aria-disabled', 0],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'click']],
              function(n, l, t) {
                var i = !0;
                return (
                  'click' === l &&
                    (i = !1 !== a.Ab(n, 1)._haltDisabledEvents(t) && i),
                  i
                );
              },
              r.c,
              r.a
            )),
            a.pb(1, 180224, null, 0, c.a, [m.h, a.k, [2, d.a]], null, null),
            (n()(),
            a.qb(
              2,
              0,
              null,
              0,
              2,
              'fa-icon',
              [['class', 'ng-fa-icon']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              p.b,
              p.a
            )),
            a.pb(
              3,
              573440,
              null,
              0,
              g.a,
              [f.b, g.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            a.Bb(4, 2)
          ],
          function(n, l) {
            var t = n(l, 4, 0, 'fab', 'github');
            n(l, 3, 0, t);
          },
          function(n, l) {
            n(
              l,
              0,
              0,
              l.parent.context.$implicit.github,
              a.Ab(l, 1).disabled ? -1 : a.Ab(l, 1).tabIndex || 0,
              a.Ab(l, 1).disabled || null,
              a.Ab(l, 1).disabled.toString(),
              'NoopAnimations' === a.Ab(l, 1)._animationMode
            ),
              n(l, 2, 0, a.Ab(l, 3).renderedIconHTML);
          }
        );
      }
      function P(n) {
        return a.Jb(
          0,
          [
            (n()(),
            a.qb(
              0,
              0,
              null,
              null,
              6,
              'a',
              [['mat-button', ''], ['target', '_blank']],
              [
                [8, 'href', 4],
                [1, 'tabindex', 0],
                [1, 'disabled', 0],
                [1, 'aria-disabled', 0],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'click']],
              function(n, l, t) {
                var i = !0;
                return (
                  'click' === l &&
                    (i = !1 !== a.Ab(n, 1)._haltDisabledEvents(t) && i),
                  i
                );
              },
              r.c,
              r.a
            )),
            a.pb(1, 180224, null, 0, c.a, [m.h, a.k, [2, d.a]], null, null),
            (n()(),
            a.qb(
              2,
              0,
              null,
              0,
              2,
              'fa-icon',
              [['class', 'ng-fa-icon']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              p.b,
              p.a
            )),
            a.pb(
              3,
              573440,
              null,
              0,
              g.a,
              [f.b, g.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            a.Bb(4, 2),
            (n()(), a.Hb(5, 0, ['', ' '])),
            a.Cb(131072, h.i, [h.j, a.h])
          ],
          function(n, l) {
            var t = n(l, 4, 0, 'fab', 'medium-m');
            n(l, 3, 0, t);
          },
          function(n, l) {
            n(
              l,
              0,
              0,
              l.parent.context.$implicit.medium,
              a.Ab(l, 1).disabled ? -1 : a.Ab(l, 1).tabIndex || 0,
              a.Ab(l, 1).disabled || null,
              a.Ab(l, 1).disabled.toString(),
              'NoopAnimations' === a.Ab(l, 1)._animationMode
            ),
              n(l, 2, 0, a.Ab(l, 3).renderedIconHTML),
              n(
                l,
                5,
                0,
                a.Ib(l, 5, 0, a.Ab(l, 6).transform('anms.features.guide'))
              );
          }
        );
      }
      function O(n) {
        return a.Jb(
          0,
          [
            (n()(),
            a.qb(
              0,
              0,
              null,
              null,
              27,
              'div',
              [['class', 'col-md-6 col-lg-4']],
              null,
              null,
              null,
              null,
              null
            )),
            a.Eb(512, null, y.y, y.z, [a.r, a.s, a.k, a.D]),
            a.pb(
              2,
              278528,
              null,
              0,
              y.i,
              [y.y],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            (n()(),
            a.qb(
              3,
              0,
              null,
              null,
              24,
              'mat-card',
              [['class', 'mat-card']],
              null,
              null,
              null,
              v.d,
              v.a
            )),
            a.pb(4, 49152, null, 0, x.a, [], null, null),
            (n()(),
            a.qb(
              5,
              0,
              null,
              0,
              5,
              'mat-card-title',
              [['class', 'mat-card-title']],
              null,
              null,
              null,
              null,
              null
            )),
            a.pb(6, 16384, null, 0, x.h, [], null, null),
            (n()(), a.fb(16777216, null, null, 1, null, j)),
            a.pb(
              8,
              16384,
              null,
              0,
              y.k,
              [a.O, a.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (n()(), a.Hb(9, null, ['', ' '])),
            a.Cb(131072, h.i, [h.j, a.h]),
            (n()(),
            a.qb(
              11,
              0,
              null,
              0,
              4,
              'mat-card-subtitle',
              [['class', 'mat-card-subtitle'], ['rtl', '']],
              null,
              null,
              null,
              null,
              null
            )),
            a.pb(12, 16384, null, 0, x.g, [], null, null),
            a.pb(13, 212992, null, 0, A.a, [a.k, h.j], null, null),
            (n()(), a.Hb(14, null, [' ', ' '])),
            a.Cb(131072, h.i, [h.j, a.h]),
            (n()(),
            a.qb(
              16,
              0,
              null,
              0,
              11,
              'mat-card-actions',
              [['class', 'mat-card-actions']],
              [[2, 'mat-card-actions-align-end', null]],
              null,
              null,
              null,
              null
            )),
            a.pb(17, 16384, null, 0, x.b, [], null, null),
            (n()(), a.fb(16777216, null, null, 1, null, q)),
            a.pb(
              19,
              16384,
              null,
              0,
              y.k,
              [a.O, a.L],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (n()(),
            a.qb(
              20,
              0,
              null,
              null,
              5,
              'a',
              [['mat-button', ''], ['target', '_blank']],
              [
                [8, 'href', 4],
                [1, 'tabindex', 0],
                [1, 'disabled', 0],
                [1, 'aria-disabled', 0],
                [2, '_mat-animation-noopable', null]
              ],
              [[null, 'click']],
              function(n, l, t) {
                var i = !0;
                return (
                  'click' === l &&
                    (i = !1 !== a.Ab(n, 21)._haltDisabledEvents(t) && i),
                  i
                );
              },
              r.c,
              r.a
            )),
            a.pb(21, 180224, null, 0, c.a, [m.h, a.k, [2, d.a]], null, null),
            (n()(),
            a.qb(
              22,
              0,
              null,
              0,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon'], ['icon', 'book']],
              [[8, 'innerHTML', 1]],
              null,
              null,
              p.b,
              p.a
            )),
            a.pb(
              23,
              573440,
              null,
              0,
              g.a,
              [f.b, g.b],
              { iconProp: [0, 'iconProp'] },
              null
            ),
            (n()(), a.Hb(24, 0, ['', ' '])),
            a.Cb(131072, h.i, [h.j, a.h]),
            (n()(), a.fb(16777216, null, null, 1, null, P)),
            a.pb(
              27,
              16384,
              null,
              0,
              y.k,
              [a.O, a.L],
              { ngIf: [0, 'ngIf'] },
              null
            )
          ],
          function(n, l) {
            n(
              l,
              2,
              0,
              'col-md-6 col-lg-4',
              l.component.routeAnimationsElements
            ),
              n(l, 8, 0, l.context.$implicit.version),
              n(l, 13, 0),
              n(l, 19, 0, l.context.$implicit.github),
              n(l, 23, 0, 'book'),
              n(l, 27, 0, l.context.$implicit.medium);
          },
          function(n, l) {
            n(
              l,
              9,
              0,
              a.Ib(l, 9, 0, a.Ab(l, 10).transform(l.context.$implicit.name))
            ),
              n(
                l,
                14,
                0,
                a.Ib(
                  l,
                  14,
                  0,
                  a.Ab(l, 15).transform(l.context.$implicit.description)
                )
              ),
              n(l, 16, 0, 'end' === a.Ab(l, 17).align),
              n(
                l,
                20,
                0,
                l.context.$implicit.documentation,
                a.Ab(l, 21).disabled ? -1 : a.Ab(l, 21).tabIndex || 0,
                a.Ab(l, 21).disabled || null,
                a.Ab(l, 21).disabled.toString(),
                'NoopAnimations' === a.Ab(l, 21)._animationMode
              ),
              n(l, 22, 0, a.Ab(l, 23).renderedIconHTML),
              n(
                l,
                24,
                0,
                a.Ib(
                  l,
                  24,
                  0,
                  a.Ab(l, 25).transform('anms.features.documentation')
                )
              );
          }
        );
      }
      function I(n) {
        return a.Jb(
          2,
          [
            (n()(),
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
            (n()(),
            a.qb(
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
            (n()(),
            a.qb(
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
            (n()(),
            a.qb(
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
            a.pb(4, 212992, null, 0, A.a, [a.k, h.j], null, null),
            (n()(), a.Hb(5, null, ['', ''])),
            a.Cb(131072, h.i, [h.j, a.h]),
            (n()(),
            a.qb(
              7,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'row align-items-end']],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), a.fb(16777216, null, null, 1, null, O)),
            a.pb(
              9,
              278528,
              null,
              0,
              y.j,
              [a.O, a.L, a.r],
              { ngForOf: [0, 'ngForOf'] },
              null
            )
          ],
          function(n, l) {
            var t = l.component;
            n(l, 4, 0), n(l, 9, 0, t.features);
          },
          function(n, l) {
            n(
              l,
              5,
              0,
              a.Ib(l, 5, 0, a.Ab(l, 6).transform('anms.features.title'))
            );
          }
        );
      }
      function L(n) {
        return a.Jb(
          0,
          [
            (n()(),
            a.qb(
              0,
              0,
              null,
              null,
              1,
              'anms-feature-list',
              [],
              null,
              null,
              null,
              I,
              _
            )),
            a.pb(1, 114688, null, 0, M, [], null, null)
          ],
          function(n, l) {
            n(l, 1, 0);
          },
          null
        );
      }
      var H = a.mb('anms-feature-list', M, L, {}, {}, []),
        z = t('3kIJ'),
        J = t('D4FV'),
        F = t('pOQZ'),
        N = t('OcC5'),
        S = t('5ohT'),
        T = t('ApNh'),
        D = t('aFla'),
        E = t('zab8'),
        $ = t('9+G+'),
        R = t('Av2N'),
        Z = t('4rR8'),
        B = t('9qA3'),
        W = t('DiCn'),
        K = t('tBgR'),
        G = t('qBwE'),
        U = t('Lv2H'),
        X = t('9Z2Q'),
        Q = t('S/D4'),
        V = t('0S3s'),
        Y = t('eEhu'),
        nn = t('yy4G'),
        ln = t('1PzT'),
        tn = t('dFIu'),
        an = t('uWIS'),
        en = t('a+5/'),
        un = t('ifl5'),
        on = t('P9AZ'),
        sn = t('5i2S'),
        bn = t('PCNd'),
        rn = t('1VvW');
      const cn = { title: 'anms.menu.features' };
      class mn {}
      var dn = t('K5Xz');
      t.d(l, 'FeatureListModuleNgFactory', function() {
        return pn;
      });
      var pn = a.nb(i, [], function(n) {
        return a.xb([
          a.yb(512, a.j, a.ab, [
            [8, [e.a, u.a, u.b, o.a, s.b, s.a, b.a, H]],
            [3, a.j],
            a.w
          ]),
          a.yb(4608, y.m, y.l, [a.t, [2, y.D]]),
          a.yb(4608, z.v, z.v, []),
          a.yb(4608, J.c, J.c, [
            J.i,
            J.e,
            a.j,
            J.h,
            J.f,
            a.q,
            a.y,
            y.d,
            F.b,
            [2, y.g]
          ]),
          a.yb(5120, J.j, J.k, [J.c]),
          a.yb(4608, N.c, N.c, []),
          a.yb(5120, S.a, S.b, [J.c]),
          a.yb(4608, T.b, T.b, []),
          a.yb(5120, D.c, D.j, [J.c]),
          a.yb(5120, E.b, E.c, [J.c]),
          a.yb(4608, f.e, T.c, [[2, T.g], [2, T.l]]),
          a.yb(4608, z.e, z.e, []),
          a.yb(5120, $.b, $.c, [J.c]),
          a.yb(135680, $.d, $.d, [
            J.c,
            a.q,
            [2, y.g],
            [2, $.a],
            $.b,
            [3, $.d],
            J.e
          ]),
          a.yb(4608, R.i, R.i, []),
          a.yb(5120, R.a, R.b, [J.c]),
          a.yb(4608, T.a, T.v, [[2, T.f], Z.a]),
          a.yb(1073742336, y.c, y.c, []),
          a.yb(1073742336, z.u, z.u, []),
          a.yb(1073742336, z.h, z.h, []),
          a.yb(1073742336, h.g, h.g, []),
          a.yb(1073742336, F.a, F.a, []),
          a.yb(1073742336, T.l, T.l, [[2, T.d], [2, f.f]]),
          a.yb(1073742336, Z.b, Z.b, []),
          a.yb(1073742336, T.u, T.u, []),
          a.yb(1073742336, c.c, c.c, []),
          a.yb(1073742336, B.b, B.b, []),
          a.yb(1073742336, W.g, W.g, []),
          a.yb(1073742336, K.c, K.c, []),
          a.yb(1073742336, J.g, J.g, []),
          a.yb(1073742336, T.s, T.s, []),
          a.yb(1073742336, T.q, T.q, []),
          a.yb(1073742336, N.d, N.d, []),
          a.yb(1073742336, G.e, G.e, []),
          a.yb(1073742336, S.d, S.d, []),
          a.yb(1073742336, m.a, m.a, []),
          a.yb(1073742336, U.k, U.k, []),
          a.yb(1073742336, X.c, X.c, []),
          a.yb(1073742336, Q.c, Q.c, []),
          a.yb(1073742336, V.c, V.c, []),
          a.yb(1073742336, Y.d, Y.d, []),
          a.yb(1073742336, x.f, x.f, []),
          a.yb(1073742336, nn.h, nn.h, []),
          a.yb(1073742336, ln.d, ln.d, []),
          a.yb(1073742336, ln.c, ln.c, []),
          a.yb(1073742336, T.m, T.m, []),
          a.yb(1073742336, tn.b, tn.b, []),
          a.yb(1073742336, an.c, an.c, []),
          a.yb(1073742336, D.i, D.i, []),
          a.yb(1073742336, D.f, D.f, []),
          a.yb(1073742336, en.c, en.c, []),
          a.yb(1073742336, E.e, E.e, []),
          a.yb(1073742336, un.e, un.e, []),
          a.yb(1073742336, on.c, on.c, []),
          a.yb(1073742336, g.f, g.f, []),
          a.yb(1073742336, z.r, z.r, []),
          a.yb(1073742336, sn.b, sn.b, []),
          a.yb(1073742336, $.g, $.g, []),
          a.yb(1073742336, R.j, R.j, []),
          a.yb(1073742336, T.w, T.w, []),
          a.yb(1073742336, T.n, T.n, []),
          a.yb(1073742336, bn.a, bn.a, []),
          a.yb(1073742336, rn.t, rn.t, [[2, rn.z], [2, rn.p]]),
          a.yb(1073742336, mn, mn, []),
          a.yb(1073742336, i, i, []),
          a.yb(256, Y.a, { separatorKeyCodes: [dn.f] }, []),
          a.yb(256, T.e, T.i, []),
          a.yb(
            1024,
            rn.n,
            function() {
              return [[{ path: '', component: M, data: cn }]];
            },
            []
          )
        ]);
      });
    }
  }
]);
