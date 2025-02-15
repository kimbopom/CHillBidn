$(window).on('load',function(){let toastbar=`<div id="toastbar" class="toast-container position-absolute top-0 end-0 p-3" style="
    position: fixed !important;
    z-index: 99999;
    ">
    </div>`;if($('#toastbar').length==0){$('body').append(toastbar);}});function showToast(caption,text,type='default'){let addclasses='bg-light text-black';let iconhtml=''
switch(type){case 'info':addclasses='bg-info text-white';iconhtml='<i class="fa-solid fa-circle-info toasticon"></i>';break;case 'warning':addclasses='bg-warning text-white';iconhtml='<i class="fa-solid fa-circle-exclamation toasticon"></i>';break;case 'error':addclasses='bg-danger text-white';iconhtml='<i class="fa-solid fa-hexagon-exclamation toasticon"></i>';break;case 'success':addclasses='bg-success text-white';iconhtml='<i class="fa-solid fa-square-check toasticon"></i>';break;case 'default':addclasses='bg-light text-black';iconhtml='';break;}
$('#toastbar').prepend(`<div class="toast fade show `+addclasses+`" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
    `+iconhtml+`
    <strong class="me-auto">`+caption+`</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
    `+text+`
    </div>
    </div>`);let mytoast=$("#toastbar").find(".toast:first");mytoast[0].addEventListener('hidden.bs.toast',function(){$(this).remove();})
setTimeout(()=>mytoast.fadeOut(1000,function(){$(this).remove();}),10000);}
function ExampleAlert(){showToast("Test cap ERROR alert","Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",'error');showToast("Test cap WARNING alert","Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",'warning');showToast("Test cap INFO alert","Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",'info');showToast("Test cap SUCCESS alert","Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",'success');showToast("Test cap DEFAULT alert","Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");}
function LOADING_SHOW(){$('.loading').remove();$('.loadarea').html('<div class="loading"><div class="spinner-border text-primary" role="status"> <span class="sr-only">Loading...</span></div></div>');}
var generalpage=false;function LOADING_HIDE(){$('.loading').remove();if(generalpage){UpdateBalanceStat();}}
function UpdateTooltips(){$('[data-bs-toggle="tooltip"]').tooltip();$('.tooltip[role=tooltip]').remove();}
function UpdateBalanceStat(){$.ajax({type:"POST",url:'/user/get_balance_info',data:{csrfmiddlewaretoken:document.getElementsByName('csrfmiddlewaretoken')[0].value},}).done(function(json){if(json['balance_in_usd']){$('#user-balance-usd').html(Math.round(json['balance_in_usd']*100)/100);$('#user-balance-btc').html(json['balance_in_btc']);$('.balance-link').attr('title','BTC Rate: <b>1</b> <i class="text-warning fa-brands fa-bitcoin"></i> ≈ <span class="fw-bold text-success">$'+(Math.round(json['bitcoin_price']*100)/100)+'</span><br><b class="w-100 text-center">Click to top up balance</b>');UpdateTooltips();}});}
function copyToClipboard(text){}
$(document).ready(function(){$('body').on('click','.copydiv',function(){var tmp=document.createElement('textarea');document.body.appendChild(tmp);tmp.value=$(this).text();tmp.select();document.execCommand("copy");document.body.removeChild(tmp);showToast("Text copied","Text copied to clipboard",'info');});$('body').on('click','.copyinput',function(){var tmp=document.createElement('textarea');document.body.appendChild(tmp);tmp.value=$(this).val();tmp.select();document.execCommand("copy");document.body.removeChild(tmp);showToast("Text copied","Text copied to clipboard",'info');});});