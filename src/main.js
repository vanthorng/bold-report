import Vue from 'vue'
import './globals'



//Report Viewer source
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-designer.min';

//Data-Visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';

Vue.config.productionTip = false

import App from './App.vue'
import BoldReportViewer from './components/BoldReportViewer.vue'
import BoldReportDesigner from './components/BoldReportDesigner.vue'

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


const routes = {
  '/': App,
  '/report-viewer': BoldReportViewer,
  '/report-designer': BoldReportDesigner
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute]
    }
  },
  render (h) { return h(this.ViewComponent) }
})