import useFetch from './useFetch';

const useDestinationData = async (cityId: string) => {
  const destinationData = await useFetch("https://api-colombia.com/api/v1/City/" + cityId);
  const attractionsList: Array<{
    name: string;
    image: string;
    location: string;
  }> = [];
  const attractions = await useFetch("https://api-colombia.com/api/v1/TouristicAttraction");
  attractions.map((attraction: any) => {
    if (attraction.cityId == cityId) {
      const name: string = attraction.name;
      const image: string = attraction.images[0];
      const location: string = attraction.city.name;
      const attractionObject = {
        name: name,
        image: image,
        location: location,
      }
      attractionsList.push(attractionObject);
    }
  });
  console.log(attractionsList);
  return {
    destinationData,
    attractionsList
  }
}

export default useDestinationData