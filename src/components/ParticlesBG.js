import React, { useEffect, useRef } from 'react'

export default function ParticlesBG(){
    const canvasRef = useRef(null);
    const animationRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const particleCount = isMobile ? 60 : 120;
        const maxDistance = isMobile ? 80 : 120;

        const mouse = { x: width / 2, y: height / 2, active: false };

        const particles = [];
        for(let i=0;i<particleCount;i++){
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                size: Math.random() * 1.8 + 0.6
            });
        }

        function onResize(){
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        function onMove(e){
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        }

        function onLeave(){
            mouse.active = false;
        }

        window.addEventListener('resize', onResize);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseleave', onLeave);

        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, 'rgba(99,102,241,0.8)');
        gradient.addColorStop(1, 'rgba(56,189,248,0.8)');

        function draw(){
            ctx.clearRect(0, 0, width, height);

            // draw connections first for layering
            for(let i=0;i<particles.length;i++){
                const p = particles[i];
                for(let j=i+1;j<particles.length;j++){
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.hypot(dx, dy);
                    if(dist < maxDistance){
                        const alpha = 1 - dist / maxDistance;
                        ctx.strokeStyle = `rgba(148, 163, 184, ${alpha * 0.35})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.stroke();
                    }
                }
            }

            // draw points
            for(let i=0;i<particles.length;i++){
                const p = particles[i];

                // gentle drift
                p.x += p.vx;
                p.y += p.vy;

                // mouse interaction (subtle repulsion)
                if(mouse.active){
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const d = Math.hypot(dx, dy) || 1;
                    const force = Math.min(60 / (d * d), 0.06);
                    p.vx += (dx / d) * force;
                    p.vy += (dy / d) * force;
                }

                // wrap around edges
                if(p.x < -10) p.x = width + 10;
                if(p.x > width + 10) p.x = -10;
                if(p.y < -10) p.y = height + 10;
                if(p.y > height + 10) p.y = -10;

                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
        }
    }, [])

    return <canvas ref={canvasRef} className="w-full h-full" style={{ display: 'block' }} />
}


