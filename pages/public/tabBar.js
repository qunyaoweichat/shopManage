module.exports = {
    navCtrl:function(url){
        console.log(url)
        let path = "";
        let widthBackBtn = false;
        switch (url) {
            case "index":
                path= "pages/shop/index";
                break;
            case "car":
                path ="pages/buy/index";
                break;
            case "mine":
                path = "pages/mine/index";
                break;
        }
        wx.navigateToMiniProgram({
            appId: 'wx855f9297017d54df',
            path: path,
            extarData: {},
            envVersion: 'release',
            success(res) {
                console.log(res)
            }

        })
    }
};