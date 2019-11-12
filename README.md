# Comparer

## Deploying

The deploying currently is disgusting and dangerous. Will fix later.

Bundle the app using: `npm scripts build`.

What I have done locally is to `git init` in my build folder, and add a heroku remote.
Then add an `index.php` with the following content:
```
<?php header( 'Location: /index.html' ) ;  ?>
```

Then do a `git push heroku master`. I even did `git push -u heroku master` so *if you push
from the build folder you are deploying.*

If you get an error about nodejs buildpacks and package.json, don't listen to it, heroku thinks you 
are deploying a node app, but this is a php app, so just clean the current buildpack: `heroku buildpacks:clear` and
then `heroku buildpacks:add heroku/php`. 
