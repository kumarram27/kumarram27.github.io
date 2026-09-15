"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Web Audio API Sound Synthesizer
class SoundFX {
    private ctx: AudioContext | null = null;
    public muted: boolean = false;

    init() {
        if (!this.ctx && typeof window !== "undefined") {
            const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume();
        }
    }

    playLaser() {
        if (this.muted || !this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
    }

    playHit() {
        if (this.muted || !this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(260, now);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
    }

    playExplode() {
        if (this.muted || !this.ctx) return;
        const now = this.ctx.currentTime;
        const bufferSize = this.ctx.sampleRate * 0.25;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, now);
        filter.frequency.exponentialRampToValueAtTime(50, now + 0.25);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start(now);
    }

    playStart() {
        if (this.muted || !this.ctx) return;
        const now = this.ctx.currentTime;
        [220, 330, 440, 660].forEach((freq, i) => {
            const osc = this.ctx!.createOscillator();
            const gain = this.ctx!.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, now + i * 0.08);
            gain.gain.setValueAtTime(0.12, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.01, now + (i + 1) * 0.08);
            osc.connect(gain);
            gain.connect(this.ctx!.destination);
            osc.start(now + i * 0.08);
            osc.stop(now + (i + 1) * 0.08);
        });
    }
}

interface Block {
    x: number;
    y: number;
    w: number;
    h: number;
    level: number;
    count: number;
    date: string;
    hp: number;
    maxHp: number;
    color: string;
    isCommit: boolean;
    alive: boolean;
}

const LEVEL_COLORS: Record<number, string> = {
    0: "#161b22",
    1: "#0e4429",
    2: "#006d32",
    3: "#26a641",
    4: "#39d353",
};

