var motionEffect = {

    alpha: 0,
    beta: 0,
    gamma: 0,
    normalise: false,
    callback: null,

    handler: function(e) {
        var rotation = e.rotationRate;

        motionEffect.alpha += rotation.alpha;
        motionEffect.beta += rotation.beta;
        motionEffect.gamma += rotation.gamma;

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
