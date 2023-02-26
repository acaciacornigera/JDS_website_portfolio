// Import schema types from any plugins that might expose them
import abouts from './abouts'
import skillsLevel from './skillsLevel'
import skills from './skills'
import experiences from './experiences'
import works from './works'
import contact from './contact'


// Then we give our schema to the builder and provide the result to Sanity
export default [
  abouts,
  skillsLevel,
  skills,
  experiences,
  works,
  contact,
]