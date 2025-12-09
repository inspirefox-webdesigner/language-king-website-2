import { cleanupDuplicateFAQs, getFAQStats } from '../utils/cleanupDuplicateFAQs.js'

// Script to clean up existing duplicate FAQs
const runCleanup = async () => {
  console.log('=== FAQ Duplicate Cleanup Script ===\n')
  
  try {
    // Get initial stats
    console.log('Getting initial FAQ statistics...')
    const initialStats = await getFAQStats()
    
    if (initialStats) {
      console.log(`Initial Stats:`)
      console.log(`- Total FAQs: ${initialStats.total}`)
      console.log(`- Unique FAQs: ${initialStats.unique}`)
      console.log(`- Duplicate FAQs: ${initialStats.duplicates}\n`)
    }
    
    if (initialStats && initialStats.duplicates === 0) {
      console.log('✅ No duplicate FAQs found. Database is clean!')
      process.exit(0)
    }
    
    // Run cleanup
    console.log('Running cleanup process...')
    const result = await cleanupDuplicateFAQs()
    
    if (result.success) {
      console.log(`✅ ${result.message}`)
      
      // Get final stats
      const finalStats = await getFAQStats()
      if (finalStats) {
        console.log(`\nFinal Stats:`)
        console.log(`- Total FAQs: ${finalStats.total}`)
        console.log(`- Unique FAQs: ${finalStats.unique}`)
        console.log(`- Duplicate FAQs: ${finalStats.duplicates}`)
      }
    } else {
      console.error(`❌ ${result.message}`)
      if (result.error) {
        console.error(`Error: ${result.error}`)
      }
    }
    
  } catch (error) {
    console.error('❌ Script failed:', error.message)
    process.exit(1)
  }
  
  console.log('\n=== Cleanup Complete ===')
  process.exit(0)
}

// Run the script
runCleanup()