import { useState } from "react";
import TableHeader from "./components/tableHeader/TableHeader";
import TableRow from "./components/tableRow/TableRow";
import Pagination from "./components/pagination/Pagination";
// Import the hook
import { useUsers } from "./hooks/useUsers";

const App = () => {
  const [activePage, setActivePage] = useState(1);

  // React Query takes care of calling
  // userUsers hook when App.js is rendered.
  const usersList = useUsers(activePage);

  return (
    <>
      <TableHeader />
      {/* map through users list */}
      {usersList.data &&
        usersList.data.map((user) => <TableRow key={user.id} user={user} />)}
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        pages={2}
      />
    </>
  );
};

export default App;
