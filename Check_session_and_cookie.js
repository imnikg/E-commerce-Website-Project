(()=>{
    let isCookieAvailable = getCookie('EcommerceUserData');
    if(isCookieAvailable){
        console.log(isCookieAvailable.username);
        sessionStorage.setItem("e-comm_name", isCookieAvailable["username"]);
    }
    check_for_session();
})();


// function which finds the cookie of specific name
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return JSON.parse(c.substring(name.length, c.length));
      }
    }
    return "";
}


var session_name = null;
function check_for_session(){
   session_name = sessionStorage.getItem('e-comm_name');
   
   if(session_name){
       let fa_user_icon = document.getElementById('user-icon-setting');
       fa_user_icon.removeAttribute('data-bs-toggle');
       fa_user_icon.removeAttribute('data-bs-target');
    //    fa_user_icon.setAttribute("onmouseleave","OffBLUR()");
    //    fa_user_icon.setAttribute("onmouseover","OnBLUR()");
       fa_user_icon.setAttribute("onclick","OnBLUR();HapticOn()");
        document.getElementById('icon-user').style.visibility = 'visible';
        document.getElementById('tooltipUsernaam').innerText = session_name;
    }
   
}
console.log(session_name)

function OnBLUR(){
    document.getElementById('pakToolTip').style.visibility = 'visible';
}

function OffBLUR(){
    document.getElementById('pakToolTip').style.visibility = 'hidden';
}


function SignOut(){
    
    sessionStorage.removeItem('e-comm_name');
        let fa_user_icon = document.getElementById('user-icon-setting');
       fa_user_icon.setAttribute('data-bs-toggle','modal');
       fa_user_icon.setAttribute('data-bs-target','#user-sign-in-modal');
       fa_user_icon.removeAttribute("onmouseleave","OffBLUR()");
       fa_user_icon.removeAttribute("onmouseover","OnBLUR()");
       fa_user_icon.setAttribute("onclick","HapticOn()");
        document.getElementById('icon-user').style.visibility = 'hidden';
        document.getElementById('tooltipUsernaam').innerText = '';
        OffBLUR();
}



check_for_session_before_checkout = () =>{

    const isThere = sessionStorage.getItem('e-comm_name');

    if(isThere && extended_cart.length > 0){

        swal('Thank You',`Order completed successfully!`, "success");
    }else if(extended_cart.length === 0 ){
        swal(`Cart is Empty!`, 'Add atleast 1 item', "error");
        
    }else{
        swal('Oops!', `You First need to Login before purchase!`,"warning");

    }
}