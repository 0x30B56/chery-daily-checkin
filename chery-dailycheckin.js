以下是用Quantumult X实现的自动获取Cookies并签到脚本：

```
const loginUrl = "https://club.qirui.com/v2/api/?login";
const signinUrl = "https://club.qirui.com/signin";

// 替换为您的奇瑞车主俱乐部账号密码
const loginData = {
  username: "15613863036",
  password: "Huxichen01"
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
```

您需要替换代码中的奇瑞车主俱乐部账号密码，然后在Quantumult X的脚本编辑器中输入上面的代码，并保存后运行它。

希望这个脚本能帮助您。
