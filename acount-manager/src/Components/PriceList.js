import React from 'react'
import Ionicon from 'react-ionicons'
import PropType from 'prop-types'
const PriceList=({items , onModifyItem,onDeleteItem})=>{
    return(
        <ul className="list-group list-group-flush">
            {
                items.map((item)=>(
                    <li className="list-group-item d-flex justify-content-netween align-items-center" key={item.id}>
                        <Ionicon
                            className="rounded-circle" 
                            fontSize="30px" 
                            style={{backgroundColor:'#007bff',padding:'5px'}} color={'#fff'} 
                            icon={item.category.iconName}
                        />
                        <span className="col-5">{item.title}</span>
                        <span className="col-2 font-weight-bold">
                            {(item.category.type==='income')? '+':'-'}
                            {item.price}元
                        </span>
                        <span className="col-2">{item.date}</span>
                        <a className="col-1" onClick={()=>{onModifyItem(item)}}>
                           <Ionicon 
                               className="rounded-circle" 
                               fontSize="30px" 
                               style={{backgroundColor:'#28a745',padding:'5px'}} 
                               color={'#fff'} 
                               icon='ios-create-outline'
                            />
                        </a>
                       <a className="col-1" onClick={()=>{onDeleteItem(item)}}>
                            <Ionicon 
                               className="rounded-circle" 
                               fontSize="30px" 
                               style={{backgroundColor:'#dc3545',padding:'5px'}} 
                               color={'#fff'} 
                               icon='ios-close'
                            />
                       </a>
                    </li>
                ))
            }
        </ul>
    )
}
//类型检查
PriceList.propType={
    items:PropType.array.isRequired,
    onModifyItem:PropType.func.isRequired,
    onDeleteItem:PropType.func.isRequired,
}
PriceList.defaultProps={
    onModifyItem:()=>{},
    onDeleteItem:()=>{}
}
export default PriceList