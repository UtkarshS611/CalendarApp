import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { X } from "lucide-react";

interface FormData {
  eventName: string;
  description: string;
  startTime: string;
  endTime: string;
}

interface FormProps {
  setEventFormOpen: (value: boolean) => void;
}

const Form: React.FC<FormProps> = ({ setEventFormOpen }) => {
  const handleClick = () => {
    setEventFormOpen(false);
  };

  const [formData, setFormData] = useState<FormData>({
    eventName: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    setFormData((prevData) =>
      Object.keys(prevData).reduce((acc: any, key) => {
        acc[key] = "";
        return acc;
      }, {} as FormData)
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-[20rem] relative space-y-2 shadow-lg pt-10 p-4 rounded-lg"
    >
      <Button onClick={handleClick} className="absolute top-2 right-2">
        <X/>
      </Button>
      <div className="text-start space-y-2">
        <Label htmlFor="name">Event Name</Label>
        <Input
          type="text"
          placeholder="Event One"
          id="name"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
        />
      </div>
      <div className="text-start space-y-2">
        <Label htmlFor="description">Desctiption</Label>
        <Input
          type="text"
          id="description"
          placeholder="John's birthday"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="text-start space-y-2">
        <Label htmlFor="startTime">Start Time</Label>
        <Input
          type="text"
          id="startTime"
          placeholder="9:00 AM"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
        />
      </div>
      <div className="text-start space-y-2">
        <Label htmlFor="endTime">End Time</Label>
        <Input
          type="text"
          id="endTime"
          placeholder="10:00 PM"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
