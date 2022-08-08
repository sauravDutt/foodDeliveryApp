import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* Category Card */}
        <CategoryCard 
            imgUrl='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60' 
            title='Testing 1'
        />
        <CategoryCard 
            imgUrl='https://assets.gqindia.com/photos/618e3d0e2b26b3e38183031a/4:3/w_1439,h_1079,c_limit/best%20places%20to%20have%20sushi%20in%20mumbai.jpg' 
            title='Testing 2'
        />
        <CategoryCard 
            imgUrl='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' 
            title='Testing 3'
        />
        <CategoryCard 
            imgUrl='https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg' 
            title='Testing 4'
        />
        <CategoryCard 
            imgUrl='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg' 
            title='Testing 6'
        />
        <CategoryCard 
            imgUrl='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60' 
            title='Testing 5'
        />
    </ScrollView>
  )
}

export default Categories