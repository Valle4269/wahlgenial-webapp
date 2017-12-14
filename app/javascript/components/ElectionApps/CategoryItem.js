import React from 'react'
import {ElectionAppsCategoriesIcons} from '../../images/icons'
import AppItem from './AppItem'

const CategoryItem = ({iconName, title, categoryIndex, apps, onClick}) => {
  const handleClick = (appId) => {
    onClick(categoryIndex, appId)
  }
  const handleIcon = (iconString) => {
    if (!iconString || iconString === ' ') {
      return (ElectionAppsCategoriesIcons.unknown)
    } else {
      return (ElectionAppsCategoriesIcons[iconName])
    }
  }
  return (
    <div className='px-4 col-12 text-center'>
      <div className='m-auto category-container'>
        <div className='category-title text-left'>
          <div className='category-title-icon pr-1'>
            <img src={ handleIcon(iconName) } title={ title } />
          </div>
          <h2>{title}</h2>
        </div>
        {apps.map((app, index) => (
          <AppItem
            key={ index }
            onClick={ () => { handleClick(index) } }
            name={ app.name }
            description={ app.description }
            link={ app.link } />
        ))}
      </div>
    </div>
  )
}
export default CategoryItem
