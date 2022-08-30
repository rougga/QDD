<template>
    <div>
        <v-main>
            <v-card class="mx-auto" max-width="800" style="margin-top: 17%;" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline mb-4">
                            Choisissez un affichage
                        </div>
                        <v-row align="center">
                            <v-col cols="4">
                                <v-subheader>
                                    List des Affichages
                                </v-subheader>
                            </v-col>

                            <v-col cols="8">
                                <v-select v-model="display_id" :items="items" item-text="display" item-value="displaynumber"
                                    label="Select" return-object single-line></v-select>
                            </v-col>
                        </v-row>
                    </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success darken-1" :disabled="display_id.displaynumber == ''" depressed @click="goToShow()">
                        Afficher
                    </v-btn>
                    <v-btn color="error darken-1" :disabled="display_id.displaynumber == ''" depressed @click="goToEdite()">
                        Modifier
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-main>
    </div>

</template>

<script>

export default {
    name: 'App',
    data: () => ({
        display_id: { display: '', displaynumber: '' },
        items: [
        ],
    }),
    mounted() {
        this.importAll(require.context('../../public/displays/', true));

    },
    methods: {
        importAll(r) {
            let keys = r.keys();
            console.log(keys)
            for (let index = 0; index < keys.length; index += 2) {
                this.items.push({ display: keys[index].substring(2).replace('_', ' '), displaynumber: keys[index].slice(-1) })

            }

        },
        goToShow() {
            
            this.$router.push('/display/'+this.display_id.displaynumber)
        },
        goToEdite() {
            this.$router.push('/edite/'+this.display_id.displaynumber)
        }
    }

};
</script>
<style >
</style>
