'use client';
import Link from 'next/link';
import { useFadeUp } from '@/hooks/useAnimations';
import { useLang } from '@/hooks/useLanguage';

const serviceIllustrations = [
  `<svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <rect x="40" y="20" width="340" height="220" rx="16" fill="#F5F7FA" stroke="#E5E7EB" stroke-width="1.5" />
    <rect x="40" y="20" width="340" height="40" rx="16" fill="white" />
    <rect x="40" y="44" width="340" height="16" fill="white" />
    <circle cx="64" cy="40" r="6" fill="#EF4444" />
    <circle cx="82" cy="40" r="6" fill="#F59E0B" />
    <circle cx="100" cy="40" r="6" fill="#10B981" />
    <rect x="140" y="32" width="180" height="16" rx="8" fill="#F5F7FA" />
    <rect x="56" y="76" width="50" height="8" rx="4" fill="#1821F5" opacity="0.15" />
    <rect x="116" y="76" width="50" height="8" rx="4" fill="#E5E7EB" />
    <rect x="176" y="76" width="50" height="8" rx="4" fill="#E5E7EB" />
    <rect x="236" y="76" width="50" height="8" rx="4" fill="#E5E7EB" />
    <rect x="56" y="100" width="160" height="14" rx="4" fill="#111827" opacity="0.8" />
    <rect x="56" y="120" width="120" height="10" rx="4" fill="#6B7280" opacity="0.5" />
    <rect x="56" y="136" width="80" height="10" rx="4" fill="#6B7280" opacity="0.35" />
    <rect x="56" y="160" width="90" height="28" rx="8" fill="#1821F5" />
    <rect x="156" y="160" width="90" height="28" rx="8" fill="transparent" stroke="#E5E7EB" stroke-width="1.5" />
    <rect x="240" y="96" width="124" height="110" rx="12" fill="url(#uiGrad)" />
    <circle cx="302" cy="135" r="22" fill="white" opacity="0.2" />
    <rect x="268" y="150" width="68" height="8" rx="4" fill="white" opacity="0.3" />
    <rect x="56" y="208" width="95" height="22" rx="6" fill="white" stroke="#E5E7EB" />
    <rect x="161" y="208" width="95" height="22" rx="6" fill="white" stroke="#E5E7EB" />
    <rect x="266" y="208" width="95" height="22" rx="6" fill="white" stroke="#E5E7EB" />
    <rect x="310" y="248" width="120" height="52" rx="12" fill="white" stroke="#E5E7EB" stroke-width="1.5" style="filter:drop-shadow(0 4px 16px rgba(0,0,0,0.08))" />
    <circle cx="328" cy="274" r="10" fill="#1821F5" />
    <circle cx="350" cy="274" r="10" fill="#177AF4" />
    <circle cx="372" cy="274" r="10" fill="#10B981" />
    <circle cx="394" cy="274" r="10" fill="#F59E0B" />
    <rect x="314" y="258" width="60" height="6" rx="3" fill="#E5E7EB" />
    <rect x="20" y="250" width="130" height="58" rx="12" fill="white" stroke="#E5E7EB" stroke-width="1.5" style="filter:drop-shadow(0 4px 16px rgba(0,0,0,0.08))" />
    <rect x="34" y="264" width="16" height="16" rx="4" fill="url(#uiGrad)" />
    <rect x="58" y="265" width="60" height="6" rx="3" fill="#111827" opacity="0.8" />
    <rect x="58" y="276" width="40" height="5" rx="2.5" fill="#6B7280" opacity="0.5" />
    <rect x="34" y="290" width="102" height="8" rx="4" fill="#1821F5" />
    <defs>
      <linearGradient id="uiGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1821F5" />
        <stop offset="100%" stop-color="#177AF4" />
      </linearGradient>
    </defs>
  </svg>`,
  `<svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <rect x="30" y="20" width="260" height="200" rx="14" fill="#0F172A" />
    <rect x="30" y="20" width="260" height="36" rx="14" fill="#1E293B" />
    <rect x="30" y="44" width="260" height="12" fill="#1E293B" />
    <circle cx="52" cy="38" r="5" fill="#EF4444" opacity="0.8" />
    <circle cx="68" cy="38" r="5" fill="#F59E0B" opacity="0.8" />
    <circle cx="84" cy="38" r="5" fill="#10B981" opacity="0.8" />
    <rect x="210" y="30" width="68" height="16" rx="4" fill="#0F172A" opacity="0.5" />
    <text x="214" y="42" font-family="monospace" font-size="9" fill="#94A3B8">App.tsx</text>
    <rect x="46" y="70" width="30" height="7" rx="3" fill="#817AF4" opacity="0.9" />
    <rect x="82" y="70" width="50" height="7" rx="3" fill="#94A3B8" opacity="0.7" />
    <rect x="138" y="70" width="30" height="7" rx="3" fill="#38BDF8" />
    <rect x="174" y="70" width="24" height="7" rx="3" fill="#94A3B8" opacity="0.5" />
    <rect x="46" y="86" width="80" height="7" rx="3" fill="#10B981" opacity="0.8" />
    <rect x="134" y="86" width="4" height="7" rx="2" fill="#94A3B8" opacity="0.5" />
    <rect x="144" y="86" width="40" height="7" rx="3" fill="#F472B6" opacity="0.8" />
    <rect x="60" y="102" width="60" height="7" rx="3" fill="#38BDF8" opacity="0.7" />
    <rect x="126" y="102" width="8" height="7" rx="3" fill="#94A3B8" opacity="0.5" />
    <rect x="140" y="102" width="80" height="7" rx="3" fill="#94A3B8" opacity="0.5" />
    <rect x="60" y="118" width="100" height="7" rx="3" fill="#94A3B8" opacity="0.35" />
    <rect x="60" y="134" width="80" height="7" rx="3" fill="#817AF4" opacity="0.8" />
    <rect x="146" y="134" width="4" height="7" rx="2" fill="#94A3B8" opacity="0.5" />
    <rect x="156" y="134" width="40" height="7" rx="3" fill="#F472B6" opacity="0.5" />
    <rect x="46" y="150" width="40" height="7" rx="3" fill="#10B981" opacity="0.6" />
    <rect x="92" y="150" width="4" height="7" rx="2" fill="#94A3B8" opacity="0.5" />
    <rect x="102" y="150" width="60" height="7" rx="3" fill="#94A3B8" opacity="0.35" />
    <rect x="46" y="166" width="20" height="7" rx="3" fill="#38BDF8" opacity="0.6" />
    <rect x="46" y="182" width="12" height="7" rx="3" fill="#94A3B8" opacity="0.4" />
    <rect x="46" y="166" width="2" height="10" rx="1" fill="#60A5FA"><animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" /></rect>
    <rect x="310" y="30" width="90" height="175" rx="16" fill="#1821F5" opacity="0.08" stroke="#1821F5" stroke-width="1.5" />
    <rect x="318" y="46" width="74" height="143" rx="10" fill="white" />
    <rect x="326" y="54" width="58" height="6" rx="3" fill="#1821F5" opacity="0.15" />
    <rect x="326" y="66" width="38" height="12" rx="4" fill="#1821F5" />
    <rect x="326" y="84" width="58" height="5" rx="2.5" fill="#E5E7EB" />
    <rect x="326" y="94" width="48" height="5" rx="2.5" fill="#E5E7EB" />
    <rect x="326" y="108" width="58" height="36" rx="8" fill="#F5F7FA" />
    <circle cx="345" cy="126" r="10" fill="url(#appGrad)" />
    <rect x="360" y="120" width="18" height="5" rx="2.5" fill="#111827" opacity="0.7" />
    <rect x="360" y="130" width="14" height="4" rx="2" fill="#6B7280" opacity="0.5" />
    <rect x="326" y="150" width="58" height="28" rx="8" fill="#F5F7FA" />
    <rect x="334" y="158" width="42" height="5" rx="2.5" fill="#E5E7EB" />
    <rect x="334" y="168" width="30" height="5" rx="2.5" fill="#E5E7EB" />
    <rect x="343" y="183" width="28" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="296" y="220" width="124" height="32" rx="10" fill="white" stroke="#E5E7EB" stroke-width="1" />
    <rect x="306" y="230" width="40" height="12" rx="4" fill="#1821F5" opacity="0.1" />
    <text x="308" y="240" font-family="monospace" font-size="8" fill="#1821F5" font-weight="600">React</text>
    <rect x="352" y="230" width="36" height="12" rx="4" fill="#0EA5E9" opacity="0.1" />
    <text x="354" y="240" font-family="monospace" font-size="8" fill="#0EA5E9" font-weight="600">Next.js</text>
    <rect x="394" y="230" width="18" height="12" rx="4" fill="#10B981" opacity="0.1" />
    <text x="396" y="240" font-family="monospace" font-size="8" fill="#10B981" font-weight="600">TS</text>
    <rect x="30" y="232" width="140" height="48" rx="12" fill="white" stroke="#E5E7EB" stroke-width="1" />
    <rect x="44" y="246" width="10" height="10" rx="2" fill="#10B981" />
    <rect x="62" y="246" width="80" height="6" rx="3" fill="#111827" opacity="0.7" />
    <rect x="62" y="258" width="56" height="5" rx="2.5" fill="#6B7280" opacity="0.5" />
    <rect x="44" y="264" width="60" height="6" rx="3" fill="#E5E7EB" />
    <defs>
      <linearGradient id="appGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1821F5" />
        <stop offset="100%" stop-color="#177AF4" />
      </linearGradient>
    </defs>
  </svg>`,
  `<svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <rect x="30" y="20" width="360" height="230" rx="14" fill="#F5F7FA" stroke="#E5E7EB" stroke-width="1.5" />
    <rect x="30" y="20" width="360" height="38" rx="14" fill="white" />
    <rect x="30" y="46" width="360" height="12" fill="white" />
    <circle cx="52" cy="39" r="5" fill="#EF4444" opacity="0.7" />
    <circle cx="68" cy="39" r="5" fill="#F59E0B" opacity="0.7" />
    <circle cx="84" cy="39" r="5" fill="#10B981" opacity="0.7" />
    <rect x="120" y="31" width="180" height="16" rx="8" fill="#F5F7FA" />
    <rect x="30" y="58" width="360" height="110" fill="url(#lpGrad)" />
    <rect x="152" y="72" width="116" height="16" rx="8" fill="rgba(255,255,255,0.15)" />
    <rect x="160" y="76" width="100" height="8" rx="4" fill="rgba(255,255,255,0.7)" />
    <rect x="100" y="96" width="220" height="14" rx="5" fill="white" opacity="0.9" />
    <rect x="130" y="116" width="160" height="10" rx="4" fill="white" opacity="0.7" />
    <rect x="162" y="134" width="96" height="24" rx="8" fill="white" />
    <rect x="174" y="140" width="72" height="12" rx="4" fill="url(#lpGrad)" />
    <rect x="46" y="180" width="100" height="48" rx="10" fill="white" />
    <rect x="58" y="190" width="50" height="10" rx="4" fill="#10B981" />
    <rect x="58" y="206" width="70" height="7" rx="3" fill="#E5E7EB" />
    <rect x="58" y="218" width="50" height="5" rx="2.5" fill="#E5E7EB" />
    <rect x="162" y="180" width="100" height="48" rx="10" fill="white" />
    <rect x="174" y="190" width="50" height="10" rx="4" fill="#1821F5" opacity="0.7" />
    <rect x="174" y="206" width="70" height="7" rx="3" fill="#E5E7EB" />
    <rect x="174" y="218" width="50" height="5" rx="2.5" fill="#E5E7EB" />
    <rect x="278" y="180" width="96" height="48" rx="10" fill="white" />
    <rect x="290" y="190" width="50" height="10" rx="4" fill="#F59E0B" opacity="0.8" />
    <rect x="290" y="206" width="70" height="7" rx="3" fill="#E5E7EB" />
    <rect x="290" y="218" width="50" height="5" rx="2.5" fill="#E5E7EB" />
    <rect x="280" y="252" width="130" height="48" rx="12" fill="white" stroke="#E5E7EB" />
    <rect x="294" y="263" width="60" height="8" rx="4" fill="#10B981" opacity="0.15" />
    <text x="298" y="271" font-family="monospace" font-size="9" fill="#059669" font-weight="700">Konversi Rate</text>
    <rect x="294" y="276" width="90" height="14" rx="4" fill="#10B981" opacity="0.08" />
    <text x="298" y="287" font-family="sans-serif" font-size="11" fill="#059669" font-weight="700">↑ 340%</text>
    <rect x="10" y="252" width="130" height="48" rx="12" fill="white" stroke="#E5E7EB" />
    <rect x="24" y="263" width="50" height="8" rx="4" fill="#1821F5" opacity="0.1" />
    <text x="26" y="271" font-family="monospace" font-size="9" fill="#1821F5" font-weight="700">Skor Performa</text>
    <rect x="24" y="276" width="100" height="14" rx="4" fill="#1821F5" opacity="0.06" />
    <text x="28" y="287" font-family="sans-serif" font-size="12" fill="#1821F5" font-weight="700">99 / 100 ⚡</text>
    <defs>
      <linearGradient id="lpGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1821F5" />
        <stop offset="100%" stop-color="#177AF4" />
      </linearGradient>
    </defs>
  </svg>`,
  `<svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <rect x="20" y="20" width="240" height="200" rx="14" fill="#0F172A" />
    <rect x="20" y="20" width="240" height="40" rx="14" fill="#1E293B" />
    <rect x="20" y="48" width="240" height="12" fill="#1E293B" />
    <rect x="32" y="30" width="60" height="12" rx="4" fill="#F59E0B" opacity="0.15" />
    <rect x="34" y="33" width="56" height="6" rx="3" fill="#F59E0B" opacity="0.6" />
    <rect x="176" y="30" width="72" height="12" rx="4" fill="#10B981" opacity="0.2" />
    <rect x="180" y="33" width="64" height="6" rx="3" fill="#10B981" opacity="0.7" />
    <rect x="28" y="68" width="100" height="45" rx="8" fill="#1E293B" />
    <rect x="36" y="76" width="50" height="8" rx="3" fill="#F59E0B" opacity="0.3" />
    <rect x="36" y="88" width="40" height="6" rx="3" fill="#94A3B8" opacity="0.5" />
    <rect x="36" y="98" width="80" height="7" rx="3" fill="#10B981" opacity="0.6" />
    <rect x="136" y="68" width="112" height="45" rx="8" fill="#1E293B" />
    <rect x="144" y="76" width="50" height="8" rx="3" fill="#817AF4" opacity="0.4" />
    <rect x="144" y="88" width="40" height="6" rx="3" fill="#94A3B8" opacity="0.5" />
    <rect x="144" y="98" width="80" height="7" rx="3" fill="#10B981" opacity="0.6" />
    <rect x="28" y="120" width="100" height="45" rx="8" fill="#1E293B" />
    <rect x="36" y="128" width="50" height="8" rx="3" fill="#38BDF8" opacity="0.3" />
    <rect x="36" y="140" width="40" height="6" rx="3" fill="#94A3B8" opacity="0.5" />
    <rect x="36" y="150" width="80" height="7" rx="3" fill="#10B981" opacity="0.6" />
    <rect x="136" y="120" width="112" height="45" rx="8" fill="#F59E0B" opacity="0.12" />
    <rect x="144" y="128" width="50" height="8" rx="3" fill="#F59E0B" opacity="0.5" />
    <rect x="144" y="140" width="40" height="6" rx="3" fill="#94A3B8" opacity="0.5" />
    <rect x="144" y="152" width="80" height="7" rx="3" fill="#10B981" opacity="0.6" />
    <rect x="28" y="174" width="220" height="36" rx="8" fill="#1821F5" opacity="0.2" />
    <rect x="36" y="183" width="60" height="7" rx="3" fill="#94A3B8" opacity="0.7" />
    <rect x="36" y="195" width="80" height="7" rx="3" fill="#F59E0B" opacity="0.8" />
    <rect x="174" y="179" width="64" height="26" rx="6" fill="#F59E0B" />
    <rect x="184" y="188" width="44" height="8" rx="3" fill="white" opacity="0.9" />
    <rect x="272" y="20" width="140" height="260" rx="14" fill="white" stroke="#E5E7EB" stroke-width="1.5" />
    <rect x="284" y="34" width="116" height="8" rx="4" fill="#111827" opacity="0.7" />
    <rect x="284" y="48" width="80" height="5" rx="2.5" fill="#E5E7EB" />
    <rect x="284" y="64" width="116" height="1" fill="#E5E7EB" />
    <rect x="284" y="72" width="70" height="5" rx="2.5" fill="#6B7280" opacity="0.5" />
    <rect x="340" y="72" width="60" height="5" rx="2.5" fill="#111827" opacity="0.7" />
    <rect x="284" y="84" width="70" height="5" rx="2.5" fill="#6B7280" opacity="0.5" />
    <rect x="340" y="84" width="60" height="5" rx="2.5" fill="#111827" opacity="0.7" />
    <rect x="284" y="96" width="70" height="5" rx="2.5" fill="#6B7280" opacity="0.5" />
    <rect x="340" y="96" width="60" height="5" rx="2.5" fill="#111827" opacity="0.7" />
    <rect x="284" y="110" width="116" height="1" fill="#E5E7EB" />
    <rect x="284" y="120" width="60" height="8" rx="3" fill="#111827" opacity="0.8" />
    <rect x="308" y="120" width="80" height="8" rx="3" fill="#10B981" opacity="0.8" />
    <rect x="284" y="142" width="116" height="60" rx="8" fill="#F5F7FA" />
    <rect x="294" y="152" width="8" height="30" rx="3" fill="#E5E7EB" />
    <rect x="308" y="145" width="8" height="37" rx="3" fill="#1821F5" opacity="0.4" />
    <rect x="322" y="158" width="8" height="24" rx="3" fill="#E5E7EB" />
    <rect x="336" y="148" width="8" height="34" rx="3" fill="#1821F5" opacity="0.7" />
    <rect x="350" y="153" width="8" height="29" rx="3" fill="#E5E7EB" />
    <rect x="364" y="140" width="8" height="42" rx="3" fill="#F59E0B" />
    <rect x="284" y="216" width="116" height="36" rx="10" fill="url(#posGrad)" />
    <rect x="310" y="230" width="64" height="8" rx="4" fill="white" opacity="0.9" />
    <defs>
      <linearGradient id="posGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#D97706" />
        <stop offset="100%" stop-color="#F59E0B" />
      </linearGradient>
    </defs>
  </svg>`,
  `<svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <rect x="30" y="40" width="110" height="70" rx="12" fill="#F5F3FF" stroke="#8B5CF6" stroke-width="1.5" />
    <rect x="46" y="55" width="78" height="8" rx="4" fill="#7C3AED" opacity="0.3" />
    <rect x="46" y="68" width="55" height="6" rx="3" fill="#E5E7EB" />
    <rect x="46" y="79" width="65" height="6" rx="3" fill="#E5E7EB" />
    <rect x="46" y="90" width="40" height="14" rx="6" fill="#8B5CF6" opacity="0.2" />
    <text x="52" y="101" font-family="sans-serif" font-size="9" fill="#7C3AED" font-weight="600">Frontend</text>
    <line x1="140" y1="75" x2="166" y2="75" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="4 3" />
    <polygon points="166,71 174,75 166,79" fill="#8B5CF6" />
    <rect x="174" y="40" width="110" height="70" rx="12" fill="#EFF6FF" stroke="#1821F5" stroke-width="1.5" />
    <rect x="190" y="55" width="78" height="8" rx="4" fill="#1821F5" opacity="0.3" />
    <rect x="190" y="68" width="55" height="6" rx="3" fill="#E5E7EB" />
    <rect x="190" y="79" width="65" height="6" rx="3" fill="#E5E7EB" />
    <rect x="190" y="90" width="40" height="14" rx="6" fill="#1821F5" opacity="0.15" />
    <text x="196" y="101" font-family="sans-serif" font-size="9" fill="#1821F5" font-weight="600">Backend</text>
    <line x1="284" y1="75" x2="310" y2="75" stroke="#1821F5" stroke-width="1.5" stroke-dasharray="4 3" />
    <polygon points="310,71 318,75 310,79" fill="#1821F5" />
    <rect x="318" y="40" width="80" height="70" rx="12" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5" />
    <ellipse cx="358" cy="62" rx="24" ry="8" fill="#10B981" opacity="0.25" stroke="#10B981" stroke-width="1" />
    <rect x="334" y="62" width="48" height="16" fill="#ECFDF5" />
    <ellipse cx="358" cy="78" rx="24" ry="8" fill="#10B981" opacity="0.2" stroke="#10B981" stroke-width="1" />
    <rect x="334" y="78" width="48" height="14" fill="#ECFDF5" />
    <ellipse cx="358" cy="92" rx="24" ry="8" fill="#10B981" opacity="0.35" />
    <text x="344" y="97" font-family="sans-serif" font-size="8" fill="#059669" font-weight="600">Database</text>
    <line x1="85" y1="110" x2="85" y2="140" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="4 3" />
    <polygon points="81,140 85,148 89,140" fill="#8B5CF6" />
    <line x1="229" y1="110" x2="229" y2="140" stroke="#1821F5" stroke-width="1.5" stroke-dasharray="4 3" />
    <polygon points="225,140 229,148 233,140" fill="#1821F5" />
    <line x1="358" y1="110" x2="358" y2="140" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 3" />
    <polygon points="354,140 358,148 362,140" fill="#10B981" />
    <rect x="30" y="148" width="368" height="70" rx="12" fill="#0F172A" />
    <rect x="44" y="160" width="60" height="8" rx="4" fill="#8B5CF6" opacity="0.4" />
    <rect x="44" y="174" width="100" height="6" rx="3" fill="#334155" />
    <rect x="44" y="186" width="80" height="6" rx="3" fill="#334155" />
    <rect x="44" y="198" width="40" height="12" rx="5" fill="#7C3AED" opacity="0.4" />
    <text x="50" y="208" font-family="monospace" font-size="8" fill="#A78BFA">DevOps</text>
    <rect x="190" y="162" width="55" height="22" rx="8" fill="#1E293B" />
    <text x="196" y="177" font-family="monospace" font-size="9" fill="#38BDF8">Docker</text>
    <rect x="252" y="162" width="55" height="22" rx="8" fill="#1E293B" />
    <text x="258" y="177" font-family="monospace" font-size="9" fill="#F472B6">CI/CD</text>
    <rect x="314" y="162" width="70" height="22" rx="8" fill="#1E293B" />
    <text x="320" y="177" font-family="monospace" font-size="9" fill="#34D399">Vercel/AWS</text>
    <rect x="190" y="190" width="194" height="18" rx="6" fill="#10B981" opacity="0.12" />
    <text x="218" y="203" font-family="sans-serif" font-size="9" fill="#34D399" font-weight="600">✓ Auto deploy ✓ Monitoring ✓ Scalable</text>
    <rect x="30" y="234" width="368" height="56" rx="12" fill="white" stroke="#E5E7EB" />
    <rect x="44" y="248" width="70" height="20" rx="6" fill="#F5F3FF" />
    <text x="54" y="262" font-family="monospace" font-size="9" fill="#7C3AED" font-weight="600">Next.js</text>
    <rect x="122" y="248" width="70" height="20" rx="6" fill="#EFF6FF" />
    <text x="132" y="262" font-family="monospace" font-size="9" fill="#1821F5" font-weight="600">Laravel</text>
    <rect x="200" y="248" width="70" height="20" rx="6" fill="#ECFDF5" />
    <text x="210" y="262" font-family="monospace" font-size="9" fill="#059669" font-weight="600">PostgreSQL</text>
    <rect x="278" y="248" width="70" height="20" rx="6" fill="#FFF7ED" />
    <text x="288" y="262" font-family="monospace" font-size="9" fill="#D97706" font-weight="600">Redis</text>
    <rect x="44" y="272" width="340" height="8" rx="4" fill="#F5F7FA" />
    <rect x="44" y="272" width="260" height="8" rx="4" fill="url(#fsGrad)" />
    <defs>
      <linearGradient id="fsGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#7C3AED" />
        <stop offset="100%" stop-color="#1821F5" />
      </linearGradient>
    </defs>
  </svg>`,
];

