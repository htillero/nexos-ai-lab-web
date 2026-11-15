import { useState } from 'react';
import episodesData from './episodes.json';
import { TiltCard3D } from './components/TiltCard3D';
import { 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  Mail,
  Play,
  Code2,
  Cpu,
  ArrowUpRight,
  Sparkles,
  GitBranch,
  Terminal as TerminalIcon,
  ChevronRight
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
  const [filter, setFilter] = useState<'all' | 'multi-agent' | 'n8n'>('all');
  const episodes = episodesData as unknown as Episode[];

  const filteredEpisodes = filter === 'all' 
    ? episodes 
    : episodes.filter(ep => ep.track_slug === filter);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Top Navbar with Official Brand Logo */}
      <header style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(7, 10, 18, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Brand Logo & Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              position: 'relative',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 0 25px rgba(0, 229, 255, 0.35)',
              border: '1px solid rgba(0, 229, 255, 0.4)',
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
                <span style={{ fontWeight: 900, fontSize: '19px', letterSpacing: '-0.5px' }}>
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
                  ENGINEERING
                </span>
              </div>
              <div style={{ fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.5px' }}>
                Autonomous Architectures & Open Source Starters
              </div>
            </div>
          </div>

          {/* Social / Channel Quick Access */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a 
              href="https://www.youtube.com/@NexosAILab" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                color: '#EF4444',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              <Play size={14} fill="#EF4444" />
              <span>YouTube Channel</span>
            </a>
            <a 
              href="https://github.com/NexosAILab" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#F3F4F6',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <GitBranch size={15} color="#00E5FF" />
              <span>GitHub Org</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '80px 24px 60px 24px',
        position: 'relative'
      }}>
        {/* Glow orb background */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            backgroundColor: 'rgba(0, 229, 255, 0.08)',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            color: '#00E5FF',
            fontSize: '12px',
            fontWeight: 700,
            marginBottom: '28px',
            letterSpacing: '0.6px'
          }}>
            <Sparkles size={14} />
            <span>TIER-1 OPEN SOURCE & INDUSTRIAL AGENT ENGINEERING</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(38px, 5.5vw, 62px)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-2px',
            marginBottom: '24px',
            maxWidth: '920px'
          }}>
            Production Multi-Agent Systems &{' '}
            <span style={{ 
              background: 'linear-gradient(90deg, #00E5FF 0%, #38BDF8 60%, #818CF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Deterministic Workflows.
            </span>
          </h1>

          <p style={{
            fontSize: '19px',
            color: '#9CA3AF',
            maxWidth: '740px',
            lineHeight: 1.6,
            marginBottom: '40px'
          }}>
            We build and benchmark resilient agent swarms for enterprise environments. Cutting through framework bloat to deliver sub-second tool routing, zero UTC drift, and reproducible open-source starters.
          </p>

          {/* Quick CTA Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#catalog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #00E5FF 0%, #0091FF 100%)',
                color: '#070A12',
                fontWeight: 800,
                fontSize: '14px',
                boxShadow: '0 0 25px rgba(0, 229, 255, 0.35)'
              }}
            >
              <span>Explore Code Starters</span>
              <ChevronRight size={16} strokeWidth={3} />
            </a>

            <a
              href="https://github.com/NexosAILab/multi-agent-mcp-starter"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#F3F4F6',
                fontWeight: 700,
                fontSize: '14px'
              }}
            >
              <Code2 size={16} color="#00E5FF" />
              <span>Clone VID_002 Starter</span>
              <ArrowUpRight size={15} color="#9CA3AF" />
            </a>
          </div>

          {/* NextGen 3D Interactive Feature Metric Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginTop: '60px'
          }}>
            <TiltCard3D maxTilt={7}>
              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(0, 229, 255, 0.25)',
                padding: '24px',
                borderRadius: '14px',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', color: '#00E5FF', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    PROTOCOL STANDARD
                  </span>
                  <Cpu size={18} color="#00E5FF" />
                </div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#F3F4F6' }}>
                  Model Context Protocol
                </div>
                <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '6px', lineHeight: 1.5 }}>
                  Anthropic STDIO & SSE tools for isolated micro-agents without runtime memory leaks.
                </div>
              </div>
            </TiltCard3D>

            <TiltCard3D maxTilt={7}>
              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '24px',
                borderRadius: '14px',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    DETERMINISTIC TIME
                  </span>
                  <ShieldCheck size={18} color="#10B981" />
                </div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#F3F4F6' }}>
                  Zero UTC Drift
                </div>
                <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '6px', lineHeight: 1.5 }}>
                  Strict IANA timezone normalization with native Python 3.12 <code>zoneinfo</code>.
                </div>
              </div>
            </TiltCard3D>

            <TiltCard3D maxTilt={7}>
              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                padding: '24px',
                borderRadius: '14px',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', color: '#F59E0B', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    PRODUCTION CODE
                  </span>
                  <TerminalIcon size={18} color="#F59E0B" />
                </div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#F3F4F6' }}>
                  100% Tested Starters
                </div>
                <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '6px', lineHeight: 1.5 }}>
                  Full pytest verification suites, Dockerized environments, and literate documentation.
                </div>
              </div>
            </TiltCard3D>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section id="catalog" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '40px 24px 80px 24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '24px',
          marginBottom: '36px'
        }}>
          <div>
            <div style={{ fontSize: '11px', color: '#00E5FF', fontWeight: 800, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '6px' }}>
              RELEASES & ARCHITECTURE BENCHMARKS
            </div>
            <h2 style={{ fontSize: '30px', fontWeight: 900, letterSpacing: '-0.5px' }}>
              Production Episode Catalog
            </h2>
            <p style={{ fontSize: '14px', color: '#9CA3AF', marginTop: '4px' }}>
              Direct access to full videos, reproducible GitHub starters, and performance telemetry.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '4px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={() => setFilter('all')}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 700,
                backgroundColor: filter === 'all' ? '#00E5FF' : 'transparent',
                color: filter === 'all' ? '#070A12' : '#9CA3AF',
                transition: 'all 0.2s ease'
              }}
            >
              All Releases ({episodes.length})
            </button>
            <button
              onClick={() => setFilter('multi-agent')}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 700,
                backgroundColor: filter === 'multi-agent' ? '#00E5FF' : 'transparent',
                color: filter === 'multi-agent' ? '#070A12' : '#9CA3AF',
                transition: 'all 0.2s ease'
              }}
            >
              Multi-Agent (Python)
            </button>
            <button
              onClick={() => setFilter('n8n')}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 700,
                backgroundColor: filter === 'n8n' ? '#00E5FF' : 'transparent',
                color: filter === 'n8n' ? '#070A12' : '#9CA3AF',
                transition: 'all 0.2s ease'
              }}
            >
              Enterprise n8n
            </button>
          </div>
        </div>

        {/* Episode Grid with 3D Interactive Tilt Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '30px'
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
                {/* Thumbnail Header with Live Badge */}
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
                    fontSize: '12px',
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
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600, marginBottom: '8px' }}>
                    RELEASED {ep.release_date}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, lineHeight: 1.35, marginBottom: '14px' }}>
                    {ep.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '22px', flex: 1 }}>
                    {ep.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {ep.stack.map(st => (
                      <span 
                        key={st}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '3px 9px',
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

                  {/* Benchmarks & Performance Metrics */}
                  <div style={{
                    backgroundColor: 'rgba(7, 10, 18, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '10px',
                    padding: '14px',
                    marginBottom: '24px',
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

                  {/* High Contrast Action Links */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <a
                      href={ep.youtube_url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: '#EF4444',
                        color: '#FFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        transition: 'transform 0.15s ease'
                      }}
                    >
                      <Play size={14} fill="#FFF" />
                      <span>Watch Deep Dive</span>
                    </a>
                    <a
                      href={ep.github_repo}
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
                        fontSize: '13px',
                        fontWeight: 700
                      }}
                    >
                      <Code2 size={15} color="#00E5FF" />
                      <span>Clone Starter</span>
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </section>

      {/* Enterprise B2B Architecture Banner */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px 100px 24px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(11, 15, 25, 0.95) 100%)',
          border: '1px solid rgba(0, 229, 255, 0.25)',
          borderRadius: '20px',
          padding: '56px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#00E5FF',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              <ShieldCheck size={16} />
              <span>B2B SYSTEMS ENGINEERING & ARCHITECTURE</span>
            </div>
            <h2 style={{ fontSize: '34px', fontWeight: 900, lineHeight: 1.15, marginBottom: '18px' }}>
              Scale Custom Multi-Agent Systems in Your Enterprise
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
              We partner directly with technical teams and founders to design and implement deterministic micro-agent swarms, Model Context Protocol servers, and enterprise automation infrastructure.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#E5E7EB' }}>
                <CheckCircle2 size={18} color="#00E5FF" />
                <span>Custom Model Context Protocol (MCP) server development</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#E5E7EB' }}>
                <CheckCircle2 size={18} color="#00E5FF" />
                <span>Deterministic agent orchestration with zero context runaway</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#E5E7EB' }}>
                <CheckCircle2 size={18} color="#00E5FF" />
                <span>Self-healing enterprise n8n clusters and webhook processing</span>
              </li>
            </ul>
          </div>

          <div style={{
            backgroundColor: 'rgba(7, 10, 18, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800 }}>Schedule Technical Consultation</h3>
            <p style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: 1.5 }}>
              Contact our engineering team directly for architectural reviews, proof of concepts, or enterprise consulting:
            </p>

            <a
              href="mailto:nexosailab@gmail.com?subject=Enterprise%20Multi-Agent%20Architecture%20Inquiry"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '15px',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #00E5FF 0%, #0091FF 100%)',
                color: '#070A12',
                fontWeight: 800,
                fontSize: '14px',
                boxShadow: '0 0 25px rgba(0, 229, 255, 0.35)',
                marginTop: '10px'
              }}
            >
              <Mail size={18} />
              <span>Contact Architecture Lab</span>
            </a>

            <div style={{ textAlign: 'center', fontSize: '12px', color: '#6B7280' }}>
              Direct email: <strong style={{ color: '#D1D5DB' }}>nexosailab@gmail.com</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '36px 24px',
        backgroundColor: 'rgba(7, 10, 18, 0.95)',
        fontSize: '13px',
        color: '#6B7280'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.png" alt="Nexos" style={{ width: '22px', height: '22px', borderRadius: '4px' }} />
            <span>© 2026 <strong>Nexos AI Lab</strong>. Production-grade AI engineering.</span>
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
