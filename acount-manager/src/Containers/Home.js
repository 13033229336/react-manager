import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'
import { LIST_VIEW, CHART_VIEW,TYPE_INCOME,TYPE_OUTCOME,parseToYearAndMonth,padLeft} from '../utility'
import ViewTab from '../Components/ViewTab'
import PriceList from '../Components/PriceList'
import MonthPicker from '../Components/MonthPicker'
import CreateBtn from '../Components/CreateBtn'
import TotalPrice from '../Components/TotalPrice'

const categories={
  "1":{
    "id":"1",
    "name":"旅行",
    "type":"outcome",
    "iconName":"ios-plane",
  },
  "2":{
    "id":"2",
    "name":"理财",
    "type":"income",
    "iconName":"logo-yen",
  }
}
const items=[
    {
      "id":1,
      "title":"去南昌旅行",
      "price":200,
      "date":"2020-04-05",
      "cid":1
       
    },
    {
      "id":2,
      "title":"去南昌旅行",
      "price":200,
      "date":"2020-04-05",
      "cid":1
    },
    {
        "id":3,
        "title":"理财收入",
        "price":888,
        "date":"2018-10-05",
        "cid":2
      },
]
const newItem={
  "id":4,
  "title":"新添加的项目",
  "price":300,
  "date":"2020-4-05",
  "cid":1
}
class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      items,
      currentDate:parseToYearAndMonth(),
      tabView:LIST_VIEW
    }
  }
    //改变视图的方法
    changeView=(view)=>{
      this.setState({
        tabView:view
      })
    }
    //改变日期的方法
    changeDate=(year,month)=>{
      this.setState({
         currentDate:{year,month}
      })
    }
    //修改项目的方法
    modifyItem=(modifyItem)=>{
       const modifiedItems = this.state.items.map(item=>{
         if(item.id === modifyItem.id){
           return {...item,title:'更新后的标题'}
         }else{
           return item
         }
       })
       this.setState({
         items:modifiedItems
       })
    }
    //创建项目方法
    createItem=()=>{
      this.setState({
        items:[newItem,...this.state.items]
      })
    }
    //删除项目
    deleteItem=(deleteItem)=>{
       const filteredItems=this.state.items.filter(item=>item.id !==deleteItem.id)
       this.setState({
         items:filteredItems
       })
    }

    render(){
         //从state中取出数据
        const {items,currentDate,tabView}=this.state
        const itemsWithCategory=items.map(item=>{
          item.category=categories[item.cid]
          return item
        }).filter(item=>{
          return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
        })
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
                       year={currentDate.year}
                       month={currentDate.month}
                       onChange={this.changeDate}
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
                <ViewTab activeTab={tabView} onTabChange={this.changeView}/>
                <CreateBtn onClick={this.createItem} />
                { tabView ===LIST_VIEW &&
                <PriceList
                    items={itemsWithCategory}
                    onModifyItem={this.modifyItem}
                    onDeleteItem={this.deleteItem}
                />
                }
                {
                  tabView===CHART_VIEW &&
                  <h1>这里是图表</h1>
                }
              </div>
            
            </div>
          </React.Fragment>
        )
    }
}
export default Home

