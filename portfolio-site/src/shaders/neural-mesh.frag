// Neural mesh fragment shader
// Renders a wireframe-like organic mesh with color driven by displacement

uniform float uTime;
uniform vec3 uColorBase;
uniform vec3 uColorAccent;
uniform float uOpacity;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  // Map displacement to color mix
  float colorMix = smoothstep(-0.5, 0.8, vDisplacement);

  vec3 color = mix(uColorBase, uColorAccent, colorMix);

  // Edge fade — vignette effect
  float edgeFade = smoothstep(0.0, 0.3, vUv.x) *
                   smoothstep(1.0, 0.7, vUv.x) *
                   smoothstep(0.0, 0.3, vUv.y) *
                   smoothstep(1.0, 0.7, vUv.y);

  // Pulsing opacity
  float pulse = 0.85 + 0.15 * sin(uTime * 0.5);

  float alpha = uOpacity * edgeFade * pulse;

  gl_FragColor = vec4(color, alpha);
}
