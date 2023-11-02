import { useQuery } from "react-query";
import ky from "ky";

// Accept activePage as a parameter from App.js
export const useUsers = (activePage: number) => {
  return useQuery(
    // Add activePage as a dependency
    ["users", activePage],
    () => fetchUsers(activePage),
    // This tells React-Query that this is Query is part of
    // a paginated component
    { keepPreviousData: true }
  );
};

async function fetchUsers(activePage: number) {
  const { data } = await ky
    .get(
      // Change page number to the activePage param received
      `https://reqres.in/api/users?page=${activePage}`
    )
    .json<{ data: User[] }>();

  return data;
}