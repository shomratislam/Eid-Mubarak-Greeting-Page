function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#ff0000', '#ffd700', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffffff'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight * 0.6); // Keep in upper 60% of screen
            
            const color1 = colors[Math.floor(Math.random() * colors.length)];
            const color2 = colors[Math.floor(Math.random() * colors.length)];
            
            firework.style.setProperty('--x', `${x}px`);
            firework.style.setProperty('--y', `${y}px`);
            firework.style.setProperty('--color1', color1);
            firework.style.setProperty('--color2', color2);
            
            const particleCount = 30 + Math.floor(Math.random() * 20);
            
            firework.style.width = '4px';
            firework.style.height = '4px';
            firework.style.backgroundColor = color1;
            firework.style.position = 'absolute';
            firework.style.borderRadius = '50%';
            firework.style.boxShadow = `0 0 6px 2px ${color1}`;
            
            const xStart = Math.random() * window.innerWidth;
            const xEnd = xStart + (Math.random() * 100 - 50);
            const yEnd = 100 + Math.random() * (window.innerHeight * 0.5);
            
            firework.style.setProperty('--x-start', `${xStart}px`);
            firework.style.setProperty('--x-end', `${xEnd}px`);
            firework.style.setProperty('--y-end', `${yEnd}px`);
            
            const duration = 1 + Math.random() * 1;
            firework.style.animation = `launch ${duration}s forwards`;
            
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => {

                firework.remove();
                
                for (let j = 0; j < particleCount; j++) {
                    const particle = document.createElement('div');
                    particle.className = 'explosion';
                    
                    particle.style.left = xEnd + 'px';
                    particle.style.top = yEnd + 'px';
                    
                    const angle = Math.random() * Math.PI * 2;
                    const distance = 50 + Math.random() * 80;
                    const dx = Math.cos(angle) * distance;
                    const dy = Math.sin(angle) * distance;
                    
                    particle.style.setProperty('--dx', `${dx}px`);
                    particle.style.setProperty('--dy', `${dy}px`);
                    
                    const particleColor = j % 2 === 0 ? color1 : color2;
                    particle.style.backgroundColor = particleColor;
                    particle.style.boxShadow = `0 0 4px 1px ${particleColor}`;
                    
                    const particleDuration = 0.5 + Math.random() * 1;
                    particle.style.animation = `explode ${particleDuration}s forwards`;
                    
                    fireworksContainer.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, particleDuration * 1000);
                }
            }, duration * 1000);
            
        }, i * 300); 
    }
    
    setTimeout(createFireworks, 6000);
}

window.addEventListener('load', createFireworks);