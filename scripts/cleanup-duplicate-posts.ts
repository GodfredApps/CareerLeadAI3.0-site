import { createClient } from '@sanity/client'

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-12-04',
  token: process.env.SANITY_API_TOKEN || '',
  useCdn: false,
})

// These are the CORRECT post IDs we want to keep
const correctPostIds = [
  'post-highest-paying-jobs-ghana-2025',
  'post-cv-writing-guide-ghana-nigeria-2025',
  'post-remote-jobs-africa-complete-guide-2025',
  'post-software-developer-salaries-africa-2025',
  'post-top-skills-demand-africa-2025',
]

async function cleanupDuplicatePosts() {
  console.log('🧹 Finding and removing duplicate blog posts...\n')

  try {
    // Fetch all blog posts
    const allPosts = await client.fetch<Array<{ _id: string; title: string }>>(
      `*[_type == "post"] { _id, title }`
    )

    console.log(`📊 Total posts in database: ${allPosts.length}`)
    console.log(`✅ Correct posts (to keep): ${correctPostIds.length}\n`)

    // Find duplicates (posts that are NOT in our correct list)
    const duplicates = allPosts.filter(post => !correctPostIds.includes(post._id))

    if (duplicates.length === 0) {
      console.log('✨ No duplicate posts found! Database is clean.')
      return
    }

    console.log(`🗑️  Found ${duplicates.length} duplicate posts to delete:\n`)
    duplicates.forEach(post => {
      console.log(`   - ${post._id}: ${post.title}`)
    })

    console.log('\n🔥 Deleting duplicates...\n')

    // Delete each duplicate
    for (const post of duplicates) {
      try {
        await client.delete(post._id)
        console.log(`✅ Deleted: ${post._id}`)
      } catch (error: any) {
        console.error(`❌ Error deleting ${post._id}:`, error.message)
      }
    }

    console.log(`\n🎉 Cleanup complete! Deleted ${duplicates.length} duplicate posts.`)
    console.log(`\n📊 Final count: ${correctPostIds.length} blog posts remaining`)
    console.log('🌐 View in Sanity Studio: https://careerlead-cms.sanity.studio/')
  } catch (error) {
    console.error('❌ Error during cleanup:', error)
  }
}

// Run the cleanup
cleanupDuplicatePosts().catch(console.error)
