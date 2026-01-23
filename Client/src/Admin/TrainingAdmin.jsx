import React, { useState } from "react";
import { trainingsData } from "../data/trainingsData";
import Add_Training from "./Add_Training";
import Training_List from "./Training_List";

const TrainingAdmin = () => {
  const [trainings, setTrainings] = useState(trainingsData);

  const addTraining = (newTraining) => {
    setTrainings([...trainings, newTraining]);
  };

  const deleteTraining = (index) => {
    const updated = trainings.filter((_, i) => i !== index);
    setTrainings(updated);
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-700 mb-10">
          Training Admin Panel
        </h1>

        {/* Add Training */}
        <Add_Training addTraining={addTraining} />

        {/* Training List */}
        <Training_List trainings={trainings} deleteTraining={deleteTraining} />

      </div>
    </section>
  );
};

export default TrainingAdmin;