export default function ContributionShooter({
    username = "kumarram27",
}: {
    username?: string;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const soundRef = useRef<SoundFX>(new SoundFX());
    const [gameState, setGameState] = useState<"START" | "PLAYING" | "VICTORY">("START");
    const [score, setScore] = useState(0);
    const [muted, setMuted] = useState(false);

    const keysRef = useRef({ left: false, right: false, space: false });
    const blocksRef = useRef<Block[]>([]);
    const stateRef = useRef<"START" | "PLAYING" | "VICTORY">("START");

    useEffect(() => {
        stateRef.current = gameState;
    }, [gameState]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        const sound = soundRef.current;

        const player = {
            x: 450,
            y: 530,
            speed: 7,
            vx: 0,
            cooldown: 0,
        };

        let bullets: { x: number; y: number; vy: number }[] = [];
        let particles: {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            alpha: number;
            decay: number;
        }[] = [];

        const stars = Array.from({ length: 60 }, () => ({
            x: Math.random() * 900,
            y: Math.random() * 600,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 1.5 + 0.3,
            alpha: Math.random() * 0.7 + 0.3,
        }));

        // Directly fetch GitHub contribution data from the client
        const initBlocks = async () => {
            try {
                let contributions = [];
                try {
                    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
                    if (res.ok) {
                        const data = await res.json();
                        contributions = data.contributions || [];
                    }
                } catch {
                    // Fallback if offline
                }

                // If fetch returned empty, generate procedural blocks
                if (contributions.length === 0) {
                    for (let i = 0; i < 200; i++) {
                        const lvl = Math.random() > 0.8 ? Math.floor(Math.random() * 4) + 1 : 0;
                        contributions.push({ date: "2026-01-01", count: lvl * 2, level: lvl });
                    }
                }

                // Group into 7-day columns (weeks)
                const weeks: any[][] = [];
                let currentWeek: any[] = [];
                for (const day of contributions) {
                    currentWeek.push(day);
                    if (currentWeek.length === 7) {
                        weeks.push(currentWeek);
                        currentWeek = [];
                    }
                }
                if (currentWeek.length > 0) weeks.push(currentWeek);

                // Keep last 28 weeks
                const selectedWeeks = weeks.slice(-28);
                const blockW = 20;
                const blockH = 18;
                const gap = 4;
                const totalW = selectedWeeks.length * (blockW + gap);
                const startX = (900 - totalW) / 2;
                const startY = 65;

                const newBlocks: Block[] = [];
                selectedWeeks.forEach((week, colIdx) => {
                    week.forEach((day, rowIdx) => {
                        const isCommit = day.level > 0;
                        const hp = isCommit ? day.level : 1;
                        newBlocks.push({
                            x: startX + colIdx * (blockW + gap),
                            y: startY + rowIdx * (blockH + gap),
                            w: blockW,
                            h: blockH,
                            level: day.level,
                            count: day.count,
                            date: day.date,
                            hp,
                            maxHp: hp,
                            color: LEVEL_COLORS[day.level] || LEVEL_COLORS[0],
                            isCommit,
                            alive: true,
                        });
                    });
                });

                blocksRef.current = newBlocks;
            } catch (err) {
                console.error("Failed to load game blocks", err);
            }
        };

        initBlocks();

        const spawnExplosion = (x: number, y: number, color: string, count = 10) => {
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 4 + 1;
                particles.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    size: Math.random() * 3 + 1,
                    color,
                    alpha: 1,
                    decay: Math.random() * 0.03 + 0.02,
                });
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "ArrowLeft" || e.code === "KeyA") keysRef.current.left = true;
            if (e.code === "ArrowRight" || e.code === "KeyD") keysRef.current.right = true;
            if (e.code === "Enter") {
                sound.init();
                if (stateRef.current !== "PLAYING") {
                    sound.playStart();
                    setScore(0);
                    player.x = 450;
                    bullets = [];
                    particles = [];
                    blocksRef.current.forEach((b) => {
                        b.hp = b.maxHp;
                        b.alive = true;
                    });
                    setGameState("PLAYING");
                }
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === "ArrowLeft" || e.code === "KeyA") keysRef.current.left = false;
            if (e.code === "ArrowRight" || e.code === "KeyD") keysRef.current.right = false;
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        // Main Game Loop
        const loop = () => {
            // Starfield animation
            stars.forEach((s) => {
                s.y += s.speed;
                if (s.y > 600) {
                    s.y = 0;
                    s.x = Math.random() * 900;
                }
            });

            // Update Particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= p.decay;
                if (p.alpha <= 0) particles.splice(i, 1);
            }

            if (stateRef.current === "PLAYING") {
                // Player Movement
                if (keysRef.current.left) player.vx = -player.speed;
                else if (keysRef.current.right) player.vx = player.speed;
                else player.vx *= 0.72;

                player.x += player.vx;
                if (player.x < 30) player.x = 30;
                if (player.x > 870) player.x = 870;

                // Auto Laser Blaster
                player.cooldown--;
                if (player.cooldown <= 0) {
                    player.cooldown = 11;
                    bullets.push({ x: player.x - 8, y: player.y - 12, vy: -10 });
                    bullets.push({ x: player.x + 8, y: player.y - 12, vy: -10 });
                    sound.playLaser();
                }

                // Bullets Collision
                for (let i = bullets.length - 1; i >= 0; i--) {
                    const b = bullets[i];
                    b.y += b.vy;
                    if (b.y < 0) {
                        bullets.splice(i, 1);
                        continue;
                    }

                    let hit = false;
                    for (const block of blocksRef.current) {
                        if (!block.alive) continue;
                        if (
                            b.x >= block.x &&
                            b.x <= block.x + block.w &&
                            b.y >= block.y &&
                            b.y <= block.y + block.h
                        ) {
                            block.hp--;
                            hit = true;
                            spawnExplosion(b.x, b.y, "#80ff80", 4);

                            if (block.hp <= 0) {
                                block.alive = false;
                                sound.playExplode();
                                spawnExplosion(block.x + block.w / 2, block.y + block.h / 2, block.color, 14);
                                setScore((prev) => prev + (block.isCommit ? (block.level + 1) * 50 : 10));
                            } else {
                                sound.playHit();
                            }
                            break;
                        }
                    }
                    if (hit) bullets.splice(i, 1);
                }

                // Check Victory Condition
                const remaining = blocksRef.current.filter((b) => b.isCommit && b.alive).length;
                if (remaining === 0 && blocksRef.current.length > 0) {
                    setGameState("VICTORY");
                }
            }

            // Drawing
            ctx.fillStyle = "#050810";
            ctx.fillRect(0, 0, 900, 600);

            // Stars
            stars.forEach((s) => {
                ctx.fillStyle = `rgba(200, 225, 255, ${s.alpha})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Contribution Blocks
            blocksRef.current.forEach((b) => {
                if (!b.alive) {
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
                    ctx.strokeRect(b.x, b.y, b.w, b.h);
                    return;
                }
                ctx.fillStyle = b.color;
                ctx.shadowColor = b.level >= 3 ? b.color : "transparent";
                ctx.shadowBlur = b.level >= 3 ? 8 : 0;
                ctx.fillRect(b.x, b.y, b.w, b.h);
                ctx.shadowBlur = 0;
                ctx.strokeStyle = b.isCommit ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.08)";
                ctx.strokeRect(b.x, b.y, b.w, b.h);
            });

            // Bullets
            ctx.fillStyle = "#39d353";
            ctx.shadowColor = "#39d353";
            ctx.shadowBlur = 8;
            bullets.forEach((b) => ctx.fillRect(b.x - 2, b.y - 6, 4, 10));
            ctx.shadowBlur = 0;

            // Particles
            particles.forEach((p) => {
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalAlpha = 1.0;

            // Player Spaceship
            ctx.save();
            ctx.translate(player.x, player.y);

            // Engine Thruster
            ctx.fillStyle = Math.random() > 0.5 ? "#ff8800" : "#ffcc00";
            ctx.beginPath();
            ctx.moveTo(-6, 12);
            ctx.lineTo(0, 20 + Math.random() * 6);
            ctx.lineTo(6, 12);
            ctx.fill();

            // Jet Wings & Fuselage
            ctx.fillStyle = "#1e293b";
            ctx.strokeStyle = "#39d353";
            ctx.lineWidth = 2;
            ctx.shadowColor = "#39d353";
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.moveTo(0, -16);
            ctx.lineTo(16, 12);
            ctx.lineTo(6, 8);
            ctx.lineTo(0, 12);
            ctx.lineTo(-6, 8);
            ctx.lineTo(-16, 12);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Cockpit Glow
            ctx.fillStyle = "#38bdf8";
            ctx.beginPath();
            ctx.ellipse(0, -2, 4, 7, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // Start Screen Overlay
            if (stateRef.current === "START") {
                ctx.fillStyle = "rgba(5, 8, 16, 0.78)";
                ctx.fillRect(0, 0, 900, 600);

                ctx.textAlign = "center";
                ctx.fillStyle = "#39d353";
                ctx.font = "bold 34px monospace";
                ctx.fillText("GITHUB SPACE SHOOTER", 450, 240);

                ctx.fillStyle = "#94a3b8";
                ctx.font = "16px sans-serif";
                ctx.fillText("Shoot through real GitHub contributions with laser fire!", 450, 280);

                const blink = (Math.sin(Date.now() / 250) + 1) / 2;
                ctx.fillStyle = `rgba(57, 211, 83, ${blink * 0.7 + 0.3})`;
                ctx.font = "bold 22px monospace";
                ctx.fillText("► PRESS [ENTER] OR TAP TO PLAY ◄", 450, 340);

                ctx.fillStyle = "#64748b";
                ctx.font = "14px monospace";
                ctx.fillText("Controls: [◀ / ▶] Arrow Keys to Move", 450, 390);
                ctx.textAlign = "left";
            }

            // Victory Overlay
            if (stateRef.current === "VICTORY") {
                ctx.fillStyle = "rgba(5, 8, 16, 0.82)";
                ctx.fillRect(0, 0, 900, 600);

                ctx.textAlign = "center";
                ctx.fillStyle = "#39d353";
                ctx.font = "bold 36px monospace";
                ctx.fillText("★ ALL COMMITS CLEARED! ★", 450, 260);

                ctx.fillStyle = "#38bdf8";
                ctx.font = "bold 20px monospace";
                ctx.fillText("► PRESS [ENTER] TO REPLAY ◄", 450, 340);
                ctx.textAlign = "left";
            }

            animId = requestAnimationFrame(loop);
        };

        animId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [username]);

    const toggleSound = () => {
        const s = soundRef.current;
        s.init();
        s.muted = !s.muted;
        setMuted(s.muted);
    };

    const triggerStart = () => {
        soundRef.current.init();
        const event = new KeyboardEvent("keydown", { code: "Enter" });
        window.dispatchEvent(event);
    };

    return (
        <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#050810] shadow-[0_0_40px_rgba(16,185,129,0.15)]">
            {/* Top HUD Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-5 py-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                        {username}&apos;s Commit Fleet
                    </span>
                </div>
                <div className="flex items-center gap-4 font-mono text-sm">
                    <span className="text-zinc-400">
                        SCORE: <span className="text-white font-bold">{score}</span>
                    </span>
                    <button
                        onClick={toggleSound}
                        className="rounded-lg border border-white/10 p-1.5 text-zinc-400 hover:bg-white/5 hover:text-white"
                        title="Toggle Sound"
                    >
                        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                </div>
            </div>

            {/* Game Canvas */}
            <canvas
                ref={canvasRef}
                width={900}
                height={600}
                onClick={triggerStart}
                className="w-full aspect-[3/2] cursor-crosshair block"
            />

            {/* Mobile Touch Controls */}
            <div className="flex sm:hidden items-center justify-between p-4 bg-black/60 border-t border-white/10">
                <div className="flex gap-2">
                    <button
                        onPointerDown={() => (keysRef.current.left = true)}
                        onPointerUp={() => (keysRef.current.left = false)}
                        className="h-14 w-14 rounded-full border border-emerald-500/40 bg-emerald-500/20 text-xl text-white active:bg-emerald-500/40"
                    >
                        ◀
                    </button>
                    <button
                        onPointerDown={() => (keysRef.current.right = true)}
                        onPointerUp={() => (keysRef.current.right = false)}
                        className="h-14 w-14 rounded-full border border-emerald-500/40 bg-emerald-500/20 text-xl text-white active:bg-emerald-500/40"
                    >
                        ▶
                    </button>
                </div>
                <button
                    onClick={triggerStart}
                    className="rounded-xl border border-emerald-500/40 bg-emerald-500/20 px-4 py-2 font-mono text-xs text-white"
                >
                    [ENTER]
                </button>
            </div>
        </div>
    );
}
