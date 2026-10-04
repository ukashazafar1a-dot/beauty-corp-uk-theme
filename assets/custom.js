window.onload = function(){
  if(Shopify.locale == 'en'){
    if(document.getElementById('rfwidget')){
      document.getElementById('rfwidget').style.display = 'none';
    }
    if(document.getElementById('ur-custom-widget')){
      document.getElementById('ur-custom-widget').style.display = 'none';
    }
  }
}
