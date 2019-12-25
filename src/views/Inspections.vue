<template>
<div class="font">
    <v-card max-width="1200" class="mx-auto">
        <v-container list-xl id="dropdown-example">
            <div class="d-flex align-center">
                <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections1") }}</v-sheet>
                <v-spacer />
                <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections2") }}</v-sheet>
            </div>
            <v-progress-linear value="100" buffer-value="" color="cyan" height="2" background-color="grey" class="grey lighten-2" buffer>
                <v-layout justify-space-between> </v-layout>
            </v-progress-linear>

            <v-row>
                <v-col sm="6">
                    <v-layout>
                        <!-- <div class="camera-modal">
                            <v-card>
                                <video ref="video" class="camera-stream" />

                                <div class="camera-modal-container">
                                    <span @click="capture"  class="take-picture-button take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                                        <i class="material-icons">camera</i>
                                    </span>
                                </div>
                            </v-card>

                        </div> -->

                        <div class="inspections">
                            <v-card>
                                <video autoplay class="feed"></video>
                                <v-btn class="ma-2" color="success" v-on:click="Semit('takePicture')">{{ $t("Inspections.Inspections3") }}</v-btn>
                            </v-card>
                        </div>
                    </v-layout>
                </v-col>
                <v-col sm="6">
                    <!-- <div class="inspections">
                        <Canvas></Canvas>
                    </div> -->
                    <v-layout>
                        <v-card>
                            <v-img src="../assets/2019-toyota-hilux-white-trd-4.0L-v6-petrol-2019-model-007.jpg" lazy-src="../assets/2019-toyota-hilux-white-trd-4.0L-v6-petrol-2019-model-007.jpg" aspect-ratio="1" class="grey lighten-2" max-width="500" max-height="300"></v-img>
                        </v-card>
                    </v-layout>
                </v-col>
            </v-row>

            <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
                <v-expansion-panel>
                    <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header>
                            <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections4") }}</v-sheet>
                        </v-expansion-panel-header>
                        <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                            <v-layout justify-space-between> </v-layout>
                        </v-progress-linear>
                        <v-expansion-panel-content>
                            <v-row>
                                <v-layout>
                                    <v-flex>
                                        <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections5`)" required></v-text-field>
                                    </v-flex>
                                    <v-flex>
                                        <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections6`)" required></v-text-field>
                                    </v-flex>
                                    <v-flex>
                                        <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections7`)" required></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections8") }}</v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections9`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections10`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections11`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>

                        <v-row>
                            <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections12") }}</v-sheet>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections13`)" required></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections121") }}</v-sheet>
                                <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections14`)" required></v-text-field>
                                <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections15`)" required></v-text-field>
                            </v-flex>
                            <v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections122") }}</v-sheet>
                                <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections14`)" required></v-text-field>
                                <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections15`)" required></v-text-field>
                            </v-flex>
                            <v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections123") }}</v-sheet>
                                <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections14`)" required></v-text-field>
                                <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections15`)" required></v-text-field>
                            </v-flex>
                            <v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections124") }}</v-sheet>
                                <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections14`)" required></v-text-field>
                                <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections15`)" required></v-text-field>
                            </v-flex>
                        </v-row>
                        <v-row>
                            <v-layout>
                                <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections16") }}</v-sheet>

                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections17`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections18") }}</v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections19`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections20") }}</v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections21`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections22`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections23`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections24`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections25") }} </v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections26`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections27`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" label="" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections28") }}</v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections29`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections30`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections31`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections311`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections32`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections33") }}</v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections34`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections35`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections37`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections38") }}</v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections39`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections40`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections41`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections42`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                        <v-layout>
                            <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections43") }}</v-sheet>

                            <v-flex>
                                <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections44`)" required></v-text-field>
                            </v-flex>

                            <v-sheet class="pa-4" color="font-weight-bold"></v-sheet>
                            <v-flex>
                                <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections45`)" required></v-text-field>
                            </v-flex>
                            <v-sheet class="pa-4" color="font-weight-bold"></v-sheet>
                            <v-flex>
                                <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections46`)" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections47") }}</v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections48`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections49`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections50") }}</v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections51`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections52`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections53`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections533`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections54`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections55`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections56`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>

                        <v-row>
                            <v-layout>
                                <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections57") }}
                                </v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections58`)" required></v-text-field>
                                </v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold"></v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections59`)" required></v-text-field>
                                </v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold"></v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections60`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections61") }}
                                </v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections62`)" required></v-text-field>
                                </v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold"></v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections63`)" required></v-text-field>
                                </v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold"></v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections64`)" required></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout>
                                <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections65") }}
                                </v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections66`)" required></v-text-field>
                                </v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold"></v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections67`)" required></v-text-field>
                                </v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold"></v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections68`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-sheet class="pa-4" color="font-weight-bold">{{ $t("Inspections.Inspections69") }}
                                </v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections70`)" required></v-text-field>
                                </v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold"></v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections71`)" required></v-text-field>
                                </v-flex>
                                <v-sheet class="pa-4" color="font-weight-bold"></v-sheet>
                                <v-flex>
                                    <v-text-field class="pa-0" color="success" :label="$t(`Inspections.Inspections72`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections73") }}</v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success"  :label="$t(`Inspections.Inspections74`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success"  :label="$t(`Inspections.Inspections75`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections76") }}</v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections77`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections78`)" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels multiple>
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                    <v-expansion-panel-header>
                        <v-sheet class="pa-2" color="font-weight-bold">{{ $t("Inspections.Inspections79") }}</v-sheet>
                    </v-expansion-panel-header>
                    <v-progress-linear value="100" buffer-value="" color="cyan" height="1" background-color="grey" class="grey lighten-2" buffer>
                        <v-layout justify-space-between> </v-layout>
                    </v-progress-linear>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-layout>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections80`)" required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections81`)"  required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections82`)"  required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field class="pa-4" color="success" :label="$t(`Inspections.Inspections83`)"  required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <div class="text-right">
                <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="error" @click="loader = 'loading2'" dark>{{ $t("Inspections.Inspections84") }}</v-btn>
                <router-link to="/Inspections">
                    <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="success" @click="loader = 'loading2'" dark>{{ $t("Inspections.Inspections85") }}</v-btn>
                </router-link>
            </div>
        </v-container>
    </v-card>
</div>
</template>

<script>
// import { stream } from 'stream';
export default {
    data: () => ({
        panel: [0, 1],
        disabled: false,
        readonly: false
    }),

    // mounted() {
    //     navigator.mediaDevices.getUserMedia({
    //             video: true
    //         })
    //         .then(mediaStream => {
    //             this.$refs.video.srcObject = mediaStream
    //             this.$refs.video.play()
    //         })

    //     // .catch(error => console.error('getUserMedia() error:', error))
    // },

    methods: {
        init() {
            if (
                "mediaDevices" in navigator &&
                "getUserMedia" in navigator.mediaDevices
            ) {
                navigator.mediaDevices
                    .getUserMedia({
                        video: true
                    })
                    .then(stream => {
                        const videoPlayer = document.querySelector("video");
                        videoPlayer.srcObject = stream;
                        videoPlayer.play();
                    });
            } else {
                alert("Canot get Media Devices");
            }
        },

        takePicture() {
            const picture = document.querySelector("canvas");
            const ctx = picture.getContext("2d");
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(
                document.querySelector("video"),
                0,
                0,
                picture.width,
                picture.height
            );
        }
    },
    beforeMount() {
        this.init();
    }
};
</script>

<style scoped>

.feed {
    display: block;
    width: 100%;
    max-width: 400px;
    box-shadow: 4px 4px 12px;
    margin: 0 auto;
    background-origin: #000000;
    box-shadow: 4px 4px 12px;
}

/* 
.Callery {
    display: block;
    width: 100vw;
    height: 100vw;

    padding: 25px;
    box-sizing: border-box;
}

canvas {
    display: block;
    width: 100%;
    max-width: 400px;

    margin: 0 auto;

    box-shadow: 4px 4px 12px 0px;

} */

.take-picture-button {
    position: fixed;
    right: 24px;
    bottom: 90px;
    z-index: 5;
}

.camera-modal {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* position: absolute; */
    /* background-color: white; */
    /* z-index: 10; */
}

.camera-modal-container {
    position: absolute;
    bottom: 0;
    width: 0%;
    align-items: center;
    margin-bottom: 0px;
}

.take-picture-button {
    display: flex;
}
</style>
