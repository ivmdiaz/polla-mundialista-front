## Backend

The backend was made with Google Sheets + Google App Script.


[Link Google Sheets](https://docs.google.com/spreadsheets/d/1lJVUxTT82Qr1z97E__ZPgjpeA5VcKXpHUcMJCpE5lHo/edit?usp=sharing)

[Link Google App Script](https://docs.google.com/spreadsheets/d/15DxuVjkT4LNYgMW-I40I1fi04Hxbj9MLB1VCcG9vzJ8/edit?usp=sharing
)

## Data

1. In the "matches" sheet you put the goals of each match. Please do not change the positions of the rows and columns because the business logic depends on it.

2. In the "matches_players" sheet you put the markers of each player for each match. Please do not change the positions of the rows and columns because the business logic depends on it.


## Deploy ghpages

Run
```
ng build --configuration production --base-href "https://ivmdiaz.github.io/polla-mundialista-front/"
```
```
npx angular-cli-ghpages --dir=dist/polla-mundialista-front
```
When execution is finished, go to [Web application](https://ivmdiaz.github.io/polla-mundialista-front/)
