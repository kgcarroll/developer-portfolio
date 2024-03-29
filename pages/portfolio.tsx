import { PreviewSuspense } from '@sanity/preview-kit'
import PortfolioPage from 'components/PortfolioPage'
import {
  getAllPosts,
  getSettings,
  getGlobalSettings,
  getExperience,
  getSkill,
} from 'lib/sanity.client'
import {
  Post,
  Settings,
  GlobalSettings,
  Experience,
  Skill,
} from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

const PreviewPortfolioPage = lazy(() => import('components/PreviewPortfolioPage'))

interface PageProps {
  posts: Post[]
  settings: Settings
  globalSettings: GlobalSettings
  experience: Experience[]
  skills: Skill[]
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page({
  posts,
  settings,
  globalSettings,
  experience,
  skills,
  preview,
  token,
}: PageProps) {
  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PortfolioPage
            loading
            preview
            // posts={posts}
            settings={settings}
            globalSettings={globalSettings}
            // experience={experience}
            // skills={skills}
          />
        }
      >
        <PreviewPortfolioPage token={token} />
      </PreviewSuspense>
    )
  }

  return (
    <>
      {/* {console.log('Experience: ', skills)} */}
      <PortfolioPage
        // posts={posts}
        settings={settings}
        globalSettings={globalSettings}
        // experience={experience}
        // skills={skills}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  // This order matters.  Order of array below must match the otder of query call.
  const [globalSettings, settings, posts = [], experience = [], skills = []] =
    await Promise.all([
      getGlobalSettings(),
      getSettings(),
      getAllPosts(),
      getExperience(),
      getSkill(),
    ])
  return {
    props: {
      posts,
      settings,
      globalSettings,
      experience,
      skills,
      preview,
      token: previewData.token ?? null,
    },
  }
}
