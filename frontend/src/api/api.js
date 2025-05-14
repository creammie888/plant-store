
export const getPlants = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/plants/`);
    const data = await response.json();
    return data;
  };
  