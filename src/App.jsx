import { useState } from 'react'

// ====== VARIABLES EDITABLES ======
// Completá con tus datos reales:
const CONTACT_EMAIL = ""        // correo de recepción
const WHATSAPP_NUMBER = "+5491123843568"   // con código de país, sin espacios
const GOOGLE_FORMS_URL = ""                // opcional: link a tu Google Forms
const PRICE_60  = 30000;  // ARS - Clase de 1 hora
const PRICE_90  = 40000;  // ARS - Clase de 1 hora y media
const PRICE_120 = 50000;  // ARS - Clase de 2 horas

export default function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-slate-800">
      <Header onNav={scrollTo} />
      <Hero onCTA={() => scrollTo('reserva')} />
      <About id="nosotros" />
      <Subjects id="materias" />
      <Pricing id="precios" />
      <HowItWorks id="como-funciona" />
      <Testimonials id="testimonios" />
      <ContactForm id="reserva" />
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}

function Header({ onNav }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-semibold text-slate-900">Educando</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button className="hover:text-blue-700" onClick={() => onNav('nosotros')}>Quiénes somos</button>
          <button className="hover:text-blue-700" onClick={() => onNav('materias')}>Materias</button>
          <button className="hover:text-blue-700" onClick={() => onNav('como-funciona')}>Cómo funciona</button>
          <button className="hover:text-blue-700" onClick={() => onNav('reserva')}>Reservar</button>
        </nav>
        <button onClick={() => onNav('reserva')} className="hidden md:inline-flex rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium shadow-sm">
          Reservar una clase
        </button>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600 to-green-500 grid place-items-center shadow-sm">
      <span className="text-white font-extrabold tracking-tight">ED</span>
      {/* Si preferís "ED", reemplazá la línea de arriba por:
      <span className="text-white font-extrabold tracking-tight text-[0.9rem]">ED</span>
      */}
    </div>
  )
}

function Hero({ onCTA }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Clases particulares para alumnos del <span className="text-blue-700">Newman</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Exalumnos del colegio, hoy ayudando a los más chicos a aprender mejor. Uno estudia en UDESA y otro en la UTDT. Vamos a tu casa o damos la clase online.
          </p>
          <div className="mt-6 flex gap-3">
            <button onClick={onCTA} className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-medium shadow">
              Reservar una clase
            </button>
            <a href="#materias" className="rounded-2xl border border-slate-300 hover:border-slate-400 px-5 py-3 font-medium">
              Ver materias
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
            <li>Apoyo en tareas</li>
            <li>Preparación para pruebas</li>
            <li>Seguimiento personalizado</li>
            <li>A domicilio o online</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-yellow-100 to-green-100 border shadow-inner grid place-items-center p-6">
            <IllustrationBooks />
          </div>
        </div>
      </div>
    </section>
  )
}

function About({ id }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Quiénes somos</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Somos dos exalumnos del <strong>Colegio Cardenal Newman</strong>. Hoy estudiamos en la <strong>Universidad de San Andrés (UDESA)</strong> y en la <strong>Universidad Torcuato Di Tella (UTDT)</strong>. Nos apasiona enseñar y acompañar a los chicos de primaria del Newman para que ganen confianza y disfruten aprender.
          </p>
          <p className="mt-3 text-slate-700">Damos clases personalizadas, adaptadas al ritmo de cada alumno, y coordinamos horarios flexibles en el barrio.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ProfileCard nombre="Tomás Ricci Brochiero" descripcion="Exalumno Newman • Est. UDESA" />
          <ProfileCard nombre="Santiago Pereyra Iraola" descripcion="Exalumno Newman • Est. UTDT" />
        </div>
      </div>
    </section>
  )
}

function ProfileCard({ nombre, descripcion }) {
  return (
    <div className="rounded-3xl border bg-white p-5 shadow-sm">
      <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 grid place-items-center mb-4">
        <span className="text-4xl" role="img" aria-label="avatar">🎓</span>
      </div>
      <h3 className="font-semibold text-slate-900">{nombre}</h3>
      <p className="text-sm text-slate-600 mt-1">{descripcion}</p>
    </div>
  )
}

