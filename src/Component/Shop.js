
const Shop = () => {

    const handleSubmit = event => {
        event.preventDefault();
        
        event.target.reset();
    }
    return (
        <div>
            <h1 className="text-5xl text-rose-800 font-bold">Shop List</h1>

            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <input
                                type="text"
                                name="shopname"
                                placeholder="Shop Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-5">
                            <select
                                name="area"  
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                                <option value="default" selected disabled>Select Area</option>
                                <option value="Ahmednagar">Ahmednagar</option>
                                <option value="Thane">Thane</option>
                                <option value="Pune">Pune</option>
                                <option value="Nashik">Nashik</option>
                                <option value="Nagpur">Nagpur</option>
                                <option value="Mumbai">Mumbai Suburban</option>
                                <option value="Solapur">Solapur</option>
                            </select>
                        </div>

                        <div className="mb-5">
                        <select
                                type="text"
                                name="category"   
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                                <option selected disabled>Select Category</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Butcher">Butcher</option>
                                <option value="Baker">Baker</option>
                                <option value="Chemist">Chemist</option>
                                <option value="Stationery">Stationery shop</option>
                            </select>
                        </div>

                        
                            
                        <div>
                            <button
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shop;