import { useState } from "react";
import { updateCompany } from "../../../services/companyService";

const EditCompanyModal = ({ company, close, refresh }) => {

    const [form, setForm] = useState({
        name: company.name || "",
        website: company.website || "",
        location: company.location || "",
        description: company.description || ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateCompany(company._id, form);
            refresh();
            close();
        } catch (error) {
            console.error("Failed to update company");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow">

                <h2 className="text-xl font-semibold mb-5">
                    Edit Company
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />

                    <input
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />

                    <input
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />

                    <textarea
                        name="description"
                        rows="3"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />

                    <div className="flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={close}
                            className="px-4 py-2 border rounded-lg cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer"
                        >
                            Update
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default EditCompanyModal;