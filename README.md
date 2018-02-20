
## Running the project
Follow these steps to get the project running on your local machine
```
git clone https://github.com/hamzanaveedmalik/support-wheel-of-fate
cd support-wheel-of-fate
npm install
npm run dev-start // starts the app

```
## Set up the database
1) create a database called `swofdb`

2) create a config-test.env file and put the following key in there

```
export DATABASE_URL='postgres://yourusername:@localhost:5432/support-wheel-of-fate'
```

3) build the database
```
npm run build-local-db
```
