import {defineStore} from 'pinia';


export let useTeamStore =  defineStore('team',{
  state(){
    return {
      members: [],
      name: '',
      spots: 0,
    };
  },
  actions: {
    async fill(){
      let r = await import ('@/team.json')
        this.$state = r.default;
    },
    addMember( name, email,status){
      const id = this.members.length() + 1
      this.members.push(
        {id, name, email, status}
      );
    },
    grow(spots){
      this.spots = spots;
    }
  },
  // computed properties
  getters: {
    remaining(){
      return this.spots - this.members.length;
    }
  }
});
