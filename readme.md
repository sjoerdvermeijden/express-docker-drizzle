## Setup the Postgres database

Run the following docker commands to setup the postgres database.

```bash
docker composer up
docker container ls
docker inspect KEY
```
## Start the express server

Run the following docker commands to start the express server.

```bash
docker build . -t="docker-express-drizzle"
docker run -p 4050:5000 docker-express-drizzle
```

You can now access the api on https://localhost:4050