import React from 'react'
import { shallow } from 'enzyme'
import PriceList from '../PriceList'
import {items , categories} from '../../Containers/Home'

const itemsWithCategory=items.map(item=>{
    item.category=categories[item.cid]
    return item
})

const props={
    items:itemsWithCategory,
    onModifyItem:()=>{},
    onDeleteItem:()=>{}
}

describe('test PriceList component',()=>{
    beforeEach(()=>{
        wrapper = shallow (<PriceList{...props}/>)
    })
    it('should render the component to match snapshot',()=>{
        expect(wrapper).toMatchSnapshot()
    })
})