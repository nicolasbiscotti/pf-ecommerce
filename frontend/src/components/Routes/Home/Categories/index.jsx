import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getAllCategories} from '../../../../redux/reducers/categories/actions'
export default function Categories() {
  const homeCategories = useSelector(({categories}) => categories.allCategories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])
  
  return (
    <div>
      {homeCategories?.map((category) => <div>holo {category.name}</div>)}
      This must be Categories buttons
    </div>
  ) 
}