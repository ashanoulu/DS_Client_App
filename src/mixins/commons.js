import CryptoJs from 'crypto-js'

export default {
    methods: {
        encryptPassword(message, keyStr) {
            let key = CryptoJs.enc.Base64.parse(keyStr);
            return CryptoJs.AES.encrypt(message, key, {
                mode: CryptoJs.mode.ECB,
                padding: CryptoJs.pad.Pkcs7
            }).toString();
        },

        decodeHtml(html = '') {
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        },
        reArrangeDateValue(value) {
            if (value < 10) {
                return '0' + value
            } else if (value == 0) {
                return '00'
            } else {
                return value
            }
        },

        getMessageType1(){
            return 1;
        },

        getMessageType2(){
            return 2;
        },

        getCountDownDates(){
            let countDownDate = new Date("oct 11, 2020 00:00:00").getTime();
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;
            return Math.floor(distance / (1000 * 60 * 60 * 24));
        }

    }
}