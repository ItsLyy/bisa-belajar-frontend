"server only"

export default async function getUserLocation(latitude: number, longitude: number) {
    const data = await fetch(`http://api.geonames.org/findNearbyStreetsJSON?lat=${latitude}&lng=${longitude}&username=demo`)
    const dataJson = await data.json();
    console.log(dataJson)

    return dataJson;
}
