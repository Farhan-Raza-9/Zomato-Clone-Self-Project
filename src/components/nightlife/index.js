import React from 'react'
import "./nightlife.css"
import Collection from '../common/collection'
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'
import { nightlife } from '../../data/nightlife'


const nightFilters =[
  {
    id: 1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title:"Filters",
  },
  {
    id: 2,
    icon: <i className='fi fi-rr-angle-down absolute-center'></i>,
    title:"Pro Offers",
  },
  {
    id: 3,
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
    title:"Distance",
  },
  {
    id: 4,
    title:"Rating: 4.0+",
  },
  {
    id: 5,
    title:"Pubs & Bars",
  },
]

const collectionList =[
  {
    id: 1,
    title: "Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
    places: "29 Places",
  },
  {
    id: 2,
    title: "Best Bars & Pubs",
    cover: "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "22 Places",
  },
  {
    id: 3,
    title: "Artisan Cocktails",
    cover: "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
    places: "20 Places",
  },
  {
    id: 4,
    title: "Happy Hours",
    cover: "https://img.freepik.com/free-vector/cartoon-happy-hours-background_52683-81243.jpg",
    places: "12 Places",
  },
]
const nightList = nightlife;
const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection
      list={nightList}
      collectionName="Nightlife Restaurants in Lucknow"
      />
    </div>
  )
}

export default Nightlife