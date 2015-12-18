var motionEffect = {

    alpha: 0,
    beta: 0,
    gamma: 0,
    normalise: false,
    callback: null,

    handler: function(e) {
        var rotation = e.rotationRate;

        motionEffect.alpha += (rotation.alpha / 60);
        motionEffect.beta += (rotation.beta / 60);
        motionEffect.gamma += (rotation.gamma / 60);

        if (motionEffect.normalise) {
            motionEffect.alpha *= 0.997;
            motionEffect.beta *= 0.997;
            motionEffect.gamma *= 0.997;
        }

        if (motionEffect.callback) {
            motionEffect.callback();
        }

    },

    init: function() {
        if (window.DeviceMotionEvent) {
            window.addEventListener("devicemotion", motionEffect.handler, false);
        } else {
            console.log("motionEffect: Device Motion API is not supported");
            return false;
        }
    }

}
