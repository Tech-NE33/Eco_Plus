<template>
  <v-container grid-list-md mt-2 pa-0 style="height:520px" overflow-hidden>
    <v-layout row wrap>
      <v-flex white elevation-1 md12 mx-4 mt-3 pb-3 style="height:50px">
        <v-card-title dark color="primary">
          <div>
            <h3 class="red--text text--darken-1 title">Auto Mode</h3>
          </div>
        </v-card-title>
      </v-flex>
      <v-layout row wrap mx-4 mb-4 pa-0>
        <v-flex elevation-1 mx-n2 white md4 pt-3 style="height:300px">
          <v-layout justify-center mt-4>
            <vue-ellipse-progress
              class="v-label headline"
              v-bind:progress="sensordata.airflow_progress"
              :thickness="16"
              :color="gauges[0].color"
              :angle="0"
              line="butt"
              :half="true"
              :size="240"
              lineMode="out -4"
              emptyColor="#B0BEC5"
              v-bind:legend-value="sensordata.airflow_legend"
            >
              <span slot="legend-value" class="v-label headline">/{{ gauges[0].rangeHigh }}</span>
              <p slot="legend-caption" class="title mt-2 ma-0">{{ gauges[0].name }}</p>
              <span
                slot="legend-caption"
                style="font-size:13pt"
                class="mt-0 pa-0 theme--light"
                v-html="gauges[0].unit"
              >{{ gauges[0].unit }}</span>
            </vue-ellipse-progress>
          </v-layout>
        </v-flex>

        <v-flex elevation-1 mx-n2 white md4 pt-3 style="height:300px">
          <v-layout justify-center mt-4>
            <vue-ellipse-progress
              class="v-label headline"
              v-bind:progress="sensordata.enclosure_progress"
              :thickness="16"
              :color="gauges[1].color"
              :angle="0"
              line="butt"
              :half="true"
              :size="240"
              lineMode="out -4"
              v-bind:legend-value="sensordata.enclosure_legend"
            >
              <span slot="legend-value" class="v-label headline">/{{ gauges[1].rangeHigh }}</span>
              <p slot="legend-caption" class="title mt-2 ma-0">{{ gauges[1].name }}</p>
              <span
                slot="legend-caption"
                style="font-size:13pt"
                class="mt-0 pa-0 theme--light"
                v-html="gauges[1].unit"
              >{{ gauges[1].unit }}</span>
            </vue-ellipse-progress>
          </v-layout>
        </v-flex>

        <v-flex elevation-1 mx-n2 white md4 pt-3 style="height:300px">
          <v-layout justify-center mt-4>
            <vue-ellipse-progress
              class="v-label headline"
              :progress="sensordata.blockage_progress"
              :thickness="16"
              :color="gauges[2].color"
              :angle="0"
              line="butt"
              :half="true"
              :size="240"
              lineMode="out -4"
              emptyColor="#B0BEC5"
              v-bind:legend-value="sensordata.blockage_legend"
            >
              <span slot="legend-value" class="v-label headline">/{{ gauges[2].rangeHigh }}</span>
              <p slot="legend-caption" class="title mt-2 ma-0">{{ gauges[2].name }}</p>
              <span
                slot="legend-caption"
                style="font-size:13pt"
                class="mt-0 pa-0 theme--light"
                v-html="gauges[2].unit"
              >{{ gauges[2].unit }}</span>
            </vue-ellipse-progress>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-flex elevation-2 white md12 pa-0 mb-1 mx-4 style="height:110px">
        <v-layout row wrap>
          <v-flex md6 offset-md3 mt-3 white>
            <h3 class="red--text title pl-3">Target Pressure: -{{ enclosurePressure }}Pa</h3>
            <v-card color="white" flat>
              <v-slider
                v-model="enclosurePressure"
                @change="updateEP"
                :disabled="switch1"
                :color="color"
                step="0.1"
                label="-25"
                inverse-label
                class="px-3"
                max="25"
              >
                <template v-slot:prepend>
                  <div class="v-label theme--light pt-1">0</div>
                </template>
              </v-slider>
            </v-card>
          </v-flex>
          <v-flex md1 mt-1 pa-0 fill-height>
            <v-card white flat>
              <v-icon v-if="switch1 === true" color="red" class="pt-2" large>lock</v-icon>
              <v-icon v-else color="gray" class="pt-2" large>lock_open</v-icon>
              <v-switch color="red" class="pt-0" v-model="switch1"></v-switch>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import mqtt from "mqtt";

