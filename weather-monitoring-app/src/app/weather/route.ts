import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    console.log(`Received request for lat: ${lat}, lon: ${lon}`);

    if (!lat || !lon) {
      console.log('Missing latitude or longitude');
      return NextResponse.json({ error: 'Missing latitude or longitude' }, { status: 400 });
    }

    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
      console.error('WEATHER_API_KEY is not set');
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=yes`;

    console.log(`Fetching data from: ${apiUrl}`);

    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error(`Weather API responded with status: ${response.status}`);
      throw new Error(`Weather API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Successfully fetched weather data');
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
}