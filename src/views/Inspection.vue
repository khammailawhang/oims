<template>
<div class="font">
    <v-card max-width="1200" class="mx-auto">
        <v-container list-xl id="dropdown-example">
            <div class="d-flex align-center">
                <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspection.Inspection1") }}</v-sheet>
                <v-spacer />
                <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspection.Inspection2") }}</v-sheet>
            </div>

            <v-progress-linear value="100" buffer-value="" color="indigo" height="1" background-color="grey" class="grey lighten-2" buffer>
                <v-layout justify-space-between> </v-layout>
            </v-progress-linear>

            <!-- <v-sheet class="pa-2" color="font-weight-bold"></v-sheet> -->
            <v-progress-linear value="100" buffer-value="" color="cyan" height="0" background-color="grey" class="grey lighten-2" buffer>
                <v-layout justify-space-between> </v-layout>
            </v-progress-linear>
            <v-row>
                <v-col sm="6">
                    <v-toolbar>
                        <v-autocomplete v-model="select" :loading="loading" :items="items" :search-input.sync="search" cache-items class="mx-1" flat hide-no-data hide-details :label="$t(`Inspection.Inspection3`)"></v-autocomplete>
                        <v-div color="indigo">{{ $t("Inspection.Inspection3") }}</v-div>
                    </v-toolbar>
                </v-col>
                <v-col sm="3">
                    <div class="text-right">
                        <router-link :to="`/${$i18n.locale}/Inspections`">
                            <v-btn class="ma-2" color="success" @click="loader = 'loading2'" dark>{{ $t("Inspection.Inspection4") }}</v-btn>
                        </router-link>
                        <v-btn class="ma-2" color="error" @click="loader = 'loading2'" dark>{{ $t("Inspection.Inspection5") }}</v-btn>
                    </div>
                </v-col>
                <v-col sm="3">
                    <v-layout>
                        <router-link :to="`/${$i18n.locale}/Register`">
                            <v-btn class="pa-0" fab dark color="success">
                                <v-icon dark>mdi-plus</v-icon>
                            </v-btn>
                        </router-link>
                        <v-sheet class="pa-3" color="font-weight-bold">{{ $t("Inspection.Inspection6") }}</v-sheet>
                    </v-layout>
                </v-col>
            </v-row>
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


        </v-container>
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            components: ["TOYUTA", "MAZADA", "HOHAI", "OOO"],
            componentss: ["Revo", "Vego", "Camery", "Viso"],
            componentsss: ["ສີແດງ", "ຂາວ", "ຟ້າ", "ຂາວ"],
            componentssss: ["ເເອັດເຊັງ", "ກະຊວງ"],

            // ຄົ້ນຫາທະບຽນລົດ
            loading: false,
            items: [],
            search: null,
            select: null,
            states: [
                "ກກ 1111",
                "Alaska",
                "American Samoa",
                "Arizona",
                "Arkansas",
                "California",
                "Colorado",
                "Connecticut",
                "Delaware",
                "District of Columbia",
                "Federated States of Micronesia",
                "Florida",
                "Georgia",
                "Guam",
                "Hawaii",
                "Idaho",
                "Illinois",
                "Indiana",
                "Iowa",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Maine",
                "Marshall Islands",
                "Maryland",
                "Massachusetts",
                "Michigan",
                "Minnesota",
                "Mississippi",
                "Missouri",
                "Montana",
                "Nebraska",
                "Nevada",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "New York",
                "North Carolina",
                "North Dakota",
                "Northern Mariana Islands",
                "Ohio",
                "Oklahoma",
                "Oregon",
                "Palau",
                "Pennsylvania",
                "Puerto Rico",
                "Rhode Island",
                "South Carolina",
                "South Dakota",
                "Tennessee",
                "Texas",
                "Utah",
                "Vermont",
                "Virgin Island",
                "Virginia",
                "Washington",
                "West Virginia",
                "Wisconsin",
                "Wyoming"
            ]
        };
    },
    watch: {
        search(val) {
            val && val !== this.select && this.querySelections(val);
        }
    },
    methods: {
        querySelections(v) {
            this.loading = true;
            // Simulated ajax query
            setTimeout(() => {
                this.items = this.states.filter(e => {
                    return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
                });
                this.loading = false;
            }, 500);
        }
    }
};
</script>
