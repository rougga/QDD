<template>
    <div>
        <v-app-bar app color="primary" dark>
            <v-spacer></v-spacer>
            <v-btn depressed color="#000000" @click="dialog = !dialog" class="mr-2">
                Arrière plans
            </v-btn>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="warning" dark v-bind="attrs" v-on="on" class="mx-2">
                        Changer les interfaces
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title><a :href="'/edite/' + new_display_id">Nouvelle interface</a>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item v-for="(link, index) in displayLinks" :key="index">
                        <v-list-item-title><a :href="'/edite/' + link.displaynumber">{{ link.title }}</a>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn depressed color="success" @click="saveChanges()" class="mr-2">
                Enregistrer
            </v-btn>
            <v-btn depressed color="info" v-if="new_display_id > $route.params.id" @click="goToShow()">
                Afficher
            </v-btn>
            <v-btn depressed color="error" @click.stop="drawer = !drawer" class="ml-2">
                Ajouter des composantes
            </v-btn>
        </v-app-bar>

        <v-main>
            <DynamicGrid ref="gridref"
                :grid_style="background_option != 'color' && gridStyleImage.backgroundImage != '' ? gridStyleImage : gridBackgroundColorSent" />
        </v-main>
        <v-navigation-drawer v-model="drawer" right absolute temporary>
            <v-list-item>

                <v-list-item-content>
                    <v-list-item-title>Ajouter des composantes</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-content>
                        <v-btn outlined :color="item.color" dark large @click="addComponent(item)">
                            {{ item.title }}
                        </v-btn>

                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        Modifier Arrière plans
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row no-gutters>
                                <v-radio-group v-model="background_option" row>
                                    <v-radio label="Choix Image" value="image"></v-radio>
                                    <v-radio label="Choix Couleur" value="color"></v-radio>
                                </v-radio-group>
                            </v-row>
                            <v-row no-gutters v-show="background_option == 'image'">
                                <v-col v-for="(image, ind) in images" :key="ind" cols="12" sm="4">
                                    <v-img width="150" height="150" :src="image.pathLong" class="m-1"
                                        @click="componentImg = image.pathLong"></v-img>
                                </v-col>
                            </v-row>
                            <v-row no-gutters v-show="background_option == 'color'">
                                <v-btn disabled text>Arrière plant widget</v-btn>
                                <v-text-field v-model="gridBackgroundColor" hide-details class="ma-0 pa-0" solo>
                                    <template v-slot:append>
                                        <v-menu v-model="menu" top nudge-bottom="105" nudge-left="16"
                                            :close-on-content-click="false">
                                            <template v-slot:activator="{ on }">
                                                <div :style="gridBackgroundColorStyle" v-on="on" />
                                            </template>
                                            <v-card>
                                                <v-card-text class="pa-0">
                                                    <v-color-picker v-model="gridBackgroundColor" flat />
                                                </v-card-text>
                                            </v-card>
                                        </v-menu>
                                    </template>
                                </v-text-field>
                            </v-row>

                        </v-container>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="dialog = false">
                            Fermer
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>

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
    name: 'EditeDisplay',

    components: {
        DynamicGrid,
    },


    data: () => ({
        drawer: null,
        dialog: false,
        items: [
            { title: 'Ajouter une Image', color: 'indigo', widget: ImageWidget, width: 200, height: 180, ref: "imageRef" },
            { title: 'Ajouter une Video', color: 'error', widget: VideoWidget, width: 400, height: 360, ref: "videoRef" },
            { title: 'Ajouter une Bande', color: 'primary', widget: BandDataWidget, width: window.screen.width, height: 90, ref: "bandDataRef" },
            { title: 'Ajouter du text simple', color: 'teal', widget: TextWidget, width: 800, height: 90, ref: "simpleTextRef" },
            //  { title: 'Guichet Widget', color: 'blue-grey' },
            { title: 'Bande devis', color: 'success', widget: CurrencyExchangeRate, width: window.screen.width, height: 90, ref: "exchangeRef" },
            { title: 'Horloge et Météo', color: 'warning', widget: WeatherWidget, width: 400, height: 800, ref: "weatherRef" },
        ],
        displayLinks: [
        ],
        loaded_items: [
        ],
        addComponent: function (item) {
            this.drawer = !this.drawer;
            this.$refs.gridref.addItem(item);
        },
        new_display_id: 0,
        rules: [
            value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
        images: [],
        componentImg: '',
        background_option: 'color',
        gridBackgroundColor: '#f55471',
        menu: false,
    }),

    mounted() {


        this.importAll(require.context('../../public/displays/', true));
        this.importAllImages(require.context('../assets/images/', true));
        if (this.new_display_id > this.$route.params.id) {
            this.loadDisplay()
        }

    },
    computed: {
        gridBackgroundColorStyle() {
            const { gridBackgroundColor, menu } = this
            return {
                backgroundColor: gridBackgroundColor,
                cursor: 'pointer',
                height: '30px',
                width: '30px',
                borderRadius: menu ? '50%' : '4px',
                transition: 'border-radius 200ms ease-in-out'
            }
        },
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
        saveChanges() {
            this.loaded_items = []
            Object.entries(this.$refs.gridref.$refs).forEach(elements => {

                elements[1].forEach(widjet => {
                    console.log(widjet)
                    switch (widjet._props.item_data.ref) {
                        case "imageRef":
                            this.loaded_items.push({
                                widget: null,
                                componentImg: this.componentImg,
                                background_option: this.background_option,
                                gridBackgroundColor: this.gridBackgroundColor,
                                data_loaded: {
                                    componentImg: widjet._data.componentImg,
                                }, width: widjet._props.item_data.w, height: widjet._props.item_data.h, x: widjet._props.item_data.x, y: widjet._props.item_data.y, ref: "imageRef"
                            })
                            break;

                        case "videoRef":
                            this.loaded_items.push({
                                widget: null, data_loaded: {
                                    componentVid: widjet._data.componentVid,
                                    videoId: widjet._data.videoId,
                                    videoType: widjet._data.videoType
                                }, width: widjet._props.item_data.w, height: widjet._props.item_data.h, x: widjet._props.item_data.x, y: widjet._props.item_data.y, ref: "videoRef"
                            })
                            break;
                        case "bandDataRef":
                            this.loaded_items.push({
                                widget: null, data_loaded: {
                                    itemBackgroundColor: widjet._data.itemBackgroundColor,
                                    textBackgroundColor: widjet._data.textBackgroundColor,
                                    textColor: widjet._data.textColor,
                                    textSize: widjet._data.textSize,
                                    textDirection: widjet._data.textDirection,
                                    textContent: widjet._data.textContent,
                                    displaySpeed: widjet._data.displaySpeed,
                                    textFontFamily: widjet._data.textFontFamily
                                }, width: widjet._props.item_data.w, height: widjet._props.item_data.h, x: widjet._props.item_data.x, y: widjet._props.item_data.y, ref: "bandDataRef"
                            })
                            break;

                        case "simpleTextRef":
                            this.loaded_items.push({
                                widget: null, data_loaded: {
                                    itemBackgroundColor: widjet._data.itemBackgroundColor,
                                    textBackgroundColor: widjet._data.textBackgroundColor,
                                    textColor: widjet._data.textColor,
                                    textSize: widjet._data.textSize,
                                    textContent: widjet._data.textContent,
                                    textFontFamily: widjet._data.textFontFamily
                                }, width: widjet._props.item_data.w, height: widjet._props.item_data.h, x: widjet._props.item_data.x, y: widjet._props.item_data.y, ref: "simpleTextRef"
                            })
                            break;
                        case "exchangeRef":
                            this.loaded_items.push({
                                widget: null, data_loaded: {
                                    itemBackgroundColor: widjet._data.itemBackgroundColor,
                                    textBackgroundColor: widjet._data.textBackgroundColor,
                                    textColor: widjet._data.textColor,
                                    textSize: widjet._data.textSize,
                                    textDirection: widjet._data.textDirection,
                                    displaySpeed: widjet._data.displaySpeed,
                                    is_scrolled: widjet._data.is_scrolled,
                                    currencySymbols: widjet._data.currencySymbols
                                }, width: widjet._props.item_data.w, height: widjet._props.item_data.h, x: widjet._props.item_data.x, y: widjet._props.item_data.y, ref: "exchangeRef"
                            })
                            break;

                        case "weatherRef":
                            this.loaded_items.push({
                                widget: null, data_loaded: {
                                    weather_data: widjet._data.weather_data,
                                    show_date_today: widjet._data.show_date_today,
                                    date_today_textBackgroundColor: widjet._data.date_today_textBackgroundColor,
                                    date_today_textColor: widjet._data.date_today_textColor,
                                    date_today_textSize: widjet._data.date_today_textSize,
                                    date_today_textFontFamily: widjet._data.date_today_textFontFamily,
                                    show_ville: widjet._data.show_ville,
                                    ville_textBackgroundColor: widjet._data.ville_textBackgroundColor,
                                    ville_textColor: widjet._data.ville_textColor,
                                    ville_textSize: widjet._data.ville_textSize,
                                    ville_textFontFamily: widjet._data.ville_textFontFamily,
                                    show_temreture: widjet._data.show_temreture,
                                    temreture_textColor: widjet._data.temreture_textColor,
                                    temreture_textSize: widjet._data.temreture_textSize,
                                    icon_width: widjet._data.icon_width,
                                    show_description: widjet._data.show_description,
                                    description_textBackgroundColor: widjet._data.description_textBackgroundColor,
                                    description_textColor: widjet._data.description_textColor,
                                    description_textSize: widjet._data.description_textSize,
                                    description_textFontFamily: widjet._data.description_textFontFamily,
                                    show_speed: widjet._data.show_speed,
                                    speed_title_textColor: widjet._data.speed_title_textColor,
                                    speed_title_textSize: widjet._data.speed_title_textSize,
                                    speed_value_textColor: widjet._data.speed_value_textColor,
                                    speed_value_textSize: widjet._data.speed_value_textSize,
                                    show_humidite: widjet._data.show_humidite,
                                    humidite_title_textColor: widjet._data.humidite_title_textColor,
                                    humidite_title_textSize: widjet._data.humidite_title_textSize,
                                    humidite_value_textColor: widjet._data.humidite_value_textColor,
                                    humidite_value_textSize: widjet._data.humidite_value_textSize,
                                    show_horloge_digit: widjet._data.show_horloge_digit,
                                    horloge_digit_textBackgroundColor: widjet._data.horloge_digit_textBackgroundColor,
                                    horloge_digit_textColor: widjet._data.horloge_digit_textColor,
                                    horloge_digit_textSize: widjet._data.horloge_digit_textSize,
                                    horloge_digit_textFontFamily: widjet._data.horloge_digit_textFontFamily,
                                    show_horloge_analog: widjet._data.show_horloge_analog,
                                    horloge_analog_textBackgroundColor: widjet._data.horloge_analog_textBackgroundColor,
                                    horloge_analog_textColor: widjet._data.horloge_analog_textColor,
                                    horloge_analog_textSize: widjet._data.horloge_analog_textSize,
                                }, width: widjet._props.item_data.w, height: widjet._props.item_data.h, x: widjet._props.item_data.x, y: widjet._props.item_data.y, ref: "weatherRef"
                            })
                            break;
                    }
                });
            });

            const data = JSON.stringify({
                loaded_items: this.loaded_items,
                componentImg: this.componentImg,
                background_option: this.background_option,
                gridBackgroundColor: this.gridBackgroundColor,
            })
            const blob = new Blob([data], { type: 'application/json' })
            const e = document.createEvent('MouseEvents'),
                a = document.createElement('a');
            a.download = "display_" + this.$route.params.id + ".json";
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        },
        loadDisplay() {
            var link = '/displays/display_' + this.$route.params.id + '.json'
            let existingObj = this;
            axios.get(link).then(function (res) {
                // console.log(res)
                existingObj.loaded_items = res.data.loaded_items;
                // console.log(existingObj.loaded_items)
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
        goToShow() {

            this.$router.push('/display/' + this.$route.params.id)
        },
        goToEdite(id) {

            this.$router.push('/edite/' + id)
        },
        importAll(r) {
            let keys = r.keys();
            this.new_display_id = 0;
            for (let index = 0; index < keys.length; index += 2) {
                let num = keys[index].slice(-1)
                this.displayLinks.push({ title: keys[index].substring(2).replace('_', ' '), displaynumber: num })
                num > this.new_display_id ? this.new_display_id = num : null;
            }
            this.new_display_id++;
        },
        importAllImages(r) {
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
        }

    },



};
</script>
