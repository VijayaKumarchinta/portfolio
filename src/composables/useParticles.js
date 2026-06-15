import { ref, onMounted, onUnmounted } from 'vue'

export function useParticles() {
  const containerRef = ref(null)
  let scene, camera, renderer, particles
  let mouse = { x: 0, y: 0 }
  let mouseTarget = { x: 0, y: 0 }
  let animationId = null
  let mounted = false
  let time = 0

  function handleMouse(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  }

  async function init() {
    if (!containerRef.value || !mounted) return

    const THREE = await import('three')

    // Skip particle system on touch devices for performance
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    // Also skip if reduced motion is preferred
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

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

    // Adaptive particle count based on device capability
    const count = window.innerWidth < 768 ? 600 : 2000
    if (count === 0) return

    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorPalette = [
      new THREE.Color(0x60a5fa),
      new THREE.Color(0xa78bfa),
      new THREE.Color(0xf472b6),
      new THREE.Color(0x818cf8),
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

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
    if (!particles || !mounted) return

    time += 1

    // Smooth mouse rotation towards target
    mouseTarget.x += (mouse.y * 0.5 - mouseTarget.x) * 0.05
    mouseTarget.y += (mouse.x * 0.5 - mouseTarget.y) * 0.05

    // Base rotation grows with time; mouse adds subtle offset
    particles.rotation.x = time * 0.0003 + mouseTarget.x * 0.004
    particles.rotation.y = time * 0.0005 + mouseTarget.y * 0.004

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
    mounted = true
    init()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    mounted = false
    window.removeEventListener('mousemove', handleMouse)
    window.removeEventListener('resize', handleResize)
    if (animationId) cancelAnimationFrame(animationId)

    // Properly dispose Three.js resources
    if (particles) {
      particles.geometry?.dispose()
      particles.material?.dispose()
      scene?.remove(particles)
    }
    if (renderer && containerRef.value) {
      containerRef.value.removeChild(renderer.domElement)
      renderer.dispose()
    }
  })

  return { containerRef }
}
