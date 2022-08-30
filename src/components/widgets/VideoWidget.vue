<template>
    <div>
        <div v-if="videoType == 'local'" controls :key="componentVid" @contextmenu.prevent="is_display == false ? dialog = true : dialog = false">
            <video class="videoInsert" :style="{
                'width': (item_data.w * 0.99) + 'px',
                'height': item_data.h + 'px'
            }" controls loop autoplay>
                <source type="video/mp4" :src="componentVid">
            </video>
        </div>

        <!-- <video-player class="video-player-box"  v-if="videoType == 'youtube'" ref="videoPlayer" :style="{
            'width': item_data.w + 'px',
            'height': item_data.h + 'px'
        }" :options="playerOptions" :playsinline="true"
            customEventName="customstatechangedeventname" :key="componentVid" @contextmenu.prevent="is_display == false ? dialog = true : dialog = false">
        </video-player> -->

        <!-- <video-player class="vjs-custom-skin"
                        ref="videoPlayer"
                        :options="playerOptions"
                        customEventName="changed"
                       >
          </video-player> -->
        <div v-if="videoType == 'youtube'" :key="videoIdkey" @contextmenu.prevent="is_display == false ? dialog = true : dialog = false">
            <youtube :width="item_data.w" :height="item_data.h" :video-id="videoId" :player-vars="playerVars"
                :style="{ borderRadius: is_display == true ? '0px' : '50px'}" @ended="log_ended"></youtube>
        </div>




        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        Choisissez une video
                    </v-card-title>
                    <v-card-text>
                        <v-row no-gutters>
                            <v-col class="d-flex" cols="12" sm="8">
                                <v-select :items="types" v-model="videoType" @change="componentVid = ''"
                                    label="type de videos" dense solo>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row v-if="videoType == 'local'" no-gutters>
                            <v-col v-for="(video, ind) in videos" :key="ind" cols="12" sm="4"
                                @click="componentVid = video.pathLong">
                                <video width="150" height="150" class="m-1">
                                    <source type="video/mp4" :src="video.pathLong">
                                </video>

                            </v-col>
                        </v-row>
                        <v-row v-if="videoType == 'youtube'" no-gutters>
                            <v-col class="d-flex" cols="12" sm="12">
                                <v-text-field label="lien youtube" hide-details="auto" v-model="componentVid">
                                </v-text-field>
                                <button> </button>
                                <v-btn color="green darken-1" text @click="youtubeLinkAdded()">
                                    Loader
                                </v-btn>
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
import { getIdFromUrl } from 'vue-youtube'
export default {
    data: () => ({
         is_display : true,
        dialog: false,
        types: ['youtube', 'local'],
        videos: [],
        videoType: 'local',
        componentVid: '',
        youtubeKey: 0,
        videoId: '',
        youtubeUpdate: false,
        playerVars: {
            autoplay: 1,
        },
        videoIdkey : ""

    }),
    props: ['item_data'],

    mounted() {
        this.importAll(require.context('../../assets/videos/', true));
        if ('data_loaded' in this.item_data) {
            this.componentVid = this.item_data.data_loaded.componentVid
            this.videoId = this.item_data.data_loaded.videoId
            this.videoType = this.item_data.data_loaded.videoType
        }
        this.is_display = this.$route.path.includes("display");
         this.videoIdkey = this.videoId + " " + Math.random();
    },

    computed: {
        player() {
            return this.$refs.youtube.player
        }
    },


    methods: {
        log_ended() {
            console.log("ended the video");
            this.videoIdkey = this.videoId + " " + Math.random();
            this.$forceUpdate();
        },
        fetchsurveies() {
            console.log(this.item_data)
        },
        importAll(r) {
            r.keys().forEach(key => (this.videos.push({ pathLong: r(key), pathShort: key })));
        },
        videoclicked(pathLong) {
            this.componentVid = "../../assets/videos" + pathLong.substring(1);
        },
        youtubeLinkAdded() {
            
            this.videoId = ''
            this.videoId = getIdFromUrl(this.componentVid);


            this.$forceUpdate();
        },

    }
}
</script>
<style>
.videoInsert {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 90%;
    min-height: 100%;
    z-index: -100;
    background-size: cover;
    overflow: hidden;
}
</style>