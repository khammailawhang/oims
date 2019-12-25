<template>
  <v-container class="font">
    <v-spacer />
    <v-col>
      <v-sheet class="" color="">{{ $t("Home.menuhome") }}</v-sheet>
    </v-col>
    <v-row>
      <v-col cols="6" sm="3">
        <v-layout>
          <v-flex>
            <v-sheet class="pa-12" color="primary" dark>{{
              $t("Home.Registersystem")
            }}</v-sheet>
          </v-flex>
        </v-layout>
      </v-col>

      <v-col cols="6" sm="3">
        <v-layout>
          <v-flex>
            <v-sheet class="pa-12" color="error" dark>{{
              $t("Home.Inspectionsystem")
            }}</v-sheet>
          </v-flex>
        </v-layout>
      </v-col>

      <v-col cols="6" sm="3">
        <v-layout>
          <v-flex>
            <v-sheet class="pa-12" color="success" dark>{{
              $t("Home.Servicesystem")
            }}</v-sheet>
          </v-flex>
        </v-layout>
      </v-col>

      <v-col cols="6" sm="3">
        <v-layout>
          <v-flex>
            <v-sheet class="pa-12" color="indigo" dark>{{
              $t("Home.Reportsystem")
            }}</v-sheet>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
    <v-progress-linear
      value="100"
      buffer-value=""
      color="cyan"
      height="2"
      background-color="grey"
      class="grey lighten-2"
      buffer
    >
      <v-layout justify-space-between> </v-layout>
    </v-progress-linear>
    <v-col>
      <v-sheet class="font">{{ $t("Home.Reportsthiti") }}</v-sheet>
    </v-col>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Bar</h2>
      </div>

      <div class="card-img-bottom">
        <canvas id="fooCanvas" count="2" />

        <chartjs-bar
          v-for="(item, index) in types"
          :key="index"
          :backgroundcolor="item.bgColor"
          :beginzero="beginZero"
          :bind="true"
          :bordercolor="item.borderColor"
          :data="item.data"
          :datalabel="item.dataLabel"
          :labels="labels"
          target="fooCanvas"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      beginZero: true,
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      types: [
        {
          bgColor: "#de98ab",
          borderColor: "0c0306",
          data: [1, 3, 5, 7, 2, 4, 6],
          dataLabel: "Bar"
        },
        {
          bgColor: "#98ddde",
          borderColor: "030c0c",
          data: [1, 5, 2, 6, 3, 7, 4],
          dataLabel: "Baz"
        }
      ]
    };
  }
};
</script>
