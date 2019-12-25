<template>
<div class="font">

    <v-card max-width="1300" class="mx-auto">
        <v-container list-xl id="dropdown-example">

            <div class="d-flex align-center">
                <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Register.Register1") }}
                </v-sheet>
                <v-spacer />
                <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Register.Register2") }}</v-sheet>
            </div>

            <v-progress-linear value="100" buffer-value="" color="indigo" height="1" background-color="grey" class="grey lighten-2" buffer>
                <v-layout justify-space-between> </v-layout>
            </v-progress-linear>
            <v-row>
                <v-layout>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register3`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register4`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register5`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register6`)" required></v-text-field>
                    </v-flex>
                </v-layout>
            </v-row>

            <v-row>
                <v-layout>
                    <v-flex class="pa-1">
                        <v-autocomplete color="success" :label="$t(`Register.Register7`)" :items="componentsstreering"></v-autocomplete>
                    </v-flex>
                    <v-flex class="pa-1">
                        <v-autocomplete color="success" :label="$t(`Register.Register8`)" :items="componentsprovice"></v-autocomplete>
                    </v-flex>
                    <v-flex class="pa-1">
                        <v-autocomplete color="success" :label="$t(`Register.Register9`)" :items="componentsdistrict"></v-autocomplete>
                    </v-flex>
                    <v-flex class="pa-1">
                        <v-autocomplete color="success" :label="$t(`Register.Register10`)" :items="componentsvillage"></v-autocomplete>
                    </v-flex>
                </v-layout>
            </v-row>

            <v-row>
                <v-layout>
                    <v-flex class="pa-1">
                        <v-autocomplete color="success" :label="$t(`Register.Register11`)" :items="componentsmodel"></v-autocomplete>
                    </v-flex>
                    <v-flex class="pa-1">
                        <v-autocomplete color="success" :label="$t(`Register.Register12`)" :items="componentstype"></v-autocomplete>
                    </v-flex>
                    <v-flex class="pa-1">
                        <v-autocomplete color="success" :label="$t(`Register.Register13`)" :items="componentscolor"></v-autocomplete>
                    </v-flex>
                    <v-flex class="pa-1">
                        <v-autocomplete color="success" :label="$t(`Register.Register14`)" :items="componentsfuel"></v-autocomplete>
                    </v-flex>
                </v-layout>
            </v-row>

            <v-row>
                <v-layout>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register16`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register17`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register18`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register19`)" required></v-text-field>
                    </v-flex>
                </v-layout>
            </v-row>

            <v-row>
                <v-layout>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register20`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register21`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register22`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register23`)" required></v-text-field>
                    </v-flex>
                </v-layout>
            </v-row>

            <v-row>
                <v-layout>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register24`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register25`)" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field class="pa-4" color="success" :label="$t(`Register.Register26`)" required></v-text-field>
                    </v-flex>
                </v-layout>
            </v-row>

            <div class="text-right">
                <v-btn class="ma-2" color="error" @click="loader = 'loading2'" dark>{{ $t("Register.Register28") }}</v-btn>
                <v-btn class="ma-2" color="success" @click="loader = 'loading2'" dark>{{ $t("Register.Register29") }}</v-btn>
            </div>
            <div class="d-flex align-center">
                <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Register.Register30") }}</v-sheet>
            </div>
            <v-progress-linear value="100" buffer-value="" color="indigo" height="1" background-color="grey" class="grey lighten-2" buffer>
                <v-layout justify-space-between> </v-layout>
            </v-progress-linear>
            <br>
            <!-- ແຂວງ-->
            <v-row>
                <v-layout>
                    <v-flex>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Register.Register32") }}</v-sheet>
                        <v-btn bottom color="success" dark fab @click="dialogprovince = !dialogprovince">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-flex>

                    <v-dialog v-model="dialogprovince" width="800px">
                        <v-card>
                            <v-card-title class="grey lighten-2">
                                {{ $t("Register.Register31") }}
                            </v-card-title>
                            <v-container>
                                <v-row class="mx-2">
                                    <v-col class="align-center justify-space-between" cols="12">
                                        <v-row align="center" class="mr-0">

                                            <v-text-field color="success" :label="$t(`Register.Register32`)"></v-text-field>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn class="ma-2" color="error" @click="dialog = false">{{ $t("Register.Register28") }}</v-btn>
                                <v-btn class="ma-2" color="success" @click="dialog = false">{{ $t("Register.Register29") }}</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <!-- ເມືອງ-->
                    <v-flex>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Register.Register34") }}</v-sheet>
                        <v-btn bottom color="success" dark fab @click="dialogdistrict = !dialogdistroct">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-flex>

                    <v-dialog v-model="dialogdistrict" width="800px">
                        <v-card>
                            <v-card-title class="grey lighten-2">
                                {{ $t("Register.Register34") }}
                            </v-card-title>
                            <v-container>
                                <v-row class="mx-2">
                                    <v-col class="align-center justify-space-between" cols="12">
                                        <v-row align="center" class="mr-0">
                                            <v-flex class="pa-1">
                                                <v-autocomplete color="success" :label="$t(`Register.Register322`)" :items="componentsmodel"></v-autocomplete>
                                            </v-flex>
                                            <v-text-field color="success" :label="$t(`Register.Register34`)"></v-text-field>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn class="ma-2" color="error" @click="dialogdistrict = false">{{ $t("Register.Register28") }}</v-btn>
                                <v-btn class="ma-2" color="success" @click="dialogdistrict = false">{{ $t("Register.Register29") }}</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <!-- ບ້ານ-->
                    <v-flex>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Register.Register36") }}</v-sheet>
                        <v-btn bottom color="success" dark fab @click="dialogvillage = !dialogvillage">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-flex>

                    <v-dialog v-model="dialogvillage" width="800px">
                        <v-card>
                            <v-card-title class="grey lighten-2">
                                {{ $t("Register.Register36") }}
                            </v-card-title>
                            <v-container>
                                <v-row class="mx-2">
                                    <v-col class="align-center justify-space-between" cols="12">
                                        <v-row align="center" class="mr-0">
                                            <v-flex class="pa-1">
                                                <v-autocomplete color="success" :label="$t(`Register.Register344`)" :items="componentsmodel"></v-autocomplete>
                                            </v-flex>
                                            <v-text-field color="success" :label="$t(`Register.Register36`)"></v-text-field>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn class="ma-2" color="error" @click="dialogvillage = false">{{ $t("Register.Register28") }}</v-btn>
                                <v-btn class="ma-2" color="success" @click="dialogvillage = false">{{ $t("Register.Register29") }}</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

      

                    <!-- ສີລົດ-->
                    <v-flex>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Register.Register42") }}</v-sheet>
                        <v-btn bottom color="success" dark fab @click="dialogcolor = !dialogcolor">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-row>
            <v-dialog v-model="dialogcolor" width="800px">
                <v-card>
                    <v-card-title class="grey lighten-2">
                        {{ $t("Register.Register42") }}
                    </v-card-title>
                    <v-container>
                        <v-row class="mx-2">
                            <v-col class="align-center justify-space-between" cols="12">
                                <v-row align="center" class="mr-0">
                                    <v-avatar size="40px" class="mx-3">
                                        <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt="">
                                    </v-avatar>
                                    <v-text-field color="success" :label="$t(`Register.Register42`)"></v-text-field>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn class="ma-2" color="error" @click="dialogcolor = false">{{ $t("Register.Register28") }}</v-btn>
                        <v-btn class="ma-2" color="success" @click="dialogcolor = false">{{ $t("Register.Register29") }}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-container>
    </v-card>
</div>
</template>

<style scoped>
.pa-1 {
    font-family: "Noto Sans Lao UI";
}

.grey {
    font-family: "Noto Sans Lao UI";
}

.mr-0 {
    font-family: "Noto Sans Lao UI";
}

.ma-2 {
    font-family: "Noto Sans Lao UI";
}
</style>

<script>
export default {
    data: () => {
        return {
            componentsstreering: ["ຊາຍ", "ຂວາ"],
            componentsprovice: ["ນະຄອນຫລວງວັນຈັນ", "ຫົວພັນ"],
            componentsdistrict: ["ໄຊທານີ", "ສີໂຄດຕະບອງ"],
            componentsvillage: ["ດົງໂດກ", "ຕານມີໄຊ"],
            componentsmodel: ["TOYUTA", "MAZADA", "HOHAI", "OOO"],
            componentstype: ["Revo", "Vego", "Camery", "Viso"],
            componentscolor: ["ສີແດງ", "ຂາວ", "ຟ້າ", "ຂາວ"],
            componentsfuel: ["ເເອັດເຊັງ", "ກະຊວງ"],
            dialogprovince: false,
            dialogdistrict: false,
            dialogvillage: false,
        
            dialogcolor: false,

        };
    },
};
</script>
