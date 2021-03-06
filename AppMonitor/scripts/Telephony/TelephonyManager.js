Java.perform(function() {
    var cn = "android.telephony.TelephonyManager";
    var telephonyManager = Java.use(cn);
    if (telephonyManager) {
        //hook getSubscriberId
        telephonyManager.getSubscriberId.overload().implementation = function() {
            send("call " + cn + "->getSubscriberId");
            return this.getSubscriberId.overload().apply(this, arguments);
        };
        //hook getDeviceId
        telephonyManager.getDeviceId.overload().implementation = function() {
            send("call " + cn + "->getDeviceId");
            return this.getDeviceId.overload().apply(this, arguments);
        };
    }
});