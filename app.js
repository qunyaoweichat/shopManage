//app.js
App({

    onLaunch: function () {
        let loginParams = wx.getStorageSync('loginParams');
        if (loginParams){
            this.loginApp(loginParams)
        }else{
            this.wxLogin();
        }        
    },
    // 微信登录，获取jscode,获取到jscode后通过配置的信息获取openId
    wxLogin:function(){
        wx.login({
            success: res => {
                console.log(res)
                this.getLoginParams(res.code)
            }
        })
    },
    // 这个方法先根据上面获取到的jscode来获取到用户的openid，然后调用wx.getUserInfo方法获取到用户的信息，将这俩数据组合起来调用登录接口
    getLoginParams: function (jsCode) {
        let self = this;
        let apiHost = this.globalData.apiHost;
        let params = this.globalData.appConfig;
        params.jsCode = jsCode;
        wx.request({
            url: apiHost + "login/wechat/getOpenInfo",
            method: 'post',
            data: params,
            success: data => {
                console.log(data.data)
                let openid = data.data.data.openid;
                // 获取用户信息
                wx.getUserInfo({
                    success: res => {
                        // 获取到用户信息后就可以结合openid来登录了
                        let loginParams = res.userInfo;
                        loginParams.openid = openid;
                        self.loginApp(loginParams)
                    }
                })
                
            }
        })

    },
    // 调用我们app的登录
    loginApp: function (loginParams) {
        let apiHost = this.globalData.apiHost;
        wx.request({
            url: apiHost + "login/wechatLogin",
            method: 'post',
            data: loginParams,
            success: data => {
                wx.setStorage({
                    key: 'loginInfor',
                    data: data.data.data,
                })
                wx.setStorage({
                    key: 'loginParams',
                    data: loginParams,
                })
            }
        })
    },
    globalData: {
        userInfo: null,
        apiHost: 'https://wxapi.solohui.com/api/wechat/',
        appConfig: {
            AppID: 'wx3ced8f61412e0eb8',
            secret: 'dc60a18f44475578c9ac2ca2f05077ba',
            grantType: 'authorization_code'
        },
        chatMsg: []
    }
    
})