<template>
  <div>
    <zk-button type="primary" @click="startTrans">Trans</zk-button>

    <br><br>
    <div>{{langTransformedStr}}</div>
  </div>
</template>

<script>
  import ZkButton from '../components/button';
  import { langCn, langEn, langTw } from '../services/temp-data/lang';
  
  export default {
    data() {
      return {
        // langCn: '',
        // langEn: '',
        // langDe: '',
        // langJp: '',
        // langTw: '',
        langCnObj: langCn,
        langEnObj: langEn,
        langDeObj: '',
        langJpObj: '',
        langTwObj: langTw,
        langTransformed: [],
        langTransformedStr:''
      }
    },
    components: {
      ZkButton
    },
    methods: {
      startTrans() {
        for (let prop in this.langCnObj) {
          let transformed = this.transChild(prop,this.langCnObj[prop],this.langEnObj[prop],this.langTwObj[prop],[]);
          if(transformed){
            this.langTransformed.push(transformed);
          }
        }
        //this.transChild('root',this.langCnObj,this.langEnObj,this.langTwObj,[]);
        this.langTransformedStr = JSON.stringify(this.langTransformed);
      },
      transChild(propName,cnValue,enValue,twValue,propNameList) {
        
        if (typeof cnValue === "object") {
          if(propName && propName !== 'root'){
            propNameList.push(propName);
          }
          for (let prop in cnValue) {
            let transformed = this.transChild(prop,cnValue[prop],enValue[prop],twValue[prop],propNameList);
            if(transformed){
              this.langTransformed.push(transformed);
            }
          }
          propNameList.pop();
        } else {
          let returnValue = {};
          returnValue.key = propNameList.join('.')+'.'+propName;
          returnValue.text = {
            en:enValue,
            cn:cnValue,
            jp:'',
            de:'',
            tw:twValue
          };
          return returnValue;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
