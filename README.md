# Fable Flow
Audio player dedicated to read local audiobooks.

* When you may not have any network to stream your audiobook
* When you have a digital copy on your device
* When you are tired of classic media player mainly designed for songs (thus short audio files) or filled with ads

Here come Fable Flow!

![Fable Flow logo](https://raw.githubusercontent.com/Keiwen/fable-flow/master/src/assets/img/logo.png)

This application will ask you to choose a directory on your device
that will be read (**no write action**).

>## Important compatibility note
> Fable Flow require, as first step, to select a directory from the user's device
>
> Currently, **no mobile browser** supports this requirement.
>At this date (2024-12-12), 
> only Chrome 132 is known to potentially support it, 
> with a release date planed on 2025-01-08.
>
> Regarding PC browser, Fable Flow should be compatible with
> Chrome, Edge and Opera.
> The requirement is not supported by Firefox or Safari.
>
> You can refer to
> [showDirectoryPicker browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker#browser_compatibility)
> for more details

## Usage
### Setup
This is a Progressive Web App (PWA). If you are not familiar with this,
it is a web application that could act as a device application on
Android.

Simply open the [application link](https://keiwen.github.io/fable-flow/), your device should offer you to
'add to home screen' or 'install'.

### In-app
Choose your main directory as library.
The application will crawl files in this directory.

You can then choose an author, a book, and play any chapter!

## Library architecture
It will be required to follow a specific architecture in this directory:
a folder per author, each containing a folder per book,
each containing an audio file per chapter. For example:
* Author 1 name
  * Book A name
    * Chapter 1 name
    * Chapter 2 name
    * ...
  * Book B name
  * ...
* Author 2 name
* ...

Currently, the application supports these file extensions: MP3.

## Technical notes
This application cover a real need of real people,
but it is also a first experiment in VueJS 3 framework.
If you are a senior Node/VueJS developer, be kind,
I promise I tried to make it clean ;)

## Samples
![Chapter play screenshot](https://raw.githubusercontent.com/Keiwen/fable-flow/master/samples/play.png)
