import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'

import SiteHeader from 'components/global/SiteHeader'
// import Hero from './homepage/HomeHero'
// import About from './homepage/About'
// import ProfessionalExperience from './homepage/experience/ProfessionalExperience'
// import Skills from './homepage/skills/Skills'
// import Contact from './homepage/Contact'

import type {
  //   Experience,
  GlobalSettings,
  Settings,
  //   Skill,
} from 'lib/sanity.queries'
import Head from 'next/head'
// import Education from './homepage/Education'

export interface PortfolioPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
  globalSettings: GlobalSettings
  //   experience: Experience[]
  //   skills: Skill[]
  //   globalSettings: GlobalSettings
  //   experience: Experience[]
  //   skills: Skill[]
}

export default function PortfolioPage(props: PortfolioPageProps) {
  const {
    preview,
    loading,
    globalSettings,
    // experience,
    settings,
    // skills
  } = props
  return (
    <div className="scrollbar-thin scrollbar-track-lightGreen/10 scrollbar-thumb-teal/20 z-0 h-screen overflow-x-hidden overflow-y-scroll bg-bgMain text-white">
      <div className="scrollbar-thin scrollbar-track-lightGreen/10 scrollbar-thumb-teal/20 z-0 h-screen overflow-x-hidden overflow-y-scroll bg-bgMain text-white">
        <Head>
          <IndexPageHead settings={settings} />
        </Head>
        <Layout preview={preview} loading={loading}>
          <Container>
            <SiteHeader social={globalSettings?.socialMedia?.social} />
            <section id="hero" className="h-screen">
              <div className="flex flex-row text-3xl text-lightGreen">
                This is the Portfolio
                <div className="bg-red h-screen"></div>
                <div className="h-screen bg-white"></div>
              </div>
            </section>
          </Container>
        </Layout>
      </div>
    </div>
  )
}
