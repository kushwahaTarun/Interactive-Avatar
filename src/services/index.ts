interface AvatarRequestBody {
    [key: string]: string | number | boolean | object | undefined;
}

interface AvatarRequestOptions {
    method: string;
    headers: {
        'Content-Type'?: string;
        'accept'?: string;
        'x-api-key': string;
    };
    body?: string;
}

export async function fetchAccessToken(): Promise<string> {
    try{
        const response = await fetch("/api/get-access-token", {
            method: "POST",
        });

        console.warn("response", response);

        const token = await response.text();

        console.log("Access Token:", token); // Log the token to verify
         return token;
    } catch (error) {
      console.error("Error fetching access token:", error);
      throw error;
    }
        
    }
// }

// service to establic an avatar session
export async function avatarRequest(body: AvatarRequestBody): Promise<void> {
    const api: string = 'https://api.heygen.com/v1/streaming.new';
    const options: AvatarRequestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
        body: JSON.stringify(body),
    }
    const response: Response = await fetch(api, options);
    return response.json();
}

// service to get the list of active avatar sessions
export async function getActiveSessionsList(): Promise<void> {
    const api: string = 'https://api.heygen.com/v1/streaming.list';
    const options: AvatarRequestOptions = {
        method: 'GET',
        headers: {
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
    }

    const response: Response = await fetch(api, options);
    return response.json();
}

// service to terminate an active avatar session
export async function terminateCurrentSession(body: AvatarRequestBody): Promise<void> {
    const api: string = 'https://api.heygen.com/v1/streaming.stop';
    const options: AvatarRequestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
        body: JSON.stringify({
            session_id: body
        }),
    }

    const response: Response = await fetch(api, options);
    return response.json();
}

// service to terminate an active avatar session
export async function streamingText(body: any): Promise<void> {
    const api: string = 'https://api.heygen.com/v1/streaming.task';
    const options: AvatarRequestOptions = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
        body,
    }

    const response: Response = await fetch(api, options);
    return response.json();
}

// Function to generate a new session token
export async function createSessionToken() {
  try {
    const response = await fetch('https://api.heygen.com/v1/streaming.create_token', {
      method: 'POST',
      headers: {
        'x-api-key': 'YOUR_API_KEY_HERE', // Replace with your actual API key
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('New session token:', data.data.token);
      return data.data.token;
    } else {
      console.error('Error creating token:', data);
      return null;
    }
  } catch (error) {
    console.error('Network error:', error);
    return null;
  }
}