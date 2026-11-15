import { useState } from 'react';
import episodesData from './episodes.json';
import { 
  Terminal, 
  Clock, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Mail,
  Play,
  Code2
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
    <div style={{ minHeight: '100vh', backgroundColor: '#0B0F19', color: '#F3F4F6' }}>
      {/* Top Banner / Navigation */}
      <header style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(11, 15, 25, 0.95)',
        backdropFilter: 'blur(12px)',
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00E5FF 0%, #0070F3 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)'
            }}>
              <Terminal size={20} color="#0B0F19" strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.5px' }}>
                NEXOS <span style={{ color: '#00E5FF' }}>AI LAB</span>
              </div>
              <div style={{ fontSize: '10px', color: '#9CA3AF', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Engineering Lab & Open Source
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="https://www.youtube.com/@NexosAILab" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                color: '#EF4444',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}
            >
              <Play size={14} fill="#EF4444" />
              <span>YouTube</span>
            </a>
            <a 
              href="https://github.com/NexosAILab" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#F3F4F6',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <Code2 size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px 60px 24px',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          borderRadius: '999px',
          backgroundColor: 'rgba(0, 229, 255, 0.08)',
          border: '1px solid rgba(0, 229, 255, 0.3)',
          color: '#00E5FF',
          fontSize: '12px',
          fontWeight: 600,
          marginBottom: '24px'
        }}>
          <Zap size={14} />
          <span>PRODUCTION-GRADE AI ARCHITECTURES</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          marginBottom: '20px',
          maxWidth: '850px'
        }}>
          Distributed Multi-Agent Systems & <span style={{ 
            background: 'linear-gradient(90deg, #00E5FF 0%, #38BDF8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Enterprise Automation</span>
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#9CA3AF',
          maxWidth: '680px',
          lineHeight: 1.6,
          marginBottom: '36px'
        }}>
          We benchmark, build, and open-source resilient AI architectures for production environments. Cutting through the framework bloat to deliver deterministic execution and sub-second tool routing.
        </p>

        {/* Live Architecture Metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          maxWidth: '900px',
          marginTop: '40px'
        }}>
          <div style={{
            backgroundColor: '#111827',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Multi-Agent Protocol
            </div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#00E5FF', marginTop: '6px' }}>
              Model Context Protocol
            </div>
            <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>
              Standardized Anthropic MCP Registry
            </div>
          </div>

          <div style={{
            backgroundColor: '#111827',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Target Reliability
            </div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#10B981', marginTop: '6px' }}>
              Zero UTC Drift
            </div>
            <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>
              Native ZoneInfo Timezone Normalization
            </div>
          </div>

          <div style={{
            backgroundColor: '#111827',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Production Open Source
            </div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#F59E0B', marginTop: '6px' }}>
              100% Starters
            </div>
            <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>
              GitHub Org Repos with Docker & Tests
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px 24px 80px 24px'
      }}>
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
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 800 }}>Production Episode Catalog</h2>
            <p style={{ fontSize: '14px', color: '#9CA3AF', marginTop: '4px' }}>
              Synchronized with Cloud Firestore live deployment pipeline
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setFilter('all')}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: filter === 'all' ? '#00E5FF' : 'rgba(255, 255, 255, 0.05)',
                color: filter === 'all' ? '#0B0F19' : '#9CA3AF',
                border: filter === 'all' ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              All Episodes ({episodes.length})
            </button>
            <button
              onClick={() => setFilter('multi-agent')}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: filter === 'multi-agent' ? '#00E5FF' : 'rgba(255, 255, 255, 0.05)',
                color: filter === 'multi-agent' ? '#0B0F19' : '#9CA3AF',
                border: filter === 'multi-agent' ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              Multi-Agent Systems (Python)
            </button>
            <button
              onClick={() => setFilter('n8n')}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: filter === 'n8n' ? '#00E5FF' : 'rgba(255, 255, 255, 0.05)',
                color: filter === 'n8n' ? '#0B0F19' : '#9CA3AF',
                border: filter === 'n8n' ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              Enterprise n8n
            </button>
          </div>
        </div>

        {/* Episode Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px'
        }}>
          {filteredEpisodes.map(ep => (
            <div 
              key={ep.id}
              style={{
                backgroundColor: '#111827',
                border: ep.featured ? '1px solid rgba(0, 229, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: ep.featured ? '0 0 30px rgba(0, 229, 255, 0.15)' : 'none'
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
                  backgroundColor: 'rgba(11, 15, 25, 0.85)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Clock size={12} />
                  <span>{ep.duration}</span>
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  backgroundColor: ep.track_slug === 'multi-agent' ? 'rgba(0, 229, 255, 0.9)' : 'rgba(245, 158, 11, 0.9)',
                  color: '#0B0F19',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  {ep.track}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '8px' }}>
                  Released: {ep.release_date}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.4, marginBottom: '12px' }}>
                  {ep.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  {ep.description}
                </p>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {ep.stack.map(st => (
                    <span 
                      key={st}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        color: '#D1D5DB'
                      }}
                    >
                      {st}
                    </span>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '12px',
                  marginBottom: '20px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '8px',
                  fontSize: '12px'
                }}>
                  {Object.entries(ep.metrics).filter(([_, v]) => Boolean(v)).map(([k, v]) => (
                    <div key={k}>
                      <span style={{ color: '#6B7280', textTransform: 'capitalize' }}>{k.replace('_', ' ')}: </span>
                      <span style={{ fontWeight: 600, color: '#00E5FF' }}>{v}</span>
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
                      borderRadius: '6px',
                      backgroundColor: '#EF4444',
                      color: '#FFF',
                      fontSize: '13px',
                      fontWeight: 600
                    }}
                  >
                    <Play size={14} fill="#FFF" />
                    <span>Watch Video</span>
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
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFF',
                      fontSize: '13px',
                      fontWeight: 600
                    }}
                  >
                    <Code2 size={16} />
                    <span>Clone Starter</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* B2B Architecture & Consulting Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px 100px 24px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.8) 100%)',
          border: '1px solid rgba(0, 229, 255, 0.2)',
          borderRadius: '16px',
          padding: '48px 36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#00E5FF',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              <ShieldCheck size={16} />
              <span>B2B Architecture & Custom Systems</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 900, lineHeight: 1.2, marginBottom: '16px' }}>
              Need Custom Multi-Agent Pipelines in Your Enterprise?
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
              We partner with engineering teams and enterprise organizations to design and implement deterministic agent swarms, Model Context Protocol servers, and low-latency automated workflows.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#E5E7EB' }}>
                <CheckCircle2 size={16} color="#00E5FF" />
                <span>Private Model Context Protocol (MCP) server integration</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#E5E7EB' }}>
                <CheckCircle2 size={16} color="#00E5FF" />
                <span>Deterministic agent orchestration with zero context runaway</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#E5E7EB' }}>
                <CheckCircle2 size={16} color="#00E5FF" />
                <span>Enterprise n8n cluster deployments & self-healing workflows</span>
              </li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#0B0F19',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Initiate an Architecture Review</h3>
            <p style={{ fontSize: '13px', color: '#9CA3AF' }}>
              Contact our engineering lab directly for architectural advisory, proof of concepts, or tailored workshops:
            </p>

            <a
              href="mailto:nexosailab@gmail.com?subject=Enterprise%20Multi-Agent%20Architecture%20Inquiry"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #00E5FF 0%, #0070F3 100%)',
                color: '#0B0F19',
                fontWeight: 700,
                fontSize: '14px',
                marginTop: '8px'
              }}
            >
              <Mail size={18} />
              <span>Contact Architecture Team</span>
            </a>

            <div style={{ textAlign: 'center', fontSize: '12px', color: '#6B7280' }}>
              Typical response time: &lt; 24 hours
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '32px 24px',
        textAlign: 'center',
        fontSize: '13px',
        color: '#6B7280'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            © 2026 <strong>Nexos AI Lab</strong>. All rights reserved. Open-source under MIT License.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="https://github.com/NexosAILab" target="_blank" rel="noreferrer" style={{ color: '#9CA3AF' }}>GitHub Org</a>
            <a href="https://www.youtube.com/@NexosAILab" target="_blank" rel="noreferrer" style={{ color: '#9CA3AF' }}>YouTube Channel</a>
            <a href="https://github.com/htillero" target="_blank" rel="noreferrer" style={{ color: '#9CA3AF' }}>Creator Profile</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
