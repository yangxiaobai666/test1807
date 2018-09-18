Page({
  data: {
    msg:"",
    list: [{ 'txt': 'aa', flag: false }, { 'txt': 'bb', flag: true }, { 'txt': 'cc', flag: true }],
    flag:true,
    str:""
  },
  input(e){
    this.setData({
      msg:e.detail.value
    })
  },
  add(){
    this.data.list.push({txt:this.data.msg,flag:false});
    this.setData({
      list:this.data.list,
      msg:''
    })
    this.getCount()
  },
  input1(e) {
    this.setData({
      str: e.detail.value
    })
  },
  add1(e){
    console.log(e)
    var id = e.target.dataset.index;
    this.data.list.splice(id, 1,this.data.str)
    this.setData({
      list: this.data.list,
      str:''
    })
    this.getCount()
  },
  checkboxChange(e){
    // console.log(e)
    var idx = e.target.dataset.index;
    this.data.list[idx].flag = !this.data.list[idx].flag,
    this.setData({
      list:this.data.list
    })
   this.getCount();
  },
  getCount(){
    var count = 0;
    this.data.list.forEach((item)=>{
      if (item.flag) count++;
    })
    this.setData({
      count
    })
  },
  switch1Change(e){
    var flag = e.detail.value
    this.setData({
      flag
    })
  },
  del(e){
    var id = e.target.dataset.index
    this.data.list.splice(id,1)
    this.setData({
      list:this.data.list
    })
    this.getCount()
  },
  onLoad(){
    this.getCount()
  }



})