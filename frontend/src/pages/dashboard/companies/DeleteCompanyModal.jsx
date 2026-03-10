import { deleteCompany } from "../../../services/companyService";

const DeleteCompanyModal = ({ company, close, refresh }) => {

    const handleDelete = async () => {
        try {
            await deleteCompany(company._id);
            refresh();
            close();
        } catch (error) {
            console.error("Failed to delete company");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow">

                <h2 className="text-lg font-semibold mb-4">
                    Delete Company
                </h2>

                <p className="text-gray-600 mb-6">
                    Are you sure you want to delete <b>{company.name}</b>?
                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={close}
                        className="px-4 py-2 border rounded-lg cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleDelete}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
};

export default DeleteCompanyModal;