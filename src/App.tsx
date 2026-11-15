import { useState } from 'react';
import episodesData from './episodes.json';
import { TiltCard3D } from './components/TiltCard3D';
import { 
  Clock, 
  Play,
  Code2,
  Sparkles,
  GitBranch,
  Search,
  BookOpen,
  Boxes,
  Radio,
  ExternalLink
} from 'lucide-react';

interface Episode {
  id: string;
  title: string;
  description: string;
  track: string;
  track_slug: string;
  youtube_url: string;
  video_id: string;
  thumbnail_url: string;
  github_repo: string;
  release_date: string;
  duration: string;
  stack: string[];
  metrics: Record<string, string | undefined>;
  featured?: boolean;
}

export function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [activeTab, setActiveTab] = useState<'episodes' | 'starters' | 'standards'>('episodes');
  const [filter, setFilter] = useState<'all' | 'multi-agent' | 'n8n'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const episodes = episodesData as unknown as Episode[];

  const filteredEpisodes = episodes.filter(ep => {
    const matchesTrack = filter === 'all' || ep.track_slug === filter;
    const matchesSearch = searchQuery === '' || 
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.stack.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTrack && matchesSearch;
  });

  const t = {
    en: {
      navEpisodes: "Episodes & Demos",
      navStarters: "Open Source Starters",
      navStandards: "Engineering Standards",
      navConsulting: "B2B Consulting",
      heroBadge: "TIER-1 OPEN SOURCE & DISTRIBUTED AGENT LAB",
      heroTitle1: "Production Multi-Agent Systems & ",
      heroHighlight: "Deterministic Workflows.",
      heroSubtitle: "We benchmark and build resilient multi-agent swarms for enterprise environments. Microservices over monolithic bloat, zero UTC drift, and reproducible open-source starters.",
      statEpisodes: "2 Production Videos",
      statStarters: "100% Tested Starters",
      statReliability: "Zero UTC Drift",
      statProtocol: "MCP Standardized",
      searchPlaceholder: "Search architectures, protocols, libraries (e.g. MCP, FastAPI, n8n, ZoneInfo)...",
      filterAll: "All Releases",
      filterAgent: "Multi-Agent Systems",
      filterN8n: "Enterprise n8n",
      cardWatch: "Watch Video",
      cardClone: "Clone Code",
      released: "RELEASED",
      startersTitle: "Official Open Source Repository Catalog",
      startersSubtitle: "Tested templates, manifests, and workers designed for horizontal scaling.",
      standardsTitle: "Nexos AI Lab Engineering Standards",
      standardsSubtitle: "Core architectural invariants governing our YouTube pipeline and codebases.",
      rule1Title: "1. Protocol Decoupling via Model Context Protocol (MCP)",
      rule1Desc: "Never hardcode vendor SDKs inside business logic. Tools must be exposed via standardized STDIO/SSE JSON-RPC manifests to allow swapping LLM models with zero refactoring.",
      rule2Title: "2. Deterministic Time & ZoneInfo Normalization",
      rule2Desc: "All agent calendar bookings and scheduled tasks must execute strict timezone conversions using Python native zoneinfo, preventing silent UTC-drift bugs.",
      rule3Title: "3. AsyncIO Concurrency & Cascade Protection",
      rule3Desc: "Workers execute concurrently via asyncio.gather with explicit timeouts and isolated error boundaries, preventing single-worker crashes from collapsing the swarm.",
      rule4Title: "4. Literate Documentation & Verified Pytest Suites",
      rule4Desc: "Every open-source starter repository must ship with automated verification tests and a Mermaid architectural flowchart.",
      consultingTitle: "Need Custom Multi-Agent Pipelines in Your Enterprise?",
      consultingSubtitle: "We partner with engineering organizations to architect and deploy deterministic agent swarms, private MCP servers, and enterprise automation infrastructure.",
      b2bFeature1: "Private Model Context Protocol (MCP) server integration",
      b2bFeature2: "Deterministic agent orchestration with zero context runaway",
      b2bFeature3: "Self-healing enterprise n8n cluster deployments & webhook processing",
      scheduleBtn: "Schedule Technical Consultation",
      footerDesc: "Production-grade AI engineering. Open-source under MIT License."
    },
    es: {
      navEpisodes: "Episodios y Demos",
      navStarters: "Repositorios Starters",
      navStandards: "Estándares de Ingeniería",
      navConsulting: "Consultoría B2B",
      heroBadge: "LABORATORIO DE AGENTES DISTRIBUIDOS Y CÓDIGO ABIERTO TIER-1",
      heroTitle1: "Sistemas Multi-Agente en Producción y ",
      heroHighlight: "Flujos Deterministas.",
      heroSubtitle: "Diseñamos y medimos enjambres de agentes resilientes para entornos empresariales. Microservicios sobre monolitos inflados, cero desfase de zonas horarias y starters reproducibles.",
      statEpisodes: "2 Videos en Producción",
      statStarters: "Starters 100% Probados",
      statReliability: "Cero Desfase UTC",
      statProtocol: "Estándar MCP",
      searchPlaceholder: "Buscar arquitecturas, protocolos o librerías (ej. MCP, FastAPI, n8n, ZoneInfo)...",
      filterAll: "Todos los Episodios",
      filterAgent: "Sistemas Multi-Agente",
      filterN8n: "Automatización n8n",
      cardWatch: "Ver Video",
      cardClone: "Clonar Código",
      released: "PUBLICADO",
      startersTitle: "Catálogo Oficial de Repositorios Open Source",
      startersSubtitle: "Plantillas probadas, manifiestos y workers diseñados para escalar horizontalmente.",
      standardsTitle: "Estándares de Ingeniería de Nexos AI Lab",
      standardsSubtitle: "Invariantes arquitectónicas obligatorias que rigen nuestro pipeline y código.",
      rule1Title: "1. Desacoplamiento de Protocolo vía Model Context Protocol (MCP)",
      rule1Desc: "Prohibido acoplar SDKs propietarios a la lógica de negocio. Las herramientas se exponen mediante manifiestos estandarizados JSON-RPC (STDIO/SSE) para cambiar modelos sin refactorizar.",
      rule2Title: "2. Tiempo Determinista y Normalización con ZoneInfo",
      rule2Desc: "Todo agendamiento de agentes debe convertir zonas horarias estrictamente con zoneinfo de Python nativo, eliminando bugs silenciosos de desfase UTC.",
      rule3Title: "3. Concurrencia AsyncIO y Aislamiento de Fallos",
      rule3Desc: "Los workers ejecutan concurrentemente con asyncio.gather, timeouts explícitos y aislamiento de errores, evitando que la caída de un worker derrumbe el swarm.",
      rule4Title: "4. Documentación Exhaustiva y Suites de Prueba en Pytest",
      rule4Desc: "Todo repositorio starter debe incluir tests automatizados obligatorios y un diagrama Mermaid de arquitectura técnica.",
      consultingTitle: "¿Necesitas Pipelines Multi-Agente a Medida en tu Empresa?",
      consultingSubtitle: "Trabajamos junto a equipos técnicos para diseñar e implementar enjambres deterministas, servidores MCP privados y arquitectura de automatización empresarial.",
      b2bFeature1: "Desarrollo de servidores privados Model Context Protocol (MCP)",
      b2bFeature2: "Orquestación determinista de agentes con cero saturación de contexto",
      b2bFeature3: "Despliegue de clústeres resilientes de n8n y procesamiento de webhooks",
      scheduleBtn: "Agendar Consulta Técnica",
      footerDesc: "Ingeniería de Inteligencia Artificial para Producción. Licencia MIT."
    }
  }[lang];

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Top Navbar */}
      <header style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(7, 10, 18, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Brand Logo & Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              position: 'relative',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 0 25px rgba(0, 229, 255, 0.4)',
              border: '1px solid rgba(0, 229, 255, 0.5)',
              background: '#0B0F19'
            }}>
              <img 
                src="/logo.png" 
                alt="Nexos AI Lab" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: 900, fontSize: '18px', letterSpacing: '-0.5px' }}>
                  NEXOS <span style={{ color: '#00E5FF' }}>AI LAB</span>
                </span>
                <span style={{
                  fontSize: '9px',
                  fontWeight: 800,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0, 229, 255, 0.12)',
                  color: '#00E5FF',
                  border: '1px solid rgba(0, 229, 255, 0.3)',
                  letterSpacing: '0.8px'
                }}>
                  PLATFORM
                </span>
              </div>
              <div style={{ fontSize: '11px', color: '#9CA3AF' }}>
                Autonomous Architectures & Open Source Starters
              </div>
            </div>
          </div>

          {/* Scalable Navigation Tabs */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '10px',
            padding: '4px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <button
              onClick={() => setActiveTab('episodes')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: 700,
                backgroundColor: activeTab === 'episodes' ? '#00E5FF' : 'transparent',
                color: activeTab === 'episodes' ? '#070A12' : '#9CA3AF',
                transition: 'all 0.15s ease'
              }}
            >
              <Radio size={14} />
              <span>{t.navEpisodes}</span>
            </button>

            <button
              onClick={() => setActiveTab('starters')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: 700,
                backgroundColor: activeTab === 'starters' ? '#00E5FF' : 'transparent',
                color: activeTab === 'starters' ? '#070A12' : '#9CA3AF',
                transition: 'all 0.15s ease'
              }}
            >
              <Boxes size={14} />
              <span>{t.navStarters}</span>
            </button>

            <button
              onClick={() => setActiveTab('standards')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: 700,
                backgroundColor: activeTab === 'standards' ? '#00E5FF' : 'transparent',
                color: activeTab === 'standards' ? '#070A12' : '#9CA3AF',
                transition: 'all 0.15s ease'
              }}
            >
              <BookOpen size={14} />
              <span>{t.navStandards}</span>
            </button>
          </nav>

          {/* Social Links & Language Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '2px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <button
                onClick={() => setLang('en')}
                style={{
                  padding: '4px 9px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 800,
                  backgroundColor: lang === 'en' ? '#00E5FF' : 'transparent',
                  color: lang === 'en' ? '#070A12' : '#9CA3AF'
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                style={{
                  padding: '4px 9px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 800,
                  backgroundColor: lang === 'es' ? '#00E5FF' : 'transparent',
                  color: lang === 'es' ? '#070A12' : '#9CA3AF'
                }}
              >
                ES
              </button>
            </div>

            <a 
              href="https://www.youtube.com/@NexosAILab" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                color: '#EF4444',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}
            >
              <Play size={13} fill="#EF4444" />
              <span>YouTube</span>
            </a>

            <a 
              href="https://github.com/NexosAILab" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#F3F4F6',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <GitBranch size={13} color="#00E5FF" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero Header */}
      <section style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '60px 24px 40px 24px',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '5px 12px',
          borderRadius: '999px',
          backgroundColor: 'rgba(0, 229, 255, 0.08)',
          border: '1px solid rgba(0, 229, 255, 0.3)',
          color: '#00E5FF',
          fontSize: '11px',
          fontWeight: 800,
          marginBottom: '20px',
          letterSpacing: '0.6px'
        }}>
          <Sparkles size={13} />
          <span>{t.heroBadge}</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(32px, 4.5vw, 54px)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-1.8px',
          marginBottom: '18px',
          maxWidth: '880px'
        }}>
          {t.heroTitle1}
          <span style={{ 
            background: 'linear-gradient(90deg, #00E5FF 0%, #38BDF8 60%, #818CF8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {t.heroHighlight}
          </span>
        </h1>

        <p style={{
          fontSize: '17px',
          color: '#9CA3AF',
          maxWidth: '720px',
          lineHeight: 1.6,
          marginBottom: '32px'
        }}>
          {t.heroSubtitle}
        </p>

        {/* Scalable Architecture KPI Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '14px',
          maxWidth: '960px'
        }}>
          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            padding: '16px 20px',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '11px', color: '#00E5FF', fontWeight: 800 }}>TRACK 01</div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', marginTop: '4px' }}>Python + MCP</div>
            <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Distributed Micro-Agents</div>
          </div>

          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            padding: '16px 20px',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '11px', color: '#F59E0B', fontWeight: 800 }}>TRACK 02</div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', marginTop: '4px' }}>Enterprise n8n</div>
            <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Self-healing automations</div>
          </div>

          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            padding: '16px 20px',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 800 }}>RELIABILITY</div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', marginTop: '4px' }}>Zero UTC Drift</div>
            <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Native ZoneInfo conversion</div>
          </div>

          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '16px 20px',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '11px', color: '#D1D5DB', fontWeight: 800 }}>OPEN SOURCE</div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', marginTop: '4px' }}>MIT Repositories</div>
            <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Docker & pytest ready</div>
          </div>
        </div>
      </section>

      {/* Main Content Pane Router */}
      <main style={{ maxWidth: '1360px', margin: '0 auto', padding: '10px 24px 80px 24px' }}>
        
        {/* TAB 1: EPISODES CATALOG */}
        {activeTab === 'episodes' && (
          <div>
            {/* Search Bar + Track Filter Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '20px',
              marginBottom: '32px'
            }}>
              {/* Live Search Input */}
              <div style={{
                position: 'relative',
                flex: '1 1 340px',
                maxWidth: '460px'
              }}>
                <Search size={16} color="#6B7280" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  style={{
                    width: '100%',
                    padding: '10px 14px 10px 40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFF',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Track Filters */}
              <div style={{ display: 'flex', gap: '8px', backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '4px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <button
                  onClick={() => setFilter('all')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    backgroundColor: filter === 'all' ? '#00E5FF' : 'transparent',
                    color: filter === 'all' ? '#070A12' : '#9CA3AF'
                  }}
                >
                  {t.filterAll} ({episodes.length})
                </button>
                <button
                  onClick={() => setFilter('multi-agent')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    backgroundColor: filter === 'multi-agent' ? '#00E5FF' : 'transparent',
                    color: filter === 'multi-agent' ? '#070A12' : '#9CA3AF'
                  }}
                >
                  {t.filterAgent}
                </button>
                <button
                  onClick={() => setFilter('n8n')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    backgroundColor: filter === 'n8n' ? '#00E5FF' : 'transparent',
                    color: filter === 'n8n' ? '#070A12' : '#9CA3AF'
                  }}
                >
                  {t.filterN8n}
                </button>
              </div>
            </div>

            {/* Episode Grid with 3D Interactive Tilt Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '26px'
            }}>
              {filteredEpisodes.map(ep => (
                <TiltCard3D key={ep.id} maxTilt={5}>
                  <div 
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.75)',
                      backdropFilter: 'blur(20px)',
                      border: ep.featured ? '1px solid rgba(0, 229, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      boxShadow: ep.featured ? '0 15px 40px rgba(0, 229, 255, 0.15)' : '0 10px 30px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    {/* Thumbnail Header */}
                    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#000' }}>
                      <img 
                        src={ep.thumbnail_url} 
                        alt={ep.title}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        backgroundColor: 'rgba(7, 10, 18, 0.85)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <Clock size={12} color="#00E5FF" />
                        <span>{ep.duration}</span>
                      </div>

                      <div style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '12px',
                        backgroundColor: ep.track_slug === 'multi-agent' ? '#00E5FF' : '#F59E0B',
                        color: '#070A12',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {ep.track}
                      </div>
                    </div>

                    {/* Body Content */}
                    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '8px' }}>
                        {t.released} {ep.release_date}
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1.35, marginBottom: '12px' }}>
                        {ep.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                        {ep.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                        {ep.stack.map(st => (
                          <span 
                            key={st}
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              padding: '3px 8px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              fontWeight: 600,
                              color: '#D1D5DB'
                            }}
                          >
                            {st}
                          </span>
                        ))}
                      </div>

                      {/* Performance Metrics */}
                      <div style={{
                        backgroundColor: 'rgba(7, 10, 18, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '10px',
                        padding: '12px',
                        marginBottom: '20px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '10px',
                        fontSize: '12px'
                      }}>
                        {Object.entries(ep.metrics).filter(([_, v]) => Boolean(v)).map(([k, v]) => (
                          <div key={k}>
                            <div style={{ color: '#6B7280', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                              {k.replace('_', ' ')}
                            </div>
                            <div style={{ fontWeight: 800, color: '#00E5FF', fontSize: '13px', marginTop: '2px' }}>
                              {v}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <a
                          href={ep.youtube_url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            padding: '10px',
                            borderRadius: '8px',
                            backgroundColor: '#EF4444',
                            color: '#FFF',
                            fontSize: '13px',
                            fontWeight: 700
                          }}
                        >
                          <Play size={13} fill="#FFF" />
                          <span>{t.cardWatch}</span>
                        </a>
                        <a
                          href={ep.github_repo}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            padding: '10px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.16)',
                            color: '#FFF',
                            fontSize: '13px',
                            fontWeight: 700
                          }}
                        >
                          <Code2 size={14} color="#00E5FF" />
                          <span>{t.cardClone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard3D>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: STARTERS REPO DIRECTORY */}
        {activeTab === 'starters' && (
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 900 }}>{t.startersTitle}</h2>
              <p style={{ color: '#9CA3AF', marginTop: '6px' }}>{t.startersSubtitle}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
              <TiltCard3D maxTilt={5}>
                <div style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(0, 229, 255, 0.3)',
                  borderRadius: '14px',
                  padding: '28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#00E5FF', textTransform: 'uppercase' }}>
                      Python 3.12 • MCP Core
                    </span>
                    <GitBranch size={16} color="#00E5FF" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>
                    NexosAILab/multi-agent-mcp-starter
                  </h3>
                  <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: 1.6, flex: 1, marginBottom: '20px' }}>
                    Production-ready template for distributed micro-agents in Python using Model Context Protocol (MCP), FastAPI, asyncio concurrency, and zoneinfo calendar synchronization.
                  </p>
                  <a
                    href="https://github.com/NexosAILab/multi-agent-mcp-starter"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #00E5FF 0%, #0091FF 100%)',
                      color: '#070A12',
                      fontWeight: 800,
                      fontSize: '13px'
                    }}
                  >
                    <span>Inspect Repository on GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </TiltCard3D>

              <TiltCard3D maxTilt={5}>
                <div style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '14px',
                  padding: '28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#F59E0B', textTransform: 'uppercase' }}>
                      n8n • Webhooks • Low-Code
                    </span>
                    <Boxes size={16} color="#F59E0B" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>
                    NexosAILab/autonomous-agent-starter
                  </h3>
                  <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: 1.6, flex: 1, marginBottom: '20px' }}>
                    Self-healing autonomous agent starter workflow for n8n. Includes production webhook ingestion, payload normalization, error interceptors, and state persistence.
                  </p>
                  <a
                    href="https://github.com/NexosAILab/autonomous-agent-starter"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.16)',
                      color: '#FFF',
                      fontWeight: 800,
                      fontSize: '13px'
                    }}
                  >
                    <span>Inspect Repository on GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </TiltCard3D>
            </div>
          </div>
        )}

        {/* TAB 3: ENGINEERING STANDARDS */}
        {activeTab === 'standards' && (
          <div style={{ maxWidth: '960px' }}>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 900 }}>{t.standardsTitle}</h2>
              <p style={{ color: '#9CA3AF', marginTop: '6px' }}>{t.standardsSubtitle}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#00E5FF', marginBottom: '8px' }}>
                  {t.rule1Title}
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '14px', lineHeight: 1.6 }}>
                  {t.rule1Desc}
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#10B981', marginBottom: '8px' }}>
                  {t.rule2Title}
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '14px', lineHeight: 1.6 }}>
                  {t.rule2Desc}
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#F59E0B', marginBottom: '8px' }}>
                  {t.rule3Title}
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '14px', lineHeight: 1.6 }}>
                  {t.rule3Desc}
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#818CF8', marginBottom: '8px' }}>
                  {t.rule4Title}
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '14px', lineHeight: 1.6 }}>
                  {t.rule4Desc}
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '32px 24px',
        backgroundColor: 'rgba(7, 10, 18, 0.95)',
        fontSize: '13px',
        color: '#6B7280'
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.png" alt="Nexos" style={{ width: '22px', height: '22px', borderRadius: '4px' }} />
            <span>© 2026 <strong>Nexos AI Lab</strong>. {t.footerDesc}</span>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="https://github.com/NexosAILab" target="_blank" rel="noreferrer" style={{ color: '#9CA3AF', fontWeight: 600 }}>GitHub Org</a>
            <a href="https://www.youtube.com/@NexosAILab" target="_blank" rel="noreferrer" style={{ color: '#9CA3AF', fontWeight: 600 }}>YouTube</a>
            <a href="https://github.com/htillero" target="_blank" rel="noreferrer" style={{ color: '#9CA3AF', fontWeight: 600 }}>Creator Profile</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
