"server only"

export default async function getUserLocation(latitude: number, longitude: number) {
    try {
        const response = await fetch(
            `http://api.geonames.org/findNearestAddressJSON?lat=${latitude}&lng=${longitude}&username=irly.dev`,
            {
                next: { revalidate: 3600 }
            }
        );

        if (!response.ok) {
            console.error('Geonames API error:', response.status);
            return null;
        }

        const data = await response.json();
        return data.address || null;
    } catch (error) {
        console.error('Error fetching location:', error);
        return null;
    }
}
