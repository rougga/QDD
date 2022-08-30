<template>
    <div>


        <v-card v-if="is_scrolled == 'scroll'" :max-width="cardWidth" outlined :style="{
            'width': (item_data.w * 0.99) + 'px',
            'min-height': (90 * 0.97) + 'px',
            'max-height': '90px',
            'height': (item_data.h * 0.98) + 'px'
        }" @contextmenu.prevent="is_display == false ? dialog = true : dialog = false">
            <marquee behavior="scroll" 
                :direction="textDirection" :scrollamount="displaySpeed" :style="{
                    backgroundColor:
                        textBackgroundColor
                }">
                <v-row no-gutters>

                    <v-col v-for="(currency, ind) in filtredCurrencies" :key="ind">

                        <v-list-item three-line :style="{
                            backgroundColor:
                                itemBackgroundColor
                        }">
                            <v-list-item-avatar tile size="50" color="grey">
                                <v-img class="elevation-6" :alt="currency.libDevise"
                                    v-if="images.some(image => image.libDevise == currency.libDevise)"
                                    :src="(images.find(image => image.libDevise == currency.libDevise)).pathLong">
                                </v-img>
                                <v-img class="elevation-6 " :alt="currency.libDevise" v-else>
                                    <span class="alt-center">{{ currency.libDevise }}</span>

                                </v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="text-h7" :style="{
                                    color:
                                        textColor,
                                    fontSize:
                                        textSize +
                                        'px'
                                }">
                                    Vente : {{ currency.achatClientele }} DH
                                </v-list-item-title>
                                <v-list-item-title class="text-h7" :style="{
                                
                                    color:
                                        textColor,
                                    fontSize:
                                        textSize +
                                        'px'
                                }">
                                    Achat : {{ currency.venteClientele }} DH
                                </v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>
                    </v-col>
                </v-row>
            </marquee>
        </v-card>
        <v-card v-else :max-width="cardWidth" outlined :style="{
            'width': (item_data.w * 0.99) + 'px',
            'min-height': (90 * 0.97) + 'px',
            'max-height': '90px',
            'height': (item_data.h * 0.98) + 'px'
        }" @contextmenu.prevent="is_display == false ? dialog = true : dialog = false">
           

                <v-row no-gutters>

                    <v-col v-for="(currency, ind) in filtredCurrencies" :key="ind">

                        <v-list-item three-line :style="{
                            backgroundColor:
                                itemBackgroundColor
                        }">
                            <v-list-item-avatar tile size="50" color="grey">
                                <v-img class="elevation-6" :alt="currency.libDevise"
                                    v-if="images.some(image => image.libDevise == currency.libDevise)"
                                    :src="(images.find(image => image.libDevise == currency.libDevise)).pathLong">
                                </v-img>
                                <v-img class="elevation-6 " :alt="currency.libDevise" v-else>
                                    <span class="alt-center">{{ currency.libDevise }}</span>

                                </v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="text-h7" :style="{
                                    color:
                                        textColor,
                                    fontSize:
                                        textSize +
                                        'px'
                                }">
                                    Vente : {{ currency.achatClientele }} DH
                                </v-list-item-title>
                                <v-list-item-title class="text-h7" :style="{
                                
                                    color:
                                        textColor,
                                    fontSize:
                                        textSize +
                                        'px'
                                }">
                                    Achat : {{ currency.venteClientele }} DH
                                </v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>
                    </v-col>
                </v-row>

           

        </v-card>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="800">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        Editer le widget devise
                    </v-card-title>
                    <v-card-text>
                        <v-container>


                            <v-row>
                                <v-col cols="6">
                                    <v-slider v-model="textSize" label="Taille écriture en px" thumb-color="red"
                                        thumb-label="always" min="5" max="25"></v-slider>
                                </v-col>
                                <v-col cols="6">
                                    <v-slider v-model="displaySpeed" label="Vitesse slide" thumb-color="green"
                                        thumb-label="always" min="5" max="40" step="5"></v-slider>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-btn disabled text>Couleur du text</v-btn>
                                    <v-text-field v-model="textColor" hide-details class="ma-0 pa-0" solo>
                                        <template v-slot:append>
                                            <v-menu v-model="menu1" top nudge-bottom="105" nudge-left="16"
                                                :close-on-content-click="false">
                                                <template v-slot:activator="{ on }">
                                                    <div :style="textColorStyle" v-on="on" />
                                                </template>
                                                <v-card>
                                                    <v-card-text class="pa-0">
                                                        <v-color-picker v-model="textColor" flat />
                                                    </v-card-text>
                                                </v-card>
                                            </v-menu>
                                        </template>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-btn disabled text>Arrière plant widget</v-btn>
                                    <v-text-field v-model="itemBackgroundColor" hide-details class="ma-0 pa-0" solo>
                                        <template v-slot:append>
                                            <v-menu v-model="menu3" top nudge-bottom="105" nudge-left="16"
                                                :close-on-content-click="false">
                                                <template v-slot:activator="{ on }">
                                                    <div :style="itemBackgroundColorStyle" v-on="on" />
                                                </template>
                                                <v-card>
                                                    <v-card-text class="pa-0">
                                                        <v-color-picker v-model="itemBackgroundColor" flat />
                                                    </v-card-text>
                                                </v-card>
                                            </v-menu>
                                        </template>
                                    </v-text-field>
                                </v-col>
                            </v-row>
                            <v-row v-if="is_scrolled == 'scroll'">
                                <v-col cols="12" md="6">
                                    <v-btn disabled text>Arrière plant text</v-btn>
                                    <v-text-field v-model="textBackgroundColor" hide-details class="ma-0 pa-0" solo>
                                        <template v-slot:append>
                                            <v-menu v-model="menu2" top nudge-bottom="105" nudge-left="16"
                                                :close-on-content-click="false">
                                                <template v-slot:activator="{ on }">
                                                    <div :style="textBackgroundColorStyle" v-on="on" />
                                                </template>
                                                <v-card>
                                                    <v-card-text class="pa-0">
                                                        <v-color-picker v-model="textBackgroundColor" flat />
                                                    </v-card-text>
                                                </v-card>
                                            </v-menu>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-btn disabled text>Direction</v-btn>
                                    <v-radio-group v-model="textDirection" row>
                                        <v-radio label="gauche" value="left"></v-radio>
                                        <v-radio label="droite" value="right"></v-radio>

                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-btn disabled text>Scroll ou stop</v-btn>
                                    
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-radio-group v-model="is_scrolled" row>
                                        <v-radio label="scroll" value="scroll"> scroll</v-radio>
                                        <v-radio label="stop" value="stop"> stop</v-radio>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-select v-model="currencySymbols" :items="currenciesStrigs" chips label="Devis" multiple outlined>
                                    </v-select>
                                </v-col>
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
<style>
.alt-center {
    /*float: left;*/
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

}
</style>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            currencies: [

            ],
            currencySymbols: [

            ],
            currenciesStrigs : [],
            images: [],
            cardWidth: window.screen.width,
            is_display: true,
            dialog: false,
            itemBackgroundColor: '#ffffff',
            textBackgroundColor: '#ffffff',
            textColor: '#000000',
            textSize: 15,
            textDirection: 'left',
            displaySpeed: 20,
            mask: '!#XXXXXXXX',
            menu1: false,
            menu2: false,
            menu3: false,
            min_width: window.screen.width,
            is_scrolled: "scroll",
        }
    },
    mounted() {
        this.feachCurrencies();
        this.importAll(require.context('../../assets/currencies/', true));
        this.is_display = this.$route.path.includes("display");
        if ('data_loaded' in this.item_data) {
            this.itemBackgroundColor = this.item_data.data_loaded.itemBackgroundColor;
            this.textBackgroundColor = this.item_data.data_loaded.textBackgroundColor;
            this.textColor = this.item_data.data_loaded.textColor;
            this.textSize = this.item_data.data_loaded.textSize;
            this.textDirection = this.item_data.data_loaded.textDirection;
            this.displaySpeed = this.item_data.data_loaded.displaySpeed;
            this.is_scrolled = this.item_data.data_loaded.is_scrolled;
            this.currencySymbols = this.item_data.data_loaded.currencySymbols;
        }
    },

    computed: {
        filtredCurrencies: function () {
            return this.currencies.filter((currency) => {
                return this.currencySymbols.indexOf(currency.libDevise) !== -1;
            });
        },
        textColorStyle() {
            const { textColor, menu1 } = this
            return {
                backgroundColor: textColor,
                cursor: 'pointer',
                height: '30px',
                width: '30px',
                borderRadius: menu1 ? '50%' : '4px',
                transition: 'border-radius 200ms ease-in-out'
            }

        },
        textBackgroundColorStyle() {
            const { textBackgroundColor, menu2 } = this
            return {
                backgroundColor: textBackgroundColor,
                cursor: 'pointer',
                height: '30px',
                width: '30px',
                borderRadius: menu2 ? '50%' : '4px',
                transition: 'border-radius 200ms ease-in-out'
            }
        },
        itemBackgroundColorStyle() {
            const { itemBackgroundColor, menu3 } = this
            return {
                backgroundColor: itemBackgroundColor,
                cursor: 'pointer',
                height: '30px',
                width: '30px',
                borderRadius: menu3 ? '50%' : '4px',
                transition: 'border-radius 200ms ease-in-out'
            }
        }
    },
    props: ['item_data'],
    methods: {
        feachCurrencies() {


            let existingObj = this;
            const config = {
                method: 'get',
                url: 'https://api.centralbankofmorocco.ma/cours/Version1/api/CoursBBE?date=01/06/2022',
                headers: {
                    'Ocp-Apim-Subscription-Key': '668d8afa19bd4b5db375375b37ac7d6d'
                },
            };


            axios(config)
                .then(function (res) {
                    existingObj.currencies = res.data;
                    res.data.forEach(currency => (existingObj.currenciesStrigs.push(currency.libDevise)))
                    console.log(existingObj.currencies)
                })
                .catch(function (error) {
                    console.log(error);
                });

        },
        importAll(r) {
            r.keys().forEach(key => (this.images.push({ libDevise: key.substring(2, 5), pathLong: r(key) })));
            //  console.log(this.images)
        }
    },
}
</script>