const services = [
  { num: '01', pill: ['Desain UI/UX', 'UI/UX Design'], pillBg: undefined, pillColor: undefined, title: ['Antarmuka yang Memukau & Mengkonversi', 'Interfaces That Convert and Impress'], desc: ['Merancang antarmuka yang indah dan user-focused di Figma yang mendorong engagement dan konversi.', 'Designing beautiful, user-focused interfaces in Figma that drive engagement and conversions.'], tags: ['Figma','Wireframing','Prototyping','User Research'], ctaText: ['Konsultasi Gratis →', 'Free Consultation →'], ctaBg: undefined, accent: undefined, accentLight: undefined },
  { num: '02', pill: ['Pengembangan Aplikasi', 'App Development'], pillBg: '#EFF6FF', pillColor: '#177AF4', title: ['Aplikasi Mobile & Web Cross-Platform', 'Cross-Platform Mobile & Web Apps'], desc: ['Membangun aplikasi mobile dan web dengan React Native, Flutter, dan Next.js.', 'Building mobile and web applications with React Native, Flutter, and Next.js.'], tags: ['React Native','Flutter','Next.js','TypeScript'], ctaText: ['Diskusi Proyek Anda →', 'Discuss Your Project →'], ctaBg: 'linear-gradient(135deg,#177AF4,#1821F5)', accent: '#177AF4', accentLight: '#EFF6FF' },
  { num: '03', pill: ['Landing Page', 'Landing Page'], pillBg: '#ECFDF5', pillColor: '#10B981', title: ['Landing Page Tinggi Konversi', 'High-Converting Landing Pages'], desc: ['Halaman landing yang dioptimasi untuk konversi dengan copy yang compelling dan performa tinggi.', 'Landing pages optimized for conversion with compelling copy and strong performance.'], tags: ['SEO Optimized','Mobile-First','A/B Testing','Fast Load'], ctaText: ['Buat Landing Page →', 'Create Landing Page →'], ctaBg: 'linear-gradient(135deg,#059669,#10B981)', accent: '#10B981', accentLight: '#ECFDF5' },
  { num: '04', pill: ['Sistem Kasir (POS)', 'POS System'], pillBg: '#FFFBEB', pillColor: '#D97706', title: ['Point of Sales Modern untuk Cafe & Retail', 'Modern POS for Cafe & Retail'], desc: ['Aplikasi Point of Sales modern untuk cafe & retail. Manajemen stok real-time dan UI intuitif.', 'Modern point-of-sale applications for cafes and retail with real-time inventory and intuitive UI.'], tags: ['Manajemen Stok','Laporan Real-time','Multi Kasir','Cloud Sync'], ctaText: ['Mulai Trial Gratis →', 'Start Free Trial →'], ctaBg: 'linear-gradient(135deg,#D97706,#F59E0B)', accent: '#F59E0B', accentLight: '#FFFBEB' },
  { num: '05', pill: ['Full-Stack Development', 'Full-Stack Development'], pillBg: '#F5F3FF', pillColor: '#7C3AED', title: ['Solusi End-to-End yang Lengkap', 'Complete End-to-End Solutions'], desc: ['Pengembangan end-to-end — frontend, backend, database, dan deployment — untuk solusi digital lengkap.', 'End-to-end development across frontend, backend, database, and deployment for complete digital solutions.'], tags: ['Frontend','Backend API','Database','DevOps'], ctaText: ['Konsultasi Arsitektur →', 'Architecture Consultation →'], ctaBg: 'linear-gradient(135deg,#7C3AED,#8B5CF6)', accent: '#8B5CF6', accentLight: '#F5F3FF' },
];

