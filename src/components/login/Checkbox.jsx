import React from "react";

function Checkbox({name}) {
  return (
    <div class="flex  items-center mb-4 justify-center">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-[#038C8C] bg-pink-500  rounded-full border-[#038C8C] ring-[#038C8C] focus:ring-[#038C8C] dark:focus:ring-[#038C8C] dark:ring-offset-pink-500 focus:ring-2 dark:bg-pink-500 dark:border-pink-500 text-center accent-white" />
        <label for="default-checkbox" class="ml-1 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">{name}</label>
  </div>

  );
}


export default Checkbox