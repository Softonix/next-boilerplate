import { Poppins } from 'next/font/google'

// 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
export const defaultAppFont = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--app-font',
})

export const searchTemplates = {
  mySearch: {
    title: 'Start My Search',
    subtitle: 'Guide me through finding the perfect ride.',
    prompts: [
      'What are the most reliable used cars under $10,000?',
      'Which used cars have the best fuel economy?',
      'What are the top-rated used SUVs for families?',
      'Which are the best used cars for college students?',
      'What are the most reliable used trucks for towing?',
      'Which used luxury cars offer the best value for money?',
      'What are the safest used cars for new drivers?',
      'Which used cars have the best resale value?',
      'What are the best used electric cars on the market?',
      'What are the best used hybrid cars available?',
      'Which used cars have the lowest maintenance costs?',
      'What are the best used cars for winter driving?',
      'Which used cars have the best safety ratings?',
      'What are the best used convertibles for summer?',
      'What are the best used cars for commuting long distances?',
      'Which used SUVs are best for off-roading?',
      'What are the best used cars with advanced safety features?',
      'What are the best used cars for city driving?',
      'What are the most affordable used sports cars?',
      'Which used cars have the best technology features?',
    ],
  },
  myChosenCar: {
    title: 'Set on a Make and Model',
    subtitle: 'Fetch the top offers for my chosen car.',
    prompts: [
      'Find me used Honda Civic',
      'Show me used Toyota Corolla 2022 models in red.',
      'Find me used Audi A4s with less than 30K miles, heated seats, and premium audio system.',
      'Show me used BMW 3 Series sedans with all-wheel drive.',
      'Find used Ford F-150 trucks with a crew cab and navigation system.',
      'Show me used Tesla Model 3 with autopilot and under 50K miles.',
      'Find used Subaru Outback with less than 100K miles and leather seats.',
      'Show me used Jeep Wranglers with off-road packages.',
      'Find used Mercedes-Benz C-Class with AMG package.',
      'Show me used Lexus RX 350 with under 60K miles and a sunroof.',
      'Find used Chevrolet Tahoe with third-row seating.',
      'Show me used Nissan Altima with low mileage and a backup camera.',
      "Find used Toyota Highlander with captain's chairs.",
      'Show me used Mazda CX-5 with a turbo engine.',
      'Find used Dodge Charger with a V8 engine.',
      'Show me used Hyundai Sonata with hybrid powertrain.',
      'Find used Acura MDX with SH-AWD.',
      'Show me used Volkswagen Golf GTI with manual transmission.',
      'Find used Kia Sorento with panoramic sunroof.',
      'Show me used Chrysler Pacifica with a rear entertainment system.',
    ],
  },
}

export const GEO_COOKIE_KEYS = {
  GEO_LOCATION_LAT: 'cs-geo-location-lat',
  GEO_LOCATION_LONG: 'cs-geo-location-long',
  ZIP_CODE: 'cs-geo-location-zip-code',
}

export const paymentPlans = {
  Free: {
    name: 'Free',
    price: 0,
    options: ['Up to 50 searches per day', 'Send a message for up to 3 cars', 'Ad-supported'],
  },
  Plus: {
    name: 'Plus',
    price: 10,
    options: ['Up to 50 searches per day', 'Send a message for UNLIMITED cars', 'NO-Ads', 'Auto-renews every month'],
  },
}
