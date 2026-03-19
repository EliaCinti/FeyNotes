// Extracted graph functions from original study hub
function initGraph(section) {
  const canvas = document.getElementById(`canvas-${section.id}`);
  const controlsDiv = document.getElementById(`controls-${section.id}`);
  if (!canvas || !controlsDiv) return;
  const ctx = canvas.getContext('2d');

  switch (section.graphType) {
    case 'vectors_kinematics':
      drawVectorsKinematics(ctx, canvas, controlsDiv);
      break;
    case 'parabolic_motion':
      drawParabolicMotion(ctx, canvas, controlsDiv);
      break;
    case 'circular_motion':
      drawCircularMotion(ctx, canvas, controlsDiv);
      break;
    case 'vector_components':
      drawVectorComponents(ctx, canvas, controlsDiv);
      break;
    case 'acceleration_concept':
      drawAccelerationConcept(ctx, canvas, controlsDiv);
      break;
    case 'free_fall':
      drawFreeFall(ctx, canvas, controlsDiv);
      break;
    case 'mru_mua':
      drawMruMua(ctx, canvas, controlsDiv);
      break;
    case 'intrinsic_decomposition':
      drawIntrinsicDecomposition(ctx, canvas, controlsDiv);
      break;
    case 'mcu_period':
      drawMcuPeriod(ctx, canvas, controlsDiv);
      break;
    case 'mcua_transient':
      drawMcuaTransient(ctx, canvas, controlsDiv);
      break;
    case 'cross_product_circular':
      drawCrossProductCircular(ctx, canvas, controlsDiv);
      break;
    case 'angular_kinematics':
      drawAngularKinematics(ctx, canvas, controlsDiv);
      break;
    case 'newton_second_law':
      drawNewtonSecondLaw(ctx, canvas, controlsDiv);
      break;
    case 'impulse_theorem':
      drawImpulseTheorem(ctx, canvas, controlsDiv);
      break;
    case 'third_law':
      drawThirdLaw(ctx, canvas, controlsDiv);
      break;
    case 'vector_equilibrium':
      drawVectorEquilibrium(ctx, canvas, controlsDiv);
      break;
    case 'contact_masses':
      drawContactMasses(ctx, canvas, controlsDiv);
      break;
    case 'weight_normal':
      drawWeightNormal(ctx, canvas, controlsDiv);
      break;
    default:
      ctx.fillStyle = '#6b7089';
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`Grafico "${section.graphType}" non ancora implementato`, canvas.width/2, canvas.height/2);
  }
}

