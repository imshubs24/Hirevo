import { useState } from "react";
import { createCompany } from "../../../services/companyService";

const CreateCompanyModal = ({ close, refresh }) => {

    const [form, setForm] = useState({
        name: "",
        website: "",
        location: "",
        description: "",
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
            await createCompany(form);
            refresh();
            close();
        } catch (error) {
            console.error("Failed to create company");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow">

                <h2 className="text-xl font-semibold text-gray-900 mb-5">
                    Add Company
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        name="name"
                        placeholder="Company name"
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        name="website"
                        placeholder="Website"
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        name="location"
                        placeholder="Location"
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        rows="3"
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <div className="flex justify-end gap-3 pt-2">

                        <button
                            type="button"
                            onClick={close}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                        >
                            Create
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default CreateCompanyModal;