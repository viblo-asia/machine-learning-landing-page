import services from '../service-items'
//import descriptions from './descriptions'
import articles from './contents'
import images from './images'

const items = services.map((item, index) => {
  return Object.assign({}, item, {
    //description: descriptions[index],
    image: images[index],
    contents: articles[index]
  })
})

export default items
