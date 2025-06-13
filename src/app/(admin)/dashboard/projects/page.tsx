import { DataTable } from "./components/data-table-project";

export default function ProjectsPage(){
    return (
        <div className=" h-full w-full mt-3 p-5">
        <h1 className="text-2xl font-bold">Projects</h1>
        <DataTable/>
        </div>
    );
}