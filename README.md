# Interactive Avatar

A Next.js application demonstrating real-time interactive avatars with text and voice chat, powered by the HeyGen Streaming Avatar SDK.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Code Flow & File Linking](#code-flow--file-linking)
- [Setup & Usage](#setup--usage)
- [API Services](#api-services)
- [Customization](#customization)
- [License](#license)

---

## Project Overview

This project enables users to interact with AI-powered avatars via text and voice chat. It leverages the HeyGen Streaming Avatar SDK for avatar sessions, message streaming, and voice features. The UI is built with React and Next.js, styled with Tailwind CSS.

---

## Features

- Start and manage avatar sessions (text/voice)
- Real-time message history
- Voice chat with mute/unmute controls
- Avatar configuration (quality, voice, language, etc.)
- Connection quality monitoring
- Session management (start, stop, terminate)
- Customizable avatars and voices

---

## Dependencies

Main dependencies (from `package.json`):

- `@heygen/streaming-avatar`: Avatar SDK for streaming, events, and session management
- `next`, `react`, `react-dom`: Core Next.js and React libraries
- `ahooks`: React hooks utility library
- `@radix-ui/react-select`, `@radix-ui/react-toggle-group`: UI primitives for select and toggle controls
- `livekit-client`: (optional) for real-time media streaming
- `tailwindcss`, `postcss`, `eslint`, `typescript`: Development, linting, and styling tools

---

## Project Structure

```
src/
  app/
    api/                # API routes (Next.js API)
    lib/
      constants.ts      # Avatar and language constants
    logic/
      context.tsx       # React context for avatar session state
      index.ts          # Exports hooks and context
      useStreamingAvatarSession.ts # Main session hook
      useVoiceChat.ts   # Voice chat hook
      useTextChat.ts    # Text chat hook
      useMessageHistory.ts # Message history hook
      useConnectionQuality.ts # Connection quality hook
      useInterrupt.ts   # Interrupt hook
      useConversationState.ts # Conversation state hook
    favicon.ico, globals.css, layout.tsx, page.tsx
  components/
    Button.tsx          # Reusable button component
    Icons.tsx           # SVG icon components
    Input.tsx           # Input field component
    Select.tsx          # Select dropdown component
    InteractiveAvatar.tsx # Main avatar UI component
    AvatarConfig/
      Field.tsx         # Labeled field for config UI
      index.tsx         # Avatar configuration form
    AvatarSession/
      AudioInput.tsx    # Voice chat mute/unmute button
      AvatarControl.tsx # Controls for session (voice/text toggle, interrupt)
      AvatarVideo.tsx   # Video display for avatar
      MessageHistory.tsx # Chat/message history display
      TextInput.tsx     # Text chat input
  services/
    index.ts            # API service functions (fetch, session, etc.)
public/
  *.svg                 # Static assets
```

---

## Code Flow & File Linking

### 1. Entry Point

- `src/components/InteractiveAvatar.tsx`  
  Main UI component. Handles session start/stop, configuration, and renders avatar video, controls, and message history.

### 2. State Management

- `src/app/logic/context.tsx`  
  Provides a React context (`StreamingAvatarContext`) for session state, voice chat, messages, connection quality, etc.  
  The `StreamingAvatarProvider` wraps the main component to provide context.

- `src/app/logic/index.ts`  
  Exports all hooks and context for easy imports.

### 3. Hooks

- `useStreamingAvatarSession.ts`  
  Manages avatar session lifecycle, initialization, and event handling.

- `useVoiceChat.ts`  
  Controls voice chat (start, stop, mute/unmute).

- `useTextChat.ts`  
  Handles sending text messages to the avatar.

- `useMessageHistory.ts`  
  Tracks and provides message history for display.

- `useConnectionQuality.ts`  
  Monitors and provides connection quality status.

- `useInterrupt.ts`  
  Allows user to interrupt avatar speech.

- `useConversationState.ts`  
  Tracks listening/talking state for both user and avatar.

### 4. UI Components

- `AvatarConfig/index.tsx`  
  Form for configuring avatar session (quality, voice, language, etc.), using constants from `lib/constants.ts`.

- `AvatarSession/AvatarVideo.tsx`  
  Displays avatar video stream and connection quality.

- `AvatarSession/AvatarControl.tsx`  
  UI for toggling between voice/text chat, interrupting, and input controls.

- `AvatarSession/AudioInput.tsx`  
  Mute/unmute button for voice chat.

- `AvatarSession/MessageHistory.tsx`  
  Scrollable chat history display.

- `AvatarSession/TextInput.tsx`  
  Input field for sending text messages.

- `Button.tsx`, `Icons.tsx`, `Input.tsx`, `Select.tsx`  
  Reusable UI primitives.

### 5. API Services

- `services/index.ts`  
  Contains functions for:
  - Fetching access tokens (`fetchAccessToken`)
  - Starting avatar sessions (`avatarRequest`)
  - Listing active sessions (`getActiveSessionsList`)
  - Terminating sessions (`terminateCurrentSession`)
  - Sending text to avatar (`streamingText`)
  - Creating session tokens (`createSessionToken`)

### 6. Constants

- `lib/constants.ts`  
  Lists available avatars and supported languages for configuration.

---

## Setup & Usage

1. **Install dependencies:**

   ```bash
   npm install
   # or yarn/pnpm/bun
   ```

2. **Configure API keys:**  
   Add your HeyGen API key to `.env` as `NEXT_PUBLIC_API_KEY`.

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open the app:**  
   Visit [http://localhost:3000](http://localhost:3000).

5. **Start a session:**  
   Use the UI to configure and start a text or voice chat session with an avatar.

---

## Customization

- **Add/modify avatars:**  
  Edit `src/app/lib/constants.ts` to add new avatar IDs and names.

- **Change UI:**  
  Modify components in `src/components/` for custom styles or layouts.

- **Extend API:**  
  Add new service functions in `src/services/index.ts` for additional backend integration.

---

## License

MIT License

---

This README provides a comprehensive overview of the codebase, file relationships, and code flow.  
You can further expand sections for more technical details or usage examples as needed.
