import { title } from './demo.data'
// ALL QUERIES GO HERE
import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`
export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

// Global Settings
export const globalSettingsQuery = groq`
*[_type == "global"][0]
`

// Experience
export const experienceQuery = groq`
*[_type == "experience"]|order(employmentInformation.dateStarted desc) {
  ...,
  employmentInformation {
    ...,
    professionalReference[]->
  },
  jobFunction {
    technologies[]->,
    toolPlatform[]->,
    points[]
  }
}
`
// Skill
export const skillQuery = groq`
*[_type == "skill"] 
`
// ToolsPlatform
export const toolsPlatformQuery = groq`
*[_type == "toolsPlatform"]
`

// Professional Reference
export const professionalReferenceQuery = groq`
*[_type == "professionalReference"]
`
// Taxonomy
export const taxonomyQuery = groq`
*[_type == "taxonomy"]
`
// ALL TYPE DEFINITIONS GO HERE
interface SanityBody {
  _createdAt?: string
  _id?: string
  _rev?: string
  _updatedAt?: string
}

interface Image {
  _type?: 'image'
  asset?: {
    _ref?: string
    _type?: string
  }
}

export interface Social extends SanityBody {
  _type?: 'account'
  _key?: string
  title?: string
  url?: string
}

export interface Post {
  _id?: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  // author?: Author
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}

export interface Project extends SanityBody {
  _type?: 'projects'
  category: Taxonomy[]
  projectDetails?: {
    linkToBuild?: string
    technologies?: Skill[]
    toolPlatforms?: ToolsPlatform[]
  }
  projectImages?: {
    caseStudyGalleryImages?: {
      caseStudyImages?: Image[]
    }
    responsiveDisplayImages?: {
      desktopImage?: Image
      mobileImage?: Image
      tabletImage?: Image
    }
  }
  summary?: string
  title?: string
}

export interface GlobalSettings extends SanityBody {
  _type?: 'global'
  contactInformation?: {
    address?: string
    email?: string
    phoneNumber?: number
  }
  education?: {
    college?: string
    collegeLocation?: string
    collegePic?: Image
    dateEnded?: Date
    dateStarted?: Date
    degree?: string
  }
  homepageContent?: {
    heroImage: Image
  }
  personalInformation?: {
    bio?: string
    bioTitle?: string
    name?: string
    profilePic?: Image
    role?: string
  }
  socialMedia?: {
    social?: Social[]
  }
}

export interface ProfessionalReference extends SanityBody {
  _type?: 'professionalReference'
  name?: string
  quote?: string
  title?: string
}

export interface ToolsPlatform extends SanityBody {
  _type?: 'toolsPlatform'
  image?: Image
  title?: string
}

export interface Skill extends SanityBody {
  _type?: 'skill'
  image?: Image
  progress?: string
  title?: string
}

export interface Experience extends SanityBody {
  _type?: 'experience'
  companyInformation?: {
    company?: string
    companyIcon?: Image
    companyImage?: Image
  }
  employmentInformation?: {
    dateEnded?: Date
    dateStarted?: Date
    jobTitle?: string
    currentlyEmployed?: boolean
    professionalReference: ProfessionalReference[]
  }
  jobFunction?: {
    points?: string[]
    technologies?: Skill[]
    toolPlatform?: ToolsPlatform[]
  }
}

export interface Taxonomy extends SanityBody {
  _type?: 'taxonomy'
  categoryName: string
  desc: string
}

// export interface Author {
//   name?: string
//   picture?: any
// }
