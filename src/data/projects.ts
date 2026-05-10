export type CategoryId =
  | 'all'
  | 'graphic-design'
  | 'illustration-sequential-art'
  | '2d-animation'
  | 'video-editing'
  | 'motion-graphics'
  | 'digital-filmmaking'
  | 'vfx'
  | 'freelance-academic'

export type PortfolioItem = {
  id: number
  slug: string
  title: string
  category: Exclude<CategoryId, 'all'>
  year: string
  mediaType: 'image' | 'video' | 'link'
  summary: string
  detail: string
  description: string
  tools: string[]
  palette: string
  mediaLinks?: MediaLink[]
}

export type MediaLink = {
  title: string
  url: string
  label: string
}

export const categories: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'illustration-sequential-art', label: 'Illustration / Sequential Art' },
  { id: '2d-animation', label: '2D Animation' },
  { id: 'video-editing', label: 'Video Editing' },
  { id: 'motion-graphics', label: 'Motion Graphics' },
  { id: 'digital-filmmaking', label: 'Digital Filmmaking' },
  { id: 'vfx', label: 'VFX' },
  { id: 'freelance-academic', label: 'Freelance / Academic' },
]

export const categoryCopy: Record<CategoryId, { eyebrow: string; blurb: string }> = {
  all: {
    eyebrow: 'Full archive',
    blurb: 'A cross-discipline editorial selection built to show range, pacing, and presentation quality in one scroll.',
  },
  'graphic-design': {
    eyebrow: 'Graphic design',
    blurb: 'Brand systems, logo suites, and print collateral shaped around typography, color logic, and clean visual recall.',
  },
  'illustration-sequential-art': {
    eyebrow: 'Illustration and sequential art',
    blurb: 'Concept art, comic storytelling, and visual world-building that use composition and atmosphere to carry emotion.',
  },
  '2d-animation': {
    eyebrow: '2D animation',
    blurb: 'Movement studies, animated storytelling, and character-driven timing built for expressive motion and clarity.',
  },
  'video-editing': {
    eyebrow: 'Video editing',
    blurb: 'Trailer edits and high-energy cuts shaped by rhythm, sound sync, and promotional pacing.',
  },
  'motion-graphics': {
    eyebrow: 'Motion graphics',
    blurb: 'Animated typography, logo motion, and design-led movement used to energize branded and promotional visuals.',
  },
  'digital-filmmaking': {
    eyebrow: 'Digital filmmaking',
    blurb: 'Script-to-screen thinking, short-film structure, and visual direction shaped through mood, framing, and atmosphere.',
  },
  vfx: {
    eyebrow: 'VFX',
    blurb: 'Compositing, rotoscoping, enhancement, and fantasy atmosphere work built to expand reality without breaking immersion.',
  },
  'freelance-academic': {
    eyebrow: 'Freelance and academic',
    blurb: 'A bridge between coursework and client delivery, showing growth through assignments, freelance work, and practical execution.',
  },
}

