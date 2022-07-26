import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import CustomPaginationActionsTable from "../components/TableContent";


const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

 
  return (
    <div className="mt-9  bg-gray-200 p-5 grid gap-4 grid-cols-2 grid-rows-0">
      <div className="">
        {/* {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))} */}
        <CustomPaginationActionsTable />
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
