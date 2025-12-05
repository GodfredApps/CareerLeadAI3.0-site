import { sanityClient, skillsQuery } from '@/lib/sanity'

interface Skill {
  _id: string
  name: string
  slug: { current: string }
  category: string
  description?: string
  demandLevel: string
}

export default async function SkillsPage() {
  const skills: Skill[] = await sanityClient.fetch(skillsQuery)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Skills Directory
          </h1>
          <p className="text-xl text-gray-600">
            Browse our collection of in-demand skills
          </p>
        </div>

        {skills.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No skills found. Create some in the Studio!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {skill.name}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      skill.demandLevel === 'very_high'
                        ? 'bg-red-100 text-red-800'
                        : skill.demandLevel === 'high'
                        ? 'bg-orange-100 text-orange-800'
                        : skill.demandLevel === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {skill.demandLevel.replace('_', ' ').toUpperCase()}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-3 capitalize">
                  {skill.category.replace('_', ' ')}
                </p>

                {skill.description && (
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Total Skills: <span className="font-semibold">{skills.length}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
