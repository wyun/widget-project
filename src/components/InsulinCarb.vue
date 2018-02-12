<template>
    <div class="insulin-carb"> 
        <h4>{{ header }} </h4> 
        <b>Ratio = {{ insulin }}:{{ carb }}</b> 
        <div class="insulinform no-print"> 
            Ratio: <input class="sm" v-model.number="insulin" type=number size=2> : <input class="sm" v-model.number="carb" type=number size=2> <br> 
            Increment: <input class="sm" v-model.number="increment" type=number size=3 step=0.5>U <br> 
            Max grams: <input class="sm" v-model.number="maxgrams" type=number size=4>grams <br> 
            Insuline type (e.g.: NovoLog): 
            <input v-model="name" size=15> 
        </div> 
        <table v-if="results.length"> 
            <tr>
                <th>Carbs</th><th align="right">{{ name }}</th>
            </tr> 
            <tr v-for="item in results" :key="item.units"> 
                <td align="right">{{ item.min }}-{{item.max}} grams</td><td align="right">{{ item.units }} units</td> 
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'InsulinCarb',
  props: {
    header: String
  },
  data: function () {
    return {  
            insulin: 0,
            carb: 0,
            increment: 0.5,
            maxgrams: 100,
            name: 'Insulin',
            };
  },
  computed: {
    results: function () {
        if (this.insulin > 0 && this.carb > 0 && this.increment > 0) {
            var res = [];
            var insCarbRatio = this.insulin / this.carb;
            var maxG = this.maxgrams;
            var min = this.increment / insCarbRatio, grams = min, max=0;
            for (var u=this.increment; grams <= maxG; u+= this.increment) {
                grams = (u + this.increment) / insCarbRatio;
                if (grams > maxG) break;
                min = max ? max +1 : Math.round(min);
                max = Math.round(grams) - 1;
                res.push({min:min,
                    max:max,
                    units:u
                });
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