/*! For license information please see jsrsasign_all.js.LICENSE.txt */

window = {}
!function t(e, n) {
    e["jsrsasign_all"] = n()

}(window, (function() {
    return function(t) {
        var e = {};
        function n(i) {
            if (e[i])
                return e[i].exports;
            var r = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };

            return t[i].call(r.exports, r, r.exports, n),
            r.l = !0,
            r.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var i = Object.create(null);
            if (n.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var r in t)
                    n.d(i, r, function(e) {
                        return t[e]
                    }
                    .bind(null, r));
            return i
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function i() {
                return t["default"]
            }
            : function r() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 206)
    }
    ({
        206: function(t, e, n) {
            
            t.exports = n
            // console.log(t.exports.m[208]);
        },
        207: function(t, e, n) {
            (function(t) {
                var n = {
                    userAgent: !1
                }
                  , i = {};
                if (r === undefined)
                    var r = {};
                r.lang = {
                    extend: function(t, e, i) {
                        if (!e || !t)
                            throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                        var r = function() {};
                        if (r.prototype = e.prototype,
                        t.prototype = new r,
                        t.prototype.constructor = t,
                        t.superclass = e.prototype,
                        e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e),
                        i) {
                            var s;
                            for (s in i)
                                t.prototype[s] = i[s];
                            var a = function() {}
                              , o = ["toString", "valueOf"];
                            try {
                                /MSIE/.test(n.userAgent) && (a = function(t, e) {
                                    for (s = 0; s < o.length; s += 1) {
                                        var n = o[s]
                                          , i = e[n];
                                        "function" == typeof i && i != Object.prototype[n] && (t[n] = i)
                                    }
                                }
                                )
                            } catch (h) {}
                            a(t.prototype, i)
                        }
                    }
                };
                var s = s || function(t, e) {
                    var n = {}
                      , i = n.lib = {}
                      , r = i.Base = function() {
                        function t() {}
                        return {
                            extend: function(e) {
                                t.prototype = this;
                                var n = new t;
                                return e && n.mixIn(e),
                                n.hasOwnProperty("init") || (n.init = function() {
                                    n.$super.init.apply(this, arguments)
                                }
                                ),
                                n.init.prototype = n,
                                n.$super = this,
                                n
                            },
                            create: function() {
                                var t = this.extend();
                                return t.init.apply(t, arguments),
                                t
                            },
                            init: function() {},
                            mixIn: function(t) {
                                for (var e in t)
                                    t.hasOwnProperty(e) && (this[e] = t[e]);
                                t.hasOwnProperty("toString") && (this.toString = t.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }()
                      , s = i.WordArray = r.extend({
                        init: function(t, e) {
                            t = this.words = t || [],
                            this.sigBytes = null != e ? e : 4 * t.length
                        },
                        toString: function(t) {
                            return (t || o).stringify(this)
                        },
                        concat: function(t) {
                            var e = this.words
                              , n = t.words
                              , i = this.sigBytes
                              , r = t.sigBytes;
                            if (this.clamp(),
                            i % 4)
                                for (var s = 0; s < r; s++) {
                                    var a = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                    e[i + s >>> 2] |= a << 24 - (i + s) % 4 * 8
                                }
                            else
                                for (s = 0; s < r; s += 4)
                                    e[i + s >>> 2] = n[s >>> 2];
                            return this.sigBytes += r,
                            this
                        },
                        clamp: function() {
                            var e = this.words
                              , n = this.sigBytes;
                            e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                            e.length = t.ceil(n / 4)
                        },
                        clone: function() {
                            var t = r.clone.call(this);
                            return t.words = this.words.slice(0),
                            t
                        },
                        random: function(e) {
                            for (var n = [], i = 0; i < e; i += 4)
                                n.push(4294967296 * t.random() | 0);
                            return new s.init(n,e)
                        }
                    })
                      , a = n.enc = {}
                      , o = a.Hex = {
                        stringify: function(t) {
                            for (var e = t.words, n = t.sigBytes, i = [], r = 0; r < n; r++) {
                                var s = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                i.push((s >>> 4).toString(16)),
                                i.push((15 & s).toString(16))
                            }
                            return i.join("")
                        },
                        parse: function(t) {
                            for (var e = t.length, n = [], i = 0; i < e; i += 2)
                                n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                            return new s.init(n,e / 2)
                        }
                    }
                      , h = a.Latin1 = {
                        stringify: function(t) {
                            for (var e = t.words, n = t.sigBytes, i = [], r = 0; r < n; r++) {
                                var s = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                i.push(String.fromCharCode(s))
                            }
                            return i.join("")
                        },
                        parse: function(t) {
                            for (var e = t.length, n = [], i = 0; i < e; i++)
                                n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                            return new s.init(n,e)
                        }
                    }
                      , u = a.Utf8 = {
                        stringify: function(t) {
                            try {
                                return decodeURIComponent(escape(h.stringify(t)))
                            } catch (e) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(t) {
                            return h.parse(unescape(encodeURIComponent(t)))
                        }
                    }
                      , c = i.BufferedBlockAlgorithm = r.extend({
                        reset: function() {
                            this._data = new s.init,
                            this._nDataBytes = 0
                        },
                        _append: function(t) {
                            "string" == typeof t && (t = u.parse(t)),
                            this._data.concat(t),
                            this._nDataBytes += t.sigBytes
                        },
                        _process: function(e) {
                            var n = this._data
                              , i = n.words
                              , r = n.sigBytes
                              , a = this.blockSize
                              , o = r / (4 * a)
                              , h = (o = e ? t.ceil(o) : t.max((0 | o) - this._minBufferSize, 0)) * a
                              , u = t.min(4 * h, r);
                            if (h) {
                                for (var c = 0; c < h; c += a)
                                    this._doProcessBlock(i, c);
                                var f = i.splice(0, h);
                                n.sigBytes -= u
                            }
                            return new s.init(f,u)
                        },
                        clone: function() {
                            var t = r.clone.call(this);
                            return t._data = this._data.clone(),
                            t
                        },
                        _minBufferSize: 0
                    })
                      , f = (i.Hasher = c.extend({
                        cfg: r.extend(),
                        init: function(t) {
                            this.cfg = this.cfg.extend(t),
                            this.reset()
                        },
                        reset: function() {
                            c.reset.call(this),
                            this._doReset()
                        },
                        update: function(t) {
                            return this._append(t),
                            this._process(),
                            this
                        },
                        finalize: function(t) {
                            return t && this._append(t),
                            this._doFinalize()
                        },
                        blockSize: 16,
                        _createHelper: function(t) {
                            return function(e, n) {
                                return new t.init(n).finalize(e)
                            }
                        },
                        _createHmacHelper: function(t) {
                            return function(e, n) {
                                return new f.HMAC.init(t,n).finalize(e)
                            }
                        }
                    }),
                    n.algo = {});
                    return n
                }(Math);
                !function(t) {
                    var e, n = (e = s).lib, i = n.Base, r = n.WordArray;
                    (e = e.x64 = {}).Word = i.extend({
                        init: function(t, e) {
                            this.high = t,
                            this.low = e
                        }
                    }),
                    e.WordArray = i.extend({
                        init: function(t, e) {
                            t = this.words = t || [],
                            this.sigBytes = null != e ? e : 8 * t.length
                        },
                        toX32: function() {
                            for (var t = this.words, e = t.length, n = [], i = 0; i < e; i++) {
                                var s = t[i];
                                n.push(s.high),
                                n.push(s.low)
                            }
                            return r.create(n, this.sigBytes)
                        },
                        clone: function() {
                            for (var t = i.clone.call(this), e = t.words = this.words.slice(0), n = e.length, r = 0; r < n; r++)
                                e[r] = e[r].clone();
                            return t
                        }
                    })
                }(),
                s.lib.Cipher || function(t) {
                    var e = (g = s).lib
                      , n = e.Base
                      , i = e.WordArray
                      , r = e.BufferedBlockAlgorithm
                      , a = g.enc.Base64
                      , o = g.algo.EvpKDF
                      , h = e.Cipher = r.extend({
                        cfg: n.extend(),
                        createEncryptor: function(t, e) {
                            return this.create(this._ENC_XFORM_MODE, t, e)
                        },
                        createDecryptor: function(t, e) {
                            return this.create(this._DEC_XFORM_MODE, t, e)
                        },
                        init: function(t, e, n) {
                            this.cfg = this.cfg.extend(n),
                            this._xformMode = t,
                            this._key = e,
                            this.reset()
                        },
                        reset: function() {
                            r.reset.call(this),
                            this._doReset()
                        },
                        process: function(t) {
                            return this._append(t),
                            this._process()
                        },
                        finalize: function(t) {
                            return t && this._append(t),
                            this._doFinalize()
                        },
                        keySize: 4,
                        ivSize: 4,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function(t) {
                            return {
                                encrypt: function(e, n, i) {
                                    return ("string" == typeof n ? p : d).encrypt(t, e, n, i)
                                },
                                decrypt: function(e, n, i) {
                                    return ("string" == typeof n ? p : d).decrypt(t, e, n, i)
                                }
                            }
                        }
                    });
                    e.StreamCipher = h.extend({
                        _doFinalize: function() {
                            return this._process(!0)
                        },
                        blockSize: 1
                    });
                    var u = g.mode = {}
                      , c = function(t, e, n) {
                        var i = this._iv;
                        i ? this._iv = undefined : i = this._prevBlock;
                        for (var r = 0; r < n; r++)
                            t[e + r] ^= i[r]
                    }
                      , f = (e.BlockCipherMode = n.extend({
                        createEncryptor: function(t, e) {
                            return this.Encryptor.create(t, e)
                        },
                        createDecryptor: function(t, e) {
                            return this.Decryptor.create(t, e)
                        },
                        init: function(t, e) {
                            this._cipher = t,
                            this._iv = e
                        }
                    })).extend();
                    f.Encryptor = f.extend({
                        processBlock: function(t, e) {
                            var n = this._cipher
                              , i = n.blockSize;
                            c.call(this, t, e, i),
                            n.encryptBlock(t, e),
                            this._prevBlock = t.slice(e, e + i)
                        }
                    }),
                    f.Decryptor = f.extend({
                        processBlock: function(t, e) {
                            var n = this._cipher
                              , i = n.blockSize
                              , r = t.slice(e, e + i);
                            n.decryptBlock(t, e),
                            c.call(this, t, e, i),
                            this._prevBlock = r
                        }
                    }),
                    u = u.CBC = f,
                    f = (g.pad = {}).Pkcs7 = {
                        pad: function(t, e) {
                            for (var n, r = (n = (n = 4 * e) - t.sigBytes % n) << 24 | n << 16 | n << 8 | n, s = [], a = 0; a < n; a += 4)
                                s.push(r);
                            n = i.create(s, n),
                            t.concat(n)
                        },
                        unpad: function(t) {
                            t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
                        }
                    },
                    e.BlockCipher = h.extend({
                        cfg: h.cfg.extend({
                            mode: u,
                            padding: f
                        }),
                        reset: function() {
                            h.reset.call(this);
                            var t = (e = this.cfg).iv
                              , e = e.mode;
                            if (this._xformMode == this._ENC_XFORM_MODE)
                                var n = e.createEncryptor;
                            else
                                n = e.createDecryptor,
                                this._minBufferSize = 1;
                            this._mode = n.call(e, this, t && t.words)
                        },
                        _doProcessBlock: function(t, e) {
                            this._mode.processBlock(t, e)
                        },
                        _doFinalize: function() {
                            var t = this.cfg.padding;
                            if (this._xformMode == this._ENC_XFORM_MODE) {
                                t.pad(this._data, this.blockSize);
                                var e = this._process(!0)
                            } else
                                e = this._process(!0),
                                t.unpad(e);
                            return e
                        },
                        blockSize: 4
                    });
                    var l = e.CipherParams = n.extend({
                        init: function(t) {
                            this.mixIn(t)
                        },
                        toString: function(t) {
                            return (t || this.formatter).stringify(this)
                        }
                    })
                      , d = (u = (g.format = {}).OpenSSL = {
                        stringify: function(t) {
                            var e = t.ciphertext;
                            return ((t = t.salt) ? i.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(a)
                        },
                        parse: function(t) {
                            var e = (t = a.parse(t)).words;
                            if (1398893684 == e[0] && 1701076831 == e[1]) {
                                var n = i.create(e.slice(2, 4));
                                e.splice(0, 4),
                                t.sigBytes -= 16
                            }
                            return l.create({
                                ciphertext: t,
                                salt: n
                            })
                        }
                    },
                    e.SerializableCipher = n.extend({
                        cfg: n.extend({
                            format: u
                        }),
                        encrypt: function(t, e, n, i) {
                            i = this.cfg.extend(i);
                            var r = t.createEncryptor(n, i);
                            return e = r.finalize(e),
                            r = r.cfg,
                            l.create({
                                ciphertext: e,
                                key: n,
                                iv: r.iv,
                                algorithm: t,
                                mode: r.mode,
                                padding: r.padding,
                                blockSize: t.blockSize,
                                formatter: i.format
                            })
                        },
                        decrypt: function(t, e, n, i) {
                            return i = this.cfg.extend(i),
                            e = this._parse(e, i.format),
                            t.createDecryptor(n, i).finalize(e.ciphertext)
                        },
                        _parse: function(t, e) {
                            return "string" == typeof t ? e.parse(t, this) : t
                        }
                    }))
                      , g = (g.kdf = {}).OpenSSL = {
                        execute: function(t, e, n, r) {
                            return r || (r = i.random(8)),
                            t = o.create({
                                keySize: e + n
                            }).compute(t, r),
                            n = i.create(t.words.slice(e), 4 * n),
                            t.sigBytes = 4 * e,
                            l.create({
                                key: t,
                                iv: n,
                                salt: r
                            })
                        }
                    }
                      , p = e.PasswordBasedCipher = d.extend({
                        cfg: d.cfg.extend({
                            kdf: g
                        }),
                        encrypt: function(t, e, n, i) {
                            return n = (i = this.cfg.extend(i)).kdf.execute(n, t.keySize, t.ivSize),
                            i.iv = n.iv,
                            (t = d.encrypt.call(this, t, e, n.key, i)).mixIn(n),
                            t
                        },
                        decrypt: function(t, e, n, i) {
                            return i = this.cfg.extend(i),
                            e = this._parse(e, i.format),
                            n = i.kdf.execute(n, t.keySize, t.ivSize, e.salt),
                            i.iv = n.iv,
                            d.decrypt.call(this, t, e, n.key, i)
                        }
                    })
                }(),
                function() {
                    for (var t = s, e = t.lib.BlockCipher, n = t.algo, i = [], r = [], a = [], o = [], h = [], u = [], c = [], f = [], l = [], d = [], g = [], p = 0; 256 > p; p++)
                        g[p] = 128 > p ? p << 1 : p << 1 ^ 283;
                    var y = 0
                      , m = 0;
                    for (p = 0; 256 > p; p++) {
                        var v = (v = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4) >>> 8 ^ 255 & v ^ 99;
                        i[y] = v,
                        r[v] = y;
                        var S = g[y]
                          , x = g[S]
                          , F = g[x]
                          , E = 257 * g[v] ^ 16843008 * v;
                        a[y] = E << 24 | E >>> 8,
                        o[y] = E << 16 | E >>> 16,
                        h[y] = E << 8 | E >>> 24,
                        u[y] = E,
                        E = 16843009 * F ^ 65537 * x ^ 257 * S ^ 16843008 * y,
                        c[v] = E << 24 | E >>> 8,
                        f[v] = E << 16 | E >>> 16,
                        l[v] = E << 8 | E >>> 24,
                        d[v] = E,
                        y ? (y = S ^ g[g[g[F ^ S]]],
                        m ^= g[g[m]]) : y = m = 1
                    }
                    var w = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                    n = n.AES = e.extend({
                        _doReset: function() {
                            for (var t = (n = this._key).words, e = n.sigBytes / 4, n = 4 * ((this._nRounds = e + 6) + 1), r = this._keySchedule = [], s = 0; s < n; s++)
                                if (s < e)
                                    r[s] = t[s];
                                else {
                                    var a = r[s - 1];
                                    s % e ? 6 < e && 4 == s % e && (a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a]) : (a = i[(a = a << 8 | a >>> 24) >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a],
                                    a ^= w[s / e | 0] << 24),
                                    r[s] = r[s - e] ^ a
                                }
                            for (t = this._invKeySchedule = [],
                            e = 0; e < n; e++)
                                s = n - e,
                                a = e % 4 ? r[s] : r[s - 4],
                                t[e] = 4 > e || 4 >= s ? a : c[i[a >>> 24]] ^ f[i[a >>> 16 & 255]] ^ l[i[a >>> 8 & 255]] ^ d[i[255 & a]]
                        },
                        encryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._keySchedule, a, o, h, u, i)
                        },
                        decryptBlock: function(t, e) {
                            var n = t[e + 1];
                            t[e + 1] = t[e + 3],
                            t[e + 3] = n,
                            this._doCryptBlock(t, e, this._invKeySchedule, c, f, l, d, r),
                            n = t[e + 1],
                            t[e + 1] = t[e + 3],
                            t[e + 3] = n
                        },
                        _doCryptBlock: function(t, e, n, i, r, s, a, o) {
                            for (var h = this._nRounds, u = t[e] ^ n[0], c = t[e + 1] ^ n[1], f = t[e + 2] ^ n[2], l = t[e + 3] ^ n[3], d = 4, g = 1; g < h; g++) {
                                var p = i[u >>> 24] ^ r[c >>> 16 & 255] ^ s[f >>> 8 & 255] ^ a[255 & l] ^ n[d++]
                                  , y = i[c >>> 24] ^ r[f >>> 16 & 255] ^ s[l >>> 8 & 255] ^ a[255 & u] ^ n[d++]
                                  , m = i[f >>> 24] ^ r[l >>> 16 & 255] ^ s[u >>> 8 & 255] ^ a[255 & c] ^ n[d++];
                                l = i[l >>> 24] ^ r[u >>> 16 & 255] ^ s[c >>> 8 & 255] ^ a[255 & f] ^ n[d++],
                                u = p,
                                c = y,
                                f = m
                            }
                            p = (o[u >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[255 & l]) ^ n[d++],
                            y = (o[c >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & u]) ^ n[d++],
                            m = (o[f >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & c]) ^ n[d++],
                            l = (o[l >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & f]) ^ n[d++],
                            t[e] = p,
                            t[e + 1] = y,
                            t[e + 2] = m,
                            t[e + 3] = l
                        },
                        keySize: 8
                    });
                    t.AES = e._createHelper(n)
                }(),
                function() {
                    function t(t, e) {
                        var n = (this._lBlock >>> t ^ this._rBlock) & e;
                        this._rBlock ^= n,
                        this._lBlock ^= n << t
                    }
                    function e(t, e) {
                        var n = (this._rBlock >>> t ^ this._lBlock) & e;
                        this._lBlock ^= n,
                        this._rBlock ^= n << t
                    }
                    var n = s
                      , i = (r = n.lib).WordArray
                      , r = r.BlockCipher
                      , a = n.algo
                      , o = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
                      , h = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
                      , u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
                      , c = [{
                        0: 8421888,
                        268435456: 32768,
                        536870912: 8421378,
                        805306368: 2,
                        1073741824: 512,
                        1342177280: 8421890,
                        1610612736: 8389122,
                        1879048192: 8388608,
                        2147483648: 514,
                        2415919104: 8389120,
                        2684354560: 33280,
                        2952790016: 8421376,
                        3221225472: 32770,
                        3489660928: 8388610,
                        3758096384: 0,
                        4026531840: 33282,
                        134217728: 0,
                        402653184: 8421890,
                        671088640: 33282,
                        939524096: 32768,
                        1207959552: 8421888,
                        1476395008: 512,
                        1744830464: 8421378,
                        2013265920: 2,
                        2281701376: 8389120,
                        2550136832: 33280,
                        2818572288: 8421376,
                        3087007744: 8389122,
                        3355443200: 8388610,
                        3623878656: 32770,
                        3892314112: 514,
                        4160749568: 8388608,
                        1: 32768,
                        268435457: 2,
                        536870913: 8421888,
                        805306369: 8388608,
                        1073741825: 8421378,
                        1342177281: 33280,
                        1610612737: 512,
                        1879048193: 8389122,
                        2147483649: 8421890,
                        2415919105: 8421376,
                        2684354561: 8388610,
                        2952790017: 33282,
                        3221225473: 514,
                        3489660929: 8389120,
                        3758096385: 32770,
                        4026531841: 0,
                        134217729: 8421890,
                        402653185: 8421376,
                        671088641: 8388608,
                        939524097: 512,
                        1207959553: 32768,
                        1476395009: 8388610,
                        1744830465: 2,
                        2013265921: 33282,
                        2281701377: 32770,
                        2550136833: 8389122,
                        2818572289: 514,
                        3087007745: 8421888,
                        3355443201: 8389120,
                        3623878657: 0,
                        3892314113: 33280,
                        4160749569: 8421378
                    }, {
                        0: 1074282512,
                        16777216: 16384,
                        33554432: 524288,
                        5033168: 1074266128,
                        67108864: 1073741840,
                        83886080: 1074282496,
                        100663296: 1073758208,
                        117440512: 16,
                        134217728: 540672,
                        150994944: 1073758224,
                        167772160: 1073741824,
                        184549376: 540688,
                        201326592: 524304,
                        218103808: 0,
                        234881024: 16400,
                        251658240: 1074266112,
                        8388608: 1073758208,
                        25165824: 540688,
                        41943040: 16,
                        58720256: 1073758224,
                        75497472: 1074282512,
                        92274688: 1073741824,
                        109051904: 524288,
                        125829120: 1074266128,
                        142606336: 524304,
                        159383552: 0,
                        176160768: 16384,
                        192937984: 1074266112,
                        209715200: 1073741840,
                        226492416: 540672,
                        243269632: 1074282496,
                        260046848: 16400,
                        268435456: 0,
                        285212672: 1074266128,
                        301989888: 1073758224,
                        318767104: 1074282496,
                        335544320: 1074266112,
                        352321536: 16,
                        369098752: 540688,
                        385875968: 16384,
                        402653184: 16400,
                        419430400: 524288,
                        436207616: 524304,
                        452984832: 1073741840,
                        469762048: 540672,
                        486539264: 1073758208,
                        503316480: 1073741824,
                        520093696: 1074282512,
                        276824064: 540688,
                        293601280: 524288,
                        310378496: 1074266112,
                        327155712: 16384,
                        343932928: 1073758208,
                        360710144: 1074282512,
                        377487360: 16,
                        394264576: 1073741824,
                        411041792: 1074282496,
                        427819008: 1073741840,
                        444596224: 1073758224,
                        461373440: 524304,
                        478150656: 0,
                        494927872: 16400,
                        511705088: 1074266128,
                        528482304: 540672
                    }, {
                        0: 260,
                        1048576: 0,
                        2097152: 67109120,
                        3145728: 65796,
                        4194304: 65540,
                        5242880: 67108868,
                        6291456: 67174660,
                        7340032: 67174400,
                        8388608: 67108864,
                        9437184: 67174656,
                        10485760: 65792,
                        11534336: 67174404,
                        12582912: 67109124,
                        13631488: 65536,
                        14680064: 4,
                        15728640: 256,
                        524288: 67174656,
                        1572864: 67174404,
                        2621440: 0,
                        3670016: 67109120,
                        4718592: 67108868,
                        5767168: 65536,
                        6815744: 65540,
                        7864320: 260,
                        8912896: 4,
                        9961472: 256,
                        11010048: 67174400,
                        12058624: 65796,
                        13107200: 65792,
                        14155776: 67109124,
                        15204352: 67174660,
                        16252928: 67108864,
                        16777216: 67174656,
                        17825792: 65540,
                        18874368: 65536,
                        19922944: 67109120,
                        20971520: 256,
                        22020096: 67174660,
                        23068672: 67108868,
                        24117248: 0,
                        25165824: 67109124,
                        26214400: 67108864,
                        27262976: 4,
                        28311552: 65792,
                        29360128: 67174400,
                        30408704: 260,
                        31457280: 65796,
                        32505856: 67174404,
                        17301504: 67108864,
                        18350080: 260,
                        19398656: 67174656,
                        20447232: 0,
                        21495808: 65540,
                        22544384: 67109120,
                        23592960: 256,
                        24641536: 67174404,
                        25690112: 65536,
                        26738688: 67174660,
                        27787264: 65796,
                        28835840: 67108868,
                        29884416: 67109124,
                        30932992: 67174400,
                        31981568: 4,
                        33030144: 65792
                    }, {
                        0: 2151682048,
                        65536: 2147487808,
                        131072: 4198464,
                        196608: 2151677952,
                        262144: 0,
                        327680: 4198400,
                        393216: 2147483712,
                        458752: 4194368,
                        524288: 2147483648,
                        589824: 4194304,
                        655360: 64,
                        720896: 2147487744,
                        786432: 2151678016,
                        851968: 4160,
                        917504: 4096,
                        983040: 2151682112,
                        32768: 2147487808,
                        98304: 64,
                        163840: 2151678016,
                        229376: 2147487744,
                        294912: 4198400,
                        360448: 2151682112,
                        425984: 0,
                        491520: 2151677952,
                        557056: 4096,
                        622592: 2151682048,
                        688128: 4194304,
                        753664: 4160,
                        819200: 2147483648,
                        884736: 4194368,
                        950272: 4198464,
                        1015808: 2147483712,
                        1048576: 4194368,
                        1114112: 4198400,
                        1179648: 2147483712,
                        1245184: 0,
                        1310720: 4160,
                        1376256: 2151678016,
                        1441792: 2151682048,
                        1507328: 2147487808,
                        1572864: 2151682112,
                        1638400: 2147483648,
                        1703936: 2151677952,
                        1769472: 4198464,
                        1835008: 2147487744,
                        1900544: 4194304,
                        1966080: 64,
                        2031616: 4096,
                        1081344: 2151677952,
                        1146880: 2151682112,
                        1212416: 0,
                        1277952: 4198400,
                        1343488: 4194368,
                        1409024: 2147483648,
                        1474560: 2147487808,
                        1540096: 64,
                        1605632: 2147483712,
                        1671168: 4096,
                        1736704: 2147487744,
                        1802240: 2151678016,
                        1867776: 4160,
                        1933312: 2151682048,
                        1998848: 4194304,
                        2064384: 4198464
                    }, {
                        0: 128,
                        4096: 17039360,
                        8192: 262144,
                        12288: 536870912,
                        16384: 537133184,
                        20480: 16777344,
                        24576: 553648256,
                        28672: 262272,
                        32768: 16777216,
                        36864: 537133056,
                        40960: 536871040,
                        45056: 553910400,
                        49152: 553910272,
                        53248: 0,
                        57344: 17039488,
                        61440: 553648128,
                        2048: 17039488,
                        6144: 553648256,
                        10240: 128,
                        14336: 17039360,
                        18432: 262144,
                        22528: 537133184,
                        26624: 553910272,
                        30720: 536870912,
                        34816: 537133056,
                        38912: 0,
                        43008: 553910400,
                        47104: 16777344,
                        51200: 536871040,
                        55296: 553648128,
                        59392: 16777216,
                        63488: 262272,
                        65536: 262144,
                        69632: 128,
                        73728: 536870912,
                        77824: 553648256,
                        81920: 16777344,
                        86016: 553910272,
                        90112: 537133184,
                        94208: 16777216,
                        98304: 553910400,
                        102400: 553648128,
                        106496: 17039360,
                        110592: 537133056,
                        114688: 262272,
                        118784: 536871040,
                        122880: 0,
                        126976: 17039488,
                        67584: 553648256,
                        71680: 16777216,
                        75776: 17039360,
                        79872: 537133184,
                        83968: 536870912,
                        88064: 17039488,
                        92160: 128,
                        96256: 553910272,
                        100352: 262272,
                        104448: 553910400,
                        108544: 0,
                        112640: 553648128,
                        116736: 16777344,
                        120832: 262144,
                        124928: 537133056,
                        129024: 536871040
                    }, {
                        0: 268435464,
                        256: 8192,
                        512: 270532608,
                        768: 270540808,
                        1024: 268443648,
                        1280: 2097152,
                        1536: 2097160,
                        1792: 268435456,
                        2048: 0,
                        2304: 268443656,
                        2560: 2105344,
                        2816: 8,
                        3072: 270532616,
                        3328: 2105352,
                        3584: 8200,
                        3840: 270540800,
                        128: 270532608,
                        384: 270540808,
                        640: 8,
                        896: 2097152,
                        1152: 2105352,
                        1408: 268435464,
                        1664: 268443648,
                        1920: 8200,
                        2176: 2097160,
                        2432: 8192,
                        2688: 268443656,
                        2944: 270532616,
                        3200: 0,
                        3456: 270540800,
                        3712: 2105344,
                        3968: 268435456,
                        4096: 268443648,
                        4352: 270532616,
                        4608: 270540808,
                        4864: 8200,
                        5120: 2097152,
                        5376: 268435456,
                        5632: 268435464,
                        5888: 2105344,
                        6144: 2105352,
                        6400: 0,
                        6656: 8,
                        6912: 270532608,
                        7168: 8192,
                        7424: 268443656,
                        7680: 270540800,
                        7936: 2097160,
                        4224: 8,
                        4480: 2105344,
                        4736: 2097152,
                        4992: 268435464,
                        5248: 268443648,
                        5504: 8200,
                        5760: 270540808,
                        6016: 270532608,
                        6272: 270540800,
                        6528: 270532616,
                        6784: 8192,
                        7040: 2105352,
                        7296: 2097160,
                        7552: 0,
                        7808: 268435456,
                        8064: 268443656
                    }, {
                        0: 1048576,
                        16: 33555457,
                        32: 1024,
                        48: 1049601,
                        64: 34604033,
                        80: 0,
                        96: 1,
                        112: 34603009,
                        128: 33555456,
                        144: 1048577,
                        160: 33554433,
                        176: 34604032,
                        192: 34603008,
                        208: 1025,
                        224: 1049600,
                        240: 33554432,
                        8: 34603009,
                        24: 0,
                        40: 33555457,
                        56: 34604032,
                        72: 1048576,
                        88: 33554433,
                        104: 33554432,
                        120: 1025,
                        136: 1049601,
                        152: 33555456,
                        168: 34603008,
                        184: 1048577,
                        200: 1024,
                        216: 34604033,
                        232: 1,
                        248: 1049600,
                        256: 33554432,
                        272: 1048576,
                        288: 33555457,
                        304: 34603009,
                        320: 1048577,
                        336: 33555456,
                        352: 34604032,
                        368: 1049601,
                        384: 1025,
                        400: 34604033,
                        416: 1049600,
                        432: 1,
                        448: 0,
                        464: 34603008,
                        480: 33554433,
                        496: 1024,
                        264: 1049600,
                        280: 33555457,
                        296: 34603009,
                        312: 1,
                        328: 33554432,
                        344: 1048576,
                        360: 1025,
                        376: 34604032,
                        392: 33554433,
                        408: 34603008,
                        424: 0,
                        440: 34604033,
                        456: 1049601,
                        472: 1024,
                        488: 33555456,
                        504: 1048577
                    }, {
                        0: 134219808,
                        1: 131072,
                        2: 134217728,
                        3: 32,
                        4: 131104,
                        5: 134350880,
                        6: 134350848,
                        7: 2048,
                        8: 134348800,
                        9: 134219776,
                        10: 133120,
                        11: 134348832,
                        12: 2080,
                        13: 0,
                        14: 134217760,
                        15: 133152,
                        2147483648: 2048,
                        2147483649: 134350880,
                        2147483650: 134219808,
                        2147483651: 134217728,
                        2147483652: 134348800,
                        2147483653: 133120,
                        2147483654: 133152,
                        2147483655: 32,
                        2147483656: 134217760,
                        2147483657: 2080,
                        2147483658: 131104,
                        2147483659: 134350848,
                        2147483660: 0,
                        2147483661: 134348832,
                        2147483662: 134219776,
                        2147483663: 131072,
                        16: 133152,
                        17: 134350848,
                        18: 32,
                        19: 2048,
                        20: 134219776,
                        21: 134217760,
                        22: 134348832,
                        23: 131072,
                        24: 0,
                        25: 131104,
                        26: 134348800,
                        27: 134219808,
                        28: 134350880,
                        29: 133120,
                        30: 2080,
                        31: 134217728,
                        2147483664: 131072,
                        2147483665: 2048,
                        2147483666: 134348832,
                        2147483667: 133152,
                        2147483668: 32,
                        2147483669: 134348800,
                        2147483670: 134217728,
                        2147483671: 134219808,
                        2147483672: 134350880,
                        2147483673: 134217760,
                        2147483674: 134219776,
                        2147483675: 0,
                        2147483676: 133120,
                        2147483677: 2080,
                        2147483678: 131104,
                        2147483679: 134350848
                    }]
                      , f = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
                      , l = a.DES = r.extend({
                        _doReset: function() {
                            for (var t = this._key.words, e = [], n = 0; 56 > n; n++) {
                                var i = o[n] - 1;
                                e[n] = t[i >>> 5] >>> 31 - i % 32 & 1
                            }
                            for (t = this._subKeys = [],
                            i = 0; 16 > i; i++) {
                                var r = t[i] = []
                                  , s = u[i];
                                for (n = 0; 24 > n; n++)
                                    r[n / 6 | 0] |= e[(h[n] - 1 + s) % 28] << 31 - n % 6,
                                    r[4 + (n / 6 | 0)] |= e[28 + (h[n + 24] - 1 + s) % 28] << 31 - n % 6;
                                for (r[0] = r[0] << 1 | r[0] >>> 31,
                                n = 1; 7 > n; n++)
                                    r[n] >>>= 4 * (n - 1) + 3;
                                r[7] = r[7] << 5 | r[7] >>> 27
                            }
                            for (e = this._invSubKeys = [],
                            n = 0; 16 > n; n++)
                                e[n] = t[15 - n]
                        },
                        encryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._subKeys)
                        },
                        decryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._invSubKeys)
                        },
                        _doCryptBlock: function(n, i, r) {
                            this._lBlock = n[i],
                            this._rBlock = n[i + 1],
                            t.call(this, 4, 252645135),
                            t.call(this, 16, 65535),
                            e.call(this, 2, 858993459),
                            e.call(this, 8, 16711935),
                            t.call(this, 1, 1431655765);
                            for (var s = 0; 16 > s; s++) {
                                for (var a = r[s], o = this._lBlock, h = this._rBlock, u = 0, l = 0; 8 > l; l++)
                                    u |= c[l][((h ^ a[l]) & f[l]) >>> 0];
                                this._lBlock = h,
                                this._rBlock = o ^ u
                            }
                            r = this._lBlock,
                            this._lBlock = this._rBlock,
                            this._rBlock = r,
                            t.call(this, 1, 1431655765),
                            e.call(this, 8, 16711935),
                            e.call(this, 2, 858993459),
                            t.call(this, 16, 65535),
                            t.call(this, 4, 252645135),
                            n[i] = this._lBlock,
                            n[i + 1] = this._rBlock
                        },
                        keySize: 2,
                        ivSize: 2,
                        blockSize: 2
                    });
                    n.DES = r._createHelper(l),
                    a = a.TripleDES = r.extend({
                        _doReset: function() {
                            var t = this._key.words;
                            this._des1 = l.createEncryptor(i.create(t.slice(0, 2))),
                            this._des2 = l.createEncryptor(i.create(t.slice(2, 4))),
                            this._des3 = l.createEncryptor(i.create(t.slice(4, 6)))
                        },
                        encryptBlock: function(t, e) {
                            this._des1.encryptBlock(t, e),
                            this._des2.decryptBlock(t, e),
                            this._des3.encryptBlock(t, e)
                        },
                        decryptBlock: function(t, e) {
                            this._des3.decryptBlock(t, e),
                            this._des2.encryptBlock(t, e),
                            this._des1.decryptBlock(t, e)
                        },
                        keySize: 6,
                        ivSize: 2,
                        blockSize: 2
                    }),
                    n.TripleDES = r._createHelper(a)
                }(),
                function() {
                    var t = s
                      , e = t.lib.WordArray;
                    t.enc.Base64 = {
                        stringify: function(t) {
                            var e = t.words
                              , n = t.sigBytes
                              , i = this._map;
                            t.clamp(),
                            t = [];
                            for (var r = 0; r < n; r += 3)
                                for (var s = (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, a = 0; 4 > a && r + .75 * a < n; a++)
                                    t.push(i.charAt(s >>> 6 * (3 - a) & 63));
                            if (e = i.charAt(64))
                                for (; t.length % 4; )
                                    t.push(e);
                            return t.join("")
                        },
                        parse: function(t) {
                            var n = t.length
                              , i = this._map;
                            (r = i.charAt(64)) && (-1 != (r = t.indexOf(r)) && (n = r));
                            for (var r = [], s = 0, a = 0; a < n; a++)
                                if (a % 4) {
                                    var o = i.indexOf(t.charAt(a - 1)) << a % 4 * 2
                                      , h = i.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
                                    r[s >>> 2] |= (o | h) << 24 - s % 4 * 8,
                                    s++
                                }
                            return e.create(r, s)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
                }(),
                function(t) {
                    function e(t, e, n, i, r, s, a) {
                        return ((t = t + (e & n | ~e & i) + r + a) << s | t >>> 32 - s) + e
                    }
                    function n(t, e, n, i, r, s, a) {
                        return ((t = t + (e & i | n & ~i) + r + a) << s | t >>> 32 - s) + e
                    }
                    function i(t, e, n, i, r, s, a) {
                        return ((t = t + (e ^ n ^ i) + r + a) << s | t >>> 32 - s) + e
                    }
                    function r(t, e, n, i, r, s, a) {
                        return ((t = t + (n ^ (e | ~i)) + r + a) << s | t >>> 32 - s) + e
                    }
                    for (var a = s, o = (u = a.lib).WordArray, h = u.Hasher, u = a.algo, c = [], f = 0; 64 > f; f++)
                        c[f] = 4294967296 * t.abs(t.sin(f + 1)) | 0;
                    u = u.MD5 = h.extend({
                        _doReset: function() {
                            this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878])
                        },
                        _doProcessBlock: function(t, s) {
                            for (var a = 0; 16 > a; a++) {
                                var o = t[h = s + a];
                                t[h] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
                            }
                            a = this._hash.words;
                            var h = t[s + 0]
                              , u = (o = t[s + 1],
                            t[s + 2])
                              , f = t[s + 3]
                              , l = t[s + 4]
                              , d = t[s + 5]
                              , g = t[s + 6]
                              , p = t[s + 7]
                              , y = t[s + 8]
                              , m = t[s + 9]
                              , v = t[s + 10]
                              , S = t[s + 11]
                              , x = t[s + 12]
                              , F = t[s + 13]
                              , E = t[s + 14]
                              , w = t[s + 15]
                              , b = e(b = a[0], D = a[1], C = a[2], A = a[3], h, 7, c[0])
                              , A = e(A, b, D, C, o, 12, c[1])
                              , C = e(C, A, b, D, u, 17, c[2])
                              , D = e(D, C, A, b, f, 22, c[3]);
                            b = e(b, D, C, A, l, 7, c[4]),
                            A = e(A, b, D, C, d, 12, c[5]),
                            C = e(C, A, b, D, g, 17, c[6]),
                            D = e(D, C, A, b, p, 22, c[7]),
                            b = e(b, D, C, A, y, 7, c[8]),
                            A = e(A, b, D, C, m, 12, c[9]),
                            C = e(C, A, b, D, v, 17, c[10]),
                            D = e(D, C, A, b, S, 22, c[11]),
                            b = e(b, D, C, A, x, 7, c[12]),
                            A = e(A, b, D, C, F, 12, c[13]),
                            C = e(C, A, b, D, E, 17, c[14]),
                            b = n(b, D = e(D, C, A, b, w, 22, c[15]), C, A, o, 5, c[16]),
                            A = n(A, b, D, C, g, 9, c[17]),
                            C = n(C, A, b, D, S, 14, c[18]),
                            D = n(D, C, A, b, h, 20, c[19]),
                            b = n(b, D, C, A, d, 5, c[20]),
                            A = n(A, b, D, C, v, 9, c[21]),
                            C = n(C, A, b, D, w, 14, c[22]),
                            D = n(D, C, A, b, l, 20, c[23]),
                            b = n(b, D, C, A, m, 5, c[24]),
                            A = n(A, b, D, C, E, 9, c[25]),
                            C = n(C, A, b, D, f, 14, c[26]),
                            D = n(D, C, A, b, y, 20, c[27]),
                            b = n(b, D, C, A, F, 5, c[28]),
                            A = n(A, b, D, C, u, 9, c[29]),
                            C = n(C, A, b, D, p, 14, c[30]),
                            b = i(b, D = n(D, C, A, b, x, 20, c[31]), C, A, d, 4, c[32]),
                            A = i(A, b, D, C, y, 11, c[33]),
                            C = i(C, A, b, D, S, 16, c[34]),
                            D = i(D, C, A, b, E, 23, c[35]),
                            b = i(b, D, C, A, o, 4, c[36]),
                            A = i(A, b, D, C, l, 11, c[37]),
                            C = i(C, A, b, D, p, 16, c[38]),
                            D = i(D, C, A, b, v, 23, c[39]),
                            b = i(b, D, C, A, F, 4, c[40]),
                            A = i(A, b, D, C, h, 11, c[41]),
                            C = i(C, A, b, D, f, 16, c[42]),
                            D = i(D, C, A, b, g, 23, c[43]),
                            b = i(b, D, C, A, m, 4, c[44]),
                            A = i(A, b, D, C, x, 11, c[45]),
                            C = i(C, A, b, D, w, 16, c[46]),
                            b = r(b, D = i(D, C, A, b, u, 23, c[47]), C, A, h, 6, c[48]),
                            A = r(A, b, D, C, p, 10, c[49]),
                            C = r(C, A, b, D, E, 15, c[50]),
                            D = r(D, C, A, b, d, 21, c[51]),
                            b = r(b, D, C, A, x, 6, c[52]),
                            A = r(A, b, D, C, f, 10, c[53]),
                            C = r(C, A, b, D, v, 15, c[54]),
                            D = r(D, C, A, b, o, 21, c[55]),
                            b = r(b, D, C, A, y, 6, c[56]),
                            A = r(A, b, D, C, w, 10, c[57]),
                            C = r(C, A, b, D, g, 15, c[58]),
                            D = r(D, C, A, b, F, 21, c[59]),
                            b = r(b, D, C, A, l, 6, c[60]),
                            A = r(A, b, D, C, S, 10, c[61]),
                            C = r(C, A, b, D, u, 15, c[62]),
                            D = r(D, C, A, b, m, 21, c[63]);
                            a[0] = a[0] + b | 0,
                            a[1] = a[1] + D | 0,
                            a[2] = a[2] + C | 0,
                            a[3] = a[3] + A | 0
                        },
                        _doFinalize: function() {
                            var e = this._data
                              , n = e.words
                              , i = 8 * this._nDataBytes
                              , r = 8 * e.sigBytes;
                            n[r >>> 5] |= 128 << 24 - r % 32;
                            var s = t.floor(i / 4294967296);
                            for (n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                            n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                            e.sigBytes = 4 * (n.length + 1),
                            this._process(),
                            n = (e = this._hash).words,
                            i = 0; 4 > i; i++)
                                r = n[i],
                                n[i] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                            return e
                        },
                        clone: function() {
                            var t = h.clone.call(this);
                            return t._hash = this._hash.clone(),
                            t
                        }
                    }),
                    a.MD5 = h._createHelper(u),
                    a.HmacMD5 = h._createHmacHelper(u)
                }(Math),
                function() {
                    var t = s
                      , e = (r = t.lib).WordArray
                      , n = r.Hasher
                      , i = []
                      , r = t.algo.SHA1 = n.extend({
                        _doReset: function() {
                            this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function(t, e) {
                            for (var n = this._hash.words, r = n[0], s = n[1], a = n[2], o = n[3], h = n[4], u = 0; 80 > u; u++) {
                                if (16 > u)
                                    i[u] = 0 | t[e + u];
                                else {
                                    var c = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];
                                    i[u] = c << 1 | c >>> 31
                                }
                                c = (r << 5 | r >>> 27) + h + i[u],
                                c = 20 > u ? c + (1518500249 + (s & a | ~s & o)) : 40 > u ? c + (1859775393 + (s ^ a ^ o)) : 60 > u ? c + ((s & a | s & o | a & o) - 1894007588) : c + ((s ^ a ^ o) - 899497514),
                                h = o,
                                o = a,
                                a = s << 30 | s >>> 2,
                                s = r,
                                r = c
                            }
                            n[0] = n[0] + r | 0,
                            n[1] = n[1] + s | 0,
                            n[2] = n[2] + a | 0,
                            n[3] = n[3] + o | 0,
                            n[4] = n[4] + h | 0
                        },
                        _doFinalize: function() {
                            var t = this._data
                              , e = t.words
                              , n = 8 * this._nDataBytes
                              , i = 8 * t.sigBytes;
                            return e[i >>> 5] |= 128 << 24 - i % 32,
                            e[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296),
                            e[15 + (i + 64 >>> 9 << 4)] = n,
                            t.sigBytes = 4 * e.length,
                            this._process(),
                            this._hash
                        },
                        clone: function() {
                            var t = n.clone.call(this);
                            return t._hash = this._hash.clone(),
                            t
                        }
                    });
                    t.SHA1 = n._createHelper(r),
                    t.HmacSHA1 = n._createHmacHelper(r)
                }(),
                function(t) {
                    for (var e = s, n = (r = e.lib).WordArray, i = r.Hasher, r = e.algo, a = [], o = [], h = function(t) {
                        return 4294967296 * (t - (0 | t)) | 0
                    }, u = 2, c = 0; 64 > c; ) {
                        var f;
                        t: {
                            f = u;
                            for (var l = t.sqrt(f), d = 2; d <= l; d++)
                                if (!(f % d)) {
                                    f = !1;
                                    break t
                                }
                            f = !0
                        }
                        f && (8 > c && (a[c] = h(t.pow(u, .5))),
                        o[c] = h(t.pow(u, 1 / 3)),
                        c++),
                        u++
                    }
                    var g = [];
                    r = r.SHA256 = i.extend({
                        _doReset: function() {
                            this._hash = new n.init(a.slice(0))
                        },
                        _doProcessBlock: function(t, e) {
                            for (var n = this._hash.words, i = n[0], r = n[1], s = n[2], a = n[3], h = n[4], u = n[5], c = n[6], f = n[7], l = 0; 64 > l; l++) {
                                if (16 > l)
                                    g[l] = 0 | t[e + l];
                                else {
                                    var d = g[l - 15]
                                      , p = g[l - 2];
                                    g[l] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + g[l - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + g[l - 16]
                                }
                                d = f + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & u ^ ~h & c) + o[l] + g[l],
                                p = ((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + (i & r ^ i & s ^ r & s),
                                f = c,
                                c = u,
                                u = h,
                                h = a + d | 0,
                                a = s,
                                s = r,
                                r = i,
                                i = d + p | 0
                            }
                            n[0] = n[0] + i | 0,
                            n[1] = n[1] + r | 0,
                            n[2] = n[2] + s | 0,
                            n[3] = n[3] + a | 0,
                            n[4] = n[4] + h | 0,
                            n[5] = n[5] + u | 0,
                            n[6] = n[6] + c | 0,
                            n[7] = n[7] + f | 0
                        },
                        _doFinalize: function() {
                            var e = this._data
                              , n = e.words
                              , i = 8 * this._nDataBytes
                              , r = 8 * e.sigBytes;
                            return n[r >>> 5] |= 128 << 24 - r % 32,
                            n[14 + (r + 64 >>> 9 << 4)] = t.floor(i / 4294967296),
                            n[15 + (r + 64 >>> 9 << 4)] = i,
                            e.sigBytes = 4 * n.length,
                            this._process(),
                            this._hash
                        },
                        clone: function() {
                            var t = i.clone.call(this);
                            return t._hash = this._hash.clone(),
                            t
                        }
                    });
                    e.SHA256 = i._createHelper(r),
                    e.HmacSHA256 = i._createHmacHelper(r)
                }(Math),
                function() {
                    var t = s
                      , e = t.lib.WordArray
                      , n = (i = t.algo).SHA256
                      , i = i.SHA224 = n.extend({
                        _doReset: function() {
                            this._hash = new e.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                        },
                        _doFinalize: function() {
                            var t = n._doFinalize.call(this);
                            return t.sigBytes -= 4,
                            t
                        }
                    });
                    t.SHA224 = n._createHelper(i),
                    t.HmacSHA224 = n._createHmacHelper(i)
                }(),
                function() {
                    function t() {
                        return i.create.apply(i, arguments)
                    }
                    for (var e = s, n = e.lib.Hasher, i = (a = e.x64).Word, r = a.WordArray, a = e.algo, o = [t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591)], h = [], u = 0; 80 > u; u++)
                        h[u] = t();
                    a = a.SHA512 = n.extend({
                        _doReset: function() {
                            this._hash = new r.init([new i.init(1779033703,4089235720), new i.init(3144134277,2227873595), new i.init(1013904242,4271175723), new i.init(2773480762,1595750129), new i.init(1359893119,2917565137), new i.init(2600822924,725511199), new i.init(528734635,4215389547), new i.init(1541459225,327033209)])
                        },
                        _doProcessBlock: function(t, e) {
                            for (var n = (f = this._hash.words)[0], i = f[1], r = f[2], s = f[3], a = f[4], u = f[5], c = f[6], f = f[7], l = n.high, d = n.low, g = i.high, p = i.low, y = r.high, m = r.low, v = s.high, S = s.low, x = a.high, F = a.low, E = u.high, w = u.low, b = c.high, A = c.low, C = f.high, D = f.low, I = l, T = d, P = g, B = p, H = y, R = m, N = v, j = S, O = x, V = F, L = E, K = w, M = b, k = A, _ = C, U = D, q = 0; 80 > q; q++) {
                                var z = h[q];
                                if (16 > q)
                                    var Y = z.high = 0 | t[e + 2 * q]
                                      , G = z.low = 0 | t[e + 2 * q + 1];
                                else {
                                    Y = ((G = (Y = h[q - 15]).high) >>> 1 | (W = Y.low) << 31) ^ (G >>> 8 | W << 24) ^ G >>> 7;
                                    var W = (W >>> 1 | G << 31) ^ (W >>> 8 | G << 24) ^ (W >>> 7 | G << 25)
                                      , J = ((G = (J = h[q - 2]).high) >>> 19 | (X = J.low) << 13) ^ (G << 3 | X >>> 29) ^ G >>> 6
                                      , X = (X >>> 19 | G << 13) ^ (X << 3 | G >>> 29) ^ (X >>> 6 | G << 26)
                                      , $ = (G = h[q - 7]).high
                                      , Z = (Q = h[q - 16]).high
                                      , Q = Q.low;
                                    Y = (Y = (Y = Y + $ + ((G = W + G.low) >>> 0 < W >>> 0 ? 1 : 0)) + J + ((G = G + X) >>> 0 < X >>> 0 ? 1 : 0)) + Z + ((G = G + Q) >>> 0 < Q >>> 0 ? 1 : 0);
                                    z.high = Y,
                                    z.low = G
                                }
                                $ = O & L ^ ~O & M,
                                Q = V & K ^ ~V & k,
                                z = I & P ^ I & H ^ P & H;
                                var tt = T & B ^ T & R ^ B & R
                                  , et = (W = (I >>> 28 | T << 4) ^ (I << 30 | T >>> 2) ^ (I << 25 | T >>> 7),
                                J = (T >>> 28 | I << 4) ^ (T << 30 | I >>> 2) ^ (T << 25 | I >>> 7),
                                (X = o[q]).high)
                                  , nt = X.low;
                                Z = _ + ((O >>> 14 | V << 18) ^ (O >>> 18 | V << 14) ^ (O << 23 | V >>> 9)) + ((X = U + ((V >>> 14 | O << 18) ^ (V >>> 18 | O << 14) ^ (V << 23 | O >>> 9))) >>> 0 < U >>> 0 ? 1 : 0),
                                _ = M,
                                U = k,
                                M = L,
                                k = K,
                                L = O,
                                K = V,
                                O = N + (Z = (Z = (Z = Z + $ + ((X = X + Q) >>> 0 < Q >>> 0 ? 1 : 0)) + et + ((X = X + nt) >>> 0 < nt >>> 0 ? 1 : 0)) + Y + ((X = X + G) >>> 0 < G >>> 0 ? 1 : 0)) + ((V = j + X | 0) >>> 0 < j >>> 0 ? 1 : 0) | 0,
                                N = H,
                                j = R,
                                H = P,
                                R = B,
                                P = I,
                                B = T,
                                I = Z + (z = W + z + ((G = J + tt) >>> 0 < J >>> 0 ? 1 : 0)) + ((T = X + G | 0) >>> 0 < X >>> 0 ? 1 : 0) | 0
                            }
                            d = n.low = d + T,
                            n.high = l + I + (d >>> 0 < T >>> 0 ? 1 : 0),
                            p = i.low = p + B,
                            i.high = g + P + (p >>> 0 < B >>> 0 ? 1 : 0),
                            m = r.low = m + R,
                            r.high = y + H + (m >>> 0 < R >>> 0 ? 1 : 0),
                            S = s.low = S + j,
                            s.high = v + N + (S >>> 0 < j >>> 0 ? 1 : 0),
                            F = a.low = F + V,
                            a.high = x + O + (F >>> 0 < V >>> 0 ? 1 : 0),
                            w = u.low = w + K,
                            u.high = E + L + (w >>> 0 < K >>> 0 ? 1 : 0),
                            A = c.low = A + k,
                            c.high = b + M + (A >>> 0 < k >>> 0 ? 1 : 0),
                            D = f.low = D + U,
                            f.high = C + _ + (D >>> 0 < U >>> 0 ? 1 : 0)
                        },
                        _doFinalize: function() {
                            var t = this._data
                              , e = t.words
                              , n = 8 * this._nDataBytes
                              , i = 8 * t.sigBytes;
                            return e[i >>> 5] |= 128 << 24 - i % 32,
                            e[30 + (i + 128 >>> 10 << 5)] = Math.floor(n / 4294967296),
                            e[31 + (i + 128 >>> 10 << 5)] = n,
                            t.sigBytes = 4 * e.length,
                            this._process(),
                            this._hash.toX32()
                        },
                        clone: function() {
                            var t = n.clone.call(this);
                            return t._hash = this._hash.clone(),
                            t
                        },
                        blockSize: 32
                    }),
                    e.SHA512 = n._createHelper(a),
                    e.HmacSHA512 = n._createHmacHelper(a)
                }(),
                function() {
                    var t = s
                      , e = (r = t.x64).Word
                      , n = r.WordArray
                      , i = (r = t.algo).SHA512
                      , r = r.SHA384 = i.extend({
                        _doReset: function() {
                            this._hash = new n.init([new e.init(3418070365,3238371032), new e.init(1654270250,914150663), new e.init(2438529370,812702999), new e.init(355462360,4144912697), new e.init(1731405415,4290775857), new e.init(2394180231,1750603025), new e.init(3675008525,1694076839), new e.init(1203062813,3204075428)])
                        },
                        _doFinalize: function() {
                            var t = i._doFinalize.call(this);
                            return t.sigBytes -= 16,
                            t
                        }
                    });
                    t.SHA384 = i._createHelper(r),
                    t.HmacSHA384 = i._createHmacHelper(r)
                }(),
                function() {
                    var t = s
                      , e = (i = t.lib).WordArray
                      , n = i.Hasher
                      , i = t.algo
                      , r = e.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13])
                      , a = e.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11])
                      , o = e.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6])
                      , h = e.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11])
                      , u = e.create([0, 1518500249, 1859775393, 2400959708, 2840853838])
                      , c = e.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
                    i = i.RIPEMD160 = n.extend({
                        _doReset: function() {
                            this._hash = e.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function(t, e) {
                            for (var n = 0; 16 > n; n++) {
                                var i = t[x = e + n];
                                t[x] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                            }
                            var s, f, l, d, g, p, y, m, v, S, x = this._hash.words, F = (i = u.words,
                            c.words), E = r.words, w = a.words, b = o.words, A = h.words;
                            p = s = x[0],
                            y = f = x[1],
                            m = l = x[2],
                            v = d = x[3],
                            S = g = x[4];
                            var C;
                            for (n = 0; 80 > n; n += 1)
                                C = s + t[e + E[n]] | 0,
                                C = 16 > n ? C + ((f ^ l ^ d) + i[0]) : 32 > n ? C + ((f & l | ~f & d) + i[1]) : 48 > n ? C + (((f | ~l) ^ d) + i[2]) : 64 > n ? C + ((f & d | l & ~d) + i[3]) : C + ((f ^ (l | ~d)) + i[4]),
                                C = (C = (C |= 0) << b[n] | C >>> 32 - b[n]) + g | 0,
                                s = g,
                                g = d,
                                d = l << 10 | l >>> 22,
                                l = f,
                                f = C,
                                C = p + t[e + w[n]] | 0,
                                C = 16 > n ? C + ((y ^ (m | ~v)) + F[0]) : 32 > n ? C + ((y & v | m & ~v) + F[1]) : 48 > n ? C + (((y | ~m) ^ v) + F[2]) : 64 > n ? C + ((y & m | ~y & v) + F[3]) : C + ((y ^ m ^ v) + F[4]),
                                C = (C = (C |= 0) << A[n] | C >>> 32 - A[n]) + S | 0,
                                p = S,
                                S = v,
                                v = m << 10 | m >>> 22,
                                m = y,
                                y = C;
                            C = x[1] + l + v | 0,
                            x[1] = x[2] + d + S | 0,
                            x[2] = x[3] + g + p | 0,
                            x[3] = x[4] + s + y | 0,
                            x[4] = x[0] + f + m | 0,
                            x[0] = C
                        },
                        _doFinalize: function() {
                            var t = this._data
                              , e = t.words
                              , n = 8 * this._nDataBytes
                              , i = 8 * t.sigBytes;
                            for (e[i >>> 5] |= 128 << 24 - i % 32,
                            e[14 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                            t.sigBytes = 4 * (e.length + 1),
                            this._process(),
                            e = (t = this._hash).words,
                            n = 0; 5 > n; n++)
                                i = e[n],
                                e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                            return t
                        },
                        clone: function() {
                            var t = n.clone.call(this);
                            return t._hash = this._hash.clone(),
                            t
                        }
                    });
                    t.RIPEMD160 = n._createHelper(i),
                    t.HmacRIPEMD160 = n._createHmacHelper(i)
                }(Math),
                function() {
                    var t = s
                      , e = t.enc.Utf8;
                    t.algo.HMAC = t.lib.Base.extend({
                        init: function(t, n) {
                            t = this._hasher = new t.init,
                            "string" == typeof n && (n = e.parse(n));
                            var i = t.blockSize
                              , r = 4 * i;
                            n.sigBytes > r && (n = t.finalize(n)),
                            n.clamp();
                            for (var s = this._oKey = n.clone(), a = this._iKey = n.clone(), o = s.words, h = a.words, u = 0; u < i; u++)
                                o[u] ^= 1549556828,
                                h[u] ^= 909522486;
                            s.sigBytes = a.sigBytes = r,
                            this.reset()
                        },
                        reset: function() {
                            var t = this._hasher;
                            t.reset(),
                            t.update(this._iKey)
                        },
                        update: function(t) {
                            return this._hasher.update(t),
                            this
                        },
                        finalize: function(t) {
                            var e = this._hasher;
                            return t = e.finalize(t),
                            e.reset(),
                            e.finalize(this._oKey.clone().concat(t))
                        }
                    })
                }(),
                function() {
                    var t, e = s, n = (t = e.lib).Base, i = t.WordArray, r = (t = e.algo).HMAC, a = t.PBKDF2 = n.extend({
                        cfg: n.extend({
                            keySize: 4,
                            hasher: t.SHA1,
                            iterations: 1
                        }),
                        init: function(t) {
                            this.cfg = this.cfg.extend(t)
                        },
                        compute: function(t, e) {
                            var n = this.cfg
                              , s = r.create(n.hasher, t)
                              , a = i.create()
                              , o = i.create([1])
                              , h = a.words
                              , u = o.words
                              , c = n.keySize;
                            for (n = n.iterations; h.length < c; ) {
                                var f = s.update(e).finalize(o);
                                s.reset();
                                for (var l = f.words, d = l.length, g = f, p = 1; p < n; p++) {
                                    g = s.finalize(g),
                                    s.reset();
                                    for (var y = g.words, m = 0; m < d; m++)
                                        l[m] ^= y[m]
                                }
                                a.concat(f),
                                u[0]++
                            }
                            return a.sigBytes = 4 * c,
                            a
                        }
                    });
                    e.PBKDF2 = function(t, e, n) {
                        return a.create(n).compute(t, e)
                    }
                }();
                var a, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                function h(t) {
                    var e, n, i = "";
                    for (e = 0; e + 3 <= t.length; e += 3)
                        n = parseInt(t.substring(e, e + 3), 16),
                        i += o.charAt(n >> 6) + o.charAt(63 & n);
                    for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16),
                    i += o.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16),
                    i += o.charAt(n >> 2) + o.charAt((3 & n) << 4)),
                    "="; (3 & i.length) > 0; )
                        i += "=";
                    return i
                }
                function u(t) {
                    var e, n, i, r = "", s = 0;
                    for (e = 0; e < t.length && "=" != t.charAt(e); ++e)
                        (i = o.indexOf(t.charAt(e))) < 0 || (0 == s ? (r += S(i >> 2),
                        n = 3 & i,
                        s = 1) : 1 == s ? (r += S(n << 2 | i >> 4),
                        n = 15 & i,
                        s = 2) : 2 == s ? (r += S(n),
                        r += S(i >> 2),
                        n = 3 & i,
                        s = 3) : (r += S(n << 2 | i >> 4),
                        r += S(15 & i),
                        s = 0));
                    return 1 == s && (r += S(n << 2)),
                    r
                }
                function c(t) {
                    var e, n = u(t), i = new Array;
                    for (e = 0; 2 * e < n.length; ++e)
                        i[e] = parseInt(n.substring(2 * e, 2 * e + 2), 16);
                    return i
                }
                function f(t, e, n) {
                    null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                }
                function l() {
                    return new f(null)
                }
                "Microsoft Internet Explorer" == n.appName ? (f.prototype.am = function d(t, e, n, i, r, s) {
                    for (var a = 32767 & e, o = e >> 15; --s >= 0; ) {
                        var h = 32767 & this[t]
                          , u = this[t++] >> 15
                          , c = o * h + u * a;
                        r = ((h = a * h + ((32767 & c) << 15) + n[i] + (1073741823 & r)) >>> 30) + (c >>> 15) + o * u + (r >>> 30),
                        n[i++] = 1073741823 & h
                    }
                    return r
                }
                ,
                a = 30) : "Netscape" != n.appName ? (f.prototype.am = function g(t, e, n, i, r, s) {
                    for (; --s >= 0; ) {
                        var a = e * this[t++] + n[i] + r;
                        r = Math.floor(a / 67108864),
                        n[i++] = 67108863 & a
                    }
                    return r
                }
                ,
                a = 26) : (f.prototype.am = function p(t, e, n, i, r, s) {
                    for (var a = 16383 & e, o = e >> 14; --s >= 0; ) {
                        var h = 16383 & this[t]
                          , u = this[t++] >> 14
                          , c = o * h + u * a;
                        r = ((h = a * h + ((16383 & c) << 14) + n[i] + r) >> 28) + (c >> 14) + o * u,
                        n[i++] = 268435455 & h
                    }
                    return r
                }
                ,
                a = 28),
                f.prototype.DB = a,
                f.prototype.DM = (1 << a) - 1,
                f.prototype.DV = 1 << a;
                f.prototype.FV = Math.pow(2, 52),
                f.prototype.F1 = 52 - a,
                f.prototype.F2 = 2 * a - 52;
                var y, m, v = new Array;
                for (y = "0".charCodeAt(0),
                m = 0; m <= 9; ++m)
                    v[y++] = m;
                for (y = "a".charCodeAt(0),
                m = 10; m < 36; ++m)
                    v[y++] = m;
                for (y = "A".charCodeAt(0),
                m = 10; m < 36; ++m)
                    v[y++] = m;
                function S(t) {
                    return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
                }
                function x(t, e) {
                    var n = v[t.charCodeAt(e)];
                    return null == n ? -1 : n
                }
                function F(t) {
                    var e = l();
                    return e.fromInt(t),
                    e
                }
                function E(t) {
                    var e, n = 1;
                    return 0 != (e = t >>> 16) && (t = e,
                    n += 16),
                    0 != (e = t >> 8) && (t = e,
                    n += 8),
                    0 != (e = t >> 4) && (t = e,
                    n += 4),
                    0 != (e = t >> 2) && (t = e,
                    n += 2),
                    0 != (e = t >> 1) && (t = e,
                    n += 1),
                    n
                }
                function w(t) {
                    this.m = t
                }
                function b(t) {
                    this.m = t,
                    this.mp = t.invDigit(),
                    this.mpl = 32767 & this.mp,
                    this.mph = this.mp >> 15,
                    this.um = (1 << t.DB - 15) - 1,
                    this.mt2 = 2 * t.t
                }
                function A(t, e) {
                    return t & e
                }
                function C(t, e) {
                    return t | e
                }
                function D(t, e) {
                    return t ^ e
                }
                function I(t, e) {
                    return t & ~e
                }
                function T(t) {
                    if (0 == t)
                        return -1;
                    var e = 0;
                    return 0 == (65535 & t) && (t >>= 16,
                    e += 16),
                    0 == (255 & t) && (t >>= 8,
                    e += 8),
                    0 == (15 & t) && (t >>= 4,
                    e += 4),
                    0 == (3 & t) && (t >>= 2,
                    e += 2),
                    0 == (1 & t) && ++e,
                    e
                }
                function P(t) {
                    for (var e = 0; 0 != t; )
                        t &= t - 1,
                        ++e;
                    return e
                }
                function B() {}
                function H(t) {
                    return t
                }
                function R(t) {
                    this.r2 = l(),
                    this.q3 = l(),
                    f.ONE.dlShiftTo(2 * t.t, this.r2),
                    this.mu = this.r2.divide(t),
                    this.m = t
                }
                w.prototype.convert = function N(t) {
                    return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                }
                ,
                w.prototype.revert = function j(t) {
                    return t
                }
                ,
                w.prototype.reduce = function O(t) {
                    t.divRemTo(this.m, null, t)
                }
                ,
                w.prototype.mulTo = function V(t, e, n) {
                    t.multiplyTo(e, n),
                    this.reduce(n)
                }
                ,
                w.prototype.sqrTo = function L(t, e) {
                    t.squareTo(e),
                    this.reduce(e)
                }
                ,
                b.prototype.convert = function K(t) {
                    var e = l();
                    return t.abs().dlShiftTo(this.m.t, e),
                    e.divRemTo(this.m, null, e),
                    t.s < 0 && e.compareTo(f.ZERO) > 0 && this.m.subTo(e, e),
                    e
                }
                ,
                b.prototype.revert = function M(t) {
                    var e = l();
                    return t.copyTo(e),
                    this.reduce(e),
                    e
                }
                ,
                b.prototype.reduce = function k(t) {
                    for (; t.t <= this.mt2; )
                        t[t.t++] = 0;
                    for (var e = 0; e < this.m.t; ++e) {
                        var n = 32767 & t[e]
                          , i = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                        for (t[n = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[n] >= t.DV; )
                            t[n] -= t.DV,
                            t[++n]++
                    }
                    t.clamp(),
                    t.drShiftTo(this.m.t, t),
                    t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                }
                ,
                b.prototype.mulTo = function _(t, e, n) {
                    t.multiplyTo(e, n),
                    this.reduce(n)
                }
                ,
                b.prototype.sqrTo = function U(t, e) {
                    t.squareTo(e),
                    this.reduce(e)
                }
                ,
                f.prototype.copyTo = function q(t) {
                    for (var e = this.t - 1; e >= 0; --e)
                        t[e] = this[e];
                    t.t = this.t,
                    t.s = this.s
                }
                ,
                f.prototype.fromInt = function z(t) {
                    this.t = 1,
                    this.s = t < 0 ? -1 : 0,
                    t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                }
                ,
                f.prototype.fromString = function Y(t, e) {
                    var n;
                    if (16 == e)
                        n = 4;
                    else if (8 == e)
                        n = 3;
                    else if (256 == e)
                        n = 8;
                    else if (2 == e)
                        n = 1;
                    else if (32 == e)
                        n = 5;
                    else {
                        if (4 != e)
                            return void this.fromRadix(t, e);
                        n = 2
                    }
                    this.t = 0,
                    this.s = 0;
                    for (var i = t.length, r = !1, s = 0; --i >= 0; ) {
                        var a = 8 == n ? 255 & t[i] : x(t, i);
                        a < 0 ? "-" == t.charAt(i) && (r = !0) : (r = !1,
                        0 == s ? this[this.t++] = a : s + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s,
                        this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s,
                        (s += n) >= this.DB && (s -= this.DB))
                    }
                    8 == n && 0 != (128 & t[0]) && (this.s = -1,
                    s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)),
                    this.clamp(),
                    r && f.ZERO.subTo(this, this)
                }
                ,
                f.prototype.clamp = function G() {
                    for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
                        --this.t
                }
                ,
                f.prototype.dlShiftTo = function W(t, e) {
                    var n;
                    for (n = this.t - 1; n >= 0; --n)
                        e[n + t] = this[n];
                    for (n = t - 1; n >= 0; --n)
                        e[n] = 0;
                    e.t = this.t + t,
                    e.s = this.s
                }
                ,
                f.prototype.drShiftTo = function J(t, e) {
                    for (var n = t; n < this.t; ++n)
                        e[n - t] = this[n];
                    e.t = Math.max(this.t - t, 0),
                    e.s = this.s
                }
                ,
                f.prototype.lShiftTo = function X(t, e) {
                    var n, i = t % this.DB, r = this.DB - i, s = (1 << r) - 1, a = Math.floor(t / this.DB), o = this.s << i & this.DM;
                    for (n = this.t - 1; n >= 0; --n)
                        e[n + a + 1] = this[n] >> r | o,
                        o = (this[n] & s) << i;
                    for (n = a - 1; n >= 0; --n)
                        e[n] = 0;
                    e[a] = o,
                    e.t = this.t + a + 1,
                    e.s = this.s,
                    e.clamp()
                }
                ,
                f.prototype.rShiftTo = function $(t, e) {
                    e.s = this.s;
                    var n = Math.floor(t / this.DB);
                    if (n >= this.t)
                        e.t = 0;
                    else {
                        var i = t % this.DB
                          , r = this.DB - i
                          , s = (1 << i) - 1;
                        e[0] = this[n] >> i;
                        for (var a = n + 1; a < this.t; ++a)
                            e[a - n - 1] |= (this[a] & s) << r,
                            e[a - n] = this[a] >> i;
                        i > 0 && (e[this.t - n - 1] |= (this.s & s) << r),
                        e.t = this.t - n,
                        e.clamp()
                    }
                }
                ,
                f.prototype.subTo = function Z(t, e) {
                    for (var n = 0, i = 0, r = Math.min(t.t, this.t); n < r; )
                        i += this[n] - t[n],
                        e[n++] = i & this.DM,
                        i >>= this.DB;
                    if (t.t < this.t) {
                        for (i -= t.s; n < this.t; )
                            i += this[n],
                            e[n++] = i & this.DM,
                            i >>= this.DB;
                        i += this.s
                    } else {
                        for (i += this.s; n < t.t; )
                            i -= t[n],
                            e[n++] = i & this.DM,
                            i >>= this.DB;
                        i -= t.s
                    }
                    e.s = i < 0 ? -1 : 0,
                    i < -1 ? e[n++] = this.DV + i : i > 0 && (e[n++] = i),
                    e.t = n,
                    e.clamp()
                }
                ,
                f.prototype.multiplyTo = function Q(t, e) {
                    var n = this.abs()
                      , i = t.abs()
                      , r = n.t;
                    for (e.t = r + i.t; --r >= 0; )
                        e[r] = 0;
                    for (r = 0; r < i.t; ++r)
                        e[r + n.t] = n.am(0, i[r], e, r, 0, n.t);
                    e.s = 0,
                    e.clamp(),
                    this.s != t.s && f.ZERO.subTo(e, e)
                }
                ,
                f.prototype.squareTo = function tt(t) {
                    for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0; )
                        t[n] = 0;
                    for (n = 0; n < e.t - 1; ++n) {
                        var i = e.am(n, e[n], t, 2 * n, 0, 1);
                        (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, i, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                        t[n + e.t + 1] = 1)
                    }
                    t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                    t.s = 0,
                    t.clamp()
                }
                ,
                f.prototype.divRemTo = function et(t, e, n) {
                    var i = t.abs();
                    if (!(i.t <= 0)) {
                        var r = this.abs();
                        if (r.t < i.t)
                            return null != e && e.fromInt(0),
                            void (null != n && this.copyTo(n));
                        null == n && (n = l());
                        var s = l()
                          , a = this.s
                          , o = t.s
                          , h = this.DB - E(i[i.t - 1]);
                        h > 0 ? (i.lShiftTo(h, s),
                        r.lShiftTo(h, n)) : (i.copyTo(s),
                        r.copyTo(n));
                        var u = s.t
                          , c = s[u - 1];
                        if (0 != c) {
                            var d = c * (1 << this.F1) + (u > 1 ? s[u - 2] >> this.F2 : 0)
                              , g = this.FV / d
                              , p = (1 << this.F1) / d
                              , y = 1 << this.F2
                              , m = n.t
                              , v = m - u
                              , S = null == e ? l() : e;
                            for (s.dlShiftTo(v, S),
                            n.compareTo(S) >= 0 && (n[n.t++] = 1,
                            n.subTo(S, n)),
                            f.ONE.dlShiftTo(u, S),
                            S.subTo(s, s); s.t < u; )
                                s[s.t++] = 0;
                            for (; --v >= 0; ) {
                                var x = n[--m] == c ? this.DM : Math.floor(n[m] * g + (n[m - 1] + y) * p);
                                if ((n[m] += s.am(0, x, n, v, 0, u)) < x)
                                    for (s.dlShiftTo(v, S),
                                    n.subTo(S, n); n[m] < --x; )
                                        n.subTo(S, n)
                            }
                            null != e && (n.drShiftTo(u, e),
                            a != o && f.ZERO.subTo(e, e)),
                            n.t = u,
                            n.clamp(),
                            h > 0 && n.rShiftTo(h, n),
                            a < 0 && f.ZERO.subTo(n, n)
                        }
                    }
                }
                ,
                f.prototype.invDigit = function nt() {
                    if (this.t < 1)
                        return 0;
                    var t = this[0];
                    if (0 == (1 & t))
                        return 0;
                    var e = 3 & t;
                    return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
                }
                ,
                f.prototype.isEven = function it() {
                    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                }
                ,
                f.prototype.exp = function rt(t, e) {
                    if (t > 4294967295 || t < 1)
                        return f.ONE;
                    var n = l()
                      , i = l()
                      , r = e.convert(this)
                      , s = E(t) - 1;
                    for (r.copyTo(n); --s >= 0; )
                        if (e.sqrTo(n, i),
                        (t & 1 << s) > 0)
                            e.mulTo(i, r, n);
                        else {
                            var a = n;
                            n = i,
                            i = a
                        }
                    return e.revert(n)
                }
                ,
                f.prototype.toString = function st(t) {
                    if (this.s < 0)
                        return "-" + this.negate().toString(t);
                    var e;
                    if (16 == t)
                        e = 4;
                    else if (8 == t)
                        e = 3;
                    else if (2 == t)
                        e = 1;
                    else if (32 == t)
                        e = 5;
                    else {
                        if (4 != t)
                            return this.toRadix(t);
                        e = 2
                    }
                    var n, i = (1 << e) - 1, r = !1, s = "", a = this.t, o = this.DB - a * this.DB % e;
                    if (a-- > 0)
                        for (o < this.DB && (n = this[a] >> o) > 0 && (r = !0,
                        s = S(n)); a >= 0; )
                            o < e ? (n = (this[a] & (1 << o) - 1) << e - o,
                            n |= this[--a] >> (o += this.DB - e)) : (n = this[a] >> (o -= e) & i,
                            o <= 0 && (o += this.DB,
                            --a)),
                            n > 0 && (r = !0),
                            r && (s += S(n));
                    return r ? s : "0"
                }
                ,
                f.prototype.negate = function at() {
                    var t = l();
                    return f.ZERO.subTo(this, t),
                    t
                }
                ,
                f.prototype.abs = function ot() {
                    return this.s < 0 ? this.negate() : this
                }
                ,
                f.prototype.compareTo = function ht(t) {
                    var e = this.s - t.s;
                    if (0 != e)
                        return e;
                    var n = this.t;
                    if (0 != (e = n - t.t))
                        return this.s < 0 ? -e : e;
                    for (; --n >= 0; )
                        if (0 != (e = this[n] - t[n]))
                            return e;
                    return 0
                }
                ,
                f.prototype.bitLength = function ut() {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + E(this[this.t - 1] ^ this.s & this.DM)
                }
                ,
                f.prototype.mod = function ct(t) {
                    var e = l();
                    return this.abs().divRemTo(t, null, e),
                    this.s < 0 && e.compareTo(f.ZERO) > 0 && t.subTo(e, e),
                    e
                }
                ,
                f.prototype.modPowInt = function ft(t, e) {
                    var n;
                    return n = t < 256 || e.isEven() ? new w(e) : new b(e),
                    this.exp(t, n)
                }
                ,
                f.ZERO = F(0),
                f.ONE = F(1),
                B.prototype.convert = H,
                B.prototype.revert = H,
                B.prototype.mulTo = function lt(t, e, n) {
                    t.multiplyTo(e, n)
                }
                ,
                B.prototype.sqrTo = function dt(t, e) {
                    t.squareTo(e)
                }
                ,
                R.prototype.convert = function gt(t) {
                    if (t.s < 0 || t.t > 2 * this.m.t)
                        return t.mod(this.m);
                    if (t.compareTo(this.m) < 0)
                        return t;
                    var e = l();
                    return t.copyTo(e),
                    this.reduce(e),
                    e
                }
                ,
                R.prototype.revert = function pt(t) {
                    return t
                }
                ,
                R.prototype.reduce = function yt(t) {
                    for (t.drShiftTo(this.m.t - 1, this.r2),
                    t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                    t.clamp()),
                    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
                        t.dAddOffset(1, this.m.t + 1);
                    for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
                        t.subTo(this.m, t)
                }
                ,
                R.prototype.mulTo = function mt(t, e, n) {
                    t.multiplyTo(e, n),
                    this.reduce(n)
                }
                ,
                R.prototype.sqrTo = function vt(t, e) {
                    t.squareTo(e),
                    this.reduce(e)
                }
                ;
                var St = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
                  , xt = (1 << 26) / St[St.length - 1];
                function Ft() {
                    this.i = 0,
                    this.j = 0,
                    this.S = new Array
                }
                f.prototype.chunkSize = function Et(t) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(t))
                }
                ,
                f.prototype.toRadix = function wt(t) {
                    if (null == t && (t = 10),
                    0 == this.signum() || t < 2 || t > 36)
                        return "0";
                    var e = this.chunkSize(t)
                      , n = Math.pow(t, e)
                      , i = F(n)
                      , r = l()
                      , s = l()
                      , a = "";
                    for (this.divRemTo(i, r, s); r.signum() > 0; )
                        a = (n + s.intValue()).toString(t).substr(1) + a,
                        r.divRemTo(i, r, s);
                    return s.intValue().toString(t) + a
                }
                ,
                f.prototype.fromRadix = function bt(t, e) {
                    this.fromInt(0),
                    null == e && (e = 10);
                    for (var n = this.chunkSize(e), i = Math.pow(e, n), r = !1, s = 0, a = 0, o = 0; o < t.length; ++o) {
                        var h = x(t, o);
                        h < 0 ? "-" == t.charAt(o) && 0 == this.signum() && (r = !0) : (a = e * a + h,
                        ++s >= n && (this.dMultiply(i),
                        this.dAddOffset(a, 0),
                        s = 0,
                        a = 0))
                    }
                    s > 0 && (this.dMultiply(Math.pow(e, s)),
                    this.dAddOffset(a, 0)),
                    r && f.ZERO.subTo(this, this)
                }
                ,
                f.prototype.fromNumber = function At(t, e, n) {
                    if ("number" == typeof e)
                        if (t < 2)
                            this.fromInt(1);
                        else
                            for (this.fromNumber(t, n),
                            this.testBit(t - 1) || this.bitwiseTo(f.ONE.shiftLeft(t - 1), C, this),
                            this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); )
                                this.dAddOffset(2, 0),
                                this.bitLength() > t && this.subTo(f.ONE.shiftLeft(t - 1), this);
                    else {
                        var i = new Array
                          , r = 7 & t;
                        i.length = 1 + (t >> 3),
                        e.nextBytes(i),
                        r > 0 ? i[0] &= (1 << r) - 1 : i[0] = 0,
                        this.fromString(i, 256)
                    }
                }
                ,
                f.prototype.bitwiseTo = function Ct(t, e, n) {
                    var i, r, s = Math.min(t.t, this.t);
                    for (i = 0; i < s; ++i)
                        n[i] = e(this[i], t[i]);
                    if (t.t < this.t) {
                        for (r = t.s & this.DM,
                        i = s; i < this.t; ++i)
                            n[i] = e(this[i], r);
                        n.t = this.t
                    } else {
                        for (r = this.s & this.DM,
                        i = s; i < t.t; ++i)
                            n[i] = e(r, t[i]);
                        n.t = t.t
                    }
                    n.s = e(this.s, t.s),
                    n.clamp()
                }
                ,
                f.prototype.changeBit = function Dt(t, e) {
                    var n = f.ONE.shiftLeft(t);
                    return this.bitwiseTo(n, e, n),
                    n
                }
                ,
                f.prototype.addTo = function It(t, e) {
                    for (var n = 0, i = 0, r = Math.min(t.t, this.t); n < r; )
                        i += this[n] + t[n],
                        e[n++] = i & this.DM,
                        i >>= this.DB;
                    if (t.t < this.t) {
                        for (i += t.s; n < this.t; )
                            i += this[n],
                            e[n++] = i & this.DM,
                            i >>= this.DB;
                        i += this.s
                    } else {
                        for (i += this.s; n < t.t; )
                            i += t[n],
                            e[n++] = i & this.DM,
                            i >>= this.DB;
                        i += t.s
                    }
                    e.s = i < 0 ? -1 : 0,
                    i > 0 ? e[n++] = i : i < -1 && (e[n++] = this.DV + i),
                    e.t = n,
                    e.clamp()
                }
                ,
                f.prototype.dMultiply = function Tt(t) {
                    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                    ++this.t,
                    this.clamp()
                }
                ,
                f.prototype.dAddOffset = function Pt(t, e) {
                    if (0 != t) {
                        for (; this.t <= e; )
                            this[this.t++] = 0;
                        for (this[e] += t; this[e] >= this.DV; )
                            this[e] -= this.DV,
                            ++e >= this.t && (this[this.t++] = 0),
                            ++this[e]
                    }
                }
                ,
                f.prototype.multiplyLowerTo = function Bt(t, e, n) {
                    var i, r = Math.min(this.t + t.t, e);
                    for (n.s = 0,
                    n.t = r; r > 0; )
                        n[--r] = 0;
                    for (i = n.t - this.t; r < i; ++r)
                        n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
                    for (i = Math.min(t.t, e); r < i; ++r)
                        this.am(0, t[r], n, r, 0, e - r);
                    n.clamp()
                }
                ,
                f.prototype.multiplyUpperTo = function Ht(t, e, n) {
                    --e;
                    var i = n.t = this.t + t.t - e;
                    for (n.s = 0; --i >= 0; )
                        n[i] = 0;
                    for (i = Math.max(e - this.t, 0); i < t.t; ++i)
                        n[this.t + i - e] = this.am(e - i, t[i], n, 0, 0, this.t + i - e);
                    n.clamp(),
                    n.drShiftTo(1, n)
                }
                ,
                f.prototype.modInt = function Rt(t) {
                    if (t <= 0)
                        return 0;
                    var e = this.DV % t
                      , n = this.s < 0 ? t - 1 : 0;
                    if (this.t > 0)
                        if (0 == e)
                            n = this[0] % t;
                        else
                            for (var i = this.t - 1; i >= 0; --i)
                                n = (e * n + this[i]) % t;
                    return n
                }
                ,
                f.prototype.millerRabin = function Nt(t) {
                    var e = this.subtract(f.ONE)
                      , n = e.getLowestSetBit();
                    if (n <= 0)
                        return !1;
                    var i = e.shiftRight(n);
                    (t = t + 1 >> 1) > St.length && (t = St.length);
                    for (var r = l(), s = 0; s < t; ++s) {
                        r.fromInt(St[Math.floor(Math.random() * St.length)]);
                        var a = r.modPow(i, this);
                        if (0 != a.compareTo(f.ONE) && 0 != a.compareTo(e)) {
                            for (var o = 1; o++ < n && 0 != a.compareTo(e); )
                                if (0 == (a = a.modPowInt(2, this)).compareTo(f.ONE))
                                    return !1;
                            if (0 != a.compareTo(e))
                                return !1
                        }
                    }
                    return !0
                }
                ,
                f.prototype.clone = function jt() {
                    var t = l();
                    return this.copyTo(t),
                    t
                }
                ,
                f.prototype.intValue = function Ot() {
                    if (this.s < 0) {
                        if (1 == this.t)
                            return this[0] - this.DV;
                        if (0 == this.t)
                            return -1
                    } else {
                        if (1 == this.t)
                            return this[0];
                        if (0 == this.t)
                            return 0
                    }
                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                }
                ,
                f.prototype.byteValue = function Vt() {
                    return 0 == this.t ? this.s : this[0] << 24 >> 24
                }
                ,
                f.prototype.shortValue = function Lt() {
                    return 0 == this.t ? this.s : this[0] << 16 >> 16
                }
                ,
                f.prototype.signum = function Kt() {
                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                }
                ,
                f.prototype.toByteArray = function Mt() {
                    var t = this.t
                      , e = new Array;
                    e[0] = this.s;
                    var n, i = this.DB - t * this.DB % 8, r = 0;
                    if (t-- > 0)
                        for (i < this.DB && (n = this[t] >> i) != (this.s & this.DM) >> i && (e[r++] = n | this.s << this.DB - i); t >= 0; )
                            i < 8 ? (n = (this[t] & (1 << i) - 1) << 8 - i,
                            n |= this[--t] >> (i += this.DB - 8)) : (n = this[t] >> (i -= 8) & 255,
                            i <= 0 && (i += this.DB,
                            --t)),
                            0 != (128 & n) && (n |= -256),
                            0 == r && (128 & this.s) != (128 & n) && ++r,
                            (r > 0 || n != this.s) && (e[r++] = n);
                    return e
                }
                ,
                f.prototype.equals = function kt(t) {
                    return 0 == this.compareTo(t)
                }
                ,
                f.prototype.min = function _t(t) {
                    return this.compareTo(t) < 0 ? this : t
                }
                ,
                f.prototype.max = function Ut(t) {
                    return this.compareTo(t) > 0 ? this : t
                }
                ,
                f.prototype.and = function qt(t) {
                    var e = l();
                    return this.bitwiseTo(t, A, e),
                    e
                }
                ,
                f.prototype.or = function zt(t) {
                    var e = l();
                    return this.bitwiseTo(t, C, e),
                    e
                }
                ,
                f.prototype.xor = function Yt(t) {
                    var e = l();
                    return this.bitwiseTo(t, D, e),
                    e
                }
                ,
                f.prototype.andNot = function Gt(t) {
                    var e = l();
                    return this.bitwiseTo(t, I, e),
                    e
                }
                ,
                f.prototype.not = function Wt() {
                    for (var t = l(), e = 0; e < this.t; ++e)
                        t[e] = this.DM & ~this[e];
                    return t.t = this.t,
                    t.s = ~this.s,
                    t
                }
                ,
                f.prototype.shiftLeft = function Jt(t) {
                    var e = l();
                    return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                    e
                }
                ,
                f.prototype.shiftRight = function Xt(t) {
                    var e = l();
                    return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                    e
                }
                ,
                f.prototype.getLowestSetBit = function $t() {
                    for (var t = 0; t < this.t; ++t)
                        if (0 != this[t])
                            return t * this.DB + T(this[t]);
                    return this.s < 0 ? this.t * this.DB : -1
                }
                ,
                f.prototype.bitCount = function Zt() {
                    for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
                        t += P(this[n] ^ e);
                    return t
                }
                ,
                f.prototype.testBit = function Qt(t) {
                    var e = Math.floor(t / this.DB);
                    return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                }
                ,
                f.prototype.setBit = function te(t) {
                    return this.changeBit(t, C)
                }
                ,
                f.prototype.clearBit = function ee(t) {
                    return this.changeBit(t, I)
                }
                ,
                f.prototype.flipBit = function ne(t) {
                    return this.changeBit(t, D)
                }
                ,
                f.prototype.add = function ie(t) {
                    var e = l();
                    return this.addTo(t, e),
                    e
                }
                ,
                f.prototype.subtract = function re(t) {
                    var e = l();
                    return this.subTo(t, e),
                    e
                }
                ,
                f.prototype.multiply = function se(t) {
                    var e = l();
                    return this.multiplyTo(t, e),
                    e
                }
                ,
                f.prototype.divide = function ae(t) {
                    var e = l();
                    return this.divRemTo(t, e, null),
                    e
                }
                ,
                f.prototype.remainder = function oe(t) {
                    var e = l();
                    return this.divRemTo(t, null, e),
                    e
                }
                ,
                f.prototype.divideAndRemainder = function he(t) {
                    var e = l()
                      , n = l();
                    return this.divRemTo(t, e, n),
                    new Array(e,n)
                }
                ,
                f.prototype.modPow = function ue(t, e) {
                    var n, i, r = t.bitLength(), s = F(1);
                    if (r <= 0)
                        return s;
                    n = r < 18 ? 1 : r < 48 ? 3 : r < 144 ? 4 : r < 768 ? 5 : 6,
                    i = r < 8 ? new w(e) : e.isEven() ? new R(e) : new b(e);
                    var a = new Array
                      , o = 3
                      , h = n - 1
                      , u = (1 << n) - 1;
                    if (a[1] = i.convert(this),
                    n > 1) {
                        var c = l();
                        for (i.sqrTo(a[1], c); o <= u; )
                            a[o] = l(),
                            i.mulTo(c, a[o - 2], a[o]),
                            o += 2
                    }
                    var f, d, g = t.t - 1, p = !0, y = l();
                    for (r = E(t[g]) - 1; g >= 0; ) {
                        for (r >= h ? f = t[g] >> r - h & u : (f = (t[g] & (1 << r + 1) - 1) << h - r,
                        g > 0 && (f |= t[g - 1] >> this.DB + r - h)),
                        o = n; 0 == (1 & f); )
                            f >>= 1,
                            --o;
                        if ((r -= o) < 0 && (r += this.DB,
                        --g),
                        p)
                            a[f].copyTo(s),
                            p = !1;
                        else {
                            for (; o > 1; )
                                i.sqrTo(s, y),
                                i.sqrTo(y, s),
                                o -= 2;
                            o > 0 ? i.sqrTo(s, y) : (d = s,
                            s = y,
                            y = d),
                            i.mulTo(y, a[f], s)
                        }
                        for (; g >= 0 && 0 == (t[g] & 1 << r); )
                            i.sqrTo(s, y),
                            d = s,
                            s = y,
                            y = d,
                            --r < 0 && (r = this.DB - 1,
                            --g)
                    }
                    return i.revert(s)
                }
                ,
                f.prototype.modInverse = function ce(t) {
                    var e = t.isEven();
                    if (this.isEven() && e || 0 == t.signum())
                        return f.ZERO;
                    for (var n = t.clone(), i = this.clone(), r = F(1), s = F(0), a = F(0), o = F(1); 0 != n.signum(); ) {
                        for (; n.isEven(); )
                            n.rShiftTo(1, n),
                            e ? (r.isEven() && s.isEven() || (r.addTo(this, r),
                            s.subTo(t, s)),
                            r.rShiftTo(1, r)) : s.isEven() || s.subTo(t, s),
                            s.rShiftTo(1, s);
                        for (; i.isEven(); )
                            i.rShiftTo(1, i),
                            e ? (a.isEven() && o.isEven() || (a.addTo(this, a),
                            o.subTo(t, o)),
                            a.rShiftTo(1, a)) : o.isEven() || o.subTo(t, o),
                            o.rShiftTo(1, o);
                        n.compareTo(i) >= 0 ? (n.subTo(i, n),
                        e && r.subTo(a, r),
                        s.subTo(o, s)) : (i.subTo(n, i),
                        e && a.subTo(r, a),
                        o.subTo(s, o))
                    }
                    return 0 != i.compareTo(f.ONE) ? f.ZERO : o.compareTo(t) >= 0 ? o.subtract(t) : o.signum() < 0 ? (o.addTo(t, o),
                    o.signum() < 0 ? o.add(t) : o) : o
                }
                ,
                f.prototype.pow = function fe(t) {
                    return this.exp(t, new B)
                }
                ,
                f.prototype.gcd = function le(t) {
                    var e = this.s < 0 ? this.negate() : this.clone()
                      , n = t.s < 0 ? t.negate() : t.clone();
                    if (e.compareTo(n) < 0) {
                        var i = e;
                        e = n,
                        n = i
                    }
                    var r = e.getLowestSetBit()
                      , s = n.getLowestSetBit();
                    if (s < 0)
                        return e;
                    for (r < s && (s = r),
                    s > 0 && (e.rShiftTo(s, e),
                    n.rShiftTo(s, n)); e.signum() > 0; )
                        (r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e),
                        (r = n.getLowestSetBit()) > 0 && n.rShiftTo(r, n),
                        e.compareTo(n) >= 0 ? (e.subTo(n, e),
                        e.rShiftTo(1, e)) : (n.subTo(e, n),
                        n.rShiftTo(1, n));
                    return s > 0 && n.lShiftTo(s, n),
                    n
                }
                ,
                f.prototype.isProbablePrime = function de(t) {
                    var e, n = this.abs();
                    if (1 == n.t && n[0] <= St[St.length - 1]) {
                        for (e = 0; e < St.length; ++e)
                            if (n[0] == St[e])
                                return !0;
                        return !1
                    }
                    if (n.isEven())
                        return !1;
                    for (e = 1; e < St.length; ) {
                        for (var i = St[e], r = e + 1; r < St.length && i < xt; )
                            i *= St[r++];
                        for (i = n.modInt(i); e < r; )
                            if (i % St[e++] == 0)
                                return !1
                    }
                    return n.millerRabin(t)
                }
                ,
                f.prototype.square = function ge() {
                    var t = l();
                    return this.squareTo(t),
                    t
                }
                ,
                Ft.prototype.init = function pe(t) {
                    var e, n, i;
                    for (e = 0; e < 256; ++e)
                        this.S[e] = e;
                    for (n = 0,
                    e = 0; e < 256; ++e)
                        n = n + this.S[e] + t[e % t.length] & 255,
                        i = this.S[e],
                        this.S[e] = this.S[n],
                        this.S[n] = i;
                    this.i = 0,
                    this.j = 0
                }
                ,
                Ft.prototype.next = function ye() {
                    var t;
                    return this.i = this.i + 1 & 255,
                    this.j = this.j + this.S[this.i] & 255,
                    t = this.S[this.i],
                    this.S[this.i] = this.S[this.j],
                    this.S[this.j] = t,
                    this.S[t + this.S[this.i] & 255]
                }
                ;
                var me, ve, Se;
                function xe() {
                    !function t(e) {
                        ve[Se++] ^= 255 & e,
                        ve[Se++] ^= e >> 8 & 255,
                        ve[Se++] ^= e >> 16 & 255,
                        ve[Se++] ^= e >> 24 & 255,
                        Se >= 256 && (Se -= 256)
                    }((new Date).getTime())
                }
                if (null == ve) {
                    var Fe;
                    if (ve = new Array,
                    Se = 0,
                    i !== undefined && (i.crypto !== undefined || i.msCrypto !== undefined)) {
                        var Ee = i.crypto || i.msCrypto;
                        if (Ee.getRandomValues) {
                            var we = new Uint8Array(32);
                            for (Ee.getRandomValues(we),
                            Fe = 0; Fe < 32; ++Fe)
                                ve[Se++] = we[Fe]
                        } else if ("Netscape" == n.appName && n.appVersion < "5") {
                            var be = i.crypto.random(32);
                            for (Fe = 0; Fe < be.length; ++Fe)
                                ve[Se++] = 255 & be.charCodeAt(Fe)
                        }
                    }
                    for (; Se < 256; )
                        Fe = Math.floor(65536 * Math.random()),
                        ve[Se++] = Fe >>> 8,
                        ve[Se++] = 255 & Fe;
                    Se = 0,
                    xe()
                }
                function Ae() {
                    if (null == me) {
                        for (xe(),
                        (me = function t() {
                            return new Ft
                        }()).init(ve),
                        Se = 0; Se < ve.length; ++Se)
                            ve[Se] = 0;
                        Se = 0
                    }
                    return me.next()
                }
                function Ce() {}
                function De(t, e) {
                    return new f(t,e)
                }
                function Ie(t, e, n) {
                    for (var i = "", r = 0; i.length < e; )
                        i += n(String.fromCharCode.apply(String, t.concat([(4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r]))),
                        r += 1;
                    return i
                }
                function Te() {
                    this.n = null,
                    this.e = 0,
                    this.d = null,
                    this.p = null,
                    this.q = null,
                    this.dmp1 = null,
                    this.dmq1 = null,
                    this.coeff = null
                }
                function Pe(t, e, n) {
                    for (var i = "", r = 0; i.length < e; )
                        i += n(t + String.fromCharCode.apply(String, [(4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r])),
                        r += 1;
                    return i
                }
                function Be(t, e) {
                    this.x = e,
                    this.q = t
                }
                function He(t, e, n, i) {
                    this.curve = t,
                    this.x = e,
                    this.y = n,
                    this.z = null == i ? f.ONE : i,
                    this.zinv = null
                }
                function Re(t, e, n) {
                    this.q = t,
                    this.a = this.fromBigInteger(e),
                    this.b = this.fromBigInteger(n),
                    this.infinity = new He(this,null,null)
                }
                Ce.prototype.nextBytes = function Ne(t) {
                    var e;
                    for (e = 0; e < t.length; ++e)
                        t[e] = Ae()
                }
                ,
                Te.prototype.doPublic = function je(t) {
                    return t.modPowInt(this.e, this.n)
                }
                ,
                Te.prototype.setPublic = function Oe(t, e) {
                    if (this.isPublic = !0,
                    this.isPrivate = !1,
                    "string" != typeof t)
                        this.n = t,
                        this.e = e;
                    else {
                        if (!(null != t && null != e && t.length > 0 && e.length > 0))
                            throw "Invalid RSA public key";
                        this.n = De(t, 16),
                        this.e = parseInt(e, 16)
                    }
                }
                ,
                Te.prototype.encrypt = function Ve(t) {
                    var e = function n(t, e) {
                        if (e < t.length + 11)
                            throw "Message too long for RSA";
                        for (var n = new Array, i = t.length - 1; i >= 0 && e > 0; ) {
                            var r = t.charCodeAt(i--);
                            r < 128 ? n[--e] = r : r > 127 && r < 2048 ? (n[--e] = 63 & r | 128,
                            n[--e] = r >> 6 | 192) : (n[--e] = 63 & r | 128,
                            n[--e] = r >> 6 & 63 | 128,
                            n[--e] = r >> 12 | 224)
                        }
                        n[--e] = 0;
                        for (var s = new Ce, a = new Array; e > 2; ) {
                            for (a[0] = 0; 0 == a[0]; )
                                s.nextBytes(a);
                            n[--e] = a[0]
                        }
                        return n[--e] = 2,
                        n[--e] = 0,
                        new f(n)
                    }(t, this.n.bitLength() + 7 >> 3);
                    if (null == e)
                        return null;
                    var i = this.doPublic(e);
                    if (null == i)
                        return null;
                    var r = i.toString(16);
                    return 0 == (1 & r.length) ? r : "0" + r
                }
                ,
                Te.prototype.encryptOAEP = function Le(t, e, n) {
                    var i = function r(t, e, n, i) {
                        var r = mn.crypto.MessageDigest
                          , s = mn.crypto.Util
                          , a = null;
                        if (n || (n = "sha1"),
                        "string" == typeof n && (a = r.getCanonicalAlgName(n),
                        i = r.getHashLength(a),
                        n = function(t) {
                            return Bn(s.hashHex(Hn(t), a))
                        }
                        ),
                        t.length + 2 * i + 2 > e)
                            throw "Message too long for RSA";
                        var o, h = "";
                        for (o = 0; o < e - t.length - 2 * i - 2; o += 1)
                            h += "\0";
                        var u = n("") + h + "" + t
                          , c = new Array(i);
                        (new Ce).nextBytes(c);
                        var l = Ie(c, u.length, n)
                          , d = [];
                        for (o = 0; o < u.length; o += 1)
                            d[o] = u.charCodeAt(o) ^ l.charCodeAt(o);
                        var g = Ie(d, c.length, n)
                          , p = [0];
                        for (o = 0; o < c.length; o += 1)
                            p[o + 1] = c[o] ^ g.charCodeAt(o);
                        return new f(p.concat(d))
                    }(t, this.n.bitLength() + 7 >> 3, e, n);
                    if (null == i)
                        return null;
                    var s = this.doPublic(i);
                    if (null == s)
                        return null;
                    var a = s.toString(16);
                    return 0 == (1 & a.length) ? a : "0" + a
                }
                ,
                Te.prototype.type = "RSA",
                Te.prototype.doPrivate = function Ke(t) {
                    if (null == this.p || null == this.q)
                        return t.modPow(this.d, this.n);
                    for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0; )
                        e = e.add(this.p);
                    return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
                }
                ,
                Te.prototype.setPrivate = function Me(t, e, n) {
                    if (this.isPrivate = !0,
                    "string" != typeof t)
                        this.n = t,
                        this.e = e,
                        this.d = n;
                    else {
                        if (!(null != t && null != e && t.length > 0 && e.length > 0))
                            throw "Invalid RSA private key";
                        this.n = De(t, 16),
                        this.e = parseInt(e, 16),
                        this.d = De(n, 16)
                    }
                }
                ,
                Te.prototype.setPrivateEx = function ke(t, e, n, i, r, s, a, o) {
                    if (this.isPrivate = !0,
                    this.isPublic = !1,
                    null == t)
                        throw "RSASetPrivateEx N == null";
                    if (null == e)
                        throw "RSASetPrivateEx E == null";
                    if (0 == t.length)
                        throw "RSASetPrivateEx N.length == 0";
                    if (0 == e.length)
                        throw "RSASetPrivateEx E.length == 0";
                    if (!(null != t && null != e && t.length > 0 && e.length > 0))
                        throw "Invalid RSA private key in RSASetPrivateEx";
                    this.n = De(t, 16),
                    this.e = parseInt(e, 16),
                    this.d = De(n, 16),
                    this.p = De(i, 16),
                    this.q = De(r, 16),
                    this.dmp1 = De(s, 16),
                    this.dmq1 = De(a, 16),
                    this.coeff = De(o, 16)
                }
                ,
                Te.prototype.generate = function _e(t, e) {
                    var n = new Ce
                      , i = t >> 1;
                    this.e = parseInt(e, 16);
                    for (var r = new f(e,16); ; ) {
                        for (; this.p = new f(t - i,1,n),
                        0 != this.p.subtract(f.ONE).gcd(r).compareTo(f.ONE) || !this.p.isProbablePrime(10); )
                            ;
                        for (; this.q = new f(i,1,n),
                        0 != this.q.subtract(f.ONE).gcd(r).compareTo(f.ONE) || !this.q.isProbablePrime(10); )
                            ;
                        if (this.p.compareTo(this.q) <= 0) {
                            var s = this.p;
                            this.p = this.q,
                            this.q = s
                        }
                        var a = this.p.subtract(f.ONE)
                          , o = this.q.subtract(f.ONE)
                          , h = a.multiply(o);
                        if (0 == h.gcd(r).compareTo(f.ONE) && (this.n = this.p.multiply(this.q),
                        this.n.bitLength() == t)) {
                            this.d = r.modInverse(h),
                            this.dmp1 = this.d.mod(a),
                            this.dmq1 = this.d.mod(o),
                            this.coeff = this.q.modInverse(this.p);
                            break
                        }
                    }
                    this.isPrivate = !0
                }
                ,
                Te.prototype.decrypt = function Ue(t) {
                    if (t.length != Math.ceil(this.n.bitLength() / 4))
                        throw new Error("wrong ctext length");
                    var e = De(t, 16)
                      , n = this.doPrivate(e);
                    return null == n ? null : function i(t, e) {
                        for (var n = t.toByteArray(), i = 0; i < n.length && 0 == n[i]; )
                            ++i;
                        if (n.length - i != e - 1 || 2 != n[i])
                            return null;
                        for (++i; 0 != n[i]; )
                            if (++i >= n.length)
                                return null;
                        for (var r = ""; ++i < n.length; ) {
                            var s = 255 & n[i];
                            s < 128 ? r += String.fromCharCode(s) : s > 191 && s < 224 ? (r += String.fromCharCode((31 & s) << 6 | 63 & n[i + 1]),
                            ++i) : (r += String.fromCharCode((15 & s) << 12 | (63 & n[i + 1]) << 6 | 63 & n[i + 2]),
                            i += 2)
                        }
                        return r
                    }(n, this.n.bitLength() + 7 >> 3)
                }
                ,
                Te.prototype.decryptOAEP = function qe(t, e, n) {
                    if (t.length != Math.ceil(this.n.bitLength() / 4))
                        throw new Error("wrong ctext length");
                    var i = De(t, 16)
                      , r = this.doPrivate(i);
                    return null == r ? null : function s(t, e, n, i) {
                        var r = mn.crypto.MessageDigest
                          , s = mn.crypto.Util
                          , a = null;
                        for (n || (n = "sha1"),
                        "string" == typeof n && (a = r.getCanonicalAlgName(n),
                        i = r.getHashLength(a),
                        n = function(t) {
                            return Bn(s.hashHex(Hn(t), a))
                        }
                        ),
                        t = t.toByteArray(),
                        o = 0; o < t.length; o += 1)
                            t[o] &= 255;
                        for (; t.length < e; )
                            t.unshift(0);
                        if ((t = String.fromCharCode.apply(String, t)).length < 2 * i + 2)
                            throw "Cipher too short";
                        var o, h = t.substr(1, i), u = t.substr(i + 1), c = Pe(u, i, n), f = [];
                        for (o = 0; o < h.length; o += 1)
                            f[o] = h.charCodeAt(o) ^ c.charCodeAt(o);
                        var l = Pe(String.fromCharCode.apply(String, f), t.length - i, n)
                          , d = [];
                        for (o = 0; o < u.length; o += 1)
                            d[o] = u.charCodeAt(o) ^ l.charCodeAt(o);
                        if ((d = String.fromCharCode.apply(String, d)).substr(0, i) !== n(""))
                            throw "Hash mismatch";
                        var g = (d = d.substr(i)).indexOf("");
                        if ((-1 != g ? d.substr(0, g).lastIndexOf("\0") : -1) + 1 != g)
                            throw "Malformed data";
                        return d.substr(g + 1)
                    }(r, this.n.bitLength() + 7 >> 3, e, n)
                }
                ,
                Be.prototype.equals = function ze(t) {
                    return t == this || this.q.equals(t.q) && this.x.equals(t.x)
                }
                ,
                Be.prototype.toBigInteger = function Ye() {
                    return this.x
                }
                ,
                Be.prototype.negate = function Ge() {
                    return new Be(this.q,this.x.negate().mod(this.q))
                }
                ,
                Be.prototype.add = function We(t) {
                    return new Be(this.q,this.x.add(t.toBigInteger()).mod(this.q))
                }
                ,
                Be.prototype.subtract = function Je(t) {
                    return new Be(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))
                }
                ,
                Be.prototype.multiply = function Xe(t) {
                    return new Be(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))
                }
                ,
                Be.prototype.square = function $e() {
                    return new Be(this.q,this.x.square().mod(this.q))
                }
                ,
                Be.prototype.divide = function Ze(t) {
                    return new Be(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))
                }
                ,
                He.prototype.getX = function Qe() {
                    return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                    this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
                }
                ,
                He.prototype.getY = function tn() {
                    return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                    this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
                }
                ,
                He.prototype.equals = function en(t) {
                    return t == this || (this.isInfinity() ? t.isInfinity() : t.isInfinity() ? this.isInfinity() : !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(f.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(f.ZERO))
                }
                ,
                He.prototype.isInfinity = function nn() {
                    return null == this.x && null == this.y || this.z.equals(f.ZERO) && !this.y.toBigInteger().equals(f.ZERO)
                }
                ,
                He.prototype.negate = function rn() {
                    return new He(this.curve,this.x,this.y.negate(),this.z)
                }
                ,
                He.prototype.add = function sn(t) {
                    if (this.isInfinity())
                        return t;
                    if (t.isInfinity())
                        return this;
                    var e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q)
                      , n = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
                    if (f.ZERO.equals(n))
                        return f.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
                    var i = new f("3")
                      , r = this.x.toBigInteger()
                      , s = this.y.toBigInteger()
                      , a = (t.x.toBigInteger(),
                    t.y.toBigInteger(),
                    n.square())
                      , o = a.multiply(n)
                      , h = r.multiply(a)
                      , u = e.square().multiply(this.z)
                      , c = u.subtract(h.shiftLeft(1)).multiply(t.z).subtract(o).multiply(n).mod(this.curve.q)
                      , l = h.multiply(i).multiply(e).subtract(s.multiply(o)).subtract(u.multiply(e)).multiply(t.z).add(e.multiply(o)).mod(this.curve.q)
                      , d = o.multiply(this.z).multiply(t.z).mod(this.curve.q);
                    return new He(this.curve,this.curve.fromBigInteger(c),this.curve.fromBigInteger(l),d)
                }
                ,
                He.prototype.twice = function an() {
                    if (this.isInfinity())
                        return this;
                    if (0 == this.y.toBigInteger().signum())
                        return this.curve.getInfinity();
                    var t = new f("3")
                      , e = this.x.toBigInteger()
                      , n = this.y.toBigInteger()
                      , i = n.multiply(this.z)
                      , r = i.multiply(n).mod(this.curve.q)
                      , s = this.curve.a.toBigInteger()
                      , a = e.square().multiply(t);
                    f.ZERO.equals(s) || (a = a.add(this.z.square().multiply(s)));
                    var o = (a = a.mod(this.curve.q)).square().subtract(e.shiftLeft(3).multiply(r)).shiftLeft(1).multiply(i).mod(this.curve.q)
                      , h = a.multiply(t).multiply(e).subtract(r.shiftLeft(1)).shiftLeft(2).multiply(r).subtract(a.square().multiply(a)).mod(this.curve.q)
                      , u = i.square().multiply(i).shiftLeft(3).mod(this.curve.q);
                    return new He(this.curve,this.curve.fromBigInteger(o),this.curve.fromBigInteger(h),u)
                }
                ,
                He.prototype.multiply = function on(t) {
                    if (this.isInfinity())
                        return this;
                    if (0 == t.signum())
                        return this.curve.getInfinity();
                    var e, n = t, i = n.multiply(new f("3")), r = this.negate(), s = this, a = this.curve.q.subtract(t), o = a.multiply(new f("3")), h = new He(this.curve,this.x,this.y), u = h.negate();
                    for (e = i.bitLength() - 2; e > 0; --e) {
                        s = s.twice();
                        var c = i.testBit(e);
                        c != n.testBit(e) && (s = s.add(c ? this : r))
                    }
                    for (e = o.bitLength() - 2; e > 0; --e) {
                        h = h.twice();
                        var l = o.testBit(e);
                        l != a.testBit(e) && (h = h.add(l ? h : u))
                    }
                    return s
                }
                ,
                He.prototype.multiplyTwo = function hn(t, e, n) {
                    var i;
                    i = t.bitLength() > n.bitLength() ? t.bitLength() - 1 : n.bitLength() - 1;
                    for (var r = this.curve.getInfinity(), s = this.add(e); i >= 0; )
                        r = r.twice(),
                        t.testBit(i) ? r = n.testBit(i) ? r.add(s) : r.add(this) : n.testBit(i) && (r = r.add(e)),
                        --i;
                    return r
                }
                ,
                Re.prototype.getQ = function un() {
                    return this.q
                }
                ,
                Re.prototype.getA = function cn() {
                    return this.a
                }
                ,
                Re.prototype.getB = function fn() {
                    return this.b
                }
                ,
                Re.prototype.equals = function ln(t) {
                    return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b)
                }
                ,
                Re.prototype.getInfinity = function dn() {
                    return this.infinity
                }
                ,
                Re.prototype.fromBigInteger = function gn(t) {
                    return new Be(this.q,t)
                }
                ,
                Re.prototype.decodePointHex = function pn(t) {
                    switch (parseInt(t.substr(0, 2), 16)) {
                    case 0:
                        return this.infinity;
                    case 2:
                    case 3:
                        return null;
                    case 4:
                    case 6:
                    case 7:
                        var e = (t.length - 2) / 2
                          , n = t.substr(2, e)
                          , i = t.substr(e + 2, e);
                        return new He(this,this.fromBigInteger(new f(n,16)),this.fromBigInteger(new f(i,16)));
                    default:
                        return null
                    }
                }
                ,
                Be.prototype.getByteLength = function() {
                    return Math.floor((this.toBigInteger().bitLength() + 7) / 8)
                }
                ,
                He.prototype.getEncoded = function(t) {
                    var e = function(t, e) {
                        var n = t.toByteArrayUnsigned();
                        if (e < n.length)
                            n = n.slice(n.length - e);
                        else
                            for (; e > n.length; )
                                n.unshift(0);
                        return n
                    }
                      , n = this.getX().toBigInteger()
                      , i = this.getY().toBigInteger()
                      , r = e(n, 32);
                    return t ? i.isEven() ? r.unshift(2) : r.unshift(3) : (r.unshift(4),
                    r = r.concat(e(i, 32))),
                    r
                }
                ,
                He.decodeFrom = function(t, e) {
                    e[0];
                    var n = e.length - 1
                      , i = e.slice(1, 1 + n / 2)
                      , r = e.slice(1 + n / 2, 1 + n);
                    i.unshift(0),
                    r.unshift(0);
                    var s = new f(i)
                      , a = new f(r);
                    return new He(t,t.fromBigInteger(s),t.fromBigInteger(a))
                }
                ,
                He.decodeFromHex = function(t, e) {
                    e.substr(0, 2);
                    var n = e.length - 2
                      , i = e.substr(2, n / 2)
                      , r = e.substr(2 + n / 2, n / 2)
                      , s = new f(i,16)
                      , a = new f(r,16);
                    return new He(t,t.fromBigInteger(s),t.fromBigInteger(a))
                }
                ,
                He.prototype.add2D = function(t) {
                    if (this.isInfinity())
                        return t;
                    if (t.isInfinity())
                        return this;
                    if (this.x.equals(t.x))
                        return this.y.equals(t.y) ? this.twice() : this.curve.getInfinity();
                    var e = t.x.subtract(this.x)
                      , n = t.y.subtract(this.y).divide(e)
                      , i = n.square().subtract(this.x).subtract(t.x)
                      , r = n.multiply(this.x.subtract(i)).subtract(this.y);
                    return new He(this.curve,i,r)
                }
                ,
                He.prototype.twice2D = function() {
                    if (this.isInfinity())
                        return this;
                    if (0 == this.y.toBigInteger().signum())
                        return this.curve.getInfinity();
                    var t = this.curve.fromBigInteger(f.valueOf(2))
                      , e = this.curve.fromBigInteger(f.valueOf(3))
                      , n = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t))
                      , i = n.square().subtract(this.x.multiply(t))
                      , r = n.multiply(this.x.subtract(i)).subtract(this.y);
                    return new He(this.curve,i,r)
                }
                ,
                He.prototype.multiply2D = function(t) {
                    if (this.isInfinity())
                        return this;
                    if (0 == t.signum())
                        return this.curve.getInfinity();
                    var e, n = t, i = n.multiply(new f("3")), r = this.negate(), s = this;
                    for (e = i.bitLength() - 2; e > 0; --e) {
                        s = s.twice();
                        var a = i.testBit(e);
                        a != n.testBit(e) && (s = s.add2D(a ? this : r))
                    }
                    return s
                }
                ,
                He.prototype.isOnCurve = function() {
                    var t = this.getX().toBigInteger()
                      , e = this.getY().toBigInteger()
                      , n = this.curve.getA().toBigInteger()
                      , i = this.curve.getB().toBigInteger()
                      , r = this.curve.getQ()
                      , s = e.multiply(e).mod(r)
                      , a = t.multiply(t).multiply(t).add(n.multiply(t)).add(i).mod(r);
                    return s.equals(a)
                }
                ,
                He.prototype.toString = function() {
                    return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")"
                }
                ,
                He.prototype.validate = function() {
                    var t = this.curve.getQ();
                    if (this.isInfinity())
                        throw new Error("Point is at infinity.");
                    var e = this.getX().toBigInteger()
                      , n = this.getY().toBigInteger();
                    if (e.compareTo(f.ONE) < 0 || e.compareTo(t.subtract(f.ONE)) > 0)
                        throw new Error("x coordinate out of bounds");
                    if (n.compareTo(f.ONE) < 0 || n.compareTo(t.subtract(f.ONE)) > 0)
                        throw new Error("y coordinate out of bounds");
                    if (!this.isOnCurve())
                        throw new Error("Point is not on the curve.");
                    if (this.multiply(t).isInfinity())
                        throw new Error("Point is not a scalar multiple of G.");
                    return !0
                }
                ;
                var yn = function() {
                    var t = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))',"g")
                      , e = new RegExp("\\\\(?:([^u])|u(.{4}))","g")
                      , n = {
                        '"': '"',
                        "/": "/",
                        "\\": "\\",
                        b: "\b",
                        f: "\f",
                        n: "\n",
                        r: "\r",
                        t: "\t"
                    };
                    function i(t, e, i) {
                        return e ? n[e] : String.fromCharCode(parseInt(i, 16))
                    }
                    var r = new String("")
                      , s = Object.hasOwnProperty;
                    return function(n, a) {
                        var o, h, u = n.match(t), c = u[0], f = !1;
                        "{" === c ? o = {} : "[" === c ? o = [] : (o = [],
                        f = !0);
                        for (var l = [o], d = 1 - f, g = u.length; d < g; ++d) {
                            var p;
                            switch ((c = u[d]).charCodeAt(0)) {
                            default:
                                (p = l[0])[h || p.length] = +c,
                                h = void 0;
                                break;
                            case 34:
                                if (-1 !== (c = c.substring(1, c.length - 1)).indexOf("\\") && (c = c.replace(e, i)),
                                p = l[0],
                                !h) {
                                    if (!(p instanceof Array)) {
                                        h = c || r;
                                        break
                                    }
                                    h = p.length
                                }
                                p[h] = c,
                                h = void 0;
                                break;
                            case 91:
                                p = l[0],
                                l.unshift(p[h || p.length] = []),
                                h = void 0;
                                break;
                            case 93:
                                l.shift();
                                break;
                            case 102:
                                (p = l[0])[h || p.length] = !1,
                                h = void 0;
                                break;
                            case 110:
                                (p = l[0])[h || p.length] = null,
                                h = void 0;
                                break;
                            case 116:
                                (p = l[0])[h || p.length] = !0,
                                h = void 0;
                                break;
                            case 123:
                                p = l[0],
                                l.unshift(p[h || p.length] = {}),
                                h = void 0;
                                break;
                            case 125:
                                l.shift()
                            }
                        }
                        if (f) {
                            if (1 !== l.length)
                                throw new Error;
                            o = o[0]
                        } else if (l.length)
                            throw new Error;
                        if (a) {
                            var y = function(t, e) {
                                var n = t[e];
                                if (n && "object" == typeof n) {
                                    var i = null;
                                    for (var r in n)
                                        if (s.call(n, r) && n !== t) {
                                            var o = y(n, r);
                                            void 0 !== o ? n[r] = o : (i || (i = []),
                                            i.push(r))
                                        }
                                    if (i)
                                        for (var h = i.length; --h >= 0; )
                                            delete n[i[h]]
                                }
                                return a.call(t, e, n)
                            };
                            o = y({
                                "": o
                            }, "")
                        }
                        return o
                    }
                }();
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.asn1 && mn.asn1 || (mn.asn1 = {}),
                mn.asn1.ASN1Util = new function() {
                    this.integerToByteHex = function(t) {
                        var e = t.toString(16);
                        return e.length % 2 == 1 && (e = "0" + e),
                        e
                    }
                    ,
                    this.bigIntToMinTwosComplementsHex = function(t) {
                        var e = t.toString(16);
                        if ("-" != e.substr(0, 1))
                            e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                        else {
                            var n = e.substr(1).length;
                            n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
                            for (var i = "", r = 0; r < n; r++)
                                i += "f";
                            e = new f(i,16).xor(t).add(f.ONE).toString(16).replace(/^-/, "")
                        }
                        return e
                    }
                    ,
                    this.getPEMStringFromHex = function(t, e) {
                        return On(t, e)
                    }
                    ,
                    this.newObject = function(t) {
                        var e = mn.asn1
                          , n = e.DERBoolean
                          , i = e.DERInteger
                          , r = e.DERBitString
                          , s = e.DEROctetString
                          , a = e.DERNull
                          , o = e.DERObjectIdentifier
                          , h = e.DEREnumerated
                          , u = e.DERUTF8String
                          , c = e.DERNumericString
                          , f = e.DERPrintableString
                          , l = e.DERTeletexString
                          , d = e.DERIA5String
                          , g = e.DERUTCTime
                          , p = e.DERGeneralizedTime
                          , y = e.DERVisibleString
                          , m = e.DERBMPString
                          , v = e.DERSequence
                          , S = e.DERSet
                          , x = e.DERTaggedObject
                          , F = e.ASN1Util.newObject
                          , E = Object.keys(t);
                        if (1 != E.length)
                            throw "key of param shall be only one.";
                        var w = E[0];
                        if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:".indexOf(":" + w + ":"))
                            throw new Error("undefined key: " + w);
                        if ("bool" == w)
                            return new n(t[w]);
                        if ("int" == w)
                            return new i(t[w]);
                        if ("bitstr" == w)
                            return new r(t[w]);
                        if ("octstr" == w)
                            return new s(t[w]);
                        if ("null" == w)
                            return new a(t[w]);
                        if ("oid" == w)
                            return new o(t[w]);
                        if ("enum" == w)
                            return new h(t[w]);
                        if ("utf8str" == w)
                            return new u(t[w]);
                        if ("numstr" == w)
                            return new c(t[w]);
                        if ("prnstr" == w)
                            return new f(t[w]);
                        if ("telstr" == w)
                            return new l(t[w]);
                        if ("ia5str" == w)
                            return new d(t[w]);
                        if ("utctime" == w)
                            return new g(t[w]);
                        if ("gentime" == w)
                            return new p(t[w]);
                        if ("visstr" == w)
                            return new y(t[w]);
                        if ("bmpstr" == w)
                            return new m(t[w]);
                        if ("seq" == w) {
                            for (var b = t[w], A = [], C = 0; C < b.length; C++) {
                                var D = F(b[C]);
                                A.push(D)
                            }
                            return new v({
                                array: A
                            })
                        }
                        if ("set" == w) {
                            for (b = t[w],
                            A = [],
                            C = 0; C < b.length; C++) {
                                D = F(b[C]);
                                A.push(D)
                            }
                            return new S({
                                array: A
                            })
                        }
                        if ("tag" == w) {
                            var I = t[w];
                            if ("[object Array]" === Object.prototype.toString.call(I) && 3 == I.length) {
                                var T = F(I[2]);
                                return new x({
                                    tag: I[0],
                                    explicit: I[1],
                                    obj: T
                                })
                            }
                            var P = {};
                            if (I.explicit !== undefined && (P.explicit = I.explicit),
                            I.tag !== undefined && (P.tag = I.tag),
                            I.obj === undefined)
                                throw "obj shall be specified for 'tag'.";
                            return P.obj = F(I.obj),
                            new x(P)
                        }
                    }
                    ,
                    this.jsonToASN1HEX = function(t) {
                        return this.newObject(t).getEncodedHex()
                    }
                }
                ,
                mn.asn1.ASN1Util.oidHexToInt = function(t) {
                    for (var e = "", n = parseInt(t.substr(0, 2), 16), i = (e = Math.floor(n / 40) + "." + n % 40,
                    ""), r = 2; r < t.length; r += 2) {
                        var s = ("00000000" + parseInt(t.substr(r, 2), 16).toString(2)).slice(-8);
                        if (i += s.substr(1, 7),
                        "0" == s.substr(0, 1))
                            e = e + "." + new f(i,2).toString(10),
                            i = ""
                    }
                    return e
                }
                ,
                mn.asn1.ASN1Util.oidIntToHex = function(t) {
                    var e = function(t) {
                        var e = t.toString(16);
                        return 1 == e.length && (e = "0" + e),
                        e
                    }
                      , n = function(t) {
                        var n = ""
                          , i = new f(t,10).toString(2)
                          , r = 7 - i.length % 7;
                        7 == r && (r = 0);
                        for (var s = "", a = 0; a < r; a++)
                            s += "0";
                        i = s + i;
                        for (a = 0; a < i.length - 1; a += 7) {
                            var o = i.substr(a, 7);
                            a != i.length - 7 && (o = "1" + o),
                            n += e(parseInt(o, 2))
                        }
                        return n
                    };
                    if (!t.match(/^[0-9.]+$/))
                        throw "malformed oid string: " + t;
                    var i = ""
                      , r = t.split(".")
                      , s = 40 * parseInt(r[0]) + parseInt(r[1]);
                    i += e(s),
                    r.splice(0, 2);
                    for (var a = 0; a < r.length; a++)
                        i += n(r[a]);
                    return i
                }
                ,
                mn.asn1.ASN1Object = function() {
                    this.getLengthHexFromValue = function() {
                        if ("undefined" == typeof this.hV || null == this.hV)
                            throw "this.hV is null or undefined.";
                        if (this.hV.length % 2 == 1)
                            throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                        var t = this.hV.length / 2
                          , e = t.toString(16);
                        if (e.length % 2 == 1 && (e = "0" + e),
                        t < 128)
                            return e;
                        var n = e.length / 2;
                        if (n > 15)
                            throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                        return (128 + n).toString(16) + e
                    }
                    ,
                    this.getEncodedHex = function() {
                        return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                        this.hL = this.getLengthHexFromValue(),
                        this.hTLV = this.hT + this.hL + this.hV,
                        this.isModified = !1),
                        this.hTLV
                    }
                    ,
                    this.getValueHex = function() {
                        return this.getEncodedHex(),
                        this.hV
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return ""
                    }
                }
                ,
                mn.asn1.DERAbstractString = function(t) {
                    mn.asn1.DERAbstractString.superclass.constructor.call(this);
                    this.getString = function() {
                        return this.s
                    }
                    ,
                    this.setString = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = t,
                        this.hV = Tn(this.s).toLowerCase()
                    }
                    ,
                    this.setStringHex = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = t
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    void 0 !== t && ("string" == typeof t ? this.setString(t) : "undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
                }
                ,
                r.lang.extend(mn.asn1.DERAbstractString, mn.asn1.ASN1Object),
                mn.asn1.DERAbstractTime = function(t) {
                    mn.asn1.DERAbstractTime.superclass.constructor.call(this);
                    this.localDateToUTC = function(t) {
                        var e = t.getTime() + 6e4 * t.getTimezoneOffset();
                        return new Date(e)
                    }
                    ,
                    this.formatDate = function(t, e, n) {
                        var i = this.zeroPadding
                          , r = this.localDateToUTC(t)
                          , s = String(r.getFullYear());
                        "utc" == e && (s = s.substr(2, 2));
                        var a = s + i(String(r.getMonth() + 1), 2) + i(String(r.getDate()), 2) + i(String(r.getHours()), 2) + i(String(r.getMinutes()), 2) + i(String(r.getSeconds()), 2);
                        if (!0 === n) {
                            var o = r.getMilliseconds();
                            if (0 != o) {
                                var h = i(String(o), 3);
                                a = a + "." + (h = h.replace(/[0]+$/, ""))
                            }
                        }
                        return a + "Z"
                    }
                    ,
                    this.zeroPadding = function(t, e) {
                        return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                    }
                    ,
                    this.getString = function() {
                        return this.s
                    }
                    ,
                    this.setString = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = t,
                        this.hV = bn(t)
                    }
                    ,
                    this.setByDateValue = function(t, e, n, i, r, s) {
                        var a = new Date(Date.UTC(t, e - 1, n, i, r, s, 0));
                        this.setByDate(a)
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                }
                ,
                r.lang.extend(mn.asn1.DERAbstractTime, mn.asn1.ASN1Object),
                mn.asn1.DERAbstractStructured = function(t) {
                    mn.asn1.DERAbstractString.superclass.constructor.call(this);
                    this.setByASN1ObjectArray = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array = t
                    }
                    ,
                    this.appendASN1Object = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array.push(t)
                    }
                    ,
                    this.asn1Array = new Array,
                    void 0 !== t && "undefined" != typeof t.array && (this.asn1Array = t.array)
                }
                ,
                r.lang.extend(mn.asn1.DERAbstractStructured, mn.asn1.ASN1Object),
                mn.asn1.DERBoolean = function() {
                    mn.asn1.DERBoolean.superclass.constructor.call(this),
                    this.hT = "01",
                    this.hTLV = "0101ff"
                }
                ,
                r.lang.extend(mn.asn1.DERBoolean, mn.asn1.ASN1Object),
                mn.asn1.DERInteger = function(t) {
                    mn.asn1.DERInteger.superclass.constructor.call(this),
                    this.hT = "02",
                    this.setByBigInteger = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = mn.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                    }
                    ,
                    this.setByInteger = function(t) {
                        var e = new f(String(t),10);
                        this.setByBigInteger(e)
                    }
                    ,
                    this.setValueHex = function(t) {
                        this.hV = t
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    void 0 !== t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
                }
                ,
                r.lang.extend(mn.asn1.DERInteger, mn.asn1.ASN1Object),
                mn.asn1.DERBitString = function(t) {
                    if (t !== undefined && "undefined" != typeof t.obj) {
                        var e = mn.asn1.ASN1Util.newObject(t.obj);
                        t.hex = "00" + e.getEncodedHex()
                    }
                    mn.asn1.DERBitString.superclass.constructor.call(this),
                    this.hT = "03",
                    this.setHexValueIncludingUnusedBits = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = t
                    }
                    ,
                    this.setUnusedBitsAndHexValue = function(t, e) {
                        if (t < 0 || 7 < t)
                            throw "unused bits shall be from 0 to 7: u = " + t;
                        var n = "0" + t;
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = n + e
                    }
                    ,
                    this.setByBinaryString = function(t) {
                        var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                        8 == e && (e = 0);
                        for (var n = 0; n <= e; n++)
                            t += "0";
                        var i = "";
                        for (n = 0; n < t.length - 1; n += 8) {
                            var r = t.substr(n, 8)
                              , s = parseInt(r, 2).toString(16);
                            1 == s.length && (s = "0" + s),
                            i += s
                        }
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = "0" + e + i
                    }
                    ,
                    this.setByBooleanArray = function(t) {
                        for (var e = "", n = 0; n < t.length; n++)
                            1 == t[n] ? e += "1" : e += "0";
                        this.setByBinaryString(e)
                    }
                    ,
                    this.newFalseArray = function(t) {
                        for (var e = new Array(t), n = 0; n < t; n++)
                            e[n] = !1;
                        return e
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : "undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
                }
                ,
                r.lang.extend(mn.asn1.DERBitString, mn.asn1.ASN1Object),
                mn.asn1.DEROctetString = function(t) {
                    if (t !== undefined && "undefined" != typeof t.obj) {
                        var e = mn.asn1.ASN1Util.newObject(t.obj);
                        t.hex = e.getEncodedHex()
                    }
                    mn.asn1.DEROctetString.superclass.constructor.call(this, t),
                    this.hT = "04"
                }
                ,
                r.lang.extend(mn.asn1.DEROctetString, mn.asn1.DERAbstractString),
                mn.asn1.DERNull = function() {
                    mn.asn1.DERNull.superclass.constructor.call(this),
                    this.hT = "05",
                    this.hTLV = "0500"
                }
                ,
                r.lang.extend(mn.asn1.DERNull, mn.asn1.ASN1Object),
                mn.asn1.DERObjectIdentifier = function(t) {
                    var e = function(t) {
                        var e = t.toString(16);
                        return 1 == e.length && (e = "0" + e),
                        e
                    }
                      , n = function(t) {
                        var n = ""
                          , i = new f(t,10).toString(2)
                          , r = 7 - i.length % 7;
                        7 == r && (r = 0);
                        for (var s = "", a = 0; a < r; a++)
                            s += "0";
                        i = s + i;
                        for (a = 0; a < i.length - 1; a += 7) {
                            var o = i.substr(a, 7);
                            a != i.length - 7 && (o = "1" + o),
                            n += e(parseInt(o, 2))
                        }
                        return n
                    };
                    mn.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                    this.hT = "06",
                    this.setValueHex = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = t
                    }
                    ,
                    this.setValueOidString = function(t) {
                        if (!t.match(/^[0-9.]+$/))
                            throw "malformed oid string: " + t;
                        var i = ""
                          , r = t.split(".")
                          , s = 40 * parseInt(r[0]) + parseInt(r[1]);
                        i += e(s),
                        r.splice(0, 2);
                        for (var a = 0; a < r.length; a++)
                            i += n(r[a]);
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = i
                    }
                    ,
                    this.setValueName = function(t) {
                        var e = mn.asn1.x509.OID.name2oid(t);
                        if ("" === e)
                            throw "DERObjectIdentifier oidName undefined: " + t;
                        this.setValueOidString(e)
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    t !== undefined && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : t.oid !== undefined ? this.setValueOidString(t.oid) : t.hex !== undefined ? this.setValueHex(t.hex) : t.name !== undefined && this.setValueName(t.name))
                }
                ,
                r.lang.extend(mn.asn1.DERObjectIdentifier, mn.asn1.ASN1Object),
                mn.asn1.DEREnumerated = function(t) {
                    mn.asn1.DEREnumerated.superclass.constructor.call(this),
                    this.hT = "0a",
                    this.setByBigInteger = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = mn.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                    }
                    ,
                    this.setByInteger = function(t) {
                        var e = new f(String(t),10);
                        this.setByBigInteger(e)
                    }
                    ,
                    this.setValueHex = function(t) {
                        this.hV = t
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    void 0 !== t && ("undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
                }
                ,
                r.lang.extend(mn.asn1.DEREnumerated, mn.asn1.ASN1Object),
                mn.asn1.DERUTF8String = function(t) {
                    mn.asn1.DERUTF8String.superclass.constructor.call(this, t),
                    this.hT = "0c"
                }
                ,
                r.lang.extend(mn.asn1.DERUTF8String, mn.asn1.DERAbstractString),
                mn.asn1.DERNumericString = function(t) {
                    mn.asn1.DERNumericString.superclass.constructor.call(this, t),
                    this.hT = "12"
                }
                ,
                r.lang.extend(mn.asn1.DERNumericString, mn.asn1.DERAbstractString),
                mn.asn1.DERPrintableString = function(t) {
                    mn.asn1.DERPrintableString.superclass.constructor.call(this, t),
                    this.hT = "13"
                }
                ,
                r.lang.extend(mn.asn1.DERPrintableString, mn.asn1.DERAbstractString),
                mn.asn1.DERTeletexString = function(t) {
                    mn.asn1.DERTeletexString.superclass.constructor.call(this, t),
                    this.hT = "14"
                }
                ,
                r.lang.extend(mn.asn1.DERTeletexString, mn.asn1.DERAbstractString),
                mn.asn1.DERIA5String = function(t) {
                    mn.asn1.DERIA5String.superclass.constructor.call(this, t),
                    this.hT = "16"
                }
                ,
                r.lang.extend(mn.asn1.DERIA5String, mn.asn1.DERAbstractString),
                mn.asn1.DERVisibleString = function(t) {
                    mn.asn1.DERIA5String.superclass.constructor.call(this, t),
                    this.hT = "1a"
                }
                ,
                r.lang.extend(mn.asn1.DERVisibleString, mn.asn1.DERAbstractString),
                mn.asn1.DERBMPString = function(t) {
                    mn.asn1.DERBMPString.superclass.constructor.call(this, t),
                    this.hT = "1e"
                }
                ,
                r.lang.extend(mn.asn1.DERBMPString, mn.asn1.DERAbstractString),
                mn.asn1.DERUTCTime = function(t) {
                    mn.asn1.DERUTCTime.superclass.constructor.call(this, t),
                    this.hT = "17",
                    this.setByDate = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.date = t,
                        this.s = this.formatDate(this.date, "utc"),
                        this.hV = bn(this.s)
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return "undefined" == typeof this.date && "undefined" == typeof this.s && (this.date = new Date,
                        this.s = this.formatDate(this.date, "utc"),
                        this.hV = bn(this.s)),
                        this.hV
                    }
                    ,
                    t !== undefined && (t.str !== undefined ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : t.hex !== undefined ? this.setStringHex(t.hex) : t.date !== undefined && this.setByDate(t.date))
                }
                ,
                r.lang.extend(mn.asn1.DERUTCTime, mn.asn1.DERAbstractTime),
                mn.asn1.DERGeneralizedTime = function(t) {
                    mn.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
                    this.hT = "18",
                    this.withMillis = !1,
                    this.setByDate = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.date = t,
                        this.s = this.formatDate(this.date, "gen", this.withMillis),
                        this.hV = bn(this.s)
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.date === undefined && this.s === undefined && (this.date = new Date,
                        this.s = this.formatDate(this.date, "gen", this.withMillis),
                        this.hV = bn(this.s)),
                        this.hV
                    }
                    ,
                    t !== undefined && (t.str !== undefined ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : t.hex !== undefined ? this.setStringHex(t.hex) : t.date !== undefined && this.setByDate(t.date),
                    !0 === t.millis && (this.withMillis = !0))
                }
                ,
                r.lang.extend(mn.asn1.DERGeneralizedTime, mn.asn1.DERAbstractTime),
                mn.asn1.DERSequence = function(t) {
                    mn.asn1.DERSequence.superclass.constructor.call(this, t),
                    this.hT = "30",
                    this.getFreshValueHex = function() {
                        for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                            t += this.asn1Array[e].getEncodedHex()
                        }
                        return this.hV = t,
                        this.hV
                    }
                }
                ,
                r.lang.extend(mn.asn1.DERSequence, mn.asn1.DERAbstractStructured),
                mn.asn1.DERSet = function(t) {
                    mn.asn1.DERSet.superclass.constructor.call(this, t),
                    this.hT = "31",
                    this.sortFlag = !0,
                    this.getFreshValueHex = function() {
                        for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                            var n = this.asn1Array[e];
                            t.push(n.getEncodedHex())
                        }
                        return 1 == this.sortFlag && t.sort(),
                        this.hV = t.join(""),
                        this.hV
                    }
                    ,
                    void 0 !== t && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
                }
                ,
                r.lang.extend(mn.asn1.DERSet, mn.asn1.DERAbstractStructured),
                mn.asn1.DERTaggedObject = function(t) {
                    mn.asn1.DERTaggedObject.superclass.constructor.call(this),
                    this.hT = "a0",
                    this.hV = "",
                    this.isExplicit = !0,
                    this.asn1Object = null,
                    this.setASN1Object = function(t, e, n) {
                        this.hT = e,
                        this.isExplicit = t,
                        this.asn1Object = n,
                        this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                        this.hTLV = null,
                        this.isModified = !0) : (this.hV = null,
                        this.hTLV = n.getEncodedHex(),
                        this.hTLV = this.hTLV.replace(/^../, e),
                        this.isModified = !1)
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    void 0 !== t && ("undefined" != typeof t.tag && (this.hT = t.tag),
                    "undefined" != typeof t.explicit && (this.isExplicit = t.explicit),
                    "undefined" != typeof t.obj && (this.asn1Object = t.obj,
                    this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
                }
                ,
                r.lang.extend(mn.asn1.DERTaggedObject, mn.asn1.ASN1Object);
                var mn, vn, Sn, xn = new function() {}
                ;
                function Fn(t) {
                    for (var e = new Array, n = 0; n < t.length; n++)
                        e[n] = t.charCodeAt(n);
                    return e
                }
                function En(t) {
                    for (var e = "", n = 0; n < t.length; n++)
                        e += String.fromCharCode(t[n]);
                    return e
                }
                function wn(t) {
                    for (var e = "", n = 0; n < t.length; n++) {
                        var i = t[n].toString(16);
                        1 == i.length && (i = "0" + i),
                        e += i
                    }
                    return e
                }
                function bn(t) {
                    return wn(Fn(t))
                }
                function An(t) {
                    return t = (t = (t = t.replace(/\=/g, "")).replace(/\+/g, "-")).replace(/\//g, "_")
                }
                function Cn(t) {
                    return t.length % 4 == 2 ? t += "==" : t.length % 4 == 3 && (t += "="),
                    t = (t = t.replace(/-/g, "+")).replace(/_/g, "/")
                }
                function Dn(t) {
                    return t.length % 2 == 1 && (t = "0" + t),
                    An(h(t))
                }
                function In(t) {
                    return u(Cn(t))
                }
                function Tn(t) {
                    return Mn(zn(t))
                }
                function Pn(t) {
                    return decodeURIComponent(kn(t))
                }
                function Bn(t) {
                    for (var e = "", n = 0; n < t.length - 1; n += 2)
                        e += String.fromCharCode(parseInt(t.substr(n, 2), 16));
                    return e
                }
                function Hn(t) {
                    for (var e = "", n = 0; n < t.length; n++)
                        e += ("0" + t.charCodeAt(n).toString(16)).slice(-2);
                    return e
                }
                function Rn(t) {
                    return h(t)
                }
                function Nn(t) {
                    var e = Rn(t).replace(/(.{64})/g, "$1\r\n");
                    return e = e.replace(/\r\n$/, "")
                }
                function jn(t) {
                    return u(t.replace(/[^0-9A-Za-z\/+=]*/g, ""))
                }
                function On(t, e) {
                    return "-----BEGIN " + e + "-----\r\n" + Nn(t) + "\r\n-----END " + e + "-----\r\n"
                }
                function Vn(t, e) {
                    if (-1 == t.indexOf("-----BEGIN "))
                        throw "can't find PEM header: " + e;
                    return jn(t = e !== undefined ? (t = t.replace(new RegExp("^[^]*-----BEGIN " + e + "-----"), "")).replace(new RegExp("-----END " + e + "-----[^]*$"), "") : (t = t.replace(/^[^]*-----BEGIN [^-]+-----/, "")).replace(/-----END [^-]+-----[^]*$/, ""))
                }
                function Ln(t) {
                    var e, n, i, r, s, a, o, h, u, c, f;
                    if (f = t.match(/^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/))
                        return h = f[1],
                        e = parseInt(h),
                        2 === h.length && (50 <= e && e < 100 ? e = 1900 + e : 0 <= e && e < 50 && (e = 2e3 + e)),
                        n = parseInt(f[2]) - 1,
                        i = parseInt(f[3]),
                        r = parseInt(f[4]),
                        s = parseInt(f[5]),
                        a = parseInt(f[6]),
                        o = 0,
                        "" !== (u = f[7]) && (c = (u.substr(1) + "00").substr(0, 3),
                        o = parseInt(c)),
                        Date.UTC(e, n, i, r, s, a, o);
                    throw "unsupported zulu format: " + t
                }
                function Kn(t) {
                    return ~~(Ln(t) / 1e3)
                }
                function Mn(t) {
                    return t.replace(/%/g, "")
                }
                function kn(t) {
                    return t.replace(/(..)/g, "%$1")
                }
                function _n(t) {
                    var e = "malformed IPv6 address";
                    if (!t.match(/^[0-9A-Fa-f:]+$/))
                        throw e;
                    var n = (t = t.toLowerCase()).split(":").length - 1;
                    if (n < 2)
                        throw e;
                    var i = ":".repeat(7 - n + 2)
                      , r = (t = t.replace("::", i)).split(":");
                    if (8 != r.length)
                        throw e;
                    for (var s = 0; s < 8; s++)
                        r[s] = ("0000" + r[s]).slice(-4);
                    return r.join("")
                }
                function Un(t) {
                    if (!t.match(/^[0-9A-Fa-f]{32}$/))
                        throw "malformed IPv6 address octet";
                    for (var e = (t = t.toLowerCase()).match(/.{1,4}/g), n = 0; n < 8; n++)
                        e[n] = e[n].replace(/^0+/, ""),
                        "" == e[n] && (e[n] = "0");
                    var i = (t = ":" + e.join(":") + ":").match(/:(0:){2,}/g);
                    if (null === i)
                        return t.slice(1, -1);
                    var r = "";
                    for (n = 0; n < i.length; n++)
                        i[n].length > r.length && (r = i[n]);
                    return (t = t.replace(r, "::")).slice(1, -1)
                }
                function qn(t) {
                    var e = "malformed hex value";
                    if (!t.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/))
                        throw e;
                    if (8 != t.length)
                        return 32 == t.length ? Un(t) : t;
                    try {
                        return parseInt(t.substr(0, 2), 16) + "." + parseInt(t.substr(2, 2), 16) + "." + parseInt(t.substr(4, 2), 16) + "." + parseInt(t.substr(6, 2), 16)
                    } catch (n) {
                        throw e
                    }
                }
                function zn(t) {
                    for (var e = encodeURIComponent(t), n = "", i = 0; i < e.length; i++)
                        "%" == e[i] ? (n += e.substr(i, 3),
                        i += 2) : n = n + "%" + bn(e[i]);
                    return n
                }
                function Yn(t) {
                    return t.length % 2 == 1 ? "0" + t : t.substr(0, 1) > "7" ? "00" + t : t
                }
                function Gn(t) {
                    t = (t = (t = t.replace(/^\s*\[\s*/, "")).replace(/\s*\]\s*$/, "")).replace(/\s*/g, "");
                    try {
                        return t.split(/,/).map((function(t, e, n) {
                            var i = parseInt(t);
                            if (i < 0 || 255 < i)
                                throw "integer not in range 0-255";
                            return ("00" + i.toString(16)).slice(-2)
                        }
                        )).join("")
                    } catch (e) {
                        throw "malformed integer array string: " + e
                    }
                }
                xn.getLblen = function(t, e) {
                    if ("8" != t.substr(e + 2, 1))
                        return 1;
                    var n = parseInt(t.substr(e + 3, 1));
                    return 0 == n ? -1 : 0 < n && n < 10 ? n + 1 : -2
                }
                ,
                xn.getL = function(t, e) {
                    var n = xn.getLblen(t, e);
                    return n < 1 ? "" : t.substr(e + 2, 2 * n)
                }
                ,
                xn.getVblen = function(t, e) {
                    var n;
                    return "" == (n = xn.getL(t, e)) ? -1 : ("8" === n.substr(0, 1) ? new f(n.substr(2),16) : new f(n,16)).intValue()
                }
                ,
                xn.getVidx = function(t, e) {
                    var n = xn.getLblen(t, e);
                    return n < 0 ? n : e + 2 * (n + 1)
                }
                ,
                xn.getV = function(t, e) {
                    var n = xn.getVidx(t, e)
                      , i = xn.getVblen(t, e);
                    return t.substr(n, 2 * i)
                }
                ,
                xn.getTLV = function(t, e) {
                    return t.substr(e, 2) + xn.getL(t, e) + xn.getV(t, e)
                }
                ,
                xn.getNextSiblingIdx = function(t, e) {
                    return xn.getVidx(t, e) + 2 * xn.getVblen(t, e)
                }
                ,
                xn.getChildIdx = function(t, e) {
                    var n = xn
                      , i = new Array
                      , r = n.getVidx(t, e);
                    "03" == t.substr(e, 2) ? i.push(r + 2) : i.push(r);
                    for (var s = n.getVblen(t, e), a = r, o = 0; ; ) {
                        var h = n.getNextSiblingIdx(t, a);
                        if (null == h || h - r >= 2 * s)
                            break;
                        if (o >= 200)
                            break;
                        i.push(h),
                        a = h,
                        o++
                    }
                    return i
                }
                ,
                xn.getNthChildIdx = function(t, e, n) {
                    return xn.getChildIdx(t, e)[n]
                }
                ,
                xn.getIdxbyList = function(t, e, n, i) {
                    var r, s, a = xn;
                    if (0 == n.length) {
                        if (i !== undefined && t.substr(e, 2) !== i)
                            throw Error("checking tag doesn't match: " + t.substr(e, 2) + "!=" + i);
                        return e
                    }
                    return r = n.shift(),
                    s = a.getChildIdx(t, e),
                    a.getIdxbyList(t, s[r], n, i)
                }
                ,
                xn.getIdxbyListEx = function(t, e, n, i) {
                    var r, s, a = xn;
                    if (0 == n.length)
                        return i !== undefined && t.substr(e, 2) !== i ? -1 : e;
                    r = n.shift(),
                    s = a.getChildIdx(t, e);
                    for (var o = 0, h = 0; h < s.length; h++) {
                        var u = t.substr(s[h], 2);
                        if ("number" == typeof r && !a.isContextTag(u) && o == r || "string" == typeof r && a.isContextTag(u, r))
                            return a.getIdxbyListEx(t, s[h], n, i);
                        a.isContextTag(u) || o++
                    }
                    return -1
                }
                ,
                xn.getTLVbyList = function(t, e, n, i) {
                    var r = xn
                      , s = r.getIdxbyList(t, e, n);
                    if (s === undefined)
                        throw new Error("can't find nthList object");
                    if (i !== undefined && t.substr(s, 2) != i)
                        throw new Error("checking tag doesn't match: " + t.substr(s, 2) + "!=" + i);
                    return r.getTLV(t, s)
                }
                ,
                xn.getTLVbyListEx = function(t, e, n, i) {
                    var r = xn
                      , s = r.getIdxbyListEx(t, e, n, i);
                    return -1 == s ? null : r.getTLV(t, s)
                }
                ,
                xn.getVbyList = function(t, e, n, i, r) {
                    var s, a, o = xn;
                    if ((s = o.getIdxbyList(t, e, n, i)) === undefined)
                        throw "can't find nthList object";
                    return a = o.getV(t, s),
                    !0 === r && (a = a.substr(2)),
                    a
                }
                ,
                xn.getVbyListEx = function(t, e, n, i, r) {
                    var s, a, o = xn;
                    return -1 == (s = o.getIdxbyListEx(t, e, n, i)) ? null : (a = o.getV(t, s),
                    "03" == t.substr(s, 2) && !1 !== r && (a = a.substr(2)),
                    a)
                }
                ,
                xn.hextooidstr = function(t) {
                    var e = function(t, e) {
                        return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                    }
                      , n = []
                      , i = t.substr(0, 2)
                      , r = parseInt(i, 16);
                    n[0] = new String(Math.floor(r / 40)),
                    n[1] = new String(r % 40);
                    for (var s = t.substr(2), a = [], o = 0; o < s.length / 2; o++)
                        a.push(parseInt(s.substr(2 * o, 2), 16));
                    var h = []
                      , u = "";
                    for (o = 0; o < a.length; o++)
                        128 & a[o] ? u += e((127 & a[o]).toString(2), 7) : (u += e((127 & a[o]).toString(2), 7),
                        h.push(new String(parseInt(u, 2))),
                        u = "");
                    var c = n.join(".");
                    return h.length > 0 && (c = c + "." + h.join(".")),
                    c
                }
                ,
                xn.dump = function(t, e, n, i) {
                    var r = xn
                      , s = r.getV
                      , a = r.dump
                      , o = r.getChildIdx
                      , h = t;
                    t instanceof mn.asn1.ASN1Object && (h = t.getEncodedHex());
                    var u = function(t, e) {
                        return t.length <= 2 * e ? t : t.substr(0, e) + "..(total " + t.length / 2 + "bytes).." + t.substr(t.length - e, e)
                    };
                    e === undefined && (e = {
                        ommit_long_octet: 32
                    }),
                    n === undefined && (n = 0),
                    i === undefined && (i = "");
                    var c, f = e.ommit_long_octet;
                    if ("01" == (c = h.substr(n, 2)))
                        return "00" == (l = s(h, n)) ? i + "BOOLEAN FALSE\n" : i + "BOOLEAN TRUE\n";
                    if ("02" == c)
                        return i + "INTEGER " + u(l = s(h, n), f) + "\n";
                    if ("03" == c) {
                        var l = s(h, n);
                        if (r.isASN1HEX(l.substr(2))) {
                            var d = i + "BITSTRING, encapsulates\n";
                            return d += a(l.substr(2), e, 0, i + "  ")
                        }
                        return i + "BITSTRING " + u(l, f) + "\n"
                    }
                    if ("04" == c) {
                        l = s(h, n);
                        if (r.isASN1HEX(l)) {
                            d = i + "OCTETSTRING, encapsulates\n";
                            return d += a(l, e, 0, i + "  ")
                        }
                        return i + "OCTETSTRING " + u(l, f) + "\n"
                    }
                    if ("05" == c)
                        return i + "NULL\n";
                    if ("06" == c) {
                        var g = s(h, n)
                          , p = mn.asn1.ASN1Util.oidHexToInt(g)
                          , y = mn.asn1.x509.OID.oid2name(p)
                          , m = p.replace(/\./g, " ");
                        return "" != y ? i + "ObjectIdentifier " + y + " (" + m + ")\n" : i + "ObjectIdentifier (" + m + ")\n"
                    }
                    if ("0c" == c)
                        return i + "UTF8String '" + Pn(s(h, n)) + "'\n";
                    if ("13" == c)
                        return i + "PrintableString '" + Pn(s(h, n)) + "'\n";
                    if ("14" == c)
                        return i + "TeletexString '" + Pn(s(h, n)) + "'\n";
                    if ("16" == c)
                        return i + "IA5String '" + Pn(s(h, n)) + "'\n";
                    if ("17" == c)
                        return i + "UTCTime " + Pn(s(h, n)) + "\n";
                    if ("18" == c)
                        return i + "GeneralizedTime " + Pn(s(h, n)) + "\n";
                    if ("1a" == c)
                        return i + "VisualString '" + Pn(s(h, n)) + "'\n";
                    if ("1e" == c)
                        return i + "BMPString '" + Pn(s(h, n)) + "'\n";
                    if ("30" == c) {
                        if ("3000" == h.substr(n, 4))
                            return i + "SEQUENCE {}\n";
                        d = i + "SEQUENCE\n";
                        var v = e;
                        if ((2 == (F = o(h, n)).length || 3 == F.length) && "06" == h.substr(F[0], 2) && "04" == h.substr(F[F.length - 1], 2)) {
                            y = r.oidname(s(h, F[0]));
                            var S = JSON.parse(JSON.stringify(e));
                            S.x509ExtName = y,
                            v = S
                        }
                        for (var x = 0; x < F.length; x++)
                            d += a(h, v, F[x], i + "  ");
                        return d
                    }
                    if ("31" == c) {
                        d = i + "SET\n";
                        var F = o(h, n);
                        for (x = 0; x < F.length; x++)
                            d += a(h, e, F[x], i + "  ");
                        return d
                    }
                    if (0 != (128 & (c = parseInt(c, 16)))) {
                        var E = 31 & c;
                        if (0 != (32 & c)) {
                            var d = i + "[" + E + "]\n";
                            for (F = o(h, n),
                            x = 0; x < F.length; x++)
                                d += a(h, e, F[x], i + "  ");
                            return d
                        }
                        return "68747470" == (l = s(h, n)).substr(0, 8) && (l = Pn(l)),
                        "subjectAltName" === e.x509ExtName && 2 == E && (l = Pn(l)),
                        d = i + "[" + E + "] " + l + "\n"
                    }
                    return i + "UNKNOWN(" + c + ") " + s(h, n) + "\n"
                }
                ,
                xn.isContextTag = function(t, e) {
                    var n, i;
                    t = t.toLowerCase();
                    try {
                        n = parseInt(t, 16)
                    } catch (r) {
                        return -1
                    }
                    if (e === undefined)
                        return 128 == (192 & n);
                    try {
                        return null != e.match(/^\[[0-9]+\]$/) && (!((i = parseInt(e.substr(1, e.length - 1), 10)) > 31) && (128 == (192 & n) && (31 & n) == i))
                    } catch (r) {
                        return !1
                    }
                }
                ,
                xn.isASN1HEX = function(t) {
                    var e = xn;
                    if (t.length % 2 == 1)
                        return !1;
                    var n = e.getVblen(t, 0)
                      , i = t.substr(0, 2)
                      , r = e.getL(t, 0);
                    return t.length - i.length - r.length == 2 * n
                }
                ,
                xn.checkStrictDER = function(t, e, n, i, r) {
                    var s = xn;
                    if (n === undefined) {
                        if ("string" != typeof t)
                            throw new Error("not hex string");
                        if (t = t.toLowerCase(),
                        !mn.lang.String.isHex(t))
                            throw new Error("not hex string");
                        n = t.length,
                        r = (i = t.length / 2) < 128 ? 1 : Math.ceil(i.toString(16)) + 1
                    }
                    if (s.getL(t, e).length > 2 * r)
                        throw new Error("L of TLV too long: idx=" + e);
                    var a = s.getVblen(t, e);
                    if (a > i)
                        throw new Error("value of L too long than hex: idx=" + e);
                    var o = s.getTLV(t, e)
                      , h = o.length - 2 - s.getL(t, e).length;
                    if (h !== 2 * a)
                        throw new Error("V string length and L's value not the same:" + h + "/" + 2 * a);
                    if (0 === e && t.length != o.length)
                        throw new Error("total length and TLV length unmatch:" + t.length + "!=" + o.length);
                    var u = t.substr(e, 2);
                    if ("02" === u) {
                        var c = s.getVidx(t, e);
                        if ("00" == t.substr(c, 2) && t.charCodeAt(c + 2) < 56)
                            throw new Error("not least zeros for DER INTEGER")
                    }
                    if (32 & parseInt(u, 16)) {
                        for (var f = s.getVblen(t, e), l = 0, d = s.getChildIdx(t, e), g = 0; g < d.length; g++) {
                            l += s.getTLV(t, d[g]).length,
                            s.checkStrictDER(t, d[g], n, i, r)
                        }
                        if (2 * f != l)
                            throw new Error("sum of children's TLV length and L unmatch: " + 2 * f + "!=" + l)
                    }
                }
                ,
                xn.oidname = function(t) {
                    var e = mn.asn1;
                    mn.lang.String.isHex(t) && (t = e.ASN1Util.oidHexToInt(t));
                    var n = e.x509.OID.oid2name(t);
                    return "" === n && (n = t),
                    n
                }
                ,
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.asn1 && mn.asn1 || (mn.asn1 = {}),
                "undefined" != typeof mn.asn1.x509 && mn.asn1.x509 || (mn.asn1.x509 = {}),
                mn.asn1.x509.Certificate = function(t) {
                    mn.asn1.x509.Certificate.superclass.constructor.call(this);
                    var e = mn
                      , n = (e.crypto,
                    e.asn1)
                      , i = n.DERSequence
                      , r = n.DERBitString;
                    this.sign = function() {
                        this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg;
                        var t = new mn.crypto.Signature({
                            alg: this.asn1SignatureAlg.nameAlg
                        });
                        t.init(this.prvKey),
                        t.updateHex(this.asn1TBSCert.getEncodedHex()),
                        this.hexSig = t.sign(),
                        this.asn1Sig = new r({
                            hex: "00" + this.hexSig
                        });
                        var e = new i({
                            array: [this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig]
                        });
                        this.hTLV = e.getEncodedHex(),
                        this.isModified = !1
                    }
                    ,
                    this.setSignatureHex = function(t) {
                        this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg,
                        this.hexSig = t,
                        this.asn1Sig = new r({
                            hex: "00" + this.hexSig
                        });
                        var e = new i({
                            array: [this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig]
                        });
                        this.hTLV = e.getEncodedHex(),
                        this.isModified = !1
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (0 == this.isModified && null != this.hTLV)
                            return this.hTLV;
                        throw "not signed yet"
                    }
                    ,
                    this.getPEMString = function() {
                        return "-----BEGIN CERTIFICATE-----\r\n" + Nn(this.getEncodedHex()) + "\r\n-----END CERTIFICATE-----\r\n"
                    }
                    ,
                    t !== undefined && (t.tbscertobj !== undefined && (this.asn1TBSCert = t.tbscertobj),
                    t.prvkeyobj !== undefined && (this.prvKey = t.prvkeyobj))
                }
                ,
                r.lang.extend(mn.asn1.x509.Certificate, mn.asn1.ASN1Object),
                mn.asn1.x509.TBSCertificate = function(t) {
                    mn.asn1.x509.TBSCertificate.superclass.constructor.call(this);
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.DERInteger
                      , r = e.DERTaggedObject
                      , s = e.x509
                      , a = s.Time
                      , o = s.X500Name
                      , h = s.SubjectPublicKeyInfo;
                    this._initialize = function() {
                        this.asn1Array = new Array,
                        this.asn1Version = new r({
                            obj: new i({
                                int: 2
                            })
                        }),
                        this.asn1SerialNumber = null,
                        this.asn1SignatureAlg = null,
                        this.asn1Issuer = null,
                        this.asn1NotBefore = null,
                        this.asn1NotAfter = null,
                        this.asn1Subject = null,
                        this.asn1SubjPKey = null,
                        this.extensionsArray = new Array
                    }
                    ,
                    this.setSerialNumberByParam = function(t) {
                        this.asn1SerialNumber = new i(t)
                    }
                    ,
                    this.setSignatureAlgByParam = function(t) {
                        this.asn1SignatureAlg = new s.AlgorithmIdentifier(t)
                    }
                    ,
                    this.setIssuerByParam = function(t) {
                        this.asn1Issuer = new o(t)
                    }
                    ,
                    this.setNotBeforeByParam = function(t) {
                        this.asn1NotBefore = new a(t)
                    }
                    ,
                    this.setNotAfterByParam = function(t) {
                        this.asn1NotAfter = new a(t)
                    }
                    ,
                    this.setSubjectByParam = function(t) {
                        this.asn1Subject = new o(t)
                    }
                    ,
                    this.setSubjectPublicKey = function(t) {
                        this.asn1SubjPKey = new h(t)
                    }
                    ,
                    this.setSubjectPublicKeyByGetKey = function(t) {
                        var e = Wn.getKey(t);
                        this.asn1SubjPKey = new h(e)
                    }
                    ,
                    this.appendExtension = function(t) {
                        this.extensionsArray.push(t)
                    }
                    ,
                    this.appendExtensionByName = function(t, e) {
                        mn.asn1.x509.Extension.appendByNameToArray(t, e, this.extensionsArray)
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (null == this.asn1NotBefore || null == this.asn1NotAfter)
                            throw "notBefore and/or notAfter not set";
                        var t = new n({
                            array: [this.asn1NotBefore, this.asn1NotAfter]
                        });
                        if (this.asn1Array = new Array,
                        this.asn1Array.push(this.asn1Version),
                        this.asn1Array.push(this.asn1SerialNumber),
                        this.asn1Array.push(this.asn1SignatureAlg),
                        this.asn1Array.push(this.asn1Issuer),
                        this.asn1Array.push(t),
                        this.asn1Array.push(this.asn1Subject),
                        this.asn1Array.push(this.asn1SubjPKey),
                        this.extensionsArray.length > 0) {
                            var e = new n({
                                array: this.extensionsArray
                            })
                              , i = new r({
                                explicit: !0,
                                tag: "a3",
                                obj: e
                            });
                            this.asn1Array.push(i)
                        }
                        var s = new n({
                            array: this.asn1Array
                        });
                        return this.hTLV = s.getEncodedHex(),
                        this.isModified = !1,
                        this.hTLV
                    }
                    ,
                    this._initialize()
                }
                ,
                r.lang.extend(mn.asn1.x509.TBSCertificate, mn.asn1.ASN1Object),
                mn.asn1.x509.Extension = function(t) {
                    mn.asn1.x509.Extension.superclass.constructor.call(this);
                    var e = mn.asn1
                      , n = e.DERObjectIdentifier
                      , i = e.DEROctetString
                      , r = (e.DERBitString,
                    e.DERBoolean)
                      , s = e.DERSequence;
                    this.getEncodedHex = function() {
                        var t = new n({
                            oid: this.oid
                        })
                          , e = new i({
                            hex: this.getExtnValueHex()
                        })
                          , a = new Array;
                        return a.push(t),
                        this.critical && a.push(new r),
                        a.push(e),
                        new s({
                            array: a
                        }).getEncodedHex()
                    }
                    ,
                    this.critical = !1,
                    t !== undefined && t.critical !== undefined && (this.critical = t.critical)
                }
                ,
                r.lang.extend(mn.asn1.x509.Extension, mn.asn1.ASN1Object),
                mn.asn1.x509.Extension.appendByNameToArray = function(t, e, n) {
                    var i = t.toLowerCase()
                      , r = mn.asn1.x509;
                    if ("basicconstraints" == i) {
                        var s = new r.BasicConstraints(e);
                        n.push(s)
                    } else if ("keyusage" == i) {
                        s = new r.KeyUsage(e);
                        n.push(s)
                    } else if ("crldistributionpoints" == i) {
                        s = new r.CRLDistributionPoints(e);
                        n.push(s)
                    } else if ("extkeyusage" == i) {
                        s = new r.ExtKeyUsage(e);
                        n.push(s)
                    } else if ("authoritykeyidentifier" == i) {
                        s = new r.AuthorityKeyIdentifier(e);
                        n.push(s)
                    } else if ("subjectkeyidentifier" == i) {
                        s = new r.SubjectKeyIdentifier(e);
                        n.push(s)
                    } else if ("authorityinfoaccess" == i) {
                        s = new r.AuthorityInfoAccess(e);
                        n.push(s)
                    } else if ("subjectaltname" == i) {
                        s = new r.SubjectAltName(e);
                        n.push(s)
                    } else if ("issueraltname" == i) {
                        s = new r.IssuerAltName(e);
                        n.push(s)
                    } else {
                        if ("certificatepolicies" != i)
                            throw new Error("unsupported extension name: " + t);
                        s = new r.CertificatePolicies(e);
                        n.push(s)
                    }
                }
                ,
                mn.asn1.x509.KeyUsage = function(t) {
                    mn.asn1.x509.KeyUsage.superclass.constructor.call(this, t);
                    var e = Qn.KEYUSAGE_NAME;
                    if (this.getExtnValueHex = function() {
                        return this.asn1ExtnValue.getEncodedHex()
                    }
                    ,
                    this.oid = "2.5.29.15",
                    t !== undefined && (t.bin !== undefined && (this.asn1ExtnValue = new mn.asn1.DERBitString(t)),
                    t.names !== undefined && t.names.length !== undefined)) {
                        for (var n = t.names, i = "000000000", r = 0; r < n.length; r++)
                            for (var s = 0; s < e.length; s++)
                                n[r] === e[s] && (i = i.substring(0, s) + "1" + i.substring(s + 1, i.length));
                        this.asn1ExtnValue = new mn.asn1.DERBitString({
                            bin: i
                        })
                    }
                }
                ,
                r.lang.extend(mn.asn1.x509.KeyUsage, mn.asn1.x509.Extension),
                mn.asn1.x509.BasicConstraints = function(t) {
                    mn.asn1.x509.BasicConstraints.superclass.constructor.call(this, t);
                    this.getExtnValueHex = function() {
                        var t = new Array;
                        this.cA && t.push(new mn.asn1.DERBoolean),
                        this.pathLen > -1 && t.push(new mn.asn1.DERInteger({
                            int: this.pathLen
                        }));
                        var e = new mn.asn1.DERSequence({
                            array: t
                        });
                        return this.asn1ExtnValue = e,
                        this.asn1ExtnValue.getEncodedHex()
                    }
                    ,
                    this.oid = "2.5.29.19",
                    this.cA = !1,
                    this.pathLen = -1,
                    t !== undefined && (t.cA !== undefined && (this.cA = t.cA),
                    t.pathLen !== undefined && (this.pathLen = t.pathLen))
                }
                ,
                r.lang.extend(mn.asn1.x509.BasicConstraints, mn.asn1.x509.Extension),
                mn.asn1.x509.CRLDistributionPoints = function(t) {
                    mn.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, t);
                    var e = mn.asn1
                      , n = e.x509;
                    this.getExtnValueHex = function() {
                        return this.asn1ExtnValue.getEncodedHex()
                    }
                    ,
                    this.setByDPArray = function(t) {
                        this.asn1ExtnValue = new e.DERSequence({
                            array: t
                        })
                    }
                    ,
                    this.setByOneURI = function(t) {
                        var e = new n.GeneralNames([{
                            uri: t
                        }])
                          , i = new n.DistributionPointName(e)
                          , r = new n.DistributionPoint({
                            dpobj: i
                        });
                        this.setByDPArray([r])
                    }
                    ,
                    this.oid = "2.5.29.31",
                    t !== undefined && (t.array !== undefined ? this.setByDPArray(t.array) : t.uri !== undefined && this.setByOneURI(t.uri))
                }
                ,
                r.lang.extend(mn.asn1.x509.CRLDistributionPoints, mn.asn1.x509.Extension),
                mn.asn1.x509.CertificatePolicies = function(t) {
                    mn.asn1.x509.CertificatePolicies.superclass.constructor.call(this, t);
                    var e = mn.asn1
                      , n = e.x509
                      , i = e.DERSequence
                      , r = n.PolicyInformation;
                    this.params = null,
                    this.getExtnValueHex = function() {
                        for (var t = [], e = 0; e < this.params.array.length; e++)
                            t.push(new r(this.params.array[e]));
                        var n = new i({
                            array: t
                        });
                        return this.asn1ExtnValue = n,
                        this.asn1ExtnValue.getEncodedHex()
                    }
                    ,
                    this.oid = "2.5.29.32",
                    t !== undefined && (this.params = t)
                }
                ,
                r.lang.extend(mn.asn1.x509.CertificatePolicies, mn.asn1.x509.Extension),
                mn.asn1.x509.PolicyInformation = function(t) {
                    mn.asn1.x509.PolicyInformation.superclass.constructor.call(this, t);
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.DERObjectIdentifier
                      , r = e.x509.PolicyQualifierInfo;
                    this.params = null,
                    this.getEncodedHex = function() {
                        if (this.params.policyoid === undefined && this.params.array === undefined)
                            throw new Error("parameter oid and array missing");
                        var t = [new i({
                            oid: this.params.policyoid
                        })];
                        if (this.params.array !== undefined) {
                            for (var e = [], s = 0; s < this.params.array.length; s++)
                                e.push(new r(this.params.array[s]));
                            e.length > 0 && t.push(new n({
                                array: e
                            }))
                        }
                        return new n({
                            array: t
                        }).getEncodedHex()
                    }
                    ,
                    t !== undefined && (this.params = t)
                }
                ,
                r.lang.extend(mn.asn1.x509.PolicyInformation, mn.asn1.ASN1Object),
                mn.asn1.x509.PolicyQualifierInfo = function(t) {
                    mn.asn1.x509.PolicyQualifierInfo.superclass.constructor.call(this, t);
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.DERIA5String
                      , r = e.DERObjectIdentifier
                      , s = e.x509.UserNotice;
                    this.params = null,
                    this.getEncodedHex = function() {
                        return this.params.cps !== undefined ? new n({
                            array: [new r({
                                oid: "1.3.6.1.5.5.7.2.1"
                            }), new i({
                                str: this.params.cps
                            })]
                        }).getEncodedHex() : this.params.unotice != undefined ? new n({
                            array: [new r({
                                oid: "1.3.6.1.5.5.7.2.2"
                            }), new s(this.params.unotice)]
                        }).getEncodedHex() : void 0
                    }
                    ,
                    t !== undefined && (this.params = t)
                }
                ,
                r.lang.extend(mn.asn1.x509.PolicyQualifierInfo, mn.asn1.ASN1Object),
                mn.asn1.x509.UserNotice = function(t) {
                    mn.asn1.x509.UserNotice.superclass.constructor.call(this, t);
                    var e = mn.asn1.DERSequence
                      , n = (mn.asn1.DERInteger,
                    mn.asn1.x509.DisplayText)
                      , i = mn.asn1.x509.NoticeReference;
                    this.params = null,
                    this.getEncodedHex = function() {
                        var t = [];
                        return this.params.noticeref !== undefined && t.push(new i(this.params.noticeref)),
                        this.params.exptext !== undefined && t.push(new n(this.params.exptext)),
                        new e({
                            array: t
                        }).getEncodedHex()
                    }
                    ,
                    t !== undefined && (this.params = t)
                }
                ,
                r.lang.extend(mn.asn1.x509.UserNotice, mn.asn1.ASN1Object),
                mn.asn1.x509.NoticeReference = function(t) {
                    mn.asn1.x509.NoticeReference.superclass.constructor.call(this, t);
                    var e = mn.asn1.DERSequence
                      , n = mn.asn1.DERInteger
                      , i = mn.asn1.x509.DisplayText;
                    this.params = null,
                    this.getEncodedHex = function() {
                        var t = [];
                        if (this.params.org !== undefined && t.push(new i(this.params.org)),
                        this.params.noticenum !== undefined) {
                            for (var r = [], s = this.params.noticenum, a = 0; a < s.length; a++)
                                r.push(new n(s[a]));
                            t.push(new e({
                                array: r
                            }))
                        }
                        if (0 == t.length)
                            throw new Error("parameter is empty");
                        return new e({
                            array: t
                        }).getEncodedHex()
                    }
                    ,
                    t !== undefined && (this.params = t)
                }
                ,
                r.lang.extend(mn.asn1.x509.NoticeReference, mn.asn1.ASN1Object),
                mn.asn1.x509.DisplayText = function(t) {
                    mn.asn1.x509.DisplayText.superclass.constructor.call(this, t),
                    this.hT = "0c",
                    t !== undefined && ("ia5" === t.type ? this.hT = "16" : "vis" === t.type ? this.hT = "1a" : "bmp" === t.type && (this.hT = "1e"))
                }
                ,
                r.lang.extend(mn.asn1.x509.DisplayText, mn.asn1.DERAbstractString),
                mn.asn1.x509.ExtKeyUsage = function(t) {
                    mn.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, t);
                    var e = mn.asn1;
                    this.setPurposeArray = function(t) {
                        this.asn1ExtnValue = new e.DERSequence;
                        for (var n = 0; n < t.length; n++) {
                            var i = new e.DERObjectIdentifier(t[n]);
                            this.asn1ExtnValue.appendASN1Object(i)
                        }
                    }
                    ,
                    this.getExtnValueHex = function() {
                        return this.asn1ExtnValue.getEncodedHex()
                    }
                    ,
                    this.oid = "2.5.29.37",
                    t !== undefined && t.array !== undefined && this.setPurposeArray(t.array)
                }
                ,
                r.lang.extend(mn.asn1.x509.ExtKeyUsage, mn.asn1.x509.Extension),
                mn.asn1.x509.AuthorityKeyIdentifier = function(t) {
                    mn.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, t);
                    var e = mn
                      , n = e.asn1
                      , i = n.DERTaggedObject
                      , r = n.x509.GeneralNames;
                    e.crypto.Util.isKey;
                    this.asn1KID = null,
                    this.asn1CertIssuer = null,
                    this.asn1CertSN = null,
                    this.getExtnValueHex = function() {
                        var t = new Array;
                        this.asn1KID && t.push(new i({
                            explicit: !1,
                            tag: "80",
                            obj: this.asn1KID
                        })),
                        this.asn1CertIssuer && t.push(new i({
                            explicit: !1,
                            tag: "a1",
                            obj: new r([{
                                dn: this.asn1CertIssuer
                            }])
                        })),
                        this.asn1CertSN && t.push(new i({
                            explicit: !1,
                            tag: "82",
                            obj: this.asn1CertSN
                        }));
                        var e = new n.DERSequence({
                            array: t
                        });
                        return this.asn1ExtnValue = e,
                        this.asn1ExtnValue.getEncodedHex()
                    }
                    ,
                    this.setKIDByParam = function(t) {
                        if (t.str !== undefined || t.hex !== undefined)
                            this.asn1KID = new mn.asn1.DEROctetString(t);
                        else if ("object" == typeof t && mn.crypto.Util.isKey(t) || "string" == typeof t && -1 != t.indexOf("BEGIN ")) {
                            var e = t;
                            "string" == typeof t && (e = Wn.getKey(t));
                            var n = Wn.getKeyID(e);
                            this.asn1KID = new mn.asn1.DEROctetString({
                                hex: n
                            })
                        }
                    }
                    ,
                    this.setCertIssuerByParam = function(t) {
                        t.str !== undefined || t.ldapstr !== undefined || t.hex !== undefined || t.certsubject !== undefined || t.certissuer !== undefined ? this.asn1CertIssuer = new mn.asn1.x509.X500Name(t) : "string" == typeof t && -1 != t.indexOf("BEGIN ") && -1 != t.indexOf("CERTIFICATE") && (this.asn1CertIssuer = new mn.asn1.x509.X500Name({
                            certissuer: t
                        }))
                    }
                    ,
                    this.setCertSNByParam = function(t) {
                        if (t.str !== undefined || t.bigint !== undefined || t.hex !== undefined)
                            this.asn1CertSN = new mn.asn1.DERInteger(t);
                        else if ("string" == typeof t && -1 != t.indexOf("BEGIN ") && t.indexOf("CERTIFICATE")) {
                            var e = new Qn;
                            e.readCertPEM(t);
                            var n = e.getSerialNumberHex();
                            this.asn1CertSN = new mn.asn1.DERInteger({
                                hex: n
                            })
                        }
                    }
                    ,
                    this.oid = "2.5.29.35",
                    t !== undefined && (t.kid !== undefined && this.setKIDByParam(t.kid),
                    t.issuer !== undefined && this.setCertIssuerByParam(t.issuer),
                    t.sn !== undefined && this.setCertSNByParam(t.sn),
                    t.issuersn !== undefined && "string" == typeof t.issuersn && -1 != t.issuersn.indexOf("BEGIN ") && t.issuersn.indexOf("CERTIFICATE") && (this.setCertSNByParam(t.issuersn),
                    this.setCertIssuerByParam(t.issuersn)))
                }
                ,
                r.lang.extend(mn.asn1.x509.AuthorityKeyIdentifier, mn.asn1.x509.Extension),
                mn.asn1.x509.SubjectKeyIdentifier = function(t) {
                    mn.asn1.x509.SubjectKeyIdentifier.superclass.constructor.call(this, t);
                    var e = mn.asn1.DEROctetString;
                    this.asn1KID = null,
                    this.getExtnValueHex = function() {
                        return this.asn1ExtnValue = this.asn1KID,
                        this.asn1ExtnValue.getEncodedHex()
                    }
                    ,
                    this.setKIDByParam = function(t) {
                        if (t.str !== undefined || t.hex !== undefined)
                            this.asn1KID = new e(t);
                        else if ("object" == typeof t && mn.crypto.Util.isKey(t) || "string" == typeof t && -1 != t.indexOf("BEGIN")) {
                            var n = t;
                            "string" == typeof t && (n = Wn.getKey(t));
                            var i = Wn.getKeyID(n);
                            this.asn1KID = new mn.asn1.DEROctetString({
                                hex: i
                            })
                        }
                    }
                    ,
                    this.oid = "2.5.29.14",
                    t !== undefined && t.kid !== undefined && this.setKIDByParam(t.kid)
                }
                ,
                r.lang.extend(mn.asn1.x509.SubjectKeyIdentifier, mn.asn1.x509.Extension),
                mn.asn1.x509.AuthorityInfoAccess = function(t) {
                    mn.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, t),
                    this.setAccessDescriptionArray = function(t) {
                        for (var e = new Array, n = mn.asn1, i = n.DERSequence, r = 0; r < t.length; r++) {
                            var s = new i({
                                array: [new n.DERObjectIdentifier(t[r].accessMethod), new n.x509.GeneralName(t[r].accessLocation)]
                            });
                            e.push(s)
                        }
                        this.asn1ExtnValue = new i({
                            array: e
                        })
                    }
                    ,
                    this.getExtnValueHex = function() {
                        return this.asn1ExtnValue.getEncodedHex()
                    }
                    ,
                    this.oid = "1.3.6.1.5.5.7.1.1",
                    t !== undefined && t.array !== undefined && this.setAccessDescriptionArray(t.array)
                }
                ,
                r.lang.extend(mn.asn1.x509.AuthorityInfoAccess, mn.asn1.x509.Extension),
                mn.asn1.x509.SubjectAltName = function(t) {
                    mn.asn1.x509.SubjectAltName.superclass.constructor.call(this, t),
                    this.setNameArray = function(t) {
                        this.asn1ExtnValue = new mn.asn1.x509.GeneralNames(t)
                    }
                    ,
                    this.getExtnValueHex = function() {
                        return this.asn1ExtnValue.getEncodedHex()
                    }
                    ,
                    this.oid = "2.5.29.17",
                    t !== undefined && t.array !== undefined && this.setNameArray(t.array)
                }
                ,
                r.lang.extend(mn.asn1.x509.SubjectAltName, mn.asn1.x509.Extension),
                mn.asn1.x509.IssuerAltName = function(t) {
                    mn.asn1.x509.IssuerAltName.superclass.constructor.call(this, t),
                    this.setNameArray = function(t) {
                        this.asn1ExtnValue = new mn.asn1.x509.GeneralNames(t)
                    }
                    ,
                    this.getExtnValueHex = function() {
                        return this.asn1ExtnValue.getEncodedHex()
                    }
                    ,
                    this.oid = "2.5.29.18",
                    t !== undefined && t.array !== undefined && this.setNameArray(t.array)
                }
                ,
                r.lang.extend(mn.asn1.x509.IssuerAltName, mn.asn1.x509.Extension),
                mn.asn1.x509.CRL = function(t) {
                    mn.asn1.x509.CRL.superclass.constructor.call(this);
                    this.sign = function() {
                        this.asn1SignatureAlg = this.asn1TBSCertList.asn1SignatureAlg,
                        sig = new mn.crypto.Signature({
                            alg: this.asn1SignatureAlg.nameAlg,
                            prov: "cryptojs/jsrsa"
                        }),
                        sig.init(this.prvKey),
                        sig.updateHex(this.asn1TBSCertList.getEncodedHex()),
                        this.hexSig = sig.sign(),
                        this.asn1Sig = new mn.asn1.DERBitString({
                            hex: "00" + this.hexSig
                        });
                        var t = new mn.asn1.DERSequence({
                            array: [this.asn1TBSCertList, this.asn1SignatureAlg, this.asn1Sig]
                        });
                        this.hTLV = t.getEncodedHex(),
                        this.isModified = !1
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (0 == this.isModified && null != this.hTLV)
                            return this.hTLV;
                        throw "not signed yet"
                    }
                    ,
                    this.getPEMString = function() {
                        return "-----BEGIN X509 CRL-----\r\n" + Nn(this.getEncodedHex()) + "\r\n-----END X509 CRL-----\r\n"
                    }
                    ,
                    t !== undefined && (t.tbsobj !== undefined && (this.asn1TBSCertList = t.tbsobj),
                    t.prvkeyobj !== undefined && (this.prvKey = t.prvkeyobj))
                }
                ,
                r.lang.extend(mn.asn1.x509.CRL, mn.asn1.ASN1Object),
                mn.asn1.x509.TBSCertList = function(t) {
                    mn.asn1.x509.TBSCertList.superclass.constructor.call(this);
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.x509
                      , r = i.Time;
                    this.setSignatureAlgByParam = function(t) {
                        this.asn1SignatureAlg = new i.AlgorithmIdentifier(t)
                    }
                    ,
                    this.setIssuerByParam = function(t) {
                        this.asn1Issuer = new i.X500Name(t)
                    }
                    ,
                    this.setThisUpdateByParam = function(t) {
                        this.asn1ThisUpdate = new r(t)
                    }
                    ,
                    this.setNextUpdateByParam = function(t) {
                        this.asn1NextUpdate = new r(t)
                    }
                    ,
                    this.addRevokedCert = function(t, e) {
                        var n = {};
                        t != undefined && null != t && (n.sn = t),
                        e != undefined && null != e && (n.time = e);
                        var r = new i.CRLEntry(n);
                        this.aRevokedCert.push(r)
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (this.asn1Array = new Array,
                        null != this.asn1Version && this.asn1Array.push(this.asn1Version),
                        this.asn1Array.push(this.asn1SignatureAlg),
                        this.asn1Array.push(this.asn1Issuer),
                        this.asn1Array.push(this.asn1ThisUpdate),
                        null != this.asn1NextUpdate && this.asn1Array.push(this.asn1NextUpdate),
                        this.aRevokedCert.length > 0) {
                            var t = new n({
                                array: this.aRevokedCert
                            });
                            this.asn1Array.push(t)
                        }
                        var e = new n({
                            array: this.asn1Array
                        });
                        return this.hTLV = e.getEncodedHex(),
                        this.isModified = !1,
                        this.hTLV
                    }
                    ,
                    this._initialize = function() {
                        this.asn1Version = null,
                        this.asn1SignatureAlg = null,
                        this.asn1Issuer = null,
                        this.asn1ThisUpdate = null,
                        this.asn1NextUpdate = null,
                        this.aRevokedCert = new Array
                    }
                    ,
                    this._initialize()
                }
                ,
                r.lang.extend(mn.asn1.x509.TBSCertList, mn.asn1.ASN1Object),
                mn.asn1.x509.CRLEntry = function(t) {
                    mn.asn1.x509.CRLEntry.superclass.constructor.call(this);
                    var e = mn.asn1;
                    this.setCertSerial = function(t) {
                        this.sn = new e.DERInteger(t)
                    }
                    ,
                    this.setRevocationDate = function(t) {
                        this.time = new e.x509.Time(t)
                    }
                    ,
                    this.getEncodedHex = function() {
                        var t = new e.DERSequence({
                            array: [this.sn, this.time]
                        });
                        return this.TLV = t.getEncodedHex(),
                        this.TLV
                    }
                    ,
                    t !== undefined && (t.time !== undefined && this.setRevocationDate(t.time),
                    t.sn !== undefined && this.setCertSerial(t.sn))
                }
                ,
                r.lang.extend(mn.asn1.x509.CRLEntry, mn.asn1.ASN1Object),
                mn.asn1.x509.X500Name = function(t) {
                    mn.asn1.x509.X500Name.superclass.constructor.call(this),
                    this.asn1Array = new Array;
                    var e, n = mn.asn1, i = n.x509;
                    (this.setByString = function(t) {
                        var e = t.split("/");
                        e.shift();
                        for (var n = [], r = 0; r < e.length; r++)
                            if (e[r].match(/^[^=]+=.+$/))
                                n.push(e[r]);
                            else {
                                var s = n.length - 1;
                                n[s] = n[s] + "/" + e[r]
                            }
                        for (r = 0; r < n.length; r++)
                            this.asn1Array.push(new i.RDN({
                                str: n[r]
                            }))
                    }
                    ,
                    this.setByLdapString = function(t) {
                        var e = i.X500Name.ldapToCompat(t);
                        this.setByString(e)
                    }
                    ,
                    this.setByObject = function(t) {
                        for (var e in t)
                            if (t.hasOwnProperty(e)) {
                                var n = new mn.asn1.x509.RDN({
                                    str: e + "=" + t[e]
                                });
                                this.asn1Array ? this.asn1Array.push(n) : this.asn1Array = [n]
                            }
                    }
                    ,
                    this.getEncodedHex = function() {
                        if ("string" == typeof this.hTLV)
                            return this.hTLV;
                        var t = new n.DERSequence({
                            array: this.asn1Array
                        });
                        return this.hTLV = t.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined) && (t.str !== undefined ? this.setByString(t.str) : t.ldapstr !== undefined ? this.setByLdapString(t.ldapstr) : t.hex !== undefined ? this.hTLV = t.hex : t.certissuer !== undefined ? ((e = new Qn).readCertPEM(t.certissuer),
                    this.hTLV = e.getIssuerHex()) : t.certsubject !== undefined ? ((e = new Qn).readCertPEM(t.certsubject),
                    this.hTLV = e.getSubjectHex()) : "object" == typeof t && t.certsubject === undefined && t.certissuer === undefined && this.setByObject(t))
                }
                ,
                r.lang.extend(mn.asn1.x509.X500Name, mn.asn1.ASN1Object),
                mn.asn1.x509.X500Name.compatToLDAP = function(t) {
                    if ("/" !== t.substr(0, 1))
                        throw "malformed input";
                    var e = (t = t.substr(1)).split("/");
                    return e.reverse(),
                    (e = e.map((function(t) {
                        return t.replace(/,/, "\\,")
                    }
                    ))).join(",")
                }
                ,
                mn.asn1.x509.X500Name.onelineToLDAP = function(t) {
                    return mn.asn1.x509.X500Name.compatToLDAP(t)
                }
                ,
                mn.asn1.x509.X500Name.ldapToCompat = function(t) {
                    for (var e = t.split(","), n = !1, i = [], r = 0; e.length > 0; r++) {
                        var s = e.shift();
                        if (!0 === n) {
                            var a = (i.pop() + "," + s).replace(/\\,/g, ",");
                            i.push(a),
                            n = !1
                        } else
                            i.push(s);
                        "\\" === s.substr(-1, 1) && (n = !0)
                    }
                    return (i = i.map((function(t) {
                        return t.replace("/", "\\/")
                    }
                    ))).reverse(),
                    "/" + i.join("/")
                }
                ,
                mn.asn1.x509.X500Name.ldapToOneline = function(t) {
                    return mn.asn1.x509.X500Name.ldapToCompat(t)
                }
                ,
                mn.asn1.x509.RDN = function(t) {
                    mn.asn1.x509.RDN.superclass.constructor.call(this),
                    this.asn1Array = new Array,
                    this.addByString = function(t) {
                        this.asn1Array.push(new mn.asn1.x509.AttributeTypeAndValue({
                            str: t
                        }))
                    }
                    ,
                    this.addByMultiValuedString = function(t) {
                        for (var e = mn.asn1.x509.RDN.parseString(t), n = 0; n < e.length; n++)
                            this.addByString(e[n])
                    }
                    ,
                    this.getEncodedHex = function() {
                        var t = new mn.asn1.DERSet({
                            array: this.asn1Array
                        });
                        return this.TLV = t.getEncodedHex(),
                        this.TLV
                    }
                    ,
                    t !== undefined && t.str !== undefined && this.addByMultiValuedString(t.str)
                }
                ,
                r.lang.extend(mn.asn1.x509.RDN, mn.asn1.ASN1Object),
                mn.asn1.x509.RDN.parseString = function(t) {
                    for (var e = t.split(/\+/), n = !1, i = [], r = 0; e.length > 0; r++) {
                        var s = e.shift();
                        if (!0 === n) {
                            var a = (i.pop() + "+" + s).replace(/\\\+/g, "+");
                            i.push(a),
                            n = !1
                        } else
                            i.push(s);
                        "\\" === s.substr(-1, 1) && (n = !0)
                    }
                    var o = !1
                      , h = [];
                    for (r = 0; i.length > 0; r++) {
                        s = i.shift();
                        if (!0 === o) {
                            var u = h.pop();
                            if (s.match(/"$/)) {
                                a = (u + "+" + s).replace(/^([^=]+)="(.*)"$/, "$1=$2");
                                h.push(a),
                                o = !1
                            } else
                                h.push(u + "+" + s)
                        } else
                            h.push(s);
                        s.match(/^[^=]+="/) && (o = !0)
                    }
                    return h
                }
                ,
                mn.asn1.x509.AttributeTypeAndValue = function(t) {
                    mn.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);
                    var e = mn.asn1;
                    this.setByString = function(t) {
                        var e = t.match(/^([^=]+)=(.+)$/);
                        if (!e)
                            throw "malformed attrTypeAndValueStr: " + t;
                        this.setByAttrTypeAndValueStr(e[1], e[2])
                    }
                    ,
                    this.setByAttrTypeAndValueStr = function(t, e) {
                        this.typeObj = mn.asn1.x509.OID.atype2obj(t);
                        var n = "utf8";
                        "C" == t && (n = "prn"),
                        this.valueObj = this.getValueObj(n, e)
                    }
                    ,
                    this.getValueObj = function(t, n) {
                        if ("utf8" == t)
                            return new e.DERUTF8String({
                                str: n
                            });
                        if ("prn" == t)
                            return new e.DERPrintableString({
                                str: n
                            });
                        if ("tel" == t)
                            return new e.DERTeletexString({
                                str: n
                            });
                        if ("ia5" == t)
                            return new e.DERIA5String({
                                str: n
                            });
                        throw "unsupported directory string type: type=" + t + " value=" + n
                    }
                    ,
                    this.getEncodedHex = function() {
                        var t = new e.DERSequence({
                            array: [this.typeObj, this.valueObj]
                        });
                        return this.TLV = t.getEncodedHex(),
                        this.TLV
                    }
                    ,
                    t !== undefined && t.str !== undefined && this.setByString(t.str)
                }
                ,
                r.lang.extend(mn.asn1.x509.AttributeTypeAndValue, mn.asn1.ASN1Object),
                mn.asn1.x509.SubjectPublicKeyInfo = function(t) {
                    mn.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
                    var e = mn
                      , n = e.asn1
                      , i = n.DERInteger
                      , r = n.DERBitString
                      , s = n.DERObjectIdentifier
                      , a = n.DERSequence
                      , o = n.ASN1Util.newObject
                      , h = n.x509.AlgorithmIdentifier
                      , u = e.crypto;
                    u.ECDSA,
                    u.DSA;
                    this.getASN1Object = function() {
                        if (null == this.asn1AlgId || null == this.asn1SubjPKey)
                            throw "algId and/or subjPubKey not set";
                        return new a({
                            array: [this.asn1AlgId, this.asn1SubjPKey]
                        })
                    }
                    ,
                    this.getEncodedHex = function() {
                        var t = this.getASN1Object();
                        return this.hTLV = t.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    this.setPubKey = function(t) {
                        try {
                            if (t instanceof Te) {
                                var e = o({
                                    seq: [{
                                        int: {
                                            bigint: t.n
                                        }
                                    }, {
                                        int: {
                                            int: t.e
                                        }
                                    }]
                                }).getEncodedHex();
                                this.asn1AlgId = new h({
                                    name: "rsaEncryption"
                                }),
                                this.asn1SubjPKey = new r({
                                    hex: "00" + e
                                })
                            }
                        } catch (u) {}
                        try {
                            if (t instanceof mn.crypto.ECDSA) {
                                var n = new s({
                                    name: t.curveName
                                });
                                this.asn1AlgId = new h({
                                    name: "ecPublicKey",
                                    asn1params: n
                                }),
                                this.asn1SubjPKey = new r({
                                    hex: "00" + t.pubKeyHex
                                })
                            }
                        } catch (u) {}
                        try {
                            if (t instanceof mn.crypto.DSA) {
                                n = new o({
                                    seq: [{
                                        int: {
                                            bigint: t.p
                                        }
                                    }, {
                                        int: {
                                            bigint: t.q
                                        }
                                    }, {
                                        int: {
                                            bigint: t.g
                                        }
                                    }]
                                });
                                this.asn1AlgId = new h({
                                    name: "dsa",
                                    asn1params: n
                                });
                                var a = new i({
                                    bigint: t.y
                                });
                                this.asn1SubjPKey = new r({
                                    hex: "00" + a.getEncodedHex()
                                })
                            }
                        } catch (u) {}
                    }
                    ,
                    t !== undefined && this.setPubKey(t)
                }
                ,
                r.lang.extend(mn.asn1.x509.SubjectPublicKeyInfo, mn.asn1.ASN1Object),
                mn.asn1.x509.Time = function(t) {
                    mn.asn1.x509.Time.superclass.constructor.call(this);
                    var e = mn.asn1
                      , n = e.DERUTCTime
                      , i = e.DERGeneralizedTime;
                    this.setTimeParams = function(t) {
                        this.timeParams = t
                    }
                    ,
                    this.getEncodedHex = function() {
                        var t = null;
                        return t = null != this.timeParams ? "utc" == this.type ? new n(this.timeParams) : new i(this.timeParams) : "utc" == this.type ? new n : new i,
                        this.TLV = t.getEncodedHex(),
                        this.TLV
                    }
                    ,
                    this.type = "utc",
                    t !== undefined && (t.type !== undefined ? this.type = t.type : t.str !== undefined && (t.str.match(/^[0-9]{12}Z$/) && (this.type = "utc"),
                    t.str.match(/^[0-9]{14}Z$/) && (this.type = "gen")),
                    this.timeParams = t)
                }
                ,
                r.lang.extend(mn.asn1.x509.Time, mn.asn1.ASN1Object),
                mn.asn1.x509.AlgorithmIdentifier = function(t) {
                    mn.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this),
                    this.nameAlg = null,
                    this.asn1Alg = null,
                    this.asn1Params = null,
                    this.paramEmpty = !1;
                    var e = mn.asn1
                      , n = e.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
                    if (this.getEncodedHex = function() {
                        if (null === this.nameAlg && null === this.asn1Alg)
                            throw new Error("algorithm not specified");
                        if (null !== this.nameAlg) {
                            var t = null;
                            for (var i in n)
                                i === this.nameAlg && (t = n[i]);
                            if (null !== t)
                                return this.hTLV = t,
                                this.hTLV
                        }
                        null !== this.nameAlg && null === this.asn1Alg && (this.asn1Alg = e.x509.OID.name2obj(this.nameAlg));
                        var r = [this.asn1Alg];
                        null !== this.asn1Params && r.push(this.asn1Params);
                        var s = new e.DERSequence({
                            array: r
                        });
                        return this.hTLV = s.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && (t.name !== undefined && (this.nameAlg = t.name),
                    t.asn1params !== undefined && (this.asn1Params = t.asn1params),
                    t.paramempty !== undefined && (this.paramEmpty = t.paramempty)),
                    null === this.asn1Params && !1 === this.paramEmpty && null !== this.nameAlg) {
                        var i = this.nameAlg.toLowerCase();
                        "withdsa" !== i.substr(-7, 7) && "withecdsa" !== i.substr(-9, 9) && (this.asn1Params = new e.DERNull)
                    }
                }
                ,
                r.lang.extend(mn.asn1.x509.AlgorithmIdentifier, mn.asn1.ASN1Object),
                mn.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV = {
                    SHAwithRSAandMGF1: "300d06092a864886f70d01010a3000",
                    SHA256withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040201a11a301806092a864886f70d010108300b0609608648016503040201a203020120",
                    SHA384withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040202a11a301806092a864886f70d010108300b0609608648016503040202a203020130",
                    SHA512withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040203a11a301806092a864886f70d010108300b0609608648016503040203a203020140"
                },
                mn.asn1.x509.GeneralName = function(t) {
                    mn.asn1.x509.GeneralName.superclass.constructor.call(this);
                    var e = {
                        rfc822: "81",
                        dns: "82",
                        dn: "a4",
                        uri: "86",
                        ip: "87"
                    }
                      , n = mn.asn1
                      , i = (n.DERSequence,
                    n.DEROctetString)
                      , r = n.DERIA5String
                      , s = n.DERTaggedObject
                      , a = n.ASN1Object
                      , o = n.x509.X500Name
                      , h = Vn;
                    this.explicit = !1,
                    this.setByParam = function(t) {
                        var n = null;
                        if (t !== undefined) {
                            if (t.rfc822 !== undefined && (this.type = "rfc822",
                            n = new r({
                                str: t[this.type]
                            })),
                            t.dns !== undefined && (this.type = "dns",
                            n = new r({
                                str: t[this.type]
                            })),
                            t.uri !== undefined && (this.type = "uri",
                            n = new r({
                                str: t[this.type]
                            })),
                            t.dn !== undefined && (this.type = "dn",
                            this.explicit = !0,
                            n = "string" == typeof t.dn ? new o({
                                str: t.dn
                            }) : t.dn instanceof mn.asn1.x509.X500Name ? t.dn : new o(t.dn)),
                            t.ldapdn !== undefined && (this.type = "dn",
                            this.explicit = !0,
                            n = new o({
                                ldapstr: t.ldapdn
                            })),
                            t.certissuer !== undefined) {
                                this.type = "dn",
                                this.explicit = !0;
                                var u = null;
                                if ((f = t.certissuer).match(/^[0-9A-Fa-f]+$/),
                                -1 != f.indexOf("-----BEGIN ") && (u = h(f)),
                                null == u)
                                    throw "certissuer param not cert";
                                (l = new Qn).hex = u;
                                var c = l.getIssuerHex();
                                (n = new a).hTLV = c
                            }
                            if (t.certsubj !== undefined) {
                                this.type = "dn",
                                this.explicit = !0;
                                var f, l;
                                u = null;
                                if ((f = t.certsubj).match(/^[0-9A-Fa-f]+$/),
                                -1 != f.indexOf("-----BEGIN ") && (u = h(f)),
                                null == u)
                                    throw "certsubj param not cert";
                                (l = new Qn).hex = u;
                                c = l.getSubjectHex();
                                (n = new a).hTLV = c
                            }
                            if (t.ip !== undefined) {
                                this.type = "ip",
                                this.explicit = !1;
                                var d, g = t.ip, p = "malformed IP address";
                                if (g.match(/^[0-9.]+[.][0-9.]+$/)) {
                                    if (8 !== (d = Gn("[" + g.split(".").join(",") + "]")).length)
                                        throw p
                                } else if (g.match(/^[0-9A-Fa-f:]+:[0-9A-Fa-f:]+$/))
                                    d = _n(g);
                                else {
                                    if (!g.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/))
                                        throw p;
                                    d = g
                                }
                                n = new i({
                                    hex: d
                                })
                            }
                            if (null == this.type)
                                throw "unsupported type in params=" + t;
                            this.asn1Obj = new s({
                                explicit: this.explicit,
                                tag: e[this.type],
                                obj: n
                            })
                        }
                    }
                    ,
                    this.getEncodedHex = function() {
                        return this.asn1Obj.getEncodedHex()
                    }
                    ,
                    t !== undefined && this.setByParam(t)
                }
                ,
                r.lang.extend(mn.asn1.x509.GeneralName, mn.asn1.ASN1Object),
                mn.asn1.x509.GeneralNames = function(t) {
                    mn.asn1.x509.GeneralNames.superclass.constructor.call(this);
                    var e = mn.asn1;
                    this.setByParamArray = function(t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = new e.x509.GeneralName(t[n]);
                            this.asn1Array.push(i)
                        }
                    }
                    ,
                    this.getEncodedHex = function() {
                        return new e.DERSequence({
                            array: this.asn1Array
                        }).getEncodedHex()
                    }
                    ,
                    this.asn1Array = new Array,
                    void 0 !== t && this.setByParamArray(t)
                }
                ,
                r.lang.extend(mn.asn1.x509.GeneralNames, mn.asn1.ASN1Object),
                mn.asn1.x509.DistributionPointName = function(t) {
                    mn.asn1.x509.DistributionPointName.superclass.constructor.call(this);
                    var e = mn.asn1
                      , n = e.DERTaggedObject;
                    if (this.getEncodedHex = function() {
                        if ("full" != this.type)
                            throw "currently type shall be 'full': " + this.type;
                        return this.asn1Obj = new n({
                            explicit: !1,
                            tag: this.tag,
                            obj: this.asn1V
                        }),
                        this.hTLV = this.asn1Obj.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined) {
                        if (!e.x509.GeneralNames.prototype.isPrototypeOf(t))
                            throw "This class supports GeneralNames only as argument";
                        this.type = "full",
                        this.tag = "a0",
                        this.asn1V = t
                    }
                }
                ,
                r.lang.extend(mn.asn1.x509.DistributionPointName, mn.asn1.ASN1Object),
                mn.asn1.x509.DistributionPoint = function(t) {
                    mn.asn1.x509.DistributionPoint.superclass.constructor.call(this);
                    var e = mn.asn1;
                    this.getEncodedHex = function() {
                        var t = new e.DERSequence;
                        if (null != this.asn1DP) {
                            var n = new e.DERTaggedObject({
                                explicit: !0,
                                tag: "a0",
                                obj: this.asn1DP
                            });
                            t.appendASN1Object(n)
                        }
                        return this.hTLV = t.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && t.dpobj !== undefined && (this.asn1DP = t.dpobj)
                }
                ,
                r.lang.extend(mn.asn1.x509.DistributionPoint, mn.asn1.ASN1Object),
                mn.asn1.x509.OID = new function(t) {
                    this.atype2oidList = {
                        CN: "2.5.4.3",
                        L: "2.5.4.7",
                        ST: "2.5.4.8",
                        O: "2.5.4.10",
                        OU: "2.5.4.11",
                        C: "2.5.4.6",
                        STREET: "2.5.4.9",
                        DC: "0.9.2342.19200300.100.1.25",
                        UID: "0.9.2342.19200300.100.1.1",
                        SN: "2.5.4.4",
                        T: "2.5.4.12",
                        DN: "2.5.4.49",
                        E: "1.2.840.113549.1.9.1",
                        description: "2.5.4.13",
                        businessCategory: "2.5.4.15",
                        postalCode: "2.5.4.17",
                        serialNumber: "2.5.4.5",
                        uniqueIdentifier: "2.5.4.45",
                        organizationIdentifier: "2.5.4.97",
                        jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
                        jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
                        jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3"
                    },
                    this.name2oidList = {
                        sha1: "1.3.14.3.2.26",
                        sha256: "2.16.840.1.101.3.4.2.1",
                        sha384: "2.16.840.1.101.3.4.2.2",
                        sha512: "2.16.840.1.101.3.4.2.3",
                        sha224: "2.16.840.1.101.3.4.2.4",
                        md5: "1.2.840.113549.2.5",
                        md2: "1.3.14.7.2.2.1",
                        ripemd160: "1.3.36.3.2.1",
                        MD2withRSA: "1.2.840.113549.1.1.2",
                        MD4withRSA: "1.2.840.113549.1.1.3",
                        MD5withRSA: "1.2.840.113549.1.1.4",
                        SHA1withRSA: "1.2.840.113549.1.1.5",
                        SHA224withRSA: "1.2.840.113549.1.1.14",
                        SHA256withRSA: "1.2.840.113549.1.1.11",
                        SHA384withRSA: "1.2.840.113549.1.1.12",
                        SHA512withRSA: "1.2.840.113549.1.1.13",
                        SHA1withECDSA: "1.2.840.10045.4.1",
                        SHA224withECDSA: "1.2.840.10045.4.3.1",
                        SHA256withECDSA: "1.2.840.10045.4.3.2",
                        SHA384withECDSA: "1.2.840.10045.4.3.3",
                        SHA512withECDSA: "1.2.840.10045.4.3.4",
                        dsa: "1.2.840.10040.4.1",
                        SHA1withDSA: "1.2.840.10040.4.3",
                        SHA224withDSA: "2.16.840.1.101.3.4.3.1",
                        SHA256withDSA: "2.16.840.1.101.3.4.3.2",
                        rsaEncryption: "1.2.840.113549.1.1.1",
                        commonName: "2.5.4.3",
                        countryName: "2.5.4.6",
                        localityName: "2.5.4.7",
                        stateOrProvinceName: "2.5.4.8",
                        streetAddress: "2.5.4.9",
                        organizationName: "2.5.4.10",
                        organizationalUnitName: "2.5.4.11",
                        domainComponent: "0.9.2342.19200300.100.1.25",
                        userId: "0.9.2342.19200300.100.1.1",
                        surname: "2.5.4.4",
                        title: "2.5.4.12",
                        distinguishedName: "2.5.4.49",
                        emailAddress: "1.2.840.113549.1.9.1",
                        description: "2.5.4.13",
                        businessCategory: "2.5.4.15",
                        postalCode: "2.5.4.17",
                        uniqueIdentifier: "2.5.4.45",
                        organizationIdentifier: "2.5.4.97",
                        jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
                        jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
                        jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3",
                        subjectKeyIdentifier: "2.5.29.14",
                        keyUsage: "2.5.29.15",
                        subjectAltName: "2.5.29.17",
                        issuerAltName: "2.5.29.18",
                        basicConstraints: "2.5.29.19",
                        nameConstraints: "2.5.29.30",
                        cRLDistributionPoints: "2.5.29.31",
                        certificatePolicies: "2.5.29.32",
                        authorityKeyIdentifier: "2.5.29.35",
                        policyConstraints: "2.5.29.36",
                        extKeyUsage: "2.5.29.37",
                        authorityInfoAccess: "1.3.6.1.5.5.7.1.1",
                        ocsp: "1.3.6.1.5.5.7.48.1",
                        caIssuers: "1.3.6.1.5.5.7.48.2",
                        anyExtendedKeyUsage: "2.5.29.37.0",
                        serverAuth: "1.3.6.1.5.5.7.3.1",
                        clientAuth: "1.3.6.1.5.5.7.3.2",
                        codeSigning: "1.3.6.1.5.5.7.3.3",
                        emailProtection: "1.3.6.1.5.5.7.3.4",
                        timeStamping: "1.3.6.1.5.5.7.3.8",
                        ocspSigning: "1.3.6.1.5.5.7.3.9",
                        ecPublicKey: "1.2.840.10045.2.1",
                        secp256r1: "1.2.840.10045.3.1.7",
                        secp256k1: "1.3.132.0.10",
                        secp384r1: "1.3.132.0.34",
                        pkcs5PBES2: "1.2.840.113549.1.5.13",
                        pkcs5PBKDF2: "1.2.840.113549.1.5.12",
                        "des-EDE3-CBC": "1.2.840.113549.3.7",
                        data: "1.2.840.113549.1.7.1",
                        "signed-data": "1.2.840.113549.1.7.2",
                        "enveloped-data": "1.2.840.113549.1.7.3",
                        "digested-data": "1.2.840.113549.1.7.5",
                        "encrypted-data": "1.2.840.113549.1.7.6",
                        "authenticated-data": "1.2.840.113549.1.9.16.1.2",
                        tstinfo: "1.2.840.113549.1.9.16.1.4",
                        extensionRequest: "1.2.840.113549.1.9.14"
                    },
                    this.objCache = {},
                    this.name2obj = function(t) {
                        if ("undefined" != typeof this.objCache[t])
                            return this.objCache[t];
                        if ("undefined" == typeof this.name2oidList[t])
                            throw "Name of ObjectIdentifier not defined: " + t;
                        var e = this.name2oidList[t]
                          , n = new mn.asn1.DERObjectIdentifier({
                            oid: e
                        });
                        return this.objCache[t] = n,
                        n
                    }
                    ,
                    this.atype2obj = function(t) {
                        if ("undefined" != typeof this.objCache[t])
                            return this.objCache[t];
                        if ("undefined" == typeof this.atype2oidList[t])
                            throw "AttributeType name undefined: " + t;
                        var e = this.atype2oidList[t]
                          , n = new mn.asn1.DERObjectIdentifier({
                            oid: e
                        });
                        return this.objCache[t] = n,
                        n
                    }
                }
                ,
                mn.asn1.x509.OID.oid2name = function(t) {
                    var e = mn.asn1.x509.OID.name2oidList;
                    for (var n in e)
                        if (e[n] == t)
                            return n;
                    return ""
                }
                ,
                mn.asn1.x509.OID.oid2atype = function(t) {
                    var e = mn.asn1.x509.OID.atype2oidList;
                    for (var n in e)
                        if (e[n] == t)
                            return n;
                    return t
                }
                ,
                mn.asn1.x509.OID.name2oid = function(t) {
                    var e = mn.asn1.x509.OID.name2oidList;
                    return e[t] === undefined ? "" : e[t]
                }
                ,
                mn.asn1.x509.X509Util = {},
                mn.asn1.x509.X509Util.newCertPEM = function(t) {
                    var e = mn.asn1.x509
                      , n = e.TBSCertificate
                      , i = e.Certificate
                      , r = new n;
                    if (t.serial === undefined)
                        throw "serial number undefined.";
                    if (r.setSerialNumberByParam(t.serial),
                    "string" != typeof t.sigalg.name)
                        throw "unproper signature algorithm name";
                    if (r.setSignatureAlgByParam(t.sigalg),
                    t.issuer === undefined)
                        throw "issuer name undefined.";
                    if (r.setIssuerByParam(t.issuer),
                    t.notbefore === undefined)
                        throw "notbefore undefined.";
                    if (r.setNotBeforeByParam(t.notbefore),
                    t.notafter === undefined)
                        throw "notafter undefined.";
                    if (r.setNotAfterByParam(t.notafter),
                    t.subject === undefined)
                        throw "subject name undefined.";
                    if (r.setSubjectByParam(t.subject),
                    t.sbjpubkey === undefined)
                        throw "subject public key undefined.";
                    if (r.setSubjectPublicKeyByGetKey(t.sbjpubkey),
                    t.ext !== undefined && t.ext.length !== undefined)
                        for (var s = 0; s < t.ext.length; s++)
                            for (key in t.ext[s])
                                r.appendExtensionByName(key, t.ext[s][key]);
                    if (t.cakey === undefined && t.sighex === undefined)
                        throw "param cakey and sighex undefined.";
                    var a = null;
                    return t.cakey && (a = new i({
                        tbscertobj: r,
                        prvkeyobj: !0 === t.cakey.isPrivate ? t.cakey : Wn.getKey.apply(null, t.cakey)
                    })).sign(),
                    t.sighex && (a = new i({
                        tbscertobj: r
                    })).setSignatureHex(t.sighex),
                    a.getPEMString()
                }
                ,
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.asn1 && mn.asn1 || (mn.asn1 = {}),
                "undefined" != typeof mn.asn1.cms && mn.asn1.cms || (mn.asn1.cms = {}),
                mn.asn1.cms.Attribute = function(t) {
                    var e = mn.asn1;
                    e.cms.Attribute.superclass.constructor.call(this),
                    this.getEncodedHex = function() {
                        var t, n, i;
                        t = new e.DERObjectIdentifier({
                            oid: this.attrTypeOid
                        }),
                        n = new e.DERSet({
                            array: this.valueList
                        });
                        try {
                            n.getEncodedHex()
                        } catch (r) {
                            throw "fail valueSet.getEncodedHex in Attribute(1)/" + r
                        }
                        i = new e.DERSequence({
                            array: [t, n]
                        });
                        try {
                            this.hTLV = i.getEncodedHex()
                        } catch (r) {
                            throw "failed seq.getEncodedHex in Attribute(2)/" + r
                        }
                        return this.hTLV
                    }
                }
                ,
                r.lang.extend(mn.asn1.cms.Attribute, mn.asn1.ASN1Object),
                mn.asn1.cms.ContentType = function(t) {
                    var e = mn.asn1;
                    e.cms.ContentType.superclass.constructor.call(this),
                    this.attrTypeOid = "1.2.840.113549.1.9.3";
                    var n = null;
                    if (void 0 !== t) {
                        n = new e.DERObjectIdentifier(t);
                        this.valueList = [n]
                    }
                }
                ,
                r.lang.extend(mn.asn1.cms.ContentType, mn.asn1.cms.Attribute),
                mn.asn1.cms.MessageDigest = function(t) {
                    var e = mn
                      , n = e.asn1
                      , i = n.DEROctetString
                      , r = n.cms;
                    if (r.MessageDigest.superclass.constructor.call(this),
                    this.attrTypeOid = "1.2.840.113549.1.9.4",
                    t !== undefined)
                        if (t.eciObj instanceof r.EncapsulatedContentInfo && "string" == typeof t.hashAlg) {
                            var s = t.eciObj.eContentValueHex
                              , a = t.hashAlg;
                            (o = new i({
                                hex: e.crypto.Util.hashHex(s, a)
                            })).getEncodedHex(),
                            this.valueList = [o]
                        } else {
                            var o;
                            (o = new i(t)).getEncodedHex(),
                            this.valueList = [o]
                        }
                }
                ,
                r.lang.extend(mn.asn1.cms.MessageDigest, mn.asn1.cms.Attribute),
                mn.asn1.cms.SigningTime = function(t) {
                    var e = mn.asn1;
                    if (e.cms.SigningTime.superclass.constructor.call(this),
                    this.attrTypeOid = "1.2.840.113549.1.9.5",
                    t !== undefined) {
                        var n = new e.x509.Time(t);
                        try {
                            n.getEncodedHex()
                        } catch (i) {
                            throw "SigningTime.getEncodedHex() failed/" + i
                        }
                        this.valueList = [n]
                    }
                }
                ,
                r.lang.extend(mn.asn1.cms.SigningTime, mn.asn1.cms.Attribute),
                mn.asn1.cms.SigningCertificate = function(t) {
                    var e = mn
                      , n = e.asn1
                      , i = n.DERSequence
                      , r = n.cms;
                    e.crypto;
                    r.SigningCertificate.superclass.constructor.call(this),
                    this.attrTypeOid = "1.2.840.113549.1.9.16.2.12",
                    this.setCerts = function(t) {
                        for (var s = [], a = 0; a < t.length; a++) {
                            var o = Vn(t[a])
                              , h = e.crypto.Util.hashHex(o, "sha1")
                              , u = new n.DEROctetString({
                                hex: h
                            });
                            u.getEncodedHex();
                            var c = new r.IssuerSerial({
                                cert: t[a]
                            });
                            c.getEncodedHex();
                            var f = new i({
                                array: [u, c]
                            });
                            f.getEncodedHex(),
                            s.push(f)
                        }
                        var l = new i({
                            array: s
                        });
                        l.getEncodedHex(),
                        this.valueList = [l]
                    }
                    ,
                    t !== undefined && "object" == typeof t.array && this.setCerts(t.array)
                }
                ,
                r.lang.extend(mn.asn1.cms.SigningCertificate, mn.asn1.cms.Attribute),
                mn.asn1.cms.SigningCertificateV2 = function(t) {
                    var e = mn
                      , n = e.asn1
                      , i = n.DERSequence
                      , r = n.x509
                      , s = n.cms
                      , a = e.crypto;
                    if (s.SigningCertificateV2.superclass.constructor.call(this),
                    this.attrTypeOid = "1.2.840.113549.1.9.16.2.47",
                    this.setCerts = function(t, e) {
                        for (var o = [], h = 0; h < t.length; h++) {
                            var u = Vn(t[h])
                              , c = [];
                            "sha256" !== e && c.push(new r.AlgorithmIdentifier({
                                name: e
                            }));
                            var f = a.Util.hashHex(u, e)
                              , l = new n.DEROctetString({
                                hex: f
                            });
                            l.getEncodedHex(),
                            c.push(l);
                            var d = new s.IssuerSerial({
                                cert: t[h]
                            });
                            d.getEncodedHex(),
                            c.push(d);
                            var g = new i({
                                array: c
                            });
                            g.getEncodedHex(),
                            o.push(g)
                        }
                        var p = new i({
                            array: o
                        });
                        p.getEncodedHex(),
                        this.valueList = [p]
                    }
                    ,
                    t !== undefined && "object" == typeof t.array) {
                        var o = "sha256";
                        "string" == typeof t.hashAlg && (o = t.hashAlg),
                        this.setCerts(t.array, o)
                    }
                }
                ,
                r.lang.extend(mn.asn1.cms.SigningCertificateV2, mn.asn1.cms.Attribute),
                mn.asn1.cms.IssuerSerial = function(t) {
                    var e = mn.asn1
                      , n = e.DERInteger
                      , i = e.cms
                      , r = e.x509
                      , s = r.X500Name
                      , a = r.GeneralNames
                      , o = Qn;
                    i.IssuerSerial.superclass.constructor.call(this);
                    this.setByCertPEM = function(t) {
                        var e = Vn(t)
                          , i = new o;
                        i.hex = e;
                        var r = i.getIssuerHex();
                        this.dIssuer = new s,
                        this.dIssuer.hTLV = r;
                        var a = i.getSerialNumberHex();
                        this.dSerial = new n({
                            hex: a
                        })
                    }
                    ,
                    this.getEncodedHex = function() {
                        var t = new a([{
                            dn: this.dIssuer
                        }])
                          , n = new e.DERSequence({
                            array: [t, this.dSerial]
                        });
                        return this.hTLV = n.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && ("string" == typeof t && -1 != t.indexOf("-----BEGIN ") && this.setByCertPEM(t),
                    t.issuer && t.serial && (t.issuer instanceof s ? this.dIssuer = t.issuer : this.dIssuer = new s(t.issuer),
                    t.serial instanceof n ? this.dSerial = t.serial : this.dSerial = new n(t.serial)),
                    "string" == typeof t.cert && this.setByCertPEM(t.cert))
                }
                ,
                r.lang.extend(mn.asn1.cms.IssuerSerial, mn.asn1.ASN1Object),
                mn.asn1.cms.IssuerAndSerialNumber = function(t) {
                    var e = mn.asn1
                      , n = e.DERInteger
                      , i = e.cms
                      , r = e.x509.X500Name
                      , s = Qn;
                    i.IssuerAndSerialNumber.superclass.constructor.call(this);
                    this.setByCertPEM = function(t) {
                        var e = Vn(t)
                          , i = new s;
                        i.hex = e;
                        var a = i.getIssuerHex();
                        this.dIssuer = new r,
                        this.dIssuer.hTLV = a;
                        var o = i.getSerialNumberHex();
                        this.dSerial = new n({
                            hex: o
                        })
                    }
                    ,
                    this.getEncodedHex = function() {
                        var t = new e.DERSequence({
                            array: [this.dIssuer, this.dSerial]
                        });
                        return this.hTLV = t.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && ("string" == typeof t && -1 != t.indexOf("-----BEGIN ") && this.setByCertPEM(t),
                    t.issuer && t.serial && (t.issuer instanceof r ? this.dIssuer = t.issuer : this.dIssuer = new r(t.issuer),
                    t.serial instanceof n ? this.dSerial = t.serial : this.dSerial = new n(t.serial)),
                    "string" == typeof t.cert && this.setByCertPEM(t.cert))
                }
                ,
                r.lang.extend(mn.asn1.cms.IssuerAndSerialNumber, mn.asn1.ASN1Object),
                mn.asn1.cms.AttributeList = function(t) {
                    var e = mn.asn1
                      , n = e.cms;
                    n.AttributeList.superclass.constructor.call(this),
                    this.list = new Array,
                    this.sortFlag = !0,
                    this.add = function(t) {
                        t instanceof n.Attribute && this.list.push(t)
                    }
                    ,
                    this.length = function() {
                        return this.list.length
                    }
                    ,
                    this.clear = function() {
                        this.list = new Array,
                        this.hTLV = null,
                        this.hV = null
                    }
                    ,
                    this.getEncodedHex = function() {
                        if ("string" == typeof this.hTLV)
                            return this.hTLV;
                        var t = new e.DERSet({
                            array: this.list,
                            sortflag: this.sortFlag
                        });
                        return this.hTLV = t.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
                }
                ,
                r.lang.extend(mn.asn1.cms.AttributeList, mn.asn1.ASN1Object),
                mn.asn1.cms.SignerInfo = function(t) {
                    var e = mn
                      , n = e.asn1
                      , i = n.DERTaggedObject
                      , r = n.cms
                      , s = r.AttributeList
                      , a = r.ContentType
                      , o = r.EncapsulatedContentInfo
                      , h = r.MessageDigest
                      , u = r.SignedData
                      , c = n.x509.AlgorithmIdentifier
                      , f = e.crypto
                      , l = Wn;
                    r.SignerInfo.superclass.constructor.call(this),
                    this.dCMSVersion = new n.DERInteger({
                        int: 1
                    }),
                    this.dSignerIdentifier = null,
                    this.dDigestAlgorithm = null,
                    this.dSignedAttrs = new s,
                    this.dSigAlg = null,
                    this.dSig = null,
                    this.dUnsignedAttrs = new s,
                    this.setSignerIdentifier = function(t) {
                        if ("string" == typeof t && -1 != t.indexOf("CERTIFICATE") && -1 != t.indexOf("BEGIN") && -1 != t.indexOf("END")) {
                            this.dSignerIdentifier = new r.IssuerAndSerialNumber({
                                cert: t
                            })
                        }
                    }
                    ,
                    this.setForContentAndHash = function(t) {
                        t !== undefined && (t.eciObj instanceof o && (this.dSignedAttrs.add(new a({
                            oid: "1.2.840.113549.1.7.1"
                        })),
                        this.dSignedAttrs.add(new h({
                            eciObj: t.eciObj,
                            hashAlg: t.hashAlg
                        }))),
                        t.sdObj !== undefined && t.sdObj instanceof u && -1 == t.sdObj.digestAlgNameList.join(":").indexOf(t.hashAlg) && t.sdObj.digestAlgNameList.push(t.hashAlg),
                        "string" == typeof t.hashAlg && (this.dDigestAlgorithm = new c({
                            name: t.hashAlg
                        })))
                    }
                    ,
                    this.sign = function(t, e) {
                        this.dSigAlg = new c({
                            name: e
                        });
                        var i = this.dSignedAttrs.getEncodedHex()
                          , r = l.getKey(t)
                          , s = new f.Signature({
                            alg: e
                        });
                        s.init(r),
                        s.updateHex(i);
                        var a = s.sign();
                        this.dSig = new n.DEROctetString({
                            hex: a
                        })
                    }
                    ,
                    this.addUnsigned = function(t) {
                        this.hTLV = null,
                        this.dUnsignedAttrs.hTLV = null,
                        this.dUnsignedAttrs.add(t)
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (this.dSignedAttrs instanceof s && 0 == this.dSignedAttrs.length())
                            throw "SignedAttrs length = 0 (empty)";
                        var t = new i({
                            obj: this.dSignedAttrs,
                            tag: "a0",
                            explicit: !1
                        })
                          , e = null;
                        this.dUnsignedAttrs.length() > 0 && (e = new i({
                            obj: this.dUnsignedAttrs,
                            tag: "a1",
                            explicit: !1
                        }));
                        var r = [this.dCMSVersion, this.dSignerIdentifier, this.dDigestAlgorithm, t, this.dSigAlg, this.dSig];
                        null != e && r.push(e);
                        var a = new n.DERSequence({
                            array: r
                        });
                        return this.hTLV = a.getEncodedHex(),
                        this.hTLV
                    }
                }
                ,
                r.lang.extend(mn.asn1.cms.SignerInfo, mn.asn1.ASN1Object),
                mn.asn1.cms.EncapsulatedContentInfo = function(t) {
                    var e = mn.asn1
                      , n = e.DERTaggedObject
                      , i = e.DERSequence
                      , r = e.DERObjectIdentifier
                      , s = e.DEROctetString;
                    e.cms.EncapsulatedContentInfo.superclass.constructor.call(this),
                    this.dEContentType = new r({
                        name: "data"
                    }),
                    this.dEContent = null,
                    this.isDetached = !1,
                    this.eContentValueHex = null,
                    this.setContentType = function(t) {
                        t.match(/^[0-2][.][0-9.]+$/) ? this.dEContentType = new r({
                            oid: t
                        }) : this.dEContentType = new r({
                            name: t
                        })
                    }
                    ,
                    this.setContentValue = function(t) {
                        t !== undefined && ("string" == typeof t.hex ? this.eContentValueHex = t.hex : "string" == typeof t.str && (this.eContentValueHex = Tn(t.str)))
                    }
                    ,
                    this.setContentValueHex = function(t) {
                        this.eContentValueHex = t
                    }
                    ,
                    this.setContentValueStr = function(t) {
                        this.eContentValueHex = Tn(t)
                    }
                    ,
                    this.getEncodedHex = function() {
                        if ("string" != typeof this.eContentValueHex)
                            throw "eContentValue not yet set";
                        var t = new s({
                            hex: this.eContentValueHex
                        });
                        this.dEContent = new n({
                            obj: t,
                            tag: "a0",
                            explicit: !0
                        });
                        var e = [this.dEContentType];
                        this.isDetached || e.push(this.dEContent);
                        var r = new i({
                            array: e
                        });
                        return this.hTLV = r.getEncodedHex(),
                        this.hTLV
                    }
                }
                ,
                r.lang.extend(mn.asn1.cms.EncapsulatedContentInfo, mn.asn1.ASN1Object),
                mn.asn1.cms.ContentInfo = function(t) {
                    var e = mn.asn1
                      , n = e.DERTaggedObject
                      , i = e.DERSequence
                      , r = e.x509;
                    mn.asn1.cms.ContentInfo.superclass.constructor.call(this),
                    this.dContentType = null,
                    this.dContent = null,
                    this.setContentType = function(t) {
                        "string" == typeof t && (this.dContentType = r.OID.name2obj(t))
                    }
                    ,
                    this.getEncodedHex = function() {
                        var t = new n({
                            obj: this.dContent,
                            tag: "a0",
                            explicit: !0
                        })
                          , e = new i({
                            array: [this.dContentType, t]
                        });
                        return this.hTLV = e.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && (t.type && this.setContentType(t.type),
                    t.obj && t.obj instanceof e.ASN1Object && (this.dContent = t.obj))
                }
                ,
                r.lang.extend(mn.asn1.cms.ContentInfo, mn.asn1.ASN1Object),
                mn.asn1.cms.SignedData = function(t) {
                    var e = mn.asn1
                      , n = e.ASN1Object
                      , i = e.DERInteger
                      , r = e.DERSet
                      , s = e.DERSequence
                      , a = e.DERTaggedObject
                      , o = e.cms
                      , h = o.EncapsulatedContentInfo
                      , u = o.SignerInfo
                      , c = o.ContentInfo
                      , f = e.x509.AlgorithmIdentifier;
                    mn.asn1.cms.SignedData.superclass.constructor.call(this),
                    this.dCMSVersion = new i({
                        int: 1
                    }),
                    this.dDigestAlgs = null,
                    this.digestAlgNameList = [],
                    this.dEncapContentInfo = new h,
                    this.dCerts = null,
                    this.certificateList = [],
                    this.crlList = [],
                    this.signerInfoList = [new u],
                    this.addCertificatesByPEM = function(t) {
                        var e = Vn(t)
                          , i = new n;
                        i.hTLV = e,
                        this.certificateList.push(i)
                    }
                    ,
                    this.getEncodedHex = function() {
                        if ("string" == typeof this.hTLV)
                            return this.hTLV;
                        if (null == this.dDigestAlgs) {
                            for (var t = [], e = 0; e < this.digestAlgNameList.length; e++) {
                                var n = this.digestAlgNameList[e]
                                  , i = new f({
                                    name: n
                                });
                                t.push(i)
                            }
                            this.dDigestAlgs = new r({
                                array: t
                            })
                        }
                        var o = [this.dCMSVersion, this.dDigestAlgs, this.dEncapContentInfo];
                        if (null == this.dCerts && this.certificateList.length > 0) {
                            var h = new r({
                                array: this.certificateList
                            });
                            this.dCerts = new a({
                                obj: h,
                                tag: "a0",
                                explicit: !1
                            })
                        }
                        null != this.dCerts && o.push(this.dCerts);
                        var u = new r({
                            array: this.signerInfoList
                        });
                        o.push(u);
                        var c = new s({
                            array: o
                        });
                        return this.hTLV = c.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    this.getContentInfo = function() {
                        return this.getEncodedHex(),
                        new c({
                            type: "signed-data",
                            obj: this
                        })
                    }
                    ,
                    this.getContentInfoEncodedHex = function() {
                        return this.getContentInfo().getEncodedHex()
                    }
                    ,
                    this.getPEM = function() {
                        return On(this.getContentInfoEncodedHex(), "CMS")
                    }
                }
                ,
                r.lang.extend(mn.asn1.cms.SignedData, mn.asn1.ASN1Object),
                mn.asn1.cms.CMSUtil = new function() {}
                ,
                mn.asn1.cms.CMSUtil.newSignedData = function(t) {
                    var e = mn.asn1
                      , n = e.cms
                      , i = n.SignerInfo
                      , r = n.SignedData
                      , s = n.SigningTime
                      , a = n.SigningCertificate
                      , o = n.SigningCertificateV2
                      , h = e.cades.SignaturePolicyIdentifier
                      , u = new r;
                    if (u.dEncapContentInfo.setContentValue(t.content),
                    "boolean" == typeof t.detached && (u.dEncapContentInfo.isDetached = t.detached),
                    "object" == typeof t.certs)
                        for (var c = 0; c < t.certs.length; c++)
                            u.addCertificatesByPEM(t.certs[c]);
                    u.signerInfoList = [];
                    for (c = 0; c < t.signerInfos.length; c++) {
                        var f = t.signerInfos[c]
                          , l = new i;
                        for (attrName in l.setSignerIdentifier(f.signerCert),
                        l.setForContentAndHash({
                            sdObj: u,
                            eciObj: u.dEncapContentInfo,
                            hashAlg: f.hashAlg
                        }),
                        f.sAttr) {
                            var d = f.sAttr[attrName];
                            if ("SigningTime" == attrName) {
                                var g = new s(d);
                                l.dSignedAttrs.add(g)
                            }
                            if ("SigningCertificate" == attrName) {
                                g = new a(d);
                                l.dSignedAttrs.add(g)
                            }
                            if ("SigningCertificateV2" == attrName) {
                                g = new o(d);
                                l.dSignedAttrs.add(g)
                            }
                            if ("SignaturePolicyIdentifier" == attrName) {
                                g = new h(d);
                                l.dSignedAttrs.add(g)
                            }
                        }
                        l.sign(f.signerPrvKey, f.sigAlg),
                        u.signerInfoList.push(l)
                    }
                    return u
                }
                ,
                mn.asn1.cms.CMSUtil.verifySignedData = function(t) {
                    var e = mn
                      , n = e.asn1
                      , i = n.cms
                      , r = (i.SignerInfo,
                    i.SignedData,
                    i.SigningTime,
                    i.SigningCertificate,
                    i.SigningCertificateV2,
                    n.cades.SignaturePolicyIdentifier,
                    e.lang.String.isHex)
                      , s = xn
                      , a = s.getVbyList
                      , o = s.getTLVbyList
                      , h = s.getIdxbyList
                      , u = s.getChildIdx
                      , c = s.getTLV
                      , f = s.oidname
                      , l = e.crypto.Util.hashHex;
                    t.cms === undefined && r(t.cms);
                    var d = t.cms
                      , g = function(t, e) {
                        var n = e.idx;
                        e.signerid_issuer1 = o(t, n, [1, 0], "30"),
                        e.signerid_serial1 = a(t, n, [1, 1], "02"),
                        e.hashalg = f(a(t, n, [2, 0], "06"));
                        var i = h(t, n, [3], "a0");
                        e.idxSignedAttrs = i,
                        p(t, e, i);
                        var r = u(t, n).length;
                        if (r < 6)
                            throw "malformed SignerInfo";
                        e.sigalg = f(a(t, n, [r - 2, 0], "06")),
                        e.sigval = a(t, n, [r - 1], "04")
                    }
                      , p = function(t, e, n) {
                        var i = u(t, n);
                        e.signedAttrIdxList = i;
                        for (var r = 0; r < i.length; r++) {
                            var s, o = i[r], h = a(t, o, [0], "06");
                            "2a864886f70d010905" === h ? (s = Pn(a(t, o, [1, 0])),
                            e.saSigningTime = s) : "2a864886f70d010904" === h && (s = a(t, o, [1, 0], "04"),
                            e.saMessageDigest = s)
                        }
                    }
                      , y = function(t, e, n, i) {
                        n.verifyDetail = {};
                        var r = n.verifyDetail
                          , s = e.parse.econtent
                          , a = n.hashalg
                          , o = n.saMessageDigest;
                        r.validMessageDigest = !1,
                        l(s, a) === o && (r.validMessageDigest = !0),
                        function(t, e, n, i) {
                            var r, s = e.parse.certsIdx;
                            if (e.certs === undefined) {
                                r = [],
                                e.certkeys = [];
                                for (var a = u(t, s), o = 0; o < a.length; o++) {
                                    var h = c(t, a[o])
                                      , f = new Qn;
                                    f.readCertHex(h),
                                    r[o] = f,
                                    e.certkeys[o] = f.getPublicKey()
                                }
                                e.certs = r
                            } else
                                r = e.certs;
                            for (e.cccc = r.length,
                            e.cccci = a.length,
                            o = 0; o < r.length; o++) {
                                var l = f.getIssuerHex()
                                  , d = f.getSerialNumberHex();
                                n.signerid_issuer1 === l && n.signerid_serial1 === d && (n.certkey_idx = o)
                            }
                        }(t, e, n),
                        r.validSignatureValue = !1;
                        var h = n.sigalg
                          , f = "31" + c(t, n.idxSignedAttrs).substr(2);
                        n.signedattrshex = f;
                        var d = e.certs[n.certkey_idx].getPublicKey()
                          , g = new mn.crypto.Signature({
                            alg: h
                        });
                        g.init(d),
                        g.updateHex(f);
                        var p = g.verify(n.sigval);
                        r.validSignatureValue_isValid = p,
                        !0 === p && (r.validSignatureValue = !0),
                        n.isValid = !1,
                        r.validMessageDigest && r.validSignatureValue && (n.isValid = !0)
                    }
                      , m = {
                        isValid: !1,
                        parse: {}
                    };
                    return function(t, e) {
                        if ("2a864886f70d010702" !== a(t, 0, [0], "06"))
                            return e;
                        e.cmsType = "signedData",
                        e.econtent = a(t, 0, [1, 0, 2, 1, 0]),
                        function(t, e) {
                            for (var n, i = 3; i < 6; i++)
                                if ((n = h(t, 0, [1, 0, i])) !== undefined) {
                                    var r = t.substr(n, 2);
                                    "a0" === r && (e.certsIdx = n),
                                    "a1" === r && (e.revinfosIdx = n),
                                    "31" === r && (e.signerinfosIdx = n)
                                }
                        }(t, e),
                        e.signerInfos = [],
                        function(t, e) {
                            var n = e.signerinfosIdx;
                            if (n !== undefined) {
                                var i = u(t, n);
                                e.signerInfoIdxList = i;
                                for (var r = 0; r < i.length; r++) {
                                    var s = {
                                        idx: i[r]
                                    };
                                    g(t, s),
                                    e.signerInfos.push(s)
                                }
                            }
                        }(t, e)
                    }(d, m.parse),
                    function(t, e) {
                        for (var n = e.parse.signerInfos, i = n.length, r = !0, s = 0; s < i; s++) {
                            var a = n[s];
                            y(t, e, a, s),
                            a.isValid || (r = !1)
                        }
                        e.isValid = r
                    }(d, m),
                    m
                }
                ,
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.asn1 && mn.asn1 || (mn.asn1 = {}),
                "undefined" != typeof mn.asn1.tsp && mn.asn1.tsp || (mn.asn1.tsp = {}),
                mn.asn1.tsp.Accuracy = function(t) {
                    var e = mn.asn1
                      , n = e.DERInteger
                      , i = e.DERSequence
                      , r = e.DERTaggedObject;
                    e.tsp.Accuracy.superclass.constructor.call(this),
                    this.seconds = null,
                    this.millis = null,
                    this.micros = null,
                    this.getEncodedHex = function() {
                        var t = null
                          , e = null
                          , s = null
                          , a = [];
                        if (null != this.seconds && (t = new n({
                            int: this.seconds
                        }),
                        a.push(t)),
                        null != this.millis) {
                            var o = new n({
                                int: this.millis
                            });
                            e = new r({
                                obj: o,
                                tag: "80",
                                explicit: !1
                            }),
                            a.push(e)
                        }
                        if (null != this.micros) {
                            var h = new n({
                                int: this.micros
                            });
                            s = new r({
                                obj: h,
                                tag: "81",
                                explicit: !1
                            }),
                            a.push(s)
                        }
                        var u = new i({
                            array: a
                        });
                        return this.hTLV = u.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && ("number" == typeof t.seconds && (this.seconds = t.seconds),
                    "number" == typeof t.millis && (this.millis = t.millis),
                    "number" == typeof t.micros && (this.micros = t.micros))
                }
                ,
                r.lang.extend(mn.asn1.tsp.Accuracy, mn.asn1.ASN1Object),
                mn.asn1.tsp.MessageImprint = function(t) {
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.DEROctetString
                      , r = e.x509.AlgorithmIdentifier;
                    e.tsp.MessageImprint.superclass.constructor.call(this),
                    this.dHashAlg = null,
                    this.dHashValue = null,
                    this.getEncodedHex = function() {
                        return "string" == typeof this.hTLV ? this.hTLV : new n({
                            array: [this.dHashAlg, this.dHashValue]
                        }).getEncodedHex()
                    }
                    ,
                    t !== undefined && ("string" == typeof t.hashAlg && (this.dHashAlg = new r({
                        name: t.hashAlg
                    })),
                    "string" == typeof t.hashValue && (this.dHashValue = new i({
                        hex: t.hashValue
                    })))
                }
                ,
                r.lang.extend(mn.asn1.tsp.MessageImprint, mn.asn1.ASN1Object),
                mn.asn1.tsp.TimeStampReq = function(t) {
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.DERInteger
                      , r = e.DERBoolean
                      , s = e.DERObjectIdentifier
                      , a = e.tsp
                      , o = a.MessageImprint;
                    a.TimeStampReq.superclass.constructor.call(this),
                    this.dVersion = new i({
                        int: 1
                    }),
                    this.dMessageImprint = null,
                    this.dPolicy = null,
                    this.dNonce = null,
                    this.certReq = !0,
                    this.setMessageImprint = function(t) {
                        t instanceof o ? this.dMessageImprint = t : "object" == typeof t && (this.dMessageImprint = new o(t))
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (null == this.dMessageImprint)
                            throw "messageImprint shall be specified";
                        var t = [this.dVersion, this.dMessageImprint];
                        null != this.dPolicy && t.push(this.dPolicy),
                        null != this.dNonce && t.push(this.dNonce),
                        this.certReq && t.push(new r);
                        var e = new n({
                            array: t
                        });
                        return this.hTLV = e.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && ("object" == typeof t.mi && this.setMessageImprint(t.mi),
                    "object" == typeof t.policy && (this.dPolicy = new s(t.policy)),
                    "object" == typeof t.nonce && (this.dNonce = new i(t.nonce)),
                    "boolean" == typeof t.certreq && (this.certReq = t.certreq))
                }
                ,
                r.lang.extend(mn.asn1.tsp.TimeStampReq, mn.asn1.ASN1Object),
                mn.asn1.tsp.TSTInfo = function(t) {
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.DERInteger
                      , r = e.DERBoolean
                      , s = e.DERGeneralizedTime
                      , a = e.DERObjectIdentifier
                      , o = e.tsp
                      , h = o.MessageImprint
                      , u = o.Accuracy
                      , c = e.x509.X500Name;
                    if (o.TSTInfo.superclass.constructor.call(this),
                    this.dVersion = new i({
                        int: 1
                    }),
                    this.dPolicy = null,
                    this.dMessageImprint = null,
                    this.dSerialNumber = null,
                    this.dGenTime = null,
                    this.dAccuracy = null,
                    this.dOrdering = null,
                    this.dNonce = null,
                    this.dTsa = null,
                    this.getEncodedHex = function() {
                        var t = [this.dVersion];
                        if (null == this.dPolicy)
                            throw "policy shall be specified.";
                        if (t.push(this.dPolicy),
                        null == this.dMessageImprint)
                            throw "messageImprint shall be specified.";
                        if (t.push(this.dMessageImprint),
                        null == this.dSerialNumber)
                            throw "serialNumber shall be specified.";
                        if (t.push(this.dSerialNumber),
                        null == this.dGenTime)
                            throw "genTime shall be specified.";
                        t.push(this.dGenTime),
                        null != this.dAccuracy && t.push(this.dAccuracy),
                        null != this.dOrdering && t.push(this.dOrdering),
                        null != this.dNonce && t.push(this.dNonce),
                        null != this.dTsa && t.push(this.dTsa);
                        var e = new n({
                            array: t
                        });
                        return this.hTLV = e.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined) {
                        if ("string" == typeof t.policy) {
                            if (!t.policy.match(/^[0-9.]+$/))
                                throw "policy shall be oid like 0.1.4.134";
                            this.dPolicy = new a({
                                oid: t.policy
                            })
                        }
                        t.messageImprint !== undefined && (this.dMessageImprint = new h(t.messageImprint)),
                        t.serialNumber !== undefined && (this.dSerialNumber = new i(t.serialNumber)),
                        t.genTime !== undefined && (this.dGenTime = new s(t.genTime)),
                        t.accuracy !== undefined && (this.dAccuracy = new u(t.accuracy)),
                        t.ordering !== undefined && 1 == t.ordering && (this.dOrdering = new r),
                        t.nonce !== undefined && (this.dNonce = new i(t.nonce)),
                        t.tsa !== undefined && (this.dTsa = new c(t.tsa))
                    }
                }
                ,
                r.lang.extend(mn.asn1.tsp.TSTInfo, mn.asn1.ASN1Object),
                mn.asn1.tsp.TimeStampResp = function(t) {
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.ASN1Object
                      , r = e.tsp
                      , s = r.PKIStatusInfo;
                    r.TimeStampResp.superclass.constructor.call(this),
                    this.dStatus = null,
                    this.dTST = null,
                    this.getEncodedHex = function() {
                        if (null == this.dStatus)
                            throw "status shall be specified";
                        var t = [this.dStatus];
                        null != this.dTST && t.push(this.dTST);
                        var e = new n({
                            array: t
                        });
                        return this.hTLV = e.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && ("object" == typeof t.status && (this.dStatus = new s(t.status)),
                    t.tst !== undefined && t.tst instanceof i && (this.dTST = t.tst.getContentInfo()))
                }
                ,
                r.lang.extend(mn.asn1.tsp.TimeStampResp, mn.asn1.ASN1Object),
                mn.asn1.tsp.PKIStatusInfo = function(t) {
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.tsp
                      , r = i.PKIStatus
                      , s = i.PKIFreeText
                      , a = i.PKIFailureInfo;
                    i.PKIStatusInfo.superclass.constructor.call(this),
                    this.dStatus = null,
                    this.dStatusString = null,
                    this.dFailureInfo = null,
                    this.getEncodedHex = function() {
                        if (null == this.dStatus)
                            throw "status shall be specified";
                        var t = [this.dStatus];
                        null != this.dStatusString && t.push(this.dStatusString),
                        null != this.dFailureInfo && t.push(this.dFailureInfo);
                        var e = new n({
                            array: t
                        });
                        return this.hTLV = e.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && ("object" == typeof t.status && (this.dStatus = new r(t.status)),
                    "object" == typeof t.statstr && (this.dStatusString = new s({
                        array: t.statstr
                    })),
                    "object" == typeof t.failinfo && (this.dFailureInfo = new a(t.failinfo)))
                }
                ,
                r.lang.extend(mn.asn1.tsp.PKIStatusInfo, mn.asn1.ASN1Object),
                mn.asn1.tsp.PKIStatus = function(t) {
                    var e = mn.asn1
                      , n = e.DERInteger
                      , i = e.tsp
                      , r = i.PKIStatus;
                    i.PKIStatus.superclass.constructor.call(this);
                    if (this.getEncodedHex = function() {
                        return this.hTLV = this.dStatus.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined)
                        if (t.name !== undefined) {
                            var s = r.valueList;
                            if (s[t.name] === undefined)
                                throw "name undefined: " + t.name;
                            this.dStatus = new n({
                                int: s[t.name]
                            })
                        } else
                            this.dStatus = new n(t)
                }
                ,
                r.lang.extend(mn.asn1.tsp.PKIStatus, mn.asn1.ASN1Object),
                mn.asn1.tsp.PKIStatus.valueList = {
                    granted: 0,
                    grantedWithMods: 1,
                    rejection: 2,
                    waiting: 3,
                    revocationWarning: 4,
                    revocationNotification: 5
                },
                mn.asn1.tsp.PKIFreeText = function(t) {
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.DERUTF8String;
                    e.tsp.PKIFreeText.superclass.constructor.call(this),
                    this.textList = [],
                    this.getEncodedHex = function() {
                        for (var t = [], e = 0; e < this.textList.length; e++)
                            t.push(new i({
                                str: this.textList[e]
                            }));
                        var r = new n({
                            array: t
                        });
                        return this.hTLV = r.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && "object" == typeof t.array && (this.textList = t.array)
                }
                ,
                r.lang.extend(mn.asn1.tsp.PKIFreeText, mn.asn1.ASN1Object),
                mn.asn1.tsp.PKIFailureInfo = function(t) {
                    var e = mn.asn1
                      , n = e.DERBitString
                      , i = e.tsp.PKIFailureInfo;
                    if (i.superclass.constructor.call(this),
                    this.value = null,
                    this.getEncodedHex = function() {
                        if (null == this.value)
                            throw "value shall be specified";
                        var t = new Number(this.value).toString(2)
                          , e = new n;
                        return e.setByBinaryString(t),
                        this.hTLV = e.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined)
                        if ("string" == typeof t.name) {
                            var r = i.valueList;
                            if (r[t.name] === undefined)
                                throw "name undefined: " + t.name;
                            this.value = r[t.name]
                        } else
                            "number" == typeof t["int"] && (this.value = t["int"])
                }
                ,
                r.lang.extend(mn.asn1.tsp.PKIFailureInfo, mn.asn1.ASN1Object),
                mn.asn1.tsp.PKIFailureInfo.valueList = {
                    badAlg: 0,
                    badRequest: 2,
                    badDataFormat: 5,
                    timeNotAvailable: 14,
                    unacceptedPolicy: 15,
                    unacceptedExtension: 16,
                    addInfoNotAvailable: 17,
                    systemFailure: 25
                },
                mn.asn1.tsp.AbstractTSAAdapter = function(t) {
                    this.getTSTHex = function(t, e) {
                        throw "not implemented yet"
                    }
                }
                ,
                mn.asn1.tsp.SimpleTSAAdapter = function(t) {
                    var e = mn
                      , n = e.asn1.tsp
                      , i = e.crypto.Util.hashHex;
                    n.SimpleTSAAdapter.superclass.constructor.call(this),
                    this.params = null,
                    this.serial = 0,
                    this.getTSTHex = function(t, e) {
                        var r = i(t, e);
                        this.params.tstInfo.messageImprint = {
                            hashAlg: e,
                            hashValue: r
                        },
                        this.params.tstInfo.serialNumber = {
                            int: this.serial++
                        };
                        var s = Math.floor(1e9 * Math.random());
                        return this.params.tstInfo.nonce = {
                            int: s
                        },
                        n.TSPUtil.newTimeStampToken(this.params).getContentInfoEncodedHex()
                    }
                    ,
                    t !== undefined && (this.params = t)
                }
                ,
                r.lang.extend(mn.asn1.tsp.SimpleTSAAdapter, mn.asn1.tsp.AbstractTSAAdapter),
                mn.asn1.tsp.FixedTSAAdapter = function(t) {
                    var e = mn
                      , n = e.asn1.tsp
                      , i = e.crypto.Util.hashHex;
                    n.FixedTSAAdapter.superclass.constructor.call(this),
                    this.params = null,
                    this.getTSTHex = function(t, e) {
                        var r = i(t, e);
                        return this.params.tstInfo.messageImprint = {
                            hashAlg: e,
                            hashValue: r
                        },
                        n.TSPUtil.newTimeStampToken(this.params).getContentInfoEncodedHex()
                    }
                    ,
                    t !== undefined && (this.params = t)
                }
                ,
                r.lang.extend(mn.asn1.tsp.FixedTSAAdapter, mn.asn1.tsp.AbstractTSAAdapter),
                mn.asn1.tsp.TSPUtil = new function() {}
                ,
                mn.asn1.tsp.TSPUtil.newTimeStampToken = function(t) {
                    var e = mn.asn1
                      , n = e.cms
                      , i = (e.tsp,
                    e.tsp.TSTInfo)
                      , r = new n.SignedData
                      , s = new i(t.tstInfo).getEncodedHex();
                    if (r.dEncapContentInfo.setContentValue({
                        hex: s
                    }),
                    r.dEncapContentInfo.setContentType("tstinfo"),
                    "object" == typeof t.certs)
                        for (var a = 0; a < t.certs.length; a++)
                            r.addCertificatesByPEM(t.certs[a]);
                    var o = r.signerInfoList[0];
                    o.setSignerIdentifier(t.signerCert),
                    o.setForContentAndHash({
                        sdObj: r,
                        eciObj: r.dEncapContentInfo,
                        hashAlg: t.hashAlg
                    });
                    var h = new n.SigningCertificate({
                        array: [t.signerCert]
                    });
                    return o.dSignedAttrs.add(h),
                    o.sign(t.signerPrvKey, t.sigAlg),
                    r
                }
                ,
                mn.asn1.tsp.TSPUtil.parseTimeStampReq = function(t) {
                    var e = xn
                      , n = e.getChildIdx
                      , i = e.getV
                      , r = e.getTLV
                      , s = {
                        certreq: !1
                    }
                      , a = n(t, 0);
                    if (a.length < 2)
                        throw "TimeStampReq must have at least 2 items";
                    var o = r(t, a[1]);
                    s.mi = mn.asn1.tsp.TSPUtil.parseMessageImprint(o);
                    for (var h = 2; h < a.length; h++) {
                        var u = a[h]
                          , c = t.substr(u, 2);
                        if ("06" == c) {
                            var f = i(t, u);
                            s.policy = e.hextooidstr(f)
                        }
                        "02" == c && (s.nonce = i(t, u)),
                        "01" == c && (s.certreq = !0)
                    }
                    return s
                }
                ,
                mn.asn1.tsp.TSPUtil.parseMessageImprint = function(t) {
                    var e = xn
                      , n = e.getChildIdx
                      , i = e.getV
                      , r = e.getIdxbyList
                      , s = {};
                    if ("30" != t.substr(0, 2))
                        throw "head of messageImprint hex shall be '30'";
                    n(t, 0);
                    var a = i(t, r(t, 0, [0, 0]))
                      , o = e.hextooidstr(a)
                      , h = mn.asn1.x509.OID.oid2name(o);
                    if ("" == h)
                        throw "hashAlg name undefined: " + o;
                    var u = h
                      , c = r(t, 0, [1]);
                    return s.hashAlg = u,
                    s.hashValue = i(t, c),
                    s
                }
                ,
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.asn1 && mn.asn1 || (mn.asn1 = {}),
                "undefined" != typeof mn.asn1.cades && mn.asn1.cades || (mn.asn1.cades = {}),
                mn.asn1.cades.SignaturePolicyIdentifier = function(t) {
                    var e = mn.asn1
                      , n = e.DERObjectIdentifier
                      , i = e.DERSequence
                      , r = e.cades
                      , s = r.OtherHashAlgAndValue;
                    if (r.SignaturePolicyIdentifier.superclass.constructor.call(this),
                    this.attrTypeOid = "1.2.840.113549.1.9.16.2.15",
                    t !== undefined && "string" == typeof t.oid && "object" == typeof t.hash) {
                        var a = new i({
                            array: [new n({
                                oid: t.oid
                            }), new s(t.hash)]
                        });
                        this.valueList = [a]
                    }
                }
                ,
                r.lang.extend(mn.asn1.cades.SignaturePolicyIdentifier, mn.asn1.cms.Attribute),
                mn.asn1.cades.OtherHashAlgAndValue = function(t) {
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.DEROctetString
                      , r = e.x509.AlgorithmIdentifier;
                    e.cades.OtherHashAlgAndValue.superclass.constructor.call(this),
                    this.dAlg = null,
                    this.dHash = null,
                    this.getEncodedHex = function() {
                        var t = new n({
                            array: [this.dAlg, this.dHash]
                        });
                        return this.hTLV = t.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && "string" == typeof t.alg && "string" == typeof t.hash && (this.dAlg = new r({
                        name: t.alg
                    }),
                    this.dHash = new i({
                        hex: t.hash
                    }))
                }
                ,
                r.lang.extend(mn.asn1.cades.OtherHashAlgAndValue, mn.asn1.ASN1Object),
                mn.asn1.cades.SignatureTimeStamp = function(t) {
                    var e = mn.asn1
                      , n = e.ASN1Object;
                    e.x509;
                    if (e.cades.SignatureTimeStamp.superclass.constructor.call(this),
                    this.attrTypeOid = "1.2.840.113549.1.9.16.2.14",
                    this.tstHex = null,
                    t !== undefined) {
                        if (t.res !== undefined)
                            if ("string" == typeof t.res && t.res.match(/^[0-9A-Fa-f]+$/))
                                ;
                            else if (!(t.res instanceof n))
                                throw "res param shall be ASN1Object or hex string";
                        if (t.tst !== undefined)
                            if ("string" == typeof t.tst && t.tst.match(/^[0-9A-Fa-f]+$/)) {
                                var i = new n;
                                this.tstHex = t.tst,
                                i.hTLV = this.tstHex,
                                i.getEncodedHex(),
                                this.valueList = [i]
                            } else if (!(t.tst instanceof n))
                                throw "tst param shall be ASN1Object or hex string"
                    }
                }
                ,
                r.lang.extend(mn.asn1.cades.SignatureTimeStamp, mn.asn1.cms.Attribute),
                mn.asn1.cades.CompleteCertificateRefs = function(t) {
                    var e = mn.asn1.cades;
                    e.CompleteCertificateRefs.superclass.constructor.call(this),
                    this.attrTypeOid = "1.2.840.113549.1.9.16.2.21",
                    this.setByArray = function(t) {
                        this.valueList = [];
                        for (var n = 0; n < t.length; n++) {
                            var i = new e.OtherCertID(t[n]);
                            this.valueList.push(i)
                        }
                    }
                    ,
                    t !== undefined && "object" == typeof t && "number" == typeof t.length && this.setByArray(t)
                }
                ,
                r.lang.extend(mn.asn1.cades.CompleteCertificateRefs, mn.asn1.cms.Attribute),
                mn.asn1.cades.OtherCertID = function(t) {
                    var e = mn.asn1
                      , n = e.cms
                      , i = e.cades;
                    i.OtherCertID.superclass.constructor.call(this),
                    this.hasIssuerSerial = !0,
                    this.dOtherCertHash = null,
                    this.dIssuerSerial = null,
                    this.setByCertPEM = function(t) {
                        this.dOtherCertHash = new i.OtherHash(t),
                        this.hasIssuerSerial && (this.dIssuerSerial = new n.IssuerAndSerialNumber(t))
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (null != this.hTLV)
                            return this.hTLV;
                        if (null == this.dOtherCertHash)
                            throw "otherCertHash not set";
                        var t = [this.dOtherCertHash];
                        null != this.dIssuerSerial && t.push(this.dIssuerSerial);
                        var n = new e.DERSequence({
                            array: t
                        });
                        return this.hTLV = n.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && ("string" == typeof t && -1 != t.indexOf("-----BEGIN ") && this.setByCertPEM(t),
                    "object" == typeof t && (!1 === t.hasis && (this.hasIssuerSerial = !1),
                    "string" == typeof t.cert && this.setByCertPEM(t.cert)))
                }
                ,
                r.lang.extend(mn.asn1.cades.OtherCertID, mn.asn1.ASN1Object),
                mn.asn1.cades.OtherHash = function(t) {
                    var e = mn
                      , n = e.asn1
                      , i = (n.cms,
                    n.cades)
                      , r = i.OtherHashAlgAndValue
                      , s = e.crypto.Util.hashHex;
                    if (i.OtherHash.superclass.constructor.call(this),
                    this.alg = "sha256",
                    this.dOtherHash = null,
                    this.setByCertPEM = function(t) {
                        if (-1 == t.indexOf("-----BEGIN "))
                            throw "certPEM not to seem PEM format";
                        var e = Vn(t)
                          , n = s(e, this.alg);
                        this.dOtherHash = new r({
                            alg: this.alg,
                            hash: n
                        })
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (null == this.dOtherHash)
                            throw "OtherHash not set";
                        return this.dOtherHash.getEncodedHex()
                    }
                    ,
                    t !== undefined)
                        if ("string" == typeof t)
                            if (-1 != t.indexOf("-----BEGIN "))
                                this.setByCertPEM(t);
                            else {
                                if (!t.match(/^[0-9A-Fa-f]+$/))
                                    throw "unsupported string value for params";
                                this.dOtherHash = new n.DEROctetString({
                                    hex: t
                                })
                            }
                        else
                            "object" == typeof t && ("string" == typeof t.cert ? ("string" == typeof t.alg && (this.alg = t.alg),
                            this.setByCertPEM(t.cert)) : this.dOtherHash = new r(t))
                }
                ,
                r.lang.extend(mn.asn1.cades.OtherHash, mn.asn1.ASN1Object),
                mn.asn1.cades.CAdESUtil = new function() {}
                ,
                mn.asn1.cades.CAdESUtil.addSigTS = function(t, e, n) {}
                ,
                mn.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function(t) {
                    var e = xn
                      , n = e.getChildIdx
                      , i = e.getTLV
                      , r = e.getTLVbyList
                      , s = (e.getTLVbyListEx,
                    e.getIdxbyList)
                      , a = (e.getIdxbyListEx,
                    mn.asn1)
                      , o = a.ASN1Object
                      , h = a.cms.SignedData
                      , u = a.cades.CAdESUtil
                      , c = {};
                    if ("06092a864886f70d010702" != r(t, 0, [0]))
                        throw "hex is not CMS SignedData";
                    var f = n(t, s(t, 0, [1, 0]));
                    if (f.length < 4)
                        throw "num of SignedData elem shall be 4 at least";
                    var l = f.shift();
                    c.version = i(t, l);
                    var d = f.shift();
                    c.algs = i(t, d);
                    var g = f.shift();
                    c.encapcontent = i(t, g),
                    c.certs = null,
                    c.revs = null,
                    c.si = [];
                    var p = f.shift();
                    "a0" == t.substr(p, 2) && (c.certs = i(t, p),
                    p = f.shift()),
                    "a1" == t.substr(p, 2) && (c.revs = i(t, p),
                    p = f.shift());
                    var y = p;
                    if ("31" != t.substr(y, 2))
                        throw "Can't find signerInfos";
                    for (var m = n(t, y), v = 0; v < m.length; v++) {
                        var S = m[v]
                          , x = u.parseSignerInfoForAddingUnsigned(t, S, v);
                        c.si[v] = x
                    }
                    var F = null;
                    c.obj = new h,
                    (F = new o).hTLV = c.version,
                    c.obj.dCMSVersion = F,
                    (F = new o).hTLV = c.algs,
                    c.obj.dDigestAlgs = F,
                    (F = new o).hTLV = c.encapcontent,
                    c.obj.dEncapContentInfo = F,
                    (F = new o).hTLV = c.certs,
                    c.obj.dCerts = F,
                    c.obj.signerInfoList = [];
                    for (v = 0; v < c.si.length; v++)
                        c.obj.signerInfoList.push(c.si[v].obj);
                    return c
                }
                ,
                mn.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function(t, e, n) {
                    var i = xn
                      , r = i.getChildIdx
                      , s = i.getTLV
                      , a = i.getV
                      , o = mn.asn1
                      , h = o.ASN1Object
                      , u = o.cms
                      , c = u.AttributeList
                      , f = u.SignerInfo
                      , l = {}
                      , d = r(t, e);
                    if (6 != d.length)
                        throw "not supported items for SignerInfo (!=6)";
                    var g = d.shift();
                    l.version = s(t, g);
                    var p = d.shift();
                    l.si = s(t, p);
                    var y = d.shift();
                    l.digalg = s(t, y);
                    var m = d.shift();
                    l.sattrs = s(t, m);
                    var v = d.shift();
                    l.sigalg = s(t, v);
                    var S = d.shift();
                    l.sig = s(t, S),
                    l.sigval = a(t, S);
                    var x = null;
                    return l.obj = new f,
                    (x = new h).hTLV = l.version,
                    l.obj.dCMSVersion = x,
                    (x = new h).hTLV = l.si,
                    l.obj.dSignerIdentifier = x,
                    (x = new h).hTLV = l.digalg,
                    l.obj.dDigestAlgorithm = x,
                    (x = new h).hTLV = l.sattrs,
                    l.obj.dSignedAttrs = x,
                    (x = new h).hTLV = l.sigalg,
                    l.obj.dSigAlg = x,
                    (x = new h).hTLV = l.sig,
                    l.obj.dSig = x,
                    l.obj.dUnsignedAttrs = new c,
                    l
                }
                ,
                "undefined" != typeof mn.asn1.csr && mn.asn1.csr || (mn.asn1.csr = {}),
                mn.asn1.csr.CertificationRequest = function(t) {
                    var e = mn
                      , n = e.asn1
                      , i = n.DERBitString
                      , r = n.DERSequence
                      , s = n.csr
                      , a = n.x509;
                    s.CertificationRequest.superclass.constructor.call(this);
                    this.sign = function(t, n) {
                        null == this.prvKey && (this.prvKey = n),
                        this.asn1SignatureAlg = new a.AlgorithmIdentifier({
                            name: t
                        });
                        var s = new e.crypto.Signature({
                            alg: t
                        });
                        s.init(this.prvKey),
                        s.updateHex(this.asn1CSRInfo.getEncodedHex()),
                        this.hexSig = s.sign(),
                        this.asn1Sig = new i({
                            hex: "00" + this.hexSig
                        });
                        var o = new r({
                            array: [this.asn1CSRInfo, this.asn1SignatureAlg, this.asn1Sig]
                        });
                        this.hTLV = o.getEncodedHex(),
                        this.isModified = !1
                    }
                    ,
                    this.getPEMString = function() {
                        return On(this.getEncodedHex(), "CERTIFICATE REQUEST")
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (0 == this.isModified && null != this.hTLV)
                            return this.hTLV;
                        throw "not signed yet"
                    }
                    ,
                    t !== undefined && t.csrinfo !== undefined && (this.asn1CSRInfo = t.csrinfo)
                }
                ,
                r.lang.extend(mn.asn1.csr.CertificationRequest, mn.asn1.ASN1Object),
                mn.asn1.csr.CertificationRequestInfo = function(t) {
                    var e = mn.asn1
                      , n = e.DERInteger
                      , i = e.DERSequence
                      , r = e.DERSet
                      , s = e.DERNull
                      , a = e.DERTaggedObject
                      , o = e.DERObjectIdentifier
                      , h = e.csr
                      , u = e.x509
                      , c = u.X500Name
                      , f = u.Extension
                      , l = Wn;
                    h.CertificationRequestInfo.superclass.constructor.call(this),
                    this._initialize = function() {
                        this.asn1Array = new Array,
                        this.asn1Version = new n({
                            int: 0
                        }),
                        this.asn1Subject = null,
                        this.asn1SubjPKey = null,
                        this.extensionsArray = new Array
                    }
                    ,
                    this.setSubjectByParam = function(t) {
                        this.asn1Subject = new c(t)
                    }
                    ,
                    this.setSubjectPublicKeyByGetKey = function(t) {
                        var e = l.getKey(t);
                        this.asn1SubjPKey = new u.SubjectPublicKeyInfo(e)
                    }
                    ,
                    this.appendExtensionByName = function(t, e) {
                        f.appendByNameToArray(t, e, this.extensionsArray)
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (this.asn1Array = new Array,
                        this.asn1Array.push(this.asn1Version),
                        this.asn1Array.push(this.asn1Subject),
                        this.asn1Array.push(this.asn1SubjPKey),
                        this.extensionsArray.length > 0) {
                            var t = new i({
                                array: this.extensionsArray
                            })
                              , e = new r({
                                array: [t]
                            })
                              , n = new i({
                                array: [new o({
                                    oid: "1.2.840.113549.1.9.14"
                                }), e]
                            })
                              , h = new a({
                                explicit: !0,
                                tag: "a0",
                                obj: n
                            });
                            this.asn1Array.push(h)
                        } else {
                            h = new a({
                                explicit: !1,
                                tag: "a0",
                                obj: new s
                            });
                            this.asn1Array.push(h)
                        }
                        var u = new i({
                            array: this.asn1Array
                        });
                        return this.hTLV = u.getEncodedHex(),
                        this.isModified = !1,
                        this.hTLV
                    }
                    ,
                    this._initialize()
                }
                ,
                r.lang.extend(mn.asn1.csr.CertificationRequestInfo, mn.asn1.ASN1Object),
                mn.asn1.csr.CSRUtil = new function() {}
                ,
                mn.asn1.csr.CSRUtil.newCSRPEM = function(t) {
                    var e = Wn
                      , n = mn.asn1.csr;
                    if (t.subject === undefined)
                        throw "parameter subject undefined";
                    if (t.sbjpubkey === undefined)
                        throw "parameter sbjpubkey undefined";
                    if (t.sigalg === undefined)
                        throw "parameter sigalg undefined";
                    if (t.sbjprvkey === undefined)
                        throw "parameter sbjpubkey undefined";
                    var i = new n.CertificationRequestInfo;
                    if (i.setSubjectByParam(t.subject),
                    i.setSubjectPublicKeyByGetKey(t.sbjpubkey),
                    t.ext !== undefined && t.ext.length !== undefined)
                        for (var r = 0; r < t.ext.length; r++)
                            for (key in t.ext[r])
                                i.appendExtensionByName(key, t.ext[r][key]);
                    var s = new n.CertificationRequest({
                        csrinfo: i
                    })
                      , a = e.getKey(t.sbjprvkey);
                    return s.sign(t.sigalg, a),
                    s.getPEMString()
                }
                ,
                mn.asn1.csr.CSRUtil.getInfo = function(t) {
                    var e = xn.getTLVbyListEx
                      , n = {
                        subject: {},
                        pubkey: {}
                    };
                    if (-1 == t.indexOf("-----BEGIN CERTIFICATE REQUEST"))
                        throw "argument is not PEM file";
                    var i = Vn(t, "CERTIFICATE REQUEST");
                    try {
                        n.subject.hex = e(i, 0, [0, 1])
                    } catch (s) {}
                    try {
                        n.subject.name = Qn.hex2dn(n.subject.hex)
                    } catch (s) {}
                    n.pubkey.hex = e(i, 0, [0, 2]),
                    n.pubkey.obj = Wn.getKey(n.pubkey.hex, null, "pkcs8pub");
                    try {
                        n.ext = [];
                        var r = new Qn;
                        r.parseExt(t),
                        n.ext.push({
                            subjectAltName: {
                                array: r.getExtSubjectAltName2()
                            }
                        })
                    } catch (s) {}
                    return n
                }
                ,
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.asn1 && mn.asn1 || (mn.asn1 = {}),
                "undefined" != typeof mn.asn1.ocsp && mn.asn1.ocsp || (mn.asn1.ocsp = {}),
                mn.asn1.ocsp.DEFAULT_HASH = "sha1",
                mn.asn1.ocsp.CertID = function(t) {
                    var e = mn
                      , n = e.asn1
                      , i = n.DEROctetString
                      , r = n.DERInteger
                      , s = n.DERSequence
                      , a = n.x509.AlgorithmIdentifier
                      , o = n.ocsp
                      , h = o.DEFAULT_HASH
                      , u = e.crypto.Util.hashHex
                      , c = Qn
                      , f = xn;
                    if (o.CertID.superclass.constructor.call(this),
                    this.dHashAlg = null,
                    this.dIssuerNameHash = null,
                    this.dIssuerKeyHash = null,
                    this.dSerialNumber = null,
                    this.setByValue = function(t, e, n, s) {
                        s === undefined && (s = h),
                        this.dHashAlg = new a({
                            name: s
                        }),
                        this.dIssuerNameHash = new i({
                            hex: t
                        }),
                        this.dIssuerKeyHash = new i({
                            hex: e
                        }),
                        this.dSerialNumber = new r({
                            hex: n
                        })
                    }
                    ,
                    this.setByCert = function(t, e, n) {
                        n === undefined && (n = h);
                        var i = new c;
                        i.readCertPEM(e);
                        var r = new c;
                        r.readCertPEM(t);
                        var s = r.getPublicKeyHex()
                          , a = f.getTLVbyList(s, 0, [1, 0], "30")
                          , o = i.getSerialNumberHex()
                          , l = u(r.getSubjectHex(), n)
                          , d = u(a, n);
                        this.setByValue(l, d, o, n),
                        this.hoge = i.getSerialNumberHex()
                    }
                    ,
                    this.getEncodedHex = function() {
                        if (null === this.dHashAlg && null === this.dIssuerNameHash && null === this.dIssuerKeyHash && null === this.dSerialNumber)
                            throw "not yet set values";
                        var t = [this.dHashAlg, this.dIssuerNameHash, this.dIssuerKeyHash, this.dSerialNumber]
                          , e = new s({
                            array: t
                        });
                        return this.hTLV = e.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined) {
                        var l = t;
                        if (l.issuerCert !== undefined && l.subjectCert !== undefined) {
                            var d = h;
                            l.alg === undefined && (d = undefined),
                            this.setByCert(l.issuerCert, l.subjectCert, d)
                        } else {
                            if (l.namehash === undefined || l.keyhash === undefined || l.serial === undefined)
                                throw "invalid constructor arguments";
                            d = h;
                            l.alg === undefined && (d = undefined),
                            this.setByValue(l.namehash, l.keyhash, l.serial, d)
                        }
                    }
                }
                ,
                r.lang.extend(mn.asn1.ocsp.CertID, mn.asn1.ASN1Object),
                mn.asn1.ocsp.Request = function(t) {
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.ocsp;
                    if (i.Request.superclass.constructor.call(this),
                    this.dReqCert = null,
                    this.dExt = null,
                    this.getEncodedHex = function() {
                        var t = [];
                        if (null === this.dReqCert)
                            throw "reqCert not set";
                        t.push(this.dReqCert);
                        var e = new n({
                            array: t
                        });
                        return this.hTLV = e.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    void 0 !== t) {
                        var r = new i.CertID(t);
                        this.dReqCert = r
                    }
                }
                ,
                r.lang.extend(mn.asn1.ocsp.Request, mn.asn1.ASN1Object),
                mn.asn1.ocsp.TBSRequest = function(t) {
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.ocsp;
                    i.TBSRequest.superclass.constructor.call(this),
                    this.version = 0,
                    this.dRequestorName = null,
                    this.dRequestList = [],
                    this.dRequestExt = null,
                    this.setRequestListByParam = function(t) {
                        for (var e = [], n = 0; n < t.length; n++) {
                            var r = new i.Request(t[0]);
                            e.push(r)
                        }
                        this.dRequestList = e
                    }
                    ,
                    this.getEncodedHex = function() {
                        var t = [];
                        if (0 !== this.version)
                            throw "not supported version: " + this.version;
                        if (null !== this.dRequestorName)
                            throw "requestorName not supported";
                        var e = new n({
                            array: this.dRequestList
                        });
                        if (t.push(e),
                        null !== this.dRequestExt)
                            throw "requestExtensions not supported";
                        var i = new n({
                            array: t
                        });
                        return this.hTLV = i.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && t.reqList !== undefined && this.setRequestListByParam(t.reqList)
                }
                ,
                r.lang.extend(mn.asn1.ocsp.TBSRequest, mn.asn1.ASN1Object),
                mn.asn1.ocsp.OCSPRequest = function(t) {
                    var e = mn.asn1
                      , n = e.DERSequence
                      , i = e.ocsp;
                    if (i.OCSPRequest.superclass.constructor.call(this),
                    this.dTbsRequest = null,
                    this.dOptionalSignature = null,
                    this.getEncodedHex = function() {
                        var t = [];
                        if (null === this.dTbsRequest)
                            throw "tbsRequest not set";
                        if (t.push(this.dTbsRequest),
                        null !== this.dOptionalSignature)
                            throw "optionalSignature not supported";
                        var e = new n({
                            array: t
                        });
                        return this.hTLV = e.getEncodedHex(),
                        this.hTLV
                    }
                    ,
                    t !== undefined && t.reqList !== undefined) {
                        var r = new i.TBSRequest(t);
                        this.dTbsRequest = r
                    }
                }
                ,
                r.lang.extend(mn.asn1.ocsp.OCSPRequest, mn.asn1.ASN1Object),
                mn.asn1.ocsp.OCSPUtil = {},
                mn.asn1.ocsp.OCSPUtil.getRequestHex = function(t, e, n) {
                    var i = mn.asn1.ocsp;
                    n === undefined && (n = i.DEFAULT_HASH);
                    var r = {
                        alg: n,
                        issuerCert: t,
                        subjectCert: e
                    };
                    return new i.OCSPRequest({
                        reqList: [r]
                    }).getEncodedHex()
                }
                ,
                mn.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function(t) {
                    var e = xn
                      , n = e.getVbyList
                      , i = e.getVbyListEx
                      , r = e.getIdxbyList
                      , s = (e.getIdxbyListEx,
                    e.getV)
                      , a = {};
                    try {
                        var o = i(t, 0, [0], "0a");
                        a.responseStatus = parseInt(o, 16)
                    } catch (f) {}
                    if (0 !== a.responseStatus)
                        return a;
                    try {
                        var h = r(t, 0, [1, 0, 1, 0, 0, 2, 0, 1]);
                        "80" === t.substr(h, 2) ? a.certStatus = "good" : "a1" === t.substr(h, 2) ? (a.certStatus = "revoked",
                        a.revocationTime = Pn(n(t, h, [0]))) : "82" === t.substr(h, 2) && (a.certStatus = "unknown")
                    } catch (f) {}
                    try {
                        var u = r(t, 0, [1, 0, 1, 0, 0, 2, 0, 2]);
                        a.thisUpdate = Pn(s(t, u))
                    } catch (f) {}
                    try {
                        var c = r(t, 0, [1, 0, 1, 0, 0, 2, 0, 3]);
                        "a0" === t.substr(c, 2) && (a.nextUpdate = Pn(n(t, c, [0])))
                    } catch (f) {}
                    return a
                }
                ,
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.lang && mn.lang || (mn.lang = {}),
                mn.lang.String = function() {}
                ,
                "function" == typeof t ? (vn = function(e) {
                    return An(new t(e,"utf8").toString("base64"))
                }
                ,
                Sn = function(e) {
                    return new t(Cn(e),"base64").toString("utf8")
                }
                ) : (vn = function(t) {
                    return Dn(Mn(zn(t)))
                }
                ,
                Sn = function(t) {
                    return decodeURIComponent(kn(In(t)))
                }
                ),
                mn.lang.String.isInteger = function(t) {
                    return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/)
                }
                ,
                mn.lang.String.isHex = function(t) {
                    return !(t.length % 2 != 0 || !t.match(/^[0-9a-f]+$/) && !t.match(/^[0-9A-F]+$/))
                }
                ,
                mn.lang.String.isBase64 = function(t) {
                    return !(!(t = t.replace(/\s+/g, "")).match(/^[0-9A-Za-z+\/]+={0,3}$/) || t.length % 4 != 0)
                }
                ,
                mn.lang.String.isBase64URL = function(t) {
                    return !t.match(/[+/=]/) && (t = Cn(t),
                    mn.lang.String.isBase64(t))
                }
                ,
                mn.lang.String.isIntegerArray = function(t) {
                    return !!(t = t.replace(/\s+/g, "")).match(/^\[[0-9,]+\]$/)
                }
                ;
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.crypto && mn.crypto || (mn.crypto = {}),
                mn.crypto.Util = new function() {
                    this.DIGESTINFOHEAD = {
                        sha1: "3021300906052b0e03021a05000414",
                        sha224: "302d300d06096086480165030402040500041c",
                        sha256: "3031300d060960864801650304020105000420",
                        sha384: "3041300d060960864801650304020205000430",
                        sha512: "3051300d060960864801650304020305000440",
                        md2: "3020300c06082a864886f70d020205000410",
                        md5: "3020300c06082a864886f70d020505000410",
                        ripemd160: "3021300906052b2403020105000414"
                    },
                    this.DEFAULTPROVIDER = {
                        md5: "cryptojs",
                        sha1: "cryptojs",
                        sha224: "cryptojs",
                        sha256: "cryptojs",
                        sha384: "cryptojs",
                        sha512: "cryptojs",
                        ripemd160: "cryptojs",
                        hmacmd5: "cryptojs",
                        hmacsha1: "cryptojs",
                        hmacsha224: "cryptojs",
                        hmacsha256: "cryptojs",
                        hmacsha384: "cryptojs",
                        hmacsha512: "cryptojs",
                        hmacripemd160: "cryptojs",
                        MD5withRSA: "cryptojs/jsrsa",
                        SHA1withRSA: "cryptojs/jsrsa",
                        SHA224withRSA: "cryptojs/jsrsa",
                        SHA256withRSA: "cryptojs/jsrsa",
                        SHA384withRSA: "cryptojs/jsrsa",
                        SHA512withRSA: "cryptojs/jsrsa",
                        RIPEMD160withRSA: "cryptojs/jsrsa",
                        MD5withECDSA: "cryptojs/jsrsa",
                        SHA1withECDSA: "cryptojs/jsrsa",
                        SHA224withECDSA: "cryptojs/jsrsa",
                        SHA256withECDSA: "cryptojs/jsrsa",
                        SHA384withECDSA: "cryptojs/jsrsa",
                        SHA512withECDSA: "cryptojs/jsrsa",
                        RIPEMD160withECDSA: "cryptojs/jsrsa",
                        SHA1withDSA: "cryptojs/jsrsa",
                        SHA224withDSA: "cryptojs/jsrsa",
                        SHA256withDSA: "cryptojs/jsrsa",
                        MD5withRSAandMGF1: "cryptojs/jsrsa",
                        SHAwithRSAandMGF1: "cryptojs/jsrsa",
                        SHA1withRSAandMGF1: "cryptojs/jsrsa",
                        SHA224withRSAandMGF1: "cryptojs/jsrsa",
                        SHA256withRSAandMGF1: "cryptojs/jsrsa",
                        SHA384withRSAandMGF1: "cryptojs/jsrsa",
                        SHA512withRSAandMGF1: "cryptojs/jsrsa",
                        RIPEMD160withRSAandMGF1: "cryptojs/jsrsa"
                    },
                    this.CRYPTOJSMESSAGEDIGESTNAME = {
                        md5: s.algo.MD5,
                        sha1: s.algo.SHA1,
                        sha224: s.algo.SHA224,
                        sha256: s.algo.SHA256,
                        sha384: s.algo.SHA384,
                        sha512: s.algo.SHA512,
                        ripemd160: s.algo.RIPEMD160
                    },
                    this.getDigestInfoHex = function(t, e) {
                        if ("undefined" == typeof this.DIGESTINFOHEAD[e])
                            throw "alg not supported in Util.DIGESTINFOHEAD: " + e;
                        return this.DIGESTINFOHEAD[e] + t
                    }
                    ,
                    this.getPaddedDigestInfoHex = function(t, e, n) {
                        var i = this.getDigestInfoHex(t, e)
                          , r = n / 4;
                        if (i.length + 22 > r)
                            throw "key is too short for SigAlg: keylen=" + n + "," + e;
                        for (var s = "0001", a = "00" + i, o = "", h = r - s.length - a.length, u = 0; u < h; u += 2)
                            o += "ff";
                        return s + o + a
                    }
                    ,
                    this.hashString = function(t, e) {
                        return new mn.crypto.MessageDigest({
                            alg: e
                        }).digestString(t)
                    }
                    ,
                    this.hashHex = function(t, e) {
                        return new mn.crypto.MessageDigest({
                            alg: e
                        }).digestHex(t)
                    }
                    ,
                    this.sha1 = function(t) {
                        return this.hashString(t, "sha1")
                    }
                    ,
                    this.sha256 = function(t) {
                        return this.hashString(t, "sha256")
                    }
                    ,
                    this.sha256Hex = function(t) {
                        return this.hashHex(t, "sha256")
                    }
                    ,
                    this.sha512 = function(t) {
                        return this.hashString(t, "sha512")
                    }
                    ,
                    this.sha512Hex = function(t) {
                        return this.hashHex(t, "sha512")
                    }
                    ,
                    this.isKey = function(t) {
                        return t instanceof Te || t instanceof mn.crypto.DSA || t instanceof mn.crypto.ECDSA
                    }
                }
                ,
                mn.crypto.Util.md5 = function(t) {
                    return new mn.crypto.MessageDigest({
                        alg: "md5",
                        prov: "cryptojs"
                    }).digestString(t)
                }
                ,
                mn.crypto.Util.ripemd160 = function(t) {
                    return new mn.crypto.MessageDigest({
                        alg: "ripemd160",
                        prov: "cryptojs"
                    }).digestString(t)
                }
                ,
                mn.crypto.Util.SECURERANDOMGEN = new Ce,
                mn.crypto.Util.getRandomHexOfNbytes = function(t) {
                    var e = new Array(t);
                    return mn.crypto.Util.SECURERANDOMGEN.nextBytes(e),
                    wn(e)
                }
                ,
                mn.crypto.Util.getRandomBigIntegerOfNbytes = function(t) {
                    return new f(mn.crypto.Util.getRandomHexOfNbytes(t),16)
                }
                ,
                mn.crypto.Util.getRandomHexOfNbits = function(t) {
                    var e = t % 8
                      , n = new Array((t - e) / 8 + 1);
                    return mn.crypto.Util.SECURERANDOMGEN.nextBytes(n),
                    n[0] = (255 << e & 255 ^ 255) & n[0],
                    wn(n)
                }
                ,
                mn.crypto.Util.getRandomBigIntegerOfNbits = function(t) {
                    return new f(mn.crypto.Util.getRandomHexOfNbits(t),16)
                }
                ,
                mn.crypto.Util.getRandomBigIntegerZeroToMax = function(t) {
                    for (var e = t.bitLength(); ; ) {
                        var n = mn.crypto.Util.getRandomBigIntegerOfNbits(e);
                        if (-1 != t.compareTo(n))
                            return n
                    }
                }
                ,
                mn.crypto.Util.getRandomBigIntegerMinToMax = function(t, e) {
                    var n = t.compareTo(e);
                    if (1 == n)
                        throw "biMin is greater than biMax";
                    if (0 == n)
                        return t;
                    var i = e.subtract(t);
                    return mn.crypto.Util.getRandomBigIntegerZeroToMax(i).add(t)
                }
                ,
                mn.crypto.MessageDigest = function(t) {
                    this.setAlgAndProvider = function(t, e) {
                        if (null !== (t = mn.crypto.MessageDigest.getCanonicalAlgName(t)) && e === undefined && (e = mn.crypto.Util.DEFAULTPROVIDER[t]),
                        -1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) && "cryptojs" == e) {
                            try {
                                this.md = mn.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create()
                            } catch (n) {
                                throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + n
                            }
                            this.updateString = function(t) {
                                this.md.update(t)
                            }
                            ,
                            this.updateHex = function(t) {
                                var e = s.enc.Hex.parse(t);
                                this.md.update(e)
                            }
                            ,
                            this.digest = function() {
                                return this.md.finalize().toString(s.enc.Hex)
                            }
                            ,
                            this.digestString = function(t) {
                                return this.updateString(t),
                                this.digest()
                            }
                            ,
                            this.digestHex = function(t) {
                                return this.updateHex(t),
                                this.digest()
                            }
                        }
                        if (-1 != ":sha256:".indexOf(t) && "sjcl" == e) {
                            try {
                                this.md = new sjcl.hash.sha256
                            } catch (n) {
                                throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + n
                            }
                            this.updateString = function(t) {
                                this.md.update(t)
                            }
                            ,
                            this.updateHex = function(t) {
                                var e = sjcl.codec.hex.toBits(t);
                                this.md.update(e)
                            }
                            ,
                            this.digest = function() {
                                var t = this.md.finalize();
                                return sjcl.codec.hex.fromBits(t)
                            }
                            ,
                            this.digestString = function(t) {
                                return this.updateString(t),
                                this.digest()
                            }
                            ,
                            this.digestHex = function(t) {
                                return this.updateHex(t),
                                this.digest()
                            }
                        }
                    }
                    ,
                    this.updateString = function(t) {
                        throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName
                    }
                    ,
                    this.updateHex = function(t) {
                        throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName
                    }
                    ,
                    this.digest = function() {
                        throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName
                    }
                    ,
                    this.digestString = function(t) {
                        throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName
                    }
                    ,
                    this.digestHex = function(t) {
                        throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName
                    }
                    ,
                    t !== undefined && t.alg !== undefined && (this.algName = t.alg,
                    t.prov === undefined && (this.provName = mn.crypto.Util.DEFAULTPROVIDER[this.algName]),
                    this.setAlgAndProvider(this.algName, this.provName))
                }
                ,
                mn.crypto.MessageDigest.getCanonicalAlgName = function(t) {
                    return "string" == typeof t && (t = (t = t.toLowerCase()).replace(/-/, "")),
                    t
                }
                ,
                mn.crypto.MessageDigest.getHashLength = function(t) {
                    var e = mn.crypto.MessageDigest
                      , n = e.getCanonicalAlgName(t);
                    if (e.HASHLENGTH[n] === undefined)
                        throw "not supported algorithm: " + t;
                    return e.HASHLENGTH[n]
                }
                ,
                mn.crypto.MessageDigest.HASHLENGTH = {
                    md5: 16,
                    sha1: 20,
                    sha224: 28,
                    sha256: 32,
                    sha384: 48,
                    sha512: 64,
                    ripemd160: 20
                },
                mn.crypto.Mac = function(t) {
                    this.setAlgAndProvider = function(t, e) {
                        if (null == (t = t.toLowerCase()) && (t = "hmacsha1"),
                        "hmac" != (t = t.toLowerCase()).substr(0, 4))
                            throw "setAlgAndProvider unsupported HMAC alg: " + t;
                        e === undefined && (e = mn.crypto.Util.DEFAULTPROVIDER[t]),
                        this.algProv = t + "/" + e;
                        var n = t.substr(4);
                        if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(n) && "cryptojs" == e) {
                            try {
                                var i = mn.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[n];
                                this.mac = s.algo.HMAC.create(i, this.pass)
                            } catch (r) {
                                throw "setAlgAndProvider hash alg set fail hashAlg=" + n + "/" + r
                            }
                            this.updateString = function(t) {
                                this.mac.update(t)
                            }
                            ,
                            this.updateHex = function(t) {
                                var e = s.enc.Hex.parse(t);
                                this.mac.update(e)
                            }
                            ,
                            this.doFinal = function() {
                                return this.mac.finalize().toString(s.enc.Hex)
                            }
                            ,
                            this.doFinalString = function(t) {
                                return this.updateString(t),
                                this.doFinal()
                            }
                            ,
                            this.doFinalHex = function(t) {
                                return this.updateHex(t),
                                this.doFinal()
                            }
                        }
                    }
                    ,
                    this.updateString = function(t) {
                        throw "updateString(str) not supported for this alg/prov: " + this.algProv
                    }
                    ,
                    this.updateHex = function(t) {
                        throw "updateHex(hex) not supported for this alg/prov: " + this.algProv
                    }
                    ,
                    this.doFinal = function() {
                        throw "digest() not supported for this alg/prov: " + this.algProv
                    }
                    ,
                    this.doFinalString = function(t) {
                        throw "digestString(str) not supported for this alg/prov: " + this.algProv
                    }
                    ,
                    this.doFinalHex = function(t) {
                        throw "digestHex(hex) not supported for this alg/prov: " + this.algProv
                    }
                    ,
                    this.setPassword = function(t) {
                        if ("string" == typeof t) {
                            var e = t;
                            return t.length % 2 != 1 && t.match(/^[0-9A-Fa-f]+$/) || (e = Hn(t)),
                            void (this.pass = s.enc.Hex.parse(e))
                        }
                        if ("object" != typeof t)
                            throw "KJUR.crypto.Mac unsupported password type: " + t;
                        e = null;
                        if (t.hex !== undefined) {
                            if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/))
                                throw "Mac: wrong hex password: " + t.hex;
                            e = t.hex
                        }
                        if (t.utf8 !== undefined && (e = Tn(t.utf8)),
                        t.rstr !== undefined && (e = Hn(t.rstr)),
                        t.b64 !== undefined && (e = u(t.b64)),
                        t.b64u !== undefined && (e = In(t.b64u)),
                        null == e)
                            throw "KJUR.crypto.Mac unsupported password type: " + t;
                        this.pass = s.enc.Hex.parse(e)
                    }
                    ,
                    t !== undefined && (t.pass !== undefined && this.setPassword(t.pass),
                    t.alg !== undefined && (this.algName = t.alg,
                    t.prov === undefined && (this.provName = mn.crypto.Util.DEFAULTPROVIDER[this.algName]),
                    this.setAlgAndProvider(this.algName, this.provName)))
                }
                ,
                mn.crypto.Signature = function(t) {
                    var e = null;
                    if (this._setAlgNames = function() {
                        var t = this.algName.match(/^(.+)with(.+)$/);
                        t && (this.mdAlgName = t[1].toLowerCase(),
                        this.pubkeyAlgName = t[2].toLowerCase(),
                        "rsaandmgf1" == this.pubkeyAlgName && "sha" == this.mdAlgName && (this.mdAlgName = "sha1"))
                    }
                    ,
                    this._zeroPaddingOfSignature = function(t, e) {
                        for (var n = "", i = e / 4 - t.length, r = 0; r < i; r++)
                            n += "0";
                        return n + t
                    }
                    ,
                    this.setAlgAndProvider = function(t, e) {
                        if (this._setAlgNames(),
                        "cryptojs/jsrsa" != e)
                            throw new Error("provider not supported: " + e);
                        if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)) {
                            try {
                                this.md = new mn.crypto.MessageDigest({
                                    alg: this.mdAlgName
                                })
                            } catch (n) {
                                throw new Error("setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + n)
                            }
                            this.init = function(t, e) {
                                var n = null;
                                try {
                                    n = e === undefined ? Wn.getKey(t) : Wn.getKey(t, e)
                                } catch (i) {
                                    throw "init failed:" + i
                                }
                                if (!0 === n.isPrivate)
                                    this.prvKey = n,
                                    this.state = "SIGN";
                                else {
                                    if (!0 !== n.isPublic)
                                        throw "init failed.:" + n;
                                    this.pubKey = n,
                                    this.state = "VERIFY"
                                }
                            }
                            ,
                            this.updateString = function(t) {
                                this.md.updateString(t)
                            }
                            ,
                            this.updateHex = function(t) {
                                this.md.updateHex(t)
                            }
                            ,
                            this.sign = function() {
                                if (this.sHashHex = this.md.digest(),
                                this.prvKey === undefined && this.ecprvhex !== undefined && this.eccurvename !== undefined && mn.crypto.ECDSA !== undefined && (this.prvKey = new mn.crypto.ECDSA({
                                    curve: this.eccurvename,
                                    prv: this.ecprvhex
                                })),
                                this.prvKey instanceof Te && "rsaandmgf1" === this.pubkeyAlgName)
                                    this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
                                else if (this.prvKey instanceof Te && "rsa" === this.pubkeyAlgName)
                                    this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
                                else if (this.prvKey instanceof mn.crypto.ECDSA)
                                    this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                                else {
                                    if (!(this.prvKey instanceof mn.crypto.DSA))
                                        throw "Signature: unsupported private key alg: " + this.pubkeyAlgName;
                                    this.hSign = this.prvKey.signWithMessageHash(this.sHashHex)
                                }
                                return this.hSign
                            }
                            ,
                            this.signString = function(t) {
                                return this.updateString(t),
                                this.sign()
                            }
                            ,
                            this.signHex = function(t) {
                                return this.updateHex(t),
                                this.sign()
                            }
                            ,
                            this.verify = function(t) {
                                if (this.sHashHex = this.md.digest(),
                                this.pubKey === undefined && this.ecpubhex !== undefined && this.eccurvename !== undefined && mn.crypto.ECDSA !== undefined && (this.pubKey = new mn.crypto.ECDSA({
                                    curve: this.eccurvename,
                                    pub: this.ecpubhex
                                })),
                                this.pubKey instanceof Te && "rsaandmgf1" === this.pubkeyAlgName)
                                    return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, t, this.mdAlgName, this.pssSaltLen);
                                if (this.pubKey instanceof Te && "rsa" === this.pubkeyAlgName)
                                    return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                                if (mn.crypto.ECDSA !== undefined && this.pubKey instanceof mn.crypto.ECDSA)
                                    return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                                if (mn.crypto.DSA !== undefined && this.pubKey instanceof mn.crypto.DSA)
                                    return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                                throw "Signature: unsupported public key alg: " + this.pubkeyAlgName
                            }
                        }
                    }
                    ,
                    this.init = function(t, e) {
                        throw "init(key, pass) not supported for this alg:prov=" + this.algProvName
                    }
                    ,
                    this.updateString = function(t) {
                        throw "updateString(str) not supported for this alg:prov=" + this.algProvName
                    }
                    ,
                    this.updateHex = function(t) {
                        throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName
                    }
                    ,
                    this.sign = function() {
                        throw "sign() not supported for this alg:prov=" + this.algProvName
                    }
                    ,
                    this.signString = function(t) {
                        throw "digestString(str) not supported for this alg:prov=" + this.algProvName
                    }
                    ,
                    this.signHex = function(t) {
                        throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName
                    }
                    ,
                    this.verify = function(t) {
                        throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName
                    }
                    ,
                    this.initParams = t,
                    t !== undefined && (t.alg !== undefined && (this.algName = t.alg,
                    t.prov === undefined ? this.provName = mn.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = t.prov,
                    this.algProvName = this.algName + ":" + this.provName,
                    this.setAlgAndProvider(this.algName, this.provName),
                    this._setAlgNames()),
                    t.psssaltlen !== undefined && (this.pssSaltLen = t.psssaltlen),
                    t.prvkeypem !== undefined)) {
                        if (t.prvkeypas !== undefined)
                            throw "both prvkeypem and prvkeypas parameters not supported";
                        try {
                            e = Wn.getKey(t.prvkeypem);
                            this.init(e)
                        } catch (n) {
                            throw "fatal error to load pem private key: " + n
                        }
                    }
                }
                ,
                mn.crypto.Cipher = function(t) {}
                ,
                mn.crypto.Cipher.encrypt = function(t, e, n) {
                    if (e instanceof Te && e.isPublic) {
                        var i = mn.crypto.Cipher.getAlgByKeyAndName(e, n);
                        if ("RSA" === i)
                            return e.encrypt(t);
                        if ("RSAOAEP" === i)
                            return e.encryptOAEP(t, "sha1");
                        var r = i.match(/^RSAOAEP(\d+)$/);
                        if (null !== r)
                            return e.encryptOAEP(t, "sha" + r[1]);
                        throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + n
                    }
                    throw "Cipher.encrypt: unsupported key or algorithm"
                }
                ,
                mn.crypto.Cipher.decrypt = function(t, e, n) {
                    if (e instanceof Te && e.isPrivate) {
                        var i = mn.crypto.Cipher.getAlgByKeyAndName(e, n);
                        if ("RSA" === i)
                            return e.decrypt(t);
                        if ("RSAOAEP" === i)
                            return e.decryptOAEP(t, "sha1");
                        var r = i.match(/^RSAOAEP(\d+)$/);
                        if (null !== r)
                            return e.decryptOAEP(t, "sha" + r[1]);
                        throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + n
                    }
                    throw "Cipher.decrypt: unsupported key or algorithm"
                }
                ,
                mn.crypto.Cipher.getAlgByKeyAndName = function(t, e) {
                    if (t instanceof Te) {
                        if (-1 != ":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(e))
                            return e;
                        if (null === e || e === undefined)
                            return "RSA";
                        throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + e
                    }
                    throw "getAlgByKeyAndName: not supported algorithm name: " + e
                }
                ,
                mn.crypto.OID = new function() {
                    this.oidhex2name = {
                        "2a864886f70d010101": "rsaEncryption",
                        "2a8648ce3d0201": "ecPublicKey",
                        "2a8648ce380401": "dsa",
                        "2a8648ce3d030107": "secp256r1",
                        "2b8104001f": "secp192k1",
                        "2b81040021": "secp224r1",
                        "2b8104000a": "secp256k1",
                        "2b81040023": "secp521r1",
                        "2b81040022": "secp384r1",
                        "2a8648ce380403": "SHA1withDSA",
                        "608648016503040301": "SHA224withDSA",
                        "608648016503040302": "SHA256withDSA"
                    }
                }
                ,
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.crypto && mn.crypto || (mn.crypto = {}),
                mn.crypto.ECDSA = function(t) {
                    var e = Error
                      , n = f
                      , i = He
                      , r = mn.crypto.ECDSA
                      , s = mn.crypto.ECParameterDB
                      , a = r.getName
                      , o = xn
                      , h = o.getVbyListEx
                      , u = o.isASN1HEX
                      , c = new Ce;
                    this.type = "EC",
                    this.isPrivate = !1,
                    this.isPublic = !1,
                    this.getBigRandom = function(t) {
                        return new n(t.bitLength(),c).mod(t.subtract(n.ONE)).add(n.ONE)
                    }
                    ,
                    this.setNamedCurve = function(t) {
                        this.ecparams = s.getByName(t),
                        this.prvKeyHex = null,
                        this.pubKeyHex = null,
                        this.curveName = t
                    }
                    ,
                    this.setPrivateKeyHex = function(t) {
                        this.isPrivate = !0,
                        this.prvKeyHex = t
                    }
                    ,
                    this.setPublicKeyHex = function(t) {
                        this.isPublic = !0,
                        this.pubKeyHex = t
                    }
                    ,
                    this.getPublicKeyXYHex = function() {
                        var t = this.pubKeyHex;
                        if ("04" !== t.substr(0, 2))
                            throw "this method supports uncompressed format(04) only";
                        var e = this.ecparams.keylen / 4;
                        if (t.length !== 2 + 2 * e)
                            throw "malformed public key hex length";
                        var n = {};
                        return n.x = t.substr(2, e),
                        n.y = t.substr(2 + e),
                        n
                    }
                    ,
                    this.getShortNISTPCurveName = function() {
                        var t = this.curveName;
                        return "secp256r1" === t || "NIST P-256" === t || "P-256" === t || "prime256v1" === t ? "P-256" : "secp384r1" === t || "NIST P-384" === t || "P-384" === t ? "P-384" : null
                    }
                    ,
                    this.generateKeyPairHex = function() {
                        var t = this.ecparams.n
                          , e = this.getBigRandom(t)
                          , n = this.ecparams.G.multiply(e)
                          , i = n.getX().toBigInteger()
                          , r = n.getY().toBigInteger()
                          , s = this.ecparams.keylen / 4
                          , a = ("0000000000" + e.toString(16)).slice(-s)
                          , o = "04" + ("0000000000" + i.toString(16)).slice(-s) + ("0000000000" + r.toString(16)).slice(-s);
                        return this.setPrivateKeyHex(a),
                        this.setPublicKeyHex(o),
                        {
                            ecprvhex: a,
                            ecpubhex: o
                        }
                    }
                    ,
                    this.signWithMessageHash = function(t) {
                        return this.signHex(t, this.prvKeyHex)
                    }
                    ,
                    this.signHex = function(t, e) {
                        var i = new n(e,16)
                          , s = this.ecparams.n
                          , a = new n(t.substring(0, this.ecparams.keylen / 4),16);
                        do {
                            var o = this.getBigRandom(s)
                              , h = this.ecparams.G.multiply(o).getX().toBigInteger().mod(s)
                        } while (h.compareTo(n.ZERO) <= 0);
                        var u = o.modInverse(s).multiply(a.add(i.multiply(h))).mod(s);
                        return r.biRSSigToASN1Sig(h, u)
                    }
                    ,
                    this.sign = function(t, e) {
                        var i = e
                          , r = this.ecparams.n
                          , s = n.fromByteArrayUnsigned(t);
                        do {
                            var a = this.getBigRandom(r)
                              , o = this.ecparams.G.multiply(a).getX().toBigInteger().mod(r)
                        } while (o.compareTo(f.ZERO) <= 0);
                        var h = a.modInverse(r).multiply(s.add(i.multiply(o))).mod(r);
                        return this.serializeSig(o, h)
                    }
                    ,
                    this.verifyWithMessageHash = function(t, e) {
                        return this.verifyHex(t, e, this.pubKeyHex)
                    }
                    ,
                    this.verifyHex = function(t, e, s) {
                        try {
                            var a, o, h = r.parseSigHex(e);
                            a = h.r,
                            o = h.s;
                            var u = i.decodeFromHex(this.ecparams.curve, s)
                              , c = new n(t.substring(0, this.ecparams.keylen / 4),16);
                            return this.verifyRaw(c, a, o, u)
                        } catch (f) {
                            return !1
                        }
                    }
                    ,
                    this.verify = function(t, e, r) {
                        var s, a, o;
                        if (Bitcoin.Util.isArray(e)) {
                            var h = this.parseSig(e);
                            s = h.r,
                            a = h.s
                        } else {
                            if ("object" != typeof e || !e.r || !e.s)
                                throw "Invalid value for signature";
                            s = e.r,
                            a = e.s
                        }
                        if (r instanceof He)
                            o = r;
                        else {
                            if (!Bitcoin.Util.isArray(r))
                                throw "Invalid format for pubkey value, must be byte array or ECPointFp";
                            o = i.decodeFrom(this.ecparams.curve, r)
                        }
                        var u = n.fromByteArrayUnsigned(t);
                        return this.verifyRaw(u, s, a, o)
                    }
                    ,
                    this.verifyRaw = function(t, e, i, r) {
                        var s = this.ecparams.n
                          , a = this.ecparams.G;
                        if (e.compareTo(n.ONE) < 0 || e.compareTo(s) >= 0)
                            return !1;
                        if (i.compareTo(n.ONE) < 0 || i.compareTo(s) >= 0)
                            return !1;
                        var o = i.modInverse(s)
                          , h = t.multiply(o).mod(s)
                          , u = e.multiply(o).mod(s);
                        return a.multiply(h).add(r.multiply(u)).getX().toBigInteger().mod(s).equals(e)
                    }
                    ,
                    this.serializeSig = function(t, e) {
                        var n = t.toByteArraySigned()
                          , i = e.toByteArraySigned()
                          , r = [];
                        return r.push(2),
                        r.push(n.length),
                        (r = r.concat(n)).push(2),
                        r.push(i.length),
                        (r = r.concat(i)).unshift(r.length),
                        r.unshift(48),
                        r
                    }
                    ,
                    this.parseSig = function(t) {
                        var e;
                        if (48 != t[0])
                            throw new Error("Signature not a valid DERSequence");
                        if (2 != t[e = 2])
                            throw new Error("First element in signature must be a DERInteger");
                        var i = t.slice(e + 2, e + 2 + t[e + 1]);
                        if (2 != t[e += 2 + t[e + 1]])
                            throw new Error("Second element in signature must be a DERInteger");
                        var r = t.slice(e + 2, e + 2 + t[e + 1]);
                        return e += 2 + t[e + 1],
                        {
                            r: n.fromByteArrayUnsigned(i),
                            s: n.fromByteArrayUnsigned(r)
                        }
                    }
                    ,
                    this.parseSigCompact = function(t) {
                        if (65 !== t.length)
                            throw "Signature has the wrong length";
                        var e = t[0] - 27;
                        if (e < 0 || e > 7)
                            throw "Invalid signature type";
                        var i = this.ecparams.n;
                        return {
                            r: n.fromByteArrayUnsigned(t.slice(1, 33)).mod(i),
                            s: n.fromByteArrayUnsigned(t.slice(33, 65)).mod(i),
                            i: e
                        }
                    }
                    ,
                    this.readPKCS5PrvKeyHex = function(t) {
                        if (!1 === u(t))
                            throw new Error("not ASN.1 hex string");
                        var e, n, i;
                        try {
                            e = h(t, 0, ["[0]", 0], "06"),
                            n = h(t, 0, [1], "04");
                            try {
                                i = h(t, 0, ["[1]", 0], "03")
                            } catch (r) {}
                        } catch (r) {
                            throw new Error("malformed PKCS#1/5 plain ECC private key")
                        }
                        if (this.curveName = a(e),
                        this.curveName === undefined)
                            throw "unsupported curve name";
                        this.setNamedCurve(this.curveName),
                        this.setPublicKeyHex(i),
                        this.setPrivateKeyHex(n),
                        this.isPublic = !1
                    }
                    ,
                    this.readPKCS8PrvKeyHex = function(t) {
                        if (!1 === u(t))
                            throw new e("not ASN.1 hex string");
                        var n, i, r;
                        try {
                            h(t, 0, [1, 0], "06"),
                            n = h(t, 0, [1, 1], "06"),
                            i = h(t, 0, [2, 0, 1], "04");
                            try {
                                r = h(t, 0, [2, 0, "[1]", 0], "03")
                            } catch (s) {}
                        } catch (s) {
                            throw new e("malformed PKCS#8 plain ECC private key")
                        }
                        if (this.curveName = a(n),
                        this.curveName === undefined)
                            throw new e("unsupported curve name");
                        this.setNamedCurve(this.curveName),
                        this.setPublicKeyHex(r),
                        this.setPrivateKeyHex(i),
                        this.isPublic = !1
                    }
                    ,
                    this.readPKCS8PubKeyHex = function(t) {
                        if (!1 === u(t))
                            throw new e("not ASN.1 hex string");
                        var n, i;
                        try {
                            h(t, 0, [0, 0], "06"),
                            n = h(t, 0, [0, 1], "06"),
                            i = h(t, 0, [1], "03")
                        } catch (r) {
                            throw new e("malformed PKCS#8 ECC public key")
                        }
                        if (this.curveName = a(n),
                        null === this.curveName)
                            throw new e("unsupported curve name");
                        this.setNamedCurve(this.curveName),
                        this.setPublicKeyHex(i)
                    }
                    ,
                    this.readCertPubKeyHex = function(t, n) {
                        if (!1 === u(t))
                            throw new e("not ASN.1 hex string");
                        var i, r;
                        try {
                            i = h(t, 0, [0, 5, 0, 1], "06"),
                            r = h(t, 0, [0, 5, 1], "03")
                        } catch (s) {
                            throw new e("malformed X.509 certificate ECC public key")
                        }
                        if (this.curveName = a(i),
                        null === this.curveName)
                            throw new e("unsupported curve name");
                        this.setNamedCurve(this.curveName),
                        this.setPublicKeyHex(r)
                    }
                    ,
                    t !== undefined && t.curve !== undefined && (this.curveName = t.curve),
                    this.curveName === undefined && (this.curveName = "secp256r1"),
                    this.setNamedCurve(this.curveName),
                    t !== undefined && (t.prv !== undefined && this.setPrivateKeyHex(t.prv),
                    t.pub !== undefined && this.setPublicKeyHex(t.pub))
                }
                ,
                mn.crypto.ECDSA.parseSigHex = function(t) {
                    var e = mn.crypto.ECDSA.parseSigHexInHexRS(t);
                    return {
                        r: new f(e.r,16),
                        s: new f(e.s,16)
                    }
                }
                ,
                mn.crypto.ECDSA.parseSigHexInHexRS = function(t) {
                    var e = xn
                      , n = e.getChildIdx
                      , i = e.getV;
                    if (e.checkStrictDER(t, 0),
                    "30" != t.substr(0, 2))
                        throw new Error("signature is not a ASN.1 sequence");
                    var r = n(t, 0);
                    if (2 != r.length)
                        throw new Error("signature shall have two elements");
                    var s = r[0]
                      , a = r[1];
                    if ("02" != t.substr(s, 2))
                        throw new Error("1st item not ASN.1 integer");
                    if ("02" != t.substr(a, 2))
                        throw new Error("2nd item not ASN.1 integer");
                    return {
                        r: i(t, s),
                        s: i(t, a)
                    }
                }
                ,
                mn.crypto.ECDSA.asn1SigToConcatSig = function(t) {
                    var e = mn.crypto.ECDSA.parseSigHexInHexRS(t)
                      , n = e.r
                      , i = e.s;
                    if ("00" == n.substr(0, 2) && n.length % 32 == 2 && (n = n.substr(2)),
                    "00" == i.substr(0, 2) && i.length % 32 == 2 && (i = i.substr(2)),
                    n.length % 32 == 30 && (n = "00" + n),
                    i.length % 32 == 30 && (i = "00" + i),
                    n.length % 32 != 0)
                        throw "unknown ECDSA sig r length error";
                    if (i.length % 32 != 0)
                        throw "unknown ECDSA sig s length error";
                    return n + i
                }
                ,
                mn.crypto.ECDSA.concatSigToASN1Sig = function(t) {
                    if (t.length / 2 * 8 % 128 != 0)
                        throw "unknown ECDSA concatinated r-s sig  length error";
                    var e = t.substr(0, t.length / 2)
                      , n = t.substr(t.length / 2);
                    return mn.crypto.ECDSA.hexRSSigToASN1Sig(e, n)
                }
                ,
                mn.crypto.ECDSA.hexRSSigToASN1Sig = function(t, e) {
                    var n = new f(t,16)
                      , i = new f(e,16);
                    return mn.crypto.ECDSA.biRSSigToASN1Sig(n, i)
                }
                ,
                mn.crypto.ECDSA.biRSSigToASN1Sig = function(t, e) {
                    var n = mn.asn1
                      , i = new n.DERInteger({
                        bigint: t
                    })
                      , r = new n.DERInteger({
                        bigint: e
                    });
                    return new n.DERSequence({
                        array: [i, r]
                    }).getEncodedHex()
                }
                ,
                mn.crypto.ECDSA.getName = function(t) {
                    return "2b8104001f" === t ? "secp192k1" : "2a8648ce3d030107" === t ? "secp256r1" : "2b8104000a" === t ? "secp256k1" : "2b81040021" === t ? "secp224r1" : "2b81040022" === t ? "secp384r1" : -1 !== "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(t) ? "secp256r1" : -1 !== "|secp256k1|".indexOf(t) ? "secp256k1" : -1 !== "|secp224r1|NIST P-224|P-224|".indexOf(t) ? "secp224r1" : -1 !== "|secp384r1|NIST P-384|P-384|".indexOf(t) ? "secp384r1" : null
                }
                ,
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.crypto && mn.crypto || (mn.crypto = {}),
                mn.crypto.ECParameterDB = new function() {
                    var t = {}
                      , e = {};
                    function n(t) {
                        return new f(t,16)
                    }
                    this.getByName = function(n) {
                        var i = n;
                        if ("undefined" != typeof e[i] && (i = e[n]),
                        "undefined" != typeof t[i])
                            return t[i];
                        throw "unregistered EC curve name: " + i
                    }
                    ,
                    this.regist = function(i, r, s, a, o, h, u, c, f, l, d, g) {
                        t[i] = {};
                        var p = n(s)
                          , y = n(a)
                          , m = n(o)
                          , v = n(h)
                          , S = n(u)
                          , x = new Re(p,y,m)
                          , F = x.decodePointHex("04" + c + f);
                        t[i]["name"] = i,
                        t[i]["keylen"] = r,
                        t[i]["curve"] = x,
                        t[i]["G"] = F,
                        t[i]["n"] = v,
                        t[i]["h"] = S,
                        t[i]["oid"] = d,
                        t[i]["info"] = g;
                        for (var E = 0; E < l.length; E++)
                            e[l[E]] = i
                    }
                }
                ,
                mn.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field"),
                mn.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field"),
                mn.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field"),
                mn.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []),
                mn.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []),
                mn.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []),
                mn.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []),
                mn.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]),
                mn.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]),
                mn.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]),
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.crypto && mn.crypto || (mn.crypto = {}),
                mn.crypto.DSA = function() {
                    var t = xn
                      , e = (t.getVbyList,
                    t.getVbyListEx)
                      , n = t.isASN1HEX
                      , i = f;
                    this.p = null,
                    this.q = null,
                    this.g = null,
                    this.y = null,
                    this.x = null,
                    this.type = "DSA",
                    this.isPrivate = !1,
                    this.isPublic = !1,
                    this.setPrivate = function(t, e, n, i, r) {
                        this.isPrivate = !0,
                        this.p = t,
                        this.q = e,
                        this.g = n,
                        this.y = i,
                        this.x = r
                    }
                    ,
                    this.setPrivateHex = function(t, e, n, i, r) {
                        var s, a, o, h, u;
                        s = new f(t,16),
                        a = new f(e,16),
                        o = new f(n,16),
                        h = "string" == typeof i && i.length > 1 ? new f(i,16) : null,
                        u = new f(r,16),
                        this.setPrivate(s, a, o, h, u)
                    }
                    ,
                    this.setPublic = function(t, e, n, i) {
                        this.isPublic = !0,
                        this.p = t,
                        this.q = e,
                        this.g = n,
                        this.y = i,
                        this.x = null
                    }
                    ,
                    this.setPublicHex = function(t, e, n, i) {
                        var r, s, a, o;
                        r = new f(t,16),
                        s = new f(e,16),
                        a = new f(n,16),
                        o = new f(i,16),
                        this.setPublic(r, s, a, o)
                    }
                    ,
                    this.signWithMessageHash = function(t) {
                        var e = this.p
                          , n = this.q
                          , i = this.g
                          , r = (this.y,
                        this.x)
                          , s = mn.crypto.Util.getRandomBigIntegerMinToMax(f.ONE.add(f.ONE), n.subtract(f.ONE))
                          , a = new f(t.substr(0, n.bitLength() / 4),16)
                          , o = i.modPow(s, e).mod(n)
                          , h = s.modInverse(n).multiply(a.add(r.multiply(o))).mod(n);
                        return mn.asn1.ASN1Util.jsonToASN1HEX({
                            seq: [{
                                int: {
                                    bigint: o
                                }
                            }, {
                                int: {
                                    bigint: h
                                }
                            }]
                        })
                    }
                    ,
                    this.verifyWithMessageHash = function(t, e) {
                        var n = this.p
                          , i = this.q
                          , r = this.g
                          , s = this.y
                          , a = this.parseASN1Signature(e)
                          , o = a[0]
                          , h = a[1]
                          , u = new f(t.substr(0, i.bitLength() / 4),16);
                        if (f.ZERO.compareTo(o) > 0 || o.compareTo(i) > 0)
                            throw "invalid DSA signature";
                        if (f.ZERO.compareTo(h) >= 0 || h.compareTo(i) > 0)
                            throw "invalid DSA signature";
                        var c = h.modInverse(i)
                          , l = u.multiply(c).mod(i)
                          , d = o.multiply(c).mod(i);
                        return 0 == r.modPow(l, n).multiply(s.modPow(d, n)).mod(n).mod(i).compareTo(o)
                    }
                    ,
                    this.parseASN1Signature = function(t) {
                        try {
                            return [new i(e(t, 0, [0], "02"),16), new i(e(t, 0, [1], "02"),16)]
                        } catch (n) {
                            throw new Error("malformed ASN.1 DSA signature")
                        }
                    }
                    ,
                    this.readPKCS5PrvKeyHex = function(t) {
                        var i, r, s, a, o;
                        if (!1 === n(t))
                            throw new Error("not ASN.1 hex string");
                        try {
                            i = e(t, 0, [1], "02"),
                            r = e(t, 0, [2], "02"),
                            s = e(t, 0, [3], "02"),
                            a = e(t, 0, [4], "02"),
                            o = e(t, 0, [5], "02")
                        } catch (h) {
                            throw new Error("malformed PKCS#1/5 plain DSA private key")
                        }
                        this.setPrivateHex(i, r, s, a, o)
                    }
                    ,
                    this.readPKCS8PrvKeyHex = function(t) {
                        var i, r, s, a;
                        if (!1 === n(t))
                            throw new Error("not ASN.1 hex string");
                        try {
                            i = e(t, 0, [1, 1, 0], "02"),
                            r = e(t, 0, [1, 1, 1], "02"),
                            s = e(t, 0, [1, 1, 2], "02"),
                            a = e(t, 0, [2, 0], "02")
                        } catch (o) {
                            throw new Error("malformed PKCS#8 plain DSA private key")
                        }
                        this.setPrivateHex(i, r, s, null, a)
                    }
                    ,
                    this.readPKCS8PubKeyHex = function(t) {
                        var i, r, s, a;
                        if (!1 === n(t))
                            throw new Error("not ASN.1 hex string");
                        try {
                            i = e(t, 0, [0, 1, 0], "02"),
                            r = e(t, 0, [0, 1, 1], "02"),
                            s = e(t, 0, [0, 1, 2], "02"),
                            a = e(t, 0, [1, 0], "02")
                        } catch (o) {
                            throw new Error("malformed PKCS#8 DSA public key")
                        }
                        this.setPublicHex(i, r, s, a)
                    }
                    ,
                    this.readCertPubKeyHex = function(t, i) {
                        var r, s, a, o;
                        if (!1 === n(t))
                            throw new Error("not ASN.1 hex string");
                        try {
                            r = e(t, 0, [0, 5, 0, 1, 0], "02"),
                            s = e(t, 0, [0, 5, 0, 1, 1], "02"),
                            a = e(t, 0, [0, 5, 0, 1, 2], "02"),
                            o = e(t, 0, [0, 5, 1, 0], "02")
                        } catch (h) {
                            throw new Error("malformed X.509 certificate DSA public key")
                        }
                        this.setPublicHex(r, s, a, o)
                    }
                }
                ;
                var Wn = function() {
                    var t = function(t, n, i) {
                        return e(s.AES, t, n, i)
                    }
                      , e = function(t, e, n, i) {
                        var r = s.enc.Hex.parse(e)
                          , a = s.enc.Hex.parse(n)
                          , o = s.enc.Hex.parse(i)
                          , h = {};
                        h.key = a,
                        h.iv = o,
                        h.ciphertext = r;
                        var u = t.decrypt(h, a, {
                            iv: o
                        });
                        return s.enc.Hex.stringify(u)
                    }
                      , n = function(t, e, n) {
                        return i(s.AES, t, e, n)
                    }
                      , i = function(t, e, n, i) {
                        var r = s.enc.Hex.parse(e)
                          , a = s.enc.Hex.parse(n)
                          , o = s.enc.Hex.parse(i)
                          , h = t.encrypt(r, a, {
                            iv: o
                        })
                          , u = s.enc.Hex.parse(h.toString());
                        return s.enc.Base64.stringify(u)
                    }
                      , r = {
                        "AES-256-CBC": {
                            proc: t,
                            eproc: n,
                            keylen: 32,
                            ivlen: 16
                        },
                        "AES-192-CBC": {
                            proc: t,
                            eproc: n,
                            keylen: 24,
                            ivlen: 16
                        },
                        "AES-128-CBC": {
                            proc: t,
                            eproc: n,
                            keylen: 16,
                            ivlen: 16
                        },
                        "DES-EDE3-CBC": {
                            proc: function(t, n, i) {
                                return e(s.TripleDES, t, n, i)
                            },
                            eproc: function(t, e, n) {
                                return i(s.TripleDES, t, e, n)
                            },
                            keylen: 24,
                            ivlen: 8
                        },
                        "DES-CBC": {
                            proc: function(t, n, i) {
                                return e(s.DES, t, n, i)
                            },
                            eproc: function(t, e, n) {
                                return i(s.DES, t, e, n)
                            },
                            keylen: 8,
                            ivlen: 8
                        }
                    }
                      , a = function(t) {
                        var e = {}
                          , n = t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)","m"));
                        n && (e.cipher = n[1],
                        e.ivsalt = n[2]);
                        var i = t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
                        i && (e.type = i[1]);
                        var r = -1
                          , s = 0;
                        -1 != t.indexOf("\r\n\r\n") && (r = t.indexOf("\r\n\r\n"),
                        s = 2),
                        -1 != t.indexOf("\n\n") && (r = t.indexOf("\n\n"),
                        s = 1);
                        var a = t.indexOf("-----END");
                        if (-1 != r && -1 != a) {
                            var o = t.substring(r + 2 * s, a - s);
                            o = o.replace(/\s+/g, ""),
                            e.data = o
                        }
                        return e
                    }
                      , o = function(t, e, n) {
                        for (var i = n.substring(0, 16), a = s.enc.Hex.parse(i), o = s.enc.Utf8.parse(e), h = r[t]["keylen"] + r[t]["ivlen"], u = "", c = null; ; ) {
                            var f = s.algo.MD5.create();
                            if (null != c && f.update(c),
                            f.update(o),
                            f.update(a),
                            c = f.finalize(),
                            (u += s.enc.Hex.stringify(c)).length >= 2 * h)
                                break
                        }
                        var l = {};
                        return l.keyhex = u.substr(0, 2 * r[t]["keylen"]),
                        l.ivhex = u.substr(2 * r[t]["keylen"], 2 * r[t]["ivlen"]),
                        l
                    }
                      , h = function(t, e, n, i) {
                        var a = s.enc.Base64.parse(t)
                          , o = s.enc.Hex.stringify(a);
                        return (0,
                        r[e]["proc"])(o, n, i)
                    };
                    return {
                        version: "1.0.0",
                        parsePKCS5PEM: function(t) {
                            return a(t)
                        },
                        getKeyAndUnusedIvByPasscodeAndIvsalt: function(t, e, n) {
                            return o(t, e, n)
                        },
                        decryptKeyB64: function(t, e, n, i) {
                            return h(t, e, n, i)
                        },
                        getDecryptedKeyHex: function(t, e) {
                            var n = a(t)
                              , i = (n.type,
                            n.cipher)
                              , r = n.ivsalt
                              , s = n.data
                              , u = o(i, e, r).keyhex;
                            return h(s, i, u, r)
                        },
                        getEncryptedPKCS5PEMFromPrvKeyHex: function(t, e, n, i, a) {
                            var h = "";
                            if (void 0 !== i && null != i || (i = "AES-256-CBC"),
                            "undefined" == typeof r[i])
                                throw "KEYUTIL unsupported algorithm: " + i;
                            void 0 !== a && null != a || (a = function(t) {
                                var e = s.lib.WordArray.random(t);
                                return s.enc.Hex.stringify(e)
                            }(r[i]["ivlen"]).toUpperCase());
                            var u = function(t, e, n, i) {
                                return (0,
                                r[e]["eproc"])(t, n, i)
                            }(e, i, o(i, n, a).keyhex, a);
                            h = "-----BEGIN " + t + " PRIVATE KEY-----\r\n";
                            return h += "Proc-Type: 4,ENCRYPTED\r\n",
                            h += "DEK-Info: " + i + "," + a + "\r\n",
                            h += "\r\n",
                            h += u.replace(/(.{64})/g, "$1\r\n"),
                            h += "\r\n-----END " + t + " PRIVATE KEY-----\r\n"
                        },
                        parseHexOfEncryptedPKCS8: function(t) {
                            var e = xn
                              , n = e.getChildIdx
                              , i = e.getV
                              , r = {}
                              , s = n(t, 0);
                            if (2 != s.length)
                                throw "malformed format: SEQUENCE(0).items != 2: " + s.length;
                            r.ciphertext = i(t, s[1]);
                            var a = n(t, s[0]);
                            if (2 != a.length)
                                throw "malformed format: SEQUENCE(0.0).items != 2: " + a.length;
                            if ("2a864886f70d01050d" != i(t, a[0]))
                                throw "this only supports pkcs5PBES2";
                            var o = n(t, a[1]);
                            if (2 != a.length)
                                throw "malformed format: SEQUENCE(0.0.1).items != 2: " + o.length;
                            var h = n(t, o[1]);
                            if (2 != h.length)
                                throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + h.length;
                            if ("2a864886f70d0307" != i(t, h[0]))
                                throw "this only supports TripleDES";
                            r.encryptionSchemeAlg = "TripleDES",
                            r.encryptionSchemeIV = i(t, h[1]);
                            var u = n(t, o[0]);
                            if (2 != u.length)
                                throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + u.length;
                            if ("2a864886f70d01050c" != i(t, u[0]))
                                throw "this only supports pkcs5PBKDF2";
                            var c = n(t, u[1]);
                            if (c.length < 2)
                                throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + c.length;
                            r.pbkdf2Salt = i(t, c[0]);
                            var f = i(t, c[1]);
                            try {
                                r.pbkdf2Iter = parseInt(f, 16)
                            } catch (l) {
                                throw "malformed format pbkdf2Iter: " + f
                            }
                            return r
                        },
                        getPBKDF2KeyHexFromParam: function(t, e) {
                            var n = s.enc.Hex.parse(t.pbkdf2Salt)
                              , i = t.pbkdf2Iter
                              , r = s.PBKDF2(e, n, {
                                keySize: 6,
                                iterations: i
                            });
                            return s.enc.Hex.stringify(r)
                        },
                        _getPlainPKCS8HexFromEncryptedPKCS8PEM: function(t, e) {
                            var n = Vn(t, "ENCRYPTED PRIVATE KEY")
                              , i = this.parseHexOfEncryptedPKCS8(n)
                              , r = Wn.getPBKDF2KeyHexFromParam(i, e)
                              , a = {};
                            a.ciphertext = s.enc.Hex.parse(i.ciphertext);
                            var o = s.enc.Hex.parse(r)
                              , h = s.enc.Hex.parse(i.encryptionSchemeIV)
                              , u = s.TripleDES.decrypt(a, o, {
                                iv: h
                            });
                            return s.enc.Hex.stringify(u)
                        },
                        getKeyFromEncryptedPKCS8PEM: function(t, e) {
                            var n = this._getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e);
                            return this.getKeyFromPlainPrivatePKCS8Hex(n)
                        },
                        parsePlainPrivatePKCS8Hex: function(t) {
                            var e = xn
                              , n = e.getChildIdx
                              , i = e.getV
                              , r = {
                                algparam: null
                            };
                            if ("30" != t.substr(0, 2))
                                throw "malformed plain PKCS8 private key(code:001)";
                            var s = n(t, 0);
                            if (3 != s.length)
                                throw "malformed plain PKCS8 private key(code:002)";
                            if ("30" != t.substr(s[1], 2))
                                throw "malformed PKCS8 private key(code:003)";
                            var a = n(t, s[1]);
                            if (2 != a.length)
                                throw "malformed PKCS8 private key(code:004)";
                            if ("06" != t.substr(a[0], 2))
                                throw "malformed PKCS8 private key(code:005)";
                            if (r.algoid = i(t, a[0]),
                            "06" == t.substr(a[1], 2) && (r.algparam = i(t, a[1])),
                            "04" != t.substr(s[2], 2))
                                throw "malformed PKCS8 private key(code:006)";
                            return r.keyidx = e.getVidx(t, s[2]),
                            r
                        },
                        getKeyFromPlainPrivatePKCS8PEM: function(t) {
                            var e = Vn(t, "PRIVATE KEY");
                            return this.getKeyFromPlainPrivatePKCS8Hex(e)
                        },
                        getKeyFromPlainPrivatePKCS8Hex: function(t) {
                            var e, n = this.parsePlainPrivatePKCS8Hex(t);
                            if ("2a864886f70d010101" == n.algoid)
                                e = new Te;
                            else if ("2a8648ce380401" == n.algoid)
                                e = new mn.crypto.DSA;
                            else {
                                if ("2a8648ce3d0201" != n.algoid)
                                    throw "unsupported private key algorithm";
                                e = new mn.crypto.ECDSA
                            }
                            return e.readPKCS8PrvKeyHex(t),
                            e
                        },
                        _getKeyFromPublicPKCS8Hex: function(t) {
                            var e, n = xn.getVbyList(t, 0, [0, 0], "06");
                            if ("2a864886f70d010101" === n)
                                e = new Te;
                            else if ("2a8648ce380401" === n)
                                e = new mn.crypto.DSA;
                            else {
                                if ("2a8648ce3d0201" !== n)
                                    throw "unsupported PKCS#8 public key hex";
                                e = new mn.crypto.ECDSA
                            }
                            return e.readPKCS8PubKeyHex(t),
                            e
                        },
                        parsePublicRawRSAKeyHex: function(t) {
                            var e = xn
                              , n = e.getChildIdx
                              , i = e.getV
                              , r = {};
                            if ("30" != t.substr(0, 2))
                                throw "malformed RSA key(code:001)";
                            var s = n(t, 0);
                            if (2 != s.length)
                                throw "malformed RSA key(code:002)";
                            if ("02" != t.substr(s[0], 2))
                                throw "malformed RSA key(code:003)";
                            if (r.n = i(t, s[0]),
                            "02" != t.substr(s[1], 2))
                                throw "malformed RSA key(code:004)";
                            return r.e = i(t, s[1]),
                            r
                        },
                        parsePublicPKCS8Hex: function(t) {
                            var e = xn
                              , n = e.getChildIdx
                              , i = e.getV
                              , r = {
                                algparam: null
                            }
                              , s = n(t, 0);
                            if (2 != s.length)
                                throw "outer DERSequence shall have 2 elements: " + s.length;
                            var a = s[0];
                            if ("30" != t.substr(a, 2))
                                throw "malformed PKCS8 public key(code:001)";
                            var o = n(t, a);
                            if (2 != o.length)
                                throw "malformed PKCS8 public key(code:002)";
                            if ("06" != t.substr(o[0], 2))
                                throw "malformed PKCS8 public key(code:003)";
                            if (r.algoid = i(t, o[0]),
                            "06" == t.substr(o[1], 2) ? r.algparam = i(t, o[1]) : "30" == t.substr(o[1], 2) && (r.algparam = {},
                            r.algparam.p = e.getVbyList(t, o[1], [0], "02"),
                            r.algparam.q = e.getVbyList(t, o[1], [1], "02"),
                            r.algparam.g = e.getVbyList(t, o[1], [2], "02")),
                            "03" != t.substr(s[1], 2))
                                throw "malformed PKCS8 public key(code:004)";
                            return r.key = i(t, s[1]).substr(2),
                            r
                        }
                    }
                }();
                Wn.getKey = function(t, e, n) {
                    var i = (m = xn).getChildIdx
                      , r = (m.getV,
                    m.getVbyList)
                      , s = mn.crypto
                      , a = s.ECDSA
                      , o = s.DSA
                      , h = Te
                      , u = Vn
                      , c = Wn;
                    if (void 0 !== h && t instanceof h)
                        return t;
                    if (void 0 !== a && t instanceof a)
                        return t;
                    if (void 0 !== o && t instanceof o)
                        return t;
                    if (t.curve !== undefined && t.xy !== undefined && t.d === undefined)
                        return new a({
                            pub: t.xy,
                            curve: t.curve
                        });
                    if (t.curve !== undefined && t.d !== undefined)
                        return new a({
                            prv: t.d,
                            curve: t.curve
                        });
                    if (t.kty === undefined && t.n !== undefined && t.e !== undefined && t.d === undefined)
                        return (I = new h).setPublic(t.n, t.e),
                        I;
                    if (t.kty === undefined && t.n !== undefined && t.e !== undefined && t.d !== undefined && t.p !== undefined && t.q !== undefined && t.dp !== undefined && t.dq !== undefined && t.co !== undefined && t.qi === undefined)
                        return (I = new h).setPrivateEx(t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.co),
                        I;
                    if (t.kty === undefined && t.n !== undefined && t.e !== undefined && t.d !== undefined && t.p === undefined)
                        return (I = new h).setPrivate(t.n, t.e, t.d),
                        I;
                    if (t.p !== undefined && t.q !== undefined && t.g !== undefined && t.y !== undefined && t.x === undefined)
                        return (I = new o).setPublic(t.p, t.q, t.g, t.y),
                        I;
                    if (t.p !== undefined && t.q !== undefined && t.g !== undefined && t.y !== undefined && t.x !== undefined)
                        return (I = new o).setPrivate(t.p, t.q, t.g, t.y, t.x),
                        I;
                    if ("RSA" === t.kty && t.n !== undefined && t.e !== undefined && t.d === undefined)
                        return (I = new h).setPublic(In(t.n), In(t.e)),
                        I;
                    if ("RSA" === t.kty && t.n !== undefined && t.e !== undefined && t.d !== undefined && t.p !== undefined && t.q !== undefined && t.dp !== undefined && t.dq !== undefined && t.qi !== undefined)
                        return (I = new h).setPrivateEx(In(t.n), In(t.e), In(t.d), In(t.p), In(t.q), In(t.dp), In(t.dq), In(t.qi)),
                        I;
                    if ("RSA" === t.kty && t.n !== undefined && t.e !== undefined && t.d !== undefined)
                        return (I = new h).setPrivate(In(t.n), In(t.e), In(t.d)),
                        I;
                    if ("EC" === t.kty && t.crv !== undefined && t.x !== undefined && t.y !== undefined && t.d === undefined) {
                        var l = (D = new a({
                            curve: t.crv
                        })).ecparams.keylen / 4
                          , d = "04" + ("0000000000" + In(t.x)).slice(-l) + ("0000000000" + In(t.y)).slice(-l);
                        return D.setPublicKeyHex(d),
                        D
                    }
                    if ("EC" === t.kty && t.crv !== undefined && t.x !== undefined && t.y !== undefined && t.d !== undefined) {
                        l = (D = new a({
                            curve: t.crv
                        })).ecparams.keylen / 4,
                        d = "04" + ("0000000000" + In(t.x)).slice(-l) + ("0000000000" + In(t.y)).slice(-l);
                        var g = ("0000000000" + In(t.d)).slice(-l);
                        return D.setPublicKeyHex(d),
                        D.setPrivateKeyHex(g),
                        D
                    }
                    if ("pkcs5prv" === n) {
                        var p, y = t, m = xn;
                        if (9 === (p = i(y, 0)).length)
                            (I = new h).readPKCS5PrvKeyHex(y);
                        else if (6 === p.length)
                            (I = new o).readPKCS5PrvKeyHex(y);
                        else {
                            if (!(p.length > 2 && "04" === y.substr(p[1], 2)))
                                throw "unsupported PKCS#1/5 hexadecimal key";
                            (I = new a).readPKCS5PrvKeyHex(y)
                        }
                        return I
                    }
                    if ("pkcs8prv" === n)
                        return I = c.getKeyFromPlainPrivatePKCS8Hex(t);
                    if ("pkcs8pub" === n)
                        return c._getKeyFromPublicPKCS8Hex(t);
                    if ("x509pub" === n)
                        return Qn.getPublicKeyFromCertHex(t);
                    if (-1 != t.indexOf("-END CERTIFICATE-", 0) || -1 != t.indexOf("-END X509 CERTIFICATE-", 0) || -1 != t.indexOf("-END TRUSTED CERTIFICATE-", 0))
                        return Qn.getPublicKeyFromCertPEM(t);
                    if (-1 != t.indexOf("-END PUBLIC KEY-")) {
                        var v = Vn(t, "PUBLIC KEY");
                        return c._getKeyFromPublicPKCS8Hex(v)
                    }
                    if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
                        var S = u(t, "RSA PRIVATE KEY");
                        return c.getKey(S, null, "pkcs5prv")
                    }
                    if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
                        var x = r(B = u(t, "DSA PRIVATE KEY"), 0, [1], "02")
                          , F = r(B, 0, [2], "02")
                          , E = r(B, 0, [3], "02")
                          , w = r(B, 0, [4], "02")
                          , b = r(B, 0, [5], "02");
                        return (I = new o).setPrivate(new f(x,16), new f(F,16), new f(E,16), new f(w,16), new f(b,16)),
                        I
                    }
                    if (-1 != t.indexOf("-END EC PRIVATE KEY-") && -1 == t.indexOf("4,ENCRYPTED")) {
                        S = u(t, "EC PRIVATE KEY");
                        return c.getKey(S, null, "pkcs5prv")
                    }
                    if (-1 != t.indexOf("-END PRIVATE KEY-"))
                        return c.getKeyFromPlainPrivatePKCS8PEM(t);
                    if (-1 != t.indexOf("-END RSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
                        var A = c.getDecryptedKeyHex(t, e)
                          , C = new Te;
                        return C.readPKCS5PrvKeyHex(A),
                        C
                    }
                    if (-1 != t.indexOf("-END EC PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
                        var D, I = r(B = c.getDecryptedKeyHex(t, e), 0, [1], "04"), T = r(B, 0, [2, 0], "06"), P = r(B, 0, [3, 0], "03").substr(2);
                        if (mn.crypto.OID.oidhex2name[T] === undefined)
                            throw "undefined OID(hex) in KJUR.crypto.OID: " + T;
                        return (D = new a({
                            curve: mn.crypto.OID.oidhex2name[T]
                        })).setPublicKeyHex(P),
                        D.setPrivateKeyHex(I),
                        D.isPublic = !1,
                        D
                    }
                    if (-1 != t.indexOf("-END DSA PRIVATE KEY-") && -1 != t.indexOf("4,ENCRYPTED")) {
                        var B;
                        x = r(B = c.getDecryptedKeyHex(t, e), 0, [1], "02"),
                        F = r(B, 0, [2], "02"),
                        E = r(B, 0, [3], "02"),
                        w = r(B, 0, [4], "02"),
                        b = r(B, 0, [5], "02");
                        return (I = new o).setPrivate(new f(x,16), new f(F,16), new f(E,16), new f(w,16), new f(b,16)),
                        I
                    }
                    if (-1 != t.indexOf("-END ENCRYPTED PRIVATE KEY-"))
                        return c.getKeyFromEncryptedPKCS8PEM(t, e);
                    throw new Error("not supported argument")
                }
                ,
                Wn.generateKeypair = function(t, e) {
                    if ("RSA" == t) {
                        var n = e;
                        (a = new Te).generate(n, "10001"),
                        a.isPrivate = !0,
                        a.isPublic = !0;
                        var i = new Te
                          , r = a.n.toString(16)
                          , s = a.e.toString(16);
                        return i.setPublic(r, s),
                        i.isPrivate = !1,
                        i.isPublic = !0,
                        (o = {}).prvKeyObj = a,
                        o.pubKeyObj = i,
                        o
                    }
                    if ("EC" == t) {
                        var a, o, h = e, u = new mn.crypto.ECDSA({
                            curve: h
                        }).generateKeyPairHex();
                        return (a = new mn.crypto.ECDSA({
                            curve: h
                        })).setPublicKeyHex(u.ecpubhex),
                        a.setPrivateKeyHex(u.ecprvhex),
                        a.isPrivate = !0,
                        a.isPublic = !1,
                        (i = new mn.crypto.ECDSA({
                            curve: h
                        })).setPublicKeyHex(u.ecpubhex),
                        i.isPrivate = !1,
                        i.isPublic = !0,
                        (o = {}).prvKeyObj = a,
                        o.pubKeyObj = i,
                        o
                    }
                    throw "unknown algorithm: " + t
                }
                ,
                Wn.getPEM = function(t, e, n, i, r, a) {
                    var o = mn
                      , h = o.asn1
                      , u = h.DERObjectIdentifier
                      , c = h.DERInteger
                      , f = h.ASN1Util.newObject
                      , l = h.x509.SubjectPublicKeyInfo
                      , d = o.crypto
                      , g = d.DSA
                      , p = d.ECDSA
                      , y = Te;
                    function m(t) {
                        return f({
                            seq: [{
                                int: 0
                            }, {
                                int: {
                                    bigint: t.n
                                }
                            }, {
                                int: t.e
                            }, {
                                int: {
                                    bigint: t.d
                                }
                            }, {
                                int: {
                                    bigint: t.p
                                }
                            }, {
                                int: {
                                    bigint: t.q
                                }
                            }, {
                                int: {
                                    bigint: t.dmp1
                                }
                            }, {
                                int: {
                                    bigint: t.dmq1
                                }
                            }, {
                                int: {
                                    bigint: t.coeff
                                }
                            }]
                        })
                    }
                    function v(t) {
                        return f({
                            seq: [{
                                int: 1
                            }, {
                                octstr: {
                                    hex: t.prvKeyHex
                                }
                            }, {
                                tag: ["a0", !0, {
                                    oid: {
                                        name: t.curveName
                                    }
                                }]
                            }, {
                                tag: ["a1", !0, {
                                    bitstr: {
                                        hex: "00" + t.pubKeyHex
                                    }
                                }]
                            }]
                        })
                    }
                    function S(t) {
                        return f({
                            seq: [{
                                int: 0
                            }, {
                                int: {
                                    bigint: t.p
                                }
                            }, {
                                int: {
                                    bigint: t.q
                                }
                            }, {
                                int: {
                                    bigint: t.g
                                }
                            }, {
                                int: {
                                    bigint: t.y
                                }
                            }, {
                                int: {
                                    bigint: t.x
                                }
                            }]
                        })
                    }
                    if ((y !== undefined && t instanceof y || g !== undefined && t instanceof g || p !== undefined && t instanceof p) && 1 == t.isPublic && (e === undefined || "PKCS8PUB" == e))
                        return On(w = new l(t).getEncodedHex(), "PUBLIC KEY");
                    if ("PKCS1PRV" == e && y !== undefined && t instanceof y && (n === undefined || null == n) && 1 == t.isPrivate)
                        return On(w = m(t).getEncodedHex(), "RSA PRIVATE KEY");
                    if ("PKCS1PRV" == e && p !== undefined && t instanceof p && (n === undefined || null == n) && 1 == t.isPrivate) {
                        var x = new u({
                            name: t.curveName
                        }).getEncodedHex()
                          , F = v(t).getEncodedHex()
                          , E = "";
                        return E += On(x, "EC PARAMETERS"),
                        E += On(F, "EC PRIVATE KEY")
                    }
                    if ("PKCS1PRV" == e && g !== undefined && t instanceof g && (n === undefined || null == n) && 1 == t.isPrivate)
                        return On(w = S(t).getEncodedHex(), "DSA PRIVATE KEY");
                    if ("PKCS5PRV" == e && y !== undefined && t instanceof y && n !== undefined && null != n && 1 == t.isPrivate) {
                        var w = m(t).getEncodedHex();
                        return i === undefined && (i = "DES-EDE3-CBC"),
                        this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", w, n, i, a)
                    }
                    if ("PKCS5PRV" == e && p !== undefined && t instanceof p && n !== undefined && null != n && 1 == t.isPrivate) {
                        w = v(t).getEncodedHex();
                        return i === undefined && (i = "DES-EDE3-CBC"),
                        this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", w, n, i, a)
                    }
                    if ("PKCS5PRV" == e && g !== undefined && t instanceof g && n !== undefined && null != n && 1 == t.isPrivate) {
                        w = S(t).getEncodedHex();
                        return i === undefined && (i = "DES-EDE3-CBC"),
                        this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", w, n, i, a)
                    }
                    var b = function(t, e) {
                        var n = A(t, e);
                        return new f({
                            seq: [{
                                seq: [{
                                    oid: {
                                        name: "pkcs5PBES2"
                                    }
                                }, {
                                    seq: [{
                                        seq: [{
                                            oid: {
                                                name: "pkcs5PBKDF2"
                                            }
                                        }, {
                                            seq: [{
                                                octstr: {
                                                    hex: n.pbkdf2Salt
                                                }
                                            }, {
                                                int: n.pbkdf2Iter
                                            }]
                                        }]
                                    }, {
                                        seq: [{
                                            oid: {
                                                name: "des-EDE3-CBC"
                                            }
                                        }, {
                                            octstr: {
                                                hex: n.encryptionSchemeIV
                                            }
                                        }]
                                    }]
                                }]
                            }, {
                                octstr: {
                                    hex: n.ciphertext
                                }
                            }]
                        }).getEncodedHex()
                    }
                      , A = function(t, e) {
                        var n = s.lib.WordArray.random(8)
                          , i = s.lib.WordArray.random(8)
                          , r = s.PBKDF2(e, n, {
                            keySize: 6,
                            iterations: 100
                        })
                          , a = s.enc.Hex.parse(t)
                          , o = s.TripleDES.encrypt(a, r, {
                            iv: i
                        }) + ""
                          , h = {};
                        return h.ciphertext = o,
                        h.pbkdf2Salt = s.enc.Hex.stringify(n),
                        h.pbkdf2Iter = 100,
                        h.encryptionSchemeAlg = "DES-EDE3-CBC",
                        h.encryptionSchemeIV = s.enc.Hex.stringify(i),
                        h
                    };
                    if ("PKCS8PRV" == e && y != undefined && t instanceof y && 1 == t.isPrivate) {
                        var C = m(t).getEncodedHex();
                        w = f({
                            seq: [{
                                int: 0
                            }, {
                                seq: [{
                                    oid: {
                                        name: "rsaEncryption"
                                    }
                                }, {
                                    "null": !0
                                }]
                            }, {
                                octstr: {
                                    hex: C
                                }
                            }]
                        }).getEncodedHex();
                        return n === undefined || null == n ? On(w, "PRIVATE KEY") : On(F = b(w, n), "ENCRYPTED PRIVATE KEY")
                    }
                    if ("PKCS8PRV" == e && p !== undefined && t instanceof p && 1 == t.isPrivate) {
                        C = new f({
                            seq: [{
                                int: 1
                            }, {
                                octstr: {
                                    hex: t.prvKeyHex
                                }
                            }, {
                                tag: ["a1", !0, {
                                    bitstr: {
                                        hex: "00" + t.pubKeyHex
                                    }
                                }]
                            }]
                        }).getEncodedHex(),
                        w = f({
                            seq: [{
                                int: 0
                            }, {
                                seq: [{
                                    oid: {
                                        name: "ecPublicKey"
                                    }
                                }, {
                                    oid: {
                                        name: t.curveName
                                    }
                                }]
                            }, {
                                octstr: {
                                    hex: C
                                }
                            }]
                        }).getEncodedHex();
                        return n === undefined || null == n ? On(w, "PRIVATE KEY") : On(F = b(w, n), "ENCRYPTED PRIVATE KEY")
                    }
                    if ("PKCS8PRV" == e && g !== undefined && t instanceof g && 1 == t.isPrivate) {
                        C = new c({
                            bigint: t.x
                        }).getEncodedHex(),
                        w = f({
                            seq: [{
                                int: 0
                            }, {
                                seq: [{
                                    oid: {
                                        name: "dsa"
                                    }
                                }, {
                                    seq: [{
                                        int: {
                                            bigint: t.p
                                        }
                                    }, {
                                        int: {
                                            bigint: t.q
                                        }
                                    }, {
                                        int: {
                                            bigint: t.g
                                        }
                                    }]
                                }]
                            }, {
                                octstr: {
                                    hex: C
                                }
                            }]
                        }).getEncodedHex();
                        return n === undefined || null == n ? On(w, "PRIVATE KEY") : On(F = b(w, n), "ENCRYPTED PRIVATE KEY")
                    }
                    throw "unsupported object nor format"
                }
                ,
                Wn.getKeyFromCSRPEM = function(t) {
                    var e = Vn(t, "CERTIFICATE REQUEST");
                    return Wn.getKeyFromCSRHex(e)
                }
                ,
                Wn.getKeyFromCSRHex = function(t) {
                    var e = Wn.parseCSRHex(t);
                    return Wn.getKey(e.p8pubkeyhex, null, "pkcs8pub")
                }
                ,
                Wn.parseCSRHex = function(t) {
                    var e = xn
                      , n = e.getChildIdx
                      , i = e.getTLV
                      , r = {}
                      , s = t;
                    if ("30" != s.substr(0, 2))
                        throw "malformed CSR(code:001)";
                    var a = n(s, 0);
                    if (a.length < 1)
                        throw "malformed CSR(code:002)";
                    if ("30" != s.substr(a[0], 2))
                        throw "malformed CSR(code:003)";
                    var o = n(s, a[0]);
                    if (o.length < 3)
                        throw "malformed CSR(code:004)";
                    return r.p8pubkeyhex = i(s, o[2]),
                    r
                }
                ,
                Wn.getKeyID = function(t) {
                    var e = Wn
                      , n = xn;
                    "string" == typeof t && -1 != t.indexOf("BEGIN ") && (t = e.getKey(t));
                    var i = Vn(e.getPEM(t))
                      , r = n.getIdxbyList(i, 0, [1])
                      , s = n.getV(i, r).substring(2);
                    return mn.crypto.Util.hashHex(s, "sha1")
                }
                ,
                Wn.getJWKFromKey = function(t) {
                    var e = {};
                    if (t instanceof Te && t.isPrivate)
                        return e.kty = "RSA",
                        e.n = Dn(t.n.toString(16)),
                        e.e = Dn(t.e.toString(16)),
                        e.d = Dn(t.d.toString(16)),
                        e.p = Dn(t.p.toString(16)),
                        e.q = Dn(t.q.toString(16)),
                        e.dp = Dn(t.dmp1.toString(16)),
                        e.dq = Dn(t.dmq1.toString(16)),
                        e.qi = Dn(t.coeff.toString(16)),
                        e;
                    if (t instanceof Te && t.isPublic)
                        return e.kty = "RSA",
                        e.n = Dn(t.n.toString(16)),
                        e.e = Dn(t.e.toString(16)),
                        e;
                    if (t instanceof mn.crypto.ECDSA && t.isPrivate) {
                        if ("P-256" !== (i = t.getShortNISTPCurveName()) && "P-384" !== i)
                            throw "unsupported curve name for JWT: " + i;
                        var n = t.getPublicKeyXYHex();
                        return e.kty = "EC",
                        e.crv = i,
                        e.x = Dn(n.x),
                        e.y = Dn(n.y),
                        e.d = Dn(t.prvKeyHex),
                        e
                    }
                    if (t instanceof mn.crypto.ECDSA && t.isPublic) {
                        var i;
                        if ("P-256" !== (i = t.getShortNISTPCurveName()) && "P-384" !== i)
                            throw "unsupported curve name for JWT: " + i;
                        n = t.getPublicKeyXYHex();
                        return e.kty = "EC",
                        e.crv = i,
                        e.x = Dn(n.x),
                        e.y = Dn(n.y),
                        e
                    }
                    throw "not supported key object"
                }
                ,
                Te.getPosArrayOfChildrenFromHex = function(t) {
                    return xn.getChildIdx(t, 0)
                }
                ,
                Te.getHexValueArrayOfChildrenFromHex = function(t) {
                    var e, n = xn.getV, i = n(t, (e = Te.getPosArrayOfChildrenFromHex(t))[0]), r = n(t, e[1]), s = n(t, e[2]), a = n(t, e[3]), o = n(t, e[4]), h = n(t, e[5]), u = n(t, e[6]), c = n(t, e[7]), f = n(t, e[8]);
                    return (e = new Array).push(i, r, s, a, o, h, u, c, f),
                    e
                }
                ,
                Te.prototype.readPrivateKeyFromPEMString = function(t) {
                    var e = Vn(t)
                      , n = Te.getHexValueArrayOfChildrenFromHex(e);
                    this.setPrivateEx(n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8])
                }
                ,
                Te.prototype.readPKCS5PrvKeyHex = function(t) {
                    var e = Te.getHexValueArrayOfChildrenFromHex(t);
                    this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8])
                }
                ,
                Te.prototype.readPKCS8PrvKeyHex = function(t) {
                    var e, n, i, r, s, a, o, h, u = xn, c = u.getVbyListEx;
                    if (!1 === u.isASN1HEX(t))
                        throw new Error("not ASN.1 hex string");
                    try {
                        e = c(t, 0, [2, 0, 1], "02"),
                        n = c(t, 0, [2, 0, 2], "02"),
                        i = c(t, 0, [2, 0, 3], "02"),
                        r = c(t, 0, [2, 0, 4], "02"),
                        s = c(t, 0, [2, 0, 5], "02"),
                        a = c(t, 0, [2, 0, 6], "02"),
                        o = c(t, 0, [2, 0, 7], "02"),
                        h = c(t, 0, [2, 0, 8], "02")
                    } catch (f) {
                        throw new Error("malformed PKCS#8 plain RSA private key")
                    }
                    this.setPrivateEx(e, n, i, r, s, a, o, h)
                }
                ,
                Te.prototype.readPKCS5PubKeyHex = function(t) {
                    var e = xn
                      , n = e.getV;
                    if (!1 === e.isASN1HEX(t))
                        throw "keyHex is not ASN.1 hex string";
                    var i = e.getChildIdx(t, 0);
                    if (2 !== i.length || "02" !== t.substr(i[0], 2) || "02" !== t.substr(i[1], 2))
                        throw "wrong hex for PKCS#5 public key";
                    var r = n(t, i[0])
                      , s = n(t, i[1]);
                    this.setPublic(r, s)
                }
                ,
                Te.prototype.readPKCS8PubKeyHex = function(t) {
                    var e = xn;
                    if (!1 === e.isASN1HEX(t))
                        throw new Error("not ASN.1 hex string");
                    if ("06092a864886f70d010101" !== e.getTLVbyListEx(t, 0, [0, 0]))
                        throw new Error("not PKCS8 RSA public key");
                    var n = e.getTLVbyListEx(t, 0, [1, 0]);
                    this.readPKCS5PubKeyHex(n)
                }
                ,
                Te.prototype.readCertPubKeyHex = function(t, e) {
                    var n, i;
                    (n = new Qn).readCertHex(t),
                    i = n.getPublicKeyHex(),
                    this.readPKCS8PubKeyHex(i)
                }
                ;
                var Jn = new RegExp("[^0-9a-f]","gi");
                function Xn(t, e) {
                    for (var n = "", i = e / 4 - t.length, r = 0; r < i; r++)
                        n += "0";
                    return n + t
                }
                function $n(t, e, n) {
                    for (var i = "", r = 0; i.length < e; )
                        i += Bn(n(Hn(t + String.fromCharCode.apply(String, [(4278190080 & r) >> 24, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r])))),
                        r += 1;
                    return i
                }
                function Zn(t) {
                    for (var e in mn.crypto.Util.DIGESTINFOHEAD) {
                        var n = mn.crypto.Util.DIGESTINFOHEAD[e]
                          , i = n.length;
                        if (t.substring(0, i) == n)
                            return [e, t.substring(i)]
                    }
                    return []
                }
                function Qn() {
                    var t, e = xn, n = e.getChildIdx, i = e.getV, r = e.getTLV, s = e.getVbyList, a = e.getVbyListEx, o = e.getTLVbyList, h = e.getTLVbyListEx, u = e.getIdxbyList, c = e.getVidx, f = e.oidname, l = Qn, d = Vn;
                    try {
                        t = mn.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV
                    } catch (g) {}
                    this.hex = null,
                    this.version = 0,
                    this.foffset = 0,
                    this.aExtInfo = null,
                    this.getVersion = function() {
                        return null === this.hex || 0 !== this.version ? this.version : "a003020102" !== o(this.hex, 0, [0, 0]) ? (this.version = 1,
                        this.foffset = -1,
                        1) : (this.version = 3,
                        3)
                    }
                    ,
                    this.getSerialNumberHex = function() {
                        return s(this.hex, 0, [0, 1 + this.foffset], "02")
                    }
                    ,
                    this.getSignatureAlgorithmField = function() {
                        var e = h(this.hex, 0, [0, 1]);
                        for (var n in t)
                            if (e === t[n])
                                return n;
                        return f(a(this.hex, 0, [0, 1, 0], "06"))
                    }
                    ,
                    this.getIssuerHex = function() {
                        return o(this.hex, 0, [0, 3 + this.foffset], "30")
                    }
                    ,
                    this.getIssuerString = function() {
                        return l.hex2dn(this.getIssuerHex())
                    }
                    ,
                    this.getSubjectHex = function() {
                        return o(this.hex, 0, [0, 5 + this.foffset], "30")
                    }
                    ,
                    this.getSubjectString = function() {
                        return l.hex2dn(this.getSubjectHex())
                    }
                    ,
                    this.getNotBefore = function() {
                        var t = s(this.hex, 0, [0, 4 + this.foffset, 0]);
                        return t = t.replace(/(..)/g, "%$1"),
                        t = decodeURIComponent(t)
                    }
                    ,
                    this.getNotAfter = function() {
                        var t = s(this.hex, 0, [0, 4 + this.foffset, 1]);
                        return t = t.replace(/(..)/g, "%$1"),
                        t = decodeURIComponent(t)
                    }
                    ,
                    this.getPublicKeyHex = function() {
                        return e.getTLVbyList(this.hex, 0, [0, 6 + this.foffset], "30")
                    }
                    ,
                    this.getPublicKeyIdx = function() {
                        return u(this.hex, 0, [0, 6 + this.foffset], "30")
                    }
                    ,
                    this.getPublicKeyContentIdx = function() {
                        var t = this.getPublicKeyIdx();
                        return u(this.hex, t, [1, 0], "30")
                    }
                    ,
                    this.getPublicKey = function() {
                        return Wn.getKey(this.getPublicKeyHex(), null, "pkcs8pub")
                    }
                    ,
                    this.getSignatureAlgorithmName = function() {
                        return f(s(this.hex, 0, [1, 0], "06"))
                    }
                    ,
                    this.getSignatureValueHex = function() {
                        return s(this.hex, 0, [2], "03", !0)
                    }
                    ,
                    this.verifySignature = function(t) {
                        var e = this.getSignatureAlgorithmField()
                          , n = this.getSignatureValueHex()
                          , i = o(this.hex, 0, [0], "30")
                          , r = new mn.crypto.Signature({
                            alg: e
                        });
                        return r.init(t),
                        r.updateHex(i),
                        r.verify(n)
                    }
                    ,
                    this.parseExt = function(t) {
                        var r, a, o;
                        if (t === undefined) {
                            if (o = this.hex,
                            3 !== this.version)
                                return -1;
                            r = u(o, 0, [0, 7, 0], "30"),
                            a = n(o, r)
                        } else {
                            o = Vn(t);
                            var h = u(o, 0, [0, 3, 0, 0], "06");
                            if ("2a864886f70d01090e" != i(o, h))
                                return void (this.aExtInfo = new Array);
                            r = u(o, 0, [0, 3, 0, 1, 0], "30"),
                            a = n(o, r),
                            this.hex = o
                        }
                        this.aExtInfo = new Array;
                        for (var f = 0; f < a.length; f++) {
                            var l = {
                                critical: !1
                            }
                              , d = 0;
                            3 === n(o, a[f]).length && (l.critical = !0,
                            d = 1),
                            l.oid = e.hextooidstr(s(o, a[f], [0], "06"));
                            var g = u(o, a[f], [1 + d]);
                            l.vidx = c(o, g),
                            this.aExtInfo.push(l)
                        }
                    }
                    ,
                    this.getExtInfo = function(t) {
                        var e = this.aExtInfo
                          , n = t;
                        if (t.match(/^[0-9.]+$/) || (n = mn.asn1.x509.OID.name2oid(t)),
                        "" === n)
                            return undefined;
                        for (var i = 0; i < e.length; i++)
                            if (e[i].oid === n)
                                return e[i];
                        return undefined
                    }
                    ,
                    this.getExtBasicConstraints = function() {
                        var t = this.getExtInfo("basicConstraints");
                        if (t === undefined)
                            return t;
                        var e = i(this.hex, t.vidx);
                        if ("" === e)
                            return {};
                        if ("0101ff" === e)
                            return {
                                cA: !0
                            };
                        if ("0101ff02" === e.substr(0, 8)) {
                            var n = i(e, 6);
                            return {
                                cA: !0,
                                pathLen: parseInt(n, 16)
                            }
                        }
                        throw "basicConstraints parse error"
                    }
                    ,
                    this.getExtKeyUsageBin = function() {
                        var t = this.getExtInfo("keyUsage");
                        if (t === undefined)
                            return "";
                        var e = i(this.hex, t.vidx);
                        if (e.length % 2 != 0 || e.length <= 2)
                            throw new Error("malformed key usage value");
                        var n = parseInt(e.substr(0, 2))
                          , r = parseInt(e.substr(2), 16).toString(2);
                        return (r = ("0000000" + r).slice(-8)).substr(0, r.length - n)
                    }
                    ,
                    this.getExtKeyUsageString = function() {
                        for (var t = this.getExtKeyUsageBin(), e = new Array, n = 0; n < t.length; n++)
                            "1" == t.substr(n, 1) && e.push(Qn.KEYUSAGE_NAME[n]);
                        return e.join(",")
                    }
                    ,
                    this.getExtSubjectKeyIdentifier = function() {
                        var t = this.getExtInfo("subjectKeyIdentifier");
                        return t === undefined ? t : i(this.hex, t.vidx)
                    }
                    ,
                    this.getExtAuthorityKeyIdentifier = function() {
                        var t = this.getExtInfo("authorityKeyIdentifier");
                        if (t === undefined)
                            return t;
                        for (var e = {}, s = r(this.hex, t.vidx), a = n(s, 0), o = 0; o < a.length; o++)
                            "80" === s.substr(a[o], 2) && (e.kid = i(s, a[o]));
                        return e
                    }
                    ,
                    this.getExtExtKeyUsageName = function() {
                        var t = this.getExtInfo("extKeyUsage");
                        if (t === undefined)
                            return t;
                        var e = new Array
                          , s = r(this.hex, t.vidx);
                        if ("" === s)
                            return e;
                        for (var a = n(s, 0), o = 0; o < a.length; o++)
                            e.push(f(i(s, a[o])));
                        return e
                    }
                    ,
                    this.getExtSubjectAltName = function() {
                        for (var t = this.getExtSubjectAltName2(), e = new Array, n = 0; n < t.length; n++)
                            "DNS" === t[n][0] && e.push(t[n][1]);
                        return e
                    }
                    ,
                    this.getExtSubjectAltName2 = function() {
                        var t, e, s, a = this.getExtInfo("subjectAltName");
                        if (a === undefined)
                            return a;
                        for (var o = new Array, h = r(this.hex, a.vidx), u = n(h, 0), c = 0; c < u.length; c++)
                            s = h.substr(u[c], 2),
                            t = i(h, u[c]),
                            "81" === s && (e = Pn(t),
                            o.push(["MAIL", e])),
                            "82" === s && (e = Pn(t),
                            o.push(["DNS", e])),
                            "84" === s && (e = Qn.hex2dn(t, 0),
                            o.push(["DN", e])),
                            "86" === s && (e = Pn(t),
                            o.push(["URI", e])),
                            "87" === s && (e = qn(t),
                            o.push(["IP", e]));
                        return o
                    }
                    ,
                    this.getExtCRLDistributionPointsURI = function() {
                        var t = this.getExtInfo("cRLDistributionPoints");
                        if (t === undefined)
                            return t;
                        for (var e = new Array, i = n(this.hex, t.vidx), r = 0; r < i.length; r++)
                            try {
                                var a = Pn(s(this.hex, i[r], [0, 0, 0], "86"));
                                e.push(a)
                            } catch (o) {}
                        return e
                    }
                    ,
                    this.getExtAIAInfo = function() {
                        var t = this.getExtInfo("authorityInfoAccess");
                        if (t === undefined)
                            return t;
                        for (var e = {
                            ocsp: [],
                            caissuer: []
                        }, i = n(this.hex, t.vidx), r = 0; r < i.length; r++) {
                            var a = s(this.hex, i[r], [0], "06")
                              , o = s(this.hex, i[r], [1], "86");
                            "2b06010505073001" === a && e.ocsp.push(Pn(o)),
                            "2b06010505073002" === a && e.caissuer.push(Pn(o))
                        }
                        return e
                    }
                    ,
                    this.getExtCertificatePolicies = function() {
                        var t = this.getExtInfo("certificatePolicies");
                        if (t === undefined)
                            return t;
                        for (var e = r(this.hex, t.vidx), a = [], o = n(e, 0), h = 0; h < o.length; h++) {
                            var u = {}
                              , c = n(e, o[h]);
                            if (u.id = f(i(e, c[0])),
                            2 === c.length)
                                for (var l = n(e, c[1]), d = 0; d < l.length; d++) {
                                    var g = s(e, l[d], [0], "06");
                                    "2b06010505070201" === g ? u.cps = Pn(s(e, l[d], [1])) : "2b06010505070202" === g && (u.unotice = Pn(s(e, l[d], [1, 0])))
                                }
                            a.push(u)
                        }
                        return a
                    }
                    ,
                    this.readCertPEM = function(t) {
                        this.readCertHex(d(t))
                    }
                    ,
                    this.readCertHex = function(t) {
                        this.hex = t,
                        this.getVersion();
                        try {
                            u(this.hex, 0, [0, 7], "a3"),
                            this.parseExt()
                        } catch (e) {}
                    }
                    ,
                    this.getInfo = function() {
                        var t, e, n;
                        if (t = "Basic Fields\n",
                        t += "  serial number: " + this.getSerialNumberHex() + "\n",
                        t += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n",
                        t += "  issuer: " + this.getIssuerString() + "\n",
                        t += "  notBefore: " + this.getNotBefore() + "\n",
                        t += "  notAfter: " + this.getNotAfter() + "\n",
                        t += "  subject: " + this.getSubjectString() + "\n",
                        t += "  subject public key info: \n",
                        t += "    key algorithm: " + (e = this.getPublicKey()).type + "\n",
                        "RSA" === e.type && (t += "    n=" + Yn(e.n.toString(16)).substr(0, 16) + "...\n",
                        t += "    e=" + Yn(e.e.toString(16)) + "\n"),
                        (n = this.aExtInfo) !== undefined && null !== n) {
                            t += "X509v3 Extensions:\n";
                            for (var i = 0; i < n.length; i++) {
                                var r = n[i]
                                  , s = mn.asn1.x509.OID.oid2name(r.oid);
                                "" === s && (s = r.oid);
                                var a = "";
                                if (!0 === r.critical && (a = "CRITICAL"),
                                t += "  " + s + " " + a + ":\n",
                                "basicConstraints" === s) {
                                    var o = this.getExtBasicConstraints();
                                    o.cA === undefined ? t += "    {}\n" : (t += "    cA=true",
                                    o.pathLen !== undefined && (t += ", pathLen=" + o.pathLen),
                                    t += "\n")
                                } else if ("keyUsage" === s)
                                    t += "    " + this.getExtKeyUsageString() + "\n";
                                else if ("subjectKeyIdentifier" === s)
                                    t += "    " + this.getExtSubjectKeyIdentifier() + "\n";
                                else if ("authorityKeyIdentifier" === s) {
                                    var h = this.getExtAuthorityKeyIdentifier();
                                    h.kid !== undefined && (t += "    kid=" + h.kid + "\n")
                                } else {
                                    if ("extKeyUsage" === s)
                                        t += "    " + this.getExtExtKeyUsageName().join(", ") + "\n";
                                    else if ("subjectAltName" === s)
                                        t += "    " + this.getExtSubjectAltName2() + "\n";
                                    else if ("cRLDistributionPoints" === s)
                                        t += "    " + this.getExtCRLDistributionPointsURI() + "\n";
                                    else if ("authorityInfoAccess" === s) {
                                        var u = this.getExtAIAInfo();
                                        u.ocsp !== undefined && (t += "    ocsp: " + u.ocsp.join(",") + "\n"),
                                        u.caissuer !== undefined && (t += "    caissuer: " + u.caissuer.join(",") + "\n")
                                    } else if ("certificatePolicies" === s)
                                        for (var c = this.getExtCertificatePolicies(), f = 0; f < c.length; f++)
                                            c[f].id !== undefined && (t += "    policy oid: " + c[f].id + "\n"),
                                            c[f].cps !== undefined && (t += "    cps: " + c[f].cps + "\n")
                                }
                            }
                        }
                        return t += "signature algorithm: " + this.getSignatureAlgorithmName() + "\n",
                        t += "signature: " + this.getSignatureValueHex().substr(0, 16) + "...\n"
                    }
                }
                Te.prototype.sign = function(t, e) {
                    var n = function(t) {
                        return mn.crypto.Util.hashString(t, e)
                    }(t);
                    return this.signWithMessageHash(n, e)
                }
                ,
                Te.prototype.signWithMessageHash = function(t, e) {
                    var n = De(mn.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength()), 16);
                    return Xn(this.doPrivate(n).toString(16), this.n.bitLength())
                }
                ,
                Te.prototype.signPSS = function(t, e, n) {
                    var i = function(t) {
                        return mn.crypto.Util.hashHex(t, e)
                    }(Hn(t));
                    return n === undefined && (n = -1),
                    this.signWithMessageHashPSS(i, e, n)
                }
                ,
                Te.prototype.signWithMessageHashPSS = function(t, e, n) {
                    var i, r = Bn(t), s = r.length, a = this.n.bitLength() - 1, o = Math.ceil(a / 8), h = function(t) {
                        return mn.crypto.Util.hashHex(t, e)
                    };
                    if (-1 === n || n === undefined)
                        n = s;
                    else if (-2 === n)
                        n = o - s - 2;
                    else if (n < -2)
                        throw "invalid salt length";
                    if (o < s + n + 2)
                        throw "data too long";
                    var u = "";
                    n > 0 && (u = new Array(n),
                    (new Ce).nextBytes(u),
                    u = String.fromCharCode.apply(String, u));
                    var c = Bn(h(Hn("\0\0\0\0\0\0\0\0" + r + u)))
                      , l = [];
                    for (i = 0; i < o - n - s - 2; i += 1)
                        l[i] = 0;
                    var d = String.fromCharCode.apply(String, l) + "" + u
                      , g = $n(c, d.length, h)
                      , p = [];
                    for (i = 0; i < d.length; i += 1)
                        p[i] = d.charCodeAt(i) ^ g.charCodeAt(i);
                    var y = 65280 >> 8 * o - a & 255;
                    for (p[0] &= ~y,
                    i = 0; i < s; i++)
                        p.push(c.charCodeAt(i));
                    return p.push(188),
                    Xn(this.doPrivate(new f(p)).toString(16), this.n.bitLength())
                }
                ,
                Te.prototype.verify = function(t, e) {
                    var n = De(e = (e = e.replace(Jn, "")).replace(/[ \n]+/g, ""), 16);
                    if (n.bitLength() > this.n.bitLength())
                        return 0;
                    var i = Zn(this.doPublic(n).toString(16).replace(/^1f+00/, ""));
                    if (0 == i.length)
                        return !1;
                    var r = i[0];
                    return i[1] == function(t) {
                        return mn.crypto.Util.hashString(t, r)
                    }(t)
                }
                ,
                Te.prototype.verifyWithMessageHash = function(t, e) {
                    if (e.length != Math.ceil(this.n.bitLength() / 4))
                        return !1;
                    var n = De(e, 16);
                    if (n.bitLength() > this.n.bitLength())
                        return 0;
                    var i = Zn(this.doPublic(n).toString(16).replace(/^1f+00/, ""));
                    if (0 == i.length)
                        return !1;
                    i[0];
                    return i[1] == t
                }
                ,
                Te.prototype.verifyPSS = function(t, e, n, i) {
                    var r = function(t) {
                        return mn.crypto.Util.hashHex(t, n)
                    }(Hn(t));
                    return i === undefined && (i = -1),
                    this.verifyWithMessageHashPSS(r, e, n, i)
                }
                ,
                Te.prototype.verifyWithMessageHashPSS = function(t, e, n, i) {
                    if (e.length != Math.ceil(this.n.bitLength() / 4))
                        return !1;
                    var r, s = new f(e,16), a = function(t) {
                        return mn.crypto.Util.hashHex(t, n)
                    }, o = Bn(t), h = o.length, u = this.n.bitLength() - 1, c = Math.ceil(u / 8);
                    if (-1 === i || i === undefined)
                        i = h;
                    else if (-2 === i)
                        i = c - h - 2;
                    else if (i < -2)
                        throw "invalid salt length";
                    if (c < h + i + 2)
                        throw "data too long";
                    var l = this.doPublic(s).toByteArray();
                    for (r = 0; r < l.length; r += 1)
                        l[r] &= 255;
                    for (; l.length < c; )
                        l.unshift(0);
                    if (188 !== l[c - 1])
                        throw "encoded message does not end in 0xbc";
                    var d = (l = String.fromCharCode.apply(String, l)).substr(0, c - h - 1)
                      , g = l.substr(d.length, h)
                      , p = 65280 >> 8 * c - u & 255;
                    if (0 != (d.charCodeAt(0) & p))
                        throw "bits beyond keysize not zero";
                    var y = $n(g, d.length, a)
                      , m = [];
                    for (r = 0; r < d.length; r += 1)
                        m[r] = d.charCodeAt(r) ^ y.charCodeAt(r);
                    m[0] &= ~p;
                    var v = c - h - i - 2;
                    for (r = 0; r < v; r += 1)
                        if (0 !== m[r])
                            throw "leftmost octets not zero";
                    if (1 !== m[v])
                        throw "0x01 marker not found";
                    return g === Bn(a(Hn("\0\0\0\0\0\0\0\0" + o + String.fromCharCode.apply(String, m.slice(-i)))))
                }
                ,
                Te.SALT_LEN_HLEN = -1,
                Te.SALT_LEN_MAX = -2,
                Te.SALT_LEN_RECOVER = -2,
                Qn.hex2dn = function(t, e) {
                    if (e === undefined && (e = 0),
                    "30" !== t.substr(e, 2))
                        throw "malformed DN";
                    for (var n = new Array, i = xn.getChildIdx(t, e), r = 0; r < i.length; r++)
                        n.push(Qn.hex2rdn(t, i[r]));
                    return "/" + (n = n.map((function(t) {
                        return t.replace("/", "\\/")
                    }
                    ))).join("/")
                }
                ,
                Qn.hex2rdn = function(t, e) {
                    if (e === undefined && (e = 0),
                    "31" !== t.substr(e, 2))
                        throw "malformed RDN";
                    for (var n = new Array, i = xn.getChildIdx(t, e), r = 0; r < i.length; r++)
                        n.push(Qn.hex2attrTypeValue(t, i[r]));
                    return (n = n.map((function(t) {
                        return t.replace("+", "\\+")
                    }
                    ))).join("+")
                }
                ,
                Qn.hex2attrTypeValue = function(t, e) {
                    var n = xn
                      , i = n.getV;
                    if (e === undefined && (e = 0),
                    "30" !== t.substr(e, 2))
                        throw "malformed attribute type and value";
                    var r = n.getChildIdx(t, e);
                    2 !== r.length || t.substr(r[0], 2);
                    var s = i(t, r[0])
                      , a = mn.asn1.ASN1Util.oidHexToInt(s);
                    return mn.asn1.x509.OID.oid2atype(a) + "=" + Bn(i(t, r[1]))
                }
                ,
                Qn.getPublicKeyFromCertHex = function(t) {
                    var e = new Qn;
                    return e.readCertHex(t),
                    e.getPublicKey()
                }
                ,
                Qn.getPublicKeyFromCertPEM = function(t) {
                    var e = new Qn;
                    return e.readCertPEM(t),
                    e.getPublicKey()
                }
                ,
                Qn.getPublicKeyInfoPropOfCertPEM = function(t) {
                    var e, n, i = xn.getVbyList, r = {};
                    return r.algparam = null,
                    (e = new Qn).readCertPEM(t),
                    n = e.getPublicKeyHex(),
                    r.keyhex = i(n, 0, [1], "03").substr(2),
                    r.algoid = i(n, 0, [0, 0], "06"),
                    "2a8648ce3d0201" === r.algoid && (r.algparam = i(n, 0, [0, 1], "06")),
                    r
                }
                ,
                Qn.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"],
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.jws && mn.jws || (mn.jws = {}),
                mn.jws.JWS = function() {
                    var t = mn.jws.JWS.isSafeJSONString;
                    this.parseJWS = function(e, n) {
                        if (this.parsedJWS === undefined || !n && this.parsedJWS.sigvalH === undefined) {
                            var i = e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
                            if (null == i)
                                throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                            var r = i[1]
                              , s = i[2]
                              , a = i[3]
                              , o = r + "." + s;
                            if (this.parsedJWS = {},
                            this.parsedJWS.headB64U = r,
                            this.parsedJWS.payloadB64U = s,
                            this.parsedJWS.sigvalB64U = a,
                            this.parsedJWS.si = o,
                            !n) {
                                var h = In(a)
                                  , u = De(h, 16);
                                this.parsedJWS.sigvalH = h,
                                this.parsedJWS.sigvalBI = u
                            }
                            var c = Sn(r)
                              , f = Sn(s);
                            if (this.parsedJWS.headS = c,
                            this.parsedJWS.payloadS = f,
                            !t(c, this.parsedJWS, "headP"))
                                throw "malformed JSON string for JWS Head: " + c
                        }
                    }
                }
                ,
                mn.jws.JWS.sign = function(t, e, n, i, r) {
                    var s, a, o, h = mn, u = h.jws.JWS, c = u.readSafeJSONString, f = u.isSafeJSONString, l = h.crypto, d = (l.ECDSA,
                    l.Mac), g = l.Signature, p = JSON;
                    if ("string" != typeof e && "object" != typeof e)
                        throw "spHeader must be JSON string or object: " + e;
                    if ("object" == typeof e && (a = e,
                    s = p.stringify(a)),
                    "string" == typeof e) {
                        if (!f(s = e))
                            throw "JWS Head is not safe JSON string: " + s;
                        a = c(s)
                    }
                    if (o = n,
                    "object" == typeof n && (o = p.stringify(n)),
                    "" != t && null != t || a.alg === undefined || (t = a.alg),
                    "" != t && null != t && a.alg === undefined && (a.alg = t,
                    s = p.stringify(a)),
                    t !== a.alg)
                        throw "alg and sHeader.alg doesn't match: " + t + "!=" + a.alg;
                    var y = null;
                    if (u.jwsalg2sigalg[t] === undefined)
                        throw "unsupported alg name: " + t;
                    y = u.jwsalg2sigalg[t];
                    var m = vn(s) + "." + vn(o)
                      , v = "";
                    if ("Hmac" == y.substr(0, 4)) {
                        if (i === undefined)
                            throw "mac key shall be specified for HS* alg";
                        var S = new d({
                            alg: y,
                            prov: "cryptojs",
                            pass: i
                        });
                        S.updateString(m),
                        v = S.doFinal()
                    } else if (-1 != y.indexOf("withECDSA")) {
                        (F = new g({
                            alg: y
                        })).init(i, r),
                        F.updateString(m);
                        var x = F.sign();
                        v = mn.crypto.ECDSA.asn1SigToConcatSig(x)
                    } else {
                        var F;
                        if ("none" != y)
                            (F = new g({
                                alg: y
                            })).init(i, r),
                            F.updateString(m),
                            v = F.sign()
                    }
                    return m + "." + Dn(v)
                }
                ,
                mn.jws.JWS.verify = function(t, e, n) {
                    var i, r = mn, s = r.jws.JWS, a = s.readSafeJSONString, o = r.crypto, h = o.ECDSA, u = o.Mac, c = o.Signature;
                    "function" !== undefined && (i = Te);
                    var f = t.split(".");
                    if (3 !== f.length)
                        return !1;
                    var l = f[0] + "." + f[1]
                      , d = In(f[2])
                      , g = a(Sn(f[0]))
                      , p = null
                      , y = null;
                    if (g.alg === undefined)
                        throw "algorithm not specified in header";
                    if ((y = (p = g.alg).substr(0, 2),
                    null != n && "[object Array]" === Object.prototype.toString.call(n) && n.length > 0) && -1 == (":" + n.join(":") + ":").indexOf(":" + p + ":"))
                        throw "algorithm '" + p + "' not accepted in the list";
                    if ("none" != p && null === e)
                        throw "key shall be specified to verify.";
                    if ("string" == typeof e && -1 != e.indexOf("-----BEGIN ") && (e = Wn.getKey(e)),
                    !("RS" != y && "PS" != y || e instanceof i))
                        throw "key shall be a RSAKey obj for RS* and PS* algs";
                    if ("ES" == y && !(e instanceof h))
                        throw "key shall be a ECDSA obj for ES* algs";
                    var m = null;
                    if (s.jwsalg2sigalg[g.alg] === undefined)
                        throw "unsupported alg name: " + p;
                    if ("none" == (m = s.jwsalg2sigalg[p]))
                        throw "not supported";
                    if ("Hmac" == m.substr(0, 4)) {
                        if (e === undefined)
                            throw "hexadecimal key shall be specified for HMAC";
                        var v = new u({
                            alg: m,
                            pass: e
                        });
                        return v.updateString(l),
                        d == v.doFinal()
                    }
                    if (-1 != m.indexOf("withECDSA")) {
                        var S, x = null;
                        try {
                            x = h.concatSigToASN1Sig(d)
                        } catch (F) {
                            return !1
                        }
                        return (S = new c({
                            alg: m
                        })).init(e),
                        S.updateString(l),
                        S.verify(x)
                    }
                    return (S = new c({
                        alg: m
                    })).init(e),
                    S.updateString(l),
                    S.verify(d)
                }
                ,
                mn.jws.JWS.parse = function(t) {
                    var e, n, i, r = t.split("."), s = {};
                    if (2 != r.length && 3 != r.length)
                        throw "malformed sJWS: wrong number of '.' splitted elements";
                    return e = r[0],
                    n = r[1],
                    3 == r.length && (i = r[2]),
                    s.headerObj = mn.jws.JWS.readSafeJSONString(Sn(e)),
                    s.payloadObj = mn.jws.JWS.readSafeJSONString(Sn(n)),
                    s.headerPP = JSON.stringify(s.headerObj, null, "  "),
                    null == s.payloadObj ? s.payloadPP = Sn(n) : s.payloadPP = JSON.stringify(s.payloadObj, null, "  "),
                    i !== undefined && (s.sigHex = In(i)),
                    s
                }
                ,
                mn.jws.JWS.verifyJWT = function(t, e, n) {
                    var i = mn.jws
                      , r = i.JWS
                      , s = r.readSafeJSONString
                      , a = r.inArray
                      , o = r.includedArray
                      , h = t.split(".")
                      , u = h[0]
                      , c = h[1]
                      , f = (In(h[2]),
                    s(Sn(u)))
                      , l = s(Sn(c));
                    if (f.alg === undefined)
                        return !1;
                    if (n.alg === undefined)
                        throw "acceptField.alg shall be specified";
                    if (!a(f.alg, n.alg))
                        return !1;
                    if (l.iss !== undefined && "object" == typeof n.iss && !a(l.iss, n.iss))
                        return !1;
                    if (l.sub !== undefined && "object" == typeof n.sub && !a(l.sub, n.sub))
                        return !1;
                    if (l.aud !== undefined && "object" == typeof n.aud)
                        if ("string" == typeof l.aud) {
                            if (!a(l.aud, n.aud))
                                return !1
                        } else if ("object" == typeof l.aud && !o(l.aud, n.aud))
                            return !1;
                    var d = i.IntDate.getNow();
                    return n.verifyAt !== undefined && "number" == typeof n.verifyAt && (d = n.verifyAt),
                    n.gracePeriod !== undefined && "number" == typeof n.gracePeriod || (n.gracePeriod = 0),
                    !(l.exp !== undefined && "number" == typeof l.exp && l.exp + n.gracePeriod < d) && (!(l.nbf !== undefined && "number" == typeof l.nbf && d < l.nbf - n.gracePeriod) && (!(l.iat !== undefined && "number" == typeof l.iat && d < l.iat - n.gracePeriod) && ((l.jti === undefined || n.jti === undefined || l.jti === n.jti) && !!r.verify(t, e, n.alg))))
                }
                ,
                mn.jws.JWS.includedArray = function(t, e) {
                    var n = mn.jws.JWS.inArray;
                    if (null === t)
                        return !1;
                    if ("object" != typeof t)
                        return !1;
                    if ("number" != typeof t.length)
                        return !1;
                    for (var i = 0; i < t.length; i++)
                        if (!n(t[i], e))
                            return !1;
                    return !0
                }
                ,
                mn.jws.JWS.inArray = function(t, e) {
                    if (null === e)
                        return !1;
                    if ("object" != typeof e)
                        return !1;
                    if ("number" != typeof e.length)
                        return !1;
                    for (var n = 0; n < e.length; n++)
                        if (e[n] == t)
                            return !0;
                    return !1
                }
                ,
                mn.jws.JWS.jwsalg2sigalg = {
                    HS256: "HmacSHA256",
                    HS384: "HmacSHA384",
                    HS512: "HmacSHA512",
                    RS256: "SHA256withRSA",
                    RS384: "SHA384withRSA",
                    RS512: "SHA512withRSA",
                    ES256: "SHA256withECDSA",
                    ES384: "SHA384withECDSA",
                    PS256: "SHA256withRSAandMGF1",
                    PS384: "SHA384withRSAandMGF1",
                    PS512: "SHA512withRSAandMGF1",
                    none: "none"
                },
                mn.jws.JWS.isSafeJSONString = function(t, e, n) {
                    var i = null;
                    try {
                        return "object" != typeof (i = yn(t)) || i.constructor === Array ? 0 : (e && (e[n] = i),
                        1)
                    } catch (r) {
                        return 0
                    }
                }
                ,
                mn.jws.JWS.readSafeJSONString = function(t) {
                    var e = null;
                    try {
                        return "object" != typeof (e = yn(t)) || e.constructor === Array ? null : e
                    } catch (n) {
                        return null
                    }
                }
                ,
                mn.jws.JWS.getEncodedSignatureValueFromJWS = function(t) {
                    var e = t.match(/^[^.]+\.[^.]+\.([^.]+)$/);
                    if (null == e)
                        throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                    return e[1]
                }
                ,
                mn.jws.JWS.getJWKthumbprint = function(t) {
                    if ("RSA" !== t.kty && "EC" !== t.kty && "oct" !== t.kty)
                        throw "unsupported algorithm for JWK Thumprint";
                    var e = "{";
                    if ("RSA" === t.kty) {
                        if ("string" != typeof t.n || "string" != typeof t.e)
                            throw "wrong n and e value for RSA key";
                        e += '"e":"' + t.e + '",',
                        e += '"kty":"' + t.kty + '",',
                        e += '"n":"' + t.n + '"}'
                    } else if ("EC" === t.kty) {
                        if ("string" != typeof t.crv || "string" != typeof t.x || "string" != typeof t.y)
                            throw "wrong crv, x and y value for EC key";
                        e += '"crv":"' + t.crv + '",',
                        e += '"kty":"' + t.kty + '",',
                        e += '"x":"' + t.x + '",',
                        e += '"y":"' + t.y + '"}'
                    } else if ("oct" === t.kty) {
                        if ("string" != typeof t.k)
                            throw "wrong k value for oct(symmetric) key";
                        e += '"kty":"' + t.kty + '",',
                        e += '"k":"' + t.k + '"}'
                    }
                    var n = Hn(e);
                    return Dn(mn.crypto.Util.hashHex(n, "sha256"))
                }
                ,
                mn.jws.IntDate = {},
                mn.jws.IntDate.get = function(t) {
                    var e = mn.jws.IntDate
                      , n = e.getNow
                      , i = e.getZulu;
                    if ("now" == t)
                        return n();
                    if ("now + 1hour" == t)
                        return n() + 3600;
                    if ("now + 1day" == t)
                        return n() + 86400;
                    if ("now + 1month" == t)
                        return n() + 2592e3;
                    if ("now + 1year" == t)
                        return n() + 31536e3;
                    if (t.match(/Z$/))
                        return i(t);
                    if (t.match(/^[0-9]+$/))
                        return parseInt(t);
                    throw "unsupported format: " + t
                }
                ,
                mn.jws.IntDate.getZulu = function(t) {
                    return Kn(t)
                }
                ,
                mn.jws.IntDate.getNow = function() {
                    return ~~(new Date / 1e3)
                }
                ,
                mn.jws.IntDate.intDate2UTCString = function(t) {
                    return new Date(1e3 * t).toUTCString()
                }
                ,
                mn.jws.IntDate.intDate2Zulu = function(t) {
                    var e = new Date(1e3 * t);
                    return ("0000" + e.getUTCFullYear()).slice(-4) + ("00" + (e.getUTCMonth() + 1)).slice(-2) + ("00" + e.getUTCDate()).slice(-2) + ("00" + e.getUTCHours()).slice(-2) + ("00" + e.getUTCMinutes()).slice(-2) + ("00" + e.getUTCSeconds()).slice(-2) + "Z"
                }
                ,
                void 0 !== mn && mn || (mn = {}),
                "undefined" != typeof mn.jws && mn.jws || (mn.jws = {}),
                mn.jws.JWSJS = function() {
                    var t = mn.jws.JWS
                      , e = t.readSafeJSONString;
                    this.aHeader = [],
                    this.sPayload = "",
                    this.aSignature = [],
                    this.init = function() {
                        this.aHeader = [],
                        this.sPayload = undefined,
                        this.aSignature = []
                    }
                    ,
                    this.initWithJWS = function(t) {
                        this.init();
                        var e = t.split(".");
                        if (3 != e.length)
                            throw "malformed input JWS";
                        this.aHeader.push(e[0]),
                        this.sPayload = e[1],
                        this.aSignature.push(e[2])
                    }
                    ,
                    this.addSignature = function(t, e, n, i) {
                        if (this.sPayload === undefined || null === this.sPayload)
                            throw "there's no JSON-JS signature to add.";
                        var r = this.aHeader.length;
                        if (this.aHeader.length != this.aSignature.length)
                            throw "aHeader.length != aSignature.length";
                        try {
                            var s = mn.jws.JWS.sign(t, e, this.sPayload, n, i).split(".");
                            s[0],
                            s[2];
                            this.aHeader.push(s[0]),
                            this.aSignature.push(s[2])
                        } catch (a) {
                            throw this.aHeader.length > r && this.aHeader.pop(),
                            this.aSignature.length > r && this.aSignature.pop(),
                            "addSignature failed: " + a
                        }
                    }
                    ,
                    this.verifyAll = function(t) {
                        if (this.aHeader.length !== t.length || this.aSignature.length !== t.length)
                            return !1;
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e];
                            if (2 !== n.length)
                                return !1;
                            if (!1 === this.verifyNth(e, n[0], n[1]))
                                return !1
                        }
                        return !0
                    }
                    ,
                    this.verifyNth = function(e, n, i) {
                        if (this.aHeader.length <= e || this.aSignature.length <= e)
                            return !1;
                        var r = this.aHeader[e]
                          , s = this.aSignature[e]
                          , a = r + "." + this.sPayload + "." + s
                          , o = !1;
                        try {
                            o = t.verify(a, n, i)
                        } catch (h) {
                            return !1
                        }
                        return o
                    }
                    ,
                    this.readJWSJS = function(t) {
                        if ("string" == typeof t) {
                            var n = e(t);
                            if (null == n)
                                throw "argument is not safe JSON object string";
                            this.aHeader = n.headers,
                            this.sPayload = n.payload,
                            this.aSignature = n.signatures
                        } else
                            try {
                                if (!(t.headers.length > 0))
                                    throw "malformed header";
                                if (this.aHeader = t.headers,
                                "string" != typeof t.payload)
                                    throw "malformed signatures";
                                if (this.sPayload = t.payload,
                                !(t.signatures.length > 0))
                                    throw "malformed signatures";
                                this.aSignature = t.signatures
                            } catch (i) {
                                throw "malformed JWS-JS JSON object: " + i
                            }
                    }
                    ,
                    this.getJSON = function() {
                        return {
                            headers: this.aHeader,
                            payload: this.sPayload,
                            signatures: this.aSignature
                        }
                    }
                    ,
                    this.isEmpty = function() {
                        return 0 == this.aHeader.length ? 1 : 0
                    }
                }
                ,
                e.SecureRandom = Ce,
                e.rng_seed_time = xe,
                e.BigInteger = f,
                e.RSAKey = Te,
                e.ECDSA = mn.crypto.ECDSA,
                e.DSA = mn.crypto.DSA,
                e.Signature = mn.crypto.Signature,
                e.MessageDigest = mn.crypto.MessageDigest,
                e.Mac = mn.crypto.Mac,
                e.Cipher = mn.crypto.Cipher,
                e.KEYUTIL = Wn,
                e.ASN1HEX = xn,
                e.X509 = Qn,
                e.CryptoJS = s,
                e.b64tohex = u,
                e.b64toBA = c,
                e.ECFieldElementFp = Be,
                e.ECPointFp = He,
                e.ECCurveFp = Re,
                e.stoBA = Fn,
                e.BAtos = En,
                e.BAtohex = wn,
                e.stohex = bn,
                e.stob64 = function ti(t) {
                    return h(bn(t))
                }
                ,
                e.stob64u = function ei(t) {
                    return An(h(bn(t)))
                }
                ,
                e.b64utos = function ni(t) {
                    return En(c(Cn(t)))
                }
                ,
                e.b64tob64u = An,
                e.b64utob64 = Cn,
                e.hex2b64 = h,
                e.hextob64u = Dn,
                e.b64utohex = In,
                e.utf8tob64u = vn,
                e.b64utoutf8 = Sn,
                e.utf8tob64 = function ii(t) {
                    return h(Mn(zn(t)))
                }
                ,
                e.b64toutf8 = function ri(t) {
                    return decodeURIComponent(kn(u(t)))
                }
                ,
                e.utf8tohex = Tn,
                e.hextoutf8 = Pn,
                e.hextorstr = Bn,
                e.rstrtohex = Hn,
                e.hextob64 = Rn,
                e.hextob64nl = Nn,
                e.b64nltohex = jn,
                e.hextopem = On,
                e.pemtohex = Vn,
                e.hextoArrayBuffer = function si(t) {
                    if (t.length % 2 != 0)
                        throw "input is not even length";
                    if (null == t.match(/^[0-9A-Fa-f]+$/))
                        throw "input is not hexadecimal";
                    for (var e = new ArrayBuffer(t.length / 2), n = new DataView(e), i = 0; i < t.length / 2; i++)
                        n.setUint8(i, parseInt(t.substr(2 * i, 2), 16));
                    return e
                }
                ,
                e.ArrayBuffertohex = function ai(t) {
                    for (var e = "", n = new DataView(t), i = 0; i < t.byteLength; i++)
                        e += ("00" + n.getUint8(i).toString(16)).slice(-2);
                    return e
                }
                ,
                e.zulutomsec = Ln,
                e.zulutosec = Kn,
                e.zulutodate = function oi(t) {
                    return new Date(Ln(t))
                }
                ,
                e.datetozulu = function hi(t, e, n) {
                    var i, r = t.getUTCFullYear();
                    if (e) {
                        if (r < 1950 || 2049 < r)
                            throw "not proper year for UTCTime: " + r;
                        i = ("" + r).slice(-2)
                    } else
                        i = ("000" + r).slice(-4);
                    if (i += ("0" + (t.getUTCMonth() + 1)).slice(-2),
                    i += ("0" + t.getUTCDate()).slice(-2),
                    i += ("0" + t.getUTCHours()).slice(-2),
                    i += ("0" + t.getUTCMinutes()).slice(-2),
                    i += ("0" + t.getUTCSeconds()).slice(-2),
                    n) {
                        var s = t.getUTCMilliseconds();
                        0 !== s && (i += "." + (s = (s = ("00" + s).slice(-3)).replace(/0+$/g, "")))
                    }
                    return i += "Z"
                }
                ,
                e.uricmptohex = Mn,
                e.hextouricmp = kn,
                e.ipv6tohex = _n,
                e.hextoipv6 = Un,
                e.hextoip = qn,
                e.iptohex = function ui(t) {
                    var e = "malformed IP address";
                    if (!(t = t.toLowerCase(t)).match(/^[0-9.]+$/)) {
                        if (t.match(/^[0-9a-f:]+$/) && -1 !== t.indexOf(":"))
                            return _n(t);
                        throw e
                    }
                    var n = t.split(".");
                    if (4 !== n.length)
                        throw e;
                    var i = "";
                    try {
                        for (var r = 0; r < 4; r++) {
                            i += ("0" + parseInt(n[r]).toString(16)).slice(-2)
                        }
                        return i
                    } catch (s) {
                        throw e
                    }
                }
                ,
                e.encodeURIComponentAll = zn,
                e.newline_toUnix = function ci(t) {
                    return t = t.replace(/\r\n/gm, "\n")
                }
                ,
                e.newline_toDos = function fi(t) {
                    return t = (t = t.replace(/\r\n/gm, "\n")).replace(/\n/gm, "\r\n")
                }
                ,
                e.hextoposhex = Yn,
                e.intarystrtohex = Gn,
                e.strdiffidx = function(t, e) {
                    var n = t.length;
                    t.length > e.length && (n = e.length);
                    for (var i = 0; i < n; i++)
                        if (t.charCodeAt(i) != e.charCodeAt(i))
                            return i;
                    return t.length != e.length ? n : -1
                }
                ,
                e.KJUR = mn,
                e.crypto = mn.crypto,
                e.asn1 = mn.asn1,
                e.jws = mn.jws,
                e.lang = mn.lang
            }
            ).call(this, n(208).Buffer)
        },
        208: function(t, e, n) {
            "use strict";
            (function(t) {
                var i = n(209)
                  , r = n(210)
                  , s = n(211);
                function a() {
                    return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }
                function o(t, e) {
                    if (a() < e)
                        throw new RangeError("Invalid typed array length");
                    return h.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = h.prototype : (null === t && (t = new h(e)),
                    t.length = e),
                    t
                }
                function h(t, e, n) {
                    if (!(h.TYPED_ARRAY_SUPPORT || this instanceof h))
                        return new h(t,e,n);
                    if ("number" == typeof t) {
                        if ("string" == typeof e)
                            throw new Error("If encoding is specified then the first argument must be a string");
                        return f(this, t)
                    }
                    return u(this, t, e, n)
                }
                function u(t, e, n, i) {
                    if ("number" == typeof e)
                        throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function r(t, e, n, i) {
                        if (e.byteLength,
                        n < 0 || e.byteLength < n)
                            throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < n + (i || 0))
                            throw new RangeError("'length' is out of bounds");
                        e = n === undefined && i === undefined ? new Uint8Array(e) : i === undefined ? new Uint8Array(e,n) : new Uint8Array(e,n,i);
                        h.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = h.prototype : t = l(t, e);
                        return t
                    }(t, e, n, i) : "string" == typeof e ? function a(t, e, n) {
                        "string" == typeof n && "" !== n || (n = "utf8");
                        if (!h.isEncoding(n))
                            throw new TypeError('"encoding" must be a valid string encoding');
                        var i = 0 | g(e, n)
                          , r = (t = o(t, i)).write(e, n);
                        r !== i && (t = t.slice(0, r));
                        return t
                    }(t, e, n) : function u(t, e) {
                        if (h.isBuffer(e)) {
                            var n = 0 | d(e.length);
                            return 0 === (t = o(t, n)).length || e.copy(t, 0, 0, n),
                            t
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
                                return "number" != typeof e.length || function i(t) {
                                    return t != t
                                }(e.length) ? o(t, 0) : l(t, e);
                            if ("Buffer" === e.type && s(e.data))
                                return l(t, e.data)
                        }
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }
                function c(t) {
                    if ("number" != typeof t)
                        throw new TypeError('"size" argument must be a number');
                    if (t < 0)
                        throw new RangeError('"size" argument must not be negative')
                }
                function f(t, e) {
                    if (c(e),
                    t = o(t, e < 0 ? 0 : 0 | d(e)),
                    !h.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < e; ++n)
                            t[n] = 0;
                    return t
                }
                function l(t, e) {
                    var n = e.length < 0 ? 0 : 0 | d(e.length);
                    t = o(t, n);
                    for (var i = 0; i < n; i += 1)
                        t[i] = 255 & e[i];
                    return t
                }
                function d(t) {
                    if (t >= a())
                        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                    return 0 | t
                }
                function g(t, e) {
                    if (h.isBuffer(t))
                        return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                        return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var n = t.length;
                    if (0 === n)
                        return 0;
                    for (var i = !1; ; )
                        switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case undefined:
                            return U(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return q(t).length;
                        default:
                            if (i)
                                return U(t).length;
                            e = ("" + e).toLowerCase(),
                            i = !0
                        }
                }
                function p(t, e, n) {
                    var i = !1;
                    if ((e === undefined || e < 0) && (e = 0),
                    e > this.length)
                        return "";
                    if ((n === undefined || n > this.length) && (n = this.length),
                    n <= 0)
                        return "";
                    if ((n >>>= 0) <= (e >>>= 0))
                        return "";
                    for (t || (t = "utf8"); ; )
                        switch (t) {
                        case "hex":
                            return H(this, e, n);
                        case "utf8":
                        case "utf-8":
                            return C(this, e, n);
                        case "ascii":
                            return P(this, e, n);
                        case "latin1":
                        case "binary":
                            return B(this, e, n);
                        case "base64":
                            return A(this, e, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return R(this, e, n);
                        default:
                            if (i)
                                throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(),
                            i = !0
                        }
                }
                function y(t, e, n) {
                    var i = t[e];
                    t[e] = t[n],
                    t[n] = i
                }
                function m(t, e, n, i, r) {
                    if (0 === t.length)
                        return -1;
                    if ("string" == typeof n ? (i = n,
                    n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                    n = +n,
                    isNaN(n) && (n = r ? 0 : t.length - 1),
                    n < 0 && (n = t.length + n),
                    n >= t.length) {
                        if (r)
                            return -1;
                        n = t.length - 1
                    } else if (n < 0) {
                        if (!r)
                            return -1;
                        n = 0
                    }
                    if ("string" == typeof e && (e = h.from(e, i)),
                    h.isBuffer(e))
                        return 0 === e.length ? -1 : v(t, e, n, i, r);
                    if ("number" == typeof e)
                        return e &= 255,
                        h.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : v(t, [e], n, i, r);
                    throw new TypeError("val must be string, number or Buffer")
                }
                function v(t, e, n, i, r) {
                    var s, a = 1, o = t.length, h = e.length;
                    if (i !== undefined && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (t.length < 2 || e.length < 2)
                            return -1;
                        a = 2,
                        o /= 2,
                        h /= 2,
                        n /= 2
                    }
                    function u(t, e) {
                        return 1 === a ? t[e] : t.readUInt16BE(e * a)
                    }
                    if (r) {
                        var c = -1;
                        for (s = n; s < o; s++)
                            if (u(t, s) === u(e, -1 === c ? 0 : s - c)) {
                                if (-1 === c && (c = s),
                                s - c + 1 === h)
                                    return c * a
                            } else
                                -1 !== c && (s -= s - c),
                                c = -1
                    } else
                        for (n + h > o && (n = o - h),
                        s = n; s >= 0; s--) {
                            for (var f = !0, l = 0; l < h; l++)
                                if (u(t, s + l) !== u(e, l)) {
                                    f = !1;
                                    break
                                }
                            if (f)
                                return s
                        }
                    return -1
                }
                function S(t, e, n, i) {
                    n = Number(n) || 0;
                    var r = t.length - n;
                    i ? (i = Number(i)) > r && (i = r) : i = r;
                    var s = e.length;
                    if (s % 2 != 0)
                        throw new TypeError("Invalid hex string");
                    i > s / 2 && (i = s / 2);
                    for (var a = 0; a < i; ++a) {
                        var o = parseInt(e.substr(2 * a, 2), 16);
                        if (isNaN(o))
                            return a;
                        t[n + a] = o
                    }
                    return a
                }
                function x(t, e, n, i) {
                    return z(U(e, t.length - n), t, n, i)
                }
                function F(t, e, n, i) {
                    return z(function r(t) {
                        for (var e = [], n = 0; n < t.length; ++n)
                            e.push(255 & t.charCodeAt(n));
                        return e
                    }(e), t, n, i)
                }
                function E(t, e, n, i) {
                    return F(t, e, n, i)
                }
                function w(t, e, n, i) {
                    return z(q(e), t, n, i)
                }
                function b(t, e, n, i) {
                    return z(function r(t, e) {
                        for (var n, i, r, s = [], a = 0; a < t.length && !((e -= 2) < 0); ++a)
                            i = (n = t.charCodeAt(a)) >> 8,
                            r = n % 256,
                            s.push(r),
                            s.push(i);
                        return s
                    }(e, t.length - n), t, n, i)
                }
                function A(t, e, n) {
                    return 0 === e && n === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, n))
                }
                function C(t, e, n) {
                    n = Math.min(t.length, n);
                    for (var i = [], r = e; r < n; ) {
                        var s, a, o, h, u = t[r], c = null, f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                        if (r + f <= n)
                            switch (f) {
                            case 1:
                                u < 128 && (c = u);
                                break;
                            case 2:
                                128 == (192 & (s = t[r + 1])) && (h = (31 & u) << 6 | 63 & s) > 127 && (c = h);
                                break;
                            case 3:
                                s = t[r + 1],
                                a = t[r + 2],
                                128 == (192 & s) && 128 == (192 & a) && (h = (15 & u) << 12 | (63 & s) << 6 | 63 & a) > 2047 && (h < 55296 || h > 57343) && (c = h);
                                break;
                            case 4:
                                s = t[r + 1],
                                a = t[r + 2],
                                o = t[r + 3],
                                128 == (192 & s) && 128 == (192 & a) && 128 == (192 & o) && (h = (15 & u) << 18 | (63 & s) << 12 | (63 & a) << 6 | 63 & o) > 65535 && h < 1114112 && (c = h)
                            }
                        null === c ? (c = 65533,
                        f = 1) : c > 65535 && (c -= 65536,
                        i.push(c >>> 10 & 1023 | 55296),
                        c = 56320 | 1023 & c),
                        i.push(c),
                        r += f
                    }
                    return function l(t) {
                        var e = t.length;
                        if (e <= T)
                            return String.fromCharCode.apply(String, t);
                        var n = ""
                          , i = 0;
                        for (; i < e; )
                            n += String.fromCharCode.apply(String, t.slice(i, i += T));
                        return n
                    }(i)
                }
                e.Buffer = h,
                e.SlowBuffer = function D(t) {
                    +t != t && (t = 0);
                    return h.alloc(+t)
                }
                ,
                e.INSPECT_MAX_BYTES = 50,
                h.TYPED_ARRAY_SUPPORT = t.TYPED_ARRAY_SUPPORT !== undefined ? t.TYPED_ARRAY_SUPPORT : function I() {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        },
                        42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (e) {
                        return !1
                    }
                }(),
                e.kMaxLength = a(),
                h.poolSize = 8192,
                h._augment = function(t) {
                    return t.__proto__ = h.prototype,
                    t
                }
                ,
                h.from = function(t, e, n) {
                    return u(null, t, e, n)
                }
                ,
                h.TYPED_ARRAY_SUPPORT && (h.prototype.__proto__ = Uint8Array.prototype,
                h.__proto__ = Uint8Array,
                "undefined" != typeof Symbol && Symbol.species && h[Symbol.species] === h && Object.defineProperty(h, Symbol.species, {
                    value: null,
                    configurable: !0
                })),
                h.alloc = function(t, e, n) {
                    return function i(t, e, n, r) {
                        return c(e),
                        e <= 0 ? o(t, e) : n !== undefined ? "string" == typeof r ? o(t, e).fill(n, r) : o(t, e).fill(n) : o(t, e)
                    }(null, t, e, n)
                }
                ,
                h.allocUnsafe = function(t) {
                    return f(null, t)
                }
                ,
                h.allocUnsafeSlow = function(t) {
                    return f(null, t)
                }
                ,
                h.isBuffer = function Y(t) {
                    return !(null == t || !t._isBuffer)
                }
                ,
                h.compare = function G(t, e) {
                    if (!h.isBuffer(t) || !h.isBuffer(e))
                        throw new TypeError("Arguments must be Buffers");
                    if (t === e)
                        return 0;
                    for (var n = t.length, i = e.length, r = 0, s = Math.min(n, i); r < s; ++r)
                        if (t[r] !== e[r]) {
                            n = t[r],
                            i = e[r];
                            break
                        }
                    return n < i ? -1 : i < n ? 1 : 0
                }
                ,
                h.isEncoding = function W(t) {
                    switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                    }
                }
                ,
                h.concat = function J(t, e) {
                    if (!s(t))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length)
                        return h.alloc(0);
                    var n;
                    if (e === undefined)
                        for (e = 0,
                        n = 0; n < t.length; ++n)
                            e += t[n].length;
                    var i = h.allocUnsafe(e)
                      , r = 0;
                    for (n = 0; n < t.length; ++n) {
                        var a = t[n];
                        if (!h.isBuffer(a))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        a.copy(i, r),
                        r += a.length
                    }
                    return i
                }
                ,
                h.byteLength = g,
                h.prototype._isBuffer = !0,
                h.prototype.swap16 = function X() {
                    var t = this.length;
                    if (t % 2 != 0)
                        throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2)
                        y(this, e, e + 1);
                    return this
                }
                ,
                h.prototype.swap32 = function $() {
                    var t = this.length;
                    if (t % 4 != 0)
                        throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4)
                        y(this, e, e + 3),
                        y(this, e + 1, e + 2);
                    return this
                }
                ,
                h.prototype.swap64 = function Z() {
                    var t = this.length;
                    if (t % 8 != 0)
                        throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8)
                        y(this, e, e + 7),
                        y(this, e + 1, e + 6),
                        y(this, e + 2, e + 5),
                        y(this, e + 3, e + 4);
                    return this
                }
                ,
                h.prototype.toString = function Q() {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? C(this, 0, t) : p.apply(this, arguments)
                }
                ,
                h.prototype.equals = function tt(t) {
                    if (!h.isBuffer(t))
                        throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === h.compare(this, t)
                }
                ,
                h.prototype.inspect = function et() {
                    var t = ""
                      , n = e.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
                    this.length > n && (t += " ... ")),
                    "<Buffer " + t + ">"
                }
                ,
                h.prototype.compare = function nt(t, e, n, i, r) {
                    if (!h.isBuffer(t))
                        throw new TypeError("Argument must be a Buffer");
                    if (e === undefined && (e = 0),
                    n === undefined && (n = t ? t.length : 0),
                    i === undefined && (i = 0),
                    r === undefined && (r = this.length),
                    e < 0 || n > t.length || i < 0 || r > this.length)
                        throw new RangeError("out of range index");
                    if (i >= r && e >= n)
                        return 0;
                    if (i >= r)
                        return -1;
                    if (e >= n)
                        return 1;
                    if (this === t)
                        return 0;
                    for (var s = (r >>>= 0) - (i >>>= 0), a = (n >>>= 0) - (e >>>= 0), o = Math.min(s, a), u = this.slice(i, r), c = t.slice(e, n), f = 0; f < o; ++f)
                        if (u[f] !== c[f]) {
                            s = u[f],
                            a = c[f];
                            break
                        }
                    return s < a ? -1 : a < s ? 1 : 0
                }
                ,
                h.prototype.includes = function it(t, e, n) {
                    return -1 !== this.indexOf(t, e, n)
                }
                ,
                h.prototype.indexOf = function rt(t, e, n) {
                    return m(this, t, e, n, !0)
                }
                ,
                h.prototype.lastIndexOf = function st(t, e, n) {
                    return m(this, t, e, n, !1)
                }
                ,
                h.prototype.write = function at(t, e, n, i) {
                    if (e === undefined)
                        i = "utf8",
                        n = this.length,
                        e = 0;
                    else if (n === undefined && "string" == typeof e)
                        i = e,
                        n = this.length,
                        e = 0;
                    else {
                        if (!isFinite(e))
                            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0,
                        isFinite(n) ? (n |= 0,
                        i === undefined && (i = "utf8")) : (i = n,
                        n = undefined)
                    }
                    var r = this.length - e;
                    if ((n === undefined || n > r) && (n = r),
                    t.length > 0 && (n < 0 || e < 0) || e > this.length)
                        throw new RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var s = !1; ; )
                        switch (i) {
                        case "hex":
                            return S(this, t, e, n);
                        case "utf8":
                        case "utf-8":
                            return x(this, t, e, n);
                        case "ascii":
                            return F(this, t, e, n);
                        case "latin1":
                        case "binary":
                            return E(this, t, e, n);
                        case "base64":
                            return w(this, t, e, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return b(this, t, e, n);
                        default:
                            if (s)
                                throw new TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(),
                            s = !0
                        }
                }
                ,
                h.prototype.toJSON = function ot() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }
                ;
                var T = 4096;
                function P(t, e, n) {
                    var i = "";
                    n = Math.min(t.length, n);
                    for (var r = e; r < n; ++r)
                        i += String.fromCharCode(127 & t[r]);
                    return i
                }
                function B(t, e, n) {
                    var i = "";
                    n = Math.min(t.length, n);
                    for (var r = e; r < n; ++r)
                        i += String.fromCharCode(t[r]);
                    return i
                }
                function H(t, e, n) {
                    var i = t.length;
                    (!e || e < 0) && (e = 0),
                    (!n || n < 0 || n > i) && (n = i);
                    for (var r = "", s = e; s < n; ++s)
                        r += _(t[s]);
                    return r
                }
                function R(t, e, n) {
                    for (var i = t.slice(e, n), r = "", s = 0; s < i.length; s += 2)
                        r += String.fromCharCode(i[s] + 256 * i[s + 1]);
                    return r
                }
                function N(t, e, n) {
                    if (t % 1 != 0 || t < 0)
                        throw new RangeError("offset is not uint");
                    if (t + e > n)
                        throw new RangeError("Trying to access beyond buffer length")
                }
                function j(t, e, n, i, r, s) {
                    if (!h.isBuffer(t))
                        throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > r || e < s)
                        throw new RangeError('"value" argument is out of bounds');
                    if (n + i > t.length)
                        throw new RangeError("Index out of range")
                }
                function O(t, e, n, i) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var r = 0, s = Math.min(t.length - n, 2); r < s; ++r)
                        t[n + r] = (e & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
                }
                function V(t, e, n, i) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var r = 0, s = Math.min(t.length - n, 4); r < s; ++r)
                        t[n + r] = e >>> 8 * (i ? r : 3 - r) & 255
                }
                function L(t, e, n, i, r, s) {
                    if (n + i > t.length)
                        throw new RangeError("Index out of range");
                    if (n < 0)
                        throw new RangeError("Index out of range")
                }
                function K(t, e, n, i, s) {
                    return s || L(t, 0, n, 4),
                    r.write(t, e, n, i, 23, 4),
                    n + 4
                }
                function M(t, e, n, i, s) {
                    return s || L(t, 0, n, 8),
                    r.write(t, e, n, i, 52, 8),
                    n + 8
                }
                h.prototype.slice = function ht(t, e) {
                    var n, i = this.length;
                    if ((t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
                    (e = e === undefined ? i : ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
                    e < t && (e = t),
                    h.TYPED_ARRAY_SUPPORT)
                        (n = this.subarray(t, e)).__proto__ = h.prototype;
                    else {
                        var r = e - t;
                        n = new h(r,undefined);
                        for (var s = 0; s < r; ++s)
                            n[s] = this[s + t]
                    }
                    return n
                }
                ,
                h.prototype.readUIntLE = function ut(t, e, n) {
                    t |= 0,
                    e |= 0,
                    n || N(t, e, this.length);
                    for (var i = this[t], r = 1, s = 0; ++s < e && (r *= 256); )
                        i += this[t + s] * r;
                    return i
                }
                ,
                h.prototype.readUIntBE = function ct(t, e, n) {
                    t |= 0,
                    e |= 0,
                    n || N(t, e, this.length);
                    for (var i = this[t + --e], r = 1; e > 0 && (r *= 256); )
                        i += this[t + --e] * r;
                    return i
                }
                ,
                h.prototype.readUInt8 = function ft(t, e) {
                    return e || N(t, 1, this.length),
                    this[t]
                }
                ,
                h.prototype.readUInt16LE = function lt(t, e) {
                    return e || N(t, 2, this.length),
                    this[t] | this[t + 1] << 8
                }
                ,
                h.prototype.readUInt16BE = function dt(t, e) {
                    return e || N(t, 2, this.length),
                    this[t] << 8 | this[t + 1]
                }
                ,
                h.prototype.readUInt32LE = function gt(t, e) {
                    return e || N(t, 4, this.length),
                    (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }
                ,
                h.prototype.readUInt32BE = function pt(t, e) {
                    return e || N(t, 4, this.length),
                    16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }
                ,
                h.prototype.readIntLE = function yt(t, e, n) {
                    t |= 0,
                    e |= 0,
                    n || N(t, e, this.length);
                    for (var i = this[t], r = 1, s = 0; ++s < e && (r *= 256); )
                        i += this[t + s] * r;
                    return i >= (r *= 128) && (i -= Math.pow(2, 8 * e)),
                    i
                }
                ,
                h.prototype.readIntBE = function mt(t, e, n) {
                    t |= 0,
                    e |= 0,
                    n || N(t, e, this.length);
                    for (var i = e, r = 1, s = this[t + --i]; i > 0 && (r *= 256); )
                        s += this[t + --i] * r;
                    return s >= (r *= 128) && (s -= Math.pow(2, 8 * e)),
                    s
                }
                ,
                h.prototype.readInt8 = function vt(t, e) {
                    return e || N(t, 1, this.length),
                    128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }
                ,
                h.prototype.readInt16LE = function St(t, e) {
                    e || N(t, 2, this.length);
                    var n = this[t] | this[t + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }
                ,
                h.prototype.readInt16BE = function xt(t, e) {
                    e || N(t, 2, this.length);
                    var n = this[t + 1] | this[t] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }
                ,
                h.prototype.readInt32LE = function Ft(t, e) {
                    return e || N(t, 4, this.length),
                    this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }
                ,
                h.prototype.readInt32BE = function Et(t, e) {
                    return e || N(t, 4, this.length),
                    this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }
                ,
                h.prototype.readFloatLE = function wt(t, e) {
                    return e || N(t, 4, this.length),
                    r.read(this, t, !0, 23, 4)
                }
                ,
                h.prototype.readFloatBE = function bt(t, e) {
                    return e || N(t, 4, this.length),
                    r.read(this, t, !1, 23, 4)
                }
                ,
                h.prototype.readDoubleLE = function At(t, e) {
                    return e || N(t, 8, this.length),
                    r.read(this, t, !0, 52, 8)
                }
                ,
                h.prototype.readDoubleBE = function Ct(t, e) {
                    return e || N(t, 8, this.length),
                    r.read(this, t, !1, 52, 8)
                }
                ,
                h.prototype.writeUIntLE = function Dt(t, e, n, i) {
                    (t = +t,
                    e |= 0,
                    n |= 0,
                    i) || j(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var r = 1
                      , s = 0;
                    for (this[e] = 255 & t; ++s < n && (r *= 256); )
                        this[e + s] = t / r & 255;
                    return e + n
                }
                ,
                h.prototype.writeUIntBE = function It(t, e, n, i) {
                    (t = +t,
                    e |= 0,
                    n |= 0,
                    i) || j(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var r = n - 1
                      , s = 1;
                    for (this[e + r] = 255 & t; --r >= 0 && (s *= 256); )
                        this[e + r] = t / s & 255;
                    return e + n
                }
                ,
                h.prototype.writeUInt8 = function Tt(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || j(this, t, e, 1, 255, 0),
                    h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                    this[e] = 255 & t,
                    e + 1
                }
                ,
                h.prototype.writeUInt16LE = function Pt(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || j(this, t, e, 2, 65535, 0),
                    h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                    this[e + 1] = t >>> 8) : O(this, t, e, !0),
                    e + 2
                }
                ,
                h.prototype.writeUInt16BE = function Bt(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || j(this, t, e, 2, 65535, 0),
                    h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                    this[e + 1] = 255 & t) : O(this, t, e, !1),
                    e + 2
                }
                ,
                h.prototype.writeUInt32LE = function Ht(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || j(this, t, e, 4, 4294967295, 0),
                    h.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                    this[e + 2] = t >>> 16,
                    this[e + 1] = t >>> 8,
                    this[e] = 255 & t) : V(this, t, e, !0),
                    e + 4
                }
                ,
                h.prototype.writeUInt32BE = function Rt(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || j(this, t, e, 4, 4294967295, 0),
                    h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                    this[e + 1] = t >>> 16,
                    this[e + 2] = t >>> 8,
                    this[e + 3] = 255 & t) : V(this, t, e, !1),
                    e + 4
                }
                ,
                h.prototype.writeIntLE = function Nt(t, e, n, i) {
                    if (t = +t,
                    e |= 0,
                    !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        j(this, t, e, n, r - 1, -r)
                    }
                    var s = 0
                      , a = 1
                      , o = 0;
                    for (this[e] = 255 & t; ++s < n && (a *= 256); )
                        t < 0 && 0 === o && 0 !== this[e + s - 1] && (o = 1),
                        this[e + s] = (t / a >> 0) - o & 255;
                    return e + n
                }
                ,
                h.prototype.writeIntBE = function jt(t, e, n, i) {
                    if (t = +t,
                    e |= 0,
                    !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        j(this, t, e, n, r - 1, -r)
                    }
                    var s = n - 1
                      , a = 1
                      , o = 0;
                    for (this[e + s] = 255 & t; --s >= 0 && (a *= 256); )
                        t < 0 && 0 === o && 0 !== this[e + s + 1] && (o = 1),
                        this[e + s] = (t / a >> 0) - o & 255;
                    return e + n
                }
                ,
                h.prototype.writeInt8 = function Ot(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || j(this, t, e, 1, 127, -128),
                    h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                    t < 0 && (t = 255 + t + 1),
                    this[e] = 255 & t,
                    e + 1
                }
                ,
                h.prototype.writeInt16LE = function Vt(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || j(this, t, e, 2, 32767, -32768),
                    h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                    this[e + 1] = t >>> 8) : O(this, t, e, !0),
                    e + 2
                }
                ,
                h.prototype.writeInt16BE = function Lt(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || j(this, t, e, 2, 32767, -32768),
                    h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                    this[e + 1] = 255 & t) : O(this, t, e, !1),
                    e + 2
                }
                ,
                h.prototype.writeInt32LE = function Kt(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || j(this, t, e, 4, 2147483647, -2147483648),
                    h.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                    this[e + 1] = t >>> 8,
                    this[e + 2] = t >>> 16,
                    this[e + 3] = t >>> 24) : V(this, t, e, !0),
                    e + 4
                }
                ,
                h.prototype.writeInt32BE = function Mt(t, e, n) {
                    return t = +t,
                    e |= 0,
                    n || j(this, t, e, 4, 2147483647, -2147483648),
                    t < 0 && (t = 4294967295 + t + 1),
                    h.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                    this[e + 1] = t >>> 16,
                    this[e + 2] = t >>> 8,
                    this[e + 3] = 255 & t) : V(this, t, e, !1),
                    e + 4
                }
                ,
                h.prototype.writeFloatLE = function kt(t, e, n) {
                    return K(this, t, e, !0, n)
                }
                ,
                h.prototype.writeFloatBE = function _t(t, e, n) {
                    return K(this, t, e, !1, n)
                }
                ,
                h.prototype.writeDoubleLE = function Ut(t, e, n) {
                    return M(this, t, e, !0, n)
                }
                ,
                h.prototype.writeDoubleBE = function qt(t, e, n) {
                    return M(this, t, e, !1, n)
                }
                ,
                h.prototype.copy = function zt(t, e, n, i) {
                    if (n || (n = 0),
                    i || 0 === i || (i = this.length),
                    e >= t.length && (e = t.length),
                    e || (e = 0),
                    i > 0 && i < n && (i = n),
                    i === n)
                        return 0;
                    if (0 === t.length || 0 === this.length)
                        return 0;
                    if (e < 0)
                        throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length)
                        throw new RangeError("sourceStart out of bounds");
                    if (i < 0)
                        throw new RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length),
                    t.length - e < i - n && (i = t.length - e + n);
                    var r, s = i - n;
                    if (this === t && n < e && e < i)
                        for (r = s - 1; r >= 0; --r)
                            t[r + e] = this[r + n];
                    else if (s < 1e3 || !h.TYPED_ARRAY_SUPPORT)
                        for (r = 0; r < s; ++r)
                            t[r + e] = this[r + n];
                    else
                        Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
                    return s
                }
                ,
                h.prototype.fill = function Yt(t, e, n, i) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (i = e,
                        e = 0,
                        n = this.length) : "string" == typeof n && (i = n,
                        n = this.length),
                        1 === t.length) {
                            var r = t.charCodeAt(0);
                            r < 256 && (t = r)
                        }
                        if (i !== undefined && "string" != typeof i)
                            throw new TypeError("encoding must be a string");
                        if ("string" == typeof i && !h.isEncoding(i))
                            throw new TypeError("Unknown encoding: " + i)
                    } else
                        "number" == typeof t && (t &= 255);
                    if (e < 0 || this.length < e || this.length < n)
                        throw new RangeError("Out of range index");
                    if (n <= e)
                        return this;
                    var s;
                    if (e >>>= 0,
                    n = n === undefined ? this.length : n >>> 0,
                    t || (t = 0),
                    "number" == typeof t)
                        for (s = e; s < n; ++s)
                            this[s] = t;
                    else {
                        var a = h.isBuffer(t) ? t : U(new h(t,i).toString())
                          , o = a.length;
                        for (s = 0; s < n - e; ++s)
                            this[s + e] = a[s % o]
                    }
                    return this
                }
                ;
                var k = /[^+\/0-9A-Za-z-_]/g;
                function _(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }
                function U(t, e) {
                    var n;
                    e = e || Infinity;
                    for (var i = t.length, r = null, s = [], a = 0; a < i; ++a) {
                        if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                            if (!r) {
                                if (n > 56319) {
                                    (e -= 3) > -1 && s.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === i) {
                                    (e -= 3) > -1 && s.push(239, 191, 189);
                                    continue
                                }
                                r = n;
                                continue
                            }
                            if (n < 56320) {
                                (e -= 3) > -1 && s.push(239, 191, 189),
                                r = n;
                                continue
                            }
                            n = 65536 + (r - 55296 << 10 | n - 56320)
                        } else
                            r && (e -= 3) > -1 && s.push(239, 191, 189);
                        if (r = null,
                        n < 128) {
                            if ((e -= 1) < 0)
                                break;
                            s.push(n)
                        } else if (n < 2048) {
                            if ((e -= 2) < 0)
                                break;
                            s.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((e -= 3) < 0)
                                break;
                            s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112))
                                throw new Error("Invalid code point");
                            if ((e -= 4) < 0)
                                break;
                            s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return s
                }
                function q(t) {
                    return i.toByteArray(function e(t) {
                        if ((t = function e(t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        }(t).replace(k, "")).length < 2)
                            return "";
                        for (; t.length % 4 != 0; )
                            t += "=";
                        return t
                    }(t))
                }
                function z(t, e, n, i) {
                    for (var r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r)
                        e[r + n] = t[r];
                    return r
                }
            }
            ).call(this, n(85))
        },
        209: function(t, e, n) {
            "use strict";
            e.byteLength = function i(t) {
                var e = l(t)
                  , n = e[0]
                  , i = e[1];
                return 3 * (n + i) / 4 - i
            }
            ,
            e.toByteArray = function r(t) {
                var e, n, i = l(t), r = i[0], s = i[1], a = new h(function u(t, e, n) {
                    return 3 * (e + n) / 4 - n
                }(0, r, s)), c = 0, f = s > 0 ? r - 4 : r;
                for (n = 0; n < f; n += 4)
                    e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)],
                    a[c++] = e >> 16 & 255,
                    a[c++] = e >> 8 & 255,
                    a[c++] = 255 & e;
                2 === s && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4,
                a[c++] = 255 & e);
                1 === s && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2,
                a[c++] = e >> 8 & 255,
                a[c++] = 255 & e);
                return a
            }
            ,
            e.fromByteArray = function s(t) {
                for (var e, n = t.length, i = n % 3, r = [], s = 16383, o = 0, h = n - i; o < h; o += s)
                    r.push(g(t, o, o + s > h ? h : o + s));
                1 === i ? (e = t[n - 1],
                r.push(a[e >> 2] + a[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1],
                r.push(a[e >> 10] + a[e >> 4 & 63] + a[e << 2 & 63] + "="));
                return r.join("")
            }
            ;
            for (var a = [], o = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, f = u.length; c < f; ++c)
                a[c] = u[c],
                o[u.charCodeAt(c)] = c;
            function l(t) {
                var e = t.length;
                if (e % 4 > 0)
                    throw new Error("Invalid string. Length must be a multiple of 4");
                var n = t.indexOf("=");
                return -1 === n && (n = e),
                [n, n === e ? 0 : 4 - n % 4]
            }
            function d(t) {
                return a[t >> 18 & 63] + a[t >> 12 & 63] + a[t >> 6 & 63] + a[63 & t]
            }
            function g(t, e, n) {
                for (var i, r = [], s = e; s < n; s += 3)
                    i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]),
                    r.push(d(i));
                return r.join("")
            }
            o["-".charCodeAt(0)] = 62,
            o["_".charCodeAt(0)] = 63
        },
        210: function(t, e) {
            e.read = function(t, e, n, i, r) {
                var s, a, o = 8 * r - i - 1, h = (1 << o) - 1, u = h >> 1, c = -7, f = n ? r - 1 : 0, l = n ? -1 : 1, d = t[e + f];
                for (f += l,
                s = d & (1 << -c) - 1,
                d >>= -c,
                c += o; c > 0; s = 256 * s + t[e + f],
                f += l,
                c -= 8)
                    ;
                for (a = s & (1 << -c) - 1,
                s >>= -c,
                c += i; c > 0; a = 256 * a + t[e + f],
                f += l,
                c -= 8)
                    ;
                if (0 === s)
                    s = 1 - u;
                else {
                    if (s === h)
                        return a ? NaN : (d ? -1 : 1) * Infinity;
                    a += Math.pow(2, i),
                    s -= u
                }
                return (d ? -1 : 1) * a * Math.pow(2, s - i)
            }
            ,
            e.write = function(t, e, n, i, r, s) {
                var a, o, h, u = 8 * s - r - 1, c = (1 << u) - 1, f = c >> 1, l = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : s - 1, g = i ? 1 : -1, p = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e),
                isNaN(e) || e === Infinity ? (o = isNaN(e) ? 1 : 0,
                a = c) : (a = Math.floor(Math.log(e) / Math.LN2),
                e * (h = Math.pow(2, -a)) < 1 && (a--,
                h *= 2),
                (e += a + f >= 1 ? l / h : l * Math.pow(2, 1 - f)) * h >= 2 && (a++,
                h /= 2),
                a + f >= c ? (o = 0,
                a = c) : a + f >= 1 ? (o = (e * h - 1) * Math.pow(2, r),
                a += f) : (o = e * Math.pow(2, f - 1) * Math.pow(2, r),
                a = 0)); r >= 8; t[n + d] = 255 & o,
                d += g,
                o /= 256,
                r -= 8)
                    ;
                for (a = a << r | o,
                u += r; u > 0; t[n + d] = 255 & a,
                d += g,
                a /= 256,
                u -= 8)
                    ;
                t[n + d - g] |= 128 * p
            }
        },
        211: function(t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == n.call(t)
            }
        },
        85: function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (i) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        }
    })
}
));





function rsa_encrypt(rsa_key,plain_text){
    key_ =  window["jsrsasign_all"](207).RSAKey;
    k =  new key_;
    k.setPublic(rsa_key,"10001")
    return k.encrypt(plain_text)
}


