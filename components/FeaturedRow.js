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
                title="Pizza Corner"
                rating={4.5}
                genre="Italian"
                address="DLF phase 5"
                short_description="Original Italian"
                dishes={[]}
                long={29}
                lat={45}
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow