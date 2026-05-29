import { useState, useRef, useEffect } from 'react'
import chatbotIcon from '../assets/img/Chatbot.webp'

let cachedMessages = null

const MENU_RESPONSE = 'Sobre o que você gostaria de saber mais na LGTec? 🤔\n\n🟢 Serviços\n🟠 Diferenciais\n🟣 Contato\n\nÉ só digitar o tema! 😉'

const knowledge = [
  {
    id: 'about',
    keys: ['lgtec', 'empresa', 'quem', 'sobre', 'agencia', 'sobre a lgtec', 'quem somos'],
    answer:
      'A LGTec é uma agência de desenvolvimento do Rio de Janeiro que desenvolve sites, sistemas, aplicativos e presença digital para empresas que querem crescer na internet. Nós focamos em resultados, design moderno, performance e atendimento personalizado.\n\nQuer saber nossos serviços ou como podemos ajudar seu negócio?',
    section: 'quem-somos',
    suggest: 'services',
  },
  {
    id: 'name',
    keys: ['por que o nome', 'porque o nome', 'nome da lgtec', 'nome lgtec', 'lgtec nome'],
    answer:
      'LG vem do Luiz Gabriel, fundador da agência, e Tec é de tecnologia. Por isso o nome LGTec representa o trabalho de tecnologia e desenvolvimento feito pela equipe.',
    section: 'quem-somos',
    suggest: 'services',
  },
  {
    id: 'services',
    keys: ['servico', 'servicos', 'site', 'sistema', 'aplicativo', 'app', 'design', 'digital', 'redes sociais', 'marketing'],
    answer:
      'Nossa expertise inclui desenvolvimento de sites institucionais, sistemas personalizados, aplicativos e estratégias de presença digital. Cada projeto é pensado para gerar resultado real e autoridade online.\n\nQuer falar direto com a gente?',
    section: 'servicos',
    suggest: 'contact',
  },
  {
    id: 'contact',
    keys: ['contato', 'email', 'telefone', 'whatsapp', 'instagram', 'rede', 'social'],
    answer:
      'Você pode falar com a LGTec por:',
    section: 'contato',
    actions: [
      { label: 'WhatsApp', url: 'https://wa.me/5521999329346' },
      { label: 'Instagram', url: 'https://www.instagram.com/lgtec.oficial' },
      { label: 'E-mail', url: 'mailto:contato@lgtec.com.br' },
    ],
  },
  {
    id: 'location',
    keys: ['rio', 'rio de janeiro', 'rj', 'localizacao', 'onde', 'cidade'],
    answer:
      'A LGTec está baseada no Rio de Janeiro, RJ, e atende clientes em todo o Brasil.\n\nQuer saber quais serviços oferecemos ou como podemos ajudar seu negócio?',
    section: 'contato',
    suggest: 'services',
  },
  {
    id: 'differentials',
    keys: ['diferencial', 'diferenciais', 'porque', 'por que', 'motivo', 'vantagem', 'porque'],
    answer:
      'A LGTec oferece atendimento próximo, soluções personalizadas, design moderno e foco em performance. Nosso diferencial é alinhar tecnologia e estratégia para que o projeto traga resultado real ao seu negócio.',
    section: 'quem-somos',
    suggest: 'services',
  },
  {
    id: 'greeting',
    keys: ['oi', 'ola', 'hello', 'hi', 'hey', 'bom dia', 'boa tarde', 'boa noite'],
    answer:
      'Olá! 👋 Eu sou o assistente da LGTec. Posso te contar sobre serviços, diferenciais, contato ou como a empresa trabalha. Pergunte qualquer coisa!',
    suggest: 'menu',
  },
  {
    id: 'thanks',
    keys: ['obrigado', 'valeu', 'thanks', 'brigado', 'agradeco', 'grato'],
    answer: 'Por nada! 😊 Se quiser, posso te mostrar os canais de contato da LGTec ou contar sobre nossos serviços.',
  },
  {
    id: 'soft',
    keys: ['bom', 'otimo', 'legal', 'show', 'top', 'excelente', 'maravilha'],
    answer:
      'Que bom que você gostou! 😄 A LGTec está pronta para ajudar no seu próximo projeto digital. Posso enviar o contato ou mostrar nossos serviços?',
    suggest: 'contact',
  },
]

const AFFIRMATIVE_WORDS = ['sim', 'claro', 'pode', 'quero', 'beleza', 'ok', 'show', 'top', 'vamos', 'bora', 'yes', 'yeah', 'yep']

const fallback =
  'Não tenho certeza sobre isso. Tente perguntar sobre serviços, diferenciais, contato ou o que é a LGTec.'

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()
}

function isAffirmative(input) {
  const normalized = normalize(input)
  if (normalized.length > 30) return false
  return AFFIRMATIVE_WORDS.some((word) => normalized === word || normalized === `${word}!`)
}

function findById(id) {
  return knowledge.find((item) => item.id === id)
}

function findByInput(input) {
  const lower = normalize(input)
  let bestMatch = null
  let bestScore = 0

  for (const item of knowledge) {
    let score = 0
    for (const key of item.keys) {
      if (lower.includes(normalize(key))) {
        score += key.length
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = item
    }
  }

  return bestMatch
}

function scrollToSection(sectionId) {
  if (!sectionId) return
  const element = document.getElementById(sectionId)
  if (!element) return
  const offset = 80
  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(() =>
    cachedMessages ?? [
      {
        from: 'bot',
        text: 'Olá! 👋 Eu sou o assistente da LGTec. Pergunte sobre nossos serviços, diferenciais, contato ou como podemos ajudar seu negócio.',
      },
    ],
  )
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [lastSuggest, setLastSuggest] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const endRef = useRef(null)
  const inputRef = useRef(null)
  const chatRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth <= 640)
    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => window.removeEventListener('resize', updateMobile)
  }, [])

  useEffect(() => {
    cachedMessages = messages
  }, [messages])

  useEffect(() => {
    if (!open) return
    const handleOutsideClick = (event) => {
      if (chatRef.current?.contains(event.target) || btnRef.current?.contains(event.target)) return
      setOpen(false)
    }
    document.addEventListener('pointerdown', handleOutsideClick)
    return () => document.removeEventListener('pointerdown', handleOutsideClick)
  }, [open])

  const getResponse = (text) => {
    if (isAffirmative(text)) {
      if (lastSuggest) {
        const suggested = findById(lastSuggest)
        if (suggested) {
          setLastSuggest(suggested.suggest || null)
          scrollToSection(suggested.section)
          return suggested
        }
      }
      return { text: MENU_RESPONSE }
    }

    const match = findByInput(text)
    if (match) {
      setLastSuggest(match.suggest || null)
      scrollToSection(match.section)
      return match
    }

    setLastSuggest(null)
    return { text: fallback }
  }

  const send = () => {
    const text = input.trim()
    if (!text) return

    setMessages((prev) => [...prev, { from: 'user', text }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const response = getResponse(text)
      const botMessage = {
        from: 'bot',
        text: response.text || response.answer || fallback,
        actions: response.actions || [],
      }
      setMessages((prev) => [...prev, botMessage])
      setTyping(false)
    }, 600 + Math.random() * 400)
  }

  const bg = '#ffffff'
  const cardBg = 'rgba(15,23,42,0.12)'
  const borderColor = 'rgba(15,23,42,0.1)'
  const textColor = '#0f172a'
  const subColor = '#475569'
  const openButtonSize = isMobile ? '3rem' : '3.5rem'
  const chatWidth = isMobile ? 'calc(100vw - 1.5rem)' : 'min(360px, calc(100vw - 2rem))'
  const chatHeight = isMobile ? '82vh' : '72vh'
  const headerPadding = isMobile ? '0.85rem 0.85rem 0.65rem' : '1rem 1rem 0.75rem'
  const messageFontSize = isMobile ? '0.82rem' : '0.875rem'
  const inputFontSize = isMobile ? '0.85rem' : '0.9rem'
  const inputPadding = isMobile ? '0.65rem 0.9rem' : '0.75rem 1rem'
  const actionPadding = isMobile ? '0.55rem 0.85rem' : '0.6rem 0.95rem'
  const chatBottomOffset = isMobile ? '4.5rem' : '5.5rem'
  const chatLeftOffset = isMobile ? '0.75rem' : '1.5rem'

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Fechar chat' : 'Abrir chat'}
        style={{
          position: 'fixed',
          left: chatLeftOffset,
          bottom: '1.5rem',
          zIndex: 1000,
          width: openButtonSize,
          height: openButtonSize,
          borderRadius: '9999px',
          border: 'none',
          background: '#122a5e',
          color: '#fff',
          fontSize: '0',
          cursor: 'pointer',
          boxShadow: '0 18px 42px rgba(79,70,229,0.24)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {open ? (
          '✖'
        ) : (
          <img
            src={chatbotIcon}
            alt="Chatbot"
            style={{ width: isMobile ? '1.6rem' : '1.9rem', height: isMobile ? '2rem' : '2.4rem', objectFit: 'cover' }}
          />
        )}
      </button>

      {open && (
        <div
          ref={chatRef}
          style={{
            position: 'fixed',
            left: chatLeftOffset,
            bottom: chatBottomOffset,
            width: chatWidth,
            maxHeight: chatHeight,
            zIndex: 1000,
            borderRadius: '1.25rem',
            overflow: 'hidden',
            background: bg,
            border: `1px solid ${borderColor}`,
            boxShadow: '0 30px 60px rgba(15,23,42,0.18)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              padding: headerPadding,
              background: '#eef2ff',
              borderBottom: `1px solid ${borderColor}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '9999px',
                  background: '#c7d2fe',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <img
                  src={chatbotIcon}
                  alt="Assistente LGTec"
                  style={{ width: isMobile ? '1.2rem' : '1.4rem', height: isMobile ? '1.6rem' : '1.8rem', objectFit: 'cover' }}
                />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 600, color: textColor }}>Assistente LGTec</p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: subColor }}>Pergunte sobre serviços, diferenciais ou contato.</p>
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1rem',
              background: '#f8fafc',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '86%',
                  }}
                >
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: msg.from === 'user' ? '1rem 1rem 0.25rem 1rem' : '1rem 1rem 1rem 0.25rem',
                      background: msg.from === 'user' ? '#4338ca' : cardBg,
                      color: msg.from === 'user' ? '#fff' : textColor,
                      fontSize: messageFontSize,
                      lineHeight: 1.5,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {msg.text}
                    {msg.img && (
                      <img
                        src={msg.img}
                        alt="Imagem do bot"
                        style={{
                          display: 'block',
                          width: '100%',
                          marginTop: '0.75rem',
                          borderRadius: '1rem',
                          boxShadow: '0 18px 42px rgba(15,23,42,0.18)',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                    {msg.actions?.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
                        {msg.actions.map((action, actionIndex) => (
                          <a
                            key={actionIndex}
                            href={action.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: actionPadding,
                              borderRadius: '9999px',
                              background: '#4f46e5',
                              color: '#fff',
                              textDecoration: 'none',
                              fontSize: isMobile ? '0.82rem' : '0.85rem',
                              fontWeight: 600,
                            }}
                          >
                            {action.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {typing && (
                <div style={{ display: 'flex', gap: '0.25rem', alignSelf: 'flex-start' }}>
                  <div style={{ width: '0.55rem', height: '0.55rem', borderRadius: '9999px', background: subColor, opacity: 0.7 }} />
                  <div style={{ width: '0.55rem', height: '0.55rem', borderRadius: '9999px', background: subColor, opacity: 0.7 }} />
                  <div style={{ width: '0.55rem', height: '0.55rem', borderRadius: '9999px', background: subColor, opacity: 0.7 }} />
                </div>
              )}

              <div ref={endRef} />
            </div>
          </div>

          <div style={{ padding: '0.75rem 1rem', borderTop: `1px solid ${borderColor}`, background: '#fff' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && send()}
                placeholder="Digite sua pergunta..."
                style={{
                  flex: 1,
                  padding: inputPadding,
                  borderRadius: '9999px',
                  border: `1px solid ${borderColor}`,
                  background: '#f8fafc',
                  color: textColor,
                  outline: 'none',
                  fontSize: inputFontSize,
                }}
              />
              <button
                onClick={send}
                style={{
                  width: '3rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: '#4f46e5',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
