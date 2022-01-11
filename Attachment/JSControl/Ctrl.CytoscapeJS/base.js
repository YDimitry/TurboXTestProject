/*!
 * JS Control interop for TurboX ver. 10.5
 */

if (window.location.hash == '#client'){
  window.callProcEx = function(eventName,eventParams){
    window.open('turbo://passEvent?Event=' + eventName + '&Params=' + JSON.stringify(eventParams),'_self');
  }

  window.getData = function(){};
}else if (window.location.hash == '#web'){
  window.callProcEx = function(eventName,eventParams){
    window.parent.postMessage({ dataset: {Event:eventName,Params:JSON.stringify(eventParams)}}, '*');
  }
}else{
  window.callProcEx = function(eventName,eventParams){
    console.log('EventName:' + eventName + ';EventParams:' + JSON.stringify(eventParams));
  }
  window.getData = function(){};
}

window.onload = function(){window.callProcEx("DocumentComplete");};

window.execScriptAsync = function(key,script){
  window.callProcEx('DoExecuteScriptAsyncResult',[key,window.eval(script)]);
}

