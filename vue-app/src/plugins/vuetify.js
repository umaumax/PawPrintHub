import 'vuetify/styles'
import {
    createVuetify
} from 'vuetify'

import {
    VDataTable,
    VDataTableVirtual
} from "vuetify/labs/VDataTable";

export default createVuetify({
    components: {
        VDataTable,
        VDataTableVirtual,
    }
})