export default {
  name: "manual",
  components: {},
  data: () => ({
    connection: {
      host: "localhost",
      port: 9001,
      endpoint: "/mqtt",
      clean: true,
      connectTimeout: 4000,
      reconnectPeriod: 4000,

      clientId: "Auto_Page",
      username: "",
      password: ""
    },
    subscription: {
      topic: "esensor",
      qos: 0
    },

    publish_run: {
      topic: "run_mode",
      qos: 1,
      payload: "1"
    },
    publish_status: {
      topic: "is_on",
      qos: 1,
      payload: "1"
    },
    publish_EP: {
      topic: "enclosure_target",
      qos: 1,
      payload: "1"
    },

    sensordata: {
      airflow_progress: 0,
      airflow_legend: 0,
      enclosure_progress: 0,
      enclosure_legend: 0,
      blockage_progress: 0,
      blockage_legend: 0
    },
    // sensorVal: 0,
    qosList: [
      { label: 0, value: 0 },
      { label: 1, value: 1 },
      { label: 2, value: 2 }
    ],
    client: {
      connected: false
    },
    subscribeSuccess: false,
    switch1: true,
    enclosurePressure: 12,
    interval: null,
    dialog: false,
    gauges: [
      {
        name: "Airflow",
        progress: 0,
        show: 2.6,
        unit: "(000's M<sup>3</sup>/Hr)",
        color: "green",
        rangeHigh: 10
      },
      {
        name: "Enclosure Pressure",
        progress: 0,
        show: 8.9,
        unit: "(Pa)",
        color: "orange",
        rangeHigh: 24
      },
      {
        name: "HEPA Blockage",
        progress: 80,
        show: 80,
        unit: "(Percent)",
        color: "red",
        rangeHigh: 100
      }
    ]
  }),

  computed: {
    color() {
      if (this.enclosurePressure < 60) return "red";
      if (this.enclosurePressure < 80) return "red";
      if (this.enclosurePressure < 100) return "red";
      return "red";
    },

    animationDuration() {
      return `${this.enclosurePressure}s`;
    }
  },
  created: function() {
    this.createConnection();
    this.doSubscribe();
    // this.doPublishrun();
  },
  beforeDestroy() {
    this.doUnSubscribe();
    this.destroyConnection();
  },
  mounted() {
    // this.initgauge();
    this.doPublishrun();
  },

  methods: {
    updateEP: function(value) {
      // eslint-disable-next-line
      console.log("Slider Changed");
      this.publish_EP.payload = value.toString();
      this.doPublishEP();
    },
    createConnection() {
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `ws://${host}:${port}${endpoint}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        // eslint-disable-next-line
        console.log("mqtt.connect error", error);
      }
      this.client.on("connect", () => {
        // eslint-disable-next-line
        console.log("Connection succeeded!");
      });
      this.client.on("error", error => {
        // eslint-disable-next-line
        console.log("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        this.sensordata = JSON.parse(message);
        // eslint-disable-next-line
        console.log(`Received message ${this.sensordata} from topic ${topic}`);
      });
    },

    doSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          // eslint-disable-next-line
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        // eslint-disable-next-line
        console.log("Subscribe to topics res", res);
      });
    },

    doUnSubscribe() {
      const { topic } = this.subscription;
      this.client.unsubscribe(topic, error => {
        // eslint-disable-next-line
        console.log("Unsubscribed");
        if (error) {
          // eslint-disable-next-line
          console.log("Unsubscribe error", error);
        }
      });
    },

    doPublishrun() {
      const { topic, qos, payload } = this.publish_run;
      this.client.publish(topic, payload, qos, error => {
        if (error) {
          // eslint-disable-next-line
          console.log("Publish error", error);
        }
      });
    },
    doPublishEP() {
      const { topic, qos, payload } = this.publish_EP;
      this.client.publish(topic, payload, qos, error => {
        // eslint-disable-next-line
        console.log("Pressure Target updated");
        if (error) {
          // eslint-disable-next-line
          console.log("Publish error", error);
        }
      });
    },
    destroyConnection() {
      if (this.client.connected) {
        try {
          this.client.end();
          this.client = {
            connected: false
          };
          // eslint-disable-next-line
          console.log("Successfully disconnected!");
        } catch (error) {
          // eslint-disable-next-line
          console.log("Disconnect failed", error.toString());
        }
      }
    },

    decrement() {
      this.enclosurePressure--;
    },
    increment() {
      this.enclosurePressure++;
    }
  }
};
</script>
