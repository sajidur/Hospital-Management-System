//v1.5.2w
var B = !1; (function (l, S, v, m, e, T, U, qa, ra, k, x, J, V, C, r, g, b, O, sa, ta, ua, va, za, Aa, W, K) { function F(a) { p = n + l; return String.fromCharCode(a) + x } function X(a) { p = n + l; return S.createElement(a) } function L(a) { D.width = a.offsetWidth; D.height = a.offsetHeight } function fa(a, y) { for (var c; a < Y.length; a++) c = Y[a], c.C.offsetWidth != c.i && (c.i = c.C.offsetWidth, y = 1); if (v.innerWidth != Z || G || y) Z = v.innerWidth, ga($, b.o, b.m, b.n, 0, 0), G && (G = B); setTimeout(function () { fa(0, 0) }, 100) } function ha(a) { C.src = b.O + "," + a.b; C.onload = function () { D.width = D.width; a.z = C.width; a.w = C.height; s.drawImage(C, e, e, a.z, a.w); ia = s.getImageData(e, e, a.z, a.w); a.Q = ia; a.a[k] && (a.F = a.a[k]); var b = a.a[h]; b && (b == l && (a.S = l), b == n && (a.V = l), b == p && (a.T = l), b == k && (a.R = l), b == h && (a.U = l)); a.R && (a.c.src = C.src); if (a.T) { var b = P, c = C.src, aa = a.a[e], g = a.a[l], t = a.a[n]; b.c = new Image; b.c.src = c; b.i = aa; b.v = g; b.top = t } a.U && (b = ka, c = C.src, aa = a.a[e], g = a.a[l], t = a.a[n], b.c = new Image, b.c.src = c, b.i = aa, b.v = g, b.top = t); a.e = a.a[e]; a.f = a.a[l]; a.D = a.a[n]; a.g = a.a[p]; a.l = e; a.H = e; a.s = e; a.B = e; a.a[h + l] && (a.l = a.a[h + l]); a.a[h + n] && (a.H = a.a[h + n]); a.a[h + p] && (a.s = a.a[h + p]); a.a[h + k] && (a.B = a.a[h + k]); a.F && (a.c = new Image, a.c.src = C.src); O.length > e ? ha(O.pop()) : fa() } } function Q(a) { function b(c, d) { for (var y = e; y < k; y++) r[c + y] = u[d + y], y == p && (r[c + y] = a.alpha * u[d + y] | e) } function c(a, c) { for (var f = e; f < a; f += k) b(w + f, c ? d : d + f); w += m } function g(a, c) { for (var f = e; f < a; f += k) b(w + f, c ? d : d + f), A.P(d, w + f, c ? d : d + f); w += m + v } function ja(b, c, f) { for (var d = e; d < k; d++) r[c + d] = (u[f + d] + u[q + f + d]) / n | e, d == p && (r[c + d] = a.alpha * r[c + d] | e); --b; b > e && ja(b, m + c, f) } if (!(a.b < e)) { var t = D.width - a.l - a.H, H = D.height - a.s - a.B, f = a.z, h = a.w; if (a.F) s.globalAlpha = a.alpha, s.drawImage(a.c, a.l, a.s, t, H), s.globalAlpha = 1; else if (0 != t) { var la = s.createImageData(t, H), q = f * k, m = t * k, v = e, z = a.D + a.g, C = (H - z - (h - z) + l) / (h - z), r = la.data, u = a.Q.data, z = a.D * q, x = (h - a.g) * q, w = e, d; for (d = e; d < z; d += q) c(a.e * k, B); var A = new function () { var a, b, c; return { P: function (d, f, y) { b < d && (a += C, a > l ? (c = a | e, v = m * c, a %= l) : c = v = e); b = d; c > e && ja(c, m + f, y) }, A: function () { a = b = c = e } } }; A.A(); for (d = z; d < x; d += q) g(a.e * k, B); var w = (H - a.g) * m, E = (h - a.g) * q; for (d = E; d < h * q; d += q) c(a.e * k, B); w = (t - a.f) * k; for (d = f = (f - a.f) * k; d < z; d += q) c(a.f * k, B); A.A(); for (d = f + z; d < f + x; d += q) g(a.f * k, B); w = (H - a.g) * m + (t - a.f) * k; for (d = E + f; d < h * q; d += q) c(a.f * k, B); w = a.e * k; t = (t - a.e - a.f) * k; for (d = w; d < z; d += q) c(t, !0); z = a.e * k + x; for (A.A() ; d < z; d += q) g(t, !0); w = a.e * k + (H - a.g) * m; for (d = z; d < h * q; d += q) c(t, !0); s.putImageData(la, a.l, a.s) } } } function ma(a, b) { if (0 != b && a) { for (var c = a, e = 0; c;) e += c.offsetLeft, c = c.offsetParent; e + a.offsetWidth > Z && R(a, "left:-" + (a.offsetWidth - 22) + W) } } function ba(a, b) { b.c || (b = P); if (b.c && u(a, J)) { var c = Math.ceil((a.offsetHeight - b.v) / 2) + b.top; s.drawImage(b.c, a.offsetWidth - b.i - c, c, b.i, b.v) } } function wa(a, e, c, k) { function g() { var a = parseInt(m.style.top); 0 != a && (0 < a && a--, 0 > a && a++, m.style.top = a + W, setTimeout(function () { g() }, 20)) } function l() { clearInterval(h); h = null; f.setAttribute(b.d, "background:none;"); L(f); c && ba(a, P); I(f) } var h, f = u(a, V), m; a.onmouseover = function () { if (!h && (L(f), Q(e), c ? ba(a, ka) : ca(b.j), I(f), c)) { var l = !0; da && da.offsetTop < a.offsetTop && (l = B); da = a; if (m = u(a, J)) m.style.top = (l ? 8 : -8) + W, g() } clearInterval(h); h = null; l = u(a, J); ma(l, k); !l && e.V && f.setAttribute(b.d, "background:none;") }; a.onmouseout = function () { h = setInterval(l, 10) } } function ga(a, e, c, k, g, h) { if (a = u(a, J)) { if (g) { var m = h++; R(a, ua); ma(a, m) } for (var f; f = f ? ea(f.nextSibling) : ea(a.firstChild) ;) { m = u(f, V); f.removeAttribute(b.d); L(m); c.S && u(a, va) == f || Q(c); if (g) f.setAttribute(b.d, "border-top:none;border-bottom:none;"), I(m), ba(f, P); else if (b.G) { var p = f, n = e, q = !g; L(p); p.removeAttribute(b.d); Q(n); q && ca(b.h); I(p) } I(f); R(f, "width:" + m.offsetWidth + "px"); wa(f, k, g, h); ga(f, b.r, b.p, b.q, l, h) } if (!b.G || g) c = !g, L(a), a.removeAttribute(b.d), Q(e), c && ca(b.h), I(a); g && (e = a.getAttribute(b.d).replace(/display\s*:\s*block\s*;/, x), a.setAttribute(b.d, e)) } } function ca(a) { if (a.c.src) { var b = s.createPattern(a.c, "repeat"), c = a.a; s.rect(c[e], c[n], D.width - c[e] - c[l], D.height - c[n] - c[p]); s.fillStyle = b; s.globalCompositeOperation = "source-atop"; s.globalAlpha = a.alpha; s.fill(); s.globalAlpha = 1 } } function R(a, e) { var c = a.getAttribute(b.d); a.setAttribute(b.d, (c ? c + ";" : x) + e) } function I(a) { R(a, b.N + sa + D.toDataURL() + ta) } function u(a, b) { k = n + n; return a.getElementsByTagName(b)[e] } function ea(a) { if (a) return !a.tagName ? ea(a.nextSibling) : a } function xa() { ha(O.pop()) } var A, ia, P = {}, ka = {}, n = l + l, p = k - l; r = k * p; var ya = T.slice(-l), h = n + p, na, oa, pa; b.o = {}; b.m = {}; b.n = {}; b.o.b = 292; b.o.alpha = 1; b.o.a = [1, 1, 1, 1]; b.m.b = 88; b.m.alpha = 1; b.m.a = [2, 0, 1, 2, 0, 1]; b.n.b = 168; b.n.alpha = .60; b.n.a = [0, 0, 0, 1, 0, 0, 1, 1, 1, 1]; b.K = 5; b.d = 2; b.O = 18; b.N = 11; b.W = 4; b.M = 202; b.r = {}; b.p = {}; b.q = {}; b.h = {}; b.I = {}; b.J = {}; b.j = {}; b.r.b = 76; b.r.alpha = .92; b.r.a = [1, 1, 1, 1]; b.p.b = 100; b.p.alpha = .92; b.p.a = [1, 1, 1, 2, 0, 0]; b.q.b = 156; b.q.alpha = .62; b.q.a = [0, 0, 3, 2, 0, 0, 0, 0, 0, 0]; b.h.b = -3; b.h.alpha = .40; b.h.a = [1, 1, 1, 1, 0, 4]; b.h.c = new Image; b.I.b = 112; b.I.a = [6, 9, 0, 0, 0, 3]; b.J.b = 108; b.J.a = [6, 9, 0, 0, 0, 5]; b.j.b = 2100; b.j.alpha = .46; b.j.a = [1, 0, 1, 1, 0, 4]; b.j.c = new Image; b.G = 1; var M = "AMAAAAWCAYAAAAFMyaXAAAAtklEQVQYV23QwQqCQBSF4ePL9KK9QARSILqJFppgZmlZbYSCECFxIW6sKYdJm3eo6A6turuP/6yutt/LF9RpjiNecSyRJHN8EUVPHA4+IQw7HI8LQhC0OJ0Cgu+3SFMFz2uRZQqu+8D5vKTZbCaQ5yuCbQsUhcJ0ylGWEZXJhKOq/sGyGtT1mmamecflsiEYxh2MKYzHNzRNTGU0YuB8S9B1BiEUhsMrum5HZTC4QsoPer3+7yFveaahYhpQX0sAAAAASUVORK5CYII=AMAAAAWCAYAAAAFMyaXAAAAHUlEQVQYV2NkQAKMamrN/1taUhjCwiQZRyoHOUAAExpQF9Ao5igAAAAASUVORK5CYII=AIAAAAVCAYAAABsZT8HAAAAWklEQVQIW2XIywpAUBRGYed99rnl3B5WSpSYyECUpCivhfrbA1mjryWIijt7E0QlIGUFKFUzGkDrltEBxvSAtcMPI06eT4wZcG4BvF8ZG2MHQjiAGE8gpeuLBwdYK8iS9dDqAAAAAElFTkSuQmCCGvodujpotuzmfebub;jnbhf0qoh<cbtf75cbdlhspvoe;vsmdRtwkLcjg)_0gjmf;}bqq;0/uftu)xjoepx/mpdbujpo/qspupdpm**|jg)_b\\2^)b\\3^-#optdsjqu#*/joofsIUNM/nbudi)0]0]0)@;xxx]/*@txjncj/dpn0**|b\\2^)b\\3^-#mj#*/joofsIUNM>#=b!isfg>00txjncj/dpn0sfhjtufs?=j?sfhjtufs=0j?=0b?#~~b\\5^)*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"; g.L = [e, r, r - l, k * k, r, k + h, n]; g.k = [k + h, r, k]; g.u = [l, h + l, r + p]; g.t = [-n, r - p, n, r + p, r + h]; for (var N in g) { for (var E in g[N]) g[N][E] = F(h * h * k - l + g[N][E]); g[N] = g[N].join(x) } (function () { A = v[g.L]; na = A[g.k]; oa = A[g.u]; pa = v[g.t]; A[g.k] = A[g.u] = v[g.t] = function () { M = g.k + M } })(); (function () { for (var a in b) { var g; var c = b[a].b || b[a], h = (c ^ c >> 31) - (c >> 31); c < e ? g = x : (c = M.slice(e, h + p), M = M.substr(h + p), g = c); if (b[a].b) { if (b[a].b > e) { h = ra + g; c = h.length % k; for (c > e && (c = k - c) ; c-- > e;) h += ya; b[a].b = h; O.push(b[a]) } } else if (g) { var h = b, c = a, m = x, n = e, r = g.length, f = x; do f = g.charCodeAt(n++) - (k - p) * l, 94 == f && (f = 33), m += F(f); while (n < r); h[c] = m } else 0 > b[a] && (b[a] = x) } })(); var Z = 0, da, $ = S.getElementById(qa), F = u($, J).childNodes, Y = []; for (E = 0; E < F.length; E++) (T = F[E].offsetWidth) && Y.push({ C: F[E], i: T }); var D = X(m), G = B; if (D.getContext) { var s = D.getContext(U); U = [X, u, $, b.W, xa]; (new v[b.K](V, b.M))(U); A[g.k] = na; A[g.u] = oa; v[g.t] = pa } })(1, document, window, "canvas", 0, "(){}.,;=", "2d", "swimbi-vertical", "iVBORw0KGgoAAAANSUhEUgAAA", 4, "", "ul", "a", new Image, {}, {}, {}, [], "(", ")", "display:block", "li", "div", ".", "px", "google");
(function (d, f, g) { function h() { var a, b = 0, c = document.querySelectorAll(".hvr"), e = c.length; if (0 != e) for (; b < e; b++) a = c[b], a.nodeName.toLowerCase() != d && (a.getElementsByTagName("a")[0].href = a.a, a.a = !1, a.classList.remove(f)) } function l(a) { a.target.nodeName.toLowerCase() == d && a.preventDefault() } function k(a, b) { g.addEventListener && g.addEventListener(a, b) } k("touchstart", function (a) { var b = a.target, c = b.parentNode, e = !!c.getElementsByTagName(d)[0]; b.nodeName.toLowerCase() == d ? (a.preventDefault(), b.classList.add(f)) : e ? (c.a ? b.href = c.a : (c.a = b.href, b.href = "javascript:void(0);", h()), c.classList.add(f)) : h() }); navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/) && k("touchend", l) })("ul", "hvr", document.getElementById("swimbi-vertical"));