"server only"

export default async function getUserLocation(latitude: number, longitude: number) {
    const response = await fetch(`http://api.geonames.org/findNearestAddressJSON?lat=${latitude}&lng=${longitude}8&username=irly.dev`);

    return (await response.json()).address;
}
