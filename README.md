This application was created as a test to ensure that a client was able to use a VPN system that we built.
It is really simple and its value is more related to the things it allowed me to do, rather than what it can do.

To run this application locally, simply run "yarn dev"

To publish it and run it in a container, do:
- yarn build
- docker build -t bellerophon:v1 -f Dockerfile .

This builds the image and lets you start it with "docker run" and the appropriate parameters.