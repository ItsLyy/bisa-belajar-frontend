"use server";

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

// Accept a swap request
export async function acceptSwap(swapId: number) {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    if (!accessToken) {
      throw new Error('Authentication required');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/swaps/${swapId}/accept`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to accept swap: ${response.status}`);
    }

    const result = await response.json();

    // Revalidate related pages
    revalidatePath(`/swaps/${swapId}`);
    revalidatePath('/'); // Home page might show swap status

    return {
      success: true,
      data: result,
      message: 'Swap request accepted successfully!',
    };

  } catch (error) {
    console.error('Error accepting swap:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to accept swap request. Please try again.',
    };
  }
}

// Decline a swap request
export async function declineSwap(swapId: number) {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    if (!accessToken) {
      throw new Error('Authentication required');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/swaps/${swapId}/decline`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to decline swap: ${response.status}`);
    }

    const result = await response.json();

    // Revalidate related pages
    revalidatePath(`/swaps/${swapId}`);
    revalidatePath('/'); // Home page might show swap status

    return {
      success: true,
      data: result,
      message: 'Swap request declined.',
    };

  } catch (error) {
    console.error('Error declining swap:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to decline swap request. Please try again.',
    };
  }
}

// Complete a swap (mark as finished)
export async function completeSwap(swapId: number) {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    if (!accessToken) {
      throw new Error('Authentication required');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/swaps/${swapId}/complete`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to complete swap: ${response.status}`);
    }

    const result = await response.json();

    // Revalidate related pages
    revalidatePath(`/swaps/${swapId}`);
    revalidatePath('/'); // Home page might show swap status

    return {
      success: true,
      data: result,
      message: 'Swap marked as completed!',
    };

  } catch (error) {
    console.error('Error completing swap:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to complete swap. Please try again.',
    };
  }
}

// Cancel a swap request (only by the requester)
export async function cancelSwap(swapId: number) {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    if (!accessToken) {
      throw new Error('Authentication required');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/swaps/${swapId}/cancel`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to cancel swap: ${response.status}`);
    }

    const result = await response.json();

    // Revalidate related pages
    revalidatePath(`/swaps/${swapId}`);
    revalidatePath('/'); // Home page might show swap status

    return {
      success: true,
      data: result,
      message: 'Swap request cancelled.',
    };

  } catch (error) {
    console.error('Error cancelling swap:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to cancel swap request. Please try again.',
    };
  }
}

// Update swap details (only for pending swaps)
export async function updateSwap(swapId: number, updates: {
  description?: string;
  requester_skill_id?: string;
  requested_skill_id?: string;
}) {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    if (!accessToken) {
      throw new Error('Authentication required');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/swaps/${swapId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updates),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to update swap: ${response.status}`);
    }

    const result = await response.json();

    // Revalidate related pages
    revalidatePath(`/swaps/${swapId}`);

    return {
      success: true,
      data: result,
      message: 'Swap updated successfully!',
    };

  } catch (error) {
    console.error('Error updating swap:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to update swap. Please try again.',
    };
  }
}

// Get swap details (for refreshing data)
export async function getSwapDetails(swapId: number) {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    if (!accessToken) {
      throw new Error('Authentication required');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/swaps/${swapId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to fetch swap details: ${response.status}`);
    }

    const result = await response.json();

    return {
      success: true,
      data: result,
    };

  } catch (error) {
    console.error('Error fetching swap details:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to load swap details.',
    };
  }
}