export type CategoryId =
  | 'all'
  | 'graphic-design'
  | 'sketching-painting'
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
}

export const categories: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'sketching-painting', label: 'Sketching & Painting' },
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
    blurb: 'Identity boards, poster systems, and layout-driven work shaped around typography, hierarchy, and visual recall.',
  },
  'sketching-painting': {
    eyebrow: 'Sketching and painting',
    blurb: 'Figure studies, tonal exercises, and frame-making practice presented like curated sketchbook spreads.',
  },
  '2d-animation': {
    eyebrow: '2D animation',
    blurb: 'Frame rhythm, title motion, and drawn movement built around timing, transitions, and expressive silhouettes.',
  },
  'video-editing': {
    eyebrow: 'Video editing',
    blurb: 'Short-form edits, recap cuts, and sequence shaping driven by beat control, clarity, and pacing.',
  },
  'motion-graphics': {
    eyebrow: 'Motion graphics',
    blurb: 'Promotional motion systems, typography-led transitions, and animated information built for reel energy.',
  },
  'digital-filmmaking': {
    eyebrow: 'Digital filmmaking',
    blurb: 'Narrative assembly, shot planning, and scene breakdowns that present filmmaking as structured visual storytelling.',
  },
  vfx: {
    eyebrow: 'VFX',
    blurb: 'Composite studies, atmosphere passes, and cleanup work presented as process-aware visual outcomes.',
  },
  'freelance-academic': {
    eyebrow: 'Freelance and academic',
    blurb: 'Client-facing delivery and coursework presentation brought together in a cleaner, submission-ready archive.',
  },
}

export const projects: PortfolioItem[] = [
  {
    id: 1,
    slug: 'brand-poster-system',
    title: 'Brand Poster System',
    category: 'graphic-design',
    year: '2025',
    mediaType: 'image',
    summary: 'A print-ready visual identity set with hero typography, structured grids, and promotional posters.',
    detail: 'Presented as still-image layout boards and color variants.',
    description: 'Placeholder case-study copy: this detail page would explain the concept, typography hierarchy, grid system, and campaign rollout decisions behind the poster system.',
    tools: ['Photoshop', 'Illustrator', 'InDesign'],
    palette: '#e25436',
  },
  {
    id: 2,
    slug: 'sketchbook-figure-study',
    title: 'Sketchbook Figure Study',
    category: 'sketching-painting',
    year: '2025',
    mediaType: 'image',
    summary: 'Observational sketching series focused on gesture, line confidence, and tonal variation.',
    detail: 'Displayed as curated still frames from the sketchbook set.',
    description: 'Placeholder case-study copy: this page would cover the drawing exercise goals, medium choices, and progression from rough gesture studies to refined tonal passes.',
    tools: ['Graphite', 'Ink', 'Sketchbook'],
    palette: '#9e6b46',
  },
  {
    id: 3,
    slug: 'frame-by-frame-title-loop',
    title: 'Frame-by-Frame Title Loop',
    category: '2d-animation',
    year: '2024',
    mediaType: 'video',
    summary: 'A short looping animation using hand-drawn timing, transitions, and text motion.',
    detail: 'Presented as a motion clip highlight with storyboard-ready key poses.',
    description: 'Placeholder case-study copy: this section would break down timing charts, key poses, in-betweens, and how the animated title sequence was polished for looping playback.',
    tools: ['After Effects', 'TVPaint', 'Storyboard Panels'],
    palette: '#ffc145',
  },
  {
    id: 4,
    slug: 'campus-event-edit',
    title: 'Campus Event Edit',
    category: 'video-editing',
    year: '2025',
    mediaType: 'video',
    summary: 'Fast-paced recap edit shaped around beat cuts, transitions, and social-friendly pacing.',
    detail: 'Includes preview frames and short-form edit references.',
    description: 'Placeholder case-study copy: this page would describe the cut structure, music sync decisions, shot grouping, and versioning used for social and presentation-ready deliverables.',
    tools: ['Premiere Pro', 'Audition', 'Media Encoder'],
    palette: '#74b9ff',
  },
  {
    id: 5,
    slug: 'promo-motion-package',
    title: 'Promo Motion Package',
    category: 'motion-graphics',
    year: '2025',
    mediaType: 'video',
    summary: 'Lower-thirds, title cards, and animated bumpers created for campaign-style storytelling.',
    detail: 'Presented with preview stills and reel references.',
    description: 'Placeholder case-study copy: this page would highlight the motion language, typography animation system, and reusable package design used across the promo suite.',
    tools: ['After Effects', 'Illustrator', 'Media Encoder'],
    palette: '#ff8fab',
  },
  {
    id: 6,
    slug: 'short-film-scene-assembly',
    title: 'Short Film Scene Assembly',
    category: 'digital-filmmaking',
    year: '2024',
    mediaType: 'link',
    summary: 'Shot planning, edit structure, framing decisions, and mood-led sequencing for a narrative scene.',
    detail: 'Documented as a mini case study with process breakdown.',
    description: 'Placeholder case-study copy: this detail page would cover pre-visualization, shot selection, continuity decisions, and the narrative logic behind the final scene assembly.',
    tools: ['Premiere Pro', 'Shot Lists', 'Color Notes'],
    palette: '#7f5af0',
  },
  {
    id: 7,
    slug: 'composite-and-cleanup-study',
    title: 'Composite and Cleanup Study',
    category: 'vfx',
    year: '2025',
    mediaType: 'video',
    summary: 'Compositing practice covering clean plates, glow work, and atmospheric scene enhancement.',
    detail: 'Shown with before/after presentation blocks.',
    description: 'Placeholder case-study copy: this page would explain plate cleanup, edge refinement, glow integration, and the sequence of passes used to complete the composite.',
    tools: ['After Effects', 'Nuke Basics', 'Tracking Markers'],
    palette: '#5dd39e',
  },
  {
    id: 8,
    slug: 'client-and-coursework-showcase',
    title: 'Client and Coursework Showcase',
    category: 'freelance-academic',
    year: '2025',
    mediaType: 'link',
    summary: 'A mix of freelance deliverables and academic submissions organized into one clean portfolio track.',
    detail: 'Presented through category links and summary cards.',
    description: 'Placeholder case-study copy: this page would summarize deliverables, review checkpoints, and how academic and client-facing presentation standards were balanced.',
    tools: ['Presentation Boards', 'Figma', 'Review Notes'],
    palette: '#f28482',
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
