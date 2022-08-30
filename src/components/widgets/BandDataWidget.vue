<template>
    <div>
        <v-list-item three-line :style="{
            backgroundColor:
                itemBackgroundColor,
            'width': (item_data.w * 0.99) + 'px',
            'min-height': (item_data.h * 0.99) + 'px',
            'height': (item_data.h * 0.98) + 'px'
        }" @contextmenu.prevent="is_display == false ? dialog = true : dialog = false">
            <v-list-item-content>
                <h3 class="text-center" :style="{
                    backgroundColor:
                        textBackgroundColor,
                    color:
                        textColor,
                    fontSize:
                        textSize +
                        'px',
                    fontFamily: textFontFamily
                }">
                    <marquee behavior="scroll" :direction="textDirection" v-html="textContent"
                        :scrollamount="displaySpeed"></marquee>
                </h3>
            </v-list-item-content>
        </v-list-item>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="800">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        Editer la bande
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="textContent" id="textContent" label="Text Bande">
                                    </v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="6">
                                    <v-slider v-model="textSize" label="Taille écriture en px" thumb-color="red"
                                        thumb-label="always" min="10" max="60"></v-slider>
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
                            </v-row>
                            <v-row>
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

                                <v-col cols="12" md="6">
                                    <v-btn disabled text>>Direction</v-btn>
                                    <v-radio-group v-model="textDirection" row>
                                        <v-radio label="gauche" value="left"></v-radio>
                                        <v-radio label="droite" value="right"></v-radio>

                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-select :items="fonts" label="Style d'écriture" v-model="textFontFamily">
                                    </v-select>
                                </v-col>
                                <v-col>
                                    <h2 :style="{ fontFamily: textFontFamily }">Exemple font</h2>
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

<script>
export default {
    data() {
        return {
            is_display: true,
            dialog: false,
            itemBackgroundColor: '#ffffff',
            textBackgroundColor: '#ffffff',
            textColor: '#000000',
            textSize: 40,
            textDirection: 'left',
            textContent: 'Votre Text ICI',
            displaySpeed: 20,
            mask: '!#XXXXXXXX',
            menu1: false,
            menu2: false,
            menu3: false,
            fonts: [{ text: 'ABeeZee', value: "'ABeeZee'" }, { text: 'Advent Pro', value: "'Advent Pro'" }, { text: 'Adamina', value: "'Adamina'" }, { text: 'Aldrich', value: "Aldrich" }, { text: 'Alatsi', value: "Alatsi" }, { text: 'Alfa Slab One', value: "'Alfa Slab One'" }, { text: 'Almendra SC', value: "'Almendra SC'" }, { text: 'Arvo', value: "'Arvo'" }, { text: 'Aubrey', value: "'Aubrey'" }, { text: 'Azeret Mono', value: "'Azeret Mono'" }, { text: 'Chakra Petch', value: "Chakra Petch" }, { text: 'Charis SIL', value: "Charis SIL" }, { text: 'Cinzel', value: "'Cinzel'" }, { text: 'Cutive', value: "'Cutive'" }, { text: 'Kdam Thmor Pro', value: "'Kdam Thmor Pro'" }],
            textFontFamily: "'ABeeZee'"
        };
    },

    props: ['item_data'],
    computed: {
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

    mounted() {
        this.is_display = this.$route.path.includes("display");
        console.log(this.item_data)
        if ('data_loaded' in this.item_data) {
            this.itemBackgroundColor = this.item_data.data_loaded.itemBackgroundColor;
            this.textBackgroundColor = this.item_data.data_loaded.textBackgroundColor;
            this.textColor = this.item_data.data_loaded.textColor;
            this.textSize = this.item_data.data_loaded.textSize;
            this.textDirection = this.item_data.data_loaded.textDirection;
            this.displaySpeed = this.item_data.data_loaded.displaySpeed;
            this.textContent = this.item_data.data_loaded.textContent;
             this.textFontFamily = this.item_data.data_loaded.textFontFamily;
        }
    },

    methods: {
        initData() {
            this.themplate = this.band_data;
        },
    }
};
</script>


