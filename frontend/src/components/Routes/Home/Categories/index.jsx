import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getHomeCategories } from '../../../../redux/reducers/categories/actions'
import { StyledCategories } from './styled'
import Card from './Card'
export default function Categories() {
  const dispatch = useDispatch()
  const homeCategories = useSelector(({ categories }) => categories.homeCategories)
  
  useEffect(() => {dispatch(getHomeCategories())}, [])
  

  return (
    <StyledCategories>
      {homeCategories.map((category, index) => <Card key={index} {...category} index={index}/>)}
    </StyledCategories>
  )
}