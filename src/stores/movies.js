import { defineStore } from "pinia";


export const useMovieData = defineStore('Data',{
    // state:() => {
    //     return{
    //         favList:[],
    //         count:0
    //     }
   
    // },

    state:() => ({
            favList:[],
            count:1,
         
   
    }),
    actions:{
           toggleFav(country){
            const indexInList = this.favList.indexOf(country.cca3)
            if(indexInList >-1){
                this.favList.splice(indexInList, 1)
            }else{
                 this.favList.push(country.cca3)
            }
           },
            isInFav(country){
                return this.favList.indexOf(country.cca3) >-1
            },
        add() {
            this.count = this.count + 1
       
    },
    getters :{
        double: (state) => state.count * 2,
        countryIsFav:(state)=>{
            return (cca3) => state.favList.indexOf(cca3) > -1
        },
    },
},
})
