// "use client";

// import createTask from "@/lib/createTask";

// type CreateTaskModalProps = {
//     onClose: () => void;
// };

// export default function CreateTaskModal({ onClose }: CreateTaskModalProps) {

//     const handleSubmit = async (
//         e: React.FormEvent<HTMLFormElement>) => { 
//         e.preventDefault();

//         await createTask({
//             title,
//             description,
//             completed: false,
//             priority,
//         });
//         onClose();
//         }
//     );

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
//             <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl ">
//                 <div className="mb-5 flex items-center justify-between">
//                     <h2 className="text-xl font-semibold"> Create New Task</h2>
//                     <button onClick={onClose} className="text-xl">
//                         {" "}
//                         &times;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
