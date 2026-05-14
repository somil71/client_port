import visionVfxThumbnail from '../img/WhatsApp Image 2026-05-12 at 5.53.57 PM.jpeg'
import profilePortrait from '../img/WhatsApp Image 2026-05-12 at 5.53.45 PM.jpeg'

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
  heroImage?: string
  mediaLinks?: MediaLink[]
}

export type MediaLink = {
  title: string
  url: string
  label: string
  thumbnail?: string
}

export type GalleryArchiveEntry = {
  id: string
  title: string
  kind: 'image' | 'video' | 'animation'
  collection: string
  description: string
  preview: string
  open: string
}

function localGalleryAsset(fileName: string) {
  return `/gallery-assets/${fileName}`
}

function googleDriveOpen(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`
}

export const portfolioAssets = {
  mattePainting: {
    preview: localGalleryAsset('matte-painting.jpg'),
    open: googleDriveOpen('13230m_yyw4wnBGNQ149UyTIJSCPeyTuM'),
  },
  illustratorGallery: [
    {
      title: 'Illustrator Work Card 01',
      preview: localGalleryAsset('illustrator-01.jpg'),
      open: googleDriveOpen('1LIybJmCaFyRTATiS39JcnHUrXZVHAJv6'),
    },
    {
      title: 'Illustrator Work Card 02',
      preview: localGalleryAsset('illustrator-02.jpg'),
      open: googleDriveOpen('1dA-ITMvuwRB5VXT0G9SKblDcLbMxFnZI'),
    },
    {
      title: 'Illustrator Work Card 03',
      preview: localGalleryAsset('illustrator-03.jpg'),
      open: googleDriveOpen('11IlzLVh4HD6azMVOKBoBMSQtfXt6YNQj'),
    },
    {
      title: 'Illustrator Work Card 04',
      preview: localGalleryAsset('illustrator-04.jpg'),
      open: googleDriveOpen('1xA6uG73RqNy2aF1Okg5l8XvlaWMHN5Vh'),
    },
    {
      title: 'Illustrator Work Card 05',
      preview: localGalleryAsset('illustrator-05.jpg'),
      open: googleDriveOpen('1pQ_s0Rn-Y0ZfOx8VGTOovXWdvjDRYFCa'),
    },
    {
      title: 'Illustrator Work Card 06',
      preview: localGalleryAsset('illustrator-06.jpg'),
      open: googleDriveOpen('1WswbVXWOfiz8MMNew7Y7EDr8vzhSiyHu'),
    },
  ],
  storyboards: [
    {
      title: 'Storyboard Page 01',
      preview: localGalleryAsset('storyboard-01.jpg'),
      open: googleDriveOpen('1xzDxy-G-emi5MiJjZOlaXtSuVkUgsXsS'),
    },
    {
      title: 'Storyboard Page 02',
      preview: localGalleryAsset('storyboard-02.jpg'),
      open: googleDriveOpen('1vPTngtCzsmZ9-oxSQGSDHxWPqwTjmYir'),
    },
  ],
  animationStudies: {
    pendulum: {
      title: 'Pendulum Timing Study',
      preview: localGalleryAsset('animation-pendulum.gif'),
      open: googleDriveOpen('13nr3kbPVSzMEbM-mNyIgfZM2bg3UYumX'),
    },
    characterTracing: {
      title: 'Character Tracing Motion Study',
      preview: localGalleryAsset('animation-character-tracing.gif'),
      open: googleDriveOpen('1ac7MdpAmsy0z8aqCosL4pz8LJwUfsjPI'),
    },
    eyeBlink: {
      title: 'Eye Blink Micro-Animation',
      preview: localGalleryAsset('animation-eye-blink.gif'),
      open: googleDriveOpen('1lusnjkAms1HZDA8R9m5uWX72n2f29s6N'),
    },
    car: {
      title: 'Car Motion Exercise',
      preview: localGalleryAsset('animation-car.gif'),
      open: googleDriveOpen('1mPSFb4GErQcSyHhffC8cFY1HtiVRJx4E'),
    },
    clockPendulum: {
      title: 'Clock Pendulum Study',
      preview: localGalleryAsset('animation-clock-pendulum.gif'),
      open: googleDriveOpen('1mQh68MnxBxeJ8xAgIfosC7DsmmSATiJD'),
    },
    walkCycle: {
      title: 'Walk Cycle Loop',
      preview: localGalleryAsset('animation-walk-cycle.gif'),
      open: googleDriveOpen('1vNvvvJUMKcVX4-UVjiNhCe6PdTCmJ6dx'),
    },
    backgroundTracing: {
      title: 'Background Tracing Animation',
      preview: localGalleryAsset('animation-background-tracing.gif'),
      open: googleDriveOpen('1nQkXezBcz9rutAB-CcpTopBPFnIj_qmD'),
    },
  },
} as const

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
    heroImage: visionVfxThumbnail,
    mediaLinks: [
      {
        title: 'Premiere Pro Study 01',
        url: 'https://youtu.be/Zo6WR8nRc34?si=_hA-LfKnieVzMO-Q',
        label: 'Premiere Pro',
        thumbnail: visionVfxThumbnail,
      },
      {
        title: 'Premiere Pro Study 02',
        url: 'https://youtu.be/kL-NHPc_I7o?si=m432n59p8woneSwT',
        label: 'Premiere Pro',
        thumbnail: visionVfxThumbnail,
      },
      {
        title: 'Baahubali: The Beginning - Extended Trailer',
        url: 'https://youtu.be/4lHWa92B_7k?si=Vg1_2Jg413OqSE-Y',
        label: 'Premiere Pro',
        thumbnail: visionVfxThumbnail,
      },
      {
        title: 'Baahubali: The Beginning - Cinematic Teaser',
        url: 'https://youtu.be/GSnmDo4weBs?si=-T_pW6JjhZvdGLB4',
        label: 'Featured Reel',
        thumbnail: visionVfxThumbnail,
      },
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
    heroImage: portfolioAssets.storyboards[0].preview,
    mediaLinks: [
      { title: 'She Never Left the Classroom - Part 1', url: 'https://youtu.be/_gkDxkgHniw?si=A3XJjvaOzaOMNV4m', label: 'Short Film Chapter' },
      {
        title: portfolioAssets.storyboards[0].title,
        url: portfolioAssets.storyboards[0].open,
        label: 'Storyboard / Pre-production',
        thumbnail: portfolioAssets.storyboards[0].preview,
      },
      {
        title: portfolioAssets.storyboards[1].title,
        url: portfolioAssets.storyboards[1].open,
        label: 'Storyboard / Pre-production',
        thumbnail: portfolioAssets.storyboards[1].preview,
      },
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
      { title: 'VFX and Compositing Study 01', url: 'https://youtu.be/cdGQ5hRcGjg?si=O0vat1q1aIoihbiU', label: 'VFX and Compositing' },
      { title: 'VFX and Compositing Study 02', url: 'https://youtu.be/27i_jafN8QU?si=y_YY9VgsDclZmHLy', label: 'VFX and Compositing' },
      { title: 'VFX and Compositing Study 03', url: 'https://youtu.be/3IpbbCUzYSo?si=q2yfunEMsZt4JjRG', label: 'VFX and Compositing' },
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
    heroImage: portfolioAssets.illustratorGallery[0].preview,
    mediaLinks: portfolioAssets.illustratorGallery.map((asset, index) => ({
      title: asset.title,
      url: asset.open,
      label: `Illustrator Gallery ${String(index + 1).padStart(2, '0')}`,
      thumbnail: asset.preview,
    })),
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
    mediaLinks: [
      { title: 'Motion Graphics Study 01', url: 'https://youtu.be/qHOvGcsmFpI?si=kuSeoKB0NPR8yPqo', label: 'Motion Graphics' },
      { title: 'Motion Graphics Study 02', url: 'https://youtu.be/d_Z-ERI-DhE?si=Vwtn7BeFka2VQjN4', label: 'Motion Graphics' },
      { title: 'Motion Graphics Short 01', url: 'https://youtube.com/shorts/GlBf_0daeP4?si=SMgiWmJDe81jn9_y', label: 'Motion Graphics Short' },
      { title: 'Motion Graphics Short 02', url: 'https://youtube.com/shorts/SVMH_LMalgk?si=xoLakmAavWmEpb-Q', label: 'Motion Graphics Short' },
    ],
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
    heroImage: portfolioAssets.animationStudies.walkCycle.preview,
    mediaLinks: [
      {
        title: portfolioAssets.animationStudies.walkCycle.title,
        url: portfolioAssets.animationStudies.walkCycle.open,
        label: 'Hero / Skills Loop',
        thumbnail: portfolioAssets.animationStudies.walkCycle.preview,
      },
      {
        title: portfolioAssets.animationStudies.pendulum.title,
        url: portfolioAssets.animationStudies.pendulum.open,
        label: 'Animation Principles',
        thumbnail: portfolioAssets.animationStudies.pendulum.preview,
      },
      {
        title: portfolioAssets.animationStudies.characterTracing.title,
        url: portfolioAssets.animationStudies.characterTracing.open,
        label: 'Character Animation',
        thumbnail: portfolioAssets.animationStudies.characterTracing.preview,
      },
      {
        title: portfolioAssets.animationStudies.eyeBlink.title,
        url: portfolioAssets.animationStudies.eyeBlink.open,
        label: 'Micro-animation',
        thumbnail: portfolioAssets.animationStudies.eyeBlink.preview,
      },
      {
        title: portfolioAssets.animationStudies.car.title,
        url: portfolioAssets.animationStudies.car.open,
        label: 'Motion Exercise',
        thumbnail: portfolioAssets.animationStudies.car.preview,
      },
      {
        title: portfolioAssets.animationStudies.clockPendulum.title,
        url: portfolioAssets.animationStudies.clockPendulum.open,
        label: 'Timing Demo',
        thumbnail: portfolioAssets.animationStudies.clockPendulum.preview,
      },
      {
        title: portfolioAssets.animationStudies.backgroundTracing.title,
        url: portfolioAssets.animationStudies.backgroundTracing.open,
        label: 'Background Tracing',
        thumbnail: portfolioAssets.animationStudies.backgroundTracing.preview,
      },
    ],
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
    heroImage: profilePortrait,
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
      mediaLink,
      index,
      project,
      videoId: extractYouTubeId(mediaLink.url),
    }))
    .filter((entry) => Boolean(entry.videoId))
    .map(({ mediaLink, index, project }) => ({
      id: `${project.slug}-${index}`,
      title: mediaLink.title,
      category: getCategoryLabel(project.category),
      description: `${project.title} / ${mediaLink.label}`,
      chapter: project.title,
      url: mediaLink.url,
      embedUrl: getYouTubeEmbedUrl(mediaLink.url),
      thumbnail: mediaLink.thumbnail ?? getYouTubeThumbnail(mediaLink.url),
    })),
  )
}

export function getGalleryArchiveEntries(): GalleryArchiveEntry[] {
  const stillImageEntries: GalleryArchiveEntry[] = [
    {
      id: 'matte-painting-main',
      title: 'Matte Painting Environment',
      kind: 'image',
      collection: 'Atmosphere chamber',
      description: 'Cinematic world-building plate',
      preview: portfolioAssets.mattePainting.preview,
      open: portfolioAssets.mattePainting.open,
    },
    ...portfolioAssets.illustratorGallery.map((asset, index) => ({
      id: `illustrator-${index + 1}`,
      title: asset.title,
      kind: 'image' as const,
      collection: 'Illustrator salon',
      description: `Pinned print ${String(index + 1).padStart(2, '0')}`,
      preview: asset.preview,
      open: asset.open,
    })),
    ...portfolioAssets.storyboards.map((asset, index) => ({
      id: `storyboard-${index + 1}`,
      title: asset.title,
      kind: 'image' as const,
      collection: 'Storyboard desk',
      description: `Pre-production sheet ${String(index + 1).padStart(2, '0')}`,
      preview: asset.preview,
      open: asset.open,
    })),
    ...Object.values(portfolioAssets.animationStudies).map((asset, index) => ({
      id: `animation-study-${index + 1}`,
      title: asset.title,
      kind: 'animation' as const,
      collection: 'Motion constellation',
      description: 'Animated study loop',
      preview: asset.preview,
      open: asset.open,
    })),
  ]

  const videoEntries: GalleryArchiveEntry[] = projects.flatMap((project) =>
    (project.mediaLinks ?? []).reduce<GalleryArchiveEntry[]>((entries, mediaLink, index) => {
      const videoId = extractYouTubeId(mediaLink.url)
      if (!videoId) {
        return entries
      }

      entries.push({
        id: `${project.slug}-video-${index}`,
        title: mediaLink.title,
        kind: 'video',
        collection: getCategoryLabel(project.category),
        description: `${project.title} / ${mediaLink.label}`,
        preview: mediaLink.thumbnail ?? getYouTubeThumbnail(mediaLink.url),
        open: mediaLink.url,
      })

      return entries
    }, []),
  )

  return [...stillImageEntries, ...videoEntries]
}
