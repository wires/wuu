# Wait Until Up

Install `npm i -g wuu`

Then you can use this in scripts, like so

```BASH
# /bin/bash
wuu --port 5672 --host rabbitmq --timeout 60 --retry 2
wuu --port 5432 --host postgres --timeout 60 --retry 2

# ok rabbit and postgres running
node ./server.js
```