export const projects: PortfolioItem[] = [
  {
    id: 1,
    slug: 'baahubali-teaser-vfx',
    title: 'Baahubali: The Beginning Teaser Concept',
    category: 'vfx',
    year: '2026',
    mediaType: 'video',
    summary: 'A re-imagined cinematic teaser created to practice high-impact pacing and visual effects integration.',
    detail: "Mastering the art of the hook through epic scale, rhythmic editing, and cinematic momentum.",
    description:
      'This academic teaser concept re-edits and enhances footage from Baahubali: The Beginning to create a fresh viewing experience while preserving the source material’s larger-than-life scale. The project focuses on audio-visual synchronization, dramatic pacing, and carefully selected moments that sell scale and intensity in under a minute.',
    tools: ['Adobe Premiere Pro', 'YouTube Creator Tools', 'Trailer Editing', 'Sound Sync'],
    palette: '#FFC107',
    mediaLinks: [
      { title: 'Baahubali: The Beginning - Cinematic Teaser', url: 'https://youtu.be/GSnmDo4weBs?si=EuaPrjYz1cuKZHtH', label: 'Featured Reel' },
      { title: 'Baahubali: The Beginning - Extended Trailer', url: 'https://youtu.be/4lHWa92B_7k?si=AtDMMozG9qI0tcky', label: 'Extended Cut' },
    ],
  },
  {
    id: 2,
    slug: 'memory-corruption-comic',
    title: 'Memory Corruption',
    category: 'illustration-sequential-art',
    year: '2026',
    mediaType: 'image',
    summary: 'A conceptual comic project exploring fading memories, digital decay, and fantasy-led emotional storytelling.',
    detail: 'Where pixels fade and memories lie.',
    description:
      'Memory Corruption is a personal and academic comic concept built around the visual language of glitch, erosion, and emotional fragmentation. The project combines sequential art, typography, and digital composition to represent a world literally losing its data. It is one of the clearest examples of Sanya’s fantasy world-building and atmosphere-first storytelling.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Character Design', 'Sequential Art', 'AI-Assisted Storyboarding'],
    palette: '#00E5FF',
  },
  {
    id: 3,
    slug: 'raid-action-trailer-edit',
    title: 'Raid Action Trailer Edit',
    category: 'video-editing',
    year: '2026',
    mediaType: 'video',
    summary: 'A fast-paced trailer edit built around tension, dramatic sound design, and sharp transition control.',
    detail: 'An action-driven edit that leans on impact, compression, and escalating intensity.',
    description:
      'This trailer edit for Raid explores suspense, quick-cut structure, and sound-driven pacing to build dramatic tension. The goal was to shape the footage into a promo-style piece that feels immediate and controlled, while still preserving narrative stakes and clarity.',
    tools: ['Adobe Premiere Pro', 'Narrative Pacing', 'Sound Synchronization', 'Trailer Editing'],
    palette: '#8C6A5D',
    mediaLinks: [
      { title: 'Raid - Action Trailer Edit', url: 'https://youtu.be/NEN6SberCv4?si=XbFMvPAtdAnC6dbr', label: 'Trailer Edit' },
    ],
  },
  {
    id: 4,
    slug: 'she-never-left-the-classroom-part-1',
    title: 'She Never Left the Classroom - Part 1',
    category: 'digital-filmmaking',
    year: '2026',
    mediaType: 'video',
    summary: 'The first chapter of an atmospheric short film shaped around mystery, framing, and environment-led storytelling.',
    detail: 'Building intrigue through mood, space, and a slow-burn visual setup.',
    description:
      'Part 1 introduces the world and tension of a classroom mystery through atmosphere, visual composition, and structural pacing. The piece emphasizes environment as story, using cinematic framing and tonal restraint to invite curiosity before the supernatural layer fully arrives.',
    tools: ['Digital Filmmaking', 'Visual Direction', 'Storyboarding', 'Adobe Premiere Pro'],
    palette: '#3F495A',
    mediaLinks: [
      { title: 'She Never Left the Classroom - Part 1', url: 'https://youtu.be/_gkDxkgHniw?si=A3XJjvaOzaOMNV4m', label: 'Short Film Chapter' },
    ],
  },
  {
    id: 5,
    slug: 'she-never-left-the-classroom-part-2',
    title: 'She Never Left the Classroom - Part 2',
    category: 'vfx',
    year: '2026',
    mediaType: 'video',
    summary: 'The conclusion to a mystery short, using visual effects to heighten the supernatural tone.',
    detail: 'A follow-up chapter where VFX supports atmosphere instead of overpowering it.',
    description:
      'Part 2 resolves the mystery with a stronger emphasis on visual effects integration, using compositing and enhancement to deepen the supernatural mood. The project reflects Sanya’s approach to VFX as world-building rather than spectacle for its own sake.',
    tools: ['Adobe After Effects', 'VFX Compositing', 'Atmosphere Design', 'Cinematic Enhancement'],
    palette: '#516D7A',
    mediaLinks: [
      { title: 'She Never Left the Classroom - Part 2', url: 'https://youtu.be/_gkDxkgHniw?si=A3XJjvaOzaOMNV4m', label: 'Short Film Chapter' },
    ],
  },
  {
    id: 6,
    slug: 'brand-identity-suite',
    title: 'Brand Identity Suite',
    category: 'graphic-design',
    year: '2026',
    mediaType: 'image',
    summary: 'A collection of logo systems, business cards, and brand collateral created for startup and small-business clients.',
    detail: 'Professional identity work spanning construction, food, fashion, and technology sectors.',
    description:
      'This ongoing branding collection brings together logos, business cards, and supporting visual assets created for freelance clients. The work balances clean business communication with personality, showing Sanya’s ability to develop visual systems that function across print and digital touchpoints.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Typography', 'Layout Design', 'Brand Identity'],
    palette: '#E27A52',
  },
  {
    id: 7,
    slug: 'motion-design-and-logo-animation-studies',
    title: 'Motion Design and Logo Animation Studies',
    category: 'motion-graphics',
    year: '2026',
    mediaType: 'video',
    summary: 'A collection of motion-led experiments exploring typography, logo animation, and dynamic graphic pacing.',
    detail: 'Where design starts moving and static identity becomes screen-ready.',
    description:
      'These studies focus on turning static design elements into animated visual systems through timing, easing, and motion-led hierarchy. The work supports Sanya’s broader brand and teaser projects by showing how movement can guide attention and strengthen visual recall.',
    tools: ['Adobe After Effects', 'Typography Animation', 'Motion Graphics', 'Brand Motion'],
    palette: '#FF8FAB',
  },
  {
    id: 8,
    slug: '2d-animation-principles-study',
    title: '2D Animation Principles Study',
    category: '2d-animation',
    year: '2026',
    mediaType: 'video',
    summary: 'A principles-led animation study focused on timing, motion clarity, and expressive visual movement.',
    detail: 'Using 2D animation as a bridge between illustration, storytelling, and screen-based rhythm.',
    description:
      'This study reflects Sanya’s interest in bringing stories and visual concepts to life through movement. It explores key animation principles such as timing, easing, and character energy while reinforcing the same narrative instincts seen in her editing and comic work.',
    tools: ['Adobe Animate', 'Timing Studies', '2D Animation Principles', 'Storyboarding'],
    palette: '#FFC145',
  },
  {
    id: 9,
    slug: 'freelance-and-academic-showcase',
    title: 'Freelance and Academic Showcase',
    category: 'freelance-academic',
    year: '2026',
    mediaType: 'link',
    summary: 'A bridge between college assignments and freelance delivery, showing professional growth across disciplines.',
    detail: 'From teaser assignments to startup branding, this category tracks range, reliability, and momentum.',
    description:
      'This category combines academic pieces such as Baahubali teaser work with freelance branding and content projects. It highlights Sanya’s ability to work inside brief-driven environments while continuing to develop an imaginative personal style.',
    tools: ['Adobe Creative Suite', 'Presentation Boards', 'Client Communication', 'Project Delivery'],
    palette: '#F28482',
  },
]

