<template>
    <div class="insulin-sliding-scale"> 
        <h4>{{ title }} </h4>
        <p>
        Give 
        <input v-model.number="units" size=3>
        units of 
        <input v-model="med" size=10>
        for every 
        <input v-model.number="doseInterval" size=3>
        mg/dL starting at 
        <input v-model.number="startDose" size=3>
        mg/dL up to 
        <input v-model.number="endDose" size=3>
        mg/dL
        </p>
        <div v-for="item in results" :key='item.start'>
            If BG is between {{ item.start }}-{{item.end}} give {{ item.units }} extra units of {{ med }}.
        </div>
    </div>
</template>

<script>
export default {
  name: 'InsulinSlidingScale',
  data: function () {
    return {  
        title: "High Blood Glucose Correction Factor",
        units: 1,
        med: "Novolog",
        doseInterval: 50,
        startDose: 100,
        endDose: 600,
        invalid: false,
        errors: []
    };
  },
  computed: {
    results: function() {
        var doseInt = Number(this.doseInterval);
        var doseStart = Number(this.startDose);
        var doseEnd = Number(this.endDose);
        if ((doseInt > 0) && (doseStart < doseEnd)) {
            var res = [];
            var units, unitInt;
            units = unitInt = Number(this.units); 
            for (var i = doseStart; i < doseEnd; i = i + doseInt) {
                var rangeEnd = i + doseInt - 1;
//                      rangeEnd = rangeEnd > doseEnd ? doseEnd : rangeEnd;
                res.push({start:i, end:rangeEnd, units:units});
                units += unitInt;
            }
            return res;
        }
        else {
            return [];
        }
    }
  }
}
</script>

<style scoped>
</style>