
const loginUrl = "https://club.qirui.com/v2/api/?login";
const signinUrl = "https://hybrid-sapp.chery.cn/package-mine/pages/sign-in/sign-in";

// 替换为您的奇瑞车主俱乐部账号密码
const loginData = {
  username: "",
  password: ""
};

// 登录奇瑞车主俱乐部
$httpClient.post(loginUrl, function(error, response, data) {
  if (error) {
    console.log(error);
    $done();
  } else {
    var cookies = response.headers["Set-Cookie"];
    signin(cookies);
  }
}, loginData);

// 签到奇瑞车主俱乐部
function signin(cookies) {
  $httpClient.get(signinUrl, function(error, response, data) {
    if (error) {
      console.log(error);
      $done();
    } else {
      var result = JSON.parse(data);
      if (result.errno === 0) {
        console.log("签到成功，获得" + result.data.reward + "奖励");
      } else {
        console.log("今天已签到，无法获得奖励");
      }
      $done();
    }
  }, {
    headers: {
      Cookie: cookies
    }
  });
}
