import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#BF7E04",
                secondary: "#2E1206",
                red: "#D86A5A",
                blue: "#0086FD",
                accent: "#fae9c5", // #3F51B5
            },
        },
    },
});
