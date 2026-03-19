/* ═══════════════════════════════════════════════════════════════
   GRAPHS-L09.js — Static Physics Diagrams for Lesson 9
   Load AFTER graphs.js — wraps initGraph with new graph types
   ═══════════════════════════════════════════════════════════════ */

// Save reference to original initGraph from graphs.js
const _originalInitGraph = typeof initGraph === 'function' ? initGraph : null;

// Override initGraph to add new graph types
function initGraph(section) {
  const canvas = document.getElementById(`canvas-${section.id}`);
  const controlsDiv = document.getElementById(`controls-${section.id}`);
  if (!canvas || !controlsDiv) return;
  const ctx = canvas.getContext('2d');

  switch (section.graphType) {
    case 'ball_wall_impulse':
      drawBallWallImpulse(ctx, canvas, controlsDiv);
      break;
    case 'inclined_plane_forces':
      drawInclinedPlaneForces(ctx, canvas, controlsDiv);
      break;
    case 'friction_behavior':
      drawFrictionBehavior(ctx, canvas, controlsDiv);
      break;
    default:
      if (_originalInitGraph) _originalInitGraph(section);
  }
}

// ═══════════════════════════════════════════════════════════════
//   DIAGRAM: Tennis Ball vs Wall (Impulse)
// ═══════════════════════════════════════════════════════════════
function drawBallWallImpulse(ctx, canvas) {
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#0e1018';
  ctx.fillRect(0, 0, W, H);

  // Subtle grid
  ctx.strokeStyle = 'rgba(100,110,140,0.08)';
  ctx.lineWidth = 0.5;
  for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  const midY = H * 0.42;
  const wallX = W * 0.50;

  // Title
  ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 15px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('Urto Elastico: Pallina da Tennis contro il Muro', W / 2, 26);

  // Phase labels
  ctx.font = 'bold 13px Outfit, sans-serif';
  ctx.fillStyle = '#74c0fc'; ctx.fillText('PRIMA', W * 0.24, 52);
  ctx.fillStyle = '#ff6b6b'; ctx.fillText('DOPO', W * 0.76, 52);

  // Wall
  ctx.fillStyle = 'rgba(130,140,170,0.18)';
  ctx.fillRect(wallX - 2, 60, 16, H - 140);
  ctx.strokeStyle = 'rgba(130,140,170,0.35)'; ctx.lineWidth = 1;
  for (let y = 65; y < H - 85; y += 10) {
    ctx.beginPath(); ctx.moveTo(wallX + 14, y); ctx.lineTo(wallX + 26, y + 8); ctx.stroke();
  }
  ctx.fillStyle = '#6b7089'; ctx.font = '11px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('Muro', wallX + 6, H - 72);

  // ─── BEFORE ───
  const bx = W * 0.20, by = midY;
  // Ball
  ctx.fillStyle = '#c4f042';
  ctx.beginPath(); ctx.arc(bx, by, 15, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#1a1d2c'; ctx.font = 'bold 10px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('m', bx, by + 4);
  // v_i arrow (right)
  drawArrow(ctx, bx + 22, by, bx + 95, by, '#74c0fc', 3);
  ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 13px Outfit, sans-serif'; ctx.textAlign = 'left';
  drawVecLabel(ctx, 'v', bx + 98, by + 4, { sub: 'i' });
  // Trail
  ctx.setLineDash([3, 5]); ctx.strokeStyle = 'rgba(116,192,252,0.15)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(bx + 15, by); ctx.lineTo(wallX - 18, by); ctx.stroke();
  ctx.setLineDash([]);

  // ─── AFTER ───
  const ax = W * 0.80, ay = midY;
  ctx.fillStyle = '#c4f042';
  ctx.beginPath(); ctx.arc(ax, ay, 15, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#1a1d2c'; ctx.font = 'bold 10px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('m', ax, ay + 4);
  // v_f arrow (LEFT)
  drawArrow(ctx, ax - 22, ay, ax - 95, ay, '#ff6b6b', 3);
  ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 13px Outfit, sans-serif'; ctx.textAlign = 'right';
  drawVecLabel(ctx, 'v', ax - 98, ay + 4, { sub: 'f' });
  // Trail
  ctx.setLineDash([3, 5]); ctx.strokeStyle = 'rgba(255,107,107,0.15)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(ax - 15, ay); ctx.lineTo(wallX + 18, ay); ctx.stroke();
  ctx.setLineDash([]);

  // ─── FORCE during contact ───
  const fy = midY + 80;
  const cbx = wallX - 16;
  ctx.fillStyle = '#c4f042';
  ctx.beginPath(); ctx.arc(cbx, fy, 13, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#1a1d2c'; ctx.font = 'bold 10px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('m', cbx, fy + 3);
  // Fm arrow (LEFT, away from wall)
  drawArrow(ctx, cbx - 18, fy, cbx - 110, fy, '#f0c050', 3);
  ctx.fillStyle = '#f0c050'; ctx.font = 'bold 13px Outfit, sans-serif'; ctx.textAlign = 'right';
  drawVecLabel(ctx, 'F', cbx - 114, fy + 4, { sub: 'm' });
  // Label
  ctx.fillStyle = '#f0c050'; ctx.font = '11px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('Durante il contatto (Δt = 3 ms)', cbx - 60, fy - 24);

  // ─── Axis ───
  const axisX = 35, axisY = H - 45;
  drawArrow(ctx, axisX, axisY, axisX + 55, axisY, '#6b7089', 1.5);
  ctx.fillStyle = '#6b7089'; ctx.font = '12px Outfit, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('x (+)', axisX + 58, axisY + 4);

  // ─── Data box ───
  ctx.fillStyle = 'rgba(24,27,40,0.85)'; ctx.strokeStyle = 'rgba(100,110,140,0.25)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(28, H - 125, 195, 72, 6); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#a0a5b8'; ctx.font = '12px Outfit, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('m = 0,05 kg    v = 2 m/s', 40, H - 104);
  ctx.fillText('Δt = 3 ms', 40, H - 86);
  ctx.fillStyle = '#f0c050'; ctx.font = 'bold 12px Outfit, sans-serif';
  ctx.fillText('|Fm| = 2mv/Δt ≈ 66,7 N', 40, H - 66);

  // ─── Key formula ───
  ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 12px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('Δp⃗ = m(v⃗f − v⃗i) = −2mv⃗    →    F⃗m = −2mv⃗ / Δt', W / 2, H - 14);
}


// ═══════════════════════════════════════════════════════════════
//   DIAGRAM: Inclined Plane Forces Comparison
// ═══════════════════════════════════════════════════════════════
function drawInclinedPlaneForces(ctx, canvas) {
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#0e1018';
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(100,110,140,0.08)'; ctx.lineWidth = 0.5;
  for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 15px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('Reazione Normale: Piano Orizzontale vs Piano Inclinato', W / 2, 26);

  // ═══ LEFT: Horizontal plane ═══
  const lx = W * 0.22, floorY = H * 0.6;
  ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 12px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('Piano Orizzontale', lx, 52);

  // Floor + hatching
  ctx.fillStyle = 'rgba(100,110,140,0.12)'; ctx.fillRect(lx - 80, floorY, 160, 10);
  ctx.strokeStyle = 'rgba(100,110,140,0.3)'; ctx.lineWidth = 1;
  for (let x = lx - 78; x < lx + 78; x += 10) {
    ctx.beginPath(); ctx.moveTo(x, floorY + 1); ctx.lineTo(x + 7, floorY + 9); ctx.stroke();
  }

  // Block
  const bw = 56, bh = 42;
  ctx.fillStyle = 'rgba(240,192,80,0.12)'; ctx.strokeStyle = '#f0c050'; ctx.lineWidth = 2;
  ctx.fillRect(lx - bw/2, floorY - bh, bw, bh); ctx.strokeRect(lx - bw/2, floorY - bh, bw, bh);
  ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 12px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('m', lx, floorY - bh/2 + 4);

  // P (down)
  const pL = 65;
  drawArrow(ctx, lx, floorY + 2, lx, floorY + pL, '#ff6b6b', 2.5);
  ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 12px Outfit, sans-serif'; ctx.textAlign = 'left';
  drawVecLabel(ctx, 'P', lx + 6, floorY + pL/2 + 8);

  // RN (up)
  drawArrow(ctx, lx, floorY - bh - 2, lx, floorY - bh - pL, '#74c0fc', 2.5);
  ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 12px Outfit, sans-serif'; ctx.textAlign = 'left';
  drawVecLabel(ctx, 'R', lx + 6, floorY - bh - pL/2, { sub: 'N' });

  // Equal lengths indicator
  ctx.fillStyle = '#51cf66'; ctx.font = '12px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('RN = mg', lx, H - 32);
  ctx.fillText('(stessa lunghezza!)', lx, H - 16);

  // ═══ Divider ═══
  ctx.strokeStyle = 'rgba(100,110,140,0.25)'; ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath(); ctx.moveTo(W * 0.45, 65); ctx.lineTo(W * 0.45, H - 10); ctx.stroke();
  ctx.setLineDash([]);

  // ═══ RIGHT: Inclined plane ═══
  const rx = W * 0.70;
  ctx.fillStyle = '#ffa94d'; ctx.font = 'bold 12px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('Piano Inclinato (θ)', rx, 52);

  const ang = 30 * Math.PI / 180;
  const pLen = 220;
  const pbx = rx - 80, pby = floorY + 10;
  const ptx = pbx + pLen * Math.cos(ang), pty = pby - pLen * Math.sin(ang);

  // Incline surface
  ctx.strokeStyle = 'rgba(130,140,170,0.5)'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(pbx, pby); ctx.lineTo(ptx, pty); ctx.stroke();
  // Base
  ctx.strokeStyle = 'rgba(130,140,170,0.2)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(pbx, pby); ctx.lineTo(ptx, pby); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(ptx, pby); ctx.lineTo(ptx, pty); ctx.stroke();

  // Hatching
  for (let i = 0; i < 14; i++) {
    const f = i / 14;
    const hx = pbx + f * (ptx - pbx), hy = pby + f * (pty - pby);
    ctx.strokeStyle = 'rgba(130,140,170,0.2)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx - Math.sin(ang)*7, hy - Math.cos(ang)*7); ctx.stroke();
  }

  // Angle arc
  ctx.strokeStyle = '#ffa94d'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(pbx, pby, 32, -ang, 0); ctx.stroke();
  ctx.fillStyle = '#ffa94d'; ctx.font = '13px Outfit, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('θ', pbx + 36, pby - 6);

  // Block on incline
  const bf = 0.42;
  const bcx = pbx + bf * (ptx - pbx), bcy = pby + bf * (pty - pby) - 20;

  ctx.save(); ctx.translate(bcx, bcy); ctx.rotate(-ang);
  ctx.fillStyle = 'rgba(240,192,80,0.12)'; ctx.strokeStyle = '#f0c050'; ctx.lineWidth = 2;
  ctx.fillRect(-24, -18, 48, 36); ctx.strokeRect(-24, -18, 48, 36);
  ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 12px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('m', 0, 4);
  ctx.restore();

  // P (straight down)
  const pd = 70;
  drawArrow(ctx, bcx, bcy, bcx, bcy + pd, '#ff6b6b', 2.5);
  ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 12px Outfit, sans-serif'; ctx.textAlign = 'left';
  drawVecLabel(ctx, 'P', bcx + 5, bcy + pd + 2);

  // Perpendicular component (into surface)
  const perpX = -Math.sin(ang), perpY = Math.cos(ang);
  const perpLen = pd * Math.cos(ang);

  // RN (away from surface, shorter than P!)
  drawArrow(ctx, bcx, bcy, bcx - perpX * perpLen, bcy - perpY * perpLen, '#74c0fc', 2.5);
  ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 12px Outfit, sans-serif'; ctx.textAlign = 'right';
  drawVecLabel(ctx, 'R', bcx - perpX * perpLen - 5, bcy - perpY * perpLen + 2, { sub: 'N' });

  // P parallel component (down the slope) shown as dashed from tip of P
  const parX = -Math.cos(ang), parY = Math.sin(ang);
  const parLen = pd * Math.sin(ang);
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = 'rgba(81,207,102,0.4)'; ctx.lineWidth = 1.5;
  // Dashed decomposition lines
  ctx.beginPath();
  ctx.moveTo(bcx, bcy + pd);
  ctx.lineTo(bcx + perpX * perpLen, bcy + perpY * perpLen + pd - perpLen);
  ctx.stroke();
  ctx.setLineDash([]);

  // mg sinθ label
  ctx.fillStyle = '#51cf66'; ctx.font = '11px Outfit, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('mg sinθ', bcx - 55, bcy + pd + 20);
  ctx.fillText('(fa scivolare)', bcx - 55, bcy + pd + 34);

  // mg cosθ label
  ctx.fillStyle = '#b197fc'; ctx.font = '11px Outfit, sans-serif'; ctx.textAlign = 'right';
  ctx.fillText('mg cosθ', bcx + perpX * perpLen - 8, bcy + perpY * perpLen + pd/2 - 5);

  // Results
  ctx.fillStyle = '#74c0fc'; ctx.font = '12px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('RN = mg cosθ < mg', rx + 20, H - 32);
  ctx.fillStyle = '#a0a5b8'; ctx.font = '11px Outfit, sans-serif';
  ctx.fillText('(RN è più corta di P!)', rx + 20, H - 16);
}


// ═══════════════════════════════════════════════════════════════
//   DIAGRAM: Friction Behavior Graph (|Fa| vs |F applied|)
// ═══════════════════════════════════════════════════════════════
function drawFrictionBehavior(ctx, canvas) {
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#0e1018';
  ctx.fillRect(0, 0, W, H);

  const m = { top: 55, bottom: 52, left: 65, right: 25 };
  const pW = W - m.left - m.right, pH = H - m.top - m.bottom;
  const ox = m.left, oy = m.top;

  // Title
  ctx.fillStyle = '#dce1eb'; ctx.font = 'bold 15px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('Comportamento della Forza di Attrito', W / 2, 26);

  // Plot bg
  ctx.fillStyle = 'rgba(24,27,40,0.4)'; ctx.fillRect(ox, oy, pW, pH);

  // Axes
  ctx.strokeStyle = '#6b7089'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox, oy + pH); ctx.lineTo(ox + pW, oy + pH); ctx.stroke();

  // Labels
  ctx.fillStyle = '#a0a5b8'; ctx.font = '13px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('|F⃗ applicata|', ox + pW / 2, oy + pH + 40);
  ctx.save(); ctx.translate(ox - 45, oy + pH / 2); ctx.rotate(-Math.PI / 2);
  ctx.fillText('|F⃗ attrito|', 0, 0); ctx.restore();

  // Normalized values
  const FsMax = 0.5, Fd = 0.3, yMax = 0.68, xMax = 1.1;
  const tx = (v) => ox + (v / xMax) * pW;
  const ty = (v) => oy + pH - (v / yMax) * pH;

  // ─── Static region fill ───
  ctx.fillStyle = 'rgba(116,192,252,0.07)';
  ctx.beginPath(); ctx.moveTo(tx(0), ty(0)); ctx.lineTo(tx(FsMax), ty(FsMax)); ctx.lineTo(tx(FsMax), ty(0)); ctx.closePath(); ctx.fill();

  // Static ramp
  ctx.strokeStyle = '#74c0fc'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(tx(0), ty(0)); ctx.lineTo(tx(FsMax), ty(FsMax)); ctx.stroke();

  // Transition point
  ctx.fillStyle = '#f0c050';
  ctx.beginPath(); ctx.arc(tx(FsMax), ty(FsMax), 6, 0, Math.PI * 2); ctx.fill();

  // Drop line
  ctx.strokeStyle = 'rgba(255,169,77,0.35)'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
  ctx.beginPath(); ctx.moveTo(tx(FsMax), ty(FsMax)); ctx.lineTo(tx(FsMax), ty(Fd)); ctx.stroke();
  ctx.setLineDash([]);

  // Dynamic region fill
  ctx.fillStyle = 'rgba(255,107,107,0.05)';
  ctx.fillRect(tx(FsMax), ty(Fd), tx(xMax) - tx(FsMax), ty(0) - ty(Fd));

  // Dynamic line
  ctx.strokeStyle = '#ff6b6b'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(tx(FsMax), ty(Fd)); ctx.lineTo(tx(xMax), ty(Fd)); ctx.stroke();

  // Dashed references
  ctx.setLineDash([4, 6]); ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(116,192,252,0.25)';
  ctx.beginPath(); ctx.moveTo(ox, ty(FsMax)); ctx.lineTo(tx(FsMax), ty(FsMax)); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,107,107,0.25)';
  ctx.beginPath(); ctx.moveTo(ox, ty(Fd)); ctx.lineTo(tx(FsMax), ty(Fd)); ctx.stroke();
  ctx.strokeStyle = 'rgba(240,192,80,0.2)';
  ctx.beginPath(); ctx.moveTo(tx(FsMax), ty(0)); ctx.lineTo(tx(FsMax), ty(FsMax)); ctx.stroke();
  ctx.setLineDash([]);

  // Y-axis labels
  ctx.textAlign = 'right'; ctx.font = 'bold 11px Outfit, sans-serif';
  ctx.fillStyle = '#74c0fc'; ctx.fillText('μs·RN', ox - 6, ty(FsMax) + 4);
  ctx.fillStyle = '#ff6b6b'; ctx.fillText('μd·RN', ox - 6, ty(Fd) + 4);

  // Phase labels
  ctx.textAlign = 'center';
  ctx.fillStyle = '#74c0fc'; ctx.font = 'bold 14px Outfit, sans-serif';
  ctx.fillText('QUIETE', tx(FsMax * 0.45), oy + 20);
  ctx.fillStyle = '#a0a5b8'; ctx.font = '10px Outfit, sans-serif';
  ctx.fillText('(attrito statico)', tx(FsMax * 0.45), oy + 34);

  ctx.fillStyle = '#ff6b6b'; ctx.font = 'bold 14px Outfit, sans-serif';
  ctx.fillText('MOTO', tx(FsMax * 1.55), oy + 20);
  ctx.fillStyle = '#a0a5b8'; ctx.font = '10px Outfit, sans-serif';
  ctx.fillText('(attrito dinamico)', tx(FsMax * 1.55), oy + 34);

  // Slope annotation
  ctx.fillStyle = 'rgba(116,192,252,0.5)'; ctx.font = 'italic 11px Outfit, sans-serif';
  ctx.save(); ctx.translate(tx(FsMax * 0.32), ty(FsMax * 0.32)); ctx.rotate(-Math.atan2(pH * FsMax / yMax, pW * FsMax / xMax));
  ctx.textAlign = 'center'; ctx.fillText('Fa = F (si adatta)', 0, -10); ctx.restore();

  // Dynamic annotation
  ctx.fillStyle = 'rgba(255,107,107,0.5)'; ctx.font = 'italic 11px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('costante: Fa = μd·RN', tx(FsMax * 1.55), ty(Fd) - 10);

  // Drop annotation
  ctx.fillStyle = '#f0c050'; ctx.font = '11px Outfit, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('← il corpo parte!', tx(FsMax) + 10, ty((FsMax + Fd) / 2));
  drawArrow(ctx, tx(FsMax) + 6, ty(FsMax) + 8, tx(FsMax) + 6, ty(Fd) - 8, '#f0c050', 1.5);

  // Legend
  const legX = ox + pW - 195, legY = oy + pH - 55;
  ctx.fillStyle = 'rgba(16,18,28,0.9)'; ctx.strokeStyle = 'rgba(100,110,140,0.25)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(legX, legY, 190, 48, 6); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = '#74c0fc'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(legX + 8, legY + 17); ctx.lineTo(legX + 32, legY + 17); ctx.stroke();
  ctx.fillStyle = '#74c0fc'; ctx.font = '10px Outfit, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('Attrito statico (|Fas| ≤ μsRN)', legX + 36, legY + 20);
  ctx.strokeStyle = '#ff6b6b'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(legX + 8, legY + 36); ctx.lineTo(legX + 32, legY + 36); ctx.stroke();
  ctx.fillStyle = '#ff6b6b';
  ctx.fillText('Attrito dinamico (|Fad| = μdRN)', legX + 36, legY + 39);

  // Bottom note
  ctx.fillStyle = '#a0a5b8'; ctx.font = '12px Outfit, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('μs > μd  →  far partire è più faticoso che continuare a spingere', W / 2, H - 10);
}
