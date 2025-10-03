import { ref, watch } from 'vue'

export function useStorage(key, defaultValue){
  let storedVal = read() ?? defaultValue
  let val = ref(storedVal)

  watch(val,write)

  function write(){
    if (val.value===''){
      localStorage.removeItem(key);
    }
    else{
      localStorage.setItem(key, val.value)
    }
  }

  function read(){
    localStorage.getItem(key)
  }

  return val
}
