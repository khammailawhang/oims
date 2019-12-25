<template>
  <div class="font">
    <v-card max-width="1200" class="mx-auto">
      <v-container list-xl id="dropdown-example">
        <div class="d-flex align-center">
          <v-sheet class="pa-2" color="font-weight-bold">{{
            $t("Service.Service1")
          }}</v-sheet>
          <v-spacer />
          <v-sheet class="pa-2" color="font-weight-bold">{{
            $t("Service.Service2")
          }}</v-sheet>
        </div>

        <v-progress-linear
          value="100"
          buffer-value=""
          color="indigo"
          height="1"
          background-color="grey"
          class="grey lighten-2"
          buffer
        >
          <v-layout justify-space-between> </v-layout>
        </v-progress-linear>

        <!-- <v-sheet class="pa-2" color="font-weight-bold"></v-sheet> -->
        <v-progress-linear
          value="100"
          buffer-value=""
          color="cyan"
          height="0"
          background-color="grey"
          class="grey lighten-2"
          buffer
        >
          <v-layout justify-space-between> </v-layout>
        </v-progress-linear>
        <v-row>
          <v-col sm="6">
            <v-layout>
              <router-link :to="`/${$i18n.locale}/Register`">
                <v-btn class="pa-0" fab dark color="success">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </router-link>
              <v-sheet class="pa-3" color="font-weight-bold">{{
                $t("Service.Service3")
              }}</v-sheet>
            </v-layout>
          </v-col>
          <v-col sm="6">
            <div class="text-right">
              <router-link :to="`/${$i18n.locale}/Inspections`">
                <v-btn
                  class="ma-2"
                  color=""
                  @click="loader = 'loading2'"
                  dark
                  >{{ $t("Service.Service4") }}</v-btn
                >
              </router-link>
            </div>
          </v-col>
        </v-row>
        <!-- <v-layout>
                <v-sheet class="pa-3" color="font-weight-bold">{{ $t("Service.Service5") }}</v-sheet>
            </v-layout> -->
        <div>
            <v-text-field  type="text" v-model="todoName" @keyup.enter="addTodo" :label="$t(`Register.Register3`)"></v-text-field>
          <ul>
            <li v-for="todo of todos" :key="todo.id">{{ todo.name }}</li>
          </ul>
          <!-- <v-data-table :headers="headers" :items="desserts" item-key="name" class="elevation-1" :search="search" :custom-filter="filterOnlyCapsText">
                    <template v-slot:top>
                        <v-text-field v-model="search" label="Search (UPPER CASE ONLY)" class="mx-4"></v-text-field>
                    </template>
                    <template v-slot:body.append>
                        <tr>
                            <td></td>
                            <td>
                                <v-text-field v-model="calories" type="number" label="Less than"></v-text-field>
                            </td>
                            <td colspan="4"></td>
                        </tr>
                    </template>
                </v-data-table> -->
        </div>
        <!-- ຍີ່ຫໍ່ລົດ-->
        <v-row>
          <v-layout>
            <v-flex>
              <v-sheet class="pa-2" color="font-weight-bold">{{
                $t("Register.Register38")
              }}</v-sheet>
              <v-btn
                bottom
                color="success"
                dark
                fab
                @click="dialogmodel = !dialogmodel"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-flex>

            <v-dialog v-model="dialogmodel" width="800px">
              <v-card>
                <v-card-title class="grey lighten-2">
                  {{ $t("Register.Register38") }}
                </v-card-title>
                <v-container>
                  <v-row class="mx-2">
                    <v-col class="align-center justify-space-between" cols="12">
                      <v-row align="center" class="mr-0">
                        <v-avatar size="40px" class="mx-3">
                          <img
                            src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                            alt=""
                          />
                        </v-avatar>
                        <v-text-field
                          color="success"
                          :label="$t(`Register.Register38`)"
                        ></v-text-field>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    class="ma-2"
                    color="error"
                    @click="dialogmodel = false"
                    >{{ $t("Register.Register28") }}</v-btn
                  >
                  <v-btn
                    class="ma-2"
                    color="success"
                    @click="dialognodel = false"
                    >{{ $t("Register.Register29") }}</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- ປະເພດລົດ-->
            <v-flex>
              <v-sheet class="pa-2" color="font-weight-bold">{{
                $t("Register.Register40")
              }}</v-sheet>
              <v-btn
                bottom
                color="success"
                dark
                fab
                @click="dialogtypee = !dialogtypee"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-flex>
            <v-dialog v-model="dialogtypee" width="800px">
              <v-card>
                <v-card-title class="grey lighten-2">
                  {{ $t("Register.Register40") }}
                </v-card-title>
                <v-container>
                  <v-row class="mx-2">
                    <v-col class="align-center justify-space-between" cols="12">
                      <v-row align="center" class="mr-0">
                        <v-flex class="pa-1">
                          <v-autocomplete
                            color="success"
                            :label="$t(`Register.Register388`)"
                            :items="componentsmodel"
                          ></v-autocomplete>
                        </v-flex>
                        <v-text-field
                          color="success"
                          :label="$t(`Register.Register40`)"
                        ></v-text-field>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    class="ma-2"
                    color="error"
                    @click="dialogtypee = false"
                    >{{ $t("Register.Register28") }}</v-btn
                  >
                  <v-btn
                    class="ma-2"
                    color="success"
                    @click="dialogtypee = false"
                    >{{ $t("Register.Register29") }}</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-row>
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
import axios from "axios";
const baseURL="http://localhost:3000/todos";

export default {
  data: () => {
    return {
      todos: [],
      todoName: '',
      componentsmodel: ["TOYUTA", "MAZADA", "HOHAI", "OOO"],
      dialogtypee: false
    };
  },
  async created() {
    try {
      const res = await axios.get(baseURL);
      this.todos = res.data;
    } catch (e) {
    //   console.error(e);
    }
  },
  methods: {
      async addTodo(){
          const res = await axios.post(baseURL, {name: this.todoName});

          this.todos = [...this.todos,res.data];
          
          this.todoName = '';
      }
  },
};
</script>
