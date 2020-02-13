function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    if(response.status === 'connected') {
        console.log('Successfully logged in with facebook');
        FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
}

//Add this callback at bottom of facebook.js and add the required functionality in it 
function changeUser(response) {
    //Add code to change name and image 
    $(".facebookLogin").hide();
    $("#name").text(response.name);
    $("#photo").attr("src", response.picture.data.url);
}