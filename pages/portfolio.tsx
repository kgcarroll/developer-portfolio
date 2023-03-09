import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'

import SiteHeader from 'components/global/SiteHeader'

import type {
  Experience,
  GlobalSettings,
  Settings,
  Skill,
} from 'lib/sanity.queries'
import Head from 'next/head'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
  globalSettings: GlobalSettings
  experience: Experience[]
  skills: Skill[]
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, globalSettings, experience, settings, skills } =
    props
  return (
    <div className="z-0 h-screen overflow-x-hidden overflow-y-scroll text-white scrollbar-thin scrollbar-track-lightGreen/10 scrollbar-thumb-teal/20 bg-bgMain">
      <Head>
        <IndexPageHead settings={settings} />
      </Head>
      <Layout preview={preview} loading={loading}>
        <Container>
          <SiteHeader social={globalSettings?.socialMedia?.social} />
          <section id="hero" className="h-screen">
            This is the portfolio.
          </section>
        </Container>
      </Layout>
    </div>
  )
}
