import PortfolioPage from 'components/PortfolioPage'
import { usePreview } from 'lib/sanity.preview'
import {
  indexQuery,
  type Post,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'

export default function PreviewPortfolioPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, indexQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <PortfolioPage preview posts={posts} settings={settings} />
}
