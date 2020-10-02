;(this.webpackJsonpscheduler = this.webpackJsonpscheduler || []).push([
  [0],
  {
    110: function (e, t, a) {
      e.exports = a(140)
    },
    115: function (e, t, a) {},
    140: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        l = a(12),
        c = a.n(l),
        i = (a(115), a(25)),
        o = a(15),
        u = a.n(o),
        s = a(23),
        m = a(9),
        d = a(53),
        f = a(33),
        h = a(196),
        p = a(189),
        g = a(66),
        E = a(170),
        b = a(192),
        v = (a(78), a(190)),
        S = a(174),
        w = a(168),
        O = a(197),
        y = Object(w.a)(function (e) {
          return Object(O.a)({
            root: { '& .MuiTextField-root': { margin: e.spacing(1), width: 200 } },
          })
        }),
        x = function (e) {
          var t = e.username,
            a = e.password,
            n = e.handleUsername,
            l = e.handlePassword,
            c = e.submit,
            i = (e.message, y())
          return r.a.createElement(
            E.a,
            null,
            r.a.createElement(
              'form',
              { className: i.root, noValidate: !0, autoComplete: 'off', onSubmit: c },
              r.a.createElement(
                'div',
                null,
                r.a.createElement(v.a, { id: 'username', value: t, onChange: n, label: 'Username' })
              ),
              r.a.createElement(
                'div',
                null,
                r.a.createElement(v.a, {
                  id: 'password',
                  value: a,
                  onChange: l,
                  label: 'Password',
                  type: 'password',
                })
              ),
              r.a.createElement(S.a, { variant: 'outlined', type: 'submit' }, 'Log in')
            )
          )
        },
        k = a(48),
        j = a.n(k),
        N = a(90),
        C = a.n(N),
        I = a(91),
        A = a.n(I),
        F = a(92),
        D = a.n(F),
        T = a(93),
        P = a.n(T),
        J = a(94),
        W = a.n(J),
        R = a(95),
        L = a.n(R),
        M = a(96),
        B = a.n(M),
        U = a(97),
        V = a.n(U),
        Y = a(98),
        z = a.n(Y),
        G = function () {
          return [
            { label: 'freetime', image: C.a },
            { label: 'evening', image: A.a },
            { label: 'sleep', image: D.a },
            { label: 'breakfast', image: P.a },
            { label: 'outdoor', image: W.a },
            { label: 'playtime', image: L.a },
            { label: 'study', image: B.a },
            { label: 'food', image: V.a },
            { label: 'read', image: z.a },
          ]
        },
        H = function (e) {
          var t = e.schedule,
            a = G(),
            l = t.events.map(function (e) {
              var t = e.start.split(':')[0],
                n = e.start.split(':')[1],
                r = j()({ hour: t, minute: n })
              return Object(i.a)({}, e, {
                start: r,
                image: a.find(function (t) {
                  return t.label === e.image
                }).image,
              })
            }),
            c = Object(n.useState)(j()()),
            o = Object(m.a)(c, 2),
            u = o[0],
            s = o[1],
            d = Object(n.useState)({ text: 'initialText' }),
            f = Object(m.a)(d, 2),
            h = f[0],
            p = f[1],
            g = (function () {
              if (1 === l.length || u.isAfter(l[l.length - 1].start) || u.isBefore(l[0].start))
                return l.length - 1
              var e = 0
              for (e = 0; e < l.length; e += 1)
                if (e < l.length - 1 && u.isBetween(l[e].start, l[e + 1].start)) return e
              return 0
            })(),
            E = l[g]
          u.isBefore(l[0].start) &&
            (E = Object(i.a)({}, l[l.length - 1], {
              start: j()(l[l.length - 1].start.format()).subtract(1, 'days'),
            }))
          var b = Object(i.a)({}, l[0], { start: j()(l[0].start.format()).add(1, 'days') }),
            v = l[0]
          g === l.length - 1 && u.isAfter(l[0].start)
            ? (v = b)
            : l[0].start.isBefore(u) && (v = l[g + 1]),
            E.text !== h.text && p(E)
          var S = v.start.diff(E.start, 'minutes'),
            w = v.start.diff(u, 'minutes'),
            O = Math.round((100 * w) / S),
            y = Math.round((500 * (100 - O)) / 100)
          return (
            Object(n.useEffect)(function () {
              var e = setInterval(function () {
                s(j()())
              }, 15e3)
              return function () {
                return clearInterval(e)
              }
            }, []),
            r.a.createElement(
              'div',
              { className: 'App' },
              r.a.createElement(
                'div',
                { className: 'grid-container' },
                r.a.createElement(
                  'div',
                  { className: 'centered' },
                  r.a.createElement('img', { alt: '', src: E.image })
                ),
                r.a.createElement(
                  'div',
                  { className: 'bigInfo' },
                  r.a.createElement('div', null, E.text),
                  r.a.createElement('div', null, ' j\xe4ljell\xe4 '.concat(w, ' min'))
                ),
                r.a.createElement(
                  'div',
                  { className: 'centered' },
                  r.a.createElement(
                    'svg',
                    { height: '100', width: '500' },
                    r.a.createElement('line', {
                      x1: '0',
                      y1: '50',
                      x2: '500',
                      y2: '50',
                      style: { stroke: 'red', strokeWidth: '2' },
                    }),
                    r.a.createElement('line', {
                      x1: '0',
                      y1: '50',
                      x2: y - 20,
                      y2: '50',
                      style: { stroke: 'lime', strokeWidth: '20' },
                    }),
                    r.a.createElement('polygon', {
                      points: ''
                        .concat(y, ',50 ')
                        .concat(y - 40, ',90 ')
                        .concat(y - 40, ',10'),
                      style: { fill: 'lime', stroke: 'purple', strokeWidth: '1' },
                    }),
                    'Sorry, your browser does not support inline SVG.'
                  )
                ),
                r.a.createElement('div', { className: 'bigInfo' }, 'Seuraavaksi: ', v.text)
              ),
              r.a.createElement(
                'div',
                { className: 'footer' },
                'Icons made by  ',
                r.a.createElement(
                  'a',
                  { href: 'https://www.flaticon.com/authors/freepik', title: 'Freepik' },
                  'Freepik'
                ),
                '  from  ',
                r.a.createElement(
                  'a',
                  { href: 'https://www.flaticon.com/', title: 'Flaticon' },
                  'www.flaticon.com'
                )
              )
            )
          )
        },
        $ = a(40),
        q = a.n($),
        K = {
          logIn: (function () {
            var e = Object(s.a)(
              u.a.mark(function e(t, a) {
                var n
                return u.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), q.a.post('/api/login', { username: t, password: a })
                      case 2:
                        return (n = e.sent), e.abrupt('return', n.data)
                      case 4:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t, a) {
              return e.apply(this, arguments)
            }
          })(),
        },
        Q = '/api/schedules',
        X = null,
        Z = {
          getschedules: (function () {
            var e = Object(s.a)(
              u.a.mark(function e() {
                var t, a
                return u.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (t = { headers: { Authorization: X } }), (e.next = 3), q.a.get(Q, t)
                      case 3:
                        return (a = e.sent), e.abrupt('return', a.data)
                      case 5:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function () {
              return e.apply(this, arguments)
            }
          })(),
          update: (function () {
            var e = Object(s.a)(
              u.a.mark(function e(t) {
                var a, n
                return u.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = { headers: { Authorization: X } }),
                          (e.next = 3),
                          q.a.put(''.concat(Q, '/').concat(t.id), t, a)
                        )
                      case 3:
                        return (n = e.sent), e.abrupt('return', n)
                      case 5:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
          post: (function () {
            var e = Object(s.a)(
              u.a.mark(function e(t) {
                var a, n
                return u.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = { headers: { Authorization: X } }),
                          (e.next = 3),
                          q.a.post(''.concat(Q), t, a)
                        )
                      case 3:
                        return (n = e.sent), e.abrupt('return', n)
                      case 5:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
          remove: (function () {
            var e = Object(s.a)(
              u.a.mark(function e(t) {
                var a, n
                return u.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = { headers: { Authorization: X } }),
                          (e.next = 3),
                          q.a.delete(''.concat(Q, '/').concat(t.id), a)
                        )
                      case 3:
                        return (n = e.sent), e.abrupt('return', n)
                      case 5:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
          setToken: function (e) {
            X = 'bearer '.concat(e)
          },
        },
        _ = a(178),
        ee = a(179),
        te = a(194),
        ae = a(184),
        ne = a(185),
        re = a(186),
        le = a(187),
        ce = a(191),
        ie = a(195),
        oe = a(183),
        ue = a(181),
        se = a(182),
        me = a(180),
        de = a(172),
        fe = {
          background: 'linear-gradient(60deg, #FFFEEE 20%, #EDDDDE 70%)',
          border: 1,
          borderRadius: 3,
          boxShadow: '0 2px 3px 1px rgba(255, 105, 135, .3)',
          color: 'black',
          height: 30,
          padding: '0 10px',
          margin: '0px 10px 0px 0px',
        },
        he = { background: '#E7FAE9', padding: '10px', borderRadius: '3px' },
        pe = a(175),
        ge = a(176),
        Ee = a(177),
        be = Object(w.a)(function (e, t) {
          return {
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: e.palette.background.paper,
            },
            gridList: { width: 500, height: 450 },
            image: { width: 100, borderStyle: 'solid', borderColor: 'black', borderRadius: '5px' },
            selectedImage: {
              width: 100,
              borderStyle: 'solid',
              borderColor: 'red',
              borderRadius: '5px',
            },
          }
        }),
        ve = function (e) {
          var t = e.imageNames,
            a = e.handleClick,
            l = be(),
            c = G(),
            i = Object(n.useState)(''),
            o = Object(m.a)(i, 2),
            u = o[0],
            s = o[1],
            d = function (e) {
              return function () {
                a(e), s(e)
              }
            }
          return r.a.createElement(
            'div',
            { className: l.root },
            r.a.createElement(
              pe.a,
              { cellHeight: 110, className: l.gridList, cols: 4 },
              r.a.createElement(
                ge.a,
                { key: 'Subheader', cols: 4, style: { height: 'auto' } },
                r.a.createElement(Ee.a, { component: 'div' }, 'Images')
              ),
              t.map(function (e) {
                return r.a.createElement(
                  ge.a,
                  { key: e },
                  u === e
                    ? r.a.createElement('img', {
                        className: l.selectedImage,
                        src: c.find(function (t) {
                          return t.label === e
                        }).image,
                        alt: e,
                        onClick: d(e),
                      })
                    : r.a.createElement('img', {
                        className: l.image,
                        src: c.find(function (t) {
                          return t.label === e
                        }).image,
                        alt: e,
                        onClick: d(e),
                      })
                )
              })
            )
          )
        },
        Se = Object(w.a)({ button: fe, settingsArea: he }),
        we = function (e) {
          var t = e.scheduleName,
            a = e.event,
            n = e.handleClose,
            l = e.handleOpen,
            c = e.handleEventChange,
            i = e.openDialog,
            o = e.handleEventRemove,
            u = Se()
          return r.a.createElement(
            _.a,
            { key: a.text },
            r.a.createElement(ee.a, null, a.text),
            r.a.createElement(
              ee.a,
              null,
              r.a.createElement(v.a, {
                id: 'time',
                label: 'Start time',
                type: 'time',
                value: a.start,
                onChange: c(t, a.text),
                InputLabelProps: { shrink: !0 },
                inputProps: { step: 300 },
              })
            ),
            r.a.createElement(
              ee.a,
              null,
              r.a.createElement(S.a, { className: u.button, onClick: l(a.text) }, '-'),
              r.a.createElement(
                ie.a,
                {
                  open: i === a.text,
                  onClose: n,
                  'aria-labelledby': 'alert-dialog-title',
                  'aria-describedby': 'alert-dialog-description',
                },
                r.a.createElement(
                  me.a,
                  { id: 'alert-dialog-title' },
                  'Delete event '.concat(a.text)
                ),
                r.a.createElement(
                  ue.a,
                  null,
                  r.a.createElement(
                    se.a,
                    { id: 'alert-dialog-description' },
                    'This deletes event permanently.'
                  )
                ),
                r.a.createElement(
                  oe.a,
                  null,
                  r.a.createElement(S.a, { className: u.button, onClick: n(o(t, a.text)) }, 'Yes'),
                  r.a.createElement(
                    S.a,
                    { className: u.button, onClick: n(), autoFocus: !0 },
                    'Cancel'
                  )
                )
              )
            )
          )
        },
        Oe = Object(w.a)({ button: fe, settingsArea: he }),
        ye = function (e) {
          var t,
            a = e.schedule,
            l = e.scheduleSettingProps,
            c = e.handlescheduleEditOptions,
            i = l.handleEditscheduleSubmit,
            o = l.handleEventChange,
            u = l.handleEventRemove,
            s = l.handleNewEvent,
            d = l.setscheduleWhereAdd,
            f = l.setTimeOrder,
            h = Oe(),
            p = G().map(function (e) {
              return e.label
            }),
            g = Object(n.useState)(),
            b = Object(m.a)(g, 2),
            w = b[0],
            O = b[1],
            y = Object(n.useState)(!1),
            x = Object(m.a)(y, 2),
            k = x[0],
            j = x[1],
            N = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {}
              return function () {
                e(), j(!1)
              }
            },
            C = a.events,
            I = function (e) {
              return function () {
                O(e)
              }
            },
            A = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {}
              return function () {
                e(), O()
              }
            },
            F = C.map(function (e) {
              return r.a.createElement(we, {
                scheduleName: a.name,
                event: e,
                handleOpen: I,
                handleClose: A,
                handleEventChange: o,
                openDialog: w,
                handleEventRemove: u,
              })
            })
          return r.a.createElement(
            E.a,
            { className: h.settingsArea },
            r.a.createElement(
              'div',
              null,
              r.a.createElement(ce.a, null, 'Events'),
              r.a.createElement(
                'form',
                { onSubmit: i(a.name) },
                r.a.createElement(
                  ae.a,
                  null,
                  r.a.createElement(
                    ne.a,
                    null,
                    r.a.createElement(
                      re.a,
                      null,
                      r.a.createElement(
                        _.a,
                        null,
                        r.a.createElement(ee.a, null, 'name'),
                        r.a.createElement(ee.a, null, 'start time'),
                        r.a.createElement(ee.a, null, 'remove event')
                      )
                    ),
                    r.a.createElement(
                      le.a,
                      null,
                      F.length > 0
                        ? F
                        : r.a.createElement(
                            'tr',
                            null,
                            r.a.createElement('td', null, 'You have not any events yet.')
                          )
                    )
                  )
                ),
                r.a.createElement(
                  'div',
                  null,
                  r.a.createElement(
                    ce.a,
                    { mt: 1, mb: 1 },
                    r.a.createElement(
                      S.a,
                      {
                        className: h.button,
                        onClick:
                          ((t = a.name),
                          function () {
                            j(!0), d(t)
                          }),
                      },
                      '+ Add new event'
                    )
                  ),
                  r.a.createElement(
                    ie.a,
                    { open: k, onClose: N, 'aria-labelledby': 'form-dialog-title' },
                    r.a.createElement(me.a, { id: 'form-dialog-title' }, 'New event'),
                    r.a.createElement(
                      ue.a,
                      null,
                      r.a.createElement(se.a, null, 'Add event name and time to create new event.'),
                      r.a.createElement(v.a, {
                        autoFocus: !0,
                        margin: 'dense',
                        id: 'text',
                        label: 'Event name',
                        type: 'text',
                        value: s.newEventName,
                        onChange: s.handleNewEventName,
                        fullWidth: !0,
                      }),
                      r.a.createElement('p', null, 'Start time'),
                      r.a.createElement(v.a, {
                        id: 'time',
                        label: 'Start time',
                        type: 'time',
                        value: s.newEventTime,
                        onChange: s.handleNewEventTime,
                        InputLabelProps: { shrink: !0 },
                        inputProps: { step: 300 },
                      }),
                      r.a.createElement(
                        de.a,
                        null,
                        r.a.createElement(ve, { imageNames: p, handleClick: s.handleNewEventImage })
                      )
                    ),
                    r.a.createElement(
                      oe.a,
                      null,
                      r.a.createElement(
                        S.a,
                        { className: h.button, onClick: N(s.handleAddEventSubmit) },
                        'Add'
                      ),
                      r.a.createElement(S.a, { className: h.button, onClick: N() }, 'Cancel')
                    )
                  )
                ),
                r.a.createElement(
                  ce.a,
                  { mt: 1, mb: 1 },
                  r.a.createElement(S.a, { className: h.button, onClick: f(a.name) }, 'Rearrange')
                ),
                r.a.createElement(
                  ce.a,
                  { mt: 1, mb: 1 },
                  r.a.createElement(S.a, { className: h.button, type: 'submit' }, 'Save'),
                  r.a.createElement(S.a, { className: h.button, onClick: c(a.name, !0) }, 'Cancel')
                )
              )
            )
          )
        },
        xe = Object(w.a)({ button: fe }),
        ke = function (e) {
          var t = e.settings,
            a = e.schedulesInEdit,
            l = e.schedules,
            c = e.currentschedule,
            i = e.scheduleSettingProps,
            o = Object(n.useState)(''),
            u = Object(m.a)(o, 2),
            s = u[0],
            d = u[1],
            f = Object(n.useState)(!1),
            h = Object(m.a)(f, 2),
            p = h[0],
            g = h[1],
            b = xe(),
            w = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {}
              return function () {
                e(), g(!1)
              }
            },
            O = function (e, a) {
              return function () {
                t.handlescheduleCancel(e, a), t.changescheduleVisibility(e)
              }
            },
            y = function () {
              return d('')
            },
            x = function (e) {
              return function () {
                return d(e)
              }
            },
            k = l.map(function (e) {
              var n,
                l = a.includes(e.name),
                o = e.name === c
              return r.a.createElement(
                r.a.Fragment,
                { key: ''.concat(e.id, 'fragment') },
                r.a.createElement(
                  _.a,
                  { key: e.id },
                  r.a.createElement(ee.a, null, e.name),
                  r.a.createElement(
                    ee.a,
                    null,
                    r.a.createElement(te.a, {
                      checked: o,
                      variant: 'contained',
                      onClick:
                        ((n = e.name),
                        function () {
                          t.handleCurrentschedule(n)
                        }),
                    })
                  ),
                  r.a.createElement(
                    ee.a,
                    null,
                    r.a.createElement(
                      S.a,
                      { className: b.button, onClick: O(e.name, l) },
                      l ? 'Cancel Edit' : 'Edit'
                    )
                  ),
                  r.a.createElement(
                    ee.a,
                    null,
                    r.a.createElement(S.a, { className: b.button, onClick: x(e.name) }, '-'),
                    r.a.createElement(
                      ie.a,
                      {
                        open: s === e.name,
                        onClose: y,
                        'aria-labelledby': 'alert-dialog-title',
                        'aria-describedby': 'alert-dialog-description',
                      },
                      r.a.createElement(
                        me.a,
                        { id: 'alert-dialog-title' },
                        'Delete schedule '.concat(e.name)
                      ),
                      r.a.createElement(
                        ue.a,
                        null,
                        r.a.createElement(
                          se.a,
                          { id: 'alert-dialog-description' },
                          'This deletes schedule permanently.'
                        )
                      ),
                      r.a.createElement(
                        oe.a,
                        null,
                        r.a.createElement(
                          S.a,
                          { className: b.button, onClick: t.handlescheduleRemove(e.name) },
                          'Yes'
                        ),
                        r.a.createElement(
                          S.a,
                          { className: b.button, onClick: y, autoFocus: !0 },
                          'Cancel'
                        )
                      )
                    )
                  )
                ),
                l
                  ? r.a.createElement(
                      _.a,
                      { key: ''.concat(e.id, 'edit') },
                      r.a.createElement(
                        ee.a,
                        { colSpan: '3' },
                        r.a.createElement(ye, {
                          schedule: e,
                          scheduleSettingProps: i,
                          handlescheduleEditOptions: O,
                        })
                      )
                    )
                  : r.a.createElement(r.a.Fragment, null)
              )
            })
          return r.a.createElement(
            E.a,
            null,
            r.a.createElement('h2', null, 'schedules'),
            r.a.createElement(
              ae.a,
              null,
              r.a.createElement(
                ne.a,
                { style: { minWidth: '400px' } },
                r.a.createElement(
                  re.a,
                  null,
                  r.a.createElement(
                    _.a,
                    null,
                    r.a.createElement(ee.a, null, r.a.createElement('h3', null, 'name')),
                    r.a.createElement(ee.a, null, r.a.createElement('h3', null, 'current')),
                    r.a.createElement(ee.a, null, r.a.createElement('h3', null, 'edit')),
                    r.a.createElement(ee.a, null, r.a.createElement('h3', null, 'delete'))
                  )
                ),
                r.a.createElement(le.a, null, k)
              )
            ),
            r.a.createElement(
              ce.a,
              { mt: 1, mb: 1 },
              r.a.createElement(
                S.a,
                {
                  className: b.button,
                  onClick: function () {
                    return g(!0)
                  },
                },
                '+ Add new schedule'
              )
            ),
            r.a.createElement(
              ie.a,
              {
                open: p,
                onClose: w,
                'aria-labelledby': 'alert-dialog-title',
                'aria-describedby': 'alert-dialog-description',
              },
              r.a.createElement(me.a, { id: 'alert-dialog-title' }, 'Add new schedule'),
              r.a.createElement(
                ue.a,
                null,
                r.a.createElement(
                  se.a,
                  { id: 'alert-dialog-description' },
                  'Give a name for schedule and save.'
                ),
                r.a.createElement(v.a, {
                  autoFocus: !0,
                  margin: 'dense',
                  id: 'text',
                  label: 'schedule name',
                  type: 'text',
                  value: t.newscheduleName,
                  onChange: t.handleNewscheduleName,
                  fullWidth: !0,
                })
              ),
              r.a.createElement(
                oe.a,
                null,
                r.a.createElement(
                  S.a,
                  { className: b.button, onClick: w(t.addNewschedule) },
                  'Save'
                ),
                r.a.createElement(
                  S.a,
                  { className: b.button, onClick: w(), color: 'primary', autoFocus: !0 },
                  'Cancel'
                )
              )
            )
          )
        },
        je = function () {
          var e = Object(n.useState)(''),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1],
            c = Object(n.useState)(''),
            o = Object(m.a)(c, 2),
            v = o[0],
            S = o[1],
            w = Object(n.useState)(),
            O = Object(m.a)(w, 2),
            y = O[0],
            k = O[1],
            j = Object(n.useState)([]),
            N = Object(m.a)(j, 2),
            C = N[0],
            I = N[1],
            A = Object(n.useState)([]),
            F = Object(m.a)(A, 2),
            D = F[0],
            T = F[1],
            P = Object(n.useState)([]),
            J = Object(m.a)(P, 2),
            W = J[0],
            R = J[1],
            L = Object(n.useState)(''),
            M = Object(m.a)(L, 2),
            B = M[0],
            U = M[1],
            V = Object(n.useState)(),
            Y = Object(m.a)(V, 2),
            z = Y[0],
            G = Y[1],
            $ = Object(n.useState)(''),
            q = Object(m.a)($, 2),
            Q = q[0],
            X = q[1],
            _ = Object(n.useState)(''),
            ee = Object(m.a)(_, 2),
            te = ee[0],
            ae = ee[1],
            ne = Object(n.useState)(''),
            re = Object(m.a)(ne, 2),
            le = re[0],
            ce = re[1],
            ie = Object(n.useState)(''),
            oe = Object(m.a)(ie, 2),
            ue = oe[0],
            se = oe[1],
            me = Object(n.useState)(''),
            de = Object(m.a)(me, 2),
            fe = de[0],
            he = de[1],
            pe = Object(n.useState)([]),
            ge = Object(m.a)(pe, 2),
            Ee = ge[0],
            be = ge[1]
          Object(n.useEffect)(function () {
            var e = window.localStorage.getItem('loggedschedulerAppUser'),
              t = window.localStorage.getItem('usersschedules'),
              a = window.localStorage.getItem('schedulesDbId')
            if (e) {
              var n = JSON.parse(e)
              k(n), Z.setToken(n.token)
            }
            if (t) {
              var r = JSON.parse(t)
              T(r), r.length > 0 && U(r[0].name)
            }
            if (a) {
              var l = JSON.parse(a)
              I(l)
            }
          }, [])
          var ve = function (e) {
              G(e),
                setTimeout(function () {
                  G()
                }, 3e3)
            },
            Se = function (e, t, a) {
              window.localStorage.setItem('loggedschedulerAppUser', JSON.stringify(e)),
                window.localStorage.setItem('usersschedules', JSON.stringify(t)),
                window.localStorage.setItem('schedulesDbId', JSON.stringify(a))
            },
            we = (function () {
              var e = Object(s.a)(
                u.a.mark(function e(t) {
                  var n, r, c, i
                  return u.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return t.preventDefault(), (e.prev = 1), (e.next = 4), K.logIn(a, v)
                          case 4:
                            return (n = e.sent), Z.setToken(n.token), (e.next = 8), Z.getschedules()
                          case 8:
                            ;(r = e.sent),
                              (c = r.map(function (e) {
                                return e.id
                              })),
                              I(c),
                              k(n),
                              T(r),
                              r.length > 0 && U(r[0].name),
                              Se(n, r, c),
                              l(''),
                              S(''),
                              (i = { type: 'success', text: 'loggend in as '.concat(n.username) }),
                              ve(i),
                              (e.next = 25)
                            break
                          case 21:
                            ;(e.prev = 21),
                              (e.t0 = e.catch(1)),
                              ve({ type: 'error', text: 'Wrong username or password' })
                          case 25:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 21]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            Oe = function (e) {
              return D.map(function (t) {
                return t.name === e
                  ? Object(i.a)({}, t, {
                      events: t.events.sort(function (e, t) {
                        return e.start > t.start ? 1 : -1
                      }),
                    })
                  : t
              })
            },
            ye = (function () {
              var e = Object(s.a)(
                u.a.mark(function e(t) {
                  var a, n, r, l, c
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = Oe(t)),
                            (n = D.find(function (e) {
                              return e.name === t
                            })),
                            R(
                              W.filter(function (e) {
                                return e.name !== t
                              })
                            ),
                            !C.find(function (e) {
                              return e === n.id
                            }))
                          ) {
                            e.next = 10
                            break
                          }
                          return (e.next = 6), Z.update(n)
                        case 6:
                          window.localStorage.setItem('usersschedules', JSON.stringify(a)),
                            T(a),
                            (e.next = 18)
                          break
                        case 10:
                          return (e.next = 12), Z.post(n)
                        case 12:
                          ;(r = e.sent),
                            (l = W.map(function (e) {
                              return e.id === n.id ? r.data : e
                            })),
                            (c = C.concat(r.data.id)),
                            T(l),
                            I(c),
                            Se(y, l, c)
                        case 18:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            xe = {
              handleEditscheduleSubmit: function (e) {
                return function (t) {
                  t.preventDefault(), ye(e)
                }
              },
              handleEventChange: function (e, t) {
                return function (a) {
                  T(
                    D.map(function (n) {
                      return n.name === e
                        ? Object(i.a)({}, n, {
                            events: n.events.map(function (e) {
                              return e.text === t
                                ? Object(i.a)({}, e, { start: a.target.value })
                                : e
                            }),
                          })
                        : n
                    })
                  )
                }
              },
              handleEventRemove: function (e, t) {
                return function () {
                  T(
                    D.map(function (a) {
                      return a.name === e
                        ? Object(i.a)({}, a, {
                            events: a.events.filter(function (e) {
                              return e.text !== t
                            }),
                          })
                        : a
                    })
                  )
                }
              },
              setscheduleWhereAdd: function (e) {
                he(e)
              },
              handleNewEvent: {
                newEventName: te,
                handleNewEventName: function (e) {
                  ae(e.target.value)
                },
                newEventTime: le,
                handleNewEventTime: function (e) {
                  ce(e.target.value)
                },
                newEventImage: ue,
                handleNewEventImage: function (e) {
                  se(e)
                },
                handleAddEventSubmit: function () {
                  var e = D.map(function (e) {
                    return e.name === fe
                      ? Object(i.a)({}, e, {
                          events: e.events.concat({ text: te, start: le, image: ue }),
                        })
                      : e
                  })
                  T(e), ae(''), ce(''), se('')
                },
              },
              setTimeOrder: function (e) {
                return function () {
                  return T(Oe(e))
                }
              },
            },
            je = {
              newscheduleName: Q,
              handlescheduleCancel: function (e, t) {
                var a = W.find(function (t) {
                  return t.name === e
                })
                t
                  ? a &&
                    T(
                      D.map(function (t) {
                        return t.name === e ? a : t
                      })
                    )
                  : R(
                      W.concat(
                        D.find(function (t) {
                          return t.name === e
                        })
                      )
                    )
              },
              changescheduleVisibility: function (e) {
                Ee.includes(e)
                  ? be(
                      Ee.filter(function (t) {
                        return t !== e
                      })
                    )
                  : be(Ee.concat(e))
              },
              handleNewscheduleName: function (e) {
                X(e.target.value)
              },
              addNewschedule: function () {
                var e = {
                    events: [],
                    id: Math.floor(1e6 * Math.random()),
                    name: Q,
                    users: [y],
                    weekDays: [],
                  },
                  t = D.concat(e)
                T(t), window.localStorage.setItem('usersschedules', JSON.stringify(t)), X('')
              },
              handleCurrentschedule: function (e) {
                U(e)
              },
              handlescheduleRemove: function (e) {
                return function () {
                  var t = D.find(function (t) {
                    return t.name === e
                  })
                  try {
                    if (
                      C.find(function (e) {
                        return e === t.id
                      })
                    ) {
                      Z.remove(t)
                      var a = C.filter(function (e) {
                        return e !== t.id
                      })
                      I(a), window.localStorage.setItem('schedulesDbId', JSON.stringify(a))
                    }
                    var n = D.filter(function (t) {
                      return t.name !== e
                    })
                    T(n),
                      R(
                        W.filter(function (t) {
                          return t.name !== e
                        })
                      ),
                      window.localStorage.setItem('usersschedules', JSON.stringify(n))
                  } catch (r) {
                    ve('something went wrong')
                  }
                }
              },
            },
            Ne = !1
          try {
            Ne =
              B.length > 0 &&
              D.find(function (e) {
                return e.name === B
              }).events.length > 0
          } catch (Ce) {
            Ne = !1
          }
          return r.a.createElement(
            d.a,
            null,
            r.a.createElement(
              h.a,
              { 'aria-label': 'breadcrumb', id: 'mainMenu' },
              r.a.createElement(
                p.a,
                {
                  component: d.b,
                  color: 'inherit',
                  to: '/',
                  onClick: function () {
                    y &&
                      (l(''),
                      S(''),
                      k(),
                      I([]),
                      T([]),
                      R([]),
                      U(''),
                      G(),
                      X(''),
                      ae(''),
                      ce(''),
                      se(''),
                      he(''),
                      be([]),
                      window.localStorage.removeItem('loggedschedulerAppUser'),
                      window.localStorage.removeItem('usersschedules'),
                      window.localStorage.removeItem('schedulesDbId'))
                  },
                },
                y ? 'Log out' : 'Log in'
              ),
              r.a.createElement(
                p.a,
                { component: d.b, color: 'inherit', to: '/settings' },
                'Settings'
              ),
              r.a.createElement(
                p.a,
                { component: d.b, color: 'inherit', to: '/eventview' },
                'Event View'
              ),
              y
                ? r.a.createElement(g.a, { color: 'textPrimary' }, 'user: '.concat(y.username))
                : r.a.createElement(g.a, { color: 'textPrimary' }, 'user: (not logged in)')
            ),
            z
              ? r.a.createElement(b.a, { severity: z.type }, z.text)
              : r.a.createElement(r.a.Fragment, null),
            r.a.createElement(
              E.a,
              null,
              r.a.createElement(
                f.c,
                null,
                r.a.createElement(
                  f.a,
                  { path: '/eventview' },
                  void 0 !== D && Ne
                    ? r.a.createElement(H, {
                        schedule: D.find(function (e) {
                          return e.name === B
                        }),
                      })
                    : r.a.createElement(E.a, null, 'You have not any schedules or events')
                ),
                r.a.createElement(
                  f.a,
                  { path: '/settings' },
                  void 0 !== y
                    ? r.a.createElement(ke, {
                        settings: je,
                        schedulesInEdit: Ee,
                        schedules: D,
                        scheduleSettingProps: xe,
                        currentschedule: B,
                      })
                    : r.a.createElement(E.a, null, 'You have not logged in')
                ),
                r.a.createElement(
                  f.a,
                  { path: '/' },
                  void 0 !== y
                    ? r.a.createElement(E.a, null, ''.concat(y.username, ' is Logged in!'))
                    : r.a.createElement(x, {
                        username: a,
                        password: v,
                        handleUsername: function (e) {
                          return l(e.target.value)
                        },
                        handlePassword: function (e) {
                          return S(e.target.value)
                        },
                        submit: we,
                        message: z,
                      })
                )
              )
            )
          )
        }
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      )
      c.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(je, null)),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister()
            })
            .catch(function (e) {
              console.error(e.message)
            })
    },
    78: function (e, t, a) {},
    90: function (e, t, a) {
      e.exports = a.p + 'static/media/freetime.54cc8934.svg'
    },
    91: function (e, t, a) {
      e.exports = a.p + 'static/media/evening.899365e8.svg'
    },
    92: function (e, t, a) {
      e.exports = a.p + 'static/media/sleep.2ff205d3.svg'
    },
    93: function (e, t, a) {
      e.exports = a.p + 'static/media/breakfast.c45b7f65.svg'
    },
    94: function (e, t, a) {
      e.exports = a.p + 'static/media/outdoor.e6712652.svg'
    },
    95: function (e, t, a) {
      e.exports = a.p + 'static/media/playtime.ab902bd6.svg'
    },
    96: function (e, t, a) {
      e.exports = a.p + 'static/media/study.46ea4ff5.svg'
    },
    97: function (e, t, a) {
      e.exports = a.p + 'static/media/food.57171403.svg'
    },
    98: function (e, t, a) {
      e.exports = a.p + 'static/media/book.0d119719.svg'
    },
  },
  [[110, 1, 2]],
])
//# sourceMappingURL=main.ea26ef5c.chunk.js.map
