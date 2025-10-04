import {defineStore} from 'pinia';

export let useCounterStore =  defineStore('counter',{
  state(){
  return {
    count: 0
  };
  },
  actions: {
    increment(){
      if (this.count > 9){
        return;
      }
      this.count++;
    }
  },
  // computed properties
  getters: {
    remaining(){
      return 10 - this.count;
    }
  }
  });
