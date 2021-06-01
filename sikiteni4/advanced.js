function $isOnline(stat){
  let val='';
  val+=['online','offline'][+(typeof(stat)==undefined)];
  return val;
}