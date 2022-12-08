// try {
//     console.log('euy2');

//     window.fbAsyncInit = function () {
//         FB.init({
//             appId: "2131194267082076",
//             cookie: true,
//             xfbml: true,
//             version: "v15.0",
//         });

//         // FB.AppEvents.logPageView();
//         FB.getLoginStatus(({ authResponse }) => {
//             console.log('authResponse ', authResponse);
//             // if (authResponse) {
//             //     accountService.apiAuthenticate(authResponse.accessToken).then(resolve);
//             // } else {
//             //     resolve();
//             // }
//         });
//     };

//     (function (d, s, id) {
//         var js,
//             fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) {
//             return;
//         }
//         js = d.createElement(s);
//         js.id = id;
//         js.src = "https://connect.facebook.net/en_US/sdk.js";
//         fjs.parentNode.insertBefore(js, fjs);
//     })(document, "script", "facebook-jssdk");
// } catch (error) {
//     console.log(error);
// }