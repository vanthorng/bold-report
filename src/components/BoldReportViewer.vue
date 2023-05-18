<template>
  <div>
    <h2 style="font-style: italic; color: brown;">Report Viewer</h2>
    <div id="viewer"></div>
  </div>
</template>
<script>
export default {
  name: "BoldReportViewer",
  mounted() {
    window.$("#viewer").boldReportViewer({
      // reportServiceUrl:"http://app1.faceazureonline.test/api/invoice/oldpreview?id=1568&temp_id=1143",
      reportPath: "~/Resources/docs/sales-order-detail.rdl",
      reportServiceUrl: 'https://demos.boldreports.com/services/api/ReportViewer',
      isResponsive: true
    });
  },
} ;
</script>

<style scoped>
#viewer {
  min-height: 600px;
  width: 100%;
}
</style>