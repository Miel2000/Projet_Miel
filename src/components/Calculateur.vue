<template>

<div class="calculator">

    <h1>Calculateur</h1>
  
    <div class="form-row">

        <div class="form-group">
            <input v-model="numberOne"  type="text" class="form-control">
        </div>

        <div class="form-group">

            <select v-model="operator" class="form-control" >
                <option value="plus">+</option>
                <option value="moins">-</option>
                <option value="diviser">/</option>
                <option value="multiplier">*</option>
            </select>
        </div>

        <div class="form-group">
            <input v-model="numberTwo" class="form-control" type="text">
        </div>

        <div class="form-group">
            <button  @click="calculer" class="btn btn-primary">Calculer</button>
        </div>

    </div>
    <br>
    <div class="result-container" v-if="result">
        <h2 class="result">{{ result }}</h2> 
        <button @click="reset">Reset</button>
    </div>
        <div class="historique card">
        <h1>Historique</h1>
        <ul id="example-1">
            <li v-for="item in logCalcule" :key="item">
            {{ item }}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    export default {
        name:"Calculateur",
     data() {
         return {
             result: 0,
             numberOne: 0,
             operator: "plus",
             numberTwo: 0,
             logCalcule: []
         }
     },

     methods: {
         calculer() {
             if(Number(this.numberOne) && Number(this.numberTwo)){
                if(this.operator == "plus"){
                    this.result =  Number(this.numberOne) + Number(this.numberTwo);
                    this.logCalcule.push(this.numberOne + ' + ' +  this.numberTwo + ' = ' + this.result);
                }
                if(this.operator == "moins"){
                  this.result =   Number(this.numberOne) -  Number(this.numberTwo);
                    this.logCalcule.push(this.numberOne + ' - ' +  this.numberTwo + ' = ' + this.result);

                }
                if(this.operator == "diviser"){
                 this.result =   Number(this.numberOne) /  Number(this.numberTwo);
                    this.logCalcule.push(this.numberOne + ' / ' +  this.numberTwo + ' = ' + this.result);

                }
                if(this.operator == "multiplier"){
                 this.result =   Number(this.numberOne) *  Number(this.numberTwo);
                    this.logCalcule.push(this.numberOne + ' x ' +  this.numberTwo + ' = ' + this.result);

                }
             }
         },

         reset(){
             this.numberOne = 0,
             this.numberTwo = 0,
             this.result = 0
         }
     },
    }
</script>

<style  scoped>
.calculator .form-row{
    display: flex;
    justify-content: center;
}
.result-container {
    text-align: center;
}
.historique {
     width: 20%;
     margin:0 20px;
    
}
.historique ul li {

     list-style:none
}
</style>