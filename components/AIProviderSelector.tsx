"use client";

import { useState } from "react";
import { 
  Sparkles, 
  Cpu, 
  Key, 
  Globe, 
  Clock, 
  Check, 
  ShieldCheck, 
  Sliders, 
  Save, 
  CheckCircle2, 
  Terminal 
} from "lucide-react";

type ProviderType = "gemini" | "ollama" | "openai" | "fallback";

export function AIProviderSelector() {
  const [provider, setProvider] = useState<ProviderType>("gemini");
  const [apiKey, setApiKey] = useState("");
  const [ollamaUrl, setOllamaUrl] = useState("http://localhost:11434");
  const [ollamaModel, setOllamaModel] = useState("llama3.2");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="relative rounded-3xl border border-white/10 bg-[#0B0D14]/90 p-6 md:p-10 backdrop-blur-2xl overflow-hidden shadow-2xl space-y-8">
      {/* Dynamic Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
          <Sparkles className="size-3.5" />
          <span>Dynamic In-App Switcher &bull; Real-Time Hot Reload</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Choose How Your Commits Are Generated
        </h2>
        <p className="text-xs md:text-sm text-zinc-400">
          Configure your preferred provider in the desktop app with one click. When one is active, the others are safely deactivated, and configurations take effect instantly without restarting.
        </p>
      </div>

      {/* 4 Provider Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Gemini */}
        <button
          onClick={() => setProvider("gemini")}
          className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 group relative ${
            provider === "gemini"
              ? "border-emerald-400/80 bg-emerald-500/[0.08] shadow-lg shadow-emerald-500/15 scale-[1.02]"
              : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
          }`}
        >
          {provider === "gemini" && (
            <div className="absolute top-3 right-3 size-2 rounded-full bg-emerald-400 animate-pulse" />
          )}
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Default &bull; Free Tier
            </span>
            <h3 className="text-lg font-bold text-white mt-1">Google Gemini</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Ultra-fast diff summarization using <code className="text-zinc-200 font-mono">gemini-2.0-flash</code>.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Free API Key</span>
            <span className="text-emerald-400 font-semibold">{provider === "gemini" ? "Active" : "Select"}</span>
          </div>
        </button>

        {/* Ollama */}
        <button
          onClick={() => setProvider("ollama")}
          className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 group relative ${
            provider === "ollama"
              ? "border-purple-400/80 bg-purple-500/[0.08] shadow-lg shadow-purple-500/15 scale-[1.02]"
              : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
          }`}
        >
          {provider === "ollama" && (
            <div className="absolute top-3 right-3 size-2 rounded-full bg-purple-400 animate-pulse" />
          )}
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              100% Offline &bull; Air-Gapped
            </span>
            <h3 className="text-lg font-bold text-white mt-1">Ollama (Local)</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Total privacy. Runs on local GPU with <code className="text-zinc-200 font-mono">llama3.2</code> or <code className="text-zinc-200 font-mono">codellama</code>.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>No Cloud Diffs</span>
            <span className="text-purple-400 font-semibold">{provider === "ollama" ? "Active" : "Select"}</span>
          </div>
        </button>

        {/* OpenAI */}
        <button
          onClick={() => setProvider("openai")}
          className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 group relative ${
            provider === "openai"
              ? "border-cyan-400/80 bg-cyan-500/[0.08] shadow-lg shadow-cyan-500/15 scale-[1.02]"
              : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
          }`}
        >
          {provider === "openai" && (
            <div className="absolute top-3 right-3 size-2 rounded-full bg-cyan-400 animate-pulse" />
          )}
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              GPT Models
            </span>
            <h3 className="text-lg font-bold text-white mt-1">OpenAI API</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Leverage <code className="text-zinc-200 font-mono">gpt-4o-mini</code> or <code className="text-zinc-200 font-mono">gpt-4o</code> with your existing OpenAI credits.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Standard Tokens</span>
            <span className="text-cyan-400 font-semibold">{provider === "openai" ? "Active" : "Select"}</span>
          </div>
        </button>

        {/* Clean Fallback */}
        <button
          onClick={() => setProvider("fallback")}
          className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 group relative ${
            provider === "fallback"
              ? "border-amber-400/80 bg-amber-500/[0.08] shadow-lg shadow-amber-500/15 scale-[1.02]"
              : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
          }`}
        >
          {provider === "fallback" && (
            <div className="absolute top-3 right-3 size-2 rounded-full bg-amber-400 animate-pulse" />
          )}
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Zero Config
            </span>
            <h3 className="text-lg font-bold text-white mt-1">Clean Auto-Save</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              No API keys needed. Generates clean timestamped commits like <code className="text-zinc-200 font-mono">[LidCommit] auto-save</code>.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>Always Ready</span>
            <span className="text-amber-400 font-semibold">{provider === "fallback" ? "Active" : "Select"}</span>
          </div>
        </button>
      </div>

      {/* Interactive Mock Configuration Panel for Selected Provider */}
      <div className="rounded-2xl border border-white/10 bg-[#07090E] p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <Sliders className="size-4 text-emerald-400" />
            <span>Active Settings in Desktop Dashboard for: </span>
            <span className="font-mono text-emerald-400 uppercase font-bold">
              {provider === "gemini" && "Google Gemini"}
              {provider === "ollama" && "Local Ollama"}
              {provider === "openai" && "OpenAI"}
              {provider === "fallback" && "Offline Timestamp Auto-Save"}
            </span>
          </div>

          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-black transition-all self-start sm:self-auto"
          >
            {saved ? <Check className="size-3.5" /> : <Save className="size-3.5" />}
            <span>{saved ? "Saved in App!" : "Apply to App"}</span>
          </button>
        </div>

        {/* Dynamic Fields */}
        {provider === "gemini" && (
          <div className="space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                <Key className="size-3.5 text-emerald-400" />
                Gemini API Key:
              </label>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-emerald-400 hover:underline"
              >
                Get a free key from Google AI Studio &rarr;
              </a>
            </div>
            <input
              type="password"
              placeholder="AIzaSy... (or leave empty to read from GEMINI_API_KEY env)"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 font-mono text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 text-xs"
            />
            <p className="text-[11px] text-zinc-500 font-mono">
              Model: <span className="text-zinc-300">gemini-2.0-flash</span> &bull; Hot-reloads in <code className="text-zinc-400">config.toml</code> on save.
            </p>
          </div>
        )}

        {provider === "ollama" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                <Globe className="size-3.5 text-purple-400" />
                Ollama Endpoint URL:
              </label>
              <input
                type="text"
                value={ollamaUrl}
                onChange={(e) => setOllamaUrl(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 font-mono text-zinc-200 focus:outline-none focus:border-purple-500 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                <Cpu className="size-3.5 text-purple-400" />
                Local Model Tag:
              </label>
              <input
                type="text"
                value={ollamaModel}
                onChange={(e) => setOllamaModel(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 font-mono text-zinc-200 focus:outline-none focus:border-purple-500 text-xs"
              />
            </div>
          </div>
        )}

        {provider === "openai" && (
          <div className="space-y-3 text-xs">
            <label className="text-zinc-300 font-medium flex items-center gap-1.5">
              <Key className="size-3.5 text-cyan-400" />
              OpenAI API Key:
            </label>
            <input
              type="password"
              placeholder="sk-... (or reads OPENAI_API_KEY)"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 font-mono text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 text-xs"
            />
            <p className="text-[11px] text-zinc-500 font-mono">
              Model: <span className="text-zinc-300">gpt-4o-mini</span>.
            </p>
          </div>
        )}

        {provider === "fallback" && (
          <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 text-xs text-zinc-300 space-y-1">
            <div className="font-semibold text-amber-300 flex items-center gap-1.5">
              <Clock className="size-3.5" />
              <span>Standardized Timestamp Commits</span>
            </div>
            <p className="text-zinc-400 leading-relaxed text-[11px]">
              No API keys or internet connection needed! LidCommit automatically generates commits formatted as: <br />
              <code className="text-white font-mono bg-black/60 px-2 py-0.5 rounded mt-1 inline-block">
                [LidCommit] auto-save at 2026-10-31 20:30
              </code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
