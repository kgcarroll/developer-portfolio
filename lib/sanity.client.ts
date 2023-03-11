import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  type Experience,
  experienceQuery,
  type GlobalSettings,
  globalSettingsQuery,
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  type ProfessionalReference,
  professionalReferenceQuery,
  type Settings,
  settingsQuery,
  type Skill,
  skillQuery,
  type ToolsPlatform,
  toolsPlatformQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getGlobalSettings(): Promise<GlobalSettings> {
  if (client) {
    return (await client.fetch(globalSettingsQuery)) || {}
  }
  return {}
}

export async function getExperience(): Promise<Experience[]> {
  if (client) {
    return (await client.fetch(experienceQuery)) || []
  }
  return []
}

export async function getProfessionalReference(): Promise<
  ProfessionalReference[]
> {
  if (client) {
    return (await client.fetch(professionalReferenceQuery)) || []
  }
  return []
}

export async function getSkill(): Promise<Skill[]> {
  if (client) {
    return (await client.fetch(skillQuery)) || []
  }
  return []
}

export async function getToolsPlatform(): Promise<ToolsPlatform[]> {
  if (client) {
    return (await client.fetch(toolsPlatformQuery)) || []
  }
  return []
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }
  return { post: null, morePosts: [] }
}
