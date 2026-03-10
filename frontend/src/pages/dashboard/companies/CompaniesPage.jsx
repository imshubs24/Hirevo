import { useEffect, useState } from "react";
import { getCompanies } from "../../../services/companyService";
import CreateCompanyModal from "./CreateCompanyModal";
import EditCompanyModal from "./EditCompanyModal";
import DeleteCompanyModal from "./DeleteCompanyModal";

const CompaniesPage = () => {
    const [companies, setCompanies] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const fetchCompanies = async () => {
        try {
            const data = await getCompanies();
            setCompanies(data);
        } catch (error) {
            console.error("Failed to fetch companies");
        }
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    return (
        <div>

            {/* Header */}
            <div className="flex justify-between items-center mb-6">

                <h1 className="text-2xl font-semibold text-gray-900">
                    Companies
                </h1>

                <button
                    onClick={() => setOpenModal(true)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                >
                    Add Company
                </button>

            </div>

            {/* Table */}
            <div className="bg-white border rounded-xl overflow-hidden">

                <table className="w-full text-left">

                    <thead className="bg-gray-50 border-b">
                        <tr>

                            <th className="p-4 text-sm font-medium text-gray-600">
                                Name
                            </th>

                            <th className="p-4 text-sm font-medium text-gray-600">
                                Website
                            </th>

                            <th className="p-4 text-sm font-medium text-gray-600">
                                Location
                            </th>

                            <th className="p-4 text-sm font-medium text-gray-600">
                                Created
                            </th>

                            <th className="p-4 text-sm font-medium text-gray-600">
                                Actions
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {companies.length === 0 && (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center p-6 text-gray-500"
                                >
                                    No companies added yet.
                                </td>
                            </tr>
                        )}

                        {companies.map((company) => (
                            <tr
                                key={company._id}
                                className="border-b hover:bg-gray-50"
                            >

                                <td className="p-4 font-medium text-gray-800">
                                    {company.name}
                                </td>

                                <td className="p-4 text-gray-600">
                                    {company.website || "-"}
                                </td>

                                <td className="p-4 text-gray-600">
                                    {company.location || "-"}
                                </td>

                                <td className="p-4 text-gray-600">
                                    {new Date(company.createdAt).toLocaleDateString()}
                                </td>

                                <td className="p-4 space-x-4">

                                    <button
                                        onClick={() => {
                                            setSelectedCompany(company);
                                            setEditModal(true);
                                        }}
                                        className="text-indigo-600 hover:underline cursor-pointer"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => {
                                            setSelectedCompany(company);
                                            setDeleteModal(true);
                                        }}
                                        className="text-red-500 hover:underline cursor-pointer"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {/* Modal */}
            {openModal && (
                <CreateCompanyModal
                    close={() => setOpenModal(false)}
                    refresh={fetchCompanies}
                />
            )}

            {/* Edit Modal */}
            {editModal && (
                <EditCompanyModal
                    company={selectedCompany}
                    close={() => setEditModal(false)}
                    refresh={fetchCompanies}
                />
            )}

            {/* Delete Modal */}
            {deleteModal && (
                <DeleteCompanyModal
                    company={selectedCompany}
                    close={() => setDeleteModal(false)}
                    refresh={fetchCompanies}
                />
            )}

        </div>
    );
};

export default CompaniesPage;