function Subjects({ id }) {
  const items = [
    { title: 'Matemática', desc: 'Cálculo, problemas, fracciones, geometría básica y preparación de pruebas.', icon: '➗' },
    { title: 'Lengua', desc: 'Comprensión lectora, ortografía, escritura y técnicas de estudio.', icon: '📚' },
    { title: 'Ciencias Sociales', desc: 'Historia y Geografía con resúmenes claros y actividades guiadas.', icon: '🌍' },
    { title: 'Ciencias Naturales', desc: 'Experimentos simples, método científico y apoyo para trabajos.', icon: '🧪' },
  ]
  return (
    <section id={id} className="bg-white/60 py-14 md:py-20 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Materias</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="text-4xl" aria-hidden>{it.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



function HowItWorks({ id }) {
  const steps = [
    { n: 1, t: 'Reservá tu clase', d: 'Completá el formulario con la materia y horario preferido.' },
    { n: 2, t: 'Te contactamos', d: 'Coordinamos detalles por WhatsApp o email.' },
    { n: 3, t: 'Vamos a tu casa o online', d: 'Llegamos puntuales con plan de clase personalizado.' },
  ]
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Cómo funciona</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((s) => (
          <div key={s.n} className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center font-bold">{s.n}</div>
            <h3 className="mt-3 font-semibold text-slate-900">{s.t}</h3>
            <p className="text-sm text-slate-600 mt-1">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Pricing({ id }) {
  const items = [
    { t: 'Clase de 1 hora',      mins: 60,  price: PRICE_60,  desc: 'Ideal para refuerzo puntual y tareas.' },
    { t: 'Clase de 1 hora y 30', mins: 90,  price: PRICE_90,  desc: 'Tiempo extra para preparar pruebas.' },
    { t: 'Clase de 2 horas',     mins: 120, price: PRICE_120, desc: 'Sesión completa con práctica guiada.' },
  ];

  const format = (n) => n.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

  return (
    <section id={id} className="bg-white/60 py-14 md:py-20 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Precios</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.mins} className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900">{it.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
              <p className="mt-4 text-3xl font-extrabold text-slate-900">{format(it.price)}</p>
              <p className="text-xs text-slate-500 mt-1">a domicilio / zona barrio</p>
              <a href="#reserva" className="mt-5 inline-block rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium shadow-sm">
                Reservar esta clase
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ id }) {
  const data = [
    { name: 'María, mamá de 4° grado', quote: 'Los profes súper pacientes y claros. Mi hijo mejoró sus notas y va con ganas a las clases.' },
    { name: 'Javier, papá de 6° grado', quote: 'Excelente coordinación y puntualidad. Se notó el acompañamiento antes de las pruebas.' },
  ]
  return (
    <section id={id} className="bg-white/60 py-14 md:py-20 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Testimonios</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {data.map((t, i) => (
            <figure key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm font-medium text-slate-900">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm({ id }) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const subjects = ['Matemática', 'Lengua', 'Ciencias Sociales', 'Ciencias Naturales']

const onSubmit = (e) => {
  e.preventDefault()
  const form = new FormData(e.currentTarget)
  const nombre = form.get('nombre')
  const edad = form.get('edad')
  const materia = form.get('materia')
  const tipoClase = form.get('tipoClase'); // 60 | 90 | 120
  const fecha = form.get('fecha')
  const hora = form.get('hora')
  const direccion = form.get('direccion')
  const contacto = form.get('contacto')
  const comentarios = form.get('comentarios') || ''

  const priceMap = { '60': PRICE_60, '90': PRICE_90, '120': PRICE_120 };
  const precio = priceMap[tipoClase] ?? 0;

  const etiquetaTipo = tipoClase === '60' ? '1 hora'
    : tipoClase === '90' ? '1 hora y media'
    : '2 horas';

  const resumen =
  `Nueva reserva — Clases del Barrio%0A%0A` +
  `Tipo de clase: ${etiquetaTipo} (${precio.toLocaleString('es-AR',{style:'currency',currency:'ARS'})})%0A` +
  `Nombre: ${nombre}%0A` +
  `Edad: ${edad}%0A` +
  `Materia: ${materia}%0A` +
  `Día/hora preferida: ${fecha} ${hora}%0A` +
  `Dirección: ${direccion}%0A` +
  `Contacto: ${contacto}%0A` +
  `Comentarios: ${comentarios}`;


  // 👉 Fuerza WhatsApp SIEMPRE
  const waNumber = WHATSAPP_NUMBER.replace(/[^\d]/g, '')
  const waUrl = `https://wa.me/${waNumber}?text=${resumen}`

  // Misma pestaña (recomendado)
  window.location.href = waUrl
  // Si preferís nueva pestaña: window.open(waUrl, '_blank')
}


  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Reservá tu clase</h2>
        <p className="mt-2 text-slate-700">Completá el formulario y te contactamos para coordinar.</p>

        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Nombre del alumno</label>
            <input name="nombre" required placeholder="Ej: Juan Pérez" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label className="text-sm font-medium">Edad</label>
            <input name="edad" type="number" min="5" max="13" required placeholder="Ej: 9" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>

          <div>
            <label className="text-sm font-medium">Materia</label>
            <select name="materia" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="">Elegí una materia</option>
              {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Tipo de clase</label>
            <select name="tipoClase" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="">Elegí duración</option>
              <option value="60">1 hora</option>
              <option value="90">1 hora y media</option>
              <option value="120">2 horas</option>
            </select>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="min-w-0 max-w-full">
              <label className="text-sm font-medium">Día</label>
              <input
                name="fecha"
                type="date"
                required
                className="mt-1 block w-full min-w-0 max-w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="min-w-0 max-w-full">
              <label className="text-sm font-medium">Hora</label>
              <input
                name="hora"
                type="time"
                required
                className="mt-1 block w-full min-w-0 max-w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Dirección</label>
            <input name="direccion" required placeholder="Calle y altura, barrio" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Datos de contacto</label>
            <input name="contacto" required placeholder="Ej: +54 9 11 1234 5678" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Comentarios (opcional)</label>
            <textarea name="comentarios" rows={4} placeholder="Contanos brevemente en qué necesitan ayuda" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>

          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" disabled={loading} className="rounded-2xl bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-medium shadow disabled:opacity-60">
              {loading ? 'Enviando...' : 'Enviar solicitud'}
            </button>
            <small className="text-slate-500">Respuesta dentro del mismo día hábil.</small>
          </div>

          {submitted && (
            <p className="md:col-span-2 text-green-700 mt-2">¡Gracias! Te vamos a contactar para confirmar.</p>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 items-start">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="font-semibold text-slate-900">Educando</p>
              <p className="text-sm text-slate-600">Exalumnos del Colegio Cardenal Newman</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-3">Aprender con confianza, de la mano de exalumnos del Newman.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Contacto</h4>
          <ul className="mt-2 text-sm text-slate-700 space-y-1">
            {CONTACT_EMAIL && (
              <li>Email: <a className="text-blue-700 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            )}
            {WHATSAPP_NUMBER && (
              <li>WhatsApp: <a className="text-blue-700 hover:underline" href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}`} target="_blank" rel="noreferrer">{WHATSAPP_NUMBER}</a></li>
            )}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Secciones</h4>
          <ul className="mt-2 text-sm text-slate-700 space-y-1">
            <li><a href="#nosotros" className="hover:underline">Quiénes somos</a></li>
            <li><a href="#materias" className="hover:underline">Materias</a></li>
            <li><a href="#como-funciona" className="hover:underline">Cómo funciona</a></li>
            <li><a href="#reserva" className="hover:underline">Reservar</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>Educando © 2025 – Exalumnos del Colegio Cardenal Newman</p>
          <div className="flex items-center gap-3">
            <a className="hover:underline" href="#">Instagram</a>
            <a className="hover:underline" href="#">Facebook</a>
            <a className="hover:underline" href="#">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloating() {
  if (!WHATSAPP_NUMBER) return null
  const msg = encodeURIComponent('Hola, quiero reservar una clase con Educando')
  const href = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}?text=${msg}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg grid place-items-center"
      aria-label="Abrir WhatsApp"
    >
      <span className="text-2xl" role="img" aria-label="whatsapp">💬</span>
    </a>
  )
}

function IllustrationBooks() {
  const SHIFT = 6; // solo cajas y textos, la línea no se mueve

  const r1 = { x: 20,  y: 120, w: 80,  h: 50,  fill: '#bfdbfe', label: 'Matemática' };
  const r2 = { x: 110, y: 100, w: 90,  h: 70,  fill: '#bbf7d0', label: 'Lengua' };
  const r3 = { x: 210, y: 80,  w: 70,  h: 90,  fill: '#fef08a', label: 'Ciencias' };
  const baselineY = 170; // NO se toca

  const Box = ({ x, y, w, h, fill, label }) => (
    <>
      <rect x={x} y={y - SHIFT} width={w} height={h} rx="8" fill={fill} />
      <text
        x={x + w / 2}
        y={y - SHIFT + h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        fontWeight="600"
        fill="#334155"
        style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
      >
        {label}
      </text>
    </>
  );

  return (
    <svg viewBox="0 0 300 200" className="w-full h-auto" aria-hidden>
      <Box {...r1} />
      <Box {...r2} />
      <Box {...r3} />
      {/* Línea base sin mover */}
      <line x1="20" y1={baselineY} x2="280" y2={baselineY} stroke="#cbd5e1" strokeWidth="4" />
    </svg>
  );
}
