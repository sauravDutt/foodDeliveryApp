import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
        </View>

        <Text className="text-xs text-gray-500 px-4">
            {description}
        </Text>

        <ScrollView
        horizontal
        contentContainerStyle = {{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className = "pt-4"
        >
            {/* RestaurantCards */}
            <RestaurantCard
                id={123}
                imgUrl='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60' 
                title="Tossin Pizza"
                rating={4.5}
                genre="Italian"
                address="DLF phase 4"
                short_description="Original Italian"
                dishes={[]}
                long={29}
                lat={45}
            />

            <RestaurantCard
                id={123}
                imgUrl='https://assets.gqindia.com/photos/618e3d0e2b26b3e38183031a/4:3/w_1439,h_1079,c_limit/best%20places%20to%20have%20sushi%20in%20mumbai.jpg' 
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="DLF phase 5"
                short_description="Original Japanese cuisine"
                dishes={[]}
                long={29}
                lat={45}
            />

            <RestaurantCard
                id={123}
                imgUrl='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' 
                title="Burgerama!"
                rating={4.5}
                genre="American"
                address="DLF phase 4"
                short_description="Original Recipe"
                dishes={[]}
                long={29}
                lat={45}
            />

            <RestaurantCard
                id={123}
                imgUrl='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg' 
                title="Fried Chicken Shop!"
                rating={4.5}
                genre="American"
                address="DLF phase 5"
                short_description="Original Recipe"
                dishes={[]}
                long={29}
                lat={45}
            />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow