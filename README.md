# js-motioneffect
Replicate UIMotionEffect behaviour for the web

## About
UIMotionEffect is an iOS API that was introduced in iOS 7 for applying device motion to views. So for example, you can create a parallax effect by moving multiple elements at once each with different speeds.

That API being exclusive to iOS, I wanted to replicate this behaviour for use on web apps so you can use this across different OSes.

Essentially, this code will let you make stuff like this. Provided that the device you're using has an accelerometer and a gyroscope built in, of course.

![alt tag](http://static.ashfurrow.com/teehanlax/motionEffects.gif)

## How it works
This uses the DeviceMotionEvent API in HTML5, specifically the rotation rate. The code constantly adds the values to provide the final result.

The values do not suffer problems such as Gimbal Lock when compared to using values based between the device coordinate frame and the Earth coordinate frame.

The 'normalise' boolean in the code allows the values to return back to 0 over a period of time when the device is not moving. Setting this to 'true' enables this and 'false' does not.

## Browser support
Different browser engines and devices will use those values differently despite the W3C specification standards, so be sure to test the devices you're using and alter the code based on the device.

At this point in time, I've only tested this on iPad Air 2 / iPad Pro running iOS 9.2.

## Upcoming features

* Restrict the values from between -1 to 1 as opposed to an arbitary value similar to the minimumRelativeValue property in iOS.
* Normalise the values based on the type of device (e.g. Microsoft Surface).
* Cleaner and optimised code
