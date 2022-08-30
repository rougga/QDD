<template>
  <!-- Open Weather Map -->
  <div>
    <v-card class="mx-auto" min-width="340" @contextmenu.prevent="
      is_display == false ? (dialog = true) : (dialog = false)
    ">
      <v-list-item two-line v-if="show_date_today_and_show_ville">
        <v-list-item-content>
          <v-list-item-title v-show="show_date_today" class="date" :style="{
            textAlign: 'center',
            backgroundColor: date_today_textBackgroundColor,
            color: date_today_textColor,
            fontSize: date_today_textSize + 'px',
            fontFamily: date_today_textFontFamily,
          }">{{ date_today }}</v-list-item-title>
          <br />
          <v-list-item-title v-show="show_ville" :style="{
            textAlign: 'center',
            backgroundColor: ville_textBackgroundColor,
            color: ville_textColor,
            fontSize: ville_textSize + 'px',
            fontFamily: ville_textFontFamily,
          }">
            {{ weather_data.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-text v-if="show_temper_and_description">
        <v-row align="center">
          <v-col cols="6" v-show="show_temreture" :style="{
            textAlign: 'center',
          
            color: temreture_textColor,
            fontSize: temreture_textSize + 'px',
          }">
            {{ Math.round(weather_data.main.temp) }} &deg;C
          </v-col>
          <v-col cols="6" v-show="show_temreture">
            <v-img :src="`http://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`" :width="icon_width">
            </v-img>
          </v-col>
          <v-col v-show="show_description" cols="12" :style="{
            textAlign: 'center',
            backgroundColor: description_textBackgroundColor,
            color: description_textColor,
            fontSize: description_textSize + 'px',
            fontFamily: description_textFontFamily,
          }">
            {{ weather_data.weather[0].description }}
          </v-col>
        </v-row>
      </v-card-text>
      <v-list two-line v-if="show_speed_humid_horloges">
        <v-list-item v-show="show_speed">
          <v-list-item-icon>
            <v-icon color="indigo">mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-subtitle :style="{
              color: speed_title_textColor,
              fontSize: speed_title_textSize + 'px',
            }">Vitesse du vent</v-list-item-subtitle>
            <v-list-item-title :style="{
              color: speed_value_textColor,
              fontSize: speed_value_textSize + 'px',
            }"> {{ weather_data.wind.speed }} m/s</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-show="show_humidite">
          <v-list-item-icon>
            <v-icon color="indigo">mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-subtitle :style="{
              color: humidite_title_textColor,
              fontSize: humidite_title_textSize + 'px',
            }">Humidité</v-list-item-subtitle>
            <v-list-item-title :style="{
              color: humidite_value_textColor,
              fontSize: humidite_value_textSize + 'px',
            }">{{ weather_data.main.humidity }} %</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="show_horloges">
          <v-list-item-content>
            <v-list-item-title v-show="show_horloge_digit" :style="{
              textAlign: 'center',
              backgroundColor: horloge_digit_textBackgroundColor,
              color: horloge_digit_textColor,
              fontSize: horloge_digit_textSize + 'px',
              fontFamily: horloge_digit_textFontFamily,
            }">
              <p class="time">{{ horloge }}</p>
            </v-list-item-title>
            <br />
            <v-list-item-title v-show="show_horloge_analog" style="text-align: center">
              <clock :bg="horloge_analog_textBackgroundColor" :color="horloge_analog_textColor"
                :size="horloge_analog_textSize + 'px'"></clock>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="1200">
        <v-card>
          <v-card-title class="text-h5 text-center">
            Editer weather widget
          </v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="4">
                <v-card min-width="350">
                  <v-list-item two-line v-if="show_date_today_and_show_ville">
                    <v-list-item-content style="padding-bottom : 0px">
                      <v-list-item-title v-show="show_date_today" class="date" :style="{
                        textAlign: 'center',
                        backgroundColor: date_today_textBackgroundColor,
                        color: date_today_textColor,
                        fontSize: date_today_textSize + 'px',
                        fontFamily: date_today_textFontFamily,
                      }">{{ date_today }}</v-list-item-title>
                      <br />
                      <v-list-item-title v-show="show_ville" :style="{
                        textAlign: 'center',
                        backgroundColor: ville_textBackgroundColor,
                        color: ville_textColor,
                        fontSize: ville_textSize + 'px',
                        fontFamily: ville_textFontFamily,
                      }">
                        {{ weather_data.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-card-text v-if="show_temper_and_description" style="padding : 0px">
                    <v-row align="center">
                      <v-col cols="6" v-show="show_temreture" :style="{
                        textAlign: 'center',
                      
                        color: temreture_textColor,
                        fontSize: temreture_textSize + 'px',
                      }">
                        {{ Math.round(weather_data.main.temp) }} &deg;C
                      </v-col>
                      <v-col cols="6" v-show="show_temreture" style="padding : 0px">
                        <v-img :src="`http://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`"
                          :width="icon_width"></v-img>
                      </v-col>
                      <v-col v-show="show_description" cols="12" :style="{
                        textAlign: 'center',
                        backgroundColor: description_textBackgroundColor,
                        color: description_textColor,
                        fontSize: description_textSize + 'px',
                        fontFamily: description_textFontFamily,
                      }">
                        {{ weather_data.weather[0].description }}
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-list two-line v-if="show_speed_humid_horloges">
                    <v-list-item v-show="show_speed">
                      <v-list-item-icon>
                        <v-icon color="indigo">mdi-send</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-subtitle :style="{
                          color: speed_title_textColor,
                          fontSize: speed_title_textSize + 'px',
                        }">Vitesse du vent</v-list-item-subtitle>
                        <v-list-item-title :style="{
                          color: speed_value_textColor,
                          fontSize: speed_value_textSize + 'px',
                        }"> {{ weather_data.wind.speed }} m/s</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-show="show_humidite">
                      <v-list-item-icon>
                        <v-icon color="indigo">mdi-send</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-subtitle :style="{
                          color: humidite_title_textColor,
                          fontSize: humidite_title_textSize + 'px',
                        }">Humidité</v-list-item-subtitle>
                        <v-list-item-title :style="{
                          color: humidite_value_textColor,
                          fontSize: humidite_value_textSize + 'px',
                        }">{{ weather_data.main.humidity }} %</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item v-if="show_horloges">
                      <v-list-item-content>
                        <v-list-item-title v-show="show_horloge_digit" :style="{
                          textAlign: 'center',
                          backgroundColor: horloge_digit_textBackgroundColor,
                          color: horloge_digit_textColor,
                          fontSize: horloge_digit_textSize + 'px',
                          fontFamily: horloge_digit_textFontFamily,
                        }">
                          <p class="time">{{ horloge }}</p>
                        </v-list-item-title>
                        <br />
                        <v-list-item-title v-show="show_horloge_analog" style="text-align: center">
                          <clock :bg="horloge_analog_textBackgroundColor" :color="horloge_analog_textColor"
                            :size="horloge_analog_textSize + 'px'"></clock>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="7" class="ml-4">
                <v-card>
                  <v-tabs v-model="tab" background-color="indigo" dark grow>
                    <v-tab v-for="item in items" :key="item">
                      {{ item }}
                    </v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item>
                      <v-card color="basil" flat>
                        <v-card-text>

                          <v-container class="my-2">
                            <v-row>

                              <v-col cols="12" md="12">
                                <v-slider v-model="date_today_textSize" label="Taille écriture en px" thumb-color="red"
                                  thumb-label="always" min="10" max="60"></v-slider>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="date_today_textColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="date_today_menu1" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="date_today_textColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="date_today_textColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>

                              <v-col cols="12" md="6">
                                <v-btn disabled text>Arrière plant text</v-btn>
                                <v-text-field v-model="date_today_textBackgroundColor" hide-details class="ma-0 pa-0"
                                  solo>
                                  <template v-slot:append>
                                    <v-menu v-model="date_today_menu2" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="date_today_textBackgroundColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="date_today_textBackgroundColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-select :items="fonts" label="Style d'écriture" v-model="date_today_textFontFamily">
                                </v-select>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-sheet class="pa-5">
                                  <v-switch v-model="show_date_today" inset label="afficher la date">
                                  </v-switch>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card color="basil" flat>
                        <v-card-text>
                          <v-container class="my-2">
                            <v-row>
                              <v-col cols="12" md="12">
                                <v-slider v-model="ville_textSize" label="Taille écriture en px" thumb-color="red"
                                  thumb-label="always" min="10" max="60"></v-slider>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="ville_textColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="ville_menu1" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="ville_textColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="ville_textColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>

                              <v-col cols="12" md="6">
                                <v-btn disabled text>Arrière plant text</v-btn>
                                <v-text-field v-model="ville_textBackgroundColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="ville_menu2" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="ville_textBackgroundColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="ville_textBackgroundColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-select :items="fonts" label="Style d'écriture" v-model="ville_textFontFamily">
                                </v-select>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-sheet class="pa-5">
                                  <v-switch v-model="show_ville" inset label="afficher la ville">
                                  </v-switch>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card color="basil" flat>
                        <v-card-text>
                          <v-container class="my-2">
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-slider v-model="temreture_textSize" label="Taille écriture en px" thumb-color="red"
                                  thumb-label="always" min="30" max="90"></v-slider>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-slider v-model="icon_width" label="taille icon" thumb-color="red"
                                  thumb-label="always" min="50" max="160" step="10"></v-slider>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="temreture_textColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="temreture_menu1" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="temreture_textColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="temreture_textColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-sheet class="pa-5">
                                  <v-switch v-model="show_temreture" inset label="afficher la température">
                                  </v-switch>
                                </v-sheet>
                              </v-col>
                            </v-row>

                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card color="basil" flat>
                        <v-card-text>
                          <v-container class="my-2">
                            <v-row>
                              <v-col cols="12" md="12">
                                <v-slider v-model="description_textSize" label="Taille écriture en px" thumb-color="red"
                                  thumb-label="always" min="10" max="60"></v-slider>
                              </v-col>

                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="description_textColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="description_menu1" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="description_textColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="description_textColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>

                              <v-col cols="12" md="6">
                                <v-btn disabled text>Arrière plant text</v-btn>
                                <v-text-field v-model="description_textBackgroundColor" hide-details class="ma-0 pa-0"
                                  solo>
                                  <template v-slot:append>
                                    <v-menu v-model="description_menu2" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="description_textBackgroundColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="description_textBackgroundColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-select :items="fonts" label="Style d'écriture" v-model="description_textFontFamily">
                                </v-select>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-sheet class="pa-5">
                                  <v-switch v-model="show_description" inset label="afficher l'état du ciel">
                                  </v-switch>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card color="basil" flat>
                        <v-card-text>
                          <v-container class="my-2">
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-slider v-model="speed_title_textSize" label="Taille écriture en px" thumb-color="red"
                                  thumb-label="always" min="10" max="60"></v-slider>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-slider v-model="speed_value_textSize" label="Taille écriture en px" thumb-color="red"
                                  thumb-label="always" min="10" max="60"></v-slider>
                              </v-col>

                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="speed_title_textColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="speed_title_menu1" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="speed_title_textColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="speed_title_textColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="speed_value_textColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="speed_value_menu1" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="speed_value_textColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="speed_value_textColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-sheet class="pa-5">
                                  <v-switch v-model="show_speed" inset label="afficher la vitesse du vent">
                                  </v-switch>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card color="basil" flat>
                        <v-card-text>
                          <v-container class="my-2">
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-slider v-model="humidite_title_textSize" label="Taille écriture en px"
                                  thumb-color="red" thumb-label="always" min="10" max="60"></v-slider>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-slider v-model="humidite_value_textSize" label="Taille écriture en px"
                                  thumb-color="red" thumb-label="always" min="10" max="60"></v-slider>
                              </v-col>

                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="humidite_title_textColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="humidite_title_menu1" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="humidite_title_textColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="humidite_title_textColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="humidite_value_textColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="humidite_value_menu1" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="humidite_value_textColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="humidite_value_textColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-sheet class="pa-5">
                                  <v-switch v-model="show_humidite" inset label="afficher l'humidité">
                                  </v-switch>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card color="basil" flat>
                        <v-card-text>
                          <v-container class="my-2">
                            <v-row>
                              <v-col cols="12" md="12">
                                <v-slider v-model="horloge_digit_textSize" label="Taille écriture en px"
                                  thumb-color="red" thumb-label="always" min="10" max="60"></v-slider>
                              </v-col>

                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="horloge_digit_textColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="horloge_digit_menu1" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="horloge_digit_textColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="horloge_digit_textColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>

                              <v-col cols="12" md="6">
                                <v-btn disabled text>Arrière plant text</v-btn>
                                <v-text-field v-model="horloge_digit_textBackgroundColor" hide-details class="ma-0 pa-0"
                                  solo>
                                  <template v-slot:append>
                                    <v-menu v-model="horloge_digit_menu2" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="horloge_digit_textBackgroundColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="horloge_digit_textBackgroundColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-select :items="fonts" label="Style d'écriture"
                                  v-model="horloge_digit_textFontFamily">
                                </v-select>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-sheet class="pa-5">
                                  <v-switch v-model="show_horloge_digit" inset label="afficher La date">
                                  </v-switch>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card color="basil" flat>
                        <v-card-text>
                          <v-container class="my-2">
                            <v-row>
                              <v-col cols="12" md="12">
                                <v-slider v-model="horloge_analog_textSize" label="Taille écriture en px"
                                  thumb-color="red" thumb-label="always" min="150" max="400" step="50"></v-slider>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="horloge_analog_textColor" hide-details class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="horloge_analog_menu1" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="horloge_analog_textColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="horloge_analog_textColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-btn disabled text>Couleur du text</v-btn>
                                <v-text-field v-model="horloge_analog_textBackgroundColor" hide-details
                                  class="ma-0 pa-0" solo>
                                  <template v-slot:append>
                                    <v-menu v-model="horloge_analog_menu2" top nudge-bottom="105" nudge-left="16"
                                      :close-on-content-click="false">
                                      <template v-slot:activator="{ on }">
                                        <div :style="horloge_analog_textBackgroundColorStyle" v-on="on" />
                                      </template>
                                      <v-card>
                                        <v-card-text class="pa-0">
                                          <v-color-picker v-model="horloge_analog_textBackgroundColor" flat />
                                        </v-card-text>
                                      </v-card>
                                    </v-menu>
                                  </template>
                                </v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-sheet class="pa-5">
                                  <v-switch v-model="show_horloge_analog" inset label="afficher la vitesse">
                                  </v-switch>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-col>
            </v-row>
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
import Clock from "vue-clock2";
import axios from "axios";
export default {
  data() {
    return {
      horloge: "",
      dialog: false,
      is_display: true,
      tab: null,
      items: [
        "Date",
        "Ville",
        "Température",
        "état ciel",
        "Vent",
        "Humidité",
        "Hrologe Numérique",
        "Hrologe Analogique",
      ],
      date_today: "",
      weather_data: {
        weather: [
          {
            description: "ciel dégagé",
            icon: "01d",
          },
        ],
        main: {
          temp: 30.64,
          humidity: 58,
        },
        wind: {
          speed: 6.17,
        },
        name: "Tanger",
      },
      show_date_today: true,
      date_today_menu1: false,
      date_today_menu2: false,
      date_today_textBackgroundColor: "#ffffff",
      date_today_textColor: "#000000",
      date_today_textSize: 20,
      date_today_textFontFamily: "ABeeZee",

      show_ville: true,
      ville_menu1: false,
      ville_menu2: false,
      ville_textBackgroundColor: "#ffffff",
      ville_textColor: "#000000",
      ville_textSize: 30,
      ville_textFontFamily: "ABeeZee",

      show_temreture: true,
      temreture_menu1: false,
      temreture_textColor: "#000000",
      temreture_textSize: 40,
      icon_width: 150,

      show_description: true,
      description_menu1: false,
      description_menu2: false,
      description_textBackgroundColor: "#ffffff",
      description_textColor: "#000000",
      description_textSize: 40,
      description_textFontFamily: "ABeeZee",

      show_speed: true,
      speed_title_menu1: false,
      speed_title_textColor: "#000000",
      speed_title_textSize: 20,

      speed_value_menu1: false,
      speed_value_textColor: "#000000",
      speed_value_textSize: 20,

      show_humidite: true,
      humidite_title_menu1: false,
      humidite_title_textColor: "#000000",
      humidite_title_textSize: 20,

      humidite_value_menu1: false,
      humidite_value_textColor: "#000000",
      humidite_value_textSize: 20,

      show_horloge_digit: true,
      horloge_digit_menu1: false,
      horloge_digit_menu2: false,
      horloge_digit_textBackgroundColor: "#ffffff",
      horloge_digit_textColor: "#000000",
      horloge_digit_textSize: 40,
      horloge_digit_textFontFamily: "ABeeZee",

      show_horloge_analog: true,
      horloge_analog_menu1: false,
      horloge_analog_menu2: false,
      horloge_analog_textBackgroundColor: "#ffffff",
      horloge_analog_textColor: "#000000",
      horloge_analog_textSize: 200,
      fonts: [
        { text: "ABeeZee", value: "'ABeeZee'" },
        { text: "Advent Pro", value: "'Advent Pro'" },
        { text: "Adamina", value: "'Adamina'" },
        { text: "Aldrich", value: "Aldrich" },
        { text: "Alatsi", value: "Alatsi" },
        { text: "Alfa Slab One", value: "'Alfa Slab One'" },
        { text: "Almendra SC", value: "'Almendra SC'" },
        { text: "Arvo", value: "'Arvo'" },
        { text: "Aubrey", value: "'Aubrey'" },
        { text: "Azeret Mono", value: "'Azeret Mono'" },
        { text: "Chakra Petch", value: "Chakra Petch" },
        { text: "Charis SIL", value: "Charis SIL" },
        { text: "Cinzel", value: "'Cinzel'" },
        { text: "Cutive", value: "'Cutive'" },
        { text: "Kdam Thmor Pro", value: "'Kdam Thmor Pro'" },
      ],
    };
  },
  components: {
    Clock,
  },
  props: ["item_data"],
  mounted() {
    this.is_display = this.$route.path.includes("display");
    console.log(this.item_data)
    if ('data_loaded' in this.item_data) {
      this.weather_data = this.item_data.data_loaded.weather_data;
        this.show_date_today = this.item_data.data_loaded.show_date_today;
        this.date_today_textBackgroundColor = this.item_data.data_loaded.date_today_textBackgroundColor;
        this.date_today_textColor = this.item_data.data_loaded.date_today_textColor;
        this.date_today_textSize = this.item_data.data_loaded.date_today_textSize;
        this.date_today_textFontFamily = this.item_data.data_loaded.date_today_textFontFamily;
        this.show_ville = this.item_data.data_loaded.show_ville;
        this.ville_textBackgroundColor = this.item_data.data_loaded.ville_textBackgroundColor;
        this.ville_textColor = this.item_data.data_loaded.ville_textColor;
        this.ville_textSize = this.item_data.data_loaded.ville_textSize;
        this.ville_textFontFamily = this.item_data.data_loaded.ville_textFontFamily;
        this.show_temreture = this.item_data.data_loaded.show_temreture;
        this.temreture_textColor = this.item_data.data_loaded.temreture_textColor;
        this.temreture_textSize = this.item_data.data_loaded.temreture_textSize;
        this.icon_width = this.item_data.data_loaded.icon_width;
        this.show_description = this.item_data.data_loaded.show_description;
        this.description_textBackgroundColor = this.item_data.data_loaded.description_textBackgroundColor;
        this.description_textColor = this.item_data.data_loaded.description_textColor;
        this.description_textSize = this.item_data.data_loaded.description_textSize;
        this.description_textFontFamily = this.item_data.data_loaded.description_textFontFamily;
        this.show_speed = this.item_data.data_loaded.show_speed;
        this.speed_title_textColor = this.item_data.data_loaded.speed_title_textColor;
        this.speed_title_textSize = this.item_data.data_loaded.speed_title_textSize;
        this.speed_value_textColor = this.item_data.data_loaded.speed_value_textColor;
        this.speed_value_textSize = this.item_data.data_loaded.speed_value_textSize;
        this.show_humidite = this.item_data.data_loaded.show_humidite;
        this.humidite_title_textColor = this.item_data.data_loaded.humidite_title_textColor;
        this.humidite_title_textSize = this.item_data.data_loaded.humidite_title_textSize;
        this.humidite_value_textColor = this.item_data.data_loaded.humidite_value_textColor;
        this.humidite_value_textSize = this.item_data.data_loaded.humidite_value_textSize;
        this.show_horloge_digit = this.item_data.data_loaded.show_horloge_digit;
        this.horloge_digit_textBackgroundColor = this.item_data.data_loaded.horloge_digit_textBackgroundColor;
        this.horloge_digit_textColor = this.item_data.data_loaded.horloge_digit_textColor;
        this.horloge_digit_textSize = this.item_data.data_loaded.horloge_digit_textSize;
        this.horloge_digit_textFontFamily = this.item_data.data_loaded.horloge_digit_textFontFamily;
        this.show_horloge_analog = this.item_data.data_loaded.show_horloge_analog;
        this.horloge_analog_textBackgroundColor = this.item_data.data_loaded.horloge_analog_textBackgroundColor;
        this.horloge_analog_textColor = this.item_data.data_loaded.horloge_analog_textColor;
        this.horloge_analog_textSize = this.item_data.data_loaded.horloge_analog_textSize;
        }
    this.updateTime();
    this.getWeatherInfo();
  },

  methods: {
    updateTime() {
      var time = this;
      setInterval(function () {
        time.horloge = new Date().toLocaleTimeString("en-GB", {
          hour12: false,
        });
        time.date_today = new Date().toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }, 1000);
    },
    getWeatherInfo() {
      const config = {
        method: "get",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Tangier&appid=938b6c8cd1a27e43957e64a75c222521&units=metric&lang=fr",
      };
      let existingObj = this;
      axios(config)
        .then(function (res) {
          existingObj.weather_data = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {
    show_date_today_and_show_ville() {
      return this.show_date_today || this.show_ville
    },
    show_temper_and_description() {
      return this.show_temreture || this.show_description
    },
    show_speed_humid_horloges() {
      return this.show_speed || this.show_humidite || this.show_horloge_digit || this.show_horloge_analog
    },
    show_horloges() {
      return this.show_horloge_digit || this.show_horloge_analog
    },
    date_today_textBackgroundColorStyle() {
      const { date_today_textBackgroundColor, date_today_menu1 } = this;
      return {
        backgroundColor: date_today_textBackgroundColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: date_today_menu1 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    date_today_textColorStyle() {
      const { date_today_textColor, date_today_menu2 } = this;
      return {
        backgroundColor: date_today_textColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: date_today_menu2 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    ville_textBackgroundColorStyle() {
      const { ville_textBackgroundColor, ville_menu1 } = this;
      return {
        backgroundColor: ville_textBackgroundColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: ville_menu1 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    ville_textColorStyle() {
      const { ville_textColor, ville_menu2 } = this;
      return {
        backgroundColor: ville_textColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: ville_menu2 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    temreture_textColorStyle() {
      const { temreture_textColor, temreture_menu1 } = this;
      return {
        backgroundColor: temreture_textColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: temreture_menu1 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    description_textBackgroundColorStyle() {
      const { description_textBackgroundColor, description_menu1 } = this;
      return {
        backgroundColor: description_textBackgroundColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: description_menu1 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    description_textColorStyle() {
      const { description_textColor, description_menu2 } = this;
      return {
        backgroundColor: description_textColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: description_menu2 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    speed_title_textColorStyle() {
      const { speed_title_textColor, speed_title_menu1 } = this;
      return {
        backgroundColor: speed_title_textColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: speed_title_menu1 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    speed_value_textColorStyle() {
      const { speed_value_textColor, speed_value_menu1 } = this;
      return {
        backgroundColor: speed_value_textColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: speed_value_menu1 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    humidite_title_textColorStyle() {
      const { humidite_title_textColor, humidite_title_menu1 } = this;
      return {
        backgroundColor: humidite_title_textColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: humidite_title_menu1 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    humidite_value_textColorStyle() {
      const { humidite_value_textColor, humidite_value_menu1 } = this;
      return {
        backgroundColor: humidite_value_textColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: humidite_value_menu1 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    horloge_digit_textBackgroundColorStyle() {
      const { horloge_digit_textBackgroundColor, horloge_digit_menu1 } = this;
      return {
        backgroundColor: horloge_digit_textBackgroundColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: horloge_digit_menu1 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    horloge_digit_textColorStyle() {
      const { horloge_digit_textColor, horloge_digit_menu2 } = this;
      return {
        backgroundColor: horloge_digit_textColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: horloge_digit_menu2 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    horloge_analog_textBackgroundColorStyle() {
      const { horloge_analog_textBackgroundColor, horloge_analog_menu1 } = this;
      return {
        backgroundColor: horloge_analog_textBackgroundColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: horloge_analog_menu1 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    horloge_analog_textColorStyle() {
      const { horloge_analog_textColor, horloge_analog_menu2 } = this;
      return {
        backgroundColor: horloge_analog_textColor,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: horloge_analog_menu2 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
  },
};
</script>

<style>
.time {
  letter-spacing: 0.05em;
  padding: 5px 0;
}

.date {
  letter-spacing: 0.05em;
  text-align: center;
  padding: 5px 0;
}
</style>
