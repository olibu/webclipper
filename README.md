# Web Clipper

App to install a Web Clip locally onto an iOS device.

This is useful to have the look and feel of an app for an ordenary URL. The page
is shown in fullscreen without any address bar and in it's own window. So, you
can use it as any other app on your iOS device.

# Usage

Note: Currently you have to build the app on your own. But I plan to provide it
as PWA from my github page.

Open the page in Safari and provide
* Label: Name of the app on your homescreen
* Id: Unique Id of the app (web clips with the same id will be replaced)
* Url: URL to be opened by the Web Clip
* Image: Image to be used for the Web Clip on your homescreen

Then you can "generate" you web clip. It will be automatically be loaded.
After the installation of the Profile in "settings" of you device you
will see an app icon on your homescreen.

# Todo:

* Sizecheck for images
* PWA
* Storage if Web Clips for later changes

# Releases

## 0.9.0

* initial version
  
# Credits

Example to locally load an image.

https://gist.github.com/bradgorman/4247000

Example how to download a local file to iOS.

https://github.com/szimek/sharedrop

## License

Agenda is licensed under the [MIT License](https://tldrlegal.com/l/mit)