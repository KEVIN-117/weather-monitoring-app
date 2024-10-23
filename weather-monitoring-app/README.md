This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Endpoints


- Current time

```bash
curl -X 'GET' \
    'https://api.weatherapi.com/v1/current.json?q=40.624004,-73.954722&alerts=yes&key=<your api key>' \
    -H 'accept: application/json'
```

- Future time

```bash
curl -X 'GET' \
  'https://api.weatherapi.com/v1/future.json?q=40.624004%2C-73.954722&dt=2024-12-25&lang=es&key=<your api key>' \
  -H 'accept: application/json'
```

- Forecast --:> Pronóstico

```bash
curl -X 'GET' \
  'https://api.weatherapi.com/v1/forecast.json?q=40.624004%2C-73.954722&days=14&dt=2024-11-14&alerts=yes&aqi=yes&key=<your api key>' \
  -H 'accept: application/json'

curl -X 'GET' \
    'https://api.weatherapi.com/v1/forecast.json?q=-1.0991%2C127.4181&days=14&alerts=yes&aqi=yes&key=<your api key>' \
    -H 'accept: application/json'

curl -X 'GET' \
  'https://api.weatherapi.com/v1/forecast.json?q=47.1301,-119.2781&days=14&alerts=yes&aqi=yes&hour=24&tp=1&key=<your api key>' \
  -H 'accept: application/json'
```

