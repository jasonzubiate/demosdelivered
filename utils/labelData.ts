export async function fetchLabelData() {
  try {
    const response = await fetch("../json/database.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.labels;
  } catch (error) {
    console.error("Error fetching label data:", error);
    return [];
  }
}
