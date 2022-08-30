<template>
    
        <v-main >
            <DynamicGrid ref="gridref"
                :grid_style="background_option != 'color' && gridStyleImage.backgroundImage != '' ? gridStyleImage : gridBackgroundColorSent"  />
            
        </v-main>
    

</template>

<script>
import DynamicGrid from './DynamicGrid';
import ImageWidget from "./widgets/ImageWidget.vue";
import BandDataWidget from "./widgets/BandDataWidget.vue";
import TextWidget from "./widgets/TextWidget.vue";
import VideoWidget from "./widgets/VideoWidget.vue";
import WeatherWidget from "./widgets/WeatherWidget.vue";
import CurrencyExchangeRate from "./widgets/CurrencyExchangeRate.vue";

import axios from 'axios';

export default {
    name: 'ShowDisplay',

    components: {
        DynamicGrid,
    },


    data: () => ({
       
        loaded_items: [
        ],
        componentImg: '',
        background_option: 'color',
        gridBackgroundColor: '#f55471',
       
    }),

    mounted() {
        this.loadDisplay()

    },
        computed: {
        
        gridBackgroundColorSent() {
            const { gridBackgroundColor } = this
            return {
                backgroundColor: gridBackgroundColor,
            }
        },
        gridStyleImage() {
            const { componentImg } = this
            return {
                backgroundImage: `url("${componentImg}")`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }

        }
    },
    methods: {
        loadDisplay() {
            var link = '/displays/display_' + this.$route.params.id + '.json'
            let existingObj = this;
            axios.get(link).then(function (res) {
               // console.log(res)
                 existingObj.loaded_items = res.data.loaded_items;
               // console.log( existingObj.loaded_items)
                existingObj.$refs.gridref.layout = [];
                existingObj.loaded_items.forEach(item => {
                    switch (item.ref) {
                       case "imageRef":
                            console.log("imageRef")
                            item.widget = ImageWidget;
                            break;

                        case "videoRef":
                            console.log("videoRef")
                            item.widget = VideoWidget;
                            break;
                         case "bandDataRef":
                            console.log("bandDataRef")
                            item.widget = BandDataWidget;
                            break;

                        case "simpleTextRef":
                            console.log("simpleTextRef")
                            item.widget = TextWidget;
                            break;
                         case "exchangeRef":
                            console.log("exchangeRef")
                            item.widget = CurrencyExchangeRate;
                            break;

                        case "weatherRef":
                            console.log("weatherRef")
                            item.widget = WeatherWidget;
                            break;
                    }

                    existingObj.$refs.gridref.loadItem(item);
                });

                existingObj.componentImg = res.data.componentImg;
                existingObj.background_option = res.data.background_option;
                existingObj.gridBackgroundColor = res.data.gridBackgroundColor;

            });
        },
       
    }


};
</script>
