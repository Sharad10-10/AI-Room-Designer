import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const SelectRoomType = ({selectedRoomType}) => {

  return (
    <div>
      <Select onValueChange = {(value)=> selectedRoomType(value)}>
        <SelectTrigger className="w-[full]">
          <SelectValue placeholder="Select a room type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Room Type</SelectLabel>
            <SelectItem value="Kitchen">Kitchen</SelectItem>
            <SelectItem value="Bedroom">Bedroom</SelectItem>
            <SelectItem value="Bathroom">Bathroom</SelectItem>
            <SelectItem value="Office">Office</SelectItem>
            <SelectItem value="Living Room">Living Room</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectRoomType;
