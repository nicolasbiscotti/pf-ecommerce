import axios from "axios";
import { store } from "../../store/index";
import { SELECT_CATEGORY } from "./consts";
import { actionCreator } from "../products/actions";
import { GET_ALL_PRODUCTS } from "../products/const";

function setFilterQuerys(filters,params){
    var querys='';
    if(filters.isDefault){
        return querys;
    }else{
        if(filters.category!==undefined && params!=='category'){
            querys=querys+`&idCategory=${filters.category.id}`
        }
        if(filters.sort!==undefined){
            querys=querys+`&typeOrder=${filters.sort}`
        }
    }
    return querys
}

export const selectCategory = function(category){
    return async function(dispatch){
        try {
            const filters= await store.getState().filters || {isDefault:true}
            var query= await setFilterQuerys(filters,'category');
            var url;
            if(category.id===-1 && category.name==='All'){
                if(query===''){
                    url='/products'
                }else{
                    url='/products?' + query.slice(1)
                }
            }else{
                url=`/products?idCategory=${category.id}` + query
            }
            const res= await axios.get(url);
            dispatch(actionCreator(GET_ALL_PRODUCTS,res.data))
            dispatch(actionCreator(SELECT_CATEGORY,category))
        } catch (error) {
            console.log(error)
        }
    }
}