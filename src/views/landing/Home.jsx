import DataTable from "@/components/atoms/DataTablesExamplesSort";
import toast, { Toaster } from "solid-toast";
const notify = () => toast("Here is your toast.");
const notifySuccess = () => toast.success("Here is your toast Success.");
const notifyError = () => toast.success("Here is your toast Success.");
const Home = () => {
  return (
    <>
      <div>
        <Toaster position="bottom-right" gutter={8} />
        <div class="w-full justify-center text-center py-4 px-4 shadow-sm">
          <h1>Ini Home</h1>{" "}
        </div>
        <div class="py-4 px-4 gap-4 space-x-4">
          <button class="btn btn-sm btn-primary" onClick={notify}>
            Notifikasi
          </button>
          <button class="btn btn-sm btn-success" onClick={notifySuccess}>
            Notifikasi Success
          </button>
          <button class="btn btn-sm btn-error" onClick={notifyError}>
            Notifikasi Error
          </button>
        </div>
        <div class="py-4 px-4 gap-4 space-x-4">
          <DataTable />
        </div>
      </div>
    </>
  );
};

export default Home;
