import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertDialog, AlertDialogContent, AlertDialogHeader } from '@/components/ui/alert';

const PharmacokineticsSimulation = () => {
  // Sample compound properties
  const [initialDose, setInitialDose] = useState(100); // mg
  const [absorptionRate, setAbsorptionRate] = useState(0.5); // per hour
  const [distributionVolume, setDistributionVolume] = useState(20); // liters
  const [eliminationRate, setEliminationRate] = useState(0.1); // per hour
  const [bioavailability, setBioavailability] = useState(0.8);
  const [isOpen, setIsOpen] = useState(false);

  // Simulate the compound's concentration over time
  const simulationData = useMemo(() => {
    let currentTime = 0;
    let cumulativeAbsorption = 0;
    let currentConcentration = 0;
    const data = [];

    while (currentTime <= 24) {
      // Calculate concentration using cumulative absorption and elimination
      const absorption = initialDose * bioavailability * absorptionRate * Math.exp(-absorptionRate * currentTime);
      cumulativeAbsorption += absorption;
      const elimination = currentConcentration * eliminationRate;
      currentConcentration = (cumulativeAbsorption - elimination) / distributionVolume;

      data.push({ time: currentTime, concentration: currentConcentration });

      currentTime += 0.25; // 15-minute intervals
    }

    return data;
  }, [initialDose, absorptionRate, distributionVolume, eliminationRate, bioavailability]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Pharmacokinetics Simulation</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={simulationData}>
          <XAxis dataKey="time" label={{ value: 'Time (hours)', position: 'bottom' }} />
          <YAxis label={{ value: 'Concentration (mg/L)', angle: -90, position: 'left' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="concentration" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Show Parameters
        </button>
        <AlertDialog isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
          <AlertDialogContent>
            <AlertDialogHeader>Pharmacokinetics Simulation</AlertDialogHeader>
            <div className="space-y-4">
              <p>
                This simulation demonstrates how the concentration of a compound changes over time as it moves through the body. Adjust the pharmacokinetic parameters below to see the impact on the concentration plot.
              </p>
              <div>
                <label htmlFor="initialDose" className="block font-medium mb-1">Initial Dose (mg):</label>
                <input
                  id="initialDose"
                  type="number"
                  value={initialDose}
                  onChange={(e) => setInitialDose(Number(e.target.value))}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="absorptionRate" className="block font-medium mb-1">Absorption Rate (per hour):</label>
                <input
                  id="absorptionRate"
                  type="number"
                  value={absorptionRate}
                  onChange={(e) => setAbsorptionRate(Number(e.target.value))}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="distributionVolume" className="block font-medium mb-1">Distribution Volume (liters):</label>
                <input
                  id="distributionVolume"
                  type="number"
                  value={distributionVolume}
                  onChange={(e) => setDistributionVolume(Number(e.target.value))}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="eliminationRate" className="block font-medium mb-1">Elimination Rate (per hour):</label>
                <input
                  id="eliminationRate"
                  type="number"
                  value={eliminationRate}
                  onChange={(e) => setEliminationRate(Number(e.target.value))}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="bioavailability" className="block font-medium mb-1">Bioavailability:</label>
                <input
                  id="bioavailability"
                  type="number"
                  value={bioavailability}
                  onChange={(e) => setBioavailability(Number(e.target.value))}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default PharmacokineticsSimulation;
