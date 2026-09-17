import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import RSS from "@/assets/icons/rss.svg"
import Twitter from "@/assets/icons/twitter.svg"

export const SITE = {
  title: "Arsipin",
  description: "",
  locale: "id-ID",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const

export const NAVIGATION = [
  { href: "/blog", label: "Esai" },
  { href: "/ulasan", label: "Ulasan" },
  { href: "/redaksi", label: "Redaksi" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/jktrn", label: "GitHub", icon: GitHub },
  { href: "https://twitter.com/enscrbe", label: "Twitter", icon: Twitter },
  { href: "mailto:jason@enscribe.dev", label: "Email", icon: Email },
  { href: "/rss.xml", label: "RSS", icon: RSS },
]
