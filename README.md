# SASS GUIDELINES & Project Structure
 Before you write a line of code in styles I highly recommend read this [article](https://sass-guidelin.es/el/)
</br>
 Before you write a line of code in Angular I highly recommend read this [article](https://javascript.plainenglish.io/how-to-structure-angular-apps-in-2021-a0bdd481ad0d) due to understand our project structure 

# Sass Architecture Structure

```
sass/
|
|– base/
|   |– _base-dir.scss    # Include all base files 
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   ...                  # Etc…
|
|– components/
|   |– components-dir.scss    # Include all components files 
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layout/
|   |– layout-dir.scss    # Include all base files 
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– pages-dir.scss    # Include all pages files 
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– sass-utils/
|   |– sass-utils-dir.scss    # Include all sass-utils files
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|
|
`– style.scss            # Primary Sass file
```



### BASE FOLDER

The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet, defining some standard styles for commonly used HTML elements.

### COMPONENTS FOLDER

For smaller components, there is the `components/` folder. While `layout/` is macro (defining the global wireframe), `components/` is more focused on widgets. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. There are usually a lot of files in `components/` since the whole site/application should be mostly composed of tiny modules.

### LAYOUT FOLDER

The `layout/` folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.

### PAGES FOLDER

If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a `_home.scss` file in `pages/`.

### SASS-UTILS FOLDER

The `sass-utils/` folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

### VENDORS FOLDER

And last but not least, most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to say “Hey, this is not from me, not my code, not my responsibility”.

If you have to override a section of any vendor, I recommend you have an 8th folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite.

For instance, `vendors-extensions/_boostrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.

### STYLE FILE

The style file should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Files should be imported according to the folder they live in, one after the other in the following order:

1. `sass-utils/`
2. `vendors/`
3. `base/`
4. `layout/`
5. `components/`
6. `pages/`


# Toast Messages
We implemented the toast messages with [NgPrime Toast](https://www.primefaces.org/primeng/toast).


The main difference between our implementation and NgPrime Toast is that we added some rules and custom styles.



If we want to use our toast service we have to inject it in our constructor and take the decision which one message we want to display.



The total options which we can find is four:



a)success 



b)info



c)warn



d)error




We have to match the severity and key with the same option. For example this.messageService.add({severity:'success', key:"success" , summary:'Monkey ', detail:'You look like a monkey :) '});


# Logging 
It's really important to declare the best practices for logging messages.
In production we can't have messaging with console.log() due to the messaging is disabled. 
As an alternative we use [NGX Logger](https://www.npmjs.com/package/ngx-logger)
To use ngx-logger you have to inject it in constructor as a usuall service and next we use .
An example to be more clearly we inject it in constructor 
>  constructor(private logger: NGXLogger) {}

And in our method we use it like
>  logger.error("My message")


# Media Querys
Created dynamic mode for media queries to reduce Boilerplate code.
As you can see at [Breakpoints](/src/app/shared/styles/sass-utils/_breakpoints.scss)  we added some breakpoints according to the devices used today.
To use this function you must:
1. use "media";  In your scss file
2. In you selector which you want to implement your own functinallity(in our case test class)
```
use "media";
.test {
    @include media.device(sm-screen) {
        border: 30px solid black;
    }
    @include media.device(tablet) {
        border: 30px solid blue;
    }

    @include media.device(mobile) {
        border: 30px solid purple;
    }
}
```
The reason which implemented that functionallity of media querys correspond to the need of configurables devices. 



