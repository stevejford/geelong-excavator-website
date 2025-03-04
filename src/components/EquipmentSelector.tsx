'use client';

import { useState, useEffect } from 'react';

// Define equipment items by category
const equipmentByCategory = {
  'excavators': [
    { value: '1.7t-kubota', label: '1.7t Kubota Excavator' },
    { value: '2.5t-kubota', label: '2.5t Kubota Excavator' },
    { value: '3.5t-kubota', label: '3.5t Kubota Excavator' },
    { value: '5t-kubota', label: '5t Kubota Excavator' },
    { value: '13t-case', label: '13t Case Excavator' },
    { value: 'k008-kubota', label: 'K008 Kubota Excavator' }
  ],
  'skid-steer-loaders': [
    { value: 's70-bobcat', label: 'S70 Bobcat' },
    { value: 'kubota-svl65', label: 'Kubota SVL65 Bobcat Posi' },
    { value: 'cormidi-c60', label: 'Cormidi C60' },
    { value: 'pallet-forks', label: 'Pallet Forks to suit SVL65' }
  ],
  'attachments': [
    { value: 'gummy-bucket', label: 'Gummy Services Bucket 1.7-2.5t (No Teeth)' },
    { value: 'hydraulic-grab', label: 'Hydraulic Grab 12-14t' },
    { value: 'pressure-washer', label: 'Pressure Washer' },
    { value: 'ripper-tyne', label: 'Ripper Tyne 1.7-2.5t' }
  ],
  'compaction-equipment': [
    { value: 'bomag-100', label: 'Bomag 100' },
    { value: 'dpu-mikasa', label: 'DPU Mikasa MVH-308' },
    { value: 'jumping-jack', label: 'Jumping Jack Rammer BS60-4' },
    { value: 'wacker-plate', label: 'Wacker Plate VPH70' }
  ],
  'concrete-equipment': [
    { value: 'stihl-demo-saw', label: '16" Stihl Demo Saw' },
    { value: 'honda-concrete-vibe', label: 'Honda Concrete Vibe' },
    { value: 'trowelling-machine', label: 'Trowelling Machine' }
  ],
  'tipper-trucks': [
    { value: 'car-licence-tipper', label: 'Car Licence Tipper' },
    { value: 'isuzu-frr500', label: 'Isuzu FRR500 Tipper (6t Med Rigid)' }
  ],
  'non-destructive-excavation': [
    { value: 'hydro-excavation-trailer', label: 'Hydro Excavation Trailer' }
  ],
  'augers-rock-breakers': [
    { value: 'auger-150mm', label: 'Auger 150mm (Drill piece only)' },
    { value: 'auger-200mm', label: 'Auger 200mm (Drill piece only)' },
    { value: 'auger-250mm', label: 'Auger 250mm (Drill piece only)' },
    { value: 'auger-300mm', label: 'Auger 300mm (Drill piece only)' },
    { value: 'auger-350mm', label: 'Auger 350mm (Drill piece only)' },
    { value: 'auger-450mm', label: 'Auger 450mm (Drill piece only) Round drive' }
  ]
};

export default function EquipmentSelector() {
  const [category, setCategory] = useState('');
  const [equipmentItems, setEquipmentItems] = useState<{value: string, label: string}[]>([]);

  // Update equipment items when category changes
  useEffect(() => {
    if (category && equipmentByCategory[category as keyof typeof equipmentByCategory]) {
      setEquipmentItems(equipmentByCategory[category as keyof typeof equipmentByCategory]);
    } else {
      setEquipmentItems([]);
    }
  }, [category]);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Equipment Selection</h3>
      <div>
        <label htmlFor="equipment-category" className="block text-sm font-medium text-gray-700">Equipment Category</label>
        <select
          id="equipment-category"
          name="equipment-category"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="excavators">Excavators</option>
          <option value="skid-steer-loaders">Skid Steer Loaders</option>
          <option value="attachments">Attachments</option>
          <option value="compaction-equipment">Compaction Equipment</option>
          <option value="concrete-equipment">Concrete Equipment</option>
          <option value="tipper-trucks">Tipper Trucks</option>
          <option value="non-destructive-excavation">Non-Destructive Excavation</option>
          <option value="augers-rock-breakers">Augers & Rock Breakers</option>
        </select>
      </div>
      
      <div className="mt-6">
        <label htmlFor="equipment-item" className="block text-sm font-medium text-gray-700">Equipment Item</label>
        <select
          id="equipment-item"
          name="equipment-item"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
          disabled={!category}
        >
          <option value="">
            {category ? 'Select equipment' : 'Please select a category first'}
          </option>
          {equipmentItems.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
