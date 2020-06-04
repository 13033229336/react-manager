import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'
import { LIST_VIEW, CHART_VIEW,TYPE_INCOME,TYPE_OUTCOME} from '../utility'
import ViewTab from '../Components/ViewTab'
import PriceList from '../Components/PriceList'
import MonthPicker from '../Components/MonthPicker'
import CreateBtn from '../Components/CreateBtn'
import TotalPrice from '../Components/TotalPrice'

const items=[
    {
      "id":1,
      "title":"去南昌旅行",
      "price":200,
      "date":"2020-4-5",
      "category":{
        "id":"1",
        "name":"旅行",
        "type":"outcome",
        "iconName":"ios-plane",
      } 
    },
    {
      "id":2,
      "title":"去南昌旅行",
      "price":200,
      "date":"2020-4-5",
      "category":{
        "id":"1",
        "name":"旅行",
        "type":"outcome",
        "iconName":"ios-plane",
      } 
    },
    {
        "id":3,
        "title":"理财收入",
        "price":888,
        "date":"2020-4-5",
        "category":{
          "id":"1",
          "name":"理财",
          "type":"income",
          "iconName":"logo-yen",
        } 
      },
]
class Home extends Component{
    render(){
        let totalIncome=0
        let totalOutcome=0
        //从items里面算出总收入和总支出
        items.forEach(item=>{
            if(item.category.type ===TYPE_OUTCOME){
                totalOutcome +=item.price
            }else{
                totalIncome +=item.price
            }
        })
        return(
          <React.Fragment>
            <div className="App-header">
              <div className="row">
                <div className="col">
                    <MonthPicker 
                       year={2020}
                       month={4}
                       onChange={()=>{}}
                    />
                </div>
                <div className="col">
                    <TotalPrice 
                         income={totalIncome}
                         outcome={totalOutcome}
                    />
                   
                </div>
              </div>
              <div className="content-area py-3 px-3">
                <ViewTab activeTab={LIST_VIEW} onChange={()=>{}}/>
                <CreateBtn onClick={()=>{}} />
                <PriceList
                    items={items}
                    onModifyItem={()=>{}}
                    onDeleteItem={()=>{}}
                />
              </div>
            
        </div>
        </React.Fragment>
        )
    }
}
export default Home

