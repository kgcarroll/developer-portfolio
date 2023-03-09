import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/IndexPage'
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

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

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
          <IndexPage
            loading
            preview
            // posts={posts}
            settings={settings}
            globalSettings={globalSettings}
            experience={experience}
            skills={skills}
          />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return (
    <>
      {/* {console.log('Experience: ', skills)} */}
      <IndexPage
        // posts={posts}
        settings={settings}
        globalSettings={globalSettings}
        experience={experience}
        skills={skills}
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
