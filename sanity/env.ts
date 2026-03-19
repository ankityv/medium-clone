export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-09-22'

export const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const _projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
if (!_projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
}
export const projectId: string = _projectId