export default function Services() {
  const { t } = useLang();
  const [ref, vis] = useFadeUp<HTMLElement>();
  return (
    <section className="section services-scroll-section" id="layanan" ref={ref}>
      <div className="container">
        <div className={`services-header fade-up${vis ? ' visible' : ''}`}>
          <div className="section-label"><span className="label-dot"></span>{t('Layanan Kami', 'Our Services')}</div>
          <h2 className="text-h2">{t('Solusi Digital ', 'Digital Solutions ')}<span className="text-gradient">{t('Lengkap untuk Bisnis Anda', 'Built for Your Business')}</span></h2>
          <p className="text-muted" style={{ marginTop: '1rem', maxWidth: 520 }}>{t('Dari desain hingga pengembangan penuh — kami hadir dengan layanan terintegrasi untuk setiap tahap pertumbuhan bisnis Anda.', 'From design to full development, we provide integrated services for every stage of your business growth.')}</p>
        </div>
        <div className="services-stack" id="servicesStack">
          {services.map((s, i) => (
            <div className="service-sticky-card" data-index={i} key={i}>
              <div className="service-card-inner" style={s.accent ? { '--card-accent': s.accent, '--card-accent-light': s.accentLight } as React.CSSProperties : undefined}>
                <div className="service-card-content">
                  <div className="service-number">{s.num}</div>
                  <div className="service-icon-pill" style={s.pillBg ? { background: s.pillBg, color: s.pillColor } : undefined}>{t(s.pill[0], s.pill[1])}</div>
                  <h3 className="service-title">{t(s.title[0], s.title[1])}</h3>
                  <p className="service-desc">{t(s.desc[0], s.desc[1])}</p>
                  <div className="service-tags" style={s.accentLight ? { '--tag-bg': s.accentLight, '--tag-color': s.pillColor } as React.CSSProperties : undefined}>
                    {s.tags.map((tag, j) => <span key={j}>{tag}</span>)}
                  </div>
                  <Link href="/kontak" className="btn btn-primary service-cta" style={s.ctaBg ? { background: s.ctaBg } : undefined}>{t(s.ctaText[0], s.ctaText[1])}</Link>
                </div>
                <div className="service-card-visual">
                  <div
                    className="service-illustration"
                    dangerouslySetInnerHTML={{ __html: serviceIllustrations[i] }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
