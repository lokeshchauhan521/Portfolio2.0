const rows = [...new Array(7)]
const cols = [...new Array(10)]

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 bg-white dark:bg-dark">
      <div className="absolute top-0 left-0 w-1/2 -z-50">
        <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tl from-white dark:from-dark from-50% via-90% to-100% via-transparent to-transparent" />
        <div className="flex flex-col w-full h-full border-t border-l divide-y divide-dashed divide-neutral-300 dark:divide-dark-700 border-neutral-300 dark:border-dark-900">
          {rows.map((_, i) => (
            <div
              key={i}
              className="relative flex w-full divide-x divide-neutral-300 dark:divide-dark-700 divide-dashed"
            >
              {cols.map((_, j) => (
                <div key={j} className="w-full aspect-square" />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 -z-50">
        <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-white dark:from-dark from-50% via-90% to-100% via-transparent to-transparent" />
        <div className="flex flex-col w-full h-full border-t border-l divide-y divide-dashed divide-neutral-300 dark:divide-dark-700 border-neutral-300 dark:border-dark-900">
          {rows.map((_, i) => (
            <div
              key={i}
              className="relative flex w-full divide-x divide-neutral-300 dark:divide-dark-700 divide-dashed"
            >
              {cols.map((_, j) => (
                <div key={j} className="w-full aspect-square" />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 w-1/2 aspect-video grid grid-cols-[repeat(10,1fr)] divide-dashed divide-x divide-y divide-dark-300 dark:divide-dark-600">
        {rows.map((_, i) =>
          cols.map((_, j) => <div key={`${i},${j}`} className="size-full" />)
        )}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tl from-white dark:from-dark from-50% via-90% to-100% via-transparent to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-1/2 aspect-video grid grid-cols-[repeat(10,1fr)] divide-dashed divide-x divide-y divide-dark-300 dark:divide-dark-600">
        {rows.map((_, i) =>
          cols.map((_, j) => <div key={`${i},${j}`} className="size-full" />)
        )}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white dark:from-dark from-50% via-90% to-100% via-transparent to-transparent" />
      </div> */}

      {/* <div className="absolute top-0 right-0 w-1/2 aspect-square grid grid-cols-[repeat(10,1fr)]">
        {rows.map((_, i) =>
          cols.map((_, j) => <div key={`${i},${j}`} className="size-full" />)
        )}
        <div className="absolute inset-0 size-full pointer-events-none bg-gradient-to-tr from-white dark:from-dark from-50% via-90% to-100% via-transparent to-transparent" />
      </div> */}
    </div>
  )
}
// const Background = () => {
//   return (
//     <div className="fixed-all -z-50 bg-white dark:bg-dark">
//       <div className="absolute top-0 left-0 w-1/3 aspect-square grid grid-cols-[repeat(6,1fr)] ">
//         {arr.map((_, i) =>
//           arr.map((_, j) => (
//             <div
//               key={`${i},${j}`}
//               className="size-full aspect-square border border-gray-300 border-dashed"
//             />
//           ))
//         )}
//         <div className="absolute inset-0 pointer-events-none bg-gradient-to-tl from-white dark:from-dark from-50% via-90% to-100% via-transparent to-transparent" />
//       </div>
//       <div className="absolute top-0 right-0 w-1/3 aspect-square grid grid-cols-[repeat(6,1fr)]">
//         {arr.map((_, i) =>
//           arr.map((_, j) => (
//             <div
//               key={`${i},${j}`}
//               className="size-full aspect-square border border-gray-300 border-dashed"
//             />
//           ))
//         )}
//         <div className="absolute inset-0 size-full pointer-events-none bg-gradient-to-tr from-white dark:from-dark from-50% via-90% to-100% via-transparent to-transparent" />
//       </div>
//     </div>
//   )
// }

export default Background
