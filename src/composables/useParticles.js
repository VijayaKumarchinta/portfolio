import { ref, onMounted, onUnmounted } from 'vue'

export function useParticles() {
  const containerRef = ref(null)
  let scene, camera, renderer, particles
  let mouse = { x: 0, y: 0 }
  let animationId = null

  function handleMouse(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  }

  async function init() {
    if (!containerRef.value) return

    // Dynamic import — Three.js is code-split into its own chunk
    const THREE = await import('three')

    const container = containerRef.value
    const width = container.clientWidth
    const height = container.clientHeight

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 30

    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const count = 2000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const colorPalette = [
      new THREE.Color(0x60a5fa), // blue
      new THREE.Color(0xa78bfa), // purple
      new THREE.Color(0xf472b6), // pink
      new THREE.Color(0x818cf8), // indigo
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 3 + 0.5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })

    particles = new THREE.Points(geometry, material)
    scene.add(particles)

    window.addEventListener('mousemove', handleMouse, { passive: true })
    animate()
  }

  function animate() {
    if (!particles) return

    // Slow rotation
    particles.rotation.x += 0.0003
    particles.rotation.y += 0.0005

    // Mouse-based tilt
    particles.rotation.x += mouse.y * 0.002
    particles.rotation.y += mouse.x * 0.002

    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }

  function handleResize() {
    if (!containerRef.value || !renderer || !camera) return
    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  onMounted(() => {
    init()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouse)
    window.removeEventListener('resize', handleResize)
    if (animationId) cancelAnimationFrame(animationId)
    if (renderer && containerRef.value) {
      containerRef.value.removeChild(renderer.domElement)
    }
    renderer?.dispose()
  })

  return { containerRef }
}
