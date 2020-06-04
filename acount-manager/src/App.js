import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './Components/PriceList'
import ViewTab from './Components/ViewTab'
import {LIST_VIEW,CHART_VIEW} from './utility'
const items=[
  {
    "id":1,
    "title":"去南昌旅行",
    "price":200,
    "date":"2020-4-5",
    "category":{
      "id":"1",
      "name":"旅行",
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
      "iconName":"ios-plane",
    } 
  },
]
function App() {
  return (
    <div className="App">
      <ViewTab
         activeTab={LIST_VIEW}
         onTabChange={(view)=>{console.log(view)}}
      />
      {/* <PriceList 
        items={items}
        onModifyItem={(item)=>{alert(item.id)}}
        onDeleteItem={(item)=>{alert(item.id)}}
      /> */}
    </div>
  );
}

export default App;
