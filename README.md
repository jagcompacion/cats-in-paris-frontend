# Cats in Paris - Frontend Coding Challenge

## The Challenge

Your task is to build a very simple React Native mobile app that displays random cat images with captions from the "Cats in Paris" API. The app should allow users to view a cat image with its corresponding caption and fetch a new random cat with a button press.

## Requirements

1. Fetch cat data from the API endpoint: `http://localhost:3000/api/v1/cat`
2. Display the cat image and its caption
3. Include a button to fetch a new random cat
4. Handle loading states while the image is being fetched
5. Handle and display any potential errors
6. Style the app to be visually appealing
7. Only `npm run web` needs to show a working app (don't worry about native builds for this)

## API Details

### Get Random Cat

```http
GET /api/v1/cat
```

**Response:**
```json
{
    "image": "https://example.com/image.jpg",
    "caption": "A fluffy tabby cat sitting on a Parisian balcony"
}
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run web
   ```

## Tech Stack

- React Native
- Expo
- TypeScript
- Tailwind CSS with NativeWind for styling

## Styling with Tailwind CSS

This project uses Tailwind CSS with NativeWind for styling. You can use Tailwind's utility classes directly in your components.

Example:
```tsx
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export function MyComponent() {
  return (
    <StyledView className="flex-1 bg-gray-100 p-4">
      <StyledText className="text-xl font-bold text-gray-900">
        Hello, Tailwind!
      </StyledText>
    </StyledView>
  );
}
```

For more information, check out the [NativeWind documentation](https://www.nativewind.dev/).

## Evaluation Criteria

- Only `npm run web` needs to show a working app (don't worry about native builds for this)
- Functionality: Does the app work as expected?
- Code Quality: Is the code clean, well-structured, and maintainable?
- Error Handling: Are edge cases and errors properly handled?
- UI/UX: Is the interface user-friendly and visually appealing?
- Performance: Is the app performant with proper loading states?

## Submission

Please submit your solution as a .zip file oro similar, and send to john@imaginationlabs.cloud

Good luck! 😺
