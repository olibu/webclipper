# Web Clipper

App to install a Web Clip locally onto an iOS device.

This is useful to have the look and feel of an app for an ordenary URL. The page
is shown in fullscreen without any address bar and in it's own window. So, you
can use it as any other app on your iOS device.

# Usage

You can start the application from my [github homepage](https://olibu.github.io/wcg/).
In case you want to be able to use the app offline, you can click on "Add to home screen"
in Safari.

Open the page in Safari and provide
* Label: Name of the app on your homescreen
* Id: Unique Id of the app (web clips with the same id will be replaced)
* Url: URL to be opened by the Web Clip
* Image: Image to be used for the Web Clip on your homescreen (open from your fotos or paste it from clipboard)

Then you can "generate" you web clip. It will be automatically be loaded.
After the installation of the Profile in "settings" of you device you
will see an app icon on your homescreen.

![Demo](WebClipper.gif)

# Todo:

* Sizecheck for images
* Storage of Web Clips for later changes

# Releases

## 1.1.0

* Do not check for http in URL to enable local web hooks
* Manifest and precomposed parameter added

## 1.0.0

* PWA functionality added
* Icon added

## 0.9.0

* initial version
  
# Credits

Example to locally load an image (Thx to bradgorman).

https://gist.github.com/bradgorman/4247000

Example how to download a local file to iOS (Thx to Szymon Nowak).

https://github.com/szimek/sharedrop

Example how to use the clipboard on iOS (thx to Emanuel).
https://stackoverflow.com/questions/490908/paste-an-image-from-clipboard-using-javascript

## License

WebClipper is licensed under the [MIT License](https://tldrlegal.com/l/mit)