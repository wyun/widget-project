<template>
    <div class="insulin-carb-index"> 
        <h3>{{ title }} </h3> 

        <table>
        <tr>
            <td valign="top"><InsulinCarb header="BREAKFAST"/></td>
            <td valign="top"><InsulinCarb header="LUNCH"/></td>
            <td valign="top"><InsulinCarb header="DINNER"/></td>
            <td valign="top"><InsulinCarb header="SNACK"/></td>
        </tr>
        </table>
    </div>
</template>

<script>
import InsulinCarb from "./InsulinCarb.vue";

export default {
  name: 'InsulinCarbIndex',
  components: {
      InsulinCarb
  },
  data: function () {
    return {  
        title: "Insulin/Carb Calculator"
    };
  }
}
</script>

<style scoped>
table {width: 95%; text-align: left;}
td {width: 25%;}
.insulinform {border: 1px solid black; padding: 5px; background-color: #ddd;}
input.sm {width:40px;}
@media print
{    
    .no-print, .no-print *
    {
    display: none !important;
    }
}
</style>