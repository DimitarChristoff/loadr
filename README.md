# loadr

[![Dependency Status](https://david-dm.org/DimitarChristoff/loadr.svg)](https://david-dm.org/DimitarChristoff/loadr)

Not just another spinner: keep your visitors amused while your app is loading something. Over 200 random messages to show!

[![Example](https://rawgit.com/DimitarChristoff/loadr/master/example/loadr.gif)](http://jsfiddle.net/dimitar/kvxyc1bg/)

[See example in JSfiddle](http://jsfiddle.net/dimitar/kvxyc1bg/)

It can auto rotate messages given an element or just return random messages.

Works under ES6 or ES5, browser or nodejs -- no external dependencies.

## usage

```sh
$ npm i randloadr --save
```

Via ES2015+

```js
import Loadr from 'randloadr'; // or require('randloadr')

const instance = new Loadr(document.querySelector('.loader'));
instance.start();
instance.stop();
```

In ES5 from global object

```javascript
var instance = new Loadr(document.querySelector('.loader'));

instance.start();
// ...
instance.stop();
```

Change some options

```javascript
const instance = new Loadr(document.querySelector('.loader', {
	delay: 2000,
	before: '<i class="fa fa-spin fa-pulse" /> '
});
```

Just get random excuse messages

```javascript
const instance = new Loadr();
console.log(instance.get());
```

## installing

You can also install via bower or download the script.

```
$ bower install loadr
```

`src/loadr.js` is ES6 raw, `dist/loadr.min.js` is the minified ES5 version.

## credits

Messages taken from VideoStream for Chromecast plugin for Chrome, who probably took them from a pastebin I have found. No idea, thanks to whoever wrote them.

## messages

Full list (also available via `instance.messages`):

> - Reticulating Splines
> - Gathering Goblins
> - Lifting Weights
> - Pushing Pixels
> - Formulating Plan
> - Taking Break
> - Herding Ducks
> - Feeding Developers
> - Fishing for Change
> - Searching for Dancers
> - Waking Up Gnomes
> - Playing Chess
> - Building Igloos
> - Converting Celsius
> - Scanning Power Level
> - Delivering Presents
> - Finding Dragon Balls
> - Firing Lasers
> - Party Rocking
> - Walking up to the club
> - Righting wrongs
> - Building Lego
> - Assembling Avengers
> - Turning Down for What
> - Reaching 88mph
> - Pondering Existence
> - Battling Robots
> - Smashing Pots
> - Stomping Goombas
> - Doing Donuts
> - Entering Danger Zone
> - Talking to Mom
> - Chasing Squirrels
> - Setting Phasers to Stun
> - Doing Macarena
> - Dropping Bass
> - Removing Biebers
> - Performing Magic
> - Autotuning Kanye
> - Waxing Legs
> - Invading Space
> - Levelling Up
> - Generating Map
> - Conquering France
> - Piloting Tardis
> - Destroying Deathstar
> - Typing Letters
> - Making Code
> - Running Marathon
> - Shooting Pucks
> - Kicking Field Goals
> - Fighting Bad Guys
> - Driving Batmobile
> - Warming Up Kryptonite
> - Popping Popcorn
> - Creating Hashes
> - Spawning Boss
> - Evaluating Life Choices
> - Eating Ramen
> - Re-heating Leftovers
> - Petting Kittens
> - Walking Puppies
> - Catching Z’s
> - Jumping Rope
> - Declaring Variables
> - Yessing Doge
> - Recycling Memes
> - Tipping Fedora
> - Walking Runway
> - Counting to Ten
> - Booting Native Client
> - Launching App
> - Drawing Icons
> - Reading Instructions
> - Finding Screws
> - Completing Puzzles
> - Generating Volume Slider
> - Brightening Orange
> - Ordering Pizza
> - You Look Good Today
> - Clearing Screen
> - Stirring Pot
> - Mashing Potatoes
> - Banishing Evil
> - Taking Selfies
> - Accelerating Disks
> - Benching Network
> - Rocking Out
> - Grinding Mage
> - Studying Calculus
> - Playing N64
> - Racing GoKarts
> - Defeating Creepers
> - Blowing Game Cartridge
> - Choosing Pikachu
> - Postponing Half Life 3
> - Rushing Zergs
> - Rescuing Hostages
> - Typing Konami Code
> - Building Snowman
> - Letting it Snow
> - Burning HDMI Cords
> - Applying Filters
> - Taking Screenshot
> - Shaving Mustache
> - Growing Beard
> - Baking Muffins
> - Iterating Javascript
> - Attracting Venture Capital
> - Disrupting Industry
> - Tweeting Hashtags
> - Encrypting Lines
> - Obfuscating C
> - Enhancing License Plate
> - Running Diagnostic
> - Warming Hyperdrive
> - Calibrating Positions
> - Calculating Percentages
> - Revoking Licenses
> - Shedding Core
> - Dampening Gravity
> - Increasing Power
> - Checking Sensors
> - Indexing RSS
> - Programming PCI
> - Determining USB Position
> - Connecting to Bus
> - Inverting Ports
> - Bypassing Capacitor
> - Reversing Bandwidth Throttle
> - Testing AI
> - Virtualizing Microchip
> - Emulating Playstation
> - Synthesizing Drivers
> - Structuring Chlorophyll
> - Watering Plants
> - Ingesting Caffeine
> - Chugging Redbull
> - Parsing System
> - Navigating Arrays
> - Searching Google
> - Overflowing Stack
> - Compiling Binaries
> - Answering Emails
> - Migrating CSS
> - Backing Up Primaries
> - Rendering Dialogs
> - Reading RSS
> - Compressing Data
> - Rejecting Cloud
> - Evaluating Weissman Score
> - Purging Local Storage
> - Leaking Memory
> - Scripting Python
> - Grunting Ruby
> - Benching RAM
> - Determining Auxiliaries
> - Jiggling Internet
> - Ejecting Floppy
> - Fluctuating Objects
> - Spiking Reactor Core
> - Firing Bosons
> - Testing Processor
> - Debugging Prompts
> - Connecting Floats
> - Rounding Integers
> - Pronouncing Gigawatt
> - Inverting Transponders
> - Bypassing Silicon
> - Raising Funds
> - Caching Logs
> - Dithering Broadband
> - Eating Poutine
> - Rolling Rims to Win
> - Begging for Change
> - Chasing Waterfalls
> - Pumping Gas
> - Emptying Pipes
> - Hitting Piñata
> - Unleashing Freedom
> - Airbrushing Actors
> - FIling Taxes
> - Powering Mitochondria
> - Calculating Qi charge
> - Completing Geometry
> - Turning in Algebra
> - Solving for X
> - Benching Wattage
> - Kludging Playback Bar
> - Stringifying Json
> - Consuming Spaghetti Code
> - Deleting Comments
> - Transitioning to Django
> - Learning to Code
> - Battling Feature Creep
> - Losing Flappy Bird
> - Celebrating Good Times
> - Sharpening Pencils
> - Automating Processes
> - Attacking Godzilla
> - Carbonating Soda
> - Thinking of Witty Text
