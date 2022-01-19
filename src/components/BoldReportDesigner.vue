<template>
  <div>
    <h2>Report Designer</h2>
    <div id="designer"></div>
  </div>
</template>
<script>
export default {
  name: "BoldReportDesigner",
  mounted() {
    window.$("#designer").boldReportDesigner({
      serviceUrl:
        "https://demos.boldreports.com/services/api/ReportDesignerWebApi",
    });
  },
};
</script>
<style scoped>
#designer {
  min-height: 600px;
  width: 100%;
}
</style>