export function getCategoryLabel(categoryId: CategoryId) {
  return categories.find((item) => item.id === categoryId)?.label ?? 'Portfolio'
}

export function previewMedia(title: string, mediaType: PortfolioItem['mediaType'], palette: string) {
  const badge = mediaType === 'video' ? 'VIDEO' : mediaType === 'link' ? 'CASE STUDY' : 'IMAGE'
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="560" viewBox="0 0 800 560">
      <rect width="800" height="560" fill="#f7f0e4"/>
      <rect x="40" y="40" width="720" height="480" rx="34" fill="#ffffff"/>
      <rect x="68" y="68" width="664" height="424" rx="24" fill="${palette}" opacity="0.13"/>
      <line x1="68" y1="190" x2="732" y2="190" stroke="#171717" stroke-width="3" opacity="0.2"/>
      <text x="84" y="126" fill="#111111" font-size="22" font-family="Arial, sans-serif" letter-spacing="4">${badge}</text>
      <text x="84" y="270" fill="#111111" font-size="54" font-family="Arial, sans-serif">${title}</text>
      <text x="84" y="318" fill="#424242" font-size="22" font-family="Arial, sans-serif">storyboard frame / editorial presentation</text>
    </svg>
  `

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function extractYouTubeId(url: string) {
  try {
    const parsedUrl = new URL(url)
    const host = parsedUrl.hostname.replace('www.', '')

    if (host === 'youtu.be') {
      return parsedUrl.pathname.slice(1) || null
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (parsedUrl.pathname === '/watch') {
        return parsedUrl.searchParams.get('v')
      }

      const segments = parsedUrl.pathname.split('/').filter(Boolean)
      if (segments[0] === 'shorts' || segments[0] === 'embed') {
        return segments[1] ?? null
      }
    }
  } catch {
    return null
  }

  return null
}

export function getYouTubeEmbedUrl(url: string) {
  const videoId = extractYouTubeId(url)
  return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : url
}

export function getYouTubeThumbnail(url: string) {
  const videoId = extractYouTubeId(url)
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : ''
}

export function getPortfolioMediaEntries() {
  return projects.flatMap((project) =>
    (project.mediaLinks ?? []).map((mediaLink, index) => ({
      id: `${project.slug}-${index}`,
      title: mediaLink.title,
      category: getCategoryLabel(project.category),
      description: `${project.title} / ${mediaLink.label}`,
      chapter: project.title,
      url: mediaLink.url,
      embedUrl: getYouTubeEmbedUrl(mediaLink.url),
      thumbnail: getYouTubeThumbnail(mediaLink.url),
    })),
  )
}
