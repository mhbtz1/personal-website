export const PROFILE = {
  name: 'Matthew Habtezgi',
  resumePdf: '/Matthew_Habtezgi.pdf',
}

export interface ProfileLink {
  label: string
  href: string
}

export const PROFILE_LINKS: ProfileLink[] = [
  { label: 'GitHub', href: 'https://github.com/mhbtz1' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthew-habtezgi-b4511b1a9/' },
  { label: 'Resume PDF', href: PROFILE.resumePdf },
  { label: 'RSS', href: '/rss.xml' },
]
