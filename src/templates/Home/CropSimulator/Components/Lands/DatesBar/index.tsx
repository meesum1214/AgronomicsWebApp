export default ({day1, day2}: {day1:string, day2:string}) => (
  <ol className="flex my-6 w-full">
    <li className="relative w-[33%] text-center text-sm font-light after:content-[''] after:absolute after:left-[50%] after:bottom-[100%]">
    </li>

    <li className="relative w-[33%] text-center text-sm font-light before:content-[''] before:absolute before:left-[-50%] before:bottom-[calc(100%+0.5rem)] before:w-full before:h-1 
            before:bg-black after:content-[''] after:absolute after:left-[50%] after:bottom-[100%] after:w-5 after:h-5 after:bg-black after:rounded-full after:z-50">
      Day: {day1}
    </li>

    <li className="relative w-[33%] text-center text-sm font-light before:content-[''] before:absolute before:left-[-50%] before:bottom-[calc(100%+0.5rem)] before:w-full before:h-1 before:bg-black after:content-[''] after:absolute after:left-[50%] after:bottom-[100%] after:w-5 after:h-5 after:bg-black after:rounded-full after:z-50">
      Day: {day2}
    </li>

    <li className="relative w-[33%] text-center text-sm font-light italic before:content-[''] before:absolute before:left-[-50%] before:bottom-[calc(100%+0.5rem)] before:w-full before:h-1 before:bg-gray-300"></li>
  </ol>
)