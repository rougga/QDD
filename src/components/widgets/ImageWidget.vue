<template>
  <div>
    <v-img :width="item_data.w" :height="item_data.h" :src="componentImg" @contextmenu.prevent="is_display == false ? dialog = true : dialog = false">
    </v-img>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600">
        <v-card>
          <v-card-title class="text-h5 text-center">
            Choisissez une image
          </v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col v-for="(image,ind) in images" :key="ind" cols="12" sm="4">
                 <v-img  width="150" height="150" :src="image.pathLong" class="m-1" @click="componentImg = image.pathLong"></v-img>
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
export default {
  data: () => ({
    is_display : true,
    dialog: false,
    rules: [
      value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
    images: [],
    componentImg : ''
  }),
  props: ['item_data'],
  mounted() {
    this.importAll(require.context('../../assets/images/', true));
     if ('data_loaded' in this.item_data) {
       this.componentImg = this.item_data.data_loaded.componentImg
    }
     this.is_display = this.$route.path.includes("display");
  },


  methods: {
    fetchsurveies() {
      console.log(this.item_data)
    },
    importAll(r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
    }
  }
}
</script>