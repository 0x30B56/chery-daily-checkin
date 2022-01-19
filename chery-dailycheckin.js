const axios = require("axios")
const schedule = require("node-schedule")

const config = {
        headers: {}
}

const user = "" //账号
const pass = ""        //密码


async function sign() {
        let re = ""

        re = await axios.get("https://cheryclub.mychery.com/ump/cherypc/indexPC/index", )

        let formToken = re.data.match(/name="formToken" value="(.*?)" \/>/)[1];
        console.log(formToken);

        config.headers.Cookie = re.headers['set-cookie'][0]

        re = await axios.post("https://cheryclub.mychery.com/ump/cherypc/pcLogin/checkLogin",
                `user=${user}&password=${pass}`, config)
        console.log(re.data);

        re = await axios.post("https://cheryclub.mychery.com/ump/cherypc/indexPC/addSign",
                "formToken=" + formToken, config)
        console.log(re.data);

        return re.data.msg == "succ" ? true : false
}

async function start() {
        for (let i = 0; i < 3; i++) {
                if (await sign()) break
        }
}

schedule.scheduleJob('0 0 8 * * *', () => {
        start()
})

console.log(new Date + "脚本启动成功,每天8点定时签到!")