// ─── Graph: Vectors Kinematics ───
function drawVectorsKinematics(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let animT = 0;
  let animId = null;
  let running = false;

  function draw(t) {
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = '#252940';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= W; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Axes
    ctx.strokeStyle = '#353a55';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(50, H-40); ctx.lineTo(W-30, H-40); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(50, H-40); ctx.lineTo(50, 30); ctx.stroke();
    ctx.fillStyle = '#6b7089'; ctx.font = '12px sans-serif';
    ctx.fillText('x', W-20, H-35);
    ctx.fillText('y', 55, 25);

    // Origin
    const ox = 100, oy = H - 80;
    ctx.fillStyle = '#6c8cff';
    ctx.beginPath(); ctx.arc(ox, oy, 4, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#a0a5b8'; ctx.font = '12px sans-serif';
    ctx.fillText('O', ox - 12, oy + 16);

    // Trajectory (curved path)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(108,140,255,0.25)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    for (let i = 0; i <= 100; i++) {
      const frac = i / 100;
      const px = ox + frac * 450;
      const py = oy - Math.sin(frac * Math.PI * 1.2) * 200 - frac * 40;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Points along trajectory
    const tA = 0.2;
    const tB = Math.min(0.2 + t * 0.6, 0.8);
    const posA = { x: ox + tA * 450, y: oy - Math.sin(tA * Math.PI * 1.2) * 200 - tA * 40 };
    const posB = { x: ox + tB * 450, y: oy - Math.sin(tB * Math.PI * 1.2) * 200 - tB * 40 };

    // Position vectors r_i and r_f
    drawArrow(ctx, ox, oy, posA.x, posA.y, '#74c0fc', 2);
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px sans-serif';
    const rAMid = { x: (ox + posA.x)/2 - 15, y: (oy + posA.y)/2 + 5 };
    drawVecLabel(ctx, 'r', rAMid.x, rAMid.y, { sub: 'i' });

    drawArrow(ctx, ox, oy, posB.x, posB.y, '#b197fc', 2);
    ctx.fillStyle = '#b197fc'; ctx.font = 'bold 13px sans-serif';
    const rBMid = { x: (ox + posB.x)/2 + 10, y: (oy + posB.y)/2 - 5 };
    drawVecLabel(ctx, 'r', rBMid.x, rBMid.y, { sub: 'f' });

    // Displacement vector Δr
    drawArrow(ctx, posA.x, posA.y, posB.x, posB.y, '#f0c050', 2.5);
    const drMid = { x: (posA.x + posB.x)/2, y: (posA.y + posB.y)/2 - 15 };
    ctx.fillStyle = '#f0c050'; ctx.font = 'bold 14px sans-serif';
    drawVecLabel(ctx, 'Δr', drMid.x, drMid.y);

    // Points
    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath(); ctx.arc(posA.x, posA.y, 5, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#e8eaf0'; ctx.font = '12px sans-serif';
    ctx.fillText('P(ti)', posA.x - 10, posA.y + 20);

    ctx.fillStyle = '#51cf66';
    ctx.beginPath(); ctx.arc(posB.x, posB.y, 5, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#e8eaf0'; ctx.font = '12px sans-serif';
    ctx.fillText('P(tf)', posB.x + 8, posB.y + 18);
  }

  function animate() {
    if (!running) return;
    animT += 0.008;
    if (animT > 1) { animT = 1; running = false; }
    draw(animT);
    if (running) animId = requestAnimationFrame(animate);
  }

  draw(1); // draw complete state initially

  const playBtn = document.createElement('button');
  playBtn.className = 'graph-btn';
  playBtn.textContent = '▶ Anima';
  playBtn.onclick = () => {
    animT = 0; running = true;
    animate();
  };
  controls.appendChild(playBtn);

  const resetBtn = document.createElement('button');
  resetBtn.className = 'graph-btn';
  resetBtn.textContent = '↺ Reset';
  resetBtn.onclick = () => {
    running = false; if (animId) cancelAnimationFrame(animId);
    animT = 1; draw(1);
  };
  controls.appendChild(resetBtn);
}

// ─── Graph: Parabolic Motion ───
function drawParabolicMotion(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  const g = 9.81;
  let angle = 45, v0 = 30;

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = '#252940'; ctx.lineWidth = 0.5;
    for (let x = 0; x <= W; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    const ox = 60, oy = H - 50;
    // Axes
    ctx.strokeStyle = '#353a55'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(W - 20, oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox, 20); ctx.stroke();
    ctx.fillStyle = '#6b7089'; ctx.font = '12px sans-serif';
    ctx.fillText('x', W - 15, oy + 16);
    ctx.fillText('y', ox - 15, 25);

    const rad = angle * Math.PI / 180;
    const vx = v0 * Math.cos(rad), vy = v0 * Math.sin(rad);
    const tFlight = 2 * vy / g;
    const xMax = vx * tFlight;
    const yMax = vy * vy / (2 * g);

    // Scale to fit
    const scaleX = (W - 100) / Math.max(xMax, 1);
    const scaleY = (H - 100) / Math.max(yMax * 1.2, 1);
    const scale = Math.min(scaleX, scaleY);

    // Trajectory
    ctx.beginPath();
    ctx.strokeStyle = '#6c8cff'; ctx.lineWidth = 2.5;
    const steps = 100;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * tFlight;
      const px = ox + vx * t * scale;
      const py = oy - (vy * t - 0.5 * g * t * t) * scale;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // v0 arrow
    const arrowLen = 60;
    drawArrow(ctx, ox, oy, ox + arrowLen * Math.cos(rad), oy - arrowLen * Math.sin(rad), '#f0c050', 2.5);
    ctx.fillStyle = '#f0c050'; ctx.font = 'bold 13px sans-serif';
    drawVecLabel(ctx, 'v', ox + arrowLen * Math.cos(rad) + 5, oy - arrowLen * Math.sin(rad) - 5, { sub: '0' });

    // Components
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(116,192,252,0.4)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + arrowLen * Math.cos(rad), oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox + arrowLen * Math.cos(rad), oy); ctx.lineTo(ox + arrowLen * Math.cos(rad), oy - arrowLen * Math.sin(rad)); ctx.stroke();
    ctx.setLineDash([]);

    // Apex marker
    const tApex = vy / g;
    const apexX = ox + vx * tApex * scale;
    const apexY = oy - yMax * scale;
    ctx.setLineDash([3, 3]); ctx.strokeStyle = '#51cf66'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(apexX, apexY); ctx.lineTo(apexX, oy); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#51cf66'; ctx.beginPath(); ctx.arc(apexX, apexY, 4, 0, Math.PI*2); ctx.fill();
    ctx.font = '11px sans-serif';
    ctx.fillText(`h = ${yMax.toFixed(1)} m`, apexX + 8, apexY - 5);

    // Range
    const rangeX = ox + xMax * scale;
    ctx.fillStyle = '#ff6b6b'; ctx.beginPath(); ctx.arc(rangeX, oy, 4, 0, Math.PI*2); ctx.fill();
    ctx.font = '11px sans-serif';
    ctx.fillText(`R = ${xMax.toFixed(1)} m`, rangeX - 25, oy + 20);

    // Info
    ctx.fillStyle = '#a0a5b8'; ctx.font = '12px sans-serif';
    ctx.fillText(`θ = ${angle}°  |  v0 = ${v0} m/s  |  T = ${tFlight.toFixed(2)} s`, ox + 10, 30);
  }

  draw();

  // Angle slider
  const ag = document.createElement('div');
  ag.className = 'graph-slider-group';
  ag.innerHTML = `<span>θ:</span><input type="range" min="5" max="85" value="${angle}"><span class="slider-val">${angle}°</span>`;
  ag.querySelector('input').oninput = function() {
    angle = +this.value;
    ag.querySelector('.slider-val').textContent = angle + '°';
    draw();
  };
  controls.appendChild(ag);

  // v0 slider
  const vg = document.createElement('div');
  vg.className = 'graph-slider-group';
  vg.innerHTML = `<span>v₀:</span><input type="range" min="5" max="60" value="${v0}"><span class="slider-val">${v0} m/s</span>`;
  vg.querySelector('input').oninput = function() {
    v0 = +this.value;
    vg.querySelector('.slider-val').textContent = v0 + ' m/s';
    draw();
  };
  controls.appendChild(vg);
}

// ─── Graph: Circular Motion ───
function drawCircularMotion(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2, R = 140;
  let theta = 0;
  let running = false;
  let animId = null;

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = '#252940'; ctx.lineWidth = 0.5;
    for (let x = 0; x <= W; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Circle path
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(108,140,255,0.3)'; ctx.lineWidth = 2;
    ctx.stroke();

    // Center
    ctx.fillStyle = '#6b7089';
    ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#6b7089'; ctx.font = '12px sans-serif'; ctx.fillText('O', cx - 12, cy + 16);

    // Point on circle
    const px = cx + R * Math.cos(theta);
    const py = cy - R * Math.sin(theta);

    // Radius vector
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(160,165,184,0.3)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
    ctx.setLineDash([]);

    // Velocity vector (tangent)
    const vLen = 70;
    const vx = -Math.sin(theta), vy = -Math.cos(theta); // perpendicular to radius, flipped y
    drawArrow(ctx, px, py, px + vx * vLen, py + vy * vLen, '#51cf66', 2.5);
    ctx.fillStyle = '#51cf66'; ctx.font = 'bold 13px sans-serif';
    drawVecLabel(ctx, 'v', px + vx * vLen + 8, py + vy * vLen);

    // Centripetal acceleration (toward center)
    const aLen = 50;
    const ax = cx - px, ay = cy - py;
    const aMag = Math.sqrt(ax * ax + ay * ay);
    drawArrow(ctx, px, py, px + (ax / aMag) * aLen, py + (ay / aMag) * aLen, '#ff6b6b', 2.5);
    ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 13px sans-serif';
    drawVecLabel(ctx, 'a', px + (ax / aMag) * aLen + 8, py + (ay / aMag) * aLen - 5, { sub: 'n' });

    // Point
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2); ctx.fill();

    // Angle arc
    ctx.beginPath();
    ctx.arc(cx, cy, 30, 0, -theta, theta > 0);
    ctx.strokeStyle = '#ffa94d'; ctx.lineWidth = 1.5;
    ctx.stroke();
    if (theta > 0.15) {
      ctx.fillStyle = '#ffa94d'; ctx.font = '12px sans-serif';
      ctx.fillText('θ', cx + 35 * Math.cos(theta / 2), cy - 35 * Math.sin(theta / 2) + 4);
    }

    // Labels
    ctx.fillStyle = '#a0a5b8'; ctx.font = '12px sans-serif';
    ctx.fillText('R = const  |  |v| = const  |  an = v²/R', 20, 25);
  }

  function animate() {
    if (!running) return;
    theta += 0.02;
    if (theta > Math.PI * 2) theta -= Math.PI * 2;
    draw();
    animId = requestAnimationFrame(animate);
  }

  theta = Math.PI / 4;
  draw();

  const playBtn = document.createElement('button');
  playBtn.className = 'graph-btn';
  playBtn.textContent = '▶ Anima';
  playBtn.onclick = () => {
    if (running) { running = false; playBtn.textContent = '▶ Anima'; }
    else { running = true; playBtn.textContent = '⏸ Pausa'; animate(); }
  };
  controls.appendChild(playBtn);

  const resetBtn = document.createElement('button');
  resetBtn.className = 'graph-btn';
  resetBtn.textContent = '↺ Reset';
  resetBtn.onclick = () => {
    running = false; if (animId) cancelAnimationFrame(animId);
    playBtn.textContent = '▶ Anima';
    theta = Math.PI / 4; draw();
  };
  controls.appendChild(resetBtn);
}

// ═══════════════════════════════════════════════════════════════
//   NEW ANIMATIONS
// ═══════════════════════════════════════════════════════════════

// ─── Graph: Vector Components (L02) ───
// Interactive decomposition of a 2D vector into x,y components
function drawVectorComponents(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let angle = 40, magnitude = 180;

  function drawGrid() {
    ctx.strokeStyle = '#252940'; ctx.lineWidth = 0.5;
    for (let x = 0; x <= W; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();

    const ox = 120, oy = H - 80;
    // Axes
    ctx.strokeStyle = '#353a55'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(40, oy); ctx.lineTo(W - 30, oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox, H - 30); ctx.lineTo(ox, 30); ctx.stroke();
    ctx.fillStyle = '#6b7089'; ctx.font = '13px sans-serif';
    ctx.fillText('x', W - 22, oy + 18);
    ctx.fillText('y', ox - 18, 28);

    // Unit vectors
    const uLen = 40;
    drawArrow(ctx, ox, oy, ox + uLen, oy, '#74c0fc', 2);
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px sans-serif';
    drawVecLabel(ctx, 'i', ox + uLen + 6, oy + 4);
    drawArrow(ctx, ox, oy, ox, oy - uLen, '#b197fc', 2);
    ctx.fillStyle = '#b197fc'; ctx.font = 'bold 13px sans-serif';
    drawVecLabel(ctx, 'j', ox + 6, oy - uLen - 4);

    const rad = angle * Math.PI / 180;
    const vx = magnitude * Math.cos(rad);
    const vy = magnitude * Math.sin(rad);
    const endX = ox + vx, endY = oy - vy;

    // Dashed components
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = 'rgba(116,192,252,0.4)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(endX, endY); ctx.lineTo(endX, oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(endX, endY); ctx.lineTo(ox, endY); ctx.stroke();
    ctx.setLineDash([]);

    // Component arrows
    drawArrow(ctx, ox, oy, endX, oy, '#74c0fc', 2.5);
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px sans-serif';
    ctx.fillText(`Ax = ${vx.toFixed(0)}`, ox + vx / 2 - 20, oy + 22);

    drawArrow(ctx, ox, oy, ox, endY, '#b197fc', 2.5);
    ctx.fillStyle = '#b197fc'; ctx.font = 'bold 13px sans-serif';
    ctx.fillText(`Ay = ${vy.toFixed(0)}`, ox - 65, oy - vy / 2 + 5);

    // Main vector
    drawArrow(ctx, ox, oy, endX, endY, '#f0c050', 3);
    ctx.fillStyle = '#f0c050'; ctx.font = 'bold 14px sans-serif';
    drawVecLabel(ctx, 'A', endX + 10, endY - 10);

    // Angle arc
    ctx.beginPath();
    ctx.arc(ox, oy, 35, -rad, 0);
    ctx.strokeStyle = '#ffa94d'; ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#ffa94d'; ctx.font = '13px sans-serif';
    ctx.fillText(`θ = ${angle}°`, ox + 42, oy - 8);

    // Info
    ctx.fillStyle = '#a0a5b8'; ctx.font = '12px sans-serif';
    ctx.fillText(`|A| = ${magnitude}  |  Ax = |A|cos θ = ${vx.toFixed(1)}  |  Ay = |A|sin θ = ${vy.toFixed(1)}`, ox + 80, 30);

    // Origin
    ctx.fillStyle = '#6c8cff';
    ctx.beginPath(); ctx.arc(ox, oy, 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#a0a5b8'; ctx.font = '12px sans-serif';
    ctx.fillText('O', ox - 14, oy + 18);
  }

  draw();

  const ag = document.createElement('div');
  ag.className = 'graph-slider-group';
  ag.innerHTML = `<span>θ:</span><input type="range" min="0" max="90" value="${angle}"><span class="slider-val">${angle}°</span>`;
  ag.querySelector('input').oninput = function () {
    angle = +this.value;
    ag.querySelector('.slider-val').textContent = angle + '°';
    draw();
  };
  controls.appendChild(ag);

  const mg = document.createElement('div');
  mg.className = 'graph-slider-group';
  mg.innerHTML = `<span>|A|:</span><input type="range" min="40" max="280" value="${magnitude}"><span class="slider-val">${magnitude}</span>`;
  mg.querySelector('input').oninput = function () {
    magnitude = +this.value;
    mg.querySelector('.slider-val').textContent = magnitude;
    draw();
  };
  controls.appendChild(mg);
}

// ─── Graph: Acceleration Concept (L03) ───
// Ball thrown upward — v=0 at top but a≠0
function drawAccelerationConcept(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  const g = 9.81;
  let v0 = 25, t = 0;
  let running = false, animId = null;

  const ox = W / 2, groundY = H - 60;
  const tMax = 2 * v0 / g;
  const hMax = v0 * v0 / (2 * g);
  const scaleY = (H - 120) / hMax;

  function getState(time) {
    const y = v0 * time - 0.5 * g * time * time;
    const v = v0 - g * time;
    return { y: Math.max(y, 0), v, a: -g };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Background grid
    ctx.strokeStyle = '#252940'; ctx.lineWidth = 0.5;
    for (let x = 0; x <= W; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Ground
    ctx.strokeStyle = '#353a55'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(40, groundY); ctx.lineTo(W - 40, groundY); ctx.stroke();

    // Vertical axis
    ctx.setLineDash([3, 5]);
    ctx.strokeStyle = 'rgba(108,140,255,0.2)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(ox, groundY); ctx.lineTo(ox, 30); ctx.stroke();
    ctx.setLineDash([]);

    const state = getState(t);
    const ballY = groundY - state.y * scaleY;

    // Trail (faded positions)
    const trailSteps = 20;
    for (let i = 0; i < trailSteps; i++) {
      const tt = (t / trailSteps) * i;
      const s = getState(tt);
      const ty = groundY - s.y * scaleY;
      ctx.fillStyle = `rgba(108,140,255,${0.05 + 0.03 * i})`;
      ctx.beginPath(); ctx.arc(ox, ty, 8, 0, Math.PI * 2); ctx.fill();
    }

    // Ball
    ctx.fillStyle = '#6c8cff';
    ctx.beginPath(); ctx.arc(ox, ballY, 14, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(ox - 4, ballY - 4, 3, 0, Math.PI * 2); ctx.fill();

    // Velocity vector (green, up/down)
    if (Math.abs(state.v) > 0.5) {
      const vScale = 3;
      drawArrow(ctx, ox + 30, ballY, ox + 30, ballY - state.v * vScale, '#51cf66', 2.5);
      ctx.fillStyle = '#51cf66'; ctx.font = 'bold 12px sans-serif';
      ctx.fillText(`v = ${state.v.toFixed(1)} m/s`, ox + 42, ballY - state.v * vScale / 2);
    } else {
      ctx.fillStyle = '#51cf66'; ctx.font = 'bold 13px sans-serif';
      ctx.fillText('v = 0 !', ox + 36, ballY + 4);
    }

    // Acceleration vector (red, always down)
    const aScale = 4;
    drawArrow(ctx, ox - 30, ballY, ox - 30, ballY + Math.abs(state.a) * aScale, '#ff6b6b', 2.5);
    ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 12px sans-serif';
    ctx.fillText(`a = −g`, ox - 80, ballY + Math.abs(state.a) * aScale / 2);

    // Height label
    if (state.y > 0.5) {
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = 'rgba(240,192,80,0.3)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(ox - 50, ballY); ctx.lineTo(ox - 50, groundY); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#f0c050'; ctx.font = '11px sans-serif';
      ctx.fillText(`h = ${state.y.toFixed(1)} m`, ox - 110, (ballY + groundY) / 2);
    }

    // Info bar
    ctx.fillStyle = '#a0a5b8'; ctx.font = '12px sans-serif';
    ctx.fillText(`t = ${t.toFixed(2)} s  |  v0 = ${v0} m/s  |  h_max = ${hMax.toFixed(1)} m  |  T = ${tMax.toFixed(2)} s`, 50, 25);

    // Key insight at apex
    const tApex = v0 / g;
    if (Math.abs(t - tApex) < 0.15) {
      ctx.fillStyle = '#ffa94d'; ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('⚠ v = 0  ma  a ≠ 0 !', ox, ballY - 30);
      ctx.textAlign = 'left';
    }
  }

  draw();

  function animate() {
    if (!running) return;
    t += 0.025;
    if (t > tMax) { t = tMax; running = false; }
    draw();
    if (running) animId = requestAnimationFrame(animate);
  }

  const playBtn = document.createElement('button');
  playBtn.className = 'graph-btn';
  playBtn.textContent = '▶ Lancia';
  playBtn.onclick = () => {
    t = 0; running = true; animate();
  };
  controls.appendChild(playBtn);

  const resetBtn = document.createElement('button');
  resetBtn.className = 'graph-btn';
  resetBtn.textContent = '↺ Reset';
  resetBtn.onclick = () => {
    running = false; if (animId) cancelAnimationFrame(animId);
    t = 0; draw();
  };
  controls.appendChild(resetBtn);
}

// ─── Graph: Free Fall 3 Cases (L04) ───
function drawFreeFall(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  const g = 9.81;
  const floorH = 200; // meters
  let t = 0, running = false, animId = null;
  const scaleY = (H - 100) / floorH;
  const groundY = H - 50;

  // 3 cases
  const cases = [
    { label: 'Caso 1: Caduta da fermo', v0: 0, color: '#74c0fc', x: W * 0.2 },
    { label: 'Caso 2: Lancio verso il basso', v0: 15, color: '#f0c050', x: W * 0.5 },
    { label: 'Caso 3: Lancio verso l\'alto', v0: -20, color: '#ff6b6b', x: W * 0.8 }
  ];

  function getY(c, time) {
    // y measured downward from top = H at start
    const y = c.v0 * time + 0.5 * g * time * time;
    return Math.min(y, floorH);
  }

  function getV(c, time) {
    return c.v0 + g * time;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = '#252940'; ctx.lineWidth = 0.5;
    for (let x = 0; x <= W; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Ground
    ctx.strokeStyle = '#353a55'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(20, groundY); ctx.lineTo(W - 20, groundY); ctx.stroke();
    ctx.fillStyle = '#353a55'; ctx.font = '11px sans-serif';
    ctx.fillText('suolo (H = 200 m)', W / 2 - 50, groundY + 16);

    // Top platform
    const topY = groundY - floorH * scaleY;
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = '#353a55'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(20, topY); ctx.lineTo(W - 20, topY); ctx.stroke();
    ctx.setLineDash([]);

    for (const c of cases) {
      const posDown = getY(c, t);
      const v = getV(c, t);
      const ballY = topY + posDown * scaleY;
      const actualBallY = Math.min(ballY, groundY);

      // Trail
      for (let i = 0; i < 15; i++) {
        const tt = (t / 15) * i;
        const pd = getY(c, tt);
        const ty = topY + pd * scaleY;
        if (ty <= groundY) {
          ctx.fillStyle = c.color.replace(')', ',0.15)').replace('rgb', 'rgba').replace('#', '');
          // Simple alpha approach
          ctx.globalAlpha = 0.1 + 0.02 * i;
          ctx.fillStyle = c.color;
          ctx.beginPath(); ctx.arc(c.x, Math.min(ty, groundY), 5, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // Ball
      ctx.fillStyle = c.color;
      ctx.beginPath(); ctx.arc(c.x, actualBallY, 12, 0, Math.PI * 2); ctx.fill();

      // Velocity arrow
      if (posDown < floorH) {
        const vScale = 2;
        const vDir = v * vScale;
        if (Math.abs(vDir) > 3) {
          drawArrow(ctx, c.x + 20, actualBallY, c.x + 20, actualBallY + vDir, c.color, 2);
        }
        ctx.fillStyle = c.color; ctx.font = '11px sans-serif';
        ctx.fillText(`v = ${v.toFixed(1)} m/s`, c.x - 35, actualBallY - 20);
      }

      // Label
      ctx.fillStyle = c.color; ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(c.label, c.x, topY - 12);
      ctx.fillText(`v0 = ${c.v0} m/s`, c.x, topY - 0);
      ctx.textAlign = 'left';
    }

    ctx.fillStyle = '#a0a5b8'; ctx.font = '12px sans-serif';
    ctx.fillText(`t = ${t.toFixed(2)} s  |  g = ${g} m/s²  |  H = ${floorH} m`, 30, 25);
  }

  draw();

  function animate() {
    if (!running) return;
    t += 0.04;
    // Stop when all balls have landed
    const allLanded = cases.every(c => getY(c, t) >= floorH);
    if (allLanded || t > 15) { running = false; }
    draw();
    if (running) animId = requestAnimationFrame(animate);
  }

  const playBtn = document.createElement('button');
  playBtn.className = 'graph-btn';
  playBtn.textContent = '▶ Lascia cadere';
  playBtn.onclick = () => { t = 0; running = true; animate(); };
  controls.appendChild(playBtn);

  const resetBtn = document.createElement('button');
  resetBtn.className = 'graph-btn';
  resetBtn.textContent = '↺ Reset';
  resetBtn.onclick = () => {
    running = false; if (animId) cancelAnimationFrame(animId);
    t = 0; draw();
  };
  controls.appendChild(resetBtn);
}

// ─── Graph: MRU vs MUA comparison (L04) ───
function drawMruMua(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let t = 0, running = false, animId = null;

  const v0_mru = 10;     // constant velocity for MRU
  const v0_mua = 2;      // initial velocity for MUA
  const a_mua = 3;        // acceleration for MUA
  const tMaxSim = 8;
  const roadY_mru = H / 2 - 40;
  const roadY_mua = H / 2 + 80;
  const startX = 80;
  const scaleX = (W - 120) / (v0_mru * tMaxSim);

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = '#252940'; ctx.lineWidth = 0.5;
    for (let x = 0; x <= W; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // ── MRU ──
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px sans-serif';
    ctx.fillText('MRU — Moto Rettilineo Uniforme', startX, roadY_mru - 35);
    ctx.fillStyle = '#6b7089'; ctx.font = '11px sans-serif';
    ctx.fillText(`v = ${v0_mru} m/s = costante  |  a = 0`, startX, roadY_mru - 18);

    // Road
    ctx.strokeStyle = '#353a55'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(startX, roadY_mru); ctx.lineTo(W - 30, roadY_mru); ctx.stroke();

    // Position marks
    for (let i = 0; i <= tMaxSim; i++) {
      const px = startX + v0_mru * i * scaleX;
      if (px <= W - 30) {
        ctx.strokeStyle = '#353a55'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(px, roadY_mru - 5); ctx.lineTo(px, roadY_mru + 5); ctx.stroke();
        ctx.fillStyle = '#6b7089'; ctx.font = '10px sans-serif';
        ctx.fillText(`${(v0_mru * i).toFixed(0)}m`, px - 8, roadY_mru + 18);
      }
    }

    // MRU ball
    const x_mru = Math.min(v0_mru * t, v0_mru * tMaxSim);
    const bx_mru = startX + x_mru * scaleX;
    ctx.fillStyle = '#74c0fc';
    ctx.beginPath(); ctx.arc(Math.min(bx_mru, W - 30), roadY_mru - 14, 10, 0, Math.PI * 2); ctx.fill();

    // MRU velocity arrow
    if (bx_mru < W - 30) {
      drawArrow(ctx, Math.min(bx_mru, W - 30) + 16, roadY_mru - 14, Math.min(bx_mru, W - 30) + 16 + 40, roadY_mru - 14, '#51cf66', 2);
      ctx.fillStyle = '#51cf66'; ctx.font = '11px sans-serif';
      drawVecLabel(ctx, 'v', Math.min(bx_mru, W - 30) + 60, roadY_mru - 18);
    }

    // ── MUA ──
    ctx.fillStyle = '#f0c050'; ctx.font = 'bold 13px sans-serif';
    ctx.fillText('MUA — Moto Uniformemente Accelerato', startX, roadY_mua - 35);
    ctx.fillStyle = '#6b7089'; ctx.font = '11px sans-serif';
    ctx.fillText(`v0 = ${v0_mua} m/s  |  a = ${a_mua} m/s²`, startX, roadY_mua - 18);

    // Road
    ctx.strokeStyle = '#353a55'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(startX, roadY_mua); ctx.lineTo(W - 30, roadY_mua); ctx.stroke();

    // MUA ball
    const x_mua = v0_mua * t + 0.5 * a_mua * t * t;
    const v_mua = v0_mua + a_mua * t;
    const bx_mua = startX + x_mua * scaleX;
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(Math.min(bx_mua, W - 30), roadY_mua - 14, 10, 0, Math.PI * 2); ctx.fill();

    // MUA velocity arrow (grows!)
    if (bx_mua < W - 30) {
      const vArrowLen = Math.min(v_mua * 4, 80);
      drawArrow(ctx, Math.min(bx_mua, W - 30) + 16, roadY_mua - 14, Math.min(bx_mua, W - 30) + 16 + vArrowLen, roadY_mua - 14, '#51cf66', 2);
      ctx.fillStyle = '#51cf66'; ctx.font = '11px sans-serif';
      ctx.fillText(`v = ${v_mua.toFixed(1)}`, Math.min(bx_mua, W - 30) + 20 + vArrowLen, roadY_mua - 18);

      // Acceleration arrow
      drawArrow(ctx, Math.min(bx_mua, W - 30) + 16, roadY_mua - 30, Math.min(bx_mua, W - 30) + 16 + 25, roadY_mua - 30, '#ff6b6b', 2);
      ctx.fillStyle = '#ff6b6b'; ctx.font = '10px sans-serif';
      drawVecLabel(ctx, 'a', Math.min(bx_mua, W - 30) + 45, roadY_mua - 34);
    }

    // Info
    ctx.fillStyle = '#a0a5b8'; ctx.font = '12px sans-serif';
    ctx.fillText(`t = ${t.toFixed(2)} s  |  x_MRU = ${x_mru.toFixed(1)} m  |  x_MUA = ${x_mua.toFixed(1)} m`, 50, 25);
  }

  draw();

  function animate() {
    if (!running) return;
    t += 0.03;
    if (t > tMaxSim) { t = tMaxSim; running = false; }
    draw();
    if (running) animId = requestAnimationFrame(animate);
  }

  const playBtn = document.createElement('button');
  playBtn.className = 'graph-btn';
  playBtn.textContent = '▶ Avvia';
  playBtn.onclick = () => { t = 0; running = true; animate(); };
  controls.appendChild(playBtn);

  const pauseBtn = document.createElement('button');
  pauseBtn.className = 'graph-btn';
  pauseBtn.textContent = '⏸ Pausa';
  pauseBtn.onclick = () => { running = false; };
  controls.appendChild(pauseBtn);

  const resetBtn = document.createElement('button');
  resetBtn.className = 'graph-btn';
  resetBtn.textContent = '↺ Reset';
  resetBtn.onclick = () => {
    running = false; if (animId) cancelAnimationFrame(animId);
    t = 0; draw();
  };
  controls.appendChild(resetBtn);
}

// ─── Graph: Intrinsic Decomposition aT + aN (L05) ───
// Shows tangential and normal acceleration on a curve
function drawIntrinsicDecomposition(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let param = 0.35;
  let showOsculating = true;
  let running = false, animId = null;

  // Parametric curve (nice S-shape)
  function curvePos(s) {
    const x = 80 + s * (W - 160);
    const y = H / 2 + Math.sin(s * Math.PI * 2.5) * 120 - s * 30;
    return { x, y };
  }

  function curveTangent(s) {
    const ds = 0.001;
    const p0 = curvePos(s - ds);
    const p1 = curvePos(s + ds);
    const dx = p1.x - p0.x, dy = p1.y - p0.y;
    const mag = Math.sqrt(dx * dx + dy * dy);
    return { x: dx / mag, y: dy / mag };
  }

  function curveNormal(s) {
    const t = curveTangent(s);
    return { x: -t.y, y: t.x }; // perpendicular, pointing "left" of motion
  }

  function curvature(s) {
    const ds = 0.002;
    const t0 = curveTangent(s - ds);
    const t1 = curveTangent(s + ds);
    const p0 = curvePos(s - ds);
    const p1 = curvePos(s + ds);
    const arcLen = Math.sqrt((p1.x - p0.x) ** 2 + (p1.y - p0.y) ** 2);
    const dAngle = Math.atan2(t1.y, t1.x) - Math.atan2(t0.y, t0.x);
    return dAngle / arcLen;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = '#252940'; ctx.lineWidth = 0.5;
    for (let x = 0; x <= W; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Draw curve
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(108,140,255,0.35)'; ctx.lineWidth = 2.5;
    for (let i = 0; i <= 200; i++) {
      const s = i / 200;
      const p = curvePos(s);
      if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();

    // Point on curve
    const P = curvePos(param);
    const T = curveTangent(param);
    const N = curveNormal(param);
    const kappa = curvature(param);
    const R = Math.abs(1 / kappa);

    // Osculating circle
    if (showOsculating && R < 500) {
      const centerX = P.x + N.x * R * Math.sign(kappa);
      const centerY = P.y + N.y * R * Math.sign(kappa);
      ctx.beginPath();
      ctx.arc(centerX, centerY, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,169,77,0.2)'; ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Radius line
      ctx.strokeStyle = 'rgba(255,169,77,0.3)'; ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(P.x, P.y); ctx.lineTo(centerX, centerY); ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#ffa94d'; ctx.font = '11px sans-serif';
      ctx.fillText(`ρ = ${R.toFixed(0)} px`, centerX + 8, centerY);
    }

    // Tangential acceleration (green)
    const aT_len = 60;
    drawArrow(ctx, P.x, P.y, P.x + T.x * aT_len, P.y + T.y * aT_len, '#51cf66', 2.5);
    ctx.fillStyle = '#51cf66'; ctx.font = 'bold 13px sans-serif';
    drawVecLabel(ctx, 'a', P.x + T.x * aT_len + 8, P.y + T.y * aT_len - 5, { sub: 'T' });

    // Normal acceleration (red, toward center of curvature)
    const aN_len = 50;
    const nDir = Math.sign(kappa);
    drawArrow(ctx, P.x, P.y, P.x + N.x * aN_len * nDir, P.y + N.y * aN_len * nDir, '#ff6b6b', 2.5);
    ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 13px sans-serif';
    drawVecLabel(ctx, 'a', P.x + N.x * aN_len * nDir + 8, P.y + N.y * aN_len * nDir, { sub: 'N' });

    // Velocity vector (tangent, blue)
    const vLen = 80;
    drawArrow(ctx, P.x, P.y, P.x + T.x * vLen, P.y + T.y * vLen, '#74c0fc', 2);
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 12px sans-serif';
    drawVecLabel(ctx, 'v', P.x + T.x * vLen + 8, P.y + T.y * vLen + 4);

    // Point
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(P.x, P.y, 6, 0, Math.PI * 2); ctx.fill();

    // Labels
    ctx.fillStyle = '#a0a5b8'; ctx.font = '12px sans-serif';
    ctx.fillText('aT cambia |v| (modulo)  |  aN cambia direzione di v  |  aN = v²/ρ', 40, 25);
    ctx.fillText('Trascina il cursore per muovere il punto lungo la traiettoria', 40, H - 15);
  }

  draw();

  const sg = document.createElement('div');
  sg.className = 'graph-slider-group';
  sg.innerHTML = `<span>Posizione:</span><input type="range" min="5" max="95" value="${param * 100}" style="width:200px"><span class="slider-val">${(param * 100).toFixed(0)}%</span>`;
  sg.querySelector('input').oninput = function () {
    param = +this.value / 100;
    sg.querySelector('.slider-val').textContent = (param * 100).toFixed(0) + '%';
    draw();
  };
  controls.appendChild(sg);

  const oscBtn = document.createElement('button');
  oscBtn.className = 'graph-btn';
  oscBtn.textContent = '◯ Cerchio osculatore';
  oscBtn.onclick = () => {
    showOsculating = !showOsculating;
    oscBtn.textContent = showOsculating ? '◯ Cerchio osculatore' : '◯ Mostra cerchio';
    draw();
  };
  controls.appendChild(oscBtn);

  // Animate along curve
  const playBtn = document.createElement('button');
  playBtn.className = 'graph-btn';
  playBtn.textContent = '▶ Anima';
  playBtn.onclick = () => {
    if (running) { running = false; playBtn.textContent = '▶ Anima'; return; }
    running = true; playBtn.textContent = '⏸ Pausa';
    function step() {
      if (!running) return;
      param += 0.003;
      if (param > 0.95) { param = 0.05; }
      sg.querySelector('input').value = param * 100;
      sg.querySelector('.slider-val').textContent = (param * 100).toFixed(0) + '%';
      draw();
      animId = requestAnimationFrame(step);
    }
    step();
  };
  controls.appendChild(playBtn);
}

// ─── Graph: MCU Period ───
function drawMcuPeriod(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  const cx = W * 0.35, cy = H * 0.5, R = Math.min(W, H) * 0.3;
  let omega = 2.0; // rad/s
  let animT = 0, running = false, animId = null;

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const angle = omega * t;

    // Grid
    ctx.strokeStyle = 'rgba(100,110,140,0.15)'; ctx.lineWidth = 0.5;
    for (let i = 0; i < W; i += 40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke(); }
    for (let i = 0; i < H; i += 40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(W, i); ctx.stroke(); }

    // Circle
    ctx.strokeStyle = 'rgba(130,140,170,0.4)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();

    // Center
    ctx.fillStyle = '#6b7089'; ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill();

    // Radius line
    const px = cx + R * Math.cos(angle);
    const py = cy - R * Math.sin(angle);
    ctx.strokeStyle = 'rgba(255,169,77,0.5)'; ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
    ctx.setLineDash([]);

    // R label
    const rmx = (cx + px) / 2, rmy = (cy + py) / 2;
    ctx.fillStyle = '#ffa94d'; ctx.font = 'bold 12px sans-serif';
    ctx.fillText('R', rmx + 5, rmy - 5);

    // Swept angle arc
    if (angle % (2 * Math.PI) > 0.05) {
      ctx.strokeStyle = 'rgba(116,192,252,0.4)'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 30, 0, -(angle % (2 * Math.PI)), true);
      ctx.stroke();
      ctx.fillStyle = '#74c0fc'; ctx.font = '11px sans-serif';
      ctx.fillText('θ', cx + 34, cy - 10);
    }

    // Velocity vector (tangent)
    const vLen = 50 * (omega / 2);
    const vx = -Math.sin(angle), vy = -Math.cos(angle);
    drawArrow(ctx, px, py, px + vx * vLen, py + vy * vLen, '#74c0fc', 2.5);
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px sans-serif';
    drawVecLabel(ctx, 'v', px + vx * vLen + 8, py + vy * vLen);

    // Centripetal acceleration (toward center)
    const aN = omega * omega;
    const aLen = Math.min(50, aN * 12);
    const ax = cx - px, ay = cy - py;
    const aMag = Math.sqrt(ax * ax + ay * ay);
    if (aMag > 0) {
      const anx = ax / aMag * aLen, any = ay / aMag * aLen;
      drawArrow(ctx, px, py, px + anx, py + any, '#ff6b6b', 2.5);
      ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 13px sans-serif';
      drawVecLabel(ctx, 'a', px + anx + 8, py + any, { sub: 'N' });
    }

    // Point
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();

    // omega arrow (out of plane, shown as circle with dot at center top)
    ctx.strokeStyle = '#51cf66'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(cx, cy - R - 25, 10, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#51cf66';
    ctx.beginPath(); ctx.arc(cx, cy - R - 25, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.font = 'bold 12px sans-serif';
    drawVecLabel(ctx, 'ω', cx + 14, cy - R - 21);

    // Info panel on right
    const T = 2 * Math.PI / omega;
    const freq = 1 / T;
    const vLin = R * omega;
    const rightX = W * 0.65;
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Grandezze MCU:', rightX, 40);
    ctx.font = '13px sans-serif'; ctx.fillStyle = '#a0a5b8';
    ctx.fillText(`ω = ${omega.toFixed(2)} rad/s`, rightX, 70);
    ctx.fillText(`T = 2π/ω = ${T.toFixed(2)} s`, rightX, 95);
    ctx.fillText(`f = 1/T = ${freq.toFixed(2)} Hz`, rightX, 120);
    ctx.fillText(`v = Rω = ${(vLin * 100).toFixed(0)} px/s`, rightX, 145);
    ctx.fillText(`aₙ = Rω² = ${(R * omega * omega).toFixed(1)} px/s²`, rightX, 170);

    // Period progress bar
    const progress = (angle % (2 * Math.PI)) / (2 * Math.PI);
    ctx.fillStyle = 'rgba(100,110,140,0.2)';
    ctx.fillRect(rightX, 190, 180, 12);
    ctx.fillStyle = '#74c0fc';
    ctx.fillRect(rightX, 190, 180 * progress, 12);
    ctx.fillStyle = '#a0a5b8'; ctx.font = '11px sans-serif';
    ctx.fillText(`Giro: ${(progress * 100).toFixed(0)}%`, rightX, 218);

    const laps = Math.floor(angle / (2 * Math.PI));
    ctx.fillText(`Giri completati: ${laps}`, rightX, 240);

    ctx.textAlign = 'start';
  }

  draw(0);

  // Controls: omega slider
  const sg = document.createElement('div');
  sg.className = 'graph-slider-group';
  sg.innerHTML = `<span>ω (rad/s):</span><input type="range" min="50" max="600" value="${omega * 100}" style="width:180px"><span class="slider-val">${omega.toFixed(2)}</span>`;
  sg.querySelector('input').oninput = function () {
    omega = +this.value / 100;
    sg.querySelector('.slider-val').textContent = omega.toFixed(2);
    if (!running) draw(animT);
  };
  controls.appendChild(sg);

  // Play/Pause
  const playBtn = document.createElement('button');
  playBtn.className = 'graph-btn';
  playBtn.textContent = '▶ Anima';
  playBtn.onclick = () => {
    if (running) { running = false; playBtn.textContent = '▶ Anima'; return; }
    running = true; playBtn.textContent = '⏸ Pausa';
    let last = performance.now();
    function step(now) {
      if (!running) return;
      const dt = (now - last) / 1000;
      last = now;
      animT += dt;
      draw(animT);
      animId = requestAnimationFrame(step);
    }
    animId = requestAnimationFrame(step);
  };
  controls.appendChild(playBtn);

  // Reset
  const resetBtn = document.createElement('button');
  resetBtn.className = 'graph-btn';
  resetBtn.textContent = '↺ Reset';
  resetBtn.onclick = () => {
    running = false; playBtn.textContent = '▶ Anima';
    if (animId) cancelAnimationFrame(animId);
    animT = 0; draw(0);
  };
  controls.appendChild(resetBtn);
}

// ─── Graph: MCUA Transient ───
function drawMcuaTransient(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  const cx = W * 0.3, cy = H * 0.5, R = Math.min(W, H) * 0.28;
  let alpha = 3.0; // rad/s²
  let animT = 0, running = false, animId = null;

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const omega = alpha * t;
    const theta = 0.5 * alpha * t * t;

    // Grid
    ctx.strokeStyle = 'rgba(100,110,140,0.15)'; ctx.lineWidth = 0.5;
    for (let i = 0; i < W; i += 40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke(); }
    for (let i = 0; i < H; i += 40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(W, i); ctx.stroke(); }

    // Trail (fading arc)
    const trailAngle = theta % (2 * Math.PI);
    const fullLaps = Math.floor(theta / (2 * Math.PI));
    if (theta > 0.01) {
      ctx.strokeStyle = `rgba(116,192,252,${Math.min(0.5, 0.1 + fullLaps * 0.05)})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, -trailAngle, true);
      ctx.stroke();
    }

    // Circle outline
    ctx.strokeStyle = 'rgba(130,140,170,0.3)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();

    // Center
    ctx.fillStyle = '#6b7089'; ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill();

    // Point position
    const px = cx + R * Math.cos(theta);
    const py = cy - R * Math.sin(theta);

    // Radius
    ctx.strokeStyle = 'rgba(255,169,77,0.3)'; ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
    ctx.setLineDash([]);

    // Tangential acceleration (green)
    if (alpha > 0) {
      const vx = -Math.sin(theta), vy = -Math.cos(theta);
      const aTLen = 35;
      drawArrow(ctx, px, py, px + vx * aTLen, py + vy * aTLen, '#51cf66', 2);
      ctx.fillStyle = '#51cf66'; ctx.font = 'bold 12px sans-serif';
      drawVecLabel(ctx, 'a', px + vx * aTLen + 6, py + vy * aTLen, { sub: 'T' });
    }

    // Velocity vector (tangent, blue)
    if (omega > 0.1) {
      const vScale = Math.min(60, omega * 15);
      const vx = -Math.sin(theta), vy = -Math.cos(theta);
      drawArrow(ctx, px, py, px + vx * vScale, py + vy * vScale, '#74c0fc', 2.5);
      ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px sans-serif';
      drawVecLabel(ctx, 'v', px + vx * vScale + 8, py + vy * vScale);
    }

    // Centripetal acceleration (red, toward center)
    if (omega > 0.3) {
      const aN = omega * omega;
      const aLen = Math.min(45, aN * 5);
      const dx = cx - px, dy = cy - py;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d > 0) {
        drawArrow(ctx, px, py, px + dx / d * aLen, py + dy / d * aLen, '#ff6b6b', 2);
        ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 12px sans-serif';
        drawVecLabel(ctx, 'a', px + dx / d * aLen + 6, py + dy / d * aLen, { sub: 'N' });
      }
    }

    // Point
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();

    // Info panel
    const rightX = W * 0.58;
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('MCUA — Transitorio:', rightX, 35);
    ctx.font = '13px sans-serif'; ctx.fillStyle = '#a0a5b8';
    ctx.fillText(`α = ${alpha.toFixed(1)} rad/s²`, rightX, 60);
    ctx.fillText(`t = ${t.toFixed(2)} s`, rightX, 85);
    ctx.fillText(`ω(t) = αt = ${omega.toFixed(2)} rad/s`, rightX, 110);
    ctx.fillText(`θ(t) = ½αt² = ${theta.toFixed(2)} rad`, rightX, 135);
    ctx.fillText(`     = ${(theta * 180 / Math.PI).toFixed(1)}°`, rightX, 155);
    const vLin = R * omega;
    ctx.fillText(`v = Rω = ${vLin.toFixed(1)} px/s`, rightX, 180);
    const aNorm = R * omega * omega;
    ctx.fillText(`aₙ = Rω² = ${aNorm.toFixed(1)} px/s²`, rightX, 205);
    ctx.fillText(`aₜ = Rα = ${(R * alpha).toFixed(1)} px/s² (cost.)`, rightX, 230);
    ctx.fillText(`Giri: ${(theta / (2 * Math.PI)).toFixed(2)}`, rightX, 255);

    // θ(t) mini-graph
    const gx = rightX, gy = H - 20, gw = 170, gh = 80;
    ctx.strokeStyle = 'rgba(130,140,170,0.3)'; ctx.lineWidth = 1;
    ctx.strokeRect(gx, gy - gh, gw, gh);
    ctx.fillStyle = '#6b7089'; ctx.font = '10px sans-serif';
    ctx.fillText('θ(t)', gx + 2, gy - gh - 3);
    // Plot parabola
    ctx.strokeStyle = '#74c0fc'; ctx.lineWidth = 1.5;
    ctx.beginPath();
    const tMax = Math.max(t + 1, 4);
    for (let i = 0; i <= gw; i++) {
      const ti = (i / gw) * tMax;
      const thi = 0.5 * alpha * ti * ti;
      const maxTheta = 0.5 * alpha * tMax * tMax;
      const yi = gy - (thi / maxTheta) * (gh - 5);
      if (i === 0) ctx.moveTo(gx + i, yi); else ctx.lineTo(gx + i, yi);
    }
    ctx.stroke();
    // Current point on mini-graph
    const xi = (t / tMax) * gw;
    const yi = gy - (theta / (0.5 * alpha * tMax * tMax)) * (gh - 5);
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(gx + xi, yi, 4, 0, Math.PI * 2); ctx.fill();

    ctx.textAlign = 'start';
  }

  draw(0);

  // Alpha slider
  const sg = document.createElement('div');
  sg.className = 'graph-slider-group';
  sg.innerHTML = `<span>α (rad/s²):</span><input type="range" min="50" max="800" value="${alpha * 100}" style="width:170px"><span class="slider-val">${alpha.toFixed(1)}</span>`;
  sg.querySelector('input').oninput = function () {
    alpha = +this.value / 100;
    sg.querySelector('.slider-val').textContent = alpha.toFixed(1);
    if (!running) draw(animT);
  };
  controls.appendChild(sg);

  // Play/Pause
  const playBtn = document.createElement('button');
  playBtn.className = 'graph-btn';
  playBtn.textContent = '▶ Anima';
  playBtn.onclick = () => {
    if (running) { running = false; playBtn.textContent = '▶ Anima'; return; }
    running = true; playBtn.textContent = '⏸ Pausa';
    let last = performance.now();
    function step(now) {
      if (!running) return;
      const dt = (now - last) / 1000;
      last = now;
      animT += dt;
      draw(animT);
      animId = requestAnimationFrame(step);
    }
    animId = requestAnimationFrame(step);
  };
  controls.appendChild(playBtn);

  // Reset
  const resetBtn = document.createElement('button');
  resetBtn.className = 'graph-btn';
  resetBtn.textContent = '↺ Reset';
  resetBtn.onclick = () => {
    running = false; playBtn.textContent = '▶ Anima';
    if (animId) cancelAnimationFrame(animId);
    animT = 0; draw(0);
  };
  controls.appendChild(resetBtn);
}

// ─── Graph: Cross Product Circular ───
function drawCrossProductCircular(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  const cx = W * 0.4, cy = H * 0.55, R = Math.min(W, H) * 0.28;
  let angle = Math.PI / 4;
  let animT = 0, running = false, animId = null;

  function draw(a) {
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(100,110,140,0.12)'; ctx.lineWidth = 0.5;
    for (let i = 0; i < W; i += 40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke(); }
    for (let i = 0; i < H; i += 40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(W, i); ctx.stroke(); }

    // Circle
    ctx.strokeStyle = 'rgba(130,140,170,0.3)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();

    // 3D perspective: draw ellipse for "plane"
    ctx.strokeStyle = 'rgba(130,140,170,0.15)'; ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(cx, cy, R * 1.1, R * 0.3, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Point position
    const px = cx + R * Math.cos(a);
    const py = cy - R * Math.sin(a);

    // R vector (orange, from center to point)
    drawArrow(ctx, cx, cy, px, py, '#ffa94d', 2.5);
    ctx.fillStyle = '#ffa94d'; ctx.font = 'bold 14px sans-serif';
    drawVecLabel(ctx, 'R', (cx + px) / 2 + 8, (cy + py) / 2 - 8);

    // v = ω × R (tangent, blue)
    const vLen = 65;
    const vx = -Math.sin(a), vy = -Math.cos(a);
    drawArrow(ctx, px, py, px + vx * vLen, py + vy * vLen, '#74c0fc', 2.5);
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 14px sans-serif';
    drawVecLabel(ctx, 'v', px + vx * vLen + 10, py + vy * vLen);

    // ω vector (green, out of plane = upward from center)
    const omegaLen = 80;
    drawArrow(ctx, cx, cy, cx, cy - omegaLen, '#51cf66', 2.5);
    ctx.fillStyle = '#51cf66'; ctx.font = 'bold 14px sans-serif';
    drawVecLabel(ctx, 'ω', cx + 10, cy - omegaLen - 5);

    // aₙ = ω × v = -ω²R (red, toward center)
    const aNLen = 50;
    const dx = cx - px, dy = cy - py;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d > 0) {
      drawArrow(ctx, px, py, px + dx / d * aNLen, py + dy / d * aNLen, '#ff6b6b', 2);
      ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 12px sans-serif';
      drawVecLabel(ctx, 'a', px + dx / d * aNLen + 6, py + dy / d * aNLen - 2, { sub: 'N' });
    }

    // Right-hand rule hint
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('Prodotto vettoriale:', W * 0.7, 35);
    ctx.font = '12px sans-serif'; ctx.fillStyle = '#a0a5b8';
    ctx.fillText('v = ω × R', W * 0.7, 58);
    ctx.fillText('|v| = |ω||R|sin(90°) = ωR', W * 0.7, 78);
    ctx.fillText('', W * 0.7, 98);
    ctx.fillText('ω ⊥ piano di rotazione', W * 0.7, 118);
    ctx.fillText('R nel piano (radiale)', W * 0.7, 138);
    ctx.fillText('v nel piano (tangente!)', W * 0.7, 158);
    ctx.fillText('', W * 0.7, 178);
    ctx.fillStyle = '#ff6b6b'; ctx.font = '12px sans-serif';
    ctx.fillText('Nel MCU:', W * 0.7, 198);
    ctx.fillStyle = '#a0a5b8';
    ctx.fillText('a = ω × v = -ω²R', W * 0.7, 218);
    ctx.fillText('(centripeta, verso il centro)', W * 0.7, 238);

    // Point
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();

    // Center label
    ctx.fillStyle = '#6b7089'; ctx.font = '11px sans-serif';
    ctx.fillText('O', cx - 12, cy + 15);

    // 90° symbol between R and v
    const symSize = 12;
    const sx = px + vx * symSize;
    const sy = py + vy * symSize;
    const rx = (cx - px) / d * symSize;
    const ry = (cy - py) / d * symSize;
    ctx.strokeStyle = 'rgba(220,225,235,0.4)'; ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(px + rx, py + ry);
    ctx.lineTo(px + rx + vx * symSize, py + ry + vy * symSize);
    ctx.lineTo(sx, sy);
    ctx.stroke();

    ctx.textAlign = 'start';
  }

  draw(angle);

  // Angle slider
  const sg = document.createElement('div');
  sg.className = 'graph-slider-group';
  sg.innerHTML = `<span>Posizione θ:</span><input type="range" min="0" max="628" value="${Math.round(angle * 100)}" style="width:180px"><span class="slider-val">${(angle * 180 / Math.PI).toFixed(0)}°</span>`;
  sg.querySelector('input').oninput = function () {
    angle = +this.value / 100;
    sg.querySelector('.slider-val').textContent = (angle * 180 / Math.PI).toFixed(0) + '°';
    if (!running) draw(angle);
  };
  controls.appendChild(sg);

  // Animate
  const playBtn = document.createElement('button');
  playBtn.className = 'graph-btn';
  playBtn.textContent = '▶ Anima';
  playBtn.onclick = () => {
    if (running) { running = false; playBtn.textContent = '▶ Anima'; return; }
    running = true; playBtn.textContent = '⏸ Pausa';
    let last = performance.now();
    function step(now) {
      if (!running) return;
      const dt = (now - last) / 1000;
      last = now;
      angle += dt * 1.5;
      if (angle > 2 * Math.PI) angle -= 2 * Math.PI;
      sg.querySelector('input').value = Math.round(angle * 100);
      sg.querySelector('.slider-val').textContent = (angle * 180 / Math.PI).toFixed(0) + '°';
      draw(angle);
      animId = requestAnimationFrame(step);
    }
    animId = requestAnimationFrame(step);
  };
  controls.appendChild(playBtn);
}

// ─── Graph: Angular Kinematics (θ(t) and ω(t) comparison) ───
function drawAngularKinematics(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let alpha = 2.0; // rad/s²
  let omega0 = 1.0; // rad/s initial
  const tMax = 5; // seconds shown

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const margin = { top: 40, bottom: 35, left: 55, right: 20 };
    const plotW = (W - margin.left - margin.right - 30) / 2;
    const plotH = H - margin.top - margin.bottom;

    // Draw two side-by-side plots
    for (let p = 0; p < 2; p++) {
      const ox = margin.left + p * (plotW + 30);
      const oy = margin.top;

      // Background
      ctx.fillStyle = 'rgba(30,33,50,0.3)';
      ctx.fillRect(ox, oy, plotW, plotH);

      // Axes
      ctx.strokeStyle = '#6b7089'; ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(ox, oy); ctx.lineTo(ox, oy + plotH); ctx.lineTo(ox + plotW, oy + plotH);
      ctx.stroke();

      // Title
      ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(p === 0 ? 'θ(t)' : 'ω(t)', ox + plotW / 2, oy - 10);

      // Axis labels
      ctx.fillStyle = '#6b7089'; ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('t (s)', ox + plotW / 2, oy + plotH + 25);
      ctx.save();
      ctx.translate(ox - 30, oy + plotH / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText(p === 0 ? 'θ (rad)' : 'ω (rad/s)', 0, 0);
      ctx.restore();

      // Tick marks on x axis
      ctx.fillStyle = '#6b7089'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
      for (let t = 0; t <= tMax; t++) {
        const tx = ox + (t / tMax) * plotW;
        ctx.beginPath(); ctx.moveTo(tx, oy + plotH); ctx.lineTo(tx, oy + plotH + 5); ctx.stroke();
        ctx.fillText(t.toString(), tx, oy + plotH + 16);
      }

      if (p === 0) {
        // θ(t) plot
        // MCU: θ = omega0 * t (linear, cyan dashed)
        // MCUA: θ = omega0*t + 0.5*alpha*t² (parabolic, orange solid)
        const maxTheta_mcu = omega0 * tMax;
        const maxTheta_mcua = omega0 * tMax + 0.5 * alpha * tMax * tMax;
        const maxVal = Math.max(maxTheta_mcu, maxTheta_mcua) * 1.1;

        // Y ticks
        ctx.textAlign = 'right';
        const yStep = Math.ceil(maxVal / 5);
        for (let v = 0; v <= maxVal; v += yStep) {
          const yy = oy + plotH - (v / maxVal) * plotH;
          ctx.strokeStyle = 'rgba(100,110,140,0.2)'; ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(ox, yy); ctx.lineTo(ox + plotW, yy); ctx.stroke();
          ctx.fillStyle = '#6b7089'; ctx.font = '10px sans-serif';
          ctx.fillText(v.toFixed(0), ox - 5, yy + 3);
        }

        // MCU line (dashed cyan)
        ctx.strokeStyle = '#74c0fc'; ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        for (let i = 0; i <= plotW; i++) {
          const t = (i / plotW) * tMax;
          const theta = omega0 * t;
          const y = oy + plotH - (theta / maxVal) * plotH;
          if (i === 0) ctx.moveTo(ox + i, y); else ctx.lineTo(ox + i, y);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // MCUA curve (solid orange)
        ctx.strokeStyle = '#ffa94d'; ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= plotW; i++) {
          const t = (i / plotW) * tMax;
          const theta = omega0 * t + 0.5 * alpha * t * t;
          const y = oy + plotH - (theta / maxVal) * plotH;
          if (i === 0) ctx.moveTo(ox + i, y); else ctx.lineTo(ox + i, y);
        }
        ctx.stroke();

      } else {
        // ω(t) plot
        const maxOmega_mcu = omega0;
        const maxOmega_mcua = omega0 + alpha * tMax;
        const maxVal = Math.max(maxOmega_mcu, maxOmega_mcua) * 1.1;

        // Y ticks
        ctx.textAlign = 'right';
        const yStep = Math.max(1, Math.ceil(maxVal / 5));
        for (let v = 0; v <= maxVal; v += yStep) {
          const yy = oy + plotH - (v / maxVal) * plotH;
          ctx.strokeStyle = 'rgba(100,110,140,0.2)'; ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(ox, yy); ctx.lineTo(ox + plotW, yy); ctx.stroke();
          ctx.fillStyle = '#6b7089'; ctx.font = '10px sans-serif';
          ctx.fillText(v.toFixed(0), ox - 5, yy + 3);
        }

        // MCU line (horizontal dashed cyan)
        ctx.strokeStyle = '#74c0fc'; ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        const yMcu = oy + plotH - (omega0 / maxVal) * plotH;
        ctx.beginPath(); ctx.moveTo(ox, yMcu); ctx.lineTo(ox + plotW, yMcu); ctx.stroke();
        ctx.setLineDash([]);

        // MCUA line (solid orange, linear)
        ctx.strokeStyle = '#ffa94d'; ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= plotW; i++) {
          const t = (i / plotW) * tMax;
          const w = omega0 + alpha * t;
          const y = oy + plotH - (w / maxVal) * plotH;
          if (i === 0) ctx.moveTo(ox + i, y); else ctx.lineTo(ox + i, y);
        }
        ctx.stroke();
      }

      // Legend
      if (p === 0) {
        ctx.textAlign = 'left';
        ctx.setLineDash([6, 4]);
        ctx.strokeStyle = '#74c0fc'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(ox + 10, oy + 15); ctx.lineTo(ox + 35, oy + 15); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#74c0fc'; ctx.font = '11px sans-serif';
        ctx.fillText('MCU (ω₀ cost.)', ox + 40, oy + 19);

        ctx.strokeStyle = '#ffa94d'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(ox + 10, oy + 32); ctx.lineTo(ox + 35, oy + 32); ctx.stroke();
        ctx.fillStyle = '#ffa94d';
        ctx.fillText('MCUA (α cost.)', ox + 40, oy + 36);
      }
    }

    ctx.textAlign = 'start';
  }

  draw();

  // Alpha slider
  const sg1 = document.createElement('div');
  sg1.className = 'graph-slider-group';
  sg1.innerHTML = `<span>α (rad/s²):</span><input type="range" min="0" max="500" value="${alpha * 100}" style="width:150px"><span class="slider-val">${alpha.toFixed(1)}</span>`;
  sg1.querySelector('input').oninput = function () {
    alpha = +this.value / 100;
    sg1.querySelector('.slider-val').textContent = alpha.toFixed(1);
    draw();
  };
  controls.appendChild(sg1);

  // Omega0 slider
  const sg2 = document.createElement('div');
  sg2.className = 'graph-slider-group';
  sg2.innerHTML = `<span>ω₀ (rad/s):</span><input type="range" min="0" max="500" value="${omega0 * 100}" style="width:150px"><span class="slider-val">${omega0.toFixed(1)}</span>`;
  sg2.querySelector('input').oninput = function () {
    omega0 = +this.value / 100;
    sg2.querySelector('.slider-val').textContent = omega0.toFixed(1);
    draw();
  };
  controls.appendChild(sg2);
}

// ─── Graph: Newton's Second Law (F vs a) ───
function drawNewtonSecondLaw(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let mass = 3.0; // kg
  let mass2 = 8.0; // comparison mass

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const margin = { top: 50, bottom: 55, left: 70, right: 40 };
    const plotW = W - margin.left - margin.right;
    const plotH = H - margin.top - margin.bottom;
    const ox = margin.left, oy = margin.top;

    const aMax = 12; // m/s²
    const fMax = mass2 * aMax * 1.1; // enough for heavier mass

    // Background
    ctx.fillStyle = 'rgba(24,27,40,0.5)';
    ctx.fillRect(ox, oy, plotW, plotH);

    // Grid
    ctx.strokeStyle = 'rgba(100,110,140,0.15)'; ctx.lineWidth = 0.5;
    for (let a = 0; a <= aMax; a += 2) {
      const x = ox + (a / aMax) * plotW;
      ctx.beginPath(); ctx.moveTo(x, oy); ctx.lineTo(x, oy + plotH); ctx.stroke();
    }
    for (let f = 0; f <= fMax; f += 10) {
      const y = oy + plotH - (f / fMax) * plotH;
      ctx.beginPath(); ctx.moveTo(ox, y); ctx.lineTo(ox + plotW, y); ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#6b7089'; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(ox, oy); ctx.lineTo(ox, oy + plotH); ctx.lineTo(ox + plotW, oy + plotH);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#a0a5b8'; ctx.font = '13px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('Accelerazione a [m/s²]', ox + plotW / 2, oy + plotH + 42);
    ctx.save();
    ctx.translate(ox - 50, oy + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Forza F [N]', 0, 0);
    ctx.restore();

    // Tick labels
    ctx.fillStyle = '#6b7089'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    for (let a = 0; a <= aMax; a += 2) {
      const x = ox + (a / aMax) * plotW;
      ctx.fillText(a.toString(), x, oy + plotH + 18);
    }
    ctx.textAlign = 'right';
    for (let f = 0; f <= fMax; f += 10) {
      const y = oy + plotH - (f / fMax) * plotH;
      ctx.fillText(f.toString(), ox - 8, y + 4);
    }

    // Line for mass2 (comparison, dashed gray)
    ctx.strokeStyle = 'rgba(160,165,184,0.35)'; ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(ox, oy + plotH);
    const endF2 = mass2 * aMax;
    const endY2 = oy + plotH - (endF2 / fMax) * plotH;
    ctx.lineTo(ox + plotW, endY2);
    ctx.stroke();
    ctx.setLineDash([]);
    // Label
    ctx.fillStyle = 'rgba(160,165,184,0.5)'; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(`m₂ = ${mass2.toFixed(1)} kg`, ox + plotW - 80, endY2 - 8);

    // Line for main mass (bright blue, solid)
    ctx.strokeStyle = '#74c0fc'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(ox, oy + plotH);
    const endF1 = mass * aMax;
    const endY1 = oy + plotH - (endF1 / fMax) * plotH;
    ctx.lineTo(ox + plotW, Math.max(oy, endY1));
    ctx.stroke();

    // Label on line
    const labelA = 7;
    const labelX = ox + (labelA / aMax) * plotW;
    const labelY = oy + plotH - ((mass * labelA) / fMax) * plotH;
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(`m = ${mass.toFixed(1)} kg`, labelX + 8, labelY - 12);

    // F = ma label
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('F = m · a', ox + 15, oy + 25);
    ctx.font = '12px sans-serif'; ctx.fillStyle = '#a0a5b8';
    ctx.fillText('pendenza = massa m', ox + 15, oy + 44);

    // Interactive point: show a = 5 example
    const exA = 5;
    const exF = mass * exA;
    const exX = ox + (exA / aMax) * plotW;
    const exY = oy + plotH - (exF / fMax) * plotH;

    // Dashed projection lines
    ctx.strokeStyle = 'rgba(240,192,80,0.3)'; ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(exX, oy + plotH); ctx.lineTo(exX, exY); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox, exY); ctx.lineTo(exX, exY); ctx.stroke();
    ctx.setLineDash([]);

    // Point
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(exX, exY, 6, 0, Math.PI * 2); ctx.fill();

    // Value labels
    ctx.fillStyle = '#f0c050'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(`a = ${exA}`, exX, oy + plotH + 32);
    ctx.textAlign = 'right';
    ctx.fillText(`F = ${exF.toFixed(1)} N`, ox - 8, exY - 8);

    ctx.textAlign = 'start';
  }

  draw();

  // Mass slider
  const sg = document.createElement('div');
  sg.className = 'graph-slider-group';
  sg.innerHTML = `<span>Massa m (kg):</span><input type="range" min="50" max="1500" value="${mass * 100}" style="width:180px"><span class="slider-val">${mass.toFixed(1)}</span>`;
  sg.querySelector('input').oninput = function () {
    mass = +this.value / 100;
    sg.querySelector('.slider-val').textContent = mass.toFixed(1);
    draw();
  };
  controls.appendChild(sg);

  // Mass2 slider (comparison)
  const sg2 = document.createElement('div');
  sg2.className = 'graph-slider-group';
  sg2.innerHTML = `<span>Confronto m₂ (kg):</span><input type="range" min="50" max="1500" value="${mass2 * 100}" style="width:150px"><span class="slider-val">${mass2.toFixed(1)}</span>`;
  sg2.querySelector('input').oninput = function () {
    mass2 = +this.value / 100;
    sg2.querySelector('.slider-val').textContent = mass2.toFixed(1);
    draw();
  };
  controls.appendChild(sg2);
}

// ─── Graph: Impulse Theorem (Impulsive Force + Average Force) ───
function drawImpulseTheorem(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let sigma = 0.08; // width of the Gaussian impulse (seconds)
  let totalImpulse = 20; // N·s (= Δp)

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const margin = { top: 50, bottom: 55, left: 70, right: 180 };
    const plotW = W - margin.left - margin.right;
    const plotH = H - margin.top - margin.bottom;
    const ox = margin.left, oy = margin.top;

    // Time range: center impulse at t=0.5s, show 0 to 1s
    const tMin = 0, tMax = 1.0;
    const tCenter = 0.5;
    const dt = tMax - tMin;

    // Peak force from Gaussian: integral = totalImpulse = Fpeak * sigma * sqrt(2pi)
    const Fpeak = totalImpulse / (sigma * Math.sqrt(2 * Math.PI));
    const fMax = Fpeak * 1.15;

    // Effective Δt (where force is significant): ~4σ
    const deltaT = 4 * sigma;
    const Fm = totalImpulse / deltaT; // average force

    // Background
    ctx.fillStyle = 'rgba(24,27,40,0.5)';
    ctx.fillRect(ox, oy, plotW, plotH);

    // Grid
    ctx.strokeStyle = 'rgba(100,110,140,0.12)'; ctx.lineWidth = 0.5;
    for (let i = 0; i <= 10; i++) {
      const x = ox + (i / 10) * plotW;
      ctx.beginPath(); ctx.moveTo(x, oy); ctx.lineTo(x, oy + plotH); ctx.stroke();
    }
    for (let i = 0; i <= 5; i++) {
      const y = oy + (i / 5) * plotH;
      ctx.beginPath(); ctx.moveTo(ox, y); ctx.lineTo(ox + plotW, y); ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#6b7089'; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(ox, oy); ctx.lineTo(ox, oy + plotH); ctx.lineTo(ox + plotW, oy + plotH);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#a0a5b8'; ctx.font = '13px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('Tempo t [s]', ox + plotW / 2, oy + plotH + 42);
    ctx.save();
    ctx.translate(ox - 50, oy + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Forza F(t) [N]', 0, 0);
    ctx.restore();

    // Tick labels on x
    ctx.fillStyle = '#6b7089'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    for (let t = 0; t <= 1; t += 0.1) {
      const x = ox + ((t - tMin) / dt) * plotW;
      ctx.fillText(t.toFixed(1), x, oy + plotH + 18);
    }

    // Tick labels on y
    ctx.textAlign = 'right';
    const yStep = Math.ceil(fMax / 5 / 10) * 10;
    for (let f = 0; f <= fMax; f += yStep) {
      const y = oy + plotH - (f / fMax) * plotH;
      ctx.fillText(f.toFixed(0), ox - 8, y + 4);
    }

    // Gaussian function
    function gaussian(t) {
      const d = (t - tCenter) / sigma;
      return Fpeak * Math.exp(-0.5 * d * d);
    }

    // Fill area under curve (impulse) - pink
    ctx.fillStyle = 'rgba(255,107,107,0.18)';
    ctx.beginPath();
    ctx.moveTo(ox, oy + plotH);
    for (let i = 0; i <= plotW; i++) {
      const t = tMin + (i / plotW) * dt;
      const f = gaussian(t);
      const y = oy + plotH - (f / fMax) * plotH;
      ctx.lineTo(ox + i, y);
    }
    ctx.lineTo(ox + plotW, oy + plotH);
    ctx.closePath();
    ctx.fill();

    // Draw the Gaussian curve (red)
    ctx.strokeStyle = '#ff6b6b'; ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= plotW; i++) {
      const t = tMin + (i / plotW) * dt;
      const f = gaussian(t);
      const y = oy + plotH - (f / fMax) * plotH;
      if (i === 0) ctx.moveTo(ox + i, y); else ctx.lineTo(ox + i, y);
    }
    ctx.stroke();

    // Average force rectangle (blue dashed)
    const rectLeft = ox + ((tCenter - deltaT / 2 - tMin) / dt) * plotW;
    const rectRight = ox + ((tCenter + deltaT / 2 - tMin) / dt) * plotW;
    const rectTop = oy + plotH - (Fm / fMax) * plotH;

    ctx.strokeStyle = '#74c0fc'; ctx.lineWidth = 2;
    ctx.setLineDash([8, 5]);
    ctx.strokeRect(rectLeft, rectTop, rectRight - rectLeft, oy + plotH - rectTop);
    ctx.setLineDash([]);

    // Fm label
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(`Fm = ${Fm.toFixed(1)} N`, rectRight + 5, rectTop + 4);

    // Δt bracket
    ctx.strokeStyle = '#74c0fc'; ctx.lineWidth = 1.5;
    const bracketY = oy + plotH + 8;
    ctx.beginPath();
    ctx.moveTo(rectLeft, bracketY - 3); ctx.lineTo(rectLeft, bracketY + 3);
    ctx.moveTo(rectLeft, bracketY); ctx.lineTo(rectRight, bracketY);
    ctx.moveTo(rectRight, bracketY - 3); ctx.lineTo(rectRight, bracketY + 3);
    ctx.stroke();
    ctx.fillStyle = '#74c0fc'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(`Δt = ${(deltaT * 1000).toFixed(0)} ms`, (rectLeft + rectRight) / 2, bracketY + 14);

    // Peak label
    const peakX = ox + ((tCenter - tMin) / dt) * plotW;
    const peakY = oy + plotH - (Fpeak / fMax) * plotH;
    ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(`Fpicco = ${Fpeak.toFixed(0)} N`, peakX, peakY - 12);

    // Info panel on right
    const infoX = W - margin.right + 15;
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('Teorema Impulso:', infoX, oy + 10);
    ctx.font = '12px sans-serif'; ctx.fillStyle = '#a0a5b8';
    ctx.fillText('J = ∫F(t)dt = Δp', infoX, oy + 32);
    ctx.fillText('', infoX, oy + 50);

    ctx.fillStyle = '#ff6b6b';
    ctx.fillText(`Impulso J:`, infoX, oy + 65);
    ctx.fillStyle = '#a0a5b8';
    ctx.fillText(`${totalImpulse.toFixed(1)} N·s`, infoX, oy + 83);

    ctx.fillStyle = '#74c0fc';
    ctx.fillText(`Forza media:`, infoX, oy + 108);
    ctx.fillStyle = '#a0a5b8';
    ctx.fillText(`Fm = J/Δt`, infoX, oy + 126);
    ctx.fillText(`= ${Fm.toFixed(1)} N`, infoX, oy + 144);

    ctx.fillStyle = '#f0c050';
    ctx.fillText(`Δt effettivo:`, infoX, oy + 170);
    ctx.fillStyle = '#a0a5b8';
    ctx.fillText(`${(deltaT * 1000).toFixed(0)} ms`, infoX, oy + 188);

    ctx.fillStyle = '#51cf66';
    ctx.fillText(`Nota:`, infoX, oy + 218);
    ctx.fillStyle = '#a0a5b8';
    ctx.fillText(`Stesso J,`, infoX, oy + 236);
    ctx.fillText(`Δt piu breve`, infoX, oy + 254);
    ctx.fillText(`→ Fm piu alta!`, infoX, oy + 272);

    // Title
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 15px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('F(t) — Forza Impulsiva', ox + 10, oy - 10);

    // "Area = J" label inside the pink area
    ctx.fillStyle = 'rgba(255,107,107,0.6)'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
    const areaLabelY = oy + plotH - (Fpeak * 0.25 / fMax) * plotH;
    ctx.fillText('Area = Impulso J', peakX, areaLabelY);

    ctx.textAlign = 'start';
  }

  draw();

  // Sigma slider (controls duration)
  const sg = document.createElement('div');
  sg.className = 'graph-slider-group';
  sg.innerHTML = `<span>Durata σ (ms):</span><input type="range" min="20" max="200" value="${sigma * 1000}" style="width:170px"><span class="slider-val">${(sigma * 1000).toFixed(0)}</span>`;
  sg.querySelector('input').oninput = function () {
    sigma = +this.value / 1000;
    sg.querySelector('.slider-val').textContent = (sigma * 1000).toFixed(0);
    draw();
  };
  controls.appendChild(sg);

  // Impulse slider
  const sg2 = document.createElement('div');
  sg2.className = 'graph-slider-group';
  sg2.innerHTML = `<span>Impulso J (N·s):</span><input type="range" min="500" max="5000" value="${totalImpulse * 100}" style="width:150px"><span class="slider-val">${totalImpulse.toFixed(0)}</span>`;
  sg2.querySelector('input').oninput = function () {
    totalImpulse = +this.value / 100;
    sg2.querySelector('.slider-val').textContent = totalImpulse.toFixed(0);
    draw();
  };
  controls.appendChild(sg2);
}

// ─── Graph: Third Law (Action-Reaction) ───
function drawThirdLaw(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let dist = 300; // distance between bodies
  let attractive = true;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const cy = H * 0.45;
    const x1 = W / 2 - dist / 2, x2 = W / 2 + dist / 2;
    const forceLen = Math.min(80, 6000 / dist); // inversely proportional to distance

    // Grid
    ctx.strokeStyle = 'rgba(100,110,140,0.1)'; ctx.lineWidth = 0.5;
    for (let i = 0; i < W; i += 40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke(); }
    for (let i = 0; i < H; i += 40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(W, i); ctx.stroke(); }

    // Connection line
    ctx.strokeStyle = 'rgba(130,140,170,0.2)'; ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(x1, cy); ctx.lineTo(x2, cy); ctx.stroke();
    ctx.setLineDash([]);

    // Force arrows
    if (attractive) {
      // F21: force on body 1, pointing toward body 2 (right)
      drawArrow(ctx, x1, cy, x1 + forceLen, cy, '#74c0fc', 3);
      ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center';
      drawVecLabel(ctx, 'F', x1 + forceLen / 2, cy - 22, { sub: '21' });

      // F12: force on body 2, pointing toward body 1 (left)
      drawArrow(ctx, x2, cy, x2 - forceLen, cy, '#ff6b6b', 3);
      ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 13px sans-serif';
      drawVecLabel(ctx, 'F', x2 - forceLen / 2, cy - 22, { sub: '12' });
    } else {
      // Repulsive: forces point away
      drawArrow(ctx, x1, cy, x1 - forceLen, cy, '#74c0fc', 3);
      ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center';
      drawVecLabel(ctx, 'F', x1 - forceLen / 2, cy - 22, { sub: '21' });

      drawArrow(ctx, x2, cy, x2 + forceLen, cy, '#ff6b6b', 3);
      ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 13px sans-serif';
      drawVecLabel(ctx, 'F', x2 + forceLen / 2, cy - 22, { sub: '12' });
    }

    // Bodies
    ctx.fillStyle = '#74c0fc';
    ctx.beginPath(); ctx.arc(x1, cy, 22, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#1a1d2c'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('1', x1, cy + 5);

    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath(); ctx.arc(x2, cy, 22, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#1a1d2c'; ctx.font = 'bold 14px sans-serif';
    ctx.fillText('2', x2, cy + 5);

    // Equation
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('F₁₂ = −F₂₁', W / 2, H - 60);
    ctx.font = '12px sans-serif'; ctx.fillStyle = '#a0a5b8';
    ctx.fillText(attractive ? 'Interazione ATTRATTIVA (es. gravità)' : 'Interazione REPULSIVA (es. cariche uguali)', W / 2, H - 38);
    ctx.fillText('Stesso modulo, stessa direzione, verso opposto — su corpi DIVERSI', W / 2, H - 18);

    // Info
    ctx.fillStyle = '#f0c050'; ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(`|F| ∝ 1/d   (d = ${dist.toFixed(0)} px)`, 15, 25);

    ctx.textAlign = 'start';
  }

  draw();

  // Distance slider
  const sg = document.createElement('div');
  sg.className = 'graph-slider-group';
  sg.innerHTML = `<span>Distanza:</span><input type="range" min="100" max="500" value="${dist}" style="width:180px"><span class="slider-val">${dist}</span>`;
  sg.querySelector('input').oninput = function () {
    dist = +this.value;
    sg.querySelector('.slider-val').textContent = dist;
    draw();
  };
  controls.appendChild(sg);

  // Attractive/Repulsive toggle
  const modeBtn = document.createElement('button');
  modeBtn.className = 'graph-btn';
  modeBtn.textContent = '🔄 Repulsiva';
  modeBtn.onclick = () => {
    attractive = !attractive;
    modeBtn.textContent = attractive ? '🔄 Repulsiva' : '🔄 Attrattiva';
    draw();
  };
  controls.appendChild(modeBtn);
}

// ─── Graph: Vector Equilibrium (3 forces) ───
function drawVectorEquilibrium(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let theta = 60; // angle between F1 and F2 in degrees
  let F1 = 7, F2 = 10; // magnitudes

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const cx = W * 0.4, cy = H * 0.5;
    const scale = 4; // pixels per Newton

    const thetaRad = theta * Math.PI / 180;

    // F1 at angle 150° from +x, F2 at 150° - theta from +x (below F1)
    const angle1 = Math.PI - Math.PI / 6; // 150 degrees (upper-left)
    const angle2 = -(Math.PI - Math.PI / 6 - thetaRad); // lower region

    // Actually, let's simplify: F1 points upper-left, F2 points lower-right-ish
    // F1 at angle (90 + theta/2) from +x
    // F2 at angle (-(90 - theta/2)) from +x = angle -(90 - theta/2)
    const a1 = (90 + theta / 2) * Math.PI / 180;
    const a2 = -(90 - theta / 2) * Math.PI / 180;

    const f1x = F1 * Math.cos(a1), f1y = -F1 * Math.sin(a1);
    const f2x = F2 * Math.cos(a2), f2y = -F2 * Math.sin(a2);

    // F = -(F1 + F2)
    const fx = -(f1x + f2x), fy = -(f1y + f2y);
    const fMag = Math.sqrt(fx * fx + fy * fy);

    // Grid
    ctx.strokeStyle = 'rgba(100,110,140,0.12)'; ctx.lineWidth = 0.5;
    for (let i = 0; i < W; i += 40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke(); }
    for (let i = 0; i < H; i += 40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(W, i); ctx.stroke(); }

    // Axes at origin
    ctx.strokeStyle = 'rgba(130,140,170,0.3)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(cx - 120, cy); ctx.lineTo(cx + 120, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy - 120); ctx.lineTo(cx, cy + 120); ctx.stroke();
    ctx.fillStyle = '#6b7089'; ctx.font = '12px sans-serif';
    ctx.fillText('x', cx + 125, cy + 4);
    ctx.fillText('y', cx + 4, cy - 125);

    // Component projections (dashed)
    function drawProjections(ex, ey, color) {
      ctx.strokeStyle = color + '44'; ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      // x component
      ctx.beginPath(); ctx.moveTo(cx + ex * scale, cy + ey * scale); ctx.lineTo(cx + ex * scale, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + ex * scale, cy + ey * scale); ctx.lineTo(cx, cy + ey * scale); ctx.stroke();
      ctx.setLineDash([]);
    }

    // F1 (blue)
    drawProjections(f1x, f1y, '#74c0fc');
    drawArrow(ctx, cx, cy, cx + f1x * scale, cy + f1y * scale, '#74c0fc', 2.5);
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'left';
    drawVecLabel(ctx, 'F', cx + f1x * scale + 6, cy + f1y * scale - 6, { sub: '1' });

    // F2 (red)
    drawProjections(f2x, f2y, '#ff6b6b');
    drawArrow(ctx, cx, cy, cx + f2x * scale, cy + f2y * scale, '#ff6b6b', 2.5);
    ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 13px sans-serif';
    drawVecLabel(ctx, 'F', cx + f2x * scale + 6, cy + f2y * scale + 14, { sub: '2' });

    // F (green, the equilibrium force)
    drawProjections(fx, fy, '#51cf66');
    drawArrow(ctx, cx, cy, cx + fx * scale, cy + fy * scale, '#51cf66', 2.5);
    ctx.fillStyle = '#51cf66'; ctx.font = 'bold 13px sans-serif';
    drawVecLabel(ctx, 'F', cx + fx * scale + 6, cy + fy * scale, {});

    // Theta arc
    ctx.strokeStyle = 'rgba(240,192,80,0.5)'; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, 35, -a1, -a2, a1 > a2);
    ctx.stroke();
    const midAngle = (a1 + a2) / 2;
    ctx.fillStyle = '#f0c050'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(`θ=${theta}°`, cx + 50 * Math.cos(midAngle), cy - 50 * Math.sin(midAngle));

    // Point at origin
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.fill();

    // Info panel
    const infoX = W * 0.7;
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('Equilibrio: ΣF = 0', infoX, 30);
    ctx.font = '12px sans-serif'; ctx.fillStyle = '#74c0fc';
    ctx.fillText(`|F₁| = ${F1.toFixed(1)} N`, infoX, 55);
    ctx.fillStyle = '#ff6b6b';
    ctx.fillText(`|F₂| = ${F2.toFixed(1)} N`, infoX, 75);
    ctx.fillStyle = '#51cf66';
    ctx.fillText(`|F| = ${fMag.toFixed(1)} N`, infoX, 95);
    ctx.fillStyle = '#f0c050';
    ctx.fillText(`θ = ${theta}°`, infoX, 115);

    ctx.fillStyle = '#a0a5b8'; ctx.font = '11px sans-serif';
    ctx.fillText(`Fₓ = ${fx.toFixed(1)} N`, infoX, 145);
    ctx.fillText(`Fᵧ = ${fy.toFixed(1)} N`, infoX, 163);

    const fAngle = Math.atan2(-fy, fx) * 180 / Math.PI;
    ctx.fillText(`φ = ${fAngle.toFixed(1)}°`, infoX, 183);

    ctx.textAlign = 'start';
  }

  draw();

  // Theta slider
  const sg1 = document.createElement('div');
  sg1.className = 'graph-slider-group';
  sg1.innerHTML = `<span>θ (gradi):</span><input type="range" min="10" max="170" value="${theta}" style="width:140px"><span class="slider-val">${theta}°</span>`;
  sg1.querySelector('input').oninput = function () {
    theta = +this.value;
    sg1.querySelector('.slider-val').textContent = theta + '°';
    draw();
  };
  controls.appendChild(sg1);

  // F1 slider
  const sg2 = document.createElement('div');
  sg2.className = 'graph-slider-group';
  sg2.innerHTML = `<span>F₁ (N):</span><input type="range" min="10" max="200" value="${F1 * 10}" style="width:100px"><span class="slider-val">${F1}</span>`;
  sg2.querySelector('input').oninput = function () {
    F1 = +this.value / 10;
    sg2.querySelector('.slider-val').textContent = F1.toFixed(1);
    draw();
  };
  controls.appendChild(sg2);

  // F2 slider
  const sg3 = document.createElement('div');
  sg3.className = 'graph-slider-group';
  sg3.innerHTML = `<span>F₂ (N):</span><input type="range" min="10" max="200" value="${F2 * 10}" style="width:100px"><span class="slider-val">${F2}</span>`;
  sg3.querySelector('input').oninput = function () {
    F2 = +this.value / 10;
    sg3.querySelector('.slider-val').textContent = F2.toFixed(1);
    draw();
  };
  controls.appendChild(sg3);
}

// ─── Graph: Contact Masses ───
function drawContactMasses(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let m1 = 3, m2 = 2, F = 10;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const floorY = H * 0.6;
    const blockH = 60, blockW1 = 90, blockW2 = 70;
    const startX = W * 0.15;
    const x1 = startX, x2 = startX + blockW1;
    const a = F / (m1 + m2);
    const F12 = (m2 / (m1 + m2)) * F;

    // Grid
    ctx.strokeStyle = 'rgba(100,110,140,0.1)'; ctx.lineWidth = 0.5;
    for (let i = 0; i < W; i += 40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke(); }

    // Floor
    ctx.fillStyle = 'rgba(100,110,140,0.15)';
    ctx.fillRect(0, floorY, W, 20);
    // Hatching
    ctx.strokeStyle = 'rgba(100,110,140,0.3)'; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 12) {
      ctx.beginPath(); ctx.moveTo(x, floorY); ctx.lineTo(x + 10, floorY + 15); ctx.stroke();
    }

    // Block 1
    ctx.fillStyle = 'rgba(116,192,252,0.2)';
    ctx.strokeStyle = '#74c0fc'; ctx.lineWidth = 2;
    ctx.fillRect(x1, floorY - blockH, blockW1, blockH);
    ctx.strokeRect(x1, floorY - blockH, blockW1, blockH);
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(`m₁=${m1.toFixed(1)}kg`, x1 + blockW1 / 2, floorY - blockH / 2 + 5);

    // Block 2
    ctx.fillStyle = 'rgba(255,107,107,0.15)';
    ctx.strokeStyle = '#ff6b6b'; ctx.lineWidth = 2;
    ctx.fillRect(x2, floorY - blockH, blockW2, blockH);
    ctx.strokeRect(x2, floorY - blockH, blockW2, blockH);
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 14px sans-serif';
    ctx.fillText(`m₂=${m2.toFixed(1)}kg`, x2 + blockW2 / 2, floorY - blockH / 2 + 5);

    // External force F (green, on m1)
    const fScale = 3;
    const fLen = F * fScale;
    const fY = floorY - blockH / 2;
    drawArrow(ctx, x1 - 10, fY, x1 - 10 + fLen, fY, '#51cf66', 3);
    ctx.fillStyle = '#51cf66'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
    drawVecLabel(ctx, 'F', x1 - 10 + fLen / 2, fY - 20);
    ctx.font = '11px sans-serif';
    ctx.fillText(`= ${F.toFixed(1)} N`, x1 - 10 + fLen / 2 + 20, fY - 18);

    // Contact point
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(x2, fY, 4, 0, Math.PI * 2); ctx.fill();

    // F12 (blue, m1 pushes m2 → to the right, shown on m2)
    const f12Len = F12 * fScale;
    const arrowY2 = fY - 25;
    drawArrow(ctx, x2 + 5, arrowY2, x2 + 5 + f12Len, arrowY2, '#74c0fc', 2.5);
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 12px sans-serif';
    drawVecLabel(ctx, 'F', x2 + 5 + f12Len + 5, arrowY2 + 1, { sub: '12' });

    // F21 (red, m2 pushes back on m1 ← to the left)
    const arrowY1 = fY + 20;
    drawArrow(ctx, x2 - 5, arrowY1, x2 - 5 - f12Len, arrowY1, '#ff6b6b', 2.5);
    ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'right';
    drawVecLabel(ctx, 'F', x2 - 5 - f12Len - 5, arrowY1 + 1, { sub: '21' });

    // "Esploso" label at contact
    ctx.fillStyle = '#f0c050'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('punto di contatto', x2, floorY - blockH - 12);

    // Info panel
    const infoX = W * 0.6;
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('Risultati:', infoX, 30);
    ctx.font = '13px sans-serif'; ctx.fillStyle = '#a0a5b8';
    ctx.fillText(`a = F/(m₁+m₂) = ${a.toFixed(2)} m/s²`, infoX, 58);
    ctx.fillStyle = '#74c0fc';
    ctx.fillText(`F₁₂ = m₂·a = ${F12.toFixed(2)} N`, infoX, 85);
    ctx.fillStyle = '#a0a5b8'; ctx.font = '11px sans-serif';
    ctx.fillText(`= m₂/(m₁+m₂)·F = ${(m2/(m1+m2)).toFixed(2)}·${F.toFixed(0)}`, infoX + 15, 103);
    ctx.fillStyle = '#ff6b6b'; ctx.font = '13px sans-serif';
    ctx.fillText(`F₂₁ = −F₁₂ = ${F12.toFixed(2)} N ←`, infoX, 130);
    ctx.fillStyle = '#a0a5b8'; ctx.font = '11px sans-serif';
    ctx.fillText('(3° principio: stessa forza, verso opposto)', infoX, 150);

    // Verifica
    ctx.fillStyle = '#51cf66'; ctx.font = '12px sans-serif';
    ctx.fillText('Verifica su m₁:', infoX, 180);
    ctx.fillStyle = '#a0a5b8';
    ctx.fillText(`F − F₂₁ = ${F.toFixed(1)} − ${F12.toFixed(1)} = ${(F - F12).toFixed(1)}`, infoX, 198);
    ctx.fillText(`m₁·a = ${m1.toFixed(1)}·${a.toFixed(2)} = ${(m1 * a).toFixed(1)} ✓`, infoX, 216);

    ctx.textAlign = 'start';
  }

  draw();

  // F slider
  const sg1 = document.createElement('div');
  sg1.className = 'graph-slider-group';
  sg1.innerHTML = `<span>F (N):</span><input type="range" min="10" max="500" value="${F * 10}" style="width:130px"><span class="slider-val">${F.toFixed(0)}</span>`;
  sg1.querySelector('input').oninput = function () {
    F = +this.value / 10;
    sg1.querySelector('.slider-val').textContent = F.toFixed(1);
    draw();
  };
  controls.appendChild(sg1);

  // m1 slider
  const sg2 = document.createElement('div');
  sg2.className = 'graph-slider-group';
  sg2.innerHTML = `<span>m₁ (kg):</span><input type="range" min="10" max="100" value="${m1 * 10}" style="width:100px"><span class="slider-val">${m1}</span>`;
  sg2.querySelector('input').oninput = function () {
    m1 = +this.value / 10;
    sg2.querySelector('.slider-val').textContent = m1.toFixed(1);
    draw();
  };
  controls.appendChild(sg2);

  // m2 slider
  const sg3 = document.createElement('div');
  sg3.className = 'graph-slider-group';
  sg3.innerHTML = `<span>m₂ (kg):</span><input type="range" min="10" max="100" value="${m2 * 10}" style="width:100px"><span class="slider-val">${m2}</span>`;
  sg3.querySelector('input').oninput = function () {
    m2 = +this.value / 10;
    sg3.querySelector('.slider-val').textContent = m2.toFixed(1);
    draw();
  };
  controls.appendChild(sg3);
}

// ─── Graph: Weight and Normal Force ───
function drawWeightNormal(ctx, canvas, controls) {
  const W = canvas.width, H = canvas.height;
  let mass = 5; // kg
  const g = 9.81;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const P = mass * g;
    const cx = W * 0.35, surfaceY = H * 0.5;
    const blockSize = 50;

    // Grid
    ctx.strokeStyle = 'rgba(100,110,140,0.1)'; ctx.lineWidth = 0.5;
    for (let i = 0; i < W; i += 40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke(); }
    for (let i = 0; i < H; i += 40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(W, i); ctx.stroke(); }

    // Surface / table
    ctx.fillStyle = 'rgba(100,110,140,0.12)';
    ctx.fillRect(cx - 100, surfaceY, 200, 15);
    // Hatching
    ctx.strokeStyle = 'rgba(100,110,140,0.3)'; ctx.lineWidth = 1;
    for (let x = cx - 100; x < cx + 100; x += 12) {
      ctx.beginPath(); ctx.moveTo(x, surfaceY); ctx.lineTo(x + 10, surfaceY + 12); ctx.stroke();
    }

    // Block
    ctx.fillStyle = 'rgba(240,192,80,0.2)';
    ctx.strokeStyle = '#f0c050'; ctx.lineWidth = 2;
    ctx.fillRect(cx - blockSize / 2, surfaceY - blockSize, blockSize, blockSize);
    ctx.strokeRect(cx - blockSize / 2, surfaceY - blockSize, blockSize, blockSize);
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(`${mass.toFixed(1)} kg`, cx, surfaceY - blockSize / 2 + 5);

    // Weight P (red, downward)
    const fScale = Math.min(2, 120 / P);
    const pLen = P * fScale;
    drawArrow(ctx, cx, surfaceY, cx, surfaceY + pLen, '#ff6b6b', 3);
    ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'left';
    drawVecLabel(ctx, 'P', cx + 10, surfaceY + pLen / 2 + 5);
    ctx.font = '11px sans-serif';
    ctx.fillText(`= ${P.toFixed(1)} N`, cx + 25, surfaceY + pLen / 2 + 5);

    // Normal N (blue, upward)
    const nLen = pLen; // equilibrium: N = P
    drawArrow(ctx, cx, surfaceY - blockSize, cx, surfaceY - blockSize - nLen, '#74c0fc', 3);
    ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 14px sans-serif';
    drawVecLabel(ctx, 'N', cx + 10, surfaceY - blockSize - nLen / 2);
    ctx.font = '11px sans-serif';
    ctx.fillText(`= ${P.toFixed(1)} N`, cx + 25, surfaceY - blockSize - nLen / 2);

    // Earth schematic (bottom right)
    const earthX = W * 0.72, earthY = H * 0.7, earthR = 60;
    ctx.strokeStyle = 'rgba(81,207,102,0.3)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(earthX, earthY, earthR, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = 'rgba(81,207,102,0.08)';
    ctx.beginPath(); ctx.arc(earthX, earthY, earthR, 0, Math.PI * 2); ctx.fill();

    // Earth center dot
    ctx.fillStyle = '#f0c050';
    ctx.beginPath(); ctx.arc(earthX, earthY, 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#a0a5b8'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('Centro Terra', earthX, earthY + 16);

    // Body on earth surface
    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath(); ctx.arc(earthX, earthY - earthR, 5, 0, Math.PI * 2); ctx.fill();

    // P arrow from body toward center
    drawArrow(ctx, earthX, earthY - earthR + 5, earthX, earthY - earthR + 35, '#ff6b6b', 2);
    ctx.fillStyle = '#ff6b6b'; ctx.font = '10px sans-serif';
    drawVecLabel(ctx, 'P', earthX + 8, earthY - earthR + 25);

    // N arrow from body upward
    drawArrow(ctx, earthX, earthY - earthR - 5, earthX, earthY - earthR - 30, '#74c0fc', 2);
    ctx.fillStyle = '#74c0fc'; ctx.font = '10px sans-serif';
    drawVecLabel(ctx, 'N', earthX + 8, earthY - earthR - 22);

    // Info panel
    const infoX = W * 0.6;
    ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('Equilibrio verticale:', infoX, 30);
    ctx.font = '13px sans-serif'; ctx.fillStyle = '#a0a5b8';
    ctx.fillText(`m = ${mass.toFixed(1)} kg`, infoX, 55);
    ctx.fillText(`g = ${g} m/s²`, infoX, 75);

    ctx.fillStyle = '#ff6b6b'; ctx.font = '13px sans-serif';
    ctx.fillText(`P = mg = ${P.toFixed(1)} N ↓`, infoX, 103);
    ctx.fillStyle = '#74c0fc';
    ctx.fillText(`N = mg = ${P.toFixed(1)} N ↑`, infoX, 125);

    ctx.fillStyle = '#51cf66'; ctx.font = '12px sans-serif';
    ctx.fillText('N + P = 0  →  a = 0 ✓', infoX, 155);

    ctx.fillStyle = '#ffa94d'; ctx.font = '11px sans-serif';
    ctx.fillText('⚠ N e P NON sono', infoX, 185);
    ctx.fillText('azione-reazione!', infoX, 200);
    ctx.fillText('Agiscono sullo stesso corpo.', infoX, 215);

    ctx.textAlign = 'start';
  }

  draw();

  // Mass slider
  const sg = document.createElement('div');
  sg.className = 'graph-slider-group';
  sg.innerHTML = `<span>Massa (kg):</span><input type="range" min="5" max="200" value="${mass * 10}" style="width:180px"><span class="slider-val">${mass.toFixed(1)}</span>`;
  sg.querySelector('input').oninput = function () {
    mass = +this.value / 10;
    sg.querySelector('.slider-val').textContent = mass.toFixed(1);
    draw();
  };
  controls.appendChild(sg);
}

// ─── Vector Label Utility ───
// Draws text with a small arrow above to denote a vector, e.g. drawVecLabel(ctx, 'r', x, y)
// Use instead of Unicode combining char ⃗ which renders as empty squares on Canvas
function drawVecLabel(ctx, text, x, y, options) {
  const { color, font, sub, sup } = Object.assign({ color: ctx.fillStyle, font: ctx.font }, options || {});
  ctx.save();
  if (color) ctx.fillStyle = color;
  if (font) ctx.font = font;

  // Measure main text
  const metrics = ctx.measureText(text);
  const textW = metrics.width;

  // Draw main text
  ctx.fillText(text, x, y);

  // Draw small arrow above the text
  const arrowY = y - 12;
  const arrowStartX = x + 1;
  const arrowEndX = x + textW - 1;
  const arrowMidLen = Math.max(arrowEndX - arrowStartX, 6);

  ctx.strokeStyle = ctx.fillStyle;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(arrowStartX, arrowY);
  ctx.lineTo(arrowStartX + arrowMidLen, arrowY);
  ctx.stroke();
  // Arrowhead
  ctx.beginPath();
  ctx.moveTo(arrowStartX + arrowMidLen, arrowY);
  ctx.lineTo(arrowStartX + arrowMidLen - 4, arrowY - 3);
  ctx.moveTo(arrowStartX + arrowMidLen, arrowY);
  ctx.lineTo(arrowStartX + arrowMidLen - 4, arrowY + 3);
  ctx.stroke();

  // Draw subscript if provided
  if (sub) {
    const oldFont = ctx.font;
    const sizeMatch = oldFont.match(/(\d+)px/);
    const baseSize = sizeMatch ? parseInt(sizeMatch[1]) : 13;
    ctx.font = oldFont.replace(/(\d+)px/, Math.round(baseSize * 0.7) + 'px');
    ctx.fillText(sub, x + textW + 1, y + 3);
    ctx.font = oldFont;
  }

  ctx.restore();
}

// ─── Arrow Drawing Utility ───
function drawArrow(ctx, x1, y1, x2, y2, color, width) {
  const headLen = 10;
  const angle = Math.atan2(y2 - y1, x2 - x1);

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';

  // Shaft
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // Arrowhead
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headLen * Math.cos(angle - Math.PI / 6), y2 - headLen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(x2 - headLen * Math.cos(angle + Math.PI / 6), y2 - headLen * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
}
