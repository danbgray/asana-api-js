asana-api-js
============

A simple wrapper around the asana api, written for javascript.
This library has only been tested with Meteor - it will likely need some modifications to work with other javascript frameworks (mostly just adding the right includes)

Usage
-----

If you are using meteor,

* Check this out to a new directory in 'lib/' (meteor loads this directory first)
* Update api.js to include your asana api token 
      (click on (your name), go to "Account Settings", and click "API Token")

The 2 functions that are defined here are the only ones that I needed for my project,
please feel free to extend it, or if you make a request - I can add new functions to it :)

*Currently the two functions are the only ones defined*

    asana_api_get_projects:  Gets a list of the projects in a workspace.
    asana_api_get_tasks_for_project:  Gets the full list of tasks for that workspace.

