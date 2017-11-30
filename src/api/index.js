const uri='https://m.toutiao.com';
export default {
   getList(){
     return uri+'/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1F5FAA14799736&cp=5A17392753F66E1&min_behot_time=1511491487';
   },
   getData(){
     return '/src/static/data.json'
   }
}
